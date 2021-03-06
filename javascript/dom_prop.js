/* dom_prop_js */
/* jshint esversion: 6, laxbreak:true, laxcomma:true, boss:true */
const DOM_PROP_JS_ID        = "dom_prop_js";
const DOM_PROP_JS_TAG       = DOM_PROP_JS_ID    +" (200222:18h)";
let dom_prop    = (function() {
"use strict";
/* JSHint {{{*/
/* globals dom_data, dom_log, dom_util, dom_store */
/* globals dom_prop_notify */
/*
:1,$y *
:!start explorer https://jshint.com/
*/
/*}}}*/
let   DOM_PROP_LOG          = false;
let   DOM_PROP_TAG          = false;

/* IMPORT */
/*{{{*/
/*➔ t_prop_IMPORT {{{*/
/* t_data .. t_tools {{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
let t_util     = {}        ;    /* 07 */
/*  t_prop     = {}        ; */ /* 08 */
/*  t_store    = {}        ; */ /* 09 */
/*  t_fly      = {}        ; */ /* 10 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 11 */
/*  t_select   = {}        ; */ /* 12 */
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
/*  t_tools    = {}        ; */ /* 22 */
/*....................................*/
/*}}}*/
let t_prop_IMPORT  = function(log_this)
{
/* t_data .. t_tools {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
    t_util    = dom_util   ;    /* 07 */
/*  t_prop    = dom_prop   ; */ /* 08 */
/*  t_store   = dom_store  ; */ /* 09 */
/*  t_fly     = dom_fly    ; */ /* 10 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 11 */
/*  t_select  = dom_select ; */ /* 12 */
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
/*  t_tools   = dom_tools  ; */ /* 22 */
/* ...................................*/
/*}}}*/
    prop_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_PROP_LOG = DOM_PROP_LOG || dom_store.t_store_getBool("DOM_PROP_LOG");
    DOM_PROP_TAG = DOM_PROP_TAG || dom_store.t_store_getBool("DOM_PROP_TAG");

    /*}}}*/
if(log_this) log("%c 08 prop", lbH+lf8);
};
/*}}}*/
/*_   prop_INTERN {{{*/
/* t_log {{{*/
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;
/*}}}*/
/* t_util {{{*/
let get_id_or_tag;
let mPadEnd;
let mPadStart;

/*}}}*/
let   prop_INTERN = function()
{
    /* t_log {{{*/
    LOG_MAP = t_log.LOG_MAP;

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ] = t_log.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ] = t_log.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ] = t_log.LOG_FG_ARR;

    log                 = t_log.functions.log;
    logBIG              = t_log.functions.logBIG;
    logXXX              = t_log.functions.logXXX;
    log_caller          = t_log.functions.log_caller;
    log_json_one_liner  = t_log.functions.log_json_one_liner;
    log_key_val         = t_log.functions.log_key_val;
    log_key_val_group   = t_log.functions.log_key_val_group;
    /*}}}*/
    /* t_util {{{*/
    get_id_or_tag       = t_util.get_id_or_tag;
    mPadEnd             = t_util.mPadEnd;
    mPadStart           = t_util.mPadStart;

    /*}}}*/
    prop_DEPEND();
};
/*}}}*/
/*_   prop_DEPEND {{{*/
/*{{{*/

/*}}}*/
let   prop_DEPEND = function()
{

};
/*}}}*/
/*}}}*/
/* const {{{*/
const C_LEN_PREFIX     = 10;
const C_LEN_ID         = 24;
const C_LEN_REC_VALUE  = 10;
const C_LEN_EL         = 24;
const C_LEN_ONCHANGE   = 24;
/*}}}*/

