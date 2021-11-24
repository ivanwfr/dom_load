/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_sentence_event              [dom_sentence]..[dom_tools] dependencies │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals window, document, console, setTimeout, clearTimeout */
/* globals dom_util */
/* globals dom_sentence, dom_sentence_util */

/* exported dom_sentence_event */
/* exported DOM_SENTENCE_TOOLS_JS_TAG, dom_sentence_event */

/* eslint-disable no-warning-comments */

const DOM_SENTENCE_TOOLS_JS_ID  = "dom_sentence_event_js";
const DOM_SENTENCE_TOOLS_JS_TAG = DOM_SENTENCE_TOOLS_JS_ID +" (211123:19h:19)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
/*}}}*/
let dom_sentence_event   = (function() {
"use strict";

/* console {{{*/
/* eslint-disable no-unused-vars */
let dir  = dom_sentence_util.dir ;
let log  = dom_sentence_util.log ;
let logX = dom_sentence_util.logX;
let log0 = dom_sentence_util.log0;
let log1 = dom_sentence_util.log1;
let log2 = dom_sentence_util.log2;
let log3 = dom_sentence_util.log3;
let log4 = dom_sentence_util.log4;
let log5 = dom_sentence_util.log5;
let log6 = dom_sentence_util.log6;
let log7 = dom_sentence_util.log7;
let log8 = dom_sentence_util.log8;
let log9 = dom_sentence_util.log9;

/* eslint-enable  no-unused-vars */
/*}}}*/

/* NOT_MOVED_ENOUGH {{{*/
/*{{{*/
const CSS_NOT_MOVED_ENOUGH = "not_moved_enough";

/*}}}*/
/*_ t_hotspot_add_status_NOT_MOVED_ENOUGH {{{*/
let t_hotspot_add_status_NOT_MOVED_ENOUGH   = function()
{
log7("t_hotspot_add_status_NOT_MOVED_ENOUGH");//FIXME
    document.body.classList.add( CSS_NOT_MOVED_ENOUGH );
};
/*}}}*/
/*_ t_hotspot_del_status_NOT_MOVED_ENOUGH {{{*/
let t_hotspot_del_status_NOT_MOVED_ENOUGH   = function()
{
log7("t_hotspot_del_status_NOT_MOVED_ENOUGH");//FIXME
    document.body.classList.remove(CSS_NOT_MOVED_ENOUGH);
};
/*}}}*/
/*}}}*/
/* MOVE_ON_COOLDOWN {{{*/
/*{{{*/
const CSS_MOVE_ON_COOLDOWN = "move_on_cooldown";

let move_on_cooldown_timer;
/*}}}*/
/*_ t_hotspot_add_status_MOVE_ON_COOLDOWN {{{*/
let t_hotspot_add_status_MOVE_ON_COOLDOWN   = function(time_left)
{
log7("t_hotspot_add_status_MOVE_ON_COOLDOWN");//FIXME
    document.body.classList.add( CSS_MOVE_ON_COOLDOWN );

    if(!move_on_cooldown_timer)
        move_on_cooldown_timer = setTimeout(move_on_cooldown_handler, time_left);
};
/*}}}*/
/*_ move_on_cooldown_handler {{{*/
let move_on_cooldown_handler = function()
{
log7("move_on_cooldown_handler");//FIXME
    move_on_cooldown_timer = null;
    t_hotspot_del_status_MOVE_ON_COOLDOWN();
};
/*}}}*/
/*_ t_hotspot_del_status_MOVE_ON_COOLDOWN {{{*/
let t_hotspot_del_status_MOVE_ON_COOLDOWN   = function()
{
log7("t_hotspot_del_status_MOVE_ON_COOLDOWN");//FIXME
    document.body.classList.remove( CSS_MOVE_ON_COOLDOWN );
};
/*}}}*/
/*}}}*/

/* onDown_XY, onMoveDXY */
/*{{{*/
let onDown_EL = null;
let onDown_XY = { x:0, y:0 };
let onMoveDXY = { x:0, y:0 };

/*}}}*/
/*  set_onDown_XY {{{*/
let set_onDown_XY = function(e)
{
    onDown_EL   = get_event_target(e);

    let      xy = get_event_XY(e);
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
        let      xy = get_event_XY(e);
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
    onMoveDXY.x  = 0;
    onMoveDXY.y  = 0;
};
/*}}}*/
/*_ get_event_target {{{*/
let get_event_target = function(e) /* eslint-disable-line complexity */
{
    let e_target = e.target ? e.target  : undefined;
    let e_path_0 =  e.path  ? e.path[0] : undefined;
    let e_path_1 =  e.path  ? e.path[1] : undefined;

    if     (e.path && (e_path_0.tagName != "IMG"))  e_target = e_path_0;
    else if(e.path &&  e_path_1                  )  e_target = e_path_1;
    else if(e.originalTarget                     )  e_target = e.originalTarget;
    else if(e.explicitOriginalTarget             )  e_target = e.explicitOriginalTarget;

    let el;
    e_target
        = ((el = e_target.firstElementChild) && (el.tagName == "INPUT")) ?                                         e_target.firstElementChild
        : ((el = e_target                  ) && (el.htmlFor           )) ? (document.getElementById(el.htmlFor) || e_target)
        : ((el = e_target.parentElement    ) && (el.htmlFor           )) ? (document.getElementById(el.htmlFor) || e_target)
        : /*..........................................................*/                                           e_target
    ;

log9("get_event_target: return "+e_target.tagName+" "+e_target.className);//FIXME
    return e_target;
};
/*}}}*/
/*_ get_event_XY {{{*/
let get_event_XY = function(e)
{
    let x, y;
    if(e.changedTouches) {
        x = parseInt(e.changedTouches[0].clientX);
        y = parseInt(e.changedTouches[0].clientY);
    }
    else {
        x = parseInt(                  e.clientX);
        y = parseInt(                  e.clientY);
    }
log9("get_event_target: return { "+x+" , "+y+" }");//FIXME
    return { x , y };
};
/*}}}*/

/*_ t_SENTENCES_get_onDown_EL_container {{{*/
let t_SENTENCES_get_onDown_EL_container = function()
{
log3("t_SENTENCES_get_onDown_EL_container");//FIXME
/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ NOTE:                                                                    │*/
/*│ - As [onDown_EL] cannot be a TEXT_NODE                                   │*/
/*│ - it defaults to  EVENT target parent container                          │*/
/*│ - that can have a huge textcontent                                       │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/

    let t_util
        = (typeof dom_util           != "undefined") ? dom_util
        : (typeof dom_sentence_util  != "undefined") ? dom_sentence_util
        : /*......................................*/   undefined
    ;
    if(!t_util) console.warn("MISSING STUB FOR: [dom_util]");

    let container
        =  t_util.get_el_parent_with_class(onDown_EL, "container_light") /* ▼ ordered by priority... */
        || t_util.get_el_parent_with_class(onDown_EL, "container_dark" )

    /* LIST */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "LI"       )
        || t_util.get_el_parent_with_tag  (onDown_EL, "UL"        )
        || t_util.get_el_parent_with_tag  (onDown_EL, "OL"        )

    /* GLOSSARY */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "DT"       ) /* single cell Term        */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "DD"       ) /* single cell Description */
        || t_util.get_el_parent_with_tag  (onDown_EL, "DL"        ) /*        cell collection  .. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl */

    /* TABLE */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "TH"       ) /* single cell             */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "TD"       ) /* single cell             */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "THEAD"    ) /*        cell collection  */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "TFOOT"    ) /*        cell collection  */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "COLGROUP" ) /*        cell collection  */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "CAPTION"  ) /*        cell collection  */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "TBODY"    ) /*        cell collection  */
        || t_util.get_el_parent_with_tag  (onDown_EL, "TABLE"     ) /*        cell collection  */

    /* COMPOSITION */
        || t_util.get_el_parent_with_tag  (onDown_EL, "PRE"       )
        || t_util.get_el_parent_with_tag  (onDown_EL, "P"         )
        || t_util.get_el_parent_with_tag  (onDown_EL, "BLOCKQUOTE")
        || t_util.get_el_parent_with_tag  (onDown_EL, "DIR"       )
        || t_util.get_el_parent_with_tag  (onDown_EL, "DIV"       )

    /* DETAILS */
        || t_util.get_el_parent_with_tag  (onDown_EL,  "SUMMARY"  )
        || t_util.get_el_parent_with_tag  (onDown_EL, "DETAILS"   )
    ;

    if(!container) return "";

    /* [CLICKED TITLE] ➔ [TITLE + DL] */
    let c_next = container              .nextElementSibling;

    let p_next = container.parentElement
        ?        container.parentElement.nextElementSibling
        :        null
    ;

    let group
        = (!container)                          ? null
        : ( c_next && (c_next.tagName == "DL")) ? [ container               , c_next ]
        : ( p_next && (p_next.tagName == "DL")) ? [ container.parentElement , p_next ]
        :                                         null
    ;

    /* [CLICKED DT] ➔ [CONTAINING DL] */
    let dlist
        = (!container)                        ? null
        : ( container.nodeName == "DL"      ) ? container
        : ( container.nodeName == "DT"      ) ? container.parentElement
        :                                       null
    ;

    let table
        = (!container)                        ? null
        : ( container.nodeName ==  "THEAD"  ) ? container.parentElement
        : ( container.nodeName ==  "TFOOT"  ) ? container.parentElement
        : ( container.nodeName ==  "TBODY"  ) ? container.parentElement
        : ( container.nodeName ==  "CAPTION") ? container.parentElement
        : ( container.nodeName == "TABLE"   ) ? container
        :                                      null
    ;

    let cells
        =   group ?                        group
        :   dlist ? dlist.querySelectorAll("DIV,DT,DD,TEMPLATE")
        :   table ? table.querySelectorAll(    "TH,TD,CAPTION")
        :           null
    ;
