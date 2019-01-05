"use strict";
/* dom_util_js */
let DOM_UTIL_JS_ID        = "dom_util_js";
let DOM_UTIL_JS_TAG       = DOM_UTIL_JS_ID  +" (181230:00h)";

/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
  let DOUBLE_QUOTE  = String.fromCharCode(34);
  let LF            = String.fromCharCode(10);
  let CR            = String.fromCharCode(13);
/*}}}*/
/* SYMBOL {{{ */
/* Surrogate Pair Calculator:
:!start explorer "http://www.russellcottrell.com/greek/utilities/surrogatepaircalculator.htm"
*/
let SYMBOL_EMPTY                = "\u23D8";
let SYMBOL_FUNCTION             = "\u0083"; /* ƒ */

let SYMBOL_RIGHT_PAIR_ARROW     = "\u21C9";
let SYMBOL_RIGHT_WAVE_ARROW     = "\u2933";

let SYMBOL_CIRCLE               = "\u233E";
let SYMBOL_ANCHOR               = "\u2693";
let SYMBOL_BLACK_SUN            = "\u2600";
let SYMBOL_BULB                 = "\ud83d\udca1";
let SYMBOL_TRAFFIC_LIGHT        = "\ud83d\udea6";
let SYMBOL_CHECK_MARK           = "\u2714";
let SYMBOL_CIRCLED_PLUS         = "\u2295";
let SYMBOL_DIRECT_HIT           = "\uD83C\uDFAF"; /* "\u1F3AF"; */
let SYMBOL_CIRCLE_ARROW         = "\u27F3";
let SYMBOL_DOWN_ARROW           = "\u2193";
let SYMBOL_RIGHT_LEFT_ARROW     = "\u21C4";
let SYMBOL_GEAR                 = "\u2699";
let SYMBOL_HEAVY_RIGHT_ARROW    = "\u2794";
let SYMBOL_LEFT_ARROW           = "\u27EA"; /* CHEVRON LEFT */
let SYMBOL_LOWER_RIGHT          = "\u25E2";
let SYMBOL_MENU                 = "\u2630";
let SYMBOL_MOON                 = "\u263D";
let SYMBOL_NOT_CHECKED          = "\u237B";
let SYMBOL_NO_ENTRY             = "\u26D4";
let SYMBOL_RECYCLE              = "\u267B";
let SYMBOL_RIGHT_DBL_A_BRK      = "\u27EB";
let SYMBOL_RIGHT_ARROW          = "\u2192";
let SYMBOL_SAILBOAT             = "\u26F5";
let SYMBOL_UPPER_LEFT           = "\u25E4";
let SYMBOL_UP_WHITE_ARROW       = "\u2191";
let SYMBOL_UP_ARROW             = "\u2191";
let SYMBOL_UP_DOWN_ARROW        = "\u21C5";
let SYMBOL_DOWN_POINTING        = "\u261F";
let SYMBOL_SECTION              = "\u00A7";
let SYMBOL_PARAGRAPH            = "\u00B6";
let SYMBOL_DOUBLE_VBAR          = "\u2590\u2590";
let SYMBOL_ELLIPSIS             = "\u2026";

/*
let SYMBOL_CLIPBOARD            = "\u1F4CB";
let SYMBOL_CLIPBOARD            = "\u2398";
*/
let SYMBOL_CLIPBOARD            = "\uD83D\uDCCB";
let SYMBOL_WASTEBASKET          = "\uD83D\uDDD1"; /* \u1F5D1 */
let SYMBOL_SCISSORS             = "\u2702";

let SYMBOL_EXPAND_IS_ON         = SYMBOL_LEFT_ARROW;
let SYMBOL_EXPAND_IS_OFF        = SYMBOL_RIGHT_DBL_A_BRK;

let SYMBOL_WORDING_IS_ON        = "W";
let SYMBOL_WORDING_IS_OFF       = "w";

let SYMBOL_THEME_DARK_IS_OFF    = SYMBOL_BLACK_SUN;
let SYMBOL_THEME_DARK_IS_ON     = SYMBOL_MOON;

