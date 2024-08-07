/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_popup                                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals window, document */
/* globals setTimeout, clearTimeout */
/* globals getComputedStyle */

/* exported dom_popup, DOM_POPUP_JS_TAG */

/* eslint-disable no-warning-comments */
/*
:update|1,$y *
:!start explorer https://jshint.com/
*/

const DOM_POPUP_JS_ID         = "dom_popup_js";
const DOM_POPUP_JS_TAG        =  DOM_POPUP_JS_ID +" (240530:17h:59)";
/*}}}*/
let dom_popup = (function() {
"use strict";

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ LOG POPUP                                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ log_popup , log_popup_warn {{{*/
/*{{{*/
const CAPTURE_TRUE_PASSIVE_FALSE  = { capture: true , passive: false , useCapture: true };
const LOG_POPUP_DIV_DURATION      =   3000;

const LOG_POPUP_STYLE             = { backgroundColor: "rgba(255,255,0,0.9)" , fontSize: "100%" };
const LOG_POPUP_STYLE_WARN        = { backgroundColor: "rgba(255,165,0,0.8)" , fontSize: "150%" };

const THEME_STYLE_DARK  =  "color: #F00 !important; background-color: transparent; font-weight:900;";
const THEME_STYLE_LIGHT =  "color: #F00 !important; background-color: transparent; font-weight:900;";

let   log_popup_div;
let   log_popup_div_timeout;
/*}}}*/
let log_popup_warn = function(msg) { log_popup({ message_HTML: msg , style: LOG_POPUP_STYLE_WARN } ); };
let log_popup      = function(args)
{
    let { message_HTML , xy , style=LOG_POPUP_STYLE , options="" , theme_dark } = args || {};
    /* CREATE {{{*/
    if(!log_popup_div)
        log_popup_div_get();

    /*}}}*/
    /* LOG OR WARN {{{*/
    log_popup_div.style.backgroundColor = style.backgroundColor || LOG_POPUP_STYLE.backgroundColor;
    log_popup_div.style.fontSize        = style.fontSize        || LOG_POPUP_STYLE.fontSize;

    /*}}}*/
    /* HIDE {{{*/
    if(!message_HTML)
    {
        log_popup_div.style.display = "none";

        return;
    }
    /*}}}*/
/* DISPLAY {{{*/

    let   theme_style
        = theme_dark
        ? THEME_STYLE_DARK
        : THEME_STYLE_LIGHT
    ;

    log_popup_div.innerHTML
        = "<pre style='"+theme_style+"'>"
        +  message_HTML
        + "</pre>"
    ;

    log_popup_div.style.display = "block";

    log_popup_div.classList.remove("above" );
    log_popup_div.classList.remove("center");
    /*}}}*/
    /* xy default to viewport center {{{*/
    if( !xy ) {
        let   bcr    = log_popup_div.getBoundingClientRect();

        xy = { x: window.innerWidth/2 - bcr.width/2, y: window.innerHeight/2 - bcr.height/2 };
        log_popup_div    .classList.add("center");
    }
    /*}}}*/
    /* xy apply {{{*/
    if( xy )
    {
        log_popup_div.style.top  = Math.max(0, xy.y)+"px";
        log_popup_div.style.left = Math.max(0, xy.x)+"px";
    }
    /*}}}*/
    /* HIDE .. f(setTimeout) {{{*/
    if(log_popup_div_timeout) clearTimeout( log_popup_div_timeout );

    if(!options || !options.includes("fixed"))
    {
        log_popup_div_timeout
            =   setTimeout(
                           function() {
                               if( log_popup_div.style.backgroundColor != LOG_POPUP_STYLE_WARN.backgroundColor)
                                   log_popup_div.style.display = "none";

                               log_popup_div_timeout = null;
                           }
                           , LOG_POPUP_DIV_DURATION);
    }
    /*}}}*/
};
/*}}}*/
/*_ log_popup_div_get {{{*/
/*{{{*/
const LOG_POPUP_DIV_ZINDEX = 2147483647;

/*}}}*/
let log_popup_div_get = function()
{
    if(log_popup_div) return log_popup_div;

    /* create {{{*/
    log_popup_div = document.createElement("DIV");
    log_popup_div.id = "log_popup_div";

    /*}}}*/
    /* style {{{*/
    log_popup_div.style.position        = "fixed";
    log_popup_div.style.left            = (window.innerWidth/2)+"px";
    log_popup_div.style.top             = "1em";
    log_popup_div.style.zIndex          = LOG_POPUP_DIV_ZINDEX;

    log_popup_div.style.borderRadius    = "0 0.5em 0.5em 0";
    log_popup_div.style.borderStyle     = "solid";
    log_popup_div.style.borderWidth     = "2px 2px 2px 2px";
    log_popup_div.style.borderColor     = "#AAA";
    log_popup_div.style.boxShadow       =  "3px 3px 5px #888";

    log_popup_div.style.cursor          =  "pointer";
    log_popup_div.style.userSelect      =  "none";

    log_popup_div.style.padding         = "0.5em";
    /*}}}*/
    /* [mousedown] {{{*/
    log_popup_div.addEventListener("mousedown", log_popup_mouse_down_handler, CAPTURE_TRUE_PASSIVE_FALSE);

    /*}}}*/
    document.documentElement.appendChild(log_popup_div); /* HTML as the parent */

    return log_popup_div;
};
/*}}}*/
/*_ log_popup_mouse_down_handler {{{*/
let log_popup_mouse_down_handler = function(e) /* eslint-disable-line no-unused-vars */
{
if(e && e.ctrlKey) return;
if(e && e.altKey ) return;

    /* 1. STICK */
    if( log_popup_div.style.backgroundColor != LOG_POPUP_STYLE_WARN.backgroundColor)
        log_popup_div.style.backgroundColor  = LOG_POPUP_STYLE_WARN.backgroundColor;
    /* 2. HIDE */
    else
        log_popup_hide();

};
/*}}}*/
/*_ log_popup_hide {{{*/
let log_popup_hide = function()
{
    if( log_popup_div )
        log_popup_div.style.display = "none";
};
/*}}}*/
/*_ log_popup_follow_mask_el {{{*/
let log_popup_follow_mask_el = function(text,el)
{
    log_popup_scrollTo_el(text,el,true);
};
/*}}}*/
/*➔ log_popup_scrollTo_el {{{*/
/*{{{*/
const MARGIN_WIDTH = 10;

/*}}}*/
let log_popup_scrollTo_el_warn = function(text,el) { log_popup_scrollTo_el(text, el, false, true, LOG_POPUP_STYLE_WARN); };
let log_popup_scrollTo_el = function(text,el,with_mask,can_scroll=true,style=LOG_POPUP_STYLE)
{
    /* [tl_xy] {{{*/
    if(!log_popup_div)
        log_popup_div_get();

    let tl_xy;
    if( el )
    {
        /* SCROLL EL INTO VIEW {{{*/
        let w_top    = (window.scrollY                     ) + MARGIN_WIDTH;
        let w_bottom = (window.scrollY + window.innerHeight) - MARGIN_WIDTH;

        let    xy    = get_el_ancestor_xy(el);
        tl_xy        = { x: window.scrollX+ xy.x , y: window.scrollY+ xy.y };

        let had_to_scroll;
        if     (tl_xy.y > w_bottom) { window.scrollTo(window.scrollX, tl_xy.y - window.innerHeight/10); had_to_scroll = true; }
        else if(tl_xy.y < w_top   ) { window.scrollTo(window.scrollX, tl_xy.y - window.innerHeight/10); had_to_scroll = true; }

        let scrollBehavior = getComputedStyle(document.documentElement).scrollBehavior;

        if(can_scroll && had_to_scroll && (scrollBehavior == "smooth"))
        {
            log_popup_div.style.display = "none";

            setTimeout(function() { log_popup_follow_el_on_scroll_done(text,el,with_mask); }, SCROLL_SAMPLING_DELAY);

            return;
        }
        /*}}}*/
        /* ONCE SCROLLED INTO VIEW {{{*/
        let bcr      = el.getBoundingClientRect();
        tl_xy        = { x: bcr.left , y: bcr.top };

/*{{{
log_key_val("log_popup_scrollTo_el("+get_id_or_tag(el)+")"
            , { tl_xy        : "["+       tl_xy.x.toFixed(0) +" "+      tl_xy.y.toFixed(0) +"]"
              , W_XY         : "["+         w_top.toFixed(0) +" "+     w_bottom.toFixed(0) +"]"
            })
}}}*/

        /*}}}*/
    }
    /*}}}*/
    /* first layout {{{*/
    log_popup({ message_HTML: text , xy: tl_xy , style });

    /*}}}*/
    /* move popup bottom above target element {{{*/
    tl_xy.y -= log_popup_div.offsetHeight; /* right above target */

    /*}}}*/
    /* over the top {{{*/
    if( tl_xy.y  < 0)
    {
        let   xy = get_el_ancestor_xy(el);
        tl_xy.y  =  xy.y + MARGIN_WIDTH;
        tl_xy.x  =  xy.x + MARGIN_WIDTH;

        let x_max = window.innerWidth - log_popup_div.offsetWidth ;
        tl_xy.x  = Math.min(tl_xy.x, x_max);

        log_popup_div.classList.remove("above");
    }
    else {
        log_popup_div.classList.add   ("above");
    }
    /*}}}*/
    /* adjust layout {{{*/
    log_popup_div.style.top   = tl_xy.y+"px";
    log_popup_div.style.left  = tl_xy.x+"px";

    /*}}}*/
    if(with_mask) div_mask_follow_el( el );
};
/*}}}*/
/*_ log_popup_follow_el_on_scroll_done {{{*/
/*{{{*/
const SCROLL_SAMPLING_DELAY = 100;

let last_scroll_Y;
/*}}}*/
let log_popup_follow_el_on_scroll_done = function(text,el,with_mask)
{
    /* SCROLL STILL IN PROGRESS */
    if(window.scrollY != last_scroll_Y)
    {
        last_scroll_Y = window.scrollY;
        setTimeout(function() { log_popup_follow_el_on_scroll_done(text,el,with_mask); }, SCROLL_SAMPLING_DELAY);
        return
    }
    /* SCROLL DONE */
    log_popup_scrollTo_el(text,el,with_mask,false); /* !can_scroll, only once */
};
/*}}}*/
/*➔ log_popup_div_handles_event {{{*/
let log_popup_div_handles_event = function(e,_caller) /* eslint-disable-line no-unused-vars */
{
    let result = is_el_child_of_el(e.target, log_popup_div);

    return result;
};
/*}}}*/
/*➔ log_popup_addEventListener {{{*/
let log_popup_addEventListener = function(type,handler)
{
    if( !log_popup_div_get() ) return;

    log_popup_div.addEventListener(type, handler, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/
/*_ get_el_ancestor_xy {{{*/
/* ...cloned from lib_util... */
let get_el_ancestor_xy = function(el)
{
    let     bcr = el.getBoundingClientRect();
    while(el && !bcr.width && !bcr.height)
    {
        el = el.parentElement;             /* looking for a visible ancestor */
        if(  el )
            bcr = el.getBoundingClientRect();
    }
    return { x: bcr.x , y: bcr.y } ;
};
/*}}}*/
/*_ is_el_child_of_el {{{*/
/* ...cloned from lib_util... */
let is_el_child_of_el = function(el, el_parent)
{
    while(el && el_parent && (el != el_parent) && (el = el.parentElement)) /* eslint-disable-line no-param-reassign */
        ;
    return (el == el_parent);
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ DIV MASK                                                                 │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*{{{*/
const DIV_MASK_BG = "rgba(70,70,70,0.8)";

let   div_mask;
/*}}}*/
/*➔ div_mask_get {{{*/
let div_mask_get = function()
{
    if(!div_mask)
        div_mask_create();

    return div_mask;
};
/*}}}*/
/*_ div_mask_create {{{*/
let div_mask_create = function()
{
    if(div_mask) return div_mask;
    /* CREATE {{{*/
    div_mask = document.createElement("DIV");
    div_mask.id                     = "div_mask";
    div_mask.style.position         = "fixed";
    div_mask.style.cursor           = "crosshair";
    div_mask.style.zIndex           = "2147483645"; /* 1 bellow div_tools */

    div_mask.style.margin           = "0";
    div_mask.style.padding          = "0";

    div_mask.style.backgroundColor  = "rgba(136,136,136,0.3)";

    document.documentElement.appendChild(div_mask);

    /*}}}*/
    div_mask.style.backgroundPositionX = "0";
    div_mask.style.backgroundPositionY = "0";

    return div_mask;
};
/*}}}*/
/*➔ div_mask_hide {{{*/
let div_mask_hide = function()
{
    if( div_mask )
        div_mask.classList.remove("displayed");

};
/*}}}*/
/*➔ div_mask_show {{{*/
let div_mask_show = function()
{
    if( div_mask )
        div_mask.classList.add   ("displayed");

};
/*}}}*/
/*➔ div_mask_repeat {{{*/
let div_mask_repeat = function()
{
    if( !div_mask_get() ) return;

    /* SET GRID MASK */
    div_mask.style.backgroundImage
        =  "linear-gradient( 0deg, rgba(255,255,255,0.7) 2px, transparent 2px)"
        + ",linear-gradient(90deg, rgba(255,255,255,0.7) 2px, transparent 2px)";
    div_mask.style.backgroundRepeat = "repeat";
    div_mask.style.backgroundSize   = "3em 3em";

    div_mask_show();
};
/*}}}*/
/*➔ div_mask_follow_el {{{*/
let div_mask_follow_el = function(el)
{
    if( !div_mask_get() ) return;

    /* SET FRAME MASK */
    let bcr = el.getBoundingClientRect();
    let x_1 = (      bcr.left  );
    let x_2 = (x_1 + bcr.width );
    let y_1 = (      bcr.top   );
    let y_2 = (y_1 + bcr.height);

/*{{{
log_key_val("div_mask_follow_el("+lib_util.get_id_or_tag(el)+")"
            , {   EL_XX  : "["+x_1.toFixed(0) +" "+ x_2.toFixed(0)+"]"
                , EL_YY  : "["+y_1.toFixed(0) +" "+ y_2.toFixed(0)+"]"
            });
}}}*/

    div_mask.style.backgroundImage
        =  "linear-gradient( 90deg, "+DIV_MASK_BG+" "+x_1+"px, transparent "+x_1+"px, transparent "+x_2+"px, "+DIV_MASK_BG+" "+x_2+"px)"
        + ",linear-gradient(180deg, "+DIV_MASK_BG+" "+y_1+"px, transparent "+y_1+"px, transparent "+y_2+"px, "+DIV_MASK_BG+" "+y_2+"px)"
    ;
    div_mask.style.backgroundSize   = "100% 100%";
    div_mask.style.backgroundRepeat = "no-repeat";

    div_mask_show();

};
/*}}}*/
/*➔ div_mask_addEventListener {{{*/
let div_mask_addEventListener = function(type,handler)
{
    if( !div_mask_get() ) return;

    div_mask.addEventListener(type, handler, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/

/* EXPORT {{{*/
return { name : "dom_popup"

    /*   LIB_POPUP */
    ,    log_popup
    ,    log_popup_addEventListener
    ,    log_popup_div_get
    ,    log_popup_div_handles_event
    ,    log_popup_follow_mask_el
    ,    log_popup_hide
    ,    log_popup_scrollTo_el
    ,    log_popup_scrollTo_el_warn
    ,    log_popup_warn

    /*   DIV_MASK */
    ,    div_mask_get
    ,    div_mask_hide
    ,    div_mask_repeat
    ,    div_mask_follow_el
    ,    div_mask_addEventListener
};
/*}}}*/
})();
/*{{{
:e C:/LOCAL/DATA/ANDROID/PROJECTS/iwintoo/lib/lib_popup.js
:e C:/LOCAL/DATA/ANDROID/PROJECTS/iwintoo/lib/lib_util.js
:e C:/LOCAL/DATA/ANDROID/PROJECTS/iwintoo/XPH/stylesheet/dom_host.css
:e stylesheet/dom_host.css
}}}*/