/* PUBLIC */
/*{{{*/
let prop_init          = function(id, value, onchange) { return _prop_set  (id, value, onchange)        ; }; /* returns prop (not calling onchange) */
let prop_set           = function(id, value, onchange) { return _prop_parse(id, value, onchange)        ; }; /* returns prop     */
let prop_get           = function(id                 ) { return _prop_get  (id                 ).value  ; }; /* returns value    */
let prop_toggle        = function(id                 ) { return _prop_parse(id,"toggle"        ).value  ; }; /* returns value    */
let prop_set_EL        = function(id, el             ) { return _prop_get  (id                 ).el = el; }; /* returns EL       */
let prop_get_EL        = function(id                 ) { return _prop_get  (id                 ).el     ; }; /* returns EL       */
let prop_get_MAP       = function(                   ) { return                                 Prop_Map; }; /* returns Prop_Map */
let prop_set_CB        = function(cb                 ) {                                    Prop_CB = cb; }; /* UI state handler */
let prop_log_true      = function(_caller            ) { prop_log_MAP(_caller,       true); };
let prop_log_false     = function(_caller            ) { prop_log_MAP(_caller,      false); };
let prop_log_undefined = function(_caller            ) { prop_log_MAP(_caller,  undefined); };
let prop_log_onchange  = function(_caller            ) { prop_log_MAP(_caller, "onchange"); };
let prop_log_MAP       = function(...args) {
/*{{{*/
/*{{{*/
let log_this = DOM_PROP_LOG || LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* LAST  ARG .. [filter_value] {{{*/
    let last_arg
        = (args.length > 1) ? args[1]
        : (args.length > 0) ? args[0]
        :                     "";

    let filter_value
        = (last_arg  ===       true ) ? true
        : (last_arg  ===      false ) ? false
        : (last_arg  === "undefined") ? undefined
        : (last_arg  ===  undefined ) ? undefined
        :                               "any";

    let filter_onchange
        = (String(last_arg).toLowerCase() === "onchange");

    /*}}}*/
    /* FIRST ARG .. [identifier] {{{*/
    let identifier
        =  (args.length >  0)
        && (args[0]                       !==  true      )
        && (args[0]                       !==  false     )
        && (args[0]                       !==  undefined )
        && (args[0]                       !== "undefined")
        && (String(args[0]).toLowerCase() !==  "onchange")
        ?   args[0]
        :   "";

    let                               filter_id_to_match = false;
    if( identifier.startsWith("*")) { filter_id_to_match = true; identifier = identifier.substring(1); }
    if( identifier.endsWith  ("*")) { filter_id_to_match = true; identifier = identifier.substring(0, identifier.length-1); }

    let unfiltered
        =  !filter_onchange
        && !filter_id_to_match
        && (filter_value == "any")
    ;
    /*}}}*/
    /* ITEM / LIST OF ITEMS {{{*/
    let prop = identifier && !filter_id_to_match && _prop_got( identifier );

if( log_this) {
    let showing
        = (  prop
             ?  "PROP ITEM "+identifier
             :  "PROP ITEM LIST"
          )
        + ((filter_value!="any") ? " .. "+filter_value : "")
        + ( filter_onchange      ? " .. onchange"      : "")
    ;

    log_key_val_group(   showing
                         , { args_length : args.length
                           , last_arg
                           , identifier
                           , filter_value
                           , filter_id_to_match
                           , filter_onchange
                           , unfiltered
                         }
                         , lf9
                         , false);
}
    if(identifier && !filter_id_to_match && !prop)
    {
        log("%c PROP %c"+identifier+"%c NOT FOUND", lbL, lbC, lbR);

        return;
    }
    /*}}}*/
    /* COLUMN HEADERS {{{*/
    let prefix_header = identifier
        ?         mPadStart("ITEM", identifier.length)
        :                   "ITEM";

    log(    "%c"+ mPadEnd  (prefix_header         , C_LEN_PREFIX   )
         + " %c"+ mPadStart("ITEM id"             , C_LEN_ID       )
         + " %c"+ mPadEnd  ("VALUE "+filter_value , C_LEN_REC_VALUE)
         + " %c"+ mPadStart("NODE el"             , C_LEN_EL       )
         + " %c"+ mPadEnd  ("HANDLER onchange"    , C_LEN_ONCHANGE )
         + " %c"+           "CSS"
         , lbH+lf3
         , lbL+lf3
         , lbC+lf3
         , lbR+lf3
         , lbH+lf3
         , lbH+lf3);

    /*}}}*/
    /* SPECIFIED ITEM {{{*/
    if( prop )
    {
        prop.log(identifier);

    }
    /*}}}*/
    /* LIST OF ITEMS {{{*/
    else {

        let map_length = Prop_Map.length;
        let map_sorted = Prop_Map.sort( function(a,b) { return (a.id > b.id) ? 1 : -1; } );
        map_sorted.forEach(
                           function(prop,index,array)
                           {
                               if(filter_id_to_match && !prop.id.includes( identifier ))      return; /* unmatched IDs always loose */

                               let has_onchange = !unfiltered && ( filter_onchange && prop.onchange); /* unfiltered always win */
                               let    has_value = !unfiltered && ( filter_value    == prop.value   ); /* unfiltered always win */

                               if(   filter_id_to_match
                                  || unfiltered
                                  || has_onchange
                                  || has_value
                                 ) {
                                   let prefix = mPadStart(index+1+" / "+map_length, C_LEN_PREFIX);
                                   prop.log( prefix );
                               }
                           });
        /*{{{
    for(let i=0; i<map_sorted.length; ++i ) {
        let prop = map_sorted[i];
        prop.log(i+" "+ identifier);
    }
}}}*/
    }
    /*}}}*/
/*}}}*/
};
/*}}}*/

/* PRIVATE */
/*{{{*/
/* Prop_Map Prop_CB {{{*/
let Prop_Map = [];
let Prop_CB;

/*}}}*/
/*_Prop new {{{*/
let Prop = function(id, value, onchange)
{
    this.id        = id;
    this.value     = (value == "toggle") ? true      : value        ;
    this.onchange  = onchange;
    this.el        = null;
    /* this.toString {{{*/
    this.toString = function()
    {
        let onchange
            = this.onchange ? this.onchange.name
            :  Prop_CB      ? Prop_CB      .name
            :                 ""
        ;
        let el_name
            = this.el
            ?  " "+get_id_or_tag(this.el)+" → "
            :  " "
        ;

        return       mPadStart(this.id  +" "+this.value, 24)
            + " … "+ mPadStart(el_name  +    onchange  , 24)+" "
        ;

    };
    /*}}}*/
    /* this.log {{{*/
    this.log = function(prefix="") {

        let lfv = (this.value ==  null) ? lf7
            :     (this.value == false) ? lf6
            :     (this.value ==  true) ? lb5
            :                             lb7;

        let lfe = (this.el            ) ? (this.value ? lf4 : lf9)
            :                             lf2;

        let this_onchange
            = this.onchange
            ?  t_data.SYMBOL_FUNCTION+" "+(this.onchange.name||"anonymous")
            :  "";

        console.groupCollapsed( "%c"+ prefix
                       +       " %c"+ mPadStart(               this.id           , C_LEN_ID       )
                       +       " %c"+ mPadEnd  (               this.value        , C_LEN_REC_VALUE)
                       +       " %c"+ mPadStart( get_id_or_tag(this.el  )        , C_LEN_EL       )
                       +       " %c"+ mPadEnd  (               this_onchange     , C_LEN_ONCHANGE )
                       +       " %c"+ (this.el ? " "+          this.el.className : ""             )
                       ,       lbH
                       ,       lbL+lfe
                       ,       lbC+lfv
                       ,       lbR+lfe
                       ,       lbH+lf3
                       ,       lbH+lf9
                              );

        log_key_val(this.id, this, lf3);
        console.trace();
        console.groupEnd();
    };

    /*}}}*/
};
/*}}}*/
/*  _prop_set {{{*/
let _prop_set = function(...args)
{
/*{{{*/
let log_this = DOM_PROP_LOG || LOG_MAP.T3_LAYOUT;

    let id       = args[0] ||        "";
    let value    = args[1];
    let onchange = args[2] || undefined;

let   caller = "_prop_set("+id+", "+value+", "+(onchange ? onchange.name:"")+")"; if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);

if( log_this) log("%c _prop_set %c"+id+" %c "+value         +" %c "+(onchange ? onchange.name:"")
                 ,lbH+lf3      ,lbL+lf4 ,lbR+(value?lf5:lf8)  ,lbH+lf9                           );
/*}}}*/

    let    prop  =  _prop_get(id, value, onchange);
    if(onchange &&  (prop.onchange  != onchange )) { prop.onchange       = onchange;  }
    if(             (prop.value     != value    )) { prop.value = (value == "toggle") ? !prop.value : value ; }
    else if( log_this) log("...unchanged");

    if(Prop_CB) Prop_CB(id, prop.value);

    return prop;
};
/*}}}*/
/*  _prop_got {{{*/
let _prop_got = function(id)
{
    for(let i=0; i < Prop_Map.length; ++i ) {
        if(  id   == Prop_Map[i].id  ) {
            return   Prop_Map[i];
        }
    }
    return null;
};
    /*}}}*/
/*  _prop_get {{{*/
let _prop_get = function(id, value, onchange)
{
    let prop = _prop_got(id);

    if(!prop ) {
        prop = new Prop(id, value, onchange);
        Prop_Map.push(prop);
    }

if(DOM_PROP_TAG && !!prop.value && ((DOM_PROP_TAG===true) || String(DOM_PROP_TAG).includes(id)))
    log_key_val(prop.toString(), {DOM_PROP_TAG , DOM_PROP_LOG , caller:dom_log.get_callers()}, lfX[prop.value ? 9:0]);

    return prop;
};
/*}}}*/
/*  _prop_parse {{{*/
let _prop_parse = function(id, value, onchange)
{
/*{{{*/
let   caller = "_prop_parse("+id+", "+value+")";
let log_this = DOM_PROP_LOG || LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    let prop = _prop_get(id, value, onchange);
    if(       onchange && (onchange != prop.onchange ))
        prop .onchange  =  onchange;

    if(  prop.value != value)
    {
        _prop_set(id , value);

        if( prop.onchange)
            prop.onchange(id, prop.value);
    }
else if( log_this) log("...unchanged");

if( log_this) prop.log(caller);
    return prop;
};
/*}}}*/
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_prop"
    , logging : function(value) { if(value != undefined) DOM_PROP_LOG = value; dom_store.t_store_set_value("DOM_PROP_LOG", DOM_PROP_LOG); return DOM_PROP_LOG; }
    , tagging : function(value) { if(value != undefined) DOM_PROP_TAG = value; dom_store.t_store_set_value("DOM_PROP_TAG", DOM_PROP_TAG); return DOM_PROP_TAG; }
    , t_prop_IMPORT

    , init          : prop_init
    , set           : prop_set
    , get           : prop_get
    , toggle        : prop_toggle
    , set_EL        : prop_set_EL
    , get_EL        : prop_get_EL
    , get_MAP       : prop_get_MAP
    , set_CB        : prop_set_CB
    , log_MAP       : prop_log_MAP

    /* DEBUG */
    , log_true      : prop_log_true
    , log_false     : prop_log_false
    , log_undefined : prop_log_undefined
    , log_onchange  : prop_log_onchange
};

/*}}}*/

}());
