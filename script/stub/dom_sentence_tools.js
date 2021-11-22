/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_sentence_tools             [dom_sentence] ➔ [dom_tools] dependencies │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals setTimeout */
/* globals document */

/* exported dom_sentence_tools */

const DOM_SENTENCE_TOOLS_JS_ID        = "dom_sentence_tools_js";
const DOM_SENTENCE_TOOLS_JS_TAG       = DOM_SENTENCE_TOOLS_JS_ID  +" (211122:19h:24)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let dom_sentence_tools   = (function() {
"use strict";

/* NOT_MOVED_ENOUGH {{{*/
/*{{{*/
const CSS_NOT_MOVED_ENOUGH = "not_moved_enough";

/*}}}*/
/*_ t_hotspot_add_status_NOT_MOVED_ENOUGH {{{*/
let t_hotspot_add_status_NOT_MOVED_ENOUGH   = function()
{
    document.body.classList.add( CSS_NOT_MOVED_ENOUGH );
};
/*}}}*/
/*_ t_hotspot_del_status_NOT_MOVED_ENOUGH {{{*/
let t_hotspot_del_status_NOT_MOVED_ENOUGH   = function()
{
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

    document.body.classList.add( CSS_MOVE_ON_COOLDOWN );

    if(!move_on_cooldown_timer)
        move_on_cooldown_timer = setTimeout(move_on_cooldown_handler, time_left);

};
/*}}}*/
/*_ move_on_cooldown_handler {{{*/
let move_on_cooldown_handler = function()
{
    move_on_cooldown_timer = null;
    t_hotspot_del_status_MOVE_ON_COOLDOWN();
};
/*}}}*/
let t_hotspot_del_status_MOVE_ON_COOLDOWN   = function() { document.body.classList.remove( CSS_MOVE_ON_COOLDOWN ); };
/*}}}*/

/* EXPORT */
/*{{{*/
return { t_hotspot_add_status_MOVE_ON_COOLDOWN
  ,      t_hotspot_add_status_NOT_MOVED_ENOUGH
  ,      t_hotspot_del_status_MOVE_ON_COOLDOWN
  ,      t_hotspot_del_status_NOT_MOVED_ENOUGH
  //     dom_tools.t_scrollIntoViewIfNeeded
};
/*}}}*/

}());
