/** dom_sentence_js */
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals console */
/* globals document */
/* globals dom_data    */
/* globals dom_log     */
/* globals dom_popup   */
/* globals dom_prop    */
/* globals dom_store   */
/* globals dom_tools   */
/* globals dom_util    */
/* globals dom_view    */

/* exported dom_sentence, DOM_SENTENCE_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_SENTENCE_JS_ID      = "dom_sentence_js";
const DOM_SENTENCE_JS_TAG     = DOM_SENTENCE_JS_ID  +" (211119:19h:09)";
/*}}}*/
let dom_sentence = (function() {
"use strict";
let   DOM_SENTENCE_LOG      = false;
let   DOM_SENTENCE_TAG      = false;

/* IMPORT */
/*{{{*/
/* eslint-disable no-unused-vars */
/*➔ t_sentence_IMPORT {{{*/
/*{{{*/
let t_data     = {}          ;    /* 05 */
/*......................................*/
let t_log      = {}          ;    /* 06 */
let t_popup    = {}          ;    /* 07 */
let t_util     = {}          ;    /* 08 */
let t_i18n     = {}          ;    /* 09 */
let t_prop     = {}          ;    /* 10 */
/* .....................................*/
/*  t_store    = {}          ; */ /* 11 */
/*  t_fly      = {}          ; */ /* 12 */
/*  t_wording  = {}          ; */ /* 13 */
/*  t_select   = {}          ; */ /* 14 */
/*  t_slot     = {}          ; */ /* 15 */
/* .....................................*/
/*  t_hide     = {}          ; */ /* 16 */
/*  t_view     = {}          ; */ /* 17 */
/*  t_sticky   = {}          ; */ /* 18 */
/*  t_seek     = {}          ; */ /* 19 */
/*  t_share    = {}          ; */ /* 20 */
/* .....................................*/
/*  t_details  = {}          ; */ /* 21 */
/*  t_wot      = {}          ; */ /* 22 */
/*  t_sentence = {}          ; */ /* 23 */
/*  t_grid     = {}          ; */ /* 24 */
/*  t_gutter   = {}          ; */ /* 25 */
/* .....................................*/
/*  t_ipc      = {}          ; */ /* 26 */
let t_tools    = {}          ;    /* 27 */
/*......................................*/
/*}}}*/
let t_sentence_IMPORT  = function(log_this)
{
/* LOAD {{{*/
    t_data     = dom_data    ;    /* 05 */
/* .....................................*/
    t_log      = dom_log     ;    /* 06 */
    t_popup    = dom_popup   ;    /* 07 */
    t_util     = dom_util    ;    /* 08 */
/*  t_i18n     = dom_i18n    ; */ /* 09 */
    t_prop     = dom_prop    ;    /* 10 */
/* .....................................*/
/*  t_store    = dom_store   ; */ /* 11 */
/*  t_fly      = dom_fly     ; */ /* 12 */
/*  t_wording  = dom_wording ; */ /* 13 */
/*  t_select   = dom_select  ; */ /* 14 */
/*  t_slot     = dom_slot    ; */ /* 15 */
/* .....................................*/
/*  t_hide     = dom_hide    ; */ /* 16 */
/*  t_view     = dom_view    ; */ /* 17 */
/*  t_sticky   = dom_sticky  ; */ /* 18 */
/*  t_seek     = dom_seek    ; */ /* 19 */
/*  t_share    = dom_share   ; */ /* 20 */
/* .....................................*/
/*  t_details  = dom_details ; */ /* 21 */
/*  t_wot      = dom_wot     ; */ /* 22 */
/*  t_sentence = dom_sentence; */ /* 23 */
/*  t_grid     = dom_grid    ; */ /* 24 */
/*  t_gutter   = dom_gutter  ; */ /* 25 */
/* .....................................*/
/*  t_ipc      = dom_ipc     ; */ /* 26 */
    t_tools    = dom_tools   ;    /* 27 */
/* .....................................*/
/*}}}*/
    sentence_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_SENTENCE_LOG = DOM_SENTENCE_LOG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SENTENCE_LOG"));
    DOM_SENTENCE_TAG = DOM_SENTENCE_TAG || ((typeof dom_store != "undefined") && dom_store.t_store_getBool("DOM_SENTENCE_TAG"));

    /*}}}*/
if(log_this) log("%c 12 SENTENCE", lbH+lf2);
};
/*}}}*/
/*_   sentence_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*  prop */
let prop;

/*}}}*/
let   sentence_INTERN = function()
{
    /* t_log {{{*/
    LOG_MAP = t_log.LOG_MAP;

    ({ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX } = t_log.LOG_BG_CSS);
    ({ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX } = t_log.LOG_FG_CSS);
    ({ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           } = t_log.LOG_XX_CSS);

    log                 = t_log.log;
    logBIG              = t_log.logBIG;
    logXXX              = t_log.logXXX;
    log_caller          = t_log.log_caller;
    log_json_one_liner  = t_log.log_json_one_liner;
    log_key_val         = t_log.log_key_val;
    log_key_val_group   = t_log.log_key_val_group;
    /*}}}*/
    /* t_prop {{{*/
    prop = t_prop;

    /*}}}*/

    sentence_DEPEND();
};
/*}}}*/
/*_   sentence_DEPEND {{{*/
let   sentence_DEPEND = function()
{

};
/*}}}*/
/* eslint-enable  no-unused-vars */
/*}}}*/

/*{{{*/
/* CSS {{{*/
const CSS_SENTENCE_CONTAINER = "sentence_container";
const CSS_SENTENCE           = "sentence";
const CSS_CLAUSE             = "clause";
const CSS_LAST_CLAUSE        = "last_clause";
const CSS_OUTLINE            = "outlined";

/* [fs1..fs12] ../stylesheet/dom_host.css {{{*/

const E12_FONT_SIZE_LIST = ["fs1", "fs2", "fs3", "fs4", "fs5", "fs6", "fs7", "fs8", "fs9", "fs10", "fs11", "fs12"];

let   e12_font_size      =  "fs5";
/*}}}*/
/* EVEN ODD {{{
const CSS_EVEN               =     "even";
const CSS_ODD                =                "odd";
const CSS_EVEN_ODD_ARRAY     = [CSS_EVEN , CSS_ODD];
}}}*/
/*}}}*/
/* REGEX {{{*/
/* RegEx Testing {{{
:!start explorer "https://www.compart.com/en/unicode/category"
:!start explorer "https://regexr.com/32oeg"

}}}*/

const                 WORD = "\\s*(?:\\p{L}|_|\\(|-|\\))"; /* non-capturing-group */
const             BOUNDARY = "\\W*[\\.,;:\\n\\r]+(?!\\w)"; /* non-capturing-group .. punct .. no adjacent letter */

const            LAST_WORD = WORD +"{3,}";
const           FIRST_WORD = WORD +"+";

const CAPTURING_PREV_END   = "("    + LAST_WORD  +")"; /* p1 capturing group */
const CAPTURING_BOUNDARY   = "("    + BOUNDARY   +")"; /* p2 capturing group */
const CAPTURING_NEXT_START = "(\\n|"+ FIRST_WORD +")"; /* p3 capturing group */

/*{{{
const regexp_SENTENCE      = new RegExp(CAPTURING_PREV_END +  CAPTURING_BOUNDARY +  CAPTURING_NEXT_START,"gu");
}}}*/
let   regexp_SENTENCE;

/*}}}*/

let sentence_color_next = 1;
let sentence_containers = [];
/*}}}*/
/*➔ t_SENTENCE_SPLIT {{{*/
let t_SENTENCE_SPLIT = function(container)
{
/*{{{*/
let   caller = "t_SENTENCE_SPLIT";
let log_this = LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;

if( tag_this) log("%c"+caller+"("+t_util.get_n_lbl(container)+")", lbH+lf1);
if( log_this) t_log.console_dir("container",container        );
/*}}}*/
    if(container.nodeName == "DETAILS") container.open = true;
    /* Firefox fail safe regexp_SENTENCE {{{*/
    if( !regexp_SENTENCE ) {
        try {
            regexp_SENTENCE = new RegExp(CAPTURING_PREV_END +  CAPTURING_BOUNDARY +  CAPTURING_NEXT_START,"gu");
        } catch(ex) {
            log(ex);
        }
        if(!regexp_SENTENCE)
            regexp_SENTENCE = new RegExp(             "(\\w*)"+CAPTURING_BOUNDARY+"(\\w*)"               ,"gu");
    }
    /*}}}*/
    /* RESTORE [CONTAINED] CONTAINERS {{{*/
    let   el;
    while(el = t_util.get_el_child_with_class(container, dom_sentence.CSS_SENTENCE_CONTAINER))
        t_SENTENCE_RESTORE( el );

    t_SENTENCE_RESTORE( container );

    /*}}}*/
    /* REPLACE CONTAINER [CHILDREN] {{{*/
    sentence_color_next = 1;
/*{{{*/
if( log_this) {
    log("...LAST_WORD            %c"+LAST_WORD           , lbC+lf2);
    log("...BOUNDARY             %c"+BOUNDARY            , lbC+lf3);
    log("...FIRST_WORD           %c"+FIRST_WORD          , lbC+lf2);
    log("...CAPTURING_PREV_END   %c"+CAPTURING_PREV_END  , lbC+lf5);
    log("...CAPTURING_BOUNDARY   %c"+CAPTURING_BOUNDARY  , lbC+lf6);
    log("...CAPTURING_NEXT_START %c"+CAPTURING_NEXT_START, lbC+lf7);
}
if( tag_this) {
    logBIG(regexp_SENTENCE);
    log("%c prev_end %c boundary %c next_start",lbL+lf5 ,lbC+lf6 ,lbR+lf7);
}
/*}}}*/

    let textContent = t_util.t_get_htmlEntities( container.textContent.trim() );
if( log_this) log("textContent:%c"+t_data.LF+textContent, lb8);

    textContent = textContent.replace(regexp_SENTENCE, t_SENTENCE_SPLIT_replace) ;

    /*}}}*/
    /* SAVE [innerHTML_SAVED] {{{*/
    container.innerHTML_SAVED
        = container.innerHTML;

    /*}}}*/
    /* ADD [CSS_SENTENCE_CONTAINER] {{{*/
    t_util.add_el_class(container, CSS_SENTENCE_CONTAINER);

    container.style.touchAction = "none";

    container.innerHTML
        = "<span class='"+CSS_SENTENCE+" bg1'>"
        + textContent
        + "</span>" ;

    if(!sentence_containers.includes( container ))
        sentence_containers.push    ( container );

    /*}}}*/
    /* ADD [CSS_LAST_CLAUSE] TO EVERY SENTENCE LAST PART {{{*/
    let selector
        = "."+ CSS_CLAUSE   +"+."+ CSS_SENTENCE
        + ","
        + "."+ CSS_SENTENCE +"+."+ CSS_SENTENCE
    ;
    let sentence_array = container.querySelectorAll( selector );
if( log_this) t_log.console_dir("sentence_array .. selector=["+selector+"]",sentence_array);

    for(let i=0; i < sentence_array.length; ++i)
    {
        let last_clause =   sentence_array[i].previousElementSibling;
        t_util.add_el_class(last_clause, CSS_LAST_CLAUSE);

if( log_this) console.log(last_clause);
    }

    /* ...last sentence is not part of those captured by selector ..(it has no nextSibling) */
    t_util.add_el_class(container.lastElementChild, CSS_LAST_CLAUSE);

    t_SENTENCE_adjust_el_fontsize( container );
    /*}}}*/
    /* POPUP CONTAINER AND ITS XPATH {{{*/
    let innerHTML
        = container.outerHTML
        + "<hr>"
        + "<pre class='xpath'>"
        +  t_util.get_parent_tag_id_class_chain( container )
        + "</pre>";
if( log_this) log("container.innerHTML:%c"+t_data.LF+container.innerHTML, lb7);

    /*}}}*/
    /* APPLY CURRENT FONT SIZE TO POPUP SENTENCE SPLIT CONTAINER {{{*/
    if(t_util.get_el_parent_fragment(container) || t_prop.get(t_data.TOOLS_TIER2))
    {
        t_popup.log_popup_fixed( innerHTML );

        let popup_sentence_container = t_SENTENCE_get_popup_sentence_container();
        if( popup_sentence_container )
            t_SENTENCE_adjust_el_fontsize( popup_sentence_container );
    }
    /*}}}*/
};
/*}}}*/
/*_ t_SENTENCE_SPLIT_replace {{{*/
let t_SENTENCE_SPLIT_replace = function(match, prev_end, boundary, next_start /*, offset, string, group */)
{
/*{{{*/
let log_this = LOG_MAP.S2_SELECT;
let tag_this = DOM_SENTENCE_TAG || log_this;

if(next_start == t_data.LF) next_start = "";

if( tag_this) log("%c"+prev_end+"%c"+t_util.show_CR_LF(boundary)+"%c"+next_start
                  ,lbL+lf5      ,lbC+lf6                         ,lbR+lf7       );
/*{{{
if( log_this) log("match=[%c"+t_util.show_CR_LF(match)+"]", lbC);
if( log_this) console.table(arguments);

:silent :!start explorer "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace\#Specifying_a_function_as_a_parameter"
}}}*/
/*}}}*/

    let entering_a_clause
        =  boundary.includes(",")
        || boundary.includes(";")
    /*  || boundary.includes(":")*/
    ;

    if(!entering_a_clause)
        sentence_color_next += 1;

    let className
        = (entering_a_clause ? CSS_CLAUSE : CSS_SENTENCE)
        + " bg"+(sentence_color_next % 10)
    ;

    return prev_end + boundary +"</span><span class='"+className+"'>"+ next_start;
};
/*}}}*/
/*➔ t_SENTENCE_RESTORE {{{*/
let t_SENTENCE_RESTORE = function(el)
{
/*{{{*/
let   caller = "t_SENTENCE_RESTORE";
let log_this = LOG_MAP.S2_SELECT || DOM_SENTENCE_TAG;

if( log_this) log("%c"+caller+"("+t_util.get_n_lbl(el)+")", lbH+lf2);
    if(!el) return "";
    let consumed_by = "";
/*}}}*/
    /* RESTORE [CSS_SENTENCE_CONTAINER] CONTAINERS {{{*/
    let container = t_util.get_el_parent_with_class(el, CSS_SENTENCE_CONTAINER);
    if( container )
    {
        consumed_by = "RESTORING CONTAINER SPLIT SENTENCES";

/*{{{
        if(container.nodeName == "DETAILS") container.open = false;
}}}*/

        t_util.del_el_class(container, CSS_SENTENCE_CONTAINER);
        t_util.del_el_class(container, CSS_OUTLINE           );

        if( container.innerHTML_SAVED )
        {
            if( log_this) log("%c...innerHTML_SAVED=["+t_util.ellipsis(container.innerHTML_SAVED, 16)+"]", lf3);

            container.style.touchAction = "";

            container.innerHTML         =  container.innerHTML_SAVED;
            delete                         container.innerHTML_SAVED;

        }

        sentence_containers.splice(sentence_containers.indexOf(container), 1); /* delete container (x1) */
    }
    /*}}}*/

    t_util.clear_el_classList(el, E12_FONT_SIZE_LIST);

    t_popup.log_popup_hide();

if( log_this) log("...return ["+consumed_by+"]");
    return consumed_by;
};
/*}}}*/
/*➔ t_SENTENCE_RESTORE_ALL {{{*/
let t_SENTENCE_RESTORE_ALL = function()
{
/*{{{*/
let   caller = "t_SENTENCE_RESTORE_ALL";
let log_this = LOG_MAP.S2_SELECT || DOM_SENTENCE_TAG;

if( log_this) log("%c"+caller, lbH+lf2);
/*}}}*/

    let node_list = document.querySelectorAll("."+CSS_SENTENCE_CONTAINER);
    for(let i = 0; i <      node_list.length; ++i)
        t_SENTENCE_RESTORE( node_list[i] );
};
/*}}}*/
/*➔ t_SENTENCE_GET_CONTAINERS {{{*/
let t_SENTENCE_GET_CONTAINERS = function()
{
    return sentence_containers;
};
/*}}}*/
/*➔ t_SENTENCE_GET_CONTAINERS_IN_VIEWPORT {{{*/
let t_SENTENCE_GET_CONTAINERS_IN_VIEWPORT = function()
{
    let el_array = [];
    for(let i=0; i < sentence_containers.length; ++i)
    {
        if(dom_view.t_view1_is_el_topLeft_or_bottomRight_in_viewport(sentence_containers[i]))
            el_array.push( sentence_containers[i] );
    }

    return el_array;
};
/*}}}*/
/*➔ t_SENTENCE_adjust_el_fontsize {{{*/
let t_SENTENCE_adjust_el_fontsize = function(container)
{
    t_util.clear_el_classList(container, E12_FONT_SIZE_LIST);

    container.classList.add( e12_font_size );
};
/*}}}*/
/*➔ t_SENTENCE_offset_e12_font_size {{{*/
let t_SENTENCE_offset_e12_font_size = function(offset=0)
{
/*{{{*/
let   caller = "t_SENTENCE_offset_e12_font_size";
let log_this = LOG_MAP.S2_SELECT;

/*}}}*/
    /* APPLY [offset] to [e12_font_size] {{{*/
    let num = offset + parseInt( e12_font_size.substring(2) );
    num     = Math.max( 1, num);
    num     = Math.min(12, num);

    e12_font_size = "fs"+num;

if( log_this) log(caller+": e12_font_size=["+e12_font_size+"]");
    /*}}}*/
    /* APPLY CURRENT FONT SIZE TO ALL SENTENCE SPLIT CONTAINER {{{*/
    let node_list = document.querySelectorAll("."+CSS_SENTENCE_CONTAINER);
    for(let i=0; i < node_list.length; ++i)
        t_SENTENCE_adjust_el_fontsize(node_list[i]);

    /*}}}*/
    /* APPLY CURRENT FONT SIZE TO POPUP SENTENCE SPLIT CONTAINER {{{*/
    let popup_sentence_container = t_SENTENCE_get_popup_sentence_container();
    if( popup_sentence_container )
        t_SENTENCE_adjust_el_fontsize( popup_sentence_container );

    /*}}}*/
    return node_list.length;
};
/*}}}*/
/*_ t_SENTENCE_get_popup_sentence_container {{{*/
let t_SENTENCE_get_popup_sentence_container = function()
{
    let dom_popup_div = t_popup.log_popup_div_get();
    if( dom_popup_div )
        return dom_popup_div.querySelector("."+CSS_SENTENCE_CONTAINER);
    else
        return null;
};
/*}}}*/
/*➔ t_SENTENCE_get_el_sentence_container {{{*/
let t_SENTENCE_get_el_sentence_container = function(el)
{
    return t_util.get_el_parent_with_class(el, CSS_SENTENCE_CONTAINER);
};
/*}}}*/
/*➔ t_SENTENCE_drag_DXY {{{*/
/*{{{*/
const SENTENCE_DRAG_MOVED_ENOUGH =  64;
const SENTENCE_DRAG_COOLDOWN_MS  = 500;
let   sentence_drag_last_MS      =   0;

/*}}}*/
let t_SENTENCE_drag_DXY = function(dxy)
{
/*{{{*/
let   caller = "t_SENTENCE_drag_DXY";
let log_this = LOG_MAP.EV0_LISTEN;

/*}}}*/
    /* SENTENCE_DRAG_COOLDOWN_MS {{{*/
    let  this_MS = new Date().getTime();

    let time_ellapsed = (this_MS - sentence_drag_last_MS);
    if( time_ellapsed <  SENTENCE_DRAG_COOLDOWN_MS) {
        t_tools.t_hotspot_add_status_MOVE_ON_COOLDOWN(SENTENCE_DRAG_COOLDOWN_MS - time_ellapsed);
        return false;
    }
    else {
        t_tools.t_hotspot_del_status_MOVE_ON_COOLDOWN();
    }
    /*}}}*/
    /* ONLY FROM A SENTENCE CONTAINER {{{*/
    let from_container = document.querySelector("."+CSS_SENTENCE_CONTAINER);
/*{{{
console.log("from_container=["+from_container+"]")
}}}*/
    if(!from_container)
        return false;

    /*}}}*/
    /* DXY .. f(SENTENCE_DRAG_MOVED_ENOUGH) {{{*/
    let move_H_or_V  =  Math.abs(dxy.x     ) > Math.abs(dxy.y);
    let move_delta   = move_H_or_V ? dxy.x   :          dxy.y;
    let moved_enough = (Math.abs(move_delta) > SENTENCE_DRAG_MOVED_ENOUGH);

    if(!moved_enough ) {
        t_tools.t_hotspot_add_status_NOT_MOVED_ENOUGH();
        return false;
    }
    else {
        t_tools.t_hotspot_del_status_NOT_MOVED_ENOUGH();
    }
    /*}}}*/
    /* SENTENCE-SPLIT OR FONT-ADJUST .. f(H or V){{{*/
    let split_or_font = move_H_or_V;
    let offset        = (move_delta > 0) ? 1 : -1;

/*{{{*/
if( log_this) log_key_val_group(  caller
                                  , { move_delta
                                    , split_or_font
                                    , offset
                                  }
                                  , lfX[split_or_font ? ((offset > 0) ? 3:4) : ((offset > 0) ? 5:6)]
                                  , true);

/*}}}*/
    /*}}}*/
    /* NEXT OR PREVIOUS SENTENCE-SPLIT {{{*/
    if( split_or_font )
    {
        t_SENTENCE_split_at_offset(from_container, offset);
    }
    /*}}}*/
    /* ADJUST SENTENCE FONT SIZE {{{*/
    else {
        t_SENTENCE_offset_e12_font_size( offset );
    }
    /*}}}*/
    sentence_drag_last_MS = this_MS;
    return true;
};
/*}}}*/
/*_ t_SENTENCE_split_at_offset {{{*/
let t_SENTENCE_split_at_offset = function(from_container,offset)
{
/*{{{*/
let   caller = "t_SENTENCE_split_at_offset";
let log_this = LOG_MAP.EV0_LISTEN;

/*
:new C:/LOCAL/DATA/ANDROID/PROJECTS/iwintoo/XPH/javascript/xpath.js
*/
/*}}}*/

    let offset_container = t_util.get_node_sibling_at_offset( from_container, offset);

if( log_this) log_key_val_group( caller+"(offset=["+offset+"])"
                                , {   from_container
                                  , offset_container
                                });

    if( offset_container )
    {
        t_SENTENCE_RESTORE              ( from_container   );
        t_SENTENCE_SPLIT                ( offset_container );
        t_SENTENCE_adjust_el_fontsize   ( offset_container );
        t_SENTENCE_OUTLINE              ( offset_container );

        t_tools.t_scrollIntoViewIfNeeded( offset_container );
    }
};
/*}}}*/
/*_ t_SENTENCE_OUTLINE {{{*/
let t_SENTENCE_OUTLINE = function(sentence_el)
{
    let sentence_container = t_util.get_el_parent_with_class(sentence_el, CSS_SENTENCE_CONTAINER);
    if( sentence_container ) sentence_container.classList.add(            CSS_OUTLINE           );
};
/*}}}*/
/* ➔ EXPORT {{{*/
return { name : "dom_sentence"
    ,    logging : (state) => DOM_SENTENCE_LOG = dom_util.t_util_set_state("DOM_SENTENCE_LOG",state)
    ,    tagging : (state) => DOM_SENTENCE_TAG = dom_util.t_util_set_state("DOM_SENTENCE_TAG",state)
    ,    t_sentence_IMPORT

    ,    CSS_SENTENCE_CONTAINER

    ,    t_SENTENCE_SPLIT
    ,    t_SENTENCE_RESTORE
    ,    t_SENTENCE_RESTORE_ALL
    ,    t_SENTENCE_GET_CONTAINERS
    ,    t_SENTENCE_GET_CONTAINERS_IN_VIEWPORT
    ,    t_SENTENCE_adjust_el_fontsize
    ,    t_SENTENCE_get_el_sentence_container
    ,    t_SENTENCE_offset_e12_font_size
    ,    t_SENTENCE_drag_DXY
};
/*}}}*/
}());

