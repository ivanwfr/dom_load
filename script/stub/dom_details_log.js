/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_details_log                                                          │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals console */

/* exported dom_details_log, DOM_DETAILS_LOG_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_DETAILS_LOG_JS_ID     = "dom_details_log_js";
const DOM_DETAILS_LOG_JS_TAG    = DOM_DETAILS_LOG_JS_ID  +" (210928:14h:50)";
/*}}}*/
let dom_details_log      = (function() {
"use strict";

let   log                = console.log;
let   logBIG             = (msg)    => log("%c"+msg, "font-size:150%; font-weight:100;");



let   log_key_val        = (name,o) => { console.log(name+":"); console.dir(o); };
let   log_key_val_group  = log_key_val;


return { name : "dom_details_log"
    ,    log
    ,    logBIG




    ,    log_key_val
    ,    log_key_val_group
};

}());

