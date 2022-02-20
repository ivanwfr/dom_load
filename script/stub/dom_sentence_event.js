/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_sentence_event              [dom_sentence]..[dom_tools] dependencies │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals console, window */ /* eslint-disable-line no-unused-vars */
/* globals setTimeout, clearTimeout */
/* globals dom_sentence, dom_scroll, dom_log, dom_util, dom_sentence_util */
/* globals chrome, document */

/* exported DOM_SENTENCE_EVENT_JS_TAG, dom_sentence_event */

/* eslint-disable no-warning-comments */

const DOM_SENTENCE_EVENT_JS_ID  = "dom_sentence_event";
const DOM_SENTENCE_EVENT_JS_TAG = DOM_SENTENCE_EVENT_JS_ID +" (220220:23h:15)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let dom_sentence_event   = (function() {
"use strict";
let   DOM_SENTENCE_LOG  = false;


/* INLINE */
/* console {{{*/
/* eslint-disable no-unused-vars */

let { LF
    , dir
    , log
    , console_clear
    , log0
    , log1
    , log2
    , log3
    , log4
    , log5
    , log6
    , log7
    , log8
    , log9
    , lfX
}   = dom_log;

    /*  t_util {{{*/
    let t_util
        = (typeof dom_util           != "undefined") ? dom_util          /* script/dom_util.js */
        : (typeof dom_sentence_util  != "undefined") ? dom_sentence_util /* script/stub/dom_sentence_util.js */
        :                                              undefined
    ;

    /*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/* DOWN ➔ LONG_PRESS_ARM - log1*/
/*{{{*/
const CLICK_DURATION       = 250;
const LONG_PRESS_ARM_DELAY = CLICK_DURATION;
const LONG_PRESS_DELAY     = CLICK_DURATION;

let   long_press_timer;
let   long_press_arm_timer;
/*}}}*/
/*_ t_pointerdown_listener {{{*/
let t_pointerdown_listener = function(e)
{
if(e.altKey ) { console_clear("t_pointerdown_listener"); return; }
if(e.ctrlKey) { log(e.type+" IGNORED .. f(e.ctrlKey)" ); return; }

    set_onDown_XY(e);

    t_pointerdown_handler(e);
};
/*}}}*/
/*… t_pointerdown_handler {{{*/
let t_pointerdown_handler = function(e)
{
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

if( log_this) log1("→→ t_pointerdown_handler");
/*}}}*/
    let sentence_el = dom_sentence.t_SENTENCE_GET_EL_SENTENCE_CONTAINER(onDown_EL);
    if( sentence_el )
    {
if(log_this) log1("... ...sentence_el=["+sentence_el.tagName+"]"+LF);
        preventDefault(e);

        t_CURSOR_add_MOVE_LISTENER();
    }
    else {
if(log_this) log1("... NO sentence_el"+LF);

        add_long_press_arm_listener();
    }
};
/*}}}*/

/* DOWN ➔ LONG_PRESS_ARM ➔ LONG_PRESS - log6 */
/*_ add_long_press_arm_listener .. (call burst debouncer) {{{*/
let add_long_press_arm_listener = function()
{
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

if( log_this) log6("→ add_long_press_arm_listener");
/*}}}*/

    if(long_press_timer    ) clearTimeout(long_press_timer      ); long_press_timer = null;

    if(long_press_arm_timer) clearTimeout(long_press_arm_timer  );
    long_press_arm_timer =     setTimeout(long_press_arm_handler, LONG_PRESS_ARM_DELAY);
};
/*}}}*/
/*_ long_press_arm_handler {{{*/
let long_press_arm_handler = function()
{
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

if(log_this) log6("→→ long_press_arm_handler");
/*}}}*/
    long_press_arm_timer = null;

    if(long_press_timer) clearTimeout(long_press_timer);
    long_press_timer     = setTimeout(long_press_handler, LONG_PRESS_DELAY);
};
/*}}}*/
/*_ long_press_handler ➔ SENTENCE_SPLIT {{{*/
let long_press_handler  = function()
{
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

if(log_this) log6("→→→ long_press_handler");
/*}}}*/

    let { container , cells } = dom_sentence.t_SENTENCE_GET_EL_CONTAINER(onDown_EL, log_this);
    if(   container )
    {
        if( cells ) for(let i=0; i < cells.length; ++i) dom_sentence.t_SENTENCE_SPLIT( cells[i]  );
        else                                            dom_sentence.t_SENTENCE_SPLIT( container );
        dom_sentence.t_SENTENCE_SPLIT( container );
    }

    dom_scroll.t_scrollIntoViewIfNeeded_set_EL( container );
};
/*}}}*/

