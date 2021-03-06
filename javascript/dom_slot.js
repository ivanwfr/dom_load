/* dom_slot_js */
/* jshint esversion: 6, laxbreak:true, laxcomma:true, boss:true */
const DOM_SLOT_JS_ID        = "dom_slot_js";
const DOM_SLOT_JS_TAG       = DOM_SLOT_JS_ID  +" (200206:14h)";
let dom_slot    = (function() {
"use strict";
/* JSHint {{{*/
/* globals dom_data, dom_log, dom_store, dom_prop, dom_select, dom_tools */
/* globals unescape */
/*
:1,$y *
:!start explorer https://jshint.com/
*/
/*}}}*/
let   DOM_SLOT_LOG          = false;
let   DOM_SLOT_TAG          = false;

/* IMPORT */
/*{{{*/
/*➔ t_slot_IMPORT {{{*/
/* t_data .. t_tools {{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
/*  t_util     = {}        ; */ /* 07 */
let t_prop     = {}        ;    /* 08 */
/*  t_store    = {}        ; */ /* 09 */
/*  t_fly      = {}        ; */ /* 10 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 11 */
let t_select   = {}        ;    /* 12 */
/*  t_slot     = {}        ; */ /* 13 */
/* ...................................*/
/*  t_hide     = {}        ; */ /* 14 */
/*  t_view     = {}        ; */ /* 15 */
/*  t_sticky   = {}        ; */ /* 16 */
/*  t_seek     = {}        ; */ /* 17 */
/*  t_share    = {}        ; */ /* 18 */
/* ...................................*/
/*  t_grid     = {}        ; */ /* 19 */
/*  t_gutter   = {}        ; */ /* 20 */
/* ...................................*/
/*  t_ipc      = {}        ; */ /* 21 */
let t_tools    = {}        ;    /* 22 */
/*....................................*/
/*}}}*/
let t_slot_IMPORT  = function(log_this)
{
/* t_data .. t_tools {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
/*  t_util    = dom_util   ; */ /* 07 */
    t_prop    = dom_prop   ;    /* 08 */
/*  t_store   = dom_store  ; */ /* 09 */
/*  t_fly     = dom_fly    ; */ /* 10 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 11 */
    t_select  = dom_select ;    /* 12 */
/*  t_slot    = dom_slot   ; */ /* 13 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 14 */
/*  t_view    = dom_view   ; */ /* 15 */
/*  t_sticky  = dom_sticky ; */ /* 16 */
/*  t_seek    = dom_seek   ; */ /* 17 */
/*  t_share   = dom_share  ; */ /* 18 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 19 */
/*  t_gutter  = dom_gutter ; */ /* 20 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 21 */
    t_tools   = dom_tools  ;    /* 22 */
/* ...................................*/
/*}}}*/
    slot_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_SLOT_LOG = DOM_SLOT_LOG || dom_store.t_store_getBool("DOM_SLOT_LOG");
    DOM_SLOT_TAG = DOM_SLOT_TAG || dom_store.t_store_getBool("DOM_SLOT_TAG");

    /*}}}*/
if(log_this) log("%c 13 slot", lbH+lf8);
};
/*}}}*/
/*_   slot_INTERN {{{*/
/* t_log t_prop {{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/* t_prop */
let prop;

/*}}}*/
let   slot_INTERN = function()
{
    /* t_log {{{*/
    LOG_MAP = t_log.LOG_MAP;

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX                                    ] = t_log.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb                                              ] = t_log.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX                                    ] = t_log.LOG_FG_ARR;

    log                 = t_log.functions.log;
    logBIG              = t_log.functions.logBIG;
    logXXX              = t_log.functions.logXXX;
    log_caller          = t_log.functions.log_caller;
    log_json_one_liner  = t_log.functions.log_json_one_liner;
    log_key_val         = t_log.functions.log_key_val;
    log_key_val_group   = t_log.functions.log_key_val_group;

    /* t_prop */
    prop                = t_prop;

    /*}}}*/
    slot_DEPEND();
};
/*}}}*/
/*_   slot_DEPEND {{{*/
/*{{{*/

/*}}}*/
let   slot_DEPEND = function()
{

};
/*}}}*/
/*}}}*/

