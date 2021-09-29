/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_details                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* eslint-disable no-warning-comments   */

/* globals console                      */
/* globals document                     */
/* globals localStorage, setTimeout     */

/* globals dom_log                      */
/* globals dom_util                     */
/* globals dom_store                    */


/* exported dom_details, DOM_DETAILS_JS_TAG */

const DOM_DETAILS_JS_ID        = "dom_details_js";
const DOM_DETAILS_JS_TAG       = DOM_DETAILS_JS_ID  +" (210928:19h:58)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let dom_details         = (function() {
"use strict";
let   DOM_DETAILS_LOG   = false;
let   DOM_DETAILS_TAG   = false;

/*➔ t_details_IMPORT {{{*/
/* eslint-disable no-unused-vars */
let t_details_IMPORT    = function(log_this)
{
    details_INTERN();

    DOM_DETAILS_LOG     = DOM_DETAILS_LOG   || localStorage_getItem("DOM_DETAILS_LOG");
    DOM_DETAILS_TAG     = DOM_DETAILS_TAG   || localStorage_getItem("DOM_DETAILS_TAG");
};
/*}}}*/
/*_   details_INTERN {{{*/
/*{{{*/

/* dom_log {{{*/
let lb0="", lb1="", lb2="", lb3="", lb4="", lb5="", lb6="", lb7="", lb8="", lb9="", lbX="";
let lbA="", lbB="", lbC="", lbF="", lbH="", lbL="", lbR="", lbS="", lbb=""                ;
let lf0="", lf1="", lf2="", lf3="", lf4="", lf5="", lf6="", lf7="", lf8="", lf9="", lfX="";

let log=console.log, logBIG=log, log_key_val, log_key_val_group;


/*}}}*/
/* dom_util {{{*/
let add_el_class;
let del_el_class;
let get_el_child_with_tag;
let get_el_sibling_with_tag;
let get_id_or_tag;
let get_id_or_tag_and_className;
let get_nodeXPath;
let has_el_class;
let is_el_or_child_of_parent_el;

/*}}}*/
/* dom_store {{{*/

let localStorage_delItem = (key    ) =>           localStorage.removeItem(key    );                                       /* eslint-disable-line no-unused-vars */
let localStorage_getItem = (key    ) =>           localStorage.getItem   (key    );                                       /* eslint-disable-line no-unused-vars */
let localStorage_setItem = (key,val) => { if(val) localStorage.setItem   (key,val); else localStorage.removeItem(key); }; /* eslint-disable-line no-unused-vars */

/*}}}*/

/*}}}*/
let   details_INTERN    = function()
{
/*{{{*/
let caller = "details_INTERN";

/*}}}*/
    /* dom_log {{{*/
    let dom_log_js
        = (typeof dom_log != "undefined")
        ?         dom_log
        :         dom_details_log;  /* javascript/dom_details_log.js */ /* eslint-disable-line no-undef */

    if( dom_log_js )
    {
        if(dom_log_js.LOG_BG_ARR) {
            [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX ] = dom_log_js.LOG_BG_ARR;
            [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb           ] = dom_log_js.LOG_XX_ARR;
            [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX ] = dom_log_js.LOG_FG_ARR;
        }

        ({  log
         ,  logBIG



         ,  log_key_val
         ,  log_key_val_group

        } = dom_log_js);

if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": ["+dom_log_js.name+"]" , 4);
    }
    else {

logBIG(caller+": [dom_log UNDEFINED]"   , 2);
    }
    /*}}}*/
    /* dom_util {{{*/
    let dom_util_js
        = (typeof dom_util != "undefined")
        ?         dom_util
        :         dom_details_util; /* javascript/dom_details_util.js */ /* eslint-disable-line no-undef */

    if( dom_util_js )
    {
        ({  add_el_class
         ,  del_el_class
         ,  get_el_child_with_tag
         ,  get_el_sibling_with_tag
         ,  get_id_or_tag
         ,  get_id_or_tag_and_className
         ,  get_nodeXPath
         ,  has_el_class
         ,  is_el_or_child_of_parent_el
        } = dom_util_js);

if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": ["+dom_util_js.name+"]"    , 4);
    }
    else {

logBIG(caller+": [dom_util UNDEFINED]"      , 2);
    }
    /*}}}*/
    /* dom_store {{{*/
    if(typeof dom_store != "undefined")
    {
        localStorage_getItem =          dom_store.t_store_getItem;
        localStorage_setItem =          dom_store.t_store_set_value;
        localStorage_delItem = (key) => dom_store.t_store_set_value(key,null);

if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": ["+dom_store.name+"]"      , 4);
    }
    /*}}}*/

};
/* eslint-enable no-unused-vars */
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ ➔ ONLOAD RESTORE SAVED DETAILS OPEN STATE                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
 /*➔ details_load_open_state {{{*/