/* DOWN ➔ MOVE ➔ DRAG - log7 */
/*_ t_SENTENCE_drag_listener {{{*/
let t_SENTENCE_drag_listener = function(event)
{
if(event.altKey ) return;
if(event.ctrlKey) return;
/*{{{*/
let   caller = "t_SENTENCE_drag_listener";
let log_this = DOM_SENTENCE_LOG;

if( log_this) log7(caller);
/*}}}*/

    get_onMoveDXY(event, caller);

    if(onDown_EL && dom_sentence.t_SENTENCE_drag_DXY( onMoveDXY ))
    {
        /* next move from here */
/*{{{
        zap_onMoveDXY();
}}}*/
        drag_cursor.move_drag_cursor(event);
        event.preventDefault();
    }
    else if( drag_cursor.get_mouseUP_display_state() )
    {
        drag_cursor.move_drag_cursor(event);
    }
};
/*}}}*/
/*_ not moved enough {{{*/
/*{{{*/
const CSS_NOT_MOVED_ENOUGH = "not_moved_enough";

/*}}}*/
/*_ t_add_NOT_MOVED_ENOUGH {{{*/
let t_add_NOT_MOVED_ENOUGH   = function()
{
/*{{{
let log_this = DOM_SENTENCE_LOG;

if( log_this) log8("t_add_NOT_MOVED_ENOUGH");
}}}*/
    document.body.classList.add(      CSS_NOT_MOVED_ENOUGH );
    drag_cursor.add_drag_cursor_CSS_NOT_MOVED_ENOUGH();
};
/*}}}*/
/*_ t_del_NOT_MOVED_ENOUGH {{{*/
let t_del_NOT_MOVED_ENOUGH   = function()
{
/*{{{
let log_this = DOM_SENTENCE_LOG;

if(log_this) log7("t_del_NOT_MOVED_ENOUGH");
}}}*/
    document.body.classList.remove(   CSS_NOT_MOVED_ENOUGH);
    drag_cursor.del_drag_cursor_CSS_NOT_MOVED_ENOUGH();
};
/*}}}*/
/*}}}*/
/*_ move cooldown {{{*/
/*{{{*/
const CSS_MOVE_ON_COOLDOWN = "move_on_cooldown";

let move_on_cooldown_timer;
/*}}}*/
/*_ t_add_MOVE_ON_COOLDOWN {{{*/
let t_add_MOVE_ON_COOLDOWN   = function(time_left)
{
    if( move_on_cooldown_timer ) return;
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

/*}}}*/
if(log_this) log9("t_add_MOVE_ON_COOLDOWN");

    if( move_on_cooldown_timer ) clearTimeout( move_on_cooldown_timer );
    /**/move_on_cooldown_timer =   setTimeout( t_del_MOVE_ON_COOLDOWN, time_left);
    document.body.classList.add(      CSS_MOVE_ON_COOLDOWN );
    drag_cursor.add_drag_cursor_CSS_MOVE_ON_COOLDOWN();
};
/*}}}*/
/*_ t_del_MOVE_ON_COOLDOWN {{{*/
let t_del_MOVE_ON_COOLDOWN   = function()
{
    if(!move_on_cooldown_timer ) return;
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

if( log_this) log0("t_del_MOVE_ON_COOLDOWN");
/*}}}*/
    if( move_on_cooldown_timer) clearTimeout( move_on_cooldown_timer );
    /**/move_on_cooldown_timer = null;
    document.body.classList.remove(   CSS_MOVE_ON_COOLDOWN );
    drag_cursor.del_drag_cursor_CSS_MOVE_ON_COOLDOWN();

    zap_onMoveDXY(); /* next move from here */
};
/*}}}*/
/*}}}*/