/** SLOT */
/*{{{*/
let last_cleared_slot           =   1;
/*  get_slotted_pattern_count {{{*/
let get_slotted_pattern_count = function()
{
/*{{{*/
let   caller = "get_slotted_pattern_count";
let log_this = LOG_MAP.S3_SLOT;

/*}}}*/
    let count = 0;
    let                      ccs_length = t_select.t_select_get_ccs_length();
    for(let slot = 1; slot < ccs_length; ++slot)
    {
        count += (t_select.t_select_get_slot_nodes_length(slot) > 0) ? 1 : 0;
    }
if( log_this) log(caller+": ...return "+count);
    return count;
};
/*}}}*/
/*  get_slot_matching_pattern {{{*/
let get_slot_matching_pattern = function(pattern)
{
/*{{{*/
    let caller = "get_slot_matching_pattern";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log("%c"+caller+"%c"+pattern, lbL,lbR);
/*}}}*/

    let ignore_case = prop.get(t_data.WORDS_DROP_CASE);

    pattern = t_tools.t_pattern_del_words_option_sfx( pattern );
    if(ignore_case) pattern = pattern.toLowerCase();

    let slot;
    let slot_pattern;
    try {
        let                  ccs_length = t_select.t_select_get_ccs_length();
        for(slot = 1; slot < ccs_length; ++slot)
        {
            slot_pattern = t_select.t_select_get_slot_pattern(slot);
            if(!slot_pattern) continue;
            slot_pattern = t_tools.t_pattern_del_words_option_sfx( slot_pattern );

            if(ignore_case) slot_pattern = slot_pattern.toLowerCase();

            let matching_pattern; let lfx;
            if     (slot_pattern        ==      pattern  ) { matching_pattern = "SLOT_PATTERN ==       pattern"; lfx = lf5; }
            else if(slot_pattern.includes(      pattern )) { matching_pattern = "SLOT_PATTERN includes pattern"; lfx = lf6; }
            else if(     pattern.includes( slot_pattern )) { matching_pattern = "pattern includes SLOT_PATTERN"; lfx = lf7; }
            if( matching_pattern ) {
if( log_this) log("%c...found slot #"+slot+" .. ("+matching_pattern+")", lfx);
                return slot;
            }

        }
    }
    catch(ex) { log("%c"+caller+"("+pattern+"): slot=["+slot+"]%c"+t_data.LF+"slot_pattern=["+slot_pattern+"]"+t_data.LF+ex, lbH+lf2, lf2); }

if( log_this) log("%c...found no pattern matching current filter", lf8);
    return 0;
};
/*}}}*/
/*  get_slot_of_pattern {{{*/
let get_slot_of_pattern = function(pattern)
{
let   caller = "get_slot_of_pattern("+pattern+")";
let log_this = LOG_MAP.S3_SLOT;

    pattern  = unescape(pattern);
    pattern  = t_tools.t_pattern_del_words_option_sfx(pattern);

    let slot;
    let slot_pattern;
    let                  ccs_length = t_select.t_select_get_ccs_length();
    for(slot = 1; slot < ccs_length; ++slot)
    {
        slot_pattern  = t_select.t_select_get_slot_pattern(slot);
        if(!slot_pattern) continue;

        slot_pattern  = t_tools.t_pattern_del_words_option_sfx(slot_pattern);
        if(  pattern == slot_pattern)
            break;
    }

    if(slot >= ccs_length) slot = 0;

if(log_this) log(caller+": ...return slot=["+slot+"]");
    return slot;
};
/*}}}*/
/*➔ t_set_slot_of_pattern {{{*/
let t_set_slot_of_pattern = function(new_slot, pattern)
{
let   caller = "t_set_slot_of_pattern("+new_slot+" ,"+pattern+")";
let log_this = LOG_MAP.S3_SLOT;

    pattern  = unescape(pattern);
    pattern  = t_tools.t_pattern_del_words_option_sfx(pattern);

    let was_slot;
    let slot_pattern;
    let                          ccs_length = t_select.t_select_get_ccs_length();
    for(was_slot = 1; was_slot < ccs_length; ++was_slot)
    {
        slot_pattern  = t_select.t_select_get_slot_pattern(was_slot);
        if(!slot_pattern) continue;
        slot_pattern  = t_tools.t_pattern_del_words_option_sfx(slot_pattern);
        if(  pattern == slot_pattern)
            break;
    }

    /* switch from to slot {{{*/
    if((was_slot < ccs_length) && (was_slot != new_slot))
    {
        t_select.t_select_switch_from_to_slot(was_slot,new_slot);

    }
    else {

if(log_this) log(caller+": nothing to move out from slot #"+new_slot+"");
    }
    /*}}}*/

    return new_slot;
};
/*}}}*/
/*  t_clear_slot {{{ */
let last_cleared_pattern;