let SYMBOL_STAGE1_INPUT         = SYMBOL_DOWN_POINTING;
let SYMBOL_STAGE2_ACTION        = SYMBOL_CIRCLE_ARROW;
let SYMBOL_STAGE3_RESULT        = SYMBOL_HEAVY_RIGHT_ARROW;
/*
let SYMBOL_EYE                  = "\ud83d\udc41";
let SYMBOL_EYE                  = "\u1F441";
*/
let SYMBOL_EYE                  = SYMBOL_BULB;

let SYMBOL_BLACK_SQUARE         = "\u25A0";
let SYMBOL_SQUARE_HFILL         = "\u25A4";
let SYMBOL_WHITE_SQUARE         = "\u25A1";

let SYMBOL_LEFT_HALF_BLACK      = "\u25E7";
let SYMBOL_RIGHT_HALF_BLACK     = "\u25E8";
let SYMBOL_WHITE_MEDIUM_SQUARE  = "\u25FB";
let SYMBOL_WHITE_SMALL_SQUARE   = "\u25FD";
let SYMBOL_BLACK_MEDIUM_SQUARE  = "\u25FC";
let SYMBOL_BLACK_SMALL_SQUARE   = "\u25FE";

let SYMBOL_REPLACEMENT_CHAR     = "\uFFFD";
let SYMBOL_HEAVY_BALLOT         = "\u2718";
let SYMBOL_BALLOT_CHECK         = "\u2611";
let SYMBOL_CLOCKWISE_OPEN_CIRCLE= "\u21BB";

let SYMBOL_PARTNERSHIP          = "\u26AF";
let SYMBOL_WHITE_SMILEY         = "\u263A";
let SYMBOL_BLACK_SMILEY         = "\u263B";
let SYMBOL_FROWNING_FACE        = "\u2639";
let SYMBOL_TRUCK                = "\u26DF";
let SYMBOL_WRITING_HAND         = "\u270D";
let SYMBOL_BLACK_L_HAND         = "\u261A";
let SYMBOL_BLACK_R_HAND         = "\u261B";
let SYMBOL_WHITE_L_HAND         = "\u261C";

let SYMBOL_DBL_EXCLAM           = "\u203C";
let SYMBOL_EXCLAM_QUESTION      = "\u2049";
let SYMBOL_WARNING              = "\u26A0";
let SYMBOL_LEFT_RIGHT_ARROW     = "\u2194";

let SYMBOL_STAR                 = "\u2B50";
let SYMBOL_CLOUD                = "\u2601";
let SYMBOL_HOURGLASS            = "\u23F3";
let SYMBOL_WATCH                = "\u231A";

let SYMBOL_BLACK_CIRCLE         = "\u25CF";
let SYMBOL_BLMED_CIRCLE         = "\u26AB"; /* MEDIUM */
let SYMBOL_LARGE_CIRCLE         = "\u2B55"; /* HEAVY */
let SYMBOL_WHITE_CIRCLE         = "\u26AA"; /* MEDIUM_WHITE */

let SYMBOL_UP                   = "\u25B2";
let SYMBOL_RIGHT                = "\u25B6";
let SYMBOL_DOWN                 = "\u25BC";
let SYMBOL_LEFT                 = "\u25C0";
/*
:new /LOCAL/DATA/ANDROID/PROJECTS/RTabs/app/src/main/java/ivanwfr/rtabs/Settings.java
*/
let SYMBOL_MAILBOX              = "\uD83D\uDCEC"; /* NO */
let SYMBOL_TRAFFIC              = "\uD83D\uDEA6"; /* NO */
let SYMBOL_MAGNIFY_LEFT         = "\uD83D\uDD0D"; /* 1f50d works */
let SYMBOL_MAGNIFY_RIGHT        = "\uD83D\uDD0E"; /* 1f50e works */
let SYMBOL_CONSTRUCTION         = "\uD83D\uDEA7"; /* works */
/*
let SYMBOL_PAT_BAG              = "<span class='sym_bag'>"+     SYMBOL_SCISSORS         +"</span>";
let SYMBOL_OFF_BAG              = "<span class='sym_bag'>"+     SYMBOL_HOURGLASS        +"</span>";
let SYMBOL_BAK_BAG              = "<span class='sym_bag'>"+     SYMBOL_WATCH            +"</span>";
let SYMBOL_BIN_BAG              = "<span class='sym_bag'>"+     SYMBOL_HEAVY_BALLOT     +"</span>";
*/
let SYMBOL_SEL                  = "<span class='sym_showing'>"+ SYMBOL_CHECK_MARK       +"</span> show";
let SYMBOL_HID                  = "<span class='sym_hiding' >"+ SYMBOL_HEAVY_BALLOT     +"</span> hide";
let SYMBOL_BAK                  = "<span class='sym_backing'>"+ SYMBOL_SQUARE_HFILL     +"</span> save";
let SYMBOL_ALT                  = "<span class='sym_alting'>" + SYMBOL_WHITE_SQUARE     +"</span> save";