let  details_load_open_state = function(container=document)
{
/*{{{*/
let caller = "details_load_open_state";

if(DOM_DETAILS_LOG) logBIG(caller, 8);
/*}}}*/
    /* ➔ RESTORE ONLOAD [open] STATE .. f(localStorage) {{{*/
    let        details_array = container.querySelectorAll("DETAILS");

    Array.from(details_array).forEach( (el) => {
        let open = (el.id) && localStorage_getItem(el.id+"_open");
        if( open ) {
            el.open = true;
if(DOM_DETAILS_LOG) log("➔ "+el.id+(el.open ? " OPENED":" NOT OPENED"));
        }
    });
    /*}}}*/
    /* 1. LISTEN TOGGLE DETAILS OPEN STATE {{{*/
    Array.from(details_array).forEach( (el) => {
        if(!el.id) return;
        el.addEventListener("toggle", details_ontoggle);
    });
    /*}}}*/
    /* 2. DETAILS RADIO-BEHAVIOR {{{*/
    details_radio_set_from_localStorage();

    /*}}}*/
    /* 3. OPEN LINKS HASH TARGETS DETAILS-CONTAINERS {{{*/
    details_add_hash_link_onclick_listener();

    /*}}}*/
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ 1. LISTEN TOGGLE DETAILS OPEN STATE       [localStorage details_id_open] │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*_ details_ontoggle {{{*/
let details_ontoggle = function(e)
{
if(details_ontoggle_listener_mutex) return;
/*{{{*/
let caller = "details_ontoggle";
if(DOM_DETAILS_LOG) log(caller+"("+e.target.tagName+") .. open=["+e.target.open+"]");

     let details_el = e.target;
/*   if(!details_el ) return; .. why is this required ? */

if(DOM_DETAILS_LOG) log("➔ details_el=["+(details_el.id || details_el.firstElementChild.textContent)+"] .. open=["+details_el.open+"]");
/*}}}*/

    if(!details_el.id) return;

    /*...................................*/ let key = details_el.id+"_open";
    if( details_el.open ) localStorage_setItem( key , "true");
    else                  localStorage_delItem( key         );

    if( details_el.open ) details_ontoggle_apply_radio_behavior( details_el );
    else                  details_ontoggle_close_children      ( details_el );
};
 /*}}}*/
/*_ details_ontoggle_apply_radio_behavior {{{*/
let details_ontoggle_apply_radio_behavior = function(details_el)
{
/*{{{*/
let caller = "details_ontoggle_apply_radio_behavior";

    let details_radio  = localStorage_getItem( DETAILS_RADIO_ID );
if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": details_radio=["+details_radio+"]", 4);
/*}}}*/
    if(!details_radio ) return;

    let parent = details_el.parentElement;
    for(let i=0; i<parent.children.length; ++i)
    {
        /* skip originating target */
        let sibling  = parent.children[i];
        if( sibling == details_el) continue;

        /* close other sibling */
        if((sibling.tagName == "DETAILS") && sibling.open)
        {
if(DOM_DETAILS_LOG) log("...close sibling=["+(sibling.id || sibling.firstElementChild.textContent)+"]");

            sibling.open = false;

            /* store identified open state */
            if(sibling.id)
                localStorage_delItem(sibling.id+"_open");
        }
    }
};
/*}}}*/
/*_ details_ontoggle_close_children {{{*/
let details_ontoggle_close_children = function(parent_details)
{
    /*{{{*/
    let caller = "details_ontoggle_close_children";
    if(DOM_DETAILS_LOG) logBIG(caller+"("+get_id_or_tag_and_className(parent_details)+") .. open=["+parent_details.open+"]", 2);

    /*}}}*/

    let el_array
        = Array.from( parent_details.querySelectorAll("DETAILS[open]") );

    el_array.forEach( (child_details) => {

        child_details.open = false;

        if(child_details.id)
        {
            let key = child_details.id+"_open";
            localStorage_delItem( key );
        }
    });
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ 2. DETAILS RADIO-BEHAVIOR                   [localStorage details_radio] │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*{{{*/
const DETAILS_RADIO_ID = "details_radio";

/*}}}*/
/*➔ details_radio_toggle {{{*/
let details_radio_toggle = function(e)
{
//console.log("details_radio_toggle")
//console.log("DOM_DETAILS_LOG=["+DOM_DETAILS_LOG+"]")

if(DOM_DETAILS_LOG) log("details_radio_toggle("+e.target.tagName+")");
    /* INPUT {{{*/
    let { input , details_radio_el } = details_radio_get_input(e);

    /*}}}*/
    /* GET CURRENT STATE {{{*/
    let state
        = input
        ? ((e.target != input) ? input.checked : !input.checked)
        : has_el_class(details_radio_el, "checked");

    /*}}}*/
    /* NEW TOGGLE STATE {{{*/
    state = !state;

    if( input && (!e || (input != e.target))) /* update if not the event initiator */
        input.checked = state;

    /*}}}*/
    /* ➔ [TOGGLE details_radio_el.checked] {{{*/
    if( details_radio_el )
    {
        if(state) add_el_class(details_radio_el, "checked"); /* state [false ➔  true] */
        else      del_el_class(details_radio_el, "checked"); /* state [ true ➔ false] */
    }

    /*}}}*/
    /* STORE NEW STATE {{{*/
    if(state) localStorage_setItem(DETAILS_RADIO_ID,  "true");
    else      localStorage_setItem(DETAILS_RADIO_ID,   null );

    /*}}}*/
/*{{{*/
if(DOM_DETAILS_LOG || DOM_DETAILS_TAG)
    log_key_val_group("details_radio_toggle: ...state=["+state+"]"
        , { state
          , input
          , details_radio_el
          , e
          , e_target : (e ? e.target : "")
        }
        , (state ? 4:8)
        , false);
/*}}}*/
};
/*}}}*/
/*_ details_radio_set_from_localStorage {{{*/
let details_radio_set_from_localStorage = function()
{
/*{{{*/
if(DOM_DETAILS_LOG) log("details_radio_set_from_localStorage");

/*}}}*/
    /* UI [input] [details_radio_el] {{{*/
    let { input , details_radio_el } = details_radio_get_input();

    if(!input) return;
    /*}}}*/
    /* GET STORED STATE {{{*/
    let state = localStorage_getItem( DETAILS_RADIO_ID );

    /*}}}*/
    /* SHOW STATE {{{*/
    if( input ) {
        input.checked = state;
    }

    if(state) add_el_class(input.parentElement, "checked");
    else      del_el_class(input.parentElement, "checked");
    /*}}}*/
/*{{{*/
if(DOM_DETAILS_LOG)
    log_key_val_group("details_radio_set_from_localStorage: ...state=["+state+"]"
        , { state
          , input
          , details_radio_el
        }
        , (state ? 4:8)
        , false);
/*}}}*/
};
/*}}}*/
/*_ details_radio_get_input {{{*/
let details_radio_get_input = function(e)
{
/*{{{*/
let caller = "details_radio_get_input";

/*}}}*/
    /* DETAILS_RADIO_ID .. f(event target) .. tools .. document {{{*/
    let el
        = (e)
        ?  e.target
        :  document.querySelector("#"+DETAILS_RADIO_ID);

if(DOM_DETAILS_LOG) log(caller+": ["+DETAILS_RADIO_ID+"] ➔ el=["+get_id_or_tag(el)+"]");
    if(!el) return {};

    /*}}}*/
    /* [input] {{{*/
    let input
        =                                  ((el.tagName == "INPUT") && el)
        || get_el_child_with_tag  ( el          , "INPUT")
        || get_el_sibling_with_tag( el          , "INPUT");


    /*}}}*/
    /* [details_radio_el] {{{*/
    let details_radio_el
        = input
        ? input.parentElement
        : document.querySelector("#"+DETAILS_RADIO_ID);

    if(!details_radio_el)
        details_radio_el = document.getElementById( DETAILS_RADIO_ID );

    /*}}}*/
/*{{{*/
if(DOM_DETAILS_LOG)
    log_key_val_group(caller+": ...return ["+(input ? input.tagName : "")+"]"
        , { e
          , e_target         : (e ? e.target : "")
          , el
          , details_radio_el : get_nodeXPath( details_radio_el )+" ["+get_id_or_tag( details_radio_el )+"]"
          , input            : get_nodeXPath( input            )+" ["+get_id_or_tag( input            )+"]"
        }
        , 4
        , true);
/*}}}*/
    return { input , details_radio_el };
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ 3. OPEN LINKS HASH TARGETS DETAILS-CONTAINERS     ➔ [put target in view] │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ details_has_closed_el_parent {{{*/
let details_has_closed_el_parent = function(el)
{
    let   details_el = el.parentElement;
    while(details_el)
    {
        /* OPENED PARENT DETAILS {{{*/
        if(details_el.nodeName == "DETAILS")
        {
/*{{{
            let el_in_a_visible_summary
                =    ( el.nodeName        == "SUMMARY")
                ||   ( el.parentElement   == details_el);
}}}*/
            /* a details summary is still visible when closed */
            let details_el_summary
                = details_el.firstElementChild;

            let el_in_a_visible_summary
                = is_el_or_child_of_parent_el(el, details_el_summary);

            if(   !details_el.open
               && !el_in_a_visible_summary)
                return true;
        }
        /*}}}*/
        details_el   = details_el.parentElement;
    }
    return false;
};
/*}}}*/
/*➔ details_open_closed_el_parent {{{*/
let details_open_closed_el_parent = function(el)
{

    let   details_el = el.parentElement;
    while(details_el)
    {
        if(details_el.nodeName == "DETAILS")
        {
            if(!details_el.open)
            {
if(DOM_DETAILS_LOG) logBIG("details_open_closed_el_parent("+get_id_or_tag_and_className(el)+") ➔ open details_el "+get_nodeXPath(details_el));

                details_el.open = true;
            }
        }
        details_el   = details_el.parentElement;
    }
    el.open = true;
};
/*}}}*/
/*_ details_add_hash_link_onclick_listener {{{*/
let details_add_hash_link_onclick_listener = function(el=document)
{
/*{{{*/
let caller = "details_add_hash_link_onclick_listener";

if(DOM_DETAILS_LOG) log(caller+"(el "+get_id_or_tag_and_className(el)+")");
/*}}}*/
    /* [details_hash_link_onclick] {{{*/
    let           details_hash_links = document.querySelectorAll("A[href^='#']");
    Array.from(   details_hash_links)
        .forEach((details_hash_link ) => {
            /**/  details_hash_link.addEventListener("click", details_hash_link_onclick);
        });
    /*}}}*/
if(DOM_DETAILS_LOG || DOM_DETAILS_TAG) logBIG(caller+": "+details_hash_links.length+" details_hash_links", 7);
};
/*}}}*/
/*_ details_hash_link_onclick {{{*/
let details_hash_link_onclick = function(e)
{
let caller = "details_hash_link_onclick";

    let        link = e.target;
    if(              !link.hash) return;

    let  name_or_id = link.hash.substr(1);
    let   id_target = document.getElementById(          name_or_id     );
    let name_target = document.querySelector ( "[name="+name_or_id+"]" );
    let link_target = id_target || name_target;

if(DOM_DETAILS_LOG)
    log_key_val(caller
                , {  name_or_id
                   , id_target
                   , name_target
                   , link_target
                });
if(DOM_DETAILS_LOG) log("%c"+caller+" %c"+name_or_id+"%c➔%c"+get_nodeXPath(link_target), lbH+lf3, lbH, lbL+lf4, lbR+lf5);


    if( link_target )
        details_open_closed_el_parent( link_target );

};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ ➔ OPEN-CLOSE ALL DETAILS CONTAINERS                                      │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ details_close_opened {{{*/
let details_close_opened = function()
{
    prevent_details_ontoggle_listener();
    let       el_array = Array.from( document.querySelectorAll("DETAILS[open]") );
    if(       !el_array.length) {
if(DOM_DETAILS_LOG) log("FOUND NO OPENED DETAILS TO CLOSE");
        return;
    }
if(DOM_DETAILS_LOG) log("CLOSING "+el_array.length+" OPENED DETAILS");

    el_array.forEach( (el) => { el.open = false; });

    setTimeout(restore_details_ontoggle_listener, 0);
};
/*}}}*/
/*➔ details_open_closed {{{*/
let details_open_closed = function()
{
    prevent_details_ontoggle_listener();
    let       el_array = Array.from( document.querySelectorAll("DETAILS:not([open])") );
    if(       !el_array.length) {
if(DOM_DETAILS_LOG) log("FOUND NO OPENED DETAILS TO OPEN");
        return;
    }
if(DOM_DETAILS_LOG) log("OPENING "+el_array.length+" CLOSED DETAILS");

    el_array.forEach( (el) => { el.open =  true; });

    setTimeout(restore_details_ontoggle_listener, 0);
};
/*}}}*/
/*_ prevent_details_ontoggle_listener {{{*/
/*{{{*/
const DETAILS_ONTOGGLE_LISTENER_DELAY = 500;
let   details_ontoggle_listener_mutex;

/*}}}*/
let prevent_details_ontoggle_listener = function()
{
    /* sync .. (effective on call) */
if(DOM_DETAILS_LOG) logBIG("prevent_details_ontoggle_listener",7);
    details_ontoggle_listener_mutex   =  true;
};
/*}}}*/
/*_ restore_details_ontoggle_listener {{{*/
let restore_details_ontoggle_listener = function()
{
    /* async .. (effective on calling thread termination) */
    setTimeout(function() {
if(DOM_DETAILS_LOG) logBIG("restore_details_ontoggle_listener",6);
            details_ontoggle_listener_mutex = false;
        }
        , DETAILS_ONTOGGLE_LISTENER_DELAY);
};
/*}}}*/


/* EXPORT */
/*{{{*/
/*_ t_details_set_state {{{*/
let t_details_set_state = function(label,state)
{
    if(    state != undefined)
    {
        if(state) localStorage.setItem   (label, "true");
        else      localStorage.removeItem(label        );
        return !!state;
    }
    else {
        return    localStorage.getItem   (label        );
    }
};
/*}}}*/

return { name    : "dom_details"
    ,    logging : (state) => { DOM_DETAILS_LOG = dom_details.t_details_set_state("DOM_DETAILS_LOG", state); return DOM_DETAILS_LOG; }
    ,    tagging : (state) => { DOM_DETAILS_TAG = dom_details.t_details_set_state("DOM_DETAILS_TAG", state); return DOM_DETAILS_TAG; }
    ,    t_details_IMPORT
    ,    t_details_set_state

    /*   --------------------------------- CALLERS:       */

    ,    details_load_open_state        /* TOGGLE-EVENT   */
    ,    details_radio_toggle           /* RADIO-BEHAVIOR */

    ,    details_has_closed_el_parent   /* dom_seek       */
    ,    details_open_closed_el_parent  /* dom_seek       */

    ,    details_close_opened           /* HTML TOOL      */
    ,    details_open_closed            /* HTML TOOL      */

};
/*}}}*/

}());

