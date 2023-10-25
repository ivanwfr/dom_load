/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_store                                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals localStorage */

/* exported dom_store, DOM_STORE_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_STORE_JS_ID     = "dom_store_js";
const DOM_STORE_JS_TAG    = DOM_STORE_JS_ID  +" (230821:21h:18)";
/*}}}*/
let dom_store   = (function() {
"use strict";

    let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
    let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
    let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

    return { name : "dom_store"
        , t_store_delItem   : localStorage_delItem
        , t_store_getItem   : localStorage_getItem
        , t_store_setItem   : localStorage_setItem
        , t_store_set_state : localStorage_setItem
        , t_store_set_value : localStorage_setItem

    };
}());