/* UP - log5 */
/*_ t_pointerup_listener {{{*/
let t_pointerup_listener  = function(e)
{
if(e.button) return;
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

/*}}}*/
if( log_this) log5(LF+"→ t_pointerup_listener");

    t_pointerup_handler(e);

    /* RELOAD EXTENSION {{{*/
    if(   e.ctrlKey
       && chrome
       && chrome.runtime
       && chrome.runtime.sendMessage
      ) {
        log("%c RELOADING EXTENSION: ("+DOM_SENTENCE_EVENT_JS_TAG+")", "background-color:red; border:1px; border-radius:1em; padding:0.5em;");

        setTimeout(function() { chrome.runtime.sendMessage({ cmd : "reload" }); }, 1000);

/*{{{
        setTimeout(function() { document.location.reload();                     }, 2000);
}}}*/
        let el = document.createElement("DIV");
        el.innerHTML
            = "<button"
            + " onclick='document.location.reload();'"
            + " style='"
            + "  position        : fixed; left:"+(e.x)+"px; top:"+(e.y)+"px;"
            + "  border          : 3px solid black;"
            + "  border-radius   : 1em;"
            + "  padding         : 0.5em;"
            + "  color           : white;"
            + "  background-color: red;"
            + "  font-size       : 24px;"
            + "'>"
            + "reload message sent to background script..."
            + "<hr>"
            + "<b>...click here to reload this page</b>"
            + "</button"
        ;

        setTimeout(() => { console.log("BUTTON"); document.body.appendChild(el); }, 1000);
    }
    /*}}}*/
};
/*}}}*/
/*… t_pointerup_handler {{{*/
let t_pointerup_handler = function(e) /* eslint-disable-line no-unused-vars */
{
/*{{{*/
let   caller = "t_pointerup_handler";
let log_this = DOM_SENTENCE_LOG;

    let consumed_by                  = "";
/*}}}*/
    /* [t_CURSOR_del_MOVE_LISTENER] {{{*/
    let   this_MS                    = new Date().getTime();
    let   delayMS                    = onDown_MS ? (this_MS - onDown_MS) : 0;
    let   clicked                    = (delayMS < CLICK_DURATION);
/*{{{
    let { onDown_container , cells } = dom_sentence.t_SENTENCE_GET_EL_CONTAINER(onDown_EL, log_this);
}}}*/

    t_CURSOR_del_MOVE_LISTENER();

    /*}}}*/
    /* [t_SENTENCE_RESTORE_EL] {{{*/
    let   onDown_sentence_container  = t_util.get_el_parent_with_class(onDown_EL, "sentence_container");
    let   some_sentence_container    =          document.querySelector(          ".sentence_container");
    if(     clicked && onDown_sentence_container)
    {
        consumed_by = "UP ➔ ... RESTORE [onDown_sentence_container]";

        dom_sentence.t_SENTENCE_RESTORE_EL(onDown_sentence_container, e);
    }
    /*}}}*/
    /* [t_SENTENCE_RESTORE_ALL] {{{*/
    else if(clicked && some_sentence_container)
    {
        consumed_by = "UP ➔ ... CLICKED .. SENTENCE RESTORE ALL";

        dom_sentence.t_SENTENCE_RESTORE_ALL( e );
        some_sentence_container = document.querySelector(".sentence_container");
    }
    /*}}}*/
    /*{{{*/
    else
    {
        consumed_by
            = "UP ➔ CLICKED=["+clicked+"]"
            +  " .. some_sentence_container  =["+ (some_sentence_container   ? some_sentence_container  .tagName : "")+"]"
            +  " .. onDown_EL                =["+ (onDown_EL                 ? onDown_EL                .tagName : "")+"]"
            +  " .. onDown_sentence_container=["+ (onDown_sentence_container ? onDown_sentence_container .tagName : "")+"]"
        ;

    }
    /*}}}*/
    /* [clicked] .. [t_scrollIntoViewIfNeeded_set_EL] {{{*/
    if( clicked )
    {
/*{{{
console.log("onDown_sentence_container=["+t_util.get_id_or_tag(onDown_sentence_container)+"]")
console.log("..some_sentence_container=["+t_util.get_id_or_tag(  some_sentence_container)+"]")
}}}*/
/*{{{
console.log("...same node             = "+(onDown_sentence_container == some_sentence_container)+"]")
}}}*/

        if(      onDown_sentence_container ) dom_scroll.t_scrollIntoViewIfNeeded_set_EL( null                    ); /* STOP   [scrollIntoView] */
        else if(   some_sentence_container ) dom_scroll.t_scrollIntoViewIfNeeded_set_EL( some_sentence_container ); /* CHANGE [scrollIntoView] */
    }
    /*}}}*/
    /* [clearTimeout] LONG_PRESS {{{*/

    if(long_press_timer    ) clearTimeout(long_press_timer    ); long_press_timer     = null;
    if(long_press_arm_timer) clearTimeout(long_press_arm_timer); long_press_arm_timer = null;

    /*}}}*/
    /* [clr_onWork_EL] {{{*/
    clr_onWork_EL( caller );

    /*}}}*/
if( log_this) log5("→→ "+caller+":"+ consumed_by);
};
/*}}}*/