let SYMBOL_COLIDE               =   "<em class='sym_colide' >"+ SYMBOL_WARNING          +"</em> SELECTED";
let SYMBOL_DISMISS              =   "<em class='sym_dismiss'>"+ SYMBOL_LEFT_RIGHT_ARROW +"</em> DISMISS" ;

let SYMBOL_CLEAR_BAK            =   "<em class='sym_backing'>"+ SYMBOL_BLACK_CIRCLE     +"</em> <em class='want cc2'>CLRBAK</em>";
let SYMBOL_CLEAR_BIN            =   "<em class='sym_binning'>"+ SYMBOL_BLACK_CIRCLE     +"</em> <em class='want cc0'>CLRBIN</em>";

let SYMBOL_UPDATE               =   "<em class='sym_update' >"+ SYMBOL_EXCLAM_QUESTION  +"</em> <em class='want cc3'>ASSIGN</em>";
let SYMBOL_STAGE                =   "<em class='sym_staged' >"+ SYMBOL_DBL_EXCLAM       +"</em> <em class='have cc6'>STAGED</em>"; /* @see phase_color */
let SYMBOL_RESULT               =   "<em class='sym_result' >"+ SYMBOL_CONSTRUCTION     +"</em> <em class='have cc4'>RESULT</em>"; /* @see phase_color */

let SYMBOL_BAGGER               =   "<em class='sym_bagger' >"+ SYMBOL_BLACK_SMILEY     +"</em>";
let SYMBOL_DOCKER               =   "<em class='sym_docker' >"+ SYMBOL_BLACK_SMILEY     +"</em>";

/* }}} */
/* SYM {{{*/

let SAU = "\u2191"; /* &#x2191; .. SYMBOL ARROW UP       */
let SAR = "\u2192"; /* &#x2192; .. SYMBOL ARROW RIGHT    */
let SAD = "\u2193"; /* &#x2193; .. SYMBOL ARROW DOWN     */
let SAL = "\u21AA"; /* &#x21AA; .. SYMBOL ARROW LEFT     */

let SHV = "\u26A1"; /* &#x26A1; .. HIGH VOLTAGE SIGN     */
let SYN = "\u25CF"; /* &#x25CF; .. SYMBOL BLACK CIRCLE   */
let SBS = "\u2605"; /* &#x2605; .. SYMBOL BLACK STAR     */

let SD0 = "\u24EA"; /* &#x2775; ..       CIRCLED DIGIT  0 */
let SD1 = "\u2776"; /* &#x2776; .. BLACK CIRCLED DIGIT  1 */
let SD2 = "\u2777"; /* &#x2777; .. BLACK CIRCLED DIGIT  2 */
let SD3 = "\u2778"; /* &#x2778; .. BLACK CIRCLED DIGIT  3 */
let SD4 = "\u2779"; /* &#x2779; .. BLACK CIRCLED DIGIT  4 */
let SD5 = "\u277A"; /* &#x277A; .. BLACK CIRCLED DIGIT  5 */
let SD6 = "\u277B"; /* &#x277B; .. BLACK CIRCLED DIGIT  6 */
let SD7 = "\u277C"; /* &#x277C; .. BLACK CIRCLED DIGIT  7 */
let SD8 = "\u277D"; /* &#x277D; .. BLACK CIRCLED DIGIT  8 */
let SD9 = "\u277E"; /* &#x277E; .. BLACK CIRCLED DIGIT  9 */
let SDA = "\u277F"; /* &#x277F; .. BLACK CIRCLED DIGIT 10 */
let SDB = "\u24EB"; /* &#x27EB; .. BLACK CIRCLED DIGIT 11 */
let SDC = "\u24EC"; /* &#x27EC; .. BLACK CIRCLED DIGIT 12 */
let SDD = "\u24ED"; /* &#x27ED; .. BLACK CIRCLED DIGIT 13 */
let SDE = "\u24EE"; /* &#x27EE; .. BLACK CIRCLED DIGIT 14 */
let SDF = "\u24EF"; /* &#x27EF; .. BLACK CIRCLED DIGIT 15 */
let SDX = [ SD0 ,SD1 ,SD2 ,SD3 ,SD4 ,SD5 ,SD6 ,SD7 ,SD8 ,SD9 ];
/*}}}*/
/* [target_tool] {{{*/
let SYMBOL_TT_PIN               = SYMBOL_HEAVY_BALLOT;
let SYMBOL_TT_PASTE             = SYMBOL_DOWN_ARROW;

