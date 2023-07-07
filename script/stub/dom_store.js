/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_store                                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals localStorage */

/* exported dom_store, DOM_STORE_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_STORE_JS_ID     = "dom_store_js";
const DOM_STORE_JS_TAG    = DOM_STORE_JS_ID  +" (230707:21h:46)";
/*}}}*/
let dom_store   = (function() {
"use strict";

    let localStorage_setItem = function(key,val) {          try { if(val)  localStorage.setItem   (key,val); else localStorage.removeItem(key); } catch(ex) {} };
    let localStorage_getItem = function(key    ) { let val; try {    val = localStorage.getItem   (key    );                                    } catch(ex) {} return val; };
    let localStorage_delItem = function(key    ) {          try { /*...*/  localStorage.removeItem(key    );                                    } catch(ex) {} };

    return { name : "dom_store"
        , setItem : localStorage_setItem
        , getItem : localStorage_getItem
        , delItem : localStorage_delItem

    };
}());