/* 0 - EVENT */
/*{{{*/
let onDown_EL = null;
let onDown_MS = 0;
let onDown_XY = { x:0, y:0 };
let onMoveDXY = { x:0, y:0 };

/*}}}*/
/*  set_onDown_XY {{{*/
let set_onDown_XY = function(e)
{
    onDown_EL   = t_util.t_get_event_target(e);
    onDown_MS   = new Date().getTime();

    let      xy = t_util.get_event_XY(e);
    onDown_XY.x = xy.x;
    onDown_XY.y = xy.y;

    onMoveDXY.x = 0;
    onMoveDXY.y = 0;
};
/*}}}*/
/*  get_onMoveDXY {{{*/
let get_onMoveDXY = function(e)
{
    if(e) {
        let      xy = t_util.get_event_XY(e);
        onMoveDXY.x = xy.x - onDown_XY.x;
        onMoveDXY.y = xy.y - onDown_XY.y;
    }
    return onMoveDXY;
};
/*}}}*/
/*  zap_onMoveDXY {{{*/
let zap_onMoveDXY = function()
{
    onDown_XY.x += onMoveDXY.x;
    onDown_XY.y += onMoveDXY.y;
    drag_cursor.show_drag_cursor();
    onMoveDXY.x  = 0;
    onMoveDXY.y  = 0;
};
/*}}}*/
/*  clr_onWork_EL {{{*/
let clr_onWork_EL = function(_caller)
{
/*{{{*/
let   caller = "clr_onWork_EL";
let log_this = DOM_SENTENCE_LOG;

if( log_this) log8(caller+": CALLED BY "+ _caller);
/*}}}*/

    onDown_EL   = null;
    onDown_MS   = 0;
    onDown_XY.x = 0; onDown_XY.y = 0;
    onMoveDXY.x = 0; onMoveDXY.y = 0;
};
/*}}}*/

/* LISTENER - log5 log7 */
/*{{{*/
let CAPTURE_TRUE_PASSIVE_FALSE  = { capture:true , passive:false };

