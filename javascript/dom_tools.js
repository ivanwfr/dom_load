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
