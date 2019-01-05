"use strict";
/* dom_log_js */
let DOM_LOG_JS_ID        = "dom_log_js";
let DOM_LOG_JS_TAG       = DOM_LOG_JS_ID  +" (181230:00h)";
/* console_clear_post {{{*/
/*{{{*/
const CONSOLE_CLEAR_COOLDOWN_DELAY = 1000;

let console_clear_cooldown_timeout;
/*}}}*/
let console_clear_post = function(msg=null)
{
    if( console_clear_cooldown_timeout )
    {
        log("%c LOG PRESERVED FOR "+CONSOLE_CLEAR_COOLDOWN_DELAY+"ms", lbB+lbH+lf4);
        return;
    }

    console_clear( msg );

    console_clear_cooldown_timeout
        = setTimeout( function() {
                         console_clear_cooldown_timeout = null;
                     }
                     , CONSOLE_CLEAR_COOLDOWN_DELAY);

};
/*}}}*/
/* ECC (181108) {{{*/
const lbA  = "background-color:inherit;   color:inherit;";

const lbF  = "font-size:120%; font-weight:500; border:2px solid white;";
const lbb  = "font-size:150%; font-weight:900; margin:0 0 0 0;";
const lbB  = "font-size:300%; font-weight:900; margin:0 0 0 0;";
const lbS  = "font-size:800%; font-weight:900; margin:0 0 0 0;";

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

/*{{{*/
let logging_EVENTS;
let logging_HIGHLIGHT;
let logging_TOOLBAR;