log3("...container:");//FIXME
dir(container      );//FIXME
log3("...cells:"    );//FIXME
dir(cells          );//FIXME
    return { container, cells };
};
/*}}}*/

/* ADD-REMOVE LISTENER */
/*{{{*/
let CAPTURE_TRUE_PASSIVE_FALSE  = { capture:true , passive:false };

/*}}}*/
/*_ t_add_LISTENERS {{{*/
let t_add_LISTENERS = function()
{
log("t_add_LISTENERS");//FIXME
    if( ("ontouchstart" in document.documentElement)) {
        /* DOWN  */ add_listener_capture_active(   window, "touchstart", t_pointerdown_listener);
        /* UP    */ add_listener_capture_active(   window, "touchend"  , t_pointerup_listener);
    }
    else {
        /* DOWN  */ add_listener_capture_active(   window, "mousedown" , t_pointerdown_listener);
        /* UP    */ add_listener_capture_active(   window, "mouseup"   , t_pointerup_listener);
    }
};
/*}}}*/
/*_ t_add_LISTENER_DRAG {{{*/
let t_add_LISTENER_DRAG = function()
{
log7("t_add_LISTENER_DRAG");//FIXME
    if("ontouchmove"  in document.documentElement) {
        /* MOVE  */ add_listener_capture_active(   window, "touchmove" , t_SENTENCE_drag);
    }
    else {
        /* MOVE  */ add_listener_capture_active(   window, "mousemove" , t_SENTENCE_drag);
        /* WHEEL */ add_listener_capture_active(   window, "wheel"     , t_SENTENCE_drag);
    }
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

/* DOWN */
/*_ t_pointerdown_listener {{{*/
let t_pointerdown_listener = function(e)
{
log1("t_pointerdown_listener");//FIXME
    set_onDown_XY(e);

    t_pointerdown_handler(e);
};
/*}}}*/
/*… t_pointerdown_handler {{{*/
let t_pointerdown_handler = function(e)
{
log1("t_pointerdown_handler");//FIXME
    let sentence_el = dom_sentence.t_SENTENCE_get_el_sentence_container(onDown_EL);
    if( sentence_el )
    {
log1("➔ ...sentence_el=["+sentence_el.tagName+"]");//FIXME
        t_preventDefault(e);

        t_add_LISTENER_DRAG();
    }
    else {
log1("➔ NO sentence_el");//FIXME

        add_long_press_listener();
    }
};
/*}}}*/
/*_ t_preventDefault {{{*/
let t_preventDefault = function(e)
{
log0("t_preventDefault");//FIXME
    if(e.cancelable)
    {
        if( e.stopPropagation          ) e.stopPropagation         (); /* capturing and bubbling phases */
        if( e.stopImmediatePropagation ) e.stopImmediatePropagation(); /* other listeners of the same event */
        if( e.preventDefault           ) e.preventDefault          (); /* browser agent default .. (checkbox toggle) */
    }
};
/*}}}*/

/* MOVE */
/*_ t_SENTENCE_del_listener {{{*/
let t_SENTENCE_del_listener = function()
{
log0("t_SENTENCE_del_listener");//FIXME
    if("ontouchmove"  in document.documentElement) {
        remove_listener_capture_active(window, "touchmove"     , t_SENTENCE_drag);
    }
    else {
        remove_listener_capture_active(window, "mousemove"     , t_SENTENCE_drag);
        remove_listener_capture_active(window, "wheel"         , t_SENTENCE_drag);
    }

    t_hotspot_del_status_NOT_MOVED_ENOUGH();
    t_hotspot_del_status_MOVE_ON_COOLDOWN();
};
/*}}}*/
/*_ t_SENTENCE_drag {{{*/
let t_SENTENCE_drag = function(event)
{
log6("t_SENTENCE_drag");//FIXME
    get_onMoveDXY(event);

    if( dom_sentence.t_SENTENCE_drag_DXY( onMoveDXY ) )
    {
        zap_onMoveDXY(); /* next move from here */
        event.preventDefault();
    }
};
/*}}}*/

/* UP */
/*_ t_pointerup_listener {{{*/
let t_pointerup_listener  = function(e)
{
log4("t_pointerup_listener");//FIXME
    t_pointerup_handler(e);

    if( dom_sentence.t_SENTENCE_GET_CONTAINERS() )
        t_SENTENCE_del_listener();

};
/*}}}*/
/*… t_pointerup_handler {{{*/
let t_pointerup_handler = function(e) /* eslint-disable-line no-unused-vars */
{
log4("t_pointerup_handler");//FIXME
    let { container , cells } = t_SENTENCES_get_onDown_EL_container();
    if(   container ) {
        if( cells ) for(let i=0; i < cells.length; ++i) dom_sentence.t_SENTENCE_RESTORE( cells[i] );
        else                                            dom_sentence.t_SENTENCE_RESTORE_ALL();
    }
};
/*}}}*/

/* LONG_PRESS */
/*{{{*/
const CLICK_DURATION       = 500;
const LONG_PRESS_ARM_DELAY = CLICK_DURATION;
const LONG_PRESS_DELAY     = CLICK_DURATION * 2;

let   long_press_timer;
let   long_press_arm_timer;
/*}}}*/
/*  add_long_press_listener .. (call burst debouncer) {{{*/
let add_long_press_listener = function()
{
log7("add_long_press_listener");//FIXME
    if(long_press_timer) clearTimeout(long_press_timer);
    /*.............................*/ long_press_timer = null;

    if(long_press_arm_timer) clearTimeout(long_press_arm_timer);
    long_press_arm_timer =     setTimeout(long_press_arm_handler, LONG_PRESS_ARM_DELAY);
};
/*}}}*/
/*  long_press_arm_handler {{{*/
let long_press_arm_handler = function()
{
log7("long_press_arm_handler");//FIXME
    long_press_arm_timer = null;

    if(long_press_timer) clearTimeout(long_press_timer);
    long_press_timer     = setTimeout(long_press_handler, LONG_PRESS_DELAY);
};
/*}}}*/
/*  long_press_handler {{{*/
let long_press_handler  = function()
{
log7("long_press_handler");//FIXME
    let { container , cells } = t_SENTENCES_get_onDown_EL_container();
    if(   container )
    {
        if( cells ) for(let i=0; i < cells.length; ++i) dom_sentence.t_SENTENCE_SPLIT( cells[i]  );
        else                                            dom_sentence.t_SENTENCE_SPLIT( container );
    }
};
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : DOM_SENTENCE_TOOLS_JS_ID
    ,    t_add_LISTENERS
    ,    t_hotspot_add_status_MOVE_ON_COOLDOWN
    ,    t_hotspot_add_status_NOT_MOVED_ENOUGH
    ,    t_hotspot_del_status_MOVE_ON_COOLDOWN
    ,    t_hotspot_del_status_NOT_MOVED_ENOUGH
};
/*}}}*/

}());
