/* dom_wording */
/* jshint esversion: 6, laxbreak:true, laxcomma:true, boss:true */
const DOM_WORDING_JS_ID     = 'dom_wording_js';
const DOM_WORDING_JS_TAG    = DOM_WORDING_JS_ID +' (200302:18h)';
let dom_wording = (function() {
"use strict";
/* JSHint {{{*/
/* globals dom_log, dom_util, dom_data, dom_store, dom_tools */
/* globals escape */
/*
:1,$y *
:!start explorer https://jshint.com/
*/
/*}}}*/
var   DOM_WORDING_LOG       = false;
var   DOM_WORDING_TAG       = false;

/* IMPORT */
/*{{{*/
/*➔ t_wording_IMPORT {{{*/
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
let t_tools    = {}        ;    /* 22 */
/*....................................*/
/*}}}*/
let t_wording_IMPORT  = function(log_this)
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
    t_tools   = dom_tools  ;    /* 22 */
/* ...................................*/
/*}}}*/
    wording_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_WORDING_LOG = DOM_WORDING_LOG || dom_store.t_store_getBool("DOM_WORDING_LOG");
    DOM_WORDING_TAG = DOM_WORDING_TAG || dom_store.t_store_getBool("DOM_WORDING_TAG");

    /*}}}*/
if(log_this) log("%c 11 wording", lbH+lf1);
};
/*}}}*/
/*_   wording_INTERN {{{*/
/* t_log {{{*/

/* t_log */
let LOG_MAP;

let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;

let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;
/*}}}*/
let   wording_INTERN = function()
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
    wording_DEPEND();
};
/*}}}*/
/*_   wording_DEPEND {{{*/
/*{{{*/

/*}}}*/
let   wording_DEPEND = function()
{

};
/*}}}*/
/*}}}*/

/* const */
/*{{{*/
const DOM_WORDING_CSS_ID    = 'dom_wording_css';

/*}}}*/

/*_ t_wording_cycle {{{*/
let t_wording_cycle = function(stage='OFF', anchor_freeze=true)
{
/*{{{*/
let   caller = "t_wording_cycle(stage=["+stage+"], anchor_freeze=["+anchor_freeze+"])";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
    if(!dom_wording_css && !t_wording_inject()) return;

    dom_wording_css.className
        = (    stage          && (stage  != 'CYCLE')) ?  stage  /* stage set argument */
        : (    dom_wording_css.className == 'DARK' )  ? 'LIGHT' /* stage 1 to stage 2 */
        : (    dom_wording_css.className == 'LIGHT')  ? 'OFF'   /* stage 2 to stage 3 */
        :                                               'DARK'  /* ...back to stage 0 */
        ;

/*
    t_wording_by_href (anchor_freeze);
*/
    t_wording_activate(anchor_freeze);

};
/*}}}*/
/*_ t_wording_activate {{{*/
let t_wording_activate = function(anchor_freeze)
{
/*{{{*/
let   caller = "t_wording_activate(anchor_freeze "+anchor_freeze+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

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
    let found = false;
    for(let i = 0; i< css_map.length; ++i) {
        let      id = css_map[i].id;
        let      el = css_map[i].el;
        found      |= (id == key);
        el.disabled = (id != key);
if(log_this && !el.disabled) logBIG("WORDING CSS: "+i+". id ["+css_map[i].id+"] .. el ["+t_util.get_id_or_tag(css_map[i].el)+"]");
    }
    /*}}}*/
if(!found) console.warn("*** "+caller+": ["+key+"] NOT FOUND IN PRELOADED [css_map]");
    /* ADD-REMOVE CLICK EVENT LISTENER {{{*/
    if(anchor_freeze) document.body.addEventListener   ('click', t_wording_capture_click, true);
    else              document.body.removeEventListener('click', t_wording_capture_click, true);
    /*}}}*/
};
/*}}}*/
/*_ t_wording_inject {{{*/
let dom_wording_css;
let t_wording_inject = function()
{
    if(!dom_wording_css) t_wording_init();
    return dom_wording_css;
};
/*}}}*/
/*_ t_wording_init {{{*/
/*{{{*/
let css_map = [];

let anchor_on;
let anchor_off;
let wording_on;
let wording_off;
let light_theme;
let dark_theme;

/*}}}*/
let t_wording_init = function()
{
/*{{{*/
let   caller = "t_wording_init";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+": INSERTING ["+DOM_WORDING_CSS_ID+"]");
/*}}}*/
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
/*      + ' html            {           margin : 8px                   !important; }'*/
        + ' a, a *          {           cursor : text;                             }'
        + ' a               {            color : #FFF                  !important; }'
        + ' a               {      text-shadow : 1px 1px 2px black     !important; }'
        + ' a               { background-color : #888                  !important; }'
        + ' a               {    border-radius : 1em                   !important; }'
        + ' .toolbag_button {           cursor : not-allowed;                      }'
        + ' .toolbag_button {            color : #222                  !important; }'
        + ' .toolbag_button { background-color : rgba(128,128,128,0.5) !important; }'