let LOG_MAP = {
    LOG_IPC        : false,
    EV0_LISTEN     : false,
    EV1_DOWN       : false,
    EV2_MOVE       : false,
    EV3_UP         : false,
    EV4_LONG_PRESS : false,
    EV5_TOOL_CB    : false,
    EV6_CHANGED    : false,
    EV7_DISPATCH   : false,
    EV8_FLOATLOG   : false,
    S1_RANGE       : false,
    S2_SELECT      : false,
    S3_SLOT        : false,
    T0_STORE       : false,
    T1_DOM_LOAD    : false,
    T2_GRID        : false,
    T3_LAYOUT      : false,
    T4_PIVOT       : false,
    T5_SPREAD      : false,
    T6_SLOT        : false
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

let log_HTML   =  "";
let log_count  = 0;
/* }}} */
/*  logging_load_LOG_MAP {{{*/
let logging_load_LOG_MAP = function()
{
   if(typeof store_getBool === 'undefined') return;

    LOG_IPC                = store_getBool("LOG_IPC"          ) ? true : false;
    logging_EVENTS         = store_getBool("logging_EVENTS"   ) ? true : false;
    logging_HIGHLIGHT      = store_getBool("logging_HIGHLIGHT") ? true : false;
    logging_TOOLBAR        = store_getBool("logging_TOOLBAR"  ) ? true : false;

    LOG_MAP.EV0_LISTEN     = store_getBool("EV0_LISTEN"       ) ? true : false;
    LOG_MAP.EV1_DOWN       = store_getBool("EV1_DOWN"         ) ? true : false;
    LOG_MAP.EV2_MOVE       = store_getBool("EV2_MOVE"         ) ? true : false;
    LOG_MAP.EV3_UP         = store_getBool("EV3_UP"           ) ? true : false;
    LOG_MAP.EV4_LONG_PRESS = store_getBool("EV4_LONG_PRESS"   ) ? true : false;
    LOG_MAP.EV5_TOOL_CB    = store_getBool("EV5_TOOL_CB"      ) ? true : false;
    LOG_MAP.EV6_CHANGED    = store_getBool("EV6_CHANGED"      ) ? true : false;
    LOG_MAP.EV7_DISPATCH   = store_getBool("EV7_DISPATCH"     ) ? true : false;
    LOG_MAP.EV8_FLOATLOG   = store_getBool("EV8_FLOATLOG"     ) ? true : false;
    LOG_MAP.S1_RANGE       = store_getBool("S1_RANGE"         ) ? true : false;
    LOG_MAP.S2_SELECT      = store_getBool("S2_SELECT"        ) ? true : false;
    LOG_MAP.S3_SLOT        = store_getBool("S3_SLOT"          ) ? true : false;
    LOG_MAP.T0_STORE       = store_getBool("T0_STORE"         ) ? true : false;
    LOG_MAP.T1_DOM_LOAD    = store_getBool("T1_DOM_LOAD"      ) ? true : false;
    LOG_MAP.T2_GRID        = store_getBool("T2_GRID"          ) ? true : false;
    LOG_MAP.T3_LAYOUT      = store_getBool("T3_LAYOUT"        ) ? true : false;
    LOG_MAP.T4_PIVOT       = store_getBool("T4_PIVOT"         ) ? true : false;
    LOG_MAP.T5_SPREAD      = store_getBool("T5_SPREAD"        ) ? true : false;
    LOG_MAP.T6_SLOT        = store_getBool("T6_SLOT"          ) ? true : false;
};
/*}}}*/
/*  logging_toggle {{{ */
let logging_toggle = function(keyword)
{
let caller = "logging_toggle("+keyword+")";
log(caller);

   if(typeof store_set_state === 'undefined') return;

    let changed = "";
    switch( keyword ) {
        case KEY_LOG_IPC       : LOG_IPC                = !LOG_IPC                ; changed = keyword+"="+LOG_IPC               ; store_set_state("LOG_IPC"            , LOG_IPC                ); break;
        case KEY_LOG_EVENTS    : logging_EVENTS         = !logging_EVENTS         ; changed = keyword+"="+logging_EVENTS        ; store_set_state("logging_EVENTS"     , logging_EVENTS         ); break;
        case KEY_LOG_HIGHLIGHT : logging_HIGHLIGHT      = !logging_HIGHLIGHT      ; changed = keyword+"="+logging_HIGHLIGHT     ; store_set_state("logging_HIGHLIGHT"  , logging_HIGHLIGHT      ); break;
        case KEY_LOG_TOOLBAR   : logging_TOOLBAR        = !logging_TOOLBAR        ; changed = keyword+"="+logging_TOOLBAR       ; store_set_state("logging_TOOLBAR"    , logging_TOOLBAR        ); break;
        case "EV0_LISTEN"      : LOG_MAP.EV0_LISTEN     = !LOG_MAP.EV0_LISTEN     ; changed = keyword+"="+LOG_MAP.EV0_LISTEN    ; store_set_state("EV0_LISTEN"         , LOG_MAP.EV0_LISTEN     ); break;
        case "EV1_DOWN"        : LOG_MAP.EV1_DOWN       = !LOG_MAP.EV1_DOWN       ; changed = keyword+"="+LOG_MAP.EV1_DOWN      ; store_set_state("EV1_DOWN"           , LOG_MAP.EV1_DOWN       ); break;
        case "EV2_MOVE"        : LOG_MAP.EV2_MOVE       = !LOG_MAP.EV2_MOVE       ; changed = keyword+"="+LOG_MAP.EV2_MOVE      ; store_set_state("EV2_MOVE"           , LOG_MAP.EV2_MOVE       ); break;
        case "EV3_UP"          : LOG_MAP.EV3_UP         = !LOG_MAP.EV3_UP         ; changed = keyword+"="+LOG_MAP.EV3_UP        ; store_set_state("EV3_UP"             , LOG_MAP.EV3_UP         ); break;
        case "EV4_LONG_PRESS"  : LOG_MAP.EV4_LONG_PRESS = !LOG_MAP.EV4_LONG_PRESS ; changed = keyword+"="+LOG_MAP.EV4_LONG_PRESS; store_set_state("EV4_LONG_PRESS"     , LOG_MAP.EV4_LONG_PRESS ); break;
        case "EV5_TOOL_CB"     : LOG_MAP.EV5_TOOL_CB    = !LOG_MAP.EV5_TOOL_CB    ; changed = keyword+"="+LOG_MAP.EV5_TOOL_CB   ; store_set_state("EV5_TOOL_CB"        , LOG_MAP.EV5_TOOL_CB    ); break;
        case "EV6_CHANGED"     : LOG_MAP.EV6_CHANGED    = !LOG_MAP.EV6_CHANGED    ; changed = keyword+"="+LOG_MAP.EV6_CHANGED   ; store_set_state("EV6_CHANGED"        , LOG_MAP.EV6_CHANGED    ); break;
        case "EV7_DISPATCH"    : LOG_MAP.EV7_DISPATCH   = !LOG_MAP.EV7_DISPATCH   ; changed = keyword+"="+LOG_MAP.EV7_DISPATCH  ; store_set_state("EV7_DISPATCH"       , LOG_MAP.EV7_DISPATCH   ); break;
        case "EV8_FLOATLOG"    : LOG_MAP.EV8_FLOATLOG   = !LOG_MAP.EV8_FLOATLOG   ; changed = keyword+"="+LOG_MAP.EV8_FLOATLOG  ; store_set_state("EV8_FLOATLOG"       , LOG_MAP.EV8_FLOATLOG   ); break;
        case "S1_RANGE"        : LOG_MAP.S1_RANGE       = !LOG_MAP.S1_RANGE       ; changed = keyword+"="+LOG_MAP.S1_RANGE      ; store_set_state("S1_RANGE"           , LOG_MAP.S1_RANGE       ); break;
        case "S2_SELECT"       : LOG_MAP.S2_SELECT      = !LOG_MAP.S2_SELECT      ; changed = keyword+"="+LOG_MAP.S2_SELECT     ; store_set_state("S2_SELECT"          , LOG_MAP.S2_SELECT      ); break;
        case "S3_SLOT"         : LOG_MAP.S3_SLOT        = !LOG_MAP.S3_SLOT        ; changed = keyword+"="+LOG_MAP.S3_SLOT       ; store_set_state("S3_SLOT"            , LOG_MAP.S3_SLOT        ); break;
        case "T0_STORE"        : LOG_MAP.T0_STORE       = !LOG_MAP.T0_STORE       ; changed = keyword+"="+LOG_MAP.T0_STORE      ; store_set_state("T0_STORE"           , LOG_MAP.T0_STORE       ); break;
        case "T1_DOM_LOAD"     : LOG_MAP.T1_DOM_LOAD    = !LOG_MAP.T1_DOM_LOAD    ; changed = keyword+"="+LOG_MAP.T1_DOM_LOAD   ; store_set_state("T1_DOM_LOAD"        , LOG_MAP.T1_DOM_LOAD    ); break;
        case "T2_GRID"         : LOG_MAP.T2_GRID        = !LOG_MAP.T2_GRID        ; changed = keyword+"="+LOG_MAP.T2_GRID       ; store_set_state("T2_GRID"            , LOG_MAP.T2_GRID        ); break;
        case "T3_LAYOUT"       : LOG_MAP.T3_LAYOUT      = !LOG_MAP.T3_LAYOUT      ; changed = keyword+"="+LOG_MAP.T3_LAYOUT     ; store_set_state("T3_LAYOUT"          , LOG_MAP.T3_LAYOUT      ); break;
        case "T4_PIVOT"        : LOG_MAP.T4_PIVOT       = !LOG_MAP.T4_PIVOT       ; changed = keyword+"="+LOG_MAP.T4_PIVOT      ; store_set_state("T4_PIVOT"           , LOG_MAP.T4_PIVOT       ); break;
        case "T5_SPREAD"       : LOG_MAP.T5_SPREAD      = !LOG_MAP.T5_SPREAD      ; changed = keyword+"="+LOG_MAP.T5_SPREAD     ; store_set_state("T5_SPREAD"          , LOG_MAP.T5_SPREAD      ); break;
        case "T6_SLOT"         : LOG_MAP.T6_SLOT        = !LOG_MAP.T6_SLOT        ; changed = keyword+"="+LOG_MAP.T6_SLOT       ; store_set_state("T6_SLOT"            , LOG_MAP.T6_SLOT        ); break;
    }

log_add_TR_LAYOUT("<em class='big'>TOGGLE LOGGING ["+ keyword +"] changed=["+changed+"]</em>");
    if(changed)
    {
        t8_load_LOG_MAP();

        if(keyword == "EV8_FLOATLOG"  ) t_log_set_state( LOG_MAP.EV8_FLOATLOG   ); /* set both [DISPLAY OPTION] and saved [LOGGING OPTION] */

        t_sync_layout(caller);

    }
    return changed;
};
/* }}} */
/* logging_something {{{*/
let logging_something = function()
{
    if(onDown_SHIFT) return false;

    return     logging_EVENTS
        ||     logging_HIGHLIGHT
        ||     LOG_MAP.EV0_LISTEN
        ||     logging_TOOLBAR

    /* EVENTS */
        ||     LOG_MAP.EV1_DOWN
        ||     LOG_MAP.EV2_MOVE
        ||     LOG_MAP.EV3_UP
        ||     LOG_MAP.EV4_LONG_PRESS
        ||     LOG_MAP.EV5_TOOL_CB
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
        ||     LOG_MAP.T1_DOM_LOAD
        ||     LOG_MAP.T2_GRID
        ||     LOG_MAP.T3_LAYOUT
        ||     LOG_MAP.T4_PIVOT
        ||     LOG_MAP.T5_SPREAD
        ||     LOG_MAP.T6_SLOT

    ;
};
/*}}}*/
/*  log_key_val {{{*/
let log_key_val       = function(name, o, lxx       ) { return log_key_val_group(name, o, lxx, true); };
let log_key_val_group = function(name, o, lxx, group)
{
    if(!o) {
        log(name+": %c null object ", (lxx || lb0));
        return "";
    }

/*{{{                  log("%c"+name, lbH+(lxx || lb0)); }}}*/
    if(group) console.groupCollapsed("%c"+SYMBOL_RIGHT+" "+name+"...", lbH+(lxx || lb0));
    else      console.log           ("%c"+SYMBOL_RIGHT+" "+name      , lbH+(lxx || lb0));
    let s = ""; let n = 1;
    Object.keys(o).forEach(
        function(key) {
            let val = o[key];
            let lbV =    (val ==  null         ) ?     lb2 /* NULL      */
                :        (val == "null_node"   ) ?     lb0 /* UNDEFINED */
                :        (val ==  undefined    ) ?     lb0 /* UNDEFINED */
                :        (val == "NO"          ) ?     lf3 /* NOTHING   */
                :        (val == "[]"          ) ?     lf3 /* NOTHING   */
                :        (val ==  false        ) ?     lf3 /* FALSE     */
                :        (val ==  true         ) ?     lb5 /* TRUE      */
                : (String(val).indexOf(LF) >= 0) ? lbH+lf5 /* SUBSTANCE */
                :                                      lf4 /* SOMETHING */
            ;
            log(" %c|||%c "+mPadStart(key, 32)     +" %c"+ log_object_val_format(o[key]), lb0,(lxx || lb0),lbV);
            s +=   "||| "+key+" <em class='cc"+(++n)+"'>"+ log_object_val_format(o[key]) +"</em><br>"+LF       ;
        }
    );
    if(group) console.groupEnd();
    return s;
};
/*}}}*/
/*_ log_object_val_format {{{*/
let log_object_val_format = function(val)
{
    let                                  text = String(val);
    if     ( !text                     ) text = "[]";
    else if(  typeof val == "object"   ) text = log_json(val, true); /* one_liner */
    else if(  typeof val == "function" ) text = SYMBOL_FUNCTION +" "+ (val.name || "anonymous");
    else if(  text.indexOf(LF) >= 0    ) text = text.replace(regexp_LF, LF);
    return    text;
};
/*}}}*/
/* log_json {{{*/
let regexp_BRACES = new RegExp("^{|}$"                    , "g");
let regexp_BSLASH = new RegExp("\\\\"                     , "g");
let regexp_URL_64 = new RegExp('"url":"([^"]{1,64})[^"]*"', "g");
let regexp_QUOTE  = new RegExp("[\\u0022\\u0027]", "g"); /* "' */
let regexp_COMMA  = new RegExp(" *, *", "g");
let log_json = function(val, one_liner=false)
{
    if(val == null     ) return "null";
    if(val == undefined) return "undefined";
    if(val.id          ) return "#"+val.id;
    if(val.tagName     ) return     val.tagName;

    let result = JSON.stringify(val)
        .        replace(regexp_URL_64, '"url":"$1..."')
        .        replace(regexp_BRACES, "")
        .        replace(regexp_QUOTE , "")
        .        replace(regexp_BSLASH, "")
        .        trim();

    result = result.replace(regexp_COMMA, (one_liner ? " .. " : LF));

    return result;
};

/*}}}*/
/* log {{{ */
/*{{{*/
const LOG_MAX     = 50000;
const CLEAR       = "DEFAULT_TO_CLEAR";
let   log_is_full = false;
/*}}}*/
let s_log = function(first_arg=CLEAR, ...args)
{
    /* [log_msg] {{{*/
    let log_msg = !first_arg ? CLEAR : first_arg.trim();

    /*}}}*/
/*
console.log("@@@")
console.log("@@@ log_msg=["+log_msg+"]")
for(let i=0; i < args.length; ++i) console.log("@@@ args["+i+"]=["+args[i]+"]");
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
/*  log_warn {{{*/
/*{{{*/
const LOG_WARN_COOLDOWN_DELAY = 2000;
const LOG_WARN_DIV            = "log_warn_div";
let   log_warn_timer;
let   log_warn_div;

/*}}}*/
let log_warn = function(caller, msg)
{
    console.warn("log_warn from %c"+caller+"%c .. %c"+strip_html(msg), lbH+lf5, lbA, lbH+lbb+lf4);
    /* [log_warn_div] {{{*/
    if(!log_warn_div) {
        let parent = document.body;
        if(!parent ) return;

        log_warn_div                          = document.createElement("DIV");
        log_warn_div.id                       = LOG_WARN_DIV;
        log_warn_div.className                = "big box_panel";
        log_warn_div.style.position           = "absolute";
        log_warn_div.style.background         = "rgba(191,191,191,0.9)";
        log_warn_div.style.transitionDuration = "250ms";
        parent.insertBefore(log_warn_div, parent.firstChild);
    }
    /*}}}*/
    /* SHOW {{{*/
    log_warn_div.innerHTML                    = msg;
    log_warn_div.style.top                    = "0px";
    log_warn_div.style.left                   = "0px";

    /*}}}*/
    /* HIDE {{{*/
    if(log_warn_timer) clearTimeout(log_warn_timer);
    log_warn_timer   =   setTimeout(log_warn_handler, LOG_WARN_COOLDOWN_DELAY);

    /*}}}*/
};

let log_warn_handler = function()
{
    log_warn_timer = null;
    log_warn_div.style.top  = (-2 * log_warn_div.offsetHeight)+"px"  ;
};
/*}}}*/
/* logXXX {{{*/
let logXXX_start_MS;
let razXXX = function(_caller)
{
    logXXX_start_MS = new Date().getTime();
    console.log("%c razXXX: RAZ BY %c "+_caller+"]", lbL, lbR+lf8);
/*{{{
console.trace();
    console_clear("razXXX("+_caller+")");
}}}*/
};
let logXXX = function()
{
/*{{{
    arguments[0] = "XXX "+arguments[0];
}}}*/
    if((typeof onDown_MS) != "undefined") { /*{{{*/
        let start_MS
            = (logXXX_start_MS > onDown_MS)
            ?  logXXX_start_MS
            :  onDown_MS;

        logXXX_start_MS = new Date().getTime();

        let elapsed_MS
            = start_MS
            ? (logXXX_start_MS - start_MS)
            : 0;

        /*{{{
        if(elapsed_MS && (elapsed_MS < 50)) {
            console.log("%c XXX ",lb4);
            console.trace();
        }
        }}}*/

        arguments[0] = "XXX ["+elapsed_MS+"] "+arguments[0];
    }
    else {
        arguments[0] = "XXX "                 +arguments[0];
    }
    /*}}}*/
    console.log.apply(console, Array.prototype.slice.call(arguments));
};
/*}}}*/
/* logBIG {{{*/
let logBIG = function(msg, lfx=lf7)
{
    console.log("%c "+SYMBOL_BLACK_SUN+" %c "+msg, lf3, lbb+lbH+lfx);
};
/*}}}*/
/* log_clear {{{*/
let log_clear = function(caller)
{
    t_clear("log_clear(caller=["+_caller+"])");
};
/*}}}*/
/* log set add clr {{{ */
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
/* log_set_TR_RESULT {{{ */
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
/* log_set_TR {{{*/
let log_set_TR  = function(tr,msg="", ...args) {
    if(tr) {
        /* removeChild {{{*/
/*{{{
        for(let            i = (tr.childNodes.length-1); i > 0; --i)
        {
            if(!t_is_accessory_node( tr.childNodes[i] ) ) {
                tr.removeChild(      tr.childNodes[i] );
                i =                  tr.childNodes.length;
            }
        }
}}}*/
        /*}}}*/
        /* transcript decoration and step-stamp {{{*/
        t_clear_panel_pined_innerHTML( tr );
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
/*  log_add_TR {{{*/
let log_add_TR  = function(tr, msg="", ...args)
{
if(msg) console.log("%clog_add_TR%c"+strip_html(msg), lbH+lf8, String(args[0]));
/*{{{
}}}*/
    if(!tr) return;
    if(msg) del_el_class(tr, "empty");
    if(!tr.innerHTML) log_set_TR(tr,"");

    if(msg.trim() == "") msg = "empty msg";

    let s = "<table>";

    /* mStartRange {{{*/
    let mStartRange_str = (mStartRange) ? rangeToString(mStartRange, "mStartRange") : "";
    if(mStartRange) s += ""
        +" <tr><th                       >        mStartRange             </th></tr>"
        +" <tr><td                       ><pre>"+ mStartRange_str +"</pre></td></tr>"
    ;

    /*}}}*/
    /* mEndRange {{{*/
    let mEndRange_str   = (mEndRange  ) ? rangeToString(mEndRange  , "mEndRange"  ) : "";
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
/* log_layout_TR {{{*/
let log_layout_TR = function(tr)
{
    let x_min =         BOX_MARGIN - tr.offsetWidth ; if(tr.offsetLeft < x_min) tr.style.left = x_min+"px";
    let x_max = window.innerWidth  - BOX_MARGIN     ; if(tr.offsetLeft > x_max) tr.style.left = x_max+"px";

    let y_min =         BOX_MARGIN - tr.offsetHeight; if(tr.offsetTop < y_min) tr.style.top   = y_min+"px";
    let y_max = window.innerHeight - BOX_MARGIN     ; if(tr.offsetTop > y_max) tr.style.top   = y_max+"px";
};
/*}}}*/

/* log_sep top bot clr .. (NESTED COLLAPSED LOGGING) {{{*/
/* STYLE_TOP STYLE_BOT {{{*/
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

/*}}}*/
/* SDN {{{
let SDN = [
 SD0
,SD1
,SD2+SD2
,SD3+SD3+SD3
,SD4+SD4+SD4+SD4
,SD5+SD5+SD5+SD5+SD5
,SD6+SD6+SD6+SD6+SD6+SD6
,SD7+SD7+SD7+SD7+SD7+SD7+SD7
,SD8+SD8+SD8+SD8+SD8+SD8+SD8+SD8
,SD9+SD9+SD9+SD9+SD9+SD9+SD9+SD9+SD9
];
}}}*/
/*  SDO {{{*/
let SLC = "\u2B55"; /* HEAVY */
let SDO = [
 SLC
,SLC
,SLC+SLC
,SLC+SLC+SLC
,SLC+SLC+SLC+SLC
,SLC+SLC+SLC+SLC+SLC
,SLC+SLC+SLC+SLC+SLC+SLC
,SLC+SLC+SLC+SLC+SLC+SLC+SLC
,SLC+SLC+SLC+SLC+SLC+SLC+SLC+SLC
,SLC+SLC+SLC+SLC+SLC+SLC+SLC+SLC+SLC
];
/*}}}*/

let log_sep_num = 0;
/*_ log_sep_top {{{*/
let log_sep_top = function(arg_line="")
{
    log_sep_num = (log_sep_num+1) % 10;

    let l_1 =       lbB +          lfX[ log_sep_num ];
    let l_2 = STYLE_TOP + STYLE_BG_TOP[ log_sep_num ];
    let sym =                      SDO[ log_sep_num ];
    let txt =               strip_html( arg_line    );

    console.groupCollapsed( "%c"+sym +"%c "+txt,l_1,l_2);
};
/*}}}*/
/*_ log_sep_bot {{{*/
let log_sep_bot = function(arg_line="")
{
    let l_1 =       lbB +          lfX[ log_sep_num ];
    let l_2 = STYLE_BOT + STYLE_BG_BOT[ log_sep_num ];
    let sym =                      SDO[ log_sep_num ];
    let txt =               strip_html( arg_line    );

    console.groupEnd();
    console.log(            "%c"+sym +"%c "+txt,l_1 ,l_2);

    log_sep_num = (log_sep_num <= 0) ? 0 : ((log_sep_num-1) % 10);
};
/*}}}*/
/*_ log_sep_clr {{{*/
let log_sep_clr = function()
{
    while(log_sep_num > 0) log_sep_bot(SYMBOL_RECYCLE);

    s_log( CLEAR );
};
/*}}}*/
/*}}}*/