let t_clear_slot = function(slot)
{
/*{{{*/
let   caller = "t_clear_slot";
let log_this = LOG_MAP.S3_SLOT;

/*}}}*/

    last_cleared_slot = slot;

    let ccX       = slot % t_select.SELECT_SLOT_MAX;
    let sel_class = t_select.SEL_CLASS_PREFIX + ccX;
    let selector  = "."+sel_class;
    let sel_list  = document.querySelectorAll( selector );

    let slot_pattern = t_select.t_select_get_slot_pattern(slot);
    if( slot_pattern ) t_tools.t_clear_slot_sync(slot, slot_pattern);

    let cleared_count = 0;
    for(let i = 0; i < sel_list.length; ++i)
    {
        sel_list[i].outerHTML = sel_list[i].innerHTML;
        cleared_count += 1;
    }

if(log_this) log("%c"+caller+"("+slot+")%c"+slot_pattern+"%c selector ["+selector+"] %c x"+sel_list.length+"%c"+cleared_count+" cleared"
                ,lbL+lf7               ,lbR+lf7                          ,lbL+lf4                   ,lbC+lf4               ,lbR+lf5                     );

    if( slot_pattern ) {
        t_select.t_select_clear_slot(slot);
        last_cleared_pattern = slot_pattern;
    }

    if(cleared_count) {
        t_select.t_sync_containers_hi();
    }

    return cleared_count;
};
/*}}}*/
/*  get_prev_populated_slot {{{*/
let get_prev_populated_slot = function(slot)
{
    let slot_with_nodes = 0;
    for(let i = (slot-1); i > (slot-t_select.SELECT_SLOT_MAX); --i)
    {
        let s = 1+ ((i-1+t_select.SELECT_SLOT_MAX) % t_select.SELECT_SLOT_MAX);
        let l = t_select.t_select_get_slot_nodes_length(s);
        if(l && !slot_with_nodes) slot_with_nodes = s;
    }
    return slot_with_nodes;
};
/*}}}*/
/*  get_next_populated_slot {{{*/
let get_next_populated_slot = function(slot)
{
    let slot_with_nodes = 0;
    for(let i = (slot+1); i < (slot+t_select.SELECT_SLOT_MAX); ++i)
    {
        let s = 1+ ((i-1+t_select.SELECT_SLOT_MAX) % t_select.SELECT_SLOT_MAX);
        let l = t_select.t_select_get_slot_nodes_length(s);
        if(l && !slot_with_nodes) slot_with_nodes = s;
    }
    return slot_with_nodes;
};
/*}}}*/
/*}}}*/
/* EXPORT */
/*{{{*/
return { name : "dom_slot"
    , logging : function(value) { if(value != undefined) DOM_SLOT_LOG = value; dom_store.t_store_set_value("DOM_SLOT_LOG", DOM_SLOT_LOG); return DOM_SLOT_LOG; }
    , tagging : function(value) { if(value != undefined) DOM_SLOT_TAG = value; dom_store.t_store_set_value("DOM_SLOT_TAG", DOM_SLOT_TAG); return DOM_SLOT_TAG; }
    , t_slot_IMPORT

    /* PATTERN */
    , get_last_cleared_pattern : function() { return last_cleared_pattern; }

    /* SLOT */
    , get_next_populated_slot
    , get_prev_populated_slot
    , get_slot_matching_pattern
    , get_slot_of_pattern
    , get_slotted_pattern_count
    , t_clear_slot
    , t_set_slot_of_pattern

};
/*}}}*/
}());

