"use strict";
/* dom_wording */
let DOM_WORDING_JS_ID       = 'dom_wording_js';
let DOM_WORDING_JS_TAG      = DOM_WORDING_JS_ID +' (181229:15h)'; let tag = DOM_WORDING_JS_TAG;
let DOM_WORDING_CSS_ID      = 'dom_wording_css';

/*_ dom_wording_cycle {{{*/
let dom_wording_cycle = function(stage='OFF', anchor_freeze=true)
{
    let caller = "dom_wording_cycle(stage=["+stage+"], anchor_freeze=["+anchor_freeze+"])";
let log_this = LOG_MAP.EV5_TOOL_CB;
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
let   caller = "dom_wording_activate(anchor_freeze "+anchor_freeze+")";
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
    let el = css_map[key];
    let found = false;
    for(let i = 0; i< css_map.length; ++i) {
        let      id = css_map[i].id;
        let      el = css_map[i].el;
        found      |= (id == key);
        el.disabled = (id != key);
if(log_this && !el.disabled) logBIG("WORDING CSS: "+i+". id ["+css_map[i].id+"] .. el ["+get_id_or_tag(css_map[i].el)+"]");
    }
    /*}}}*/
if(!found) console.warn("*** "+caller+": ["+key+"] NOT FOUND IN PRELOADED [css_map]");
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
let css_map = [];

let anchor_on;
let anchor_off;
let wording_on;
let wording_off;
let light_theme;
let dark_theme;

let dom_wording_init = function()
{
let caller = "dom_wording_init";
let log_this = LOG_MAP.EV5_TOOL_CB;
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
    let          su = "/*# sourceURL=dom_wording.js */";
    let        data = 'data:text/css,'+escape(su +"\\n"+ sig);

    dom_wording_css = dom_wording_inject_css(id, data);
    /*}}}*/
    /* DOM_WORDING CSS PRELOAD .. [W]ord [A]nchor [L]ight [D]ark {{{*/

    let el;
    id="DWA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +dark_theme  +wording_on  +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="LWA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +light_theme +wording_on  +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="DWa"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +dark_theme  +wording_on  +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="LWa"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +light_theme +wording_on  +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});

    id= "wA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */"              +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="DwA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +dark_theme  +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id="LwA"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */" +light_theme +wording_off +anchor_on  );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});
    id= "wa"; data= 'data:text/css,'+escape("/*# sourceURL="+id+" */"              +wording_off +anchor_off );  el = dom_wording_inject_css(id, data);  css_map.push({id:id , el:el});

/*{{{
for(let [id, el] of css_map) log(". id=["+id+"] el=["+ellipsis(el, 64)+"]");
for(let i = 0; i< css_map.length; ++i) log(i+". id ["+css_map[i].id+"] .. el ["+get_id_or_tag(css_map[i].el)+"]");
}}}*/
    /*}}}*/
};
/*}}}*/
/*_ dom_wording_inject_css {{{*/
let dom_wording_inject_css = function(id, link_or_data)
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

