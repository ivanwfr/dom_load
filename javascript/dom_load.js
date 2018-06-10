javascript: (function(){
/*dom_load 'use strict';*/
/* TOOLS ALREADY LOADED {{{*/
if((typeof DOM_TOOLS_JS_ID) != "undefined") {
    let   msg = "*** TOOLS ALREADY LOADED";
    try { msg += "\n*** DOM_TOOLS_JS_ID\n*** "+DOM_LOAD_ID ; alert(msg); } catch(ex) { console.log(msg); }
    return null;
}
/*}}}*/
DOM_LOAD_ID             = "dom_load";
DOM_LOAD_TAG            = DOM_LOAD_ID       +" (180609:22h)"; let tag = DOM_LOAD_TAG;
DOM_HOST_CSS_ID         = "dom_host_css";
DOM_TOOLS_CSS_ID        = "dom_tools_css";
DOM_GRID_CSS_ID         = "dom_grid_css";
DOM_TOOLS_HTML_ID       = "dom_tools_html";
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
/*}}}*/

/* INJECT DATA */
  /**   1 HOST   CSS dom_host_css_data {{{*/
/*
../stylesheet/dom_host.css
*/
dom_host_css_data ="data:text/css,"+ escape(`
/*{{{*/

#dom_host_css_tag   { content: "dom_host_css (180603:18h)"; }

.overflow_visi * { overflow        : visible !important; }
.scroll_smooth   { scroll-behavior : smooth  !important; }

.containers_hi .viewable        { outline             : red 5px solid  !important; };
.containers_hi .viewable        { transition-duration : 500ms; }
/*
*/

/* zoom {{{*/
.zoom_70  { zoom :  70%; }
.zoom_80  { zoom :  80%; }
.zoom_90  { zoom :  90%; }

.zoom_100 { zoom : 100%; }
.zoom_110 { zoom : 110%; }
.zoom_120 { zoom : 120%; }

.zoom_130 { zoom : 130%; }
.zoom_150 { zoom : 150%; }
.zoom_160 { zoom : 160%; }

.zoom_180 { zoom : 180%; }
.zoom_200 { zoom : 200%; }
.zoom_220 { zoom : 220%; }

/*}}}*/
/* scale {{{*/
/*
.scale_70  { transform : scale(0.70); transform-origin : 0 0 0; }
.scale_80  { transform : scale(0.80); transform-origin : 0 0 0; }
.scale_90  { transform : scale(0.90); transform-origin : 0 0 0; }

.scale_100 { transform : scale(1.00); transform-origin : 0 0 0; }
.scale_110 { transform : scale(1.10); transform-origin : 0 0 0; }
.scale_120 { transform : scale(1.20); transform-origin : 0 0 0; }

.scale_130 { transform : scale(1.30); transform-origin : 0 0 0; }
.scale_150 { transform : scale(1.50); transform-origin : 0 0 0; }
.scale_160 { transform : scale(1.60); transform-origin : 0 0 0; }

.scale_180 { transform : scale(1.80); transform-origin : 0 0 0; }
.scale_200 { transform : scale(2.00); transform-origin : 0 0 0; }
.scale_220 { transform : scale(2.20); transform-origin : 0 0 0; }
*/
/*}}}*/

.pat_div {
    display       : inline-block !important;
    margin        : 1em;
    border-radius : 1ex;
    border        : 3px solid #aaa;
    padding       : 1em;
}

#shadow_host {
    position : absolute;
    left     : 0;
    top      : 0;
    margin   : 0;
    border   : 0;
    padding  : 0;
    width    : 0px;
    height   : 0px;
}

/* TYPE {{{*/

em {
    background-color  : #fafafa;
    border            : 0px solid #aaa;
    border-radius     : 5px;
    color             : #444;
    font-style        : normal;
}

input       { border  : 6px #eee solid;        }
input:focus { outline : 0;                     }
input:focus { border  : 6px solid transparent; }

/* }}} */
/* COLOR CODED {{{ */
.cc1 , .select1 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc2 , .select2 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc3 , .select3 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc4 , .select4 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc5 , .select5 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc6 , .select6 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc7 , .select7 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc8 , .select8 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc9 , .select9 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset !important; }
.cc0 , .select0 { box-shadow: #FFF               0 0.1em 0.1em inset; }

/* ECC #964B00 #FF0000 #FFA500 #FFFF00 #9ACD32 #6495ED #EE82EE #A0A0A0 #FFFFFF #CFB53B #C0C0C0 */
/*      111111  222222  333333  444444  555555  666666  777777  888888  999999  000000  111111 */
.cc1 , .select1 , .select1 em { color: #FFF !important; background-color:#964B00 !important; padding:0 0px 0 0px !important; }
.cc2 , .select2 , .select2 em { color: #FFF !important; background-color:#FF0000 !important; padding:0 0px 0 0px !important; }
.cc3 , .select3 , .select3 em { color: #000 !important; background-color:#FFA500 !important; padding:0 0px 0 0px !important; }
.cc4 , .select4 , .select4 em { color: #000 !important; background-color:#FFFF00 !important; padding:0 0px 0 0px !important; }
.cc5 , .select5 , .select5 em { color: #000 !important; background-color:#9ACD32 !important; padding:0 0px 0 0px !important; }
.cc6 , .select6 , .select6 em { color: #000 !important; background-color:#6495ED !important; padding:0 0px 0 0px !important; }
.cc7 , .select7 , .select7 em { color: #000 !important; background-color:#EE82EE !important; padding:0 0px 0 0px !important; }
.cc8 , .select8 , .select8 em { color: #000 !important; background-color:#A0A0A0 !important; padding:0 0px 0 0px !important; }
.cc9 , .select9 , .select9 em { color: #000 !important; background-color:#FFFFFF !important; padding:0 0px 0 0px !important; }
.cc0 , .select0 , .select0 em { color: #000 !important; background-color:#888    !important; padding:0 0px 0 0px !important; }

.select_words_exact     { border:0px red         !important; border-radius:.5ex;                            }
.select_words_segment   { border:0px transparent !important; border-radius: 0  ;                            }
.select_words_segment   { border:0px             !important;       outline: 3px rgba(128,128,128,.5) solid; }
.select_words_head_tail { border:0px             !important; border-radius: 1ex;                            }

/* }}} */
/* big small {{{*/
/*{{{
*** clash with https://www.google.fr/search:
.big   { font-size : 200% !important; vertical-align : middle; }
.small { font-size :  80% !important; vertical-align : middle; }
}}}*/
/*}}}*/
/* cursor {{{ */

em.select1 { cursor : all-scroll !important; }
em.select2 { cursor : all-scroll !important; }
em.select3 { cursor : all-scroll !important; }
em.select4 { cursor : all-scroll !important; }
em.select5 { cursor : all-scroll !important; }
em.select6 { cursor : all-scroll !important; }
em.select7 { cursor : all-scroll !important; }
em.select8 { cursor : all-scroll !important; }
em.select9 { cursor : all-scroll !important; }
em.select0 { cursor : all-scroll !important; }

/*}}}*/
/* container_dark container_light {{{*/

@media only screen and (max-resolution :  96dpi)
{
               .scrolling .container_dark  ,
               .scrolling .container_light { transition-duration :  100ms; } /* start scrolling */ 
                          .container_dark  ,
                          .container_light { transition-duration :  100ms; } /* done scrolling */
               
.scroll_smooth .scrolling .container_dark  ,
.scroll_smooth .scrolling .container_light { transition-duration :  250ms; } /* start scrolling */
.scroll_smooth            .container_dark  ,
.scroll_smooth            .container_light { transition-duration :  500ms; } /* done scrolling */
               
               .scrolling .container_dark  { box-shadow          : 0   0  2px 8px    rgba(255,  0,  0, .8); }
               .scrolling .container_light { box-shadow          : 0   0  2px 8px    rgba(  0,  0,255, .8); }
.scroll_smooth .scrolling .container_dark  { box-shadow          : 0   0 16px 8px    rgba(255,  0,255, .8); }
.scroll_smooth .scrolling .container_light { box-shadow          : 0   0 16px 8px    rgba(  0,255,  0, .8); }
/* ............................................................... ox oy blur spread color ................*/
}

.containers_hi       :not(.container_light):not(.container_dark ):not(em) { background-image: none !important; box-shadow:none !important; text-shadow:none !important; }
.containers_hi.dark                        :not(.container_dark ):not(em) { background-color: #222 !important; color :rgba(255,255,255,0.5) !important; }
.containers_hi.light                       :not(.container_light):not(em) { background-color: #EEE !important; color :rgba(  0,  0,  0,0.5) !important; }

.container_dark, .container_light { border        : 0px;                               }
.container_dark, .container_light { border-radius : 5px !important;                    }
.container_dark, .container_light { box-shadow    : 2px 2px 6px rgba(000,000,000,0.7); }

.container_dark                   { color         : white !important; }
.container_light                  { color         : black !important; }

.container_dark                   { background    : linear-gradient(110deg, rgba( 68, 28,  0,.3), rgba(255, 106, 26,.3)) !important; }
.container_light                  { background    : linear-gradient(110deg, rgba(255,130,  0,.3), rgba(  0,   0,  0,.3)) !important; }

.container_selected               { outline       : 1px dashed orange; }

/*}}}*/

.on_work_el_left  { outline : .5em dotted  green !important; }
.on_work_el_right { outline : .5em dotted  red   !important; }
.num_selected     { outline : .5em dotted  #A0F  !important; }
/*
*/
body *::selection {
/*
    background: rgba(192,192,255,0.3);
*/
    background:black;
    color:white;
}
body.cannot_expand_to_selection *::selection {
    background: red;
/*
    background: navy !important;
    font-weight:900;
*/
}

/*}}}*/
`
);
/*}}}*/
  /**  2 TOOLS  CSS dom_tools_css_data {{{*/
/*
../stylesheet/dom_tools.css
*/
dom_tools_css_data ="data:text/css,"+ escape(`
/*{{{*/

#dom_tools_css_tag  { content: "dom_tools_css (180607:20h)"; }
/* display_delayed {{{*/
.display_delayed {
    opacity             : 0.1;
    transition-duration : 500ms;
/*
    visibility : hidden !important;
    display    : none   !important;
*/
}
/*}}}*/
/*{{{*/
#dom_tools_css_tag  {
    border        : 5px dashed #FFAA00;
    border-radius : 2em;
    margin        : 1em;
}
/*}}}*/
/* zoom {{{*/
.zoom_70  { zoom :  70%; }
.zoom_80  { zoom :  80%; }
.zoom_90  { zoom :  90%; }

.zoom_100 { zoom : 100%; }
.zoom_110 { zoom : 110%; }
.zoom_120 { zoom : 120%; }

.zoom_130 { zoom : 130%; }
.zoom_150 { zoom : 150%; }
.zoom_160 { zoom : 160%; }

.zoom_180 { zoom : 180%; }
.zoom_200 { zoom : 200%; }
.zoom_220 { zoom : 220%; }

/*}}}*/
/* HTML {{{*/

global-box { margin: 0 0 5px 0; }

input {
    border               : 2px solid transparent;
    user-select          : none ;
}
input:focus {
    border               : 2px solid black;
}
.focussed {
    border               : 2px solid transparent !important;
    outline              : 2px solid red         !important;
               color     : white                 !important;
    background-color     : black                 !important;
}

em {
    border           : 1px solid #aaa;
    border-radius    : 5px;
    color            : #444;
    background-color : #fafafa;
    font-style       : normal;
}
/*}}}*/
/* NOTE {{{ */
.todo { color:red; }

/* }}} */
/* COLOR-CODED {{{ */
.cc1 , .select1 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc2 , .select2 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc3 , .select3 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc4 , .select4 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc5 , .select5 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc6 , .select6 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc7 , .select7 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc8 , .select8 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc9 , .select9 { box-shadow: rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset; }
.cc0 , .select0 { box-shadow: #FFF               0 0.1em 0.1em inset; }

/* ECC #964B00 #FF0000 #FFA500 #FFFF00 #9ACD32 #6495ED #EE82EE #A0A0A0 #FFFFFF #CFB53B #C0C0C0 */
/*      111111  222222  333333  444444  555555  666666  777777  888888  999999  000000  111111 */
.cc1 , .select1 , .select1 em { color: #FFF; background-color:#964B00 !important; padding:0 3px 0 3px; }
.cc2 , .select2 , .select2 em { color: #FFF; background-color:#FF0000 !important; padding:0 3px 0 3px; }
.cc3 , .select3 , .select3 em { color: #000; background-color:#FFA500 !important; padding:0 3px 0 3px; }
.cc4 , .select4 , .select4 em { color: #000; background-color:#FFFF00 !important; padding:0 3px 0 3px; }
.cc5 , .select5 , .select5 em { color: #000; background-color:#9ACD32 !important; padding:0 3px 0 3px; }
.cc6 , .select6 , .select6 em { color: #000; background-color:#6495ED !important; padding:0 3px 0 3px; }
.cc7 , .select7 , .select7 em { color: #000; background-color:#EE82EE !important; padding:0 3px 0 3px; }
.cc8 , .select8 , .select8 em { color: #000; background-color:#A0A0A0 !important; padding:0 3px 0 3px; }
.cc9 , .select9 , .select9 em { color: #000; background-color:#FFFFFF !important; padding:0 3px 0 3px; }
.cc0 , .select0 , .select0 em { color: #FFF; background-color:#202020 !important; padding:0 3px 0 3px; }

.rgba1 { background-color : rgba(150,  75,   0, .5); }
.rgba2 { background-color : rgba(255,   0,   0, .5); }
.rgba3 { background-color : rgba(255, 165,   0, .5); }
.rgba4 { background-color : rgba(255, 255,   0, .5); }
.rgba5 { background-color : rgba(154, 205,  50, .5); }
.rgba6 { background-color : rgba(100, 149, 237, .5); }
.rgba7 { background-color : rgba(238, 130, 238, .5); }
.rgba8 { background-color : rgba(160, 160, 160, .5); }
.rgba9 { background-color : rgba(255, 255, 255, .5); }
.rgba0 { background-color : rgba(128, 128, 128, .5); }


.select1 { cursor : all-scroll; }
.select2 { cursor : all-scroll; }
.select3 { cursor : all-scroll; }
.select4 { cursor : all-scroll; }
.select5 { cursor : all-scroll; }
.select6 { cursor : all-scroll; }
.select7 { cursor : all-scroll; }
.select8 { cursor : all-scroll; }
.select9 { cursor : all-scroll; }
.select0 { cursor : all-scroll; }

/* }}} */
/* simplify-paint-complexity {{{*/
/*
:!start explorer https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas
:!start explorer https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count
:!start explorer https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/
...Warning: Do not promote elements unnecessarily.
*/
/*
.transcript            { will-change : transform; transform : translateZ(0); }
*/

/*}}}*/
/* .transcript {{{*/

.transcript            { transform-origin     : 0% 0% 0;         }
.transcript            { cursor               : pointer;         }
.transcript            { margin               : .2em;            }
.transcript            { padding              : 1ex;             }
.transcript            { min-height           : 1em;             }

.transcript            { max-width            :  80%;            }
.transcript            { max-height           :  90%;            }

.transcript            { overflow             : hidden; }
#transcript1           { overflow             :   auto; }
#transcript2           { overflow             :   auto; }

.transcript::-webkit-scrollbar                       { width         :  3em; }
.transcript::-webkit-scrollbar                       { height        :  3em; }
.transcript::-webkit-scrollbar-thumb                 { border-radius : 96px; }
.transcript::-webkit-scrollbar-track                 { border-radius : 96px; }
.transcript::-webkit-scrollbar-thumb                 { box-shadow    : inset 0 0 6px rgba(0,0,0,0.5); }
.transcript::-webkit-scrollbar-track                 { box-shadow    : inset 0 0 6px rgba(0,0,0,0.3); }
.transcript::-webkit-scrollbar-thumb                 { box-shadow    : rgba(  0,  0,  0,0.5) 0 8px 24px; }
.transcript::-webkit-scrollbar-thumb                 { background    : rgba( 24, 24, 24,0.5); }
.transcript::-webkit-scrollbar-thumb:window-inactive { background    : rgba( 24, 24, 24,0.2); }
.transcript::-webkit-scrollbar-track                 { background    : rgba( 96, 96, 96,0.4); }
.transcript::-webkit-scrollbar-track:window-inactive { background    : rgba(128,128,128,0.2); }

.transcript>div        { margin               : .2em;            }

.transcript *          { user-select  : none;            }
.transcript *          { vertical-align       : middle;          }
.transcript *          { font-family          : monospace;       }

.transcript blockquote { margin               : .2em;                     }
.transcript blockquote { padding              : 1ex;                      }
.transcript blockquote { white-space          : normal !important;        }
.transcript blockquote { width                : 48em;                     }

.transcript div        { cursor               : pointer;         }
/*
.transcript div        { display              : inline-block;    }
*/
.transcript div        { display              : table-cell;      }
.transcript div        { margin               : .2em;            }
.transcript div        { overflow             : hidden;          }
.transcript div        { padding              : 1ex;             }

.transcript em         { line-height          : 1.50em;          }

.transcript pre        { background           : initial;         }
.transcript pre        { padding              : 0 0 0 1ex;       }
.transcript pre        { text-align           : left;            }

.transcript sub        { vertical-align       : sub;             }
.transcript sup        { color                : white;           }
.transcript sup        { vertical-align       : super;           }

.transcript table      { user-select  : none;            }
.transcript table      { margin               : 0;               }
.transcript tr.slot    { font-size            : 200%;            }
.transcript th         { font-size            : 120%;            }
.transcript th         { padding              : 1ex;             }
.transcript th         { text-align           : left;            }
.transcript th         { text-shadow          : rgba( 50, 50, 50, 0.9) 1px 1px 2px !important; }
.transcript th         { font-weight          : 700; }
.transcript hr         { height               : 5px; }

.transcript td         { padding              : 1ex;             }
.transcript td         { text-align           : left;            }

.transcript ul         { line-height          : 0.75em;          }
.transcript ul         { margin               : .2em;            }
.transcript ul         { padding              : 0 0 0 2em;       }

.transcript_msg .info  {
    box-shadow  : 2px 2px 6px rgba(000,000,000,0.7) inset;
    font-family : "Comic sans ms";
}

      .transcript_msg { color       : #200; }
.dark .transcript_msg { color       : #FA0 !important; }

#table_params *   {     text-align : right  ; }

.div_match {
    border: solid 8px black !important;
}
.div_match div {
    border:solid 1px !important;
}

.em_match {
    box-shadow    : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
    font-size     : 200%;
}
.em_missing {
    color            : red;
    background-color : transparent;
    font-weight      : 700;
    box-shadow       : rgba(255, 0, 0, 0.3) 0 0.3em 0.3em inset;
}

.em_log {
    padding          : .2em;
    border-radius    : 50%;
    box-shadow       : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
}
.em_log span {
    border-radius    : .5em;
/*
    padding          : .5em;
*/
}

/*}}}*/

/* dom_tools_html ... {{{ */
/*
fails in webview at load time...
#dom_tools_html   {          visibility : hidden; }
*/
#dom_tools_html * { user-select : none;   }
#dom_tools_html * { -webkit-tap-highlight-color: rgba(255,0,0,.05); }

 #pat_bag
,#sel_bag
,#headsup
,#dom_traversal
,#dev_log_map
,#dev_log_calls
,#dom_load_tags
,#transcript1
,#transcript2
{
    min-width     : 8em;
    margin-bottom : 5em;
    font-weight   : 900;
}

 #pat_bag.scrolled
,#sel_bag.scrolled
,#headsup.scrolled
,#dom_traversal.scrolled
,#dev_log_map.scrolled
,#dev_log_calls.scrolled
,#dom_load_tags.scrolled
,#transcript1.scrolled
,#transcript2.scrolled
{
    border:1px dashed red;
/*
    width:36em;
*/
}
#transcript1 { border: 3px #964B00 solid !important; }
#transcript2 { border: 3px #FF0000 solid !important; }

#pat_bag.scrolled           { background-color: rgba(255,  0,  0,.1); }
#sel_bag.scrolled           { background-color: rgba(255,  0,  0,.1); }
#headsup.scrolled           { background-color: rgba(  0,255,  0,.1); }
#dom_traversal.scrolled     { background-color: rgba(  0,255,  0,.1); }
#dev_log_map.scrolled       { background-color: rgba(  0,  0,255,.1); }
#dev_log_calls.scrolled     { background-color: rgba(  0,  0,255,.1); }
#dom_load_tags.scrolled     { background-color: rgba(  0,  0,255,.1); }
#transcript1.scrolled       { background-color: rgba(255,255,  0,.1); }
#transcript2.scrolled       { background-color: rgba(255,255,  0,.1); }

 #pat_bag       label
,#sel_bag       label
,#headsup       label
,#dom_traversal label
{
    line-height   :  3em;
}

 #pat_bag>div>div
,#sel_bag>div>div
,#headsup>div>div
,#dom_traversal>div>div
{
    color         : #050505;
}

.toolbag_button {
    display       : inline-block;
    padding-left  : 1ex;
    padding-right : 1ex;
    cursor        : pointer;
}

/*}}}*/

/* pat_bag {{{ */
#pat_bag { float     : left;    }
#pat_bag { min-width :  8em;    }
#pat_bag { overflow  :  hidden; }

/*}}}*/
/* sel_bag {{{ */
#sel_bag { float : left; }

/*}}}*/

/* headsup {{{ */

#headsup {
    float          : left;
    margin         : 0 !important;
/*
    min-width      : 32em;
*/
    padding        : 10px 20px;

    color          : #050505;
    font-family    : Arial, Helvetica, sans-serif;
    font-size      : 14px;
    text-shadow    : 0px -1px 0px rgba(000,000,000,0.4), 0px 1px 0px rgba(255,255,255,0.3);
    vertical-align : top;
}

#headsup>* { float:left; }

#headsup em {
    margin     : 0;
    padding    : 0.1em;
    min-width  : 1.5em;
}

#headsup em:hover {
    box-shadow : rgba(128, 128, 128, 0.9) 0 0.1em 0.1em inset;
}

/* {{{
#headsup::after {
    float:left;
    clear:left;
    content     : "headsup::after";
    background  : red;
    border      : 2px yellow dashed;
    min-width   : 10em;
    min-height  : 10em;
    max-width   : 10em;
    max-height  : 10em;
    transform   : translate(0,100%);
}
}}}*/
/*}}}*/
/* headsup thumb_p {{{*/
#thumb_p {
    margin           : -.3em 1ex 0 -.3em !important;
    min-width        :   3em             !important;
    border           : 0;
    background-color : transparent;
    padding          : 0                 !important;
    color            : rgba(0,0,0,.9)    !important;
    font-size        : 200%;
}
/*}}}*/
/* headsup words_exact, ... {{{*/
#words_exact, #words_segment, #words_head_tail, #words_opcycle {
    border        : rgba(255,255,255,.2) solid;
    border-radius : 2em !important;
    font-size     : 160%;
    margin        : 0 !important;
    text-align    : center;
    text-shadow   : none;
}
#words_exact, #words_segment, #words_head_tail, #words_opcycle {
    box-shadow    : 0px 2px 4px rgba(  0,  0,  0,0.3);
}

#words_exact.checked, #words_segment.checked, #words_head_tail.checked, #words_opcycle.checked {
    box-shadow    : 0px 3px 3px rgba(255,255,255,0.3) !important;
}

#words_opcycle.checked                 { border-radius              : 50% 50% 10% 10%        !important; }
#words_opcycle.checked                 { transition-duration        : 100ms;                             }
#words_opcycle.checked                 { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
#words_opcycle.checked.words_exact     { transform                  : rotate(-45deg)         !important; }
#words_opcycle.checked.words_head_tail { transform                  : rotate( 45deg)         !important; }
#words_opcycle.checked.words_segment   { transform                  : rotate(  0deg)         !important; }

/*}}}*/
/* headsup reset {{{*/
#reset {
    color         : green;
    box-shadow    : 2px 2px 4px rgba(000,000,000,0.3);
    border-radius : 1.5em;
    text-align    : center;
    font-size     : 250%;
}
/*}}}*/
/* headsup tools_scroll {{{*/
#tools_scroll {
    float : left;
    clear : left;

    background    : linear-gradient(to bottom, #FFF   , #EB0   );
    border        : 0 !important;
    border-radius : 2em;
    box-shadow    : rgba(0, 0, 0, 0.3) 0 0.1em 0.5ex inset;
    font-size     : 300%;
    text-align    : center;
}
/*}}}*/
/* headsup wording {{{*/
 #wording
,#theme_dark
{
    background    : linear-gradient(to bottom, #FFF, #FF0);
    color         : #000;
}

 #wording
,#theme_dark
{
    border        : 0;
    border-radius : 2em;
    box-shadow    : rgba(0, 0, 0, 0.3) 0 0.1em 0.5ex inset;
    font-size     : 200%;
    margin        : 3px !important;
    text-align    : center;
}

 #wording.checked
,#theme_dark.checked {
    background    : linear-gradient(to bottom, #AAA, #200);
    color         : #FC0;
    margin        : 0   !important;
}
/*}}}*/
/* headsup containers_hi scroll_smooth overflow_visi {{{*/

#anchor_freeze, #containers_hi, #scroll_smooth, #overflow_visi { margin        : 3px                   !important; }
#anchor_freeze, #containers_hi, #scroll_smooth, #overflow_visi { border        : rgba(255,255,255,.9);             }
#anchor_freeze, #containers_hi, #scroll_smooth, #overflow_visi { border-radius : 2em                   !important; }
#anchor_freeze, #containers_hi, #scroll_smooth, #overflow_visi { color         : rgba(  0,  0,  0,.7);             }
#anchor_freeze, #containers_hi, #scroll_smooth, #overflow_visi { font-size     : 200%;                             }
#anchor_freeze, #containers_hi, #scroll_smooth, #overflow_visi { text-align    : center;                           }

#anchor_freeze.checked { margin        : 0    !important; }
#containers_hi.checked { margin        : 0    !important; }
#scroll_smooth.checked { margin        : 0    !important; }
#overflow_visi.checked { margin        : 0    !important; }

#anchor_freeze.checked { background    : linear-gradient(to bottom, #AAA, #200); }
#containers_hi.checked { background    : linear-gradient(to bottom, #AAA, #200); }
#scroll_smooth.checked { background    : linear-gradient(to bottom, #AAA, #200); }
#overflow_visi.checked { background    : linear-gradient(to bottom, #AAA, #200); }

#anchor_freeze.checked { color         : #D00 !important; }
#containers_hi.checked { color         : #FC0 !important; }
#scroll_smooth.checked { color         : #000 !important; }
#overflow_visi.checked { color         : #000 !important; }

#scroll_smooth::after {
    content          : '\\26AB'; /* MEDIUM BLACK CIRCLE */
    position         : absolute;
    transform        : translate(-80%, 5%) scale(1);
/*{{{
    margin-right     : 50%;
    font-size        : 200%;
    margin           : 0;
    top              : 15%;
    left             : 25%;
    transform-origin : 50% 50% 0;
    position         : absolute;
    top              : .2em;
    left             : .4em;
    line-height      : .8em;
    vertical-align   : middle;
    background-color : transparent;
    text-shadow      : none;
    font-weight      :  100;
    font-weight      : 100;
    }}}*/
}
#scroll_smooth.checked::after {
    transform        : translate(-80%, 10%) scale(2);
}

#overflow_visi::after {
    content          : '\\26AB'; /* MEDIUM BLACK CIRCLE */
    position         : absolute;
    transform        : translate(-80%, 5%) scale(1);
/*{{{
    margin-right     : 50%;
    font-size        : 200%;
    margin           : 0;
    top              : 15%;
    left             : 25%;
    transform-origin : 50% 50% 0;
    position         : absolute;
    top              : .2em;
    left             : .4em;
    line-height      : .8em;
    vertical-align   : middle;
    background-color : transparent;
    text-shadow      : none;
    font-weight      :  100;
    font-weight      : 100;
    }}}*/
}
#overflow_visi.checked::after {
    transform        : translate(-80%, 10%) scale(2);
}

/*}}}*/
/* headsup #tools_extras {{{*/
#tools_extras {
    background       : linear-gradient(to bottom, #FFF   , #EB0   );
    border        : 0 !important;
    border-radius : 2em;
    box-shadow    : rgba(0, 0, 0, 0.3) 0 0.1em 0.5ex inset;
    font-size     : 150%;
    text-align     : center;
    transform     : translate(   0%, 20%);
}
/*}}}*/

/* dom_traversal - NodeIterator TreeWalker childNodes pageNodes {{{*/
#dom_traversal {
/*
    margin-top  : 3em;
*/
    float       : left;
    clear       : left;
    white-space : nowrap;
}

#dom_traversal>table {
    width       : 100%;
    margin-top  :  1em;
}
#tools_node {
    outline    : 2px dashed red;
}

/*}}}*/

/* dev_log_map dev_log_calls dom_load_tags - dev_log_map RELOAD CLEAR t_log_regex  dom_load_tags {{{*/

 #dev_log_map   em
,#dev_log_calls em
,#dom_load_tags em
{
/*
    display     : inline-grid;
*/
    display     : inherit;
}

 #dev_log_map
,#dev_log_calls
,#dom_load_tags
{
    float       : left;
}

 #dev_log_map
,#dev_log_calls
{
    color       : #eee;
    font-family : "Comic sans ms";
    text-align  : left;
}
 #dev_log_map   em
,#dev_log_calls em
{
    text-align  : center;
}

 #dom_load_tags
{
    text-align  : right;
}

 #pat_bag
,#sel_bag
,#headsup
,#dom_traversal
,#dev_log_map
,#dev_log_calls
,#dom_load_tags
,#transcript1
,#transcript2
{
    padding:1ex;
}

 #pat_bag           em
,#sel_bag           em
,#headsup           em
,#dom_traversal     em
,#dev_log_map       em
,#dev_log_calls     em
,#dom_load_tags     em
,#transcript1       em
,#transcript2       em
{
    white-space    : nowrap;
    margin-top     : 2px;
}

#dom_load_tags em
{
    min-width      : 8em !important;
    padding-right  : 1em;
    vertical-align : super;
}

/*}}}*/

/* transcript1 transcript2 {{{*/
#transcript1 {
    float : left;
}
#transcript2 {
    float : left;
    clear : left;
}
/*}}}*/

/* big small {{{*/
.big   { font-size : 200% !important; vertical-align : middle; }
.small { font-size :  80% !important; vertical-align : middle; }

/*}}}*/
/* sym_XXX {{{*/
.sym_showing, .sym_hiding , .sym_backing,
.sym_colide , .sym_dismiss, .sym_binning,
.sym_bagger , .sym_docker ,
.sym_update , .sym_staged , .sym_result
{
    font-size    : 300% !important;
    font-weight  : 900  !important;
    text-shadow  : rgba(0,0,0, 0.4) .1em .1em .2em;
    line-height  : .6em;
    min-width : 1em !important;
    display : inline-block;
}

.sym_colide  { color : #F0F; }
.sym_dismiss { color : #F0F; }

.sym_update  { color : #FFA500; }
.sym_staged  { color : #6495ED; }
.sym_result  { color : #FFFF00; }

.sym_showing { color : black; text-shadow: 1px 1px 1px #FF0; font-weight:100 !important; }
.sym_hiding  { color : black; text-shadow: 1px 1px 1px #0F0; font-weight:100 !important; }
.sym_backing { color : black; text-shadow: 1px 1px 1px #F00; font-weight:100 !important; }
.sym_binning { color : #444 ; text-shadow: 1px 1px 1px #DDD; font-weight:100 !important; }

.sym_bagger  { color : #58C; }
.sym_docker  { color : #C80; }

/*
.sym_bag     { text-shadow      : .1em .1em .5em rgba(255,255,255, 0.5); }
.sym_bag     { padding: 0 0 0 .5em; }
.sym_bag     { font-size:200% !important; }
*/

/*}}}*/
/* log {{{*/
.log_num_thumb {
    color : #aaa;
}

           .log_node_toString { display : inline-block; width:24em; }
.div_match .log_node_toString { display : inline !important;        }

.log_sep_line {
    border-radius  : 5em !important;
    box-shadow     : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
    min-height     : 5em;
    min-width      : 5em;
    font-size      : 200%;
}
.log_sep_line * {
    text-align     : center !important;

}
/*}}}*/
/* badge {{{*/
.badge {
    position       :  relative;

    border-radius  : 8em !important;
    box-shadow     : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em !important;

    min-height     : 8em   !important;
    min-width      : 8em   !important;

    padding        : 1em    !important;

    font-size      : 200%   !important;
    line-height    : 100%   !important;

    text-align     : center !important;
    vertical-align : middle !important;
}

.badge p {
    position       : absolute;
    margin         : 0;
    margin-right   :-50%;
    top            : 50%;
    left           : 50%;
    transform      : translate(-50%,-50%);

    text-align     : center !important;
    white-space    : normal !important;
}

/*}}}*/
/* checked {{{*/
.checked {
    border           : black solid !important;
    box-shadow       : none !important;
}

/*}}}*/

/* box-shadow {{{*/

.scrolled      >div { transition-duration        : 100ms; }
.scrolled      >div {
    box-shadow                 : 3px 3px 6px rgba(000,000,000,0.0) !important;
    transition-property        : all;
    transition-timing-function : ease-in;
/*
    border        : dotted 5px !important;
    transform     : translate(2px,2px);
*/
}

/*}}}*/

/* background {{{*/
.badge                 { background       : linear-gradient(to bottom, #FC0, #FF0); }
.info                  { background       : rgba(000,000,000,0.2); }

      .current_slot_num { color:white; background:linear-gradient(to bottom, #000, #0F0) !important; }
.back .current_slot_num { color:white; background:linear-gradient(to bottom, #F00, #000) !important; }

#sel_bag>div                  { border     : 2px solid transparent    !important; }

#sel_bag>div                  { opacity    :  0.5; }
#sel_bag>div.current_slot     { opacity    :  1.0; }
#sel_bag>div.current_slot     { box-shadow : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em      ; }
#sel_bag>div.current_slot     { border     : 4px solid #000000 !important; }

/*
#sel_bag>div.current_slot     { height     : 150%; }
#sel_bag>div.current_slot     { text-shadow: rgba( 0, 0, 0, 0.4) 1px 1px 3px; };
#sel_bag  em                  { opacity : 0.2; }
#sel_bag  em                  { opacity : 0.2; }
#sel_bag  em.current_slot_num { opacity : 1.0; }
*/

/*}}}*/
/* transcript border {{{*/
.transcript ul         { border                 : 0px;             }
.transcript>div        { border                 : 0px;             }
.transcript blockquote { border                 : 0px;             }
.transcript div        { border                 : 0px;             }
.transcript pre        { border                 : 0px;             }
.transcript tr         { border-bottom          : 2px black solid; }
.transcript td         { border-radius          : 2em;             }

/*}}}*/
/* transcript push_pin clearpin {{{*/

            .push_pin  { float                  : right; }

            .push_pin  { float                  : right; }
            .clearpin  { float                  : right; }

            .push_pin  { font-size              : 150%; }
            .clearpin  { font-size              : 200%; }
            .clearpin  { font-weight            :  100; }
            .clearpin  { color                  : #333; }
.dark       .clearpin  { color                  : #888; }

            .push_pin  { border-radius          : 1em             !important; }
/*
            .push_pin  { box-shadow: rgba(255,255,255,.5) 1px     1px 2px 3px inset !important; }
*/
            .push_pin  { box-shadow: rgba(0,0,0,.8) 1px 1px 5px       !important; }
.pinned     .push_pin  { box-shadow: rgba(0,0,0,.8) 1px 1px 5px inset !important; }

            .clearpin  { margin-right           : .5em; }
            .clearpin  { background-color       : transparent     !important; }
            .clearpin  { border-color           : transparent     !important; }
.pinned     .push_pin  { background-color       : red             !important; }

/*}}}*/
/* transcript colors {{{*/
.transcript          { background    : linear-gradient(to bottom, #FF0, #FB0); }
.transcript.dark     { background    : linear-gradient(to bottom, #443, #211); }
/*         .dark div { background    : linear-gradient(to bottom, #443, #211); } useless and disrupts dom_grid.html["Grid ON"] ? */
/*         .dark div { color         : white;                                  } */
#headsup.dark        { background    : linear-gradient(to bottom, #443, #211); }
#dom_traversal.dark  { background    : linear-gradient(to bottom, #443, #211); }
#dev_log_map.dark    { background    : linear-gradient(to bottom, #443, #211); }
#dev_log_calls.dark  { background    : linear-gradient(to bottom, #443, #211); }
#dom_load_tags.dark  { background    : linear-gradient(to bottom, #443, #211); }
/*}}}*/

/* transcript {{{*/

.transcript       { box-shadow                 : 3px 3px 6px rgba(000,000,000,0.5);        }
.transcript       { border-color               : #444                                      }
.transcript       { transition-property        : all;                                      }
.transcript       { transition-timing-function : cubic-bezier(0.080, 1.015, 0.055, 0.930); }
.transcript       { transition-duration        : 300ms;                                    }

#sel_bag          { color                      : green; }
#sel_bag.back     { color                      : red; }

/*
#sel_bag>div      { margin-left                : 2em; }
*/
#sel_bag>div      { margin                     : 0 0 0 2em; }

/*
#sel_bag.back>div { border-color               : red; }
*/

/*}}}*/
/* bag {{{*/
.bag     { padding        : 1em; }
.bag div { padding        : 0;   }
.bag  em {

    min-width   :  9px !important;
    min-height  :  9px !important;
    width       :  9px !important;
    height      :  9px !important;
/*
    margin      :  2px           ;
    box-shadow  : 2px 2px 4px rgba(000,000,000,0.9);
    border      :    0 !important;
*/   border      :    0;
}
/*
.bag em:first-of-type { font-size  : 150%; }
*/
.bag em:nth-of-type(   1) { font-size  : 150%; }
.bag em:nth-of-type(   2) { font-size  : 140%; }
.bag em:nth-of-type(   3) { font-size  : 130%; }
.bag em:nth-of-type(   4) { font-size  : 120%; }
.bag em:nth-of-type(   5) { font-size  : 110%; }
.bag em:nth-of-type(   6) { font-size  : 100%; }
.bag em:nth-of-type(   7) { font-size  :  90%; }
.bag em:nth-of-type(   8) { font-size  :  80%; }
.bag em:nth-of-type(   9) { font-size  :  70%; }
.bag em:nth-of-type(n+10) { font-size  :  60%; }

/*}}}*/

/* current_slot_num {{{*/
.current_slot_num {
    box-shadow : 0px 3px 6px rgba(000,000,000,0.8) !important;
    font-size  : 150%;
}
/*}}}*/
/* border-radius {{{*/
.bag                  { border-radius : 2em; }
.transcript           { border-radius : 1em; }
.transcript_msg div   { border-radius : 1ex; }
.bag div              { border-radius : 2ex; }

#headsup              { border-radius : 2em; }
#pat_bag              { border-radius : 2em; }
#sel_bag              { border-radius : 2em; }
#dom_traversal        { border-radius : 2em; }

#headsup>div>div      { border-radius : 2em; }
#headsup>div>div      { border        : 5px solid #000000; }
#headsup>div>div div  { border-radius : 1em; }

#dom_traversal>div>div     { border-radius : 2em; }
#dom_traversal>div>div     { border        : 5px solid #000000; }
#dom_traversal>div>div div { border-radius : 1em; }

#pat_bag>div>div     { border-radius : 2em; }
#pat_bag>div>div     { border        : 5px solid #000000; }
#pat_bag>div>div div { border-radius : 1em; }
#sel_bag>div>div     { border-radius : 2em; }
#sel_bag>div>div     { border        : 5px solid #000000; }
#sel_bag>div>div div { border-radius : 1em; }

/*}}}*/

/* eso_div {{{*/
.eso_div { transition-duration         : 900ms !important; }
.eso_div { transition-delay            :   0ms !important; }
.eso_div {
    display       : inline-block           !important;
    border        : 1px solid #404040      !important;
    border-radius : 5px 5px 5px 5px        !important;
    box-shadow    : 0 0 10px #000000 inset !important;
    background    : rgba(16,16,16,.5)      !important;
    min-width     : 8em;
    min-height    : 8em;

    color         : orange !important;
    font-weight   : 700;

    transition-property : all !important;
}

/*}}}*/
/*pulse_in pulse_out {{{*/
.pulse_in { transition-duration         : 200ms !important; }
.pulse_in { transition-delay            :   0ms !important; }
.pulse_in {
    transform                   : translate(-10px, 10px) scale(2.0) !important;
    transition-property         :   all !important;
    transition-timing-function  :  ease !important;
}

.pulse_out { transition-duration         : 200ms !important; }
.pulse_out { transition-delay            :   0ms !important; }
.pulse_out {
    transform                   : scale(1) rotate(0) !important; /* restoration */
    transition-property         :   all !important;
    transition-timing-function  :  ease !important;
}

/*}}}*/

/* LI {{{*/
li:nth-child( 5n+0) { margin-bottom:.5em !important; }
li:nth-child(10n+0) { margin-bottom:.8em !important; }
li { white-space: nowrap; }

/*}}}*/
/* headsup_l {{{*/
#headsup_l {
    clear:left;
 white-space    : nowrap;
 cursor         : pointer;
 user-select    : none;
}

#dom_grid_playground_grid_sized {
 white-space    : nowrap;
 cursor         : pointer;
 user-select    : none;
}

#headsup_l_check {
 cursor         : pointer;
}

/*}}}*/
/* tools_drag pivspot {{{*/
/*{{{
#tools_drag.dark         { background : linear-gradient(to bottom, #211, #553); }
#tools_drag.dark.checked { background : linear-gradient(to bottom, #100, #221); }
#tools_drag                  { transition-delay            :   0ms; }
#tools_drag                  { transition-duration         :   0ms; }
#tools_drag.checked          { transition-delay            :   0ms; }
#tools_drag.checked          { transition-duration         :   0ms; }
#tools_drag.scrolled         { transition-delay            :   0ms; }
#tools_drag.scrolled         { transition-duration         :   0ms; }
}}}*/

#tools_drag {
    background    :             rgba( 32, 32, 32,0.3) !important;
    box-shadow    : 0px 3px 3px rgba(000,000,000,0.5);
    border-radius : 50%;
    border        : 0;
    text-align    : right;
    font-size     : 500%;
    font-weight   : 900;
    padding       : .1em;
    line-height    : 50%;
}
#tools_drag.scrolled { box-shadow    : none !important; }
#tools_drag.dragged  { border-radius : 50% 10% 10% 50%; }

#pivspot   {
    pointer-events   : none;
    z-index          : 32; /* above pivot_panel */
    position         : fixed;
    transform        : translate(-50%,-50%);
    transform-origin : 50% 50% 0;
}

#pivspot_c.dragged   { border-radius : 50% 10% 10% 50%; }
#pivspot_c {
    border-radius    : 50%;
    border           : 2px solid white;
    text-shadow      : rgba( 0, 0, 0, 0.8) 1px 1px 3px;
    box-shadow       : rgba( 0, 0, 0, 0.2) 2px 2px 16px 5px;
    background       : rgba( 32, 32, 32,0.2);
    color            : white;
    font-size        : 42px;
    width            : 32px;
    height           : 32px;
}

#hotspot_c.dragged   { border-radius : 50% 10% 10% 50%; }
#hotspot_c {
    border-radius    : 50%;
    border           : 2px solid white;
    text-shadow      : rgba( 0, 0, 0, 0.8) 1px 1px 3px;
    box-shadow       : rgba( 0, 0, 0, 0.2) 2px 2px 16px 5px;
    background       : rgba( 32, 32, 32,0.2);
    font-size        : 42px;
    width            : 32px;
    height           : 32px;
    font-weight      : 100;
}

#hotspot_c::after {
    background-color : transparent;
    font-weight      :  100;
    font-size        : 25%;
    position         : absolute;
    top              : -2em;
    left             :  0;
    text-shadow      : none;
    font-weight      : 100;
}

#hotspot_c.rotate_NE::after { content : " NE"; }
#hotspot_c.rotate_SE::after { content : " SE"; }
#hotspot_c.rotate_SW::after { content : " SW"; }
#hotspot_c.rotate_NW::after { content : " NW"; }
/*
*/

#hotspot_c.dragged   { border-radius : 50% 10% 10% 50%; }
#hotspot_c {
    pointer-events   : none;
    border-radius    : 50%;
    border           : 2px solid white;
    text-shadow      : rgba( 0, 0, 0, 0.8) 1px 1px 3px;
    box-shadow       : rgba( 0, 0, 0, 0.2) 2px 2px 16px 5px;
    background       : rgba( 32, 32, 32,0.2);
    font-weight      :  100;
    font-size        : 22px;
    width            : 12px;
    height           : 12px;
}
      #hotspot_c        { color : #000; }
.dark #hotspot_c        { color : #FFF; }
      #hotspot_c::after { color : #000; }
.dark #hotspot_c::after { color : #FFF; }

.rotate_NE { transform : rotate( -45deg) !important; }
.rotate_SE { transform : rotate( +45deg) !important; }
.rotate_SW { transform : rotate(+135deg) !important; }
.rotate_NW { transform : rotate(-135deg) !important; }

.rotate_NE { background-color : rgba(150,  75, 0, .7) !important; color:#964B00; }
.rotate_SE { background-color : rgba(255,   0, 0, .7) !important; color:#FF0000; }
.rotate_SW { background-color : rgba(255, 165, 0, .7) !important; color:#FFA500; }
.rotate_NW { background-color : rgba(255, 255, 0, .7) !important; color:#FFFF00; }

.rotate_NE { transition-delay           : 100ms; }
.rotate_SE { transition-delay           : 100ms; }
.rotate_SW { transition-delay           : 100ms; }
.rotate_NW { transition-delay           : 100ms; }

.rotate_NE { transition-duration        : 300ms; }
.rotate_SE { transition-duration        : 300ms; }
.rotate_SW { transition-duration        : 300ms; }
.rotate_NW { transition-duration        : 300ms; }

.rotate_NE { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
.rotate_SE { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
.rotate_SW { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
.rotate_NW { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }

/*}}}*/

/* tool parents layout {{{*/
/* translated tools */
#headsup    { width : 180px; height  : 130px; }
#headsup_w  { width : 200px; height  : 130px; }
#headsup_ds { width : 180px; height  :  60px; }

/* inlined tools */
/*
#headsup_l  { display : inline-block; }
*/
/*}}}*/


/* GRID {{{*/
.grid_caption { /*{{{*/
    cursor              : pointer;
    display             : inline-block;
    border-radius       : 16px;
    background          : rgba( 32, 32, 64,0.9);
    text-align          : center;
    vertical-align      : middle;

}/*}}}*/
.grid_caption em { /*{{{*/
    position       : absolute;
    margin         : 0;
    margin-right   :-50%;
    top            : 50%;
    left           : 50%;
    transform      : translate(-50%,-50%);

    text-align     : center;
    white-space    : normal;
    font-family    : "Comic sans ms";
    font-weight    : 700;
    font-size      : 100%;
    background     : rgba(255,192,192,.2);
    color          : rgba(0,0,0, 1);
    border-radius  : 1em;
    padding        : 0 1ex 0 1ex;

}
/*}}}*/

.grid_caption_hide { animation-duration        :                     250ms; }
.grid_caption_hide { animation-delay           :               250ms; }
.grid_caption_hide { /*{{{*/
    transform-origin          :  0% 0% 0;
    animation-name            : grid_caption_hide;
    animation-timing-function :                            ease-out;
    animation-fill-mode       :                                     both; /* retain resulting styles for both class add and remove */
}

@keyframes grid_caption_hide {
    100% { top       :        0; }
    100% { left      :        0; }
    100% { opacity   :       .1; }
    100% { transform : scale(.5) translate(-100%,-100%);    }
}
/*}}}*/
.grid_caption_show  { animation-duration        :                      250ms; }
.grid_caption_show  { animation-delay           :               250ms; }
.grid_caption_show  { /*{{{*/
    animation-name            : grid_caption_show;
    animation-timing-function :                            ease-out;
    animation-fill-mode       :                                     both; /* retain resulting styles for both class add and remove */
}

@keyframes grid_caption_show {
      0% { top       :        0 ; }
      0% { left      :        0 ; }
      0% { opacity   :       .1 ; }
    100% { opacity   :       1  ; }
      0% { transform : scale(.1); }
    100% { transform : scale(1 ); }
}
/*}}}*/
.transcript.on_grid { transition-duration        :    200ms; }
.transcript.on_grid { transition-delay           :    200ms; }
.transcript.on_grid { /*{{{*/
    display                    : inline-block  !important; /* .. so as to override hidden */

    border-radius              : 16px          !important;
    margin                     : 0             !important;
    transform                  : rotate(0deg)  !important;

    padding                    : 0             !important;
    margin-bottom              : 0             !important;
/*
    min-width                  : 0             !important;
    min-height                 : 0             !important;
*/
    overflow                   : hidden        !important;

    transition-property        :      all;
    transition-timing-function : ease-out;

/* {{{
    display             : fixed          !important;
    display             : flex           !important;

    position            : fixed          !important;
    float               : none           !important;

    border              : 2px red dotted !important;
    border                     : 9px red dashed !important;
    border-radius              : 1em            !important;

    margin              : 0              !important;
    min-height          : 8em            !important;
    min-width           : 8em            !important;
    width               : 8em            !important;
    height              : 8em            !important;

    transform                  : rotate(0deg)  !important;
    transform                  : scale(.7) rotate(0) !important;

}}}*/
/*  animation {{{
    animation-duration         : 900ms;
    animation-timing-function  : ease-out;
    animation-fill-mode        : forwards;
}}}*/
}
/*}}}*/
/* display {{{*/
.hidden { transition-duration : 350ms; }
.hidden {
    opacity             :       0.05  !important; /* to override magnified */
    transform           : scale(0.05) !important; /* to override magnified */

}

/*{{{
:!start explorer "https://drafts.csswg.org/css-animations-1"

    Setting the display property to none
    will terminate any running animation applied
    to the element
    and its descendants.

    If an element has a display of none
    , updating display to a value other than none
    will start all animations applied to the element by the animation-name property
    , as well as all animations applied to descendants with display other than none.

}}}*/

/*}}}*/
.grid_caption_see_through { transition-duration : 200ms; }
.grid_caption_see_through { /*{{{*/
    background          : rgba(192,192,192,0.1);
}
/*}}}*/

/* @keyframes on_grid_enter {{{*/
   @keyframes on_grid_enter {
    100%       { transform    :  scale(0.9 ); }
}
/*}}}*/
/*}}}*/

/* index {{{*/
.index {
    font-size     : 180%;
    border-radius : 1em;
    padding-left  : .4em;
    padding-right : .4em;
    width         : 2em;
}
/*}}}*/

/* rotate {{{*/
/*
#headsup       { transform : rotate( 1deg);               }
#pat_bag       { transform : rotate( 1deg)  skewY( 1deg); }
#sel_bag       { transform : rotate(-1deg)  skewY(-1deg); }
#dom_traversal { transform : rotate( 1deg);               }
*/

/*}}}*/
/* pivot_panel other_panel {{{*/

.pivot_panel {
    /* to override dark background */
/*
    background           : linear-gradient(to bottom, #00F, #004) !important;
    border: blue dashed 4px !important;
    border: blue dotted 8px !important;
    outline: blue dotted 18px !important;
    outline: blue solid 1px !important;
    box-shadow : 0px 0px 32px rgba(128,128,255,0.9) !important;
*/
    box-shadow : 4px 4px 12px rgba(0,0,48,0.7) !important;
}
.other_panel { transition-duration        : 1000ms; }
.other_panel {
    opacity                    : 0.2;
    transition-property        : opacity;
/*
    transition-timing-function : cubic-bezier(1.000, 0.500, 0.300, 1.000);
    transition-delay           : 1000ms;
*/
/*
*/
}

/*}}}*/
/* magnified {{{*/

           .magnified { transform                   : scale(2); }
/*
           .magnified { transform-origin            :  0% 0% 0; }
*/
           .magnified { transition-property         :      all; }
           .magnified { transition-timing-function  : ease-out; }
/*
           .magnified { transition-delay            :      0ms; }
           .magnified { transition-delay            :    500ms; }
*/

.transcript.magnified { transition-duration         :    300ms; }

/*}}}*/
/* standby {{{*/
.standby                             { background : linear-gradient(to bottom, #666, #222) !important; }
#sel_bag.standby                  { background : linear-gradient(to bottom, #F00, #400) !important; }
#sel_bag.standby::before           { content  : '\\2699'; } /* gear */

/*}}}*/

/* ########################################################################## */
/* HOTSPOT {{{*/
/* hotspot_frame {{{*/
.hotspot_frame { z-index :32; } /* above tool panels */

.hotspot_frame                     { display         : flex;    }
.hotspot_frame                     { cursor          : pointer; }
.hotspot_frame                     { align-items     : center;  }
.hotspot_frame                     { justify-content : center;  }

.hotspot_frame      *              { box-sizing : border-box;   }

.hotspot_frame      *:after        { background : #777;         }
.hotspot_frame.dark *:after        { background : #AAA;         }

                    .hotring { background : linear-gradient(to bottom, #FF0, #FB0); }
.hotspot_frame.dark .hotring { background : linear-gradient(to bottom, #443, #211); }

/*}}}*/
/* hotwave {{{*/

.hotwave {
    position           : absolute;
    background         : none !important;
/*
    height             : 3em;
*/
}

.hotwave::before {
    border-radius      : 50%;
    border             : .15em solid rgba(255,255,255, .9);
    content            : '';
    height             : 100%;
    left               : 0;
    opacity            : 0;
    position           : absolute;
    top                : 0;
    transform          : scale(2);
    transition         : transform .25s, opacity .2s;
    width              : 100%;
}

.hotwave::after {
    z-index :-1;
    border-radius      : 50%;
    content            : '';
    height             : 100%;
    left               : 0;
    position           : absolute;
    top                : 0;
    width              : 100%;
    /*
    background         : #fff;
     */
}

/*}}}*/
/* PULSE {{{*/
.pulse_in    { animation-name            : flyUp;  }
.pulse_in    { animation-duration        : 3s;     }
.pulse_in    { animation-timing-function : linear; }

.pulsing_id  { border     : #444 3px dotted;                 }
.pulsing_id  { background : rgba(255,000,000,.8) !important; }

@keyframes flyUp {
      0% { transform : translate(100%, -100%) scale(2.5); }
    100% { transform : translate(100%, -400%) scale(1.0); }
     10% { opacity   :.9; }
    100% { opacity   : 0; }
}
/*}}}*/
/* WAVE PULSE {{{*/
/*
.hotring:hover                { border             : .5em solid black !important;      }
*/
.hotwave:hover .hotring::after { opacity            : 0;                                }
.hotwave:hover .hotring::after { opacity            : 1;                                }
.hotwave:hover .hotring::after { transform          : translate(-50%, 0) scale(1);      }

/*
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
*/
         .hotwave::after { animation                : 3s       infinite ease-out normal wave ; }
         .hotring        { animation                : 3s       infinite linear   normal pulse; }

.freezed .hotwave::after { animation-play-state     : paused;                                  }
.freezed .hotring        { animation-play-state     : paused;                                  }
/*...progressed by the absolute value of the delay == .. negative value */
#hotspot.freezed>div>div { animation                : 12s -11s infinite steps(2) normal flash; border: 3px #000 solid !important; }
.freezed>*               { color                    : transparent !important;                  }
/*
*/

/* @keyframes pulse {{{*/
   @keyframes pulse {
      0%       { transform    : scale(1.0 ); }
      2%       { transform    : scale(0.95); }
     10%       { transform    : scale(1.1 ); }
    100%       { transform    : scale(1.0 ); }
}
/*}}}*/
/* @keyframes wave{{{*/
   @keyframes wave {
      2%       { transform    : scale(1  ); }
    100%       { transform    : scale(2  ); }
      0%       { opacity      : 1;          }
    100%       { opacity      : 0;          }
}
/*}}}*/
/* @keyframes flash{{{*/
   @keyframes flash {
      0%       { box-shadow : 0 0 3em .5em black; }
    100%       { box-shadow : 0 0 3em .5em white; }
}
/*}}}*/
/* @keyframes borderColor {{{*/
   @keyframes borderColor {
      0%       { border-color : #888;       }
    100%       { border-color : #000;       }
}
/*}}}*/

/*}}}*/
/* NE NW SE SW {{{*/
       .layout_NE>div  { margin:   0   32em    0   -32em !important; }
       .layout_NW>div  { margin:   0     0     0     0   !important; }
       .layout_SE>div  { margin:   0     0     0     0   !important; }
       .layout_SW>div  { margin:   0   32em    0   -32em !important; }

.gutter.layout_NE>div  { margin:   0     0     0     0   !important; }
.gutter.layout_NW>div  { margin:   0   32em    0   -32em !important; }
.gutter.layout_SE>div  { margin:  20em   0   -20em   0   !important; }
.gutter.layout_SW>div  { margin:  20em 32em  -20em -32em !important; }

.ondown_in_gutter .hotwave::before { background-color    : rgba(255,000,000,0.86) !important; }
.ondown_in_gutter .hotwave::before { opacity             : 1                      !important; }
.ondown_in_gutter .hotwave::before { transition-duration : 200ms;                             }

/*}}}*/
/* hotring {{{*/

#hotring {
    position           : relative;
    width              : 3em;
    height             : 3em;
    border-radius      : 50%;
    box-shadow         : 0 2px 10px rgba(0,0,0, .2);
    font-weight        : 600;
    justify-content    : center;
    text-align         : center;
/*{{{
    align-items        : center;
}}}*/
}

.hotring>* {
    /* skip inherited properties */
    text-align         : initial;
/*{{{
    align-items        : flex-end;
    justify-content    : initial;
    transition         : background .3s;
}}}*/
    /* add children properties  */
    transition         : background .3s;
}

.hotring>*  { transform : translate(0,-15em) scale(1.0); }
/*{{{
.hotring>*                 { transform : translate(100%,-80%) scale(1.0);  }
.hotring>*:nth-child(1)    { transform : translate(5em,-100%) scale(1.0); }
.hotring>*:nth-child(2)    { transform : translate(5em,-200%) scale(1.0); }
.hotring>*:nth-child(3)    { transform : translate(5em,-300%) scale(1.0); }
.hotring>*:nth-child(4)    { transform : translate(5em,-400%) scale(1.0); }
.hotring>*:nth-child(5)    { transform : translate(5em,-500%) scale(1.0); }

.floatlog>*:nth-child(1)   { transform : scale(0.5); }
.floatlog>*:nth-child(2)   { transform : scale(0.6); }
.floatlog>*:nth-child(3)   { transform : scale(0.7); }
.floatlog>*:nth-child(4)   { transform : scale(0.8); }
.floatlog>*:nth-child(5)   { transform : scale(0.9); }
.floatlog>*:nth-child(6+0) { transform : scale(1.5); }

.floatlog>*                { transform: translate(0,-15em) scale(1.0); }
.floatlog.layout_NW>div    { transform: translate( 100%,0) !important; }
.floatlog.layout_NE>div    { transform: translate(-100%,0) !important; }
.floatlog.layout_SE>div    { transform: translate(-100%,0) !important; }
.floatlog.layout_SW>div    { transform: translate( 100%,0) !important; }

}}}*/
/*}}}*/

/*}}}*/
/* fly_div {{{*/
#fly_div    {
    position         :     fixed;
    top              :       1em;
    right            :       1em;
    z-index          :        -1; /* below all panels */
    transform-origin : 100%    0;
/*
    transform        : translate(-50%,0);
*/
}

#fly_div em {
    border      : none;
    background  : transparent;
    box-shadow  : 0.1em 0.1em 0.1em rgba(0,0,0,0.8);
}
/*}}}*/
/* floatlog {{{*/
/*
/[^-]\(top\|left\|bottom\|right\)
/translate
*/
/*{{{
.floatlog     { display     : grid;         } .. BIG MESS ..
.floatlog>div { display     : inline-block; }
.floatlog>div { line-height :   1em;        }
.floatlog>div {  min-height : 1.5em;        }
}}}*/

.floatlog>div {
/*{{{
    height     :  1em;
    margin     : 0          !important;
}}}*/
    box-sizing : initial    !important;
    width      : 24em;
    padding    : .3em;
}
.floatlog>div { box-shadow : rgba(0,0,0,.5) .2em .2em .9em !important; }
.floatlog em  { font-size            : 80%;                    }
.floatlog>*   { white-space          : nowrap;                 }
.floatlog>*   { transform-origin     : 0 0 0;                  }

/* STAGE {{{*/

.stage_1_input , .stage_1_missed, .stage_1_more { background :linear-gradient(to top   , rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }
.stage_2_action, .stage_2_missed                { background :linear-gradient(to top   , rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }
.stage_3_result, .stage_3_missed, .stage_3_more { background :linear-gradient(to bottom, rgba(0,0,0,.6) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.5) 95%, #111 100%); }

.floatlog>div.stage_1_input  { border-top                 : 2px solid #AAA              ; }
.floatlog>div.stage_1_input  { border-left                : 1px solid #AAA              ; }
.floatlog>div.stage_1_input  { border-right               : 1px solid #AAA              ; }
.floatlog>div.stage_1_input  { border-bottom              : 0         #AAA              ; }
.floatlog>div.stage_1_missed { border-top                 : 2px solid #AAA    !important; }

.floatlog>div.stage_2_action { border-top                 : 0         #AAA              ; }
.floatlog>div.stage_2_action { border-left                : 1px solid #AAA              ; }
.floatlog>div.stage_2_action { border-right               : 1px solid #AAA              ; }
.floatlog>div.stage_2_action { border-bottom              : 0         #AAA              ; }
.floatlog>div.stage_2_missed { border                     : 1px solid #AAA    !important; }

.floatlog>div.stage_3_result { border-top                 : 0         #AAA              ; }
.floatlog>div.stage_3_result { border-left                : 1px solid #AAA              ; }
.floatlog>div.stage_3_result { border-right               : 1px solid #AAA              ; }
.floatlog>div.stage_3_result { border-bottom              : 2px solid #AAA              ; }
.floatlog>div.stage_3_missed { border-bottom              : 2px solid #AAA    !important; }

.floatlog>div.stage_1_input  { border-top-left-radius     : 1em                          ; }
.floatlog>div.stage_1_input  { border-top-right-radius    : 1em                          ; }
.floatlog>div.stage_1_missed { border-top-left-radius     : 1em                !important; }
.floatlog>div.stage_1_missed { border-top-right-radius    : 1em                !important; }
.floatlog>div.stage_1_more   { border-top-left-radius     : 0                  !important; }
.floatlog>div.stage_1_more   { border-top-right-radius    : 0                  !important; }

.floatlog>div.stage_3_result { border-bottom-left-radius  : 1em                          ; }
.floatlog>div.stage_3_result { border-bottom-right-radius : 1em                          ; }
.floatlog>div.stage_3_missed { border-bottom-left-radius  : 1em                !important; }
.floatlog>div.stage_3_missed { border-bottom-right-radius : 1em                !important; }

.floatlog>div.stage_3_more   { border-bottom-left-radius  : 0                  !important; }
.floatlog>div.stage_3_more   { border-bottom-right-radius : 0                  !important; }

.floatlog>div.stage_3_more   { border-bottom              : 2px solid #888    !important; }
.floatlog>div.stage_3_more   { padding-bottom             : 2px                !important; }


.stage_0_log        { background                 : linear-gradient(to top   , rgba(0,0,0,.9) 0%, rgba(0,0,0,.7) 50%, rgba(0,0,0,.8) 80%, rgba(0,0,0,.8) 95%, #111 100%); }
.stage_0_log        { border-bottom              : 2px solid #AAA              ; }
.stage_0_log        { border-left                : 1px solid #AAA              ; }
.stage_0_log        { border-right               : 1px solid #AAA              ; }
.stage_0_log        { border-top                 : 2px solid #AAA              ; }
.stage_0_log        { border-top-left-radius     : 0                           ; }
.stage_0_log        { border-top-right-radius    : 0                           ; }
.stage_0_log        { border-bottom-left-radius  : 0                           ; }
.stage_0_log        { border-bottom-right-radius : 0                           ; }
.stage_0_log        { width                      : 24em                        ; }
.stage_0_log.fading { animation                  : none              !important; }
.stage_0_log>*      { margin-right : .1em; }

/*}}}*/

/*}}}*/
/* pause_animation {{{*/
.pause_animation       { animation          : none !important; }

/*}}}*/
/* stacking {{{*/
         .floatlog>*   { animation           : 3s    ease-in  forwards stacking; }
.stacking.floatlog>*   { animation-duration  : 1s   !important;                  } /* less time out of the way */

@keyframes stacking {
       0% { opacity   :.1; }
      20% { opacity   :.5; }
     100% { opacity   : 1; }
       0% { transform : translate(-25em, 13em) scale(0.9); }
      70% { transform : translate(-20em, 13em) scale(0.9); }
      75% { transform : translate(  0em,  0em) scale(0.9); }
      80% { transform : translate(  3em,  0em) scale(0.9); }
     100% { transform : translate(  0em,  0em) scale(1.0); }
}

/*}}}*/
/* removing {{{*/
.removing              {             opacity : .1; }
.removing              { transform           : translate(  0em, 12em) scale(1.0); }
.removing              { transition-property : transform;                         }
.removing              { transition-duration : 3s;                                }

.removing              { animation           : 3s 1s  ease-out forwards removing; }
@keyframes removing    {
    100% { opacity   : 0; }
    100% { border    : 0; }
    100% { height    : 0; }
    100% { padding   : 0; }
}
/*}}}*/
/* fading {{{*/
.postponed>* {   opacity : .9   !important; }
.postponed>* { animation : none !important; }

.fading                { transition-duration : 3s;                                }
.fading                { animation             : 5s    ease-out forwards fading  ; }

@keyframes fading {
      0% { height    : 1em; }
      0% { opacity   : 1  ; }

     90% { height    : 1em; }
     90% { opacity   : .8 ; }

    100% { height    :.2em; }
    100% { opacity   :  .8; }

    100% { padding   : 0; }
    100% { border    : 0; }
}
/*}}}*/

/* ########################################################################## */
/* standby {{{*/
.standby {
    box-shadow    : 0 0 1em 1em #FDD !important;
/* padding-right : 8em !important; */
}
.standby::before {
    position      : absolute;
    right         : .5em;
    top           : .1em;
    color         : black;
    font-size     : 300%;
    text-shadow   : #AAA 1px 1px 1px;
}
.standby::before { transform-origin   : 50% 55% 0; }
.standby::before { animation-name     : cycle;  }
.standby::before { animation-duration : 1s;     }

/* @keyframes cycle {{{*/
   @keyframes cycle {
      0% { transform : rotate(  0deg); }
    100% { transform : rotate(360deg); }
}
/*}}}*/
/*}}}*/
/* panel_pressed_glowing {{{*/
.panel_pressed_glowing { transition-duration         :   1750ms; }
.panel_pressed_glowing { transition-delay            :   1250ms; }
.panel_pressed_glowing {
    box-shadow                  : 0 0 1em 0em #FFF !important;
    transform                   : scale(2.1);

    transition-property         : transform, box-shadow;
    transition-timing-function  : ease-in  , ease-in   ;
}

.panel_magnifying_glass::before {
    position      : absolute;
    right         : .5em;
    top           : .1em;
    color         : black;
    font-size     : 500%;
    content       : '\\1f50D';
    text-shadow   : #AAA 1px 1px 1px;
    z-index       : 2;
}
/*
    color         : rgba(255,255,255,.8);
*/
/*
.magnified.panel_pressed_glowing {
    box-shadow                  : 0 0 1em 0em #FFF !important;
    transform                   : scale(.9);
    transition                  : all  500ms ease-in 750ms;
}
*/

/* {{{
    box-shadow                  : 3px 3px 6px rgba(FFF,FFF,FFF,0.5) !important;

    background                  : white;
    background                  : black;
    transition                  : Property Duration Function Delay, D P F D, ...;

    transition                  : 500ms;
    transition-delay            : 500ms;

    background : linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,.1));
    background : linear-gradient(to bottom, rgba(0,0,0,1), rgba(255,255,255,.1));
    background : linear-gradient(to    top, rgba(0,0,0,.5) 0%,rgba(0,0,0, 1) 8%, rgba( 0, 0, 0,.9) 80%, rgba(32,32,32,.6) 95%, #111 100%);
    background : linear-gradient(to    top, rgba(0,0,0,.5) 0%,rgba(0,0,0,.9) 8%, rgba(32,32,32,.6) 95%,                        #111 100%);

    transition-duration         : 500ms;
    transition-timing-function  : ease-in;

    border-radius               : .2em !important;
    border-radius               : 50% !important;

    border                      : 1em solid black !important;
    border                      : 1em solid transparent !important;

    outline                     : 2em navy   solid  !important;
    outline                     : 2em orange solid  !important;

    background:#DDD;
    background:#AAA;
    background:transparent;

    transition-timing-function  : ease-out;
    transition-timing-function  : cubic-bezier(0.080, 1.015, 0.055, 0.930);
    transition-timing-function  : cubic-bezier(0.250, 0.250, 0.900, 1.200);
    transition-timing-function  : cubic-bezier(1.000, 0.500, 0.300, 1.000);

    transition-delay            : 500ms;

    transition-property         : border;
    transition-property         : border;
}}}*/
/*}}}*/

/* ########################################################################## */
/* dimm_mask {{{*/
#dimm_mask {
    transition-duration : 1000ms;
    background-color  : #103;
    overflow          : auto;
    z-index           : 0;
    cursor            : not-allowed;
}

#dimm_mask>div>* {
    display           : table;
    margin            : 1ex 1ex 1ex 1em;
    border-color      : #FFFF00;
    border-left-style : solid !important;
    border-left-width : 5px;
    padding           : 1ex 1em 1ex 1em;
    background        : #DDA;
    color             : #222;
    font-weight       : 600;
    cursor            : copy;
}
#dimm_mask>div>* * { pointer-events : none; }
.em_copy           { pointer-events : auto !important; }
.em_copy           {         cursor : copy; }

#dimm_mask.light {
    transition-duration : 1000ms;
    background : linear-gradient(to left,rgba(0,0,0,0.1), rgba(64,64,64,0.9) 50%, rgba(032,032,032,1.0));
/*
    background-color: #FFF;
*/
}

#div_slot_containers {
    display               : grid;
    grid-template-columns : repeat(3, 1fr);
/*
    grid-template-rows    : repeat(3, 1fr);
    grid-auto-flow        : column;
*/
    user-select           : none;
    margin                : 1ex;
    background            : #DDD;
    background            :              rgba(0,0,0,0.9) !important;
    box-shadow            : 2px 2px 32px rgba(0,0,0,0.2) !important;
    cursor                : copy;
    transition-duration   : 1000ms;
}
#div_slot_containers>div   {
/*
    border                : .1em solid #DDD      !important;
*/
    border-radius         : 0 1em 1em 0;
    box-shadow            : 0 0 .1em black inset !important;
    min-width             : 8em;
    font-weight           : 700;
/*
    max-width             : 60ex;
*/
}

.preformatted {
    white-space : pre;
}

/*}}}*/

/* ########################################################################## */
/* pat_bag .. border {{{*/
#pat_bag                  { padding-bottom :  3.5em; } /* some room for bot_div absolute position */
#pat_bag {
    border-top    : 1px solid rgba(255,255,255,1 ) !important;
    border-left   : 3px solid rgba(255,255,255,.5) !important;
}
#pat_bag.dark {
    border-top    : 1px solid rgba(255,255,192,.3) !important;
    border-left   : 3px solid rgba(255,255,192,.1) !important;
}

/*}}}*/
/* pat_bag .. padding {{{*/

/*}}}*/
/* pat_bag .. bot_div {{{*/
/* position {{{*/
.bot_div { position:absolute; bottom:0;  left:.5em !important; width:100% !important;   }
.bot_div { overflow  : visible !important; }
/*
.txt_log { float : left  !important; }
*/
.fly_log,.pat_sort { float : right !important; }
/*}}}*/
/* display {{{*/
.bot_div   { z-index: -1;               }
.bot_div>* { display:inline !important; }

/*}}}*/
/* border {{{*/

.txt_log           { border        : none                !important; }

.pat_sort          { border        : none                !important; }
.pat_sort          { border-radius : 0.9em               !important; }
.pat_sort          { margin        :-.7em -.3em   0  0   !important; }
.pat_sort          { padding       : .3em  0em .3em  0em !important; }
.pat_sort          { font-size     : 200%                !important; }

.fly_log           { border        : none                !important; }
.fly_log           { border-radius : 1.8em   0    0   0  !important; }
.fly_log           { margin        : 0    .2em -.4em  0  !important; }
.fly_log           { padding       : .6em                !important; }
.fly_log           { font-size     : 200%                !important; }

/*}}}*/
/* hover & disabled .. background & box-shadow {{{*/
.fly_log:hover           { box-shadow : 0 0 .3em .2em #F00 !important; }
.pat_sort:hover          { box-shadow : 0 0 .3em .2em #F00 !important; }

.fly_log.disabled        { background : rgba(128,128,128,.2)        !important; }
.pat_sort.disabled       { background : rgba(128,128,128,.2)        !important; }

.fly_log.disabled:hover  { background : transparent        !important; }
.fly_log.disabled:hover  { box-shadow : none               !important; }

.pat_sort.disabled:hover { background : transparent        !important; }
.pat_sort.disabled:hover { box-shadow : none               !important; }
/*}}}*/
/* vertical-align {{{*/
.bot_div   { vertical-align: bottom !important;}
.bot_div>* { vertical-align: bottom !important;}

/*}}}*/
/* white-space {{{*/
.txt_log { white-space: pre; }

/*}}}*/
/* font {{{*/
.txt_log {
    pointer-events : none;
    font-family    : "Comic sans ms"  !important;
    font-size      : 50%              !important;
    font-style     : oblique          !important;
    font-weight    : 100              !important;
/*
    padding-right  : .5em             !important;
*/
    padding        : 0 1em 0 1em     !important;

    position       : absolute         !important;
    left           : .1em             !important;
    bottom         : .1em             !important;
/*
    border         : 1px dotted black !important;
    border-radius  : 0                !important;
*/
    text-shadow   : #008 1px 1px 3px !important;
    z-index       : 2                !important;
}

/*}}}*/
/* background {{{*/

.txt_log          { background : linear-gradient(to top, rgba(255,255,255,.1) 2%, transparent 25%, rgba(  0,  0,  0,.1) 80%, rgba(255,255,255,.1) 100%); }

.fly_log          { background : linear-gradient(to top, rgba(  0,  0,  0,.1) 20%, rgba(  0,  0,  0,.3) 80%, rgba(255,255,255,.3) 100%); }
.fly_log.checked  { background : linear-gradient(to top, rgba(255,  0,  0,.1) 20%, rgba(255,  0,  0,.3) 80%, rgba(255,255,255,.3) 100%); }

.pat_sort         { background : linear-gradient(to top, rgba(  0,  0,  0,.1) 20%, rgba(  0,  0,  0,.3) 80%, rgba(  0,  0,  0,.9) 100%); }
.pat_sort.checked { background : linear-gradient(to top, rgba(255,  0,  0,.1) 20%, rgba(255,  0,  0,.3) 80%, rgba(255,255,255,.9) 100%); }
/*}}}*/
/* color {{{*/

      .bot_div>*{ color : #000 !important; }
.dark .bot_div>*{ color : #CCC !important; }

      .fly_log  { color : #000 !important; }
.dark .fly_log  { color : #CCC !important; }

      .pat_sort { color : #000 !important; }
.dark .pat_sort { color : #CCC !important; }

/*}}}*/
/*}}}*/
/* pat_bag .. pat_span {{{*/
.pat_span          { float : left; clear  : left; }

.pat_clicked       { box-shadow : 0 0 .1em .1em rgba(0,0,0,0.8) inset !important; }
.pat_clicked       { opacity    : .3                                  !important; }
/*
.want    , .have                { vertical-align   : super; }
*/
.bags    , .want    , .have    , .done     { background       : linear-gradient(to bottom, rgba(034,034,034,0) 0%, rgba(034,034,034,0.6) 20%, rgba(034,034,034,0) 88%) !important; }
.bags.cc1, .want.cc1, .have.cc1, .done.cc1 { background-color : #964B00 !important; }
.bags.cc2, .want.cc2, .have.cc2, .done.cc2 { background-color : #FF0000 !important; }
.bags.cc3, .want.cc3, .have.cc3, .done.cc3 { background-color : #FFA500 !important; }
.bags.cc4, .want.cc4, .have.cc4, .done.cc4 { background-color : #FFFF00 !important; }
.bags.cc5, .want.cc5, .have.cc5, .done.cc5 { background-color : #9ACD32 !important; }
.bags.cc6, .want.cc6, .have.cc6, .done.cc6 { background-color : #6495ED !important; }
.bags.cc7, .want.cc7, .have.cc7, .done.cc7 { background-color : #EE82EE !important; }
.bags.cc8, .want.cc8, .have.cc8, .done.cc8 { background-color : #A0A0A0 !important; }
.bags.cc9, .want.cc9, .have.cc9, .done.cc9 { background-color : #FFFFFF !important; }
.bags.cc0, .want.cc0, .have.cc0, .done.cc0 { background-color : #202020 !important; }

#off_bag .pat_span .cc0         { background-color : rgba(  0, 32,  0,0.30) !important; }
#bak_bag .pat_span .cc0         { background-color : rgba(032,  0,  0,0.30) !important; }
#off_bag .pat_span .cc0         {            color : rgba(255,255,255,0.66) !important; }
#bak_bag .pat_span .cc0         {            color : rgba(255,240,255,0.53) !important; }
#off_bag .pat_span .cc0         { font-weight      : 100                    !important; }
#bak_bag .pat_span .cc0         { font-weight      : 300                    !important; }

#off_bag .pat_span .cc0         { box-shadow       : .05em .05em    0      rgba(255,255,255,0.7)       !important; }
#bak_bag .pat_span .cc0         { box-shadow       : .05em .05em    0      rgba(255,255,255,0.7)       !important; }


.want { border : 1px dashed white  !important; }
.have { border : 1px solid  white !important; }
.want, .have {
    border-top-left-radius     : .8em;
    border-top-right-radius    : .8em;
    border-bottom-left-radius  : .3em;
    border-bottom-right-radius : .3em;
    padding-top                : .1em;
    padding-bottom             : .0em;
}
/*{{{
}}}*/

.bags {
    border-top-left-radius     : .3em;
    border-top-right-radius    : .3em;
    border-bottom-left-radius  : .8em;
    border-bottom-right-radius : .8em;
    padding-top                : .1em;
    padding-bottom             : .3em;
}

/*
.done     { background       : linear-gradient(to right, rgba(034,034,034,0) 0%, rgba(034,034,034,0.6) 20%, rgba(034,034,034,0) 88%) !important; }
*/
.done {
    border-top-left-radius     : .1em;
    border-bottom-left-radius  : .1em;
    border-top-right-radius    : 1em;
    border-bottom-right-radius : 1em;
    border: .1em solid white !important;
}

/*
.want              { border           : 2px solid magenta  !important; }
.have              { border           : 2px solid yellow !important; }
.done              { border           : 2px solid red    !important; }
*/

/*
.pat_span          { width          :  15.4em; }
*/
/*}}}*/
/* pat_bag .. num_em {{{*/
.num_em {
    pointer-events   : none;
    font-family      : monospace;
    background-color : rgba(192,192,192,.1);
    border-radius    : .3em;
    padding          : .1em;
    margin           : .1em;
}

/*}}}*/
/* pat_bag .. place_holder {{{*/
            .place_holder { display    : none;                            }
            .place_holder { opacity    : 0;                               }
/*}}}*/
/* pat_bag .. has_moving_child {{{*/
.has_moving_child          em {   position : relative;                    }
/*
.has_moving_child #off_bag em { box-shadow : 1px 1px 3px #F00 !important; }
.has_moving_child #bak_bag em { box-shadow : 1px 1px 3px #00F !important; }
*/
/*}}}*/
/* pat_bag .. mov_div {{{*/
#mov_div { position  : absolute; }
#mov_div { top       :        0; }
#mov_div { left      :        0; }
/*{{{
#mov_div { width     : initial !important; }
#mov_div { height    : initial !important; }
#mov_div { transition-timing-function : cubic-bezier(0.5, 0.05, 0.9, 1.2); }
#mov_div { opacity   : .6; }
#mov_div { font-size : 200%; }
#mov_div { position : relative; }
#mov_div { float:left; }
}}}*/

#mov_div.moving     { transition-duration :       100ms ; }

#mov_div.grayed_out { opacity             :         0.3 ; }
#mov_div.grayed_out { transform           : scale(  0.5); }
#mov_div.grayed_out { transition-duration :       100ms ; }

/*}}}*/
/* pat_bag .. mov_src {{{*/
.mov_src {
    background : linear-gradient(to bottom, rgba(  0,  0,  0,.9) 20%, rgba(  0,  0,  0,.7) 80%, rgba(  0,  0,  0,.9) 100%);
    color: gray !important;

/*{{{
background : linear-gradient(to bottom, rgba(  0,  0,  0,.9) 20%, rgba(  0,  0,  0,.7) 80%, rgba(  0,  0,  0,.9) 100%);
background : linear-gradient(to bottom, rgba(  0,  0,  0,.9) 20%, rgba(  0,  0,  0,.7) 80%, rgba(255,255,255,.9) 100%);

border     : 5px solid black !important;

color      : #AAA            !important;
color      : transparent !important;

margin     : 0px             !important;

opacity    : .5 !important;

outline    : 2px dotted red  ;
outline    : 5px dotted white;
outline    : blue 2px dotted;

padding    : 5px             !important;

}}}*/
}
/*}}}*/
/* pat_bag .. mov_dst {{{*/
#mov_dst {

/*
    font-size : 100%;
    position  : absolute;
    width     : initial !important;
    height    : initial !important;
*/
}
/*}}}*/
/* pat_bag .. hov1-hov4 {{{*/
#hov1 { position : absolute; display:none; color: #00F; font-size:12px; transform: translate( -85%,-70%); margin:0; padding:0; z-index:33; }
#hov2 { position : absolute; display:none; color: #F40; font-size:12px; transform: translate( -10%,-33%); margin:0; padding:0; z-index:33; }
#hov3 { position : absolute; display:none; color: #F00; font-size:12px; transform: translate( -85%,-70%); margin:0; padding:0; z-index:33; }
#hov4 { position : absolute; display:none; color: #40F; font-size:12px; transform: translate( -10%,-33%); margin:0; padding:0; z-index:33; }
/*}}}*/

/* MODES */
/* pat_bag .. dimmed {{{*/
.dimmed>.pat_span { opacity    : .2    !important;  }
/*
.dimmed    { background : rgba(034,034,034,0.27) !important;  }
#pat_bag.dimmed    { box-shadow : 0 0 .3em 1em #F00 !important; }
#pat_bag.dimmed    { box-shadow : none !important;  }
#pat_bag.dimmed    { border : none !important;  }
#pat_bag.221,imme0.86)    { background : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%) !important; }
.dimmed    { background : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%) !important; }
#pat_bag   { opacity    : 1     !important;  }
.dimmed    { opacity    : .2    !important;  }
.dimmed    { background : rgba(255,255,255,0.33);  }
.dimmed *  { color : #222 !important; background : #000!important;  }
.dimmed *  { visibility: hidden !important; }
.dimmed    { color : #DFD !important; border-radius : 0 !important;  }
.dimmed    {            color : #DFD !important; }
.dimmed    { background-color : #F00 !important; }
*/
/*}}}*/
/* pat_bag .. standby {{{*/
#pat_bag.standby::before  { content          : '\\267B';         } /* recycle */
#pat_bag.standby          { background       : linear-gradient(to bottom, #F00, #400) !important; }
#pat_bag         em       { z-index          : 1;               } /* above pat_bag divs */
#pat_bag.standby em       { background-color : #F88 !important; }
#pat_bag.standby em       { color            : #000;            }
#pat_bag.standby em       { box-shadow       : none;            }

/*}}}*/

/* PATTERNS */
/* pat_bag .. open_bag {{{*/
/*{{{
#pat_bag.open_bag  { width      :  26em; }
#pat_bag.open_bag  { min-height :   7em; }
}}}*/
/*}}}*/
/* pat_bag .. wide_bag {{{*/
/*{{{*/
          .full               { transition-duration   : 1000ms;          }
          .wide_bag           { transition-duration   : 1000ms;          }
          .wide_bag #bak_bag  { border-radius         : 1em 1em 1em 1em; }
          .wide_bag #off_bag  { border-radius         : 1em 1em 1em 1em; }
          .wide_bag           { display               : grid;                    }
          .wide_bag           { grid-gap              :    0;                    }
          .wide_bag           { grid-auto-columns     : minmax(12em, auto);      }
/*}}}*/

.wide_bag>.pat_span                 { grid-column-start     :  1;                      }
      span.pat_span:nth-of-type( 1) {                             grid-row-start :  1; }
      span.pat_span:nth-of-type( 2) {                             grid-row-start :  2; }
      span.pat_span:nth-of-type( 3) {                             grid-row-start :  3; }
      span.pat_span:nth-of-type( 4) {                             grid-row-start :  4; }
      span.pat_span:nth-of-type( 5) {                             grid-row-start :  5; }
      span.pat_span:nth-of-type( 6) {                             grid-row-start :  6; }
      span.pat_span:nth-of-type( 7) {                             grid-row-start :  7; }
      span.pat_span:nth-of-type( 8) {                             grid-row-start :  8; }
      span.pat_span:nth-of-type( 9) {                             grid-row-start :  9; }
      span.pat_span:nth-of-type(10) {                             grid-row-start : 10; }

          #off_bag                  { grid-column-start     :  1; grid-row-start : 11; }
          #bak_bag                  { grid-column-start     :  2; grid-row-start :  1; grid-row-end : 12; }

/*{{{
.wide_bag #off_bag                  { grid-column-start     :  1; grid-row-start :  1; grid-row-end : 12; }
.wide_bag #off_bag                  { grid-column-start     :  1; grid-row-start :  1; }
          #off_bag.empty            { display               : none;                    }
.wide_bag #bak_bag                  { grid-column-start     :  2; grid-row-start :  1; grid-row-end : -1; }

          #off_bag.full             {                             grid-row-start :  1; }
          .wide_bag           { grid-template-columns : 1fr 2fr 3fr   ;   }
          .wide_bag           { grid-auto-rows        : minmax(100px, auto);      }
          .wide_bag           { grid-template-columns : repeat(3, 1fr);   }
}}}*/

/*}}}*/
/* off_bag {{{*/
          #off_bag          { float   : left; clear : left; }
          #bak_bag          { float   : left; clear : left; }
          #bak_bag          { display : none;               } /* depends on open_bag */

          #bak_bag          { padding : .5em !important;    }
          #off_bag          { padding : .5em !important;    }

/*{{{

.open_bag #off_bag          { min-height : 2em;             }
          #off_bag          {    opacity : 0;               }
.open_bag #off_bag          {    opacity : 1    !important; }
          #off_bag          {      width : 0; height :    0; }
}}}*/
.open_bag #off_bag          {      width : 14em; height : auto; }
/*}}}*/
/* bak_bag {{{*/
.open_bag #bak_bag          { display : block; }
.open_bag #bak_bag          { width : 14em; }
/* {{{
.open_bag #bak_bag          {      width : 14em; height : auto; }
.open_bag #bak_bag          {      width : 14em; height : 1em !important; }
          #bak_bag>*        {      display : none; }
.open_bag #bak_bag>*        {      display : initial; }
          #bak_bag          {      display :   none; }
.open_bag #bak_bag          {      display :  block; }
.open_bag #bak_bag          { transition : opacity,height,width      250ms              ease     0ms; }
}}}*/
/* DEPENDENT on open_bag {{{
.open_bag #bak_bag          { min-height : 7em; }
}}}*/
/* KEEP IT VISIBLE AT ALL TIMES {{{
          #bak_bag          {    opacity : 0; }
.open_bag #bak_bag          {    opacity : 1 !important; }
}}}*/
/* KEEPT IT SIZED AT ALL TIMES {{{
          #bak_bag          {      width : 0; height :    0; }
}}}*/
/*}}}*/
/* off_bag bak_bag .. margin {{{*/

          #off_bag          { border-radius    : 1em 1em 0 0;                      }
          #off_bag          { margin-bottom    : 0;                                }
          #bak_bag          { margin-top       : 0;                                }
          #bak_bag          { border-radius    : 0 0 1em 1em;                      }

/*}}}*/
/* off_bag bak_bag .. border {{{*/
          #off_bag          { border-top       : 3px solid rgba(034,034,034,0.07); }
          #off_bag          { border-left      : 2px solid rgba(034,034,034,0.07); }
          #off_bag          { border-right     : 2px solid rgba(034,034,034,0.07); }
          #off_bag          { border-bottom    : 1px solid rgba(034,034,034,0.07); }

          #bak_bag          { border-top       : 1px solid rgba(034,034,034,0.07); }
          #bak_bag          { border-left      : 2px solid rgba(034,034,034,0.07); }
          #bak_bag          { border-right     : 2px solid rgba(034,034,034,0.07); }
          #bak_bag          { border-bottom    : 3px solid rgba(034,034,034,0.07); }
/*}}}*/
/* off_bag bak_bag .. background {{{*/
/*{{{
          #bak_bag          { background : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(000,000,000,0.53) 85%, rgba(034,034,034,0.13) 95%, rgba(000,000,000,0.07) 100%); }
          #off_bag          { background : linear-gradient(to top   , rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 85%, rgba(034,034,034,0.13) 95%, rgba(034,034,034,0.07) 100%); }
          #off_bag          { background : linear-gradient(to top   , rgba(034,034,034,0.07) 0%, rgba(255,255,255,0.53) 98%, rgba(034,034,034,0.07) 100%); }
          #off_bag          { background : linear-gradient(to top   , rgba(25, 25, 25, 0.65) 25%, rgba(0, 0, 0, 0.28) 95%, rgba(255, 255, 255, 0.64) 95%); }
          #off_bag          { background : linear-gradient(to top, rgba(0,0,0,.2) 0%,rgba(0,32,0,.5) 8%, rgba(0,0,0,.5) 85%, rgba(32,32,32,.2) 95%, #111 100%); }
          #off_bag          { background : linear-gradient(to top, rgba(0,0,0,.2) 0%,rgba(32,0,0,.5) 8%, rgba(0,0,0,.5) 85%, rgba(32,32,32,.2) 95%, #111 100%); }
}}}*/

          #off_bag          { background       : linear-gradient(to top   , rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%); }
          #bak_bag          { background       : linear-gradient(to bottom, rgba(034,034,034,0.07) 0%, rgba(034,034,034,0.53) 98%, rgba(034,034,034,0.07) 100%); }

.open_bag #off_bag          { animation        : 500ms ease-out forwards off_flash; }
@keyframes off_flash        {
     10% { background-color : rgba(000,224,000,0.90); }
     30% { background-color : rgba(000,224,000,0.50); }
    100% { background-color : rgba(000,224,000,0.27); }
}

.open_bag #bak_bag          { animation        : 500ms ease-out forwards bak_flash; }
@keyframes bak_flash        {
     10% { background-color : rgba(255,000,000,0.90); }
     30% { background-color : rgba(255,000,000,0.50); }
    100% { background-color : rgba(255,000,000,0.27); }
}


/*}}}*/
/* pat_bag .. hovering .. nearing {{{*/

        .nearing  { transition-duration : 250ms; }
#pat_bag.nearing  { box-shadow          : 0 0 .3em .3em rgba(000,000,000,0.4) inset !important; }
#off_bag.nearing  { background-color    :               rgba(000,224,000,1.0)                 ; }
#bak_bag.nearing  { background-color    :               rgba(255,000,000,1.0)                 ; }

         #off_bag { transform-origin    : 50% 100%;                          }
         #bak_bag { transform-origin    : 50%   0%;                          }
.wide_bag #bak_bag { transform-origin    :50%  50%;                          }
#bak_bag.nearing  { animation           : 400ms ease-out forwards squeezing; }
#off_bag.nearing  { animation           : 400ms ease-out forwards squeezing; }
@keyframes squeezing    {
     10% { transform  : scale(1,1.008); }
     30% { transform  : scale(1,1.015); }
    100% { transform  : scale(1,1.020); }
}
/*{{{
#off_bag.nearing  { border-radius       : 1em; }
#bak_bag.nearing  { border-radius       : 1em; }
#off_bag.nearing  {          transform  : rotate(5deg); }
#bak_bag.nearing  {          transform  : rotate(5deg); }
#off_bag.nearing  {          transform  : scale(0.8); }
#bak_bag.nearing  {          transform  : scale(0.8); }
#off_bag.nearing  {          transform  : scale(1.02); }
#bak_bag.nearing  {          transform  : scale(1.02); }
#off_bag.nearing  { margin       : .5em; }
#bak_bag.nearing  { margin       : .5em; }
#off_bag.nearing  { border-radius       : .1em; }
#bak_bag.nearing  { border-radius       : .1em; }
}}}*/

        .outline  { transition-duration : 500ms; }

#pat_bag.hovering {          outline    : black 8px dashed !important; }
#off_bag.hovering {          outline    : green 8px dashed !important; }
#bak_bag.hovering {          outline    : red   8px dashed !important; }

/*{{{
#pat_bag.hovering { border     : 1em solid black !important; }

#pat_bag.hovering { background : linear-gradient(to bottom, rgba(000,000,000,0.53) 0%, rgba(000,000,000,0.53) 5%, rgba(000,000,000,0.53) 95%, rgba(000,000,000,1.00) 100%); }
#pat_bag.hovering { background : linear-gradient(to bottom, rgba(255,221,000,0.53) 0%, rgba(034,034,034,0.53)  8%, rgba(034,034,034,0.00) 100%) !important; }
#pat_bag.hovering { background : rgba(000,000,255,1.00) !important; }
        .hovering { background : rgba(255,255,000,0.13) !important; }
        .hovering { background : rgba(255,255,255,0.33);            }

#pat_bag.hovering { box-shadow : 0 0 .05em .1em rgba(136,255,136,1.0) inset !important; }
#pat_bag.hovering { box-shadow : 0 0  .5em      rgba(255,255,255,1.0) inset !important; }
#bak_bag.hovering { box-shadow : 0 0   1em      rgba(000,000,000,0.5) !important; }
#off_bag.hovering { box-shadow : 0 0   1em      rgba(000,000,000,0.5) !important; }
#pat_bag.hovering { box-shadow : 0 0   1em      rgba(000,000,000,0.5) !important; }

#bak_bag.hovering {           transform : translate(0.5em,0);                          }
#off_bag.hovering {           transform : translate(0.5em,0);                          }

        .hovering {               color : #0F0                             !important; }
        .hovering {             outline : rgba(255,000,255,0.53) 5px solid;            }

        .hovering>.place_holder { opacity : .5;             }
        .hovering>.place_holder { outline : 2px #F00 solid; }
        .hovering>.place_holder { outline : 2px #FFF solid; }

      .mov_em_div>.place_holder { opacity : 0;              }

}}}*/
/*}}}*/

/* SEEKER */
/*{{{*/
/* .standby {{{*/
#seeker_PD.standby                     { background : linear-gradient(to bottom, rgba(255,0,0,1), #400) !important; }
#seeker_PU.standby                     { background : linear-gradient(to bottom, rgba(255,0,0,1), #400) !important; }

          .standby .seeker_handle      { transform  : rotate( -15deg) !important; }
          .standby .seeker_handle.back { transform  : rotate(-165deg) !important; }
/*}}}*/
/* .seeker_P {{{*/
.seeker_P           { background     : transparent; }
.seeker_P           { margin         : 0; }
.seeker_P           { cursor         : pointer; }
.seeker_P:hover     { color          : red; }
.seeker_P:hover     { font-weight    : bold; }

/* OUT */
.seeker_P      >div { position       : relative; }
.seeker_P      >div { margin         : 0; }
.seeker_P      >div { border         : none; }
.seeker_P      >div { border-radius  : 1em; }
/* IN */
.seeker_P      >div { width          : 120px; }
.seeker_P      >div { padding        : 0; }
.seeker_P      >div { font-size      : 500%; }
.seeker_P      >div { font-weight    : 800; }
.seeker_P      >div { height         : 120px; }
.seeker_P      >div { line-height    : 120px; }
.seeker_P      >div { text-align     : center; }
.seeker_P      >div { background     : linear-gradient(to bottom, rgba(255,255,255,.8), rgba(255,172,  0,.1)); }
.seeker_P.dark >div { background     : linear-gradient(to bottom, rgba( 64, 64, 48,.8), rgba( 32, 16, 16,.1)); }

/*}}}*/
/* display position border {{{*/
#seeker_PD { display        : none; }
#seeker_PU { display        : none; }

#seeker_PD { position       : absolute; top: 5em; left:14em; }
#seeker_PU { position       : absolute; top:10em; left:14em; }

#seeker_PD { vertical-align : middle; }
#seeker_PU { vertical-align : middle; }

#seeker_PD { border-radius  : 50%; }
#seeker_PU { border-radius  : 50%; }

/*}}}*/
/* transition {{{*/

#seeker_PU           { transition-duration        :        200ms; }
#seeker_PU           { transition-timing-function :     ease-out; }

/*}}}*/
/* box-shadow {{{*/
/* ........................................................ ox    oy  blur spread color */
#seeker_PU                              { box-shadow     :  0px 24px  24px        /*rgba(  0,  0,  0, .2)*/; }
#seeker_PU.seek1_onSeekEL               { box-shadow     :  0px  0em   0px   32px /*rgba(255,  0,  0, .2)*/; }
#seeker_PU.seek2_onResume               { box-shadow     :  0px  0em   0px   32px /*rgba(255,  0,  0, .2)*/; }
#seeker_PU.seek3_onResume               { box-shadow     :  0px  0em   0px   32px /*rgba(255,  0,  0, .2)*/; }
#seeker_PU.seek1_onSeekEL.scroll_smooth { box-shadow     :  0px  0em   0px   32px /*rgba(255,  0,255, .2)*/; }
#seeker_PU.seek2_onResume.scroll_smooth { box-shadow     :  0px  0em   0px   32px /*rgba(255,  0,255, .2)*/; }
#seeker_PU.seek3_onResume.scroll_smooth { box-shadow     :  0px  0em   0px   32px /*rgba(255,  0,255, .2)*/; }
/* ........................................................ ox    oy  blur spread color */
#seeker_PD                              { box-shadow     : 12px 12px  24px        rgba(  0,  0,  0,0.5); }
/* ........................................................ ox    oy  blur spread color */
.seeker_P               >div            { box-shadow     : -3px  -3px  6px    0px rgba(  0,  0,  0,0.5) inset; }
.seeker_P.scroll_smooth >div            { box-shadow     :  0px   0px  2px    8px rgba(255,255,255,0.5) inset; }
/*}}}*/
/* .on_seeker_cooldown {{{*/
/*............................................................................................*/
.on_seeker_cooldown    { outline    : dotted             24px rgba(192,192,192, .5) !important; }
/*.............................................................................................*/
.on_seeker_wrapped     { box-shadow :   0px   0px  0px   48px rgba(  0,  0,  0, .5) !important; }
/*..................................... ox     oy blur spread color ..........................*/
.on_seeker_look_right  { box-shadow :  32px  0px   0px   32px  !important; }
.on_seeker_look_left   { box-shadow : -32px  0px   0px   32px  !important; }
.on_seeker_look_up     { box-shadow :   0px -32px  0px   32px  !important; }
.on_seeker_look_down   { box-shadow :   0px  32px  0px   32px  !important; }

#seeker_PU             { color      : rgba(064,064,064,0.25)         ; }
#seeker_PU.look_color1 { color      : rgba(150,075,000,0.50) !important; }
#seeker_PU.look_color2 { color      : rgba(255,000,000,0.50) !important; }
#seeker_PU.look_color3 { color      : rgba(255,165,000,0.50) !important; }
#seeker_PU.look_color4 { color      : rgba(255,255,000,0.50) !important; }
#seeker_PU.look_color5 { color      : rgba(154,205,050,0.50) !important; }
#seeker_PU.look_color6 { color      : rgba(100,149,237,0.50) !important; }
#seeker_PU.look_color7 { color      : rgba(238,130,238,0.50) !important; }
#seeker_PU.look_color8 { color      : rgba(160,160,160,0.50) !important; }
#seeker_PU.look_color9 { color      : rgba(255,255,255,0.50) !important; }
#seeker_PU.look_color0 { color      : rgba(032,032,032,0.50) !important; }

/*.............................................................................................*/
/*}}}*/
/* .magnified {{{*/
#seeker_PD           { opacity                    :         1.0; }
#seeker_PD           { transform-origin           :     50% 0 0; }

#seeker_PD           { transition-duration        :       200ms; }
#seeker_PD.magnified { transition-duration        :       200ms; }

#seeker_PD           { transform                  : scale(0.33); }
#seeker_PD.magnified { transform                  : scale(1   ); }

/*}}}*/
/* .fading {{{*/

    .fading *        { opacity                    : 0.5                        !important; }
    .fading *        { transform-origin           : 50%  120%;                             }
    .fading *        { transform                  : scale(0.05);                           }
    .fading *::after { transform                  : scale(0.50) rotate(-90deg) !important; }
    
    .fading *        { transition-delay           : 600ms;                                 }
    .fading *        { transition-duration        : 300ms;                                 }
    .fading *::after { transition-duration        : 300ms                      !important; }
    
    .fading *        { transition-timing-function : ease-in;                               }
    .fading *::after { transition-timing-function : ease-in;                               }

/*}}}*/
/* #seeker_CU {{{*/
      #seeker_CU                       { color          : #40D; }
.dark #seeker_CU                       { color          : pink; }
      #seeker_CU sup                   { font-size      :  30%; }
      #seeker_CU sup                   { pointer-events : none; }

/*}}}*/
/* #seeker_CD {{{*/
      #seeker_CD                       { width          : 360px; }
      #seeker_CD                       { height         : 360px; }
      #seeker_CD                       { line-height    : 360px !important; }
      #seeker_CD                       { border-radius  : 50%; }
      
      #seeker_CD em                    { line-height : 150%;  }
      #seeker_CD em                    { font-size   : 36px;  }
      #seeker_CD .seeker_handle        { z-index     : 1;     }
      #seeker_CD .seeker_handle        { font-size   : 192px; }
      #seeker_CD .seeker_handle.left   { font-size   : 192px; }
      #seeker_CD .seeker_handle.right  { font-size   : 192px; }
      #seeker_CD .seeker_handle.top    { font-size   :  48px; }
      #seeker_CD .seeker_handle.bottom { font-size   :  48px; }

/*}}}*/
/* #seeker_thumbs {{{*/
#seeker_thumbs         {
    display          : inline-block;
    position         : absolute;
    margin           : 0;
    margin-right     :-50%;
    top              : 50%;
    left             : 50%;
    transform        : translate(-50%,-50%);

    font-weight      : 900;
    font-size        : 16px;
    line-height      : 28px;
    vertical-align   : middle;

    border-radius    : 2em;
    background       : transparent;

}
#seeker_thumbs * {
    vertical-align   : middle;
}
#seeker_thumbs .ellipsis {
    display          : block;
}

/*}}}*/
/* .seeker_handle {{{*/

#sel_bag     .seeker_handle                { position   : absolute;    top :  0  ;     left : 0;                 }
#seeker_CD   .seeker_handle.left           { position   : absolute;    top :-.2em;     left : 0;                 }
#seeker_CD   .seeker_handle.right          { position   : absolute;    top :-.2em;    right : 0;                 }
#seeker_CD   .seeker_handle.top            { position   : absolute;    top : 1em; transform : translate(-50%,0); }
#seeker_CD   .seeker_handle.bottom         { position   : absolute; bottom : 1em; transform : translate(-50%,0); }

#seeker_CD   .seeker_handle.bottom  {
    border-width : 2px 0 2px 0 !important;
    border-style : dashed      !important;
    width        : 2em         !important;
    line-height  : 1em         !important;
}

#seeker_CD   .seeker_handle.top     {
    border       : 0           !important;
    line-height  : 1em         !important;
}

             .seeker_handle                { color                       :   green !important; }
.back        .seeker_handle                { color                       :     red !important; }
             .seeker_handle.bottom         { color                       :    gray !important; }
             .seeker_handle.bottom.checked { color                       :     red !important; }
             .seeker_handle.bottom.checked { border-color                :     red !important; }
             .seeker_handle.top            { color                       :   black !important; }
             .seeker_handle.top.checked    { color                       :    navy !important; }
             .seeker_handle.top.checked    { border-color                :    navy !important; }

             .seeker_handle                { font-size                   :    64px; }
             .seeker_handle                { font-weight                 :     300; }
             .seeker_handle                { margin                      :       0; }
             .seeker_handle                { padding                     :       0; }

             .seeker_handle                { transform-origin            : 50% 50% 0; }
             .seeker_handle.back           { transform                   : translate(0, 20%) rotate(-180deg); }
             .seeker_handle.right.back     { transform                   : translate(0, 20%) rotate( 180deg); }

             .seeker_handle                { transition-duration         : 200ms; }
             .seeker_handle.back           { transition-duration         : 200ms; }

             .seeker_handle                { transition-delay            :   0ms; }
             .seeker_handle.back           { transition-delay            :   0ms; }
             .seeker_handle.left           { transition-delay            : 200ms; }
             .seeker_handle.left.back      { transition-delay            : 200ms; }
             .seeker_handle.right          { transition-delay            : 400ms; }
             .seeker_handle.right.back     { transition-delay            : 400ms; }
             .seeker_handle.bottom         { transition-delay            : 600ms; }
             .seeker_handle.bottom.checked { transition-delay            : 600ms; }
             .seeker_handle.top            { transition-delay            : 600ms; }
             .seeker_handle.top.checked    { transition-delay            : 600ms; }

             .seeker_handle                { transition-timing-function  : ease-in;  }
             .seeker_handle.back           { transition-timing-function  : ease-out; }

             .seeker_handle.back           { transition-property         : all; }

/*}}}*/
/* SEEK ON INVISIBLE NODE {{{*/
#seeker_PU.invisible_node { transition-duration : 500ms; }
#seeker_PU.invisible_node { transform           : scale(0.5) rotate(-45deg); }

#seeker_PD.invisible_node { transition-duration : 500ms; }
#seeker_PD.invisible_node { transform           : scale(0.5) rotate(-45deg); }

/*}}}*/
/* seek1_onSeekEL seek2_onResume seek3_onSeeker {{{*/

.seek1_onSeekEL #seeker_CU { border-radius  : 0    !important; }
.seek3_onSeeker #seeker_CU { border-radius  : 50%  50%  25%  25% !important; }
.seek2_onResume #seeker_CU { border-radius  : 50%  50%  45%  45% !important; }

/*}}}*/
/* seeker::after {{{*/
#seeker_CU::after { content          : "?"; }
#seeker_CU::after { position         : absolute; }
#seeker_CU::after { font-size        : 100%; }
#seeker_CU::after { text-align       : center !important; }
#seeker_CU::after { vertical-align   : middle !important; }
#seeker_CU::after { padding          : 0      !important; }
#seeker_CU::after { margin           : 0      !important; }
#seeker_CU::after { transform-origin : -100% 50% 0; }
#seeker_CU::after { content          : '\\2699'; /* gear */ }
#seeker_CU::after { text-shadow      : rgba(0,0,0,0.5) .02em .02em .1em !important; }
#seeker_CU::after { transition-duration        : 500ms; }
#seeker_CU::after { transition-timing-function : cubic-bezier(0.5, 0.05, 0.5, 1.1); }

#seeker_CU.num1::after  { /*content :  "1";*/ transform : rotate( -60deg); }
#seeker_CU.num2::after  { /*content :  "2";*/ transform : rotate( -30deg); }
#seeker_CU.num3::after  { /*content :  "3";*/ transform : rotate(   0deg); }
#seeker_CU.num4::after  { /*content :  "4";*/ transform : rotate(  30deg); }
#seeker_CU.num5::after  { /*content :  "5";*/ transform : rotate(  60deg); }
#seeker_CU.num6::after  { /*content :  "6";*/ transform : rotate(  90deg); }
#seeker_CU.num7::after  { /*content :  "7";*/ transform : rotate( 120deg); }
#seeker_CU.num8::after  { /*content :  "8";*/ transform : rotate( 150deg); }
#seeker_CU.num9::after  { /*content :  "9";*/ transform : rotate( 180deg); }
#seeker_CU.num10::after { /*content : "10";*/ transform : rotate( 210deg); }
#seeker_CU.num11::after { /*content : "11";*/ transform : rotate( 240deg); }
#seeker_CU.num12::after { /*content : "12";*/ transform : rotate( 270deg); }

/*}}}*/
/*}}}*/
/* #seekspot {{{*/
#seekspot { pointer-events   : none;                                                               }
#seekspot { display          : none;                                                               }
#seekspot { position         : fixed;                                                              }
#seekspot { z-index          : 33;                                                                 }
#seekspot { border-radius    : 0.5em !important;                                                   }
#seekspot { left             : 0     !important;                                                   }
#seekspot { width            : 99%;                                                                }
#seekspot { margin           : 0     !important;                                                   }
#seekspot { padding          : 0     !important;                                                   }

#seekspot                          { border     : none; }

#seekspot                          { box-shadow : none; }
#seekspot.container_selected       { box-shadow : rgba( 32, 32, 32, 0.5) 0 0 5px 5px inset; } /* x y blur spread */
#seekspot.container_selected.dark  { box-shadow : rgba(128,128,128, 0.5) 0 0 5px 5px inset; } /* x y blur spread */

/*
#seekspot.container_selected       { border     : 3px rgba(32,32,32,0.5) solid;                                  }
#seekspot.container_selected.dark  { border     : 3px rgba(96,96,96,0.5) solid;                                  }
#seekspot.container_selected       { background : linear-gradient(to bottom, rgba(32,32,32,.9), rgba(32,32,32,0) 10%, rgba(32,32,32,0) 90%, rgba(32,32,32,.9)); }
#seekspot.container_selected.dark  { background : linear-gradient(to bottom, rgba(96,96,96,.9), rgba(96,96,96,0) 10%, rgba(96,96,96,0) 90%, rgba(96,96,96,.9)); }
#seekspot                    { outline:24px dotted rgba(255,255,255,.5); }
#seekspot.container_selected { outline:48px dotted rgba(255,255,255,.8); }
#seekspot { outline          :  2px rgba(255,255,255,1.00) dashed;                                               }
#seekspot { border           :  9px rgba(000,000,000,0.53) solid;                                                }
#seekspot { border           : 20px rgba(000,000,000,0.53) dashed;                                               }
#seekspot { border : 2px white dashed; outline: 2px black dashed; }
*/
/*{{{
#seekspot { transform-origin : 50% 0% 0;     }
#seekspot { z-index          : -1;           }
#seekspot { left             : 0 !important; }
}}}*/
/* transition {{{
#seekspot   { transition-duration        :    200ms; }
#seekspot   { transition-timing-function : ease-out; }
}}}*/
/*}}}*/
/* #seekspot_arrow {{{*/
#seekspot_arrow { display      : inline-block         !important; }
#seekspot_arrow { transform    : translate(-50%,-36%) !important; }
#seekspot_arrow { font-size    : 100px                !important; }
#seekspot_arrow { color        : red                  !important; }
/*
#seekspot_arrow { border       : none                 !important; }
#seekspot_arrow { padding      : 0                    !important; }
#seekspot_arrow { box-shadow   : none                 !important; }
#seekspot_arrow { background   : transparent          !important; }
*/
/*{{{
#seekspot_arrow { text-shadow    : rgba(  0,  0,  0, 0.7) 2px 1px 5px !important; }
#seekspot_arrow { font-weight    : 900   !important;                              }
#seekspot_arrow { background     : transparent !important;                        }
#seekspot_arrow { font-stretch   : ultra-expanded !important;                     }
#seekspot_arrow { width          : 70px;                                          }
#seekspot_arrow { height         : 70px;                                          }
#seekspot_arrow { width          : 70px !important;                               }
#seekspot_arrow { height         : 70px !important;                               }
#seekspot_arrow { line-height    : 80px;                                          }
#seekspot_arrow { width          : 20px;                                          }
#seekspot_arrow { line-height    : 80px;                                          }
#seekspot_arrow { width          : 70px;                                          }
#seekspot_arrow { height         : 70px;                                          }
#seekspot_arrow { font-size      : 70px;                                          }
#seekspot_arrow { text-shadow    : rgba( 50, 50, 50, 0.9) 2px 1px 5px;            }
#seekspot_arrow { line-height    : 1px;                                           }
}}}*/
/*{{{
#seekspot_arrow { margin-top     : -.5em;                                         }
#seekspot_arrow { line-height    : 70px;                                          }
#seekspot_arrow { vertical-align : top;                                           }
}}}*/
/*{{{
      #seekspot_arrow { background : linear-gradient(to bottom, rgba( 32, 32, 32,.02), rgba(255,255, 96,.9)) !important; }
.dark #seekspot_arrow { background : linear-gradient(to bottom, rgba( 16, 16, 16,.02), rgba(196, 96, 96,.9)) !important; }
}}}*/
/*}}}*/
/* #seekspot_U # seekspot_D {{{*/

#seekspot_U, #seekspot_D { display          :  none; }
#seekspot_U, #seekspot_D { pointer-events   :  none; }
#seekspot_U, #seekspot_D { position         : fixed; }
#seekspot_U, #seekspot_D { left             :     0; }
#seekspot_U, #seekspot_D { color            : white; }
#seekspot_U, #seekspot_D { z-index          :    -1; } /* bellow seeker_P */

#seekspot_U                { top              :     0; }
             #seekspot_D   { bottom           :     0; }

#seekspot_U>*              { position:absolute; left:1.3em; bottom:0; margin:0; padding: 1em; }
             #seekspot_D>* { position:absolute; left:1.3em;    top:0; margin:0; padding: 1em; }
/*{{{
#seekspot_U     , #seekspot_D      { background-color : rgba(192,192,192,0.5); }
#seekspot_U.dark, #seekspot_D.dark { background-color : rgba( 48, 48, 48,0.5); }
}}}*/
#seekspot_U      { background : linear-gradient(to bottom, rgba( 64, 64, 64,.5) 50%, rgba( 64, 64, 64,.1)); }
#seekspot_D      { background : linear-gradient(to top   , rgba( 64, 64, 64,.5) 50%, rgba( 64, 64, 64,.1)); }
#seekspot_U.dark { background : linear-gradient(to bottom, rgba(  0,  0,  0,.5) 50%, rgba(  0,  0,  0,.1)); }
#seekspot_D.dark { background : linear-gradient(to top   , rgba(  0,  0,  0,.5) 50%, rgba(  0,  0,  0,.1)); }


#seekspot_U>*                      { background : linear-gradient(to right, rgba( 96,128, 96,.1) 10%, rgba( 96,128, 96,.8)); }
             #seekspot_D>*         { background : linear-gradient(to right, rgba( 96, 96,255,.1) 10%, rgba( 96, 96,255,.8)); }

#seekspot_U>*              { border-radius : 0em 3em 0em 0em; }
             #seekspot_D>* { border-radius : 0em 0em 3em 0em; }

#seekspot_U >*              { box-shadow       : rgba( 0, 0, 0, 0.2) 5px -5px 16px 0px; } /* x y blur spread */
             #seekspot_D >* { box-shadow       : rgba( 0, 0, 0, 0.2) 5px  5px 16px 0px; }

#seekspot_U { border-top-left-radius        : 2em; }
#seekspot_U { border-top-right-radius       : 2em; }
#seekspot_D { border-bottom-left-radius     : 2em; }
#seekspot_D { border-bottom-right-radius    : 2em; }

#seekspot_U { border-bottom-left-radius     : .5em; }
#seekspot_U { border-bottom-right-radius    : .5em; }
#seekspot_D { border-top-left-radius        : .5em; }
#seekspot_D { border-top-right-radius       : .5em; }
/*{{{
#seekspot_U         { background                    : linear-gradient(to left  , rgba( 96,255, 96,.5 )    , rgba( 64,255, 64,.01) 2%, rgba( 64,255, 64,.01) 98%, rgba( 96,255, 96,.5)); }
#seekspot_D         { background                    : linear-gradient(to left  , rgba( 96, 96,255,.5 )    , rgba( 64, 64,255,.01) 2%, rgba( 64, 64,255,.01) 98%, rgba( 96, 96,255,.5)); }
}}}*/
/*{{{
#seekspot           { background                    : linear-gradient(to left  , rgba(255, 96, 96,.5 )    , rgba(255, 64, 64,.01) 2%, rgba(255, 64, 64,.01) 98%, rgba(255, 96, 96,.5)); }
#seekspot.caption_U { background                    : linear-gradient(to top   , rgba( 96,255, 96,.01) 90%, rgba( 96,255, 96,.3)); }
#seekspot.caption_D { background                    : linear-gradient(to bottom, rgba( 96, 96,255,.01) 90%, rgba( 96, 96,255,.3)); }

#seekspot_U { margin-right                  : 1em; }
#seekspot   { margin-right                  : 1em; }
#seekspot_D { margin-right                  : 1em; }

#seekspot_U, #seekspot_D { margin           :   1em; }
}}}*/
#seekspot_U, #seekspot_D { width            :   99%; }
#seekspot_U, #seekspot_D { height           : 100px; }

/*{{{
#seekspot_U, #seekspot_D { left             :   0px;    }
#seekspot_U, #seekspot_D { transform-origin : 0 100%;   }
#seekspot_U              { background       : rgba(000,255,000,0.66); }
             #seekspot_D { background       : rgba(255,000,000,0.66); }
#seekspot_U              { height           : 50px;               }
#seekspot_U              { margin-bottom:-100% !important;     }
#seekspot_U              { transform : translate(0, -100%); }
             #seekspot_D { transform : translate(0,     0); }
*/
/*}}}*/
/*}}}*/

/* MEDIA */
/*{{{*/
@media only screen and (max-resolution :  96dpi) { #headsup { border : 4px groove #AAA; } }
@media only screen and (min-resolution : 120dpi) { #headsup { border :            none; } }
@media only screen and (min-resolution : 120dpi) {
/*{{{*/
/*
#dimm_mask.light            { transition-duration  :  200ms; }
#mov_div.moving             { transition-duration  :  150ms; }
#seeker_PD                  { transition-duration  :  100ms; }
#seeker_PD.invisible        { transition-duration  :  100ms; }
#seeker_PD.magnified        { transition-duration  :  100ms; }
#words_opcycle.checked      { transition-duration  :  100ms; }
.eso_div                    { transition-delay     :    0ms; }
.eso_div                    { transition-duration  :  100ms; }
.fading                     { transition-duration  :  200ms; }
.grid_caption_hide          { animation-delay      :  150ms; }
.grid_caption_hide          { animation-duration   :  150ms; }
.grid_caption_see_through   { transition-duration  :    0ms; }
.grid_caption_see_through   { transition-duration  :  100ms; }
.grid_caption_show          { animation-delay      :  150ms; }
.grid_caption_show          { animation-duration   :  150ms; }
.hidden                     { transition-duration  :  150ms; }
.on_grid                    { transition-delay     :    0ms; }
.on_grid                    { transition-duration  :    0ms; }
.other_panel                { transition-duration  :  200ms; }
.panel_pressed_glowing      { transition-delay     :  100ms; }
.panel_pressed_glowing      { transition-delay     :  150ms; }
.panel_pressed_glowing      { transition-duration  :  150ms; }
.pulse_in                   { animation-duration   :  200ms; }
.pulse_in                   { transition-delay     :    0ms; }
.pulse_in                   { transition-duration  :  100ms; }
.pulse_out                  { transition-delay     :    0ms; }
.pulse_out                  { transition-duration  :  100ms; }
.removing                   { transition-duration  :  200ms; }
.rotate_NE                  { transition-delay     :  100ms; }
.rotate_NE                  { transition-duration  :  100ms; }
.rotate_NW                  { transition-delay     :  100ms; }
.rotate_NW                  { transition-duration  :  100ms; }
.rotate_SE                  { transition-delay     :  100ms; }
.rotate_SE                  { transition-duration  :  100ms; }
.rotate_SW                  { transition-delay     :  100ms; }
.rotate_SW                  { transition-duration  :  100ms; }
.scrolled      >div         { transition-duration  :  100ms; }
.seeker_handle              { transition-delay     :    0ms; }
.seeker_handle              { transition-duration  :  100ms; }
.seeker_handle.back         { transition-delay     :    0ms; }
.seeker_handle.back         { transition-duration  :  100ms; }
.seeker_handle.left         { transition-delay     :  100ms; }
.seeker_handle.left.back    { transition-delay     :  100ms; }
.seeker_handle.right        { transition-delay     :  100ms; }
.seeker_handle.right.back   { transition-delay     :  100ms; }
.seeker_handle.bottom       { transition-delay     :  100ms; }
.seeker_handle.bottom.back  { transition-delay     :  100ms; }
.seeker_handle.top          { transition-delay     :  100ms; }
.seeker_handle.top.back     { transition-delay     :  100ms; }
.stacking.floatlog>*        { animation-duration   :  200ms; }
.standby::before            { animation-duration   :  200ms; }
.transcript                 { transition-duration  :  100ms; }
.transcript.magnified       { transition-duration  :  100ms; }
.transcript.on_grid         { transition-delay     :  100ms; }
.transcript.on_grid         { transition-duration  :  100ms; }
.wide_bag                   { transition-duration  :  200ms; }
*/
/*}}}*/
}
/*}}}*/

/*{{{
 * transition: <property> <duration> <timing-function> <delay>;
}}}*/
/*}}}*/
`
)
;
/*}}}*/
  /**   3 GRID   CSS dom_grid_css_data {{{*/
/*
../stylesheet/dom_grid.css
*/
dom_grid_css_data ="data:text/css,"+ escape(`
/*{{{*/

#dom_grid_css_tag   { content: "dom_grid_css (180515:15h)"; }

/* dom_grid_playground {{{*/
#dom_grid_playground {
 border        : 1px solid #333;
 border-radius : 1em;
 padding       : .5em;
 background    : linear-gradient(to bottom, #333, #111) !important;
 margin        : 1em 1em 1em 10em;
 position      : fixed;
 top           : 0.5em;
 right         : 0.5em;
 width         : 75%;
}
#dom_grid_playground.collapsed             { width   :  25%;            }
#dom_grid_playground.collapsed #traces_div { display : none !important; }

#dom_grid_playground>div { display : inline;       }

#headsup_l_div      >div { display : inline-block; }

/*}}}*/
/* ol li {{{*/
ol>li{
 margin-bottom: 1em;
  white-space : nowrap;
}

/*}}}*/
/* traces {{{*/

#traces_div>div { margin-left:1em !important; margin-top: 0em !important; }

#traces {
 border-radius : 5px;
 box-shadow    : rgba(0, 0, 0, 0.3) 0 0.3em 0.3em inset;
 border        : 3px dashed #FD8;
 width         : 50em;
 padding       : 1ex;
 overflow      : auto;

 color         : #FD4;
 background    : rgba(16,16,16,.8);
}
/*}}}*/
/* note {{{*/
.note {
 background        : #fff3d4;
 border-color      : #f6b73c;
 border-left-width : 5px;
 border-left-style : solid !important;
 font-family       : "monospace";
 font-weight       : 700;
 font-size         : 100%;
 color             : #AAA;
 padding           : 1ex 1em 1ex 1em;
 display           : inline-block;
 margin            : 1ex 1ex 1ex 0;
}
.note em { padding    : 0.2em; }
.note em { line-height: 2.5em; }
.note pre { margin:0; }
.pat_div { display:none; }
/*}}}*/
/* .box {{{*/
.box {
    display:inline-block;
    position:relative;
    border         : 1px solid #404040      ;
    border-radius  : 5px 5px 5px 5px        ;
    color          : darkgray               ;
    font-weight    : 900                    ;
    background     : rgba(16,16,16,.8)      ;
    vertical-align : middle;
    text-align     : center;
    box-shadow     : 0 0 10px #000000 inset ;
    padding:0 !important;
}
.box  label { cursor: pointer; }
/*}}}*/
/* .cb_slider_pin {{{*/
.cb_slider_pin {
    width          : 80px;
    height         : 30px;
    border-radius  : 50px;
    padding        : 0;
    box-shadow     : inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
}

.cb_slider_pin:after {
    content        : '';
    height         : 2px;
    width          : 52px;
    position       : absolute;
    top            : 14px;
    left           : 14px;
    background     : #111;
    border-radius  : 50px;
    box-shadow     : inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2);
}

.cb_slider_pin label {
    z-index        : 1;
    width          : 22px;
    height         : 22px;
    position       : absolute;
    top            : 4px;
    left           : 4px;
    border-radius  : 50px;
    transition     : all 0.4s ease;
    background     : #fcfff4;
    background     : linear-gradient(to top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
    box-shadow     : 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
}

.cb_slider_pin label:after {
    content        : '';
    width          : 10px;
    height         : 10px;
    position       : absolute;
    top            : 6px;
    left           : 6px;
    background     : #333;
    border-radius  : 50px;
    box-shadow     : inset 0px 1px 1px black, 0px 1px 0px rgba(255, 255, 255, 0.9);
}

.cb_slider_pin input[type=checkbox]                       { visibility : hidden;  }
.cb_slider_pin input[type=checkbox]:checked + label       { left       : 54px;    }
.cb_slider_pin input[type=checkbox]:checked + label:after { background : #00Fe00; }

/*}}}*/

/*}}}*/
`
)
 .replace(/\\(\\x+)/g,"\\\\$1")
;
/*}}}*/
  /**  4 SELECT  JS dom_select_data {{{*/
/*
../javascript/dom_select.js
*/
dom_select_js_data ="data:application/javascript;charset=utf-8,"+ escape(`
/*{{{*/
/*dom_select_js "use strict";*/
let DOM_SELECT_JS_ID        = "dom_select_js";
let DOM_SELECT_JS_TAG       = DOM_SELECT_JS_ID  +" (180606:20h)";
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      DOUBLE_QUOTE  = String.fromCharCode(34);
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
/*}}}*/
/* let {{{*/
let HORIZONTAL_ELLLIPSIS = "\u2026";

let SYMBOL_U             = "\u25B2";
let SYMBOL_R             = "\u25B6";
let SYMBOL_D             = "\u25BC";
let SYMBOL_L             = "\u25C0";
let SYMBOL_E             = "\u2026";
let SYMBOL_LF            = "\u21B5";
let SYMBOL_CR            = "\u2943";
let SYMBOL_TOFU          = "\uFFFD";
let SYMBOL_EMPTY         = "\u23D8";
let SYMBOL_PUSH_PIN      = "\uD83D\uDCCC";
let SYMBOL_CLEARPIN      = "\u2715";

let mStartRange =  null;
let mEndRange   =  null;
let mTouchPoint =  null;

/*}}}*/

/** CCS .. (ecc color coded nodes) */
/*{{{*/
let CCS = function()
{
    /*this.clear {{{*/
    this.clear = function() {
        this.slot         =  0; /* first active slot = 1 */
        this.num_selected =  1;
        this.pattern      = "";
        this.options      = "";
        this.nodes        = [];
        this.thumbs       = [];
        this.containers   = [];
/*
        this.seek_up   = [];
        this.seek_down = [];
*/
    };
    /*}}}*/
    /*this.toString {{{*/
    this.toString = function() {
        return ""
            +  "Slot "+ this.slot              +" "
            +  "num_s"+ this.num_selected      +" "
            +  " "    + this.pattern           +" "
            +  "("    + this.options           +")"
            +  " ["   + this.nodes.length      +" nodes]"
            +  " ["   + this.thumbs.length     +" thumbs]"
            +  " ["   + this.containers.length +" containers]"
        ;
    };
    /*}}}*/
    /*this.num_toHTML {{{*/
    this.num_toHTML = function(num) {
        let slot_em    =              "<em class='cc"+((this.slot) % SELECT_SLOT_MAX)+"'>"+ this.slot + "</em>";
        let num_em     =              "<em class='cc"+((     num ) % SELECT_SLOT_MAX)+"'>"+      num  + "</em>";

        let pattern_em = pattern_toHTML(this.pattern, this.options);

        let empty      = (this.nodes.length < 1);
        let thumb_p_str= empty ? "" : get_thumb_p_str(this.thumbs[num-1]) +"% ";

        let text_em    = empty ? "" : "<em class='cc7'>"                + this.nodes [num-1].textContent + "</em>";

        return ""
            + slot_em + num_em + thumb_p_str.replace(" ","&nbsp;")
            + pattern_em +"="+ text_em
        ;

    };
    /*}}}*/
    this.clear(); /* construction-time-init */
};
let ccs = [];
/*_ s_get_slotted_pattern_count {{{*/
let s_get_slotted_pattern_count = function()
{
    let count = 0;
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if(!ccs[slot]                 ) continue;
        if( ccs[slot].nodes.length > 0) count += 1;
    }
if(LOG_MAP.T4_SLOT) log("s_get_slotted_pattern_count: ...return "+count);
    return count;
};
/*}}}*/
/*_ ccs_sort_pattern {{{*/
let ccs_sort_pattern = function()
{
    ccs.sort(
        function(a, b) {
            return b.pattern - a.pattern;
        }
    );
};
/*}}}*/
/*_ ccs_log {{{*/
let ccs_log = function()
{
    for(let slot = 0; slot < ccs.length; ++slot)
    {
        if(ccs[slot])
            log(slot+" "+ ccs[slot].toString());
    }
};
/*}}}*/

/*}}}*/

/** SLOT */
/*{{{*/
let SELECT_SLOT_MAX           =  10;
let S_TOUCHED_WORD_LENGTH_MAX = 256;
let last_cleared_slot         =   1;
let next_to_reuse_slot        =   1;
/*_ get_slot_for_range {{{*/
let SEL_CLASS_PREFIX = "select";
let get_slot_for_range = function(range)
{
    /* return range.parentNode highlight slot */

    let caller = "get_slot_for_range("+range+")";

    let slot = -1;

    if(range.startContainer && (range.startContainer.parentNode.id))
    {
        slot = range.startContainer.parentNode.id.startsWith( SEL_CLASS_PREFIX )
            ?  range.startContainer.parentNode.id.substring ( SEL_CLASS_PREFIX.length, SEL_CLASS_PREFIX.length+1)
            :                                                 -1
        ;
    }

if(LOG_MAP.T4_SLOT) log("get_slot_for_range("+range.toString()+"): return ["+slot+"] .. (startContainer: id=["+range.startContainer.id+"] parentNode.id=["+range.startContainer.parentNode.id+"])");

    if((slot >=0) && !ccs[slot]) ccs[slot] = new CCS();

    return slot;
};
/*}}}*/
/*_ get_slot_matching_pattern {{{*/
let get_slot_matching_pattern = function(pattern)
{
    let caller = "get_slot_matching_pattern("+pattern+")";
let log_this = LOG_MAP.T4_SLOT;

    let slot;
    try {
        for(slot = 1; slot < ccs.length; ++slot)
        {
            if( !ccs[slot]         ) continue;
            if( !ccs[slot].pattern ) continue;

            if( pattern ==        ccs[slot].pattern ) {
if(log_this) log(caller+": ...return slot #"+slot+" .. (pattern ==       CCS.PATTERN)");
                return slot;
            }
            if( ccs[slot].pattern.includes( pattern ) ) {
if(log_this) log(caller+": ...return slot #"+slot+" .. (CCS.PATTERN includes pattern)");
                return slot;
            }
            if( pattern.includes( ccs[slot].pattern ) ) {
if(log_this) log(caller+": ...return slot #"+slot+" .. (pattern includes CCS.PATTERN)");
                return slot;
            }

        }
    }
    catch(ex) { log(caller+": slot=["+slot+"]"+LF+" ccs[slot].pattern=["+ccs[slot].pattern+"]"+LF+ex, "error"); }

if(log_this) log(caller+": ...found no pattern matching current filter");
    return 0;
};
/*}}}*/
/*_ get_slot_of_pattern {{{*/
let get_slot_of_pattern = function(pattern)
{
let   caller = "get_slot_of_pattern("+pattern+")";
let log_this = LOG_MAP.T4_SLOT;

    pattern =      unescape(pattern);
    let slot;
    for(slot = 1; slot < ccs.length; ++slot)
    {
        if( !ccs[slot]         ) continue;
        if( !ccs[slot].pattern ) continue;
        if( pattern == unescape(ccs[slot].pattern))
            break;
    }

    if(slot >= ccs.length) slot = 0;

if(log_this) log(caller+": ...return slot=["+slot+"]");
    return slot;
};
/*}}}*/
/*_ set_slot_of_pattern {{{*/
let set_slot_of_pattern = function(new_slot, pattern)
{
let   caller = "set_slot_of_pattern("+new_slot+" ,"+pattern+")";
let log_this = LOG_MAP.T4_SLOT;

    pattern  = unescape(pattern);

    let was_slot;
    for(was_slot = 1; was_slot < ccs.length; ++was_slot)
    {
        if( !ccs[was_slot]         ) continue;
        if( !ccs[was_slot].pattern ) continue;
        if( pattern == unescape(ccs[was_slot].pattern))
            break;
    }

    if(was_slot < ccs.length)
    {
        let ccs_was_in_slot = ccs[new_slot];
        let ccs_new_in_slot = ccs[was_slot];

        ccs[was_slot]      = ccs_was_in_slot;
        ccs[new_slot]      = ccs_new_in_slot;

        if(ccs[was_slot]) ccs[was_slot].slot = was_slot;
        if(ccs[new_slot]) ccs[new_slot].slot = new_slot;

if(log_this) log(caller+":");
if(log_this && ccs[new_slot]) log("...PUSHED IN: ["+ccs[new_slot].slot+"]=["+ccs[new_slot].pattern+"]");
if(log_this && ccs[was_slot]) log("...MOVED OUT: ["+ccs[was_slot].slot+"]=["+ccs[was_slot].pattern+"]");
    }
    else {
if(log_this) log(caller+": nothing to move out from slot #"+new_slot+"");
    }

    return new_slot;
};
/*}}}*/
/*_ get_free_slot {{{ */
let get_free_slot = function()
{
    let caller = "get_free_slot";
let log_this = LOG_MAP.T4_SLOT;

    /* pick first available color slot */

    /* SKIP USED SLOTS  slot=[1..10] .. ccX=[1..0] */
    let slot;
    for(slot = 1; slot <= SELECT_SLOT_MAX; ++slot)
    {
        let ccX       = slot % SELECT_SLOT_MAX;
        let sel_class = SEL_CLASS_PREFIX + ccX;
        let selector  = "."+sel_class;

        let el = document.querySelector( selector ); /* .. (first will do) */
        if(!el) break;
    }

    if(slot <= SELECT_SLOT_MAX) {
        next_to_reuse_slot = slot + 1; if(next_to_reuse_slot > SELECT_SLOT_MAX) next_to_reuse_slot = 1;
if(log_this) log(caller+": 1/2 - FREE  SLOT ["+slot+"] .. next_to_reuse_slot=["+next_to_reuse_slot+"]");
    }
    else {
        slot = next_to_reuse_slot;
        next_to_reuse_slot = slot + 1; if(next_to_reuse_slot > SELECT_SLOT_MAX) next_to_reuse_slot = 1;
if(log_this) log(caller+": 2/2 - REUSE SLOT ["+slot+"] .. next_to_reuse_slot=["+next_to_reuse_slot+"]");
    }

    if(   !ccs[slot] ) ccs[slot] = new CCS();
    else clear_slot(       slot);

    return slot;
};
/*}}}*/
/*_ clear_slot {{{ */
let last_cleared_pattern;
let clear_slot = function(slot)
{
    let caller = "clear_slot("+slot+")";
let log_this = LOG_MAP.T4_SLOT;
if(log_this) log(caller);

    last_cleared_slot = slot;

    let ccX       = slot % SELECT_SLOT_MAX;
    let sel_class = SEL_CLASS_PREFIX + ccX;
    let selector  = "."+sel_class;
    let sel_list  = document.querySelectorAll( selector );
if(log_this && sel_list.length) log("...["+selector+"] sel_list.length=["+sel_list.length+"]");

    if( ccs[slot].pattern )
        t_clear_slot_sync(slot, ccs[slot].pattern);

    let cleared_count = 0;
    for(let i = 0; i < sel_list.length; ++i)
    {
        sel_list[i].outerHTML = sel_list[i].innerHTML;
        cleared_count += 1;
    }

    if( ccs[slot] ) {
        last_cleared_pattern = ccs[slot].pattern;
        ccs[slot].clear();
    }

    if(cleared_count) {
        sync_containers_hi();
        t_seeker_PU_hide();
        t_seeker_PD_hide();
    }

if(log_this && cleared_count) log("."+selector+": "+cleared_count+" nodes cleared");
    return cleared_count;
};
/*}}}*/
/*_ get_prev_populated_slot {{{*/
let get_prev_populated_slot = function(slot)
{
    let slot_with_nodes = 0;
    for(let i = (slot-1); i > (slot-SELECT_SLOT_MAX); --i)
    {
        let s = 1+ ((i-1+SELECT_SLOT_MAX) % SELECT_SLOT_MAX);
        let l = ccs[s]
            ?   ccs[s].nodes.length
            :   0;
        if(l && !slot_with_nodes) slot_with_nodes = s;
    }
    return slot_with_nodes;
};
/*}}}*/
/*_ get_next_populated_slot {{{*/
let get_next_populated_slot = function(slot)
{
    let slot_with_nodes = 0;
    for(let i = (slot+1); i < (slot+SELECT_SLOT_MAX); ++i)
    {
        let s = 1+ ((i-1+SELECT_SLOT_MAX) % SELECT_SLOT_MAX);
        let l = ccs[s]
            ?   ccs[s].nodes.length
            :   0;
        if(l && !slot_with_nodes) slot_with_nodes = s;
    }
    return slot_with_nodes;
};
/*}}}*/
/*}}}*/

/** EVENTS */
/* SELECT {{{*/
/*_ s_touchedWord {{{ */
let s_touchedWord = function(x,y)
{
    /* get_range_from_XY {{{ */
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord(x="+x+" , y="+y+")"; if(log_this) log(caller);

    let  rangeFromXY = get_range_from_XY(x, y);

    if( !rangeFromXY ) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: NO RANGE AT ["+x+"@"+y+"]</em>");
        return;
    }
    /*}}}*/
    /* 1/3 CLEAR CLICKED SELECTION {{{*/
    let slot = get_slot_for_range(rangeFromXY);
    if( slot >= 0) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: CLEAR CLICKED SLOT #"+slot+"</em>");

        clear_slot( slot );

        return;
    }
    /*}}}*/
    /* 2/3 selected word range {{{*/
    let range = s_touchedWord_adjust( rangeFromXY );
    if(!range ) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: NO WORD RANGE</em>");

        return;
    }
    /*}}}*/
    /* 3/3 CLEAR CLICKED SELECTION (adjusted) {{{*/
if(log_this || log_this) log( rangeToString(range) );

    slot = get_slot_for_range(range);
    if( slot >= 0) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: CLEAR ADJUSTED SLOT #"+slot+"</em>");
        clear_slot( slot );
        return;
    }
    /*}}}*/
    /* Select new range {{{*/

  /*let touched_text =  get_first_word( range.toString(), caller);*/
    let touched_text =                  range.toString();
if(log_this) log("touched_text=["+touched_text+"]");

    if( touched_text )
    {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: FILTER=["+touched_text+"]</em>");
        set_tools_filter( touched_text );

        t_seeker_PU_hide();
        t_seeker_PD_hide();

        check_TreeWalker("body", touched_text);
    }
    /*}}}*/
};
/*}}}*/
/*_ s_touchedWord_adjust {{{ */
let s_touchedWord_adjust = function(range)
{
    /* 1/3 - EXPANDED TO EMBEDDING-CONTAINERS {{{*/
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_adjust";

    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let text = strip_CR_LF(node.textContent);
    if((text.length > 0) && (words_options == WORDS_HEAD_TAIL)
        && s_touchedWord_adjust_1_in_embedding_container(range)
    ) {
if(log_this) log("...EXPANDED TO EMBEDDING-CONTAINERS %c["+ strip_CR_LF(range.toString()) +"]", lb6);
        return range;
    }
    /*}}}*/
    /* 2/3 - EXPANDED TO SELECTION-RANGE {{{*/
    if(s_touchedWord_adjust_2_in_selection(range))
    {
        if(words_options == WORDS_EXACT)
        {
/*
            if(log_this) log("%c *** WORDS_EXACT OPTION SELECTED ... CANNOT EXPANDED TO SELECTION-RANGE *** ", lbF+lb3);
            s_selection_add_cannot_expand();
            return null;
*/
            t_override_USER_OPTION("words_options", WORDS_SEGMENT);
        }
if(log_this) log("...EXPANDED TO SELECTION-RANGE %c["+strip_CR_LF(range.toString())+"]", lb5);
        return range;
    }
     /*}}}*/
    /* 2/3 - GOT WORD FROM SYNTAXIC LOOKUP {{{*/
    let word_range = s_touchedWord_adjust_3_word_syntaxic_lookup(range);
    if( word_range )
    {
if(log_this) log("...GOT WORD FROM SYNTAXIC LOOKUP %c["+strip_CR_LF(word_range.toString())+"]", lb5);
        return word_range;
    }
    /*}}}*/
if(log_this) log("... GOT NO WORD FROM SYNTAXIC LOOKUP %c["+strip_CR_LF(range.toString())+"]", lb5);
    return null;
};
/* }}}*/
/*_ s_touchedWord_adjust_1_in_embedding_container {{{*/
let s_touchedWord_adjust_1_in_embedding_container = function(range)
{
    /* RETURN FALSE .. NO EMBEDING CONTAINERS */
    /* {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_adjust_1_in_embedding_container";

    let node        = range.startContainer ? range.startContainer : range.offsetNode;
    let node_parent = node.parentNode;
    let node_before = node.previousSibling;
    let node_after  = node.nextSibling;

    let rejected_by = "";
    if     (  !node_parent                                               ) rejected_by = " !node_parent";
    else if( !(node_parent.tagName            == "EM")                   ) rejected_by = "!(node_parent.tagName == 'EM')";
    else if(   node_parent.textContent.length > S_TOUCHED_WORD_LENGTH_MAX) rejected_by = "node_parent.textContent.length > "+S_TOUCHED_WORD_LENGTH_MAX+")";
/*
    else if((!node_before && !node_after)  ) rejected_by = "(!node_before && !node_after)";
*/

    if(rejected_by)
    {
if(log_this) log(caller+": %c "+ rejected_by, lb6);
        return false;
    }
    /*}}}*/

    /* RETURN TRUE: RANGE WITHING EMBEDDING_CONTAINER */
    /*{{{*/
    if(      (node_parent.tagName ==     "EM")
          || (node_parent.tagName ==   "SPAN")
        /*|| (node_before.tagName ==      "A")*/
        /*|| (node_before.tagName ==      "B")*/
        /*|| (node_before.tagName == "STRONG")*/
    ) {
    let text = strip_CR_LF(node.textContent);
    let    s = range.startOffset   ;
    let    e = range. endOffset    ;
if(log_this) {
    log(caller+": s=["+s+"] e=["+e+"] "+ node_toString(node));
    log("...%c node_parent=["+get_n_lbl(node_parent)+"]", lb7); if(node_parent) console.dir(node_parent);
    log("...%c node_before=["+get_n_lbl(node_before)+"]", lb3); if(node_before) console.dir(node_before);
    log("...%c text.......=["+text+"]"                         , lb4);
    log("...%c node_after.=["+get_n_lbl(node_after  )+"]", lb5); if(node_after ) console.dir(node_after);
    log("___length=["+node.data.length+"]");
    log("___[123456789_1234567890]");
    log("___["+node.data+"]");
}
/*{{{
}}}*/

        range.setStart(node, 0);
        range.setEnd  (node, text.length);

        /* TRIM LEADING spaces {{{*/
        while(range.toString().startsWith(" ") || range.toString().startsWith("\t")) { range.setStart(node, range.startOffset+1); range.setEnd  (node, range.  endOffset+1); }
        while(range.toString().  endsWith(" ") || range.toString().  endsWith("\t")) {                                            range.setEnd  (node, range.  endOffset-1); }
        /*}}}*/

        /* TRIM SURROUNDING BRACKETS {{{*/
        if((text[0] == "[") && (text[text.length-1] == "]"))
        {
if(log_this) log("...TRIM SURROUNDING BRACKETS %c["+ strip_CR_LF(range.toString()) +"]", lb6);
            range.setStart(node, 1);
            range.setEnd  (node, text.length-1);
        }
        /*}}}*/

if(log_this) {
    log("...........................range=%c["+strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
/*{{{
}}}*/
    }
    return true;
    /*}}}*/

};
/*}}}*/
/*_ s_touchedWord_adjust_2_in_selection {{{*/
let s_touchedWord_adjust_2_in_selection = function(range)
{
    /* RETURN FALSE .. NO CURRENT SELECTION OR NO RANGE */
    /*{{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_adjust_2_in_selection";

    let rejected_by = "";
    if((typeof onDown_SELECTION) == "undefined"                         ) rejected_by = "onDown_SELECTION...............: NOT DEFINED";
    else if(  !onDown_SELECTION                                         ) rejected_by = "onDown_SELECTION...............: NONE";
    else if(  !onDown_SELECTION.anchorNode                              ) rejected_by = "onDown_SELECTION.anchorNode....: NONE";
    else if(  !onDown_SELECTION.focusNode                               ) rejected_by = "onDown_SELECTION.focusNode.....: NONE";
    else if(   onDown_SELECTION.anchorNode != onDown_SELECTION.focusNode) rejected_by = "onDown_SELECTION...............: MULTI-NODE-SELECTION";
    else if(   onDown_SELECTION.isCollapsed                             ) rejected_by = "onDown_SELECTION...............: isCollapsed";
    else if(  !range                                                    ) rejected_by = "range........................... NO range";
    else if(  !range.startContainer                                     ) rejected_by = "range.startContainer...........: NO startContainer";
    else if( !(onDown_SELECTION.containsNode(range.startContainer,true))) rejected_by = "onDown_SELECTION.containsNode(): OUT OF SELECTION";

    if(rejected_by)
    {
if(log_this) log(caller+": %c "+ rejected_by, lb5);
        return false;
    }
    /*}}}*/

    /* TRUE .. [focusNode] CONTAINS [startContainer] */
    /*{{{*/
/*{{{
if(log_this) {
    log("...focusNode.....: %c["+ strip_CR_LF(onDown_SELECTION     .focusNode.textContent) +"]", lb4);
    log("...startContainer: %c["+ strip_CR_LF(           range.startContainer.textContent) +"]", lb5);
}
}}}*/
/* comparePoint {{{*/
/*
if(log_this) log("...range.comparePoint( onDown_SELECTION.focusNode     ,0)=["+ range.comparePoint( onDown_SELECTION.focusNode     ,0) +"]");
if(log_this) log("...range.comparePoint(            range.startContainer,0)=["+ range.comparePoint(            range.startContainer,0) +"]");
*/
/*}}}*/
    /* EXPAND TO SELECTION {{{*/
    let node = range.startContainer;
/*{{{
if(log_this) {
    log(caller+": EXPAND TO SELECTION:");
    log("...onDown_SELECTION.anchorOffset=%c["+ onDown_SELECTION.anchorOffset   +"]", lb4);
    log("...onDown_SELECTION.focusOffset.=%c["+ onDown_SELECTION.focusOffset    +"]", lb5);
    log("............................node=%c["+ strip_CR_LF(  node.textContent) +"]", lb6);
    log("...........................range=%c["+ strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
}}}*/
    if(onDown_SELECTION.anchorOffset < onDown_SELECTION.focusOffset)
    {
        range.setStart(node, onDown_SELECTION.anchorOffset);
        range.setEnd  (node, onDown_SELECTION.focusOffset );
    } else {
        range.setStart(node, onDown_SELECTION.focusOffset );
        range.setEnd  (node, onDown_SELECTION.anchorOffset);
    }

    /* ADJUST TO WORD START-END {{{*/
    if(words_options != WORDS_SEGMENT)
    {
if(log_this) log(caller+": ADJUSTING TO WORDS BOUNDARIES .. %c(words_options "+words_options+")", lbF+lb6);

        let t = node.textContent ;
if(log_this) log(".......t=%c["+ strip_CR_LF(escape_CR_LF(t)) +"]", lb3);
if(log_this) log("...range=%c["+ range.toString()             +"]", lb3);

        let s = range.startOffset+1;
        let e = range.endOffset;
        let l = t.length;

        while((s <= l) && !isAlNum( t.charAt(s-1) )         ) s += 1; /* skip leading blanks */
        while((s >= 1) &&  isAlNum( t.charAt(s-1) )         ) s -= 1; /* fore to first-word  left-boundary */
        if(               !isAlNum( t.charAt(s-1) )         ) s += 1; /* back to first-word first-char */

        while((e >= s) && !isAlNum( t.charAt(e-1) )         ) e -= 1; /* skip trailing blanks */
        while(             isAlNum( t.charAt(e) ) && (e < l)) e += 1; /* fore to last-word last-char */

        s = Math.min(s,l);
if(log_this) log("...l=["+l+"] .. s=["+s+"]=[%c"+ t.charAt(s-1) +"%c] .. e=["+e+"]=[%c"+ t.charAt(e-1) +"%c]", lb1+lbF,lbA , lb2+lbF,lbA);

        range.setStart(node, s-1);
        range.setEnd  (node, e  );

if(log_this) log("...range=%c["+ range.toString() +"]", lb3);
    }
    /*}}}*/
/*{{{
if(log_this) {
    log("...........................range=%c["+strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
}}}*/
    /*}}}*/
    return true;
    /*}}}*/

};
/*}}}*/
/*_ s_touchedWord_adjust_3_word_syntaxic_lookup {{{*/
let s_touchedWord_adjust_3_word_syntaxic_lookup = function(range)
{
    /* WORD SEARCH LOOP {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_word_syntaxic_lookup";

    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let    s = range.startOffset   ;
    let    e = range. endOffset    ;
    let  tse = {s:0, e:0, t:""};

    for(let loop_num = 0; node != null; ++loop_num)
    {
        /* TERMINATE SEARCH WHEN LOG IS FULL {{{*/
        if(log_is_full) {
            log();
            break;
        }
        /*}}}*/
        /* LOOK FOR CLOSEST TEXT NODE .. (current or previous) {{{*/
        /* SEARCH PREVIOUS TEXT NODE */
        if(    (node.nodeType != Node.TEXT_NODE) /* .. (not a text_node) */
            || (loop_num > 0)                    /* .. (word not found ) */
        ) {
            node = range_setStart_at_end_of_previous_text_node( range );
            if(node == null)
            {
if(log_this) log("...got nothing from range_setStart_at_end_of_previous_text_node");
                break;
            }

if(log_this) {
    if(range.startContainer) log("___.........range.startContainer.=["+  range.startContainer.textContent +"]");
    if(range.offsetNode    ) log("___.........range.....offsetNode.=["+  range.offsetNode                 +"]");
    log("___.node.........................=["+  node.textContent                 +"]");
    if(range.startContainer) log("___(node == range.startContainer)=["+ (node == range.startContainer)    +"]");
    if(range.offsetNode    ) log("___(node == range.....offsetNode)=["+ (node == range.offsetNode    )    +"]");
}
/*{{{
}}}*/

            s = range.startOffset   ;
            e = range. endOffset    ;
        }
        /* }}}*/
        /* RANGE start boundary NODE text {{{*/
        let text =  node.textContent;
        let l    =  node.textContent.length;

        /*}}}*/
        /* WORD START-END {{{*/
        tse.t = text;
        tse.s = s;
        tse.e = e;
        get_word_start_end( tse );
        s = tse.s;
        e = tse.e;
if(log_this) {
    log("...get_word_start_end: s=["+s+"]=["+strip_CR_LF(escape_CR_LF(text.charAt(s-1)))+"] e=["+e+"]=["+text.charAt(e-1)+"]");
    log("<em>"+ mPadStart(""+ loop_num,3," ")
    + " s=["+s+"]=["+ text.charAt(s-1)            +"]"
    + " e=["+e+"]=["+ text.charAt(e-1)            +"]"
    + " l=["+l+"]=["+ trim_node_textContent(node) +"]</em>");
}
        /*}}}*/
        /* WORD NOT FOUND .. CONTINUE {{{*/
        if(e <= s) {
if(log_this) log("%c WORD NOT FOUND", lb3);

        }
        /*}}}*/
        /* WORD FOUND .. BREAK {{{*/
        else {
if(log_this) log("%c WORD FOUND: <em>"+text.substring(s-1, e)+"</em>", lb4);

            break;
        }
        /*}}}*/
    }
    /*}}}*/
    /* RETURN FALSE: WORD NOT FOUND {{{*/
    if( !node ) {

if(log_this) log("%c FOUND NO TEXT NODE", lb2);
        return null;
    }
    /*}}}*/
    /* RETURN TRUE: WORD AS A TEXT RANGE {{{*/
    range.setStart(node, s);
    range.setEnd  (node, e);
    let word = range.toString();

if(log_this) log("SELECTED WORD s=["+s+"] e=["+e+"] l=["+word.length+"] word: <em>"+word+"</em> FROM: <em>"+ truncate(trim_node_textContent(node)) +"</em>");
    return range;
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* SELECT (NOT USED) {{{*/
/*_ setTouchPoint ...CLEAR [rangeFrom] ..CLEAR [rangeTo  ] {{{ */
let setTouchPoint = function(x, y)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setTouchPoint"; if(log_this) log(caller);

    try {
        mStartRange = null;
        mEndRange   = null;

        mTouchPoint = {"x": x, "y": y};
        if(log_this) log(caller+" OK: mTouchPoint={"+mTouchPoint.x+","+mTouchPoint.y+"}");
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ setStartXY ......  NEW [rangeFrom] CURRENT [rangeTo  ] {{{ */
let setStartXY = function(x, y)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setStartXY"; if(log_this) log(caller);

    try {
        if(log_this) log(caller+"("+x+","+y+"):");

        let rangeFrom = get_range_from_XY(x, y); /* NEW     [rangeFrom]*/
        let rangeTo   = mEndRange              ; /* CURRENT [rangeTo]*/

        if(rangeFrom && rangeTo)
            setRangeFromTo(rangeFrom, rangeTo);
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ setEndXY   ......  NEW [rangeTo  ] CURRENT [rangeFrom] {{{ */
let setEndXY = function(x, y)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setEndXY";

    try {
        if(log_this) log(caller+"("+x+","+y+")");

        let rangeFrom = mStartRange            ; /* CURRENT [rangeFrom]*/
        let rangeTo   = get_range_from_XY(x, y); /* NEW     [rangeTo]*/

        if(rangeFrom && rangeTo)
            setRangeFromTo(rangeFrom, rangeTo);
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ setRangeFromTo {{{ */
let setRangeFromTo = function(rangeFrom, rangeTo)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setRangeFromTo";
    try {
        /* SET [rangeFrom] BEFORE [rangeTo  ] {{{*/
        if(rangeFrom) mStartRange = rangeFrom;
        if(rangeTo  ) mEndRange   = rangeTo;
        let reversed = false;
        if(mStartRange && mEndRange)
        {
            reversed = mStartRange.compareBoundaryPoints(Range.START_TO_END, mEndRange) > 0;
            if( reversed ) {
                let r = mStartRange; mStartRange = mEndRange  ; mEndRange   = r;
            }
        }
        /*}}}*/
        /* BUILD SELECTION RANGE {{{*/
        if(mStartRange && mEndRange)
        {
            let range = document.createRange();
            range.setStart(mStartRange.startContainer, mStartRange.startOffset);
            range.setEnd  (mEndRange  .  endContainer, mEndRange  .  endOffset);
if(log_this) log(caller+":"+ rangeToString(range, "selectionRange"));

            window.getSelection().removeAllRanges();
            window.getSelection().addRange( range );
            document.execCommand("copy"); /* to clipboard */

            set_tools_filter( get_first_word(range.toString(), caller) );

        }
        /* LOG ONLY*/
        else if(mStartRange && logging_TRANSCRIPTS) log(caller+LF+"...mStartRange:"+ rangeToString(mStartRange, "mStartRange"));
        else if(mEndRange   && logging_TRANSCRIPTS) log(caller+LF+"...mEndRange:"+   rangeToString(mEndRange  , "mEndRange"  ));

        /*}}}*/
        window.getSelection().removeAllRanges();
    }
    catch(ex) { log(caller+": "+ex, "error"); }

    let tools_filter = t_get_tool_id_value("tools_filter");
    log_set_TR_RANGE("<em class='big'>SELECT RANGE FROM TO <em class='cc0 small'>tools_filter=["+tools_filter+"]</em></em>");
};
/*}}}*/
/*}}}*/
/* WORD {{{*/
/*_ get_word_at_offset {{{*/
let get_word_at_offset = function(text, offset)
{
    let tse = { s:offset, e:offset, t:text };

    get_word_start_end(tse);

    return text.substring(tse.s, tse.e);
};
/*}}}*/
/*_ get_word_start_end {{{*/
let get_word_start_end = function(tse)
{
    /* ..........................10........20........30  */
    /* ................. 123456789_123456789_123456789_  */
    let t = tse.t;
    let s = tse.s;
    let e = tse.e;
    let l = tse.t.length;

    if(s>l) s = l;
    if(s<1) s = 1;

    while((s >= 1) && !isAlNum( t.charAt(s-1) )) s -= 1;
    while((s <= l) && !isAlNum( t.charAt(s-1) )) s += 1;
    while((s >= 1) &&  isAlNum( t.charAt(s-1) )) s -= 1;

    e = s;
    while( isAlNum( t.charAt(e) ) && (e < l)) e += 1;

    tse.s = s;
    tse.e = e;

};
/*}}}*/
/*_ clearSelection {{{ */
let clearSelection = function()
{
    let caller = "clearSelection"; if(LOG_MAP.S1_RANGE) log(caller);
    try {
        window.getSelection().removeAllRanges(); /* REMOVE any [current window selection]*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ range_setStart_at_end_of_previous_text_node {{{ */
let range_setStart_at_end_of_previous_text_node = function(range)
{
    /* GET PREVIOUS TEXT NODE {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "range_setStart_at_end_of_previous_text_node"; if(log_this) log(caller);

    let node = getPreviousTextNode(range.startContainer ? range.startContainer : range.offsetNode);
    /*}}}*/
    /* AND COLLAPSE RANGE AT THE END {{{*/
    if(node && node.nodeValue)
    {
        let s = node.nodeValue.length;
        let e = s;
        range.setStart(node, s);
        range.setEnd  (node, e);
    }
    /*}}}*/
if(log_this) log(caller+": %c PREVIOUS-TEXT-NODE=["+ node_toString(node) +"]", lbF+lb6);
    return node;
};
/*}}}*/
/*_ getPreviousTextNode {{{ */
let getPreviousTextNode = function(node)
{
    /* CALLER {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "getPreviousTextNode"; if(log_this) log(caller);

if(log_this) log("...node="+ node_toString(node));
    /*}}}*/

    let previousNode = null;
    try {

        /* TreeWalker root .. (look for a parent having more than this single text-typed child) {{{*/
        let   root = null;
        for(  root  = node.parentNode
            ;(root != null) && (root.children.length < 2)
            ; root  = root.parentNode
        ) {
if(log_this) log("...root="+ node_toString( root ));
        }
        if(root == null)
        {
if(log_this) log("getPreviousTextNode: ...return null");
            return null;
        }

if(log_this) log("SEARCHING ROOT: "+ node_toString(root));
        /*}}}*/

        /* TreeWalker {{{*/
        let mTreeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, mNodeFilter);
        mNodeRegexP     = null;

        if(log_this) {
            let root = mTreeWalker.root;
            log("...mTreeWalker.root: "+                          node_toString( mTreeWalker.root ) );
            log("....root.parentNode: "+ (!root.parentNode ? "" : node_toString( root.parentNode  )));
            log("....root.firstChild: "+ (!root.firstChild ? "" : node_toString( root.firstChild  )));
            log("....root. lastChild: "+ (!root. lastChild ? "" : node_toString( root. lastChild  )));
        }
        /*}}}*/

        /* SEEK TO REFERENCE NODE {{{*/
        while(mTreeWalker.nextNode())
        {
            if(node == mTreeWalker.currentNode)
            {
                if(log_this) {
                    log("REACHED REFERENCE NODE");
                    log("|..mTreeWalker.currentNode.............:"+ ( mTreeWalker.currentNode                                                ));
                    log("|..mTreeWalker.currentNode.nodeValue...:"+ (!mTreeWalker.currentNode ? "" : mTreeWalker.currentNode.nodeValue       ));
                    log("|==mTreeWalker.currentNode.textContent=["+ (!mTreeWalker.currentNode ? "" : mTreeWalker.currentNode.textContent +"]"));
                }
                break;
            }
        }
        /*}}}*/

        /* RETURN PREVIOUS NODE {{{*/
        do {
            previousNode = mTreeWalker.previousNode();
            if(log_this) {
                log("mTreeWalker.previousNode():");
                log("|..previousNode.............:"+ ( previousNode                                     ));
                log("|..previousNode.nodeValue...:"+ (!previousNode ? "" : previousNode.nodeValue       ));
                log("|==previousNode.textContent=["+ (!previousNode ? "" : previousNode.textContent +"]"));
            }
        }
        while( ( previousNode != null)
            && (!previousNode.nodeValue || (trim_empty_lines(previousNode.textContent).length < 1))
        );

        /*}}}*/

    }
    catch(ex) { log(caller+": "+ex, "warn"); }

    /* RETURN NODE {{{*/
    if(log_this) {
        if(previousNode) log("getPreviousTextNode: ...return "+node_toString(previousNode));
        else             log("getPreviousTextNode: ...return null");
    }
    return previousNode;
    /*}}}*/
};
/*}}}*/
/*_ pattern_toHTML {{{*/
let pattern_toHTML = function(pattern, options) {

    let words_class
        = (options == WORDS_EXACT  ) ? WORDS_EXACT
        : (options == WORDS_SEGMENT) ? WORDS_SEGMENT
        :                              WORDS_HEAD_TAIL
    ;

    switch(options)
    {
/*
        default:
        case WORDS_EXACT    : return "<em title='EXACT WORD'   class='cc7'>"+       "("+ pattern +")"     +"</em>";
        case WORDS_SEGMENT  : return "<em title='WORD SEGMENT' class='cc7'>"+       "["+ pattern +"]"     +"</em>";
        case WORDS_HEAD_TAIL: return "<em title='HEAD & TAIL'  class='cc7'>"+ SYMBOL_R + pattern +SYMBOL_L+"</em>";
*/

        case WORDS_EXACT    : return "<em title='EXACT WORD'   class='cc1 "+words_class+"'>"+ pattern +"</em>";
        case WORDS_SEGMENT  : return "<em title='WORD SEGMENT' class='cc1 "+words_class+"'>"+ pattern +"</em>";
        default:
        case WORDS_HEAD_TAIL: return "<em title='HEAD & TAIL'  class='cc1 "+words_class+"'>"+ pattern +"</em>";

    }
};
/*}}}*/
/*_ get_words_options_symbol {{{*/
let WORDS_EXACT_SYMBOL       = "<em class='cc3'>&equiv;</em>";
let WORDS_SEGMENT_SYMBOL     = "<em class='cc4'>&sub;</em>"  ;
let WORDS_HEAD_TAIL_SYMBOL   = "<em class='cc5'>&isin;</em>" ;
let WORDS_OPCYCLE_SYMBOL     = "<em class='cc9'>\u27F3</em>" ;

let get_words_options_symbol = function(option)
{
    switch( option) {
        case WORDS_EXACT     : return WORDS_EXACT_SYMBOL     ;
        case WORDS_SEGMENT   : return WORDS_SEGMENT_SYMBOL   ;
        case WORDS_HEAD_TAIL : return WORDS_HEAD_TAIL_SYMBOL ;
        default              : return "*** WRONG words_options ***";
    }
};
/*}}}*/
/*}}}*/

/** HIGHLIGHT */
/*{{{*/
/*_ scroll_to_slot_num {{{*/
let scroll_to_slot_num = function(slot, num, onSeek_XY)
{
    /*{{{*/
let caller = "scroll_to_slot_num(slot=["+slot+"] num=["+num+"], ["+onSeek_XY.x+" "+onSeek_XY.y+"])";
let log_this = LOG_MAP.T4_SLOT;
if( log_this ) log("%c"+caller, lbH+lf4);

    /*}}}*/
    /* [slot] {{{*/
    if(slot <= 0              ) return false;
    if(slot >  SELECT_SLOT_MAX) return false;

    if(!ccs[slot])              return false;

    let count = ccs[slot].nodes.length;
    if( count < 1)              return false;

    if(  num <=    0)           return false;
    if(  num > count)           return false;

if(log_this) log(".count=["+ count +"]");

    let thumb_p = parseFloat( ccs[slot].thumbs[num-1] );
    /*}}}*/
    /* LOG geometry slot num count {{{*/
    if(LOG_MAP.T5_LAYOUT)
    {
        let page_height = get_page_height();
        let body        = document.body;
        let html        = document.documentElement;
        let page_geometry = ""
            +"<table id='table_params'>"
            +" <tr class='slot'><TH class='cc8'>select</TH> <th>        slot</th><td class='cc"+slot+"'>"+ slot              +"</td> <th>         num</th><td class='cc"+(num % 10)+"'>"+ num               +"</td> <th>       count</th><td class='cc"+(count % 10)+"'>"+ count             +"</td></tr>"
            +" <tr             ><TH class='cc8'>HTML  </TH> <th>scrollHeight</th><td class='cc8'>"       + html.scrollHeight +"</td> <th>offsetHeight</th><td class='cc1'>"             + html.offsetHeight +"</td> <th>clientHeight</th><td class='cc2'>"               + html.clientHeight +"</td></tr>"
            +" <tr             ><TH class='cc8'>BODY  </TH> <th>scrollHeight</th><td class='cc8'>"       + body.scrollHeight +"</td> <th>offsetHeight</th><td class='cc3'>"             + body.offsetHeight +"</td> <th>clientHeight</th><td class='cc4'>"               + body.clientHeight +"</td></tr>"
            +" <tr             ><TH class='cc8'>window</TH> <th> page_height</th><td class='cc8'>"       + page_height       +"</td> <th>     thumb_p</th><td class='cc5'>"             + thumb_p           +"</td> <th>     scrollY</th><td class='cc6'>"               + scrollY           +"</td></tr>"
            +"</table"
        ;

        let info = ""
            +"<div class='info'>"
            +"<em class='cc8'>Scroll state</em><br>"
            +" <u>clientHeight</u> VIEWABLE +PADDING                    -border -scrollbar -margin<br>"
            +" <u>offsetHeight</u> VIEWABLE +PADDING +BORDER +SCROLLBAR                    -margin<br>"
            +" <u>scrollHeight</u> OVERFLOW +PADDING                    -border -scrollbar -margin<br>"
            +"</div>"
        ;

        log_set_TR_LAYOUT(page_geometry +"<br>"+ info);
    }
    else {
        if(log_this) {
            let   count = ccs[slot].nodes.length;
            let    body = document.body;
            let    html = document.documentElement;

            log("select         slot=["+ slot              +"]          num=["+ num               +"]        count=["+ count             +"]");
            log("HTML   scrollHeight=["+ html.scrollHeight +"] offsetHeight=["+ html.offsetHeight +"] clientHeight=["+ html.clientHeight +"]");
            log("BODY   scrollHeight=["+ body.scrollHeight +"] offsetHeight=["+ body.offsetHeight +"] clientHeight=["+ body.clientHeight +"]");
        }
    }
    /*}}}*/
    /* possibly hidden  .. f(parent_with_overflow) {{{*/
    let el                   = ccs[slot].nodes[num-1];
    let parent_with_overflow = null;/*FIXME: get_parent_with_overflow( el );*/
    if( parent_with_overflow )
    {
if(log_this) log("..get_parent_with_overflow(el): %c "+ get_n_lbl(parent_with_overflow), lbb+lbH+lf7);
    }
    else {
        let xy = t_get_el_into_view_scrollXY( el );
        if( xy )
        {
            let dx = (xy.x - window.scrollX);
            let dy = (xy.y - window.scrollY);
/*
logXXX("xy=["+dx+" "+dy+"]")
*/
            if(dx || dy)
                t_window_scrollTo(xy.x, xy.y, caller);
        }
/*
        else
            scroll_thumb_p_to_onSeek_XY(thumb_p, slot, onSeek_XY);
*/
    }
    /*}}}*/

    highlight_thumb_p_slot_num(slot, num, thumb_p);

    if((thumb_p <= 0) || parent_with_overflow) return false;
    else                                       return  true;
};
/*}}}*/
/*_ get_parent_with_overflow {{{ */
let get_parent_with_overflow = function(node)
{
    for(let  parent  = node
        ;    parent && parent.style
        ;    parent  = parent.parentNode
    ) {
        let computedStyle = window.getComputedStyle(parent);
        if( computedStyle.overflow && (computedStyle.overflow != "visible"))
        {
/*
*/
logXXX(get_n_lbl(parent)+" %c overflow ["+parent.style.overflow+"] %c COMPUTED ["+computedStyle.overflow+"]"
    ,                      lbL+lf6                                ,lbR+lf7);
            return parent;
        }
    }
    return null;
};
/*}}}*/
/*_ scroll_thumb_p_to_onSeek_XY {{{*/
let scroll_thumb_p_to_onSeek_XY = function(thumb_p, slot, onSeek_XY)
{
let   caller = "scroll_thumb_p_to_onSeek_XY(thumb_p=["+thumb_p+"], slot=["+slot+"], onSeek_XY["+onSeek_XY.x+" "+onSeek_XY.y+"])";
let log_this = LOG_MAP.T4_SLOT;
if( log_this ) log(caller);

    let page_height
        = get_page_height() * (body_zoom_percent / 100.0);

    let scrollX
        = window.scrollX
        - onSeek_XY.x;

    let scrollY
        = page_height * (thumb_p / 100.0)
        - onSeek_XY.y;

    try {
        t_window_scrollTo(scrollX, scrollY, caller);
if(log_this) log("%c PAGE "+page_height+" %c thumb_p "+thumb_p+" %c scrollY "+Math.floor(scrollY)+" "
    ,             lbL+lf9                ,lbC+lf6                ,lbR+lf7);
    }
    catch(ex) {
        console.log(caller+": "+ex); 
    }
};
/*
 TODO: sync last slot .. last num to last thumb_p
 TODO: or check window scrollY at next slot-selection-time
 TODO: option to choose between showing thumb_p-values -OR- dot-list
 TODO: swipe over dot-list to scroll forward or backward
*/
/*}}}*/

/*_ highlight_thumb_p_slot_num {{{*/
let last_highlight_thumb_p = 0;
let last_highlight_slot    =-1;
let last_highlight_num     = 0;
let highlight_thumb_p_slot_num = function(slot, num, thumb_p)
{
    let caller = "highlight_thumb_p_slot_num(slot=["+slot+"], num=["+num+"], thumb_p=["+thumb_p+"])";
if(LOG_MAP.T4_SLOT) log(caller);

    highlight_data_thumb_p(thumb_p, slot);

    if(ccs[slot]) set_tools_filter(ccs[slot].pattern);

    last_highlight_slot    = slot;
/*
logXXX("highlight_thumb_p_slot_num: last_highlight_slot=["+last_highlight_slot+"]")
*/
    last_highlight_num     = num;
    last_highlight_thumb_p = thumb_p;
};
/*}}}*/
/*_ highlight_data_thumb_p {{{*/
let highlight_data_thumb_p = function(thumb_p, slot)
{
    /* text .. f(thumb_p) {{{*/
    let caller = "highlight_data_thumb_p(thumb_p=["+thumb_p+"] slot=["+ slot+"])";
    let log_this = LOG_MAP.T4_SLOT;
if(log_this) log(caller);
/*
console.warn(caller);
*/
    let el;
    let text                     = String(       thumb_p );
    if(               thumb_p < 10) text  = " "+ text     ;
    if     (text.indexOf(".") <  0) text +=          ".00";
    else if(text.length       <  5) text +=            "0";
if(log_this) log(" text=["+text+"]");

    /*}}}*/
    /* unhighlight all [data-thumb_p] {{{*/
    let doc = (shadow_root) ? shadow_root : document;
    let data_selector = "[data-thumb_p]";
    let elements = doc.querySelectorAll( data_selector );
if(log_this) log(" "+ elements.length+" "+data_selector);
    for(let i=0; i < elements.length; ++i)
        del_el_class(elements[i], "current_slot_num");

    /*}}}*/
    /* unhighlight [selbag div] [ellipsis em] {{{*/
    for(let s=0; s < SELECT_SLOT_MAX; ++s)
    {
        let selector;
        selector = ".select"  +s     ; if(el = get_tool(selector)) { if(s == slot) add_el_class(el,"current_slot"); else del_el_class(el,"current_slot"); }
        selector = "#thumb_p_"+s+"_0"; if(el = get_tool(selector)) { if(!(el.innerHTML.includes(SYMBOL_E))) el.innerText = SYMBOL_E; }
        selector = "#thumb_s_"+s+"_0"; if(el = get_tool(selector)) { if(!(el.innerHTML.includes(SYMBOL_E))) el.innerText = SYMBOL_E; }
    }

    /*}}}*/
    /*   highlight   [data-thumb_p=   text   ] .. (both thumb_p and thumb_s) {{{*/
    data_selector = "[data-thumb_p='"+text+"']";
    elements = doc.querySelectorAll( data_selector );
if(log_this) log(" "+ elements.length+" "+data_selector);
    for(let i=0; i < elements.length; ++i) {
        add_el_class(elements[i], "current_slot_num");
    }

    /*}}}*/
    /* highlight ellipsis (fall back) {{{*/
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if(!ccs[slot]) continue;

        /* ? has thumb_p */
        for(let num = 1; num <= ccs[slot].thumbs.length; ++num)
        {
            let p  = parseFloat(ccs[slot].thumbs[num-1]);
            if( p == thumb_p)
            {
                /* ? [slot_num_id] */
                let slot_num_id = "#thumb_p_"+ slot +"_"+ num;
                if( !get_tool(slot_num_id) )
                {
                    /* SEL_BAG */
                    let id = "#thumb_p_"+slot+"_0";
                    if( el = get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        add_el_class(el, "current_slot_num");
                    }

                    /* SEEKER */
                    id = "#thumb_s_"+slot+"_0";
                    if( el = get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        add_el_class(el, "current_slot_num");
                    }
                }
                else {
if(log_this) log(".DEDICATED SLOT TOOL HIGHLIGHTED: slot_num_id=["+slot_num_id+"]");
                }
                break;
            }
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ s_clear_slot_all {{{ */
let s_clear_slot_all = function()
{
    let caller = "s_clear_slot_all";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.T4_SLOT;

    let cleared_count   = 0;
    let cleared_pat_csv = "";

    for(let slot = ccs.length-1; slot > 0; --slot)
    {
        if(                   !ccs[slot]) continue;
        let       pattern    = ccs[slot].pattern;
        let clear_slot_count = clear_slot( slot );
        cleared_count       += clear_slot_count;

        if(clear_slot_count)
            cleared_pat_csv = csv_add(cleared_pat_csv, pattern);

    }

if(log_this) log(caller+": "+cleared_count+" words highlighting cleared");
    return cleared_pat_csv;
};
/*}}}*/

/*_ s_selection_execCommand {{{ */
let s_selection_execCommand = function(cmd_csv)
{
    let caller = "s_selection_execCommand("+cmd_csv+")";
if(LOG_MAP.T4_SLOT) log(caller);

    document.designMode = "on";
    try {
        if(cmd_csv.indexOf("undo"         ) >= 0) document.execCommand("undo"                , false, null           );

        if(cmd_csv.indexOf("foreColor"    ) >= 0) document.execCommand("foreColor"           , false, "#FF0000"      );
        if(cmd_csv.indexOf("backColor"    ) >= 0) document.execCommand("backColor"           , false, "#00AADD"      );
        if(cmd_csv.indexOf("hiliteColor"  ) >= 0) document.execCommand("hiliteColor"         , false, "pink"         );

        if(cmd_csv.indexOf("bold"         ) >= 0) document.execCommand("bold"                , false, null           );
        if(cmd_csv.indexOf("fontName"     ) >= 0) document.execCommand("fontName"            , false, "Comic sans ms");
        if(cmd_csv.indexOf("fontSize"     ) >= 0) document.execCommand("fontSize"            , false, "400%"         );

        if(cmd_csv.indexOf("strikeThrough") >= 0) document.execCommand("strikeThrough"       , false, null           );
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    document.designMode = "off";

};
/*}}}*/
/*_ s_selection_add_cannot_expand {{{*/
const CANNOT_EXPAND_TO_SELECTION = "cannot_expand_to_selection";
let s_selection_add_cannot_expand = function()
{
log("s_selection_add_cannot_expand");
    s_selection_execCommand("hiliteColor");
    add_el_class(document.body, CANNOT_EXPAND_TO_SELECTION);
};
/*}}}*/
/*_ s_selection_del_cannot_expand {{{*/
let s_selection_del_cannot_expand = function()
{
log("s_selection_del_cannot_expand");
    del_el_class(document.body, CANNOT_EXPAND_TO_SELECTION);
};
/*}}}*/

/*_ get_slot_num_for_thumb_p {{{*/
let get_slot_num_for_thumb_p = function(slot, thumb_p, backward)
{
    let caller = "get_slot_num_for_thumb_p(slot=["+slot+"], thumb_p=["+thumb_p+"], backward=["+backward+"])";
let log_this = LOG_MAP.T4_SLOT;
if( log_this) log(caller);

    if( !ccs[slot] ) {
if( log_this) log(caller+": SLOT "+ slot +" is empty");
        return 0;
    }
    let num_at_or_past_thumb_p = 0;

    let first = 1;
    let  last = ccs[slot].nodes.length;
    let   num = 0;

    if(!backward) {
        for(num    = first; num <= last; num += 1) {
            let p  = parseFloat( ccs[slot].thumbs[num-1] );
            if( p <= thumb_p) num_at_or_past_thumb_p = num;
            if( p >  thumb_p) break;
        }
    }
    else {
        for(num    = last; num >= first; num -= 1) {
            let p  = parseFloat( ccs[slot].thumbs[num-1] );
            if( p >= thumb_p) num_at_or_past_thumb_p = num;
            if( p <  thumb_p) break;
        }
    }

    if((num < first) || (num > last))
        num_at_or_past_thumb_p = 0;

if( log_this) log(caller+": return "+ num_at_or_past_thumb_p);

    return num_at_or_past_thumb_p;
};
/*}}}*/
/*_ (add del set) id_class {{{*/

let set_id_class_on_off = function(id, className, on_off)
{
    let el = get_tool("#"+id);
    if(!el) return;

    set_el_class_on_off(el, className, on_off);
};

let set_el_class_on_off = function(el, className, on_off)
{
    if(on_off) add_el_class(el, className);
    else       del_el_class(el, className);
};

let set_el_class     = function(el, className) { if(!el || !el.classList) return      ;                                            el.className       = className  ; };
let add_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
let has_el_class     = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };

let add_hi_container = function(container    ) { add_el_class(container, theme_dark ? "container_dark" : "container_light");  };

let set_el_class_removing = function(el, className, remove_array)
{
    for(let i=0; i <              remove_array.length; ++i) {
        if(el.classList.contains( remove_array[i] ))
            el.classList.remove ( remove_array[i] );
    }
    if(!el.classList.contains( className ))
        el.classList.add     ( className );
};
/*}}}*/

/*}}}*/

/** RANGE */
/*{{{*/
/*_ get_range_from_XY {{{ */
let get_range_from_XY = function(x, y)
{
    /*{{{*/
    let caller = "get_range_from_XY(x="+x+" , y="+y+")";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) log("<div class='div_match'>");
    /*}}}*/
    let       range = get_range_from_caret(x,y);
    let not_a_range = (range && !range.setStart); /* !range.setStart (i.e. Firefox) */
    if( not_a_range )
    {
/*{{{*/
if(log_this) {
    console.dir(range);
    log("..!range.setStart .. CREATING RANGE:");
    log("...range.offsetNode....=["+ get_n_txt(range.offsetNode) +"]");
    log("...range.offset........=["+ range.offset     +"]");
}
/*}}}*/
        let new_range = document.createRange();
        new_range.setStart(range.offsetNode, range.offset);
        range = new_range;
    }
/* log {{{*/
if(log_this) {
    if(range) {
        log( rangeToString(range) );
        console_dir(range);
    }
    else {
        log(caller+": ...return null", "warn");
    }
    log("</div>");
}
/*}}}*/
    return range;
};
/*}}}*/
/*_ get_range_from_caret {{{*/
let get_range_from_caret = function(x, y)
{
    /*{{{*/
    let caller = "get_range_from_caret(x="+x+" , y="+y+")";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
    /*}}}*/
    let  range = null;
    try {
        /* caretPositionFromPoint {{{*/
        if((!range || !range.commonAncestorContainer) && document.caretPositionFromPoint)
        {
if(log_this) log( "...document.caretPositionFromPoint=["+ document.caretPositionFromPoint +"]");
            range =  document.caretPositionFromPoint(x,y);

/*{{{*/
/*log("range=["+range+"]");*/
/*log("range.commonAncestorContainer=["+range.commonAncestorContainer+"]");*/
/*log("range.offsetNode.............=["+range.offsetNode             +"]");*/
/*}}}*/

if(!range) log("caretPositionFromPoint failed", "warn");
/*else     console_dir(range);*/
        }
        /* }}}*/
        /* caretRangeFromPoint {{{*/
        if((!range || !range.commonAncestorContainer) && document.caretRangeFromPoint)
        {
/*if(log_this) log( "...document.caretRangeFromPoint...=["+ document.caretRangeFromPoint    +"]");*/
            range =  document.caretRangeFromPoint(x,y);

/*{{{*/
/*log("range=["+range+"]");*/
/*log("range.commonAncestorContainer=["+range.commonAncestorContainer+"]");*/
/*log("range.offsetNode.............=["+range.offsetNode             +"]");*/
/*}}}*/

if(!range || !range.commonAncestorContainer) log(   "caretRangeFromPoint failed", "warn");
/*else console_dir(range);*/
        }
        /* }}}*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }
if(log_this) log_range(range, caller);
    return range;
};
/*}}}*/
/*_ rangeToString {{{ */
let rangeToString = function(range, rangeName="RANGE")
{
    if(!range) return "<div>rangeToString(null range)</div>";

    let caller = "rangeToString";
    try {

        let range_str
            = range.toString();

        let range_attr
            = range.collapsed
            ?  "<span class='cc8'>collapsed at "+ range.startOffset                              +"</span>"
            :  "<span class='cc4'>offset "      + ellipsis(range.startOffset,32) +" .. "+ ellipsis(range.endOffset,32) +"</span> "
        ;

        let ancestor = "";
        if(range.commonAncestorContainer)
            ancestor =                         range.commonAncestorContainer.toString()          + " "
            +                                  get_n_attributes(range.commonAncestorContainer)   + " "
            +  range.commonAncestorContainer.length ? ""
            :                        "length=["+ range.commonAncestorContainer.length            +"] "
        ;

        let container_node = range.startContainer ? range.startContainer : range.offsetNode;

        let container;
        container = "";
        if(container_node)
            container =                   container_node.toString()                              + " "
            +                   " nodeName=["+ container_node.nodeName                           +"] "
            +                     " length=["+ container_node.length                             +"] "
            +                                  get_n_attributes(container_node                 ) +"] "
            + !container_node.previousSibling ? ""
            :             "previousSibling: "+ get_n_attributes(container_node.previousSibling ) + " "
        ;

        let endContainer = "";
        if(range.endContainer)
            endContainer =                     range.  endContainer.toString()                   + " "
            +                   " nodeName=["+ range.  endContainer.nodeName                     +"] "
            +                     " length=["+ range.  endContainer.length                       +"] "
            +                                  get_n_attributes(range. endContainer            ) +"] "
            + !container_node.nextSibling ? ""
            :                 "nextSibling: "+ get_n_attributes(range. endContainer.nextSibling) + " "
        ;

        rangeName = "<span class='cc7'>"+rangeName+"</span>";
        range_str = "<div  class='ng'>"+range_str+"</div>";

        container = "";
        if(range.commonAncestorContainer)
            container = node_toString( range.commonAncestorContainer.parentElement );

        return rangeName
            +  "<div class='div_match'>"
            +  " <div>container: "     + container    +"</div>"
            +  " <ul>"
            +  "  <li>"                + range_str    +"</li>"
            +  "  <li>"                + range_attr   +"</li>"
            +  "  <li>Ancestor: "      + ancestor     +"</li>"
            +  "  <li>Start: "         + container    +"</li>"
            +  "  <li>End: "           + endContainer +"</li>"
            +  " </ul>"
            +  "</div>"
        ;
    }
    catch(ex) { log(caller+"("+rangeName+"): "+ex, "error"); }
};
/*}}}*/
/*_ log_range {{{*/
let log_range = function(range, caller="")
{
    if(!range) return;

    let s =  caller+":"
        +    LF+"............range=["+ range                +"]"
    ;

    if(range.startContainer != range.endContainer)
        s += LF+"...............(range.startContainer != range.endContainer)"
    ;

    if(range.startContainer && (range.startContainer.textContent.length < 80))
        s += LF+"range.startContainer:"
        +    LF+"......textContent=["+ trim_node_textContent(range.startContainer) +"]"
        +    LF+"......startOffset=["+ mPadStart("\u21E7", range.startOffset, ".") +" "+range.startOffset
        +    LF+"........endOffset=["+ mPadStart("\u21E7", range.  endOffset, ".") +" "+range.  endOffset
    ;

    if(range.collapsed)
        s += LF+"........collapsed=["+ range.collapsed      +"]"
    ;

    if((range.endContainer != range.startContainer) && (range.endContainer.textContent.length < 80))
        s += LF+".....endContainer=["+ range. endContainer .textContent +"] ....endOffset.=["+ range.endOffset   +"]"
    ;

    log(s);

    console_dir(range);
};
/*}}}*/
/*}}}*/

/** CHECK */
/*{{{*/
let CHECK_LOG_MAX       =  64;
let TOO_MANY_SELECTIONS = 128;
let WORDS_EXACT         = "words_exact";
let WORDS_SEGMENT       = "words_segment";
let WORDS_HEAD_TAIL     = "words_head_tail";
let WORDS_OPCYCLE       = "words_opcycle";

/*_ get_traversal_node_array {{{*/
let get_traversal_node_array = function(pattern, options, mDomTraversal)
{
    let caller = "get_traversal_node_array(pattern=["+pattern+"], "+options+")";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) log_tags();

    mNodeRegexP = get_mNodeRegexP(pattern, options);
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    if(!mNodeRegexP) return null;

    mNodeRegexP.pattern =         pattern;
if( log_this) ("mNodeRegexP........=["+ mNodeRegexP         +"]");
if( log_this) ("mNodeRegexP.pattern=["+ mNodeRegexP.pattern +"]");

    /* clear any to-be-reselected selection */
    let slot;
    if( slot = get_slot_matching_pattern( pattern ))
        clear_slot( slot );

    let node_array = [];
    let node;
    while(node = mDomTraversal.nextNode())
    {
        if( node_has_some_text(  node) ) {
/*
log("___ node.textContent..................=["+                  node.textContent  +"]");
*/
            if(node_array.length >= TOO_MANY_SELECTIONS)
                break;
            node_array.push(node);
        }
        else {
/*
if(log_this) {
log("XXX !node_has_some_text(node).........=["+ node_toString(node)                +"]");
log("XXX node.nodeValue....................=["+                  node.nodeValue    +"]");
log("XXX node.textContent..................=["+                  node.textContent  +"]");
log("XXX trim_alNum_lines(node.textContent)=["+ trim_alNum_lines(node.textContent) +"]");
}
*/
        }
    }
    return node_array;
};
/*}}}*/
/*_ get_mNodeRegexP {{{*/
let get_mNodeRegexP = function(pattern, options)
{
    let caller = "get_mNodeRegexP <em class='cc5'>"+pattern+"</em> <em class='cc6'>"+options+"</em>";
let log_this = LOG_MAP.S1_RANGE;

    let rx = null;
    switch(options)
    {
        case WORDS_EXACT:
        rx = new RegExp("\\b("+pattern+")\\b", "gi");
        break;

        case WORDS_SEGMENT:
        rx = new RegExp(   "("+pattern+")"   , "gi");
        break;

        case WORDS_HEAD_TAIL:
        let s = pattern;
        if(!pattern.startsWith("\\S" ) ) s = "\\S*"+s       ;
        if(!pattern.endsWith  ("\\S*") ) s =        s+"\\S*";
        if( pattern != s) {
            pattern  = s;
            rx = new RegExp(   "("+pattern+")"   , "gi");
        }
        break;

        default:
if(log_this) log("<em class='cc2'>*** wrong options: ["+ options +"] ***</em>");
    }
if(log_this) log(caller+": ...return <em class='cc7'>"+rx+"</em>");
    return rx;
};
/*}}}*/

/*_ check_Traversal {{{*/
let check_NodeIterator = function(           id, pattern) { return check_Traversal("NodeIterator", id, pattern); };
let check_TreeWalker   = function(           id, pattern) { return check_Traversal("TreeWalker"  , id, pattern); };
let check_Traversal    = function(traversal, id, pattern)
{
    /* pattern {{{*/
    let caller = "<em class='cc3'>check_traversal</em> traversal=<em class='cc3'>"+traversal+"</em> id=<em class='cc4'>"+id+"</em> pattern=<em class='cc6'>"+pattern+"</em>";
let log_this = LOG_MAP.S3_SLOT;
if(log_this) log();
if(log_this) log(caller);

if(log_this) log_add_TR_SELECT(caller);

    if( !pattern ) {
        log(caller+": no pattern to look for", "warn");
        return;
    }

    /*}}}*/
    /* root {{{*/
    let root = pick_node(id, caller);

    let mDomTraversal
        = (traversal == "NodeIterator")
        ?  document.createNodeIterator(root, NodeFilter.SHOW_TEXT, mNodeFilter)
        :  document.createTreeWalker  (root, NodeFilter.SHOW_ALL , mNodeFilter);

if(log_this) log("<em class='cc3'>"+ object_label(mDomTraversal) +"</em> ID: <em class='cc4'>"+id+"</em>");

    /*}}}*/
    /* pattern matching node_array {{{*/

    let options    = words_options;
    let node_array = get_traversal_node_array(pattern, options, mDomTraversal);
/*
    if((node_array.length < 1) && words_opcycle)
    {
        options = (options == WORDS_EXACT  ) ? WORDS_SEGMENT
            :     (options == WORDS_SEGMENT) ? WORDS_HEAD_TAIL
            :                                  WORDS_EXACT
        ;
        node_array  = get_traversal_node_array(pattern, options, mDomTraversal);

        if( node_array.length < 1)
        {
            options = (options == WORDS_EXACT  ) ? WORDS_SEGMENT
                :     (options == WORDS_SEGMENT) ? WORDS_HEAD_TAIL
                :                                  WORDS_EXACT
            ;
            node_array  = get_traversal_node_array(pattern, options, mDomTraversal);
        }
    }
*/
    /*}}}*/
    /* collect matching nodes {{{*/
    if(    (node_array.length >= TOO_MANY_SELECTIONS)
        || (node_array.length == 0                  )
    ) {
        let sel_bag;
        if( sel_bag = get_tool("#sel_bag"))
        {

            let msg = (node_array.length > 0)
                ? "*** TOO MANY: <em class='cc8'>"+pattern+"</em> .. (max "+TOO_MANY_SELECTIONS+") ***"
                : "--- NO MATCH: <em class='cc8'>"+pattern+"</em> ---"
            ;
            let el;
            if( el = get_tool(  "#sel_bag_warn_div")) el.innerHTML= msg;
            else     sel_bag.innerHTML = "<div id='sel_bag_warn_div' class='cc2'>"+  msg +"</div><br>"
                +    sel_bag.innerHTML;
        }
if(log_this) log_set_TR_RESULT();
        return;
    }

    if(log_this) {
        let msg = ""
            +"<p><em class='cc8'>" + options                          +"</em>"
            +"<br><em class='cc7'>"+ pattern_toHTML(pattern, options) +"</em>"
            +"<br>"                + "has selected"
            +"<br><em>"            + node_array.length                +"</em> nodes"
            +"</p>"
        ;

        log("<div class='badge'>"+msg+"</div>");
    }

    let slot  = get_free_slot();
    for(let i = 0; i < node_array.length; ++i)
    {
if(log_this) log("<em class='cc0' style='font-size:300%;'>"+(i+1)+"/"+node_array.length+"</em>");
        collect_node_matches_to_slot(slot, node_array[i], pattern, options);
    }

    /*}}}*/

if(log_this) log_set_TR_RESULT();
};
/*}}}*/
/*_ check_childNodes {{{*/
let check_childNodes = function(id, pattern)
{
    /* [id] {{{*/
    let caller = "<em class='cc3'>check_childNodes</em> id=<em class='cc4'>"+id+"</em> pattern=<em class='cc6'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) log_set_TR_SELECT(caller);

    let root = pick_node(id, caller);
    if(!root) return;

if( log_this) log("<em class='cc3'>check_childNodes</em> <em class='cc4'>ID: "+id+"</em> <em class='cc4'>pattern: "+pattern+"</em>");
if( log_this) log_tags();
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [childNodes] {{{*/
    let node, last_node, count, empty_count=0;
    for(count = 0; count < root.childNodes.length; ++count)
    {
        node         = root.childNodes[count];
        last_node    = node;
        if(count < CHECK_LOG_MAX) log_num_thumb(count, node);
    }

    if( log_this && (count >= CHECK_LOG_MAX)) {
        log(mPadStart(" .../..."));
        log(mPadStart(" "+count,3," ") +  node_toString( last_node ));
    }
    if( log_this && (empty_count > 0)) log("...empty_count=["+empty_count+"]");
    /*}}}*/
};
/*}}}*/
/*_ check_tagNodes {{{*/
let check_tagNodes = function(tag, pattern)
{
    /* [tag] .. (getElementById or getElementsByTagName) {{{*/
    if(!tag) tag = "*";
    let caller = "<em class='cc3'>check_tagNodes</em> tag=<em class='cc4'>"+tag+"</em> pattern=<em class='cc5'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if(log_this) log(caller);
if(log_this) log_set_TR_SELECT(caller);

    /* ELEMENTS */
    let elements = document.getElementsByTagName(tag);
if(log_this) log(caller+" <em class='cc4'>"+elements.length+" "+tag+" elements</em>");

    if(!elements.length) {
        elements = document.querySelectorAll( tag );
if(log_this) log(".document.querySelectorAll("+tag+")=["+elements.length+"]");
    }

    /* FILTER */
    mNodeRegexP  = (pattern) ? new RegExp(pattern, "gi") : null;
if(log_this) log_tags();
if(log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [getElementsByTagName(tag)] {{{*/
    let node, last_node, count, empty_count=0;
    for(count = 0; count < elements.length; ++count)
    {
        node         = elements[count];
        last_node    = node;
        if(!mNodeRegexP || node.textContent.match(mNodeRegexP))
        {
            if(count < CHECK_LOG_MAX) log_num_thumb(count, node);
        }
    }

if(log_this && (count >= CHECK_LOG_MAX)) {
    log(mPadStart(" .../..."));
    log(mPadStart(" "+count,3," ") +  node_toString( last_node ));
}

if(log_this && (empty_count > 0)) log("...empty_count=["+empty_count+"]");
    /*}}}*/
};
/*}}}*/
/*_ check_hasFeature {{{ */
let check_hasFeature = function(feature, version)
{
    let caller = "<em class='cc3'>check_hasFeature</em> feature=<em class='cc4'>"+feature+"</em> version=<em class='cc5'>"+version+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);

    let result = "";
    try {
        let input_feature = get_tool("#input_feature"); var feature = input_feature.value;
        let input_version = get_tool("#input_version"); var version = input_version.value;
        result = document.implementation.hasFeature(feature, version);
    }
    catch(ex) {
        result = ex.toString();
    }

if( log_this) log(caller+": ...return "+result);
    return result;
};
/*}}}*/


/* filter */
/*_ mNodeFilter {{{ */
let mNodeRegexP;
let mNodeFilter = function(node)
{
    let mNodeFilter_result = do_mNodeFilter(node);

if(LOG_MAP.S1_RANGE && (mNodeFilter_result != NodeFilter.FILTER_SKIP)) log("XXX mNodeFilter: "+ NodeFilter_toString(mNodeFilter_result) + node_toString(node));

    return mNodeFilter_result;
};

let NodeFilter_toString = function(mNodeFilter_result)
{
    switch(mNodeFilter_result)
    {
        case NodeFilter.FILTER_ACCEPT: return "<em class='cc4'>FILTER_ACCEPT </em>";
        case NodeFilter.FILTER_REJECT: return "<em class='cc1'>FILTER_REJECT </em>";
        case NodeFilter.FILTER_SKIP  : return "<em class='cc8'>FILTER_SKIP   </em>";
        default                      : return "<em class='cc2'>FILTER_ERROR  </em>";
    }
};

let do_mNodeFilter = function(node)
{
    if(    mNodeRegexP         && node.textContent  )
        if(mNodeRegexP.pattern == node.textContent  ) return NodeFilter.FILTER_ACCEPT;

    /* REJECT OUT_OF_SCOPE_PARENT */
    let parent = node.parentNode;
    if( parent && (parent.nodeType == Node.ELEMENT_NODE))
    {
        if( parent.tagName  == "SCRIPT"             ) return NodeFilter.FILTER_REJECT;
        if( parent.tagName  == "STYLE"              ) return NodeFilter.FILTER_REJECT;
        if( is_node_selected( parent )              ) return NodeFilter.FILTER_REJECT;
    }
/*
        if( parent.className.includes("knob_content") )
        {
            console.log("REJECTING: "+ parent.parentNode.id);
            console.dir(parent);
            return NodeFilter.FILTER_REJECT;
        }
*/
    /* SKIP NON-TEXT */
    if(node.nodeType != Node.TEXT_NODE              ) return NodeFilter.FILTER_SKIP  ;

    /* ACCEPT UNFILTERED */
    if(                       !mNodeRegexP          ) return NodeFilter.FILTER_ACCEPT;

    /* REJECTED BY FILTER */
    if(!node.textContent                            ) return NodeFilter.FILTER_SKIP  ;
    if(!node.textContent.match(mNodeRegexP)         ) return NodeFilter.FILTER_SKIP  ;

    /* ACCEPTED BY FILTER */
    else                                              return NodeFilter.FILTER_ACCEPT;
};
/*}}}*/

/*_ log_num_thumb {{{*/
let log_num_thumb = function(count, node)
{
    let         num = mPadStart(count, 5, " ");

    let thumb_p     = get_node_thumb_p( node    );
    let thumb_p_str = get_thumb_p_str ( thumb_p );
    let      offset = " ["+ thumb_p_str.replace(" ","&nbsp;") +"%]";

    let         val = node_toString(node);

    log("<span class='log_num_thumb'>"+num + offset +"</span> "+ val);
};
/*}}}*/
/*}}}*/

/** COLLECT */
/*{{{*/
/*_ collect_node_matches_to_slot {{{*/
let collect_node_matches_to_slot = function(slot, node, pattern, options)
{
    let caller = "collect_node_matches_to_slot(slot=["+slot+"])";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);

if( log_this) log("<div class='div_match'>");

    let matches;
    for(let i = 0; (matches = mNodeRegexP.exec(node.textContent)); ++i)
    {
if( log_this) log("<div class='div_match' style='border:3px dotted yellow !important;'>");

        let num = ccs[slot].nodes.length+1;
if( log_this) log_match(node, slot, num, i, mNodeRegexP, matches);

        let       match = matches[0]; /* the full string */
        let startOffset = matches.index;
        let   endOffset = startOffset + match.length;

        /* select match */
        let       range = document.createRange();
        range.setStart(node, startOffset);
        range.setEnd  (node,   endOffset);

        /* collect match */
        if(ccs[slot].nodes.length < TOO_MANY_SELECTIONS)
        {

            window.getSelection().removeAllRanges();
            window.getSelection().addRange( range );
            if(i == 0) document.execCommand("copy"); /* to clipboard */

            let ccs_node_nextSibling = collect_selection_to_slot(slot, pattern, options);

            if( ccs_node_nextSibling ) {
                node = ccs_node_nextSibling;
                mNodeRegexP.lastIndex = 0;
            }
if( log_this) log("...<blockquote class='cc6'>"+ get_n_txt(node).substring(mNodeRegexP.lastIndex) +"</blockquote>");
        }
        else {
            window.getSelection().addRange( range );
        }
if( log_this) log("</div>");
    }
    window.getSelection().removeAllRanges(); /* prevent WebView popup */

if( log_this) log("</div>");
};
/*}}}*/
/*_ log_match {{{*/
let log_match = function(node, slot, num, i, regex, matches)
{
    let s = ""
        + "<blockquote class='cc6'> "+            escape_CR_LF( ellipsis(node.textContent, 128) ) +"</blockquote>"
        + "<em class='cc6 em_match'> "+           matches[0]                                      +"</em>"
        + "<br>"
        + "<em class='cc"+((slot  )%9 + 1)+"'>slot "+   slot                                      +"</em>"
        + "<em class='cc"+(( num-1)%9 + 1)+"'>num "+    num                                       +"</em>"
        + "<em class='cc"+((   i  )%9 + 1)+"'>match #"+ (i+1)                                     +"</em>"
        + " REGEX: "
        + "<em class='cc4'> "+                    regex                                           +"</em>"
        + "<em class='cc5'> index "+              matches.index                                   +"</em>"
        + "<em class='cc8'> lastIndex "+          mNodeRegexP.lastIndex                           +"</em>"
    ;
    log(s);
};
/*}}}*/

/*_ collect_selection_to_slot {{{ */
let collect_selection_to_slot = function(slot, pattern, options)
{
    let caller = "collect_selection_to_slot(slot=["+slot+"], pattern=["+pattern+"], options=["+options+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);

    let selection = window.getSelection();
    if(!selection               ) return null;
    if( selection.rangeCount < 1) return null;

    let range     = selection.getRangeAt(0);

    let sel_text  = range.toString().trim();
if(log_this) log(".sel_text=["+sel_text +"]");

    if(!sel_text                ) return null;

    if(!pattern) pattern = sel_text;

    /* inject highlight node */
    let ccs_node        = document.createElement("em");
    ccs_node.innerText  = sel_text;

    collect_ccs_range_node_slot(range, ccs_node, slot, pattern, options);

if(log_this) log("return ccs_node.nextSibling=["+ccs_node.nextSibling+"]");
    return ccs_node.nextSibling;
};
/*}}}*/
/*_ collect_ccs_range_node_slot {{{*/
let collect_ccs_range_node_slot = function(range, ccs_node, slot, pattern, options)
{
    /*{{{*/
let caller = "collect_ccs_range_node_slot(range, ccs_node, slot=["+slot+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);
    /*}}}*/
    /*  parent_with_overflow {{{*/
    let parent_with_overflow = get_parent_with_overflow( ccs_node );
    if( parent_with_overflow )
    {
if(log_this) log(caller+"%c NOT COLLECTING "+get_n_txt( ccs_node )+" .. parent_with_overflow "+get_n_txt( parent_with_overflow ), lbH+lf2);
        return;
    }
    /*}}}*/
    /* container {{{*/
    let container                      = get_node_container( range.startContainer );
    let container_H                    = container ? container.offsetHeight : 0;
    let container_is_too_high          = (container_H             >  window.innerHeight);
    let container_is_body              = (container               == document.body);
    let container_is_body_direct_child = (container.parentElement == document.body);
    let container_is_body_single_child = (container               == document.body) && (document.body.childNodes.length == 1);
    let container_is_body_first_child  = (container               == document.body) && (document.body.childNodes[0]     == container);

if(log_this && container_is_too_high         ) log("%c container_is_too_high         ", lbH+lf2);
if(log_this && container_is_body             ) log("%c container_is_body             ", lbH+lf3);
if(log_this && container_is_body_direct_child) log("%c container_is_body_direct_child", lbH+lf4);
if(log_this && container_is_body_single_child) log("%c container_is_body_single_child", lbH+lf5);
if(log_this && container_is_body_first_child ) log("%c container_is_body_first_child ", lbH+lf6);

    if(     container_is_too_high         ) container = null;
    else if(container_is_body             ) container = null;
    else if(container_is_body_single_child) container = null;
/*
    if(container_is_body_direct_child) container = null;
    if(container_is_body_first_child ) container = null;
*/
if(log_this) log("%c container %c "+get_n_lbl(container)+"%c H="+container_H, lbL, lbC+lf7, lbR+lf8);
    /*}}}*/
    /* thumb_p .. f(parent container or range.startContainer) {{{*/
/*
    let node = container ? container : range.startContainer;
logXXX("...node=["+get_n_lbl(node)+"]")
*/
/*{{{
    TODO
    ? thumb_p of range.startContainer
    ? thumb_p of selected parent container
    ? thumb_p of ccs_node
}}}*/
/*{{{
    let thumb_p = get_node_thumb_p(container ? container : ccs_node);
    let thumb_p = get_node_thumb_p(range.startContainer );
}}}*/
/*
    let thumb_p   = get_node_thumb_p( node );
    if( thumb_p   < 1)
        thumb_p   = get_node_thumb_p(ccs_node);
*/
    /* CCS INSERT .. (TEMPORARILY REPLACE SELECTION) {{{*/
    range.deleteContents();
    range.insertNode(ccs_node);

    /*}}}*/
/*FIXME*/
    let thumb_p = get_node_thumb_p(container ? container : ccs_node);
/*
    let thumb_p = get_node_thumb_p(                        ccs_node);
*/

    if( thumb_p < 1) {
if(log_this) log(caller+"%c NOT COLLECTING "+get_n_txt(node)+" .. (thumb_p < 1)", lbH+lf2);
        ccs_node.outerHTML = ccs_node.innerHTML;
        return;
    }
    /*}}}*/
    /* CCS CREATE {{{*/
    let                   next_idx = ccs[slot].nodes.length;
    let                        ccX =     slot % SELECT_SLOT_MAX;
    let                 slot_class = SEL_CLASS_PREFIX +     ccX;
    let                 word_class = SEL_CLASS_PREFIX +"_"+ options;

    ccs_node.id                    = slot_class +"_"+(next_idx+1);
    ccs_node.className             = slot_class +" "+ word_class;
    ccs[slot].slot                 = slot;
    ccs[slot].pattern              = pattern;
    ccs[slot].options              = options;
    ccs[slot].nodes     [next_idx] = ccs_node;
    ccs[slot].containers[next_idx] = container;

if(log_this) log("%c ccs_node: "+ node_toString(ccs_node), "background-color:#880");

    /*}}}*/
    /* CCS [thumb_p] {{{*/
    let thumb_p_str = get_thumb_p_str( thumb_p );
    if(!thumb_p_str)
    {
if(log_this) log("%c *** INVALID thumb_p=["+thumb_p+"] .. container=["+get_n_lbl(container)+"] ccs_node=["+get_n_lbl(ccs_node)+"] ***", lbH+lf2);
        thumb_p_str = "0";
    }
    ccs[slot].thumbs    [next_idx] = thumb_p_str;
/*
if(log_this) log("slot=["+slot+"] num=["+(next_idx+1)+"] thumb_p=["+thumb_p_str+"] ["+ccs_node.textContent+"]");
*/

if(log_this) log( ccs[slot].num_toHTML(next_idx + 1) );
    /*}}}*/
    /* CCS CONTAINER HIGHLIGHT [containers_hi] {{{ */
    if( !containers_hi ) return;
    if( !container     ) return;
    if(  container.classList)
        if(  container.classList.contains( "container_dark" ) || container.classList.contains( "container_light" )) return;
    add_hi_container( container );

    /*}}}*/
};
/*}}}*/

/*_ get_node_container {{{*/
let BAIL_OUT_COUNT = 10;
let get_node_container = function(node)
{
    let caller = "get_node_container("+get_n_txt(node)+")";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);

    let container = node.parentElement;

    let count;
    for(count = 0; count < BAIL_OUT_COUNT; ++count)
    {
        if(container == null)
        {
if(log_this) log("%c"+caller+"%c NO PARENT", lbL, lbR+lf2);

            break;
        }

        if( is_text_container_node( container ) )
        {
if(log_this) log("%c"+caller+"%c FOUND CONTAINER ["+get_n_str( container )+"] ("+container.tagName+")", lbL, lbR+lf4);
            break;
        }

        container = container.parentElement;
    }

    if(count >= BAIL_OUT_COUNT)
    {
if(log_this) log("%c"+caller+"%c BAILING OUT ON ["+get_n_str(node)+"] after "+count+" attempts at looking for a container", lbL, lbR+lf1);

    }

    return container;
};
/*}}}*/
/*_ is_text_container_node {{{*/
let is_text_container_node = function(node)
{
    let tag = node.nodeName.toLowerCase();
    let result
        =      (tag == "p"        )
        ||     (tag == "div"      )
        ||    ((tag == "code"     ) && (node.textContent.length >= 80)) /* only if they contain a wall of text */
        ||    ((tag == "li"       ) && (node.textContent.length >= 80)) /* only if they contain a wall of text */
        ||    ((tag == "ul"       ) && (node.textContent.length >= 80)) /* only if they contain a wall of text */
        ||     (tag == "section"  )
        ||     (tag == "article"  )
        ||     (tag == "aside"    )
        ||     (tag == "header"   )
        ||     (tag == "nav"      )
    /*      ...COULD BE CONTAINERS .. IF NONE OF THE FOLLOWING */
        || (   (tag != "span"     )
            && (tag != "a"        )
            && (tag != "b"        )
            && (tag != "em"       )
            && (tag != "font"     )
            && (tag != "strong"   )
            && (tag != "u"        )
    /*      ...COULD BE CONTAINERS .. ONLY WITH A WALL OF TEXT */
            && (tag != "code"     )
            && (tag != "li"       )
        )
    ;

if(LOG_MAP.S1_RANGE) log("is_text_container_node(["+get_n_str(node)+"]...["+get_n_lbl(node)+"]): ...return "+result+" node.textContent.length=["+node.textContent.length+"]");
    return result;
};
/*}}}*/

/*_ sync_containers_hi {{{*/
let sync_containers_hi = function()
{
    let caller = "sync_containers_hi";
if(LOG_MAP.S1_RANGE) log(caller);

    /* 1/2 - forget all current containers */
    let selector  = ".container_light";
    let node_list = document.querySelectorAll( selector );
    for(let i = 0; i < node_list.length; ++i)
    {
        del_el_class(node_list[i], "container_light");
    }

    selector  = ".container_dark";
    node_list = document.querySelectorAll( selector );
    for(let i = 0; i < node_list.length; ++i)
    {
        del_el_class(node_list[i], "container_dark");
    }

    /* highlight active containers */
    if(containers_hi)
    {
        for(let slot = 1; slot < ccs.length; ++slot)
        {
            if( ccs[slot] )
            {
                for(let i = 0; i < ccs[slot].nodes.length; ++i)
                {
                    if( ccs[slot].containers[i] )
                        add_hi_container( ccs[slot].containers[i] );
                }
            }
        }
    }

    /* unhiglight everything else */
    let html = document.getElementsByTagName("HTML")[0];
    if(containers_hi) add_el_class(html             , "containers_hi"  );
    else              del_el_class(html             , "containers_hi"  );
    del_el_class(                  html, theme_dark ? "light" : "dark" );
    add_el_class(                  html, theme_dark ?  "dark" : "light");

};
/*}}}*/
/*_ get_slot_num_container {{{*/
let get_slot_num_container = function(slot, num)
{
    let s =  slot;
    let n = num-1;

    let node
        = (ccs[s] && ccs[s].containers)
        ?            ccs[s].containers[n] /*   a node parent */
        :            ccs[s].nodes     [n] /* the node itself */
        ;

/*
logXXX("get_slot_num_container("+s+","+n+"): ...return "+ get_n_lbl(node) +" .. "+ ((node == ccs[s].nodes[n]) ? "THE NODE ITSELF" : "A NODE PARENT"))
console.dir(ccs[s])
*/
    return  node;
};
/*}}}*/
/*}}}*/
/* PAT_BAG */
/*XXX*/
/*{{{*/
/*_ t_onPatternUpdate {{{*/
/*{{{*/
const  PATTERN_UPDATE_DELAY =  500;/*//FIXME 250;*/
let t_onPatternUpdate_timer = null;

/*}}}*/
let t_onPatternUpdate_no_delay = function(msg, caller) { t_onPatternUpdate(msg, caller, 0); };
let t_onPatternUpdate = function(msg, caller, delay=PATTERN_UPDATE_DELAY)
{
let log_this = LOG_MAP.S2_SELECT;
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, msg);

    if(t_onPatternUpdate_timer) {
        clearTimeout(t_onPatternUpdate_timer);
        if( delay ) delay  = 2 * PATTERN_UPDATE_DELAY;
    }
    if(delay) t_onPatternUpdate_timer =   setTimeout(t_onPatternUpdate_handler, delay);
    else                                             t_onPatternUpdate_handler();
};
/*}}}*/
/*_ t_onPatternUpdate_handler {{{*/

let t_onPatternUpdate_handler = function()
{
let log_this = LOG_MAP.S2_SELECT;
    let caller = "t_onPatternUpdate_handler";
if( log_this) log(caller);

    t_onPatternUpdate_timer = null;

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_UPDATE, "want");

    t_onPatternUpdate_handler_sync_csv_from_ccs();
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_STAGE , "have");

    t_set_1_sel_bag_innerHTML();

    t_set_4_pat_off_bak_innerHTML(caller);
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_RESULT, "have");

    t_onPatternUpdate_done();

};
/*}}}*/
/*_ t_onPatternUpdate_handler_sync_csv_from_ccs {{{*/
let t_onPatternUpdate_handler_sync_csv_from_ccs = function()
{
    /*{{{*/
    let caller = "t_onPatternUpdate_handler_sync_csv_from_ccs";
let log_this = LOG_MAP.S2_SELECT;
if( log_this ) log(caller);

    /*}}}*/
    /* REBUILD [bak_csv off_csv pat_csv sel_csv] {{{*/
    let old_bak_csv = bak_csv;
    let old_off_csv = off_csv;
    let old_pat_csv = pat_csv;
    let old_sel_csv = sel_csv;
/*
if(log_this) log("...old_bak_csv ["+old_bak_csv+"]");
if(log_this) log("...old_off_csv ["+old_off_csv+"]");
if(log_this) log("...old_pat_csv ["+old_pat_csv+"]");
if(log_this) log("...old_sel_csv ["+old_sel_csv+"]");
*/
    /*}}}*/
    /* ccs[] TO (pat_csv sel_csv) {{{*/
    sel_csv = ""; let sel_csv_count = 0;
    pat_csv = ""; let pat_csv_count = 0;

    for(let slot = 1; slot <= SELECT_SLOT_MAX; ++slot)
    {
        if(           ccs[slot]
            &&        ccs[slot].nodes[0]
            &&        ccs[slot].nodes[0].textContent
        ) {
            let pat = ccs[slot].pattern;
            sel_csv = csv_add(sel_csv, pat); ++sel_csv_count;
            pat_csv = csv_add(pat_csv, pat); ++pat_csv_count;

            bak_csv = csv_del(bak_csv, pat);
        }
    }
    /*}}}*/
    /* [old_pat_csv] TO [pat_csv off_csv bak_csv] {{{*/
    off_csv = ""; let off_csv_count = 0;
    /*.........*/ let bak_csv_count = csv_count(bak_csv);

    let old_pat_count = csv_count( old_pat_csv );
    for(let       pos = 1; pos <=  old_pat_count; ++pos) {
        let       pat = csv_get(   old_pat_csv  ,   pos);

        if(csv_contains(pat_csv, pat)) continue;

        if(pat_csv_count < SELECT_SLOT_MAX) { pat_csv = csv_add(pat_csv, pat); ++pat_csv_count; bak_csv = csv_del(bak_csv, pat); }
        if(off_csv_count < SELECT_SLOT_MAX) { off_csv = csv_add(off_csv, pat); ++off_csv_count; bak_csv = csv_del(bak_csv, pat); }
        else /* pat overload into bak */    {                                                   bak_csv = csv_add(bak_csv, pat); ++bak_csv_count; }
    }
    /*}}}*/
    /* [old_off_csv] TO [pat_csv off_csv bak_csv] {{{*/

    let old_off_count = csv_count( old_off_csv );
    for(let       pos = 1; pos <=  old_off_count; ++pos) {
        let       pat = csv_get(   old_off_csv  ,   pos);

        if(csv_contains(pat_csv, pat)) continue;

        if(pat_csv_count < SELECT_SLOT_MAX) { pat_csv = csv_add(pat_csv, pat); ++pat_csv_count; bak_csv = csv_del(bak_csv, pat); }
        if(off_csv_count < SELECT_SLOT_MAX) { off_csv = csv_add(off_csv, pat); ++off_csv_count; bak_csv = csv_del(bak_csv, pat); }
        else /* off overload into bak */    {                                                   bak_csv = csv_add(bak_csv, pat); ++bak_csv_count; }
    }
    /*}}}*/
    /*{{{*/

if(log_this) if(sel_csv != old_sel_csv) csv_log(sel_csv, "sel_csv [x"+csv_count(sel_csv)+"] "); else log("%c sel_csv [x"+csv_count(sel_csv)+"] %c UNCHANGED ["+sel_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(pat_csv != old_pat_csv) csv_log(pat_csv, "pat_csv [x"+csv_count(pat_csv)+"] "); else log("%c pat_csv [x"+csv_count(pat_csv)+"] %c UNCHANGED ["+pat_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(off_csv != old_off_csv) csv_log(off_csv, "off_csv [x"+csv_count(off_csv)+"] "); else log("%c off_csv [x"+csv_count(off_csv)+"] %c UNCHANGED ["+off_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bak_csv != old_bak_csv) csv_log(bak_csv, "bak_csv [x"+csv_count(bak_csv)+"] "); else log("%c bak_csv [x"+csv_count(bak_csv)+"] %c UNCHANGED ["+bak_csv+"]", lbF+lb9, lbF+lb0);

    /*}}}*/
};
/*}}}*/
/*_ t_set_4_pat_off_bak_innerHTML {{{*/
let t_set_4_pat_off_bak_innerHTML = function(_caller)
{
    /*{{{*/
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c t_set_4_pat_off_bak_innerHTML: .. %c CALLED BY ["+_caller+"]", lbF+lb3, lbF+lb0);

    if(!pat_bag) return;
    let pat_bag_is_opened = has_el_class( pat_bag, "open_bag");
    /*}}}*/
    /* COLLECT [pat_spans] {{{*/
/*
<span class="pat_span"><em class="num_em">&nbsp;num</em>&nbsp;<em title="pat" class="cc1 ">txt</em></span>
<span.................><em......................num..em>......<em........pat...............txt..em><.span>
................................................num......................pat...............txt............
*/
    let pat_spans=[];
    let bak_count = t_collect_el_class_from_into("pat_span", bak_bag, pat_spans);
    let off_count = t_collect_el_class_from_into("pat_span", off_bag, pat_spans);
    let pat_count = t_collect_el_class_from_into("pat_span", pat_bag, pat_spans);

if(log_this) for(let i=0; i < pat_spans.length; ++i) log((i+1)+" %c["+pat_spans[i].innerText+"]", lbF+lbX[(i+1) % 10]);

    /*}}}*/
    /* [innerHTML] {{{*/
/*
  _cleanup_pat_bag();
  _cleanup_div(off_bag);
  _cleanup_div(bak_bag);
*/

    let bak_bag_innerHTML = "";
    let off_bag_innerHTML = "";
    let pat_bag_innerHTML = "";
    /*}}}*/
    /* [nil] .. (sucks all nil.pat_spans from their current container] {{{*/
    let bin_moved_to_count = 0;

    for(let pos = 1; pos <= csv_count(bin_csv); ++pos)
    {
        let pat             = csv_get  (bin_csv, pos);
        let pat_span_index  = t_get_pat_span_index(pat_spans, pat);

        /* DUMP ENTRY */
        if(pat_span_index >= 0)
        {
            let container = pat_spans[pat_span_index].parentNode;
            if( container ) {
                container.removeChild( pat_spans[pat_span_index] );
                pat_spans[pat_span_index] = null;
                bin_moved_to_count += 1;
            }
        }
    }

    /* CONTAINER CLEANUP ALL DONE .. f(one shot) */
    bin_csv = "";

    /*}}}*/
    /* [bak] {{{*/
    let bak_moved_to_count = 0;
    let bak_inserted_count = 0;
    let bak_asserted_count = 0;

    for(let pos = 1; pos<= csv_count(bak_csv); ++pos)
    {
        let pat            = csv_get  (bak_csv, pos);
        let pat_span_index = t_get_pat_span_index(pat_spans, pat);

        if(pat_span_index >= 0)
        {
            /* container  bak_bag .. [CONFIRM bak] {{{*/
            let container  = pat_spans[pat_span_index].parentNode;
            if( container == bak_bag) {
                bak_asserted_count += 1;

            }
            /*}}}*/
            /* container !bak_bag .. [MOVED_TO bak] {{{*/
            else {

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("MOVED TO <em class='cc2'>BAK</em> FROM <em class='cc9'>"+get_n_lbl(container)+"</em> ["+pat_spans[pat_span_index].innerText+"]");
                bak_moved_to_count += 1;
                bak_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            t_sync_pat_span_class(pat, pat_spans[pat_span_index]);
            pat_spans[pat_span_index] = null;
        }
        else {
            /* [new pat_span innerHTML] {{{*/
            let  num = mPadStart(pos,2).replace(" ","&nbsp;");
            let  txt = ellipsis(s_get_htmlEntities(pat), 16);
            let  css_class
                = "cc0"
                + ((mov_div.innerText == txt) ? " mov_src" : "")
            ;

            let line = t_get_pat_span_line(num,pat,css_class,txt);
            /*}}}*/
            /* [INSERTED BAK] {{{*/
            bak_bag_innerHTML += line;
            bak_inserted_count += 1;
            /*}}}*/
        }
    }
    /*}}}*/
    /* [pat] [off] {{{*/

    let pat_moved_to_count = 0;
    let pat_inserted_count = 0;
    let pat_asserted_count = 0;

    let off_moved_to_count = 0;
    let off_inserted_count = 0;
    let off_asserted_count = 0;

    for(let pos = 1; pos<= csv_count(pat_csv); ++pos)
    {
        let pat            = csv_get(pat_csv, pos);
        let pat_span_index = t_get_pat_span_index(pat_spans, pat);
        let pat_off        = csv_contains(off_csv, pat);
        let pat_bak        = csv_contains(bak_csv, pat);

        if(pat_span_index >= 0)
        {
            /* container  pat_bag .. [CONFIRM pat] OR [MOVED_TO off] {{{*/
            let container  = pat_spans[pat_span_index].parentNode;
            if( container == pat_bag)
            {
                let csv_belongs_to_pat = !pat_off /*|| !pat_bag_is_opened*/;
                /* pat CONFIRM {{{*/
                if(csv_belongs_to_pat)
                {
                    pat_asserted_count += 1;

                    /* but move it to the bottom */
                    pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
                }
                /*}}}*/
                /* pat MOVED_TO off {{{*/
                else {
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_spans[pat_span_index] );
                }
                /*}}}*/
            }
             /*}}}*/
            /* container  off_bag .. [CONFIRM off] {{{*/
            else if( container == off_bag)
            {
                let csv_belongs_to_pat = !pat_off /*|| !pat_bag_is_opened*/;
                /* off CONFIRM {{{*/
                if(!csv_belongs_to_pat)
                {
                    off_asserted_count += 1;
                }
                /*}}}*/
                /* off MOVED_TO pat {{{*/
                else {
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* container  bak_bag .. [MOVED_TO pat] OR [MOVED_TO off] {{{*/
            else if( container == bak_bag)
            {
                /* bak MOVED_TO off {{{*/
                if(pat_off) {
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_spans[pat_span_index] );
                }
                /*}}}*/
                /* bak MOVED_TO pat {{{*/
                else if(!pat_bak) {
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* HIDE pat .. [MOVED_TO off] {{{*/
            else if( pat_off ) {
                off_moved_to_count += 1;
                off_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            /* SHOW pat .. [MOVED_TO pat] {{{*/
            else if( !pat_bag_is_opened ) {
                pat_moved_to_count += 1;
                pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
            }
            /*}}}*/
            t_sync_pat_span_class(pat, pat_spans[pat_span_index], pat_off);
            pat_spans[pat_span_index] = null;
        }
        else {
            /* [new pat_span innerHTML] {{{*/
            let num = mPadStart(pos,2).replace(" ","&nbsp;");
            let txt = ellipsis(s_get_htmlEntities( pat ), 16);
            let ccX = get_slot_of_pattern( pat ) % 10;
            let css_class
                = ((pat_off                 ) ? "cc0"      : "cc"+ccX)
                + ((mov_div.innerText == txt) ? " mov_src" : ""      )
            ;

            let line = t_get_pat_span_line(num,pat,css_class,txt);
            /*}}}*/
            /* [INSERTED OFF] .. [to off when OPENED] [to pat when CLOSED] {{{*/
            if(pat_off) {
                if( pat_bag_is_opened ) { off_bag_innerHTML += line; ++off_inserted_count; }
                else                    { pat_bag_innerHTML += line; ++pat_inserted_count; }
            }
            /*}}}*/
            /* [INSERTED SEL] .. [to pat] {{{*/
            else                       { pat_bag_innerHTML += line; ++pat_inserted_count; }
            /*}}}*/
        }

    }
    /*}}}*/
    /* [pat_spans] unmoved [MOVED_TO bak] {{{*/
    for(let pat_span_index=0; pat_span_index<pat_spans.length; ++pat_span_index)
    {
        if(pat_spans[pat_span_index] == null) continue;

        let  el = pat_spans[pat_span_index].childNodes[2];

/*
        let pat = el.title;
*/
        let pat = csv_unescape(el.title);
/*
logXXX("___el.title=["+ el.title +"]")
logXXX("________pat=["+ pat      +"]")
*/
        let parentNode = pat_spans[pat_span_index].parentNode;

        if(csv_count(pat_csv) < SELECT_SLOT_MAX)
        {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("MOVED TO <em class='cc5'>OFF</em> <em class='cc8'>LOOSE</em> ["+pat_spans[pat_span_index].innerText+"]");
            csv_move_pattern_to_off(pat);
            off_moved_to_count += 1;
            off_bag.appendChild( pat_spans[pat_span_index] );
        }
        else {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("MOVED TO <em class='cc8'>BAK</em> <em class='cc8'>LOOSE</em> ["+pat_spans[pat_span_index].innerText+"]");
            csv_move_pattern_to_bak(pat);
            bak_moved_to_count += 1;
            bak_bag.appendChild( pat_spans[pat_span_index] );
        }

        t_sync_pat_span_class("", pat_spans[pat_span_index]);
        pat_spans[pat_span_index] = null;

    }
/*
*/
    /*}}}*/
    /* LOG {{{*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked)
    {
        let log_msg = "";

        /* PANEL OPEN / CLOSED */
        log_msg += "<em class='cc"+(pat_bag_is_opened ? 9 : 8)+"'>PANEL "+(pat_bag_is_opened ? "OPENED" : "CLOSED")+"</em> ";

        /* BAGS */

        log_msg                   += "<br>"+ SYMBOL_BAGGER+" <em class='done cc1'>HAVE</em>";

        if(!pat_count && !off_count && !bak_count) {
            log_msg               +=     " ALL BAGS EMPTY";
        }
        else {
            if(pat_count) log_msg += " <em class='bags cc1'>pat "+pat_count /*+" "+ SYMBOL_PAT_BAG*/ +"</em>";
            if(off_count) log_msg += " <em class='bags cc5'>off "+off_count /*+" "+ SYMBOL_OFF_BAG*/ +"</em>";
            if(bak_count) log_msg += " <em class='bags cc2'>bak "+bak_count /*+" "+ SYMBOL_BAK_BAG*/ +"</em>";
        }

        log_msg += t_get_docker_bag_msg("pat", pat_moved_to_count, pat_asserted_count, pat_inserted_count);
        log_msg += t_get_docker_bag_msg("off", off_moved_to_count, off_asserted_count, off_inserted_count);
        log_msg += t_get_docker_bag_msg("bak", bak_moved_to_count, bak_asserted_count, bak_inserted_count);
        log_msg += t_get_docker_bag_msg("bin", bin_moved_to_count, 0                 , 0                 );

        t_log_msg( log_msg );
    }

if(log_this && pat_bag_innerHTML) log("...pat_bag_innerHTML %c"+pat_bag_innerHTML, lb1);
if(log_this && off_bag_innerHTML) log("...off_bag_innerHTML %c"+off_bag_innerHTML, lb2);
if(log_this && bak_bag_innerHTML) log("...bak_bag_innerHTML %c"+bak_bag_innerHTML, lb3);
pat_bag.title
    = "PAT "+csv_count(pat_csv)+LF
    + "OFF "+csv_count(off_csv)+LF
    + "BAK "+csv_count(bak_csv)
    ;

    /*}}}*/
    /* [wide_bag] {{{*/
    let needs_wide_bag
        =  (csv_count(off_csv) >= 10)
        || (csv_count(bak_csv) >= 10)
    ;

    if(has_el_class(pat_bag, "wide_bag") != needs_wide_bag)
    {
        set_el_class_on_off(pat_bag, "wide_bag", needs_wide_bag);

        t_log_transcript_info("<span style='"+ (needs_wide_bag ? "color:red" : "color:green"                 ) +";'>"+SYMBOL_BLACK_CIRCLE+"</span>"
            +                 "<span style='"+ (needs_wide_bag ?          "" : "text-decoration:line-through") +";'>  wide_bag             </span>"
        );
    }

    /*}}}*/
    /* [off_bag.empty] {{{*/
    let empty   = (csv_count(off_csv) == 0);
    set_el_class_on_off(off_bag, "empty", empty);
/*

*/
    /*}}}*/
    /* innerHTML .. [afterbegin beforeend] {{{*/
    if(pat_bag_innerHTML) pat_bag.insertAdjacentHTML("beforeend", pat_bag_innerHTML);
    if(off_bag_innerHTML) off_bag.insertAdjacentHTML("beforeend", off_bag_innerHTML);
    if(bak_bag_innerHTML) bak_bag.insertAdjacentHTML("beforeend", bak_bag_innerHTML);

    /*}}}*/
    /* BAGS ORDER {{{*/
    pat_bag.appendChild(off_bag);
    pat_bag.appendChild(bak_bag);
    pat_bag.appendChild(bot_div);

    /*}}}*/
};
/*}}}*/
/*_ t_get_docker_bag_msg {{{*/
let t_get_docker_bag_msg = function(bag_name, mov_count, ass_count, ins_count)
{
    let ccX
        = (bag_name == "pat") ? "cc1"
        : (bag_name == "off") ? "cc5"
        : (bag_name == "bak") ? "cc2"
        : (bag_name == "bin") ? "cc0"
        : ""
    ;

    let            docker_bag_msg  = "";
    if(ins_count ) docker_bag_msg += " <em class='done "+ccX+"'> INSERTED</em> <em class='bags "+ccX+"'>"+ bag_name +" + "+ ins_count +"</em>";
    if(mov_count ) docker_bag_msg += " <em class='done "+ccX+"'>    MOVED</em> <em class='bags "+ccX+"'>"+ bag_name +" + "+ mov_count +"</em>";
    if(ass_count ) docker_bag_msg += " <em class='done "+ccX+"'>CONFIRMED</em> <em class='bags "+ccX+"'>"+ bag_name +" = "+ ass_count +"</em>";

    if(!docker_bag_msg) return "";
    else                return "<br>"+ SYMBOL_DOCKER+" "+docker_bag_msg;
};
/*}}}*/

/*_ t_set_1_sel_bag_innerHTML {{{*/
let t_set_1_sel_bag_innerHTML = function()
{
    let caller = "t_set_1_sel_bag_innerHTML";
let log_this = LOG_MAP.S3_SLOT;

    let sel_bag = get_tool("#sel_bag");
    if(!sel_bag) return;
    let sel_bag_innerHTML = "";

    for(let slot = 1; slot < ccs.length; ++slot) {
        if(       ccs[slot]
            &&    ccs[slot].nodes[0]
            &&    ccs[slot].nodes[0].textContent
        ) {
            sel_bag_innerHTML += t_get_2_sel_bag_line(slot) +"<br>";
        }
    }

    if(sel_bag_innerHTML)
        sel_bag_innerHTML = "<span class='seeker_handle left'></span>"+ sel_bag_innerHTML;

if(log_this) log("%c "+caller+": sel_bag_innerHTML:%c<br>"+sel_bag_innerHTML, lbF+lb1, lb1);

    sel_bag.innerHTML = sel_bag_innerHTML;
};
/*}}}*/
/*_ t_get_2_sel_bag_line {{{*/
let t_get_2_sel_bag_line = function(slot)
{
    let count   = ccs[slot].nodes.length;
    let title   = ccs[slot].toString();
    let pattern = ccs[slot].pattern;

    return "<div class='select"+slot+"'>"
        +   "<em id='thumb_p_"+slot+"' title='"+title     +"'>"+pattern+"</em>"
        +   t_get_3_sel_bag_thumbs_EM(slot, "thumb_p")
        +  "</div>"
    ;

};
/*}}}*/
/*_ t_get_3_sel_bag_thumbs_EM {{{*/
let BAG_MAX_ELLIPSIS      = 7;
let BAG_MIN_ELLIPSIS      = Math.ceil(BAG_MAX_ELLIPSIS / 3);
let t_get_3_sel_bag_thumbs_EM = function(slot, id_prefix)
{
    let thumbs_line = "";

    let count   = ccs[slot].thumbs.length;

    for(let num = 1; num <= count; ++num)
    {
/*{{{
        if(ccs[slot].thumbs [num-1] <= 0) {
logXXX("t_get_3_sel_bag_thumbs_EM: NOT DISPLAYED: "+ ccs[slot].toString())

        }
}}}*/
        /* ... before and after center-ellipsis */
        if(    (        count <= BAG_MAX_ELLIPSIS )
            || (num <=           BAG_MIN_ELLIPSIS )
            || (num >= (count -  BAG_MIN_ELLIPSIS))
        ) {
            let percent = get_thumb_p_str(ccs[slot].thumbs [num-1]);
            thumbs_line
                += "<em        id='"+id_prefix+"_" +     slot  +"_"+  num    +"'"
                +  " data-thumb_p='"+                ccs[slot].thumbs[num-1] +"'"
                +  "        title='"+                             percent    +"'"
                +  ">"+                                        String(num)   +"</em>"
            ;
        }
        /* insert a center ellipsis */
        else if(num  == (BAG_MIN_ELLIPSIS+1)) {
            thumbs_line
                += "<em        id='"+id_prefix+"_"+slot+"_0'"
                +  " data-thumb_p=''"
                +  "        class='ellipsis'"
                +  "        title='"+SYMBOL_E+"'"
                +  ">"+              SYMBOL_E +"</em>"
            ;
        }
    }

    return thumbs_line;
};
/*}}}*/

/*_ t_collect_el_class_from_into {{{*/
let t_collect_el_class_from_into = function(el_class, from, into)
{
    let spans = from.getElementsByTagName("SPAN");
    let count = 0;
    for(let i=0; i < spans.length; ++i)
    {
        if(              from != spans[i].parentNode  ) continue; /* not a direct child */
        if( t_is_accessory_node( spans[i]           ) ) continue;
        if(!has_el_class(        spans[i], el_class ) ) continue;
        into.push(spans[i]);
        count += 1;
    }
    return count;
};
/*}}}*/
/*_ t_is_accessory_node {{{*/
let t_is_accessory_node = function(node)
{
    return (node == bak_bag             )
        || (node == off_bag             )
        || (node == bot_div             )
        || (node == mov_div             )
/*
        || (node == bak_bag_place_holder)
        || (node == off_bag_place_holder)
        || (node == pat_bag_place_holder)
*/
        || (node == hov1                )
        || (node == hov2                )
        || (node == hov3                )
        || (node == hov4                )
    ;
};
/*}}}*/
/*_ t_sync_pat_span_class {{{*/
let t_sync_pat_span_class = function(pat, pat_span, pat_off=true)
{
    let el = pat_span.childNodes[2];

    let ccX = pat_off ? 0 : (get_slot_of_pattern(pat) % 10);
    let css_class
        = "cc"+ ccX
        + (has_el_class(el, "mov_src") ? " mov_src" : "")
    ;

    set_el_class(el, css_class);
};
/*}}}*/
/*_ t_cleanup_pat_bag {{{*/
let t_cleanup_pat_bag = function()
{
let log_this = LOG_MAP.S2_SELECT;
    let caller = "t_cleanup_pat_bag";
if(log_this) log(caller);

    let transient_pat_count = 0;
    let              length = pat_bag.childNodes.length;
    let                            node_removed;
    for(let i=0; i < length; i += (node_removed ? 0 : 1))
    {
        let node = pat_bag.childNodes[i];
/*console.dir(node);*/
        node_removed = false;
        if( t_is_accessory_node(node) )
        {
/*if(log_this) log("...KEEPING  %c["+get_n_lbl(node) +"]", lbF+lb1);*/
        }
        else if(node) {
/*if(log_this) log("...REMOVING %c["+node.textContent+"]", lbF+lb2);*/
            pat_bag.removeChild(node);
            transient_pat_count += 1;
            node_removed = true;
        }
        else {
/*if(log_this) log("...SKIPPING %c[undefined]"           , lbF+lb8);*/
        }
    }
if(log_this) log("..."+transient_pat_count+" [pat_bag] transient nodes removed");
};
/*}}}*/
/*_ t_cleanup_div {{{*/
let t_cleanup_div = function(div)
{
let log_this = LOG_MAP.S2_SELECT;
    let caller = "t_cleanup_div";
if(log_this) log(caller);

    let transient_pat_count = 0;
    let              length = div.childNodes.length;
    let                            node_removed;
    for(let i=0; i < length; i += (node_removed ? 0 : 1))
    {
        let node = div.childNodes[i];
        node_removed = false;
        if( t_is_accessory_node(node) )
        {
/*if(log_this) log("...KEEPING  %c["+get_n_lbl(node) +"]", lbF+lb1);*/
        }
        else if(node) {
            div.removeChild(node);
            transient_pat_count += 1;
            node_removed = true;
        }
    }
if(log_this) log("..."+transient_pat_count+" ["+get_n_lbl(div)+"] transient nodes removed");
};
/*}}}*/

/*_ t_get_pat_span_line {{{*/
let t_get_pat_span_line = function(num,pat,css_class,txt)
{
/*
logXXX("___________pat_=["+           pat +"]")
logXXX("csv_escape(pat)=["+csv_escape(pat)+"]")
*/
    return "<span class='pat_span'>"
        +  "<em class='num_em'>"+num+"</em>&nbsp;"
        +  "<em class='"+css_class+"' title='"+csv_escape(pat)+"'>"+txt+"</em>"
        +  "</span>"
    ;
};
/*}}}*/
/*_ t_get_pat_span_index {{{*/
let t_get_pat_span_index = function(pat_spans, pat)
{
    for(let pat_span_index=0; pat_span_index<pat_spans.length; ++pat_span_index)
    {
        if(pat_spans[pat_span_index] == null) continue;

        let el = pat_spans[pat_span_index].childNodes[2];

        let el_pat  = csv_unescape(el.title);
        if( el_pat == pat)
        {
/*
logXXX("t_get_pat_span_index: ...return "+pat_span_index+"")
logXXX("___el.title=["+ el.title +"]")
logXXX("_____el_pat=["+   el_pat +"]")
logXXX("________pat=["+      pat +"]")
*/
            return pat_span_index;
        }
    }
    return -1;
};
/*}}}*/
/*}}}*/

/** SEARCH */
/*{{{*/
/*_ getElementsByContent {{{*/
let getElementsByContent = function(text)
{
    let caller = "getElementsByContent";
    let result = null;
    try {
        let elements = document.getElementsByTagName("*");

/*log("getElementsByContent("+text+"): searching "+ elements.length +" elements:", "warn");*/

        let deep_containers=[];
        let container = null;
        let text_toLowerCase = text.toLowerCase();
        for(let i = 0; i < elements.length; ++i)
        {
            let        el = elements[i];
            if(        el.textContent ) {
                if(    el.textContent.includes(text)
                    || el.textContent.toLowerCase().includes(text_toLowerCase)
                ) {
                    /*log(i+" childNodes x"+el.childNodes.length+" nodeName=["+el.nodeName+"] text=["+ get_n_txt(el)+"]");*/
                    if     (!container              ) { container = el;                                   /*log_node("CONTAINER:", container);*/ }
                    else if( container.contains(el) ) { container = el;                                   /*log_node("   DEEPER:", container);*/ }
                    else                              { deep_containers.push( container ); container =el; /*log_node("   NOTHER:", container);*/ }
                }
            }
        }

        if( container )
            deep_containers.push( container );

/*log("deep_containers.length=["+deep_containers.length+"]", "warn");*/
        let result = (deep_containers.length > 0)
            ?   deep_containers[0]
            :   null
        ;

/*log_node("getElementsByContent ...return:", result );*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    return result;
};
/*}}}*/
/*_ get_n_children {{{ */
let get_n_children = function(node)
{
    let result = node;
    try {
        for(let  i = 0; i < node.childNodes.length; ++i)
            result += " "+i+" ["+node.childNodes[i]+"]"+LF;
    }
    catch(ex) { return "node=["+node+"]:"+ex; }
    return result;
};
/*}}}*/
/*_ get_n_attributes {{{ */
let get_n_attributes = function(node)
{
    if(!node           ) return "*** get_n_attributes( !node ) ***";
    if(!node.attributes) return "";
    let     result = "";
    try {
        for(let  i = 0; i < node.attributes.length; ++i)
            result += "<span class='cc"+(i % SELECT_SLOT_MAX)+"'>"+node.attributes[i].name+": "+ node.attributes[i].value+"</span>";
    }
    catch(ex) { return "*** get_n_attributes("+node+") "+ex +" ***"; }
    return  result;
};
/*}}}*/
/*_ node_has_some_text {{{*/
let node_has_some_text = function(node)
{
    return node.nodeValue
        && node.textContent
        && (trim_alNum_lines(node.textContent).length > 0)
    ;
};
/*}}}*/
/*_ is_node_selected {{{*/
let is_node_selected = function(node)
{
    if(!node) return false;

    let result = false;
    try {
        result = (node.className && node.className.startsWith( SEL_CLASS_PREFIX ));
    } catch(ex) {
/*
console.dir(node);
*/
    }

if(LOG_MAP.S1_RANGE && result) log("is_node_selected("+get_n_lbl(node)+"): ...return "+result);
    return result;
};
/*}}}*/
/*}}}*/

/** NODES */
/*{{{*/

/* pick */
/*_ pick_node {{{*/
let pick_node = function(id, _caller)
{
    let caller = "pick_node("+id+"): caller=["+_caller+"]";
let log_this = LOG_MAP.S1_RANGE;

    let node = (!id) ? document.body : null;
    if(!node)
        try {
            node = document.getElementById(id) || document.getElementsByTagName(id)[0] || getElementsByContent(pattern);
        } catch(ex) { }

    let selector;
    if(!node ) {
        selector = "#"+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");
        node = document.querySelector( selector );
    }

    if(!node ) {
        selector = "."+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");
        node = document.querySelector( selector );
    }

    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using body");
        node = document.body;
    }

    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using document");
        node = document;
    }

if(log_this) {
    log("<div class='cc8'>");
    log(caller);
    log_node(SYMBOL_CHECK_MARK +" NODE"       , node           );
    log_node(SYMBOL_CHECK_MARK +" PARENT"     , node.parentNode);
    log_node(SYMBOL_CHECK_MARK +" FIRST CHILD", node.firstChild);
    log_node(SYMBOL_CHECK_MARK +" LAST CHILD" , node.lastChild );
    log("</div>");
}
    return node;
};
/*}}}*/

/* attributes */
/*_ node_toString {{{ */
let node_toString = function(node)
{
    let caller = "node_toString";
    if(!node) return "<span class='gr'>"+caller+"(null node)</span>";

    let result = "";
    try {

        let p_str = get_p_str( node          );
        let n_str = get_n_str( node          );
        let t_str = get_t_str( node.nodeType );

        let text  = (           node.nodeType == Node.COMMENT_NODE)
            ?                   node.textContent
            :  truncate(trim_empty_lines(node.textContent))
        ;

        let em_class
            = (node.nodeType == Node.TEXT_NODE   ) ? "cc4"
            : (node.nodeType == Node.COMMENT_NODE) ? "cc8"
            :                                        "cc3" ;

        if(!text) { text = n_str; em_class = "cc2"; }
        else      { text = ellipsis   ( text , 48); }

        result = ""
            + "<span class='log_node_toString'>"+ p_str                +"</span>"
            + " <em  class='"+em_class     +"'>"+ s_get_htmlEntities( text ) +"</em>"
        ;
/*
            + " "                             + mPadEnd     ( p_str ,32," ")
            + " <em   class='"+ em_class +"'>"+ mPadEnd     ( n_str ,16," ") +"</em>"
            + " <em   class='"+ em_class +"'>"+ mPadEnd     ( t_str ,16," ") +"</em>"
*/

    }
    catch(ex) { log(caller+": "+ex, "error"); }
    return result;
};
/*}}}*/
/*_ get_p_str {{{ */
let get_p_str = function(node)
{
    let names = "";

    for(let       parent  = node.parentNode
        ;        (parent != null)
        ;         parent  = parent.parentNode
    ) {
        let n_str         = get_n_str(parent);
        if( n_str) names  =            n_str            + names;
     /* if( n_str) names  = mPadEnd(   n_str,8,".") +"."+ names; */
    }

    return names;
};
/*}}}*/
/*_ get_n_lbl {{{ */
let get_n_lbl = function(node)
{
    if(!node                 ) return "null node";
    if( node == window       ) return "window";
    if( node == document.body) return "body";

    let                n_lbl = null;
    if(node.id ) try { n_lbl =   node.tagName +"#"+ node.id                                  ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =   node.tagName +(node.className ? ("."+ node.className) : "") ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =   truncate(node.textContent, 24)                              ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =            node.tagName                                       ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =            node.nodeType                                      ; } catch(ex) {}
    if( !n_lbl )       n_lbl = "";
    return             n_lbl;
};
/*}}}*/
/*_ get_n_str {{{ */
let get_n_str = function(node)
{
    let                h_tag = get_h_tag( node.nodeName );
    let                n_str = null;
/*  if( !n_str ) try { n_str =            node.id              ; if(n_str)  n_str = h_tag+"<sup>"+ellipsis(n_str,16)+"</sup>"; } catch(ex) {} */
/*  if( !n_str ) try { n_str =   truncate(node.textContent, 32);                              } catch(ex) {} */
    if( !n_str ) try { n_str =            h_tag                ;                              } catch(ex) {}
    if( !n_str ) try { n_str =            node.tagName         ;                              } catch(ex) {}
    if( !n_str ) try { n_str = get_t_str( node.nodeType       );                              } catch(ex) {}
    if( !n_str )       n_str = "";
    return             n_str;
};
/*}}}*/
/*_ get_n_txt{{{ */
let get_n_txt = function(node)
{
    if(!node) return "null node";
    return strip_CR_LF( ellipsis(node.textContent.trim(), 64) );
};
/*}}}*/
/*_ get_h_tag {{{ */
let get_h_tag = function(node_nodeName)
{
    switch(node_nodeName) {

        case "#document"     : return "|"     ; /*"\u2622";*/
        case  "HTML"         : return "_"     ; /*"\u2AFC";*/
        case   "HEAD"        : return "\u265E";
        case   "BODY"        : return "\u26AB"; /*"\u265C";*/

        case    "SCRIPT"     : return "\u2710";

        case    "DIV"        : return "\u2610";
        case    "BLOCKQUOTE" : return "\u275D";
        case    "SPAN"       : return "\u2799";
        case    "EM"         : return "\u2794";

        case    "A"          : return "\u27A4";
        case    "BUTTON"     : return "\u274D";
        case    "INPUT"      : return "\u270B";
        case    "TEXTAREA"   : return "\u2774";

        case    "TABLE"      : return "TA";
        case     "THEAD"     : return "TH";
        case     "TFOOT"     : return "TF";
        case     "TBODY"     : return "TB";
        case      "TR"       : return "tr";
        case      "TH"       : return "th";
        case      "TD"       : return "td";

        case    "UL"         : return "UL";
        case    "OL"         : return "OL";
        case    "LI"         : return "\u26AC";

        default              : return node_nodeName;
    }
};
/*}}}*/
/*_ get_t_str {{{ */
let get_t_str = function(node_nodeType)
{
    switch(node_nodeType)
    {
        case Node.ELEMENT_NODE               : return "ELEMENT"               ; /*  1 Element .. <p> or <div>*/
        case Node.TEXT_NODE                  : return "TEXT"                  ; /*  3 Text of Element or Attr*/
        case Node.PROCESSING_INSTRUCTION_NODE: return "PROCESSING_INSTRUCTION"; /*  7  .. <?xml-stylesheet ... ?> declaration (of an XML document)*/
        case Node.COMMENT_NODE               : return "COMMENT"               ; /*  8 Comment*/
        case Node.DOCUMENT_NODE              : return "DOCUMENT"              ; /*  9 Document*/
        case Node.DOCUMENT_TYPE_NODE         : return "DOCUMENT_TYPE"         ; /* 10 .. <!DOCTYPE html> for HTML5 documents*/
        case Node.DOCUMENT_FRAGMENT_NODE     : return "DOCUMENT_FRAGMENT"     ; /* 11 DocumentFragment*/
        /* DEPRECATED* */
        case Node.ATTRIBUTE_NODE             : return "ATTRIBUTE"             ; /*  2* Attribute of an Element  . The element attributes are no longer implementing the Node interface in DOM4 specification*/
        case Node.CDATA_SECTION_NODE         : return "CDATA_SECTION"         ; /*  4* CDATASection             . Removed in DOM4 specification*/
        case Node.ENTITY_REFERENCE_NODE      : return "ENTITY_REFERENCE"      ; /*  5* XML Entity Reference node. Removed in DOM4 specification*/
        case Node.ENTITY_NODE                : return "ENTITY"                ; /*  6* XML <!ENTITY ...> node   . Removed in DOM4 specification*/
        case Node.NOTATION_NODE              : return "NOTATION"              ; /* 12* XML <!NOTATION ...> node . Removed in DOM4 specification*/

        default: return "[TYPE="+node_nodeType+"]";
    }
};
/*}}}*/

/* thumb */
/*_ get_node_thumb_p {{{*/
let THUMB_OFFSET = 0;/*64; NOTE: not needed when using onDown_XY*/
let get_node_thumb_p = function(node)
{
/*
logXXX("%c get_node_thumb_p("+get_n_txt(node)+")",lbb+lbH)
*/
    let          node_top      = getRealTop(node) - THUMB_OFFSET;
    let                     ph = get_page_height();
/*
logXXX("...ph=["+ph+"]")
logXXX("...node_top=["+node_top+"]")
console.dir(node)
*/
    return 100 * node_top / ph;
};
/*}}}*/
/*_ get_thumb_p_str {{{*/
let get_thumb_p_str = function(thumb_p)
{
    if(thumb_p < 0) return "";

    let thumb_i = Math.trunc(       thumb_p           );
    let thumb_f = Math.round(100 * (thumb_p - thumb_i)); /* 2 decimals */

    thumb_i = mPadStart(thumb_i,2," ");
    thumb_f = mPadStart(thumb_f,2,"0");

    return (thumb_i +"."+ thumb_f);
};
/*}}}*/

/* log */
/*_ log_option_changes {{{*/
let log_option_changes = function(changes)
{

    let s = "<em>"+changes+"</em>" +"<br>"+LF
        +"<table>"+LF
        +"<tr><th>OPTIONS:</th></tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state("tools_scroll"      , tools_scroll                           ) +"</td>"
        +" <td>"+ get_log_option_state("anchor_freeze"     , anchor_freeze                          ) +"</td>"
        +" <td>"+ get_log_option_state("containers_hi"     , containers_hi                          ) +"</td>"
        +" <td>"+ get_log_option_state("scroll_smooth"     , scroll_smooth                          ) +"</td>"
        +" <td>"+ get_log_option_state("overflow_visi"     , overflow_visi                          ) +"</td>"
        +" <td>"+ get_log_option_state("tools_extras"      , tools_extras                           ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_value("words_options"     , get_words_options_symbol(words_options))
        +" <td>"+ get_log_option_state("words_opcycle"     , words_opcycle                          ) +"</td>"
        +" <td>"+ get_log_option_state("wording"           , wording                                ) +"</td>"
        +" <td>"+ get_log_option_state("theme_dark"        , theme_dark                             ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
      /*+" <td>"+ get_log_option_value("tools_node"        , "<em class='cc9'>"+tools_node  +"</em>")         */
      /*+" <td>"+ get_log_option_value("tools_filter"      , "<em class='cc9'>"+tools_filter+"</em>")         */
      /*+" <td>"+ get_log_option_state("filter_auto"       , filter_auto                            ) +"</td>"*/
      /*+" <td>"+ get_log_option_state("transcripts"       , transcripts                            ) +"</td>"*/
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state("logging_EVENTS"    , logging_EVENTS                         ) +"</td>"
        +" <td>"+ get_log_option_state("logging_HIGHLIGHT" , logging_HIGHLIGHT                      ) +"</td>"
        +" <td>"+ get_log_option_state("logging_TOOLBAR"   , logging_TOOLBAR                        ) +"</td>"
        +"</tr>"+LF
        +"<tr><th>CSS:</th></tr>"+LF
        +"<tr>"
        + "<td><em class='em_match'  >em_match  </em></td>"
        + "<td><em class='em_missing'>em_missing</em></td>"
        +"</tr>"+LF
        +"</table>"+LF
    ;

    log_set_TR_LAYOUT("<div id='log_tags_div'>"+ s +"</div>");
};

let get_log_option_state = function(option, state)
{
    let     mark = state ? SYMBOL_CHECK_MARK : SYMBOL_NOT_CHECKED;
    let em_class = state ?             "cc2" : "cc8";
    return option +" <em class='"+em_class+"'>"+ mark     +"</em>    ";
};

let get_log_option_value = function(option, value_em)
{
    return option +" "+ value_em;
};

/*}}}*/
/*_ log_tags {{{*/
let log_tags = function()
{
    let                 s  = "";
    tag = "#document" ; s +=        tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "HTML"      ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "HEAD"      ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "BODY"      ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "SCRIPT"    ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "DIV"       ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "BLOCKQUOTE"; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    s +="<br>";;
    tag = "SPAN"      ; s +=        tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "EM"        ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "A"         ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "BUTTON"    ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "INPUT"     ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "TEXTAREA"  ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "LI"        ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";

    log("<div id='log_tags_div'>"+ s +"</div>");
};
/*}}}*/
/*_ log_node {{{*/
let log_node = function(label, node)
{
    if(!node) {
        log(mPadStart(label,16)+" <em></em>");
        return;
    }
    let em_class
        = (node.nodeType == Node.TEXT_NODE   ) ? "cc4"
        : (node.nodeType == Node.COMMENT_NODE) ? "cc8"
        :                                        "cc3"
    ;
    let n_str = get_n_str( node          );
    let p_str = get_p_str( node          );
    let n_tag =            node.nodeName;

    log(mPadStart(label,16)+" <em>"+n_tag+"</em> <em class='"+em_class+"'>"+ p_str +" "+ n_str +"</em>" +" has "+ node.childNodes.length +" childNodes");
};
/*}}}*/

/*}}}*/

/** STRING */
/*{{{*/
/*_ csv_add {{{*/
let csv_add = function(csv, val)
{
/*
logXXX("csv_add(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
*/
    if(                     !val  ) return csv;
    val = csv_escape(val);
    if(             !csv          ) return val;
    if( csv_contains(csv,    val) ) return csv; /* as a SET (i.e. NOT as a BAG) */
/*
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
logXXX(".return val=[%c"+csv+","+val+"%c]", lb2,lbA)
*/
    return           csv+","+val;
};
/*}}}*/
/*_ csv_del {{{*/
let csv_del = function(csv,val)
{
    if(       !val) return csv;
    if(!csv       ) return csv;
/*
logXXX("csv_del(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
*/

    if( csv == val) {
       csv = "";
    }
    else {
        val = csv_escape(val);
/*
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
*/

        let a = csv.split(",");
        csv = "";
        for(let i=0; i<a.length; ++i) {
            if(                 !a[i]) continue;
            if(       val ==     a[i]) continue;
            if(!csv)  csv  =     a[i]; /* first */
                else      csv += ","+a[i]; /*  more */
        }
    }

/*
logXXX(".return csv=[%c"+csv+"%c]", lb1,lbA)
*/
    return csv;
};
/*}}}*/
/*_ csv_contains {{{*/
/*
:new C:/LOCAL/DEV/DEVEL/EMC/Extensions/PJC_SPECS/script/PJC_SPECS.asp
*/
let csv_contains = function(csv, val)
{
    if(!val) return false;
    val = csv_escape(val);
    let c = ","+ csv.trim() +",";
    let v = ","+ val.trim() +",";
    let r =        c.includes(v);
    return r;
};
/*}}}*/
/*_ csv_count {{{*/
let csv_count = function(csv)
{
    if(!csv) return 0;

    return csv.split(",").length;
};
/*}}}*/
/*_ csv_get {{{*/
let csv_get = function(csv,pos)
{
    if(!csv || !pos) return "";
    let   val = "";
    let     v = csv.split(",");
    for(let i = 0; i < v.length; ++i)
        if((i+1) == pos) { val = v[i]; break; }

    val = csv_unescape(val);
/*
logXXX("csv_get(csv=[%c"+csv+"%c], pos=[%c"+pos+"%c])", lb1,lbA, lb2,lbA)
logXXX(".return val=[%c"+val+"%c]", lb2,lbA)
*/
    return val;
};
/*}}}*/
/*_ csv_log {{{*/
let csv_log = function(csv, title="")
{
    if(title) {
        if(csv) log("%c "+title                , lbF+lb9         );
        else    log("%c "+title+"%c IS  EMPTY ", lbF+lb9, lbF+lb0);
    }

    if(!csv) return;

    let count = csv_count(csv);

    for(let i = 0; i < count; ++i) {
        let v = csv_get(csv,i+1);
        let u = unescape(v);
        if( u == v) log(" "+(i+1)+" %c["+v+"]"                   , lbX[(i+1) % 10]     );
        else        log(" "+(i+1)+" %c["+v+"]%c unescape=["+u+"]", lbX[(i+1) % 10], lb0);
    }
};
/*}}}*/
/*_ csv_escape csv_unescape {{{*/

let APOST_ASC = "'";
let APOST_UTF = "\\u0027";
let APOST_HTM = "&apos;";

let COMMA_ASC = ",";
let COMMA_UTF = "\\u002C";
let COMMA_HTM = "&comma;";

let regexp_COMMA_ASC = new RegExp(COMMA_ASC, "g");
let regexp_COMMA_UTF = new RegExp(COMMA_UTF, "g");
let regexp_COMMA_HTM = new RegExp(COMMA_HTM, "g");
let regexp_APOST_ASC = new RegExp(APOST_ASC, "g");
let regexp_APOST_UTF = new RegExp(APOST_UTF, "g");
let regexp_APOST_HTM = new RegExp(APOST_HTM, "g");

let csv_escape = function(text)
{
    return text
        .   replace(regexp_COMMA_ASC, COMMA_HTM)
        .   replace(regexp_APOST_ASC, APOST_HTM)
    ;
};

let csv_unescape = function(text)
{
    return text
        .   replace(regexp_COMMA_HTM, COMMA_ASC)
        .   replace(regexp_APOST_HTM, APOST_ASC)
    ;
};
/*}}}*/
/*_ csv_cat {{{*/
let csv_cat = function(csv1, csv2)
{
    if(  !csv1) return csv2;
    if(  !csv2) return csv1;
    let   csv = csv1;
    let     v = csv2.split(",");
    for(let i = 0; i < v.length; ++i) {
        csv += "," + v[i];
    }
};
/*}}}*/
/*_ csv_sort {{{*/
let csv_sort = function(csv, reverse=false)
{
    if(  !csv) return csv;
/*
csv_log(csv,"csv_sort(csv, reverse="+reverse+"):");
*/

    let     v = csv.split(",");
    if(reverse) v.sort( function(a, b) { return a.toLowerCase() < b.toLowerCase(); } );
    else        v.sort( function(a, b) { return b.toLowerCase() < a.toLowerCase(); } );

    csv = "";
    for(let i = 0; i < v.length; ++i) {
        csv += (csv ? "," : "")+ v[i];
    }
/*
csv_log(csv,"===================================");
*/
    return csv;
};
/*}}}*/
/*_ csv_reverse {{{*/
let csv_reverse = function(csv)
{
    return csv_sort(csv, true);
};
/*}}}*/

/*_ ellipsis {{{*/
const ELLIPSIS_DEFAULT_LEN = 64;
const ELLIPSIS_SHORT_LEN   = 32;

let ellipsis_short = function(msg)
{
    return ellipsis(msg, ELLIPSIS_SHORT_LEN);
};

let ellipsis = function(_msg, len=ELLIPSIS_DEFAULT_LEN)
{
    let msg = String(_msg);
    return (msg.length    <= len)
        ?   msg
        :   msg.substring(0, len-3)+HORIZONTAL_ELLLIPSIS
    ;
};
/*}}}*/
/*_ truncate {{{*/
let truncate = function(_msg, length=80)
{
    let msg = strip_CR_LF( String(_msg) );
    return (msg.length <= length)
        ?   msg
        :   msg.substring(0, length-3)+"..."
    ;
};
/*}}}*/
/*_ mPadStart {{{*/
let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };
/*}}}*/
/*_ mPadEnd{{{*/
let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };
/*}}}*/
/*_ isAlNum {{{ */
let isAlNum = function(s)
{
    let cp
        = s.codePointAt(0);
    let result
        =  ((cp >=   48) && (cp <=  57 )) /* 0-9 */
        || ((cp >=   65) && (cp <=  90 )) /* A-Z */
        || ((cp ==   95)                ) /*  _  */
        || ((cp >=   97) && (cp <= 122 )) /* a-z */
        || ((cp >= 0xDF) && (cp <= 0xFF)) /* SHARP-S - Y-DIAERESIS */
    ;
    if(result)
        return true;
    else
        return false;
};

let _sAlNum = function(s) { return /[0-9a-z]/.test( s.toLowerCase() ); };

/*}}}*/
/*_ object_label {{{*/
let object_label = function(object)
{
    return object.toString()
        .replace("[object ","")
        .replace(       "]","");
};
/*}}}*/
/*}}}*/

/** REGEX */
/*{{{*/
/*_ trim_node_textContent {{{ */
let trim_node_textContent = function(node)
{
    return strip_CR_LF( ellipsis(node.textContent.trim(), 64) );
};
/*}}}*/
/*_ strip_pat {{{*/
let strip_pat = function(text, str)
{
    if(typeof text == "undefined") return text;

    let regexp_char = new RegExp(str, "g");
    return text
        .   replace(regexp_char,  "")
        .   trim()
    ;
};
/*}}}*/
/*_ strip_CR_LF {{{*/
let regexp_CR = new RegExp("\\r", "g");
let regexp_LF = new RegExp("\\n", "g");
let strip_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, " ")
        .   trim()
    ;
};
/*}}}*/
/*_ strip_UL {{{*/
let regexp_ULX = new RegExp("__+", "g");
let regexp_UL  = new RegExp(  "_", "g");
let strip_UL = function(text)
{
    return text
        .   replace(regexp_ULX, LF    )
        .   replace(regexp_UL , " "   )
        .   trim()
    ;
};
/*}}}*/
/*_ tokenize {{{*/                                      /* HOSTNAME           _ PATHNAME        */
let regexp_NW      = new RegExp("[^0-9~A-z\\xC0-\\xFF]+", "g"); /* www.remotetabs.com _ C://LOCAL/STORE */
let regexp_WORDS   = new RegExp("www|com|html"          , "g"); /* www remotetabs com _ C   LOCAL STORE */
let regexp_HEADS   = new RegExp("^\\w\\s"                    ); /*                    _   C LOCAL_STORE */
let regexp_SPACE   = new RegExp("\\s+"                  , "g"); /*                    _     LOCAL_STORE */
let tokenize = function(text)
{
    return text
        .   replace(regexp_NW   , " ")
        .   replace(regexp_WORDS,  "")
        .   replace(regexp_HEADS,  "")
        .   trim(                    )
        .   replace(regexp_SPACE, "_")
    ;
};
/*}}}*/
/*_ vbar_to_up_arrow {{{*/
let regexp_VBAR = new RegExp("\\|", "g");
let vbar_to_up_arrow = function(text)
{
    return text
        .   replace(regexp_VBAR, SYMBOL_UP_ARROW)
    ;
};
/*}}}*/
/*_ escape_CR_LF {{{*/
let escape_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR, SYMBOL_CR   )
        .   replace(regexp_LF, SYMBOL_LF+"<br>"+LF)
        .   trim()
    ;
};
/*}}}*/
/*_ trim_alNum_lines {{{ */
let trim_alNum_lines = function(textContent)
{
    return trim_empty_lines(textContent, true);
};
/*}}}*/
/*_ trim_empty_lines {{{ */
let regexp_AN = new RegExp("[^a-z_ A-Z0-9]", "g");
/*r regexp_nW = new RegExp("\\W"           , "g");*/
let regexp_mS = new RegExp("\\s{2,}"       , "g");
let trim_empty_lines = function(textContent, alnum_filter=false)
{
    let caller = "trim_empty_lines";
    let text = "";
    try {
        if(textContent)
        {
            /* erase CR LF */
            text = strip_CR_LF( textContent.trim() );

            /* keep words only .. (erase non-word chars) */
            if(alnum_filter)
                text = text
                    .  replace(regexp_AN, " ")
                    /* replace(regexp_nW, " ")*/
                    ;

            /* collapse multiple space chars */
            text = text
                .  replace(regexp_mS, " ")
                ;

            if(text > 32)
                text = ellipsis(text, 32);
        }
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    return text.trim();
};
/*}}}*/
/*_ s_get_htmlEntities {{{ */
let regexp_HTML_AMP   = new RegExp("&", "g");
let regexp_HTML_LT    = new RegExp("<", "g");
let regexp_HTML_GT    = new RegExp(">", "g");
let regexp_HTML_QUOTE = new RegExp(DOUBLE_QUOTE, "g");
let s_get_htmlEntities = function(str)
{
    return String(str)
        .replace(regexp_HTML_AMP  , "&amp;")
        .replace(regexp_HTML_LT   , "&lt;")
        .replace(regexp_HTML_GT   , "&gt;")
        .replace(regexp_HTML_QUOTE, "&quot;")
    ;

};
/*}}}*/
/*_ strip_html {{{*/
let regexp_EM_O = new RegExp("<em[^>]*>"                , "g");
let regexp_EM_C = new RegExp("</em[^>]*>"               , "g");
let regexp_EOL  = new RegExp("<(ol|ul|/li|/div|br|pre)>", "g");
let regexp_HTML = new RegExp("<[^>]*>"                  , "g");
let regexp_ENTT = new RegExp("&\\w+;"                   , "g");
/*
let regexp_TRUE = new RegExp("=?\\[?true\\]?"           , "g");
let regexp_FALSE= new RegExp("=?\\[?false\\]?"          , "g");
*/
let regexp_LF2  = new RegExp("\\n{2,}"                  , "g");

let LOG_TRUE          = " TRUE_____";
let LOG_FALSE         = " ____false";

let strip_html = function(text)
{
    return text
        .   replace(regexp_EM_O , "["         )
        .   replace(regexp_EM_C , "] "        )
        .   replace(regexp_EOL  , LF          )
        .   replace(regexp_LF2  , LF          )
        .   replace(regexp_HTML , ""          )
        .   replace(regexp_ENTT , SYMBOL_EMPTY)
/*
        .   replace(regexp_TRUE , LOG_TRUE    )
        .   replace(regexp_FALSE, LOG_FALSE   )
*/
        .trim()
    ;
};
/*}}}*/
/*_ bracket_to_em {{{*/
let regexp_BRACKET_O = new RegExp("\\[", "g");
let regexp_BRACKET_C = new RegExp("\\]", "g");
let bracket_to_em = function(text)
{
    return text
        .   replace(regexp_BRACKET_O,  "<em>")
        .   replace(regexp_BRACKET_C, "</em>")
    ;
};
/*}}}*/
/*_ get_first_word {{{*/
let regexp_FIRST_WORD = new RegExp("(\\w+)", "i");
let get_first_word = function(text, caller)
{
/*
    return strip_CR_LF( text.trim() )
        .  replace(regexp_FIRST_WORD, "$1");
    return text;
*/
    regexp_FIRST_WORD.lastIndex = 0;

    let matches = regexp_FIRST_WORD.exec( text );

    let  result = (matches) ? matches[0] : "";

if(LOG_MAX.S1_RANGE) log("get_first_word(text=["+text+"], caller=["+caller+"]): "+ regexp_FIRST_WORD +" .. return ["+result+"]");
    return result;
};
/*}}}*/
/*_ get_tag_hour {{{*/
let regexp_TAG_HOUR = new RegExp(":\\d(\\d)h", "i"); /* [9] .. (170602:19h11) */
let get_tag_hour = function(text)
{

    regexp_TAG_HOUR.lastIndex = 0;

    let matches = regexp_TAG_HOUR.exec( text );

    let  result = (matches) ? matches[1] : "0";

if(LOG_MAP.S1_RANGE) log("get_tag_hour("+ text +"): "+ regexp_TAG_HOUR +" .. return ["+result+"]");
    return result;
};
/*}}}*/

/*_ replace_character_entities {{{*/
let regexp_eacute = new RegExp("\\xE9", "g"); var hex_eacute = String.fromCharCode(0xE9); /* E-ACUTE */
let regexp_egrave = new RegExp("\\xE8", "g"); var hex_egrave = String.fromCharCode(0xE8); /* E-GRAVE */
let replace_character_entities = function(text)
{
    return text
        .   replace(regexp_eacute, hex_eacute)
        .   replace(regexp_egrave, hex_egrave)
    ;
};
/*}}}*/

/*}}}*/

/** LAYOUT */
/*{{{*/
/*_ getRealTop {{{ */
let getRealTop = function(el)
{
    if(el.nodeType == Node.TEXT_NODE) el = el.parentElement;
    let    y = el.offsetTop;
/*
logXXX("___"+get_n_lbl(el)+".offsetTop=["+el.offsetTop+"]")
*/
    while(el = el.offsetParent) {
/*
logXXX("____"+get_n_lbl(el)+".offsetTop=["+el.offsetTop+"]")
*/
        y   += el.offsetTop;
    }
    return y;
};
/*}}}*/
/*_ getRealBot {{{ */
let getRealBot = function(el)
{
    if(el.nodeType == Node.TEXT_NODE) el = el.parentElement;
    return getRealTop(el) + el.offsetHeight;
};
/*}}}*/
/*_ get_page_height {{{ */
let get_page_height = function()
{
/*
logXXX(    "ocument.body")
logXXX(    document.body.scrollHeight)
logXXX(    document.body.clientHeight)
logXXX(    document.body.offsetHeight)
logXXX(    "ocument.body.parentElement")
logXXX(    document.body.parentElement.scrollHeight)
logXXX(    document.body.parentElement.clientHeight)
logXXX(    document.body.parentElement.offsetHeight)
*/

    return document.body.parentElement.scrollHeight; /* HTML */

/*  return document.body.scrollHeight;    /* VIEWABLE+OVERFLOW +PADDING                    -border -scrollbar -margin */
/*  return document.body.clientHeight; */ /* VIEWABLE          +PADDING                    -border -scrollbar -margin */
/*  return document.body.offsetHeight; */ /* VIEWABLE          +PADDING +BORDER +SCROLLBAR                    -margin */
/*
    let body = document.body;
    let html = document.documentElement;
    return Math.max(
          body.clientHeight
        , body.offsetHeight
        , body.scrollHeight
        , html.clientHeight
        , html.offsetHeight
        , html.scrollHeight
    );
*/
};
/*}}}*/
/*}}}*/

/** TOOLS */
/*{{{*/
/*_ send_onchange_event_to {{{ */
let send_onchange_event_to = function(el)
{
    let caller = "send_onchange_event_to("+el.id+")";
    try {
        if("createEvent" in document)
        {
            let evt = document.createEvent("HTMLEvents");
            evt.initEvent("onchange", false, true);
            el.dispatchEvent(evt);
        }
        else {
            el.fireEvent("onchange");
        }
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/

/*_ set_tools_filter {{{ */
let set_tools_filter = function(text)
{
    t_set_tool_id_value("tools_filter", text);
};
/*}}}*/

/*_ sayHello {{{ */
let sayHello = function()
{
    let caller = "sayHello"; log(caller);
    log_clear(caller);
    try       { log_HTML = caller+": OK";            }
    catch(ex) { log      ( caller+": "+ex, "error"); }
    return      log_HTML;
};
/*}}}*/
/*}}}*/

/** LOG */
/*{{{*/
let log_HTML    =  "";
/*_ log_object {{{*/
let log_object = function(o,lXX=lb0)
{
    if(!o) {
        console.log("%c null objec ", lXX);
        return "";
    }
    let tdata = "";
    Object.keys(o).forEach(
        function(key) {
            console.log("%c"+key+"%c=%c"+o[key], lXX,lb0,lb8);
            tdata    += "["+key+"]=["+o[key]+"]";
        }
    );
    return tdata;
};
/*}}}*/
/*_ log {{{ */
let  log_is_full = false;
let LOG_MAX = 50000;
let CLEAR   = "DEFAULT_TO_CLEAR";
let s_log = function(first_arg=CLEAR, ...args)
{
    /* [log_msg] {{{*/
    let log_msg = !first_arg ? CLEAR : first_arg.trim();

    /*}}}*/
/*
console.log("@@@")
console.log("@@@ log_msg=["+log_msg+"]")
for(let i=0; i<args.length; ++i) console.log("@@@ args["+i+"]=["+args[i]+"]");
console.log("@@@")
*/
    /* [log_level] {{{*/
    let log_level
        =   log_is_full              ? "warn"
        : (!log_HTML && args.length) ? args[0]
/*
        : (!log_HTML               ) ? "time"
        : (!log_HTML               ) ? "groupCollapsed"
        : (log_msg == CLEAR        ) ? "timeEnd"
        : (log_msg == CLEAR        ) ? "groupEnd"
*/
        :                              "log"
    ;

    /*}}}*/
/*
console.log("@@@ log_level=["+log_level+"]")
*/
    /* console {{{*/
    if(    (log_msg != CLEAR)
        && ((typeof console) != "undefined")
    ) {
        if(arguments[0]) arguments[0] = strip_html(arguments[0]);
/*
console.log("@@@")
console.log("@@@ arguments[0]=["+arguments[0]+"]")
console.log("@@@")
*/
        switch(log_level) {
            default              : console.log            .apply(console, Array.prototype.slice.call(arguments)); /*console.trace();*/ break;

            case "error"         : console.error          .apply(console, Array.prototype.slice.call(arguments)); break;
            case "warn"          : console.warn           .apply(console, Array.prototype.slice.call(arguments)); break;
            case "info"          : console.info           .apply(console, Array.prototype.slice.call(arguments)); break;

            case "time"          : console.time           .apply(console, "selection"                          ); break;
            case "timeEnd"       : console.timeEnd        .apply(console, "selection"                          ); break;
            case "groupEnd"      : console.groupEnd       .apply(console,                                      ); break;
            case "group"         : console.group          .apply(console, Array.prototype.slice.call(arguments)); break;
            case "groupCollapsed": console.groupCollapsed .apply(console, Array.prototype.slice.call(arguments)); break;

        }
    }
    /*}}}*/
    /* CLEAR [log_is_full] {{{*/
    if(log_msg == CLEAR) {
        if(log_is_full) {
            if((typeof console) != "undefined") console.warn("log_is_full");
            log_is_full = false;
        }
        log_HTML = "";
    }
    /*}}}*/
    /* log_HTML ADD {{{*/
    else {
        log_HTML += LF+ strip_pat(log_msg,"%c\\log_msg*");
    }
    /*}}}*/
    /* log_is_full {{{*/
    if(log_HTML.length > LOG_MAX)
    {
        /* WARN ONCE .. (until next init)*/
        if(!log_is_full ) {
            log_is_full = true;
            if((typeof console) != "undefined") console.error("log_is_full: ...LOG_MAX=["+LOG_MAX+"]");
        }
        return;
    }
    /*}}}*/
/*
:!start explorer "https://developers.google.com/web/tools/chrome-devtools/console/console-reference"
*/
};
var log = s_log; /* (global reference) */
/*}}}*/
/*_ logXXX {{{*/
let logXXX = function()
{
    arguments[0] = "XXX "+arguments[0];
    console.log.apply(console, Array.prototype.slice.call(arguments));
};
/*}}}*/
/*_ log_clear {{{*/
let log_clear = function(caller)
{
    t_clear("log_clear(caller=["+_caller+"])");
};
/*}}}*/
/*_ log set add clr {{{ */
let log_set_TR_count = 0;

let _log_add_TR1       = function(   msg="", ...args) { log_add_TR(log_tr1, msg, ...args); };
let _log_add_TR2       = function(   msg="", ...args) { log_add_TR(log_tr2, msg, ...args); };
let _log_set_TR1       = function(   msg="", ...args) { log_set_TR(log_tr1, msg, ...args); };
let _log_set_TR2       = function(   msg="", ...args) { log_set_TR(log_tr2, msg, ...args); };

let log_clr_TR1        = function(_caller) { /*logXXX("log_clr_TR1 .. CALLED BY "+_caller);*/ _log_set_TR1(""); };
let log_clr_TR2        = function(_caller) { /*logXXX("log_clr_TR2 .. CALLED BY "+_caller);*/ _log_set_TR2(""); };

let log_add_TR_EVENT   = _log_add_TR1;
let log_add_TR_SELECT  = _log_add_TR1;
let log_set_TR_EVENT   = _log_set_TR1;
let log_set_TR_LAYOUT  = _log_set_TR1;
let log_set_TR_SELECT  = _log_set_TR1;

let log_add_TR_LAYOUT  = _log_add_TR2;
let log_add_TR_STORAGE = _log_add_TR2;

/*}}}*/
/*_ log_set_TR_RESULT {{{ */
let log_set_TR_RESULT = function(html=log_HTML)
{
    if(!html.trim()) return;

    _log_set_TR2("<hr><table>"
            +   " <tr><td><pre id='html'>"+ html +"</pre></td></tr>"
            +   "</table>"
    );

    t_sync_layout("log_set_TR_RESULT");

    log_HTML = ""; /* NOTE: log() should be called first to clear results to be reported here */
};
/*}}}*/
/*_ log_set_TR {{{*/
let log_set_TR  = function(tr,msg="", ...args) {
    if(tr) {
        /* removeChild {{{*/
        for(let            i = (tr.childNodes.length-1); i > 0; --i)
        {
            if(                !tr.childNodes[i].classList.contains("push_pin") ) {
                tr.removeChild( tr.childNodes[i] );
                i =             tr.childNodes.length;
            }

        }
        /*}}}*/
        /* transcript decoration and step-stamp {{{*/
        tr.innerHTML = "";
        t_add_push_pin_to_panel(tr);
        t_add_clearpin_to_panel(tr);
        tr.innerHTML += ""
            + "<em class='em_log'>"
            + "<span class='cc"+(++log_set_TR_count % SELECT_SLOT_MAX)+"'>"
            +  log_set_TR_count
            + "</span>"
            + "</em>"
        ;
        /*}}}*/
    }

    if(msg) { del_el_class(tr, "empty"); log_add_TR(tr, msg, args); }
    else    { add_el_class(tr, "empty");                            }

    log();
};
/*}}}*/
/*_ log_add_TR {{{*/
let log_add_TR  = function(tr,msg="", ...args)
{
/*{{{
if(msg) console.log("%c"+strip_html(msg), String(args[0]));
}}}*/
    if(!tr) return;
    if(msg) del_el_class(tr, "empty");
    if(!tr.innerHTML) log_set_TR(tr,"");

    if(msg.trim() == "") msg = "empty msg";

    let s = "<table>";

    /* mStartRange {{{*/
    mStartRange_str = (mStartRange) ? rangeToString(mStartRange, "mStartRange") : "";
    if(mStartRange) s += ""
        +" <tr><th                       >        mStartRange             </th></tr>"
        +" <tr><td                       ><pre>"+ mStartRange_str +"</pre></td></tr>"
    ;

    /*}}}*/
    /* mEndRange {{{*/
    mEndRange_str   = (mEndRange  ) ? rangeToString(mEndRange  , "mEndRange"  ) : "";
    if(mEndRange) s += ""
        +" <tr><th                       >        mEndRange               </th></tr>"
        +" <tr><td                       ><pre>"+ mEndRange_str   +"</pre></td></tr>"
    ;

    /*}}}*/

    if(msg) s += ""
        +" <tr><td class='transcript_msg'>"+                    msg    +"</td></tr>"
        +"</table>"
    ;

    s += "<table>";

    tr.insertAdjacentHTML("beforeend", s);

/* send_onchange_event_to( tr ); */
};
/*}}}*/
/*_ log_layout_TR {{{*/
let log_layout_TR = function(tr)
{
    let x_min =         BOX_MARGIN - tr.offsetWidth ; if(tr.offsetLeft < x_min) tr.style.left = x_min+"px";
    let x_max = window.innerWidth  - BOX_MARGIN     ; if(tr.offsetLeft > x_max) tr.style.left = x_max+"px";

    let y_min =         BOX_MARGIN - tr.offsetHeight; if(tr.offsetTop < y_min) tr.style.top   = y_min+"px";
    let y_max = window.innerHeight - BOX_MARGIN     ; if(tr.offsetTop > y_max) tr.style.top   = y_max+"px";
};
/*}}}*/
/*_ log_sep_top log_sep_bot  {{{*/

const STYLE_TOP = "font-weight:900; border:0px #000 solid; border-radius:2em 2em .1em .1em; padding:  0 1em 1em 2em; overflow:visible;";
const STYLE_BOT = "color:#0FF8;     border:0px #000 solid; border-radius:.1em .1em 2em 2em; padding:1em 1em 0em 2em; overflow:visible;";

const STYLE_BG_TOP=[];
      STYLE_BG_TOP [1] = " background:linear-gradient(to bottom, #964B0080 0%, #2222 100%);";
      STYLE_BG_TOP [2] = " background:linear-gradient(to bottom, #FF000080 0%, #2222 100%);";
      STYLE_BG_TOP [3] = " background:linear-gradient(to bottom, #FFA50080 0%, #2222 100%);";
      STYLE_BG_TOP [4] = " background:linear-gradient(to bottom, #FFFF0080 0%, #2222 100%);";
      STYLE_BG_TOP [5] = " background:linear-gradient(to bottom, #9ACD3280 0%, #2222 100%);";
      STYLE_BG_TOP [6] = " background:linear-gradient(to bottom, #6495ED80 0%, #2222 100%);";
      STYLE_BG_TOP [7] = " background:linear-gradient(to bottom, #EE82EE80 0%, #2222 100%);";
      STYLE_BG_TOP [8] = " background:linear-gradient(to bottom, #A0A0A080 0%, #2222 100%);";
      STYLE_BG_TOP [9] = " background:linear-gradient(to bottom, #FFFFFF80 0%, #2222 100%);";
      STYLE_BG_TOP [0] = " background:linear-gradient(to bottom, #00000080 0%, #2222 100%);";

const STYLE_BG_BOT=[];
      STYLE_BG_BOT [1] = " background:linear-gradient(to    top, #964B0080 0%, #2222 100%);";
      STYLE_BG_BOT [2] = " background:linear-gradient(to    top, #FF000080 0%, #2222 100%);";
      STYLE_BG_BOT [3] = " background:linear-gradient(to    top, #FFA50080 0%, #2222 100%);";
      STYLE_BG_BOT [4] = " background:linear-gradient(to    top, #FFFF0080 0%, #2222 100%);";
      STYLE_BG_BOT [5] = " background:linear-gradient(to    top, #9ACD3280 0%, #2222 100%);";
      STYLE_BG_BOT [6] = " background:linear-gradient(to    top, #6495ED80 0%, #2222 100%);";
      STYLE_BG_BOT [7] = " background:linear-gradient(to    top, #EE82EE80 0%, #2222 100%);";
      STYLE_BG_BOT [8] = " background:linear-gradient(to    top, #A0A0A080 0%, #2222 100%);";
      STYLE_BG_BOT [9] = " background:linear-gradient(to    top, #FFFFFF80 0%, #2222 100%);";
      STYLE_BG_BOT [0] = " background:linear-gradient(to    top, #00000080 0%, #2222 100%);";

let log_sep_num=1;

let log_sep_top = function(arg_line="") { console.log("%c "+strip_html(arg_line), STYLE_TOP + STYLE_BG_TOP[log_sep_num]); };
let log_sep_bot = function(arg_line="") { console.log("%c "+strip_html(arg_line), STYLE_BOT + STYLE_BG_BOT[log_sep_num]); log_sep_num = (log_sep_num+1) % 10; };

/* USAGE: if(LOG_MAP.XXX) log_sep_top("TOP_log_line"); */
/* USAGE: if(LOG_MAP.XXX) log_sep_bot("BOT_log_line"); */

/*}}}*/
/*}}}*/
/*}}}*/
`
 .replace(/\\/g,"\\\\")
)
 .replace(/%u/g,"\\u")
;

/*}}}*/
  /**   5 WORDING JS dom_wording_data {{{*/
/*
../javascript/dom_wording.js
*/
dom_wording_js_data ="data:application/javascript;charset=utf-8,"+ escape(`
/*{{{*/
javascript: (function(){
/*dom_wording 'use strict';*/
DOM_WORDING_JS_ID       = 'dom_wording_js';
DOM_WORDING_JS_TAG      = DOM_WORDING_JS_ID +' (180601:17h)'; let tag = DOM_WORDING_JS_TAG;
let DOM_WORDING_CSS_ID  = 'dom_wording_css';
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
/*}}}*/
/*_ dom_wording_cycle {{{*/
dom_wording_cycle = function(stage='OFF', anchor_freeze=true)
{
    let caller = "dom_wording_cycle(stage=["+stage+"], anchor_freeze=["+anchor_freeze+"])";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log(caller);

    if(!dom_wording_css && !dom_wording_inject()) return;

    dom_wording_css.className
        = (    stage          && (stage  != 'CYCLE')) ?  stage  /* stage set argument */
        : (    dom_wording_css.className == 'DARK' )  ? 'LIGHT' /* stage 1 to stage 2 */
        : (    dom_wording_css.className == 'LIGHT')  ? 'OFF'   /* stage 2 to stage 3 */
        :                                               'DARK'  /* ...back to stage 0 */
        ;

/*
    dom_wording_by_href (anchor_freeze);
*/
    dom_wording_activate(anchor_freeze);

};
/*}}}*/
/*_ dom_wording_activate {{{*/
let dom_wording_activate = function(anchor_freeze)
{
    /*{{{*/
    let caller = "dom_wording_activate(anchor_freeze "+anchor_freeze+")";
let log_this = LOG_MAP.EV5_CB;
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
    let el = css_map.get(key);
    if( el) {
        for(let [k, v] of css_map) {
            v.disabled = (k != key);
if(log_this && !v.disabled) log("PRELOADED WORDING CSS ENABLED: %c "+k+" %c"+ ellipsis(el.href, 64), lbF, lb7);
        }
    }
    else {
        console_warn("*** "+caller+": ["+key+"] NOT FOUND IN PRELOADED [css_map]");
    }
    /*}}}*/
    /* ADD-REMOVE CLICK EVENT LISTENER {{{*/
    if(anchor_freeze) document.body.addEventListener   ('click', dom_wording_capture_click, true);
    else              document.body.removeEventListener('click', dom_wording_capture_click, true);
    /*}}}*/
};
/*}}}*/
/*_ dom_wording_inject {{{*/
let dom_wording_css;
let dom_wording_inject = function()
{
    if(!dom_wording_css) dom_wording_init();
    return dom_wording_css;
};
/*}}}*/
/*_ dom_wording_init {{{*/
let css_map = new Map();

let anchor_on;
let anchor_off;
let wording_on;
let wording_off;
let light_theme;
let dark_theme;

let dom_wording_init = function()
{
let caller = "dom_wording_init";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log(caller+": INSERTING ["+DOM_WORDING_CSS_ID+"]");
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
/*      + ' html     {                margin : 8px                     !important; }'*/
        + ' a, a *   {                cursor : text;                               }'
        + ' a        {                 color : #222                    !important; }'
        + ' a        {      background-color : rgba(128,128,128,0.5)   !important; }'
        + ' .toolbag_button {           cursor : not-allowed;                      }'
        + ' .toolbag_button {            color : #222                  !important; }'
        + ' .toolbag_button { background-color : rgba(128,128,128,0.5) !important; }'
/*      + ' a        {           font-weight : 800                     !important; }'*/
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
        + ' html     {               outline : 8px dotted #4448;                  }'
/*{{{
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
        + ' :not(em) {            background : rgba(238,238,238,0.86) !important; }'
/*
        + ' a        {            background : rgba(221,187,187,0.53) !important; }'
        + ' a, input { text-decoration-color : #0AF                   !important; }'
*/
    ;

    dark_theme
        = ''
        + ' :not(em) {                 color : #CCC                   !important; }'
        + ' :not(em) {            background : rgba(017,017,017,0.86) !important; }'
/*
        + ' a        {            background : rgba(051,000,000,0.53) !important; }'
        + ' a, input { text-decoration-color : #0F0                   !important; }'
*/
    ;

    /*}}}*/
    /* DOM_WORDING_JS_TAG {{{*/
    let         sig = "#"+DOM_WORDING_CSS_ID+" { content: "+DOM_WORDING_JS_TAG+"; } ";
    let          id = DOM_WORDING_CSS_ID;
    let        data = 'data:text/css,'+escape( sig );

    dom_wording_css = dom_wording_inject_css(id, data);
    /*}}}*/
    /* DOM_WORDING CSS PRELOAD .. [W]ord [A]nchor [L]ight [D]ark {{{*/

    id="DWA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +dark_theme  +wording_on  +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="LWA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +light_theme +wording_on  +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="DWa"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +dark_theme  +wording_on  +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="LWa"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +light_theme +wording_on  +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
                                                                        
    id= "wA"; data= 'data:text/css,'+escape("/*_"+id+"_*/"              +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="DwA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +dark_theme  +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id="LwA"; data= 'data:text/css,'+escape("/*_"+id+"_*/" +light_theme +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);
    id= "wa"; data= 'data:text/css,'+escape("/*_"+id+"_*/"              +wording_off +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.set(id, el);

/*{{{
for(let [k, v] of css_map) log(". k=["+k+"] v=["+ellipsis(v, 64)+"]");
}}}*/
    /*}}}*/
};
/*}}}*/
/*_ dom_wording_inject_css {{{*/
let dom_wording_inject_css = function(id, link_or_data)
{
    let el  = document.createElement("link");
    el.id   = id;
    el.rel  = "stylesheet";
    el.type = "text/css";
    el.href = link_or_data;
    document.getElementsByTagName("head")[0].appendChild(el);
    return el;
};
/*}}}*/
/*_ dom_wording_by_href {{{*/
let dom_wording_by_href = function(anchor_freeze)
{
/*
log("dom_wording_by_href(anchor_freeze "+anchor_freeze+")");
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

    if(anchor_freeze) document.body.addEventListener   ('click', dom_wording_capture_click, true);
    else              document.body.removeEventListener('click', dom_wording_capture_click, true);
};
/*}}}*/
/*_ dom_wording_capture_click {{{*/
let dom_wording_capture_click = function(e)
{
    if( e.ctrlKey ) return;

    if( e.stopPropagation          ) e.stopPropagation();           /* stop bubbling phase #3 handlers */
    if( e.stopImmediatePropagation ) e.stopImmediatePropagation();  /* stop   target phase #2 handlers */
    if( e.preventDefault           ) e.preventDefault();            /* i.e. return false from within on<event> attribute handler */
/*
console.log("dom_wording_capture_click");
console.dir(e);
*/
};
/*}}}*/
})();
/*}}}*/
`
 .replace(/(replace.*)\/\r\//g,"$1/\\r/")
 .replace(/(replace.*)\/\n\//g,"$1/\\n/")
 .replace(/(replace.*)\/(\]|\[)/g,"$1/\\$2")
);
/*}}}*/
/**   6 GRID    JS dom_grid_js_data {{{*/
/*
../javascript/dom_grid.js
*/
dom_grid_js_data ="data:application/javascript;charset=utf-8,"+ escape(`
/*{{{*/
/*dom_grid_js "use strict";*/
let DOM_GRID_JS_ID          = 'dom_grid_js';
let DOM_GRID_JS_TAG         = DOM_GRID_JS_ID    +' (180521:18h)';
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
/*}}}*/
/*_ {{{*/
const GRID_CAPTION    = "grid_caption";
const GRID_MARGIN_TOP = 180;

let logging_grid = false; /* FIXME */
/*}}}*/

/* GRID TOOLS */
/*_ t_grid_TOOLS_SELECT {{{ */
let t_grid_TOOLS_SELECT = function(e)
{
    /* GRID_CAPTION {{{*/
    if(e.ctrlKey) return;
let log_this = LOG_MAP.T3_GRID;

    let caller = "t_grid_TOOLS_SELECT";
    let     el = t_get_event_target(e);
    let     caption = el.classList.contains(GRID_CAPTION) ? el : el.parentNode;
if(log_this) log(caller+": el=["+get_n_lbl(el)+"]");
/*
if(log_this) log("...caption..........=["+ get_n_lbl(caption) +"]");
if(log_this) log("...caption........id=["+ caption.id         +"]");
if(log_this) log("...caption.classList=["+ caption.classList  +"]");
*/
    /*}}}*/
    /* CAPTURE EVENT {{{*/
    let actions = "";
    if( e.preventDefault ) { e.preventDefault();        actions += " preventDefault" ; }
    if( e.stopPropagation) { e.stopPropagation();       actions += " stopPropagation"; }
    /*else*/               { e.cancelBubble = true;     actions += " cancelBubble"   ; }
log_this = logging_something();;
if(log_this) log(caller+": ...actions=["+actions+" ]");

    /*}}}*/
    t_grid_TOOLS_SELECT_caption( caption );
};
/* }}} */
/*_ t_grid_TOOLS_SELECT_caption {{{*/
let t_grid_TOOLS_SELECT_caption = function(caption)
{
    /*{{{*/
    let caller = "t_grid_TOOLS_SELECT_caption";
let log_this = LOG_MAP.T3_GRID;
if(log_this) log(caller+": caption=["+get_n_lbl(caption)+"]");
if(log_this) log("...caption.id=["+caption.id+"]");
    /*}}}*/
    /* SELECTING - DESELECTING {{{*/
    for(let [panel, map] of tools_map)
    {
        if(panel == hotspot) continue;
        let caption_id  = panel.id+"_"+GRID_CAPTION;
if(log_this) log("...caption_id=["+caption_id+"]");
        if(caption_id == caption.id) {
            t_grid_TOOLS_SELECT_panel(panel, "toggle");
            t_grid_caption_sync_opacity(map.selected, caption);
            break;
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ t_grid_TOOLS_SELECT_panel {{{*/
let t_grid_TOOLS_SELECT_panel = function(panel,new_state="toggle")
{
    let caller = "t_grid_TOOLS_SELECT_panel("+get_n_lbl(panel)+", "+new_state+")";
let log_this = LOG_MAP.T3_GRID;

if( log_this) log(caller);

    /* check current panel selection state */
    let      map  = tools_map.get(panel);

    if(new_state == "toggle") new_state = !map.selected;

if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb9+lbF);

    /* select or deselect panel */
    if(map.selected != new_state)
    {
        map.selected = new_state;
if(log_this) log("... %c "+(map.selected ? "SELECTING" : "DESELECTING") + ": "+panel.id, lbF+(map.selected ? lb4 : lb1));

        store_key_state(panel.id+".selected", map.selected);

        t_cache_init_by(caller);
    }
};
/*}}}*/

/* GRID SELECT */
/*_ t_grid_caption_layout {{{*/
let t_grid_caption_layout = function(num, panel_id, x, y, el)
{
    /* create or get caption element {{{*/
    let caller = "t_grid_caption_layout(num="+num+", panel_id="+panel_id+", x="+x+", y="+y+", el="+el.panel_id+")";
let log_this = LOG_MAP.T3_GRID;
if( log_this) log(caller);

    let           gl = t_getElement(panel_id+"_"+GRID_CAPTION);
    if(!gl) {
        gl           = document.createElement("EM");
        gl.       id = panel_id+"_"+GRID_CAPTION;
        gl.    title = panel_id;
        gl.className = GRID_CAPTION;

        if     (dom_grid_html) { dom_grid_html.appendChild(gl); if(log_this) log("dom_grid_html: "+caller); }
        else if(shadow_root  ) { shadow_root  .appendChild(gl); if(log_this) log(  "shadow_root: "+caller); }
        else                   { document.body.appendChild(gl); if(log_this) log("document.body: "+caller); }
/*
        add_listener_capture_active(gl, "click", t_grid_TOOLS_SELECT);
*/
    }
    /*}}}*/
    /* show control ID {{{*/
    gl.innerHTML       = num+" <em>"+panel_id+"</em>";
    gl.style.position  = "fixed";
    gl.style.left      = (x      )+"px";

    /*}}}*/
    /* Caption layout {{{*/
    gl.style.top       = (y      )+"px";
    gl.style.maxHeight = grid_sized ? (t_gh-t_mg)+"px" : el.clientHeight+"px";
    gl.style.maxWidth  = grid_sized ? (t_gw-t_mg)+"px" : el.clientWidth +"px";
    gl.style.minHeight = grid_sized ? (t_gh-t_mg)+"px" : el.clientHeight+"px";
    gl.style.minWidth  = grid_sized ? (t_gw-t_mg)+"px" : el.clientWidth +"px";

    /*}}}*/
    return gl;
};
/*}}}*/
/*_ t_grid_caption_hide_all {{{*/
let t_grid_caption_hide_all = function()
{
    let caller = "t_grid_caption_hide_all";
let log_this = LOG_MAP.T3_GRID;
if( log_this) log(caller);

    for(let [panel, map] of tools_map)
    {
        if(panel == hotspot) continue;
        let gl = t_getElement(panel.id+"_"+GRID_CAPTION);
        if(!gl)  continue;
        gl.classList.remove("grid_caption_show");
        gl.classList.add   ("grid_caption_hide");
    }
};
/*}}}*/
/*_ t_grid_caption_sync_opacity {{{*/
let t_grid_caption_sync_opacity = function(selected, gl)
{
    if(selected) gl.classList.add   ("grid_caption_see_through");
    else         gl.classList.remove("grid_caption_see_through");
};
/*}}}*/

/* GRID EVENTS */
/*_ t_grid_onresize {{{*/
const T_GRID_ONRESIZE_DELAY = 500;
let t_grid_onresize_timer   = null;

let t_grid_onresize  = function(caller)
{
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("t_grid_onresize(caller "+caller+")");

    if(t_grid_onresize_timer) clearTimeout(t_grid_onresize_timer);
    t_grid_onresize_timer   = setTimeout  (t_grid_onresize_handle, T_GRID_ONRESIZE_DELAY);
};

let t_grid_onresize_handle = function()
{
    let caller = "t_grid_onresize_handle";

    if( t_grid_IS_ON_GRID(caller) )
        t_grid_MOVE_ON();

    t_grid_onresize_timer = null;

    t_grid_onWork_EL_changed(caller);
};
/*}}}*/
/*_ t_grid_onWork_EL_changed {{{*/
/*{{{*/
const T_GRID_ONWORK_EL_CHANGED_TIMER_DELAY = 500;
let   t_grid_onWork_EL_changed_timer       = null;

/*}}}*/
/*_ t_grid_onWork_EL_changed {{{*/
let t_grid_onWork_EL_changed = function(caller)
{
if(logging_grid) log("t_grid_onWork_EL_changed(caller "+caller+")");
    if(t_grid_onWork_EL_changed_timer) clearTimeout(t_grid_onWork_EL_changed_timer);
    t_grid_onWork_EL_changed_timer   = setTimeout  (t_grid_onWork_EL_changed_handler, T_GRID_ONWORK_EL_CHANGED_TIMER_DELAY);
};
/*}}}*/
/*_ t_grid_onWork_EL_changed_handler {{{*/
let t_grid_onWork_EL_changed_handler = function()
{
    let caller = "t_grid_onWork_EL_changed_handler";
if(logging_grid) log("%c "+caller+": logging_grid=["+logging_grid+"]",lb9+lbF);
    /* GRID LOGGING ON-OFF {{{*/
    if(typeof t_get_onWork_EL_last_used == undefined) return;

    let  el = t_getElement("headsup_l_check"); if(!el) return;

    if(!logging_grid) el.innerHTML="GRID LOGGING IS OFF";

    /*}}}*/
    /* [dom_grid_playground] {{{*/
    let dom_grid_playground = t_getElement("dom_grid_playground");
    if(dom_grid_playground) {
        if(!logging_grid) dom_grid_playground.classList.add   ("collapsed");
        else              dom_grid_playground.classList.remove("collapsed");
    }
    /*}}}*/
    if(!logging_grid) return;
    /* NOT SELECTED {{{*/
    let ol = t_get_onWork_EL_last_used();
    if(!ol) {
        el.innerHTML = "<em>onWork_EL</em> <em class='cc0'>NOT SELECTED</em>";

        return;
    }
    /*}}}*/

    let cw = ol.clientWidth; let ch = ol.clientHeight;
    let ow = ol.offsetWidth; let oh = ol.offsetHeight;
    let sw = ol.scrollWidth; let sh = ol.scrollHeight;

    let t, w, h;
/*
    try {
*/
        let style = getComputedStyle(ol);
        t =          style.transform;
        w = parseInt(style.width );
        h = parseInt(style.height);
/*
    } catch(ex) {
    log(caller+": "+ex.toString());
        t = "";
        w = window.innerWidth;
        h = window.innerHeight;
}
*/

/*
    let mU = ol.style.marginTop;
    let mR = ol.style.marginRight;
    let mD = ol.style.marginBottom;
    let mL = ol.style.marginLeft;
console.dir(ol);
console.dir(style);
*/
    let info
        = " transform    <em class='cc7'>"+ t                      +"</em> "
        + " computed WxH <em class='cc8'>"+ w+" x "+h              +"</em> "
        + " page height  <em class='cc7'>"+ get_page_height()      +"</em> "
/*
        + " margin [URDL]<em class='cc9'>"+ mU+" "+mR+" "+mD+" "+mL+"</em> "
*/
        ;

    el.innerHTML
        = "<table style='border-spacing:1em;'>"
        + " <tr><th class='cc9' style='font-size:200%; font-weight:900;'>"+get_n_lbl(ol)+"</th> <td colspan='4'>"+info+"</td> </tr>"
        + " <tr><th>Offset</th> <td class='cc6'>"+ow  +"</td> <td>x</td> <td class='cc3'>"+oh+"</td> <td><span class='cc1'>+VIEWABLE</span> <span class='cc3'>+PADDING</span> <span class='cc4'>+BORDER</span> <span class='cc5'>+SCROLLBAR</span> <span class='ccA'>-margin</span><td></tr>"
        + " <tr><th>Client</th> <td class='cc7'>"+cw  +"</td> <td>x</td> <td class='cc4'>"+ch+"</td> <td><span class='cc1'>+VIEWABLE</span> <span class='cc3'>+PADDING</span> <span class='ccA'>-border</span> <span class='ccA'>-scrollbar</span> <span class='ccA'>-margin</span><td></tr>"
        + " <tr><th>Scroll</th> <td class='cc8'>"+sw  +"</td> <td>x</td> <td class='cc5'>"+sh+"</td> <td><span class='cc2'>+OVERFLOW</span> <span class='cc3'>+PADDING</span> <span class='ccA'>-border</span> <span class='ccA'>-scrollbar</span> <span class='ccA'>-margin</span><td></tr>"
        + "</table>"
    ;

};
/*}}}*/
/*}}}*/
/*_ t_grid_ON_OFF_CB {{{*/
let t_grid_ON_CB     = function() { t_grid_ON_OFF_CB( true); };
let t_grid_OFF_CB    = function() { t_grid_ON_OFF_CB(false); };
let t_grid_ON_OFF_CB = function(new_state)
{
    let caller = "t_grid_ON_OFF_CB("+new_state+")";

let log_this = LOG_MAP.T3_GRID;

    if(has_moved) return;

    if(new_state == "toggle") new_state = !t_grid_IS_ON_GRID(caller);
if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb9+lbF);

    if( new_state ) { if(typeof dimm_start != undefined) dimm_start(caller); }
    else            { if(typeof dimm_stop  != undefined) dimm_stop (caller); }

    if( new_state )   t_tools_save_TOOLS_GEOMETRY();

    if( new_state ) { t_grid_SIZE_ON (); t_grid_MOVE_ON (); }
    else            { t_grid_SIZE_OFF(); t_grid_MOVE_OFF(); }

    call_t_grid_observers(new_state);

};
/*}}}*/
/*_ t_grid_add_observer_callback {{{*/

let t_grid_observer_callbacks = [];

let t_grid_add_observer_callback = function(observer)
{
if(logging_grid) console_log("t_grid_add_observer_callback("+(t_grid_observer_callbacks.length+1)+")");

    if(!t_grid_observer_callbacks.includes( observer ))
        t_grid_observer_callbacks.push    ( observer );
};

let call_t_grid_observers = function(state)
{
if(logging_grid) console_log("call_t_grid_observers("+state+")");

    for(i=0; i < t_grid_observer_callbacks.length; ++i)
        t_grid_observer_callbacks[i]( state );
};
/*}}}*/
/*_ t_grid_sized_sync {{{*/
let t_grid_sized_sync = function(caller)
{
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("%c t_grid_sized_sync: CALLED BY ["+caller+"] .. grid_sized=["+grid_sized+"]", lb3);

    let n;
    for(let [panel, map] of tools_map)
    {
        if(panel == hotspot) continue;
        el = panel;
        if(!el) continue;
/*
log("..."+get_n_lbl(el)+": WH"
    +"  style=["+el.style.width+" x "+el.style.height+"]"
    +" client=["+el.clientWidth+" x "+el.clientHeight+"]"
    +" offset=["+el.offsetWidth+" x "+el.offsetHeight+"]"
    +" scroll=["+el.scrollWidth+" x "+el.scrollHeight+"]"
    +"  xy_wh=["+    map.w+" x "+     map.h+"]"
);
*/
/*
console.dir(el);
*/
        el.style.maxHeight = grid_sized ? (t_gh-t_mg)+"px" : "";
        el.style.maxWidth  = grid_sized ? (t_gw-t_mg)+"px" : "";
        el.style.minHeight = grid_sized ? (t_gh-t_mg)+"px" : "";
        el.style.minWidth  = grid_sized ? (t_gw-t_mg)+"px" : "";
/*
*/
        /* clientWidth offsetWidth scrollWidth */
/*
        let scaleX  = grid_sized ? Math.min(t_gw/el.offsetWidth, t_gh/el.offsetHeight) : 1;
        let scaleY  = scaleX;
*/
/*
        let scaleY = grid_sized ?                              t_gh/el.offsetHeight  : 1;
        let scaleX = grid_sized ?          t_gw/el.offsetWidth                       : 1;

        let scaleY = grid_sized ?                              t_gh/map.h     : 1;
        let scaleX = grid_sized ?          t_gw/map.w                         : 1;
*/
/*
        let scaleY = grid_sized ?                              t_gh/panel.offsetHeight : 1;
        let scaleX = grid_sized ?          t_gw/panel.offsetWidth                      : 1;
        el.style.transform = "scale("+scaleX+","+scaleY+")";
log("el=["+get_n_lbl(el)+"].style.transform=["+el.style.transform+"]");
*/
/*
     if(grid_sized) el.style.animation = "on_grid_enter 200ms "+n+"00ms ease-out forwards";
     else           el.style.animation = "on_grid_leave 200ms "+n+"00ms ease-out forwards";
*/

    }
};
/*}}}*/

/* GRID SIZE */
/*_ t_grid_SIZE_TOGGLE {{{*/
let   grid_sized     = false;

let t_grid_SIZE_TOGGLE = function(e)
{
    let caller = "t_grid_SIZE_TOGGLE("+get_n_lbl(e.target)+")";
if(logging_grid) console_log(caller);

    if(!tools_map.size) return;

    /* GRID GEOMETRY */
    t_grid_MEASURE();

    /* TOOLS TOGGLE ON OR OFF GRID GEOMETRY */
    if(grid_sized ) t_grid_SIZE_OFF();
    else            t_grid_SIZE_ON ();

    /* TOOLS TOGGLE ON OR OFF GRID LOCATION */
    let           el = tools_map.keys().next().value; /* MAP ITERATOR FIRST VALUE */
    if( el.classList.contains("on_grid")) t_grid_MOVE_ON();
    else                                  t_grid_sized_sync("t_grid_SIZE_TOGGLE");

};
/*}}}*/
/*_ t_grid_IS_SIZED {{{*/
let t_grid_IS_SIZED = function(caller)
{
if(logging_grid) console_log("t_grid_IS_SIZED: ...return "+grid_sized+" .. caller=["+caller+"]");

    return grid_sized;
};
/*}}}*/
/*_ t_grid_IS_ON_GRID {{{*/
let t_grid_IS_ON_GRID = function(caller)
{
let log_this = LOG_MAP.T3_GRID;

    if(!tools_map.size) t_tools_TOC("t_grid_IS_ON_GRID");

    let first_tool = deployable_tools[1];
    let   result = (first_tool)
        ?           first_tool.classList.contains("on_grid")
        :           false;

if(log_this) log("t_grid_IS_ON_GRID: ...return "+result+" .. %c CALLED BY ["+caller+"]", lb0);
    return result;
};
/*}}}*/
/*_ t_grid_SIZE_[ON/OFF/SET] {{{*/
const GRID_SIZED      = "GRID SIZED";
let t_grid_SIZE_ON    = function() { t_grid_SIZE_STATE(true ); };
let t_grid_SIZE_OFF   = function() { t_grid_SIZE_STATE(false); };
let t_grid_SIZE_STATE = function(state)
{
    let caller = "t_grid_SIZE_STATE("+state+")";
if(logging_grid) log("%c "+caller,lb5+lbF);

    let          checkbox         = t_getElement("headsup_l_size_checkbox");
    if(checkbox) checkbox.checked = state;

    grid_sized = state;

    t_grid_onWork_EL_changed(caller);

    /* TOOLS MAY SHOW DIMMER MASK (when grid_sized) */
};
/*}}}*/

/* GRID LAYOUT */
/*_ t_grid_MOVE_OFF {{{*/
let t_grid_MOVE_OFF = function()
{
    let caller = "t_grid_MOVE_OFF";
if(logging_grid) log("%c "+caller,lb9+lbF);

    if(!tools_map  ) return;

    let n = 1;
    for(let [panel, map] of tools_map)
    {
        if(panel == hotspot) continue;
        let el = panel;
        if(!el) continue;

        /* remove grid class */
        el.classList.remove("on_grid");
        if(!map.selected)
            el.classList.add("hidden");
/*
        el.classList.remove("eso_div");
*/
        el.classList.remove("select"+n);

        /* restore top-level saved position */
        if(t_tools_loaded && is_a_tool_container(el))
        {
            if(el != hotspot) {
                el.style.position = map.p     ;
                el.style.left     = map.x+"px";
                el.style.top      = map.y+"px";
            }
        }
        else {
            el.style.position = "initial";
/*
            el.style.left     = "initial";
            el.style.top      = "initial";
*/
        }

        n += 1;
    }
    /* restore size */
    t_grid_sized_sync(caller);

    /* hide grid caption */
    t_grid_caption_hide_all();

};
/*}}}*/
/*_ t_grid_MOVE_ON {{{*/
let t_grid_MOVE_ON = function()
{
    let caller  = "t_grid_MOVE_ON";
let log_this = LOG_MAP.T3_GRID;
if(log_this) log("%c "+caller,lb9+lbF);

    /* UPDATE GRID LAYOUT {{{*/
    let on_grid = t_grid_IS_ON_GRID(caller);
    t_grid_MEASURE();

    /*}}}*/

if(log_this && !on_grid) log("%c SAVING TOOLS POSITIONS",lb9);

    let   x = t_mw;
    let   y = t_mh;
    let num = 1;
    for(let [panel, map] of tools_map)
    {
        if(panel == hotspot) continue;
        let el = panel;
        if(!el) continue;

/*if(log_this) console_log(num+" [xy_wh]=["+x+" "+y+"] ["+t_gw+"x"+t_gh+"] ["+el.id+"]");*/

        /* set on grid */
        if(!on_grid ) {
            el.style.position = "fixed";
            el.classList.remove("hidden");
            el.classList.add   ("on_grid");
            el.classList.add   ("cc"+num);
        }

        /* grid position */
        el.style.zIndex   = 0;
        el.style.left     = x+"px";
        el.style.top      = y+"px";

        /* grid caption show */
        let gl = t_grid_caption_layout(num, panel.id, x, y, el);
        gl.classList.remove("grid_caption_hide");
        gl.classList.add   ("grid_caption_show");

        /* grid caption opacity .. f(selected) */
        t_grid_caption_sync_opacity(map.selected, gl);

        /* next cell */
/*if(log_this && ((num % t_rows)==0)) console_log("---");*/
/*
    let dx = Math.max(el.clientWidth , t_gw);
*/
        let dx =                           t_gw ;
        x      = (num % t_cols) ? x + dx :     t_mw;
        y      = (num % t_rows) ? y      : y + t_gh;

        num += 1;
    }

    /* grid size */
    t_grid_sized_sync(caller);

    /* repeat once */
    /*if(!t_grid_onresize_timer) t_grid_onresize(caller+"[repeat once]");*/
};
/*}}}*/

/* GRID MEASURE */
/*_ t_grid_MEASURE {{{*/

let t_rows = 0;
let t_cols = 0;
let t_gw   = 0;
let t_gh   = 0;
let t_mw   = 0;
let t_mh   = 0;
let t_mg   = 0;

let t_grid_MEASURE = function()
{
    let caller = "t_grid_MEASURE"; if(logging_grid) console_log(caller);
    /* t_rows t_cols {{{*/

    if(!tools_map.size) t_tools_TOC(caller);

    t_cols  = Math.round(Math.sqrt(tools_map  .size  ));

    if((t_cols*t_cols) < tools_map  .size  ) t_cols += 1;

    t_rows  = t_cols;

    /*}}}*/
    /* grid {{{*/
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    let  cw = Math.round(ww / (t_cols+1));
    let  ch = Math.round(wh / (t_rows+1));
    if((cw == t_gw) && (ch == t_gh)) {
if(logging_grid) console_warn(caller+": GRID UNCHANGED");
        return;
    }

    t_gw =            cw;
    t_gh =            ch;
    t_mw = Math.round(cw/2);
    t_mh = Math.round(ch/2);
    t_mg = Math.round(ch/8);

if(logging_grid && t_grid_IS_ON_GRID(caller)) console_log(" ("+t_mw+"+ "+t_cols+"x"+t_gw+" + "+t_mw+") == "+(t_mw + t_cols*t_gw +t_mw)+" == ww= "+ww+"");
if(logging_grid && t_grid_IS_ON_GRID(caller)) console_log(" ("+t_mh+"+ "+t_rows+"x"+t_gh+" + "+t_mh+") == "+(t_mh + t_rows*t_gh +t_mh)+" == wh= "+wh+"");
    /*}}}*/
    /* headsup_l_table {{{*/

    let msg = "<table>"
            + " <tr> <td>("+t_mw+"</td><td>+</td> <th>"+t_cols+"x<em class='cc0'>"+t_gw+"</em></th> <td>+</td> <td>"+t_mw+")</td> <td>==</td> <th class='cc4'>"+(t_mw + t_cols*t_gw +t_mw)+"</th> <td>==</td> <th class='cc5'>ww= "+ww+"</th></tr>"
            + " <tr> <td>("+t_mh+"</td><td>+</td> <th>"+t_rows+"x<em class='cc0'>"+t_gh+"</em></th> <td>+</td> <td>"+t_mh+")</td> <td>==</td> <th class='cc4'>"+(t_mh + t_rows*t_gh +t_mh)+"</th> <td>==</td> <th class='cc5'>wh= "+wh+"</th></tr>"
            + "</table>"
        ;
if(logging_grid) log(msg);
    let el = t_getElement("headsup_l_table");
    if(el) el.innerHTML = msg;

    /*}}}*/
};
/*}}}*/

/* GRID CSS RULES */
/*_ t_grid_css_list {{{*/
let t_grid_css_list = function()
{
    let caller = "t_grid_css_list"; if(logging_grid) console_log(caller);
    /* traces open {{{*/
    let s = "<div>";
    s    += " document.styleSheets.length=["+document.styleSheets.length+"]";
    s    += " <ol>";

    /*}}}*/
    /* styleSheets {{{*/
    for(let i = 0; i < document.styleSheets.length; ++i)
    {
        let sheet    =  document.styleSheets[i];
        s           += "  <li>";
        s           += "   <ul>";
        /* title {{{*/
        if(sheet.title)
            s       += "    <li> title=["+                          sheet.title             +    "]</li>";

        /*}}}*/
        /* id {{{*/
        if(sheet.ownerNode.id) {
            s       += "    <li> OWNER=<em class='cc"+(i+1)+"'>"+   sheet.ownerNode.id      +    "</em></li>";
        }
        else {
            s       += "    <li> OWNER=<em class='cc"+(i+1)+"'>"+  sheet.ownerNode.tagName +    "</em></li>";
            if(sheet.href)
                s   += "    <li> href=[<a href='"+sheet.href+"'>"+  sheet.href              +    "</a>]</li>";
        }

        /*}}}*/
        /* type {{{*/
        if(sheet.type != "text/css")
            s       += "    <li> type=["+                           sheet.type              +    "]</li>";

        /*}}}*/
        /* disabled {{{*/
        if(sheet.disabled)
            s       += "    <li> disabled=["+                       sheet.disabled          +    "]</li>";

        /*}}}*/
        /* cssRules {{{*/
        try {
            if(sheet.cssRules) {
                s       += "<li>cssRules.length=["+                     sheet.cssRules.length   +    "]";
                s       += " <ol>";

                for(let j = 0; j < sheet.cssRules.length; ++j)
                    s   += " <li><em class='cc"+((j+1) % 10)+"'>"+sheet.cssRules[j].cssText +"</em></li>";

                s       += " </ol>";
                s       += "</li>";
            }
        } catch(ex) {
            s       += "<li style='font-size:50%; color:#AAA;'>"+ex.message+"</li>";
        }
        /*}}}*/
        s           += "   </ul>";
        s           += "  </li>";
    }
    /*}}}*/
    /* traces close {{{*/
    s += " </ol>";
    s += "</div>";

    /*}}}*/
    t_grid_trace(s);
};
/*}}}*/
/*_ t_grid_insertRules {{{*/
let t_grid_insertRules = function()
{
    let caller = "t_grid_insertRules";
if(logging_grid) console_log(caller);

    if( t_grid_css ) t_grid_deleteRules();

    t_grid_get_t_grid_css();

    let s = caller+":<br>";

    if(!t_grid_css) {
        s += caller+": <em class='cc2'>FOUND NO t_grid_css styleSheet</em>";
    }
    else {

        s    += "<div>";
        s    += " <ol>";
        let count = 0;
        let r;
        r    = ".on_grid { min-width  : "+t_gw+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; t_grid_css.insertRule(r, 0); count += 1;
        r    = ".on_grid { min-height : "+t_gh+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; t_grid_css.insertRule(r, 0); count += 1;
        r    = ".on_grid { max-width  : "+t_gw+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; t_grid_css.insertRule(r, 0); count += 1;
        r    = ".on_grid { max-height : "+t_gh+"px; }"; s += "  <li>insertRule <em class='cc0'>"+r+"</em></li>"; t_grid_css.insertRule(r, 0); count += 1;
        s    += " </ol>";
        s    += "</div>";

        if(count > 0) {
            s +=  "<em class='cc"+(count % 10)+"'>"+count+" RULES INSERTED</em><br>";
        }
    }

    t_grid_trace_add(s);

if(logging_grid) console_log(caller+":");
if(logging_grid) console_dir(t_grid_css);
};
/*}}}*/
/*_ t_grid_deleteRules {{{*/
let t_grid_deleteRules = function()
{
    let caller = "t_grid_deleteRules"; if(logging_grid) console_log(caller);

    let        s  = "";
/*
               s += caller+":<br>";
               s += "t_grid_css.........=["+t_grid_css          +"]<br>";
if(t_grid_css) s += "t_grid_css.cssRules=["+t_grid_css.cssRules +"]<br>";
*/
    if(!t_grid_css || !t_grid_css.cssRules)
    {
        s += "<em class='cc2'>NO t_grid_css rules to delete</em><br>";
    }
    else {
        let count = 0;
        /* rules */
        s += "<div>";
        s += " <ol>";
        for(let i = 0; i < t_grid_css.cssRules.length; ++i)
        {
            if(t_grid_css.cssRules[i].cssText.includes(".on_grid") )
            {
                s += " <li><em class='cc0'>"+ t_grid_css.cssRules[i].cssText +"</em></li>";
                t_grid_css.deleteRule(i);
                count += 1;
                i -= 1;
            }
        }
        s += " </ol>";
        s += "</div>";

        if(count > 0) {
            s = caller+": <em class='cc"+(count % 10)+"'>"+count+" RULES DELETED</em><br>"
              + s;
        }
    }
    t_grid_trace(s);
};
/*}}}*/
/*_ t_grid_get_t_grid_css {{{*/
const T_GRID_CSS_ID = "t_grid_css";

let t_grid_css;

let t_grid_get_t_grid_css = function()
{
    if(t_grid_css) return;

    let caller = "t_grid_get_t_grid_css";
if(logging_grid) console_log(caller);

    let s = caller+": CREATING <em>"+T_GRID_CSS_ID+"</em><br>";
    let el   = document.createElement("STYLE");
    el.id    = T_GRID_CSS_ID;
    el.title = T_GRID_CSS_ID;
    el.type  = "text/css";
    el.rel   = "stylesheet";

    document.getElementsByTagName('head')[0].appendChild(el);
    t_grid_css = el.sheet;

    t_grid_trace(s);
if(logging_grid) console_dir(t_grid_css);
};
/*}}}*/

/* GRID LOG */
/*_ t_grid_logging_toggle {{{*/
let t_grid_logging_toggle = function()
{
    let caller = "t_grid_logging_toggle";
    logging_grid = !logging_grid;
    log("%c "+caller+": logging_grid set to "+logging_grid, lb7+lbF);

    t_grid_onWork_EL_changed(caller);
};
/*}}}*/
/*_ t_grid_trace {{{*/
let t_grid_trace = function(s)
{
    let el;
    if( el = t_getElement("traces") ) el.innerHTML = s;
    else                            console_log( strip_html(s) );
};
/*}}}*/
/*_ t_grid_trace_add {{{*/
let t_grid_trace_add = function(s)
{
    let el;
    if( el = t_getElement("traces") ) el.innerHTML += s;
    else                            console_log( strip_html(s) );
};
/*}}}*/
/*_ t_getElement {{{*/
let t_getElement = function(id)
{
/*if(logging_grid) log("t_getElement("+id+")");*/
    let el = null;
try {
    if(shadow_root) el = shadow_root.querySelector("#"+id);
} catch(ex) {}
    if(!el)         el = document.getElementById  (    id);
    return el;
};
/*}}}*/
/*
console_log(DOM_GRID_JS_ID+": ...ready");
*/
/*}}}*/
`
)
 .replace(/%u/g,"\\u")
;
/*}}}*/
  /**   7 TOOLS HTML dom_tools_html_data {{{*/
/*
../javascript/dom_tools.html
*/
dom_tools_html_data = escape(`
<!--{{{-->
<!DOCTYPE html>
<head><title>dom_tools_html</title></head>
 <span id = "dom_tools_html_tag" style="display:none">dom_tools_html (180601:15h)</span>

 <div  id = "seeker_PU"    title="seeker_PU"       class="seeker_P"     ><div id="seeker_CU" >seeker up    </div></div>
 <div  id = "seeker_PD"    title="seeker_PD"       class="seeker_P"     ><div id="seeker_CD" >seeker_thumbs</div></div>

 <div id = "seekspot_U"></div>
 <div  id = "seekspot"     title="seekspot"        class="hotspot_frame">
  <div id = "seekspot_arrow"  >&#x2191;</div>
 </div>
 <div id = "seekspot_D"></div>

 <!--       HOTSPOT {{{-->
 <div   id="hotspot"       title="hotspot"         class="hotspot_frame">
  <div  id="hotwave"                               class="hotwave">
   <div id="hotring"                               class="hotring">&nbsp;</div>
  </div>
  <div id="hotspot_c">&#x00BB;</div>
 </div>
 <!--}}}-->
 <!--       pivspot {{{-->
 <div   id="pivspot"       title="pivspot"         class="hidden">
   <div id="pivspot_c">&#x00BB;</div>
 </div>
 <!--}}}-->

 <!-- pat_bag {{{ -->
  <div id="pat_bag"        title="PAT BAG"        class="transcript hidden bag"></div>
 <!-- }}} -->
 <!-- sel_bag {{{ -->
  <div id="sel_bag"        title="sel_bag"        class="transcript hidden bag"><span class="seeker_handle"></span></div>
 <!-- }}} -->

 <!-- headsup {{{ -->
 <div id="headsup"         title="headsup"         class="transcript hidden">
  <!-- thumb_p {{{-->
  <em id="thumb_p"         title="thumb_p">&#x0020;</em>

  <!--}}}-->
  <!-- wording {{{ -->
  <em id="wording"         title="wording"         class="toolbag_button cc3" onclick='toggle_event(event);' >WORDING</em>
  <em id="theme_dark"      title="theme_dark"      class="toolbag_button cc8" onclick='toggle_event(event);' >LIGHT</em>
  <!-- }}} -->
  <!-- anchor_freeze {{{ -->
  <em id="anchor_freeze"   title="anchor_freeze"   class="toolbag_button cc9" onclick='toggle_event(event);'>&#x26D4;</em>
  <!-- }}} -->
  <!-- containers_hi {{{ -->
  <em id="containers_hi"   title="containers_hi"   class="toolbag_button cc9" onclick='toggle_event(event);'>&#x00A7;</em>
  <!-- }}} -->
  <!-- scroll_smooth  {{{ -->
  <em id="scroll_smooth"   title="scroll_smooth"   class="toolbag_button cc9" onclick='toggle_event(event);'>&nbsp;</em>
  <!-- }}} -->
  <!-- overflow_visi  {{{ -->
  <em id="overflow_visi"   title="overflow_visi"   class="toolbag_button cc9" onclick='toggle_event(event);'>&nbsp;</em>
  <!-- }}} -->
  <!-- tools_extras {{{ -->
  <em id="tools_extras"    title="tools_extras"    class="toolbag_button cc9" onclick='toggle_event(event);'>&#x2630;</em>

  <!-- }}} -->
 </div>
 <!-- }}} -->
 <!-- headsup_w {{{ -->
 <div id="headsup_w"       title="headsup_w"       class="transcript hidden"
                                                   onkeyup    ='t_filter_CB(event);'
  >
  <!-- tools_filter - reset {{{ -->
  <input id="tools_filter" title="tools_filter"    onchange   ='t_filter_CB(event);' type="text"/>

  <em id="reset"           title="reset"           class="toolbag_button"     onclick='t_headsup_CB(event);'    >&#x267B;</em>
  <!-- }}} -->
  <em id="words_exact"     title="words_exact"     class="toolbag_button cc3" onclick='toggle_event(event);'>&#x2261;</em>
  <em id="words_segment"   title="words_segment"   class="toolbag_button cc4" onclick='toggle_event(event);'>&#x2282;</em>
  <em id="words_head_tail" title="words_head_tail" class="toolbag_button cc5" onclick='toggle_event(event);'>&#x2208;</em>
  <em id="words_opcycle"   title="words_opcycle"   class="toolbag_button cc9" onclick='toggle_event(event);'>&#x27F3;</em>
 </div>
 <!-- }}} -->
 <!-- headsup_ds {{{ -->
 <div id="headsup_ds"      title="headsup_ds"      class="transcript hidden">
  <em id="tools_drag"      title="tools_drag"      class="toolbag_button"     onclick='toggle_event(event);'>&#x00BB;</em>
  <em id="tools_scroll"    title="tools_scroll"    class="toolbag_button"     onclick='toggle_event(event);'>&#x2693;</em>
 </div>
 <!-- }}} -->
 <!-- headsup_bw {{{ -->
 <div id="headsup_bw"      title="headsup_bw"       class="transcript hidden" onclick='t_body_layout_CB(event);'>
  <em id="headsup_bw_value"    class='cc10'>BODY WIDTH</em><br>
  <em class='cc1'> 480</em><em class='cc2'> 640</em><em class='cc3'> 780</em><br>
  <em class='cc4'> 960</em><em class='cc5'>1024</em><em class='cc6'>1200</em><br>
  <em class='cc7'>1440</em><em class='cc8'>1600</em><em class='cc9'>1980</em><br>
 </div>
 <!-- }}} -->
 <!-- headsup_bz {{{ -->
 <div id="headsup_bz"      title="headsup_bz"       class="transcript hidden" onclick='t_body_zoom_CB(event);'>
  <em id="headsup_bz_value"     class='cc10'>BODY ZOOM</em><br>
  <em class='cc1'>  70%</em><em class='cc2' >  80%</em><em class='cc3'>  90%</em><br>
  <em class='cc1'> 100%</em><em class='cc2' > 110%</em><em class='cc3'> 120%</em><br>
  <em class='cc1'> 130%</em><em class='cc2' > 150%</em><em class='cc3'> 160%</em><br>
  <em class='cc1'> 180%</em><em class='cc2' > 200%</em><em class='cc3'> 220%</em><br>
 </div>
 <!-- }}} -->

 <!-- dom_traversal {{{ -->
 <div id="dom_traversal"   title="dom_traversal"   class="transcript hidden"
                                                   onclick    ='t_dom_traversal_CB(event);'
                                                   onchange   ='t_dom_traversal_CB(event);'
                                                   onkeyup    ='t_filter_CB       (event);'
                                                 >
                                                 <!-- NodeIterator TreeWalker childNodes tagNodes {{{ -->
  <em class = "toolbag_button cc5">NodeIterator</em>
  <em class = "toolbag_button cc6">TreeWalker</em>
  <em class = "toolbag_button cc7">childNodes</em>
  <em class = "toolbag_button cc7">tagNodes</em>
  <!-- }}} -->
  <!-- tools_node {{{ -->
  <table>
   <tr>
    <th>node</th>
    <td>
     <input id="tools_node" title="tools_node"     type="text"
                                                   onchange   ='t_filter_CB       (event);'
                                                />
     <span class="cc2">html</span>
     <span class="cc3">head</span>
     <span class="cc4">body</span>
    </td>
   </tr>
  </table>
  <!-- }}} -->
 </div>
 <!-- }}} -->
 <!-- dev_log_map {{{ -->
 <div id="dev_log_map"     title="dev_log_map"     class="transcript hidden"
                                 onclick='dom_logging_CB(event);'>
                                 dev_log_map placeholder:<br />
                                 <i class="todo">..should have been populated by <em>dom_tools.sync_logging</em> with the value of logging</i>
 </div>
 <!-- }}} -->
 <!-- dev_log_calls: RELOAD CLEAR t_log_regex t_log_behavior - (onclick would not care for has_moved) {{{ -->
 <div id="dev_log_calls"                           class="transcript hidden"
                                 onclick='t_onclick(event);'>
  <em id="RELOAD"          title="RELOAD"         class="toolbag_button cc7"> RELOAD   </em>
  <em id="CLEAR"           title="CLEAR"          class="toolbag_button"    > CLEAR    </em>
  <em id="REGEX"           title="REGEX"          class="toolbag_button"    > REGEX    </em>
  <em id="BEHAVIOR"        title="BEHAVIOR"       class="toolbag_button"    > BEHAVIOR </em>
 </div>
 <!-- }}} -->
 <!-- dom_load_tags (placeholder) {{{ -->
 <div id="dom_load_tags"                           class="transcript hidden">
  dom_load_tags placeholder:<br />
  <i class="todo">...should have been populated by <em>dom_tools.show_tags</em> with the value of DOM_LOAD_TAG</i>

 </div>
 <!-- }}} -->

 <!-- transcript1 {{{ -->
 <div id="transcript1"     title="transcript1"  class="transcript hidden cleardiv"></div>
 <!-- }}} -->
 <!-- transcript2 {{{ -->
 <div id="transcript2"     title="transcript2"  class="transcript hidden cleardiv"></div>
 <!-- }}} -->
 <!-- fly_div {{{ -->
 <div id="fly_div"         title="fly_div"  class="pinned hidden"></div>
 <!-- }}} -->

<!--}}}-->
`
);
/*}}}*/
/** 8 TOOLS   JS dom_tools_js_data {{{*/
/*
../javascript/dom_tools.js
*/
dom_tools_js_data ="data:application/javascript;charset=utf-8,"+ escape(`
/*{{{*/
/*dom_tools_js "use strict";*/
let DOM_TOOLS_JS_ID         = "dom_tools_js"; let DOM_TOOLS_JS_TAG        = DOM_TOOLS_JS_ID   +" (180609:23h)";
let DOM_HOST_CSS_ID         = "dom_host_css";
let DOM_TOOLS_CSS_ID        = "dom_tools_css";
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      BACKSLASH     = String.fromCharCode(92);
      FORESLASH     = String.fromCharCode(47);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
/*}}}*/
/* ECC {{{*/

const lbA  = "background-color:inherit;   color:inherit;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
const lbB  = "font-size:500%; font-weight:900; margin:0 0 0 0;";
const lbb  = "font-size:150%; font-weight:900; margin:0 0 0 0;";

const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
const lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
const lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
const lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

const lb1  = "background-color:#964B00; color:black;";
const lb2  = "background-color:#FF0000; color:black;";
const lb3  = "background-color:#FFA500; color:black;";
const lb4  = "background-color:#FFFF00; color:black;";
const lb5  = "background-color:#9ACD32; color:black;";
const lb6  = "background-color:#6495ED; color:black;";
const lb7  = "background-color:#EE82EE; color:black;";
const lb8  = "background-color:#A0A0A0; color:black;";
const lb9  = "background-color:#FFFFFF; color:black;";
const lb0  = "background-color:#000000; color:gray;";
const lbX = [ lb0 ,lb1 ,lb2 ,lb3 ,lb4 ,lb5 ,lb6 ,lb7 ,lb8 ,lb9 ];

const lf1  = "color:#964B00;";
const lf2  = "color:#FF0000;";
const lf3  = "color:#FFA500;";
const lf4  = "color:#FFFF00;";
const lf5  = "color:#9ACD32;";
const lf6  = "color:#6495ED;";
const lf7  = "color:#EE82EE;";
const lf8  = "color:#A0A0A0;";
const lf9  = "color:#FFFFFF;";
const lf0  = "color:#000000;";
const lfX = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];

/*}}}*/
/* SYM {{{*/

let SAU = "\u2191"; /* &#x2191; .. SYMBOL ARROW UP       */
let SAR = "\u2192"; /* &#x2192; .. SYMBOL ARROW RIGHT    */
let SAD = "\u2193"; /* &#x2193; .. SYMBOL ARROW DOWN     */
let SAL = "\u21AA"; /* &#x21AA; .. SYMBOL ARROW LEFT     */

let SHV = "\u26A1"; /* &#x26A1; .. HIGH VOLTAGE SIGN     */
let SYN = "\u25CF"; /* &#x25CF; .. SYMBOL BLACK CIRCLE   */
let SBS = "\u2605"; /* &#x2605; .. SYMBOL BLACK STAR     */

let SD0 = "\u24EA"; /* &#x2775; ..       CIRCLED DIGIT 0 */
let SD1 = "\u2776"; /* &#x2776; .. BLACK CIRCLED DIGIT 1 */
let SD2 = "\u2777"; /* &#x2777; .. BLACK CIRCLED DIGIT 2 */
let SD3 = "\u2778"; /* &#x2778; .. BLACK CIRCLED DIGIT 3 */
let SD4 = "\u2779"; /* &#x2779; .. BLACK CIRCLED DIGIT 4 */
let SD5 = "\u277A"; /* &#x277A; .. BLACK CIRCLED DIGIT 5 */
let SD6 = "\u277B"; /* &#x277B; .. BLACK CIRCLED DIGIT 6 */
let SD7 = "\u277C"; /* &#x277C; .. BLACK CIRCLED DIGIT 7 */
let SD8 = "\u277D"; /* &#x277D; .. BLACK CIRCLED DIGIT 8 */
let SD9 = "\u277E"; /* &#x277E; .. BLACK CIRCLED DIGIT 9 */

/*}}}*/
/* SYMBOL {{{ */

let SYMBOL_ANCHOR           = "\u2693";
let SYMBOL_BLACK_SUN        = "\u2600";
let SYMBOL_BULB             = "\ud83d\udca1";
let SYMBOL_TRAFFIC_LIGHT    = "\ud83d\udea6";
let SYMBOL_CHECK_MARK       = "\u2714";
let SYMBOL_CIRCLE_ARROW     = "\u27F3";
let SYMBOL_DOWN_ARROW       = "\u2193";
let SYMBOL_GEAR             = "\u2699";
let SYMBOL_HEAVY_RIGHT_ARROW= "\u2794";
let SYMBOL_LEFT_ARROW       = "\u27EA";
let SYMBOL_LOWER_RIGHT      = "\u25E2";
let SYMBOL_MENU             = "\u2630";
let SYMBOL_MOON             = "\u263D";
let SYMBOL_NOT_CHECKED      = "\u237B";
let SYMBOL_NO_ENTRY         = "\u26D4";
let SYMBOL_RECYCLE          = "\u267B";
let SYMBOL_RIGHT_DBL_A_BRK  = "\u27EB";
let SYMBOL_RIGHT_ARROW      = "\u2192";
let SYMBOL_SAILBOAT         = "\u26F5";
let SYMBOL_UPPER_LEFT       = "\u25E4";
let SYMBOL_UP_ARROW         = "\u2191";
let SYMBOL_UP_DOWN_ARROW    = "\u21C5";
let SYMBOL_DOWN_POINTING    = "\u261F";
let SYMBOL_SECTION          = "\u00A7";
let SYMBOL_PARAGRAPH        = "\u00B6";

/*
let SYMBOL_CLIPBOARD        = "\u1F4CB";
let SYMBOL_CLIPBOARD        = "\u2398";
*/
let SYMBOL_SCISSORS         = "\u2702";

let SYMBOL_EXPAND_IS_ON     = SYMBOL_LEFT_ARROW;
let SYMBOL_EXPAND_IS_OFF    = SYMBOL_RIGHT_DBL_A_BRK;

let SYMBOL_WORDING_IS_ON    = "W";
let SYMBOL_WORDING_IS_OFF   = "w";

let SYMBOL_THEME_DARK_IS_OFF= SYMBOL_BLACK_SUN;
let SYMBOL_THEME_DARK_IS_ON = SYMBOL_MOON;

let SYMBOL_STAGE1_INPUT      = SYMBOL_DOWN_POINTING;
let SYMBOL_STAGE2_ACTION     = SYMBOL_CIRCLE_ARROW;
let SYMBOL_STAGE3_RESULT     = SYMBOL_HEAVY_RIGHT_ARROW;
/*
let SYMBOL_EYE              = "\ud83d\udc41";
let SYMBOL_EYE              = "\u1F441";
*/
let SYMBOL_EYE              = SYMBOL_BULB;




let SYMBOL_BLACK_SQUARE     = "\u25A0";
let SYMBOL_SQUARE_HFILL     = "\u25A4";
let SYMBOL_WHITE_SQUARE     = "\u25A1";

let SYMBOL_REPLACEMENT_CHAR = "\uFFFD";
let SYMBOL_HEAVY_BALLOT     = "\u2718";
let SYMBOL_BALLOT_CHECK     = "\u2611";

let SYMBOL_PARTNERSHIP      = "\u26AF";
let SYMBOL_WHITE_SMILEY     = "\u263A";
let SYMBOL_BLACK_SMILEY     = "\u263B";
let SYMBOL_FROWNING_FACE    = "\u2639";
let SYMBOL_TRUCK            = "\u26DF";
let SYMBOL_WRITING_HAND     = "\u270D";
let SYMBOL_DBL_EXCLAM       = "\u203C";
let SYMBOL_EXCLAM_QUESTION  = "\u2049";
let SYMBOL_WARNING          = "\u26A0";
let SYMBOL_LEFT_RIGHT_ARROW = "\u2194";

let SYMBOL_STAR             = "\u2B50";
let SYMBOL_CLOUD            = "\u2601";
let SYMBOL_HOURGLASS        = "\u23F3";
let SYMBOL_WATCH            = "\u231A";

let SYMBOL_BLACK_CIRCLE     = "\u25CF";
let SYMBOL_BLMED_CIRCLE     = "\u26AB"; /* MEDIUM */
let SYMBOL_LARGE_CIRCLE     = "\u2B55"; /* HEAVY */
let SYMBOL_WHITE_CIRCLE     = "\u26AA"; /* MEDIUM_WHITE */

let SYMBOL_UP               = "\u25B2";
let SYMBOL_RIGHT            = "\u25B6";
let SYMBOL_DOWN             = "\u25BC";
let SYMBOL_LEFT             = "\u25C0";
/*
:new /LOCAL/DATA/ANDROID/PROJECTS/RTabs/app/src/main/java/ivanwfr/rtabs/Settings.java
*/
let SYMBOL_MAILBOX          = "\uD83D\uDCEC"; /* NO */
let SYMBOL_TRAFFIC          = "\uD83D\uDEA6"; /* NO */
let SYMBOL_MAGNIFY_LEFT     = "\uD83D\uDD0D"; /* works */
let SYMBOL_CONSTRUCTION     = "\uD83D\uDEA7"; /* works */
/*
let SYMBOL_PAT_BAG          = "<span class='sym_bag'>"+     SYMBOL_SCISSORS         +"</span>";
let SYMBOL_OFF_BAG          = "<span class='sym_bag'>"+     SYMBOL_HOURGLASS        +"</span>";
let SYMBOL_BAK_BAG          = "<span class='sym_bag'>"+     SYMBOL_WATCH            +"</span>";
let SYMBOL_BIN_BAG          = "<span class='sym_bag'>"+     SYMBOL_HEAVY_BALLOT     +"</span>";
*/
let SYMBOL_SEL              = "<span class='sym_showing'>"+ SYMBOL_CHECK_MARK       +"</span> show";
let SYMBOL_HID              = "<span class='sym_hiding' >"+ SYMBOL_HEAVY_BALLOT     +"</span> hide";
let SYMBOL_BAK              = "<span class='sym_backing'>"+ SYMBOL_SQUARE_HFILL     +"</span> save";

let SYMBOL_COLIDE           =   "<em class='sym_colide' >"+ SYMBOL_WARNING          +"</em> SELECTED";
let SYMBOL_DISMISS          =   "<em class='sym_dismiss'>"+ SYMBOL_LEFT_RIGHT_ARROW +"</em> DISMISS" ;

let SYMBOL_CLEAR_BAK        =   "<em class='sym_backing'>"+ SYMBOL_BLACK_CIRCLE     +"</em> <em class='want cc2'>CLRBAK</em>";
let SYMBOL_CLEAR_BIN        =   "<em class='sym_binning'>"+ SYMBOL_BLACK_CIRCLE     +"</em> <em class='want cc0'>CLRBIN</em>";

let SYMBOL_UPDATE           =   "<em class='sym_update' >"+ SYMBOL_EXCLAM_QUESTION  +"</em> <em class='want cc3'>ASSIGN</em>";
let SYMBOL_STAGE            =   "<em class='sym_staged' >"+ SYMBOL_DBL_EXCLAM       +"</em> <em class='have cc6'>STAGED</em>"; /* @see phase_color */
let SYMBOL_RESULT           =   "<em class='sym_result' >"+ SYMBOL_CONSTRUCTION     +"</em> <em class='have cc4'>RESULT</em>"; /* @see phase_color */

let SYMBOL_BAGGER           =   "<em class='sym_bagger' >"+ SYMBOL_BLACK_SMILEY     +"</em>";
let SYMBOL_DOCKER           =   "<em class='sym_docker' >"+ SYMBOL_BLACK_SMILEY     +"</em>";

/* }}} */
/* OPTIONS {{{ */
let KEY_LOG_EVENTS          = "LOG EVENTS"   ;
let KEY_LOG_HIGHLIGHT       = "LOG HIGHLIGHT";
let KEY_LOG_TOOLBAR         = "LOG TOOLBAR"  ;
/*
let HOTSPOT_HTML_IDLE       = "o";
*/
let HOTSPOT_HTML_IDLE       = "\u00BB;";

/* options headsup */
let tools_scroll            = false;
let tools_scrollY           = 0;

let words_options           = "";
let words_opcycle           = false;

let bak_csv                 = "";
let off_csv                 = "";
let pat_csv                 = "";
let sel_csv                 = "";
let bin_csv                 = "";

let wording                 = false;
let containers_hi           = false;
let scroll_smooth           = false;
let overflow_visi           = false;

let anchor_freeze           = false;

let tools_extras            = false;

let theme_dark              = false;
let tools_drag              = false;
let pivot_magnified         = false;
let fly_div_magnified       = false;

let sel_back                = false;

let transcript_events       = false;
let transcript1_pinned      = false;
let transcript2_pinned      = false;
/* }}} */

/** STORAGE */
/*{{{*/

/* store load */
/*_ t_store_load_localStorage_logging {{{*/
let t_store_load_localStorage_logging = function()
{
    logging_EVENTS         = localStorage_getBool("logging_EVENTS"   ) ? true : false;
    logging_HIGHLIGHT      = localStorage_getBool("logging_HIGHLIGHT") ? true : false;
    logging_TOOLBAR        = localStorage_getBool("logging_TOOLBAR"  ) ? true : false;

    LOG_MAP.EV0_LISTEN     = localStorage_getBool("EV0_LISTEN"       ) ? true : false;
    LOG_MAP.EV1_DOWN       = localStorage_getBool("EV1_DOWN"         ) ? true : false;
    LOG_MAP.EV2_MOVE       = localStorage_getBool("EV2_MOVE"         ) ? true : false;
    LOG_MAP.EV3_UP         = localStorage_getBool("EV3_UP"           ) ? true : false;
    LOG_MAP.EV4_LONG_PRESS = localStorage_getBool("EV4_LONG_PRESS"   ) ? true : false;
    LOG_MAP.EV5_CB         = localStorage_getBool("EV5_CB"           ) ? true : false;
    LOG_MAP.EV6_CHANGED    = localStorage_getBool("EV6_CHANGED"      ) ? true : false;
    LOG_MAP.EV7_DISPATCH   = localStorage_getBool("EV7_DISPATCH"     ) ? true : false;
    LOG_MAP.EV8_FLOATLOG   = localStorage_getBool("EV8_FLOATLOG"     ) ? true : false;
    LOG_MAP.S1_RANGE       = localStorage_getBool("S1_RANGE"         ) ? true : false;
    LOG_MAP.S2_SELECT      = localStorage_getBool("S2_SELECT"        ) ? true : false;
    LOG_MAP.S3_SLOT        = localStorage_getBool("S3_SLOT"          ) ? true : false;
    LOG_MAP.T0_STORE       = localStorage_getBool("T0_STORE"         ) ? true : false;
    LOG_MAP.T1_PIVOT       = localStorage_getBool("T1_PIVOT"         ) ? true : false;
    LOG_MAP.T2_SPREAD      = localStorage_getBool("T2_SPREAD"        ) ? true : false;
    LOG_MAP.T3_GRID        = localStorage_getBool("T3_GRID"          ) ? true : false;
    LOG_MAP.T4_SLOT        = localStorage_getBool("T4_SLOT"          ) ? true : false;
    LOG_MAP.T5_LAYOUT      = localStorage_getBool("T5_LAYOUT"        ) ? true : false;
};
/*}}}*/
/*_ t_store_load_localStorage {{{*/
/*{{{*/
let IN_WEBVIEW = "";
let USERAGENT  = null;
/*}}}*/
let t_store_load_localStorage = function()
{
    /* STORED PARAMS {{{*/
let log_this = LOG_MAP.T0_STORE;
    let caller    = "t_store_load_localStorage";
if( log_this) log("%c LOCAL STORAGE :", lbF+lb7);

    let x, y, id;

    anchor_freeze          = localStorage_getBool("anchor_freeze"       ) ? true : false;
    containers_hi          = localStorage_getBool("containers_hi"       ) ? true : false;
    scroll_smooth          = localStorage_getBool("scroll_smooth"       ) ? true : false;
    overflow_visi          = localStorage_getBool("overflow_visi"       ) ? true : false;
    theme_dark             = localStorage_getBool("theme_dark"          ) ? true : false;

    tools_drag             = localStorage_getBool("tools_drag"          ) ? true : false;
    pivot_magnified        = localStorage_getBool("pivot_magnified"     ) ? true : false;
    fly_div_magnified      = localStorage_getBool("fly_div_magnified"   ) ? true : false;

    wording                = localStorage_getBool("wording"             ) ? true : false;
    words_options          = localStorage_getItem("words_options"       ); if(words_options == null) words_options = "words_head_tail";
    words_opcycle          = localStorage_getBool("words_opcycle"       ) ? true : false;

    tools_extras           = localStorage_getBool("tools_extras"        ) ? true : false;

    bak_csv                = localStorage_getItem("bak_csv"             ); if(bak_csv == null) bak_csv = "";
    off_csv                = localStorage_getItem("off_csv"             ); if(off_csv == null) off_csv = "";
    pat_csv                = localStorage_getItem("pat_csv"             ); if(pat_csv == null) pat_csv = "";
    sel_csv                = localStorage_getItem("sel_csv"             ); if(sel_csv == null) sel_csv = "";

    tools_scroll           = localStorage_getBool("tools_scroll"        ) ? true : false;

    /*}}}*/
    /* force off_csv selection {{{*/
    if(off_csv && (csv_count(off_csv) == csv_count(pat_csv)))
    {
logXXX("%c RESELECTING [ALL OFF] SELECTION", lbH+lf4);
        off_csv="";
    }
    /*}}}*/
    /* pivotXY {{{*/
    x                      = localStorage_getItem("pivotXY_x"           ); x = (x == null) ? 0 : parseInt(x);
    y                      = localStorage_getItem("pivotXY_y"           ); y = (y == null) ? 0 : parseInt(y);
    x = Math.max( -w_W , x      );
    y = Math.max( -w_H , y      );
    x = Math.min(        x, w_W );
    y = Math.min(        y, w_H );

    pivotXY.x = x;
    pivotXY.y = y;
    /*}}}*/
    /* spread_ratio {{{*/
    x                  = localStorage_getItem("spread_ratio_x"          ); x = (x == null) ? 0.5 : parseFloat(x);
    y                  = localStorage_getItem("spread_ratio_y"          ); y = (y == null) ? 0.5 : parseFloat(y);

    spread_ratio.x = x;
    spread_ratio.y = y;
    /*}}}*/
    /* pivot_PANEL {{{*/
    id                 = localStorage_getItem("pivot_PANEL"             );  let panel = (id == null) ? null : get_tool("#"+id);

    pivot_PANEL = panel;
    /*}}}*/
    /* topTool xy {{{*/
    x                      = localStorage_getItem("topTool_x"           ); x = (x == null) ? 0 : parseInt(x);
    y                      = localStorage_getItem("topTool_y"           ); y = (y == null) ? 0 : parseInt(y);
    x = Math.max( -w_W , x      );
    y = Math.max( -w_H , y      );
    x = Math.min(        x, w_W );
    y = Math.min(        y, w_H );

    topTool.x = x;
    topTool.y = y;
    /*}}}*/
    /* transcript1 {{{*/
    if(transcript1)
    {
        transcript1_pinned = localStorage_getBool("transcript1_pinned");

        if(!transcript1_pinned) {
            transcript1.style.position = tools_scroll ? "absolute" : "fixed";
        }
        else {
            transcript1.style.position = "fixed";
            add_el_class(transcript1, "pinned");
            let xy = localStorage_parseXY("transcript1_XY");
            if(xy) {
                transcript1.style.left = xy.x+"px";
                transcript1.style.top  = xy.y+"px";
            }
        }
    }
    /*}}}*/
    /* transcript2 {{{*/
    if(transcript2)
    {
        transcript2_pinned = localStorage_getBool("transcript2_pinned");

        if(!transcript2_pinned) {
            transcript2.style.position = tools_scroll ? "absolute" : "fixed";
        }
        else {
            transcript2.style.position = "fixed";
            add_el_class(transcript2, "pinned");
            let xy = localStorage_parseXY("transcript2_XY");
            if(xy) {
                transcript2.style.left = xy.x+"px";
                transcript2.style.top  = xy.y+"px";
            }
        }
    }
    /*}}}*/
    /* scroll to last save scrollY {{{ */
    tools_scrollY      = localStorage_getItem("tools_scrollY"); tools_scrollY = (tools_scrollY == null) ? 0 : parseFloat(tools_scrollY);
try {
    if(tools_scrollY) window.scrollTo(window.scrollX, tools_scrollY);
} catch(ex) { console.log(caller+": "+ex); }
    /*}}}*/
    /* USERAGENT {{{*/

    /* Mozilla/5.0
     * (Linux; Android 6.0.1; SGP512 Build/23.5.A.1.291; wv)
     * AppleWebKit/537.36 (KHTML, like Gecko)
     * Version/4.0
     * Chrome/57.0.2987.132
     * Safari/537.36
     */

    if(!USERAGENT)
    {
        USERAGENT  = window.navigator.userAgent;
        IN_WEBVIEW = (USERAGENT.toLowerCase().indexOf("android") > 0);

    }
    /*}}}*/
    /* TODO: may be used for IPC ... */
if(log_this) log_localStorage();
if(log_this) log_TOOLS_STORAGE_KEYS();

if(log_this) console.log("t_store_load_localStorage: ...window.addEventListener(storage, t_listen_to_storage_events)");
    window.addEventListener("storage", t_listen_to_storage_events);

};
/*}}}*/
/*_ t_hotspot_in_gutter_on_load {{{*/
let t_hotspot_in_gutter_on_load = function()
{
let log_this = logging_something();
    let caller = "t_hotspot_in_gutter_on_load";
if(log_this) log("%c "+caller, lbF+lb7);

    /* force tools_scroll-off */
    tools_scroll = false;
    store_key_state("tools_scroll", tools_scroll );
    set_id_class_on_off(tools_scroll_button.id, "checked" , tools_scroll);
    tools_scroll_button.innerHTML
        = tools_scroll
        ?  SYMBOL_UP_DOWN_ARROW
        :  SYMBOL_ANCHOR;
/*
    let position =  tools_scroll  ? "absolute" : "fixed";
    t_tool_set_top_xy(caller, topTool.x, topTool.y, position);
*/
};
/*}}}*/
/*_ localStorage_parseXY {{{*/
let localStorage_parseXY = function(key)
{
    let caller = "localStorage_parseXY("+key+")";
let log_this = LOG_MAP.T0_STORE;
if( log_this) log(caller);

    let dom_string = localStorage_getItem(key);
    if(!dom_string) return null;
if( log_this) log("...dom_string=["+dom_string+"]");

    let xy = null;
    try {
        xy    = JSON.parse(dom_string);
        let s = ""; Object.keys(xy).forEach( function(key) { s += "["+key+" = "+xy[key]+"]"+LF; });
if( log_this) log("%c"+ caller+":", lb0);
if( log_this) log("%c"+ s         , lb7);
        return xy;
     }
     catch(ex) {
if( log_this) log("%c"+caller+":"                                                  , lb2);
if( log_this) log("%c"+t_strip_CR_LF(dom_string)                                   , lbF+lb0);
if( log_this) log("%c0123456789_123456789_123456789_123456789_123456789_123456789_", lbF+lb8);
if( log_this) log("%c0_________1_________2_________3_________4_________5_________6", lbF+lb8);
if( log_this) log("%c*** "+ex, lb2);
    }
};
/*}}}*/

/*_ log_localStorage {{{*/
let log_localStorage = function()
{
    log("o %c USERAGENT         : %c "+ USERAGENT +"] IN_WEBVIEW=["+ IN_WEBVIEW +" ", lbF+lb1, lbA);

    log("o %c anchor_freeze     : %c "+ anchor_freeze                           +" ", lbF+lb2, lbA);
    log("o %c containers_hi     : %c "+ containers_hi                           +" ", lbF+lb2, lbA);
    log("o %c scroll_smooth     : %c "+ scroll_smooth                           +" ", lbF+lb2, lbA);
    log("o %c overflow_visi     : %c "+ overflow_visi                           +" ", lbF+lb2, lbA);

    log("o %c wording           : %c "+ wording                                 +" ", lbF+lb2, lbA);
    log("o %c words_opcycle     : %c "+ words_opcycle                           +" ", lbF+lb2, lbA);
    log("o %c words_options     : %c "+ words_options                           +" ", lbF+lb2, lbA);

    log("o %c tools_scroll      : %c "+ tools_scroll                            +" ", lbF+lb3, lbA);
    log("o %c tools_scrollY     : %c "+ tools_scrollY                           +" ", lbF+lb3, lbA);

    log("o %c theme_dark        : %c "+ theme_dark                              +" ", lbF+lb4, lbA);
    log("o %c tools_drag        : %c "+ tools_drag                              +" ", lbF+lb4, lbA);
    log("o %c tools_extras      : %c "+ tools_extras                            +" ", lbF+lb4, lbA);


    log("o %c bak_csv           : %c "+ bak_csv                                 +" ", lbF+lb5, lbA);
    log("o %c off_csv           : %c "+ off_csv                                 +" ", lbF+lb5, lbA);
    log("o %c pat_csv           : %c "+ pat_csv                                 +" ", lbF+lb5, lbA);
    log("o %c sel_csv           : %c "+ sel_csv                                 +" ", lbF+lb5, lbA);

    log("o %c pivot_PANEL       : %c "+ get_n_lbl(pivot_PANEL)                  +" ", lbF+lb8, lbA);
    log("o %c pivotXY           : %c "+ pivotXY.x+" "+pivotXY.y                 +" ", lbF+lb8, lbA);
    log("o %c pivot_magnified   : %c "+ pivot_magnified                         +" ", lbF+lb8, lbA);
    log("o %c fly_div_magnified : %c "+ fly_div_magnified                       +" ", lbF+lb8, lbA);

    log("o %c topTool           : %c "+ topTool.x+" "+topTool.y                 +" ", lbF+lb8, lbA);
    log("o %c spread_ratio      : %c "+ spread_ratio.x +" "+ spread_ratio.y     +" ", lbF+lb8, lbA);
};
/*}}}*/
/*_ log_TOOLS_STORAGE_KEYS {{{*/
/*{{{*/
const TOOLS_STORAGE_KEYS =
    [     "EV1_DOWN"
        , "EV2_MOVE"
        , "EV3_UP"
        , "EV4_LONG_PRESS"
        , "EV5_CB"
        , "EV6_CHANGED"
        , "EV7_DISPATCH"
        , "EV8_FLOATLOG"
        , "S1_RANGE"
        , "S2_SELECT"
        , "S3_SLOT"
        , "T0_STORE"
        , "T1_PIVOT"
        , "T2_SPREAD"
        , "T3_GRID"
        , "T4_SLOT"
        , "T5_LAYOUT"

        , "logging_EVENTS"
        , "logging_HIGHLIGHT"
        , "EV0_LISTEN"
        , "logging_TOOLBAR"

        , "pivotXY_x"
        , "pivotXY_y"
        , "pivot_PANEL"
        , "pivot_magnified"
        , "spread_ratio_x"
        , "spread_ratio_y"
        , "topTool_x"
        , "topTool_y"
        , "transcript1_pinned"
        , "transcript2_pinned"

    ];

/*{{{
        , "anchor_freeze"
        , "bak_csv"
        , "containers_hi"
        , "fly_div_magnified"

        , "wording"
        , "words_opcycle"
        , "words_options"

        , "off_csv"
        , "pat_csv"
        , "sel_csv"

        , "scroll_smooth"
        , "overflow_visi"

        , "theme_dark"
        , "tools_drag"
        , "tools_extras"
        , "tools_scroll"
        , "tools_scrollY"

}}}*/

/*}}}*/
let log_TOOLS_STORAGE_KEYS = function()
{
log("%c TOOLS STORAGE :", lbF+lb8);
    TOOLS_STORAGE_KEYS.forEach(
        function(key   ) {
            if(  value = localStorage_getItem( key ))
                console.log("o %c "+key+" %c "+value+" ", lb8,lb0);
        }
    );
};
/*}}}*/

/*_ t_listen_to_storage_events {{{*/
let t_listen_to_storage_events = function(e)
{
    console.log("t_listen_to_storage_events:");
    console.log("...........url=["+ e.url         +"]");
    console.log("...storageArea=["+ e.storageArea +"]");
    console.log("...........key=["+ e.key         +"]");
    console.log("......oldValue=["+ e.oldValue    +"]");
    console.log("......newValue=["+ e.newValue    +"]");
};
/*}}}*/

/* store update */
/*{{{*/
let PENDING_LOCALSTORAGE_DELAY = 1000;
let t_update_store3_site_layout_timer;
let t_update_store3_site_layout_callers = "";
let t_update_store3_site_layout_count   =  0;
/*}}}*/
/*_ t_update_store3_site_layout {{{*/
let t_update_store3_site_layout = function(_caller, delay=PENDING_LOCALSTORAGE_DELAY)
{
    /*{{{*/
let log_this = LOG_MAP.T0_STORE;

    /*}}}*/
    /* clearTimeout {{{*/
    if(               t_update_store3_site_layout_timer ) {
        clearTimeout( t_update_store3_site_layout_timer );
        /*.........*/ t_update_store3_site_layout_timer = null;
    }
    /*}}}*/
    /* log first caller {{{*/
    if(!t_update_store3_site_layout_callers) {
        t_update_store3_site_layout_count   = 1;
        t_update_store3_site_layout_callers = "1 "+ _caller;
if(log_this) log("%c FIRST PENDING LOCAL STORAGE .. %c BY "+t_update_store3_site_layout_callers+" ", lb3,lb0);
    }
    /*}}}*/
    /* log more callers {{{*/
    else {
        t_update_store3_site_layout_count += 1;
if(log_this && !t_update_store3_site_layout_callers.includes(_caller)) t_update_store3_site_layout_callers += LF + t_update_store3_site_layout_count +" "+ _caller;
    }
    /*}}}*/
    /* post or commit handler {{{*/
    if(delay) t_update_store3_site_layout_timer = setTimeout(t_update_store3_site_layout_handler, PENDING_LOCALSTORAGE_DELAY);
    else                                                     t_update_store3_site_layout_handler();

    /*}}}*/
};
/*}}}*/
/*_ t_update_store3_site_layout_handler {{{*/
let t_update_store3_site_layout_handler = function()
{
    /* [onWork_EL] is not released .. (postpone update) {{{*/
    t_update_store3_site_layout_timer = null;
let log_this = LOG_MAP.T0_STORE;

    if(onWork_EL) {
if(log_this) log("%c PENDING LOCAL STORAGE POSTPONED BY %c "+get_n_lbl(onWork_EL)+" ", lb3,lb0);
        t_update_store3_site_layout_timer = setTimeout(t_update_store3_site_layout_handler, PENDING_LOCALSTORAGE_DELAY);
        return;
    }
    /*}}}*/

if(log_this) log("%c PENDING LOCAL STORAGE (x"+t_update_store3_site_layout_count+") BY: %c"+LF+t_update_store3_site_layout_callers, lb3,lb0);

    let key, value;

    /*....*/ store3_site_layout();
    t_update_store3_site_layout_count   = 0;
    t_update_store3_site_layout_callers = "";
};
/*}}}*/
/*_ t_update_localStorage_is_pending {{{*/
let t_update_localStorage_is_pending = function()
{
    return (t_update_store3_site_layout_timer != null);
};
/*}}}*/

/* store categories */
/*_ store0_settings {{{*/
let store0_settings = function()
{
    let caller = "store0_settings";
if(LOG_MAP.T0_STORE) log(caller);

    store1_site_theme   ();
    store2_site_logging ();
    store3_site_layout  ();
    store4_page_wording ();
};
/*}}}*/
/*_ store1_site_theme {{{*/
let store1_site_theme = function()
{
    let caller = "store1_site_theme";
if(LOG_MAP.T0_STORE) log(caller);   key = "tools_scrollY"      ; value = scroll_done_scrollY; store_key_value(key, value);
    /* TOOLS LAYOUT */
    key = "anchor_freeze"      ; value = anchor_freeze         ; store_key_state(key, value);
    key = "containers_hi"      ; value = containers_hi         ; store_key_state(key, value);
    key = "theme_dark"         ; value = theme_dark            ; store_key_state(key, value);
    key = "tools_drag"         ; value = tools_drag            ; store_key_state(key, value);
    key = "tools_extras"       ; value = tools_extras          ; store_key_state(key, value);

};
/*}}}*/
/*_ store2_site_logging {{{*/
let store2_site_logging = function()
{
    let caller = "store_per_site_logging";
if(LOG_MAP.T0_STORE) log(caller);   key = "tools_scrollY"      ; value = scroll_done_scrollY; store_key_value(key, value);
    /* LOGGING */
    key = "EV0_LISTEN"         ; value = LOG_MAP.EV0_LISTEN    ; store_key_state(key, value);
    key = "EV1_DOWN"           ; value = LOG_MAP.EV1_DOWN      ; store_key_state(key, value);
    key = "EV2_MOVE"           ; value = LOG_MAP.EV2_MOVE      ; store_key_state(key, value);
    key = "EV3_UP"             ; value = LOG_MAP.EV3_UP        ; store_key_state(key, value);
    key = "EV4_LONG_PRESS"     ; value = LOG_MAP.EV4_LONG_PRESS; store_key_state(key, value);
    key = "EV5_CB"             ; value = LOG_MAP.EV5_CB        ; store_key_state(key, value);
    key = "EV6_CHANGED"        ; value = LOG_MAP.EV6_CHANGED   ; store_key_state(key, value);
    key = "EV7_DISPATCH"       ; value = LOG_MAP.EV7_DISPATCH  ; store_key_state(key, value);
    key = "EV8_FLOATLOG"       ; value = LOG_MAP.EV8_FLOATLOG  ; store_key_state(key, value);
    key = "S1_RANGE"           ; value = LOG_MAP.S1_RANGE      ; store_key_state(key, value);
    key = "S2_SELECT"          ; value = LOG_MAP.S2_SELECT     ; store_key_state(key, value);
    key = "S3_SLOT"            ; value = LOG_MAP.S3_SLOT       ; store_key_state(key, value);
    key = "T0_STORE"           ; value = LOG_MAP.T0_STORE      ; store_key_state(key, value);
    key = "T1_PIVOT"           ; value = LOG_MAP.T1_PIVOT      ; store_key_state(key, value);
    key = "T2_SPREAD"          ; value = LOG_MAP.T2_SPREAD     ; store_key_state(key, value);
    key = "T3_GRID"            ; value = LOG_MAP.T3_GRID       ; store_key_state(key, value);
    key = "T4_SLOT"            ; value = LOG_MAP.T4_SLOT       ; store_key_state(key, value);
    key = "T5_LAYOUT"          ; value = LOG_MAP.T5_LAYOUT     ; store_key_state(key, value);
    key = "fly_div_magnified"  ; value = fly_div_magnified     ; store_key_state(key, value);
    key = "logging_EVENTS"     ; value = logging_EVENTS        ; store_key_state(key, value);
    key = "logging_HIGHLIGHT"  ; value = logging_HIGHLIGHT     ; store_key_state(key, value);
    key = "logging_TOOLBAR"    ; value = logging_TOOLBAR       ; store_key_state(key, value);

};
/*}}}*/
/*_ store3_site_layout {{{*/
let store3_site_layout = function()
{
    let caller = "store3_site_layout";
if(LOG_MAP.T0_STORE) log(caller);   key = "tools_scrollY"      ; value = scroll_done_scrollY; store_key_value(key, value);
    /* TOOLS LAYOUT */
    if(pivot_PANEL) {
    key = "pivot_PANEL"        ; value = pivot_PANEL.id        ; store_key_value(key, value);
    }
    key = "pivotXY_x"          ; value = pivotXY.x             ; store_key_value(key, value);
    key = "pivotXY_y"          ; value = pivotXY.y             ; store_key_value(key, value);

    key = "pivot_magnified"    ; value = pivot_magnified       ; store_key_state(key, value);
    key = "fly_div_magnified"  ; value = fly_div_magnified     ; store_key_state(key, value);

    key = "topTool_x"          ; value = topTool.x             ; store_key_value(key, value);
    key = "topTool_y"          ; value = topTool.y             ; store_key_value(key, value);

    key = "spread_ratio_x"     ; value = spread_ratio.x        ; store_key_value(key, value);
    key = "spread_ratio_y"     ; value = spread_ratio.y        ; store_key_value(key, value);

    key = "scroll_smooth"      ; value = scroll_smooth         ; store_key_state(key, value);
    key = "overflow_visi"      ; value = overflow_visi         ; store_key_state(key, value);

    key = "tools_scroll"       ; value = tools_scroll          ; store_key_state(key, value);
    key = "transcript1_pinned" ; value = transcript1_pinned    ; store_key_state(key, value);
    key = "transcript2_pinned" ; value = transcript2_pinned    ; store_key_state(key, value);
    let panel;
    panel = transcript1; if(panel.classList.contains("pinned")) { key = panel.id+"_XY"; let xy = t_getPosition(panel, caller); store_key_value(key, JSON.stringify(xy)); }
    panel = transcript2; if(panel.classList.contains("pinned")) { key = panel.id+"_XY"; let xy = t_getPosition(panel, caller); store_key_value(key, JSON.stringify(xy)); }
    for(let i=0; i < deployable_tools.length; ++i)
    {
        let   panel = deployable_tools[i];
        if(  !panel) continue;
        let     map = tools_map.get( panel );
        let     key = panel.id+".selected";
        store_key_state(key, map.selected);
    }
};
/*}}}*/
/*_ store4_page_wording {{{*/
let store4_page_wording = function()
{
    let caller = "store4_page_wording";
if(LOG_MAP.T0_STORE) log(caller);   key = "tools_scrollY"      ; value = scroll_done_scrollY; store_key_value(key, value);

    /* SCROLL WORDS FILTER NODE */
    key = "bak_csv"            ; value = bak_csv               ; store_key_value(key, value);
    key = "off_csv"            ; value = off_csv               ; store_key_value(key, value);
    key = "pat_csv"            ; value = pat_csv               ; store_key_value(key, value);
    key = "sel_csv"            ; value = sel_csv               ; store_key_value(key, value);

    key = "wording"            ; value = wording               ; store_key_state(key, value);
    key = "words_options"      ; value = words_options         ; store_key_value(key, value);
    key = "words_opcycle"      ; value = words_opcycle         ; store_key_state(key, value);

};
/*}}}*/

/* store key value */
/*_ store_key_state {{{*/
let store_key_state = function(key, state)
{
    let caller = "store_key_state(key=["+key+"], state=["+state+"]";
let log_this = LOG_MAP.T0_STORE;

    let v = localStorage_getBool(key);
    if( v == state) {
/*{{{
if(log_this) store_key_log("UNCHANGED STATE", key, state);
}}}*/
        return;
    }
    else if(state) {
if(log_this) store_key_log("STORING   STATE", key, state);

        localStorage_setItem   (key ,"true");
    }
    else if(v) {
if(log_this) store_key_log("REMOVING STATE" , key);
        localStorage_removeItem(key);
    }
};
/*}}}*/
/*_ store_key_value {{{*/
let store_key_value = function(key, value)
{
    let caller = "store_key_value(key=["+key+"] value=["+value+"])";
let log_this = LOG_MAP.T0_STORE;

    let v = localStorage_getItem(key);
    if( v == value) {
/*{{{
if(log_this) store_key_log("UNCHANGED VALUE", key, value);
}}}*/
        return;
    }
    else if(value) {
if(log_this) store_key_log("STORING   VALUE", key, value);
        localStorage_setItem(key , value);
    }
    else if(v) {
if(log_this) store_key_log("REMOVING  VALUE", key);
        localStorage_removeItem(key);
    }

};
/*}}}*/
/*_ store_key_log {{{*/
let store_key_log = function(msg, key, value="")
{
    /* DO NOT LOG VOLATILE PARAMS */
    if(    (key == "logging_EVENTS"     )
        || (key == "EV0_LISTEN"  )
        || (key == "logging_HIGHLIGHT"  )
        || (key == "logging_TOOLBAR"    )
        || (key == "pivotXY_x"          )
        || (key == "pivotXY_y"          )
        || (key == "spread_ratio_x"     )
        || (key == "spread_ratio_y"     )
        || (key == "tools_scrollY"      )
        || (key == "topTool_x"          )
        || (key == "topTool_y"          )
    )
        return;

/* LOG OTHER KEYS {{{

        || (key == "scroll_smooth"      )
        || (key == "overflow_visi"      )

        || (key == "anchor_freeze"      )
        || (key == "containers_hi"      )
        || (key == "theme_dark"         )
        || (key == "wording"            )
        || (key == "words_opcycle"      )
        || (key == "words_options"      )

        || (key == "bak_csv"            )
        || (key == "off_csv"            )
        || (key == "pat_csv"            )
        || (key == "sel_csv"            )

        || (key == "pivot_magnified"    )
        || (key == "fly_div_magnified"  )
        || (key == "tools_drag"         )
        || (key == "tools_extras"       )
        || (key == "tools_scroll"       )

        || (key == "transcript1_pinned" )
        || (key == "transcript2_pinned" )

}}}*/

    let page_or_site = localStorage_is_a_page_or_site_pfx( key ) ? "PAGE" : "SITE";
    let          lbx =                  (page_or_site == "PAGE") ?    lbA : lbb   ;
    let          lfx =                  (page_or_site == "PAGE") ?    lf5 : lf7   ;

    log(   "%c store_key_log for %c"+ page_or_site
          + "%c"                    + msg
          +  "%c"                   + localStorage_get_site_or_page_pfx_for_key( key )
          +   "%c"                  + key +"%c = %c"+ (value || "&nbsp;")
          , lf8+lbL,             lbR+lfx
          ,  lf8+lbH
          ,   lbH+lfx
          ,    lbx+lfx+lbL,            lbx+lbC , lbx+lbR+lfx
       );

/*
log_add_TR_STORAGE(               msg  );
*/
};
/*}}}*/

/* local storage */
/*_ localStorage_setItem {{{*/
let localStorage_setItem = function(key,value)
{
    localStorage        .setItem(    localStorage_get_site_or_page_pfx_for_key(key)+"_"+key, value);
};
/*}}}*/
/*_ localStorage_getItem {{{*/
let localStorage_getItem = function(key)
{
    return  localStorage.getItem(    localStorage_get_site_or_page_pfx_for_key(key)+"_"+key       );
};
/*}}}*/
/*_ localStorage_getBool {{{*/
let localStorage_getBool = function(key)
{
    return (localStorage.getItem(    localStorage_get_site_or_page_pfx_for_key(key)+"_"+key       ) == "true");
};
/*}}}*/
/*_ localStorage_removeItem {{{*/
let localStorage_removeItem = function(key)
{
    return  localStorage.removeItem( localStorage_get_site_or_page_pfx_for_key(key)+"_"+key       );
};
/*}}}*/
/*_ localStorage_remove_all_page_items {{{*/
let localStorage_remove_all_page_items = function()
{
    /*{{{*/
let   caller = "localStorage_remove_all_page_items";
let log_this = LOG_MAP.T0_STORE;
if( log_this) log("%c"+caller, lbF+lb7);
    /*}}}*/
    /* collect page_items_keys_to_remove_array {{{*/
    let page_pfx = localStorage_get_site_or_page_pfx_for_key("sel_csv"     );
    let site_pfx = localStorage_get_site_or_page_pfx_for_key("tools_scroll");
if(log_this) log("%c No patterns left - Removing localStorage: %c SITE %c"+site_pfx+"%c PAGE %c"+page_pfx
                     ,lbH+lf2                                     ,lbL+lf8,lbR+lf2      ,lbL+lf8,lbR+lf3);
    let page_items_keys_to_remove_array = [];
    for(let i=0; i < localStorage.length; ++i)
    {
        let k = localStorage.key    ( i );
        let v = localStorage.getItem( k );

        if( !k.startsWith(site_pfx) )
        {
/*
logXXX((i+1)+" %c "+k+" %c "+ v, lbL+lf3, lbR+lf4)
*/
            page_items_keys_to_remove_array.push(k);
        }
        else {
/*
logXXX((i+1)+" %c "+k+" %c "+ v, lbL+lf8, lbR+lf9)
*/
        }
    }
    /*}}}*/
    /* remove page_items_keys_to_remove_array {{{*/
    for(let i=0; i < page_items_keys_to_remove_array.length; ++i)
    {
        let k = page_items_keys_to_remove_array[i];
if(log_this) log((i+1)+"%c removing %c"+k
                         ,      lbL+lf2    ,lbR+lf3);

        localStorage.removeItem(k);
    }
    /*}}}*/
    t_pat_bag_status_set_innerText("storage"+LF+"cleared");
};
/*}}}*/

/*_ localStorage_is_a_page_or_site_pfx {{{*/
let localStorage_is_a_page_or_site_pfx = function(key)
{
    return (key == "bak_csv"      )
        || (key == "off_csv"      )
        || (key == "pat_csv"      )
        || (key == "sel_csv"      )
        || (key == "tools_scrollY")
        || (key == "wording"      )
        || (key == "words_opcycle")
        || (key == "words_options")
    ;
};
/*}}}*/
/*_ localStorage_get_site_or_page_pfx_for_key {{{*/
/*{{{*/
const PAGE_URL_TEMPLATE = "Archives/Public/w3c-wai-ig/2018JanMar/0148.html"; /* test-purpose - tokenizer template */
const SITE_URL_TEMPLATE = "www.localhost.com";                               /* test-purpose - file to http protocol emulation */

/*}}}*/
let localStorage_get_site_or_page_pfx_for_key = function(key)
{
/*{{{
logXXX("window.location.pathname=["+window.location.pathname+"]");
logXXX("window.location.hostname=["+window.location.hostname+"]");

// strip anchor
let url = window.location.href;
let idx = url.indexOf("#");
let pfx = (idx < 0) ? url : url.substring(0,idx);
}}}*/
    /* 1/2 PAGE */
    let  result  = "";
    if( localStorage_is_a_page_or_site_pfx(key) )
    {
        let pathname = t_dir_base_name(window.location.pathname);

        result       = tokenize( pathname );
    }
    /* 2/2 SITE */
    else {
        let hostname =  window.location.hostname
            ||          SITE_URL_TEMPLATE;

        result       = tokenize( hostname );
    }

    return result;
};
/*}}}*/
/*_ t_dir_base_name {{{*/
let t_dir_base_name = function(pathname)
{
    let a
        = (pathname.indexOf(FORESLASH) >= 0)
        ?  pathname.split  (FORESLASH)
        :  pathname.split  (BACKSLASH);

    let baseName =   a[a.length-1] || "index";

    let dirName = (  a.length > 1)
        ?          a[a.length - 2]
        :          ""
    ;

/*{{{
logXXX("...a.length=["+ a.length +"]   dirName =["+ dirName  +"]   baseName=["+ baseName +"]")
}}}*/

    let result
        = (dirName   !=      "")
        ? (dirName+"_"+baseName)
        :              baseName
    ;

    return result || "index";

};
/*}}}*/
/*}}}*/

/** LOAD TOOLS */
/*{{{*/
/* LOAD {{{*/
const TOOLS1_OFF                 = "TOOLS OFF";
const TOOLS2_SANITY_CHECK_FAILED = "TOOLS SANITY CHECK FAILED";
const TOOLS3_NEED_RELAXED_CSP    = "TOOLS NEED RELAXED CSP";
const TOOLS4_DEPLOYED            = "TOOLS DEPLOYED";
const TOOLS5_UNLOADED            = "TOOLS UNLOADED";
const TOOLS6_NO_REPLY_YET        = "TOOLS NO REPLY YET";
/*_ t_load {{{*/
let t_load = function()
{
    /* LOGGING {{{*/
    t_store_load_localStorage_logging();

let log_this = LOG_MAP.EV7_DISPATCH;
    let caller     = "t_load";
if(log_this) log(caller, "info");

    /*}}}*/
    t_shadow();
    /* TOOLS LAYOUT {{{*/
    t_load_layout();

    /* extra padding to allow seeking near viewport top */
    /* document.body.setAttribute("style","padding:0    0 105% 0 !important");*/ /* CSP unsafe-inline issue */
    /* document.body.style.padding = "0    0 105% 0"; */
    /*}}}*/
    /* LOAD LOCAL STORAGE {{{*/
    t_store_load_localStorage();

    /*}}}*/
    /* SHOW TIMESTAMPS {{{*/
    t_log_tags();

    /*}}}*/
    /* TOOLS NOT LOADED .. (Content Security Poplicy (CSP) MAY HAVE [Refused to load the stylesheet]) {{{ */
    let script_loaded;
    if(!DOM_TOOLS_CSS_TAG)
    {
if(log_this) console.log("%c DOM_TOOLS_CSS_TAG=["+DOM_TOOLS_CSS_TAG+"] .. %c TOOLS INLINING REJECTED", lb7, lb2);

        /* hide all optional tools */
        let el;
        for(let i=1; i<deployable_tools.length; ++i)
            if(el =    deployable_tools[i]) el.style.display = "none";

        if(    el = pivspot            ) el.style.display = "none";
        if(    el = seeker_PD          ) el.style.display = "none";
        if(    el = seeker_PU          ) el.style.display = "none";
/*
        if(!pin_seekspot) {
            if(el = seekspot_U         ) el.style.display = "none";
            if(el = seekspot           ) el.style.display = "none";
            if(el = seekspot_D         ) el.style.display = "none";
        }
*/

/*
        if(    el = dom_grid_css_tag   ) el.style.display = "none";
        if(    el = dom_host_css_tag   ) el.style.display = "none";
        if(    el = dom_tools_css_tag  ) el.style.display = "none";
        if(    el = dom_tools_html_tag ) el.style.display = "none";
*/
        let ipc      = {  t_load : TOOLS3_NEED_RELAXED_CSP
            ,             caller : DOM_TOOLS_JS_TAG
            ,            details : caller
        };
        t_send_IPC( ipc );

        script_loaded = false;
    }
    /*}}}*/
    /* TOOLS LOADED .. (ADD EVENT LISTENERS) {{{*/
    else {
if(LOG_MAP.EV0_LISTEN || logging_EVENTS) log(caller+": ADDING EVENT LISTENERS");

        t_add_listeners();

        script_loaded = true;
    }
    /*}}}*/
    /* TOOLS SYNC {{{*/
    t_log_show_buttons();
    t_sync_logging_grid();
    t_body_width_show();
    t_body_zoom_show();
/*
    t_sync_wording();
    t_sync_styles();
*/
    t_sync_transcript_events();

    sync_containers_hi();

    /*}}}*/
    /* ASSERT DEVICE BEHAVIOR {{{*/
    t_assert_behavior();

    /*}}}*/
    t_load_post();
    return script_loaded;
};
/*}}}*/
/*_ t_sync_transcript_events {{{*/
let t_sync_transcript_events = function()
{
    transcript_events          =  t_is_a_selected_panel(transcript1)
        || logging_something() && t_doc_div_clear("doc_evt_div")
    ;

    if(transcript_events) log("t_sync_transcript_events: transcript_events=["+transcript_events+"]");
};
    /*}}}*/
/*_ t_assert_behavior {{{*/
let t_assert_behavior = function()
{
    /*{{{*/
let log_this = LOG_MAP.EV7_DISPATCH;
    let caller     = "t_assert_behavior";
if(log_this) log(caller);

    /*}}}*/
    /* TOUCH OR MOUSE {{{*/
    /* f(ontouchstart) {{{*/
/*
    behavior_TOUCH_ELSE_DESKTOP = ("ontouchstart" in document.documentElement);
*/
    /*}}}*/
    /* f(navigatore.platform) {{{*/
/*
    let platform = navigator.platform.toLowerCase();
    behavior_TOUCH_ELSE_DESKTOP
        =  !platform.startsWith("hp"   )
        && !platform.startsWith("mac"  )
        && !platform.startsWith("sunos")
        && !platform.startsWith("win"  )
    ;
*/
    /*}}}*/
    /* f(resolution dpi) {{{*/
    behavior_TOUCH_ELSE_DESKTOP = window.matchMedia("only screen and (min-resolution : 128dpi)").matches;
/*
logXXX("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
*/
    /*}}}*/
    let behavior_em
        = behavior_TOUCH_ELSE_DESKTOP
        ? "<em class='cc7 big'> MOBILE  TOUCH BEHAVIOR </em>"
        : "<em class='cc8 big'> DESKTOP MOUSE BEHAVIOR </em>"
    ;
    /*}}}*/
    /* LOG EVENTS {{{*/
    let e_yes = "<em class='cc5'>IS DEFINED</em>";
    let e_no  = "<em class='cc8'>IS NOT DEFINED</em>";

    let event_info
        = "<em>EVENTS</em>"+LF
        +"<ul>"+LF
        + "<li>ontouchstart "+ ((typeof document.documentElement.ontouchstart != 'undefined') ? e_yes : e_no)+"</li>"+LF
        + "<li>s_log        "+ ((typeof s_log                                 != 'undefined') ? e_yes : e_no)+"</li>"+LF
        + "<li>  log        "+ ((typeof   log                                 != 'undefined') ? e_yes : e_no)+"</li>"+LF
        + "</ul>"
    ;

    /*}}}*/
    /* LOG SCREEN {{{*/
    let s_yes = "<em class='cc5'>YES</em>";
    let s_no  = "<em class='cc8'>NO</em>";

    let screen_info
        = "<em>MEDIA</em>"+LF
        +"<ul>"+LF
    ;
    let  q;
    q = "(orientation: landscape)"                 ; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "(orientation:  portrait)"                 ; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution :  20dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution :  80dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution :  90dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (max-resolution :  96dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 100dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 120dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 150dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 200dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 240dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 300dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    q = "only screen and (min-resolution : 640dpi)"; screen_info += "<li>"+ q + (window.matchMedia(q).matches ? s_yes : s_no)+"</li>"+LF;
    screen_info
        += "</ul>"
    ;

    /*}}}*/
    /* LOG NAVIGATOR {{{*/
    let navigator_info
        = "<em>NAVIGATOR</em>"+LF
        + "<ul>"+LF
        +  "<li>Browser CodeName.....: <em>"+ navigator.appCodeName   +"</em></li>"+LF
        +  "<li>Browser Name.........: <em>"+ navigator.appName       +"</em></li>"+LF
        +  "<li>Browser Version......: <em>"+ navigator.appVersion    +"</em></li>"+LF
        +  "<li>Cookies Enabled......: <em>"+ navigator.cookieEnabled +"</em></li>"+LF
        +  "<li>Browser Language.....: <em>"+ navigator.language      +"</em></li>"+LF
        +  "<li>Browser Online.......: <em>"+ navigator.onLine        +"</em></li>"+LF
        +  "<li>Platform.............: <em>"+ navigator.platform      +"</em></li>"+LF
        +  "<li>User-agent header....: <em>"+ navigator.userAgent     +"</em></li>"+LF
        + "</ul>"
    ;
    /*}}}*/
    /* LOG BEHAVIOR .. f(activated doc playground or tool transcript) {{{*/
    if(    t_doc_div_clear("doc_log_div")
        || t_is_a_selected_panel(transcript2)
    )
        t_log_transcript_info(
            "<em class='cc8'>"+DOM_TOOLS_JS_TAG+"</em> "+ behavior_em
            +"<pre>"
            + event_info+LF
            + screen_info+LF
            + navigator_info
            +"</pre>"
        );

    /*}}}*/
};
/*}}}*/
/*_ t_unload {{{ */
let t_unload = function()
{
let caller = "t_unload";
if(LOG_MAP.T5_LAYOUT) log(caller);
    /* CLEARING SELECTED WORDS {{{ */
log("CLEARING ALL SELECTED WORDS");
    s_clear_slot_all();

    /*}}}*/
    /* REMOVING EVENT LISTENERS {{{ */
log("REMOVING EVENT LISTENERS");
    t_del_listeners();

    /*}}}*/
    /* REMOVING JS CSS HTML {{{ */
/*
log("REMOVING TOOLS");

    let head = document.getElementsByTagName("head")[0];
    let body = document.body;

    try { t_removeChild(DOM_SELECT_JS_ID   , head ); } catch(ex) { if(LOG_MAP.T5_LAYOUT) console_warn("DOM_SELECT_JS_ID:"+   ex); }
    try { t_removeChild(DOM_WORDING_CSS_ID , head ); } catch(ex) { if(LOG_MAP.T5_LAYOUT) console_warn("DOM_WORDING_CSS_ID:"+ ex); }
    try { t_removeChild(DOM_WORDING_JS_ID  , head ); } catch(ex) { if(LOG_MAP.T5_LAYOUT) console_warn("DOM_WORDING_JS_ID:"+  ex); }
    try { t_removeChild(DOM_TOOLS_CSS_ID   , head ); } catch(ex) { if(LOG_MAP.T5_LAYOUT) console_warn("DOM_TOOLS_CSS_ID:"+   ex); }
    try { t_removeChild(DOM_TOOLS_JS_ID    , head ); } catch(ex) { if(LOG_MAP.T5_LAYOUT) console_warn("DOM_TOOLS_JS_ID:"+    ex); }
    try { t_removeChild(DOM_TOOLS_HTML_ID  , body ); } catch(ex) { if(LOG_MAP.T5_LAYOUT) console_warn("DOM_TOOLS_HTML_ID:"+  ex); }
*/
    /*}}}*/
    if(!DOM_GRID_CSS_TAG)
        call_t_grid_ON_OFF_CB(false);

    dom_tools_html.style.visibility = "hidden";

    dom_wording_cycle("OFF", false);

    /*if(extension_signature) {*/
    let ipc = {    t_load : TOOLS5_UNLOADED
        ,          caller : DOM_TOOLS_JS_TAG
    };
    t_send_IPC( ipc );
    /*}*/
};
/*}}}*/
/*_ t_reload {{{ */
let t_reload = function()
{

    let caller = "t_reload";
if(LOG_MAP.T5_LAYOUT) log_set_TR_LAYOUT(caller);

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("t_reload");

    tools_scroll = false;

    t_add_listeners();

    t_load_post();
};
/* }}} */
/*_ t_load_post {{{*/
let t_load_post = function() { setTimeout(t_load_post_handler, 500); };
let t_load_post_handler = function()
{
    let caller = "t_load_post_handler";

    /* PREVENTED BY CSP .. TELL BROWSER EXTENSION {{{*/
    if(!DOM_TOOLS_CSS_TAG)
    {
        log("%c *** "+caller+": %c TOOLS CSS NOT LOADED ", lb2, lbF);
        /*if(extension_signature) {*/
            let ipc = {  t_load : TOOLS3_NEED_RELAXED_CSP
                ,        caller : DOM_TOOLS_JS_TAG
                ,       details : caller
            };
            t_send_IPC( ipc );
        /*}*/
        return;
    }
    /*}}}*/

    /* SENDING TOOLS SIGNATURE {{{*/
    let message = document.body.attributes[IPC_EXTENSION_ID]
        ?         document.body.attributes[IPC_EXTENSION_ID].textContent : "";
    if( message) {
        let ipc = t_get_IPC( message );
/*
if(LOG_IPC) log(caller+": LOCKING ON LAST MESSAGE sequence_number: =["+ipc.sequence_number+"]");
        if(ipc.sequence_number) t_get_IPC_sequence_number = ipc.sequence_number;
*/
    }
    let ipc
        = { t_load : TOOLS4_DEPLOYED
        ,   caller : DOM_TOOLS_JS_TAG+"."+caller
    };
    t_send_IPC( ipc );

    /*}}}*/

    if(!t_ipc_listener_id) {
        t_ipc_add_MutationObserver(DOM_TOOLS_JS_ID);
      /*t_ipc_add_message_listener(DOM_TOOLS_JS_ID);*/
    }

    dom_tools_html.style.visibility = "visible";

    setTimeout(t_display_delayed_divs_shadow_root, 250);
    setTimeout(t_display_delayed_divs_document   , 500);

    t_sync_layout(caller, 0); /* short call */

    t_sync_wording();
    t_sync_styles();
};
/*}}}*/
/*_ t_display_delayed_divs_handler {{{*/
/*{{{*/
const CSS_DISPLAY_DELAYED = "display_delayed";

/*}}}*/
let t_display_delayed_divs_document    = function() { t_display_delayed_divs_handler(document.body); };
let t_display_delayed_divs_shadow_root = function() { t_display_delayed_divs_handler(shadow_root  ); };
let t_display_delayed_divs_handler     = function(container)
{
let log_this = LOG_MAP.EV7_DISPATCH;
    let caller = "t_display_delayed_divs_handler("+get_n_lbl(container)+")";
if(log_this) log(caller, "info");

if(log_this) log("container.childNodes.length=["+container.childNodes.length+"]");

    for(let i=0; i < container.childNodes.length; ++i)
    {
        let child = container.childNodes[i];

        if( child.classList && child.classList.contains( CSS_DISPLAY_DELAYED ) )
        {
/*
log("%c CSS_DISPLAY_DELAYED %c "+ get_n_lbl(child)+" ", lbF+lb4, lbF+lb0);
*/
            child.classList.remove  ( CSS_DISPLAY_DELAYED );
        }

        if(!child.childNodes.length) continue;
if(log_this) log("child.childNodes.length=["+child.childNodes.length+"]");
        for(let j=0; j<child.childNodes.length; ++j)
        {
            let el = child.childNodes[j];

            if(el.classList && el.classList.contains( CSS_DISPLAY_DELAYED ) )
            {
/*
log("%c CSS_DISPLAY_DELAYED %c "+ get_n_lbl(el)+" ", lbF+lb4, lbF+lb0);
*/
                el.classList.remove  ( CSS_DISPLAY_DELAYED );
            }
        }
    }

/* TODO: MAKE SURE CACADING HANDLERS PROVIDE FOR THIS TO HAPEN
    t_sync_doc_LOG_MAP(caller);
*/

};
/*}}}*/

/*_ t_shadow {{{*/
const SHADOW_HOST_Z_INDEX = 2147483647;
let t_shadow = function()
{
    /* t_host {{{*/
    let host = document.createElement("DIV");
    host.id  = "shadow_host";
    document.documentElement.appendChild(host);

    if( host.attachShadow ) {
        host.style.zIndex  = SHADOW_HOST_Z_INDEX;

        shadow_root    = host.attachShadow({mode: "open"});
    }
    else {
        /* alert("attachShadow missing"); */

        /* doc + tools event clash */
/* TODO
        shadow_root    = document.body;
*/
        shadow_root    = host;
    }
    shadow_root.id = "shadow_root";

    t_host("#dom_tools_html");
    t_host("#dom_grid_html" );
    t_host("#dom_tools_css" );
    t_host("#dom_grid_css"  );
    t_host("#dom_select_js" );
    t_host("#dom_wording_js");
    t_host("#dom_tools_js"  );
    t_host("#dom_grid_js"   );

    /*}}}*/
    /* PRELOAD [hidden] TOOLS {{{*/
    get_tool_Elements();
    if(dom_tools_html) dom_tools_html.style.visibility = "hidden";

    let el;
    for(let i=1; i<deployable_tools.length; ++i)
        if( el   = deployable_tools[i]) add_el_class(el, "hidden");

    /*}}}*/
    /* PUSH PIN {{{*/
/*
    if(transcript1   ) { t_add_push_pin_to_panel( transcript1 ); t_add_clearpin_to_panel( transcript1 ); }
    if(transcript2   ) { t_add_push_pin_to_panel( transcript2 ); t_add_clearpin_to_panel( transcript2 ); }
*/
    log_tr1 = transcript1;
    log_tr2 = transcript2;
    /*}}}*/
};
/*}}}*/
/*_ t_get_selected_count {{{*/
let t_get_selected_count = function(_caller)
{
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("t_get_selected_count: CALLED BY ["+ _caller+"]");

    let selected_count = 0;
    for(let i=0; i< deployable_tools.length; ++i) {
        let panel = deployable_tools[i];
        if(!panel ) {
            log("%c *** t_get_selected_count: panel #"+i+" IS MISSING ", lb2);
            continue;
        }
        let         key = panel.id+".selected";
        let    selected = localStorage_getBool(key) ? true : false;
/*
if(log_this) log("... t_get_selected_count: ...localStorage_getItem(key=["+key+"]): ...selected=["+selected+"]");
*/
        selected_count += selected ? 1 : 0;
    }

if(log_this) log("t_get_selected_count: ...return "+selected_count);
    return selected_count;
};
/*}}}*/
/*_ t_host {{{*/
let t_host = function(id)
{
/*{{{*/
let caller = "t_host("+id+")";
let log_this = LOG_MAP.T5_LAYOUT;
if( log_this) log("t_host("+id+")");
/*}}}*/
    let el = document.querySelector( id );
    if(!el) return;

    /* proxiedNode .. [https://www.wisdomjobs.com] .. [ special (/unique?) case] {{{*/
    if(el.proxiedNode)
    {
if(log_this) log("t_host: using proxiedNode ["+el.proxiedNode.type+"]:");
if(log_this) console_dir(el);
        el = el.proxiedNode;
    }
    /*}}}*/
    shadow_root.appendChild( el );

/*
    console.log("t_host("+id+") %c get_tool        "+ (get_tool(id)         ? " OK" : " FAILED"), lbF+lb7);
    console.log("t_host("+id+") %c getComputedStyle"+ (getComputedStyle(el) ? " OK" : " FAILED"), lbF+lb7);
*/

    el.style.display = "inline";
};
/*}}}*/
/*_ t_add_push_pin_to_panel {{{*/
let t_add_push_pin_to_panel = function(tool_panel)
{
    let push_pin       = document.createElement("em");
    push_pin.className = "push_pin cc8";
    push_pin.id        = tool_panel +"_push_pin";
    push_pin.innerHTML = SYMBOL_PUSH_PIN;

    tool_panel.appendChild  ( push_pin );
};
/*}}}*/
/*_ t_add_clearpin_to_panel {{{*/
let t_add_clearpin_to_panel = function(tool_panel)
{
    let clearpin       = document.createElement("em");
    clearpin.className = "clearpin";
    clearpin.id        = tool_panel.id +"_clearpin";
    clearpin.innerHTML = SYMBOL_CLEARPIN;

    tool_panel.appendChild  ( clearpin );
};
/*}}}*/
/*_ t_removeChild {{{*/
let t_removeChild = function(id, parent)
{
    let el;
    if( el = get_tool("#"+id)) {
log("t_removeChild: ..."+parent.id+".removeChild("+id+"):");
        if(el) parent.removeChild(el);
    } else {
console_warn("t_removeChild: ...ID NOT DEFINED: ["+id+"]");
    }
};
/*}}}*/
/*}}}*/
/* TOOLS {{{*/
/* TOOL_MAP {{{*/
let TOOL_MAP = function(panel, selected)
{
    /*this.init {{{*/
    this.init = function(panel, selected) {
        this.panel    =    panel;
        this.selected = selected;
        this.x        =        0;
        this.y        =        0;
        this.p        =       "";
        this.t        =        0;
        this.l        =        0;
        this.w        =        0;
        this.h        =        0;
    };
    /*}}}*/
    /*this.toString {{{*/
    this.toString = function() {
        let mark = this.selected ? SYMBOL_CHECK_MARK : SYMBOL_NOT_CHECKED;
        return ""
            + "["+    this.panel.id                                          +" " +mark             +"]"
            + " SP=["+this.panel.style.position                              +".."+this.p           +"]"
            + " XY=["+this.panel.offsetLeft     +"x"+this.panel.offsetTop    +".."+this.l+"x"+this.t+"]"
            + " WH=["+this.panel.offsetWidth    +"x"+this.panel.offsetHeight +".."+this.w+"x"+this.h+"]"
        ;
    };
    /*}}}*/
    this.init(panel, selected); /* construction-time-init */
};
/*}}}*/
/*_ DECLARE-TOOLS {{{*/
let behavior_TOUCH_ELSE_DESKTOP;

let shadow_root;
let dom_tools_html;
let seeker_PU, seeker_CU;
let seeker_PD, seeker_CD;
let seekspot, seekspot_U, seekspot_D;
let dom_grid_html;

let hotspot;
let  hotring;
let  hotwave;
let pivspot;

let pat_bag;
let sel_bag;
let headsup;
let headsup_w;
let headsup_ds;
let headsup_bw;
let headsup_f;

let dom_traversal;
let  words_exact_button;
let  words_segment_button;
let  words_head_tail_button;
let  words_opcycle_button;
let  tools_drag_button;
let   pivspot_c;
let   hotspot_c;
let  tools_scroll_button;
let  tools_extras_button;
let  anchor_freeze_button;
let  containers_hi_button;
let  scroll_smooth_button;
let  overflow_visi_button;
let  theme_dark_button;
let  toolbar_thumb;
let  tools_filter_input;
let  reset_button;
let  wording_button;
let  tools_node_input;

let  dev_log_map;
let  dev_log_calls;
let  dom_load_tags;

let  transcript1, log_tr1;
let  transcript2, log_tr2;

let  fly_div;

/*}}}*/
/*_ t_tools_TOC {{{*/
/*{{{*/
let tools_map      = new Map();
let t_tools_loaded = false;
/*}}}*/
let t_tools_TOC = function(_caller)
{
    /* TOOLS INLINING REJECTED {{{*/
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("t_tools_TOC: CALLED BY ["+ _caller+"]");

    if(!DOM_TOOLS_CSS_TAG) {
if(log_this) log("%c *** t_tools_TOC: TOOLS INLINING REJECTED", lb2);

        return;
    }
    /*}}}*/
    /* ALREADY LOADED {{{*/
    if(tools_map.size) {
        log("%c *** t_tools_TOC: [tools_map] ALREADY LOADED ", lb2);

        return;
    }
     /*}}}*/
    /* [shadow_root] {{{*/
    if(!shadow_root) shadow_root = document.getElementById("shadow_root");

    if(shadow_root) {
if(log_this) log("shadow_root:");
if(log_this) console_dir( shadow_root );
    }
     /*}}}*/
    /* [t_tools_loaded] {{{*/
    t_tools_loaded = (typeof get_tool != "undefined");
if(log_this) log("...t_tools_loaded=["+t_tools_loaded+"]");

    /*}}}*/
    /* [selection_tool_available ] {{{*/
    let selection_tool_available = (typeof t_grid_ON_OFF_CB != "undefined");
    if(!selection_tool_available)
        log_dom_grid_js_not_loaded("t_tools_TOC("+ _caller+")");

    /*}}}*/
    /* SELECT [tools_map] .. (t_shadow's PRELOADED HIDDEN TOOLS) {{{*/
    let selected_count = 0;
    if(t_tools_loaded) {
        for(let i=0;       i < deployable_tools.length; ++i)
        {
            let        panel = deployable_tools[i];
            if(       !panel ) {
                log("%c *** t_tools_TOC: panel #"+i+" IS MISSING ", lb2);
                continue;
            }

            let          key = panel.id+".selected";
            let     selected = localStorage_getBool(key) ? true : false;
/*
if(log_this) log("...localStorage_getItem(key=["+key+"]): ...selected=["+selected+"]");
*/
            /* SELECT all when no selection tool available) */
            if(!selection_tool_available) selected = true;

            /* DISPLAY selected tools */
            selected_count += selected ? 1 : 0;
            tools_map.set(panel, new TOOL_MAP(panel, selected));
            set_el_class_on_off(panel,"hidden", !selected);

if(log_this) log(tools_map.get(panel).toString());
        }
    }
    /*}}}*/
    /* SHOW [hotspot] {{{*/
    del_el_class(hotspot, "hidden");

    /*}}}*/
if(log_this) log("tools_map.size=["+tools_map.size+"] selected_count=["+selected_count+"]");
};
/*}}}*/
/*_ t_tools_panel_select {{{*/
let t_tools_panel_select = function(panel, state=true)
{
    let caller = "t_tools_panel_select("+get_n_lbl(panel)+", "+state+")";
let log_this = LOG_MAP.T3_GRID;
if( log_this) log(caller);

    let map = tools_map.get( panel );
    if( map.selected != state)
    {
if(log_this) log("..."+(state ? "SHOWING" : "HIDING")+" "+get_n_lbl(panel));

        t_grid_TOOLS_SELECT_panel(panel, true);

        del_el_class(panel,"hidden");

        t_sync_layout(caller);
    }
};
/*}}}*/
/*_ t_tools_save_TOOLS_GEOMETRY {{{*/
let t_tools_save_TOOLS_GEOMETRY = function(_caller)
{
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("t_tools_save_TOOLS_GEOMETRY("+ _caller+")");
/*
    if( call_t_grid_IS_SIZED("t_tools_save_TOOLS_GEOMETRY") ) {
        t_cache_init_by("t_tools_save_TOOLS_GEOMETRY: TOOLS WERE ON-GRID AT LAST CALL");
        return;
    }
*/
    if(!tools_map.size) t_tools_TOC("t_grid_IS_ON_GRID");
    for(let [panel, map] of tools_map)
    {
        map.p   = panel.style.position;
        map.x   = panel.offsetLeft;
        map.y   = panel.offsetTop;
        map.w   = panel.offsetWidth;
        map.h   = panel.offsetHeight;
if(log_this) log("...%c "+panel.id+" "+map.p+" %c XY=%c "+map.x+" "+map.y+" %c WH=%c "+map.w+" "+map.h+" %c "+map.toString(), lb5,lbA, lb6,lbA, lb7,lbA);
/*
if(panel == pat_bag) log("t_tools_save_TOOLS_GEOMETRY("+ _caller+"): ...pat_bag map.h=["+map.h+"] .. offsetHeight=["+panel.offsetHeight+"]");
*/
    }
};
/*}}}*/
/*_ get_tool_Elements {{{*/
let deployable_tools  =   [];
let get_tool_Elements = function()
{
    let id;
    id = "#anchor_freeze"    ; anchor_freeze_button   = get_tool(id);
    id = "#containers_hi"    ; containers_hi_button   = get_tool(id);
    id = "#scroll_smooth"    ; scroll_smooth_button   = get_tool(id);
    id = "#overflow_visi"    ; overflow_visi_button   = get_tool(id);

    id = "#dom_grid_html"    ; dom_grid_html          = get_tool(id);

    id = "#hotspot"          ; hotspot                = get_tool(id);
    id = "#hotring"          ; hotring                = get_tool(id);
    id = "#hotspot_c"        ; hotspot_c              = get_tool(id);
    id = "#hotwave"          ; hotwave                = get_tool(id);

    id = "#pivspot"          ; pivspot                = get_tool(id);
    id = "#pivspot_c"        ; pivspot_c              = get_tool(id);

    id = "#pat_bag"          ; pat_bag                = get_tool(id);
    id = "#sel_bag"          ; sel_bag                = get_tool(id);

    id = "#headsup"          ; headsup                = get_tool(id);
    id = "#headsup_w"        ; headsup_w              = get_tool(id);
    id = "#headsup_ds"       ; headsup_ds             = get_tool(id);
    id = "#headsup_bw"       ; headsup_bw             = get_tool(id);
    id = "#headsup_bz"       ; headsup_bz             = get_tool(id);

    id = "#dev_log_map"      ; dev_log_map            = get_tool(id);
    id = "#dev_log_calls"    ; dev_log_calls          = get_tool(id);
    id = "#dom_load_tags"    ; dom_load_tags          = get_tool(id);
    id = "#dom_tools_html"   ; dom_tools_html         = get_tool(id);
    id = "#dom_traversal"    ; dom_traversal          = get_tool(id);

    id = "#reset"            ; reset_button           = get_tool(id);
    id = "#theme_dark"       ; theme_dark_button      = get_tool(id);
    id = "#tools_extras"     ; tools_extras_button    = get_tool(id);
    id = "#tools_drag"       ; tools_drag_button      = get_tool(id);
    id = "#tools_scroll"     ; tools_scroll_button    = get_tool(id);
    id = "#thumb_p"          ; toolbar_thumb          = get_tool(id);

    id = "#seeker_PD"        ; seeker_PD              = get_tool(id);
    id = "#seeker_PU"        ; seeker_PU              = get_tool(id);
    id = "#seeker_CD"        ; seeker_CD              = get_tool(id);
    id = "#seeker_CU"        ; seeker_CU              = get_tool(id);
    id = "#seekspot"         ; seekspot               = get_tool(id);
    id = "#seekspot_U"       ; seekspot_U             = get_tool(id);
    id = "#seekspot_D"       ; seekspot_D             = get_tool(id);

    id = "#transcript1"      ; transcript1            = get_tool(id);
    id = "#transcript2"      ; transcript2            = get_tool(id);

    id = "#fly_div"          ; fly_div                = get_tool(id);

    id = "#wording"          ; wording_button         = get_tool(id);
    id = "#words_exact"      ; words_exact_button     = get_tool(id);
    id = "#words_head_tail"  ; words_head_tail_button = get_tool(id);
    id = "#words_opcycle"    ; words_opcycle_button   = get_tool(id);
    id = "#words_segment"    ; words_segment_button   = get_tool(id);

    deployable_tools
        = [   hotspot           /* hotspot */
            , pat_bag           /* patterns */
            , sel_bag           /* selections */

            , headsup           /* thumb wording theme anchor containers_hi scroll_smooth overflow_visi expand */
            , headsup_w         /* wording */
            , headsup_ds        /* scroll fold */
            , headsup_bw        /* body_width */
            , headsup_bz        /* body_zoom */

            , dom_traversal     /* NodeIterator TreeWalker childNodes tagNodes */
            , dev_log_calls     /* RELOAD CLEAR REGEX */
            , dev_log_map       /* LOG_MAP */
            , dom_load_tags     /* time-tags */

            , transcript1       /* TR1 */
            , transcript2       /* TR2 */

            , fly_div
        ];
};
/*}}}*/
/*_ get_tool {{{*/
let get_tool = function(selector)
{
    let caller = "get_tool("+selector+")";
    let el;
    if(shadow_root) el = shadow_root.querySelector(selector);
    else            el = document   .querySelector(selector);

/*if(LOG_MAP.T5_LAYOUT) log(caller+": ...return ["+el+"]");*/
    return el;
};
/*}}}*/
/*_ t_set_tool_id_value {{{*/
let t_set_tool_id_value = function(id, value)
{
    let el = get_tool("#"+id);
    if( el ) el.value     = value;
    if( el ) el.value_set = value;
};
/*}}}*/
/*_ t_get_tool_id_value {{{*/
let t_get_tool_id_value = function(id)
{
    let el = get_tool("#"+id);
    if( el ) return el.value;
    else     return       "";
};
/*}}}*/
/*_ t_load_layout {{{*/
let t_load_layout = function()
{
    let caller = "t_load_layout";
let log_this = LOG_MAP.T5_LAYOUT;

    let el;

    /* headsup */
    if( el = toolbar_thumb          ) { el.style.position   = "absolute"; el.style.left = " 20px"; el.style.top = "  5px"; el.style.transform = "" /*"initial"*/; }
    if( el = wording_button         ) { el.style.position   = "absolute"; el.style.left = "  5px"; el.style.top = " 72px"; el.style.transform = "" /*"initial"*/; }
    if( el = anchor_freeze_button   ) { el.style.position   = "absolute"; el.style.left = " 30px"; el.style.top = " 20px"; el.style.transform = "" /*"initial"*/; }
    if( el = containers_hi_button   ) { el.style.position   = "absolute"; el.style.left = " 85px"; el.style.top = " 33px"; el.style.transform = "" /*"initial"*/; }

    if( el = scroll_smooth_button   ) { el.style.position   = "absolute"; el.style.left = "110px"; el.style.top = " 90px"; el.style.transform = "" /*"initial"*/; }
    if( el = overflow_visi_button   ) { el.style.position   = "absolute"; el.style.left = " 60px"; el.style.top = " 85px"; el.style.transform = "" /*"initial"*/; }

    if( el = theme_dark_button      ) { el.style.position   = "absolute"; el.style.left = "135px"; el.style.top = "  5px"; el.style.transform = "" /*"initial"*/; }
    if( el = tools_extras_button    ) { el.style.position   = "absolute"; el.style.left = "155px"; el.style.top = " 58px"; el.style.transform = "" /*"initial"*/; }

    /* headsup_w */
    if( el = words_exact_button     ) { el.style.position   = "absolute"; el.style.left =  "10px"; el.style.top = " 47px"; el.style.transform = "" /*"initial"*/; }
    if( el = words_segment_button   ) { el.style.position   = "absolute"; el.style.left =  "55px"; el.style.top = " 33px"; el.style.transform = "" /*"initial"*/; }
    if( el = words_head_tail_button ) { el.style.position   = "absolute"; el.style.left = "100px"; el.style.top = " 47px"; el.style.transform = "" /*"initial"*/; }
    if( el = words_opcycle_button   ) { el.style.position   = "absolute"; el.style.left =  "55px"; el.style.top = " 80px"; el.style.transform = "" /*"initial"*/; }
    if( el = reset_button           ) { el.style.position   = "absolute"; el.style.left = "130px"; el.style.top = " 80px"; el.style.transform = "" /*"initial"*/; }

    /* headsup_ds */
    if( el = tools_drag_button      ) { el.style.position   = "absolute"; el.style.left = " 10px"; el.style.top = "10px"; }
    if( el = tools_scroll_button    ) { el.style.position   = "absolute"; el.style.left = " 80px"; el.style.top = " 5px"; }

};
/*}}}*/
/*}}}*/
/* UTIL {{{*/
/*_ get_bag_id {{{*/
let get_bag_id = function(el)
{
    for(let node  = el
        ;   node != null
        ;   node  = node.parentNode
    ) {
        switch(node.id)
        {
            case "pat_bag" :
            case "sel_bag" :

            case "seeker_PU" :
            case "seeker_PD" :
            case "seekspot"  :

            case "headsup"    :
            case "headsup_w"  :
            case "headsup_ds" :
            case "headsup_bw" :
            case "headsup_bz" :

            case "dev_log_calls" :
            case "dev_log_map"   :
            case "dom_load_tags" :
            case "dom_traversal" :

            return node.id;
        }
    }
    return "";
};
/*}}}*/
/*_ is_el_child_of_class {{{*/
let is_el_child_of_class = function(el, className)
{
    while ((el = el.parentElement) && !el.classList.contains(className));
    return (el != null);
};
/*}}}*/
/*_ is_el_or_child_of_parent_el {{{*/
let is_el_or_child_of_parent_el = function(el, parent_el)
{
    while((el != null) && (el != parent_el)) el = el.parentElement;

    return (el == parent_el);
};
/*}}}*/
/*_ t_get_parent_with_TAG {{{*/
let t_get_parent_with_TAG = function(el,tag)
{
    while( (el != null) && (el.tagName != tag)) el = el.parentElement;

    if(    !el                        ) return null;
    return (         tag == el.tagName) ? el : null;
};
/*}}}*/
/*_ t_get_parent_with_tool_event_handler {{{*/
let t_get_parent_with_tool_event_handler = function(el)
{
    while((el != null)
        && !t_get_el_mouse_event_handler(el)
        && !t_get_el_onkey_event_handler(el)
        && !t_get_el_input_event_handler(el)
    )
        el = el.parentElement;

    return el;
};
/*}}}*/
/*_ t_get_el_mouse_event_handler {{{*/
let t_get_el_mouse_event_handler = function(el)
{
    if(!el)                    return null;
    if(el.onmousedown != null) return el.onmousedown;
    if(el.onmouseup   != null) return el.onmouseup  ;
    if(el.touchstart  != null) return el.onmouseup  ;
    if(el.touchend    != null) return el.onmouseup  ;
    if(el.onclick     != null) return el.onclick    ;
    if(el.ondblclick  != null) return el.ondblclick ;
    else                       return null;
};
/*}}}*/
/*_ t_get_el_onkey_event_handler {{{*/
let t_get_el_onkey_event_handler = function(el)
{
    if(!el)                    return null;
    if(el.onkeydown   != null) return el.onkeydown  ;
    if(el.onkeypress  != null) return el.onkeypress ;
    if(el.onkeyup     != null) return el.onkeyup    ;
    else                       return null;
};
/*}}}*/
/*_ t_get_el_input_event_handler {{{*/
let t_get_el_input_event_handler = function(el)
{
    if(!el)                    return null;
    if(el.onchange    != null) return el.onchange   ;
    if(el.onfocus     != null) return el.onfocus    ;
    if(el.onselect    != null) return el.onselect   ;
    if(el.oninput     != null) return el.oninput    ;
    if(el.onsubmit    != null) return el.onsubmit   ;
    if(el.onblur      != null) return el.onblur     ;
    else                       return null;
};
/*}}}*/
/*_ t_get_el_event_handler {{{*/
let t_get_el_event_handler = function(el, _caller)
{
let log_this = (LOG_MAP.EV5_CB || LOG_MAP.EV0_LISTEN || logging_EVENTS);

    /* [e_target_or_parent] with handler {{{*/
    if(!el) return null;

    let e_target_or_parent    = t_get_parent_with_tool_event_handler( el );

    if(!e_target_or_parent) return   null;
    /*}}}*/
    /* [handler] {{{*/
    let handler
        = (e_target_or_parent             == null) ? null
        : (e_target_or_parent.onclick     != null) ? e_target_or_parent.onclick
        : (e_target_or_parent.ondblclick  != null) ? e_target_or_parent.ondblclick
        : (e_target_or_parent.onmousedown != null) ? e_target_or_parent.onmousedown
        : (e_target_or_parent.onmouseup   != null) ? e_target_or_parent.onmouseup
        : (e_target_or_parent.onkeypress  != null) ? e_target_or_parent.onkeypress
        : (e_target_or_parent.onkeyup     != null) ? e_target_or_parent.onkeyup
        : (e_target_or_parent.onchange    != null) ? e_target_or_parent.onchange
        :                                            null;

    if(!handler) return   null;
    /*}}}*/
    let label = t_get_handler_label(el, e_target_or_parent, handler);

if(log_this) log("%c t_get_el_event_handler("+get_n_lbl(el)+") .. CALLED BY ["+ _caller+"]: ...return handler=["+((handler != null) ? "function" : "null")+"]"+LF+"%c"+label,lb6,lbF);

    return { handler:handler , label:label }
};
/*}}}*/
/*_ t_get_handler_label {{{*/
let t_get_handler_label = function(el, e_target_or_parent, handler)
{
    let el_label
        =          ( e_target_or_parent               !=  el )
        ? get_n_lbl( e_target_or_parent )+" "+ get_n_lbl( el )
        :                                      get_n_lbl( el )
    ;

    let handler_code = ellipsis(strip_CR_LF( handler.toString() ), 80);

    return "["+el_label +"] "+ handler_code;
};
    /*}}}*/
/*}}}*/
/*}}}*/

/** OPTIONS */
/*{{{*/
/*{{{*/
let cached_words_options;

/*}}}*/
/*_ toggle_event_keyword {{{*/
let toggle_keyword = function(keyword) { toggle_event_keyword(null, keyword); };
let toggle_event   = function(e      ) { toggle_event_keyword(e   ,      ""); };
let toggle_event_keyword = function(e, keyword)
{
    /* [has_moved] [t_preventDefault_has_been_called] [t_event_has_been_consumed] {{{*/
let log_this = LOG_MAP.EV5_CB;

    let e_target = (e ? t_get_event_target(e, "toggle_event_keyword") : null);
    let   caller = "toggle_event_keyword( "+get_n_lbl(e_target)+" "+(keyword ? "#"+keyword : "") +")";
if( log_this) log(caller);

    if( e_target && !keyword) keyword = e_target.id;

if( log_this) log("...................keyword %c["+ keyword                 +"]", lb0);
if( log_this) log(".................e.ctrlKey %c["+ (e ? e.ctrlKey : "(e null)"), lb0);
if( log_this) log(".................has_moved %c "+ has_moved               +" ", lb2);
if( log_this) log("....t_event_consumed_cause %c "+ t_event_consumed_cause  +" ", lb2);
if( log_this) log("...t_preventDefault_caller %c "+ t_preventDefault_caller +" ", lb2);

    let                                                 dismissed_by = "";
    if     ( e && e.ctrlKey                           ) dismissed_by = "e.ctrlKey";
    else if( has_moved                                ) dismissed_by = "has_moved";
    else if( t_event_has_been_consumed(caller)        ) dismissed_by = t_event_consumed_cause;
/*
    else if( t_preventDefault_has_been_called(caller) ) dismissed_by = t_preventDefault_caller;
*/

if(log_this && dismissed_by) log(caller+": %c dismissed_by ["+ dismissed_by+"]", lb2);
    if(dismissed_by) {
if(log_this) console.trace();
        return;
    }
    /*}}}*/
    /* CHANGES .. f(keyword) {{{*/
    let changes = "";
    switch(keyword)
    {

        case "anchor_freeze"  :
        if(!wording)            changes += keyword; anchor_freeze  = !anchor_freeze ; break;

        case "tools_drag"     : changes += keyword; tools_drag     = !tools_drag    ; break;

        case "theme_dark"     : changes += keyword; theme_dark     = !theme_dark    ; break;
        case "theme_LIGHT"    : changes += keyword; theme_dark     = false          ; break;
        case "theme_DARK"     : changes += keyword; theme_dark     = true           ; break;

        case "wording"        : changes += keyword; wording        = !wording       ; break;
        case "containers_hi"  : changes += keyword; containers_hi  = !containers_hi ; break;
        case "scroll_smooth"  : changes += keyword; scroll_smooth  = !scroll_smooth ; break;
        case "overflow_visi"  : changes += keyword; overflow_visi  = !overflow_visi ; break;
        case "tools_extras"   : changes += keyword; tools_extras   = !tools_extras  ; break;

        case "words_exact"    :
        case "words_segment"  :
        case "words_head_tail": changes += keyword; words_options  =  keyword       ; break;
        case "words_opcycle"  : changes += keyword; words_opcycle  = !words_opcycle ; break;

        case "pat_sort"       : changes += keyword; t_onclick_target_handle_bag_action(e_target, keyword);

        case "tools_scroll"   : changes += keyword; tools_scroll   = !tools_scroll  ; break;
        case "log_seekspot"   : changes += keyword; t_log_seekspot_toggle();        ; break;
        case "pin_seekspot"   : changes += keyword; t_pin_seekspot_toggle();        ; break;

        default               : log("%c "+caller+" %c "+keyword+" %c *** not handled ***", lbH+lf4, lbb+lbL+lf2, lbb+lbR+lf2);
    }
    /*}}}*/
/*
logXXX("changes=["+changes+"]");
*/
    /* LOG changes {{{*/
    if(changes) {
if(log_this) log_option_changes(changes);
        t_log_transcript_info("<em class='cc8'>"+caller+"</em> changes <em class='cc9'>"+changes+"</em>");
    }
    else {
        t_log_transcript_info("<em class='cc8'>"+caller+"</em> changes <em class='cc0'>none</em>");
    }
    /*}}}*/
    /* STORE {{{*/

    if(changes.includes("scroll_smooth"    )) store0_settings();
    if(changes.includes("overflow_visi"    )) store0_settings();

    if(changes.includes("anchor_freeze"    )) store1_site_theme();
    if(changes.includes("containers_hi"    )) store1_site_theme();
    if(changes.includes("theme_dark"       )) store1_site_theme();
    if(changes.includes("tools_drag"       )) store1_site_theme();
    if(changes.includes("tools_extras"     )) store1_site_theme();

    if(changes.includes("wording"          )) store4_page_wording();
    if(changes.includes("words_exact"      )) store4_page_wording();
    if(changes.includes("words_segment"    )) store4_page_wording();
    if(changes.includes("words_head_tail"  )) store4_page_wording();
    if(changes.includes("words_opcycle"    )) store4_page_wording();

    if(changes.includes("tools_scroll"     )) store3_site_layout();

    if(changes.includes("log_seekspot"     )) { t_sync_seeker(caller); if(log_seekspot) t_log_seekspot("log_seekspot "+log_seekspot); }
    if(changes.includes("pin_seekspot"     )) { t_sync_seeker(caller); if(log_seekspot) t_log_seekspot("pin_seekspot "+pin_seekspot); }

    /*}}}*/
    /* DISPLAY {{{*/
    /* [ANCHORS] [WORDS] [THEME] */
    if(    changes.includes("anchor_freeze" )
        || changes.includes("theme_DARK"    )
        || changes.includes("theme_LIGHT"   )
        || changes.includes("theme_dark"    )
        || changes.includes("wording"       )
        || changes.includes("containers_hi" )
    )
        t_sync_wording();

    if( changes.includes("words_exact"      ) ) t_headsup_CB(e, "words_exact"    );
    if( changes.includes("words_segment"    ) ) t_headsup_CB(e, "words_segment"  );
    if( changes.includes("words_head_tail"  ) ) t_headsup_CB(e, "words_head_tail");


    /* [PARAGRAPHS] */
    if(    changes.includes("containers_hi" )
        || changes.includes("theme_dark"    )
        || changes.includes("theme_DARK"    )
        || changes.includes("theme_LIGHT"   )
    )
        sync_containers_hi();

    /* LAYOUT */
    if( changes.includes("tools_scroll"    ) ) t_sync_tools_scroll();
    if( changes.includes("tools_scroll"    ) ) t_sync_layout(caller);
    if( changes.includes("tools_extras"    ) ) t_sync_layout(caller);
    if( changes.includes("tools_extras"    ) ) t_sync_tools_extras(caller);

    /*}}}*/
    /* STYLES {{{*/
    t_sync_styles();

    /*}}}*/
/* TODO: MAKE SURE CACADING HANDLERS PROVIDE FOR THIS TO HAPEN
*/
    t_sync_doc_LOG_MAP(caller);
};
/*}}}*/
/*_ t_override_USER_OPTION {{{*/
let t_override_USER_OPTION = function(name, value)
{
let log_this = logging_something();
    let caller = "t_override_USER_OPTION("+name+", "+value+")";

    switch(name)
    {
        case "words_options":
        if(!cached_words_options) {
if(log_this) log(caller+": ...caching words_options %c "+words_options, lb1);
            cached_words_options = words_options;
        }
if(log_this) log(caller+": ...overriding words_options from %c "+words_options+" %c to %c "+value, lb1,lbA ,lb2);
        words_options = value;
        break;
    }
};
/*}}}*/
/*_ t_reinstate_USER_OPTIONS {{{*/
let t_reinstate_USER_OPTIONS = function()
{
let log_this = logging_something();
    let caller = "t_reinstate_USER_OPTIONS";

/*
    s_selection_del_cannot_expand();
*/

    if(cached_words_options)
    {
        if(words_options != cached_words_options) {
if(log_this) log(caller+": ...restoring words_options from %c "+words_options+" %c to %c "+cached_words_options+"]",lb2,lbA, lb1);
            words_options        = cached_words_options;
        }
        cached_words_options = "";
    }
};
/*}}}*/
/*}}}*/

/* NODE TO HIDE */
/*{{{*/
/*_ node_to_hide_at_hotspot {{{*/
/*{{{*/
let node_to_hide;

/*}}}*/
let node_to_hide_at_hotspot = function()
{
/*{{{*/
let   caller = "node_to_hide_at_hotspot";
let log_this = LOG_MAP.EV3_UP;

    let x = window.scrollX + h_x;
    let y = window.scrollY + h_y;
if( log_this) log(caller+": %c hotspot=["+h_x+" "+h_y+"] %c XY=["+x+" "+y+"]", lbL+lf1, lbR+lf1);
/*}}}*/
    /* RELEASE CURRENT node_to_hide{{{*/
    if( node_to_hide )
        node_to_hide_release();

    /*}}}*/
    /* SEARCH BODY childNodes {{{*/
    for(let i=0; i < document.body.childNodes.length; ++i)
    {
        let              child = document.body.childNodes[i];
        /* SEARCH BODY.CHILD childNodes {{{*/
        for(let j=0; j < child.childNodes.length; ++j)
        {
            let node = child.childNodes[j];
            if( node_to_hide_is_at_xy(node, x, y) )
            {
                node_to_hide_mark( node );
                break;
            }
        }
        /*}}}*/
        if( node_to_hide ) break;
    }
    /*}}}*/
};
/*}}}*/
/*_ node_to_hide_is_at_xy {{{*/
let node_to_hide_is_at_xy = function(node, x, y)
{
    let caller = "node_to_hide_is_at_xy";
    if(!node.offsetTop              ) return false;
    if(!node.style.display == "none") return false;

    let    xy = t_getPosition(node, caller);
    let result
        =  (x > xy.x)
        && (x < (xy.x + node.offsetWidth ))
        && (y > xy.y)
        && (y < (xy.y + node.offsetHeight))
    ;
/*{{{
logXXX("%c xy=["+xy.x+" "+xy.y+"] %c "+ get_n_txt(node) +" %c TL=["+ node.offsetLeft +" "+ node.offsetTop  +"] %c WH=["+ node.offsetWidth +" "+ node.offsetHeight+"]"
      ,lbL                       ,lbR+lf4                 ,lbL                                                ,lbR)
logXXX(caller+": ...return "+result);
}}}*/
    return result;
};
/*}}}*/
/*_ node_to_hide_mark {{{*/
let node_to_hide_mark = function(node)
{
/*{{{*/
let log_this = LOG_MAP.EV3_UP;

if( log_this) log("node_to_hide_mark: %c node=["+get_n_txt(node)+"]", lbH+lf2);
/*}}}*/

    node_to_hide = node;

    let hidden = (node_to_hide.style.visibility == "hidden");
    if( hidden ) {
        node_to_hide_marked_to_dimm( true);
    }
    else {
        node_to_hide_marked_to_hide( true);
    }
};
/*}}}*/
/*_ node_to_hide_release {{{*/
let node_to_hide_release = function()
{
/*{{{*/
let log_this = LOG_MAP.EV3_UP;

if( log_this) log("node_to_hide_release: %c node_to_hide=["+get_n_txt(node_to_hide)+"]", lbH+lf2);
/*}}}*/
    if(!node_to_hide) return;

    /* FROM DIMM BACK TO HIDE */
    if( node_to_hide_is_marked_to_dimm() ) {
        node_to_hide_set_hidden( true);
    }
    /* OR CLEANSE NODE */
    else {
        node_to_hide_marked_to_dimm(false);
        node_to_hide_marked_to_hide(false);
    }

    /* DROP NODE */
    node_to_hide = null;
};
/*}}}*/
/*_ node_to_hide_toggle {{{*/
let node_to_hide_toggle = function()
{
/*{{{*/
let   caller = "node_to_hide_toggle: node_to_hide=["+get_n_txt(node_to_hide)+"]";
let log_this = LOG_MAP.EV3_UP;
if( log_this) log("node_to_hide_toggle: %c node_to_hide=["+get_n_txt(node_to_hide)+"]", lbH+lf3);
/*}}}*/

    if(!node_to_hide) {
        node_to_hide_at_hotspot();
    }
    else {
        if( node_to_hide_is_marked_to_dimm() ) {
            node_to_hide_set_hidden    (false);
            node_to_hide_marked_to_hide( true);
        }
        else {
            node_to_hide_marked_to_dimm( true);
            node_to_hide_marked_to_hide(false);
        }
    }
};
/*}}}*/

/*_ node_to_hide_set_hidden {{{*/
let node_to_hide_set_hidden = function(state)
{
/*{{{*/
let caller = "node_to_hide_set_hidden("+state+")";
let log_this = LOG_MAP.EV3_UP;
if( log_this) log(caller+": %c node_to_hide=["+get_n_txt(node_to_hide)+"]", lbH+lf2);
/*}}}*/

    if(!node_to_hide) return;

    node_to_hide_marked_to_dimm(false);
    node_to_hide_marked_to_hide( state);

    node_to_hide.style.visibility = state ? "hidden" : "";
    node_to_hide.style.outline    =                    "";
    node_to_hide.style.opacity    =                    "";
};
/*}}}*/
/*_ node_to_hide_marked_to_dimm {{{*/
const MARKED_TO_DIMM = "marked_to_dimm";

let node_to_hide_marked_to_dimm = function(state)
{
/*{{{*/
let caller = "node_to_hide_marked_to_dimm("+state+")";
let log_this = LOG_MAP.EV3_UP;
if( log_this) log(caller+": %c node_to_hide=["+get_n_txt(node_to_hide)+"]", lbH+lf2);
/*}}}*/
    if(!node_to_hide) return;

    if(state) {
        add_el_class(node_to_hide, MARKED_TO_DIMM);
        node_to_hide.style.opacity    = "0.4";
        node_to_hide.style.visibility =    ""; /* required */
    }
    else {
        del_el_class(node_to_hide, MARKED_TO_DIMM);
        node_to_hide.style.opacity = "";
    }
};

let node_to_hide_is_marked_to_dimm = function()
{
    return has_el_class(node_to_hide, MARKED_TO_DIMM);

};
/*}}}*/
/*_ node_to_hide_marked_to_hide {{{*/
const MARKED_TO_HIDE = "marked_to_hide";

let node_to_hide_marked_to_hide = function(state)
{
/*{{{*/
let caller = "node_to_hide_marked_to_hide("+state+")";
let log_this = LOG_MAP.EV3_UP;
if( log_this) log(caller+": %c node_to_hide=["+get_n_txt(node_to_hide)+"]", lbH+lf2);
/*}}}*/
    if(!node_to_hide) return;

    if(state) {
        add_el_class(node_to_hide, MARKED_TO_HIDE);
        node_to_hide.style.outline = "3px dashed #F0F";
    }
    else {
        del_el_class(node_to_hide, MARKED_TO_HIDE);
        node_to_hide.style.outline = "";
    }
};

let node_to_hide_is_marked_to_hide = function()
{
    return has_el_class(node_to_hide, MARKED_TO_HIDE);

};
/*}}}*/
/*}}}*/

/** EVENTS */
/* PARAMS {{{*/
/* PARAMS {{{*/
let CLICK_DURATION         =  500;

let onDown_HSPOT_XY        = { x:0, y:0 }; /* TODO: should become onDown_HSPOT_MID */
let onDown_TOOL_XY         = { x:0, y:0 };
let onDown_PANEL_XY        = { x:0, y:0 };
let onDown_XY_sign         = { x:0, y:0 };
let onMove_pivotXY         = { x:0, y:0 };

let onDown_MS              = 0;
let onDownPMS              = 0;
let onDown_SY              = 0;

let onWork_MOVE_CHILD      = false;
let onWork_MOVE_PANEL      = false;
let onWork_SEEK_TOOL       = false;

let onWork_EL              = null;
let onWork_EL_last_used    = null; /* DEBUG: t_grid_onWork_EL_changed */

let onWork_PANEL           = null;
let onWork_PANEL_magnified = null;
let onStandby_PANEL        = null;
let pivot_PANEL            = null;

let onDown_SELECTION       = null;

/*}}}*/
/* LISTENERS {{{*/
/* NOTE {{{

 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"

 Do not use the "on" prefix. For example, use "click" instead of "onclick".
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
 :!start explorer "https://www.w3schools.com/jsref/met_element_addeventlistener.asp"
 :!start explorer "https://www.w3schools.com/jsref/dom_obj_event.asp"
 :!start explorer "https://www.w3schools.com/charsets/ref_utf_math.asp"

 [preventDefault]
 :!start explorer "https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md"

 [default-passive-events]
 :!start explorer "https://github.com/zzarcon/default-passive-events"
 :!start explorer "https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions"

 option=[capture || true] .. e.eventPhase == (CAPTURING_PHASE || AT_TARGET) .. ( !BUBLINB_PHASE)
 option=[passive) .. will not call preventDefault

}}}*/
/* ADD */
/*_ t_add_listeners {{{*/
let t_add_listeners = function()
{
    /* LAYOUT */
    add_listener_capture_active(       window, "scroll"           , scroll_listener);
    add_listener_capture_active(       window, "resize"           , resize_listener);
    add_listener_capture_active(       window, "orientationchange", layout_listener);

    /* TOUCH */
    if( ("ontouchstart" in document.documentElement) ) {
        add_listener_capture_active(   window, "touchstart"       , mousedown_listener);
        add_listener_capture_active(   window, "touchend"         , mouseup_listener);
    }
    /* MOUSE */
    else {
        add_listener_capture_active(   window, "mousedown"        , mousedown_listener);
        add_listener_capture_active(   window, "mouseup"          , mouseup_listener);
    }

};
/*}}}*/
/*_ add_move_doc_select_listeners {{{*/
let EVENT_CAPTURE        = true;
let add_move_doc_select_listeners = function(_caller)
{
if(LOG_MAP.EV0_LISTEN) t_log_event_status("add_move_doc_select_listeners .. CALLED BY "+ _caller, lf2);
/*
    if(typeof MWebJS != "undefined") MWebJS.eval("SCROLL OFF");
*/

    if(("ontouchmove" in document.documentElement))
        add_listener_capture_active(   window, "touchmove"        , mousemove_page_drag);
    else
        add_listener_capture_active(   window, "mousemove"        , mousemove_page_drag);
};
/*}}}*/
/*_ add_tool_mouse_move_listeners {{{*/
let add_tool_mouse_move_listeners = function(_caller) {
if(LOG_MAP.EV0_LISTEN) t_log_event_status("add_tool_mouse_move_listeners .. CALLED BY "+ _caller, lf2);

    add_listener_capture_active(       window, "mousemove"        , mousemove_tool_drag);
};
/*}}}*/
/*_ add_tool_touch_move_listeners {{{*/
let add_tool_touch_move_listeners = function(_caller) {
if(LOG_MAP.EV0_LISTEN) t_log_event_status("add_tool_touch_move_listeners .. CALLED BY "+ _caller, lf2);

    add_listener_capture_active(       window, "touchmove"        , mousemove_tool_drag);
};
/*}}}*/
/* REMOVE */
/*_ t_del_listeners {{{*/
let t_del_listeners = function() {
    let caller = "t_del_listeners";
if(LOG_MAP.EV0_LISTEN) log(caller, "info");

    /* LAYOUT */
    remove_listener_capture_active    (window, "orientationchange", layout_listener);
    remove_listener_capture_active    (window, "resize"           , resize_listener);
    remove_listener_capture_active    (window, "scroll"           , scroll_listener);

    /* TOUCH (DOWN UP) (HOST TOOL) */
    if( ("ontouchstart" in document.documentElement) ) {
        remove_listener_capture_active(window, "touchstart"       , mousedown_listener);
        remove_listener_capture_active(window, "touchend"         , mouseup_listener);
    }
    /* MOUSE (DOWN UP) (HOST TOOL) */
    else {
        remove_listener_capture_active(window, "mousedown"        , mousedown_listener);
        remove_listener_capture_active(window, "mouseup"          , mouseup_listener);
    }

    /* MOVE (dynamically added) */
    del_move_listeners(caller);
};
/*}}}*/
/*_ del_move_listeners {{{*/
let del_move_listeners = function(_caller) {
if(LOG_MAP.EV0_LISTEN) t_log_event_status("del_move_listeners .. CALLED BY "+ _caller, lf2);
/*
    if(typeof MWebJS != "undefined") MWebJS.eval("SCROLL ON");
*/
    remove_listener_capture_active(    window, "mousemove"        , mousemove_page_drag);
    remove_listener_capture_active(    window, "touchmove"        , mousemove_page_drag);

    remove_listener_capture_active(    window, "mousemove"        , mousemove_tool_drag);
    remove_listener_capture_active(    window, "touchmove"        , mousemove_tool_drag);
};
/*}}}*/
/* PROPAGATION */
/*_ add_listener_capture_active {{{*/
let CAPTURE_TRUE_PASSIVE_FALSE  = {capture:true, passive:false};

let add_listener_capture_active = function(el, ev, fn)
{
    if(!el) return;
if(LOG_MAP.EV0_LISTEN) log("%c add_listener_capture_active("+get_n_lbl(el)+", "+ev+")", lbF+lb8);

    el.   addEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/
/*_ remove_listener_capture_active {{{*/
let remove_listener_capture_active = function(el, ev, fn, uc)
{
    if(!el) return;
if(LOG_MAP.EV0_LISTEN) log("%c remove_listener_capture_active("+get_n_lbl(el)+", "+ev+"]", lbF+lb8);

    el.removeEventListener(ev, fn, CAPTURE_TRUE_PASSIVE_FALSE);
};
/*}}}*/

/*_ t_acceptDefault {{{*/
let t_acceptDefault = function(e, acceptDefault_caller)
{
    if(transcript_events)
        t_log_transcript_event_top("<span style='color:yellow;'>"+ SYMBOL_BLACK_CIRCLE  +"</span>"
            +                      " ACCEPT BUBBLE <em>"+          e.type               +"</em>"
            +                      " <em>"+                        acceptDefault_caller +"</em>"
        );
};
/*}}}*/
/*_ t_preventDefault {{{*/
/*{{{*/
let t_preventDefault_caller;

/*}}}*/
let t_preventDefault = function(e, preventDefault_caller)
{
let log_this = LOG_MAP.EV7_DISPATCH;
if( log_this) t_log_event_status("t_preventDefault("+e.type+") .. CALLED BY "+ preventDefault_caller, lbF+lf3);

    t_preventDefault_caller = preventDefault_caller;

    if(transcript_events)
        t_log_transcript_event_top("<span style='color:red;'>"+ SYMBOL_BLACK_CIRCLE     +"</span>"
            +                      " preventDefault <em>"+      t_preventDefault_caller +"</em>"
        );

    if( e.stopPropagation          ) e.stopPropagation();           /* stop bubbling phase #3 handlers */
    if( e.stopImmediatePropagation ) e.stopImmediatePropagation();  /* stop   target phase #2 handlers */
    if( e.preventDefault           ) e.preventDefault();            /* i.e. return false from within on<event> attribute handler */
/*{{{

log("%c e.stopImmediatePropagation...=["+e.stopImmediatePropagation+"]",lbF+lb8);
log("%c e.preventDefault.............=["+ e.preventDefault         +"]",lbF+lb8);
log("%c e.stopPropagation............=["+ e.stopPropagation        +"]",lbF+lb8);
log("e............bubbles............=["+ e.bubbles                +"]"        );
log("e.........cancelable............=["+ e.cancelable             +"]"        );
log("e.......cancelBubble............=["+ e.cancelBubble           +"]"        );
log("e...defaultPrevented............=["+ e.defaultPrevented       +"]"        );

    if( e.stopImmediatePropagation() ) e.stopImmediatePropagation()();
    if( e.stopPropagation            ) e.stopPropagation();
    if( e.cancelBubble               ) e.cancelBubble =  true;
    if( e.cancelBubble               ) e.cancelBubble =  true; .. depreciated .. (may not reach [outer body])
    if( e.returnValue                ) e.returnValue  = false; .. depreciated

}}}*/
};
/*}}}*/
/*_ t_preventDefault_has_been_called {{{*/

let t_preventDefault_has_been_called = function(_caller)
{
    if( !t_preventDefault_caller ) return false;
    return true;
};
/*}}}*/
/*_ t_restoreDefault {{{*/
let t_restoreDefault = function(restoreDefault_caller)
{
if(logging_something() && t_preventDefault_caller) {

    if(transcript_events)
        t_log_transcript_event_bot( "<span style='color:green;'>"+ SYMBOL_BLACK_CIRCLE +"</span>"
            +                      " <span style='text-decoration:line-through;'>preventDefault</span>"
            +                      " <em>"+ restoreDefault_caller +"</em> was set by "+ t_preventDefault_caller
        );

}
    t_preventDefault_caller = "";
};
/*}}}*/
/*}}}*/
/* LAYOUT {{{*/
/*_ layout_listener {{{*/
let LAYOUT_CHANGED_DELAY = 200;
let layout_changed_timer;
let layout_listener = function()
{
    if(layout_changed_timer ) clearTimeout(layout_changed_timer);
    layout_changed_timer    =   setTimeout(layout_changed, LAYOUT_CHANGED_DELAY); /* wait for new window geometry */

};
/*}}}*/
/*_ resize_listener {{{*/
let resize_listener = function(e)
{
    if(layout_changed_timer ) clearTimeout(layout_changed_timer);
    layout_changed_timer    =   setTimeout(layout_changed, LAYOUT_CHANGED_DELAY); /* wait for new window geometry */

    scroll_changed(e);
};
/*}}}*/
/*_ layout_changed {{{*/
let layout_changed = function()
{
    let caller = "layout_changed";
if(LOG_MAP.T5_LAYOUT) log(caller);

    t_cache_init_by(caller);

    /* DEV TOOLS: Toggle Device Toolbar */
    if(window.matchMedia("only screen and (min-resolution : 128dpi)").matches != behavior_TOUCH_ELSE_DESKTOP)
        document.location.reload();

    t_cache_refresh("Layout changed");

    if( call_t_grid_IS_SIZED() ) dimm_start_grid(caller);

    t_sync_layout(caller);

    t_log_layout_changed(caller);

    t_body_width_show();
    t_body_zoom_show();

    layout_changed_timer = null;
};
/*}}}*/

/*_ scroll_listener {{{*/
/*{{{*/
const SCROLLED_ENOUGH = 16;

let   has_scrolled;
/*}}}*/
let scroll_listener = function(e)
{
    scroll_changed(e);
};
/*}}}*/
/*_ scroll_changed {{{*/
let scroll_changed = function(e)
{
/*{{{
logXXX("scroll_changed: ["+ window.scrollX +" "+ window.scrollY +"]"+ (container_selected ? " container_selected" : "") + (onWork_SEEK_TOOL   ? " onWork_SEEK_TOOL"   : ""))
}}}*/
    /* has_scrolled {{{*/
    if(!has_scrolled &&           (Math.abs(   window.scrollY - onDown_SY)    >    SCROLLED_ENOUGH))
    {
        has_scrolled = "HAS SCROLLED .. abs("+(window.scrollY - onDown_SY)+") > "+ SCROLLED_ENOUGH;

        if(has_scrolled)
            t_set_has_moved( has_scrolled );
    }
    /*}}}*/
    /* revive seeker {{{*/
    if( t_seeker_PU_is_showing() )
        t_seeker_PU_show();

    /*}}}*/
    /* follow [container_selected] {{{*/
    if(container_selected) {
        t_seek_set_onSeek_XY_from_container(container_selected, "SCROLL "+get_n_lbl(container_selected));

if(log_seekspot) t_log_seekspot("FOLLOW container_selected");
    }
    /*}}}*/
    /* display current window scrollY percentage .. (thumb_p) {{{*/
    if(!toolbar_thumb) return;

    /* keep only 2 digits */
    let thumb_p = 100 * window.scrollY / get_page_height();

    toolbar_thumb.innerHTML = get_thumb_p_str(thumb_p).replace(" ","&nbsp;");

    /*}}}*/
    /* track and store tools_scrollY {{{*/
    if(!scroll_done_timeout) {
/*{{{
console_clear("scroll_changed")
logXXX("SCROLLING START")
}}}*/
        add_el_class(document.body, "scrolling");
        scroll_done_timeout = setTimeout(scroll_done_handler, SCROLL_DONE_COOLDOWN);
    }

    /*}}}*/
};
/*}}}*/
/*_ scroll_done_handler {{{*/
/*{{{*/
const SCROLL_DONE_COOLDOWN  =  250;
let   scroll_done_timeout   = null;

let   scroll_done_scrollY   = 0;
/*}}}*/
let scroll_done_handler     = function()
{
/*{{{
logXXX("scroll_done_handler")
}}}*/
    let           o = window.scrollY;
    let done_moving = (o == scroll_done_scrollY);
    if( done_moving )
    {
        /* CALL [node_to_hide_at_hotspot] {{{*/
        if( has_el_class(hotspot, "ondown_in_gutter") )
            node_to_hide_at_hotspot();

        /*}}}*/
/*{{{
logXXX("%c SCROLLING DONE: CALLING t_clr_has_moved", lbb+lbH+lf9)
}}}*/
        t_clr_has_moved("scroll_done_handler");
/*
        t_in_view_nodes_array_collect();//FIXME
*/
        del_el_class(document.body, "scrolling");

        /* STORE SCROLL POSITION */
        if(scroll_done_store_timeout) clearTimeout(scroll_done_store_timeout);
        scroll_done_store_timeout   =   setTimeout(scroll_done_store_handler, SCROLL_DONE_STORE_DELAY);
        scroll_done_timeout         = null;
    }
    else {
        scroll_done_scrollY = o;
        scroll_done_timeout = setTimeout(scroll_done_handler, SCROLL_DONE_COOLDOWN);
    }
};

/*_ scroll_done_store_handler {{{*/
/*{{{*/
const SCROLL_DONE_STORE_DELAY   = 1000;
let   scroll_done_store_timeout = null;

/*}}}*/
let scroll_done_store_handler   = function()
{
/*{{{
logXXX("scroll_done_store_handler: tools_scrollY=["+tools_scrollY+"] .. scroll_done_scrollY=["+scroll_done_scrollY+"]")
}}}*/
    if(tools_scrollY != scroll_done_scrollY)
        store_key_value("tools_scrollY", scroll_done_scrollY);

    scroll_done_store_timeout   = null;
};
/*}}}*/
/*}}}*/
/*_ t_is_scrolling {{{*/
let t_is_scrolling = function()
{
    return (scroll_done_timeout != null);
};
/*}}}*/
/*_ t_in_view_nodes_array_collect {{{*/
/*{{{*/
let t_in_view_nodes_array         = [];

/*}}}*/
let t_in_view_nodes_array_collect = function(dir)
{
/*{{{*/
let caller = "t_in_view_nodes_array_collect";

console.time(caller);/*FIXME*/
/*}}}*/

    /* CURRENT [VIEWPORT TOP BOTTOM] thumb_p {{{*/
    let view_T = window.scrollY;
    let view_B = window.scrollY+ window.innerHeight;
/*{{{
}}}*/
logXXX("...view_T=["+ view_T +"]");
logXXX("...view_B=["+ view_B +"]");
    /*}}}*/

    /* release previously viewable nodes */
    for(let i = 1; i <= t_in_view_nodes_array.length; ++i)
        del_el_class(   t_in_view_nodes_array[i], "viewable");
/*
*/
    t_in_view_nodes_array = [];

    /* collect viewable nodes */
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        /* ...skip unpopulated ones */
        if(!ccs[slot] || (ccs[slot].nodes.length < 1)) continue;

        for(let num = 1; num <= ccs[slot].thumbs.length; ++num)
        {
            let       node    = ccs[slot].nodes[num-1];
            let       node_T  = getRealTop( node );
            let       node_B  = node_T + node.offsetHeight;
            if(      (node_T >= view_T)
                  && (node_B <= view_B)
              ) {
                t_in_view_nodes_array.push( node );
                add_el_class(node, "viewable");
/*
*/
logXXX(". "+t_in_view_nodes_array.length+": slot["+slot+"] num["+num+"]");
/*{{{
}}}*/
            }
        }

    }
console.timeEnd(caller);/*FIXME*/
};
/*}}}*/
/*}}}*/
/* SPREAD {{{*/
/*{{{*/

/*}}}*/
/*_ t_toggle_panel_magnified {{{*/
let t_toggle_panel_magnified = function(panel, new_state, _caller)
{
let log_this  = LOG_MAP.T1_PIVOT;

    let   to_state = new_state;
    let from_state = panel.classList.contains( "magnified" );
    switch(new_state) {
        case  true: to_state =  new_state ; break; /* SET    */
        case false: to_state =  new_state ; break; /* UNSET  */
        default:    to_state = !from_state; break; /* TOGGLE */
    }

    if(to_state == from_state) {
if( log_this) log("t_toggle_panel_magnified("+get_n_lbl(panel)+", "+new_state+") .. NO CHANGE %c CALLED BY "+ _caller, lbF+lb0);

    }
    else {
if( log_this) log("t_toggle_panel_magnified("+get_n_lbl(panel)+", "+new_state+") ... TOGGLED  %c CALLED BY "+ _caller, lbF+lb0);

        if(to_state && t_may_be_magnified(panel)) add_el_class(panel,"magnified");
        else                                      del_el_class(panel,"magnified");
    }
    return to_state;
};
/*}}}*/
/*_ t_toggle_pivot_PANEL_magnified {{{*/
let t_toggle_pivot_PANEL_magnified = function(new_state, _caller)
{
    let caller = "t_toggle_pivot_PANEL_magnified("+new_state+")";
let log_this   = (LOG_MAP.T1_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T5_LAYOUT);
if( log_this) log(caller+" .. CALLED BY "+ _caller);

    if( !pivot_PANEL ) return;

    let state  = t_toggle_panel_magnified(pivot_PANEL, new_state, "t_toggle_pivot_PANEL_magnified");
    if( state != pivot_magnified)
    {
        pivot_magnified = state;
        t_update_store3_site_layout(caller+": pivot_magnified=["+pivot_magnified+"]");

if(log_this) log(caller+": pivot_magnified: %c "+pivot_magnified+" ", (pivot_magnified ? lb2 : lb8));
    }
};
/*}}}*/
/*_ t_is_panel_magnified {{{*/
let t_is_panel_magnified = function(panel)
{
let log_this  = LOG_MAP.T1_PIVOT;

    let state
        = panel.classList.contains("magnified")
    ;
if(log_this) log("%c t_is_panel_magnified(panel=["+get_n_lbl(panel)+"]) %c: ...return "+state, lbF+lb1, lb2);

    return state;
};
/*}}}*/
/*_ t_may_be_magnified {{{*/
let t_may_be_magnified = function(panel)
{
    if(panel == seeker_PD) return true; /* not a deployable_tools .. but can be magnified */
let log_this  = LOG_MAP.T1_PIVOT;

    let reject_reason = "";

    let      map   = tools_map.get(panel);
    if     (!map                                          ) reject_reason =                                "["+get_n_lbl(panel)+ "] NO SUCH PANEL";
    else if( map.w > (w_W / 2)                            ) reject_reason = "["+map.w+" > "+w_W+"/2] .. "+ "["+get_n_lbl(panel)+ "] IS TOO WIDE";
    else if( map.h > (w_H / 2)                            ) reject_reason = "["+map.h+" > "+w_H+"/2) .. "+ "["+get_n_lbl(panel)+ "] IS TOO HIGH";
/*
    else if( onWork_EL && !t_tools_layout_on_mouseup_timer) reject_reason = "["+map.h+" > "+w_H+"/2) .. onWork_EL layout pending";
    else if( onWork_EL                                    ) reject_reason = "["+map.h+" > "+w_H+"/2) .. onWork_EL layout pending";
*/
    let result = (reject_reason == "");

if(log_this) log("t_may_be_magnified("+get_n_lbl(panel)+"): ...return "+result+" %c "+reject_reason, lbF+lb2);
    return result;
};
/*}}}*/
/*}}}*/
/* PIVOT {{{*/
/*_ t_set_pivot_PANEL {{{*/
/*{{{*/
let pivotXY = { x:512 , y:512 };
/*}}}*/
let t_set_pivot_PANEL = function(panel)
{
/*{{{*/
let log_this   = LOG_MAP.T1_PIVOT;
    let caller = "t_set_pivot_PANEL("+get_n_lbl(panel)+")";
if(log_this) t_log_event_status(caller, lf1);

/*}}}*/
    /* [pat_bag] .. (t_pat_bag_open_or_close on focus) {{{*/
    if((panel == pat_bag) && (pivot_PANEL != pat_bag))
        t_pat_bag_open_or_close("SET PIVOT PANEL [pat_bag]");

    /*}}}*/
    /* SAME PANEL {{{*/
    if(pivot_PANEL && (pivot_PANEL == panel))
    {
if(log_this) log("%c"+caller+": UNCHANGED", lbF+lb2);

        return;
    }
    /*}}}*/
    /* RELEASE CURRENT PANEL {{{*/
    if(pivot_PANEL) {
        if( t_is_panel_magnified(    pivot_PANEL ) )
            t_toggle_panel_magnified(pivot_PANEL, false, caller);
    }
    /*}}}*/
    /* SELECT AND STORE NEW PIVOT PANEL {{{*/
    pivot_PANEL = panel;

    if( !pivot_PANEL )
        return;

    /*}}}*/
    /* MOVE PIVOT POINT {{{*/
    t_tools_save_TOOLS_GEOMETRY(caller);

    let map = tools_map.get(pivot_PANEL);
    let   w = map.w;
    let   h = map.h;

    let x = map.x;
    let y = map.y;

    let x_sign = (x > topTool.x) ? 1 : -1;
    let y_sign = (y > topTool.y) ? 1 : -1;
    if( x_sign < 0) x += w;
    if( y_sign < 0) y += h;
/*
log("topTool_xy=["+topTool.x+" "+topTool.y+"] xy_sign=["+x_sign+" "+y_sign+"]");
*/
    /* CHANGE [pivotXY] and [onMove_pivotXY] */
    let cap_x  =  x + x_sign * w * spread_ratio.x;
    let cap_y  =  y + y_sign * h * spread_ratio.y;
    t_set_pivotXY(cap_x, cap_y);

    t_update_store3_site_layout(caller);

    onMove_pivotXY.x = cap_x;
    onMove_pivotXY.y = cap_y;

    t_set_has_moved( caller );

    /*}}}*/
};
/*}}}*/
/*_ t_set_pivotXY {{{*/
let t_set_pivotXY = function(x,y)
{
    if(pivotXY.x != x) pivotXY.x = x;
    if(pivotXY.y != y) pivotXY.y = y;

    if(pivspot) t_tool_set_panel_xy(pivspot, pivotXY.x, pivotXY.y);
};
/*}}}*/

/*_ t_raise_other_PANEL {{{*/
let t_raise_other_PANEL = function(_caller)
{
    if( !t_raise_pivot_PANEL_timer)
    {
        /* PANEL STYLE .. f(pivot_panel other_panel) {{{*/
let log_this   = LOG_MAP.T1_PIVOT;
if( log_this) log("t_raise_pivot_PANEL_timer .. CALLED BY "+ _caller);

        for(let i=0; i < deployable_tools.length; ++i)
        {
            let tool_panel  = deployable_tools[i];
            if( tool_panel == hotspot) continue;
            if( tool_panel == fly_div) continue;
            if( tool_panel == pivot_PANEL) t_toggle_panel_magnified(pivot_PANEL, false, "t_raise_other_PANEL");
            else                           del_el_class(tool_panel, "other_panel");
        }
        /*}}}*/
    }
    t_raise_pivot_PANEL(T_RAISE_PIVOT_PANEL_DELAY_LONG);
};
/*}}}*/
/*_ t_raise_pivot_PANEL {{{*/
/*{{{*/
const T_RAISE_PIVOT_PANEL_DELAY_LONG  = 5000;
const T_RAISE_PIVOT_PANEL_DELAY_SHORT =  500;
let   t_raise_pivot_PANEL_timer;
/*}}}*/
let t_raise_pivot_PANEL = function(delay=0)
{
    if(               t_raise_pivot_PANEL_timer ) {
        clearTimeout( t_raise_pivot_PANEL_timer );
    /*............*/  t_raise_pivot_PANEL_timer  = null;
    }

    if(delay) t_raise_pivot_PANEL_timer = setTimeout( t_raise_pivot_PANEL_handler  , delay);
    else                                              t_raise_pivot_PANEL_handler();
};
/*}}}*/

/*_ t_raise_pivot_PANEL_handler {{{*/
/*{{{*/
const Z_INDEX_PINNED            = -1;
/*}}}*/
let t_raise_pivot_PANEL_handler = function()
{
    /* handler may be called early {{{*/
let log_this   = LOG_MAP.T1_PIVOT;
    let caller = "t_raise_pivot_PANEL_handler";
if(log_this) log(caller+": ...pivot_PANEL=[%c "+get_n_lbl(pivot_PANEL)+" %c]", lb4,lbA);

    /*}}}*/
    /*t_raise_pivot_PANEL_timer = null; .. reset later by onUp_8_ON_MOUSEUP_DONE */
    if( call_t_grid_IS_ON_GRID(caller) ) return;
    /* [selected_tools] {{{*/
    let selected_tools = [];
    for(let i=1; i < deployable_tools.length; ++i)
    {
        let tool_panel = deployable_tools[i];
        if(!tool_panel) continue; /* i.e. fly_div may not be there yet ... TODO */
        if( tool_panel.classList.contains("pinned")) continue;

        let map = tools_map.get(tool_panel);
        if( map.selected) selected_tools.push(tool_panel);
    }

if(log_this) log(".....selected_tools.length=["+ selected_tools.length +"]");
    /*}}}*/
    /* [pivot_rank] {{{*/
    let pivot_idx  = selected_tools.indexOf( pivot_PANEL );
    let pivot_rank = selected_tools.length;
if(log_this) log(".....pivot_idx..........=["+ pivot_idx  +"]");
if(log_this) log(".....pivot_rank.........=["+ pivot_rank +"]");
    let tool_rank = 0;
    /*}}}*/
    for(let i=0; i < selected_tools.length; ++i) {
        /* [tool_rank] {{{*/
        let tool_panel = selected_tools[i];
        let tool_idx   = selected_tools.indexOf( tool_panel );
        let tool_rank  = pivot_rank - Math.abs(pivot_idx - tool_idx);

        let s = "....................".substring(0, tool_rank);
if(log_this) log("["+s+"] ["+get_n_lbl(tool_panel)+"] .. tool_rank=["+tool_rank+"]");

        /*}}}*/
        /* PIVOT PANEL {{{*/
        if(tool_panel == pivot_PANEL)
        {
            del_el_class(tool_panel, "other_panel");
            add_el_class(tool_panel, "pivot_panel");

            tool_panel.style.zIndex    = pivot_rank;
/*
            tool_panel.style.boxShadow = "0px 0px "+(2*pivot_rank)+"px blue";
            tool_panel.style.opacity   = "1";
*/
        }
        /*}}}*/
        /* PINNED PANELS {{{*/
        else if( tool_panel.classList.contains("pinned") )
        {
            del_el_class(tool_panel, "other_panel");
            del_el_class(tool_panel, "pivot_panel");

            tool_panel.style.zIndex    = Z_INDEX_PINNED;
        }
        /*}}}*/
        /* OTHER PANELS {{{*/
        else {
            del_el_class(     tool_panel,                   "pivot_panel");
            if(              !tool_panel.classList.contains("pinned"     ))
                add_el_class( tool_panel,                   "other_panel");

            tool_panel.style.zIndex    = tool_rank;
/*
            tool_panel.style.boxShadow = "0px 0px "+(2*tool_rank)+"px black";
            tool_panel.style.opacity   = tool_rank/2 / pivot_rank;
*/
        }
        /*}}}*/
    }

    /* pat_bag geometry takes time to reflect dynamic content layout .. TODO */
    if(!onWork_PANEL) {
        t_tools_save_TOOLS_GEOMETRY(caller);
        t_tool_set_top_xy(caller, topTool.x, topTool.y);
    }
    else {
/*
if(onWork_PANEL) log("NOT UPDATING GEOMETRY WHILE WORKING ON ["+onWork_PANEL.id+"]");
*/
    }
};
/*}}}*/
/*}}}*/
/* ONDOWN {{{*/
/*_ t_set_onWork_EL .. [onWork_EL  onWork_SEEK_TOOL  onWork_PANEL] {{{*/
let t_set_onWork_EL = function(el,_caller)
{
/*{{{*/
    let caller = "t_set_onWork_EL("+get_n_lbl(el)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_CB;
if( log_this ) log(caller+" .. CALLED BY "+ _caller);
/*}}}*/
    /* [onWork_EL] {{{*/

    onWork_MOVE_CHILD       = false;
    onWork_MOVE_PANEL       = false;
    onWork_SEEK_TOOL        = false;
    onWork_PANEL_magnified  = false;

    if(onWork_EL) onWork_EL_last_used = onWork_EL;
    onWork_EL               = el;

    onWork_PANEL            = null;

    if(!onWork_EL) return;
    /*}}}*/
    /* [onWork_PANEL] [onWork_MOVE_PANEL] [onDown_HSPOT_XY] {{{*/
    if(onWork_PANEL = get_tool_panel(onWork_EL))
    {
        onWork_PANEL_magnified = has_el_class(onWork_PANEL, "magnified");

        if(!tools_map.size  ) t_tools_TOC(caller);
        let  xy             = t_getPosition(onWork_PANEL, _caller);
        let map             = tools_map.get(onWork_PANEL);
        if( map ) { /* i.e. fly_div .. TODO */
            map.x           = xy.x;
            map.y           = xy.y;
        }

        onDown_PANEL_XY.x   = xy.x;
        onDown_PANEL_XY.y   = xy.y;

        if( is_a_movable_panel(onWork_PANEL) )
            onWork_MOVE_PANEL = true;
    }
    /*}}}*/
    /* [onWork_MOVE_CHILD] {{{*/
    if( is_a_movable_tool(onWork_EL) ) {
        onWork_MOVE_CHILD   = true;
        onDown_TOOL_XY.x    = onWork_EL.offsetLeft;
        onDown_TOOL_XY.y    = onWork_EL.offsetTop ;
    }
    /*}}}*/
    /* [onDown_HSPOT_XY] [onDown_XY_sign] [onMove_pivotXY] {{{*/
    onDown_HSPOT_XY.x       = h_x;
    onDown_HSPOT_XY.y       = h_y;

    onDown_XY_sign.x        = (onDown_HSPOT_XY.x < pivotXY.x) ? 1 : -1;
    onDown_XY_sign.y        = (onDown_HSPOT_XY.y < pivotXY.y) ? 1 : -1;

    onMove_pivotXY.x        = parseInt(pivotXY.x);
    onMove_pivotXY.y        = parseInt(pivotXY.y);

/*{{{
log("....hotspot.Left.Top=["+hotspot.offsetLeft    +" "+ hotspot.offsetTop     +"]");
log(".....onDown_HSPOT_XY=["+onDown_HSPOT_XY.x     +" "+ onDown_HSPOT_XY.y     +"]");
log(".onMove_pivotXY=["+onMove_pivotXY.x +" "+ onMove_pivotXY.y +"]");
log("......onDown_XY_sign=["+onDown_XY_sign.x      +" "+ onDown_XY_sign.y      +"]");
}}}*/
    /*}}}*/
    /* [onWork_SEEK_TOOL] .. (one that conveys slot info) {{{*/
    onWork_SEEK_TOOL
        =  (    seeker_PU == onWork_EL )
        || (    seeker_CU == onWork_EL )
/*
        || (    seeker_PD == onWork_EL )
        || (    seeker_CD == onWork_EL )
*/
        || (                 onWork_EL.id.startsWith("thumb_p_"))
        || (                 onWork_EL.id.startsWith("seekspot"))
        || is_node_selected( onWork_EL );

    /*}}}*/
/*{{{*/
if(log_this) t_log_event_status(caller+" .. CALLED BY "+ _caller, lf1);
if(log_this) log("...onDown_PANEL_XY XY=[%c "+ onDown_PANEL_XY.x+" , "+ onDown_PANEL_XY.y+" %c]",lb9,lbA);
/*}}}*/
    /* grid layout sync {{{*/
if(typeof t_grid_onWork_EL_changed != "undefined") t_grid_onWork_EL_changed(_caller);

    /*}}}*/
};
/*}}}*/
/*_ t_get_onDown_tool_label {{{*/
let t_get_onDown_tool_label = function()
{
    return (onWork_PANEL ?       get_n_lbl(onWork_PANEL)      : "")
        +  (onWork_EL    ? " ("+ get_n_lbl(onWork_EL   ) +")" : "")
    ;
};
/*}}}*/
/*_ t_get_onWork_EL_last_used {{{*/
let t_get_onWork_EL_last_used = function()
{
    return onWork_EL_last_used;
};
/*}}}*/
/*_ get_onDown_XY {{{*/
let     onDown_XY = { x:0, y:0 };
let get_onDown_XY = function(e, _caller)
{
    let      xy = get_event_XY(e);
    onDown_XY.x = xy.x;
    onDown_XY.y = xy.y;
/*
logXXX("%c get_event_XY: onWork_SEEK_TOOL=["+onWork_SEEK_TOOL+"] .. CALLED BY "+_caller, lbH+lf7)
*/
};
/*}}}*/
/*_ t_window_scrollTo {{{*/
let t_window_scrollTo = function(x, y, _caller)
{
    window.scrollTo(x, y);
/*
    onMoveDXY.x += (x - window.scrollX);
    onMoveDXY.y += (y - window.scrollY);
*/
    onMoveDXY.x = 0;
    onMoveDXY.y = 0;

/*
logXXX("%c t_window_scrollTo("+x+", "+y+") .. onMoveDXY=["+onMoveDXY.x+" "+onMoveDXY.y+"] .. CALLED BY "+_caller, lbH+lf7)
*/
};
/*}}}*/
/*_ get_onMoveDXY {{{*/
let     onMoveDXY = { x:0, y:0 };
let get_onMoveDXY = function(e, _caller)
{
    let      xy = get_event_XY(e);
    onMoveDXY.x = xy.x - onDown_XY.x;
    onMoveDXY.y = xy.y - onDown_XY.y;
/*{{{
    if(e.altKey) {
        onMoveDXY.x = onDown_XY.x - xy.x;
        onMoveDXY.y = onDown_XY.y - xy.y;
    }
}}}*/
/*
logXXX("%c get_event_XY: onWork_SEEK_TOOL=["+onWork_SEEK_TOOL+"] .. CALLED BY "+_caller, lbH+lf7)
*/
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
    return { x:x , y:y };
};
/*}}}*/
/*_ get_onDown_EL_XY_SY_TL {{{*/
/*{{{*/
/*}}}*/
let get_onDown_EL_XY_SY_TL = function(e)
{
    /* SELECTION XY EL SY {{{*/
let caller = "get_onDown_EL_XY_SY_TL";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

    onDown_SELECTION = window.getSelection();

    /* DOWN: XY */
    get_onDown_XY(e, caller);

    /* DOWN: TOUCHED ELEMENT */
/*
    t_set_onWork_EL(t_get_event_target(e, caller), caller);
*/
    t_set_onWork_EL(e.path ? e.path[0] : e.target, caller);

    /* MOVE: CLEAR DXY */
    onMoveDXY.x = 0;
    onMoveDXY.y = 0;

    /* DOWN: SCROLL-FROM */
    onDown_SY = window.scrollY;

    /*}}}*/
/* TODO.1 */
    /* seek1_onSeekEL seek3_onSeeker seek2_onResume {{{*/
    let seek0_PU_showing
        =   t_seeker_PU_is_showing()
/*      && !t_node_is_off_screen(seeker_PU) */
    ;

    let seek3_onSeeker
        =  (seeker_CU == onWork_EL)
        || (seeker_PU == onWork_EL)
    ;

    let seek1_onSeekEL
        =  !seek3_onSeeker
        && t_is_onSeek_EL(onWork_EL)
    ;

    let seek2_onResume
        =  !seek3_onSeeker
        && !seek1_onSeekEL
        &&  seek0_PU_showing
        &&                 onWork_EL
        && !t_is_onSeek_EL(onWork_EL)
        && !t_is_a_tool_el(onWork_EL, caller)
        && !get_onDown_is_on_scrollbar(e)
    ;

    let lfx
        = seek3_onSeeker ? lf3
        : seek2_onResume ? lf2
        : seek1_onSeekEL ? lf1
        :                  lf8
    ;

    /*}}}*/

    del_el_class(seeker_PU, "seek1_onSeekEL"); /* seek1_onSeekEL */
    del_el_class(seeker_PU, "seek2_onResume"); /* seek2_onResume */
    del_el_class(seeker_PU, "seek3_onSeeker"); /* seek3_onSeeker */

    /* seek3_onSeeker {{{*/
    if( seek3_onSeeker )
    {
        add_el_class(seeker_PU, "seek3_onSeeker");

        onWork_EL          = seeker_PU;
        onWork_SEEK_TOOL   = true;
        onWork_PANEL       = hotspot;

        window.getSelection().removeAllRanges();

        set_seek_grab_done_start_seeking_now();

if(log_seekspot) t_log_seekspot("SEEK SEEKER");
/*
logXXX("%c seek3_onSeeker", lfx)
*/
    }
    /*}}}*/
    /*  seek2_onResume {{{*/
    else if( seek2_onResume )
    {
        add_el_class(seeker_PU, "seek2_onResume");

        onWork_EL          = seeker_PU;

        onWork_SEEK_TOOL   = true;

        window.getSelection().removeAllRanges();

        set_seek_grab_done_start_seeking_now();

if(log_seekspot) t_log_seekspot("SEEK RESUME");
/*
logXXX("%c seek2_onResume", lfx)
*/
    }
    /*}}}*/
    /*  seek1_onSeekEL {{{*/
    else if( seek1_onSeekEL )
    {
        add_el_class(seeker_PU, "seek1_onSeekEL");

        let      slot = t_get_EL_slot(onWork_EL);
        let       num = t_get_EL_num (onWork_EL);
        t_seek_select_slot_num_to(slot, num);

        window.getSelection().removeAllRanges();

        let container =  get_slot_num_container(slot, num);
        t_seek_set_container_selected(container, caller);
        t_seek_set_onSeek_XY_from_container(container, "SEEK "+get_n_lbl(container));

/*
logXXX("%c seek1_onSeekEL", lfx)
*/
if(log_seekspot) t_log_seekspot("SEEK FROM "+get_n_lbl(onWork_EL));
    }
    /*}}}*/
    /* seek .. from pointer {{{*/
    else {
        t_seek_set_onSeek_XY_from_onDown_XY();
/*
logXXX("%c seek .. from pointer", lfx)
*/
if(log_seekspot) t_log_seekspot("FROM POINTER");
    }
    /*}}}*/
if( log_this) t_log_event_status(caller, lfx);
/*{{{*/
if( log_this) {
    console.dir(e);
    log(" %c...onWork_EL=["+get_n_lbl(onWork_EL)       +"%c]"                                          ,lfx,lbA);
    log(" %c...onDown_MS=["+onDown_MS                  +"%c] (-"+(new Date().getTime()-onDown_MS)+"ms)",lfx,lbA);
    log(" %c...onDown_SY=["+onDown_SY                  +"%c]"                                          ,lfx,lbA);
}
/*}}}*/
};
/*}}}*/
/*_ get_onDown_is_on_scrollbar {{{*/
let get_onDown_is_on_scrollbar = function(e)
{
    let is_onDown_scrollbar
        =  (e.clientX > document.documentElement.clientWidth )
        || (e.clientY > document.documentElement.clientHeight)
    ;
/*
logXXX("get_onDown_is_on_scrollbar: ...return "+ is_onDown_scrollbar)
console.dir(e)
logXXX(".......................e.target=["+ get_n_lbl(e.target)                                                             +"]")
logXXX(".............................XY=["+ e.clientX +" "+ e.clientY                                                       +"]")
logXXX("...document.documentElement. WH=["+ document.documentElement.clientWidth +" "+ document.documentElement.clientHeight+"]")
*/
    return is_onDown_scrollbar;
};
/*}}}*/
/*_ get_tool_panel {{{*/
let get_tool_panel = function(el)
{
    let tool_panel = null;
    if(      is_el_or_child_of_parent_el(el, hotspot  ) ) tool_panel = hotspot;
    else if( is_el_or_child_of_parent_el(el, fly_div  ) ) tool_panel = fly_div;
/*
    else if( is_el_or_child_of_parent_el(el, seeker_PU) ) tool_panel = hotspot;
    else if( is_el_or_child_of_parent_el(el, seeker_PD) ) tool_panel = hotspot;
*/
    else {
        for(let i=1; i < deployable_tools.length; ++i)
        {
            if( is_el_or_child_of_parent_el(el, deployable_tools[i]) )
            {
                tool_panel = deployable_tools[i];
                break;
            }
        }
    }
    return tool_panel;
};
/*}}}*/
/*}}}*/
/* SEEK {{{*/
/*{{{*/
let onSeek_XY              = { x:0, y:0 }; /* where to move seeker_PU at next ccs highlighting */

/*}}}*/
/*_ t_seek_set_onSeek_XY_from_onDown_XY {{{*/
let t_seek_set_onSeek_XY_from_onDown_XY = function()
{
    let xy
        = {   x : onDown_XY.x + window.scrollX
            , y : onDown_XY.y + window.scrollY
        };
    t_seek_set_onSeek_XY(xy, "FROM POINTER");
};
/*}}}*/
/*_ t_seek_set_onSeek_XY_from_container {{{*/
let t_seek_set_onSeek_XY_from_container = function(container, label)
{
    if(                    !container ) return;
    let xy = t_getPosition( container, "t_seek_set_onSeek_XY_from_container");
    if( xy ) t_seek_set_onSeek_XY(xy, label);
};
/*}}}*/
/*_ t_seek_set_onSeek_XY {{{*/
let t_seek_set_onSeek_XY= function(xy, label)
{
    onSeek_XY.x     = xy.x - window.scrollX;
    onSeek_XY.y     = xy.y - window.scrollY;
    onSeek_XY.label = label;
};
/*}}}*/
/*}}}*/
/* target moved clicked consumed focus {{{*/
/*_ t_get_event_target {{{*/
let t_get_event_target = function(e, caller)
{
    /* target .. f(event) {{{*/
    let target;
    /* [event.target] {{{

     * A reference to the object that dispatched the event.
     * It is different from [event.currentTarget]
     * . when the event handler is called
     * . during the bubbling
     * . or capturing phase of the event.
     }}} */
    if     (e.path && (e.path[0].tagName != "IMG")) { target = e.path[0];                /*log("e.path..................=["+ e.path                   +"]");*/ }
    else if(e.path &&  e.path[1]                  ) { target = e.path[1];                /*log("e.path..................=["+ e.path                   +"]");*/ }
    else if(e.target                              ) { target = e.target;                 /*log("e.target................=["+ e.target                 +"]");*/ }
    else if(e.originalTarget                      ) { target = e.originalTarget;         /*log("e.originalTarget........=["+ e.originalTarget         +"]");*/ }
    else if(e.explicitOriginalTarget              ) { target = e.explicitOriginalTarget; /*log("e.explicitOriginalTarget=["+ e.explicitOriginalTarget +"]");*/ }

    /*}}}*/
    /* handled_target .. f(handler) {{{*/
    let handled_target;
    switch(e.type)
    {
        /* MOUSE */
        case "mousedown" :
        case "mouseup"   :
        case "touchstart":
        case "touchend"  :
        case "click"     :
        case "dblclick"  :
        if( !t_get_el_mouse_event_handler(target) ) handled_target = t_get_parent_with_tool_event_handler(target);
        break;
        /* KEY */
        case "keydown"   :
        case "keypress"  :
        case "keyup"     :
        if( !t_get_el_onkey_event_handler(target) ) handled_target = t_get_parent_with_tool_event_handler(target);
        break;
        /* INPUT .. (form frame) */
        case "change"    :
        case "focus"     :
        case "select"    :
        case "input"     :
        case "submit"    :
        case "blur"      :
        if( !t_get_el_input_event_handler(target) ) handled_target = t_get_parent_with_tool_event_handler(target);
        break;
        /* NOT HANDLED */
        default:
        log("%c*** t_get_event_target: EVENT TYPE ["+e.type+"] NOT HANDLED", lbF+lb2);
        break;
    }
    if(handled_target)
    {
        target = handled_target;
    }
    /*}}}*/
/* log {{{
onmousedown onmouseup onclick ondblclick
onkeydown onkeypress onkeyup
onchange
onfocus onselect oninput onsubmit onblur TODO

console.dir(e);
console.dir(target);

try { log("target.id......=["+target.id      +"]"); } catch(ex) { console.warn(ex); console.dir(target); }
try { log("target.nodeName=["+target.nodeName+"]"); } catch(ex) { console.warn(ex); console.dir(target); }
try { log("target.tagName.=["+target.tagName +"]"); } catch(ex) { console.warn(ex); console.dir(target); }
}}}*/
/*
let target_label = get_n_lbl((e.path ? e.path[0] : e.target));
logXXX("t_get_event_target("+e.type+" on "+target_label+" .. CALLED BY "+caller+") ...return %c"+get_n_lbl(target), lb5)
*/
    return target;
};
/*}}}*/
/*_ t_set_has_moved {{{*/
/*{{{*/
const MOVED_ENOUGH = 16;
let has_moved      = "";

/*}}}*/
/*_ t_clr_has_moved {{{*/
let t_clr_has_moved = function(_caller)
{
    t_set_has_moved("");
    has_scrolled  = "";
};
/*}}}*/
/*_ t_set_has_moved {{{*/
let t_set_has_moved = function(_caller)
{
    has_moved = _caller;

    if(long_press_timer_is_pending())
        del_long_press_listener(has_moved);
};
/*}}}*/
let t_check_has_moved       = function(dx, dy, _caller) {                 return t_check_has_moved_dx_dy(dx, dy, _caller,   MOVED_ENOUGH) };
let t_check_big_moved       = function(dx, dy, _caller) { has_moved = ""; return t_check_has_moved_dx_dy(dx, dy, _caller, 2*MOVED_ENOUGH) };
let t_check_has_moved_dx_dy = function(dx, dy, _caller, d_min)
{
    if( has_moved                  ) return  true;
    if(!onWork_EL                  ) return false;
    if( move_on_stall_is_pending() ) return false; /* WAKE UP DELAY */

    let dx_dy = Math.max(Math.abs(dx), Math.abs(dy));
    if( onWork_SEEK_TOOL ) t_check_on_seeker(dx, dy, d_min);

    if( dx_dy < d_min) {
        return false;
    }
/*
    t_check_on_seeker_clear(_caller);
*/
    t_set_has_moved(_caller+": "+ get_n_lbl(onWork_EL));

let log_this = LOG_MAP.EV0_LISTEN || logging_EVENTS;
    if(log_this)
    {
        console_warn(has_moved +": "+_caller+"("+dx_dy+")"
         /* + LF + "........onDown_XY: ["+              onDown_XY.x +" "+             onDown_XY.y +"]" */
         /* + LF + "...page offset XY: ["+ window       .scrollX    +" "+          window.scrollY +"]" */
         /* + LF + "...body_scroll XY: ["+ document.body.scrollLeft +" "+ document.body.scrollTop +"]" */
        );
        console_dir(onWork_EL, _caller);
        t_log_event_status(_caller+"("+dx_dy+") .. CALLED BY "+ _caller, lf2);

    }
    return true;
};
/*}}}*/
/*_ t_event_debounced {{{*/
/*{{{*/
const T_EVENT_DEBOUNCE_DELAY = 100;
let   t_event_last_handled   =   {};

/*}}}*/
let t_event_debounced = function(e, _caller)
{
let log_this = logging_something();

    let debounced = false;

    let last_MS = t_event_last_handled[e.type]; if(!last_MS) last_MS = 0;
    let this_MS = new Date().getTime() % 86400000;
    let delay   = this_MS - last_MS;

    debounced = (delay < T_EVENT_DEBOUNCE_DELAY);

    t_event_last_handled[e.type] = this_MS;

if(log_this && debounced) log("t_event_debounced(%c "+e.type+" %c) %c .. CALLED BY ["+_caller+"] %c .. DEBOUNCED "+Math.floor(delay)+" ms .. onWork_EL=["+get_n_lbl(onWork_EL)+"] onWork_PANEL=["+get_n_lbl(onWork_PANEL)+"]",lb5,lbA, lb6,lbA);
    return debounced;
};
/*}}}*/
/*_ is_a_big_drag {{{*/
/*{{{*/
const DRAG_MAX = 1000;
const DRAG_MIN = 200;

/*}}}*/
let is_a_big_drag = function(e)
{
let log_this = logging_EVENTS;

    let this_MS = new Date().getTime();
    let delayMS = onDown_MS ? (this_MS - onDown_MS) : 0;
    let in_hand = (delayMS > DRAG_MIN);
    let spread  = ((spread_ratio.x == 1) || (spread_ratio.y == 1));

    let cause   = "";

    if(in_hand && has_moved && spread    )
        cause = "MOVED FULLY SPREAD AFTER "+ (this_MS-onDown_MS)+" ms .. "+has_moved;

/*{{{
    else if( (onWork_EL_last_used != hotring    )
        &&   (onWork_EL_last_used != pivot_PANEL)
        &&   t_is_a_selected_panel(onWork_EL_last_used)
    )
        cause = "(pivot_PANEL != onWork_EL_last_used)";
logXXX("pivot_PANEL=["+get_n_lbl(pivot_PANEL)+"] onWork_EL_last_used=["+get_n_lbl(onWork_EL_last_used)+"]")
*/
/* works well .. results are not that great ?... */

/*
    else if(delayMS > DRAG_MAX)
        cause = "DRAGGED MORE THAN "+ DRAG_MAX +" ms";
*/
/*}}}*/

    let result  = (cause != "");

if(log_this && result) log("is_a_big_drag: ...return "+result+" .. %c"+cause, lb7);

    return result;
};
/*}}}*/
/*_ is_a_click {{{*/
let is_a_click = function(e)
{
let log_this = logging_EVENTS;

    let cause   = "";
    let this_MS = new Date().getTime();
    let delayMS = onDown_MS ? (this_MS - onDown_MS) : 0;

    if(delayMS <=  CLICK_DURATION) cause = "pressed during "+delayMS+" ms";

    let result  = (cause != "");
if(log_this && result) log("is_a_click: ...return "+result+" .. %c"+cause, lb7);

    return result;
};
/*}}}*/
/*_ is_a_dblclick {{{*/
/*{{{*/
const DBLCLICK_DELAY =       CLICK_DURATION;

/*}}}*/
let is_a_dblclick = function(e, _caller)
{
let   caller = "is_a_dblclick";
let log_this = logging_something();

    let this_MS      = new Date().getTime();
    let delayMS      = onDown_MS ? (this_MS - onDownPMS) : 0;
    let quick_enough = (delayMS  < DBLCLICK_DELAY);
    let multi_click  = (e.detail > 1) || ((e.type == "touchend") && quick_enough);

    is_a_dblclick_last_result = (quick_enough && multi_click);

    let cause
        = "quick_enough=["+quick_enough+"]"
        + ( (e.type == "mouseup")
            ?          " .. click count "+  e.detail
            :          " .. time inteval "+ delayMS +" ms"
        );

if(logging_EVENTS    ) log("%c "+caller   +": .. CALLED BY "+_caller   , lb7);
if(logging_EVENTS    ) log("%c ...cause........: ["+ cause         +"]", lb7);
if(logging_EVENTS    ) log("%c ...e.type.......: ["+ e.type        +"]", lb7);
if(logging_EVENTS    ) log("%c ...e.detail.....: ["+ e.detail      +"]", lb7);
if(logging_EVENTS    ) log("%c ...multi_click..: ["+ multi_click   +"]", lb7);

if(log_this          ) log(caller+": ...return "+is_a_dblclick_last_result+" .. %c"+cause, lb7);

    return is_a_dblclick_last_result;
};
/*}}}*/
/*_ was_a_dblclick {{{*/
let is_a_dblclick_last_result;

let was_a_dblclick = function()
{
    return is_a_dblclick_last_result;
};
let clear_is_a_dblclick_last_result = function()
{
    is_a_dblclick_last_result = false;
};
/*}}}*/
/*_ t_event_set_consumed_by {{{*/
/*{{{*/
let t_event_consumed_cause = "";

/*}}}*/
let t_event_set_consumed_by = function(cause)
{
let log_this = logging_something();
if( log_this) log("t_event_set_consumed_by: %c "+cause, lb0);

    t_event_consumed_cause = cause;
};
/*}}}*/
/*_ t_event_has_been_consumed {{{*/
let t_event_has_been_consumed = function(_caller)
{
/*
if(t_event_consumed_cause) log("t_event_has_been_consumed("+_caller+"): [%c "+t_event_consumed_cause+" %c]", lbF+lb8,lbA);
*/
    return t_event_consumed_cause;
};
/*}}}*/
/*_ t_post_focus_to {{{*/
/*{{{*/
let T_POST_FOCUS_TO_DELAY = 250;
let t_post_focus_to_el;

/*}}}*/
let t_post_focus_to = function(el)
{
    if(t_post_focus_to_el) del_el_class(t_post_focus_to_el,"focussed");
    t_post_focus_to_el = el;

    setTimeout(t_post_focus_to_handler, T_POST_FOCUS_TO_DELAY);
};

let t_post_focus_to_handler = function(el)
{
    if(!t_post_focus_to_el) return;

/*
logXXX("t_post_focus_to_handler: ...moving focus to "+ get_n_lbl(t_post_focus_to_el)+")");
*/
    add_el_class(t_post_focus_to_el,"focussed");

    if( !behavior_TOUCH_ELSE_DESKTOP ) t_post_focus_to_el.focus(); /* TODO *** results in  keyboard popup on mobile */
    t_post_focus_to_el.select();

    let panel = get_tool_panel(t_post_focus_to_el);
    if( panel && (pivot_PANEL != panel) ) {
        t_set_pivot_PANEL( panel );
        t_raise_pivot_PANEL();
        t_toggle_pivot_PANEL_magnified(pivot_magnified, "t_post_focus_to_el");
    }


    t_post_focus_to_el = null;
};

/*}}}*/
/* }}} */
/*}}}*/
/* DOWN {{{*/
/*_ mousedown_listener {{{*/
let mousedown_listener = function(e)
{
    /* log {{{*/
    let caller = "mousedown_listener("+get_n_lbl(t_get_event_target(e, "mousedown_listener"))+")";

if(e.ctrlKey ) { log(); return; } /* right-button-menu override */
if(e.shiftKey) { log(); console_clear("e.shiftKey"); t_preventDefault(e,"e.shiftKey"); t_event_set_consumed_by("e.shiftKey"); return; }

let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if     ( logging_something() && !onStandby_PANEL) { console_clear(caller); log(); }

    /*}}}*/

    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                               let      consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onDown_1_INIT_CTRL_DEBOUNCE_INPUT(e);      consumed_by_css = lb1; if(log_this) t_log_event_status("onDown_1_INIT_CTRL_DEBOUNCE_INPUT", lf1); }
    if(!consumed_by) { consumed_by = onDown_2_TOOL_PICK               (e);      consumed_by_css = lb2; if(log_this) t_log_event_status("onDown_2_TOOL_PICK"               , lf2); }
    if(!consumed_by) { consumed_by = onDown_3_TOOL_GRAB               (e);      consumed_by_css = lb3; if(log_this) t_log_event_status("onDown_3_TOOL_GRAB"               , lf3); }
    if(!consumed_by) { consumed_by = onDown_4_TOOL_DRAG               (e);      consumed_by_css = lb4; if(log_this) t_log_event_status("onDown_4_TOOL_DRAG"               , lf4); }
    if(!consumed_by) { consumed_by = onDown_5_DOC_SELECT_OR_DRAG      (e);      consumed_by_css = lb5; if(log_this) t_log_event_status("onDown_5_DOC_SELECT_OR_DRAG"      , lf5); }
    if(!consumed_by) { consumed_by = e.type+" BUBBLING"; move_on_stall_start(); consumed_by_css = lb6; if(log_this) t_log_event_status("BUBBLING"                         , lf6); }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( log_this) log("%c "+caller+": %c "+consumed_by, lb1, lbF);

    /*}}}*/
};
/*}}}*/

/*_ onDown_1_INIT_CTRL_DEBOUNCE_INPUT {{{*/
let onDown_1_INIT_CTRL_DEBOUNCE_INPUT = function(e)
{
    /* INIT EVENT CHAIN {{{*/
    let caller = "onDown_1_INIT_CTRL_DEBOUNCE_INPUT";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;
if( log_this) log("%c"+caller, lbF+lb1);

    t_clr_log_status();
    t_clr_has_moved(caller);

    set_seek_grab_done_false();
    get_onDown_EL_XY_SY_TL(e);

    if(               t_tools_layout_on_mouseup_timer ) {
        clearTimeout( t_tools_layout_on_mouseup_timer );
        /*.........*/ t_tools_layout_on_mouseup_timer = null;
    }

    t_reinstate_USER_OPTIONS( caller );

    if(t_preventDefault_caller) t_restoreDefault("ON DOWN INIT");

    mousemove_consumed_by = "";
    seek_move_SWAP_HV     = false;

    move_cooldown_handler();

    t_raise_pivot_PANEL_timer = null;

    onDownPMS = onDown_MS;
    onDown_MS = new Date().getTime();

    let consumed_by = "";
    /*}}}*/
    /* DEBOUNCE {{{*/
    if(t_event_debounced(e, "mousedown_listener"))
        consumed_by = caller+": debounced";

    /*}}}*/

if(consumed_by) t_clear(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onDown_2_TOOL_PICK {{{*/
let onDown_2_TOOL_PICK = function(e)
{
    /* [e_target] {{{*/
    let caller = "onDown_2_TOOL_PICK";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;
if( log_this) log("%c"+caller, lbF+lb2);

    let consumed_by = "";
    let e_target = t_get_event_target(e, caller);
    /*}}}*/
    /* [doc_evt_div] {{{*/
    if(doc_evt_div)
    {
        if(    !is_el_or_child_of_parent_el(e_target, doc_evt_div)
            && !is_el_or_child_of_parent_el(e_target, doc_log_div)
        )
            t_doc_div_clear("doc_evt_div")

    }
    /*}}}*/
    /* PIVOT PANEL SWITCH .. (move tool drag) {{{*/
    if(    !consumed_by
        && (onWork_PANEL           )
        && (onWork_PANEL != hotspot)
        && (onWork_PANEL != fly_div)
        && !onWork_PANEL.classList.contains("pinned")
    ) {
        /* SWITCH [pivot_PANEL] {{{*/
        if(onWork_PANEL != pivot_PANEL)
        {
if( log_this) log("PIVOT PANEL SWITCH:");
            let msg
                = caller+": EVENT CANCELED:"
                + LF+"SWITCHING PIVOT PANEL"
                +    " FROM ["+ get_n_lbl(pivot_PANEL ) +"]"
                +      " TO ["+ get_n_lbl(onWork_PANEL) +"]"
                + LF+"...onWork_EL=["+ get_n_lbl(onWork_EL) +"]"
            ;
            t_event_set_consumed_by(msg);

            onWork_MOVE_CHILD = false;
            t_set_pivot_PANEL( onWork_PANEL );
            t_raise_pivot_PANEL();
            t_sync_layout(caller);
        }
        /*}}}*/
        /* CURRENT PANEL .. RAISE & MAGNIFY {{{*/
        else {
            t_raise_pivot_PANEL();
            t_toggle_pivot_PANEL_magnified(pivot_magnified, caller);

            /* INPUT CLICKED */
            if(e_target && (e_target.tagName == "INPUT"))
                consumed_by = caller+": INPUT CLICKED";

        }
        /*}}}*/
    }
    /*}}}*/
    /* INPUT FOCUS {{{*/
    if(!consumed_by && e_target)
    {
        let inputs = e_target.getElementsByTagName("INPUT");
        if(e_target.tagName == "INPUT")
        {
if( log_this) log("...%c INPUT FOCUS TO TARGET:", lb2);
            if( !document.hasFocus() )
            {
                e_target.focus();
                e_target.select();
                consumed_by = caller+": INPUT FOCUS";
            }
        }
        else if(inputs.length)
        {
/*
logXXX(caller+": ...TARGET CONTAINS "+inputs.length+" INPUT NODES")
*/
            for(let i=0; i<inputs.length; ++i)
            {
                let el = inputs[i];
                if( el.tagName == "INPUT")
                {
/*
logXXX("document.activeElement: "+get_n_lbl(document.activeElement)+"")
logXXX(caller+": ...posting focus to "+ get_n_lbl(el)+")");
*/
if( log_this) log("...%c INPUT FOCUS TO CHILD:", lb2);
                    t_post_focus_to(el);
                    break;
                }
            }
        }
    }
    /*}}}*/
    /* CALLING t_preventDefault .. f(onWork_EL or onWork_PANEL handler) {{{*/
    if(!consumed_by)
    {
if( log_this) log("...calling t_preventDefault:");

        let is_a_tool   = t_is_a_tool_el(onWork_EL, caller);
        let has_handler = (t_get_el_event_handler(onWork_EL, caller) != null);
        /*{{{
log(caller);
log("...onWork_EL.................................: "+ get_n_lbl(onWork_EL)   );
log("...onWork_PANEL..............................: "+ get_n_lbl(onWork_PANEL));
log("...is_a_tool.................................: "+ is_a_tool              );
log("...has_handler...............................: "+ has_handler            );
log("...onWork_SEEK_TOOL..........................: "+ onWork_SEEK_TOOL       );
log("...onWork_MOVE_CHILD.........................: "+ onWork_MOVE_CHILD      );
}}}*/

        if     (    onWork_SEEK_TOOL           ) t_preventDefault(e, "<em>ON DOWN</em> <em> SEEK_TOOL             </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
        else if(    onWork_MOVE_CHILD          ) t_preventDefault(e, "<em>ON DOWN</em> <em> MOVE_CHILD            </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
        else if(t_touching_a_scrollable_panel()) {
/*{{{
        if( behavior_TOUCH_ELSE_DESKTOP    ) t_preventDefault(e, "<em>ON DOWN</em> <em> TOOL TOUCHED          </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
        t_preventDefault(e, "<em>ON DOWN   </em> <em> PANNEL SCROLL</em>  <em>"+ get_n_lbl( onWork_PANEL)+ "  </em>");
}}}*/
            t_body_set_scrollng_panel(true);
        }
        else if( is_a_tool                     ) {
            if(     behavior_TOUCH_ELSE_DESKTOP) t_preventDefault(e, "<em>ON DOWN</em> <em> TOOL TOUCHED          </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
            else if(has_handler                ) t_preventDefault(e, "<em>ON DOWN</em> <em> TOOL WITH    HANDLER  </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
            else                                 t_acceptDefault (e, "<em>ON DOWN</em> <em> TOOL WITH NO HANDLER  </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
        }
        else if(    onWork_PANEL               ) {
            if(     has_handler                ) t_preventDefault(e, "<em>ON DOWN</em> <em> PANEL WITH    HANDLER </em>  <em>"+ get_n_lbl( onWork_PANEL )+"</em>");
            else                                 t_acceptDefault (e, "<em>ON DOWN</em> <em> PANEL WITH NO HANDLER </em>  <em>"+ get_n_lbl( onWork_PANEL )+"</em>");
        }
/* TODO NO SCROLL ON MOBILE{{{
        else if(anchor_freeze)                   t_preventDefault(e, "<em>ON DOWN</em> <em> [anchor_freeze] SET   </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");
}}}*/
        else if(log_this)                        t_acceptDefault (e, "<em>ON DOWN</em> <em> NOT A PANEL OR TOOL   </em>  <em>"+ get_n_lbl( onWork_EL    )+"</em>");

    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onDown_3_TOOL_GRAB {{{*/
let onDown_3_TOOL_GRAB = function(e)
{
    /* {{{*/
    let caller = "onDown_3_TOOL_GRAB";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;
if( log_this) log("%c"+caller, lbF+lb3);

    let consumed_by = "";

    let e_target = t_get_event_target(e, caller);
    /*}}}*/
    /* LONG PRESS TIMER {{{*/
    if(    !consumed_by
        && onDown_3_TOOL_has_long_press_handler()
    ) {
if( log_this) log("...LONG PRESS TIMER:");
        add_long_press_listener("ON DOWN GRAB ON "+  get_n_lbl(onWork_PANEL));

        if( dimm_stop_pending() )
            consumed_by = caller+": ADDED LONG PRESS LISTENER ON [dimm_stop_pending]"; /* and consume event */
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onDown_3_TOOL_has_long_press_handler {{{*/
let onDown_3_TOOL_has_long_press_handler = function()
{
    if(!onWork_EL) return   false;
let log_this = LOG_MAP.EV4_LONG_PRESS || logging_EVENTS;

    let handled_by = "";
    if     (                dimm_mask_is(onWork_EL               )                       ) { handled_by = onWork_EL.id;               }
    else if(                            (onWork_EL == transcript1)                       ) { handled_by = onWork_EL.id;               }
    else if(                            (onWork_EL == transcript2)                       ) { handled_by = onWork_EL.id;               }
    else if(                            (onWork_EL   .id        == "div_slot_containers")) { handled_by = onWork_EL.id;               }
    else if(                             onWork_EL   .className.startsWith("class_s_"   )) { handled_by = " A [class_s_] CONTAINER" ; }
    else if( is_el_or_child_of_parent_el(onWork_EL              ,  fly_div              )) { handled_by = " A [fly_div] CHILD"      ; }
    else if((off_bag == onWork_EL) || (bak_bag == onWork_EL) || (  bot_div == onWork_EL )) { handled_by = " A [pat_bag] DIV"        ; }
    else if(            onWork_PANEL                                                     ) { handled_by = " A TOOL PANEL TO MAGNIFY"; }

    let result = (handled_by != "");

if(log_this) log("%c onDown_3_TOOL_has_long_press_handler %c "+t_get_onDown_tool_label()+" %c ...return "+result+" %c ["+handled_by+"]"
                 ,lbL+lf3                                ,lbR+lf3                         ,lbL+lf8                ,lbR+lf3);
    return result;
};
/*}}}*/
/*_ onDown_4_TOOL_DRAG {{{*/
let onDown_4_TOOL_DRAG = function(e)
{
    /* MOVABLE [onWork_EL] [onWork_PANEL] {{{*/
    let caller = "onDown_4_TOOL_DRAG";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;
if( log_this) log("%c"+caller, lbF+lb4);

    if(     onWork_SEEK_TOOL         ) return "";

    if(    !onWork_MOVE_CHILD
        && !onWork_MOVE_PANEL        ) return "";

    if( call_t_grid_IS_SIZED(caller) ) return "";

    let consumed_by = caller+": "+get_n_lbl(onWork_PANEL);
    /*}}}*/
    /* START DRAGGING SOME TOOL PANEL {{{*/
    consumed_by += " START TOOL_DRAG";

    onDown_4_TOOL_DRAG_PUSH_PIN(e);

/* SCROLL FREEZE .. (EMULATOR=OK .. TABLET=KO) {{{
    if(behavior_TOUCH_ELSE_DESKTOP) document.body.style.overflow = "hidden";
}}}*/

    if(e.changedTouches) add_tool_touch_move_listeners(caller);
    else                 add_tool_mouse_move_listeners(caller);

    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onDown_4_TOOL_DRAG_PUSH_PIN {{{*/
let onDown_4_TOOL_DRAG_PUSH_PIN = function(e)
{
    /* [mouse_down_on_a_push_pin] {{{*/
    let caller = "onDown_4_TOOL_DRAG_PUSH_PIN";
let log_this   = LOG_MAP.T1_PIVOT || LOG_MAP.EV1_DOWN;
if( log_this) log("%c"+caller, lbF+lb4);

    let mouse_down_on_a_push_pin = onWork_EL.classList.contains("push_pin");

if(log_this) log("...%c[mouse_down_on_a_push_pin: "+mouse_down_on_a_push_pin+"]%c .. %c[onWork_EL "   +get_n_lbl(onWork_EL   )+"]%c ...classList=["+onWork_EL.classList   +"]",lb4,lbA, lbF,lbA);

    if(!mouse_down_on_a_push_pin ) return;
    /*}}}*/
    /* [pinned] TOGGLE {{{*/
    let pinned = onWork_PANEL.classList.contains("pinned"  );
if(log_this) log("...%c[pinned: "+pinned+"]%c .. %c[onWork_PANEL "+get_n_lbl(onWork_PANEL)+"]%c ...classList=["+onWork_PANEL.classList+"]",lb4,lbA, lbF,lbA);

    pinned = !pinned;

    if(onWork_PANEL == transcript1) transcript1_pinned = pinned;
    if(onWork_PANEL == transcript2) transcript2_pinned = pinned;
    t_update_store3_site_layout(caller);

    if(onWork_PANEL == pivot_PANEL)
        t_set_pivot_PANEL( null );

if(log_this) console.dir(onWork_PANEL);
    onWork_PANEL.style.transformOrigin = "98% 52% 0"; /* near push_pin */

    if( pinned ) { add_el_class(onWork_PANEL,"pinned"); add_el_class(onWork_PANEL,"pinned"); }
    else         { del_el_class(onWork_PANEL,"pinned"); del_el_class(onWork_PANEL,"pinned"); }

    onWork_PANEL.style.position = pinned ? "fixed" : tools_scroll ? "absolute": "fixed";

    /*}}}*/
    /* UNGROUP JUST-PINNED TOOL {{{*/
    if(pinned) {
if(log_this) log("...UNGROUP JUST-PINNED TOOL", lb4);
        if(tools_scroll) {

            let x = onWork_PANEL.offsetLeft - window.scrollX;
            let y = onWork_PANEL.offsetTop  - window.scrollY;

            onWork_PANEL.style.left = x+"px";
            onWork_PANEL.style.top  = y+"px";
        }
/* TODO (180313) removed while tuning t_touching_a_scrollable_panel
        t_set_onWork_EL(onWork_PANEL);
*/
    }
    /*}}}*/
    /* REGROUP JUST-UNPINNED TOOL {{{*/
    else {
if(log_this) log("...REGROUP JUST-UNPINNED TOOL UNDER HOTSPOT", lb4);
        t_set_onWork_EL(onWork_PANEL);
        t_tool_set_top_xy(caller, topTool.x, topTool.y);
    }
    /*}}}*/
};
/*}}}*/
/*_ onDown_5_DOC_SELECT_OR_DRAG {{{*/
let onDown_5_DOC_SELECT_OR_DRAG = function(e)
{
    /* DOC [anchor_freeze] {{{*/
    let caller = "onDown_5_DOC_SELECT_OR_DRAG";
let log_this   = LOG_MAP.T1_PIVOT || LOG_MAP.EV1_DOWN;
if( log_this) log("%c"+caller, lbF+lb5);
/*{{{
logXXX(caller)
logXXX(".............anchor_freeze=["+anchor_freeze+"]")
logXXX("...t_preventDefault_caller=["+t_preventDefault_caller+"]")
logXXX(".............onWork_EL.tagName=["+onWork_EL.tagName+"]")
console.dir(onWork_EL)
console.dir(e)
}}}*/
    let consumed_by = "";
    /*}}}*/
    /* anchor_freeze !t_preventDefault_has_been_called {{{*/
    if(anchor_freeze && !t_preventDefault_has_been_called(caller))
    {
        if(onWork_EL.tagName == "A")
        {
            consumed_by = caller+": SELECT WORD .. (ANCHOR FREEZED)";
            t_preventDefault(e, consumed_by);
        }
        else if(t_get_el_event_handler(onWork_EL, caller) != null)
        {
            consumed_by = caller+": SELECT WORD .. (EVENT HANDLER FREEZED)";
            t_preventDefault(e, consumed_by);
        }
        else {
            let msg     = caller+": SELECT WORD .. ("+get_n_lbl(onWork_EL)+" HAS NO EVENT HANDLER)";
            t_acceptDefault(e, msg);
        }
    }
    /*}}}*/
    /* DOC [onWork_SEEK_TOOL] {{{*/
    if(!consumed_by && onWork_SEEK_TOOL)
    {
        consumed_by = caller+": "+get_n_lbl(onWork_EL);

        add_move_doc_select_listeners( caller );

        add_long_press_listener("ON DOWN SELECT");
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/

/*_ t_touching_a_scrollable_panel {{{*/
let t_touching_a_scrollable_panel = function(panel)
{
    let result
        = behavior_TOUCH_ELSE_DESKTOP
        && (onWork_PANEL == transcript2)
        && (onWork_EL    == transcript2)
/*      && (onWork_PANEL.scrollHeight > onWork_PANEL.clientHeight)*/
    ;

/*
logXXX("t_touching_a_scrollable_panel("+get_n_lbl(onWork_PANEL)+" .. "+get_n_lbl(onWork_EL)+"): ...return "+result)
logXXX("...scrollHeight=["+onWork_PANEL.scrollHeight+"]")
logXXX("...offsetHeight=["+onWork_PANEL.offsetHeight+"]")
logXXX("...clientHeight=["+onWork_PANEL.clientHeight+"]")
*/
    return result;
};
/*}}}*/
/*_ t_body_set_scrollng_panel {{{*/
let t_body_set_scrollng_panel = function(state)
{
/*
logXXX("t_sync_layout("+get_n_lbl(onWork_PANEL)+")")
*/

    document.body.style.overflow = (state ? "hidden" : "");
/*
     if(onWork_PANEL) onWork_PANEL.style.overflow = (state ? "auto" : "hidden");
*/
};
/*}}}*/
/*}}}*/
/* MOVE {{{*/
/*_ mousemove_page_drag {{{*/
/*{{{*/
const SELECT_NEXT_DURATION = 200;

const MOVE_START          = "MOVE_S";
const MOVE_UP             = "MOVE_U";
const MOVE_RIGHT          = "MOVE_R";
const MOVE_DOWN           = "MOVE_D";
const MOVE_LEFT           = "MOVE_L";

let seek_move_SWAP_HV     = false;
let mousemove_consumed_by = "";
/*}}}*/
/*_ set_seek_grab_done {{{*/
let     seek_grab_done = false;
let set_seek_grab_done_start_seeking_now = function() { seek_grab_done =  true; };
let set_seek_grab_done_false             = function() { seek_grab_done = false; };
/*}}}*/
/*_ mousemove_page_drag {{{*/
let mousemove_page_drag = function(e)
{
    /* log {{{ */
let   caller =    "mousemove_page_drag";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T4_SLOT;

    if(!onWork_EL || !onWork_EL.id || !onWork_SEEK_TOOL) return false;
    /*}}}*/
if(!log_this) log_this = e.ctrlKey;
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                   let  log_css = lbF;
    if(!consumed_by) { consumed_by = onMove_1_ON_COOLDOWN  (e); log_css = lb1; }
    if(!consumed_by) { consumed_by = onMove_2_HAS_NOT_MOVED(e); log_css = lb2; }
    if(!consumed_by) {
        /* LONG PRESS dismiss {{{*/
        if(long_press_timer_is_pending())
            del_long_press_listener("PAGE DRAGGED");

        /*}}}*/
        /* SEEKER TO SKIP GRAB SELECTION STEP {{{*/
        if(!seek_grab_done) {
            if     (onWork_EL    == seeker_CU) { seek_grab_done  = true;                           }
            else if(onWork_PANEL == sel_bag  ) { seek_grab_done  = true; seek_move_SWAP_HV = true; }
        }
/*{{{
log("%c seek_grab_done.......=["+ seek_grab_done          +"]", lbb+lf7);
log("%c _onWork_PANEL........=["+ get_n_lbl(onWork_PANEL) +"]", lbb+lf7);
log("%c _onWork_EL...........=["+ get_n_lbl(onWork_EL)    +"]", lbb+lf7);
log("%c _seek_move_SWAP_HV...=["+ seek_move_SWAP_HV       +"]", lbb+lf7);
}}}*/
        /*}}}*/
        /* [dir] .. [HORIZONTAL LEFT RIGHT] [VERTICAL UP DOWN] .. f(seek_grab_done) {{{*/
        let slot =  t_get_onWork_EL_slot();
        let  num =  t_get_onWork_EL_num ();
        let  dir = (!seek_grab_done                              ) ? (                    MOVE_START            )
            :      (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? MOVE_RIGHT : MOVE_LEFT)
            :                                                        ((onMoveDXY.y > 0) ? MOVE_DOWN  : MOVE_UP  )
        ;

        if(seek_move_SWAP_HV) {
            dir =     (dir ==    MOVE_UP) ? MOVE_LEFT
                :     (dir ==  MOVE_DOWN) ? MOVE_RIGHT
                :     (dir == MOVE_RIGHT) ? MOVE_DOWN
                :     (dir ==  MOVE_LEFT) ? MOVE_UP
                :                           dir
            ;
        }
        /*}}}*/
        /* [slot] [num] .. f(dir) {{{*/
        switch(dir) {
            default:
            case MOVE_START: {
                seek_grab_done = true;
                seek_move_SWAP_HV  = (onWork_PANEL == sel_bag);
/*{{{
if(log_this) t_log_event_status(caller, lf2);
}}}*/
            }
            break; /* wait for next move */
            case  MOVE_DOWN: { num +=  1;                 } break;
            case    MOVE_UP: { num += -1;                 } break;
            case  MOVE_LEFT: {
                let to_slot  = t_get_used_slot_dir(slot, -1);
                if( to_slot != slot) {
                    let to_num  = ccs[to_slot].num_selected;
                    t_seek_jump_from_slot_num_to(slot, num, to_slot, to_num);
                    slot       =                                to_slot;
                    num        =                                         to_num;
                }
            }
            break;
            case MOVE_RIGHT: {
                let to_slot  = t_get_used_slot_dir(slot, +1);
                if( to_slot != slot) {
                    let to_num  = ccs[to_slot].num_selected;
                    t_seek_jump_from_slot_num_to(slot, num, to_slot, to_num);
                    slot        =                               to_slot;
                    num         =                                        to_num;
                }
            }
            break;
        }

        /*}}}*/
        /* [num] .. (WRAPSCAN) {{{*/
        if( seek_move_SWAP_HV )
        {
            num = Math.min(ccs[slot].nodes.length, num);
            num = Math.max(1                     , num);
        }
        else {
            num = 1 + (ccs[slot].nodes.length + (num-1)) % ccs[slot].nodes.length;
        }

        let to_slot_num_EL = ccs[slot].nodes[num-1];

        log_css
            = (dir == MOVE_START) ? lb8
            : (dir ==    MOVE_UP) ? lb3
            : (dir == MOVE_RIGHT) ? lb4
            : (dir ==  MOVE_DOWN) ? lb5
            : (dir ==  MOVE_LEFT) ? lb6
            :                       lb8;

        let log_msg
            = "<em style='"+log_css+"'>"+ dir                         +"</em>"
            + "<em>slot "               + slot                        +"</em>"
            + "<em>num "                + num                         +"</em>"
            + "<em>SWAP-HV "            + (seek_move_SWAP_HV ? SYMBOL_CHECK_MARK : "no") +"</em>"
            + "<em>onMoveDXY "          + onMoveDXY.x+" "+onMoveDXY.y +"</em>"
            + "<pre>"
            + "...FROM "                + get_n_lbl( onWork_EL      ) +"<br>"
            + "...TO "                  + get_n_lbl( to_slot_num_EL ) +"<br>"
            + "...PANEL "               + get_n_lbl( onWork_PANEL   )
            +"</pre>";

if(log_this) log_set_TR_SELECT(log_msg, log_css);


        /*}}}*/
        /* SCROLL TO [slot] [num] {{{*/
        if((slot >= 0) && (num > 0))
        {
            t_seeker_PU_show();

            let container = get_slot_num_container(slot, num);
            t_seek_set_container_selected(container, caller);

            let visible = scroll_to_slot_num(slot, num, onSeek_XY);
            t_seeker_move_on_slot_num(slot, num, visible);

            if(visible) t_scrollIntoViewIfNeeded(container);

            /* MOVE COOLDOWN */
            if(e.shiftKey) move_cooldown_short();
            else           move_cooldown_start();
        }
        /*}}}*/
        /* NEXT [onWork_EL] TO DRAG FROM .. f(slot num) {{{*/
        if( onWork_EL    != to_slot_num_EL)
            t_set_onWork_EL(to_slot_num_EL, caller);

        /*}}}*/
        consumed_by = log_msg;
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( log_this && (mousemove_consumed_by != consumed_by)) log("%c "+caller+": %c "+consumed_by, lb9, log_css);

    mousemove_consumed_by = consumed_by;
    /*}}}*/
};
/*}}}*/
/*}}}*/
/*_ mousemove_tool_drag {{{*/
let mousemove_tool_drag = function(e)
{
    /* [onWork_EL] not selected {{{*/
let log_this   = LOG_MAP.EV2_MOVE;

    if(!onWork_EL) return;

    let caller = "mousemove_tool_drag";
/*
if( log_this) log(caller+": NODE=["+get_n_lbl(onWork_EL)+"] .. PANEL=["+get_n_lbl(onWork_PANEL)+"]");
*/

    /* onWork_PANEL new CENTER */
    get_onMoveDXY(e, caller);

    let x = onDown_XY.x + onMoveDXY.x;
    let y = onDown_XY.y + onMoveDXY.y;

    /* indirect hotspot dragging */
    if(onWork_PANEL == hotspot) {
        x -= onDown_XY.x - onDown_PANEL_XY.x;
        y -= onDown_XY.y - onDown_PANEL_XY.y;
        if( hotspot.style.transform != "") {
            x -= onDown_XY.x - onDown_PANEL_XY.x;
            y -= onDown_XY.y - onDown_PANEL_XY.y;
        }
    }

    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                                   let consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onMove_2_HAS_NOT_MOVED(e           );     consumed_by_css = lb2; }
    if(!consumed_by) { consumed_by = onMove_3_PINNED_TOOL  (e, x, y     );     consumed_by_css = lb3; }
    if(!consumed_by) { consumed_by = onMove_4_MOVING_TOOL  (e, x, y     );     consumed_by_css = lb4; }
    if(!consumed_by) { consumed_by = "DRAGGING ["+get_n_lbl(onWork_PANEL)+"]"; consumed_by_css = lb5;

        if(onWork_PANEL)
        {
            /* SHOW ALL SPREADED PANELS */
            if(   (t_raise_pivot_PANEL_timer == null)
                && is_a_big_drag()
            ) {
                t_raise_other_PANEL(caller);
            }

            if(onWork_PANEL == hotspot) {
                mousemove_hotspot(x,y);
            }
            else {
                t_set_pivotXY( onMove_pivotXY.x + onMoveDXY.x
                    ,          onMove_pivotXY.y + onMoveDXY.y);
                t_tool_set_top_xy(caller, topTool.x, topTool.y);
            }
        }

    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( log_this && (mousemove_consumed_by != consumed_by)) log("%c "+caller+": %c "+consumed_by, lb2, lbF);

    mousemove_consumed_by = consumed_by;
    /*}}}*/
};
/*}}}*/
/*_ mousemove_hotspot {{{*/
let mousemove_hotspot = function(x,y)
{
    t_tool_set_panel_xy(hotspot, x, y);
    /* drag pivspot .. f(tools_drag) {{{*/
    if( tools_drag )
    {
        let move_x = false;
        let move_y = false;

        let margin = h_W / 2;
        if     ((onDown_XY_sign.x >  0) && ((x+margin) >  pivotXY.x)) { onMove_pivotXY.x = x+margin; onMoveDXY.x = 0; move_x = true; }
        else if((onDown_XY_sign.x <= 0) && ((x-margin) <= pivotXY.x)) { onMove_pivotXY.x = x-margin; onMoveDXY.x = 0; move_x = true; }

        if     ((onDown_XY_sign.y >  0) && ((y+margin) >  pivotXY.y)) { onMove_pivotXY.y = y+margin; onMoveDXY.y = 0; move_y = true; }
        else if((onDown_XY_sign.y <= 0) && ((y-margin) <= pivotXY.y)) { onMove_pivotXY.y = y-margin; onMoveDXY.y = 0; move_y = true; }

        if(move_x || move_y)
            t_set_pivotXY( move_x ? onMove_pivotXY.x : pivotXY.x
                ,          move_y ? onMove_pivotXY.y : pivotXY.y);
    }
    /*}}}*/
    t_tool_set_top_xy("mousemove_hotspot", x, y);
};
/*}}}*/

/*_ onMove_1_ON_COOLDOWN {{{*/
let onMove_1_ON_COOLDOWN = function(e)
{
    let caller = "onMove_1_ON_COOLDOWN";

    let                                   consumed_by = "";
    if     ( t_is_scrolling()           ) consumed_by = caller+": SCROLLING";
    else if( move_cooldown_is_pending() ) consumed_by = caller+": MOVE COOLDOWN";

    if(consumed_by)
    {
        consumed_by += ".. (get_onDown_XY tracking)";

        get_onDown_XY(e, caller);
        onMoveDXY.x = 0;
        onMoveDXY.y = 0;
    }

    return consumed_by;
};
/*}}}*/
/*_ onMove_2_HAS_NOT_MOVED {{{*/
let onMove_2_HAS_NOT_MOVED = function(e)
{
    /* [has_moved] {{{*/
    let caller = "onMove_2_HAS_NOT_MOVED";
    if(has_moved && long_press_timer_is_pending())
        del_long_press_listener(caller);

    if(has_moved) return "";

let log_this = (LOG_MAP.EV0_LISTEN || logging_EVENTS|| LOG_MAP.EV2_MOVE);
if(!log_this) log_this = e.ctrlKey;
if( log_this ) t_log_event_status(caller, lbF);

    /*}}}*/
    /* YES FOR [hotspot] .. NO LAG {{{*/
    if(      (hotspot == onWork_PANEL)
        && !t_hotspot_in_gutter(onDown_HSPOT_XY.x, onDown_HSPOT_XY.y)
    ) {
        t_set_has_moved(caller+": no lag for hotspot when not in a gutter");

        del_el_class(pivspot, "hidden");

        return ""; /* HAS MOVED ENOUGH */
    }
    /*}}}*/
    /* YES FOR [fly_div] .. NO LAG {{{*/
    if(onWork_PANEL == fly_div)
    {
/*
        t_set_has_moved(caller+": no lag for fly_div");
*/

        return ""; /* HAS MOVED ENOUGH */
    }
    /*}}}*/
    /* TRACK [onMoveDXY] .. f(WAKE UP DELAY .. move_on_stall_is_pending) {{{*/
    if( move_on_stall_is_pending() )
    {
        let has_not_moved  = "MOVE ON STALL WAKEUP DELAY";

        has_not_moved     += ".. (get_onDown_XY tracking)";
        get_onDown_XY(e, caller);
        onMoveDXY.x = 0;
        onMoveDXY.y = 0;

        return has_not_moved;
    }
    /*}}}*/
    /* HAS MOVE CHECK {{{*/
    if(!has_moved ) {
        get_onMoveDXY(e, caller);

        t_check_has_moved(onMoveDXY.x, onMoveDXY.y, caller);
    }
    /*}}}*/
    /* HAS MOVED: MOVE PANEL OR CHILD {{{*/
    if( has_moved ) {
        if(long_press_timer_is_pending())
            del_long_press_listener("HAS MOVED "+has_moved);

        if(onWork_MOVE_CHILD) onMove_2_GRAB_PANEL_CHILD();

        let moving_panel
            =                               onWork_PANEL
            &&                             !onWork_MOVE_CHILD
            && !is_el_or_child_of_parent_el(onWork_EL, fly_div)
        ;
        if( moving_panel ) del_el_class(pivspot, "hidden");

        return ""; /* HAS MOVED ENOUGH */
    }
    /*}}}*/
    return "HAS NOT MOVE ENOUGH";
};
/*}}}*/
/*_ onMove_2_GRAB_PANEL_CHILD {{{*/
/*{{{*/
let mov_src_div;
let mov_dst_div;
/*}}}*/
let onMove_2_GRAB_PANEL_CHILD = function()
{
    /*{{{*/
let log_this   = (LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE);
    let caller = "onMove_2_GRAB_PANEL_CHILD";

    /*}}}*/
    /* onWork_PANEL_magnified {{{*/
    if(onWork_EL.parentElement)
    {
        onDown_XY.x      -= onWork_EL.offsetLeft;
        onDown_XY.y      -= onWork_EL.offsetTop ;
        onDown_TOOL_XY.x -= onWork_EL.offsetLeft;
        onDown_TOOL_XY.y -= onWork_EL.offsetTop ;

        if(onWork_PANEL_magnified) {
            onDown_XY.x  -= onWork_EL.offsetLeft;
            onDown_XY.y  -= onWork_EL.offsetTop ;
        }
    }
    /*}}}*/
    /* parent_div offset {{{*/
    let parent_div  = t_get_parent_with_TAG(onWork_EL,"DIV");
/*
    if( parent_div  == bak_bag) {
        onDown_XY.x -= bak_bag.offsetLeft * (onWork_PANEL_magnified ? 2 : 1);
        onDown_XY.y -= bak_bag.offsetTop  * (onWork_PANEL_magnified ? 2 : 1);
    }
*/
    /*}}}*/
    /* parent_div_has_movable_child {{{*/
    let parent_div_has_movable_child
        =  (parent_div == pat_bag)
        || (parent_div == off_bag)
        || (parent_div == bak_bag)
    ;

    if(!parent_div_has_movable_child) return;
    /*}}}*/

    /* switch to moving a clone */
    onWork_EL = t_pat_bag9_grab_item( parent_div );
};
/*}}}*/
/*_ onMove_3_PINNED_TOOL {{{*/
let onMove_3_PINNED_TOOL = function(e,x,y)
{
    /* [!pinned] {{{*/
    let caller = "onMove_3_PINNED_TOOL";

    if(!onWork_PANEL                              ) return "";
    /*}}}*/
    if(t_touching_a_scrollable_panel()) {
        if(!has_el_class(onWork_PANEL, "empty")   ) return caller+": SCROLLING PANEL";
    }
    if(!onWork_PANEL.classList.contains("pinned") ) return "";
    /* dismiss long press timer on big move {{{*/
    if(long_press_timer_is_pending())
    {
        if(t_check_big_moved(onMoveDXY.x, onMoveDXY.y, caller) && long_press_timer_is_pending())
            del_long_press_listener("MOVE PINNED");

    }
    /*}}}*/
    /* move pinned {{{*/

    x -= onDown_XY.x - onDown_PANEL_XY.x;
    y -= onDown_XY.y - onDown_PANEL_XY.y;

    let x_min =       (  BOX_MARGIN) - onWork_PANEL.offsetWidth;
    let x_max = w_W - (2*BOX_MARGIN);
    let y_min =       (  BOX_MARGIN) - onWork_PANEL.offsetHeight;
    let y_max = w_H - (2*BOX_MARGIN);

    x = (x < x_min) ? x_min : (x > x_max) ? x_max : x;
    y = (y < y_min) ? y_min : (y > y_max) ? y_max : y;

    onWork_PANEL.style.left = x +"px";
    onWork_PANEL.style.top  = y +"px";

    let consumed_by = caller+": PINNED ["+get_n_lbl(onWork_PANEL)+"]";
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*XXX t_pat_bag9_grab_item_mov_div_xy */
/*_ onMove_4_MOVING_TOOL {{{*/
let onMove_4_MOVING_TOOL = function(e,x,y)
{
    /* [onWork_MOVE_CHILD] {{{*/
    if(!onWork_MOVE_CHILD) return "";

    let caller = "onMove_4_MOVING_TOOL";
let log_this   = (LOG_MAP.EV0_LISTEN || logging_EVENTS|| LOG_MAP.EV2_MOVE);
if(log_this) t_log_event_status(caller, lf4);

    /*}}}*/
    /* MOVE TOOL {{{*/
    let consumed_by = caller+": MOVING ["+get_n_lbl(onWork_EL)+"]";

    x -= onDown_XY.x;
    y -= onDown_XY.y;
y -= onWork_EL.offsetHeight * (behavior_TOUCH_ELSE_DESKTOP ? 1.5 : 0.5);/* TODO CONFIRM */

    let   p_W = onWork_EL.parentElement.offsetWidth ;
    let   p_H = onWork_EL.parentElement.offsetHeight;
    let   e_W = onWork_EL              .offsetWidth ;
    let   e_H = onWork_EL              .offsetHeight;

    let x_min = 0 - onDown_TOOL_XY.x;
    let x_max = p_W - e_W;
    let y_min = 0 - onDown_TOOL_XY.y;
    let y_max = p_H - e_H;

    if(onWork_PANEL_magnified) {
        x /= 2;
        y /= 2;
    }

    x = (x < x_min) ? x_min : (x > x_max) ? x_max : x;
    y = (y < y_min) ? y_min : (y > y_max) ? y_max : y;

    if( t_pat_bag9_grab_item_is_mov_div() )
    {
        t_pat_bag9_grab_item_mov_div_xy(e, x, y);
    }
    else {
        onWork_EL.style.left = x +"px";
        onWork_EL.style.top  = y +"px";
    }

    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*}}}*/
/* UP {{{*/
/*_ mouseup_listener {{{*/
/*{{{*/
const MOUSEUP_DBL_CLICK  = "DBL_CLICK";
const MOUSEUP_CLICK      = "CLICK";
const MOUSEUP_LONG_PRESS = "LONG_PRESS";

/*}}}*/
let mouseup_listener  = function(e)
{
    /* {{{*/
let log_this   = (LOG_MAP.EV0_LISTEN || logging_EVENTS|| LOG_MAP.EV3_UP);
    let caller = "mouseup_listener";
if( log_this) t_log_event_status(caller, lf8);
    /*}}}*/
    /* DEBOUNCE CTRL INPUT {{{*/
    if( t_event_debounced(e, caller)               ) return;
    if( e.ctrlKey                                  ) return;
/*
    if( onWork_EL && (onWork_EL.tagName == "INPUT")) return;
*/
    /*}}}*/
    /* del_move_listeners {{{*/

    del_move_listeners( caller );

    /*}}}*/
    /* del_long_press_listener {{{*/
    if(long_press_timer_is_pending())
        del_long_press_listener("MOUSE UP");

    /*}}}*/
/* log event chain {{{*/
/*
if( log_this ) console_dir(e);
if( log_this ) log("...onWork_EL=["+(onWork_EL ? onWork_EL.tagName : "")+"]");
if( log_this ) log("..........id=["+(onWork_EL ? onWork_EL.id      : "")+"]");
if( log_this ) log("..........XY=["+e.clientX+" "+e.clientY+"]");
*/
/*}}}*/
    /* [has_moved] [clicked] [dblclicked] [LONG-PRESS] {{{*/
    get_onMoveDXY(e, caller);

    if(!has_moved) t_check_has_moved(onMoveDXY.x, onMoveDXY.y, caller);

/*
logXXX(" %c..........has_scrolled=["+ has_scrolled        +"%c]",lf8,lbA);
logXXX(" %c.............onDown_SY=["+ onDown_SY           +"%c]",lf8,lbA);
logXXX(" %c........window.scrollY=["+ window.scrollY      +"%c]",lf8,lbA);
logXXX(" %c...scroll_done_scrollY=["+ scroll_done_scrollY +"%c]",lf8,lbA);
    if(!has_moved && (Math.abs(       scroll_done_scrollY - onDown_SY) > SCROLLED_ENOUGH))
    if(!has_moved && (Math.abs(            window.scrollY - onDown_SY) > SCROLLED_ENOUGH))
*/
    if(!has_moved && behavior_TOUCH_ELSE_DESKTOP && has_scrolled)
        t_set_has_moved( has_scrolled );

    let clicked   = is_a_click() && !move_cooldown_is_pending();
    if( clicked ) last_click_event = e;

    let dblclicked =  clicked && is_a_dblclick(e, caller);

    let detail
        = has_moved  ? has_moved
        : dblclicked ? MOUSEUP_DBL_CLICK
        :    clicked ? MOUSEUP_CLICK
        :              MOUSEUP_LONG_PRESS
    ;
    caller += " "+detail;

    if(log_this) t_log_event_UP(caller, clicked, dblclicked, lb8);

    /*}}}*/
    /* EVENT CONSUME OR BUBBLE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";
    if(!consumed_by) { consumed_by = onUp_1_TOOL_GRID_CB     (e                   ); if(log_this) t_log_event_status("onUp_1_TOOL_GRID_CB"     , lf1); }
    if(!consumed_by) { consumed_by = onUp_2_SLOT_CONTAINER_CB(e,clicked           ); if(log_this) t_log_event_status("onUp_2_SLOT_CONTAINER_CB", lf2); }
    if(!consumed_by) { consumed_by = onUp_3_DOC_TOOL_CB      (e,clicked,dblclicked); if(log_this) t_log_event_status("onUp_3_DOC_TOOL_CB"      , lf3); }
    if(!consumed_by) { consumed_by = onUp_4_TOUCH_CB         (e,clicked,dblclicked); if(log_this) t_log_event_status("onUp_4_TOUCH_CB"         , lf4); }
    if(!consumed_by) { consumed_by = onUp_5_TOOL_CB          (e,clicked,dblclicked); if(log_this) t_log_event_status("onUp_5_TOOL_CB"          , lf5); }
    if(!consumed_by) { consumed_by = onUp_6_DOC_CB           (e,clicked,dblclicked); if(log_this) t_log_event_status("onUp_6_DOC_CB"           , lf6); }
    if(!consumed_by) { consumed_by = onUp_7_ON_EVENT_CONSUMED(e                   ); if(log_this) t_log_event_status("onUp_7_ON_EVENT_CONSUMED", lf7); }
    if(!consumed_by) { consumed_by = e.type+" BUBBLING";                             if(log_this) t_log_event_status("BUBBLING"                , lf8); }
    /*..........................*/ onUp_8_ON_MOUSEUP_DONE();

    /* DONE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
/*{{{
log("%c"+caller+":", lbF);
log("_ e..........path[0]=["+get_n_lbl(e.path[0])+"]");
log("_ e..........handler=["+get_n_lbl(t_get_parent_with_tool_event_handler(e.path[0]), caller)+"]");
log("_ e..........bubbles=["+e.bubbles+"]");
log("_ e.......cancelable=["+e.cancelable+"]");
log("_ e.....cancelBubble=["+e.cancelBubble+"]");
log("_ e.defaultPrevented=["+e.defaultPrevented+"]");
log(consumed_by);
}}}*/

if( log_this) log("%c"+caller+" %c "+consumed_by, lbL+lf8, lbR+lf9);
    if(transcript_events)
        t_log_transcript_event_bot("<span class='big'>"+ SYMBOL_UP_ARROW +"</span>"
            +                      "<em>"+               consumed_by     +"</em>");

    /*}}}*/
};
/*}}}*/

/*_ onUp_1_TOOL_GRID_CB {{{*/
let onUp_1_TOOL_GRID_CB = function(e)
{
    /*  [call_t_grid_IS_ON_GRID] {{{*/
    let caller = "onUp_1_TOOL_GRID_CB";
let log_this   = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbF+lb1);

    if(!call_t_grid_IS_ON_GRID(caller) ) return "";

    let consumed_by   = caller+": ["+get_n_lbl(onWork_EL)+"]";
    /*}}}*/
    /* [hotring] || [dimm_mask] .. [call_t_grid_ON_OFF_CB] {{{*/
    if(    (onWork_EL == hotring)
        || dimm_mask_is(onWork_EL)
    ) {
        consumed_by += " MOVING TOOLS OFF GRID (UP)";
        call_t_grid_ON_OFF_CB(false);

        /* selected tools may have been changed */
        t_sync_layout(caller);
    }
    else {
        consumed_by += " KEEPING TOOLS ON GRID ";
        if(typeof t_grid_TOOLS_SELECT != "undefined") t_grid_TOOLS_SELECT(e);
    }
    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onUp_2_SLOT_CONTAINER_CB {{{*/
let onUp_2_SLOT_CONTAINER_CB = function(e,clicked)
{
    /* log {{{*/
    let caller = "onUp_2_SLOT_CONTAINER_CB";
let log_this   = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbF+lb2);

    if(!clicked ) return "";

    if( !dimm_mask_displayed() ) return "";

    let consumed_by = "ON "+ get_n_lbl(onWork_EL)+" ..";
    /*}}}*/
    /* COPY TO CLIPBAORD {{{*/
    if( has_el_class(onWork_EL,"em_copy") )
    {
        consumed_by += "CLICK CLIPBOARD COPY ..";
        t_copy_el_outerHTML_to_clipboard( onWork_EL.parentElement );
    }
    /*}}}*/
    /* SCROLL TO SLOT CONTAINER {{{*/
    let  dismissing_slot_containers = dimm_mask_is(onWork_EL);
    let div_slot_containers_clicked = (onWork_EL.id == "div_slot_containers");

    if(    !dismissing_slot_containers
        && !div_slot_containers_clicked
    ) {
        let e_target = t_get_event_target(e, caller);

        if( has_el_class(e_target, "em_copy") ) e_target = e_target.parentElement;

        consumed_by += " SCROLL "+t_onclick_target_handle_scroll_to_slot_num(e_target, caller);
    }
    else {
        consumed_by
            += (dismissing_slot_containers  ? " [dismissing_slot_containers]"  : "")
            +  (div_slot_containers_clicked ? " [div_slot_containers_clicked]" : "")
        ;
    }
    /*}}}*/
    /* DIM HIDING {{{*/
    dimm_stop(caller);

    /*}}}*/
if(log_this) log("%c"+consumed_by, lbR+lf2);
    return caller+": "+consumed_by;
};
/*}}}*/
/*_ onUp_3_DOC_TOOL_CB {{{*/
let onUp_3_DOC_TOOL_CB = function(e,clicked,dblclicked)
{
    /* clicked dblclicked consumed TOOL {{{*/
    let caller = "onUp_3_DOC_TOOL_CB";
let log_this   = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbF+lb3);

    if( !onWork_EL                         ) return "";
    if( dblclicked                         ) return "";
    if( t_event_has_been_consumed(caller)  ) return "";

    let consumed_by;
    /*}}}*/
    /* [clicked doc_div] .. (PLAYGROUND EMBEDDED TOOL) {{{*/
    if( clicked )
    {
        let doc_div = onWork_EL.id.startsWith("doc_evt_div") ? doc_evt_div
            :         onWork_EL.id.startsWith("doc_log_div") ? doc_log_div
            :         null;
if(log_this) log("doc_div="+get_n_lbl(doc_div));

        if(doc_div) {
            if(has_el_class(onWork_EL, "clearpin")) {
                consumed_by     = "EMBEDDED TOOL: CLEARING "+doc_div.id;
                t_doc_div_clear(doc_div.id);
            }
            else {
                consumed_by     = "EMBEDDED TOOL: CLICK IGNORED";
            }
        }
    }
    /*}}}*/
    /*XXX DRAFT */
    /* [hotspot] [NOT clicked] + [NOT has_moved] {{{*/
/*{{{
    if(      !clicked
          && !has_moved
          && (onWork_PANEL == hotspot)
      ) {
        consumed_by = "hotspot LONG CLICK: ... DO SOMETHING";

    }
}}}*/
    /*}}}*/
    /*XXX DRAFT */
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onUp_4_TOUCH_CB {{{*/
let onUp_4_TOUCH_CB = function(e,clicked,dblclicked)
{
    /* clicked dblclicked consumed handler {{{*/
    let caller = "onUp_4_TOUCH_CB";
let log_this   = LOG_MAP.EV3_UP;

    let dismissed
    = ( anchor_freeze                      ) ? "anchor_freeze"
    : ( dblclicked                         ) ? "dblclicked"
    : (   !clicked                         ) ? "!clicked"
    : ( t_event_has_been_consumed(caller)  ) ? t_event_consumed_cause
    :                                          "";
    let el_event_handler;
    if(!dismissed) {
        el_event_handler = t_get_el_event_handler(onWork_EL, caller);

        if( el_event_handler == null       ) dismissed = "NO EVENT HANDLER";
    }
if( log_this && dismissed) log("%c"+caller+"%c dismissed by %c"+dismissed, lbF+lb4, lbA, lbF+lb0);
    if(dismissed) return "";
if( log_this) log("%c"+caller, lbF+lb4);

if( log_this) log("...handler=["+el_event_handler.label+"]", lb0);
    let consumed_by;
    /*}}}*/
    /* MOBILE EVENT HANDLER .. CALLING {{{*/
    if(behavior_TOUCH_ELSE_DESKTOP && t_preventDefault_caller)
    {
        consumed_by = "MOBILE  CALLING EVENT HANDLER ["+     get_n_lbl(onWork_EL) +"] HANDLER";

        if(t_preventDefault_caller) t_restoreDefault("ON TOUCH UP");

        el_event_handler.handler(e);
        t_cache_init_by( consumed_by );
    }
    /*}}}*/
    /* DESKTOP DOC EVENT HANDLER .. BUBBLING {{{*/
    else if(!t_is_a_tool_el(onWork_EL, caller))
    {
        consumed_by = "DESKTOP BUBBLING TO DOC EVENT HANDLER <em>"+ get_n_lbl(onWork_EL) +"</em> HANDLER";
    }
    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onUp_5_TOOL_CB {{{*/
let onUp_5_TOOL_CB = function(e,clicked,dblclicked)
{
    /* TOOL {{{*/
    let caller = "onUp_5_TOOL_CB";
let log_this   = LOG_MAP.EV3_UP;
    let dismissed
    = (!t_is_a_tool_el(onWork_EL, caller)    ) ? "!t_is_a_tool_el("+get_n_lbl(onWork_EL)+")"
    : ( t_event_has_been_consumed(caller)  ) ? t_event_consumed_cause
    :                                          "";
if( log_this && dismissed) log("%c"+caller+"%c dismissed by %c"+dismissed, lbF+lb4, lbA, lbF+lb0);
    if(dismissed) return "";
if( log_this) log("%c"+caller, lbF+lb5);

    let consumed_by = caller+": "+get_n_lbl(onWork_EL);
    /*}}}*/
    /* PANEL MOVED .. TOOLS LAYOUT STORAGE UPDATE {{{*/
    if(onWork_PANEL && has_moved)
    {
        let skipping_hotspot_on_node_to_hide
            =  (onWork_PANEL == hotspot)
            &&  has_el_class(hotspot, "ondown_in_gutter")
            && !t_hotspot_in_gutter(h_x, h_y)
        ;
if(log_this) log("...skipping_hotspot_on_node_to_hide %c"+skipping_hotspot_on_node_to_hide, lbF+lf5);

        if( !skipping_hotspot_on_node_to_hide )
            t_update_store3_site_layout(caller);
    }
    /*}}}*/
    /* MOVE OR (slightly moved) CLICK {{{*/
    if(onWork_PANEL && clicked && has_moved)
    {
        if(t_check_big_moved(onMoveDXY.x, onMoveDXY.y, caller) )
        {
if(log_this) log("%c [CLICKED + BIG   MOVE] .. CANCEL CLICK ON ["+get_n_lbl(onWork_PANEL)+"]", lb5);
            clicked = false;
        }
        else {
if(log_this) log("%c [CLICKED + SMALL MOVE] .. CANCEL MOVE  ON ["+get_n_lbl(onWork_PANEL)+"]", lb6);
            t_clr_has_moved(caller);
        }
    }
    /*}}}*/
    /* {{{*/
/*
TODO: already called at this point by move handler
    if(clicked && !has_moved && onWork_PANEL)
    {
        t_tool_set_panel_xy(onWork_PANEL, onDown_PANEL_XY.x, onDown_PANEL_XY.y);
        t_tool_set_top_xy  (caller      , onDown_PANEL_XY.x, onDown_PANEL_XY.y);
    }
*/
    /*}}}*/
    /* PANEL DRAGGED .. t_sync_layout {{{*/
/* NO .. onUp_8_TOOLS_LAYOUT_HANDLER should do the job with a delay
    let pinned = onWork_PANEL && onWork_PANEL.classList.contains("pinned");
    if(!pinned)
        t_sync_layout(caller, 0);
*/
    /*}}}*/
    /* TODO - delayed hide pivspot - shown by onDown_4_TOOL_DRAG_PUSH_PIN */
    /* DBLCLICKED .. STANDBY .. FASTCLICK .. CLEAR {{{*/
/*{{{
logXXX(caller+": ......clicked=["+   clicked+"]");
logXXX(caller+": ...dblclicked=["+dblclicked+"]");
}}}*/
    if( t_filter_SEL_CLICK_for( onWork_EL )            ) { consumed_by += " DOC SEL CLICK";                  t_onclick_target( onWork_EL   , 0, false       ); }

    if(dblclicked) {
        if     ( t_filter_STANDBY_for   (onWork_PANEL) ) { consumed_by += " DBLCLICK STANDBY";               t_onclick_target( onWork_EL   , 0, true        ); }
        else if( t_clear_ON_DBLCLICK_for(onWork_EL   ) ) { consumed_by += " DBLCLICK CLEAR ON DBL_CLICK";    t_clear(caller);                                  }
        else                                             { consumed_by += " DBLCLICK IGNORING DBL_CLICK"; }
    }
    /*}}}*/
    /* CLICKED .. [hotspot] .. [ondown_in_gutter] .. [node_to_hide_toggle] {{{*/
    if(      clicked
          && (hotspot == onWork_PANEL)
          && has_el_class(hotspot, "ondown_in_gutter")
      ) {
        node_to_hide_toggle();

    }
    /*}}}*/
    /* CLICKED .. PIVOT-MAGNIFY .. CLICK-HANDLER .. [t_onclick_target] {{{*/
    else if( clicked )
    {
/*           if( has_el_class            (onWork_EL, "clearpin") ) { consumed_by += " CLICK TARGET HANDLER"; t_clear         ( caller                       ); } */
             if( has_el_class            (onWork_EL, "clearpin") ) { consumed_by += " CLICK TARGET HANDLER"; t_onclick_target( onWork_EL                    ); }
        else if( t_tool_is_onclick_target(onWork_EL.id         ) ) { consumed_by += " CLICK TARGET HANDLER"; t_onclick_target( onWork_EL                    ); }
/*      else if( t_tool_has_CLICK_for    (onWork_EL            ) ) { consumed_by += " CLICK   TOOL HANDLER"; t_onclick_target( onWork_EL   , T_ONCLICK_DELAY); } */
        else if( t_tool_has_CLICK_for    (onWork_EL            ) ) { consumed_by += " CLICK   TOOL HANDLER"; t_onclick_target( onWork_EL                    ); } /* SYNC CALL */
        else if( t_tool_has_CLICK_for    (onWork_PANEL         ) ) { consumed_by += " CLICK  PANEL HANDLER"; t_onclick_target( onWork_PANEL, T_ONCLICK_DELAY); }
        else {
            let         el_event_handler
                = t_get_el_event_handler(onWork_EL, caller);
            if     (    el_event_handler == null                 ) { consumed_by += " CALLING TOOL HANDLER"; t_onclick_target( onWork_EL                    ); }
            else if( !has_moved                                  ) { consumed_by  = ""; /* BUBBLING: NO HANDLER */ }

        }
    }
    /*}}}*/
    /* [has_moved] .. (t_pat_bag9_move_item_to_div) {{{*/
    else if(has_moved)
    {
        /* subtool moved */
        if(mov_dst_div != mov_src_div)
            consumed_by += t_pat_bag9_move_item_to_div( mov_dst_div );

        /* transcript moved {{{*/
        let is_a_pinned_transcript
            =  (   (onWork_PANEL == transcript1)
                || (onWork_PANEL == transcript2)             )
            && (    onWork_PANEL.classList.contains("pinned"));

        if( is_a_pinned_transcript )
        {
            let  xy = t_getPosition(onWork_PANEL, caller);
            let key =               onWork_PANEL.id+"_XY";
            store_key_value(key, JSON.stringify(xy));
        }
        /*}}}*/

    }
    /*}}}*/
/*
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_3_RESULT, consumed_by);
    if(consumed_by) consumed_by += " ON ["+get_n_lbl(onWork_EL)+"]";
*/

    if(consumed_by) t_event_set_consumed_by(consumed_by);

if( log_this) log("...return %c"+consumed_by, lbF+lb5);
    return consumed_by;
};
/*}}}*/
/*_ onUp_6_DOC_CB {{{*/
let onUp_6_DOC_CB = function(e,clicked,dblclicked)
{
    /* !t_is_a_tool_el !has_moved {{{*/
let   caller = "onUp_6_DOC_CB";
let log_this = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbF+lb6);

    if( t_is_a_tool_el(onWork_EL, caller) ) return "";
    if( has_moved                         ) return "";

    let consumed_by;
    /*}}}*/
    /* CLICK DOC {{{*/
    if(clicked) {
        consumed_by = "[clicked]";
        /* 1/3 - [onWork_SEEK_TOOL] .. UNSELECT WORD {{{*/
        if( onWork_SEEK_TOOL )
        {
            let slot = t_get_EL_slot(onWork_EL);

            if(transcript_events)
                t_log_transcript_event_bot( "<em class='big'>CLEAR CLICKED SLOT #"+slot+" .. onWork_EL.id=["+onWork_EL.id+"]</em>");

            consumed_by = " clear_slot("+slot+")";

            clear_slot(slot);
            t_onPatternUpdate("HIDING SEEK_TOOL SLOT <em>"+ slot +"</em>", caller);

            if( words_opcycle ) {
                consumed_by    += " ... [words_opcycle POSTING cycle_on_last_cleared_pattern]";
                setTimeout(cycle_on_last_cleared_pattern, PATTERN_CYCLE_DELAY);
            }
        }
        /*}}}*/
        /* 3/3 - SELECT WORD {{{*/
        else {
            if(!onDown_XY.y)
            {
                consumed_by = "SELECT WORD ERROR: *** onDown_XY NOT SET ***";
            }
            else if(t_get_el_event_handler(onWork_EL,caller) != null)
            {
                if(anchor_freeze) {
                    consumed_by = "SELECT WORD .. (EVENT HANDLER FREEZED)";
                    t_preventDefault(e, caller+" "+consumed_by);

                    call_s_touchedWord(onDown_XY.x, onDown_XY.y);
                    t_onPatternUpdate("DOCUMENT <em>"+ consumed_by +"</em>", caller);
                }
                else {
                    consumed_by = "CLICK WORD .. (EVENT HANDLER NOT FREEZED";
                    t_acceptDefault(e, caller+" "+consumed_by);
                }
            }
            else {
                consumed_by     = "SELECT WORD .. (NO EVENT HANDLER) for ["+get_n_lbl(onWork_EL)+"]";

                call_s_touchedWord(onDown_XY.x, onDown_XY.y);
                t_onPatternUpdate("DOCUMENT <em>"+ consumed_by +"</em>", caller);
            }
        }
        /*}}}*/
    }
    /*}}}*/
    /* DOC: LONG PRESS {{{*/
    else {
        consumed_by = "[NOT clicked]";
        if(anchor_freeze) {
            consumed_by += " DOC LONG PRESSED FREEZED";
        }
        else {
            consumed_by += " DOC LONG PRESSED NOT FREEZED";
        }
    }
    /*}}}*/
if(log_this) log(consumed_by);
    return caller+": "+consumed_by;
};
/*}}}*/
/*_ onUp_7_ON_EVENT_CONSUMED {{{*/
let onUp_7_ON_EVENT_CONSUMED = function(e)
{
    let caller = "onUp_7_ON_EVENT_CONSUMED";
let log_this   = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbF+lb7);

if(log_this) log(t_event_consumed_cause);
    return t_event_has_been_consumed("onUp_7_ON_EVENT_CONSUMED");
};
/*}}}*/
/*_ onUp_8_ON_MOUSEUP_DONE {{{*/
/*{{{*/
const T_TOOLS_ON_MOUSEUP_DELAY = 500;
let   t_tools_layout_on_mouseup_timer;

/*}}}*/
let onUp_8_ON_MOUSEUP_DONE = function()
{
/*{{{*/
    let caller = "onUp_8_ON_MOUSEUP_DONE";
let log_this   = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbF+lb8);
/*}}}*/
    /* EVENT DONE */
    add_el_class(pivspot, "hidden");

    /* DRAGGED [hotspot] {{{*/
    if(has_moved && (hotspot == onWork_PANEL))
    {
        /* DROPPED IN GUTTER DISARM {{{*/
        if( t_hotspot_in_gutter(h_x, h_y) ) {
if(log_this) log(caller+": %c [hotspot] ... dropped in GUTTER", lbH+lf8);

            node_to_hide_release();

            del_el_class(hotspot, "ondown_in_gutter");
        }
        /*}}}*/
        /* OR CALL [node_to_hide_at_hotspot] {{{*/
        else {
if(log_this) log(caller+": %c [hotspot] NOT dropped in GUTTER", lbH+lf8);

            if( has_el_class(hotspot, "ondown_in_gutter") )
               node_to_hide_at_hotspot();
        }
        /*}}}*/
    }
    /*}}}*/

    if( t_pat_bag9_grab_item_mov_div_is_showing() )
        t_pat_bag9_grab_item_mov_div_drop();

    t_body_set_scrollng_panel(false);

    /* EVENT DONE POST */
    if(has_moved || call_t_grid_IS_ON_GRID(caller))
        t_tools_layout_on_mouseup_timer = setTimeout(onUp_8_TOOLS_LAYOUT_HANDLER, T_TOOLS_ON_MOUSEUP_DELAY);
    else
        t_set_onWork_EL(null, caller);

    if( t_preventDefault_caller )
        t_restoreDefault("ON UP DONE");

    onWork_MOVE_CHILD = false;

    clear_is_a_dblclick_last_result();

    t_check_on_seeker_clear(caller);

    /* [bag] .. (drift) {{{*/
/*
    pat_bag.style.marginLeft = 0;
    pat_bag.style.marginTop  = 0;
    bak_bag.style.marginLeft = 0;
    bak_bag.style.marginTop  = 0;
    off_bag.style.marginLeft = 0;
    off_bag.style.marginTop  = 0;
*/
    /*}}}*/
};
/*}}}*/
/*_ onUp_8_TOOLS_LAYOUT_HANDLER {{{*/
let onUp_8_TOOLS_LAYOUT_HANDLER = function()
{
    let caller = "onUp_8_TOOLS_LAYOUT_HANDLER";
let log_this   = (LOG_MAP.EV0_LISTEN || logging_EVENTS || LOG_MAP.EV3_UP);

    /* TOOL PANELS LAYOUT {{{*/
    if( t_cache_changed(  caller) ) {
        t_cache_refresh("Tools layout adjusted");
        t_tool_set_top_xy(caller, topTool.x, topTool.y);
    }
    t_set_onWork_EL(null, caller);

    let h_xy = t_getPosition(hotspot, caller);
    if(!t_hotspot_in_gutter(h_xy.x, h_xy.y))
    {
        t_raise_pivot_PANEL();
        t_toggle_pivot_PANEL_magnified(pivot_magnified, caller);
    }
    /*}}}*/
    /* TOOL ACCESSORIES RESET {{{*/
    t_hide_hov();

    /*}}}*/
};
/*}}}*/

/*_ t_tool_has_CLICK_for {{{*/
let t_tool_has_CLICK_for = function(el)
{
    let result
        =  (el == bak_bag    )
        || (el == transcript1)
        || (el == transcript2)
        || (el == seeker_PU  )
    ;
/*
logXXX("t_tool_has_CLICK_for("+get_n_lbl(el)+") ...return "+result);
*/
    return result;
};
/*}}}*/
/*_ t_tool_is_onclick_target {{{*/
let t_tool_is_onclick_target = function(id)
{
    let result
        =  (id == "RELOAD"    )
        || (id == "CLEAR"     )
        || (id == "REGEX"     )
        || (id == "BEHAVIOR"  )
        || (id == "headsup_bw")
        || (id == "headsup_bz")
        || (id == "reset"     )
        || t_tool_is_a_toggle_option(id)
    ;
/*
logXXX("t_tool_is_onclick_target("+id+") ...return "+result);
*/

    return result;
};
/*}}}*/
/*_ t_tool_is_a_toggle_option {{{*/
let t_tool_is_a_toggle_option = function(id)
{
    let result
        =  (id == "anchor_freeze"  )
        || (id == "containers_hi"  )
        || (id == "scroll_smooth"  )
        || (id == "overflow_visi"  )
        || (id == "theme_dark"     )
        || (id == "tools_drag"     )
        || (id == "tools_extras"   )
        || (id == "tools_scroll"   )
        || (id == "wording"        )
        || (id == "words_exact"    )
        || (id == "words_head_tail")
        || (id == "words_opcycle"  )
        || (id == "words_segment"  )
    ;

/*
logXXX("t_tool_is_a_toggle_option("+id+") ...return "+result);
*/

    return result;
};
/*}}}*/
/*_ t_filter_STANDBY_for {{{*/
let t_filter_STANDBY_for = function(panel)
{
    if(    !panel   ) return false;
    if(    !panel.id) return false;
    return (onStandby_PANEL != null )
        && (onStandby_PANEL == panel)
    ;
};
/*}}}*/
/*_ t_filter_SEL_CLICK_for {{{*/
let t_filter_SEL_CLICK_for = function(el)
{
    if(    !el   ) return false;
    if(    !el.id) return false;
    return  el.id.startsWith("thumb_p_")
        ||  el.id.startsWith("thumb_s_")
    ;
};
/*}}}*/
/*_ t_clear_ON_DBLCLICK_for {{{*/
let t_clear_ON_DBLCLICK_for = function(el)
{
    if(!el   ) return false;
    if(!el.id) return false;
    return !(el.id.startsWith( "seekspot"))
        && !(el.id.startsWith( "seeker"  ))
    ;
};
/*}}}*/
/*}}}*/
/* LONGPRESS {{{*/
/*{{{*/
let LONG_PRESS_DURATION      = 1000;

let long_press_caller;
let long_press_timer;
let arm_long_press_timer;
/*}}}*/
/*_ add_long_press_listener {{{*/
let add_long_press_listener = function(_caller)
{
    if(long_press_timer) clearTimeout(long_press_timer);
    /*.............................*/ long_press_timer = null;

    long_press_caller = _caller;

    if(arm_long_press_timer) clearTimeout(arm_long_press_timer);
    arm_long_press_timer =     setTimeout(arm_long_press_handler, CLICK_DURATION);
};
/*}}}*/
/*_ arm_long_press_handler {{{*/
let arm_long_press_handler = function()
{
/*{{{*/
let   caller = "arm_long_press_handler";
let log_this = LOG_MAP.EV4_LONG_PRESS;
if( log_this) log(caller+": ADDING LONG PRESS LISTENER ON ["+t_get_onDown_tool_label()+"]");
/*}}}*/
    if(transcript_events)
        t_log_transcript_event_top("<span style='color:yellow;'>"+ SYMBOL_BLACK_CIRCLE +"</span>"
            +                      " long press <em>"+             long_press_caller   +"</em>");

    if(long_press_timer) clearTimeout(long_press_timer);
    long_press_timer     = setTimeout(long_press_handler, LONG_PRESS_DURATION);
    arm_long_press_timer = null;

    /* ARM hotspot picked from gutter */
    if(   (hotspot == onWork_PANEL)
       && t_hotspot_in_gutter(onDown_HSPOT_XY.x, onDown_HSPOT_XY.y))
    {
        add_el_class(hotspot, "ondown_in_gutter");

if(log_this) log(caller+": ARMED [hotspot] [ondown_in_gutter] ");
    }
};
/*}}}*/
/*_ del_long_press_listener {{{*/
let del_long_press_listener = function(_caller)
{
/*{{{*/
let   caller = "del_long_press_listener";
let log_this = LOG_MAP.EV4_LONG_PRESS || LOG_MAP.EV8_FLOATLOG || fly_log_checked;
if( log_this) log(caller+" %c"+_caller,lbH+lf4);
/*}}}*/
    /* WAS PRELOADING .. [arm_long_press_timer] {{{*/
    if(arm_long_press_timer)
    {
        clearTimeout( arm_long_press_timer);
        /*.........*/ arm_long_press_timer = null;

        if(long_press_timer == null) {
            if(transcript_events)
                t_log_transcript_event_bot( "<span style='color:white;'>x</span>"
                    +                      " <span style='text-decoration:line-through;'>long press</span> desarmed"
                    +                      " <em>"+ _caller +"</em>"
                );
if( log_this) t_log_msg("LONG PRESS DISARMED");

            return;
        }
    }
    /*}}}*/
    /* WAS PENDING .. [long_press_timer] {{{*/
    if(long_press_timer)
    {
        clearTimeout( long_press_timer );
        /*.........*/ long_press_timer = null; /* done */

        if(transcript_events)
            t_log_transcript_event_bot( "<span style='color:white;'>"+SYMBOL_HEAVY_BALLOT+"</span>"
                +                      " <span style='text-decoration:line-through;'>long press</span> canceled"
                +                      " <em>"+ _caller +"</em>"
            );
if( log_this) t_log_msg("LONG PRESS CANCELED");

        if(onWork_PANEL == null) return;

/*  del_el_class(onWork_PANEL, "panel_pressed_glowing"); */
/*  del_el_class(onWork_PANEL, "panel_magnifying_glass"); */
    }
    /*}}}*/
};
/*}}}*/
/*_ long_press_timer_is_pending {{{*/
let long_press_timer_is_pending = function()
{
    return (arm_long_press_timer != null)
        || (long_press_timer         != null)
    ;
};
/*}}}*/
/*_ long_press_handler {{{*/
let long_press_handler  = function()
{
/* {{{*/
let   caller = "long_press_handler";
let log_this = LOG_MAP.EV4_LONG_PRESS;
if( log_this) t_log_event_status(caller, lbF+lf9);

    let consumed_by =   "";
/*}}}*/
    /* IF ON [div_slot_containers] .. (all containers to clipboard) {{{*/
    if(onWork_EL && (onWork_EL.id == "div_slot_containers"))
    {
        consumed_by += " COPY ALL CONTAINERS TO CLIPBOARD";
        t_copy_el_outerHTML_to_clipboard(onWork_EL);
    }
    /*}}}*/
    /* IF ON [class_s_...        ] .. (single container to clipboard) {{{*/
    if(onWork_EL && (onWork_EL.className.startsWith("class_s_")))
    {
        consumed_by += " COPY SINGLE CONTAINER TO CLIPBOARD";
        t_copy_el_outerHTML_to_clipboard(onWork_EL);
    }
    /*}}}*/
    /* IF ON [dimm_mask          ] .. (TOOLS ON GRID) OR (pat_bag_is_opened) {{{*/
    if( dimm_mask_displayed() )
    {
        consumed_by += " (LONGPRESS ON DIMM MASK)";

        if(call_t_grid_IS_ON_GRID())
        {
            consumed_by += " MOVING TOOLS OFF GRID"+ consumed_by;
            call_t_grid_ON_OFF_CB(false);
        }
        else {
            let pat_bag_is_opened = has_el_class(pat_bag, "open_bag");
            if( pat_bag_is_opened) {
                consumed_by += " CLOSING [pat_bag] "+ consumed_by;
                t_pat_bag_close(caller,caller);
            }
        }
        dimm_stop(caller);
    }
    /*}}}*/
    /* IF ON [fly_div            ] .. (t_toggle_fly_div_magnified) {{{*/
    if( is_el_or_child_of_parent_el(onWork_EL, fly_div) )
    {
        consumed_by += " FLOAT LOG MAGNIFICATION";
if( log_this) log(caller+": "+consumed_by);

        t_toggle_fly_div_magnified();
    }
    /*}}}*/
    /* OR ON [onWork_PANEL       ] .. (toggle magnification) {{{*/
    else if(onWork_PANEL)
    {
/*{{{
        if( !is_a_big_drag() ) {
            consumed_by += " TOGGLE PIVOT PANEL MAGNIFICATION";
if( log_this) log(caller+": "+consumed_by);
            if(onWork_PANEL != hotspot) add_el_class(onWork_PANEL, "panel_magnifying_glass");

            t_toggle_pivot_PANEL_magnified(pivot_magnified == false, caller);
        }
        else {
            consumed_by += " PIVOT PANEL MAGNIFICATION CANCELED WHILE DRAGGING";
if( log_this) log(caller+": "+consumed_by);
        }
}}}*/
        /* PIVOT PANEL DRAGGED .. (SYNC MAGNIFICATION) {{{*/
        if( is_a_big_drag() )
        {
            if(onWork_PANEL == pivot_PANEL)
            {
                consumed_by += " SETTING DRAGGED PIVOT PANEL MAGNIFICATION";
if( log_this) log(caller+": "+consumed_by);
                t_toggle_pivot_PANEL_magnified(pivot_magnified, caller);
            }
        }
        /*}}}*/
        /* [hotspot] LONG PRESS {{{*/
        if(onWork_PANEL == hotspot)
        {
if(log_this) log(caller+": %c [hotspot] LONG PRESS .. (no-op)", lbH+lf8);

        }
        /*}}}*/
        /* OR TOGGLE PANEL MAGNIFICATION {{{*/
        else {
            /* ON [pivot_PANEL] {{{*/
            if(onWork_PANEL == pivot_PANEL) {
                consumed_by += " TOGGLE PIVOT PANEL MAGNIFICATION";
if( log_this) log(caller+": "+consumed_by);

                t_toggle_pivot_PANEL_magnified(pivot_magnified == false, caller);
            }
            /*}}}*/
            /* OR [onWork_PANEL] {{{*/
            else {
                consumed_by += " TOGGLE "+get_n_lbl(onWork_PANEL)+" MAGNIFICATION";
if( log_this) log(caller+": "+consumed_by);

                t_toggle_panel_magnified(onWork_PANEL, "toggle", caller);
            }
            /*}}}*/
        }
        /*}}}*/
    }
    /*}}}*/
    /* IF ON [onWork_EL SLOT     ] .. (show_slot_containers) {{{*/
    let slot   = t_get_onWork_EL_slot();
if( log_this) log("...slot=["+slot+"]");

    if(slot >= 0) {
        consumed_by += " SHOWING SLOT ["+slot+"] CONTAINERS";
if( log_this) log(caller+": "+consumed_by);
        t_set_onWork_EL(null, caller);

        show_slot_containers(slot);
    }
    /*}}}*/
    /* OR ON [onWork_EL          ] .. (with no long press action) {{{*/
    if(!consumed_by)
    {
        consumed_by = "NO LONG PRESS ACTION FOR ["+get_n_lbl(onWork_EL)+"]";

log_add_TR_EVENT("%c "+caller+" %c *** "+consumed_by+" ***", lbF+lb9, lb2);
    }
    /*}}}*/
    /* ALL DONE {{{*/
    if(transcript_events)
        t_log_transcript_event_bot( "<span style='color:white;'>"+SYMBOL_CHECK_MARK+"</span>"
            +                      " long press <em>"+ consumed_by +"</em>"
        );

    /*}}}*/
    arm_long_presss_timer = null; /* done */
    long_press_timer      = null; /* nearly done */
};
/*}}}*/

/*}}}*/
/* ONCHANGE {{{*/
/*_ onchange {{{*/
let onchange = function(e)
{
let log_this   = (LOG_MAP.EV0_LISTEN || logging_EVENTS || LOG_MAP.EV6_CHANGED);

    let caller = "onchange";
/*
if( log_this) log(caller+": TARGET=["+get_n_lbl(t_get_event_target(e, caller))+"]");
*/

    if(log_this) {
        console_clear(caller);
        log(caller+":");
        log("...e.srcElement=["+ e.srcElement.id +"]");
        log("...e.....target=["+ e.    target.id +"]");
        console_dir( e );
    }
    t_sync_layout(caller);
};
/*}}}*/

/*}}}*/
/*  DOC  CB {{{*/
/*_ t_body_layout_CB {{{*/
let t_body_layout_CB = function(e)
{
if( t_preventDefault_has_been_called("t_body_layout_CB") ) return;
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_CB;
    let e_target = e.path ? e.path[0] : e.target;
    let caller   = "t_body_layout_CB("+ e.type+" on "+get_n_lbl(e_target)+")";
if( log_this) log("%c"+caller+(has_moved ? " has_moved=["+has_moved+"]" : ""),lb9);

    if(has_moved) return;

    if(e_target.tagName != "EM") return;
    let w = parseInt( e_target.innerText.trim() );
    if(!isNaN(w) ) {
        w -= 2 * document.body.clientLeft; /* left and right borders */
/*
        let   m =    (w_W - w) / 2;
        document.body.style.marginLeft  = m+"px";
        document.body.style.width       = w+"px";
        let style = getComputedStyle( document.body );
        document.body.setAttribute("style", style +"; width: "+ w +"px !important");
*/
        document.body.style.width       = w+"px";
    }
    else {
        document.body.style.width       = ""/*"initial"*/;
    }

    layout_changed();
};
/*}}}*/
/*_ t_body_width_show {{{*/
let t_body_width_show = function()
{
    let el = get_tool("#headsup_bw_value"); if(!el) return;
    let  m = parseInt( document.body.style.marginLeft );
    let  w = parseInt( document.body.offsetWidth      )
        -              document.body.clientLeft * 2      /* left and right borders */
        ;
    if( isNaN(m) ) m = 0;
    if( isNaN(w) ) w = 0;

    el.innerHTML = "BODY "
        +" <em class='cc1'>l="+ m   +"</em>"
        +" <em class='cc2'>w="+ w   +"</em>"
        +" <em class='cc3'>W="+ w_W +"</em>"
    ;
};
/*}}}*/
/*_ t_body_zoom_CB {{{*/
/*{{{*/
let   body_zoom_percent = 100;

/*}}}*/
let t_body_zoom_CB = function(e)
{
    let e_target = e.path ? e.path[0] : e.target;
    let caller   = "t_body_zoom_CB("+e.type+" on "+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_CB;
if( log_this) log("%c"+caller+(has_moved ? " has_moved=["+has_moved+"]" : ""),lb9);

    if(has_moved                                 ) return;
    if( t_preventDefault_has_been_called(caller) ) return;
    if(e_target.tagName != "EM"                  ) return;

    body_zoom_percent = parseInt( e_target.innerText.trim() );
/*
logXXX("body_zoom_percent=["+body_zoom_percent+"]")
*/

    if( !isNaN(body_zoom_percent) ) {
        let className = "zoom_"+body_zoom_percent;
        set_el_class(document.body , className);
        set_el_class(dom_tools_html, className);
    }
    else {
        body_zoom_percent = 100;
        let className = "";
        set_el_class(document.body , "");
        set_el_class(dom_tools_html, "");
    }

    layout_changed();

    t_pat_bag3_reselect();
};
/*}}}*/
/*_ t_body_zoom_show {{{*/
let t_body_zoom_show = function()
{
    let       el = get_tool("#headsup_bz_value"); if(!el) return;

    el.innerHTML = "BODY ZOOM <em class='cc2'>"+document.body.className+"</em>";
};
/*}}}*/
/*_ dom_logging_CB {{{*/
let dom_logging_CB = function(e)
{
    /* [has_moved] [t_preventDefault_has_been_called] [t_event_has_been_consumed] {{{*/
let e_target = e.path ? e.path[0] : e.target;
let   caller = "dom_logging_CB(e.target=["+get_n_lbl(e_target)+"]";
let log_this = LOG_MAP.T5_LAYOUT;
if( log_this) log(caller);

    let keyword = ""; try { keyword = e_target.title      .trim() ; } catch(ex) {}
    if(!keyword)      try { keyword = e_target.textContent.trim() ; } catch(ex) {}

if( log_this) log("...............e_target............=["+ get_n_lbl(e_target)                      +"]");
if( log_this) log("...............e_target.textContent=["+           e_target.textContent           +"]");
if( log_this) log("...............e_target.title......=["+           e_target.title                 +"]");
if( log_this) log("............................keyword=["+ keyword                                  +"]");
if( log_this) log("..........................e.ctrlKey=["+ e.ctrlKey                                +"]");
if( log_this) log("..........................has_moved=["+ has_moved                                +"]");
if( log_this) log("..........t_event_has_been_consumed=["+ t_event_has_been_consumed       (caller) +"]");
if( log_this) log("...t_preventDefault_has_been_called=["+ t_preventDefault_has_been_called(caller) +"]");

    if( e.ctrlKey                                ) return;
    if( has_moved                                ) return;
    if( t_preventDefault_has_been_called(caller) ) return;
    if( e_target.tagName != "EM"                 ) return;
    /*}}}*/

    if( t_event_has_been_consumed(caller) ) return;

    if(logging_toggle( keyword ))
        log("%c "+caller+": %c TOGGLED keyword=["+ keyword +"]",lb9, lbF);

    t_sync_doc_LOG_MAP(caller);
};
/*}}}*/
/*_ t_LOG_MAP_toHTML {{{*/
/*{{{*/
const CCX_CLASSLIST = [
      "cc1"
    , "cc2"
    , "cc3"
    , "cc4"
    , "cc5"
    , "cc6"
    , "cc7"
    , "cc8"
    , "cc9"
    , "cc0"
];

const T_SYNC_DOC_LOG_MAP_DELAY = 500;
let   t_sync_doc_LOG_MAP_timeout;

/*}}}*/
/*_ t_sync_doc_LOG_MAP {{{*/
let t_sync_doc_LOG_MAP = function(_caller)
{
/*
logXXX("%c t_sync_doc_LOG_MAP("+_caller+")", lbH+lf6)
*/
    if(t_sync_doc_LOG_MAP_timeout) clearTimeout(t_sync_doc_LOG_MAP_timeout);
    t_sync_doc_LOG_MAP_timeout =     setTimeout(t_sync_doc_LOG_MAP_handle, T_SYNC_DOC_LOG_MAP_DELAY);
};
/*}}}*/
/*_ t_sync_doc_LOG_MAP_handle {{{*/
let t_sync_doc_LOG_MAP_handle = function()
{
let   caller = "t_sync_doc_LOG_MAP_handle";
/*
logXXX("%c"+caller, lbb+lbH+lf6)
*/
let log_this = LOG_MAP.T5_LAYOUT;
if( log_this) log(caller);

    let k;
    k = KEY_LOG_EVENTS   ; if(el = document.getElementById(k)) set_el_class_removing(el, logging_EVENTS                       ? "cc9" : "cc8", CCX_CLASSLIST);
    k = KEY_LOG_HIGHLIGHT; if(el = document.getElementById(k)) set_el_class_removing(el, logging_HIGHLIGHT                    ? "cc9" : "cc8", CCX_CLASSLIST);
    k = KEY_LOG_TOOLBAR  ; if(el = document.getElementById(k)) set_el_class_removing(el, logging_TOOLBAR                      ? "cc9" : "cc8", CCX_CLASSLIST);

    k = "EV0_LISTEN"     ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV0_LISTEN                   ? "cc9" : "cc8", CCX_CLASSLIST);
    k = "EV1_DOWN"       ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV1_DOWN                     ? "cc1" : "cc8", CCX_CLASSLIST);
    k = "EV2_MOVE"       ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV2_MOVE                     ? "cc2" : "cc8", CCX_CLASSLIST);
    k = "EV3_UP"         ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV3_UP                       ? "cc3" : "cc8", CCX_CLASSLIST);
    k = "EV4_LONG_PRESS" ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV4_LONG_PRESS               ? "cc4" : "cc8", CCX_CLASSLIST);
    k = "EV5_CB"         ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV5_CB                       ? "cc5" : "cc8", CCX_CLASSLIST);
    k = "EV6_CHANGED"    ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV6_CHANGED                  ? "cc6" : "cc8", CCX_CLASSLIST);
    k = "EV7_DISPATCH"   ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV7_DISPATCH                 ? "cc7" : "cc8", CCX_CLASSLIST);
    k = "EV8_FLOATLOG"   ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP.EV8_FLOATLOG                 ? "cc9" : "cc8", CCX_CLASSLIST);

    k =  "S1_RANGE"      ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. S1_RANGE                    ? "cc1" : "cc8", CCX_CLASSLIST);
    k =  "S2_SELECT"     ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. S2_SELECT                   ? "cc2" : "cc8", CCX_CLASSLIST);
    k =  "S3_SLOT"       ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. S3_SLOT                     ? "cc3" : "cc8", CCX_CLASSLIST);

    k =  "T0_STORE"      ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. T0_STORE                    ? "cc9" : "cc8", CCX_CLASSLIST);
    k =  "T1_PIVOT"      ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. T1_PIVOT                    ? "cc1" : "cc8", CCX_CLASSLIST);
    k =  "T2_SPREAD"     ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. T2_SPREAD                   ? "cc2" : "cc8", CCX_CLASSLIST);
    k =  "T3_GRID"       ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. T3_GRID                     ? "cc3" : "cc8", CCX_CLASSLIST);
    k =  "T4_SLOT"       ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. T4_SLOT                     ? "cc4" : "cc8", CCX_CLASSLIST);
    k =  "T5_LAYOUT"     ; if(el = document.getElementById(k)) set_el_class_removing(el, LOG_MAP. T5_LAYOUT                   ? "cc5" : "cc8", CCX_CLASSLIST);

    k = "containers_hi"  ; if(el = document.getElementById(k)) set_el_class_removing(el,  containers_hi                       ? "cc1" : "cc8", CCX_CLASSLIST);
    k = "words_exact"    ; if(el = document.getElementById(k)) set_el_class_removing(el, (words_options == "words_exact"    ) ? "cc3" : "cc8", CCX_CLASSLIST);
    k = "words_segment"  ; if(el = document.getElementById(k)) set_el_class_removing(el, (words_options == "words_segment"  ) ? "cc4" : "cc8", CCX_CLASSLIST);
    k = "words_head_tail"; if(el = document.getElementById(k)) set_el_class_removing(el, (words_options == "words_head_tail") ? "cc5" : "cc8", CCX_CLASSLIST);
    k = "words_opcycle"  ; if(el = document.getElementById(k)) set_el_class_removing(el,  words_opcycle                       ? "cc9" : "cc8", CCX_CLASSLIST);

    k = "log_seekspot"   ; if(el = document.getElementById(k)) set_el_class_removing(el,  log_seekspot                        ? "cc2" : "cc8", CCX_CLASSLIST);
    k = "pin_seekspot"   ; if(el = document.getElementById(k)) set_el_class_removing(el,  pin_seekspot                        ? "cc2" : "cc8", CCX_CLASSLIST);
/*
*/
    k = "pat_sort"       ; if(el = document.getElementById(k)) {
        el.innerHTML   = pat_sort.innerHTML;
        if( t_are_pat_sorted() ) add_el_class(el, "checked");
        else                     del_el_class(el, "checked");
    }

};
/*}}}*/
/*_ t_sync_pat_sort {{{*/
let t_sync_pat_sort = function(_caller)
{
    if(!pat_sort) return;
    let pat_sorted   =                t_are_pat_sorted();
    let pat_reversed = !pat_sorted && t_are_pat_reversed();

    set_el_class_removing(pat_sort, pat_sorted? "cc9" : "cc8", CCX_CLASSLIST);

    pat_sort.innerHTML
        = pat_sorted   ? ("<sup>A</sup>"+ SYMBOL_UP                +"<sub>Z</sub>")
        : pat_reversed ? ("<sup>Z</sup>"+ SYMBOL_DOWN              +"<sub>A</sub>")
        :                (                SYMBOL_UP+LF+SYMBOL_DOWN                )
    ;

    if( pat_sorted ) add_el_class(pat_sort, "checked");
    else             del_el_class(pat_sort, "checked");
};
/*}}}*/
/*}}}*/
/*_ dom_select calls {{{*/

let call_s_touchedWord      = function( x,   y) { s_touchedWord      ( x ,   y); /*log_set_TR_RESULT();*/ };
let call_check_NodeIterator = function(id, fil) { check_NodeIterator (id , fil); /*log_set_TR_RESULT();*/ };
let call_check_TreeWalker   = function(id, fil) { check_TreeWalker   (id , fil); /*log_set_TR_RESULT();*/ };
let call_check_childNodes   = function(id, fil) { check_childNodes   (id , fil); /*log_set_TR_RESULT();*/ };
let call_check_tagNodes     = function(id, fil) { check_tagNodes     (id , fil); /*log_set_TR_RESULT();*/ };
/*
let call_setTouchPoint      = function( x,   y) { log(); log( "call_setTouchPoint"      ); setTouchPoint      ( x ,   y); log_set_TR_RESULT(); };
let call_setStartXY         = function( x,   y) { log(); log( "call_setStartXY"         ); setStartXY         ( x ,   y); log_set_TR_RESULT(); };
let call_setEndXY           = function( x,   y) { log(); log( "call_setEndXY"           ); setEndXY           ( x ,   y); log_set_TR_RESULT(); };
*/
/*}}}*/
/*}}}*/
/* TOOL CB {{{*/
/*_ t_headsup_CB {{{*/
let t_headsup_CB = function(e, action)
{
    /* ...not if [t_preventDefault_has_been_called] {{{*/
if( t_preventDefault_has_been_called("t_headsup_CB") ) return;
    /*}}}*/
    /* ...not if [has_moved] {{{*/
let log_this   = LOG_MAP.EV5_CB;

    if(!action) action   = (!e) ? null : e.type;
    let         e_target = (!e) ? null : t_get_event_target(e,"t_headsup_CB");

    let caller = "t_headsup_CB("+action+" on "+get_n_lbl(e_target)+" .. action=["+action+"])";
if(log_this) log(caller+(has_moved ? ": has_moved=["+has_moved+"]" : ""));

    if( t_event_has_been_consumed(caller) ) return;

    if(has_moved) return;
    /*}}}*/
    /* ...not if clicked on INPUT {{{*/
    if(e && (e_target.tagName == "INPUT"))
    {
        switch(action)
        {
            case "click": {
if(log_this) log("%c CLICK ON INPUT",lb9);
                return;
            }
            break;
            case "keyup": {
                if( words_opcycle )
                {
if(log_this) log("%c WORDS OPTIONS CYCLE ON INPUT",lb9);
                    let slot = get_slot_matching_pattern(tools_filter_input.value);
                    if(slot) {
                        clear_slot(slot);
                        setTimeout(cycle_on_last_cleared_pattern, PATTERN_CYCLE_DELAY);
                        return;
                    }
                    else {
                        t_call_dom_traversal();
                        return;
                    }
                }
            }
            break;
        }
    }
    /*}}}*/
    /* focussed highlight clear {{{*/
/*
    t_clear( caller );
*/
    if(e_target) del_el_class(e_target, "focussed");

    /*}}}*/
    /* switch on [id], [word] or [action] {{{*/
    let    keyword;
    if(   !keyword) try { keyword =                e_target.id;                   } catch(ex) {}
    if(   !keyword) try { keyword = get_first_word(e_target.textContent, caller); } catch(ex) {}
    if(   !keyword)       keyword = action;
    switch(keyword) {
        /* headsup: tools_filter {{{*/
        case "tools_filter":
        {
if(log_this) log("...case "+keyword+":");

            if(e_target.id != "tools_filter") t_set_tool_id_value("tools_filter", e_target.value);

            if(e_target) del_el_class(e_target, "focussed");

            let msg    = "<em class='big'>CHANGED FILTER</em> : <em>"+ e_target.value +"</em>";
if(e_target && log_this) log_add_TR_SELECT(msg);

            t_call_dom_traversal();
        }
        break;
        /*}}}*/
        /* headsup: reset {{{*/
        case "reset"       :
        {
if(log_this) log("...case "+keyword+":");

            let bag_id =                                              "pat_bag";
            let action = s_get_slotted_pattern_count() ?        "pat_drop" : "pat_clear";

            let msg    = s_get_slotted_pattern_count() ? "FILTERS DROPPED" : "FILTERS CLEARED";
if(e_target && log_this) log_add_TR_SELECT("<em class='big'>RESET: "+msg+"</em>");

            t_onclick_target_handle_bag_action(e_target, action);

        }
        break;
        /*}}}*/
        /* headsup: words_exact words_segment words_head_tail {{{*/
        case "words_exact" :
        case "words_segment" :
        case "words_head_tail" :
        {
if(log_this) log("...case "+keyword+":");

        t_call_dom_traversal();
        }
        break;
        /*}}}*/
        /* default .. (traversal params unchanged) {{{*/
        case "no_keyword"  :
        default:
        {
if(log_this) log("...default: keyword=["+keyword+"]");

        }
        /*}}}*/
    }
    /*}}}*/

    t_cache_init_by(caller);
};
/*}}}*/
/*_ t_dom_traversal_CB {{{*/
let t_dom_traversal_CB = function(e)
{
if( t_preventDefault_has_been_called("t_dom_traversal_CB") ) return;
    /* log {{{*/
let log_this = logging_EVENTS || LOG_MAP.EV5_CB;
    let e_target = e.path ? e.path[0] : e.target;
    let caller   = "t_dom_traversal_CB("+e.type+" on "+get_n_lbl(e_target)+")";
if( log_this) t_log_event_status(caller, lf5);
    /*}}}*/
    /* [has_moved] [INPUT] {{{*/
    if( has_moved                                           ) return;
    let action = e.type;
    if((action == "click") && (e_target.tagName == "INPUT") ) return;
    if( t_event_has_been_consumed(caller)                   ) return;

    /*}}}*/
    /* [focussed] [t_clear] {{{*/
if(e_target) del_el_class(e_target, "focussed");
/*
t_clear( caller );
*/
    /*}}}*/
    /*  keyword {{{*/
    let keyword;
    if(!keyword) try { keyword =                e_target.id;                   } catch(ex) {}
    if(!keyword) try { keyword = get_first_word(e_target.textContent, caller); } catch(ex) {}
    if(!keyword)       keyword = action;
/*
logXXX("keyword=["+keyword+"]")
*/
    /*}}}*/
    switch(keyword) {
        /* Traversal {{{*/
        case "NodeIterator":
        case "TreeWalker"  :
        case "childNodes"  :
        case "tagNodes"    :
        {
            current_traversal = keyword;

if(log_this) log(".SETTING current_traversal to "+current_traversal+"");
        }
        break;
        /*}}}*/
        /* CLEAR: tools_node {{{*/
        case "node":
        {
if(log_this) log_set_TR_SELECT("<em class='big'>CLEAR: tools_node</em>");

            /* VALUE CLEAR BY CB */
            tools_node = "";

            /* INPUT CLEAR BY CB */
            if(tools_node_input) tools_node_input.value = "";
        }
        break;
        /*}}}*/
        /* CHANGE: tools_node {{{*/
        case "tools_node"  :
        {
            if(e_target.id != "tools_node") t_set_tool_id_value("tools_node", keyword);

if(e_target && log_this) log_set_TR_SELECT("<em class='big'>CHANGE: tools_node ["+ keyword +"]</em>");
        }
        break;
        /*}}}*/
        /* SET: tools_node {{{*/
        case "html":
        case "head":
        case "body":
        {
            /* VALUE FROM CB */
            t_set_tool_id_value("tools_node", keyword);

if(log_this) log_set_TR_SELECT("<em class='big'>SET</em> : <em>tools_node "+ keyword +"</em>");
        }
        break;
        /*}}}*/
        /* default: {{{*/
        default: {
            if(log_this) log("...default: keyword=["+keyword+"]");
            return;
        }
        /*}}}*/
    }
    /* APPLY [tools_node + tools_filter] */
    t_call_dom_traversal();

t_cache_init_by(caller+": keyword=["+keyword+"]");
};
/*}}}*/
/*_ t_call_dom_traversal {{{*/
let current_traversal = "TreeWalker";

let t_call_dom_traversal = function()
{
    let caller = "t_call_dom_traversal";
let log_this = LOG_MAP.T5_LAYOUT;
if( log_this) log(caller);

    let tools_filter = t_get_tool_id_value("tools_filter");
    let tools_node   = t_get_tool_id_value("tools_node"  );

if( log_this) log("...current_traversal...=["+  current_traversal +"]");
if( log_this) log("...tools_filter........=["+  tools_filter      +"]");
if( log_this) log("...tools_node..........=["+  tools_node        +"]");

    switch( current_traversal )
    {
        case "NodeIterator": call_check_NodeIterator(tools_node, tools_filter); break;
        case "TreeWalker"  : call_check_TreeWalker  (tools_node, tools_filter); break;
        case "childNodes"  : call_check_childNodes  (tools_node, tools_filter); break;
        case "tagNodes"    : call_check_tagNodes    (tools_node, tools_filter); break;
    }
    t_onPatternUpdate("CALLING DOM TRAVERSAL <em class='cc9'>"+ ellipsis_short(tools_filter) +"</em>", caller);

    t_sync_layout(caller);
    if( tools_filter_input ) { tools_filter_input.focus(); tools_filter_input.select(); }
};
/*}}}*/
/*_ t_filter_CB {{{*/
let t_filter_CB = function(e)
{
let log_this = LOG_MAP.EV5_CB;
    let e_target = t_get_event_target(e, "t_filter_CB");
    let caller = "t_filter_CB("+e.type+" on "+get_n_lbl(e_target)+")";
if( log_this) log(caller);

    if( t_event_has_been_consumed(caller) ) return;

    switch(e.type) {
        case "keydown" : t_oninput   (e, e_target); break;
        case "keyup"   : t_oninput   (e, e_target); break;
        case "change"  : t_headsup_CB(e          ); break;
        default:
    }
};
/*}}}*/
/*_ t_oninput {{{*/
/*{{{*/
const CHAR_CODE_A     = 65;
const CHAR_CODE_B     = 66;
const CHAR_CODE_C     = 67;
const CHAR_CODE_F     = 70;
const CHAR_CODE_SPACE = 32;
/*}}}*/
let t_oninput = function(e, e_target)
{
    /*{{{*/
let log_this = LOG_MAP.EV5_CB;

    let caller = "t_oninput("+e.type+" on "+get_n_lbl(e_target)+")";
    let charCode = (e.keyCode) ? e.keyCode : e.which;

if(log_this) log("t_oninput("+e.type+" on "+get_n_lbl(e_target)+" .. charCode=["+charCode+"])");
    /*}}}*/
/*{{{
:new C:/LOCAL/GAMES/IVANWFR/INPUT/Truly_Ergonomic/trulyergonomic/javascripts/layout.js
}}}*/
    /* this is a new event-chain */
    t_clr_has_moved(caller);
    switch(charCode)
    {
        /* IGNORE {{{*/
        case  8: /* BACKSPACE */
        case 16: /* SHIFT   */
        case 17: /* CONTROL */
        case 18: /* ALT     */
        case 37: /* LEFT    */
        case 38: /* UP      */
        case 39: /* RIGHT   */
        case 40: /* DOWN    */
        case 46: /* DELETE */
        break;
        /*}}}*/
        /* FOCUS {{{*/
        case CHAR_CODE_F:
/*
        case CHAR_CODE_B:
        case CHAR_CODE_SPACE:
        case CHAR_CODE_A:
        case CHAR_CODE_C:
*/
        if(e.ctrlKey && tools_filter_input)
        {
logXXX(caller+": %c FIND IN PAGE ",lb7);
            add_el_class(e_target,"focussed");
            t_post_focus_to(tools_filter_input);
        }
        break;
        /*}}}*/
        /* ESCAPE == UNDO_CHANGES {{{*/
        case 27:

        e_target.value = e_target.value_set ? e_target.value_set : "";
/*
        del_el_class(e_target,"focussed");
*/
        break;

        /*}}}*/
        /* RETURN == SUBMIT {{{*/
        case 13:
        if(transcript_events)
            t_log_transcript_event_top("<em class='cc8'>t_oninput</em>"
                +                      " "+e_target.id+" <em class='cc9'>"+e_target.value+"</em>"
            );
        t_headsup_CB(e);
        e_target.focus();
        e_target.selectionStart = e_target.value.length-1;
        e_target.selectionEnd   = e_target.value.length;

        break;
        /*}}}*/
        default:
/*
        if     (e_target.id == "tools_node_input"  ) set_id_class_on_off(e_target.id, "focussed", (e_target.value != tools_node  ));
        else if(e_target.id == "tools_filter_input") set_id_class_on_off(e_target.id, "focussed", (e_target.value != tools_filter));
*/
    }
};
/*}}}*/
/*}}}*/
/* TOOL onclick {{{*/
/*{{{*/
const T_ONCLICK_DELAY = CLICK_DURATION;
let   t_onclick_e_target;
let   t_onclick_timer;
let   t_onclick_dblclicked;

/*}}}*/
/*_ t_onclick {{{*/
let t_onclick = function(e)
{
/*{{{
TODO:
    - replace all dom_tools.html calls to event handlers
    - by calls to t_onclick
    - identify e_target and delegate container
    - to select the appropriate tool callback

:new %:h/dom_tools.html

    onchange='t_dom_traversal_CB(event);'
    onchange='t_filter_CB(event);'
    onclick='dom_logging_CB(event);'
    onclick='t_body_layout_CB(event);'
    onclick='t_body_zoom_CB(event);'
    onclick='t_dom_traversal_CB(event);'
    onclick='t_headsup_CB(event);'
    onclick='t_onclick(event);'
    onclick='toggle_event(event);'
    onkeyup='t_filter_CB(event);'

}}}*/
    let e_target = e.path ? e.path[0] : e.target;
    t_onclick_target( e_target );
};
/*}}}*/
/*_ t_onclick_target {{{*/
let t_onclick_target = function(e_target, delay=0, dblclicked=false)
{
    /*{{{*/
let   caller = "t_onclick_target("+get_n_lbl(e_target)+", delay=["+delay+"], dblclicked=["+dblclicked+"])";
let log_this = LOG_MAP.EV5_CB;
if( log_this) t_log_event_status(caller, lbF+lf7);

    /*}}}*/
    /* return .. f(t_event_has_been_consumed) {{{*/
    if( t_event_has_been_consumed(caller) )
    {
if(log_this) console_warn("*** "+caller+": ALREADY CONSUMED BY:"+LF+t_event_consumed_cause);
if(log_this) console.trace();

        return;
    }
    /*}}}*/
    /* or repost .. f(t_onclick_timer) {{{*/
    if(t_onclick_timer) clearTimeout(t_onclick_timer);
    /*............................*/ t_onclick_timer = null;

    t_onclick_e_target   = e_target;
    t_onclick_dblclicked = dblclicked;

    if( delay ) t_onclick_timer = setTimeout(t_onclick_target_parser, delay);
    else                                     t_onclick_target_parser();
    /*}}}*/
};
/*}}}*/
/*_ t_onclick_target_parser {{{*/
let t_onclick_target_parser = function()
{
    /* e_target bag_id {{{*/
let log_this = LOG_MAP.EV5_CB;

    let e_target = t_onclick_e_target;
    let   bag_id = get_bag_id(e_target);
    let   caller = "t_onclick_target_parser"+ (t_onclick_dblclicked ? "(dblclicked)" : "");
if(log_this) {
    let msg = "<em class='cc0'>"+ caller                              +"</em>"+LF
        +    " <em class='cc3'>e_target "+ e_target.id                +"</em>"+LF
        +    " <em class='cc4'>  bag_id "+ bag_id                     +"</em>"+LF
        +    " <em class='cc2'> standby "+ get_n_lbl(onStandby_PANEL) +"</em>"+LF
    ;
    log("%c"+msg, lbF+lb7);
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg(msg);
if( log_this) t_log_event_status(caller, lf4);
}
    /*}}}*/
    /* pat_bag .. t_onclick_target_handle_pat_bag {{{*/
    if(bag_id == "pat_bag") {
        t_onclick_target_handle_pat_bag(e_target, t_onclick_dblclicked);

        return true;
    }
    /*}}}*/
    /* transcript clear {{{*/
    if     ( e_target.id == "transcript1_clearpin"              ) {                          log_clr_TR1(caller); return; }
    else if( e_target.id == "transcript2_clearpin"              ) {                          log_clr_TR2(caller); return; }
    else if( is_el_or_child_of_parent_el(e_target, transcript1) ) { if(t_onclick_dblclicked) log_clr_TR1(caller); return; }
    else if( is_el_or_child_of_parent_el(e_target, transcript2) ) { if(t_onclick_dblclicked) log_clr_TR2(caller); return; }

     /*}}}*/
    /* RELOAD CLEAR REGEX BEHAVIOR {{{*/
    else if( e_target.id == "RELOAD"                ) { document.location.reload();  return; }
    else if( e_target.id == "CLEAR"                 ) { t_clear(caller);             return; }
    else if( e_target.id == "REGEX"                 ) { t_log_regex();               return; }
    else if( e_target.id == "BEHAVIOR"              ) { t_log_behavior();            return; }
    else if( t_tool_is_a_toggle_option(e_target.id) ) { toggle_keyword(e_target.id); return; }
     /*}}}*/
    /* action .. f(e_target) {{{*/
    let action = (hotring && (e_target == hotring)) ? "hotspot_c_clicked" : "";
    if(!action ) {
        switch(bag_id) {
            /* [sel_bag] [seeker_PU] [seeker_PD] {{{*/
            case "sel_bag": case "seeker_PU": case "seeker_PD":

            let sel_or_seeker_is_on_standby
                = (onStandby_PANEL && (bag_id == onStandby_PANEL.id))
            ;

            let e_target_is_seeker_handle_top
                =  e_target.classList.contains("seeker_handle")
                &&     has_el_class(e_target,  "top"          )
            ;

            let e_target_is_seeker_handle_left_or_right
                =  e_target.classList.contains("seeker_handle")
                && (   has_el_class(e_target,  "left"         )
                    || has_el_class(e_target,  "right"        ))
            ;

            let e_target_is_seeker_handle_bottom
                =  e_target.classList.contains("seeker_handle")
                &&     has_el_class(e_target,  "bottom"       )
            ;

            if     ( e_target_is_seeker_handle_top          ) action = "pat_sort";
            else if( e_target_is_seeker_handle_left_or_right) action = "sel_back";
            else if( e_target_is_seeker_handle_bottom       ) action = "log_seekspot";
            else if( bag_id                   == "seeker_PD") action = "seeker_down_clicked";
            else if( bag_id                   == "seeker_PU") action = "seeker_up_clicked";
            else if( is_a_thumb_el(e_target)                ) action = "sel_clicked";
            else if(!sel_or_seeker_is_on_standby            ) action = "standby";
            else                                              action = "standby_cancel";

            break;
            /*}}}*/
            /* [fly_div] [standby_cancel] [standby] {{{*/
            default:
            let bag_id_onStandby_clicked = (onStandby_PANEL != null) && (onStandby_PANEL.id == bag_id);

            action
                = is_el_or_child_of_parent_el(e_target, fly_div     ) ? "fly_div_clicked"
                : bag_id_onStandby_clicked                            ? "standby_cancel"
                :                                                       "standby"
            ;
/*
log("bag_id_onStandby_clicked=["+bag_id_onStandby_clicked+"] .. onStandby_PANEL=["+get_n_lbl(onStandby_PANEL)+"] .. action=["+action+"]");
*/
            break;
            /*}}}*/
        }
    }
/*
logXXX("action=["+action+"]");
*/
    /*}}}*/
    /* handle .. f(action) {{{*/
    if(action == "standby") t_standby_bag_id( bag_id );
    else                    t_onclick_target_handle_bag_action(e_target, action);
    return true; /* (cancel further processing .. maybe ?) */
    /*}}}*/
};
/*}}}*/
/*_ t_onclick_target_handle_bag_action {{{*/
let t_onclick_target_handle_bag_action = function(e_target, action)
{
    let  caller  = "t_onclick_target_handle_bag_action";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller+": %c e_target=["+get_n_lbl(e_target)+"] %c action=["+action+"]", lb1, lb2, lb3, lbF+lb4);

if( log_this && (LOG_MAP.EV8_FLOATLOG || fly_log_checked)) t_log_stage_msg(STAGE_2_ACTION, " <em class='cc9'>"+action+"</em>");

    switch(action) {
        /* GRID ON-OFF .. [hotspot_c_clicked] */
        case "hotspot_c_clicked": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

            t_log_set_innerHTML("");
            call_t_grid_ON_OFF_CB(); /* TOGGLE */
        }
        break;
        /*}}}*/
        /* SCROLL TO SELECTION .. [sel_clicked] */
        case "sel_clicked": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

            t_onclick_target_handle_scroll_to_slot_num(e_target, caller);
        }
        break;
        /*}}}*/
        case "sel_back": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

            sel_back = !sel_back;
if(log_this) log_add_TR_EVENT("_<em class='cc3'>SELBAG SELECT <em class='cc9'>"+(sel_back ? "BACKWARD" : "FORWARD")+"</em></em>");

            t_sync_seeker(caller);

        }
        break;
        /*}}}*/
        case "pat_sort": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

if(log_this) log_add_TR_EVENT("_<em class='cc3'>PAT SORT DIRECTION <em class='cc9'>"+e_target.innerHTML+"</em></em>");

            t_pat_bag3_reselect_sort_direction
                = t_are_pat_sorted()
                ? -1
                :  1
            ;
            t_pat_bag3_reselect();
        }
        break;
        /*}}}*/
        case "log_seekspot": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

            t_log_seekspot_toggle();
if(log_this) log_add_TR_EVENT("_<em class='cc3'>LOG SEEKSPOT <em class='cc9'>"+(log_seekspot ? "ON" : "OFF")+"</em></em>");

            t_sync_seeker(caller);
        }
        break;
        /*}}}*/
        case "pin_seekspot": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

            t_pin_seekspot_toggle();
if(log_this) log_add_TR_EVENT("_<em class='cc3'>PIN SEEKSPOT <em class='cc9'>"+(pin_seekspot ? "ON" : "OFF")+"</em></em>");

            t_sync_seeker(caller);
        }
        break;
        /*}}}*/
        case "seeker_up_clicked": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");
            /* 1. seeker_PD .. hiding to visible {{{*/
            if(onWork_PANEL && t_seeker_PD_is_hiding())
            {
if(log_this) log_add_TR_EVENT("_<em class='cc5'>SHOW seeker_PD</em>");
                t_seeker_PD_show();
                t_toggle_panel_magnified(seeker_PD, false, caller);
                t_seeker_move_on_last_highlight_slot_num();
            }
            /*}}}*/
            /* 2. seeker_PU . visible to hiding {{{*/
            else if( t_seeker_PU_is_showing() )
            {
if(log_this) log_add_TR_EVENT("_<em class='cc8'>HIDE seeker_PU</em>");
              /*t_seeker_PU_hide();*/
                t_seeker_PU_hide(0);
            }
            /*}}}*/
        }
        break;
        /*}}}*/
        case "seeker_down_clicked": /*{{{*/
        {
if(log_this) log(".switch ["+action+"]");

            /* 1. sel_back toggle {{{*/
            let e_target_is_seeker_handle_left_or_right
                =  e_target.classList.contains("seeker_handle")
                && (   has_el_class(e_target,  "left"         )
                    || has_el_class(e_target,  "right"        ))
            ;

            if( e_target_is_seeker_handle_left_or_right )
            {
                action = "sel_back";
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

                sel_back = !sel_back;
if(log_this) log_add_TR_SELECT("_<em class='cc3'>SELECT <em class='cc9'>"+(sel_back ? "BACKWARD" : "FORWARD")+"</em></em>");

                t_sync_seeker(caller);
            }
            /*}}}*/
            /* 2. sel_clicked slot num {{{*/
            else if(e_target.id.startsWith("thumb_s_"))
            {
                action = "sel_clicked";
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

                t_onclick_target_handle_scroll_to_slot_num(e_target, caller);
            }
            /*}}}*/
            /* 3. magnify seeker_PD {{{*/
            else if( !t_is_panel_magnified(seeker_PD) )
            {
                action = "magnify";
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

                t_toggle_panel_magnified(seeker_PD, "toggle", caller);
            }
            /*}}}*/
            /* 4. hide seeker_PD {{{*/
            else {
if(log_this) log_add_TR_EVENT("_<em class='cc8'>HIDE seeker_PD</em>");

                t_seeker_PD_hide();
            }
            /*}}}*/
        }
        break;
        /*}}}*/
        case "fly_div_clicked": /*{{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");
        /*  t_log_set_innerHTML(""); clears all */
            t_log_clr_top_bunch();
        }
        break;
        /*}}}*/
        /* STANDBY CLEAR */
        case "standby_cancel": /*{{{*/
        {

            if(onStandby_PANEL) t_standby3_release(caller);
        }
        break;
        /*}}}*/
        /* IGNORING */
        default: /*{{{*/
        {
            /*action = "default: action=["+action+"]";*/
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, " <em class='cc9'>"+action+"</em> <em class='cc2'>*** NOT HANDLED ***</em>");
        }
        break;
        /*}}}*/
    }
    if(onStandby_PANEL && t_standby2_is_done(onStandby_PANEL.id, caller))
        t_standby3_release(caller);
};
/*}}}*/
/*_ t_onclick_target_handle_pat_bag {{{*/
let t_onclick_target_handle_pat_bag = function(e_target,dblclicked)
{
    /* {{{*/
    let caller = "t_onclick_target_handle_pat_bag"+ (dblclicked ? "(dblclicked)" : "");
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if(log_this) log("%c "+caller+": id=["+e_target.id+"]",lbF);

    /*}}}*/
    /* [fly_log] {{{*/
    if(e_target.id == "fly_log") {
        let state = has_el_class(e_target, "checked");
        t_log_set_floatlog( !state ); /* set run-time [DISPLAY OPTION] .. leaving saved [LOGGING OPTION] unchanged */
        return;
    }
    /*}}}*/
    /* [pat_sort] {{{*/
    if(e_target.id == "pat_sort") {
        t_pat_bag3_reselect_sort_direction
            = t_are_pat_sorted()
            ? -1
            :  1
        ;
        t_pat_bag3_reselect();

        return;
    }
    /*}}}*/
    let pat_bag_is_on_standby = (onStandby_PANEL && (onStandby_PANEL.id == pat_bag.id));
    if( pat_bag_is_on_standby)   t_standby3_release     ( caller   );
    else                         t_pat_bag_handle_target( e_target, dblclicked);
};
/*}}}*/
/*_ t_onclick_target_handle_scroll_to_slot_num {{{*/
let t_onclick_target_handle_scroll_to_slot_num = function(e_target, _caller)
{

let log_this = LOG_MAP.EV5_CB || LOG_MAP.T3_GRID || LOG_MAP.T4_SLOT;
if(log_this) log("t_onclick_target_handle_scroll_to_slot_num(e_target=["+get_n_lbl(e_target)+"]) ..%c CALLED BY "+ _caller, lb0);

    /* slot */
    let     slot  = get_slot_from_id_or_className(e_target);
    if(     slot <= 0) return "NO SLOT FOR "+get_n_lbl(e_target);

    if(!ccs[slot].thumbs) ccs[slot].thumbs = [];

    /* num */
    let num = get_num_from_id_or_className_slot(e_target, slot);
if(log_this) log_add_TR_SELECT(".slot=<em>"+slot+"</em> num=<em>"+num+"</em>");

    /* next num .. f(last_highlight_thumb_p) */
    if(!num) {
        num = get_slot_num_for_thumb_p(slot, last_highlight_thumb_p, sel_back);
if(log_this) log(".slot_num_for_thumb_p=["+ num +"]");

        /* next num .. (may wrap at boundaries) */
        let first = 1;
        let  last = ccs[slot].nodes.length;

        if(sel_back) num = (num > first) ? num-1 : last;
        else         num = (num < last ) ? num+1 : first;
if(log_this) log_add_TR_SELECT(".NEXT num=<em>"+num+"</em>");

    }
    let visible = scroll_to_slot_num(slot, num, 0);
    t_seeker_move_on_slot_num(slot, num, visible);

    let result = "TO THUMB slot=["+slot+"] num=["+num+"]";
if(log_this) log_add_TR_SELECT("<em class='cc4'>"+result+"</em>");

    return result;
};
/*}}}*/
/*}}}*/
/* TOOL standby {{{*/
/*_ t_standby_bag_id {{{*/
/*{{{*/
let T_STANDBY1_DELAY = 1.5 * CLICK_DURATION;
let t_standby1_timer = null;

/*}}}*/
let t_standby_bag_id = function(bag_id)
{
    let caller = "t_standby_bag_id("+bag_id+")";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller, lbF+lb0);
if( log_this) log_add_TR_EVENT("<em class='cc1'>STANDBY</em> <em class='cc9'>"+bag_id+"</em>");
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, " <em class='cc9'>standby ["+bag_id+"]</em>");

    /* clear old */
    if(onStandby_PANEL) t_standby3_release("t_standby_bag_id");

    /* select new */
    if(bag_id) onStandby_PANEL = get_tool("#"+bag_id);
    else   onStandby_PANEL = null;

    if(onStandby_PANEL) add_el_class(onStandby_PANEL, "standby");

if(onStandby_PANEL) if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_3_RESULT, " Setting "+bag_id+" on STANDBY");

    /* new timer */
    if(t_standby1_timer) clearTimeout(t_standby1_timer);
    t_standby1_timer =     setTimeout(t_standby1_handle, T_STANDBY1_DELAY);
};
/*}}}*/
/*_ t_standby1_handle {{{*/
let t_standby1_handle = function()
{
    if(!onStandby_PANEL) return;

    let caller = "t_standby1_handle";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller+": ["+onStandby_PANEL.id+"]", lbF+lb1);

    switch( onStandby_PANEL.id )
    {
        case "pat_bag":
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_1_INPUT, " STANDBY HANDLE <em class='cc9'>"+onStandby_PANEL.id+"</em>");
        t_pat_bag_handle_target( pat_bag );
        break;

        case "sel_bag":
        sel_back = !sel_back;
        if(log_this) log_add_TR_EVENT("_<em class='cc3'>SELBAG SELECT <em class='cc9'>"+(sel_back ? "BACKWARD" : "FORWARD")+"</em></em>");
        t_sync_seeker(caller);
        break;
    }

    if( t_standby2_is_done(onStandby_PANEL.id, caller) )
        t_standby3_release(caller);
};
/*}}}*/
/*_ t_standby2_is_done {{{*/
let t_standby2_is_done = function(id,_caller)
{
let log_this = LOG_MAP.S2_SELECT;

/*
    let target_handled
        =               (id     != "pat_bag")
        || !has_el_class(pat_bag, "open_bag")
    ;
*/
    let target_handled = true; /*TODO*/

if( log_this) log("%c t_standby2_is_done("+id+"): ...return ["+target_handled+"] %c .. CALLED BY "+ _caller, lbF+lb2, lb0);
    return target_handled;
};
/*}}}*/
/*_ t_standby3_release {{{*/
let t_standby3_release = function(_caller="timer")
{
    if(!onStandby_PANEL) return;

let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c t_standby3_release: ["+onStandby_PANEL.id+"] .. CALLED BY "+ _caller, lbF+lb3);

    if(t_standby1_timer) clearTimeout( t_standby1_timer );
    /*..............................*/ t_standby1_timer = null; /* done */

    del_el_class(onStandby_PANEL, "standby");

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_3_RESULT, " STANDBY CLEAR <em class='cc9'>"+onStandby_PANEL.id+"</em>");

    onStandby_PANEL  = null;
};
/*}}}*/
/*}}}*/

/* PAT */
/*{{{*/
/*{{{*/

let bot_div;
let  fly_log;
let  pat_sort;
let  fly_log_checked = false;
let  txt_log;

let off_bag;
let bak_bag;

let mov_div;

let hov1;
let hov2;
let hov3;
let hov4;

/*{{{
let bak_bag_place_holder;
let off_bag_place_holder;
let pat_bag_place_holder;
let mov_dst;
}}}*/

/*}}}*/
/*. t_pat_bag_build_off_bak_bot_and_mov_div {{{*/
let t_pat_bag_build_off_bak_bot_and_mov_div = function()
{
    /* fly_div {{{*/
    fly_div = document.createElement("DIV"  ); fly_div.id = "fly_div"; add_el_class( fly_div, "pinned");
    dom_tools_html.appendChild(fly_div);

/*{{{
    fly_div.style.position = "fixed";
    fly_div.style.top      =   "0";
    fly_div.style.left     = "50%";
}}}*/
    /*}}}*/
    /* off_bag {{{*/
    off_bag = document.createElement("DIV"  ); off_bag.id = "off_bag"; add_el_class( off_bag, "empty");
    off_bag.title = "OFF BAG";

/* off_bag_place_holder {{{
    off_bag.insertAdjacentHTML("beforeend", place_holder_line);
    off_bag_place_holder = off_bag.firstChild;
}}}*/
    /*}}}*/
    /* bak_bag {{{*/
    bak_bag = document.createElement("DIV"  ); bak_bag.id = "bak_bag";
    bak_bag.title = "BAK BAG";

/* bak_bag_place_holder {{{
    let place_holder_line
        = "<span class='pat_span place_holder'><em class='num_em'>"+SYMBOL_CHECK_MARK+"</em>&nbsp;"
        + "<em class='cc1'>&nbsp;</em>"
        + "</span>"
    ;
    bak_bag.insertAdjacentHTML("beforeend", place_holder_line);
    bak_bag_place_holder = bak_bag.firstChild;
}}}*/
    /*}}}*/
    /* bot_div txt_log pat_sort fly_log {{{*/
    bot_div =  document.createElement("DIV"); bot_div .id = "bot_div" ; add_el_class(bot_div , "bot_div" );
    txt_log  = document.createElement("DIV"); txt_log .id = "txt_log" ; add_el_class(txt_log , "txt_log" );
    fly_log  = document.createElement("DIV"); fly_log .id = "fly_log" ; add_el_class(fly_log , "fly_log" );
    pat_sort = document.createElement("DIV"); pat_sort.id = "pat_sort"; add_el_class(pat_sort, "pat_sort");

    bot_div.appendChild( txt_log  );
    bot_div.appendChild( fly_log  );
    bot_div.appendChild( pat_sort );

    fly_log .title = "flying log"+LF+".. click them to hide";
    pat_sort.title = "sort";

    /*}}}*/
    /* mov_div {{{*/
    mov_div = document.createElement("DIV"  ); mov_div.id = "mov_div" ;
    mov_div.style.display = "none";

/*{{{
    mov_dst = document.createElement("DIV"  ); mov_dst.id = "mov_dst" ;
    mov_dst.style.display = "none";
}}}*/
    /*}}}*/
    /* pat_bag composition {{{*/
    pat_bag.appendChild(off_bag);
    pat_bag.appendChild(bak_bag);
    pat_bag.appendChild(bot_div);
    pat_bag.appendChild(mov_div);

/* pat_bag_place_holder {{{
    pat_bag.insertAdjacentHTML("beforeend", place_holder_line);
    pat_bag_place_holder = pat_bag.firstChild;
}}}*/
    /*}}}*/
    /* hov1..hov4 {{{*/
    hov1    = document.createElement("DIV" ); hov1.id    = "hov1"   ; hov1.innerText = SYMBOL_LOWER_RIGHT;
    hov2    = document.createElement("DIV" ); hov2.id    = "hov2"   ; hov2.innerText = SYMBOL_UPPER_LEFT;
    hov3    = document.createElement("DIV" ); hov3.id    = "hov3"   ; hov3.innerText = SYMBOL_LOWER_RIGHT;
    hov4    = document.createElement("DIV" ); hov4.id    = "hov4"   ; hov4.innerText = SYMBOL_UPPER_LEFT;

    hov1   .style.display = "none";
    hov2   .style.display = "none";
    hov3   .style.display = "none";
    hov4   .style.display = "none";

    pat_bag.appendChild(hov1   );
    pat_bag.appendChild(hov2   );
    pat_bag.appendChild(hov3   );
    pat_bag.appendChild(hov4   );
    /*}}}*/
};
/*}}}*/
/*_ t_show_hov_1 t_show_hov_2 t_hide_hov {{{*/
let t_show_hov_1 = function(x,y) { if(typeof hov1 == "undefined") return; hov1.style.display = "inline-block"; hov1.style.left = x+"px"; hov1.style.top = y+"px"; };
let t_show_hov_2 = function(x,y) { if(typeof hov2 == "undefined") return; hov2.style.display = "inline-block"; hov2.style.left = x+"px"; hov2.style.top = y+"px"; };
let t_hide_hov   = function()
{
    if(typeof hov1 != "undefined") hov1.style.display = "none";
    if(typeof hov2 != "undefined") hov2.style.display = "none";
    if(typeof hov3 != "undefined") hov3.style.display = "none";
    if(typeof hov4 != "undefined") hov4.style.display = "none";
};
/*{{{
}}}*/
/*}}}*/
/*_ t_hov_rect {{{*/
let t_hov_rect = function(moving_rect, hovered_rect)
{
    hov1.style.display= "block"; hov1.style.left = ( moving_rect.left )+"px"; hov1.style.top = ( moving_rect.top   )+"px";
    hov2.style.display= "block"; hov2.style.left = ( moving_rect.right)+"px"; hov2.style.top = ( moving_rect.bottom)+"px";
    hov3.style.display= "block"; hov3.style.left = (hovered_rect.left )+"px"; hov3.style.top = (hovered_rect.top   )+"px";
    hov4.style.display= "block"; hov4.style.left = (hovered_rect.right)+"px"; hov4.style.top = (hovered_rect.bottom)+"px";
};
/*}}}*/
/*_ t_pat_bag_handle_target {{{*/
/*{{{*/
/*
/\(SEL\|PAT\|OFF\|BAK\|STANDBY\|OPENED\)
                                     /\(CLOSED\|NONE\|SOME\|MANY\)
/\(SEL\|PAT\|OFF\|BAK\|STANDBY\|OPENED\|CLOSED\|NONE\|SOME\|MANY\)
/\(SEL\|PAT\|OFF\|BAK\|STANDBY\|OPENED\|CLOSED\|NONE\|SOME\|MANY\|CLICKED\|IDLE\)

*/
/*................................................................................................(SEL PAT OFF BAK CLICKED STANDBY).........................*/
const STAGE1__PAT_CLICKED____________________ACTION_TOGGLE_PAT     = { color:1 , level:"1", context:"PAT_CLICKED"                   , action:"TOGGLE_PAT"     };

const STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       = { color:2 , level:"2", context:"BAK_MANY_SEL_NONE__BAG_CLOSED" , action:"OPEN_BAG"       };
const STAGE3__BAK_SOME___________BAK_CLICKED_ACTION_DUMP_BAK       = { color:3 , level:"3", context:"BAK_SOME___________BAK_CLICKED", action:"DUMP_BAK"       };
const STAGE4__BAK_MANY_SEL_NONE__BAG_OPENED__ACTION_SHOW_ALL       = { color:4 , level:"4", context:"BAK_MANY_SEL_NONE__BAG_OPENED" , action:"SHOW_ALL"       };
const STAGE5__BAK_NONE_SEL_SOME______________ACTION_HIDE_SEL       = { color:5 , level:"5", context:"BAK_NONE_SEL_SOME"             , action:"HIDE_SEL"       };

const STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       = { color:2 , level:"2", context:"OFF_MANY_SEL_NONE__BAG_CLOSED" , action:"OPEN_BAG"       };
const STAGE3__OFF_SOME___________OFF_CLICKED_ACTION_BACK_OFF       = { color:3 , level:"3", context:"OFF_SOME___________OFF_CLICKED", action:"BACK_OFF"       };
const STAGE4__OFF_MANY_SEL_NONE__BAG_OPENED__ACTION_SHOW_OFF       = { color:4 , level:"4", context:"OFF_MANY_SEL_NONE__BAG_OPENED" , action:"SHOW_OFF"       };
const STAGE5__OFF_NONE_SEL_SOME______________ACTION_HIDE_SEL       = { color:5 , level:"5", context:"OFF_NONE_SEL_SOME"             , action:"HIDE_SEL"       };

const STAGE6__STANDBY_IDLE___________________ACTION_STANDBY_ON     = { color:6 , level:"6", context:"STANDBY_IDLE"                  , action:"STANDBY_ON"     };
const STAGE7__STANDBY_CLOSED_________________ACTION_STANDBY_OPENED = { color:7 , level:"7", context:"STANDBY_CLOSED"                , action:"STANDBY_OPENED" };
const STAGE8__STANDBY_OPENED_________________ACTION_STANDBY_DONE   = { color:8 , level:"8", context:"STANDBY_OPENED"                , action:"STANDBY_DONE"   };

/*}}}*/
let t_pat_bag_handle_target = function(e_target, dblclicked=false)
{
    /* {{{*/
    let  caller  = "t_pat_bag_handle_target("+get_n_lbl(e_target)+", dblclicked "+dblclicked+")";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log(caller);

    /*}}}*/
    /* [bak_bag dblclicked] - CLEAR BAG {{{*/
    if((e_target == bak_bag) && dblclicked)
    {
        let count = csv_count(bak_csv);
        if( count) {
if(log_this) log(caller+": csv_count(bak_csv)=["+count+"]");
            let clearing_action = " CLEARING ("+count+") items FROM <em class='cc0'>bak</em>";
            csv_clr_bak_csv();
            t_onPatternUpdate(clearing_action, caller);
            return;
        }
    }
    /*}}}*/
    /* UI {{{*/
    let            parent_div = t_get_parent_with_TAG(e_target,"DIV");
    let pat_bag_is_on_standby = ((onStandby_PANEL != null ) && (onStandby_PANEL == e_target));
    let pat_bag_is_opened     = (        has_el_class( pat_bag, "open_bag")              );

    let pattern_clicked       = (e_target.tagName == "EM") || e_target.id.startsWith( "pattern");
    let bak_bag_clicked       = (parent_div == bak_bag);
    let off_bag_clicked       = (parent_div == off_bag);
    let bot_div_clicked       = (parent_div == bot_div);

if(log_this) log("...parent_div......................=["+ get_n_lbl(parent_div) +"]");
if(log_this) log("...pat_bag_is_on_standby...........=["+ pat_bag_is_on_standby +"]");
if(log_this) log("...pat_bag_is_opened...............=["+ pat_bag_is_opened     +"]");
if(log_this) log("...pattern_clicked.................=["+ pattern_clicked       +"]");
if(log_this) log("...bak_bag_clicked.................=["+ bak_bag_clicked       +"]");
if(log_this) log("...off_bag_clicked.................=["+ off_bag_clicked       +"]");
if(log_this) log("...bot_div_clicked.................=["+ bot_div_clicked       +"]");
    /*}}}*/
    /* CSV {{{*/
    let sel_csv_is_empty         = (           csv_count( sel_csv ) < 1             );
    let bak_csv_one_or_more      = (           csv_count( bak_csv ) > 0             );
    let bak_csv_more_than_one    = (           csv_count( bak_csv ) > 1             );
    let off_csv_one_or_more      = (           csv_count( off_csv ) > 0             );
    let off_csv_more_than_one    = (           csv_count( off_csv ) > 1             );

if(log_this) log("...sel_csv_is_empty................=["+ sel_csv_is_empty      +"]");
if(log_this) log("...bak_csv_one_or_more.............=["+ bak_csv_one_or_more   +"]");
if(log_this) log("...bak_csv_more_than_one...........=["+ bak_csv_more_than_one +"]");
if(log_this) log("...off_csv_one_or_more.............=["+ off_csv_one_or_more   +"]");
if(log_this) log("...off_csv_more_than_one...........=["+ off_csv_more_than_one +"]");
    /*}}}*/
    /* stage {{{*/
    /*_______PAT________________________________________________________________*/
    let stage
        = (  pattern_clicked                                                     ) ? STAGE1__PAT_CLICKED____________________ACTION_TOGGLE_PAT

    /*_______BAK_OR_OFF_________________NO_SEL_____________________BAG_CLOSED___*/
        : (  bak_csv_more_than_one  &&  sel_csv_is_empty  &&  !pat_bag_is_opened ) ? STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG
        : (  off_csv_more_than_one  &&  sel_csv_is_empty  &&  !pat_bag_is_opened ) ? STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG

    /*_____________________________________________________________DIV_CLICKED__*/
        : (  off_csv_one_or_more                          &&   off_bag_clicked   ) ? STAGE3__OFF_SOME___________OFF_CLICKED_ACTION_BACK_OFF
        : (  bak_csv_one_or_more                          &&   bak_bag_clicked   ) ? STAGE3__BAK_SOME___________BAK_CLICKED_ACTION_DUMP_BAK

    /*_______OFF________________________SEL________________________DIV__________*/
        : (  off_csv_more_than_one  &&  sel_csv_is_empty                         ) ? STAGE4__OFF_MANY_SEL_NONE__BAG_OPENED__ACTION_SHOW_OFF
        : ( !off_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE5__OFF_NONE_SEL_SOME______________ACTION_HIDE_SEL
    /*_______BAK________________________SEL________________________DIV__________*/
      /*: (  bak_csv_more_than_one  &&  sel_csv_is_empty                         ) ? STAGE4__BAK_MANY_SEL_NONE__BAG_OPENED__ACTION_SHOW_ALL*/
        : ( !bak_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE5__BAK_NONE_SEL_SOME______________ACTION_HIDE_SEL
    /*_______PAT_BAG____________________________________________________________*/
        : ( !pat_bag_is_on_standby                                               ) ? STAGE6__STANDBY_IDLE___________________ACTION_STANDBY_ON
        : ( !pat_bag_is_opened                                                   ) ? STAGE7__STANDBY_CLOSED_________________ACTION_STANDBY_OPENED
        :                                                                            STAGE8__STANDBY_OPENED_________________ACTION_STANDBY_DONE
    ;

    /*}}}*/
    /* [t_log_stage] {{{*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) {
        let  something_clicked
            =  pattern_clicked
            || bak_bag_clicked
            || off_bag_clicked
            || bot_div_clicked
        ;

        t_log_stage(stage, something_clicked, pattern_clicked, e_target, parent_div);
    }
    /*}}}*/
    /* [t_pat_bag_status_set_innerText] {{{*/
    t_pat_bag_status_set_innerText(stage.level+" "+stage.context+" "+stage.action);

    /*}}}*/
    switch(stage) {
        case STAGE1__PAT_CLICKED____________________ACTION_TOGGLE_PAT     : t_pat_bag1_toggle_pat   (e_target); break;

        case STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       : t_pat_bag2_bag_open     ();         break;
        case STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       : t_pat_bag2_bag_open     ();         break;

        case STAGE3__BAK_SOME___________BAK_CLICKED_ACTION_DUMP_BAK       : t_pat_bag3_dump_bak     ();         break;
        case STAGE3__OFF_SOME___________OFF_CLICKED_ACTION_BACK_OFF       : t_pat_bag3_back_off     ();         break;

      /*case STAGE4__BAK_MANY_SEL_NONE__BAG_OPENED__ACTION_SHOW_ALL       : t_pat_bag3_show_bak     ();         break;*/
        case STAGE5__BAK_NONE_SEL_SOME______________ACTION_HIDE_SEL       : t_pat_bag5_hide_sel     ();         break;

        case STAGE4__OFF_MANY_SEL_NONE__BAG_OPENED__ACTION_SHOW_OFF       : t_pat_bag4_show_off     ();         break;
        case STAGE5__OFF_NONE_SEL_SOME______________ACTION_HIDE_SEL       : t_pat_bag5_hide_sel     ();         break;

        case STAGE6__STANDBY_IDLE___________________ACTION_STANDBY_ON     : t_pat_bag6_standby      ();         break;
        case STAGE7__STANDBY_CLOSED_________________ACTION_STANDBY_OPENED : t_pat_bag7_standby_open ();         break;
        case STAGE8__STANDBY_OPENED_________________ACTION_STANDBY_DONE   : t_pat_bag8_standby_done ();         break;
        default:
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked)
            t_log_stage_msg(STAGE_2_ACTION, "<div class='cc2'>*** "+stage.level+" "+stage.context+" "+stage.action+"*** <em class='cc8'>"+caller+"</em></div>");
        break;
    }

};
/*}}}*/
/*_ t_pat_bag_open_or_close {{{*/
let t_pat_bag_open_or_close = function(_caller)
{
    /*{{{*/
    let caller = "t_pat_bag_open_or_close";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log(caller+" .. CALLED BY "+ _caller);
if( log_this) log("...onWork_MOVE_CHILD=["+onWork_MOVE_CHILD+"]");

    /*}}}*/
    /* msg {{{*/
    let no_change_msg                  = "Panel left "+ (has_el_class(pat_bag, "open_bag") ? "OPENED" : "CLOSED");
    let sel_none_off_some_msg          = "Panel OPENED: some to choose";
    let sel_none_off_none_bak_none_msg = "Panel CLOSED: none to choose";
    let sel_some_msg                   = "Panel CLOSED: some selection";
    let sel_some_bak_none_msg          = "Panel CLOSED: SEL some BAK none";

    /*}}}*/
    /* count {{{*/
    let sel_count = s_get_slotted_pattern_count();
    let off_count = csv_count(off_csv);
    let bak_count = csv_count(bak_csv);

    let sel_none_off_some              = (!sel_count &&  off_count                );
    let sel_none_off_none_bak_none     = (!sel_count && !off_count   && !bak_count);
    let sel_some                       = ( sel_count                              );
    let sel_some_bak_none              = ( sel_count                 && !bak_count);

    let sel = " <em class='have cc"+ (sel_count ? 1 : 8)+"'>SEL "+ sel_count +"</em>";
    let off = " <em class='have cc"+ (off_count ? 5 : 8)+"'>OFF "+ off_count +"</em>";
    let bak = " <em class='have cc"+ (bak_count ? 2 : 8)+"'>BAK "+ bak_count +"</em>";

    /*}}}*/
    /* OPEN OR CLOSE {{{*/

    let close_canceled =  false /* !onWork_MOVE_CHILD */; /* t_pat_bag_close_handler will reschedule itself */

    if     (sel_none_off_some                            ) t_pat_bag_open (caller, sel_none_off_some_msg          + sel + off + bak);
    else if(sel_some                   && !close_canceled) t_pat_bag_close(caller, sel_some_msg                   + sel + off + bak);
/*  else if(sel_some_bak_none          && !close_canceled) t_pat_bag_close(caller, sel_some_bak_none_msg          + sel + off + bak); */
    else if(sel_none_off_none_bak_none && !close_canceled) t_pat_bag_close(caller, sel_none_off_none_bak_none_msg + sel + off + bak);
    else if(LOG_MAP.EV8_FLOATLOG || fly_log_checked      ) t_log_stage_msg(STAGE_3_RESULT, no_change_msg          + sel + off + bak);

    /*}}}*/
/* {{{

    let sel_none_off_more_msg          = "Panel OPENED: more to choose";
    let sel_none_off_more              = (!sel_count &&  off_count>1 );

    else if(sel_none_off_more                         ) t_pat_bag_open (caller, sel_none_off_more_msg  + sel + off + bak);
    else if(              !off_count                  ) t_pat_bag_close(caller,     "No   OFF selections to choose from");
    else if(              !off_count     && !bak_count) t_pat_bag_close(caller,     "No other selection  to choose from");
    else if(!sel_count                                ) t_pat_bag_close(caller,           "No selection  to choose from");
    else                                                t_pat_bag_close(caller, "Some slotted selection"                );

}}}*/
};
/*}}}*/

/* PAT CSV */
/*{{{*/
/*_ t_are_pat_sorted {{{*/
let t_are_pat_sorted = function()
{
    if(!sel_csv) return false;

    let csv = csv_sort( sel_csv );

    return csv == sel_csv;
};
/*}}}*/
/*_ t_are_pat_reversed {{{*/
let t_are_pat_reversed = function()
{
    if(!sel_csv) return false;

    let csv = csv_reverse(sel_csv);

    return csv == sel_csv;
};
/*}}}*/
/*_ csv_add_pat_csv {{{*/
let csv_add_pat_csv = function(pattern)
{
    if(!csv_contains(     pat_csv, pattern))
        pat_csv = csv_add(pat_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_add_off_csv {{{*/
let csv_add_off_csv = function(pattern)
{
    if(!csv_contains(     off_csv, pattern))
        off_csv = csv_add(off_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_add_bak_csv {{{*/
let csv_add_bak_csv = function(pattern)
{
    if(!csv_contains(     bak_csv, pattern))
        bak_csv = csv_add(bak_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_del_pat_csv {{{*/
let csv_del_pat_csv = function(pattern)
{
    pat_csv = csv_del(pat_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_del_off_csv {{{*/
let csv_del_off_csv = function(pattern)
{
    off_csv = csv_del(off_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_del_bak_csv {{{*/
let csv_del_bak_csv = function(pattern)
{
    bak_csv = csv_del(bak_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_add_bin_csv {{{*/
let csv_add_bin_csv = function(pattern)
{
    if(!csv_contains(     bin_csv, pattern))
        bin_csv = csv_add(bin_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_move_pattern_to_off {{{*/
let csv_move_pattern_to_off = function(pattern)
{
    /* FROM */
    csv_del_bak_csv( pattern );
    csv_del_pat_csv( pattern );

    /* TO */
    csv_add_off_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_pat {{{*/
let csv_move_pattern_to_pat = function(pattern)
{
    /* FROM */
    csv_del_bak_csv( pattern );
    csv_del_off_csv( pattern );

    /* TO */
    csv_add_pat_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_bak {{{*/
let csv_move_pattern_to_bak = function(pattern)
{
    /* FROM */
    csv_del_pat_csv( pattern );
    csv_del_off_csv( pattern );

    /* TO */
    csv_add_bak_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_bin {{{*/
let csv_move_pattern_to_bin = function(pattern)
{
    /* FROM */
    csv_del_pat_csv( pattern );
    csv_del_off_csv( pattern );
    csv_del_bak_csv( pattern );

    /* TO */
    csv_add_bin_csv( pattern );
};
/*}}}*/
/*_ csv_clr_bak_csv {{{*/
let csv_clr_bak_csv = function()
{
    bin_csv = bak_csv;
    bak_csv = "";
};
/*}}}*/
/*}}}*/

/* PAT HANDLE */
/*. t_pat_bag1_show_pattern {{{*/
let t_pat_bag1_show_pattern = function(pattern, msg)
{
    /*{{{*/
    let caller  = "t_pat_bag1_show_pattern("+pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller, lbF+lb1);

    /*}}}*/
    /* SEARCH DOCUMENT FOR PAT {{{*/
    set_tools_filter( pattern );
    let tools_filter = t_get_tool_id_value("tools_filter");
    call_check_TreeWalker("body", tools_filter);

    /*}}}*/
    /* SHOW   [    SLOTTED PAT] {{{*/
    if(     get_slot_of_pattern( pattern )) {
        csv_move_pattern_to_pat( pattern );

        t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* BACK   [NOT   FOUND PAT] {{{*/
    else {
        csv_move_pattern_to_bak( pattern );

        t_onPatternUpdate(SYMBOL_BAK+" OFF <em class='cc8'>"+ ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag1_hide_pattern {{{*/
let t_pat_bag1_hide_pattern = function(pattern, msg)
{
    /*{{{*/
    let caller  = "t_pat_bag1_hide_pattern("+pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller, lbF+lb1);

    /*}}}*/
    /* HIDE   [    CLEARED PAT] {{{*/
    let slot = get_slot_matching_pattern(pattern);
    if( slot) {
        clear_slot( slot );
        csv_move_pattern_to_off( pattern );

        t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* HIDE   [NOT SLOTTED PAT] {{{*/
    else {
        csv_move_pattern_to_off( pattern );

        t_onPatternUpdate(SYMBOL_HID+" not found <em class='cc8'>"+ ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag1_back_pattern {{{*/
let t_pat_bag1_back_pattern = function(pattern, msg)
{
    /*{{{*/
    let caller  = "t_pat_bag1_back_pattern("+pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller, lbF+lb1);

    /*}}}*/
    /* BACK   [    CLEARED PAT] {{{*/
    let             slot = get_slot_matching_pattern(pattern);
    if(             slot) {
        clear_slot( slot );
        csv_move_pattern_to_bak( pattern );

        t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* BACK   [NOT SLOTTED PAT] {{{*/
    else {
        csv_move_pattern_to_bak( pattern );

        t_onPatternUpdate(SYMBOL_BAK+" OFF <em class='cc0'>"+ ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/

/*_ t_pat_bag1_toggle_pat {{{*/
let t_pat_bag1_toggle_pat = function(e_target)
{
    /* [pattern] [slot] {{{*/
    let want_pattern = e_target.title;
    let caller  = "t_pat_bag1_toggle_pat("+want_pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_CB;
if( log_this) log("%c "+caller, lbF+lb1);

    if(!want_pattern) {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_1_INPUT, "<em class='cc0'>NO PATTERN TO TOGGLE</em>");

        return;
    }

    let slot = get_slot_matching_pattern( want_pattern );
if(log_this) log("...slot=["+slot+"]");
    /*}}}*/
    /* TOGGLE [pat_clicked] {{{*/
    if(has_el_class(e_target, "pat_clicked")) del_el_class(e_target,"pat_clicked");
    else                                      add_el_class(e_target,"pat_clicked");
    /*}}}*/
    if(slot) {
        /* HIDE TOGGLED PATTERN {{{*/
        if(want_pattern == ccs[slot].pattern)
        {
if(log_this) log("HIDE TOGGLED PATTERN");
            t_pat_bag1_hide_pattern(ccs[slot].pattern, SYMBOL_HID+" SEL <em class='cc"+slot+"'>"+ccs[slot].pattern+"</em>");
            if( words_opcycle )
                setTimeout(cycle_on_last_cleared_pattern, PATTERN_CYCLE_DELAY);
        }
        /*}}}*/
        else {
            /* HIDE ALL COLIDING PATTERNS {{{*/
            do {
if(log_this) log("HIDE COLIDING PATTERN IN SLOT ["+slot+"]");
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg(SYMBOL_COLIDE+" <em class='cc4'>"+want_pattern+"</em> "+SYMBOL_DISMISS+" <em class='cc4'>"+ccs[slot].pattern+"</em>");
                t_pat_bag1_hide_pattern(ccs[slot].pattern, SYMBOL_HID+" SEL <em class='cc"+slot+"'>"+ccs[slot].pattern+"</em>");
            }
            while(slot = get_slot_matching_pattern( want_pattern ));
            /*}}}*/
            /* THEN SHOW TOGGLED PATTERN {{{*/
if(log_this) log("THEN SHOW TOGGLED PATTERN slot=["+slot+"]");

            t_pat_bag1_show_pattern(want_pattern, SYMBOL_SEL+" <em class='cc1'>"+want_pattern+"</em>");
            /*}}}*/
        }
    }
    /* SHOW TOGGLED PATTERN {{{*/
    else {
if(log_this) log("SHOW TOGGLED PATTERN");
        t_pat_bag1_show_pattern(    want_pattern, SYMBOL_SEL+" <em class='cc1'>"+want_pattern+"</em>");

    }
    /*}}}*/
};
/*}}}*/

/*_ t_pat_bag2_bag_open {{{*/
let t_pat_bag2_bag_open = function()
{
    t_pat_bag_open("t_pat_bag2_bag_open", "Showing OFF selections");
};
/*}}}*/

/*_ t_pat_bag3_back_off {{{*/
let t_pat_bag3_back_off = function()
{
    /*{{{*/
let caller = "t_pat_bag3_back_off";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c "+caller, lbF+lb4);

    /*}}}*/

    let tmp_csv  =    String( off_csv );
    let    count = csv_count( tmp_csv );
    let patterns = "";

    for(let pos = 1; pos <= count; ++pos)
    {
        /* SHOW   [    SLOTTED PAT] {{{*/
        let pattern = csv_get(tmp_csv, pos     );
        if(     get_slot_of_pattern(   pattern )) {
            csv_move_pattern_to_pat(   pattern );
        }
        /*}}}*/
        /* DUMP   [NOT SLOTTED PAT] {{{*/
        else {
            csv_move_pattern_to_bak(   pattern);

            patterns += pattern+" ";
        }
        /*}}}*/
    }

    t_onPatternUpdate(SYMBOL_BAK+" "+count+" <em class='cc8'>"+ ellipsis_short(patterns) +"</em>", caller);
};
/*}}}*/
/*_ t_pat_bag3_dump_bak {{{*/
let t_pat_bag3_dump_bak = function()
{
    /*{{{*/
let caller = "t_pat_bag3_dump_bak";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c "+caller, lbF+lb4);

    /*}}}*/

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_CLEAR_BAK, "want");

    let tmp_csv  =    String( bak_csv );
    let    count = csv_count( tmp_csv );
    let patterns = "";
    for(let pos = 1; pos <= count; ++pos)
    {
        /* SHOW   [    SLOTTED PAT] {{{*/
        let pattern = csv_get(tmp_csv, pos     );
        if(     get_slot_of_pattern(   pattern )) {
            csv_move_pattern_to_pat(   pattern );
        }
        /*}}}*/
        /* DUMP   [NOT SLOTTED PAT] {{{*/
        else {
            csv_move_pattern_to_bin(   pattern);
            patterns += pattern+" ";
        }
        /*}}}*/
    }

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_CLEAR_BIN, "done");

    let dumping_action
        = " DUMPING ("+count+") <em class='cc2'>"+ ellipsis_short(patterns) +"</em> TO <em class='cc0'>bin</em>";
    t_onPatternUpdate(dumping_action, caller);
};
/*}}}*/

/*_ t_pat_bag3_reselect {{{*/
let t_pat_bag3_reselect_sort_direction = 0;
let t_pat_bag3_reselect = function()
{

let caller = "t_pat_bag3_reselect";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c "+caller, lbF+lb7);

    /* clear slotted */
    let cleared_pat_csv = s_clear_slot_all();
if( log_this) log("...cleared_pat_csv=["+cleared_pat_csv+"]");

    /* sort maybe */
    if( t_pat_bag3_reselect_sort_direction )
    {
        let reverse = (t_pat_bag3_reselect_sort_direction < 0);
if( log_this) log("%c ...CALLING csv_sort(cleared_pat_csv, reverse="+reverse+"):", lbb+lbH+lf5);
        cleared_pat_csv = csv_sort(cleared_pat_csv, reverse);
if( log_this) log("...cleared_pat_csv=["+cleared_pat_csv+"]");
        t_pat_bag3_reselect_sort_direction = 0;
    }

    /* reselect slotted */
    let       count = csv_count( cleared_pat_csv );
    for(let pos=1; pos<=count; ++pos)
    {
        let pattern = csv_get(cleared_pat_csv, pos);
        t_pat_bag1_show_pattern(pattern, SYMBOL_SEL+" <em class='cc1'>"+pattern+"</em>");
    }
    t_sync_pat_sort(caller);
};
/*}}}*/

/*_ t_pat_bag4_show_off {{{*/


let t_pat_bag4_show_off = function()
{
let caller = "t_pat_bag4_show_off";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c "+caller, lbF+lb4);

    t_sel_pat_bag_all();
};
/*}}}*/
/*_ t_pat_bag5_hide_sel {{{*/
let t_pat_bag5_hide_sel = function()
{
    /*{{{*/
let caller = "t_pat_bag5_hide_sel";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c "+caller, lbF+lb5);

    /*}}}*/

    let tmp_csv  =    String( pat_csv );
    let   count  = csv_count( pat_csv );
    let patterns = "";

    for(let pos  = 1; pos <= count; ++pos)
    {
        /* HIDE   [    SLOTTED PAT] {{{*/
        let pattern   = csv_get(tmp_csv, pos);
        csv_add_off_csv(pattern);
        patterns += pattern+" ";

        /*}}}*/
    }
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, SYMBOL_HID+" x"+count+" <em class='cc8'>"+ ellipsis_short(patterns) +"</em>");

    let cleared_pat_csv = s_clear_slot_all();
if( log_this) log("...cleared_pat_csv=["+cleared_pat_csv+"]");
    /* .. clear_slot
     * .. t_clear_slot_sync
     * .. t_onPatternUpdate
     */

};
/*}}}*/
/*_ t_pat_bag6_standby {{{*/
let t_pat_bag6_standby = function()
{
    t_standby_bag_id( pat_bag.id );
};
/*}}}*/
/*_ t_pat_bag7_standby_open {{{*/
let t_pat_bag7_standby_open = function()
{
/*
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, "Setting STANDBY OPENED");
*/
    t_pat_bag_open("t_pat_bag7_standby_open", "Standby OPEN");
};
/*}}}*/
/*_ t_pat_bag8_standby_done {{{*/
let t_pat_bag8_standby_done = function()
{
/*
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, "Setting STANDBY EMPTY");
*/
    t_pat_bag_close("t_pat_bag8_standby_done", "Standby DONE");
};
/*}}}*/
/*_ t_pat_bag9_grab_item {{{*/

let pat_bag_wide_onGrab;

let off_bag_rect;

let bak_bag_rect;

let mov_pat_span;

let t_pat_bag9_grab_item = function(parent_div)
{
    /*{{{*/
    let caller = "t_pat_bag9_grab_item("+get_n_lbl(parent_div)+")";
let log_this   = (LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE);
if( log_this) t_log_event_status(caller, lf4);
    /*}}}*/
    /* [mov_div] {{{*/
    mov_div.style.display = "block";
    mov_div.style.zIndex  = onWork_EL.style.zIndex + 32;

    mov_div.innerHTML     = onWork_EL.outerHTML;
    t_pat_bag_set_moving_item_label(mov_div.innerHTML);

    /*}}}*/
    mov_pat_span = t_get_parent_with_TAG(onWork_EL, "SPAN");
    /* [mov_src] [mov_src_div] [mov_dst_div] {{{*/
    mov_src_div  = parent_div;
    mov_dst_div  = null;

/*
add_el_class(onWork_EL  , "mov_src"    );
*/
    add_el_class(mov_src_div, "mov_src_div");
    /*}}}*/

    pat_bag_wide_onGrab = has_el_class(pat_bag, "wide_bag");

    off_bag_rect = {
        top    : off_bag.offsetTop                        ,
        left   : off_bag.offsetLeft                       ,
        bottom : off_bag.offsetTop  + off_bag.offsetHeight,
        right  : off_bag.offsetLeft + off_bag.offsetWidth ,
    };

    bak_bag_rect = {
        top    : bak_bag.offsetTop                        ,
        left   : bak_bag.offsetLeft                       ,
        bottom : bak_bag.offsetTop  + bak_bag.offsetHeight,
        right  : bak_bag.offsetLeft + bak_bag.offsetWidth ,
    };

    /* DIM BG (light) {{{*/
    dimm_start_pat_bag(caller);

    /*}}}*/
    return mov_div;
};
/*}}}*/
/*_ t_pat_bag9_grab_item_is_mov_div {{{*/
let t_pat_bag9_grab_item_is_mov_div = function()
{
    return (onWork_EL == mov_div);

};
/*}}}*/
/*_ t_pat_bag9_grab_item_mov_div_is_showing {{{*/
let t_pat_bag9_grab_item_mov_div_is_showing = function()
{
    return (mov_div && (mov_div.style.display != "none"));
};
/*}}}*/
/*XXX t_pat_bag9_grab_item_mov_div_xy -OR- t_pat_bag_mov_div_get_dst_near_xy */
/*. t_pat_bag9_grab_item_mov_div_xy {{{*/
let t_pat_bag9_grab_item_mov_div_xy = function(e, x,y)
{
    /* [mov_dst_div] .. (near or hovering) {{{*/
    let caller = "t_pat_bag9_grab_item_mov_div_xy";
/*{{{
log(caller);
console.dir(     e         )
console.dir("A "+e.altKey  )
console.dir("C "+e.ctrlKey )
console.dir("S "+e.shiftKey)
}}}*/
    let bag;

    let hovering_or_nearing = e.shiftKey;

    if( hovering_or_nearing )
        bag =  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, off_bag) ? off_bag
            :  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, bak_bag) ? bak_bag
            :                                                        pat_bag
        ;
    else
        bag = t_pat_bag_mov_div_get_dst_near_xy(x, y);

    add_el_class(bag, (hovering_or_nearing ? "hovering" : "nearing"));
    /*}}}*/
    /* [mov_dst_div] .. (move to) {{{*/
    let                                                pattern = mov_div.firstChild.title;

    if     ((bag == bak_bag) && !csv_contains(bak_csv, pattern)) t_pat_bag_hover_div_accept( bak_bag     );
    else if((bag == off_bag) && !csv_contains(off_csv, pattern)) t_pat_bag_hover_div_accept( off_bag     );
    else if((bag == pat_bag) && !csv_contains(pat_csv, pattern)) t_pat_bag_hover_div_accept( pat_bag     );
    else if((bag == pat_bag) &&  csv_contains(off_csv, pattern)) t_pat_bag_hover_div_accept( pat_bag     );
    else                                                         t_pat_bag_hover_div_accept( mov_src_div );

/*{{{
    if     ((bag == bak_bag)) log(" csv_contains(bak_csv, ["+pattern+"])"+ csv_contains(bak_csv, pattern));
    else if((bag == off_bag)) log(" csv_contains(off_csv, ["+pattern+"])"+ csv_contains(off_csv, pattern));
    else if((bag == pat_bag)) log(" csv_contains(pat_csv, ["+pattern+"])"+ csv_contains(pat_csv, pattern));
}}}*/
    /*}}}*/
    /* [pat_bag off_bag bak_bag] .. (hovering nearing dimmed) {{{*/
/*
/\(add\|del\)_el_class.*\(pat\|off\|bak\)_\(bag\|div\)
*/
    /* neutralize all */
    let el;
    el = pat_bag; del_el_class(el, "hovering"); del_el_class(el, "nearing"); del_el_class(el, "dimmed");
    el = bak_bag; del_el_class(el, "hovering"); del_el_class(el, "nearing"); del_el_class(el, "dimmed");
    el = off_bag; del_el_class(el, "hovering"); del_el_class(el, "nearing"); del_el_class(el, "dimmed");

    /* highlight dst */
    del_el_class(mov_dst_div, "dimmed");
    if(mov_dst_div != mov_src_div) {
        add_el_class( mov_dst_div, (hovering_or_nearing ? "hovering" : "nearing"));
        del_el_class( mov_div, "grayed_out");
    }
    else {
        add_el_class( mov_div, "grayed_out");
    }

    /* dimm others */
/*
    if(mov_dst_div != pat_bag) add_el_class(pat_bag, "dimmed");
    if(mov_dst_div != off_bag) add_el_class(off_bag, "dimmed");
    if(mov_dst_div != bak_bag) add_el_class(bak_bag, "dimmed");
*/
    /* dimm source */
    if(mov_src_div == pat_bag) add_el_class(pat_bag, "dimmed");
    if(mov_src_div == off_bag) add_el_class(off_bag, "dimmed");
    if(mov_src_div == bak_bag) add_el_class(bak_bag, "dimmed");

/*}}}*/
    /* [mov_div] .. (drift) {{{*/
    let mov_L = mov_pat_span.lastChild.offsetLeft;
    let mov_T = mov_pat_span.lastChild.offsetTop ;

    let bag_x = (bag == pat_bag)     ? 0 : bag.offsetLeft;
    let bag_y = (bag == pat_bag)     ? 0 : bag.offsetTop ;

    let mov_x = (bag == mov_src_div) ? mov_L : bag_x + mov_L;
    let mov_y = (bag == mov_src_div) ? mov_T : bag_y + mov_T;

t_show_hov_1(mov_x, mov_y);
t_show_hov_2(mov_x, mov_y);
/*{{{
}}}*/
    let dx = x - mov_x;
    let dy = y - mov_y ;

    let left = mov_x + dx * 0.5;
    let top  = mov_y + dy * 0.5;

/*{{{
let lb4 = (bag == pat_bag) ? lbb[4]
    :     (bag == off_bag) ? lbX[8]
    :     (bag == bak_bag) ? lbX[0]
    :                        lbX[2]
;
log("%c"+bag.id+" %c XY=["+left+" "+top+"] %c OXY=["+mov_x+" "+mov_y+"] %c DXY=["+dx+" "+dy+"]", lbF+lb4, lbA, lbA, lb4);
}}}*/

    mov_div.style.left = left +"px";
    mov_div.style.top  = top +"px";

    /*}}}*/
    /* [bag] .. (drift) {{{*/
/*
    dx     = x - bag.offsetLeft   ;
    dy     = y - bag.offsetHeight ;

    let mx = -(dx * 0.1);
    let my = -(dy * 0.1);

    bag.style.marginLeft = mx +"px";
    bag.style.marginTop  = my +"px";
*/
    /*}}}*/
};
/*}}}*/
/*_ t_pat_bag9_grab_item_mov_div_drop {{{*/
let t_pat_bag9_grab_item_mov_div_drop = function()
{
    /*{{{*/
    let caller = "t_pat_bag9_grab_item_mov_div_drop";
let log_this   = (LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE);
if( log_this) t_log_event_status(caller, lf4);
    /*}}}*/
    /* DIM BG (undisplay) {{{*/
    dimm_stop(caller);

    /*}}}*/
    /* HIDE [mov_div] {{{*/
    mov_div.style.display = "none";

    mov_div.innerHTML     = "";
    t_pat_bag_set_moving_item_label(mov_div.innerHTML);

    /*}}}*/
    /* [mov_src_div] [mov_dst_div] [mov_src] {{{*/
/*
    if( has_el_class(mov_src_div, "mov_src_div"))
    {
        let                  elements        = mov_src_div.getElementsByTagName("EM");
        for(let i=0; i <     elements.length ; ++i) {
            if( has_el_class(elements[i]     , "mov_src") )
                del_el_class(elements[i]     , "mov_src");
        }

        del_el_class(mov_src_div, "mov_src_div");
    }
*/
    if( has_el_class(pat_bag     , "mov_src_div")) del_el_class(pat_bag     , "mov_src_div");
    if( has_el_class(off_bag     , "mov_src_div")) del_el_class(off_bag     , "mov_src_div");
    if( has_el_class(bak_bag     , "mov_src_div")) del_el_class(bak_bag     , "mov_src_div");

    if( has_el_class(mov_pat_span, "mov_src"    )) del_el_class(mov_pat_span, "mov_src"    );

    mov_pat_span = null;
    mov_src_div  = null;
    mov_dst_div  = null;
    /*}}}*/

    /* t_hide_hov {{{*/
    t_hide_hov();

    /*}}}*/
    /* [moving] [hovering] [dimmed] {{{*/
    del_el_class(mov_div, "moving");

    del_el_class(bak_bag, "hovering"); del_el_class(bak_bag, "dimmed"); del_el_class(bak_bag, "nearing");
    del_el_class(off_bag, "hovering"); del_el_class(off_bag, "dimmed"); del_el_class(off_bag, "nearing");
    del_el_class(pat_bag, "hovering"); del_el_class(pat_bag, "dimmed"); del_el_class(pat_bag, "nearing");

    /*}}}*/
    t_pat_bag_open_or_close(caller);
};
/*}}}*/
/*_ t_pat_bag9_move_item_to_div {{{*/
let t_pat_bag9_move_item_to_div = function(to_div)
{
/*
log("t_pat_bag9_move_item_to_div:");
log(". mov_div.firstChild.title...["+mov_div.firstChild.title+"]");
*/

    let ccX
        = (to_div == pat_bag) ? "cc1"
        : (to_div == off_bag) ? "cc5"
        : (to_div == bak_bag) ? "cc2"
        : "";

    let moving_action
        = " MOVING <em class='cc9'>"    + get_n_lbl( mov_div.firstChild ) +"</em>"
        +     " TO <em class='"+ccX+"'>"+ get_n_lbl( to_div ) +"</em>"
    ;
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, moving_action);

    let pattern = mov_div.firstChild.title;

    switch(to_div) {
        case pat_bag: t_pat_bag1_show_pattern(pattern, SYMBOL_SEL +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
        case off_bag: t_pat_bag1_hide_pattern(pattern, SYMBOL_HID +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
        case bak_bag: t_pat_bag1_back_pattern(pattern, SYMBOL_BAK +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
    }

    return moving_action;
};
/*}}}*/

/* PAT LAYOUT */
/*. t_pat_bag_set_moving_item_label {{{*/
let t_pat_bag_set_moving_item_label  = function(moving_item_label)
{
    let caller =          "t_pat_bag_set_moving_item_label("+moving_item_label+")";
if(LOG_MAP.S2_SELECT) log(caller);

    if(moving_item_label) add_el_class(pat_bag, "has_moving_child");
    else                  del_el_class(pat_bag, "has_moving_child");

    let bag_is_opened    = has_el_class(pat_bag, "open_bag");

    if( (moving_item_label && !bag_is_opened) )
        t_pat_bag_open(caller, "OPENED - MOVING ITEM "+moving_item_label);
};
/*}}}*/
/*. t_pat_bag_open {{{*/
let t_pat_bag_open  = function(_caller, msg="Pattern bag opened")
{
    /* LOG {{{*/
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("t_pat_bag_open %c .. CALLED BY "+ _caller+" %c .. msg=["+msg+"]", lb0, lbF);
if(msg) if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, msg);
    /*}}}*/
    /* OPEN {{{*/

    if(!has_el_class(pat_bag, "open_bag"))
    {
        if(transcript_events)
            t_log_transcript_event_bot("<span style='color:red;'>"+SYMBOL_BLACK_CIRCLE+"</span>"
                +                      " <span>open_bag</span>"
                +                      " <em>"+msg+"</em>"
            );

        add_el_class(pat_bag, "open_bag");

        t_sync_pat_off_bak_innerHTML();
        t_cache_refresh(msg);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_pat_bag_close {{{*/
/*{{{*/
let T_PAT_BAG_CLOSE_DELAY            = 1000;
let T_PAT_BAG_CLOSE_RESCHEDULE_DELAY = 1000;
let t_pat_bag_close_timer;
let t_pat_bag_close_msg;
/*}}}*/
let t_pat_bag_close = function(_caller, msg="PATTERN BAG CLOSED")
{
    /* LOG {{{*/
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("t_pat_bag_close_handler %c .. CALLED BY "+ _caller+" %c .. msg=["+msg+"]", lb0, lbF);
if(msg) if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, msg);

    /*}}}*/
    /* DELAYED CLOSE {{{*/
    t_pat_bag_close_msg = msg;
    if(t_pat_bag_close_timer) clearTimeout( t_pat_bag_close_timer  );
    t_pat_bag_close_timer     = setTimeout( t_pat_bag_close_handler, T_PAT_BAG_CLOSE_DELAY);
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag_close_handler {{{*/
let t_pat_bag_close_handler = function()
{
    t_pat_bag_close_timer = null;

    if( has_el_class(pat_bag, "open_bag"))
    {
        let close_canceled = onWork_MOVE_CHILD;

        if(transcript_events)
        {
            let s_style = close_canceled ? "color:yellow" : "color:green";
            let t_style = close_canceled ? "color:yellow" : "text-decoration:line-through";
            let t_text  = close_canceled ? "kept open while moving child" : t_pat_bag_close_msg;
            t_log_transcript_event_bot( "<span style='"+ s_style +";'>"+SYMBOL_BLACK_CIRCLE+"</span>"
                +                      " <span style='"+ t_style +";'>open_bag</span>"
                +                      " <em>"+          t_text  +"</em>"
            );
        }

        /* close postponed */
        if(close_canceled) {
            t_pat_bag_close_timer = setTimeout(t_pat_bag_close_handler, T_PAT_BAG_CLOSE_RESCHEDULE_DELAY);
        }
        else {
            del_el_class(pat_bag, "open_bag");

            t_sync_pat_off_bak_innerHTML();
            t_cache_refresh("t_pat_bag_close_handler");
        }
    }
};
/*}}}*/
/*_ t_pat_bag_mov_div_is_xy_hovering_bag {{{*/
let t_pat_bag_mov_div_is_xy_hovering_bag = function(x,y,hov_div)
{
    /* RECT: moving object rectangle */
    let mov_div_rect = {
        top    : y                                        ,
        left   : x                                        ,
        bottom : y                  + mov_div.offsetHeight,
        right  : x                  + mov_div.offsetWidth ,
    };

    /* RECT: container accepting moving object */
    /*.................(container)................(contained)......*/
    let hov_div_top  = (hov_div == pat_bag) ? 0 : hov_div.offsetTop ;
    let hov_div_left = (hov_div == pat_bag) ? 0 : hov_div.offsetLeft;

    let hov_div_rect = {
        top    : hov_div_top                              ,
        left   : hov_div_left                             ,
        bottom : hov_div_top        + hov_div.offsetHeight,
        right  : hov_div_left       + hov_div.offsetWidth ,
    };

    let overlapping
        = !(   (mov_div_rect.right  < hov_div_rect.left  )
            || (mov_div_rect.left   > hov_div_rect.right )
            || (mov_div_rect.bottom < hov_div_rect.top   )
            || (mov_div_rect.top    > hov_div_rect.bottom)
        );

    if(overlapping || (hov_div == pat_bag))
        t_hov_rect(mov_div_rect, hov_div_rect);
/*
*/

    return overlapping;
};
/*}}}*/
/*XXX t_pat_bag_mov_div_get_dst_near_xy */
/*_ t_pat_bag_mov_div_get_dst_near_xy {{{*/
let t_pat_bag_mov_div_get_dst_near_xy = function(x,y)
{
    if(pat_bag_wide_onGrab)
    {
        let w_2 = pat_bag.offsetWidth  / 2;
        let h_2 = pat_bag.offsetHeight / 2;

        if     (x > w_2   ) return bak_bag; /* Right */
        else if(y > h_2   ) return off_bag; /* L_bot */
        else                return pat_bag; /* L_top */
    }
    else {
        let h_3 = pat_bag.offsetHeight / 3;

        if     (y <  h_3  ) return pat_bag; /* Top */
        else if(y <  h_3*2) return off_bag; /* Mid */
        else                return bak_bag; /* Bot */
    }

};
/*}}}*/
/*_ t_pat_bag_hover_div_accept {{{*/
let t_pat_bag_hover_div_accept = function(div)
{
/*
log("t_pat_bag_hover_div_accept("+get_n_lbl(div)+")");
*/
    mov_dst_div = div;

/*
log("t_pat_bag_hover_div_accept("+get_n_lbl(div)+"): ...mov_pat_span=["+get_n_lbl(mov_pat_span)+"]");
*/
    if(mov_pat_span.parentNode != mov_dst_div)
    {
        if     (off_bag        == mov_dst_div) off_bag.appendChild ( mov_pat_span                    );
        else if(bak_bag        == mov_dst_div) bak_bag.insertBefore( mov_pat_span, bak_bag.firstChild);
        else if(pat_bag        == mov_dst_div) pat_bag.insertBefore( mov_pat_span, off_bag           );
    }
/*
*/
/*{{{
    switch(div) {
        case bak_bag: {
            bak_bag_place_holder.style.display =  "none";
            off_bag_place_holder.style.display = "block";
            pat_bag_place_holder.style.display = "block";
        }
        break;
        case off_bag: {
            bak_bag_place_holder.style.display = "block";
            off_bag_place_holder.style.display =  "none";
            pat_bag_place_holder.style.display = "block";
        }
        break;
        case pat_bag: {
            bak_bag_place_holder.style.display = "block";
            off_bag_place_holder.style.display = "block";
            pat_bag_place_holder.style.display =  "none";
        }
        break;
    }
}}}*/
/*{{{
    switch(div) {
        case bak_bag:
        if(  bak_bag_place_holder.parentNode) bak_bag.removeChild ( bak_bag_place_holder, bak_bag.firstChild );
        if( !off_bag_place_holder.parentNode) off_bag.insertBefore( off_bag_place_holder, off_bag.firstChild );
        if( !pat_bag_place_holder.parentNode) pat_bag.insertBefore( pat_bag_place_holder, off_bag.nextSibling);
        break;
        case off_bag:
        if( !bak_bag_place_holder.parentNode) bak_bag.insertBefore( bak_bag_place_holder, bak_bag.firstChild );
        if(  off_bag_place_holder.parentNode) off_bag.removeChild ( off_bag_place_holder                     );
        if( !pat_bag_place_holder.parentNode) pat_bag.insertBefore( pat_bag_place_holder, off_bag.nextSibling);
        break;
        case pat_bag:
        if( !bak_bag_place_holder.parentNode) bak_bag.insertBefore( bak_bag_place_holder, bak_bag.firstChild );
        if( !off_bag_place_holder.parentNode) off_bag.insertBefore( off_bag_place_holder, off_bag.firstChild );
        if(  pat_bag_place_holder.parentNode) pat_bag.removeChild ( pat_bag_place_holder                     );
        break;
    }
}}}*/
/*{{{
    if(mov_dst.parentNode) mov_dst.parentNode.removeChild( mov_dst );
    if     (div == pat_bag) div.insertBefore(mov_dst, off_bag.nextSibling);
    else                    div.insertBefore(mov_dst,     div.firstChild );
}}}*/
/*{{{
    switch(div) {
        case bak_bag:
        if( !bak_bag_place_holder.parentNode) bak_bag.insertBefore( bak_bag_place_holder, bak_bag.firstChild );
        break;

        case off_bag:
        if( !off_bag_place_holder.parentNode) off_bag.insertBefore( off_bag_place_holder, off_bag.firstChild );
        break;

        case pat_bag:
        if( !pat_bag_place_holder.parentNode) pat_bag.insertBefore( pat_bag_place_holder, off_bag.nextSibling);
        break;

    }
}}}*/
/*{{{
    let place_holder_line
        = "<span class='pat_span place_holder'><em class='num_em'>"+SYMBOL_CHECK_MARK+"</em>&nbsp;"
        + "<em class='cc1'>&nbsp;</em>"
        + "</span>"
    ;
    switch(div) {
        case bak_bag:
        bak_bag_place_holder.innerHTML = mov_dst.innerHTML;
        off_bag_place_holder.innerHTML = place_holder_line;
        pat_bag_place_holder.innerHTML = place_holder_line;
        break;

        case off_bag:
        bak_bag_place_holder.innerHTML = place_holder_line;
        off_bag_place_holder.innerHTML = mov_dst.innerHTML;
        pat_bag_place_holder.innerHTML = place_holder_line;
        break;

        case pat_bag:
        bak_bag_place_holder.innerHTML = place_holder_line;
        off_bag_place_holder.innerHTML = place_holder_line;
        pat_bag_place_holder.innerHTML = mov_dst.innerHTML;
        break;
    }
}}}*/
/* accepting place_holder opacity {{{*/
/*
    switch(div) {
        case bak_bag: {
            bak_bag_place_holder.style.opacity = (div == mov_src_div) ? 0 : 1.0;
            off_bag_place_holder.style.opacity = 0.2;
            pat_bag_place_holder.style.opacity = 0.2;
        }
        break;
        case off_bag: {
            bak_bag_place_holder.style.opacity = 0.2;
            off_bag_place_holder.style.opacity = (div == mov_src_div) ? 0 : 1.0;
            pat_bag_place_holder.style.opacity = 0.2;
        }
        break;
        case pat_bag: {
            bak_bag_place_holder.style.opacity = 0.2;
            off_bag_place_holder.style.opacity = 0.2;
            pat_bag_place_holder.style.opacity = (div == mov_src_div) ? 0 : 1.0;
        }
        break;
    }
*/
/*}}}*/
};
/*}}}*/
/*_ t_sel_pat_bag_all {{{*/
let t_sel_pat_bag_all = function()
{
    /*{{{*/
    let caller = "t_sel_pat_bag_all";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log(caller);

    /*}}}*/

    let tmp_csv  =    String( pat_csv );
    let    count = csv_count( pat_csv );

    let slotted_csv = "";
    let missing_csv = "";

    for(let pos=1; pos<=count; ++pos)
    {
        /* SEARCH DOCUMENT FOR NOT ALREADY SLOTTED PAT {{{*/
        let pattern = csv_get(tmp_csv, pos);
if(log_this) log("...pattern["+pos+"]=["+pattern+"]");

        if( !get_slot_of_pattern(pattern) )
        {
            set_tools_filter( pattern );
            let tools_filter = t_get_tool_id_value("tools_filter");
            call_check_TreeWalker("body", tools_filter);
        }
        /* SHOW   [    SLOTTED PAT] {{{*/
        if(     set_slot_of_pattern(pos, pattern))
        {
            csv_move_pattern_to_pat( pattern );

            slotted_csv = csv_add(slotted_csv, pattern);
        }
        /*}}}*/
        /* BACK   [NOT   FOUND PAT] {{{*/
        else {
            csv_move_pattern_to_bak( pattern );

            missing_csv = csv_add(missing_csv, pattern);
        }
        /*}}}*/
        /*}}}*/
    }

    let msg = "";

    let s_count = csv_count( slotted_csv );
    let b_count = csv_count( bak_csv );

    if(slotted_csv)
        msg
        =  " <em class='done cc9'>FOUND "+  s_count                       +"</em>"
        +  " <em class='have cc1'>"+        ellipsis_short( slotted_csv ) +"</em>"
    ;
    else
        msg
        =  " <em class='done cc9'>NO SELECTION</em>"
    ;

    if(missing_csv)
        msg
        += " .."
        +  " <em class='done cc8'>MISSED "+ b_count                       +"</em>"
        +  " <em class='have cc8'>"+        ellipsis_short( missing_csv ) +"</em>"
    ;


    /* OPEN BAGS WHEN NOT ALL SELECTED */
    if(csv_count( off_csv ) || csv_count( bak_csv ))
        t_pat_bag_open(caller, "OPEN BAGS WHEN NOT ALL SELECTED");

    t_onPatternUpdate(msg, caller);
};
/*}}}*/
/*_ t_sync_pat_off_bak_innerHTML {{{*/
/*{{{*/
const SYNC_PAT_OFF_BAK_INNERHTML_DELAY = 250;
let   sync_pat_off_bak_innerHTML_timer = null;
/*}}}*/
let t_sync_pat_off_bak_innerHTML = function()
{
/*
log("===t_sync_pat_off_bak_innerHTML_handler");
*/
    if(sync_pat_off_bak_innerHTML_timer) clearTimeout( sync_pat_off_bak_innerHTML_timer  );
    sync_pat_off_bak_innerHTML_timer     = setTimeout( t_sync_pat_off_bak_innerHTML_handler, SYNC_PAT_OFF_BAK_INNERHTML_DELAY);
};
/*}}}*/
/*_ t_sync_pat_off_bak_innerHTML_handler {{{*/
let t_sync_pat_off_bak_innerHTML_handler = function()
{
/*
log("___sync_pat_off_bak_innerHTML_handler");
*/
    sync_pat_off_bak_innerHTML_timer     = null;

    t_set_4_pat_off_bak_innerHTML("sync_pat_off_bak_innerHTML_timer");
};
/*}}}*/

/* PAT FOOTER */
/*_ t_pat_bag_status {{{*/
/*{{{*/
let T_PAT_BAG_STATUS_DELAY = 1000;
let t_pat_bag_status_timer;
/*}}}*/
let t_pat_bag_status = function(delay=T_PAT_BAG_STATUS_DELAY)
{
    if(       t_pat_bag_status_timer) clearTimeout( t_pat_bag_status_timer);
    if(delay) t_pat_bag_status_timer  = setTimeout( t_pat_bag_status_handler, T_PAT_BAG_STATUS_DELAY);
    else                                            t_pat_bag_status_handler();
};
/*}}}*/
/*_ t_pat_bag_status_handler {{{*/
let t_pat_bag_status_handler = function()
{
    t_pat_bag_status_timer = null;

    t_pat_bag_status_set_innerText( t_pat_bag_status_get_status_line() );
};
/*}}}*/
/*_ t_pat_bag_status_get_status_line {{{*/
let t_pat_bag_status_get_status_line = function()
{
    let empty = !s_get_slotted_pattern_count();

    let b = csv_count(bak_csv);
    let o = csv_count(off_csv);
    let p = csv_count(pat_csv);
    let s = csv_count(sel_csv);

    let more
        =     s ? (" more")
        :         (""     )
    ;

    let selected
        = empty ? (    "None selected")
        :         (s+"/"+p+" selected");

    let can_do
        =  (o+b)? ((o+b) +" "+more+" to choose from")
        :         ("nothing "+more+" to choose from")
      /*:         ("nothing "+more+""+LF+" to "+LF+" choose "+LF+" from") .. checking txt_log layout */
    ;

    let pat_bag_status
        = selected + LF +SYMBOL_RIGHT_ARROW+ can_do
/*      = selected      +SYMBOL_RIGHT_ARROW+ can_do ... NO! THIS WRAPS AT RANDOM */
    ;

    return pat_bag_status;
};
/*}}}*/
/*. t_pat_bag_status_set_innerText {{{*/
/*{{{*/
let em_pixels;

/*}}}*/
let t_pat_bag_status_set_innerText = function(innerText)
{
let log_this = LOG_MAP.S2_SELECT;

    if(!em_pixels) {
        let    cs = window.getComputedStyle(fly_log);
        em_pixels = parseInt(cs.width) / 1.4;
    }

    let  len = parseInt(bot_div.clientWidth / em_pixels);
    let    l = innerText.indexOf(LF);
    let head = (l > 0) ? innerText.substring(0,l+1) : ""       ; /* LF included .. (  only with  a head-line) */
    let tail = (l > 0) ? innerText.substring(  l+1) : innerText; /* second line .. (or all with no head-line) */

    bot_div.title     = innerText;
    txt_log.innerText = head + ellipsis(tail, len);

if(log_this) log("t_pat_bag_status_set_innerText: %c "+len+" %c "+ strip_CR_LF(txt_log.innerText) +" ", lbF+lb4, lb8);
};
/*}}}*/

/* PAT STORE */
/*_ t_onPatternUpdate_done {{{*/
let t_onPatternUpdate_done = function()
{
let caller   = "t_onPatternUpdate_done";
let log_this = LOG_MAP.S2_SELECT;
if( log_this ) log(caller);

    t_store_node_filter_patterns_csv();

    t_pat_bag_open_or_close(caller);

    t_pat_bag_status();

    t_sync_seeker     ( caller );
    t_sync_doc_LOG_MAP( caller );
    t_cache_init_by   ( caller );

    t_sync_pat_sort(caller);
};
/*}}}*/
/*_ t_store_node_filter_patterns_csv {{{*/
/*{{{*/
let STORE_PATTERNS_CSV_DELAY = 2000;
let store_patterns_timer;
/*}}}*/
/*_ t_store_node_filter_patterns_csv {{{*/
let t_store_node_filter_patterns_csv = function()
{
    if(store_patterns_timer) clearTimeout( store_patterns_timer);
    store_patterns_timer   =   setTimeout( store_patterns_handler, STORE_PATTERNS_CSV_DELAY);
};
/*}}}*/
/*_ store_patterns_handler {{{*/
let store_patterns_handler = function()
{
let   caller = "store_patterns_handler";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c"+caller, lbF+lb7);
    store_patterns_timer = null;

    /* SAVING PAGE PATTERNS {{{*/
    if(pat_csv || bak_csv)
    {
        store_key_value("sel_csv", sel_csv);
        store_key_value("pat_csv", pat_csv);
        store_key_value("off_csv", off_csv);
        store_key_value("bak_csv", bak_csv);
    }
    /*}}}*/
    /* NO PATTERNS LEFT .. REMOVING PAGE LOCAL STORAGE {{{*/
    else {
        localStorage_remove_all_page_items();
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/

/*}}}*/

/* LAYOUT */
/*{{{*/

/* SPREAD */
/*_ t_tool_spread_xy {{{*/
let t_tool_spread_xy = function(_caller, x, y)
{
/*
log("t_tool_spread_xy .. CALLED BY "+ _caller);
*/
    /* [!hotspot] {{{*/
let log_this = LOG_MAP.T2_SPREAD;
if( log_this) t_log_event_status("%c t_tool_spread_xy("+x+" "+y+") .. CALLED BY "+ _caller, lf2);

    if(!hotspot) return;

    /*}}}*/
    /* [x_sign y_sign] {{{*/
    let x_sign = (x < pivotXY.x) ? 1 : -1;
    let y_sign = (y < pivotXY.y) ? 1 : -1;
    if( t_hotspot_in_gutter(x,y) ) { x_sign *= -1; y_sign *= -1; }

    x += x_sign * h_W / 2;
    y += y_sign * h_H / 2;

    /*}}}*/
    /* [onWork_PANEL_num dx dy] {{{*/
    if(!tools_map.size) t_tools_TOC("t_tool_spread_xy");
if(!pivot_PANEL) pivot_PANEL = onWork_PANEL;

    let xy_ratio = t_spread_ratio_from_xy_to_pivot_PANEL(x, y);

    /*}}}*/
    /* SPREAD TOOLS AWAY FROM HOTSPOT {{{*/
    let xy = { x:x , y:y };

    for(let i=1; i < deployable_tools.length; ++i)
    {
        /* PINNED */
        let panel = deployable_tools[i];
        if(!panel) continue; /* i.e. fly_div may not be there yet ... TODO */
        if( panel.classList.contains("pinned")) continue;

        /* SELECTED */
        let map = tools_map.get(panel);
        if(!map.selected) continue;

        let w = map.w;
        let h = map.h;

        let dx = xy_ratio.x * w;
        let dy = xy_ratio.y * h;

/*
if(panel == pat_bag) log("t_tool_spread_xy: pat_bag map.h=["+map.h+"] .. offsetHeight=["+panel.offsetHeight+"]")
*/
        xy = t_tool_spread_panel_xy(panel, xy.x, xy.y, dx, dy, x_sign, y_sign);
    }
    /*}}}*/

};
/*}}}*/
/*_ t_spread_ratio_from_xy_to_pivot_PANEL {{{*/
let spread_ratio = { x:0 , y:0 };
let t_spread_ratio_from_xy_to_pivot_PANEL = function(x, y)
{
    let caller = "t_spread_ratio_from_xy_to_pivot_PANEL";
    /* unchanged {{{*/
    if(!has_moved && spread_ratio.x) {
/*
log("%c "+caller+": !has_moved .. returning spread_ratio", lbF+lb6);
*/
        return spread_ratio;
    }
/*
log("%c "+caller+": !(!has_moved && spread_ratio.x)", lbF+lb6);
*/
    /*}}}*/
    /* selected tools collated spread area {{{*/
    let onWork_PANEL_num   = 0;
    let map_selected_count = 0;

    let dx_max = 0;
    let dy_max = 0;

    if(!tools_map.size) t_tools_TOC(caller);

    for(let i=1; i<deployable_tools.length; ++i)
    {
        /* PINNED */
        let panel = deployable_tools[i];
        if(!panel) continue; /* i.e. fly_div .. TODO */
        if( panel.classList.contains("pinned")) continue;

        /* SELECTED */
        let   map = tools_map.get(panel);
        if(!map.selected) continue;

        map_selected_count += 1;

        let w = map.w;
        let h = map.h;

        if(!onWork_PANEL_num) {
            dx_max += w;
            dy_max += h;
        }

        if(panel == pivot_PANEL) {
            onWork_PANEL_num = i;
        }
    }
    /*}}}*/
    /* update spread ratio {{{*/
/*
log("..map_selected_count=["+map_selected_count+"]");
log("..dx_max dy_max=["+dx_max+" "+dy_max+"]");
*/
    if(map_selected_count > 0)
    {
        let x_ratio = Math.abs(pivotXY.x - x) / dx_max;
        let y_ratio = Math.abs(pivotXY.y - y) / dy_max;

        x_ratio     = Math.min(x_ratio , 1);
        y_ratio     = Math.min(y_ratio , 1);
        x_ratio     = Math.max(x_ratio , 0);
        y_ratio     = Math.max(y_ratio , 0);

        spread_ratio.x = x_ratio;
        spread_ratio.y = y_ratio;

        if(!t_update_localStorage_is_pending()) t_update_store3_site_layout(caller);
    }
    /*}}}*/
/*
console.clear(); log(); log(caller+": ...spread_ratio=["+(0.01 * parseInt(100 * spread_ratio.x))+" "+(0.01 * parseInt(100 * spread_ratio.y))+"]");
*/
    return spread_ratio;
};
/*}}}*/
/*_ t_tool_spread_panel_xy {{{*/
let t_tool_spread_panel_xy = function(panel, x, y, dx, dy, x_sign, y_sign)
{
    let caller= "t_tool_spread_panel_xy";
let log_this = LOG_MAP.T2_SPREAD;
    /* panel spread location {{{*/
    let map = tools_map.get(panel);

    map.x = x;
    map.y = y;

    /*}}}*/
    /* CAP PIVOT POINT {{{*/
    let    w  = map.w;
    let    h  = map.h;
    if(panel == pivot_PANEL) {
        if((spread_ratio.x == 1) || (spread_ratio.y == 1)) {
            let cap_x = (spread_ratio.x == 1) ? (x + x_sign * w) : pivotXY.x;
            let cap_y = (spread_ratio.y == 1) ? (y + y_sign * h) : pivotXY.y;
            t_set_pivotXY(cap_x, cap_y);
        }
/*
*/
    }
    /*}}}*/
    /* return next panel offset .. f(selected) {{{*/
    if( map.selected )
    {
        x += x_sign * Math.min(w, Math.abs(dx));
        y += y_sign * Math.min(h, Math.abs(dy));
    }
    return { x:x , y:y };
    /*}}}*/
};
/*}}}*/

/* MOVE */
/*_ t_tool_set_top_xy {{{*/
/*{{{*/
const BOX_MARGIN = 24;
let HOTSPOT_C_OX = -50;
let topTool = { x:0, y:0 };
/*}}}*/
let t_tool_set_top_xy = function(_caller, x, y, p)
{
    /* {{{*/
/*
log("t_tool_set_top_xy("+x+" , "+y+") .. CALLED BY "+ _caller);
*/
let log_this = LOG_MAP.T2_SPREAD;
if( log_this) t_log_event_status("t_tool_set_top_xy("+x+" "+y+ ((p) ? (" p=["+p+"]") : "") +"):"+LF +".. CALLED BY "+ _caller, lf2);

    if(!hotspot) return;
    /*}}}*/
    /* TOOLS ON GRID {{{*/
    if( call_t_grid_IS_ON_GRID("t_tool_set_top_xy") )
    {
if(log_this) log("t_tool_set_top_xy: IS ON GRID");

        return;
    }
    /*}}}*/
    /* TOOLS [css-position] {{{*/
    if(p) {
        hotspot              .style.position = p;
        pat_bag              .style.position = p;
        sel_bag              .style.position = p;
        headsup              .style.position = p;
        headsup_w            .style.position = p;
        headsup_ds           .style.position = p;
        headsup_bw           .style.position = p;
        headsup_bz           .style.position = p;
        dom_traversal        .style.position = p;
        dev_log_map          .style.position = p;
        dev_log_calls        .style.position = p;
        dom_load_tags        .style.position = p;

        /* TRANSCRIPTS POSITION .. (when not pinned) */
        if(!transcript1.classList.contains("pinned") ) transcript1.style.position = p;
        if(!transcript2.classList.contains("pinned") ) transcript2.style.position = p;
    }
    /*}}}*/
    /* HOTSPOT .. (IN GUTTER) {{{*/
    if((x != h_x) || (y != h_y))
    {
        t_tool_set_hotspot_xy(x, y, _caller);

    }
    let hiding_tools
        =  t_hotspot_in_gutter(x,y)
        || has_el_class(hotspot, "ondown_in_gutter")
    ;
    /*}}}*/
    /* SPREAD GROUPED TOOLS {{{*/
    if( !hiding_tools ) {
        t_tool_spread_xy("t_tool_set_top_xy", x, y);

    }
    /*}}}*/
    /* LAYOUT GROUPED TOOLS {{{*/

    let x_sign = (x < pivotXY.x) ? 1 : -1;
    let y_sign = (y < pivotXY.y) ? 1 : -1;
    if( t_hotspot_in_gutter(x,y) ) { x_sign *= -1; y_sign *= -1; }

    if(!tools_map.size) t_tools_TOC("t_tool_set_top_xy");

    for(let i=1; i < deployable_tools.length; ++i)
    {
        let panel = deployable_tools[i];
        if(!panel) continue; /* i.e. fly_div may not be there yet ... TODO */
        if( panel.classList.contains("pinned") ) continue;

        /* hide deployed tools */
        if(hiding_tools) {
            add_el_class(panel, "hidden");
            panel.style.left  = h_x+"px";
            panel.style.top   = h_y+"px";
        }
        /* unhide and layout deployed tools */
        else {

            let map;
            if(map = tools_map.get(panel))
            {
                if(map.selected) del_el_class(panel, "hidden");
                else             add_el_class(panel, "hidden");

                if(p) map.p = p;

                if(map.selected)
                {
                    let w = map.w;
                    let h = map.h;

                    t_tool_set_panel_xy_wh(panel, map.x, map.y, w, h, x_sign, y_sign);
                }
            }
        }
    }
    /*}}}*/
    /* pause or resume animation {{{*/
    set_el_class_on_off(hotspot, "freezed", hiding_tools);
/*
    let el;
    if(hiding_tools) {
        hotring.style.animationPlayState = "paused";
    }
    else {
        hotring.style.animationPlayState = "running";
    }
*/
    /*}}}*/
    /* [tools_drag] {{{*/
    t_dragged_dir_show(hiding_tools);

    /*}}}*/
};
/*}}}*/
/*_ t_tool_set_hotspot_xy {{{*/
/*{{{*/
let h_x;
let h_y;

/*}}}*/
let t_tool_set_hotspot_xy = function(x,y,_caller)
{
    /* CONFINE TO VIEWPORT */
    let margin = hotring.clientWidth / 2;
    if(x  < (        margin)) x =        margin;
    if(x  > (w_W - 2*margin)) x = w_W - 2*margin;
    if(y  < (        margin)) y =        margin;
    if(y  > (w_H - 1*margin)) y = w_H - 1*margin;

    h_x = x; hotspot.style.left = h_x +"px";
    h_y = y; hotspot.style.top  = h_y +"px";

    let has_changed = false;
    if(topTool.x != h_x) { topTool.x = h_x; has_changed = true; }
    if(topTool.y != h_y) { topTool.y = h_y; has_changed = true; }
    if(has_changed) {
        if(    !t_hotspot_in_gutter(h_x, h_y)
            && !has_el_class(hotspot, "ondown_in_gutter")
          )
            if(!t_update_localStorage_is_pending()) t_update_store3_site_layout("t_tool_set_hotspot_xy");
    }

if(LOG_MAP.T2_SPREAD) {
    if(has_changed)
        log("t_tool_set_hotspot_xy("+x+" "+y+") .. CALLED BY "+ _caller+":"+LF
           +"...topTool FROM XY=["+ topTool.x  +" "+ topTool.y +"]"+LF
           +".............TO XY=["+       h_x  +" "+       h_y +"]");
    else
        log( "t_tool_set_hotspot_xy("+x+" "+y+") .. CALLED BY "+ _caller+": UNCHANGED");
}

};
/*}}}*/
/*_ t_tool_set_panel_xy {{{*/
let t_tool_set_panel_xy = function(panel, x, y)
{
    t_tool_set_panel_xy_wh(panel, x, y, panel.offsetWidth, panel.offsetHeight);
};
/*}}}*/
/*_ t_tool_set_panel_xy_wh {{{*/
/*{{{*/
const TOOL_ROTATION_STEP        = 10;

/*}}}*/
let t_tool_set_panel_xy_wh = function(panel, x, y, w, h, x_sign=1, y_sign=1)
{
    /* [top_left] or [bottom_right] .. f(x_sign, y_sign) {{{*/
let log_this = LOG_MAP.T2_SPREAD;
    let caller = "t_tool_set_panel_xy_wh("+get_n_lbl(panel)+", xy=["+x+" , "+y+"], w=["+w+" "+h+"])";

    if(x_sign < 0) x -= w;
    if(y_sign < 0) y -= h;
/*
if(log_this) log(caller+": ...from=["+panel.style.top+" "+panel.style.left+"]");
if(log_this) log(caller+": .....to=["+panel.style.top+" "+panel.style.left+"]");
*/
    panel.style.left      = x+"px"  ;
    panel.style.top       = y+"px"  ;

    if(panel != hotspot) {
        let t_x = (x_sign > 0) ? 0 : 100;
        let t_y = (y_sign > 0) ? 0 : 100;
        panel.style.transformOrigin = t_x+"% "+t_y+"% 0";
    }

    /*}}}*/
    /* rotation .. f(this_el_rank) {{{*/
    let touched_idx  = spreaded_tools.indexOf( onWork_PANEL );
    let this_el_idx  = spreaded_tools.indexOf( panel        );
    let this_el_rank = this_el_idx - touched_idx;

/*
    let     rotation = parseInt(this_el_rank * TOOL_ROTATION_STEP);
    panel.style.transform = "rotate("+ rotation +"deg)";
*/

if(log_this) log(caller+": ...this_el_rank=["+this_el_rank+"] / "+spreaded_tools.length+" onWork_PANEL=["+ get_n_lbl(onWork_PANEL) +"]");
    /*}}}*/
};
/*}}}*/

/* STATE */
/*_ are_p1_p2_in_same_quadrant_and_p2_in_corner {{{*/
let are_p1_p2_in_same_quadrant_and_p2_in_corner = function(p1, p2)
{
let log_this = LOG_MAP.T2_SPREAD;
    /* center {{{*/
    let c_x = w_W / 2;
    let c_y = w_H / 2;
if(log_this) {
    log("____________________");
    log("..............p1 ["+ p1.x +" , "+ p1.y +"]");
    log("..............p2 ["+ p2.x +" , "+ p2.y +"]");
    log("..........center ["+  c_x +" , "+  c_y +"]");
}
    /*}}}*/
    /* not same_quadrant {{{*/
    let same_quadrant
        =  ((p1.x >= c_x) && (p2.x >= c_x) || (p1.x <  c_x) && (p2.x <  c_x))
        && ((p1.y >= c_y) && (p2.y >= c_y) || (p1.y <  c_y) && (p2.y <  c_y))
    ;

if(log_this) log("...same_quadrant=["+ same_quadrant +"]");
    if(!same_quadrant) return false;
    /*}}}*/
    /* not p2_in_corner {{{*/
    let p2_in_corner
        =  Math.abs(p2.x - c_x) >= Math.abs(p1.x - c_x)
        && Math.abs(p2.y - c_y) >= Math.abs(p1.y - c_y)
    ;

if(log_this) log("...p2_in_corner=["+ p2_in_corner +"]");
    if(!same_quadrant) return false;
    /*}}}*/
    return true;
};
/*}}}*/
/*_ is_pannel_in_hotspot_quadrant {{{*/
let is_pannel_in_hotspot_quadrant = function(pannel)
{
let log_this = LOG_MAP.T2_SPREAD;

    let px = pannel .offsetLeft + pannel.offsetWidth  / 2;
    let py = pannel .offsetTop  + pannel.offsetHeight / 2;
    let hx = hotspot.offsetLeft      + h_W            / 2;
    let hy = hotspot.offsetTop       + h_H            / 2;

    let same_quadrant
        =  ((px >= pivotXY.x) && (hx >= pivotXY.x) || (px <  pivotXY.x) && (hx <  pivotXY.x))
        && ((py >= pivotXY.y) && (hy >= pivotXY.y) || (py <  pivotXY.y) && (hy <  pivotXY.y))
    ;

if(log_this) {
    log("____________________");
    log("...pivotXY=["+ pivotXY.x +" , "+ pivotXY.y +"]");
    log(".....px py=["+        px +" , "+        py +"]");
    log(".....hx hy=["+        hx +" , "+        hy +"]");
    log("...same_quadrant=["+ same_quadrant         +"]");
}

    return same_quadrant;
};
/*}}}*/
/*_ get_pannel_to_hotspot_factor_xy {{{*/
/*
let get_pannel_to_hotspot_factor_xy = function(pannel)
{
let log_this = LOG_MAP.T2_SPREAD;

    let px = pannel .offsetLeft + pannel.offsetWidth  / 2 - pivotXY.x;
    let py = pannel .offsetTop  + pannel.offsetHeight / 2 - pivotXY.y;
    let hx = hotspot.offsetLeft +      h_W            / 2 - pivotXY.x;
    let hy = hotspot.offsetTop  +      h_H            / 2 - pivotXY.y;

    let fx = hx / px;
    let fy = hy / py;

if(log_this) {
    log("____________________");
    log("...pivotXY=["+ pivotXY.x +" , "+ pivotXY.y +"]");
    log(".....px py=["+ px     +" , "+           py +"]");
    log(".....hx hy=["+ hx     +" , "+           hy +"]");
    log(".....fx fy=["+ fx     +" , "+           fy +"]");
}

    return { x: fx, y: fy };
};
*/
/*}}}*/

/* CACHE */
/* {{{*/
const CACHE_EMPTY = "CACHE_EMPTY";
let w_W = 1280, w_H = 1024;
let h_W =   32, p_H = 1024;
let h_H =   32;

let t_cache_trigger = CACHE_EMPTY;
/*}}}*/
/*_ t_cache_init_by {{{*/
let t_cache_init_by = function(_caller)
{
    let log_this = LOG_MAP.EV5_CB;

    t_cache_trigger
        = (t_cache_trigger)
        ?  t_cache_trigger+" + "+_caller
        :                        _caller
    ;

if(log_this) log("%c CACHE INIT BY "+ _caller, lbF+lb7);

};
/*}}}*/
/*_ t_cache_empty {{{*/
let t_cache_empty = function(_caller)
{
    let log_this = LOG_MAP.EV5_CB;

if(log_this) log("t_cache_empty: t_cache_trigger = %c "+t_cache_trigger+" %c", lbF+lb7,lbA);

    return (t_cache_trigger == CACHE_EMPTY);
};
/*}}}*/
/*_ t_cache_changed {{{*/
let t_cache_changed = function(_caller)
{
    let log_this = LOG_MAP.EV5_CB;

if(log_this) log("t_cache_changed: %c CACHE INIT BY ["+t_cache_trigger+"] %c .. CALLED BY "+ _caller, lbF+lb7,lbA);

    return (t_cache_trigger != "");
};
/*}}}*/
/*_ t_cache_refresh .. [w_WH .. p_WH .. h_H .. tools_map.WH] {{{*/
let t_cache_refresh = function(_caller)
{
let log_this = LOG_MAP.EV5_CB;
/*
    if(!t_cache_trigger) {
if(log_this) log("%c t_cache_refresh: ** NO CHANGE SET"   +" .. CALLED BY "+ _caller, lbF+lb2);
        return;
    }
*/
if(log_this) log("%c t_cache_refresh .. CALLED BY "+ _caller,lbF+lb5);

    /* WINDOW */
    w_H = window.innerHeight;
    w_W = window.innerWidth;
    p_H = get_page_height();
if(window.scrollbars.visible) { w_W -= 17; w_H -= 17; }
if(log_this) log("...WINDOW %c "+ w_W+" x "+w_H +" %c PAGE %c "+p_H +" ", lb3,lbA, lb4);
/*
if(log_this) log("...window.scrollbars.visible=["+window.scrollbars.visible+"]");
if(log_this) log("...window:  innerWidth=["+window.innerWidth+"]  outerWidth=["+window.outerWidth+"]");
if(log_this) log("...window: innerHeight=["+window.innerHeight+"] outerHeight=["+window.outerHeight+"]");
if(log_this) console.dir(window)
*/

    h_W = hotring.offsetWidth ;
    h_H = hotring.offsetHeight;
if(log_this) log("...HOTSPOT %c "+ h_W+" x "+h_H +" ", lb7);

    /* CACHE IS UP TO DATE */
/*
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION,"<em class='cc0'>LAYOUT</em> Window <em class='cc8'>"+w_H+"x"+w_W+"</em>  Page <em class='cc8'>"+p_H+"</em>");
*/

    t_cache_refreshed_by(_caller);

    /* TOOLS */
    t_tools_save_TOOLS_GEOMETRY("t_cache_refresh .. CALLED BY "+ _caller);
};
/*}}}*/
/*_ t_cache_refreshed_by {{{*/
let t_cache_refreshed_by = function(_caller)
{
    let log_this = LOG_MAP.EV5_CB;

    t_cache_trigger = "";

if(log_this) log("%c CACHE REFRESHED BY %c "+ _caller+" ", lbF+lb7, lbA);

};
/*}}}*/

/* POSITION */
/*_ t_sync_tools_scroll {{{*/
let t_sync_tools_scroll = function()
{
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T3_GRID;

    let caller = "t_sync_tools_scroll";

    let position =  tools_scroll  ? "absolute" : "fixed";
if(log_this) log(caller+"...tools_scroll=[%c "+tools_scroll+" %c]", lb6,lbA);
if(log_this) log(caller+"...position....=[%c "+position    +" %c]", lb5,lbA);

    let position_has_changed = (hotspot.style.position != position);
    if( position_has_changed)
    {
        t_cache_init_by(caller);
        t_cache_refresh("Tools position "+tools_scroll);

        t_sync_tools_position(caller, position_has_changed);
    }
};
/*}}}*/
/*_ t_sync_tools_position {{{*/
let t_sync_tools_position = function(_caller)
{
    let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T3_GRID;
if(log_this) log("t_sync_tools_position .. CALLED BY "+ _caller);

    let position =  tools_scroll ? "absolute" : "fixed";
if(log_this) log("...FROM position=["+hotspot.style.position+"]");
if(log_this) log(".....TO position=["+              position+"]");

/*
    let      xy  = t_getPosition(hotspot, _caller);
    let x  = xy.x;
    let y  = xy.y;
*/
    let x  = topTool.x;
    let y  = topTool.y;

    if(position == "fixed") {
        x -= window.scrollX;
        y -= window.scrollY;
    }
    else {
        x += window.scrollX;
        y += window.scrollY;
    }

    t_tool_set_top_xy("t_sync_tools_position", x, y, position);
};
/*}}}*/
/*_ t_getPosition {{{*/
let t_getPosition = function(el, _caller)
{
    if(!el) return null;

    let  x = 0;
    let  y = 0;

    if( el.style.position == "fixed")
    {
        x   = el.offsetLeft;
        y   = el.offsetTop ;
    }
    else {
        while(el) {
            x  += el.offsetLeft;
            y  += el.offsetTop ;
            el  = el.offsetParent;
        }
    }
    return { x: x, y: y };
};
/*}}}*/
/*_ getComputedPosition {{{*/
/*
let getComputedPosition = function(el, _caller)
{
    let cs = window.getComputedStyle(el);
    let  x = parseInt(cs.Left);
    let  y = parseInt(cs.Top );
    return { x: x, y: y };
};
*/
/*}}}*/

/*_ log_dom_grid_js_not_loaded {{{*/
let log_dom_grid_js_not_loaded = function (_caller)
{
    log("%c *** dom_grid.js NOT LOADED *** .. CALLED BY "+ _caller, lb3)
};
/*}}}*/
/* OPTIONAL */
/*_ t_sync_tools_extras {{{*/
let t_sync_tools_extras = function(_caller)
{
let log_this = LOG_MAP.T3_GRID;

if(log_this) log("t_sync_tools_extras .. CALLED BY "+ _caller+": tools_extras=["+tools_extras+"]");

    let el;
    if( el = dom_traversal    ) set_id_class_on_off(el.id, "hidden", !tools_extras || !t_is_a_selected_panel(el));
    if( el = dev_log_map      ) set_id_class_on_off(el.id, "hidden", !tools_extras || !t_is_a_selected_panel(el));
    if( el = dev_log_calls    ) set_id_class_on_off(el.id, "hidden", !tools_extras || !t_is_a_selected_panel(el));
    if( el = dom_load_tags    ) set_id_class_on_off(el.id, "hidden", !tools_extras || !t_is_a_selected_panel(el));

};
/*}}}*/
/*_ t_sync_logging_grid {{{ */
let t_sync_logging_grid = function()
{
    if(typeof t_grid_MEASURE != "undefined")
        t_grid_MEASURE();
};
/* }}} */
/*_ t_sync_wording {{{*/
let t_sync_wording = function()
{
    let caller = "t_sync_wording: anchor_freeze=["+ anchor_freeze +"] wording=["+ wording +"]";
let log_this = LOG_MAP.EV5_CB;
if( log_this) log(caller);

    let cycle_step
        = !wording    ? "OFF"
        : (theme_dark ? "DARK" : "LIGHT")
    ;

    let anchor_freeze_by_wording_or_user = (wording || anchor_freeze);

    dom_wording_cycle(cycle_step, anchor_freeze_by_wording_or_user);
};
/*}}}*/

/* STYLE */
/*_ t_sync_styles {{{*/
let t_sync_styles = function()
{
    let el;

    /* dark {{{*/
    if(el = hotspot                ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = pat_bag                ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = sel_bag                ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = headsup                ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = headsup_w              ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = headsup_ds             ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = headsup_bw             ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = headsup_bz             ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = dom_load_tags          ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = dom_traversal          ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = transcript1            ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = transcript2            ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = fly_div                ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = tools_drag_button      ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = dev_log_map            ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = dev_log_calls          ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = seeker_CU              ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = seeker_CD              ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = seekspot_U             ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = seekspot               ) set_id_class_on_off(el.id, "dark"    , theme_dark              );
    if(el = seekspot_D             ) set_id_class_on_off(el.id, "dark"    , theme_dark              );

    /*}}}*/
    /* scrolled {{{*/
    if(el = hotspot                ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = pat_bag                ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = sel_bag                ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = headsup                ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = headsup_w              ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = headsup_ds             ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = headsup_bw             ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = headsup_bz             ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = dev_log_map            ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = dev_log_calls          ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = dom_load_tags          ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = dom_traversal          ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = tools_drag_button      ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = transcript1            ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = transcript2            ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );
    if(el = fly_div                ) set_id_class_on_off(el.id, "scrolled", tools_scroll            );

    /*}}}*/
    /* dragged {{{*/

    if(el = hotspot                ) set_id_class_on_off(el.id, "dragged" , tools_drag              );

    if(el = tools_drag_button      ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = pivspot_c              ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = hotspot_c              ) set_id_class_on_off(el.id, "dragged" , tools_drag              );

    if(el = pat_bag                ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = sel_bag                ) set_id_class_on_off(el.id, "dragged" , tools_drag              );

    if(el = headsup                ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = headsup_w              ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = headsup_ds             ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = headsup_bw             ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = headsup_bz             ) set_id_class_on_off(el.id, "dragged" , tools_drag              );

    if(el = dev_log_map            ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = dev_log_calls          ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = dom_load_tags          ) set_id_class_on_off(el.id, "dragged" , tools_drag              );
    if(el = dom_traversal          ) set_id_class_on_off(el.id, "dragged" , tools_drag              );

    /*}}}*/
    /* checked {{{*/
    if(el = words_exact_button     ) set_id_class_on_off(el.id, "checked" , (words_options == el.id));
    if(el = words_segment_button   ) set_id_class_on_off(el.id, "checked" , (words_options == el.id));
    if(el = words_head_tail_button ) set_id_class_on_off(el.id, "checked" , (words_options == el.id));
    if(el = words_opcycle_button   ) set_id_class_on_off(el.id, "checked" ,  words_opcycle          );

    /*}}}*/

    /* words_opcycle {{{*/
    if(words_opcycle_button )
    {
        if( words_opcycle) {
            words_opcycle_button.style.backgroundColor
                = (words_options == WORDS_EXACT  ) ? window.getComputedStyle( words_exact_button     ).backgroundColor
                : (words_options == WORDS_SEGMENT) ? window.getComputedStyle( words_segment_button   ).backgroundColor
                :                                    window.getComputedStyle( words_head_tail_button ).backgroundColor
            ;
        }
        else {
            words_opcycle_button.style.backgroundColor = "white";
        }
        sync_words_opcycle_button(words_options);
    }
    /*}}}*/

    /* anchor_freeze {{{*/
    let     anchor_freeze_locked   = (wording || anchor_freeze);
    if(el = anchor_freeze_button   ) { set_id_class_on_off(el.id, "checked" ,  anchor_freeze_locked ); el.innerHTML = (anchor_freeze_locked) ? SYMBOL_NO_ENTRY      : SYMBOL_SAILBOAT         ; }

    /*}}}*/
    /* overflow_visi {{{*/
    let     overflow_visi_locked   = (wording || overflow_visi);
    if(el = overflow_visi_button   )   set_id_class_on_off(el.id, "checked" ,  overflow_visi_locked );

    if(el = document.getElementsByTagName("HTML")[0]) set_el_class_on_off(el, "overflow_visi", overflow_visi_locked);
    /*}}}*/
    /* scroll_smooth {{{*/
    if(el = scroll_smooth_button   )                  set_el_class_on_off(el, "checked"       ,  scroll_smooth);
    if(el = seeker_PU              )                  set_el_class_on_off(el, "scroll_smooth" ,  scroll_smooth);
    if(el = document.getElementsByTagName("HTML")[0]) set_el_class_on_off(el, "scroll_smooth" ,  scroll_smooth);
/*
    if(el = document.getElementsByTagName("HTML")[0]) el.style.scrollBehavior = (scroll_smooth ? "smooth" : "");
*/
    /*}}}*/
    /* containers_hi {{{*/
    if(el = containers_hi_button   )   set_id_class_on_off(el.id, "checked" ,  containers_hi        );

    /*}}}*/

    if(el = tools_drag_button      )   set_id_class_on_off(el.id, "checked" ,  tools_drag           );

    if(el = tools_scroll_button    ) { set_id_class_on_off(el.id, "checked" ,  tools_scroll         ); el.innerHTML = (tools_scroll     ) ? SYMBOL_UP_DOWN_ARROW    : SYMBOL_ANCHOR           ; }
    if(el = wording_button         ) { set_id_class_on_off(el.id, "checked" ,  wording              ); el.innerHTML = (wording          ) ? SYMBOL_WORDING_IS_ON    : SYMBOL_WORDING_IS_OFF   ; }
    if(el = theme_dark_button      ) { set_id_class_on_off(el.id, "checked" ,  theme_dark           ); el.innerHTML = (theme_dark       ) ? SYMBOL_THEME_DARK_IS_ON : SYMBOL_THEME_DARK_IS_OFF; }
    if(el = tools_extras_button    ) { set_id_class_on_off(el.id, "checked" ,  tools_extras         ); el.innerHTML = (tools_extras     ) ? SYMBOL_EXPAND_IS_ON     : SYMBOL_EXPAND_IS_OFF    ; }

};
/*}}}*/

/*}}}*/
/* GRID {{{*/
/*_ call_t_grid_ON_OFF_CB javascript/dom_grid.js {{{ */
let call_t_grid_ON_OFF_CB = function(new_state="toggle")
{
    let caller = "call_t_grid_ON_OFF_CB("+new_state+")";
let log_this = LOG_MAP.EV5_CB;

    if(new_state == "toggle") new_state = !call_t_grid_IS_ON_GRID(caller);
if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb2+lbF);

    if(!new_state ) t_raise_pivot_PANEL(T_RAISE_PIVOT_PANEL_DELAY_SHORT);
    else            t_raise_other_PANEL(caller);

    if(typeof t_grid_ON_OFF_CB == "undefined") log_dom_grid_js_not_loaded(caller);
    else      t_grid_ON_OFF_CB(new_state);
};
/* }}} */
/*_ call_t_grid_IS_SIZED javascript/dom_grid.js {{{ */
let call_t_grid_IS_SIZED = function(_caller)
{
    if(typeof t_grid_IS_SIZED == "undefined") {
        return false;
    }
    else {
        return t_grid_IS_SIZED("call_t_grid_IS_SIZED .. CALLED BY "+ _caller);
    }
};
/* }}} */
/*_ call_t_grid_IS_ON_GRID javascript/dom_grid.js {{{ */
let call_t_grid_IS_ON_GRID = function(_caller)
{
    if(typeof t_grid_IS_ON_GRID == "undefined")
        return false;
    else
        return t_grid_IS_ON_GRID("call_t_grid_IS_ON_GRID .. CALLED BY "+ _caller);
};
/* }}} */

/*_ call_t_grid_add_observer {{{*/
let call_t_grid_add_observer = function()
{
    if(typeof t_grid_add_observer_callback == "undefined") {
        log_dom_grid_js_not_loaded("call_t_grid_add_observer");
        return;
    }
    else {
        t_grid_add_observer_callback( t_IS_ON_GRID_observerCB );
    }
};
/*}}}*/
/*_ t_IS_ON_GRID_observerCB {{{*/
let t_IS_ON_GRID_observerCB = function(state)
{
    let caller = "t_IS_ON_GRID_observerCB("+state+")";
let log_this = LOG_MAP.T3_GRID;
if( log_this) log(caller);

    if( state ) {
        dimm_start_grid(caller);
        t_raise_other_PANEL(caller);
    }
    else {
        dimm_stop(caller);
    }

    t_sync_transcript_events();

};
/*}}}*/
/*}}}*/
/* DIMM {{{*/
/*{{{*/
const Z_INDEX_HOTSPOT     = 32;
const Z_INDEX_PIVSPOT     = 32;
const Z_INDEX_SEEKSPOT    = 33;

const Z_INDEX_BELOW_TOOLS =  0;
const Z_INDEX_ABOVE_TOOLS = 33;

let dimm_mask       = null;
let dimm_mask_timer = null;

/*}}}*/
/*_ dimm_start {{{*/
let dimm_start_pat_bag         = function(_caller) { dimm_start(_caller, Z_INDEX_BELOW_TOOLS,      "light"); };
let dimm_start_grid            = function(_caller) { dimm_start(_caller, Z_INDEX_BELOW_TOOLS,           ""); };
let dimm_start_slot_containers = function(_caller) { dimm_start(_caller, Z_INDEX_ABOVE_TOOLS,           ""); };
let dimm_start                 = function(                      _caller, zIndex             , css_class="")
{
    /* zIndex {{{*/
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("dimm_start(zIndex=["+zIndex+"], css_class=["+css_class+"]) .. CALLED BY "+ _caller);

    if(!dimm_mask) dimm_add();

    dimm_mask.style.zIndex = zIndex;
    /*}}}*/
    /* position {{{*/
let position  = "fixed";
    if( position == "fixed") {
        dimm_mask.style.position = "fixed";
        dimm_mask.style.left     = "0";
        dimm_mask.style.right    = "0";
    }
    else {
        dimm_mask.style.position = "absolute";
        dimm_mask.style.top      = window.scrollY +"px";
    }
    /*}}}*/
    /* display {{{*/
    dimm_mask.style.width        = w_W+"px";
    dimm_mask.style.height       = w_H+"px";
    dimm_mask.style.display      =  "block";

    if(css_class)
        add_el_class(dimm_mask, css_class);
    else
        set_el_class(dimm_mask, "");

    /*}}}*/
};
/*}}}*/
/*_ dimm_stop {{{*/
let dimm_stop  = function(_caller="setTimeout")
{
    /* clearTimeout {{{*/
let log_this = LOG_MAP.T3_GRID;
if( log_this) log("dimm_stop .. CALLED BY "+ _caller);

    if(dimm_mask_timer) {
        clearTimeout( dimm_mask_timer );
        /*.........*/ dimm_mask_timer = null;
    }
    /*}}}*/
    /* undisplay {{{*/
    if( dimm_mask) {
        dimm_mask.style.display = "none";
        dimm_mask.innerHTML     = "";
    }
    /*}}}*/
};
/*}}}*/
/*_ dimm_add {{{*/
let dimm_add = function()
{
let log_this = LOG_MAP.T5_LAYOUT;
if( log_this) log("dimm_add");

    dimm_mask              = document.createElement("DIV");
    dimm_mask.id           = "dimm_mask";
/*
    shadow_root.appendChild( dimm_mask );
*/
    shadow_root.insertBefore(dimm_mask, shadow_root.firstChild);
};
/*}}}*/
/*_ dimm_mask_displayed {{{*/
let dimm_mask_displayed = function()
{
    return (dimm_mask && (dimm_mask.style.display != "none"));
};
/*}}}*/
/*_ dimm_stop_pending {{{*/
let dimm_stop_pending = function()
{
    return dimm_mask_is(onWork_EL) && long_press_timer_is_pending();
};
/*}}}*/
/*_ dimm_mask_is {{{*/
let dimm_mask_is = function(el)
{
    return (el == dimm_mask);
};
/*}}}*/
/*}}}*/
/* TOOLS {{{*/
/*_ t_is_a_tool_el {{{*/
let t_is_a_tool_el = function(el, _caller)
{
    if(!el) return   false;

    let a_tool_label = "";
try {
    if     ((el == seeker_PU) || (el == seeker_CU)               ) { a_tool_label = el.id;              }
    else if( el.id            &&  el.id.startsWith("seekspot"   )) { a_tool_label = el.id;              }
    else if( el.id            &&  el.id.startsWith("cb_textArea")) { a_tool_label = el.id;              }
    else if( has_el_class(el, "toolbag_button")                  ) { a_tool_label = "A DOC TOOL";       }
    else if( shadow_root && shadow_root.contains(el)             ) { a_tool_label = "A SHADOW ELEMENT"; }
} catch(ex) { log("t_is_a_tool_el("+get_n_lbl(el)+"):"+LF+ex); }

    let     result = (a_tool_label != "");
/*
if(log_this) log(_caller+".t_is_a_tool_el("+get_n_lbl(el)+"):%c ...return "+result+" %c["+a_tool_label+"]",lb5,lbF);
*/
    return result;
};
/*}}}*/
/*_ is_a_tool_container {{{*/
let is_a_tool_container = function(el)
{
    if(!el) return   false;
    let     result = false;
    if(el.parentNode.id == dom_tools_html.id) result =  true;

if(logging_EVENTS) log("is_a_tool_container("+get_n_lbl(el)+"): ...return "+result);
    return result;
};
/*}}}*/
/*_ is_a_movable_tool {{{*/
let is_a_movable_tool = function(el)
{
    if(!el) return false;

    let rejected_reason = "";

    if     (!pat_bag                                       ) rejected_reason = " .. ([pat_bag] IS MISSSING)";
    else if(!pat_bag.contains(el)                          ) rejected_reason = " .. (NOT A [pat_bag] NODE )";
    else if(                 !el.className.startsWith("cc")) rejected_reason = " .. (IS A "+el.className+" SEL ITEM)";

    let result = (rejected_reason == "");

if(logging_EVENTS) log("is_a_movable_tool("+get_n_lbl(el)+"): %c...return "+result + rejected_reason, (result ? lb3 : lb8));
    return result;
};
/*}}}*/
/*_ is_a_movable_panel {{{*/
let is_a_movable_panel = function(panel)
{
    if(!panel) return   false;
let log_this = logging_EVENTS;

    let  reject_reason = "";

    if     (shadow_root   &&  !shadow_root.contains(panel)                            ) reject_reason = "NOT a [shadow_root] element";
    else if(dom_grid_html && dom_grid_html.contains(panel)                            ) reject_reason = "IS A [dom_grid_html] PANEL";

    else if(                           seeker_PU == panel                             ) reject_reason = panel.id;
    else if(                           seeker_PU == panel                             ) reject_reason = panel.id;
    else if(                           seeker_CU == panel                             ) reject_reason = panel.id;
    else if(                           seeker_CU == panel                             ) reject_reason = panel.id;

    else if(                          dimm_mask_is( panel            )                ) reject_reason = panel.id;
    else if(                          dimm_mask_is( panel.parentNode )                ) reject_reason = panel.parentNode.id+" CHILD";

    else if(                                        panel.id.startsWith("seekspot"   )) reject_reason = panel.id;
    else if(                                        panel.id.startsWith("cb_textArea")) reject_reason = panel.id;

    let result = (reject_reason == "");

if(log_this) log("%c is_a_movable_panel("+get_n_lbl(panel)+" "+panel.className+"): ...return "+result+" %c "+reject_reason, lb3,lbF);
    return result;
};
/*}}}*/
/*}}}*/
/* BOUNDS {{{*/
/*_ t_sync_layout {{{*/
/*{{{*/
let T_SYNC_LAYOUT_DELAY = 500;
let t_sync_layout_timer = null;
let t_sync_layout_callers = "";
/*}}}*/
let t_sync_layout = function(_caller, delay=T_SYNC_LAYOUT_DELAY)
{
let log_this = LOG_MAP.EV7_DISPATCH;

    if(               t_sync_layout_timer ) {
        clearTimeout( t_sync_layout_timer );
    /*            */  t_sync_layout_timer  = null;
    }
    t_sync_layout_callers += _caller;
if( log_this) log("%c t_sync_layout .. CALLED BY ["+t_sync_layout_callers+"]", lbF+lb7);

    if(delay) t_sync_layout_timer = setTimeout( t_sync_layout_handler, delay);
    else                                        t_sync_layout_handler();
};
/*}}}*/
/*_ t_sync_layout_handler {{{*/
let t_sync_layout_handler = function()
{
    /* requires [hotspot] and [tools_map] {{{*/
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T5_LAYOUT;
    let caller = "t_sync_layout_handler(called by "+t_sync_layout_callers+")";
if(log_this) log(caller);

    t_sync_layout_timer = null;
    t_sync_layout_callers = "";

    if(!hotspot) return;

    if(!tools_map.size) t_tools_TOC(caller);
    /*}}}*/
    /*...OR...*/
    /* EVENT HANDING IN PROGRESS {{{*/
    if(onWork_EL) {
if(log_this) log("- %c EVENT HANDING IN PROGRESS: %c ["+get_n_lbl(onWork_EL)+"]", lbF, lbF+lb0);

        return;
    }
    /*}}}*/
    /* NOT VISIBLE YET {{{*/
    if(dom_tools_html.style.visibility != "visible")
    {
if(log_this) log("- %c [dom_tools_html] IS NOT visible", lb7);

        return;
    }
    /*}}}*/
    /*...OR...*/
    /* INITIAL LAYOUT {{{*/
    if( t_cache_empty() )
    {
        let msg = "INITIAL LAYOUT";

        t_SELECT_DEFAULT_TOOLSET();
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_1_INPUT, msg);

        call_t_grid_add_observer();

        /* REMOVING [off_csv] displayed by [pat_csv] at save time */
/*{{{
log(caller+":");
log("...bak_csv ["+bak_csv+"]");
log("...off_csv ["+off_csv+"]");
log("...pat_csv ["+pat_csv+"]");
log("...sel_csv ["+sel_csv+"]");
}}}*/
/*
logXXX("t_sync_layout_handler:7785:");
logXXX("...pat_csv=["+pat_csv+"]"   );
logXXX("...off_csv=["+off_csv+"]"   );
logXXX("...bak_csv=["+bak_csv+"]"   );
*/
        let tmp_csv  =    String( off_csv );
        let    count = csv_count( off_csv );
        for(let  pos = 1; pos <= count;     ++pos) {
            let pattern = csv_get(tmp_csv ,   pos);
            csv_move_pattern_to_off(      pattern);
        }
/*{{{
log(caller+":");
log("...bak_csv ["+bak_csv+"]");
log("...off_csv ["+off_csv+"]");
log("...pat_csv ["+pat_csv+"]");
log("...sel_csv ["+sel_csv+"]");
log(caller+":");
}}}*/

        t_sel_pat_bag_all();

        t_cache_refresh(msg);

        if( t_hotspot_in_gutter(topTool.x, topTool.y) )
            t_hotspot_in_gutter_on_load();

        t_set_pivotXY(pivotXY.x, pivotXY.y);
        t_raise_pivot_PANEL(T_RAISE_PIVOT_PANEL_DELAY_SHORT);
        t_toggle_pivot_PANEL_magnified(pivot_magnified, caller);
        t_toggle_fly_div_magnified(fly_div_magnified);

        let position =  tools_scroll  ? "absolute" : "fixed";
        t_tool_set_top_xy(caller, topTool.x, topTool.y, position);

        return;
    }
    /*}}}*/
    /*...OR...*/
    /* NOT IF ON GRID {{{*/
    if( call_t_grid_IS_ON_GRID(caller) )
    {
if(log_this) log("- %c TOOLS ON GRID", lb7);
        t_grid_onresize(caller);

        return;
    }
    /*}}}*/
    /*...OR...*/
    /* viewport and gutter-margin {{{*/
    let gutter_w = h_W;
    let gutter_h = h_H;

    let viewport = { t:0, l:0, b:0, r:0 };
    viewport.t   = -gutter_w / 3;
    viewport.l   = -gutter_h / 3;
    viewport.r   =  w_W;
    viewport.b   =  w_H;

if(log_this) log("...VIEWPORT TL=[%c "+ viewport.t  +" "+ viewport.l  +" %c] BR=[%c "+ viewport.b +" "+ viewport.r +" %c]"                                                ,lb6,lbA,lb5,lbA);
    /*}}}*/
    /* TOOLS HIDE .. f(t_hotspot_in_gutter) {{{*/
    if( t_hotspot_in_gutter(topTool.x, topTool.y) )
    {
if(log_this) log("- %c HOTSPOT IN GUTTER: HIDING TOOL PANELS", lb7);

if(log_this) log("...topTool: FROM XY=[%c "+ topTool.x  +" "+ topTool.y +" %c]",lb6,lbA);
        topTool.x = Math.max( -w_W, topTool.x      );
        topTool.y = Math.max( -w_H, topTool.y      );
        topTool.x = Math.min(       topTool.x, w_W );
        topTool.y = Math.min(       topTool.y, w_H );
if(log_this) log("...topTool: TO   XY=[%c "+ topTool.x  +" "+ topTool.y +" %c]",lb6,lbA);

        let position =  tools_scroll  ? "absolute" : "fixed";
        t_tool_set_top_xy(caller, topTool.x, topTool.y, position);

        t_update_store3_site_layout(caller+": HOTSPOT IN GUTTER");
        return;
    }
    /*}}}*/
    /* NOT IF NO SELECTED PANEL {{{*/
    let first_tool = t_get_first_selected_tool_panel();
    if(!first_tool) {
if(log_this) log(caller+": %c NO TOOL SELECTED", lb7);

        t_update_store3_site_layout(caller+": NO TOOL SELECTED");
        return;
    }
    /*}}}*/
    /* COLLECT [spreaded_tools] AND THEIR BOUNDING BOX {{{*/
if(log_this) log("...first_tool=[%c "+get_n_lbl(first_tool)+" %c]", lbF,lbA);

    let map = tools_map.get(first_tool);
    let top_tool_l = map.x;
    let top_tool_t = map.y;
    let top_tool_w = map.w;
    let top_tool_h = map.h;

if(log_this) log("."+get_n_lbl(first_tool)+" XY=["+top_tool_l+" "+top_tool_t+"] WH=["+top_tool_w+" "+top_tool_h+"]");

    let bb_dx_dy = { t:0, l:0, r:0, b:0, dx:0, dy:0 };
    bb_dx_dy.t   = top_tool_t;
    bb_dx_dy.l   = top_tool_l;
    bb_dx_dy.b   = top_tool_t + top_tool_h;
    bb_dx_dy.r   = top_tool_l + top_tool_w;
    bb_dx_dy.dx  = w_W;
    bb_dx_dy.dy  = w_H;
if(log_this) log("....FROM BB TL=[%c "+ bb_dx_dy.t  +" "+ bb_dx_dy.l  +" %c] BR=[%c "+ bb_dx_dy.b +" "+ bb_dx_dy.r +" %c] DXY=[%c "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy +" %c]",lb6,lbA,lb5,lbA,lb2,lbA);

    let some_tools_to_unhide = t_collect_spreaded_tools_bounding_box(bb_dx_dy, viewport);
    /*}}}*/
    /* NO GROUPED TOOLS TO SPREAD .. f(BOUNDING BOX: COLLAPSED) {{{*/
if(log_this) log("spreaded_tools.length=["+spreaded_tools.length+"]");
    if(spreaded_tools.length < 1)
    {
        bb_dx_dy.dx  = 0;
        bb_dx_dy.dy  = 0;
    }

if(log_this) log("......TO BB TL=[%c "+ bb_dx_dy.t  +" "+ bb_dx_dy.l  +" %c] BR=[%c "+ bb_dx_dy.b +" "+ bb_dx_dy.r +" %c] DXY=[%c "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy +" %c]",lb6,lbA,lb5,lbA,lb2,lbA);
    /*}}}*/

    /* PIVOT PANEL MAY HAVE BEEN UNSELECTED .. CHOOSE ANOTHER {{{*/
    let panel = pivot_PANEL;
if(log_this) log("PIVOT [%c "+get_n_lbl(panel)+" %c]", lbF+lb7,lbA);

    if(!t_is_a_selected_panel(panel)) { panel = t_get_next_selected_tool_panel (pivot_PANEL); if(log_this) log("%c NEXT  %c "+get_n_lbl(panel)+"  ", lb3,lbF); }
    if(                      !panel ) { panel = t_get_prev_selected_tool_panel (pivot_PANEL); if(log_this) log("%c PREV  %c "+get_n_lbl(panel)+"  ", lb2,lbF); }
    if(                      !panel ) { panel = t_get_first_selected_tool_panel(           ); if(log_this) log("%c FIRST %c "+get_n_lbl(panel)+"  ", lb1,lbF); }

    if(panel) {

        t_set_pivot_PANEL( panel );
        t_raise_pivot_PANEL();
        t_toggle_pivot_PANEL_magnified(pivot_magnified, caller);
    }
    /*}}}*/
    /* SOME TOOLS TO UNHIDE .. f(some_tools_to_unhide) {{{*/
    if( some_tools_to_unhide )
    {
if(log_this) log(caller+": %c SOME TOOLS TO UNHIDE: %c "+some_tools_to_unhide, lb7, lbF);

        t_cache_init_by(caller);
        t_cache_refresh("Showing some tools");
        t_tool_set_top_xy(caller, topTool.x, topTool.y);

        t_update_store3_site_layout(caller+": SOME TOOLS TO UNHIDE");
        return;
    }
    /*}}}*/
    /*...OR...*/
    /* ALL TOOLS WITHING VIEWPORT .. f(BOUNDING BOX: UNCHANGED) {{{*/
    if((bb_dx_dy.dx==0) && (bb_dx_dy.dy==0))
    {
if(log_this) log("- %c ALL TOOLS WITHIN VIEWPORT", lb7);

        t_toggle_pivot_PANEL_magnified(pivot_magnified, caller); /* in case layout has changed */

        t_update_store3_site_layout(caller+": ALL TOOLS WITHIN VIEWPORT");
        return;
    }
    /*}}}*/
    /*...OR...*/
    /* NO TOOLS IN VIEWPORT .. f(BOUNDING BOX: EXPANDED) {{{*/
if(log_this) log("- %c NO TOOLS WITHIN VIEWPORT: BOUNDING BOX: EXPANDED: %c "+t_bounding_box_toString(bb_dx_dy), lbF+lb7);

    let    xy = t_getPosition(first_tool, caller);
    topTool.x = xy.x + bb_dx_dy.dx;
    topTool.y = xy.y + bb_dx_dy.dy;

    topTool.x = Math.max( -w_W, topTool.x      );
    topTool.y = Math.max( -w_H, topTool.y      );
    topTool.x = Math.min(       topTool.x, w_W );
    topTool.y = Math.min(       topTool.y, w_H );
if(log_this) log("...topTool: FROM XY=[%c "+      xy.x +" "+       xy.y +" %c]",lb6,lbA);
if(log_this) log("...topTool: TO   XY=[%c "+ topTool.x  +" "+ topTool.y +" %c]",lb6,lbA);

if(log_this) log(caller+": %c CONFINE TO VIEWPORT: t_tool_set_top_xy("+ topTool.x  +" "+ topTool.y +")", lb7);
    t_cache_init_by(caller);
    t_cache_refresh("Layout viewport");
    let position =  tools_scroll  ? "absolute" : "fixed";
    t_tool_set_top_xy(caller, topTool.x, topTool.y, position);

    t_update_store3_site_layout(caller+": CONFINE TO VIEWPORT");
    /*}}}*/
};
/*}}}*/
/*_ t_SELECT_DEFAULT_TOOLSET {{{*/
/*{{{*/
let T_DEFAULT_TOOLSET
    = [   "pat_bag"
        , "headsup"
        , "headsup_w"
        /*
        , "sel_bag"
        , "headsup_ds"
        , "headsup_bw"
        , "headsup_bz"
        , "dom_traversal"
        , "dev_log_calls"
        , "dev_log_map"
        , "dom_load_tags"
         */
    ];

/*}}}*/
let t_SELECT_DEFAULT_TOOLSET = function()
{
    let caller = "t_SELECT_DEFAULT_TOOLSET";
let log_this = LOG_MAP.T3_GRID;
if( log_this) log(caller);

    if(!off_bag) t_pat_bag_build_off_bak_bot_and_mov_div();

    /* FLOATLOG PRELOAD {{{*/
    t_log_set_floatlog( LOG_MAP.EV8_FLOATLOG );

    set_el_class_on_off(fly_log, "checked", LOG_MAP.EV8_FLOATLOG  );
    /*}}}*/

    if(t_get_selected_count( caller )) return;

    pivot_PANEL = null;
    for(let i=0; i<T_DEFAULT_TOOLSET.length; ++i)
    {
        let id =   T_DEFAULT_TOOLSET[i];
        if(panel = get_tool("#"+id))
        {
            map          = tools_map.get(panel);
            map.selected = true;
            store_key_state(id+".selected", map.selected);

            pivot_PANEL = panel; /* track last */
        }
    }
    t_get_selected_count( caller );

    pivotXY.x = w_W / 2;
    pivotXY.y = w_H / 2;
    t_cache_init_by(caller);
};
/*}}}*/
/*_ t_expand_bounding_box {{{*/
let t_expand_bounding_box = function(panel, bb_dx_dy, viewport)
{
let log_this = LOG_MAP.T5_LAYOUT;
    let caller = "t_expand_bounding_box("+get_n_lbl(panel)+" , ["+t_bounding_box_toString(bb_dx_dy)+" ])";
if(log_this) log("%c"+caller, lb2);

/*{{{
    let es = panel.style;
if(log_this) log("%c  es.XY=["+parseInt( es.left)+" "+parseInt( es.top)+"]  es.WH=["+parseInt( es.width)+" "+parseInt( es.height)+"]", lb2);
}}}*/
/*{{{
    let cs = window.getComputedStyle(panel);
if(log_this) log("%c  cs.XY=["+parseInt( cs.left)+" "+parseInt( cs.top)+"]  cs.WH=["+parseInt( cs.width)+" "+parseInt( cs.height)+"]", lb2);
    let b  = t + parseInt(cs.height);
    let r  = l + parseInt(cs.width );
}}}*/
/*{{{
    let xy = getComputedPosition(panel, "t_expand_bounding_box");
}}}*/

    let  xy = t_getPosition(panel, "t_expand_bounding_box");
    let map = tools_map.get(panel);
if(log_this) log("%c ....xy=["+parseInt( xy.x   )+" "+parseInt( xy.y  )+"]"                                                          , lb2);
if(log_this) log("%c map.XY=["+parseInt(map.x   )+" "+parseInt(map.y  )+"] map.WH=["+parseInt(map.w    )+" "+parseInt(map.h     )+"]", lb2);

    let w = map.w;
    let h = map.h;

    let t  = xy.y;
    let l  = xy.x;
    let b  = t + parseInt(h);
    let r  = l + parseInt(w);

    /* expand bounding box to include this element */
    if( l < bb_dx_dy.l) bb_dx_dy.l = l;
    if( t < bb_dx_dy.t) bb_dx_dy.t = t;
    if( r > bb_dx_dy.r) bb_dx_dy.r = r;
    if( b > bb_dx_dy.b) bb_dx_dy.b = b;

    /* H-DRAG TO VIEWPORT */
    let dx = 0;
    /* FROM LEFT  */ if(r < viewport.l) dx = viewport.l - r; /* positive H-DRAG */
    /* FROM RIGHT */ if(l > viewport.r) dx = viewport.r - l; /* negative H-DRAG */

    /* V-DRAG TO VIEWPORT */
    let dy = 0;
    /* FROM ABOVE */ if(b < viewport.t) dy = viewport.t - b; /* positive V-DRAG */
    /* FROM BELOW */ if(t > viewport.b) dy = viewport.b - t; /* negative V-DRAG */

    /* TRACK MIN DRAG DISTANCES FROM VIEWPORT */
    let el_dxy =          Math.abs(         dx) + Math.abs(         dy);
    let          bb_dxy = Math.abs(bb_dx_dy.dx) + Math.abs(bb_dx_dy.dy);
    let log_color = "color:#A33;";
    if( el_dxy < bb_dxy) {
        bb_dx_dy.dx = dx;
        bb_dx_dy.dy = dy;
        log_color = "background-color:#F22;";
    }

if(log_this) {
    log("t_expand_bounding_box: "
        +" tl_wh=[ "+            t  +" "+          l  +"] ["+ (         r -          l) +" "+ (         b -          t) +"] dxy=[%c "+ dx          +" "+ dy          +" %c]"
        +" TL_WH=[ "+   bb_dx_dy.t  +" "+ bb_dx_dy.l  +"] ["+ (bb_dx_dy.r - bb_dx_dy.l) +" "+ (bb_dx_dy.b - bb_dx_dy.t) +"] DXY=[%c "+ bb_dx_dy.dx +" "+ bb_dx_dy.dy +" %c]"
        +" "+ get_n_lbl(panel)
        , "color:#A33;"           ,""
        , log_color,"background-color:initial;"
    );
}
    return bb_dx_dy;
};
/*}}}*/
/*_ t_bounding_box_toString {{{*/
let t_bounding_box_toString = function(bb)
{
    return "TL=["+bb.t+" "+bb.l+"] BR=["+bb.b+" "+bb.r+"] dx_dy=["+bb.dx+" "+bb.dy+"]";
};
/*}}}*/
/*}}}*/

/** WORDING */
/* CLIPBOARD {{{*/
/*_ show_slot_containers {{{*/
let show_slot_containers = function(slot)
{
    /* {{{*/
    let caller = "show_slot_containers(slot "+slot+")";
let log_this = LOG_MAP.T5_LAYOUT;
if( log_this) log(caller);
    if( !ccs[slot] ) return;

    if( dimm_mask)
        dimm_mask.innerHTML = "";

    let innerHTML = "";
    let container = null;

    /*}}}*/
    /* window geometry {{{*/
    let  body_SH = document.body.scrollHeight;
    let  body_CH = document.body.clientHeight;
    let  body_OH = document.body.offsetHeight;

if(log_this) log("...body   [  H] = ["+body_SH +" "+ body_CH +" "+ body_OH +"] .. [Scroll Client Offset]");
if(log_this) log("...window [W H] = ["+w_H     +" "+ w_W                   +"]");
    /*}}}*/
    for(let i=0; i<ccs[slot].nodes.length; ++i)
    {
        let num = i+1;
        let el_class = "class_s_"+slot+"_"+num;
        if( ccs[slot].containers[i] ) {
            if( container != ccs[slot].containers[i]) {
                container  = ccs[slot].containers[i];
                /* container geometry {{{*/
                let  container_is_body_single_child = (container == document.body) && (document.body.childNodes.length == 1);
if(log_this) log("...container_is_body_single_child.: "+ container_is_body_single_child);

                let                         cont_CH = container.clientHeight;
                let                         cont_OH = container.offsetHeight;
                let                         cont_SH = container.scrollHeight;
if(log_this) log("...cont   [  H] = ["+cont_SH +" "+ cont_CH +" "+ cont_OH +"] .. [Scroll Client Offset]");

                let cont_h_covers_window_CH = cont_SH >= (w_H * 0.5);
if(log_this) log("...cont_h_covers_window_CH........: "+ cont_h_covers_window_CH +"] .. [cont_SH / body_CH] ["+cont_SH+" / "+body_CH+"]");

                /*}}}*/
                /* innerHTML {{{*/
                let title = (container          .title) ? " <em>"+container           .title+"</em>"
                    :       container.parentNode.title  ? " <em>"+container.parentNode.title+"</em>"
                    :                                     " ";
/*{{{
                let css = (container.tagName == "P") ? "preformatted"    : "";
                let css = (containers_hi           ) ? "preformatted"    : "";
}}}*/

                let css = (containers_hi           ) ? "" : "white-space:pre"; /* wrap with containers highlight */

                let tooltip = "LONG PRESS ..."+LF+SYMBOL_SCISSORS+" P"+num+" to Clipboard";
                innerHTML
                    += (cont_h_covers_window_CH) ?   ""
                    :   "<div class='"+el_class+"' style='"+css+"' title='"+tooltip+"'>"
                    +   " <em class='index'>"+num+"</em>"
                    +   " <em class='em_copy' title='copy outerHTML to clipboard'>copy</em>"
                    +    title               +LF
                    +    container.outerHTML +LF
                    +   "</div>"
                ;

                /*}}}*/
            }
        }
    }
    if(innerHTML) {
        let tooltip = "LONG PRESS ..."+LF+SYMBOL_SCISSORS+" "+(ccs[slot].nodes.length)+" Paragraphs to Clipboard";
        dimm_start_slot_containers(caller);
        dimm_mask.innerHTML = "<div id='div_slot_containers' title='"+tooltip+"'>"+innerHTML+"</div>";
    }
};
/*}}}*/
/*_ div_slot_containers_is_showing {{{*/
let div_slot_containers_is_showing = function()
{
    return (dimm_mask.innerHTML != "");
};
/*}}}*/
/*_ t_copy_el_HTML_to_clipboard {{{*/
let cb_textArea = null;
let t_copy_el_outerHTML_to_clipboard = function(el) { t_copy_el_HTML_to_clipboard(el,  true); };
let t_copy_el_innerHTML_to_clipboard = function(el) { t_copy_el_HTML_to_clipboard(el, false); };
let t_copy_el_HTML_to_clipboard      = function(el, outer_or_inner)
{
    let caller = "t_copy_el_HTML_to_clipboard("+get_n_lbl(el)+", "+outer_or_inner+")";
let log_this   = LOG_MAP.EV3_UP;
if( log_this) log("%c"+caller, lbR+lf2);

    /* [cb_textArea] {{{*/
    if(!cb_textArea) {
        cb_textArea    = document.createElement("TEXTAREA");
        cb_textArea.id = "cb_textArea";
        cb_textArea.style.position        = "fixed";
        cb_textArea.style.top             = "1em";
        cb_textArea.style.left            = "1em";
        cb_textArea.style.width           =  "95%";
        cb_textArea.style.height          = "25em";
        cb_textArea.style.backgroundColor = "salmon";
        shadow_root.appendChild(cb_textArea);
/*{{{
      document.body.appendChild(cb_textArea);
      cb_textArea.style.display         = "none";
      cb_textArea.onclick               = function(e) { this.display = "none"; };
}}}*/
    }
    /*}}}*/

    /* SHOW AND FILL BUFFER TEXTAREA */
    cb_textArea.style.display = "block";
    cb_textArea.value = (outer_or_inner) ? el.outerHTML : el.innerHTML;

    /* COPY */
    cb_textArea.select();
    if( !document.execCommand("copy") )
    {
        log("%c*** COPY TO CLIPBOARD REJECTED ***", lb2);
    }
    else {
if( log_this) log("%c...COPY TO CLIPBOARD: "+cb_textArea.value.length+" characters ", lbR+lf2);

    }
    /* HIDE AND CLEAR */
    cb_textArea.style.display = "none";
    cb_textArea.value = "";
};
/*}}}*/
/*}}}*/
/* SEEK {{{*/
/*_ t_is_onSeek_EL {{{ */
let regexp_SELECT_ID = new RegExp("select[0-9]+_[0-9]+");
let t_is_onSeek_EL = function(node)
{
    if(!node) return false;

    let picked_node = null;

    if((node == seeker_PU) || (node == seeker_CU))/* || (node.id.startsWith("seekspot")))*/
    {
        picked_node = node;
    }
    else {
        for(  picked_node  = node
            ; picked_node != null
            ; picked_node  = picked_node.parentNode
        ) {
            if(       !picked_node.id                          ) continue;
            if( String(picked_node.id).match(regexp_SELECT_ID) )    break;
        }
    }
    let result = (picked_node != null);
/*
if(log_this) log(caller+": ...return "+ result + (picked_node ? " ["+picked_node.id+"]" : ""));
*/
    return result;
};
/* }}} */

/*_ t_seeker_move_on_last_highlight_slot_num {{{*/
let t_seeker_move_on_last_highlight_slot_num = function()
{
if(LOG_MAP.S3_SLOT) log("t_seeker_move_on_last_highlight_slot_num");

    if(last_highlight_slot >= 0)
        t_seeker_move_on_slot_num(last_highlight_slot, last_highlight_num);
};
/*}}}*/

/*_ t_seeker_move_on_slot_num {{{ */
/*{{{*/
let seeker_thumbs;

/*}}}*/
let t_seeker_move_on_slot_num = function(slot, num, visible=true)
{
    /* {{{*/
    let caller = "t_seeker_move_on_slot_num(slot=["+slot+"], num=["+num+"], visible=["+visible+"])";
if(LOG_MAP.S3_SLOT) log(caller);

if( !seeker_PU || !seeker_PD || !seeker_CD || !seeker_CU) return;
    /*}}}*/
    /* [seeker_CU] content {{{*/
    seeker_CU.innerHTML = num +"<sup>/"+ ccs[slot].nodes.length+"</sup>";

    /*}}}*/
    /* [seeker_CU] style {{{*/
    set_el_class(seeker_CU
        ,   "cc"+(      slot % SELECT_SLOT_MAX) /* 1 2 3 4 5 6 7 8 9  0 */
        + " num"+(1+(num+11) % 12             ) /* 1 2 3 4 5 6 7 8 9 10 11 12 */
    );

    /*}}}*/
    /* [seeker_CD] content {{{*/
    /* ARROW */
    if(!seeker_thumbs)
    {
        seeker_CD.innerHTML = ""
            + "<span class='seeker_handle    top'>A-Z+"+SYMBOL_UP+"</span>"
            + "<span class='seeker_handle  left' ></span>"
            + "<div     id='seeker_thumbs'       ></div>"
            + "<span class='seeker_handle  right'></span>"
            + "<span class='seeker_handle bottom'>"+SYMBOL_UP_ARROW+"</span>"
        ;
        seeker_thumbs = get_tool("#seeker_thumbs");
    }

    /* THUMBS */
    if(seeker_thumbs)
    {
        let                        slot_first_id = "thumb_s_"+slot+"_1";
        let seeker_thumbs_includes_slot_first_id = seeker_thumbs.innerHTML.includes( slot_first_id );
if(LOG_MAP.S3_SLOT) log("...seeker_thumbs_includes_slot_first_id=["+seeker_thumbs_includes_slot_first_id+"]");
        if(!seeker_thumbs_includes_slot_first_id)
            seeker_thumbs.innerHTML = t_get_3_sel_bag_thumbs_EM(slot,"thumb_s");
    }
    /*}}}*/
    /* SHOW .. (invisible_node) {{{*/
    if(!visible) {
        add_el_class(seeker_PU, "invisible_node");
        add_el_class(seeker_PD, "invisible_node");
    }
    /*}}}*/
    /* MOVE TO .. (visible node) {{{*/
    else {
/*{{{
log(caller);
try { log("... ccs[slot].nodes     ["+ (num-1) +"]=["+ ccs[slot].nodes     [num-1] +"]"); } catch(ex) {}
try { log("... ccs[slot].containers["+ (num-1) +"]=["+ ccs[slot].containers[num-1] +"]"); } catch(ex) {}
}}}*/
/*{{{
console.dir(ccs);
log("............num..=["+ num           +"]");
log("...parseInt(num))=["+ parseInt(num) +"]");
log("node = ccs["+slot+"].nodes["+(num-1)+"]");
console.dir(node);
}}}*/
/*{{{
    let node
        =  ccs[slot].containers[num-1]
        ?  ccs[slot].containers[num-1]
        :  ccs[slot].nodes     [num-1]
    ;
}}}*/
        let node = ccs[slot].nodes [num-1];
        if( node ) {
            let xy = t_getPosition(node, caller);
            if((xy.x > 0) || (xy.y > 0))
            {
                let node_W = node.offsetWidth;
                let node_H = node.offsetHeight;

                let node_L = xy.x;
                let node_C = node_L + node_W/2;
                let node_T = xy.y;
                let node_B = node_T + node_H;

                /* show at leat one seeker */
                if(t_seeker_PU_is_hiding() && t_seeker_PD_is_hiding())
                    t_seeker_PU_show();

                /* [seeker_PU] ABOVE */
                t_seeker_move_above(seeker_PU, node_C, node_T);

                /* [seeker_PD] BELOW */
                t_seeker_move_below(seeker_PD, node_C, node_B);

                del_el_class(seeker_PU, "invisible_node");
                del_el_class(seeker_PD, "invisible_node");
            }
        }
    }
    /*}}}*/
    t_sync_seeker(caller);
};
/*}}}*/

/*_ t_seeker_move_above {{{*/
let t_seeker_move_above = function(tool, x, y)
{
    let      tool_W = tool.offsetWidth ;
    let      tool_H = tool.offsetHeight;
    tool.style.left = (x-tool_W/2)+"px";
    tool.style.top  = (y-tool_H  )+"px";
};
/*}}}*/
/*_ t_seeker_move_below {{{*/
let t_seeker_move_below= function(tool, x, y)
{
    let      tool_W = tool.offsetWidth ;
    let      tool_H = tool.offsetHeight;
    tool.style.left = (x-tool_W/2)+"px";
    tool.style.top  = (y         )+"px";

};
/*}}}*/

/*_ t_seeker_PU_show .. t_seeker_PU_hide {{{*/
/*{{{*/
const T_SEEKER_PU_HIDE_DELAY = 5000;
const T_SEEKER_PU_FADE_DELAY = 3000;
let   t_seeker_PU_fade_timer;
let   t_seeker_PU_hide_timer;

/*}}}*/
/*_ t_seeker_PU_show {{{*/
let t_seeker_PU_show = function()
{
    if( !seeker_PU ) return;
if(logging_EVENTS) log("t_seeker_PU_show");

    if(t_seeker_PU_hide_timer) {
        clearTimeout( t_seeker_PU_hide_timer );
        /*.........*/ t_seeker_PU_hide_timer = null;
    }

    if(t_seeker_PU_fade_timer) {
        clearTimeout( t_seeker_PU_fade_timer );
        /*.........*/ t_seeker_PU_fade_timer = null;
    }

    del_el_class(seeker_PU, "fading");
    del_el_class(seeker_PU, "hiding");

    seeker_PU.style.display = "block";

    /* SCHEDULE AUTO-HIDE */
    t_seeker_PU_hide();
};
/*}}}*/
/*_ t_seeker_PU_hide {{{*/
let t_seeker_PU_hide = function( delay=T_SEEKER_PU_HIDE_DELAY )
{
    if( !seeker_PU ) return;
/*if(logging_EVENTS) log("t_seeker_PU_hide");*/

    if(t_seeker_PU_hide_timer) clearTimeout(t_seeker_PU_hide_timer);
    t_seeker_PU_hide_timer =     setTimeout(t_seeker_PU_hide_handler, delay);

    if(t_seeker_PU_fade_timer)       clearTimeout(t_seeker_PU_fade_timer);
    if(delay) t_seeker_PU_fade_timer = setTimeout(t_seeker_PU_fade_handler, T_SEEKER_PU_FADE_DELAY);
};
/*}}}*/
/*_ t_seeker_PU_fade_handler {{{*/
let t_seeker_PU_fade_handler = function()
{
    if( !seeker_PU ) return;
if(logging_EVENTS) log("t_seeker_PU_fade_handler");

    t_seeker_PU_fade_timer = null;

    add_el_class(seeker_PU, "fading");
    del_el_class(seeker_PU, "hiding");
};
/*}}}*/
/*_ t_seeker_PU_hide_handler {{{*/
let t_seeker_PU_hide_handler = function()
{
    if( !seeker_PU ) return;
if(logging_EVENTS) log("t_seeker_PU_hide_handler");

    t_seeker_PU_hide_timer = null;

    del_el_class(seeker_PU, "fading");
    add_el_class(seeker_PU, "hiding");

    seeker_PU .style.display = "none";
    if(!pin_seekspot) {
        seekspot_U.style.display = "none";
        seekspot  .style.display = "none";
        seekspot_D.style.display = "none";
    }

    t_seek_clr_container_selected();

    t_seek_clr_slot_num_select_all();
};
/*}}}*/
/*}}}*/
/*_ t_seeker_PD_show .. t_seeker_PD_hide {{{*/
/*{{{*/
const T_SEEKER_PD_DISPLAY_NONE_DELAY = 500;
let   t_seeker_PD_hide_timer;

/*}}}*/
/*_ t_seeker_PD_hide {{{*/
let t_seeker_PD_hide = function()
{
    if( !seeker_PD ) return;
/*if(logging_EVENTS) log("t_seeker_PD_hide");*/

    if(t_seeker_PD_hide_timer) clearTimeout(t_seeker_PD_hide_timer);
    t_seeker_PD_hide_timer =     setTimeout(t_seeker_PD_hide_handler, T_SEEKER_PD_DISPLAY_NONE_DELAY);
};
/*}}}*/
/*_ t_seeker_PD_show {{{*/
let t_seeker_PD_show = function()
{
let caller = "t_seeker_PD_show";
    if( !seeker_PD ) return;
if(logging_EVENTS) log(caller);

    if(t_seeker_PD_hide_timer) {
        clearTimeout( t_seeker_PD_hide_timer );
        /*.........*/ t_seeker_PD_hide_timer = null;
    }

    t_sync_seeker(caller);

    del_el_class(seeker_PU, "fading");
    del_el_class(seeker_PD, "hiding");

    seeker_PD.style.display = "block";
};
/*}}}*/
/*_ t_seeker_PD_hide_handler {{{*/
let t_seeker_PD_hide_handler = function()
{
    if( !seeker_PD ) return;
if(logging_EVENTS) log("t_seeker_PD_hide_handler");

    t_seeker_PD_hide_timer = null;

    del_el_class(seeker_PU, "fading");
    add_el_class(seeker_PD, "hiding");

    seeker_PD.style.display = "none";

};
/*}}}*/
/*}}}*/

/*_ t_seeker_PU_is_showing {{{*/
let t_seeker_PU_is_showing = function()
{
    let reject_reason = "";

    if     (!seeker_PU                             ) reject_reason = "[seeker_PU] IS MISSING" ;
    else if( seeker_PU.style.display   != "block"  ) reject_reason = "[seeker_PU] OFF DISPLAY";
    else if( seeker_PU.classList.contains("hiding")) reject_reason = "[seeker_PU] IS HIDING";
/*
    else if( t_node_is_off_screen(seeker_PU)          ) reject_reason = "[seeker_PU] OFF SCREEN ";
*/
    let result = (reject_reason == "");

if(result && logging_EVENTS) log("t_seeker_PU_is_showing: ...return "+result+" %c "+reject_reason,lb2);
    return result;
};
/*}}}*/
/*_ t_seeker_PU_is_hiding {{{*/
let t_seeker_PU_is_hiding = function()
{
    let reject_reason = "";

    if     (!seeker_PU                             ) reject_reason = "[seeker_PU] IS MISSING";
    else if(!seeker_PU.classList.contains("hiding")) reject_reason = "[seeker_PU] HAS NO [hiding] SELECTOR";

    let result = (reject_reason == "");

if(logging_EVENTS) log("t_seeker_PU_is_hiding: ...return "+result+" %c "+reject_reason,lb2);
    return result;
};
/*}}}*/
/*_ t_seeker_PD_is_hiding {{{*/
let t_seeker_PD_is_hiding = function()
{
    return !seeker_PD
        ||  seeker_PD.classList.contains("hiding")
        ||  seeker_PD.style.display   != "block";
    ;
};
/*}}}*/
/*_ t_node_is_off_screen {{{*/
let t_node_is_off_screen = function(node)
{
    let caller = "t_node_is_off_screen(node=["+get_n_lbl(node)+"])";
if(LOG_MAP.T5_LAYOUT) log(caller);

    /* xy_wh */
    let   xy = t_getPosition(node, caller);
    let node_T = xy.y - window.scrollY;
    let node_L = xy.x - window.scrollX;
    let node_W = node.offsetWidth;
    let node_H = node.offsetHeight;

    /* bottom right */
    let node_B = node_T + node_H;
    let node_R = node_L + node_W;

    /* location in viewport */
    let reject_reason = "";

    if(           (node_T < 0          )) reject_reason = "["+get_n_lbl(node)+"] IS OFF TOP"   ;
    if(!reject_reason && (node_L < 0   )) reject_reason = "["+get_n_lbl(node)+"] IS OFF LEFT"  ;
    if(!reject_reason && (node_B > w_H )) reject_reason = "["+get_n_lbl(node)+"] IS OFF BOTTOM";
    if(!reject_reason && (node_R > w_W )) reject_reason = "["+get_n_lbl(node)+"] IS OFF RIGHT" ;

    let result = (reject_reason != "");

if(logging_EVENTS) log(caller+": ...return "+result+" %c "+reject_reason,lb2);
    return result;
};
/*}}}*/

/*_ t_sync_seeker {{{*/
/*{{{*/
const T_SYNC_SEEKER_ARROW_DELAY = 750;
const T_SYNC_SEEKER_DELAY       = 500;
let   t_sync_seeker_timeout;

/*}}}*/
/*_ t_sync_seeker {{{*/
let t_sync_seeker = function(_caller)
{
/*
logXXX("%c t_sync_seeker("+_caller+")", lbH+lf7)
*/
    if(t_sync_seeker_timeout) clearTimeout(t_sync_seeker_timeout);
    t_sync_seeker_timeout =     setTimeout(t_sync_seeker_handle, T_SYNC_SEEKER_DELAY);
};
/*}}}*/
/*_ t_sync_seeker_handle {{{*/
let t_sync_seeker_handle = function()
{
let caller = "t_sync_seeker_handle";
/*
logXXX("%c"+caller, lbb+lbH+lf7)
*/

    /* [seeker_handle] nodes */
    let el, node_list;
    if(shadow_root) node_list = shadow_root.querySelectorAll(".seeker_handle");
    else            node_list = document   .querySelectorAll(".seeker_handle");

    for(let i=0; i < node_list.length; ++i) {
        let     el = node_list[i];
        /* (top) .. FIXME: remove pat_sort clone {{{*/
        if( has_el_class(el, "top") )
        {
            el.innerHTML   = pat_sort.innerHTML;
            if( t_are_pat_sorted() ) add_el_class(el, "checked");
            else                     del_el_class(el, "checked");
        }
        /*}}}*/
        /* [back] seek-next .. (left right) {{{*/
        else if( has_el_class(el,  "left")
            ||   has_el_class(el, "right")
        ) {
            if( el.innerText != SYMBOL_DOWN_ARROW)     el.innerText = SYMBOL_DOWN_ARROW;
            if( sel_back                         ) add_el_class(el  , "back"   );
            else                                   del_el_class(el  , "back"   );

            setTimeout(t_sync_sel_back, T_SYNC_SEEKER_ARROW_DELAY);
        }
        /*}}}*/
        /* [log_seekspot] toggle .. (bottom) {{{*/
        else if( has_el_class(el, "bottom") )
        {
            if( log_seekspot                     ) add_el_class(el  , "checked");
            else                                   del_el_class(el  , "checked");
        }
        /*}}}*/
    }
/* TODO: MAKE SURE CACADING HANDLERS PROVIDE FOR THIS TO HAPEN
    t_sync_doc_LOG_MAP(caller);
*/
};
/*}}}*/
/*}}}*/
/*}}}*/
/*_ t_sync_sel_back {{{*/
let t_sync_sel_back = function()
{
if(LOG_MAP.T5_LAYOUT) log("t_sync_sel_back");

    set_id_class_on_off("sel_bag"      , "back", sel_back);
    set_id_class_on_off("seeker_CD"    , "back", sel_back);
    set_id_class_on_off("seeker_thumbs", "back", sel_back);

};
/*}}}*/

/*_ t_seek_set_container_selected {{{*/
/*{{{*/
let container_selected;
let container_selected_x;

/*}}}*/
let t_seek_set_container_selected = function(container, _caller)
{
    if(container_selected == container) return;

    if(container_selected) del_el_class(container_selected, "container_selected");

    container_selected   = container;
    /* follow [container_selected] {{{*/
    if(container_selected)
    {
        t_seek_set_onSeek_XY_from_container(container_selected, _caller+" "+get_n_lbl(container_selected));

if(log_seekspot) t_log_seekspot("FOLLOW container_selected");
    }
    /*}}}*/

    if(container_selected) {
        add_el_class(container_selected, "container_selected");
        add_el_class(seekspot          , "container_selected");

        let xy = t_getPosition(container_selected, "t_seek_set_container_selected");
        if( xy ) container_selected_x = xy.x;
    }
    else {
        container_selected_x = 0;
        del_el_class(seekspot          , "container_selected");
    }


if(log_seekspot) t_log_seekspot( _caller);
};
/*}}}*/
/*_ t_seek_clr_container_selected {{{*/
let t_seek_clr_container_selected = function()
{
    if(!container_selected ) return;

    del_el_class(container_selected, "container_selected");
    del_el_class(seekspot          , "container_selected");

    container_selected = null;
};
/*}}}*/

/*_ t_scrollIntoViewIfNeeded {{{*/ /* TIMER TEMPLATE */
/*{{{*/
const SCROLL_INTO_VIEW_DELAY =  2000;

let t_scrollIntoViewIfNeeded_timer;
let t_scrollIntoViewIfNeeded_el;
/*}}}*/
/*_ t_scrollIntoViewIfNeeded {{{*/
let t_scrollIntoViewIfNeeded = function(el)
{
/*
logXXX("%c t_scrollIntoViewIfNeeded("+get_n_lbl(el)+")", lbH)
*/
    if(t_scrollIntoViewIfNeeded_timer) clearTimeout( t_scrollIntoViewIfNeeded_timer);
    t_scrollIntoViewIfNeeded_timer   =   setTimeout( t_scrollIntoViewIfNeeded_handler, SCROLL_INTO_VIEW_DELAY);
    t_scrollIntoViewIfNeeded_el      = el;
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_handler {{{*/
let t_scrollIntoViewIfNeeded_handler = function()
{
    t_scrollIntoViewIfNeeded_timer = null;

    let xy = t_get_el_into_view_scrollXY_no_margin(t_scrollIntoViewIfNeeded_el);
    if(!xy) return;

    if(    (window.scrollX != xy.x)
        || (window.scrollY != xy.y)
    ) {
/*{{{
logXXX(".....CURRENT.....XY=["+window.scrollX+", "+window.xy.y+"]")
logXXX(".....window.scrollTo("+          xy.x+", "+       xy.y+")")
logXXX("%c t_scrollIntoViewIfNeeded_handler: t_is_scrolling=["+t_is_scrolling()+"]", lbH+lf7)
}}}*/

        let html = document.getElementsByTagName("HTML")[0];
        if(!scroll_smooth) html.style.scrollBehavior = "smooth";

        t_window_scrollTo(xy.x, xy.y, "t_scrollIntoViewIfNeeded_handler");

        if(!scroll_smooth) html.style.scrollBehavior = "";
    }
    else {
/*{{{
logXXX(".....UNCHANGED...XY=["+window.xy.x+", "+window.xy.y+"]")
}}}*/
    }

};
/*}}}*/
/*_ t_get_el_into_view_scrollXY {{{*/
/*{{{*/
const SCROLLBAR_WIDTH = 16;
const VIEWPORT_MARGIN =
    {     top    :160
        , left   : 16
        , right  : 16 + SCROLLBAR_WIDTH
        , bottom : 80 + SCROLLBAR_WIDTH
    };
/*}}}*/
let t_get_el_into_view_scrollXY_no_margin = function(el)
{
    return t_get_el_into_view_scrollXY(el, false);
};
let t_get_el_into_view_scrollXY = function(el, with_margin=true)
{
    /*{{{*/
let caller = "t_get_el_into_view_scrollXY";

/*{{{
container.scrollIntoView(true);
- opt_center: (if false): aligned to the nearest edge of the visible area of the scrollable ancestor
- scrollable ancestor...: (node.scrollHeight > node.clientHeight)
container.scrollIntoViewIfNeeded(true);
}}}*/
    /*}}}*/
    /* VIEW {{{*/
    let view_rect
        = {   left   : window.scrollX                          + (with_margin ? VIEWPORT_MARGIN.left   : 16)
            , top    : window.scrollY                          + (with_margin ? VIEWPORT_MARGIN.top    : 16)
            , right  : window.scrollX + window.innerWidth      - (with_margin ? VIEWPORT_MARGIN.right  : 32)
            , bottom : window.scrollY + window.innerHeight     - (with_margin ? VIEWPORT_MARGIN.bottom : 32)
        };

    /*}}}*/
    /* EL {{{*/
    let xy = t_getPosition( el, "t_getPosition");
    if(!xy) return null;

    let e_W = el.clientWidth  || el.offsetWidth;
    let e_H = el.clientHeight || el.offsetHeight;

    let el_rect
        = { left   : xy.x
        ,   top    : xy.y
        ,   right  : xy.x + e_W
        ,   bottom : xy.y + e_H
    };

    /*}}}*/
    /* OVER [top left bottom right] {{{*/
    let over_top    = (el_rect.top    < view_rect.top   );
    let over_left   = (el_rect.left   < view_rect.left  );
    let over_bottom = (el_rect.bottom > view_rect.bottom);
    let over_right  = (el_rect.right  > view_rect.right );

    let may_go_left = (el_rect.right  < window.innerWidth); /* i.e. still visible with no left margin */
    /*}}}*/
/*{{{
console_clear(caller)
logXXX(caller+"("+ get_n_lbl(el)+"):")
if(over_top   ) logXXX("over_top"   )
if(over_left  ) logXXX("over_left"  )
if(over_right ) logXXX("over_right" )
if(over_bottom) logXXX("over_bottom")
logXXX("may_go_left=["+may_go_left+"]")

console.dir(el)
console.dir(document.documentElement)
logXXX(".....view_rect=["+JSON.stringify(view_rect)+"]")
logXXX(".....el_rect=["+JSON.stringify(el_rect)+"]")
}}}*/
    /* scrollX scrollY {{{*/
    let scrollX
        = (over_left  ) ? el_rect.left                         - (with_margin ? VIEWPORT_MARGIN.left   : 16)
        : (over_right ) ? el_rect.right   - window.innerWidth  + (with_margin ? VIEWPORT_MARGIN.right  : 32)
        : may_go_left   ?                   0
        :                                   window.scrollX;

    let scrollY
        = (over_top    ) ? el_rect.top                         - (with_margin ? VIEWPORT_MARGIN.top    : 16)
        : (over_bottom ) ? el_rect.bottom - window.innerHeight + (with_margin ? VIEWPORT_MARGIN.bottom : 32)
        :                                   window.scrollY;

    /*}}}*/
    return { x : scrollX , y : scrollY };
};
/*}}}*/

/*_ t_seek_select_slot_num_to {{{*/
let t_seek_select_slot_num_to = function(to_slot, to_num)
{
/*
logXXX("t_seek_select_slot_num_to("+to_slot+", "+to_num+")")
*/
    /* unhighlight current to_slot */
    let num_selected = ccs[to_slot].num_selected;
    if( num_selected > 0)
        del_el_class(ccs[to_slot].nodes[num_selected-1], "num_selected");

    /* highlight selected to_slot */
    if( to_num > 0) {
        ccs[to_slot].num_selected     = to_num;
        add_el_class(ccs[to_slot].nodes[to_num-1], "num_selected");
    }
};
/*}}}*/
/*_ t_seek_jump_from_slot_num_to {{{*/
let t_seek_jump_from_slot_num_to = function(from_slot, from_num, to_slot, to_num)
{
/*
logXXX("t_seek_select_slot_num_to("+from_slot+", "+from_num+", "+to_slot+", "+to_num+")")
*/
    /* unhighlight current from_slot */
    let num_selected = ccs[from_slot].num_selected;
    if( num_selected > 0)
        del_el_class(ccs[from_slot].nodes[num_selected-1], "num_selected");

    /* highlight abandonned from_slot */
    if(from_num > 0) {
        add_el_class(ccs[from_slot].nodes[from_num-1], "num_selected");
        ccs[from_slot].num_selected     = from_num;
    }

    /* unhighlight landing to_slot */
    if( to_num > 0)
        del_el_class(ccs[  to_slot].nodes[  to_num-1], "num_selected");
};
/*}}}*/
/*_ t_seek_clr_slot_num_select_all {{{*/
let t_seek_clr_slot_num_select_all = function()
{
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if(               !ccs[slot]) continue;
        let num_selected = ccs[slot].num_selected;
        if( num_selected > 0)
            del_el_class(ccs[slot].nodes[num_selected-1], "num_selected");
    }
};
/*}}}*/

/*}}}*/
/* SLOT NUM THUMB {{{*/
/*_ is_a_thumb_el {{{ */
let is_a_thumb_el = function(node)
{
    let caller = "is_a_thumb_el("+get_n_lbl(node)+")";

    let result
        =  node.id.startsWith("thumb_p_")
        || node.id.startsWith("thumb_s_")
        ;

if(result && logging_EVENTS) log(caller+": ...return "+result);
    return result;
};
/* }}} */

/*_ get_num_from_id_or_className_slot  {{{*/
let get_num_from_id_or_className_slot  = function(node, slot)
{
    let caller = "get_num_from_id_or_className_slot(node.id=["+node.id+"], slot=["+slot+"])";

    let num = 0;

    /* thumb_p_4_95 */
    /* thumb_s_4_95 */
    /* 012345678901 */
    if     ( node.id       .startsWith("thumb_p_"+slot+"_") ) num = parseInt( node.id       .substring(10) );
    else if( node.id       .startsWith("thumb_s_"+slot+"_") ) num = parseInt( node.id       .substring(10) );
    else if( node.className.startsWith("class_s_"+slot+"_") ) num = parseInt( node.className.substring(10) );

if(LOG_MAP.T4_SLOT) log(caller+": ...return "+((num != 0) ? num : "NOT A SLOT NUM"));
    return num;
};
/*}}}*/
/*_ get_slot_from_id_or_className  {{{*/
let get_slot_from_id_or_className  = function(node)
{
    let caller = "get_slot_from_id_or_className("+ get_n_lbl(node) +" id=["+node.id+"] node.class=["+node.className+"])";

    let slot   = -1;

    /* ID thumb_p_4_95 */
    /* ID thumb_s_4_95 */
    /* ...012345678... */
    if(      node.id       .startsWith("thumb_p_") ) { slot = parseInt( node.id       .substring(8) ); }
    else if( node.id       .startsWith("thumb_s_") ) { slot = parseInt( node.id       .substring(8) ); }
    else if( node.className.startsWith("class_s_") ) { slot = parseInt( node.className.substring(8) ); }
    /* CLASS select4 */
    /* ......0123456 */
    else {
        if(!node.className.startsWith( "select" ) && node.parentElement) node = node.parentElement;
        if( node.className.startsWith( "select" ) ) {
            slot = parseInt(node.className.substring(6));
        }
    }

    if(slot <= 0)
        slot = last_highlight_slot;

    slot = ((slot >= 0              )
        &&  (slot <  SELECT_SLOT_MAX))
        ?    slot
        :    last_highlight_slot
    ;

if(LOG_MAP.T4_SLOT) log(caller+": ...return "+((slot != 0) ? slot : "NOT A SLOT"));
    return slot;
};
/*}}}*/

/*_ t_get_onWork_EL_slot {{{*/
let t_get_onWork_EL_slot = function()
{
    if(!onWork_SEEK_TOOL) return -1;

    let slot = ((onWork_EL == seeker_PU) || (onWork_EL == seeker_CU) || (onWork_EL.id.startsWith("seekspot")))
        ?       last_highlight_slot
        :       t_get_EL_slot(onWork_EL);

if(LOG_MAP.T4_SLOT) log("t_get_onWork_EL_slot("+get_n_lbl(onWork_EL)+"): ...return ["+slot+"]");

    return slot;
};
/*}}}*/
/*_ t_get_onWork_EL_num {{{*/
let t_get_onWork_EL_num = function()
{
    if(!onWork_SEEK_TOOL) return 0;

    let num
        = (      (onWork_EL == seeker_PU)
            ||   (onWork_EL == seeker_CU)
            ||   (onWork_EL.id.startsWith("seekspot"))
            ||   (onWork_EL.id.startsWith("thumb_p_"))
        )
        ?      last_highlight_num
        :      t_get_EL_num (onWork_EL, 0);

/*
log("t_get_EL_num("+get_n_lbl(onWork_EL)+"): ...return ["+num +"] .. last_highlight_num=["+last_highlight_num+"]");
*/
    return num;
};
/*}}}*/
/*_ t_get_EL_slot {{{*/
let t_get_EL_slot = function(el)
{
    let offset                                  /* 01234567890 */
        = el.id.startsWith("select"    ) ?  6   /* select5_0   */
        : el.id.startsWith("thumb_p_"  ) ?  8   /* thumb_p_5   */
        : el.id.startsWith("thumb_s_"  ) ?  8   /* thumb_s_5   */
        :                                   0
    ;

    let ccX = parseInt( el.id.substring(offset) );
    let slot
        = isNaN(ccX    ) ?   0  /* not found     */
        :      (ccX > 0) ? ccX  /*  ccX=[1..9,0] */
        :                   10; /* slot=[1...10] */

/*
log("t_get_EL_slot("+get_n_lbl(el)+"): ...return ["+slot +"]");
*/
    return slot;
};
/*}}}*/
/*_ t_get_EL_num {{{*/
let t_get_EL_num = function(el, num_default=0)
{
    let offset                                /* 01234567890 */
        = el.id.startsWith("select"    ) ?  8 /* select5_4   */
        : el.id.startsWith("thumb_p_"  ) ? 10 /* thumb_p_5_4 */
        : el.id.startsWith("thumb_s_"  ) ? 10 /* thumb_s_5_4 */
        :                                   0
    ;

    let num = parseInt( el.id.substring(offset) );

    if( isNaN(num) ) num = num_default;

/*
log("t_get_EL_num("+get_n_lbl(el)+"): ...return ["+num +"]");
*/
    return num;
};
/*}}}*/
/*_ t_get_used_slot_dir {{{*/
let t_get_used_slot_dir = function(from_slot, dir)
{
    let slot = from_slot; /* [1..10] */
    for(let step = 1; step <= SELECT_SLOT_MAX; ++step)
    {
        slot = (SELECT_SLOT_MAX + slot + dir) % SELECT_SLOT_MAX;

        if(slot == 0) slot = 10;

        if(ccs[slot] && (ccs[slot].nodes.length > 0)) break;
    }
/*
log("t_get_used_slot_dir("+from_slot+", "+dir+"): ...return "+slot+"");
*/
    return slot;
};
/*}}}*/

/*_ t_clear_slot_sync {{{*/
/*{{{*/
const T_CLEAR_SLOT_SYNC_DELAY            = 500;
let   t_clear_slot_sync_timer            = null;
let   t_clear_slot_sync_cleared_patterns = "";

/*}}}*/
let t_clear_slot_sync = function(slot, pattern, delay=T_CLEAR_SLOT_SYNC_DELAY)
{
    /*{{{*/
    let caller   = "t_clear_slot_sync("+slot+", pattern=["+pattern+"])";
let log_this = LOG_MAP.T4_SLOT;
if( log_this) log("%c "+caller,lb6);

    /*}}}*/
    /* clearTimeout {{{*/
    if(t_clear_slot_sync_timer) {
        clearTimeout( t_clear_slot_sync_timer );
        /*.........*/ t_clear_slot_sync_timer = null;

        if( delay ) {
            delay += 2 * T_CLEAR_SLOT_SYNC_DELAY;
        }
    }

    /*}}}*/

    if((onWork_EL      ) && (slot == t_get_EL_slot(onWork_EL      ))) t_set_onWork_EL(null, caller);

    csv_move_pattern_to_off( pattern );
    t_clear_slot_sync_cleared_patterns += " "+pattern;

    t_clear_slot_sync_timer = setTimeout(t_clear_slot_sync_handler, T_CLEAR_SLOT_SYNC_DELAY);
};
/*}}}*/
/*_ t_clear_slot_sync_handler {{{*/
let t_clear_slot_sync_handler = function()
{
    /*{{{*/
    let caller   = "t_clear_slot_sync_handler: patterns=["+t_clear_slot_sync_cleared_patterns+"]";
let log_this = LOG_MAP.T4_SLOT;
if( log_this) log("%c "+caller,lb6);

    /*}}}*/
    t_clear_slot_sync_timer = null;
/*
     if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv("SOME CLEARED", "want");
*/
    t_onPatternUpdate_no_delay("SOME CLEARED <em class='cc8'>"+ ellipsis_short(t_clear_slot_sync_cleared_patterns) +"</em>", caller);

    t_clear_slot_sync_cleared_patterns = "";
};
/*}}}*/
/*_ cycle_on_last_cleared_pattern {{{*/
const PATTERN_CYCLE_DELAY = 200;

let cycle_on_last_cleared_pattern = function()
{
    let caller = "cycle_on_last_cleared_pattern";
let log_this = LOG_MAP.S2_SELECT;

if(log_this) log(caller+": last_cleared_pattern=["+last_cleared_pattern+"]");

    if( !last_cleared_pattern ) return;

    let next_option
        = (words_options == WORDS_EXACT  ) ? WORDS_SEGMENT
        : (words_options == WORDS_SEGMENT) ? WORDS_HEAD_TAIL
        :                                    WORDS_EXACT
    ;
if(log_this) log("...next_option=["+next_option+"]");

    sync_words_opcycle_button(next_option);

    if(next_option == WORDS_EXACT)
    {
        t_clear( caller );
if(log_this) log_set_TR_SELECT("<em class='big'>CYCLE BACK TO WORDS OPTION "+ get_words_options_symbol(next_option)+"</em>");

        words_options = next_option; store_key_value("words_options", words_options);
        t_sync_styles();

        if( tools_filter_input ) { tools_filter_input.focus(); tools_filter_input.select(); }
        return
    }

    if( t_preventDefault_caller )
        t_restoreDefault("WORDING CYCLE");

    toggle_keyword(next_option);
};
/*}}}*/
/*_ sync_words_opcycle_button {{{*/
let sync_words_opcycle_button = function(word_option)
{
    switch(word_option)
    {
        case WORDS_EXACT:
        add_el_class(words_opcycle_button, "words_exact"    );
        del_el_class(words_opcycle_button, "words_segment"  );
        del_el_class(words_opcycle_button, "words_head_tail");
        break;

        case WORDS_SEGMENT:
        del_el_class(words_opcycle_button, "words_exact"    );
        add_el_class(words_opcycle_button, "words_segment"  );
        del_el_class(words_opcycle_button, "words_head_tail");
        break;

        case WORDS_HEAD_TAIL:
        del_el_class(words_opcycle_button, "words_exact"    );
        del_el_class(words_opcycle_button, "words_segment"  );
        add_el_class(words_opcycle_button, "words_head_tail");
        break;
    }
};
/*}}}*/

/*}}}*/

/** ANIMATION */
/* PULSE {{{*/
/*_ let {{{*/
let PULSE_BLACKLIST_ID_CSV = "tools_node";
const PULSE_IN_DURATION    = 500;
const PULSE_OUT_DURATION   = 500;

let pulsing_id     = "";
let pulsing_id_csv = "";

/*}}}*/
/*_ pulse_id {{{*/
let pulse_id = function(id)
{
    let caller = "pulse_id("+id+")";
if(LOG_MAP.T5_LAYOUT) log(caller);
/*
console.warn(caller);
*/
    if( csv_contains(PULSE_BLACKLIST_ID_CSV, id) ) {
if(LOG_MAP.T5_LAYOUT) log("...IGNORING BLACKLISTED ID");
        return;
    }
    let el;
    el     = get_tool("#"+id);

    if(!el) id = pulse_id_get_alias(id);
    if(!id) return;

if(LOG_MAP.T5_LAYOUT) log(".id_alias=["+id+"]");
    el     = get_tool("#"+id);

    if(!el ) return;
    if(id == pulsing_id) return; /* grouping */

    pulsing_id_csv = csv_add(pulsing_id_csv, id);
/*
csv_log(pulsing_id_csv);
*/

    pulse_id_start();

};
/*}}}*/
/*_ pulse_id_get_alias {{{*/
let pulse_id_get_alias = function(id)
{
    switch(id) {
        default             : return "";
        case       "pat_csv": return "pat_bag";
        case  "tools_filter": return "sel_bag";
        case "words_options": return words_options;
        case     "topTool_x": return "headsup";
        case     "topTool_y": return "headsup";
        case "tools_scrollY": return "thumb_p";
    }
};
/*}}}*/
/*_ pulse_id_start {{{*/
/*{{{*/
const PULSE_START_DELAY = 1000;
let   pulse_id_timer    = null;

/*}}}*/
let pulse_id_start = function()
{
    if(pulse_id_timer) {
        clearTimeout( pulse_id_timer );
        /*.........*/ pulse_id_timer = null;
    }

    set_el_class_on_off(hotwave, "pulsing_id", true);

    if(!pulsing_id) pulse_id_timer = setTimeout(pulse_id_next_handler, PULSE_START_DELAY);
};
/*}}}*/
/*_ pulse_id_next_handler {{{*/
let pulse_id_next_handler = function()
{
    pulsing_id = csv_get(pulsing_id_csv, 1);
    if(!pulsing_id) {
        pulse_id_timer = null; /* done */
        set_el_class_on_off(hotwave, "pulsing_id", false);
t_log_msg(HOTSPOT_HTML_IDLE);
        return;
    }
    else {
        let count = csv_count(pulsing_id_csv);
t_log_msg("<em class='cc"+count+"'>"+pulsing_id+"</em>");
    }

/*
csv_log(pulsing_id_csv);
*/
if(LOG_MAP.T5_LAYOUT) log(".pulse_id_next_handler: .. pulsing_id=["+pulsing_id+"]");

    pulsing_id_csv = csv_del(pulsing_id_csv, pulsing_id);

    set_id_class_on_off(pulsing_id, "pulse_in" , true );

    setTimeout(pulse_id_out_handler, PULSE_IN_DURATION);
};
/*}}}*/
/*_ pulse_id_out_handler {{{*/
let pulse_id_out_handler  = function()
{
    if(!pulsing_id) return;
if(LOG_MAP.T5_LAYOUT) log("..pulse_id_out_handler: pulsing_id=["+pulsing_id+"]");

    set_id_class_on_off(pulsing_id, "pulse_in"    , false);
    set_id_class_on_off(pulsing_id, "pulse_id_out", true );

    setTimeout(pulse_id_done_handler, PULSE_OUT_DURATION);
};
/*}}}*/
/*_ pulse_id_done_handler {{{*/
let pulse_id_done_handler = function()
{
    if(!pulsing_id) return;
if(LOG_MAP.T5_LAYOUT) log("...pulse_id_done_handler: pulsing_id=["+pulsing_id+"]");

    set_id_class_on_off(pulsing_id, "pulse_id_out", false);

    pulse_id_next_handler();
};
/*}}}*/
/*}}}*/
/* MOVE COOLDOWN {{{*/
/*_ move_cooldown_start {{{*/
/*{{{*/
const MOVE_COOLDOWN_DURATION = 300;
const MOVE_COOLDOWN_SHORT    = 100;
let   move_cooldown_timer    = null;

/*}}}*/
let move_cooldown_short = function() { move_cooldown_start( MOVE_COOLDOWN_SHORT ); };
let move_cooldown_start = function(delay=MOVE_COOLDOWN_DURATION)
{
    if(move_cooldown_timer) clearTimeout(move_cooldown_timer  );
    move_cooldown_timer =     setTimeout(move_cooldown_handler, delay);
    t_check_on_seeker_cooldown(true);
};
/*}}}*/
/*_ move_cooldown_handler {{{*/
let move_cooldown_handler = function()
{
    move_cooldown_timer = null; /* done */
    t_clr_has_moved("move_cooldown_handler");
    t_check_on_seeker_cooldown(false);
};
/*}}}*/
/*_ move_cooldown_is_pending {{{*/
let move_cooldown_is_pending = function()
{
    return (move_cooldown_timer != null);
};
/*}}}*/
/*}}}*/
/* MOVE STALL {{{*/
/*_ move_on_stall_start {{{*/
/*{{{*/
const MOVE_ON_STALL_DURATION = 500;
let   move_on_stall_timer    = null;

/*}}}*/
let move_on_stall_start = function()
{
/*
logXXX("move_on_stall_start")
*/
    if(move_on_stall_timer) clearTimeout( move_on_stall_timer );

    move_on_stall_timer = setTimeout(move_on_stall_handler, MOVE_ON_STALL_DURATION);
};
/*}}}*/
/*_ move_on_stall_handler {{{*/
let move_on_stall_handler = function()
{
/*
logXXX("...move_on_stall_handler")
t_log_event_status("move_on_stall_start: TODO .. why has_moved should be freezed when this is called-for ?");
*/
    /* restart from there, after a stall interval */
    move_on_stall_timer = null;
/*
    onDown_XY.x         = 0;
    onDown_XY.y         = 0;
*/
    t_check_on_seeker_clear("move_on_stall_handler");
};
/*}}}*/
/*_ move_on_stall_is_pending {{{*/
let move_on_stall_is_pending = function()
{
/*
if(move_on_stall_timer != null) logXXX("move_on_stall_is_pending")
*/
    return (move_on_stall_timer != null);
};
/*}}}*/
/*}}}*/
/* TOOL FEEDBACK {{{*/
/*_ t_check_on_seeker {{{*/
let t_check_on_seeker = function(dx, dy, d_min)
{
    if(!onWork_SEEK_TOOL) return;
    if(!seeker_CU       ) return;

    let slot =  t_get_onWork_EL_slot();
    let  num =  t_get_onWork_EL_num ();
/*
log("t_check_on_seeker: slot=["+slot+"] num=["+ num+"]");
*/
    if(slot <= 0) return;
    if(num  <= 0) return;

    t_check_on_seeker_MOVED_ENOUGH_dead_zone(dx, dy, d_min, slot, num);

/*
    t_check_on_seeker_wrapped(dx, dy, d_min, slot, num);
*/
};
/*}}}*/
/*_ t_check_on_seeker_cooldown {{{*/
let t_check_on_seeker_cooldown = function(state)
{
/*
    t_check_on_seeker_state(seeker_PU, "on_seeker_cooldown", state);
*/
};
/*}}}*/
/*_ t_check_on_seeker_wrapped {{{*/
let t_check_on_seeker_wrapped = function(dx, dy, d_min, slot, num)
{
    /* SEEKER DEAD-ZONE COLOR .. f(moved dir wrapped) */

    let dx_dy = (Math.abs(dx) > Math.abs(dy)) ? dx : dy;
    let first = 1;
    let  last = ccs[slot].nodes.length;
    let on_seeker_wrapped
        = (dx_dy < 0)
        ?  (num  <= first)
        :  (num  >= last);

    if(on_seeker_wrapped) {
        t_check_on_seeker_state(seeker_PU, "on_seeker_wrapped", true );
    }
    else {
        t_check_on_seeker_state(seeker_PU, "on_seeker_wrapped", false);
    }

};
/*}}}*/
/*_ t_check_on_seeker_MOVED_ENOUGH_dead_zone {{{*/
let t_check_on_seeker_MOVED_ENOUGH_dead_zone = function(dx, dy, d_min, slot, num)
{
    /* innerHTML {{{*/
    seeker_CU.innerHTML        = num +"<sup>/"+ ccs[slot].nodes.length+"</sup>";

    /*}}}*/
    /* MOVED_ENOUGH DEAD ZONE .. (marginLeft marginTop) {{{*/
/*
*/
    let dx_ratio               = 0.1 * dx / d_min;
    let dy_ratio               = 0.1 * dy / d_min;
    seeker_PU.style.marginLeft = (seeker_PU.offsetWidth  * dx_ratio)+"px";
    seeker_PU.style.marginTop  = (seeker_PU.offsetHeight * dy_ratio)+"px";

    /*}}}*/
    /* dir {{{*/
    let  dir = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? MOVE_RIGHT : MOVE_LEFT)
        :                                                        ((onMoveDXY.y > 0) ? MOVE_DOWN  : MOVE_UP  )
    ;
/*{{{
console.clear()
logXXX("t_check_on_seeker_state("+slot+"): ...dir %c"+ dir, lbb+lbH+lf7)
}}}*/
    /*}}}*/
    /* look<URDL>.. f(dir) .. (CSS look_<up_down_left_right>) {{{*/
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_up"   , (dir == MOVE_UP   ));
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_right", (dir == MOVE_RIGHT));
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_down" , (dir == MOVE_DOWN ));
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_left" , (dir == MOVE_LEFT ));

    /*}}}*/
    /* color .. f(slot prev next) .. (CSS .cc<look_slot>) {{{*/
    for(let i = 1; i <= SELECT_SLOT_MAX; ++i)
        del_el_class(seeker_PU, "look_color"+i);

    let look_color = slot;
    if((dir == MOVE_LEFT) || (dir == MOVE_RIGHT))
    {
        let look_slot
            = (dir == MOVE_LEFT)
            ?  get_prev_populated_slot( slot )
            :  get_next_populated_slot( slot );
/*{{{
console.clear()
logXXX("t_check_on_seeker_state("+slot+"): ...look_slot %c"+ look_slot, lbb+lbH+((dir == MOVE_LEFT) ? lf5 : lf4))
}}}*/
        if(look_slot)
            look_color = look_slot;
    }

    t_check_on_seeker_state(seeker_PU, "look_color"+look_color, true);
    /*}}}*/
/* rotation {{{
    let                 rotation  = 45 * Math.min(1, onMoveDXY.x / d_min);
    if(onMoveDXY.y > 0) rotation *= -1;

    seeker_PU.style.transform = "rotate("+ rotation +"deg)";
}}}*/
};
/*}}}*/
/*_ t_check_on_seeker_clear {{{*/
let t_check_on_seeker_clear = function(_caller)
{
    seeker_PU.style.marginLeft = 0;
    seeker_PU.style.marginTop  = 0;

    t_check_on_seeker_state(seeker_PU, "on_seeker_look_up"   , false);
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_right", false);
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_down" , false);
    t_check_on_seeker_state(seeker_PU, "on_seeker_look_left" , false);

/*
    seeker_CU.style.opacity    = 1.0;
*/
};
/*}}}*/
/*_ t_check_on_seeker_state {{{*/
let t_check_on_seeker_state = function(tool_el, class_name, state)
{
    set_id_class_on_off(tool_el.id, class_name, state);

};
/*}}}*/
/*}}}*/

/* LAYOUT STATE */
/*{{{*/
/*_ t_hotspot_in_gutter {{{*/
let t_hotspot_in_gutter = function(h_x, h_y)
{
    if(onWork_PANEL && (onWork_PANEL != hotspot)) return false; /* moving another panel */
    if( hotspot.style.transform != "")            return false;

    return (h_x <= h_W) || (h_x >= (w_W - h_W))
        || (h_y <= h_H) || (h_y >= (w_H - h_H))
    ;
};
/*}}}*/
/*_ t_is_tool_deployed {{{*/
let t_is_tool_deployed = function(el)
{
    if(!el) return false;
let log_this = LOG_MAP.T5_LAYOUT;

    let reject_reason = "";

    if     (el.classList.contains("hidden") || el.parentNode.classList.contains("hidden")) reject_reason = "hidden";
    else if(el.style.display   == "none"    || el.parentNode.style.display   == "none"   ) reject_reason = "display:none";
    else if(el.classList.contains("pinned") || el.parentNode.classList.contains("pinned")) reject_reason = "pinned";

    let result = (reject_reason == "");

if(log_this) log("%c t_is_tool_deployed("+get_n_lbl(el)+" "+el.className+"): ...return "+result+" %c "+reject_reason, lb7,lbF);
    return result;
};
/*}}}*/
/*_ t_is_a_spreaded_tool {{{*/
let t_is_a_spreaded_tool = function(el)
{
let log_this = LOG_MAP.T5_LAYOUT;

    if(!el) return false;
    let reject_reason = "";

    /* may currently be hidden but not pinned */
    if(el.classList.contains("pinned") || el.parentNode.classList.contains("pinned")) reject_reason = "PINNED";
    let map = tools_map.get(el); if(!map.selected)                                    reject_reason = "NOT SELECTED";

    let result = (reject_reason == "");

if(log_this) log("%c t_is_a_spreaded_tool("+get_n_lbl(el)+" "+el.className+"): ...return "+result+" %c "+reject_reason, lb7,lbF);
    return result;
};
/*}}}*/
/*_ t_collect_spreaded_tools_bounding_box {{{*/
/*{{{*/
let           spreaded_tools = [];
/*}}}*/
let t_collect_spreaded_tools_bounding_box = function(bb_dx_dy, viewport)
{
    let some_tools_to_unhide = "";
    spreaded_tools = [];
    for(let i=1; i < deployable_tools.length; ++i)
    {
        let panel = deployable_tools[i];
        if( panel && t_is_a_spreaded_tool(panel))
        {
            spreaded_tools.push(panel);

            if(panel.classList.contains("hidden"))
            {
                some_tools_to_unhide += panel.id+" ";

                del_el_class(panel, "hidden");
            }
            bb_dx_dy = t_expand_bounding_box(panel, bb_dx_dy, viewport);
        }
    }
    return some_tools_to_unhide;
};
/*}}}*/
/*_ t_is_a_selected_panel {{{*/
let t_is_a_selected_panel = function(panel)
{
let log_this = LOG_MAP.T5_LAYOUT;

    let reject_reason = "";

    let      map =  panel ? tools_map.get(panel) : null;      let  logX1 = lbA;
    if     (!map          ) {     reject_reason = "NO SUCH PANEL"; logX1 = lb0; }
    else if(!map.selected ) {     reject_reason =  "NOT SELECTED"; logX1 = lb8; }

    let result = (reject_reason == "");

if(log_this) log("%c t_is_a_selected_panel("+get_n_lbl(panel)+"): ...return "+result+" %c "+reject_reason, lb5,logX1);
    return result;
};
/*}}}*/
/*_ t_get_first_selected_tool_panel t_get_next_selected_tool_panel t_get_prev_selected_tool_panel {{{*/
let t_get_next_selected_tool_panel = function(panel    ) { return t_get_near_selected_tool_panel(panel,  1); };
let t_get_prev_selected_tool_panel = function(panel    ) { return t_get_near_selected_tool_panel(panel, -1); };
let t_get_near_selected_tool_panel = function(panel,dir)
{
    let found_panel = false;

    let n_min = 1; /* SKIP [hotspot] */
    let n_max = deployable_tools.length;

    for(let n = n_min; n <= n_max; ++n)
    {
        let i = (dir > 0) ? n-1 : (n_max - n);
        let p = deployable_tools[i];
        if(!found_panel) { found_panel = (p == panel); continue; }
        if(    t_is_a_selected_panel(p)
            && t_is_a_spreaded_tool (p)
        )
            return p;
    }
    return null;
};
let t_get_first_selected_tool_panel = function()
{
    for(let i=1; i< deployable_tools.length; ++i) {
        let panel = deployable_tools[i];
        if(    t_is_a_selected_panel(panel)
            && t_is_a_spreaded_tool (panel)
        )
            return panel;
    }
    return null;
};
/*}}}*/
/*_ t_get_NW_NE_SE_SW_from_to {{{*/
let t_get_NW_NE_SE_SW_from_to = function(from_x,from_y, to_x,to_y)
{
    return ((from_y > to_y) ? "N" : "S")
        +  ((from_x > to_x) ? "W" : "E")
    ;
};
/*}}}*/
/*_ t_dragged_dir_show {{{*/
let t_dragged_dir_show = function(hiding_tools)
{
    let nw_ne_se_sw = t_get_NW_NE_SE_SW_from_to(topTool.x,topTool.y, pivotXY.x, pivotXY.y);
/*
log("t_dragged_dir_show: "+nw_ne_se_sw+" ["+topTool.x+" "+topTool.y+"]");
*/

    /* tools_drag_button {{{*/
    if(tools_drag_button)
    {
        let rotate_className = "rotate_"+nw_ne_se_sw;
        if(!has_el_class(tools_drag_button, rotate_className))
        {
            del_el_class(tools_drag_button, "rotate_NE");
            del_el_class(tools_drag_button, "rotate_SE");
            del_el_class(tools_drag_button, "rotate_SW");
            del_el_class(tools_drag_button, "rotate_NW");
            add_el_class(tools_drag_button,  rotate_className);

            del_el_class(pivspot_c        , "rotate_NE");
            del_el_class(pivspot_c        , "rotate_SE");
            del_el_class(pivspot_c        , "rotate_SW");
            del_el_class(pivspot_c        , "rotate_NW");
            add_el_class(pivspot_c        ,  rotate_className);

            del_el_class(hotspot_c        , "rotate_NE");
            del_el_class(hotspot_c        , "rotate_SE");
            del_el_class(hotspot_c        , "rotate_SW");
            del_el_class(hotspot_c        , "rotate_NW");
            add_el_class(hotspot_c        ,  rotate_className);

        }

        let layout_className = "layout_"+nw_ne_se_sw;
        if(!has_el_class(hotring, layout_className))
        {
            del_el_class(hotring          , "layout_NE");
            del_el_class(hotring          , "layout_SE");
            del_el_class(hotring          , "layout_SW");
            del_el_class(hotring          , "layout_NW");
            add_el_class(hotring          ,  layout_className);
        }

        if( hiding_tools ) add_el_class(hotring, "gutter");
        else               del_el_class(hotring, "gutter");
    }
    /*}}}*/
/*
t_log_msg(        parseInt(pivotXY.x)
         +"<br>"+ parseInt(pivotXY.y)
         +"<br>"+ nw_ne_se_sw
);
*/
};
/*}}}*/
/*}}}*/

/** LOG */
/*{{{*/
/* LOG_MAP {{{*/
/*_ {{{*/
let LOG_MAP = {
    EV0_LISTEN     : false,
    EV1_DOWN       : false,
    EV2_MOVE       : false,
    EV3_UP         : false,
    EV4_LONG_PRESS : false,
    EV5_CB         : false,
    EV6_CHANGED    : false,
    EV7_DISPATCH   : false,
    EV8_FLOATLOG   : false,
    S1_RANGE       : false,
    S2_SELECT      : false,
    S3_SLOT        : false,
    T0_STORE       : false,
    T1_PIVOT       : false,
    T2_SPREAD      : false,
    T3_GRID        : false,
    T4_SLOT        : false,
    T5_LAYOUT      : false,
   };

let LOG_COLORS = [
  [ "#FFFFFF" , "#101010" ] /* 0 */
, [ "#964B00" , "#202020" ] /* 1 */
, [ "#FF0000" , "#101010" ] /* 2 */
, [ "#FFA500" , "#202020" ] /* 3 */
, [ "#FFFF00" , "#101010" ] /* 4 */
, [ "#9ACD32" , "#202020" ] /* 5 */
, [ "#6495ED" , "#101010" ] /* 6 */
, [ "#EE82EE" , "#202020" ] /* 7 */
, [ "#A0A0A0" , "#101010" ] /* 8 */
, [ "#FFFFFF" , "#202020" ] /* 9 */
, [ "#CFB53B" , "#101010" ] /* A */
, [ "#C0C0C0" , "#202020" ] /* B */
];

let log_count  = 0;
/* }}} */
/*_ logging_something {{{*/
let logging_something = function()
{
    return     logging_EVENTS
        ||     logging_HIGHLIGHT
        ||     LOG_MAP.EV0_LISTEN
        ||     logging_TOOLBAR

    /* EVENTS */
        ||     LOG_MAP.EV1_DOWN
        ||     LOG_MAP.EV2_MOVE
        ||     LOG_MAP.EV3_UP
        ||     LOG_MAP.EV4_LONG_PRESS
        ||     LOG_MAP.EV5_CB
        ||     LOG_MAP.EV6_CHANGED
        ||     LOG_MAP.EV7_DISPATCH

    /* LOGGING */
    /*  ||     LOG_MAP.EV8_FLOATLOG*/

    /* SELECTION */
        ||     LOG_MAP.S1_RANGE
        ||     LOG_MAP.S2_SELECT
        ||     LOG_MAP.S3_SLOT

    /*  ||     LOG_MAP.T0_STORE*/

    /* LAYOUT */
        ||     LOG_MAP.T1_PIVOT
        ||     LOG_MAP.T2_SPREAD
        ||     LOG_MAP.T3_GRID
        ||     LOG_MAP.T4_SLOT
        ||     LOG_MAP.T5_LAYOUT

    ;
};
/*}}}*/
/*_ logging_toggle {{{ */

let logging_toggle = function(keyword)
{
let caller = "logging_toggle("+keyword+")";
log(caller);

    let changed = "";
    switch( keyword ) {
        case KEY_LOG_EVENTS    : logging_EVENTS         = !logging_EVENTS         ; changed = keyword+"="+logging_EVENTS        ; store_key_state("logging_EVENTS"     , logging_EVENTS         ); break;
        case KEY_LOG_HIGHLIGHT : logging_HIGHLIGHT      = !logging_HIGHLIGHT      ; changed = keyword+"="+logging_HIGHLIGHT     ; store_key_state("logging_HIGHLIGHT"  , logging_HIGHLIGHT      ); break;
        case KEY_LOG_TOOLBAR   : logging_TOOLBAR        = !logging_TOOLBAR        ; changed = keyword+"="+logging_TOOLBAR       ; store_key_state("logging_TOOLBAR"    , logging_TOOLBAR        ); break;
        case "EV0_LISTEN"      : LOG_MAP.EV0_LISTEN     = !LOG_MAP.EV0_LISTEN     ; changed = keyword+"="+LOG_MAP.EV0_LISTEN    ; store_key_state("EV0_LISTEN"         , LOG_MAP.EV0_LISTEN     ); break;
        case "EV1_DOWN"        : LOG_MAP.EV1_DOWN       = !LOG_MAP.EV1_DOWN       ; changed = keyword+"="+LOG_MAP.EV1_DOWN      ; store_key_state("EV1_DOWN"           , LOG_MAP.EV1_DOWN       ); break;
        case "EV2_MOVE"        : LOG_MAP.EV2_MOVE       = !LOG_MAP.EV2_MOVE       ; changed = keyword+"="+LOG_MAP.EV2_MOVE      ; store_key_state("EV2_MOVE"           , LOG_MAP.EV2_MOVE       ); break;
        case "EV3_UP"          : LOG_MAP.EV3_UP         = !LOG_MAP.EV3_UP         ; changed = keyword+"="+LOG_MAP.EV3_UP        ; store_key_state("EV3_UP"             , LOG_MAP.EV3_UP         ); break;
        case "EV4_LONG_PRESS"  : LOG_MAP.EV4_LONG_PRESS = !LOG_MAP.EV4_LONG_PRESS ; changed = keyword+"="+LOG_MAP.EV4_LONG_PRESS; store_key_state("EV4_LONG_PRESS"     , LOG_MAP.EV4_LONG_PRESS ); break;
        case "EV5_CB"          : LOG_MAP.EV5_CB         = !LOG_MAP.EV5_CB         ; changed = keyword+"="+LOG_MAP.EV5_CB        ; store_key_state("EV5_CB"             , LOG_MAP.EV5_CB         ); break;
        case "EV6_CHANGED"     : LOG_MAP.EV6_CHANGED    = !LOG_MAP.EV6_CHANGED    ; changed = keyword+"="+LOG_MAP.EV6_CHANGED   ; store_key_state("EV6_CHANGED"        , LOG_MAP.EV6_CHANGED    ); break;
        case "EV7_DISPATCH"    : LOG_MAP.EV7_DISPATCH   = !LOG_MAP.EV7_DISPATCH   ; changed = keyword+"="+LOG_MAP.EV7_DISPATCH  ; store_key_state("EV7_DISPATCH"       , LOG_MAP.EV7_DISPATCH   ); break;
        case "EV8_FLOATLOG"    : LOG_MAP.EV8_FLOATLOG   = !LOG_MAP.EV8_FLOATLOG   ; changed = keyword+"="+LOG_MAP.EV8_FLOATLOG  ; store_key_state("EV8_FLOATLOG"       , LOG_MAP.EV8_FLOATLOG   ); break;
        case "S1_RANGE"        : LOG_MAP.S1_RANGE       = !LOG_MAP.S1_RANGE       ; changed = keyword+"="+LOG_MAP.S1_RANGE      ; store_key_state("S1_RANGE"           , LOG_MAP.S1_RANGE       ); break;
        case "S2_SELECT"       : LOG_MAP.S2_SELECT      = !LOG_MAP.S2_SELECT      ; changed = keyword+"="+LOG_MAP.S2_SELECT     ; store_key_state("S2_SELECT"          , LOG_MAP.S2_SELECT      ); break;
        case "S3_SLOT"         : LOG_MAP.S3_SLOT        = !LOG_MAP.S3_SLOT        ; changed = keyword+"="+LOG_MAP.S3_SLOT       ; store_key_state("S3_SLOT"            , LOG_MAP.S3_SLOT        ); break;
        case "T0_STORE"        : LOG_MAP.T0_STORE       = !LOG_MAP.T0_STORE       ; changed = keyword+"="+LOG_MAP.T0_STORE      ; store_key_state("T0_STORE"           , LOG_MAP.T0_STORE       ); break;
        case "T1_PIVOT"        : LOG_MAP.T1_PIVOT       = !LOG_MAP.T1_PIVOT       ; changed = keyword+"="+LOG_MAP.T1_PIVOT      ; store_key_state("T1_PIVOT"           , LOG_MAP.T1_PIVOT       ); break;
        case "T2_SPREAD"       : LOG_MAP.T2_SPREAD      = !LOG_MAP.T2_SPREAD      ; changed = keyword+"="+LOG_MAP.T2_SPREAD     ; store_key_state("T2_SPREAD"          , LOG_MAP.T2_SPREAD      ); break;
        case "T3_GRID"         : LOG_MAP.T3_GRID        = !LOG_MAP.T3_GRID        ; changed = keyword+"="+LOG_MAP.T3_GRID       ; store_key_state("T3_GRID"            , LOG_MAP.T3_GRID        ); break;
        case "T4_SLOT"         : LOG_MAP.T4_SLOT        = !LOG_MAP.T4_SLOT        ; changed = keyword+"="+LOG_MAP.T4_SLOT       ; store_key_state("T4_SLOT"            , LOG_MAP.T4_SLOT        ); break;
        case "T5_LAYOUT"       : LOG_MAP.T5_LAYOUT      = !LOG_MAP.T5_LAYOUT      ; changed = keyword+"="+LOG_MAP.T5_LAYOUT     ; store_key_state("T5_LAYOUT"          , LOG_MAP.T5_LAYOUT      ); break;
    }

log_add_TR_LAYOUT("<em class='big'>TOGGLE LOGGING ["+ keyword +"] changed=["+changed+"]</em>");
    if(changed)
    {
        t_log_show_buttons();

        if(keyword == "EV8_FLOATLOG"  ) t_log_set_floatlog  ( LOG_MAP.EV8_FLOATLOG   ); /* set both [DISPLAY OPTION] and saved [LOGGING OPTION] */

        t_sync_transcript_events();
        t_sync_layout     (caller);
        t_sync_doc_LOG_MAP(caller);

    }
    return changed;
};
/* }}} */
/*}}}*/
/* SEEK LOG {{{*/
/*_ t_log_seekspot_toggle {{{*/
/* {{{*/
let   log_seekspot;
/*}}}*/
let t_log_seekspot_toggle = function(state="toggle")
{
    if(!seekspot) return;

    log_seekspot
        = (state == "toggle") ? !log_seekspot
        :                        state
    ;
    if(!log_seekspot) {
        seekspot_U.style.display = "none";
        seekspot  .style.display = "none";
        seekspot_D.style.display = "none";
    }
logXXX("t_log_seekspot_toggle: ...log_seekspot=["+log_seekspot+"]");
/*
*/
};
/*}}}*/
/*_ t_pin_seekspot_toggle {{{*/
/* {{{*/
let   pin_seekspot;
/*}}}*/
let t_pin_seekspot_toggle = function(state="toggle")
{
    if(!seekspot) return;

    pin_seekspot
        = (state == "toggle") ? !pin_seekspot
        :                        state
    ;

/*
logXXX("t_pin_seekspot_toggle: ...pin_seekspot=["+pin_seekspot+"]");
*/
};
/*}}}*/
/*_ t_log_seekspot {{{*/
/*{{{*/
const SEEKSPOT_SPACING = 2;
let   SYMBOL_SEEK_SPOT = SYMBOL_UP_ARROW;
let seekspot_arrow;
let seekspot_caption;
/*}}}*/
let t_log_seekspot = function(innerText)
{
    /*{{{*/
let   caller = "t_log_seekspot";
let log_this = LOG_MAP.T4_SLOT;
/*
console_clear(caller)
if( log_this ) log("%c"+SYMBOL_BULB+"%c "+caller+"(%c"+innerText+"%c): %c"+onSeek_XY.x+" "+onSeek_XY.y,lb2,lbA,lb5,lbA,lb4);
logXXX("container_selected=["+get_n_lbl(container_selected)+"] %c onSeek_XY=["+onSeek_XY.x+" "+onSeek_XY.y+"]", lbF+lf7)
*/

    /*}}}*/
    /* [seekspot_arrow] {{{*/
    if(!seekspot      ) return;

    if(!seekspot_arrow) {
        seekspot_arrow             = get_tool("#seekspot_arrow");
        seekspot.style.borderWidth = SEEKSPOT_SPACING;
    }

    seekspot.style  .display          = "block";
    seekspot_U.style.display          = "table-cell";
    seekspot_D.style.display          = "table-cell";

    /*}}}*/
    /* OVERLAP .. (container_selected-PAGE) {{{*/
    let seek_H    = container_selected ? container_selected.offsetHeight : 16;
    let seek_X    = container_selected ? container_selected_x            : onDown_XY.x;

    let page_H    = document.body.parentElement.clientHeight;

    let above_H   = Math.max(SEEKSPOT_SPACING, onSeek_XY.y);
    let inset_H   = Math.max(SEEKSPOT_SPACING, seek_H);

    above_H       = Math.min(page_H - inset_H, above_H);

    let below_H   = Math.max(SEEKSPOT_SPACING, page_H - (above_H + inset_H));

    /*}}}*/
/*{{{
    seekspot_arrow.style.marginLeft = (onSeek_XY.x - seekspot_arrow.offsetWidth / 2) +"px";
    seekspot_arrow.style.marginLeft = (onSeek_XY.x                                 ) +"px";
}}}*/
    /* ARROW {{{*/
    seekspot_arrow.style.marginLeft = (seek_X                  - SEEKSPOT_SPACING   ) +"px";

    /*}}}*/
    /* UP {{{*/
    seekspot_U.style.height         = (above_H                 - SEEKSPOT_SPACING   ) +"px";

    /*}}}*/
    /* AREA {{{*/
    seekspot.style  .top            = (above_H                                      ) +"px";
    seekspot.style  .height         = (        inset_H                              ) +"px";

    /*}}}*/
    /* DOWN {{{*/
    seekspot_D.style.height         = (                below_H - SEEKSPOT_SPACING   ) +"px";

    /*}}}*/
    /* CAPTION .. (above or below) {{{*/
    seekspot_caption
        = (seekspot_caption   ==   seekspot_U)
        ? (above_H < (page_H/4)) ? seekspot_D : seekspot_U
        : (below_H < (page_H/4)) ? seekspot_U : seekspot_D
    ;
    let empty_caption = (seekspot_caption == seekspot_D) ? seekspot_U : seekspot_D;

    if(seekspot_caption == seekspot_U) { add_el_class(seekspot,"caption_U"); del_el_class(seekspot,"caption_D"); }
    else                               { del_el_class(seekspot,"caption_U"); add_el_class(seekspot,"caption_D"); }
    /*}}}*/
    /* CAPTION TEXT {{{*/
    seekspot_caption.innerHTML
        = "<pre>"+ innerText
        +          (pin_seekspot ? " <em class='cc8' style='float:right;'>"+SYMBOL_PUSH_PIN+"</em>" : "")
        + LF+     ".. WH ["  + window.innerWidth +" "+ window.innerHeight +"]"
        +         ".. SEEK ["+ onSeek_XY.x       +" "+ onSeek_XY.y        +"]"
        +         ".. XY ["  + onDown_XY.x       +" "+ onDown_XY.y        +"]"
        + LF + "-----------------------------------------------------------"
        + LF + t_log_get_ui_status()
        + LF + t_log_get_ev_status()
        + "</pre>"
    ;

    empty_caption   .innerHTML
        = ""
    ;
    /*}}}*/

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg(innerText);
};
/*}}}*/
/*}}}*/
/* FLY LOG {{{*/
/*_ t_log_layout_changed {{{*/
let t_log_layout_changed = function(_caller)
{
    t_toggle_fly_div_magnified( false );

    fly_div.style.left       = "50%"   ;
    fly_div.style.top        = "1em"   ;

};
/*}}}*/
/*_ t_log_set_floatlog {{{*/
/*{{{*/
let div_ccX = 0;

/*}}}*/
let t_log_set_floatlog = function(state)
{

    /* [LOGGING OPTION] takes precedence */
    if(LOG_MAP.EV8_FLOATLOG) state = true;

    if(LOG_MAP.EV8_FLOATLOG) add_el_class(fly_log, "disabled");
    else                     del_el_class(fly_log, "disabled");

    /* UI button .. (distinct [DISPLAY] and [LOGGING] symbol) */
    fly_log.innerHTML =                         state ? (LOG_MAP.EV8_FLOATLOG ? SYMBOL_GEAR : SYMBOL_CHECK_MARK) : SYMBOL_MENU;
    set_id_class_on_off(fly_log.id, "checked" , state);

    /* TOOLS UI */
    set_el_class_on_off(fly_div   , "floatlog", state);

    /* TOOLS BEHAVIOR */
    fly_log_checked      = state;
    div_ccX              = 0;

    /* CLEAR [fly_div] */
    t_log_set_innerHTML("");
};
/*}}}*/
/*_ t_log_on_innerHTML_changed {{{*/
let t_log_on_innerHTML_changed = function()
{

    if( fly_div.innerHTML ) {
        t_log_clr_innerHTML();                                  /* schedule a cleanup */
        set_el_class_on_off(fly_div, "pause_animation", true  );
        set_el_class_on_off(fly_div, "stacking"       , true  );
    } else {
        set_el_class_on_off(fly_div, "pause_animation", false );
        set_el_class_on_off(fly_div, "stacking"       , false );
    }
};
/*}}}*/
/*_ t_toggle_fly_div_magnified {{{*/
let t_toggle_fly_div_magnified = function(new_state="toggle")
{
    let caller = "t_toggle_fly_div_magnified("+new_state+")";
let log_this   = (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T5_LAYOUT);
if( log_this) t_log_event_status(caller, lf9);

    fly_div_magnified
        = (new_state == "toggle")
        ? !has_el_class(fly_div, "magnified")
        :  new_state
    ;

    /* switch from [LOAD-TIME-LAYOUT] to [USER-POSITIONING] */
    if(new_state == "toggle")
    {
        fly_div.style.right = "unset";

        let dx = onDown_XY.x - onDown_PANEL_XY.x;
        let dy = onDown_XY.y - onDown_PANEL_XY.y;
        fly_div.style.transformOrigin = ""+dx+"px  "+dy+"px";
    }

    if( fly_div_magnified ) add_el_class(fly_div, "magnified");
    else                    del_el_class(fly_div, "magnified");

    t_update_store3_site_layout(caller+": fly_div_magnified=["+fly_div_magnified+"]");

if(log_this) log("fly_div_magnified: %c "+fly_div_magnified+" ", (fly_div_magnified ? lb9 : lb8));
};
/*}}}*/
/*}}}*/
/* STAGE LOG {{{*/
/*_ t_log_stage {{{*/
let t_log_stage = function(stage, something_clicked, pattern_clicked, e_target, parent_div)
{
    let innerHTML = ""
        +       " <em class='cc"+stage.color+"'>"+  strip_UL( stage.level    ) +"</em>"
        +       " <em class='cc"+stage.color+"'>"+  strip_UL( stage.context  ) +"</em>"
        +       " <em class='cc"+stage.color+"'>"+  strip_UL( stage.action   ) +"</em>"
        +   ( pattern_clicked
            ? ( " <em class='cc"+stage.color+"'>"+            e_target.title   +"</em>")
            : ( " <em class='cc"+stage.color+"'>"+ get_n_lbl( parent_div     ) +"</em>"))
    ;

    t_log_stage_msg((something_clicked ? STAGE_1_INPUT : STAGE_2_ACTION), innerHTML);
};
/*}}}*/
/*_ t_log_stage_msg {{{*/
/*{{{*/
const STAGE_1_INPUT  = "stage_1_input" ;
const STAGE_2_ACTION = "stage_2_action";
const STAGE_3_RESULT = "stage_3_result";

const STAGE_1_MISSED = "stage_1_missed";
const STAGE_2_MISSED = "stage_2_missed";
const STAGE_3_MISSED = "stage_3_missed";
const STAGE_1_MORE   = "stage_1_more"  ;
const STAGE_3_MORE   = "stage_3_more"  ;

/*}}}*/
let t_log_stage_msg = function(stage, msg)
{
    /*{{{*/
let log_this = LOG_MAP.EV8_FLOATLOG;
if( log_this) log("%c t_log_stage_msg("+stage+" , "+msg+") ", lbF+lb7);

    /*}}}*/
    /* prev_div {{{*/
    let prev_div
        = (fly_div.childNodes.length > 0)
        ?  fly_div.childNodes[fly_div.childNodes.length-1]
        : null;
if( log_this) log("...childNodes.length=["+fly_div.childNodes.length+"]");

    /*}}}*/
    /* prev_stage {{{*/
    let prev_stage
        = has_el_class(prev_div, STAGE_1_INPUT ) ? STAGE_1_INPUT
        : has_el_class(prev_div, STAGE_2_ACTION) ? STAGE_2_ACTION
        : has_el_class(prev_div, STAGE_3_RESULT) ? STAGE_3_RESULT
        :                                         "STAGE_NONE";
if( log_this) log("......prev_stage=["+ prev_stage +"]");

    /*}}}*/
    /* is_prev_stage_continuation {{{*/
    let ui_status = t_log_get_ui_status();
    let ev_status = t_log_get_ev_status();
    let is_prev_stage_continuation
        =(     (ui_status == SAME_UI_STATUS)
            && (ev_status == SAME_EV_STATUS)
        );

    /*}}}*/
    /* PREV STAGE MISSED {{{*/
    if( !is_prev_stage_continuation ) {
        switch(stage) {
            case STAGE_1_INPUT : if(prev_stage != STAGE_3_RESULT) add_el_class(prev_div, STAGE_3_MISSED); break;
            case STAGE_2_ACTION: if(prev_stage != STAGE_3_RESULT) add_el_class(prev_div, STAGE_3_MISSED); break;
            case STAGE_3_RESULT: if(prev_stage != STAGE_3_RESULT) add_el_class(prev_div, STAGE_3_MISSED); break;
        }
    }
    else {
        if(has_el_class(prev_div    , STAGE_3_MISSED))            del_el_class(prev_div, STAGE_3_MISSED); /* no bot radius */
        if(             prev_stage == STAGE_3_RESULT )            add_el_class(prev_div, STAGE_3_MORE  ); /* bottom dashed */
    }
    /*}}}*/
    /* THIS STAGE MISSED {{{*/
    let stage_missed = "";
    switch(stage) {
        case     STAGE_1_INPUT : if( is_prev_stage_continuation )         stage_missed = STAGE_1_MORE  ;                      break;
        case     STAGE_2_ACTION: if(!is_prev_stage_continuation )         stage_missed = STAGE_1_MISSED;                      break;
        case     STAGE_3_RESULT: if(!is_prev_stage_continuation )         stage_missed = STAGE_1_MISSED+" "+STAGE_2_MISSED;   break;
    }
    /*}}}*/
    /* symbol {{{*/
    let symbol = "";
    switch(stage) {
        case STAGE_1_INPUT : symbol = SYMBOL_STAGE1_INPUT ; break;
        case STAGE_2_ACTION: symbol = SYMBOL_STAGE2_ACTION; break;
        case STAGE_3_RESULT: symbol = SYMBOL_STAGE3_RESULT; break;

    }
    /*}}}*/
    /* color {{{*/
    if(!is_prev_stage_continuation)
        div_ccX = (div_ccX + 1) % 10;

    /*}}}*/
    /* tooltip {{{*/
    let title = ui_status + LF + ev_status;

    /*}}}*/
    /* message {{{*/
    t_log_add_innerHTML("<div class='cc"+div_ccX+" "+stage+" "+stage_missed+"' title='"+title+"'>"+symbol+" "+msg+"</div>");

    /*}}}*/
    /* default stage close {{{*/
    if(stage != STAGE_3_RESULT) {
        if(t_log_stage_close_timer) clearTimeout(t_log_stage_close_timer);
        t_log_stage_close_timer   =   setTimeout(t_log_stage_close_handler, T_LOG_STAGE_CLOSE_DELAY);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_log_stage_close_handler {{{*/
/*{{{*/
const T_LOG_STAGE_CLOSE_DELAY = T_STANDBY1_DELAY + 500;
let t_log_stage_close_timer;

/*}}}*/
let t_log_stage_close_handler = function()
{
let log_this = LOG_MAP.EV8_FLOATLOG;

    let last_div
        = (fly_div.childNodes.length > 0)
        ?  fly_div.childNodes[fly_div.childNodes.length-1]
        : null;
if( log_this) log("t_log_stage_close_handler: ...childNodes.length=["+fly_div.childNodes.length+"]");
    if(!last_div) return;

/* last_stage {{{*/
    let last_stage
        = has_el_class(last_div, STAGE_1_INPUT ) ? STAGE_1_INPUT
        : has_el_class(last_div, STAGE_2_ACTION) ? STAGE_2_ACTION
        : has_el_class(last_div, STAGE_3_RESULT) ? STAGE_3_RESULT
        :                                          "STAGE_NONE";
if( log_this) log("......last_stage=["+ last_stage +"] ["+last_div.textContent+"]");

    if(last_stage != STAGE_3_RESULT) add_el_class(last_div, STAGE_3_MISSED);

/*}}}*/
/* last_div.classList {{{*/
/*
    if(    !last_div.classList.contains(STAGE_1_INPUT )
        && !last_div.classList.contains(STAGE_1_MISSED)) add_el_class(last_div, STAGE_1_MISSED);

    if(    !last_div.classList.contains(STAGE_2_ACTION)
        && !last_div.classList.contains(STAGE_2_MISSED)) add_el_class(last_div, STAGE_2_MISSED);

    if(    !last_div.classList.contains(STAGE_3_RESULT)
        && !last_div.classList.contains(STAGE_3_MISSED)) add_el_class(last_div, STAGE_3_MISSED);
*/
/*}}}*/
};
/*}}}*/
/*}}}*/
/* FLY LOG {{{*/
/*_ t_log_pat_off_bak_bin_csv {{{*/
/*{{{*/
let t_log_pat_off_bak_bin_csv_prev;

/*}}}*/
let t_log_pat_off_bak_bin_csv = function(phase_update_pushed_staged, have_want_done)
{
    /* csv_count [pat off bak bin] {{{*/
    let pat_c  = csv_count(pat_csv);
    let off_c  = csv_count(off_csv);
    let bak_c  = csv_count(bak_csv);
    let bin_c  = csv_count(bin_csv);

    /*}}}*/
    /* [same_result_msg] {{{*/
    let same_result_msg = "";
    switch(phase_update_pushed_staged)
    {
        case SYMBOL_UPDATE: {
            t_log_pat_off_bak_bin_csv_prev = { pat_c:pat_c , off_c:off_c , bak_c:bak_c , bin_c:bin_c };
        }
        break;

        case SYMBOL_STAGE : {
            if(    (pat_c == t_log_pat_off_bak_bin_csv_prev.pat_c)
                && (off_c == t_log_pat_off_bak_bin_csv_prev.off_c)
                && (bak_c == t_log_pat_off_bak_bin_csv_prev.bak_c)
                && (bin_c == t_log_pat_off_bak_bin_csv_prev.bin_c)
            )
                same_result_msg = "AS ASSIGNED";
            else
                t_log_pat_off_bak_bin_csv_prev = { pat_c:pat_c , off_c:off_c , bak_c:bak_c , bin_c:bin_c };
        }
        break;

        case SYMBOL_RESULT: {
            if(    (pat_c == t_log_pat_off_bak_bin_csv_prev.pat_c)
                && (off_c == t_log_pat_off_bak_bin_csv_prev.off_c)
                && (bak_c == t_log_pat_off_bak_bin_csv_prev.bak_c)
                && (bin_c == t_log_pat_off_bak_bin_csv_prev.bin_c)
            )
                same_result_msg = "AS STAGED";

            t_log_pat_off_bak_bin_csv_prev = null;
        }
        break;

        default:
        log("t_log_pat_off_bak_bin_csv: BACKSTAGE PHASE ["+phase_update_pushed_staged+"]");
        break;
    }
    /*}}}*/
    /* t_log_msg {{{*/
    let html = "";

    if(same_result_msg)
    {
        let phase_color     = (phase_update_pushed_staged == SYMBOL_STAGE) ? "cc6" :  "cc4";
        if(!html) html      = " <em  class='have "+ phase_color +"'>"+ same_result_msg +"</em>";
    }
    else {
        if(pat_c && off_c) {
            html+=            " <em  class='"+ have_want_done +" cc1'>pat "+ pat_c
                +             " <sup class='"+ have_want_done +" cc5'>off "+ off_c +"</sup>"
                +             "</em>";
        }
        else {
            if(pat_c) html += " <em  class='"+ have_want_done +" cc1'>pat "+ pat_c +"</em>";
            if(off_c) html += " <em  class='"+ have_want_done +" cc5'>off "+ off_c +"</em>";
        }
        if(bak_c) html     += " <em  class='"+ have_want_done +" cc2'>bak "+ bak_c +"</em>";
        if(bin_c) html     += " <em  class='"+ have_want_done +" cc0'>bin "+ bin_c +"</em>";

        if(!html) html      = " <em  class='have cc8'>ALL BAGS EMPTY</em>";
    }

    t_log_msg( phase_update_pushed_staged + html);
    /*}}}*/

/*{{{
csv_log(bak_csv, phase_update_pushed_staged+": bak_csv [x"+csv_count(bak_csv)+"] ")
if(log_this) if(sel_csv) csv_log(sel_csv, "sel_csv [x"+csv_count(sel_csv)+"] "); else log("%c sel_csv [x"+csv_count(sel_csv)+"] %c UNCHANGED ["+sel_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(pat_csv) csv_log(pat_csv, "pat_csv [x"+csv_count(pat_csv)+"] "); else log("%c pat_csv [x"+csv_count(pat_csv)+"] %c UNCHANGED ["+pat_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(off_csv) csv_log(off_csv, "off_csv [x"+csv_count(off_csv)+"] "); else log("%c off_csv [x"+csv_count(off_csv)+"] %c UNCHANGED ["+off_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bak_csv) csv_log(bak_csv, "bak_csv [x"+csv_count(bak_csv)+"] "); else log("%c bak_csv [x"+csv_count(bak_csv)+"] %c UNCHANGED ["+bak_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bin_csv) csv_log(bin_csv, "bin_csv [x"+csv_count(bin_csv)+"] "); else log("%c bin_csv [x"+csv_count(bin_csv)+"] %c UNCHANGED ["+bin_csv+"]", lbF+lb9, lbF+lb0);
}}}*/
};
/*}}}*/
/*_ t_log_msg {{{*/
let t_log_msg = function(msg)
{
    /* TODO log("%c "+msg+" ", lbF+lb0);*/

    t_log_add_innerHTML("<div class='stage_0_log'>"+ msg +"</div>");
};
/*}}}*/
/*_ t_log_add_innerHTML {{{*/
/*{{{*/
let T_HOTRING_POSTPONED_DELAY =  500;
let T_HOTRING_CLEANUP_DELAY   = 3000; /* can be shortened by user with a click on any [t_log_stage_msg] item */
let t_log_clr_innerHTML_timer;
let t_log_clr_innerHTML_postponed = false;
/*}}}*/
let t_log_add_innerHTML = function(innerHTML)
{
    if(!innerHTML) return;

    fly_div.insertAdjacentHTML("beforeend", innerHTML);

    t_log_on_innerHTML_changed();
};
/*}}}*/
/*_ t_log_set_innerHTML {{{*/
let t_log_set_innerHTML = function(innerHTML)
{
    fly_div.innerHTML = innerHTML;

    t_log_on_innerHTML_changed();
};
/*}}}*/
/*_ t_log_clr_innerHTML {{{*/
const T_FLOATLOG_STACK_MAX = 16;

let t_log_clr_innerHTML = function()
{
    /* clearTimeout {{{*/
    if( t_log_clr_innerHTML_timer ) {
        clearTimeout( t_log_clr_innerHTML_timer );
        /*.........*/ t_log_clr_innerHTML_timer = null;
    }

    if(!fly_div.innerHTML) return;
    /*}}}*/
    /* MARK "removing" entries .. (beyond T_FLOATLOG_STACK_MAX) {{{*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked)
    {
        let more_on_stage = false;
        let    next_child = 0;
        let    stack_size = fly_div.childNodes.length;
        while((stack_size > T_FLOATLOG_STACK_MAX) || (more_on_stage && (stack_size > 0)))
        {
            let child = fly_div.childNodes[next_child++];
            add_el_class(child, "removing");

            --stack_size;
            more_on_stage
                =        has_el_class(fly_div.childNodes[next_child], STAGE_1_MORE  )
                ||       has_el_class(fly_div.childNodes[next_child], STAGE_3_MORE  )
                || (    !has_el_class(fly_div.childNodes[next_child], STAGE_1_INPUT )
                    &&  !has_el_class(fly_div.childNodes[next_child], STAGE_1_MISSED))
            ;
        }
        t_log_clr_innerHTML_timer   = setTimeout(t_log_clr_innerHTML_handler, T_HOTRING_CLEANUP_DELAY);
    }
    /*}}}*/
    /* POST CLEANUP HANDLER {{{*/
    else {
        for(let i=0; i < fly_div.childNodes.length; ++i)
            add_el_class(fly_div.childNodes[i], "fading");
/*
log("t_log_clr_innerHTML_postponed = "+t_log_clr_innerHTML_postponed);
*/
        let delay = t_log_clr_innerHTML_postponed
            ?       T_HOTRING_POSTPONED_DELAY
            :       T_HOTRING_CLEANUP_DELAY;
        t_log_clr_innerHTML_timer   = setTimeout( t_log_clr_innerHTML_handler, delay);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_log_clr_top_bunch {{{*/
let t_log_clr_top_bunch = function()
{
    let stack_size = fly_div.childNodes.length;
    if( stack_size == 0) return;;

    let more_on_stage = false;
    let    next_child = 0;
    do {
        let child = fly_div.childNodes[next_child++];
        add_el_class(child, "removing");

        --stack_size;
        more_on_stage
            =        has_el_class(fly_div.childNodes[next_child], STAGE_1_MORE  )
            ||       has_el_class(fly_div.childNodes[next_child], STAGE_3_MORE  )
            || (    !has_el_class(fly_div.childNodes[next_child], STAGE_1_INPUT )
                &&  !has_el_class(fly_div.childNodes[next_child], STAGE_1_MISSED))
        ;
    }
    while(more_on_stage && (stack_size > 0));

    t_log_clr_innerHTML_timer   = setTimeout(t_log_clr_innerHTML_handler, 0);
};
/*}}}*/
/*_ t_log_clr_innerHTML_handler {{{*/
let t_log_clr_innerHTML_handler = function(_caller="timer")
{
let log_this = LOG_MAP.EV8_FLOATLOG;
if( log_this) log("t_log_clr_innerHTML_handler .. CALLED BY "+ _caller);
    /* clearTimeout {{{*/
    if( t_log_clr_innerHTML_timer ) {
        clearTimeout( t_log_clr_innerHTML_timer);
        t_log_clr_innerHTML_timer = null;
    }
    /*}}}*/
    /* POSTPONE cleanup .. f(some onWork_EL selected) {{{*/
    if(/*TODO (_caller == "timer") &&*/ (onWork_EL != null))
    {
if( log_this) log("HOTSPOT CLEANUP POSTPONED BY %c"+get_n_lbl(onWork_EL), lbF+lb0);
        t_log_clr_innerHTML_postponed = true;
        t_log_clr_innerHTML_timer     = setTimeout( t_log_clr_innerHTML_handler, T_HOTRING_POSTPONED_DELAY);

        return;
    }
/*
log("%c HOTSPOT CLEANUP NOT POSTPONED", lbF+lb0);
*/
    /*}}}*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) {
        /* REMOVE "removing" entries {{{*/
        let child_removed;
        for(let i=0; i < fly_div.childNodes.length; i += (child_removed ? 0 : 1))
        {
            child_removed = false;
            let child = fly_div.childNodes[i];
            if( has_el_class(child, "removing") )
            {
                fly_div.removeChild(child);
                child_removed = true;
            }
        }
        /*}}}*/
    }
    else {
        /* DO THE CLEANUP {{{*/
if( log_this) log("HOTSPOT CLEANUP TRIGGERED BY "+ _caller+"");

        t_log_clr_innerHTML_postponed = false;
        t_log_set_innerHTML("");

        /*}}}*/
    }

};
/*}}}*/
/*}}}*/
/* INFO LOG {{{*/
/*_ t_log_behavior {{{*/
let t_log_behavior = function()
{
    /* activate doc playground or tool transcript */
    if(!t_doc_div_clear("doc_log_div") )
        t_tools_panel_select(transcript2);

    t_clear();
    t_assert_behavior();
};
/*}}}*/
/*_ t_log_regex {{{*/
let t_log_regex = function()
{
    /* activate doc playground or tool transcript */
    if(!t_doc_div_clear("doc_log_div") )
        t_tools_panel_select(transcript2);

    let sample;
    let html = "";
    html += "<hr><em class='cc1'>get_first_word:</em>"; /*{{{*/
    sample = "word_1 word_2 word_3";
    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample                 +"</div>";
    html += "RESULT=<div class='eso_div'>"+ get_first_word( sample, "t_log_regex") +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>get_first_word:</em>"; /*{{{*/
    sample += "--- !! @@ ## $$ %% ~~ ^^ ** (( ))"+      sample;
    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample                 +"</div>";
    html += "RESULT=<div class='eso_div'>"+ get_first_word( sample, "t_log_regex") +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>get_word_at_offset:</em>"; /*{{{*/

    let ruler_tens = "_________1_________2_________3_________4_________5_________6_________7_________8_________9_______100_______110___";
    let ruler_unit = "123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123";
    let ruler_off  = "|_|_____|___|_____|___|_____|___|__|_|_____|___|_____||___|||______|___|___________________________________|___||";
    sample         = "Le papillon qui est la forme 'adulte' de la chenille, éclos durant l'été entre juin et septembre selon le climat.";

    if( !IN_WEBVIEW ) ruler_off = vbar_to_up_arrow(           ruler_off );
    sample                      = replace_character_entities( sample    );

    html
        += "<div style='font-size:150%' class='cc0'>"
        +  sample     +"<br>"
        +  ruler_off  +"<br>"
        +  ruler_unit +"<br>"
        +  ruler_tens
        +  "</div>"
    ;

    let offset;
    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+mPadStart(offset =  1, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset =  3, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset =  9, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 13, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 19, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 33, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  "</div>"
    ;
    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 36, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 38, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 44, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 48, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 54, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 55, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  "</div>"
    ;

    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 59, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 60, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 61, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 68, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset = 72, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset =108, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset =112, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  " <em class='cc8'>offset "+mPadStart(offset =113, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em><br>"
        +  "</div>"
    ;

    html
        += "<div style='float:left'>"
        +  " <em class='cc8'>offset "+mPadStart(offset = -5, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em>"
        +  " <em class='cc8'>offset "+mPadStart(offset =150, 3)+"</em> <em class='cc4'>"+ get_word_at_offset(sample, offset) +"</em>"
        +  "</div>"
    ;

    html += "<br style='clear:both;'>";
    /*}}}*/
    html += "<hr><em class='cc1'>strip_CR_LF:</em>"; /*{{{*/
    sample = "...LINE1 ENDING WITH CR"+CR+"...LINE2 ENDING WITH CRLF"+CR+LF+"...LINE3 ENDING WITH LF"+LF;
    html += "<br>SAMPLE=<div class='eso_div'>"+                     sample    +"</div>";
    html += "RESULT=<div class='eso_div'>"+       strip_CR_LF(  sample  ) +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>trim_empty_lines(alnum_filter=false):</em>"; /*{{{*/
    sample
        += "NEXT LINE: only space chars='"+LF
        +  "             "+LF
        +  "'"+LF
        +  "NEXT LINE: only non-word chars='"+LF
        +  "--- !! @@ ## $$ %% ~~ ^^ ** (( ))"+LF
        +  "'"+LF
    ;

    html += "<br>SAMPLE=<div class='eso_div'>"+                     sample         +"</div>";
    html += "RESULT=<div class='eso_div'>"+  trim_empty_lines(  sample, false) +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>trim_empty_lines(alnum_filter=true):</em>"; /*{{{*/
    html += "<br>SAMPLE=<div class='eso_div'>"+                     sample        +"</div>";
    html += "RESULT=<div class='eso_div'>"+  trim_empty_lines(  sample, true) +"</div>";

    /*}}}*/
    if     (t_is_a_selected_panel( transcript2 )) log_set_TR_RESULT    ( html );
    else if(doc_log_div                         ) t_log_transcript_info( html );
};
/*}}}*/
/*}}}*/
/* EVENT LOG {{{*/
/* {{{*/
let   SAME_EV_STATUS = ".. same EVENT";
let   SAME_UI_STATUS = ".. same ITEMS";
let t_last_ev_status;
let t_last_ui_status;
/*}}}*/
/*_ t_log_event_status {{{*/
let t_log_event_status = function(_caller, logX1=lf8)
{
    log(  "%c"+ _caller+" EVENT STATUS :"+ LF
        + "%c"+ t_log_get_ui_status()    + LF
        + "%c"+ t_log_get_ev_status()
        , lbL, lbC+logX1, lbR+lb0
    );

    /* NO CACHE WHILE LOGGING .. (to preserve fly_log tooltips) */
    t_last_ui_status = "";
    t_last_ev_status = "";
};
/*}}}*/
/*_ t_log_event_UP {{{*/
let t_log_event_UP = function(caller, clicked, dblclicked, lXX)
{
    let msg
        = "%c"+                                               caller+":" + LF
        + "...behavior_TOUCH_ELSE_DESKTOP "+ behavior_TOUCH_ELSE_DESKTOP + LF
        + ".......t_preventDefault_caller "+ t_preventDefault_caller     + LF
        + "........t_event_consumed_cause "+ t_event_consumed_cause      + LF
        + ".......................clicked "+ clicked                     + LF
        + "....................dblclicked "+ dblclicked
    ;

    log(msg, lXX);
};
/*}}}*/
/*_ t_log_get_ui_status {{{*/
let t_log_get_ui_status = function()
{
    let caller = "t_log_get_ui_status";

    /* SEEK TOOL */
    let ui_details  = "";
    if(                   (onWork_SEEK_TOOL )) { ui_details += " .. A SEEK TOOL"; }
    else if(t_is_onSeek_EL(onWork_EL        )) { ui_details += " .. A SEEK EL"  ; }
    if(ui_details && t_seeker_PU_is_showing()) {
        let on_off_screen
            = t_node_is_off_screen(seeker_PU)
            ? "OFF SCREEN" : "ON SCREEN";  ui_details += " .. "+ on_off_screen;
    }

    /* SOME TOOL */
    if(!ui_details) {
        if(t_is_a_tool_el    ( onWork_EL, caller )) ui_details += " ...(A TOOL EL)"           + LF;
        if(!ui_details)                             ui_details  = " ...(NOT A TOOL)"          + LF;
    }

    let ui_status
        =  " onWork_EL.......: "+    get_n_lbl( onWork_EL    )
        +                                       ui_details     + LF
        +  " onWork_PANEL....: "+    get_n_lbl( onWork_PANEL ) + LF
        +  " .pivot_PANEL....: "+    get_n_lbl( pivot_PANEL  )
    ;

    if( t_last_ui_status  != ui_status)
        t_last_ui_status   = ui_status;
    return t_last_ui_status;
};
/*}}}*/
/*_ t_log_get_ev_status {{{*/
let t_log_get_ev_status = function()
{
    let ev_status
        =  (t_preventDefault_caller ? ("EVENT CAPTURED BY "+t_preventDefault_caller              + LF) : "")
        +  (t_event_consumed_cause  ? ("EVENT CONSUMED BY "+t_event_consumed_cause               + LF) : "")
        +                             (".......has_moved: "+(has_moved    ? has_moved    : "NO") + LF)
        +                             ("....has_scrolled: "+(has_scrolled ? has_scrolled : "NO") + LF)
        +                              "..window.scrollY: "+window.scrollY                       + LF
        +                              ".......onSeek_XY: "+onSeek_XY.x+" "+onSeek_XY.y
        +                               " <em class='cc8'>"+onSeek_XY.label+"</em> "
    ;
    if( t_last_ev_status  != ev_status)
        t_last_ev_status   = ev_status;
    return t_last_ev_status;
};
/*}}}*/
/*_ t_clr_log_status {{{*/
let t_clr_log_status = function()
{
    t_event_consumed_cause   = "";
    t_preventDefault_caller  = "";
    t_last_ui_status = "";
    t_last_ev_status = "";
};
/*}}}*/
/*}}}*/
/* UI LOG {{{*/
/*_ t_log_show_buttons {{{ */
let t_log_show_buttons = function()
{
    if( !dev_log_map ) return;

    dev_log_map.innerHTML = ""
        + "<em class='toolbag_button "+ (logging_EVENTS         ? "cc9" : "cc8") +"'>"+ KEY_LOG_EVENTS    +"</em>"
        + "<em class='toolbag_button "+ (logging_HIGHLIGHT      ? "cc9" : "cc8") +"'>"+ KEY_LOG_HIGHLIGHT +"</em>"
        + "<em class='toolbag_button "+ (logging_TOOLBAR        ? "cc9" : "cc8") +"'>"+ KEY_LOG_TOOLBAR   +"</em>"

        + "<em class='toolbag_button "+ (LOG_MAP.EV0_LISTEN     ? "cc9" : "cc8") +"'>"+ "EV0_LISTEN"      +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV1_DOWN       ? "cc1" : "cc8") +"'>"+ "EV1_DOWN"        +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV2_MOVE       ? "cc2" : "cc8") +"'>"+ "EV2_MOVE"        +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV3_UP         ? "cc3" : "cc8") +"'>"+ "EV3_UP"          +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV4_LONG_PRESS ? "cc4" : "cc8") +"'>"+ "EV4_LONG_PRESS"  +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV5_CB         ? "cc5" : "cc8") +"'>"+ "EV5_CB"          +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV6_CHANGED    ? "cc6" : "cc8") +"'>"+ "EV6_CHANGED"     +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV7_DISPATCH   ? "cc7" : "cc8") +"'>"+ "EV7_DISPATCH"    +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.EV8_FLOATLOG   ? "cc9" : "cc8") +"'>"+ "EV8_FLOATLOG"    +"</em>"

        + "<em class='toolbag_button "+ (LOG_MAP.S1_RANGE       ? "cc1" : "cc8") +"'>"+ "S1_RANGE"        +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.S2_SELECT      ? "cc2" : "cc8") +"'>"+ "S2_SELECT"       +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.S3_SLOT        ? "cc3" : "cc8") +"'>"+ "S3_SLOT"         +"</em>"

        + "<em class='toolbag_button "+ (LOG_MAP.T0_STORE       ? "cc9" : "cc8") +"'>"+ "T0_STORE"        +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.T1_PIVOT       ? "cc1" : "cc8") +"'>"+ "T1_PIVOT"        +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.T2_SPREAD      ? "cc2" : "cc8") +"'>"+ "T2_SPREAD"       +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.T3_GRID        ? "cc3" : "cc8") +"'>"+ "T3_GRID"         +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.T4_SLOT        ? "cc4" : "cc8") +"'>"+ "T4_SLOT"         +"</em>"
        + "<em class='toolbag_button "+ (LOG_MAP.T5_LAYOUT      ? "cc5" : "cc8") +"'>"+ "T5_LAYOUT"       +"</em>"

/*{{{
        + "1 \u2610 \u2611 \u2620 \u2622 \u2638"+"<br>"
        + "2 \u2654 \u2655 \u2656 \u2657 \u2658"+"<br>"
        + "3 \u2659 \u2699 \u26A0 \u26A1 \u26AA"+"<br>"
        + "4 \u26AB \u26AC \u26D4 \u2705 \u2708"+"<br>"
        + "5 \u270B \u2710 \u2713 \u2714 \u2715"+"<br>"
        + "6 \u2716 \u2717 \u2718 \u271A \u271B"+"<br>"
        + "7 \u2724 \u2726 \u272D \u2731 \u2737"+"<br>"
        + "8 \u274C \u274D \u274E \u274F \u2753"+"<br>"
        + "9 \u2754 \u275D \u275E \u276E \u276F"+"<br>"
        + "A \u2770 \u2771 \u2774 \u2775 \u2794"+"<br>"
        + "B \u2795 \u2796 \u2797 \u2798 \u2799"+"<br>"
        + "C \u279A \u27A4 \u27EA \u27EB \u2AF6"+"<br>"
        + "D \u2AFB \u2AFC \u2AFD \u2B06 \u21E7"+"<br>"
}}}*/
    ;

};
/* }}} */
/*_ t_log_tags {{{*/
let t_log_tags = function()
{
    let caller = "t_log_tags";
if(LOG_MAP.T5_LAYOUT) log(caller+": COLOR-STAMPING MODULE TAGS:");
    let dom_load_tags_el = get_tool("#dom_load_tags"); if(!dom_load_tags) return;

    let id, el;

    id = "dom_tools_html"; if(el = get_tool("#"+id+"_tag")) DOM_TOOLS_HTML_TAG = el.innerHTML;
    id =  "dom_grid_html"; if(el = get_tool("#"+id+"_tag")) DOM_GRID_HTML_TAG  = el.innerHTML;

  /*id =   "dom_host_css";                                  DOM_HOST_CSS_TAG   = t_get_document_css_tag(id);*/
    id =   "dom_host_css";                                  DOM_HOST_CSS_TAG   = t_get_tool_css_tag    (id);
    id =  "dom_tools_css";                                  DOM_TOOLS_CSS_TAG  = t_get_tool_css_tag    (id);
    id =   "dom_grid_css";                                  DOM_GRID_CSS_TAG   = t_get_tool_css_tag    (id);

    let m_class = "em_missing";
    dom_load_tags_el.innerHTML = ""
        + ("LOAD :"+LF)
        + ((typeof DOM_LOAD_TAG       == "undefined") ? "<em class='"+m_class+"'>DOM_LOAD_TAG       *</em>" : "<em class='cc"+ get_tag_hour( DOM_LOAD_TAG       ) +"'>"+ DOM_LOAD_TAG        +"</em>")
        + ("HOST :"+LF)
        + ((typeof DOM_HOST_CSS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_HOST_CSS_TAG   *</em>" : "<em class='cc"+ get_tag_hour( DOM_HOST_CSS_TAG   ) +"'>"+ DOM_HOST_CSS_TAG    +"</em>")
        + ((typeof DOM_WORDING_JS_TAG == "undefined") ? "<em class='"+m_class+"'>DOM_WORDING_JS_TAG *</em>" : "<em class='cc"+ get_tag_hour( DOM_WORDING_JS_TAG ) +"'>"+ DOM_WORDING_JS_TAG  +"</em>")
        + ("GRID :"+LF)
        + ((typeof DOM_GRID_CSS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_GRID_CSS_TAG   *</em>" : "<em class='cc"+ get_tag_hour( DOM_GRID_CSS_TAG   ) +"'>"+ DOM_GRID_CSS_TAG    +"</em>")
        + ((typeof DOM_GRID_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_GRID_JS_TAG    *</em>" : "<em class='cc"+ get_tag_hour( DOM_GRID_JS_TAG    ) +"'>"+ DOM_GRID_JS_TAG     +"</em>")
        + ((typeof DOM_GRID_HTML_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_GRID_HTML_TAG  *</em>" : "<em class='cc"+ get_tag_hour( DOM_GRID_HTML_TAG  ) +"'>"+ DOM_GRID_HTML_TAG   +"</em>")
        + ("TOOLS :"+LF)
        + ((typeof DOM_TOOLS_HTML_TAG == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_HTML_TAG *</em>" : "<em class='cc"+ get_tag_hour( DOM_TOOLS_HTML_TAG ) +"'>"+ DOM_TOOLS_HTML_TAG  +"</em>")
        + ((typeof DOM_TOOLS_CSS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_CSS_TAG  *</em>" : "<em class='cc"+ get_tag_hour( DOM_TOOLS_CSS_TAG  ) +"'>"+ DOM_TOOLS_CSS_TAG   +"</em>")
        + ((typeof DOM_SELECT_JS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_SELECT_JS_TAG  *</em>" : "<em class='cc"+ get_tag_hour( DOM_SELECT_JS_TAG  ) +"'>"+ DOM_SELECT_JS_TAG   +"</em>")
        + ((typeof DOM_TOOLS_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_JS_TAG   *</em>" : "<em class='cc"+ get_tag_hour( DOM_TOOLS_JS_TAG   ) +"'>"+ DOM_TOOLS_JS_TAG    +"</em>")
    ;
if(LOG_MAP.T5_LAYOUT) log(strip_html(dom_load_tags_el.innerHTML));

};
/*}}}*/
/*_ t_get_document_css_tag {{{*/
let t_get_document_css_tag = function(id)
{
    let el = document.getElementById(id+"_tag");
    if(!el) {
        el               = document.createElement("SPAN");
        el.id            = id+"_tag";
        el.style.display = "none";
        document.body.appendChild( el );
    }

    let style = getComputedStyle( el );
    return strip_pat(style.getPropertyValue("content"), DOUBLE_QUOTE);
};
/*}}}*/
/*_ t_get_tool_css_tag {{{*/
let t_get_tool_css_tag = function(id)
{
    let tag = "";

    let el       = get_tool("#"+id)  ;
    if( el ) tag = get_el_sheet_first_rule_text_content(el);

    if(!tag) {
        el               = document.createElement("SPAN");
        el.id            = id+"_tag";
        el.style.display = "none";
        shadow_root.appendChild( el );

        try {
            let  cs = getComputedStyle(el);
            let txt = cs.content;
            tag     = txt.includes(id) ? "COMPUTED: "+txt : "";
        }
        catch(ex) {
logXXX("%c t_get_tool_css_tag("+id+"):"+ ex, lbH+lf8);
/*
*/
        }
    }
/*
logXXX("t_get_tool_css_tag: ...return ["+tag+"]");
*/
    return tag;
};
/*}}}*/
/*_ get_el_sheet_first_rule_text_content {{{*/
let get_el_sheet_first_rule_text_content = function(el)
{
    let tag = "";
    try {
        if( el) {
            let txt = el.sheet.cssRules[0].cssText;
            let x_1 = txt.indexOf    ('"');
            let x_2 = txt.lastIndexOf('"');
            txt     = txt.substring(x_1+1, x_2);
            tag     = txt.includes(el.id) ? "SHEET: "+txt : "";
        }
    }
    catch(ex) {
console.log("%c get_el_sheet_first_rule_text_content("+el.id+"):"+ ex, lbH+lf8);
/*
*/
    }
    return tag;
};
/*}}}*/
/*_ t_clear {{{*/
/*{{{*/
let T_CLEAR_INTERVAL_MIN = 500;
let t_clear_timeStamp    = 0;
/*}}}*/
let t_clear = function(_caller)
{
    /* ...debounce {{{*/
    let caller = "t_clear .. CALLED BY ["+_caller+"]";
let log_this = logging_something();
if( log_this) log(caller);
if( log_this) log("...t_preventDefault_caller=["+t_preventDefault_caller+"]");
/*
if( t_preventDefault_has_been_called("t_clear") ) return;
*/
    let          this_MS = new Date().getTime();
    let t_clear_interval = this_MS - t_clear_timeStamp;
    if( t_clear_interval < T_CLEAR_INTERVAL_MIN)
    {
if(log_this) log(caller+": debounce: "+t_clear_interval+" < (T_CLEAR_INTERVAL_MIN "+T_CLEAR_INTERVAL_MIN+")");
        return;
    }
    t_clear_timeStamp = this_MS;

    /* clear log buffers */
    log();

    /* clear browser selection */
    window.getSelection().removeAllRanges();

    /*}}}*/
    /* TARGET ACTION {{{*/
    let target
        = caller.includes("pat_bag" ) ? "pat_bag"
        : caller.includes("EM"      ) ?      "em"
        : caller.includes("INPUT"   ) ?   "input"
        : caller.includes("cycle"   ) ?   "cycle"
        :                               "default"
        ;

    let action
        = caller.includes("dblclick") ? "dblclick"
        : was_a_dblclick()            ? "dblclick"
        : caller.includes("onclick" ) ? "onclick"
        :                               "default"
    ;

    let target_action = target+"."+action;

if(log_this) log(".target_action=["+target_action+"]");
    /*}}}*/
    switch(target_action) {
        /* IGNORE: TARGET=[EM INPUT] ACTION=[onclick .. dblclick] {{{*/
        case    "em.onclick": case    "em.dblclick":
        case "input.onclick": case "input.dblclick":
        case "cycle.default":

        break;
        /*}}}*/
        /* CLEAR : TARGET=[default ] ACTION=[        dblclick] {{{*/
        case "default.dblclick":
if(log_this) log(".fall through case default...");
        /*}}}*/
        /* CLEAR : default {{{*/
        default:
if(!LOG_MAP.EV3_UP) console_clear(caller + (onWork_PANEL ? " on "+get_n_lbl(onWork_PANEL) : ""));

        /* LOG BUFFER */
        log();
if( LOG_MAP.EV3_UP) log("%c t_clear("+caller+") console logs preserved for %c LOG_MAP.EV3_UP", lb4, lbF+lb3);

        /* LOG TOOLS */
        log_clr_TR1(caller);
        log_clr_TR2(caller);

        /* bring back empty pinned panels within window viewport */
        if( transcript1.classList.contains("pinned") ) t_move_panel_within_window(transcript1);
        if( transcript2.classList.contains("pinned") ) t_move_panel_within_window(transcript2);

        /* DOCUMENT DIV */
        t_doc_div_clear("doc_evt_div");
        t_doc_div_clear("doc_log_div");

        /*}}}*/
    }
    t_cache_init_by(caller);
};
/*}}}*/
/*_ t_move_panel_within_window {{{*/
let t_move_panel_within_window = function(panel)
{
    let caller = "t_move_panel_within_window("+get_n_lbl(panel)+")";
let log_this = logging_something();

    let xy = t_getPosition(panel, caller);

    let margin      = hotring.clientWidth;

    let x_max = w_W - margin;
    let y_max = w_H - margin;
    let x_min =       0;
    let y_min =       0;

    let                                               panel_moved = false;
    if(xy.x > x_max) { panel.style.left = x_max+"px"; panel_moved =  true; }
    if(xy.x < x_min) { panel.style.left = x_min+"px"; panel_moved =  true; }
    if(xy.y > y_max) { panel.style.top  = y_max+"px"; panel_moved =  true; }
    if(xy.y < y_min) { panel.style.top  = y_min+"px"; panel_moved =  true; }

if(log_this && panel_moved) log(caller+": .. moved from XY=["+xy.x+" "+xy.y+"] .. within ["+ x_max+" "+ y_max+"]");
};
/*}}}*/
/*}}}*/
/* TRANSCRIPTS LOG {{{*/
/*_ t_log_transcript {{{*/
let t_log_transcript_event_top = function(html) { t_log_transcript(html, "doc_evt_div", "log_sep_top"); };
let t_log_transcript_event_bot = function(html) { t_log_transcript(html, "doc_evt_div", "log_sep_bot"); };
let t_log_transcript_info      = function(html) { t_log_transcript(html, "doc_log_div", ""           ); };
let t_log_transcript           = function(                         html,  div_id,       log_class   )
{
    /* LOG STAGE STYLE {{{*/
    if(LOG_MAP.EV7_DISPATCH && (LOG_MAP.EV8_FLOATLOG || fly_log_checked))
    {
        let stage;
        switch(log_class)
        {
            case  "log_sep_top": stage = STAGE_1_INPUT ; break;
            default            : stage = STAGE_2_ACTION; break;
            case  "log_sep_bot": stage = STAGE_3_RESULT; break;
        }
        t_log_add_innerHTML("<div class='"+stage+"'>"+html+"</div>");
    }
    /*}}}*/
/*{{{
logXXX("t_log_transcript")
logXXX("...div_id......=["+ div_id    +"]")
logXXX("...log_class...=["+ log_class +"]")
logXXX("........html...=["+ html      +"]")
}}}*/
    /* TO [transcript1] [transcript2] {{{*/
    if(div_id == "doc_evt_div")
    {
        if(    (onWork_EL    !=      transcript1)
            && (onWork_PANEL !=      transcript1)
            && t_is_a_selected_panel(transcript1)
        )
            log_add_TR_EVENT(html);
    }
    else {
        if(    (onWork_EL         != transcript2)
            && (onWork_PANEL      != transcript2)
            && t_is_a_selected_panel(transcript2)
        )
            log_add_TR_LAYOUT(html);
    }
    /*}}}*/
    /* TO [doc_evt_div] [doc_log_div] {{{*/
    if(div_id == "doc_evt_div") t_doc_div_add("doc_evt_div", "<div class='"+log_class+"'>"+html+"</div>");
    else                        t_doc_div_add("doc_log_div", "<div class='"+log_class+"'>"+html+"</div>");
    /*}}}*/
    if     (log_class == "log_sep_top") log_sep_top(html);
    else if(log_class == "log_sep_bot") log_sep_bot(html);
};
/*}}}*/
/*}}}*/
/* DOCUMENT LOG {{{*/
/*_ t_doc_div_clear {{{*/
/*{{{*/
let   DOC_EVT_DIV_EMPTY  = "<span style='font-size:500%;'>"+SYMBOL_GEAR+"</span>";
let   DOC_LOG_DIV_EMPTY  = "<span style='font-size:500%;'>"+SYMBOL_BULB+"</span>";
let   DOC_EVT_DIV_HEADER = "<span style='font-size:200%;'>"+SYMBOL_GEAR+"</span>";
let   DOC_LOG_DIV_HEADER = "<span style='font-size:200%;'>"+SYMBOL_BULB+"</span>";

let   doc_evt_div;
let   doc_log_div;
/*}}}*/
let t_doc_div_clear = function(div_id)
{
    let doc_div = null;

    switch(div_id)
    {
        case "doc_evt_div":
        if(  !doc_evt_div ) doc_evt_div = document.getElementById(div_id);
        if(  !doc_evt_div ) return false;
        doc_div           = doc_evt_div;
        break;

        case "doc_log_div":
        if(  !doc_log_div ) doc_log_div = document.getElementById(div_id);
        if(  !doc_log_div ) return false;
        doc_div           = doc_log_div;
        break;
    }
    doc_div.innerHTML
        = (doc_div == doc_log_div) ? DOC_LOG_DIV_EMPTY
        : (doc_div == doc_evt_div) ? DOC_EVT_DIV_EMPTY
        :                            ""
    ;
    doc_div.cleared   = "cleared";
    return true;
};
/*}}}*/
/*_ t_doc_div_add {{{*/
let t_doc_div_add = function(div_id, html)
{
    if( !html.trim()) return;
    switch(div_id)
    {
        case "doc_evt_div":
        if(  !doc_evt_div ) doc_evt_div = document.getElementById("doc_evt_div");
        if(  !doc_evt_div ) return false;
        doc_div           = doc_evt_div;

        break;

        case "doc_log_div":
        if(  !doc_log_div ) doc_log_div = document.getElementById("doc_log_div");
        if(  !doc_log_div ) return false;
        doc_div           = doc_log_div;

        break;
    }

    if( doc_div.cleared ) {
        doc_div.cleared        = ""      ;
        doc_div.innerHTML      = (div_id == "doc_evt_div") ? DOC_EVT_DIV_HEADER : DOC_LOG_DIV_HEADER;
        t_add_clearpin_to_panel( doc_div);
    }

    doc_div.innerHTML += html;

    return true;
};
/*}}}*/
/*}}}*/
/*}}}*/

/* IPC */
/*_ t_handle_ipc_message {{{*/
let t_handle_ipc_message = function(ipc)
{
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c t_handle_ipc_message(ipc)"                        , IPC_LOG_COLOR, lbA);

    /* [ipc.start] .. (ON-OFF) {{{*/
    if((typeof ipc.start != "undefined"))
    {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c EXTENSION INSTRUCTION DETECTED"                   , IPC_LOG_COLOR, lbF);

        let script_loaded = t_ipc_handle_start(ipc.start);

if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c TOOLS LOADED AND WAITING "+script_loaded          , IPC_LOG_COLOR, lbF);
    }
    /*}}}*/
    /* [ipc.theme] {{{*/
    else if(typeof ipc.theme != "undefined")
    {
        t_ipc_handle_theme( ipc.theme );
    }
    /*}}}*/
};
/*}}}*/
/*_ t_ipc_handle_start {{{*/
let t_ipc_handle_start = function(start)
{
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c t_ipc_handle_start("+start+")"                    , IPC_LOG_COLOR, lbA);
    /* ON {{{*/
    if(start == "ON")
    {
        if(!t_ipc_is_IPC_SCRIPT_loaded() )
        {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c LOADING "                                         , IPC_LOG_COLOR, lbF);

            return t_load();
        }
        else {

            /* RELOAD */
            if(dom_tools_html && (dom_tools_html.style.visibility = "hidden"))
            {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c RELOADING "                                       , IPC_LOG_COLOR, lbF);
                t_reload();
            }
            /* ALREADY LOADED */
            else {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c ALREADY LOADED .. RE-SENDING "+TOOLS4_DEPLOYED    , IPC_LOG_COLOR, lbF);
                let ipc
                    = {    t_load : TOOLS4_DEPLOYED
                    ,      caller : DOM_TOOLS_JS_TAG+".t_ipc_handle_start"
                };
            t_send_IPC( ipc );
        }

        return true;
    }
}
/*}}}*/
/* OFF {{{*/
else {
    if( t_ipc_is_IPC_SCRIPT_loaded() )
    {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c UNLOADING "                                       , IPC_LOG_COLOR, lbF);

        t_unload();
    }
    else {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c NOT YET LOADED"                                   , IPC_LOG_COLOR, lbF);

        t_wait_for_startup_message_from_extension( DOM_TOOLS_JS_ID );
    }

    return true;
}
/*}}}*/
};
/*}}}*/
/*_ t_ipc_handle_theme {{{*/
let t_ipc_handle_theme = function(theme)
{
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c t_ipc_handle_theme("+theme+")"                    , IPC_LOG_COLOR, lbA);

let t_theme = "theme_"+theme.toUpperCase();
if(LOG_IPC) console.log("...calling toggle_keyword("+t_theme+")");
toggle_keyword(t_theme);
};
/*}}}*/
let IPC_SCRIPT_ID = DOM_TOOLS_JS_ID;
let IPC_LOG_COLOR = lb9;
/* IPC {{{*/
/*{{{*/
let IPC_EXTENSION_ID = "background_js";
let LOG_IPC          = true;

let IPC_MSG_COLOR    = lbF+IPC_LOG_COLOR;
/*}}}*/

/* IPC: EventListener */
/*_ t_ipc_add_message_listener {{{*/
let t_ipc_add_message_listener = function(script_id)
{
t_ipc_listener_id = script_id;
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": ADDING IPC MESSAGE LISTENER ", IPC_MSG_COLOR);

window.addEventListener   ("message", t_ipc_message_CB, false);
};
/*}}}*/
/*_ t_ipc_del_message_listener {{{*/
let t_ipc_del_message_listener = function(script_id)
{
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": DELETING IPC MESSAGE LISTENER", IPC_MSG_COLOR);

window.removeEventListener("message", t_ipc_message_CB, false);
};
/*}}}*/
/*_ t_ipc_message_CB {{{*/
let t_ipc_message_CB = function(event)
{
/* MESSAGE ORIGIN {{{*/
if(!window.location.href.startsWith( event.origin ))
{
/*
if(LOG_IPC) console.log("...not same origin: window.location.href=["+window.location.href+"]");
if(LOG_IPC) console.log("...not same origin: ........event.origin=["+event.origin        +"]");
*/
    return;
}
if(LOG_IPC) console.log("%c"+t_ipc_listener_id+".t_ipc_message_CB", IPC_MSG_COLOR);
if(LOG_IPC) console.dir(event);
/*}}}*/
/* IPC MESSAGE {{{*/
let message = event.data;
if(LOG_IPC) console.log("%c"+t_ipc_listener_id+".t_ipc_message_CB: %c "+message+" ", IPC_MSG_COLOR, lbF);
let ipc = t_get_IPC( message );
if(!ipc ) return;

if(typeof     ipc.LOG_IPC != "undefined") {
    LOG_IPC = ipc.LOG_IPC;
    console.log("%c t_ipc_message_CB: %c LOG_IPC="+LOG_IPC+" ", IPC_MSG_COLOR, lbF+(LOG_IPC ? lb2 : lb8));

    return;
}
/*}}}*/
/* SCRIPT MESSAGE {{{*/
t_handle_ipc_message( ipc );

/*}}}*/
};
/*}}}*/

/* IPC: MutationObserver */
/*_ t_ipc_add_MutationObserver {{{*/
/*{{{*/
let t_ipc_MutationObserver;
/*}}}*/
let t_ipc_add_MutationObserver = function(script_id)
{
/* SCRIPT ID {{{*/
t_ipc_listener_id = script_id;
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": ADDING IPC MutationObserver", IPC_MSG_COLOR);

/*}}}*/
/* LISTEN {{{*/
t_ipc_MutationObserver = new MutationObserver( t_ipc_MutationObserver_CB );

let config = { attributes            :  true /* attributes                          */
    ,          characterData         :  true /* data                                */
    ,          childList             : false /* additions and removals of s child   */
    ,          subtree               : false /* target and target's descendants     */
    ,          attributeOldValue     :  true /* attribute value before the mutation */
    ,          characterDataOldValue :  true /* data before the mutation            */
    ,          attributeFilter       : [IPC_EXTENSION_ID]
};

t_ipc_MutationObserver.observe(document.body, config);
/*}}}*/
};
/*}}}*/
/*_ t_ipc_del_MutationObserver {{{*/
let t_ipc_del_MutationObserver = function(script_id)
{
/* STOP OBSERVING {{{*/
if(t_ipc_MutationObserver)
{
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": DISCONNECTING MutationObserver", IPC_MSG_COLOR);
    t_ipc_MutationObserver.disconnect();
    t_ipc_MutationObserver = null;
}
else {
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": MutationObserver NOT CONNECTED", IPC_MSG_COLOR);
}
/*}}}*/
};
/*}}}*/
/*_ t_ipc_MutationObserver_CB {{{*/
let t_ipc_MutationObserver_CB = function(mutations)
{
/* LOG {{{
mutations.forEach(
    function(mutation) {
        if(LOG_IPC) console.log(t_ipc_listener_id+": MutationObserver:");
        if(LOG_IPC) console.log(".................type=["+mutation.type               +"]");
        if(LOG_IPC) console.log("........attributeName=["+mutation.attributeName      +"]");
        if(LOG_IPC) console.log(".............oldValue=["+mutation.oldValue           +"]");
        if(LOG_IPC) console.log("...attributeNamespace=["+mutation.attributeNamespace +"]");
        if(LOG_IPC) console.dir(mutation);
    }
);
}}}*/
/* HANDLE MESSAGE {{{*/
let message = document.body.attributes[IPC_EXTENSION_ID]
    ?         document.body.attributes[IPC_EXTENSION_ID].textContent : "";
if(LOG_IPC) console.log(t_ipc_listener_id+".t_ipc_MutationObserver_CB: ...message=["+message+"]");

let ipc = t_get_IPC( message );
if( ipc ) t_handle_ipc_message( ipc );
/*}}}*/
};
/*}}}*/

/* IPC: Util */
/*{{{*/

let t_ipc_listener_id;
/*}}}*/
/*_ t_ipc_is_IPC_SCRIPT_loaded {{{*/
let t_ipc_is_IPC_SCRIPT_loaded = function()
{
/* DOM_TOOLS_JS_ID {{{*/
if(typeof DOM_TOOLS_JS_ID != "undefined")
{
    if(typeof shadow_root != "undefined") {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c already loaded .. f(shadow_root)"                 , IPC_LOG_COLOR, lbA);
        return true;
    }
    else {
        return false;
    }
}
/*}}}*/
/* DOM_LOAD_ID {{{*/
if(typeof DOM_LOAD_ID     != "undefined")
{
    let id = "dom_host_css_tag";            /* i.e. one of the inlined data js code */
    let el = document.getElementById(id);
    if( el ) {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c already loaded .. f("+el.id+")"                   , IPC_LOG_COLOR, lbA);
        return  true;
    }
    else {
        return false;
    }
}
/*}}}*/
};
/*}}}*/

/*_ t_get_IPC {{{*/
/*{{{*/
/*
let t_get_IPC_sequence_number = 0;
*/
/*}}}*/
let t_get_IPC = function(message)
{
if(!message) return null;

let ipc = null;
try {
    ipc = JSON.parse(message);
    let idata = ""; Object.keys(ipc).forEach( function(key) { idata += "["+key+" = "+ipc[key]+"]"+LF; });
if(LOG_IPC) console.log("%c t_get_IPC(message)", IPC_MSG_COLOR);
if(LOG_IPC) console.log("%c "+idata+" ",                   lbF);

}
catch(ex) {
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": t_get_IPC:"                            ,     lb2);
if(LOG_IPC) console.log("%c "+t_strip_CR_LF(message)                                      , lbF+lb0);
if(LOG_IPC) console.log("%c 0123456789_123456789_123456789_123456789_123456789_123456789_", lbF+lb8);
if(LOG_IPC) console.log("%c 0_________1_________2_________3_________4_________5_________6", lbF+lb8);
if(LOG_IPC) console.log("%c *** "+ex,                                                           lb2);
}
/*
if(ipc.sequence_number) t_get_IPC_sequence_number = ipc.sequence_number;
*/
if(ipc && (typeof ipc.cancelreq != "undefined"))
{
    let removing = (ipc.cancelreq == "ON") ? "(REMOVING) " : "";
    t_handle_scripts(removing);
    return null;
}
else {
    return ipc;
}
};
/*}}}*/
/*_ t_send_IPC {{{*/
let t_send_IPC = function(ipc)
{
if(LOG_IPC) console.log("%c t_send_IPC ", IPC_MSG_COLOR);

    let t_get_IPC_sequence_number = parseInt(new Date().getTime() / 1000) % 86400; /* seconds per day */

    ipc.sequence_number = t_get_IPC_sequence_number;

    let idata = ""; Object.keys(ipc).forEach( function(key) { idata += "["+key+" = "+ipc[key]+"]"+LF; });
if(LOG_IPC) console.log("%c "+idata+" ", lbF);

    let ipc_json = JSON.stringify( ipc );
    document.body.setAttribute(IPC_SCRIPT_ID, ipc_json);
};
/*}}}*/

/*_ t_handle_scripts {{{*/
let t_handle_scripts = function(removing)
{
/* *** console.clear is not a function .. ? */
try {
if(LOG_IPC) console.clear();
if(LOG_IPC) console.log("%c CLEARED BY t_handle_scripts ", IPC_MSG_COLOR);
} catch(ex) {};

let elements = document .getElementsByTagName("SCRIPT");
if(LOG_IPC) console.log("%c "+ elements.length +" SCRIPT ELEMENTS: "+removing, lbF);

for(let i=0; i<elements.length; ++i)
{
    let s_el = elements[i];
    let p_el = elements[i].parentNode;
    try {
/*
if(LOG_IPC) console.log((i+1)+"="+get_n_lbl( s_el ) + " parent=["+ get_n_lbl(p_el) +"]");
if(LOG_IPC) console.log((i+1)+"="+get_n_lbl( s_el ) + " parent=["+ get_n_lbl(p_el) +"]");
if(LOG_IPC) console.dir(s_el);
if(LOG_IPC) console.log((i+1)+".....baseURI: "+ s_el.baseURI   );
if(LOG_IPC) console.log((i+1)+"...outerHTML: "+ s_el.outerHTML );
*/
if(LOG_IPC) console.log((i+1)+".........src: "+ s_el.src       );
    }
    catch(ex) {}

    if(removing) s_el.remove();
}
};
/*}}}*/
/*_ t_ipc_contains_a_startup_message {{{*/
let t_ipc_contains_a_startup_message = function(ipc)
{
let result
    =  (typeof ipc.start != "undefined")
    && (       ipc.start == "ON"       )
;

if(LOG_IPC) console.log("t_ipc_contains_a_startup_message ...return %c"+ result, IPC_MSG_COLOR);
return result;
};
/*}}}*/
/*_ t_strip_CR_LF {{{*/
let t_regexp_CR = new RegExp("\\r", "g");
let t_regexp_LF = new RegExp("\\n", "g");
let t_strip_CR_LF = function(text)
{
return text
    .   replace(t_regexp_CR,  "")
    .   replace(t_regexp_LF, " ")
    .   trim()
;
};
/*}}}*/
/*_ t_wait_for_startup_message_from_extension {{{*/
const WAITING_FOR_STARTUP_MESSAGE = "TOOLS WAITING";/* FOR A STARTUP MESSAGE FROM EXTENSION";*/
let t_wait_for_startup_message_from_extension = function(_caller)
{
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c "+WAITING_FOR_STARTUP_MESSAGE, IPC_LOG_COLOR, lbF);

let ipc = { t_load : WAITING_FOR_STARTUP_MESSAGE
        ,   caller : _caller
    };
    t_send_IPC( ipc );

    if(!t_ipc_listener_id) {
        t_ipc_add_MutationObserver(IPC_SCRIPT_ID);
      /*t_ipc_add_message_listener(IPC_SCRIPT_ID);*/
    }
};
/*}}}*/

/*}}}*/
if(LOG_IPC) console.log("%c "+DOM_TOOLS_JS_ID+" %c : %c ...DONE LOADING ", IPC_MSG_COLOR,lbA, lbF+lb0);

/* STAND-ALONE OR EXTENSION STARTUP MESSAGE RECEIVED {{{*/
let extension_signature
    = document.body.attributes[IPC_EXTENSION_ID]
    ? document.body.attributes[IPC_EXTENSION_ID].textContent
    : "";
if(LOG_IPC) console.log("...calling   t_load");
t_load();
/*}}}*/

console.log("");
/*
/TODO.1
/TODO.2
/TODO.3
/TODO.4
*/
/*}}}*/
`
)
 .replace(/%u/g,"\\u")
;
/*}}}*/

/* LOAD DATA */
/*{{{*/
/* ECC {{{*/

const lbA  = "background-color:inherit;   color:inherit;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
const lbB  = "font-size:500%; font-weight:900; margin:0 0 0 0;";
const lbb  = "font-size:150%; font-weight:900; margin:0 0 0 0;";

const lbH  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex 1ex   0; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
const lbL  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0 1ex; padding:0 .5em 0 .5em; border-radius:1em   0   0 1em; background:linear-gradient(to   left, #333 0%           ,#445 100%);";
const lbR  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0 1ex   0   0; padding:0 .5em 0 .5em; border-radius:  0 1em 1em   0; background:linear-gradient(to  right, #333 0%           ,#544 100%);";
const lbC  = "font-weight:900; line-height:1.5em; border:1px solid gray; margin:   0   0   0   0; padding:0 .5em 0 .5em; border-radius:  0   0   0   0;";

const lb1  = "background-color:#964B00DD; color:black;";
const lb2  = "background-color:#FF0000DD; color:black;";
const lb3  = "background-color:#FFA500DD; color:black;";
const lb4  = "background-color:#FFFF00DD; color:black;";
const lb5  = "background-color:#9ACD32DD; color:black;";
const lb6  = "background-color:#6495EDDD; color:black;";
const lb7  = "background-color:#EE82EEDD; color:black;";
const lb8  = "background-color:#A0A0A0DD; color:black;";
const lb9  = "background-color:#FFFFFFDD; color:black;";
const lb0  = "background-color:#000000DD; color:gray;";
const lbX = [ lb0 ,lb1 ,lb2 ,lb3 ,lb4 ,lb5 ,lb6 ,lb7 ,lb8 ,lb9 ];

const lf1  = "color:#964B00;";
const lf2  = "color:#FF0000;";
const lf3  = "color:#FFA500;";
const lf4  = "color:#FFFF00;";
const lf5  = "color:#9ACD32;";
const lf6  = "color:#6495ED;";
const lf7  = "color:#EE82EE;";
const lf8  = "color:#A0A0A0;";
const lf9  = "color:#FFFFFF;";
const lf0  = "color:#000000;";
const lfX = [ lf0 ,lf1 ,lf2 ,lf3 ,lf4 ,lf5 ,lf6 ,lf7 ,lf8 ,lf9 ];

/*}}}*/
/* dom_load {{{*/
dom_load  = function()
{
if(LOG_IPC) console.log(DOM_LOAD_ID+": document.contentType=["+document.contentType+"]");

    try {
        window.addEventListener('error', load_onerror, false);

        if( document.contentType.includes("xml") ) {
            if( !load_css_pi( DOM_HOST_CSS_ID  , dom_host_css_data   ) ) return false;
            if( !load_css_pi( DOM_TOOLS_CSS_ID , dom_tools_css_data  ) ) return false;
        }
        else {
            if( !load_css   ( DOM_HOST_CSS_ID  , dom_host_css_data   ) ) return false;
            if( !load_css   ( DOM_TOOLS_CSS_ID , dom_tools_css_data  ) ) return false;
            if( !load_css   ( DOM_GRID_CSS_ID  , dom_grid_css_data   ) ) return false;
        }

        if( !load_js        ( "dom_select_js"  , dom_select_js_data  ) ) return false;
        if( !load_js        ( "dom_wording_js" , dom_wording_js_data ) ) return false;
        if( !load_js        ( "dom_grid_js"    , dom_grid_js_data    ) ) return false;
        if( !load_html      ( "dom_tools_html" , dom_tools_html_data ) ) return false;
        if( !load_js        ( "dom_tools_js"   , dom_tools_js_data   ) ) return false;

    }
    catch(ex) {
        console.dir(ex);
        return false;
    }
    finally {
        window.removeEventListener('error', load_onerror, false);
    }
};

let load_onerror = function(e)
{
    console.log("load_onerror:");

    console.log("e:");
    console.dir( e);

    try { console.log("e.error..."+ e.error  ); } catch(ex) { console.log(ex); }
    try { console.dir("e.target.."+ e.target ); } catch(ex) { console.log(ex); }
    console.log(e.target);
    try { console.log("e.message."+ e.message); } catch(ex) { console.log(ex); }
    try { console.log("e.name...."+ e.name   ); } catch(ex) { console.log(ex); }
    try { console.log("e.type...."+ e.type   ); } catch(ex) { console.log(ex); }

};
/*}}}*/
/* dom_check_scheme_arg {{{*/
/*{{{*/
const DOM_DATA_LENGTH_MIN = 100;
const TOOLS2_SANITY_CHECK_FAILED = "TOOLS SANITY CHECK FAILED";

/*}}}*/
let dom_check_scheme_arg = function(caller, scheme_id, scheme_arg)
{
    let is_file    =             scheme_arg.startsWith("file:");
    let is_content = !is_file || scheme_arg.startsWith("data:");

    /* unchecked content */
    if( !is_content ) {
if(LOG_IPC) console.log("__"+caller+": %c "+scheme_id+" = "+scheme_arg, lb3);
        return true;
    }

if(LOG_IPC) console.log("__"+caller+": %c "+scheme_id+" = "+scheme_arg.length+" bytes", lb3);

    if(scheme_arg.length > DOM_DATA_LENGTH_MIN) {
        return true;
    }
    else {
console.log("%c *** "+TOOLS2_SANITY_CHECK_FAILED+": %c "+scheme_id+" ", lbF+lb2, lbF+lb0);

        /* share failure diagnostic */
        let       msg = DOM_LOAD_ID+": \""+scheme_id+"\" "+TOOLS2_SANITY_CHECK_FAILED;
        let       ipc = { t_load:msg, caller:DOM_LOAD_TAG };
        send_IPC( ipc );

        return false;
    }
};
/*}}}*/
/* load_js {{{*/
load_js = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_js", id, scheme_arg) ) return false;
    if( document.getElementById(id) ) return;
    let el    = document.createElement("script");
    el.id     = id;
    el.type   = "text/javascript";
    el.src    = scheme_arg;
    el.async  = false;
    el.defer  = true;
    el.addEventListener("error", load_onerror);
    document.getElementsByTagName("head")[0].appendChild(el);
/*console_dir(el);*/
    return true;
};
/*}}}*/
/* load_css {{{*/
load_css = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_css", id, scheme_arg) ) return false;
    if( document.getElementById(id) ) return;
    let el    = document.createElement("link");
    el.id     = id;
    el.type   = "text/css";
    el.href   = scheme_arg;
    el.rel    = "stylesheet";
    el.addEventListener("error", load_onerror);
    document.getElementsByTagName("head")[0].appendChild(el);

    get_el_sheet_first_rule_text_content(el);
console.log(".........................tag=["+tag+"]");

    return true;
};
/*}}}*/
/* load_css_pi {{{*/
load_css_pi = function(id, scheme_arg) {
    if( !dom_check_scheme_arg("load_css_pi", id, scheme_arg) ) return false;
    if( document.getElementById(id) ) return;
    let el    = document.createProcessingInstruction("xml-stylesheet", "href='"+ scheme_arg +"' type='text/css'");
    el.id     = id;
    el.addEventListener("error", load_onerror);
    document.insertBefore(el, document.firstChild);
/*console_dir(el);*/
    return true;
};
/*}}}*/
/* load_html {{{*/
load_html = function(id, html) {
    if( !dom_check_scheme_arg("load_html", id, html) ) return false;
    if( document.getElementById(id) ) return;
    let el       = document.createElement("DIV");
    el.id        = id;
    el.addEventListener("error", load_onerror);
    el.innerHTML = unescape(html);
/*
el.style.visibility = "hidden";
*/
el.style.display    = "none";

    document.body.appendChild (el);
/*console_dir(el);*/
    return true;
};
/*}}}*/
/*_ get_el_sheet_first_rule_text_content {{{*/
let get_el_sheet_first_rule_text_content = function(el)
{
    let tag = "";
    try {
        if( el) {
            let txt = el.sheet.cssRules[0].cssText;
            let x_1 = txt.indexOf    ('"');
            let x_2 = txt.lastIndexOf('"');
            txt     = txt.substring(x_1+1, x_2);
            tag     = txt.includes(el.id) ? "SHEET: "+txt : "";
        }
    }
    catch(ex) {
console.log("%c get_el_sheet_first_rule_text_content("+el.id+"):"+ ex, lbH+lf8);
/*
*/
    }
    return tag;
};
/*}}}*/
/*}}}*/

/* IPC */
/*_ t_handle_ipc_message {{{*/
let t_handle_ipc_message = function(ipc)
{
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c t_handle_ipc_message(ipc)"                        , IPC_LOG_COLOR, lbA);
    /* 1/3 - ALREADY LOADED {{{*/
    if( t_ipc_is_IPC_SCRIPT_loaded() )
    {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c SCRIPT ALREADY LOADED"                            , IPC_LOG_COLOR, lbF);

        return true;
    }
    /*}}}*/
    /* 2/3 - NOT STARTED BY IPC MESSAGE {{{*/
    if(    (typeof ipc.start == "undefined")
        || (       ipc.start != "ON"       )
    ) {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c NOT STARTED BY IPC MESSAGE "                      , IPC_LOG_COLOR, lbF);

        t_wait_for_startup_message_from_extension( IPC_SCRIPT_ID );
        return false;
    }
    /*}}}*/
    /* 3/3 - HANDLE A START UP MESSAGE .. (stop listening and load script) {{{*/
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c STARTED BY IPC MESSAGE "                          , IPC_LOG_COLOR, lbF);

    /* STOP LISTENING IPC MESSAGES */
    if(t_ipc_listener_id)
    {
        t_ipc_del_message_listener();
        t_ipc_del_MutationObserver();
        t_ipc_listener_id = null;

    }
    /* AND LOAD SCRIPT */
if(LOG_IPC) console.log("...calling dom_load");

    dom_load();

    if( t_ipc_is_IPC_SCRIPT_loaded() )
        t_wait_for_startup_message_from_extension( IPC_SCRIPT_ID );

    return true;
    /*}}}*/
};

/*}}}*/
let IPC_SCRIPT_ID = DOM_LOAD_ID;
let IPC_LOG_COLOR = lb3;
/* IPC {{{*/
/*{{{*/
let IPC_EXTENSION_ID = "background_js";
let LOG_IPC          = true;

let IPC_MSG_COLOR    = lbF+IPC_LOG_COLOR;
/*}}}*/

/* IPC: EventListener */
/*_ t_ipc_add_message_listener {{{*/
let t_ipc_add_message_listener = function(script_id)
{
t_ipc_listener_id = script_id;
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": ADDING IPC MESSAGE LISTENER ", IPC_MSG_COLOR);

window.addEventListener   ("message", t_ipc_message_CB, false);
};
/*}}}*/
/*_ t_ipc_del_message_listener {{{*/
let t_ipc_del_message_listener = function(script_id)
{
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": DELETING IPC MESSAGE LISTENER", IPC_MSG_COLOR);

window.removeEventListener("message", t_ipc_message_CB, false);
};
/*}}}*/
/*_ t_ipc_message_CB {{{*/
let t_ipc_message_CB = function(event)
{
/* MESSAGE ORIGIN {{{*/
if(!window.location.href.startsWith( event.origin ))
{
/*
if(LOG_IPC) console.log("...not same origin: window.location.href=["+window.location.href+"]");
if(LOG_IPC) console.log("...not same origin: ........event.origin=["+event.origin        +"]");
*/
    return;
}
if(LOG_IPC) console.log("%c"+t_ipc_listener_id+".t_ipc_message_CB", IPC_MSG_COLOR);
if(LOG_IPC) console.dir(event);
/*}}}*/
/* IPC MESSAGE {{{*/
let message = event.data;
if(LOG_IPC) console.log("%c"+t_ipc_listener_id+".t_ipc_message_CB: %c "+message+" ", IPC_MSG_COLOR, lbF);
let ipc = t_get_IPC( message );
if(!ipc ) return;

if(typeof     ipc.LOG_IPC != "undefined") {
    LOG_IPC = ipc.LOG_IPC;
    console.log("%c t_ipc_message_CB: %c LOG_IPC="+LOG_IPC+" ", IPC_MSG_COLOR, lbF+(LOG_IPC ? lb2 : lb8));

    return;
}
/*}}}*/
/* SCRIPT MESSAGE {{{*/
t_handle_ipc_message( ipc );

/*}}}*/
};
/*}}}*/

/* IPC: MutationObserver */
/*_ t_ipc_add_MutationObserver {{{*/
/*{{{*/
let t_ipc_MutationObserver;
/*}}}*/
let t_ipc_add_MutationObserver = function(script_id)
{
/* SCRIPT ID {{{*/
t_ipc_listener_id = script_id;
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": ADDING IPC MutationObserver", IPC_MSG_COLOR);

/*}}}*/
/* LISTEN {{{*/
t_ipc_MutationObserver = new MutationObserver( t_ipc_MutationObserver_CB );

let config = { attributes            :  true /* attributes                          */
    ,          characterData         :  true /* data                                */
    ,          childList             : false /* additions and removals of s child   */
    ,          subtree               : false /* target and target's descendants     */
    ,          attributeOldValue     :  true /* attribute value before the mutation */
    ,          characterDataOldValue :  true /* data before the mutation            */
    ,          attributeFilter       : [IPC_EXTENSION_ID]
};

t_ipc_MutationObserver.observe(document.body, config);
/*}}}*/
};
/*}}}*/
/*_ t_ipc_del_MutationObserver {{{*/
let t_ipc_del_MutationObserver = function(script_id)
{
/* STOP OBSERVING {{{*/
if(t_ipc_MutationObserver)
{
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": DISCONNECTING MutationObserver", IPC_MSG_COLOR);
    t_ipc_MutationObserver.disconnect();
    t_ipc_MutationObserver = null;
}
else {
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": MutationObserver NOT CONNECTED", IPC_MSG_COLOR);
}
/*}}}*/
};
/*}}}*/
/*_ t_ipc_MutationObserver_CB {{{*/
let t_ipc_MutationObserver_CB = function(mutations)
{
/* LOG {{{
mutations.forEach(
    function(mutation) {
        if(LOG_IPC) console.log(t_ipc_listener_id+": MutationObserver:");
        if(LOG_IPC) console.log(".................type=["+mutation.type               +"]");
        if(LOG_IPC) console.log("........attributeName=["+mutation.attributeName      +"]");
        if(LOG_IPC) console.log(".............oldValue=["+mutation.oldValue           +"]");
        if(LOG_IPC) console.log("...attributeNamespace=["+mutation.attributeNamespace +"]");
        if(LOG_IPC) console.dir(mutation);
    }
);
}}}*/
/* HANDLE MESSAGE {{{*/
let message = document.body.attributes[IPC_EXTENSION_ID]
    ?         document.body.attributes[IPC_EXTENSION_ID].textContent : "";
if(LOG_IPC) console.log(t_ipc_listener_id+".t_ipc_MutationObserver_CB: ...message=["+message+"]");

let ipc = t_get_IPC( message );
if( ipc ) t_handle_ipc_message( ipc );
/*}}}*/
};
/*}}}*/

/* IPC: Util */
/*{{{*/

let t_ipc_listener_id;
/*}}}*/
/*_ t_ipc_is_IPC_SCRIPT_loaded {{{*/
let t_ipc_is_IPC_SCRIPT_loaded = function()
{
/* DOM_TOOLS_JS_ID {{{*/
if(typeof DOM_TOOLS_JS_ID != "undefined")
{
    if(typeof shadow_root != "undefined") {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c already loaded .. f(shadow_root)"                 , IPC_LOG_COLOR, lbA);
        return true;
    }
    else {
        return false;
    }
}
/*}}}*/
/* DOM_LOAD_ID {{{*/
if(typeof DOM_LOAD_ID     != "undefined")
{
    let id = "dom_host_css_tag";            /* i.e. one of the inlined data js code */
    let el = document.getElementById(id);
    if( el ) {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c already loaded .. f("+el.id+")"                   , IPC_LOG_COLOR, lbA);
        return  true;
    }
    else {
        return false;
    }
}
/*}}}*/
};
/*}}}*/

/*_ t_get_IPC {{{*/
/*{{{*/
/*
let t_get_IPC_sequence_number = 0;
*/
/*}}}*/
let t_get_IPC = function(message)
{
if(!message) return null;

let ipc = null;
try {
    ipc = JSON.parse(message);
    let idata = ""; Object.keys(ipc).forEach( function(key) { idata += "["+key+" = "+ipc[key]+"]"+LF; });
if(LOG_IPC) console.log("%c t_get_IPC(message)", IPC_MSG_COLOR);
if(LOG_IPC) console.log("%c "+idata+" ",                   lbF);

}
catch(ex) {
if(LOG_IPC) console.log("%c "+t_ipc_listener_id+": t_get_IPC:"                            ,     lb2);
if(LOG_IPC) console.log("%c "+t_strip_CR_LF(message)                                      , lbF+lb0);
if(LOG_IPC) console.log("%c 0123456789_123456789_123456789_123456789_123456789_123456789_", lbF+lb8);
if(LOG_IPC) console.log("%c 0_________1_________2_________3_________4_________5_________6", lbF+lb8);
if(LOG_IPC) console.log("%c *** "+ex,                                                           lb2);
}
/*
if(ipc.sequence_number) t_get_IPC_sequence_number = ipc.sequence_number;
*/
if(ipc && (typeof ipc.cancelreq != "undefined"))
{
    let removing = (ipc.cancelreq == "ON") ? "(REMOVING) " : "";
    t_handle_scripts(removing);
    return null;
}
else {
    return ipc;
}
};
/*}}}*/
/*_ t_send_IPC {{{*/
let t_send_IPC = function(ipc)
{
if(LOG_IPC) console.log("%c t_send_IPC ", IPC_MSG_COLOR);

    let t_get_IPC_sequence_number = parseInt(new Date().getTime() / 1000) % 86400; /* seconds per day */

    ipc.sequence_number = t_get_IPC_sequence_number;

    let idata = ""; Object.keys(ipc).forEach( function(key) { idata += "["+key+" = "+ipc[key]+"]"+LF; });
if(LOG_IPC) console.log("%c "+idata+" ", lbF);

    let ipc_json = JSON.stringify( ipc );
    document.body.setAttribute(IPC_SCRIPT_ID, ipc_json);
};
/*}}}*/

/*_ t_handle_scripts {{{*/
let t_handle_scripts = function(removing)
{
/* *** console.clear is not a function .. ? */
try {
if(LOG_IPC) console.clear();
if(LOG_IPC) console.log("%c CLEARED BY t_handle_scripts ", IPC_MSG_COLOR);
} catch(ex) {};

let elements = document .getElementsByTagName("SCRIPT");
if(LOG_IPC) console.log("%c "+ elements.length +" SCRIPT ELEMENTS: "+removing, lbF);

for(let i=0; i<elements.length; ++i)
{
    let s_el = elements[i];
    let p_el = elements[i].parentNode;
    try {
/*
if(LOG_IPC) console.log((i+1)+"="+get_n_lbl( s_el ) + " parent=["+ get_n_lbl(p_el) +"]");
if(LOG_IPC) console.log((i+1)+"="+get_n_lbl( s_el ) + " parent=["+ get_n_lbl(p_el) +"]");
if(LOG_IPC) console.dir(s_el);
if(LOG_IPC) console.log((i+1)+".....baseURI: "+ s_el.baseURI   );
if(LOG_IPC) console.log((i+1)+"...outerHTML: "+ s_el.outerHTML );
*/
if(LOG_IPC) console.log((i+1)+".........src: "+ s_el.src       );
    }
    catch(ex) {}

    if(removing) s_el.remove();
}
};
/*}}}*/
/*_ t_ipc_contains_a_startup_message {{{*/
let t_ipc_contains_a_startup_message = function(ipc)
{
let result
    =  (typeof ipc.start != "undefined")
    && (       ipc.start == "ON"       )
;

if(LOG_IPC) console.log("t_ipc_contains_a_startup_message ...return %c"+ result, IPC_MSG_COLOR);
return result;
};
/*}}}*/
/*_ t_strip_CR_LF {{{*/
let t_regexp_CR = new RegExp("\\r", "g");
let t_regexp_LF = new RegExp("\\n", "g");
let t_strip_CR_LF = function(text)
{
return text
    .   replace(t_regexp_CR,  "")
    .   replace(t_regexp_LF, " ")
    .   trim()
;
};
/*}}}*/
/*_ t_wait_for_startup_message_from_extension {{{*/
const WAITING_FOR_STARTUP_MESSAGE = "TOOLS WAITING";/* FOR A STARTUP MESSAGE FROM EXTENSION";*/
let t_wait_for_startup_message_from_extension = function(_caller)
{
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c "+WAITING_FOR_STARTUP_MESSAGE, IPC_LOG_COLOR, lbF);

let ipc = { t_load : WAITING_FOR_STARTUP_MESSAGE
        ,   caller : _caller
    };
    t_send_IPC( ipc );

    if(!t_ipc_listener_id) {
        t_ipc_add_MutationObserver(IPC_SCRIPT_ID);
      /*t_ipc_add_message_listener(IPC_SCRIPT_ID);*/
    }
};
/*}}}*/

/*}}}*/
if(LOG_IPC) console.log("%c "+DOM_LOAD_ID+" %c : %c ...DONE LOADING ", lbF+lb5,lbA, lbF+lb0);

/* STAND-ALONE OR WAIT FOR EXTENSION STARTUP MESSAGE {{{*/
let IPC_check_extension_signature = function()
{
    /* BODY-ATTR [IPC_EXTENSION_ID] .. (a body attribute set by a browser extension) {{{*/
    if(typeof document.body.attributes[IPC_EXTENSION_ID] != "undefined")
    {
        let         lxx = "font-size:800%; color:#6495ED;";
        let SYMBOL_GEAR = "\u2699";
if(LOG_IPC) console.log("%c"+SYMBOL_GEAR+" %c"+IPC_SCRIPT_ID+" %c EXTENSION SIGNATURE DETECTED", lxx, IPC_LOG_COLOR, lbF);

        extension_signature = document.body.attributes[IPC_EXTENSION_ID].textContent;

if(LOG_IPC) console.log("%c["+IPC_EXTENSION_ID+"]%c = %c"+extension_signature, IPC_MSG_COLOR, lbA, lbF+lb0);
    }
    /*}}}*/
    /* EXTENSION SIGNATURE DETECTED .. (wait for a startup-message) {{{*/
    if(extension_signature)
    {
        let ipc =  t_get_IPC( extension_signature );
        t_handle_ipc_message(ipc);
    }
    /*}}}*/
    /* EXTENSION SIGNATURE NOT FOUND .. (stand-alone instant load) {{{*/
    else {
if(LOG_IPC) console.log("%c "+IPC_SCRIPT_ID+" %c NO EXTENSION DETECTED: STAND-ALONE INSTANT LOAD " , IPC_LOG_COLOR, lbF);

        if     (typeof   t_load != "undefined") { if(LOG_IPC) console.log("...calling   t_load");   t_load(); }
        else if(typeof dom_load != "undefined") { if(LOG_IPC) console.log("...calling dom_load"); dom_load(); }
    }
    /*}}}*/
};
if(LOG_IPC) console.log("%c "+DOM_LOAD_ID+" %c : %c ...setTimeout(IPC_check_extension_signature, 2000) ", lbF+lb5,lbA, lbF+lb0);
let extension_signature = "";
setTimeout(IPC_check_extension_signature, 2000);
/*}}}*/

})();