/*      + ' a              {       font-weight : 800                   !important; }'*/
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
/*{{{
        + ' html     {               outline : 8px dotted #4448;                  }'
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
        + ' :not(em) {            background :  rgb(238,238,238)      !important; }'
/*
        + ' a        {            background : rgba(221,187,187,0.53) !important; }'
        + ' a, input { text-decoration-color : #0AF                   !important; }'
*/
    ;

    dark_theme
        = ''
        + ' :not(em) {                 color : #CCC                   !important; }'
        + ' :not(em) {            background :  rgb( 17, 17, 17)      !important; }'
/*
        + ' a        {            background : rgba(051,000,000,0.53) !important; }'
        + ' a, input { text-decoration-color : #0F0                   !important; }'
*/
        + '::selection {               color : white                  !important; }'
        + '::selection {          background : red                    !important; }'
    ;

    /*}}}*/
    /* DOM_WORDING_JS_TAG {{{*/
    let         sig = "#"+DOM_WORDING_CSS_ID+" { content: "+DOM_WORDING_JS_TAG+"; } ";
    let          id = DOM_WORDING_CSS_ID;
    let          su = "/*# sourceURL=dom_wording.js */";
    let        data = 'data:text/css,'+escape(su +"\\n"+ sig);

    dom_wording_css = t_wording_inject_css(id, data);
    /*}}}*/
    /* DOM_WORDING CSS PRELOAD .. [W]ord [A]nchor [L]ight [D]ark {{{*/

    let el;
    id="DWA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +dark_theme  +wording_on  +anchor_on  );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="LWA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +light_theme +wording_on  +anchor_on  );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="DWa"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +dark_theme  +wording_on  +anchor_off );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="LWa"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +light_theme +wording_on  +anchor_off );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});

    id= "wA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */"              +wording_off +anchor_on  );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="DwA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +dark_theme  +wording_off +anchor_on  );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="LwA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +light_theme +wording_off +anchor_on  );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id= "wa"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */"              +wording_off +anchor_off );  el = t_wording_inject_css(id, data);  css_map.push({id:id , el:el});

/*{{{
for(let [id, el] of css_map) log(". id=["+id+"] el=["+ellipsis(el, 64)+"]");
for(let i = 0; i< css_map.length; ++i) log(i+". id ["+css_map[i].id+"] .. el ["+get_id_or_tag(css_map[i].el)+"]");
}}}*/
    /*}}}*/
};
/*}}}*/
/*_ t_wording_inject_css {{{*/
let t_wording_inject_css = function(id, link_or_data)
{
    let el  = document.createElement("link");
    el.id   = id;
    el.type = "text/css";
    el.rel  = "stylesheet";
    el.href = link_or_data;
    document.getElementsByTagName("head")[0].appendChild(el);
    return el;
};
/*}}}*/
/*_ t_wording_by_href {{{*/
let t_wording_by_href = function(anchor_freeze)
{
/*
log("t_wording_by_href(anchor_freeze "+anchor_freeze+")");
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

    if(anchor_freeze) document.body.addEventListener   ('click', t_wording_capture_click, true);
    else              document.body.removeEventListener('click', t_wording_capture_click, true);
};
/*}}}*/
/*_ t_wording_capture_click {{{*/
let t_wording_capture_click = function(e)
{
/*{{{*/
let   caller = "t_wording_capture_click";
let log_this = DOM_WORDING_TAG || DOM_WORDING_LOG || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    let is_a_child_of_doc_tools = t_util .is_el_child_of_id (e.target, t_data.DOC_TOOLS_ID);
    let is_an_embedded_doc_tool = t_tools.t_is_an_embedded_doc_tool(e.target, log_this);

    let   dissmissed_by
        = is_a_child_of_doc_tools ?  "IS A CHILD OF DOC_TOOLS_ID"
        : is_an_embedded_doc_tool ?  "IS AN EMBEDDED DOC TOOL"
        :                            ""
    ;
if( log_this)
    log("%c"+caller+"%c"+t_util.get_n_lbl(e.target)+"%c"+dissmissed_by
        ,lbb+lbL+lf7,lbb+lbC+lf9                    ,lbb+lbR+lfX[dissmissed_by ? 4:6]);

    if( dissmissed_by )
        return;

    t_tools.t_event_add_e_consumed_by(e, caller);

    if( e.ctrlKey ) return;

    if( e.stopPropagation          ) e.stopPropagation();           /* stop bubbling phase #3 handlers */
    if( e.stopImmediatePropagation ) e.stopImmediatePropagation();  /* stop   target phase #2 handlers */
    if( e.preventDefault           ) e.preventDefault();            /* i.e. return false from within on<event> attribute handler */
/*
console.log("t_wording_capture_click");
console.dir(e);
*/
};
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_wording"
    , logging : function(value) { if(value != undefined) DOM_WORDING_LOG = value; dom_store.t_store_set_value("DOM_WORDING_LOG", DOM_WORDING_LOG); return DOM_WORDING_LOG; }
    , tagging : function(value) { if(value != undefined) DOM_WORDING_TAG = value; dom_store.t_store_set_value("DOM_WORDING_TAG", DOM_WORDING_TAG); return DOM_WORDING_TAG; }
    , t_wording_IMPORT

    , t_wording_cycle

    /* PLAYGROUND ONLY */
/*{{{
    , t_wording_activate
    , t_wording_inject
    , t_wording_init
    , t_wording_inject_css
    , t_wording_by_href
    , t_wording_capture_click
}}}*/
};

/*}}}*/

})();