/*}}}*/
/*➔ t_SENTENCE_add_LISTENER {{{*/
let t_SENTENCE_add_LISTENER = function(_log_this,_tag_this)
{
/*{{{*/
let   caller = "t_SENTENCE_add_LISTENER";
let log_this = DOM_SENTENCE_LOG;

/*}}}*/
if( log_this || _log_this || _tag_this) log5("➔ "+caller+LF);

    if( ("ontouchstart" in document.documentElement)) {
        add_listener_capture_active(   window, "touchstart", t_pointerdown_listener           ); /* DOWN   */
        add_listener_capture_active(   window, "touchend"  , t_pointerup_listener             ); /* UP     */
    }
    else {
        add_listener_capture_active(   window, "mousedown" , t_pointerdown_listener           ); /* DOWN   */
        add_listener_capture_active(   window, "mouseup"   , t_pointerup_listener             ); /* UP     */
    }

    add_listener_capture_active(       window, "scroll"    ,   dom_scroll.t_scroll_listener   ); /* SCROLL */
    add_listener_capture_active(       window, "resize"    , dom_sentence.t_SENTENCE_onresize ); /* RESIZE */
};
/*}}}*/
/*➔ t_SENTENCE_del_LISTENER {{{*/
let t_SENTENCE_del_LISTENER = function(_log_this,_tag_this)
{
/*{{{*/
let   caller = "t_SENTENCE_del_LISTENER";
let log_this = DOM_SENTENCE_LOG;

if( log_this || _log_this || _tag_this) log0("➔ "+caller+LF);
/*}}}*/

    if( ("ontouchstart" in document.documentElement)) {
        remove_listener_capture_active(   window, "touchstart", t_pointerdown_listener);    /* DOWN  */
        remove_listener_capture_active(   window, "touchend"  , t_pointerup_listener);      /* UP    */
    }
    else {
        remove_listener_capture_active(   window, "mousedown" , t_pointerdown_listener);    /* DOWN  */
        remove_listener_capture_active(   window, "mouseup"   , t_pointerup_listener);      /* UP    */
    }

    remove_listener_capture_active(   window, "scroll"    , dom_scroll.t_scroll_listener);  /* SCROLL*/
};
/*}}}*/
/*_ t_CURSOR_add_MOVE_LISTENER {{{*/
let t_CURSOR_add_MOVE_LISTENER = function()
{
/*{{{*/
let   caller = "t_CURSOR_add_MOVE_LISTENER";
let log_this = DOM_SENTENCE_LOG;

if( log_this) log7(caller);
/*}}}*/
    if("ontouchmove"  in document.documentElement) {
        add_listener_capture_active(   window, "touchmove", t_SENTENCE_drag_listener);
    }
    else {
        add_listener_capture_active(   window, "mousemove", t_SENTENCE_drag_listener);
        add_listener_capture_active(   window, "wheel"    , t_SENTENCE_drag_listener);
    }
};
/*}}}*/
/*_ t_CURSOR_del_MOVE_LISTENER {{{*/
let t_CURSOR_del_MOVE_LISTENER = function()
{
/*{{{*/
let   caller = "t_CURSOR_del_MOVE_LISTENER";
let log_this = DOM_SENTENCE_LOG;

if(log_this) log0(caller);
/*}}}*/

    t_del_NOT_MOVED_ENOUGH();
    t_del_MOVE_ON_COOLDOWN();

    /* KEEP MOVING CURSOR WHILE MOUSE BUTTON IS UP */
    if( drag_cursor.get_mouseUP_display_state() )
        return;

    /* STOP MOVING CURSOR WHILE MOUSE BUTTON IS UP */
    if("ontouchmove"  in document.documentElement) {
        remove_listener_capture_active(window, "touchmove", t_SENTENCE_drag_listener);
    }
    else {
        remove_listener_capture_active(window, "mousemove", t_SENTENCE_drag_listener);
        remove_listener_capture_active(window, "wheel"    , t_SENTENCE_drag_listener);
    }

    drag_cursor.hide_drag_cursor();
};
/*}}}*/
/*_ add_listener_capture_active {{{*/
let add_listener_capture_active = function(el, ev, fn)
{
    el.   addEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/
/*_ remove_listener_capture_active {{{*/
let remove_listener_capture_active = function(el, ev, fn, uc) /* eslint-disable-line no-unused-vars */
{
    el.removeEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/
/*_ preventDefault {{{*/
let preventDefault = function(e)
{
/*{{{*/
let log_this = DOM_SENTENCE_LOG;

if( log_this) log0("preventDefault");
/*}}}*/
    if(e.cancelable)
    {
        if( e.stopPropagation          ) e.stopPropagation         (); /* capturing and bubbling phases */
        if( e.stopImmediatePropagation ) e.stopImmediatePropagation(); /* other listeners of the same event */
        if( e.preventDefault           ) e.preventDefault          (); /* browser agent default .. (checkbox toggle) */
    }
};
/*}}}*/

/* LAYOUT */
/*_ t_scrollIntoViewIfNeeded {{{*/
let t_scrollIntoViewIfNeeded = function(el)
{
    document.getElementsByTagName("HTML")[0].style.scrollBehavior = "smooth"; /* (smooth|instant) */

    let el_H2= Math.min(el.clientHeight/2, window.innerHeight/2);

    let x     = el.offsetLeft;
    let y     = el.offsetTop + el_H2 - window.innerHeight/2;

    window.scrollTo(x, y);
};
/*}}}*/

/* [drag_cursor] */
/*
../../script/drag_cursor.js
*/
/*INLINE{{{*/
/*INLINE{{{*/
/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ drag_cursor                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* eslint-disable      no-unused-vars    */ /* REQUIRED WHEN EMBEDDED */
/* globals document, console, setTimeout */ /* eslint-disable-line no-redeclare */

/* globals t_util, t_CURSOR_add_MOVE_LISTENER, t_CURSOR_del_MOVE_LISTENER */
/* globals CSS_NOT_MOVED_ENOUGH, CSS_MOVE_ON_COOLDOWN */
/* globals onDown_XY */
/* eslint-ensable      no-unused-vars    */ /* REQUIRED WHEN EMBEDDED */

/* exported drag_cursor, DRAG_CURSOR_JS_ID */

const DRAG_CURSOR_JS_ID       = "drag_cursor" ;
const DRAG_CURSOR_JS_TAG      = DRAG_CURSOR_JS_ID +" (220220:23h:11)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let drag_cursor  = (function() {
"use strict"; /* eslint-disable-line strict */

/*{{{*/
const CSS_DRAG_CURSOR_DIV_ONLOAD       = "onload";
const     DRAG_CURSOR_DIV_ONLOAD_DELAY =  1000;
let       drag_cursor_div;

/*
let       drag_cursor_count = 0;
*/
/*}}}*/
/*_ set_mouseUP_display_state  {{{*/
/*{{{*/
let mouseUP_display_state = true;

/*}}}*/
let set_mouseUP_display_state = function(state=true)
{
    mouseUP_display_state = state;

    if(state) show_drag_cursor();

    if(state) t_CURSOR_add_MOVE_LISTENER();
    else      t_CURSOR_del_MOVE_LISTENER();
};
/*}}}*/
let get_mouseUP_display_state = function() { return mouseUP_display_state; };
/*_ show_drag_cursor {{{*/
let show_drag_cursor = function()
{
/*{{{
console.log("%c show_drag_cursor", lfX[++drag_cursor_count % 10], "onMoveDXY:",onMoveDXY , "onDown_XY:",onDown_XY)
}}}*/
    if(!drag_cursor_div) {
        drag_cursor_div = document.createElement("DIV");

        drag_cursor_div.id                    =     "drag_cursor";
        drag_cursor_div.style.pointerEvents   =            "none";
        drag_cursor_div.style.position        =           "fixed";
        drag_cursor_div.style.margin          =             "0px";
        drag_cursor_div.style.padding         =            "16px";
        drag_cursor_div.style.backgroundColor =            "#FF0";
        drag_cursor_div.style.border          =  "3px solid #000";
        drag_cursor_div.style.borderRadius    = "1em 0em 1em 1em";
        drag_cursor_div.style.zIndex          =      "2147483647";
        drag_cursor_div.style.opacity         =             "0.5";

        document.documentElement.appendChild( drag_cursor_div );
    }
    if( drag_cursor_div.style.display != "block")
    {
        drag_cursor_div.classList.add( CSS_DRAG_CURSOR_DIV_ONLOAD );
        setTimeout(() => drag_cursor_div.classList.remove( CSS_DRAG_CURSOR_DIV_ONLOAD ), DRAG_CURSOR_DIV_ONLOAD_DELAY);

        drag_cursor_div.style.display  = "block";
    }
};
/*}}}*/
/*_ move_drag_cursor {{{*/
let move_drag_cursor = function(e)
{
    if(!drag_cursor_div                         ) return;
    if(!drag_cursor_div.style.display == "block") return;

    let      xy = t_util.get_event_XY(e);
    let offset_x = drag_cursor_div.className
        ? drag_cursor_div.offsetWidth / 2
        : drag_cursor_div.offsetWidth;
    drag_cursor_div.style.left    = (xy.x - offset_x)+"px";
    drag_cursor_div.style.top     = (xy.y           )+"px";
};
/*}}}*/
let hide_drag_cursor                     = function() { if(drag_cursor_div) drag_cursor_div.style.display = "none"; };
let add_drag_cursor_CSS_NOT_MOVED_ENOUGH = function() { if(drag_cursor_div) drag_cursor_div.classList.add   (CSS_NOT_MOVED_ENOUGH); };
let del_drag_cursor_CSS_NOT_MOVED_ENOUGH = function() { if(drag_cursor_div) drag_cursor_div.classList.remove(CSS_NOT_MOVED_ENOUGH); };
let add_drag_cursor_CSS_MOVE_ON_COOLDOWN = function() { if(drag_cursor_div) drag_cursor_div.classList.add   (CSS_MOVE_ON_COOLDOWN); };
let del_drag_cursor_CSS_MOVE_ON_COOLDOWN = function() { if(drag_cursor_div) drag_cursor_div.classList.remove(CSS_MOVE_ON_COOLDOWN); };

/* EXPORT */
return { name : "drag_cursor"
    ,    set_mouseUP_display_state
    ,    get_mouseUP_display_state
    ,    show_drag_cursor
    ,    hide_drag_cursor
    ,    move_drag_cursor
    ,    add_drag_cursor_CSS_MOVE_ON_COOLDOWN
    ,    add_drag_cursor_CSS_NOT_MOVED_ENOUGH
    ,    del_drag_cursor_CSS_MOVE_ON_COOLDOWN
    ,    del_drag_cursor_CSS_NOT_MOVED_ENOUGH
};
}());
/*{{{
"┌─────────────────────────────────────────────────────────────────────────────┐
"│                                                                             │

:e             $RPROFILES/script/dom_tools.js
:e             $RPROFILES/script/stub/dom_sentence_event.js
:e             $RPROFILES/stylesheet/dom_host.css
"...           $RPROFILES/script/drag_cursor.js

"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
/*INLINE}}}*/
/*}}}*/


