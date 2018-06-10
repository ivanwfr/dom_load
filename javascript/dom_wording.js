javascript: (function(){
/*dom_wording 'use strict';*/
DOM_WORDING_JS_ID       = 'dom_wording_js';
DOM_WORDING_JS_TAG      = DOM_WORDING_JS_ID +' (180601:17h)'; let tag = DOM_WORDING_JS_TAG;
let DOM_WORDING_CSS_ID  = 'dom_wording_css';
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
/*}}}*/
/*_ dom_wording_cycle {{{*/
dom_wording_cycle = function(stage='OFF', anchor_freeze=true)
{
    let caller = "dom_wording_cycle(stage=["+stage+"], anchor_freeze=["+anchor_freeze+"])";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log(caller);

    if(!dom_wording_css && !dom_wording_inject()) return;

    dom_wording_css.className
        = (    stage          && (stage  != 'CYCLE')) ?  stage  /* stage set argument */
        : (    dom_wording_css.className == 'DARK' )  ? 'LIGHT' /* stage 1 to stage 2 */
        : (    dom_wording_css.className == 'LIGHT')  ? 'OFF'   /* stage 2 to stage 3 */
        :                                               'DARK'  /* ...back to stage 0 */
        ;

/*
    dom_wording_by_href (anchor_freeze);
*/
    dom_wording_activate(anchor_freeze);

};
/*}}}*/
/*_ dom_wording_activate {{{*/
let dom_wording_activate = function(anchor_freeze)
{
    /*{{{*/
    let caller = "dom_wording_activate(anchor_freeze "+anchor_freeze+")";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log(caller);

    /*}}}*/
    /* COMPOSE .. [W]ord [A]nchor [L]ight [D]ark {{{*/
    let anchor = anchor_freeze ? "a" : "A";

    let wording, theme;
    switch( dom_wording_css.className ) {
        case 'DARK' : wording = "W" ; theme = "D"; break;
        case 'LIGHT': wording = "W" ; theme = "L"; break;
        default:
        case 'OFF'  : wording = "w" ; theme = "" ; break;
    }
    /*}}}*/
    /* ACTIVATE ONE OF THE PRELOADED WORDING CSS {{{*/
    let key
        = theme
        + wording
        + anchor
    ;
    let el = css_map.get(key);
    if( el) {
        for(let [k, v] of css_map) {
            v.disabled = (k != key);
if(log_this && !v.disabled) log("PRELOADED WORDING CSS ENABLED: %c "+k+" %c"+ ellipsis(el.href, 64), lbF, lb7);
        }
    }
    else {
        console_warn("*** "+caller+": ["+key+"] NOT FOUND IN PRELOADED [css_map]");
    }
    /*}}}*/
    /* ADD-REMOVE CLICK EVENT LISTENER {{{*/
    if(anchor_freeze) document.body.addEventListener   ('click', dom_wording_capture_click, true);
    else              document.body.removeEventListener('click', dom_wording_capture_click, true);
    /*}}}*/
};
/*}}}*/
/*_ dom_wording_inject {{{*/
let dom_wording_css;
let dom_wording_inject = function()
{
    if(!dom_wording_css) dom_wording_init();
    return dom_wording_css;
};
/*}}}*/
/*_ dom_wording_init {{{*/
let css_map = new Map();

let anchor_on;
let anchor_off;
let wording_on;
let wording_off;
let light_theme;
let dark_theme;

let dom_wording_init = function()
{
let caller = "dom_wording_init";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log(caller+": INSERTING ["+DOM_WORDING_CSS_ID+"]");
    /* anchor on-off {{{*/
    anchor_on
        = ''
/*      + ' html     {                margin : 8px                     !important; }'*/
        + ' a        {                 color : initial;                            }'
        + ' a        {      background-color : initial;                            }'
/*      + ' a        {           font-weight : initial;                            }'*/
        + ' a, input { text-decoration-style : initial;                            }'
/*{{{
            + ' a,  a *  {        pointer-events : initial;                       }'
            + '     a em {        pointer-events : initial;                       }'
}}}*/
    ;

    anchor_off
        = ''
/*      + ' html     {                margin : 8px                     !important; }'*/
        + ' a, a *   {                cursor : text;                               }'
        + ' a        {                 color : #222                    !important; }'
        + ' a        {      background-color : rgba(128,128,128,0.5)   !important; }'
        + ' .toolbag_button {           cursor : not-allowed;                      }'
        + ' .toolbag_button {            color : #222                  !important; }'
        + ' .toolbag_button { background-color : rgba(128,128,128,0.5) !important; }'
/*      + ' a        {           font-weight : 800                     !important; }'*/
/*{{{
        + ' a,  a *  {               pointer-events : none             !important; }'
        + '     a em {               pointer-events : none             !important; }'
        + '.select_words_exact     { pointer-events : initial          !important; }'
        + '.select_words_head_tail { pointer-events : initial          !important; }'
        + '.select_words_segment   { pointer-events : initial          !important; }'
}}}*/
    ;
    /*}}}*/
    /* wording on-off {{{*/
    wording_on
        = ''
/*      + ' html     {               outline : 50px dashed rgba(64,0,255,0.7);     }'*/
/*      + ' body     {         margin-bottom : 100%;                               }'*/
        + ' a, input { text-decoration-style : solid;                              }'
/*      + ' *        {         overflow      : visible                 !important; }'*/
    /*{{{
        + ' a *      {                cursor : pointer                !important; }'
        + ' a em     {                cursor : all-scroll             !important; }'
        + ' a, a *   {                cursor : text                   !important; }'
        + ' a, input { text-decoration-line  : line-through           !important; }'
        + ' a:visited{                cursor : cell                   !important; }'
}}}*/
    ;

    wording_off
        = ''
        + ' html     {               outline : 8px dotted #4448;                  }'
/*{{{
        + ' html     {               outline : 8px solid transparent  !important; }'
        + ' body     {                border : initial;                           }'
        + ' *        {                 color : initial                !important; }'
        + ' *        {            background : initial                !important; }'
        + ' a        {                 color : initial                !important; }'
        + ' a, input { text-decoration-color : initial                !important; }'
        + ' a, input { text-decoration-line  : initial                !important; }'
        + ' a:visited{                cursor : initial                !important; }'
}}}*/
    ;


    /*}}}*/
    /* theme light dark {{{*/
    light_theme = ''
        + ' :not(em) {                 color : #333                   !important; }'
        + ' :not(em) {            background : rgba(238,238,238,0.86) !important; }'
/*
        + ' a        {            background : rgba(221,187,187,0.53) !important; }'
        + ' a, input { text-decoration-color : #0AF                   !important; }'
*/
    ;

    dark_theme
        = ''
        + ' :not(em) {                 color : #CCC                   !important; }'
        + ' :not(em) {            background : rgba(017,017,017,0.86) !important; }'
/*
        + ' a        {            background : rgba(051,000,000,0.53) !important; }'
        + ' a, input { text-decoration-color : #0F0                   !important; }'
*/
    ;

    /*}}}*/
    /* DOM_WORDING_JS_TAG {{{*/
    let         sig = "#"+DOM_WORDING_CSS_ID+" { content: "+DOM_WORDING_JS_TAG+"; } ";
    let          id = DOM_WORDING_CSS_ID;
    let        data = 'data:text/css,'+escape( sig );

    dom_wording_css = dom_wording_inject_css(id, data);
    /*}}}*/
    /* DOM_WORDING CSS PRELOAD .. [W]ord [A]nchor [L]ight [D]ark {{{*/

    id="DWA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +dark_theme  +wording_on  +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="LWA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +light_theme +wording_on  +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="DWa"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +dark_theme  +wording_on  +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="LWa"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +light_theme +wording_on  +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
                                                                        
    id= "wA"; data= 'data:text/css,'+escape("/*_"+id+"_*/"              +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="DwA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +dark_theme  +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="LwA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +light_theme +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id= "wa"; data= 'data:text/css,'+escape("/*_"+id+"_*/"              +wording_off +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);

/*{{{
for(let [k, v] of css_map) log(". k=["+k+"] v=["+ellipsis(v, 64)+"]");
}}}*/
    /*}}}*/
};
/*}}}*/
/*_ dom_wording_inject_css {{{*/
let dom_wording_inject_css = function(id, link_or_data)
{
    let el  = document.createElement("link");
    el.id   = id;
    el.rel  = "stylesheet";
    el.type = "text/css";
    el.href = link_or_data;
    document.getElementsByTagName("head")[0].appendChild(el);
    return el;
};
/*}}}*/
/*_ dom_wording_by_href {{{*/
let dom_wording_by_href = function(anchor_freeze)
{
/*
log("dom_wording_by_href(anchor_freeze "+anchor_freeze+")");
*/
    let          sig = "#"+DOM_WORDING_CSS_ID+" { content: "+DOM_WORDING_JS_TAG+"; } ";
    let anchor_style = anchor_freeze ? anchor_off : anchor_on;

    let data;
    switch( dom_wording_css.className )
    {
        default:
        case "DARK" : data = sig + anchor_style + wording_on  + dark_theme ; break;
        case "LIGHT": data = sig + anchor_style + wording_on  + light_theme; break;
        case "OFF"  : data = sig + anchor_style + wording_off              ; break;

    }
    dom_wording_css. href = "data:text/css,"+ escape( data );

    if(anchor_freeze) document.body.addEventListener   ('click', dom_wording_capture_click, true);
    else              document.body.removeEventListener('click', dom_wording_capture_click, true);
};
/*}}}*/
/*_ dom_wording_capture_click {{{*/
let dom_wording_capture_click = function(e)
{
    if( e.ctrlKey ) return;

    if( e.stopPropagation          ) e.stopPropagation();           /* stop bubbling phase #3 handlers */
    if( e.stopImmediatePropagation ) e.stopImmediatePropagation();  /* stop   target phase #2 handlers */
    if( e.preventDefault           ) e.preventDefault();            /* i.e. return false from within on<event> attribute handler */
/*
console.log("dom_wording_capture_click");
console.dir(e);
*/
};
/*}}}*/
})();