/*}}}*/

/* HTML */
/* PARENT CHILD {{{*/
/*_ is_el_child_of_class {{{*/
let is_el_child_of_class = function(el, className)
{
    while(el && (el = el.parentElement) && !el.classList.contains(className))
        ;
    return (el != null);
};
/*}}}*/
/*_ is_el_or_child_of_parent_el {{{*/
let is_el_or_child_of_parent_el = function(el, parent_el)
{
    if(!parent_el) return false;

    while(el && (el != parent_el))
        el = el.parentElement;

    return (el == parent_el);
};
/*}}}*/
/*_ is_a_doc_tool_panel {{{*/
let is_a_doc_tool_panel = function(node)
{
    return node.classList.contains("transcript")
};
/*}}}*/
/*_ is_a_doc_tool_button {{{*/
let is_a_doc_tool_button = function(node)
{
    return is_el_child_of_class(node,"transcript")
};
/*}}}*/
/*_ get_el_parent_with_id {{{*/
let get_el_parent_with_id = function(el)
{
    do {
        el = el.parentElement;
    } while(el && !el.id);

    return  el;
};
/*}}}*/
/*_ get_el_parent_with_tag {{{*/
let get_el_parent_with_tag = function(el,tag)
{
    while(el && (el.tagName != tag))
        el = el.parentElement;

    if(    !el                        ) return null;
    return (         tag == el.tagName) ? el : null;
};
/*}}}*/
/*_ get_el_parent_with_class {{{*/
let get_el_parent_with_class = function(el, className)
{
    while(   el ) {
        if(  el.classList.contains( className )) return el;
        el = el.parentElement;
    }
    return null;
};
/*}}}*/
/*_ get_el_child_with_tag {{{*/
let get_el_child_with_tag = function(parent,tag)
{
    for(let     c = 0; c < parent.children.length; ++c) {
        let child = parent.children[c];
        if((child != null) && (child.tagName == tag))
            return child;
    }
    return null;
};
/*}}}*/
/*_ get_el_child_with_class {{{*/
let get_el_child_with_class = function(parent,className)
{
    if(!parent) return null;

    for(let c=0; c < parent.childNodes.length; ++c) {
        let child  = parent.childNodes[c];
        if((child != null) && has_el_class(child, className))
            return child;
    }

    return null;
};
/*}}}*/
/*}}}*/
/* EVENTS {{{*/
/*_ get_onDown_is_on_scrollbar {{{*/
let get_onDown_is_on_scrollbar = function(e)
{
    let result
        =  (e.clientX > document.documentElement.clientWidth )
        || (e.clientY > document.documentElement.clientHeight)
    ;
/*{{{
logXXX("get_onDown_is_on_scrollbar: ...return "+ result);
console.dir(e)
logXXX(".......................e.target=["+ get_n_lbl(e.target)                                                             +"]");
logXXX(".............................XY=["+ e.clientX +" "+ e.clientY                                                       +"]");
logXXX("...document.documentElement. WH=["+ document.documentElement.clientWidth +" "+ document.documentElement.clientHeight+"]");
}}}*/
    return result;
};
/*}}}*/
/*_ get_el_parent_with_any_event_handler {{{*/
let get_el_parent_with_any_event_handler = function(el)
{
    while(el
           && !get_el_mouse_event_handler(el)
           && !get_el_onkey_event_handler(el)
           && !get_el_input_event_handler(el)
         )
        el = el.parentElement;

    return el;
};
/*}}}*/
/*_ get_el_mouse_event_handler {{{*/
let get_el_mouse_event_handler = function(el)
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
/*_ get_el_onkey_event_handler {{{*/
let get_el_onkey_event_handler = function(el)
{
    if(!el)                    return null;
    if(el.onkeydown   != null) return el.onkeydown  ;
    if(el.onkeypress  != null) return el.onkeypress ;
    if(el.onkeyup     != null) return el.onkeyup    ;
    else                       return null;
};
/*}}}*/
/*_ get_el_input_event_handler {{{*/
let get_el_input_event_handler = function(el)
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
/*_ get_el_event_handler {{{*/
let get_el_event_handler = function(el, _caller)
{
let log_this = (LOG_MAP.EV0_LISTEN || logging_EVENTS);

    /* [e_target_or_parent] with handler {{{*/
    if(!el) return null;

    let e_target_or_parent = get_el_parent_with_any_event_handler( el );

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
    let label = get_el_event_handler_label(el, e_target_or_parent, handler);

if(log_this) log("%c get_el_event_handler("+get_n_lbl(el)+") .. CALLED BY ["+ _caller+"]: ...return handler=["+((handler != null) ? "function" : "null")+"]"+LF+"%c"+label,lb6,lbF);

    return { handler:handler , label:label }
};
/*}}}*/
/*_ get_el_event_handler_label {{{*/
let get_el_event_handler_label = function(el, e_target_or_parent, handler)
{
    let el_label
        =          ( e_target_or_parent               !=  el )
        ? get_n_lbl( e_target_or_parent )+" "+ get_n_lbl( el )
        :                                      get_n_lbl( el )
    ;

    let handler_code = ellipsis(strip_CR_LF( handler.toString() ), 128);

    return "["+el_label +"] "+ handler_code;
};
    /*}}}*/
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
/*}}}*/
/* XY {{{*/
/*_ get_el_xy {{{*/
let get_el_xy = function(el, _caller)
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
/*_ get_el_xy_computed {{{*/
let get_el_xy_computed = function(el, _caller)
{
    let cs = window.getComputedStyle(el);
    let  x = parseInt(cs.Left);
    let  y = parseInt(cs.Top );
    return { x: x, y: y };
};
/*
*/
/*}}}*/
/*}}}*/
/* LAYOUT {{{*/
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