/* EXPORT */
return { name : DOM_SENTENCE_EVENT_JS_ID
    ,    t_SENTENCE_add_LISTENER
    ,    t_SENTENCE_del_LISTENER
    ,    t_scrollIntoViewIfNeeded
    ,    t_add_MOVE_ON_COOLDOWN
    ,    t_del_MOVE_ON_COOLDOWN
    ,    t_add_NOT_MOVED_ENOUGH
    ,    t_del_NOT_MOVED_ENOUGH
    ,    set_mouseUP_display_state : drag_cursor.set_mouseUP_display_state
    /* DEBUG */
    ,    get_mouseUP_display_state : drag_cursor.get_mouseUP_display_state
    ,  show_drag_cursor            : drag_cursor.show_drag_cursor
    ,  hide_drag_cursor            : drag_cursor.hide_drag_cursor
    ,  move_drag_cursor            : drag_cursor.move_drag_cursor
};

}());

setTimeout(dom_sentence_event.set_mouseUP_display_state, 1000);

/*{{{
"┌─────────────────────────────────────────────────────────────────────────────┐
"│                                                                             │
:e  $BROWSEEXT/SplitterExtension/manifest.json

:e  $BROWSEEXT/SplitterExtension/javascript/background.js
:e  $BROWSEEXT/SplitterExtension/javascript/content.js
:e             $RPROFILES/script/dom_sentence.js
"...           $RPROFILES/script/stub/dom_sentence_event.js
:e             $RPROFILES/script/stub/dom_scroll.js
:e             $RPROFILES/script/stub/dom_sentence_util.js
:e             $RPROFILES/script/stub/dom_log.js
:e             $RPROFILES/stylesheet/dom_host.css

:e             $RPROFILES/script/dom_select.js
:e             $RPROFILES/script/dom_util.js
:e             $RPROFILES/script/dom_log.js

:e             $RPROFILES/script/splitter.js
:e             $RPROFILES/script/dom_load.js
"│                                                                             │
"└─────────────────────────────────────────────────────────────────────────────┘
}}}*/
/*
:!start /b explorer splitter_embedded.html
*/