/*  return document.body.scrollHeight; */ /* VIEWABLE+OVERFLOW +PADDING                    -border -scrollbar -margin */
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
/* CSS_CLASS {{{*/
let has_el_class     = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };
let add_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
let set_el_class     = function(el, className) { if(!el || !el.classList) return      ;                                            el.className       = className  ; };
/*_ flip_el_class {{{*/
let flip_el_class = function(el_or_id, className)
{
    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    if( has_el_class(el, className) ) del_el_class(el, className);
    else                              add_el_class(el, className);
};
/*}}}*/
let flip_id_class = flip_el_class;
/*_ set_id_class_on_off {{{*/
let set_id_class_on_off = function(id, className, on_off)
{
    let el = get_tool(id);
    if(!el) return;

    set_el_class_on_off(el, className, on_off);
};
/*}}}*/
/*_ set_el_class_on_off {{{*/
let set_el_class_on_off = function(el, className, on_off)
{
    if(on_off) add_el_class(el, className);
    else       del_el_class(el, className);
};
/*}}}*/
/*_ set_el_class_removing {{{*/
let set_el_class_removing = function(el_or_id, class_to_add, classes_to_remove)
{
    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    /* [classes_to_remove] */
    let removed = "";
    for(let i=0; i <              classes_to_remove.length; ++i)
    {
        if(el.classList.contains( classes_to_remove[i] )) {
            el.classList.remove ( classes_to_remove[i] );
            removed =             classes_to_remove[i]  ;
        }
    }

    /* [class_to_add] */
    if(class_to_add)
    {
        if(!el.classList.contains   ( class_to_add ))
            el.classList.add        ( class_to_add );
    }

    return removed;
};
/*}}}*/
/*_ cycle_el_classList {{{*/
let cycle_el_classList = function(el_or_id, classList)
{
    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    /* REMOVE ALL OF [classList] */
    let next_picked;
    for(let i=0; i <              classList.length; ++i) {
        if(el.classList.contains( classList[i] ))
        {
            el.classList.remove ( classList[i] );
            next_picked    =      classList[i+1];
        }
    }

    /* ADD [next_picked] */
    if(!next_picked) next_picked = classList[0];
    if( next_picked) el.classList.add( next_picked );

/*{{{
let txt = "";
for(let i=0; i < classList.length; ++i) {
    txt += (next_picked == classList[i])
    ? " ["+classList[i]+"]"
    :  " "+classList[i];
}
logXXX(txt);
}}}*/
    return next_picked;
};
/*}}}*/
let cycle_id_classList = cycle_el_classList;
/*}}}*/

/* STRING */
/* REGEX {{{*/
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
let strip_UL   = function(text)
{
    return text
        .   replace(regexp_ULX, LF    )
        .   replace(regexp_UL , " "   )
        .   trim()
    ;
};
/*}}}*/
/*_ strip_to_lines {{{*/
let strip_to_lines = function(text)
{
    return text
        .   replace(regexp_BRACKET_O, LF)
        .   replace(regexp_COMMA    , LF)
        .   replace(regexp_BRACKET_C, "")
    ;
};
/*}}}*/
/*_ trim_WORDS {{{*/
let regexp_NW_S = new RegExp("^ *[^0-9~A-z\\xC0-\\xFF]+"   , "g");
let regexp_NW_E = new RegExp(   "[^0-9~A-z\\xC0-\\xFF]+ *$", "g");
let trim_WORDS = function(text)
{
    return text
        .   replace(regexp_NW_S, "")
        .   replace(regexp_NW_E, "")
    ;
};
/*}}}*/
/*_ tokenize {{{*/
/* ............................................................... HOSTNAME__________   PATHNAME_______ */
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
/*_ comma_to_vbar    {{{*/
let comma_to_vbar    = function(text)
{
    return text
        .   replace(regexp_COMMA_ASC, "|")
    ;
};
/*}}}*/
/*_ vbar_to_up_arrow {{{*/
let vbar_to_up_arrow = function(text)
{
    return text
        .   replace(regexp_VBAR, SYMBOL_UP_ARROW)
    ;
};
/*}}}*/
/*_ vbar_to_comma    {{{*/
let vbar_to_comma    = function(text)
{
    return text
        .   replace(regexp_VBAR, ",")
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
let regexp_EM_O  = new RegExp("<em[^>]*> *"              , "g");
let regexp_EM_C  = new RegExp(" *</em[^>]*>"             , "g");
let regexp_EOL   = new RegExp("<(ol|ul|/li|/div|br|pre)>", "g");
let regexp_HTML  = new RegExp("<[^>]*>"                  , "g");
let regexp_ENTT  = new RegExp("&\\w+;"                   , "g");
let regexp_HLEAD = new RegExp("\\[\\s*\\["               , "g");
let regexp_HTAIL = new RegExp("\\]\\s*\\]"               , "g");
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
        .   replace(regexp_HTML , " "         )
        .   replace(regexp_SPACE, " "         )
        .   replace(regexp_ENTT , SYMBOL_EMPTY)
        .   replace(regexp_HLEAD , "["        )
        .   replace(regexp_HTAIL , "]"        )
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
/*_ underline_to_space {{{*/
let regexp_UNDERLINE = new RegExp("_", "g");
let underline_to_space = function(text)
{
    return text
        .   replace(regexp_UNDERLINE,  " ")
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
let regexp_egrave_to_char      = new RegExp("\\xE8", "g"); var char_egrave = String.fromCharCode(0xE8); /* E-GRAVE */
let regexp_eacute_to_char      = new RegExp("\\xE9", "g"); var char_eacute = String.fromCharCode(0xE9); /* E-ACUTE */
let character_entities_to_char = function(text)
{
    return text
        .   replace(regexp_eacute_to_char, char_eacute)
        .   replace(regexp_egrave_to_char, char_egrave)
    ;
};
/*}}}*/
/*_ character_entities_to_hex {{{*/
let regexp_egrave_to_hex      = new RegExp(String.fromCharCode(0xE8), "g"); var hex_egrave = "\\xE8"; /* E-GRAVE */
let regexp_eacute_to_hex      = new RegExp(String.fromCharCode(0xE9), "g"); var hex_eacute = "\\xE9"; /* E-ACUTE */
let character_entities_to_hex = function(text)
{
    return text
        .   replace(regexp_eacute_to_hex, hex_eacute)
        .   replace(regexp_egrave_to_hex, hex_egrave)
    ;
};
/*}}}*/

/*}}}*/
/* CSV {{{*/
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
/*_ csv_ins {{{*/
let csv_ins = function(csv, val)
{
/*
logXXX("csv_ins(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
*/
    if(                     !val  ) return csv;
    val = csv_escape(val);
    if(             !csv          ) return val;
    if( csv_contains(csv,    val) ) return csv; /* as a SET (i.e. NOT as a BAG) */
/*
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
logXXX(".return val=[%c"+csv+","+val+"%c]", lb2,lbA)
*/
    return           val+","+csv;
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
        for(let i=0; i < a.length; ++i) {
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
/*_ csv_del_last {{{*/
let csv_del_last = function(csv)
{
    if(!csv       ) return csv;
/*
logXXX("csv_del_last(csv=[%c"+csv+"%c])", lb1,lbA)
*/

        let a = csv.split(",");
        csv = "";
        for(let i=0; i < (a.length-1); ++i) {
            if(!csv)  csv  =     a[i]; /* first */
            else      csv += ","+a[i]; /*  more */
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
        if(csv) log("%c "+title                , lbb+lbH+lf9     );
        else    log("%c "+title+"%c IS  EMPTY ", lbL+lb9, lbR+lb0);
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
let regexp_VBAR      = new RegExp("\\|"    , "g");

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
    for(let i = 0; i < v.length; ++i)
    {
        if(!csv_contains(csv, v[i]) )
            csv      += "," + v[i];
    }
    return csv;
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
    if(reverse) v = v.sort( function(a, b) { return a.toLowerCase() > b.toLowerCase() ? -1 : 1; } );
    else        v = v.sort( function(a, b) { return b.toLowerCase() > a.toLowerCase() ? -1 : 1; } );

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
/*}}}*/
/* STRING {{{*/
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

/* DOM NODES */
/*{{{*/
/*_ node_toString {{{ */
let node_toString = function(node)
{
    let caller = "node_toString";
    if(!node) return "<span class='gr'>"+caller+"(null_node)</span>";

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
    if(!node                 ) return "null_node";
    if( node == window       ) return "window";
    if( node == document.body) return "body";

/*{{{
    if(node.id ) try   { return                   node.tagName +"#"+ node.id                                      ; } catch(ex) {}
}}}*/
    if(node.id ) try   { return       get_t_str(node.nodeType) +"#"+ node.id                                      ; } catch(ex) {}

    let                  n_lbl = null;
    try                { n_lbl =                  node.tagName +    (node.className ? ("."+ node.className) : "") ; } catch(ex) {}
    if(   n_lbl ) try  { n_lbl+=" .. TEXT=["+ truncate(node.textContent,  24)+"]"                                 ; } catch(ex) {}
    if(   n_lbl ) return n_lbl;

    try                { return     "TEXT=["+ truncate(node.textContent,  24)+"]"                                 ; } catch(ex) {}
    try                { return                   node.tagName                                                    ; } catch(ex) {}
    try                { return                   node.nodeType                                                   ; } catch(ex) {}

    return "";
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
    if(!node) return "null_node";
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
/*_ get_id_or_tag {{{ */
let get_id_or_tag = function(node)
{
    return !node           ? "null_node"
        :   node.id        ? "#"+ node.id
        :   node.className ? node.tagName+"."+ node.className
        :                    node.tagName
    ;
};
/*  get_parentage {{{*/
let get_parentage = function(node)
{
    let names = get_id_or_tag(node);
    while(        node
              && (node != document.body)
              && (node != document.documentElement)
         ) {
        node            = node.parentNode;
        names           = get_id_or_tag(node)+" . "+names;
    }
    return names;
};
/*}}}*/
/*}}}*/
/*}}}*/

