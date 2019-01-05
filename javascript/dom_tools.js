/*"use strict";*/
/* dom_tools_js */
let DOM_TOOLS_JS_ID         = "dom_tools_js" ; let DOM_TOOLS_JS_TAG        = DOM_TOOLS_JS_ID   +" (190104:16h)";
let DOM_HOST_CSS_ID         = "dom_host_css" ;
let DOM_TOOLS_CSS_ID        = "dom_tools_css";
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      DOUBLE_QUOTE  = String.fromCharCode(34);
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      BACKSLASH     = String.fromCharCode(92);
      FORESLASH     = String.fromCharCode(47);
      CS            = "font-size:150%; font-weight:900; border:1px solid 960; color:#960; background-color:navy; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c CLEARED BY: "+msg,CS);                 } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (       "%c"+msg      ,CS); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (            msg         );                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(            msg         );                 } catch(ex) {} };
/*}}}*/
/* CSS {{{*/
/* ECC .. Electronic color code {{{*/
const CSS_CC1                   = "cc1";
const CSS_CC2                   = "cc2";
const CSS_CC3                   = "cc3";
const CSS_CC4                   = "cc4";
const CSS_CC5                   = "cc5";
const CSS_CC6                   = "cc6";
const CSS_CC7                   = "cc7";
const CSS_CC8                   = "cc8";
const CSS_CC9                   = "cc9";

/*}}}*/
/* EVENTS {{{*/
const CSS_MOVING                = "moving";
const CSS_STACKING              = "stacking";
const CSS_PAUSE_ANIMATION       = "pause_animation";

const CSS_ON_COOLDOWN           = "on_cooldown";

const CSS_REGROUPING            = "regrouping";
const CSS_REMOVING              = "removing";
const CSS_SCROLLING             = "scrolling";
/*}}}*/
/* SEEK_ZONE {{{*/
const CSS_CAPTION_D             = "caption_D";
const CSS_CAPTION_U             = "caption_U";

const CSS_SEEKER_HANDLE         = "seeker_handle";

const CSS_SEEKER_PU2_LOOK_UP    = "seeker_PU2_look_up";
const CSS_SEEKER_PU3_LOOK_RIGHT = "seeker_PU3_look_right";
const CSS_SEEKER_PU4_LOOK_DOWN  = "seeker_PU4_look_down";
const CSS_SEEKER_PU5_LOOK_LEFT  = "seeker_PU5_look_left";

const CSS_ON_HIDEN_NODE         = "on_hiden_node";
const CSS_TARGET_TOOL           = "target_tool";
/*}}}*/
/* DISPLAY {{{*/
const CSS_DARK                  = "dark";

const CSS_HIDDEN                = "hidden";
const CSS_HIDING                = "hiding";
const CSS_VIEWABLE              = "viewable";

const CSS_HOVERING              = "hovering";
const CSS_LIFTED                = "lifted";
const CSS_PINNED                = "pinned";
const CSS_ON_CONTAINER          = "on_container";
const CSS_PRESSED               = "pressed";
const CSS_PULSING               = "pulsing";
const CSS_SEEK_TARGET           = "seek_target";

const CSS_TOP                   = "top";
const CSS_BOTTOM                = "bottom";
const CSS_TRAPPED               = "trapped";
/*}}}*/
/* PLAYGROUND {{{*/
const CSS_COLLAPSED             = "collapsed";

/*}}}*/
/* PANEL {{{*/
const CSS_TRANSCRIPT            = "transcript";
const CSS_FLOATLOG              = "floatlog";

/*}}}*/
/* PANEL STYLE {{{*/

const CSS_STANDBY               = "standby";
const CSS_DIMMED                = "dimmed";
const CSS_DISABLED              = "disabled";
const CSS_EMPTY                 = "empty";
const CSS_FADING                = "fading";
const CSS_FOCUSSED              = "focussed";
const CSS_GRAYED_OUT            = "grayed_out";
const CSS_FULLSCREEN            = "fullscreen";

const CSS_GUTTER                = "gutter";
const CSS_FREEZED               = "freezed";
const CSS_MAGNIFIED             = "magnified";
/*}}}*/
/* PANEL CHILD TOOL {{{*/
const CSS_TOOLBAG_BUTTON        = "toolbag_button";

const CSS_GRID_BAG              = "grid_bag";
const CSS_HAS_MOVING_CHILD      = "has_moving_child";
const CSS_MOV_SRC               = "mov_src";

const CSS_TXT_LOG               = "txt_log";
/*}}}*/
/* PANEL DECORATION {{{*/
const CSS_TALL_PANEL            = "tall_panel";
const CSS_WIDE_PANEL            = "wide_panel";
const CSS_TOO_LARGE             = "too_large";

const CSS_PIN_ON_PANEL          = "pin_on_panel";
const CSS_CLEARPIN              = "clearpin";
const CSS_CLOSEPIN              = "closepin";
const CSS_PUSH_PIN              = "push_pin";
const CSS_SCALEPIN              = "scalepin";

const CSS_LEFT                  = "left";
const CSS_RIGHT                 = "right";
/*}}}*/
/* PROPERTY {{{*/
const CSS_CHECKED               = "checked";
const CSS_ON                    = "on";

const CSS_USER_SET              = "user_set";
/*}}}*/
/* SELECTION {{{*/
const CSS_NUM_SELECTED          = "num_selected";
const CSS_OPEN_BAG              = "open_bag";
const CSS_PAT_CLICKED           = "pat_clicked";

const CSS_BACK                  = "back";
/*}}}*/
/* CONTAINERS {{{*/

const CSS_BUTTON_COPY           = "button_copy";
const CSS_BUTTON_MAGNIFY        = "button_magnify";
const CSS_BUTTON_MONO           = "button_mono";
const CSS_BUTTON_MONOSPACE      = "button_monospace";
const CSS_BUTTON_NEXT           = "button_next";
const CSS_BUTTON_PREV           = "button_prev";
const CSS_CONTAINER_SELECTED    = "container_selected";

/*}}}*/
/*}}}*/
/* SETTINGS OPTIONS {{{*/

const ANCHOR_FREEZE         = "anchor_freeze";
const CONTAINERS_HI         = "containers_hi";
const SCROLL_SMOOTH         = "scroll_smooth";

const FLY_DIV_MAGNIFIED     = "fly_div_magnified";
const PIVOT_MAGNIFIED       = "pivot_magnified";

const THEME_DARK            = "theme_dark"  ;

const TOOLS_SCROLL          = "tools_scroll"; /* (tools scrolling with the document .. (quite a mess! .. not really usefull) */
const TOOLS_EXTRAS          = "tools_extras"; /* (not really usefull for now) */

/*_TOOLS_PANEL_BEHAVIOR__________________*/
const TOOLS_TRAP            = "tools_trap";

/*_MONITORING_EVENTS_LOCATION_______________*/
const LOG_SEEKSPOT          = "log_seekspot" ;
const PIN_SEEKSPOT          = "pin_seekspot" ;
const SHOW_SEEKZONE         = "show_seekzone";

const OVERFLOW_VISI         = "overflow_visi";

/*_SELECTION_SEQUENCE_DIRECTION________*/
const SEL_BACK              = "sel_back";

/*_DOM_HIDE_EDITING_________________________*/
const DOM_EDITING           = "dom_editing"   ;
const SITE_OR_PAGE          = "site_or_page"  ;
const MASK_OR_HIDE          = "mask_or_hide"  ;
const EDIT_OR_STAGE         = "edit_or_stage" ;
const DOM_HIDE1_RESET       = "dom_hide1_reset";
const DENY_OR_ALLOW         = "deny_or_allow" ;

/*_WORKING_WITH_SELECTIONS___________________*/
const WORDING               = "wording"        ;
const WORDS_DROP_ING        = "words_drop_ing" ;
const WORDS_DROP_S          = "words_drop_s"   ;
const WORDS_EXACT           = "words_exact"    ;
const WORDS_HEAD_TAIL       = "words_head_tail";
const WORDS_OPCYCLE         = "words_opcycle"  ;
const WORDS_SEGMENT         = "words_segment"  ;

/*_DOC_EMBEDDED_TOOLS_*/
const SQUEEZE_CYCLE         = "squeeze_cycle";
const SQUEEZE_CYCLE_CLASSLIST = ["squeezed_1_0","squeezed_0_5","squeezed_0_1"];

/*}}}*/

/* PANELS ID's [A-Z] {{{

      1     dev_log_map
      2     dom_grid_html
      3     dom_load_tags
      4     dom_tools_html
      5     dom_traversal
      6     fly_div
      7     headsup
      8     headsup_bw
      9     headsup_bz
     10     headsup_ds
     11     headsup_w
     12     hotspot
     13     pat_bag
     14     pivspot
     15     seeker_PD
     16     seeker_PU
     17     seekspot_A
     18     seekspot_D
     19     seekspot_U
     20     seekzone
     21     sel_bag
     22     test_panel
     23     transcript1
     24     transcript2

}}}*/
/* PANEL ID's {{{

    dom_tools_html
    dom_grid_html

    pivspot
        pivspot_c

    hotspot
        hotwave
        hotring
        hotspot_c

    dev_log_map

    dom_load_tags

    dom_traversal
        tools_node

    headsup
        thumb_p
        theme_dark
        wording
        anchor_freeze
        containers_hi
        overflow_visi
        scroll_smooth
        tools_extras
        show_seekzone
        pin_seekspot
        log_seekspot

    headsup_bw
        headsup_bw_value

    headsup_bz
        headsup_bz_value

    headsup_ds
        tools_trap
        tools_scroll
        site_or_page
        mask_or_hide
        edit_or_stage
        dom_hide1_reset
        deny_or_allow

    headsup_w
        recycle
        tools_filter
        words_drop_s
        words_exact
        words_head_tail
        words_opcycle
        words_regex
        words_segment
    pat_bag
    sel_bag

    test_panel
        RELOAD
        CLEAR
        REGEX
        BEHAVIOR
        HIGHLIGHT

    transcript1
    transcript2

    fly_div

    seeker_PD
        seeker_CD
    seeker_PU
        seeker_CU

    seekzone
        seekspot_A
        seekspot_D
        seekspot_U

}}}*/
/* PANEL ZINDEX {{{*/
const TOOLS_MAX                = 30;
const ZINDEX_SHADOW_HOST       = 2147483647;

const ZINDEX_TARGET_TOOL_ZERO  =                                          10;
const ZINDEX_PINNED_PANEL_ZERO =                                          20;
const ZINDEX_TOOL_PANEL_ZERO   = ZINDEX_PINNED_PANEL_ZERO + TOOLS_MAX; /* 50 */
const ZINDEX_BELOW_TOOLS       = ZINDEX_TOOL_PANEL_ZERO              ; /* 50 */
const ZINDEX_ABOVE_TOOLS       = ZINDEX_BELOW_TOOLS + TOOLS_MAX      ; /* 80 */
const ZINDEX_ON_GRID           = ZINDEX_ABOVE_TOOLS                  ; /* 80 */
/*}}}*/
/*  TOOL_SET {{{*/
let TOOL_SET /*___________built_in_________________________________*/
    = [   { dom_load_id : ""           , panel_id : "hotspot"       }
        , { dom_load_id : ""           , panel_id : "fly_div"       }
        , { dom_load_id : ""           , panel_id : "seeker_CU"     }
        , { dom_load_id : ""           , panel_id : "seeker_CD"     }
        , { dom_load_id : ""           , panel_id : "seekzone"      }
        , { dom_load_id : ""           , panel_id : "seekspot_A"    }
        , { dom_load_id : ""           , panel_id : "seekspot_U"    }
        , { dom_load_id : ""           , panel_id : "seekspot_D"    }
        , { dom_load_id : ""           , panel_id :  TOOLS_TRAP     }

        /*_________________dom_find__________________________________________________________________*/
        , { dom_load_id : "dom_find"   , panel_id : "headsup_w"     } /* wording exact segment ...   */
/*{{{
        , { dom_load_id : "dom_find"   , panel_id : "headsup"       }
        , { dom_load_id : "dom_find"   , panel_id : "test_panel"    }
        , { dom_load_id : "dom_find"   , panel_id : "pat_bag"       }
}}}*/

        /*_________________dom_hide____________________________________________________________________________*/
        , { dom_load_id : "dom_hide"   , panel_id : "headsup"       } /* options                               */
        , { dom_load_id : "dom_hide"   , panel_id : "headsup_ds"    } /* tools trap & scroll                   */
        , { dom_load_id : "dom_hide"   , panel_id : "dev_log_map"   } /* LOG_MAP                               */
        , { dom_load_id : "dom_hide"   , panel_id : "dom_load_tags" } /* HTML CSS JS TAGS                      */
        , { dom_load_id : "dom_hide"   , panel_id : "test_panel"    } /* RELOAD CLEAR REGEX BEHAVIOR HIGHLIGHT */

        /*_________________playground________________________________________________________________________________*/

        , { dom_load_id : "playground" , panel_id : "headsup"       } /* options                                     */
        , { dom_load_id : "playground" , panel_id : "headsup_bw"    } /* body width                                  */
        , { dom_load_id : "playground" , panel_id : "headsup_bz"    } /* body zoom                                   */
        , { dom_load_id : "playground" , panel_id : "headsup_ds"    } /* tools trap & scroll                         */
        , { dom_load_id : "playground" , panel_id : "headsup_w"     } /* wording exact segment ...                   */

        , { dom_load_id : "playground" , panel_id : "pat_bag"       } /* patterns                                    */
        , { dom_load_id : "playground" , panel_id : "sel_bag"       } /* selected patterns                           */
        , { dom_load_id : "playground" , panel_id : "dom_traversal" } /* NodeIterator TreeWalker childNodes tagNodes */

        , { dom_load_id : "playground" , panel_id : "test_panel"    } /* RELOAD CLEAR REGEX BEHAVIOR HIGHLIGHT       */
        , { dom_load_id : "playground" , panel_id : "dev_log_map"   } /* LOG_MAP                                     */
        , { dom_load_id : "playground" , panel_id : "dom_load_tags" } /* HTML CSS JS TAGS                            */

        , { dom_load_id : "playground" , panel_id : "transcript1"   } /* TRANSCRIPT1                                 */
        , { dom_load_id : "playground" , panel_id : "transcript2"   } /* TRANSCRIPT2                                 */


    ];
/*}}}*/
/*_ is_a_DOM_LOAD_panel {{{*/
let is_a_DOM_LOAD_panel = function(panel_id)
{
/*{{{*/
let   caller = "is_a_DOM_LOAD_panel";
let log_this = LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    let dom_load_id                 = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
    let panel_to_load               =  true;    /* default implicit [panel_to_load] */
    let dom_load_is_defined         = false;    /* [TOOL_SET] may not have [DOM_LOAD_ID] explicit configuration */
    for(let i=0; i< TOOL_SET.length; ++i) {
        /* FOUND SOME EXPLICIT [DOM_LOAD_ID] [ENTRY] {{{*/
        let entry = TOOL_SET[i];
        if(!dom_load_is_defined && (entry.dom_load_id == dom_load_id))
        {
            dom_load_is_defined     =  true;
            panel_to_load           = false;    /* .. CLEAR [IMPLICIT ANSWER] */
        }

        /*}}}*/
        /* CHECK [DOM_LOAD_ID] [ENTRIES] {{{*/
        if(entry.dom_load_id == dom_load_id)
        {
            /* FOUND SPECIFIED ID */
            if(entry.panel_id  == panel_id)
            {
                panel_to_load       = true;     /* .. SET [EXPLICIT ANSWER] */
                break;
            }
        }
        /*}}}*/
    }
/*{{{*/
if(log_this) {
    let lfx = (panel_to_load ? lf4 : lf8);
    log("%c "+caller+": ...return "+panel_to_load+" %c "+dom_load_id+" %c "+(dom_load_is_defined ? "defined" : "")+" %c ["+panel_id+"]"
        ,lbH+lfx                                   ,lbL+lf8           ,lbC+lf8                                      ,lbR+lfx           );
}
/*}}}*/
    return panel_to_load;
};
/*}}}*/
/*_ is_a_DOM_LOAD_featured_function {{{*/
/* {{{*/
/* FEATURES .. f(LOADING PAGE ID) */
const FUNCTIONS_TO_IGNORE
    = [    { dom_load_id : "dom_hide" , id : "t_seekzone1_XYWH"           } /* no seekzone feedback */
         , { dom_load_id : "dom_hide" , id : "t_seekzone1_add_onDown_XY"  } /* no seekzone feedback */
         , { dom_load_id : "dom_hide" , id : "t_seekzone2_add_misclick"   } /* no click    feedback */
         , { dom_load_id : "dom_hide" , id : "t_seekzone2_add_dblclick"   } /* no click    feedback */
         , { dom_load_id : "dom_hide" , id : "onDown_6_DOC_SELECT_OR_SEEK"} /* no document wording  */
         , { dom_load_id : "dom_hide" , id : "onUp_6_DOC_CB_CLICK_WORD"   } /* no document wording  */
         , { dom_load_id : "dom_hide" , id : "onUp_2_SLOT_CONTAINER_CB"   } /* no document wording  */
         , { dom_load_id : "dom_hide" , id : "t_store_patterns_csv"       } /* no document wording  */

         , { dom_load_id : "dom_find" , id : "t_seekzone1_XYWH"           } /* no seekzone feedback */
         , { dom_load_id : "dom_find" , id : "t_seekzone1_add_onDown_XY"  } /* no seekzone feedback */
         , { dom_load_id : "dom_find" , id : "t_seekzone2_add_misclick"   } /* no click    feedback */
         , { dom_load_id : "dom_find" , id : "t_seekzone2_add_dblclick"   } /* no click    feedback */
         , { dom_load_id : "dom_find" , id : "t_target_tool_feed"         } /* no target_tool support */
    ];

let cached_entry_selected_item_id = {};
/*}}}*/
let is_a_DOM_LOAD_featured_function = function(item_id)
{
/*{{{*/
let   caller = "is_a_DOM_LOAD_featured_function";
let log_this = LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    /* cached_entry_selected_item_id {{{*/
    let feature_to_ignore  = cached_entry_selected_item_id[item_id];
    if( feature_to_ignore != undefined) {
/*{{{*/
if( log_this) {
    let lfx = (feature_to_ignore ? lf2 : lf5);
    log("%c "+caller+" ...return %c"+(feature_to_ignore ? "FALSE":"TRUE ")+"%c CACHED ANSWER %c ["+item_id +"]"
        ,lbH+lf8                ,lbL+lfx                                   ,lbC+lf8         ,lbR+lfx           );
}
/*}}}*/
        return !feature_to_ignore;
    }
    /*}}}*/
    let dom_load_id                 = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
    feature_to_ignore               = false;    /* default implicit [feature_to_ignore] */
    let dom_load_is_defined         = false;    /* [TOOL_SET] may not have [DOM_LOAD_ID] explicit configuration */
    for(let i=0; i< FUNCTIONS_TO_IGNORE   .length; ++i)
    {
        let entry = FUNCTIONS_TO_IGNORE[i];

        /* FOUND SOME EXPLICIT [DOM_LOAD_ID] [ENTRY] {{{*/
        if(!dom_load_is_defined && (entry.dom_load_id == dom_load_id))
        {
            dom_load_is_defined     =  true;
            feature_to_ignore       = false;    /* .. CLEAR [IMPLICIT ANSWER] */
        }

        /*}}}*/
        /* CHECK [DOM_LOAD_ID] [ENTRIES] {{{*/
        if(entry.dom_load_id == dom_load_id)
        {
            /* FOUND SPECIFIED ID */
            if(entry.id == item_id)
            {
                feature_to_ignore   = true;     /* .. SET [EXPLICIT ANSWER] */
                break;
            }
        }
        /*}}}*/
    }
/*{{{*/
if(log_this) {
    let lfx = (feature_to_ignore ? lf2 : lf5);
    log("%c "+caller+" ...return %c"+(feature_to_ignore ? "FALSE":"TRUE ")+" %c "+dom_load_id+" %c "+(dom_load_is_defined ? "defined" : "")+" %c ["+item_id +"]"
        ,lbH+lf3                ,lbL+lfx                                    ,lbC+lf8           ,lbC+lf8                                      ,lbR+lfx           );
}
/*}}}*/
    cached_entry_selected_item_id[item_id] = feature_to_ignore;
    return !feature_to_ignore;
};
/*}}}*/

/* TOOL LOAD {{{*/
/*  t_load */
/* {{{*/
const TOOLS1_OFF                 = "TOOLS OFF";
const TOOLS2_SANITY_CHECK_FAILED = "TOOLS SANITY CHECK FAILED";
const TOOLS3_NEED_RELAXED_CSP    = "TOOLS NEED RELAXED CSP";
const TOOLS4_DEPLOYED            = "TOOLS DEPLOYED";
const TOOLS5_UNLOADED            = "TOOLS UNLOADED";
const TOOLS6_NO_REPLY_YET        = "TOOLS NO REPLY YET";

/*}}}*/
/*  t_load {{{*/
/*{{{*/
let t_load_MS;

/*}}}*/
let t_load = function()
{
/*{{{*/
let caller     = "t_load";
logging_load_LOG_MAP();
let log_this = LOG_MAP.EV7_DISPATCH;

if(log_this) log(caller, "info");
/*}}}*/
    /* DOM_LOAD_ID+"] FROM TEMPLATE LITERAL {{{*/
    if( typeof DOM_LOAD_ID  == "undefined") {
        window.DOM_LOAD_ID="${DOM_LOAD_ID}";

if( log_this) logBIG("DOM_LOAD_ID ["+DOM_LOAD_ID+"] FROM TEMPLATE LITERAL");
    }
    /*}}}*/
    /* DOM_LOAD_ID FROM BOOKMARKLET SCRIPT TITLE {{{*/
    let dom_load_script = document.getElementById("dom_load");
    if( dom_load_script ) {
        window.DOM_LOAD_ID = dom_load_script.title;

if( log_this) logBIG("DOM_LOAD_ID..........=["+ DOM_LOAD_ID           +"]");
if( log_this) logBIG("dom_load_script.title=["+ dom_load_script.title +"]");
    }
    /*}}}*/

    t_load_MS = new Date().getTime();

    t1_load_SHADOW();

    t3_load_PLAYGROUND_PANELS();

    t2_load_TOOLS();
    if(!hotspot) {
        log("%c*** Tools hosting failed *** %c cannot continue", lbb+lbL+lf3, lbb+lbR+lf2);
        return;
    }

    t4_load_HEADSUP();

    t5_load_STORAGE();  /* prop_init prop_set pat_csv... pivotXY spread_ratio pivot_PANEL topTool transcripts dom_hide..observers IPC and STORE listeners */

    t6_load_DOM_TAGS();

    t7_load_GRID();

    t8_load_LOG_MAP();

    t9_load_BEHAVIOR();

    t10_load_IPC_and_LISTENERS();

    t11_load_POST();    /* IPC .. INIT TOOLS .. INIT DOC_TOOLS */
};
/*}}}*/
/*_ t_load_listener {{{*/
/*{{{*/
const PREVENT_RELOAD_DELAY = 5000;
/*}}}*/
let t_load_listener = function(event)
{
/*{{{*/
let   caller = "t_load_listener("+event.type+")";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) t_log_event_status(caller, lbb+lf1);
/*}}}*/
    /* [since_t_load] .. the delay since [t_load] was called */ /*{{{*/
        let this_MS = new Date().getTime();
        let since_t_load = this_MS - t_load_MS;
if( log_this) log("...since_t_load=["+since_t_load+"ms]");

    /*}}}*/
    /* === [beforeunload]  ==============================================================*
     * THE BROWSER MAY ASK THE USER                                                      *
     * ABOUT PREVENTING A SNEAKY UNLOAD                                                  *
     * WITH A CONFIRMATION DIALOGS                                                       *
       :!start explorer "https://developer.mozilla.org/en-US/docs/Web/Events/beforeunload"
     * ==================================================================================*/
    switch(event.type) {
    case "beforeunload": /* XXX {{{*/
    {
        let is_a_tool_request        = (onWork_EL_last_used && (onWork_EL_last_used.id == "RELOAD")); /* yields null or true */
        let user_is_wording          =  prop_get(       WORDING            ); /* USER PLAYING WITH WORDS      */
        let user_is_tooling          =  dimm_mask_displayed(               ); /* USER IS READING              */
        let user_has_anchor_freezed  =  prop_get(       ANCHOR_FREEZE      ); /* USER DISABLED LINKS          */
        let user_is_editing_dom_hide =  prop_get(       EDIT_OR_STAGE      ); /* EDIT MODE */
        let just_loaded              = (since_t_load < PREVENT_RELOAD_DELAY); /* AUTOMATED PAGE REQUEST .. TODO: FIND OUT [WHY] AND [HOW] */

        let confirmation_required
        =        !is_a_tool_request
        && (      user_is_wording
               || user_is_tooling
               || user_has_anchor_freezed
               || user_is_editing_dom_hide
               || just_loaded
           )
        ;
/*{{{*/
if(log_this || confirmation_required) {
        log_key_val_group( caller
                     , {          is_a_tool_request : is_a_tool_request
                         ,          user_is_wording : user_is_wording
                         ,          user_is_tooling : user_is_tooling
                         ,  user_has_anchor_freezed : user_has_anchor_freezed
                         , user_is_editing_dom_hide : user_is_editing_dom_hide
                         ,              just_loaded : just_loaded
                         ,    confirmation_required : confirmation_required
                     }
                     , lb0, false
                   );
}
/*}}}*/

        if(confirmation_required)
            event.returnValue = event.type +" USER CONFIRMATION"; /* Chrome requires returnValue to be set */
        else
            logBIG("UNLOAD CONFIRMATION NOT TRIGGERED", lf2);
        event.preventDefault(); /* Cancel the event as stated by the standard */
    }
    break;
    /*}}}*/
    case "unload": /*{{{*/
    {
log("%c"+caller+"%c"+event.type, lbb+lbL+lf2, lbb+lbR+lf3);

    }
    break;
    /*}}}*/
    default: /*{{{*/
    if(!log_this) {
log("%c"+caller+"%c"+event.type, lbb+lbL+lf2, lbb+lbR+lf3);

    }
    /*}}}*/
    }
};
/*}}}*/
/*_ t_unload {{{ */
let t_unload = function()
{
/*{{{*/
let caller = "t_unload";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

if( log_this) log("CLEAR SELECTED WORDS");
    s_clear_slot_all();

if( log_this) log("REMOVE EVENT LISTENERS");
    t_del_listeners();

if( log_this) log("MOVE TOOLS OFF GRID");
    if(!DOM_GRID_CSS_TAG)
        t_move_TOOLS_OFF_GRID(caller);

if( log_this) log("HIDE TOOLS");
    if(dom_tools_html)
        dom_tools_html.style.visibility = "hidden";

if( log_this) log("SET WORDING OFF");
    if(typeof dom_wording_cycle != "undefined")
        dom_wording_cycle("OFF", false);

if( log_this) log("SEND IPC UNLOAD MESSAGE");
    let ipc = {    t_load : TOOLS5_UNLOADED
        ,          caller : DOM_TOOLS_JS_TAG
    };
    t_send_IPC( ipc );

};
/*}}}*/
/*_ t_reload {{{ */
let t_reload = function()
{
/*{{{*/
let  caller = "t_reload";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly(caller);

    t_add_LISTENERS();

    t11_load_POST();
};
/* }}} */



/*  t1_load */
/*  t1_load */
/*  t1_load */
/*  t1_load_SHADOW {{{*/
let t1_load_SHADOW = function()
{
/*{{{*/
let   caller = "t1_load_SHADOW";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SD1+"%c "+caller, lbS+lf1, lbH+lf1);
/*}}}*/
    /* shadow_host shadow_root {{{*/
    let shadow_host = document.createElement("DIV");
    shadow_host.id  = "shadow_host";
    document.documentElement.appendChild( shadow_host );

    if( shadow_host.attachShadow ) {
        shadow_host.style.zIndex   = ZINDEX_SHADOW_HOST;

        shadow_root    = shadow_host.attachShadow({mode: "open"});
    }
    else {
        logBIG(caller+": shadow_host.attachShadow is missing");
        /* doc + tools event clash         */
        /* shadow_root = document.body;    */
        shadow_root    = shadow_host;
    }

    shadow_root.id     = "shadow_root";
    /*}}}*/
    /* t_host [CSS HTML JS] {{{*/

    t_host("dom_tools_css" );
    t_host("dom_tools_html");
    t_host("dom_tools_js"  );

    t_host("dom_grid_css"  );
    t_host("dom_grid_html" );
    t_host("dom_grid_js"   );

    t_host("dom_hide_js"   );
    t_host("dom_select_js" );
    t_host("dom_wording_js");

    t_host("dom_log_js"    );
    t_host("dom_prop_js"   );
    t_host("dom_store_js"  );
    t_host("dom_util_js"   );

    /*}}}*/
};
/*}}}*/
/*_ t_host {{{*/
let t_host = function(id)
{
/*{{{*/
let caller = "t_host";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c"+id, lbH+lf1);
/*}}}*/
    if( id.includes(" ") ) return;
    let el = document.querySelector("#"+id);
    if(!el               ) return;

    /* proxiedNode .. [https://www.wisdomjobs.com] .. [ special (/unique?) case] {{{*/
    if(el.proxiedNode)
    {
if(log_this) log("t_host: using proxiedNode ["+el.proxiedNode.type+"]:");
if(log_this) console_dir(el);
        el = el.proxiedNode;
    }
    /*}}}*/

    el.style.display = "inline";

    shadow_root.appendChild( el );

/*{{{
console.log("t_host("+id+") %c get_tool        "+ (get_tool(id)         ? " OK" : " FAILED"), lbF+lb7);
console.log("t_host("+id+") %c getComputedStyle"+ (getComputedStyle(el) ? " OK" : " FAILED"), lbF+lb7);
}}}*/
};
/*}}}*/
/*  t2_load */
/*  t2_load */
/*  t2_load */
/*  t2_load_TOOLS {{{*/
/*{{{*/
let dev_log_map;
let dom_load_tags;
let dom_tools_html;
let fly_div;
let TOOL_panels = [];

/*}}}*/
let t2_load_TOOLS = function()
{
/*{{{*/
let caller = "t2_load_TOOLS";
let log_this = LOG_MAP.T2_GRID || LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SD2+"%c "+caller, lbS+lf2, lbH+lf2);
/*}}}*/
    /* TOOLS CONTAINER [dom_tools_html] {{{*/
    let id;
    id = "dom_tools_html"   ; dom_tools_html                = get_tool(id);

    /*}}}*/

    /* ORDERED (OPTIONAL) PANELS INSERTION */

    /* PANEL [hotspot] .. BUILT-IN {{{*/
    id = "hotspot"          ; hotspot                       = get_tool(id);
    TOOL_panels.push( hotspot );

    id =  "hotring"         ; hotring                       = get_tool(id);
    id =  "hotspot_c"       ; hotspot_c                     = get_tool(id);
    id =  "hotwave"         ; hotwave                       = get_tool(id);
    /*}}}*/

    /* ROW #1: [pat_bag headsup_w headsup headsup_ds] */
    /* PANEL [pat_bag] {{{*/
    id = "pat_bag"          ; pat_bag                       = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( pat_bag );

     /*}}}*/
    /* PANEL [headsup_w] {{{*/
    id = "headsup_w"        ; headsup_w                     = get_tool(id); if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_w );
    id = "tools_filter"     ; tools_filter_input            = get_tool(id);
    id =  WORDS_EXACT       ; t_prop_set_EL(id              , get_tool(id));
    id =  WORDS_SEGMENT     ; t_prop_set_EL(id              , get_tool(id));
    id =  WORDS_HEAD_TAIL   ; t_prop_set_EL(id              , get_tool(id));
    id =  WORDS_OPCYCLE     ; t_prop_set_EL(id              , get_tool(id));
    id =  "recycle"         ; t_prop_set_EL(id              , get_tool(id));

    let id_array = t_get_words_drop_affix_array();
    for(let i=0; i < id_array.length; ++i) {
        id = id_array[i]    ; t_prop_set_EL(id              , get_tool(id));
    }
    /*}}}*/
    /* PANEL [headsup] {{{*/
    id = "headsup"          ; headsup                       = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup );

    id = "thumb_p"          ; toolbar_thumb                 = get_tool(id);

    id =  ANCHOR_FREEZE     ; t_prop_set_EL(id              , get_tool(id));
    id =  THEME_DARK        ; t_prop_set_EL(id              , get_tool(id));
    id =  WORDING           ; t_prop_set_EL(id              , get_tool(id));

    id =  CONTAINERS_HI     ; t_prop_set_EL(id              , get_tool(id));

    id =  OVERFLOW_VISI     ; t_prop_set_EL(id              , get_tool(id));
    id =  SCROLL_SMOOTH     ; t_prop_set_EL(id              , get_tool(id));

    id =  TOOLS_EXTRAS      ; t_prop_set_EL(id              , get_tool(id));

    id =  SHOW_SEEKZONE     ; t_prop_set_EL(id              , get_tool(id));
    id =  PIN_SEEKSPOT      ; t_prop_set_EL(id              , get_tool(id));
    id =  LOG_SEEKSPOT      ; t_prop_set_EL(id              , get_tool(id));

    id =  DENY_OR_ALLOW     ; t_prop_set_EL(id              , get_tool(id));
    id =  EDIT_OR_STAGE     ; t_prop_set_EL(id              , get_tool(id));
    id =  DOM_HIDE1_RESET   ; t_prop_set_EL(id              , get_tool(id));
    id =  MASK_OR_HIDE      ; t_prop_set_EL(id              , get_tool(id));
    id =  SITE_OR_PAGE      ; t_prop_set_EL(id              , get_tool(id));

    /*}}}*/
    /* PANEL [headsup_ds] {{{*/
    id = "headsup_ds"       ; headsup_ds                    = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_ds );

    id =  TOOLS_TRAP        ; t_prop_set_EL(id              , get_tool(id));
    id =  TOOLS_SCROLL      ; t_prop_set_EL(id              , get_tool(id));
    /*}}}*/

    /* ROW #2: [sel_bag dom_traversal headsup_bw headsup_bz] */
    /* PANEL [sel_bag] {{{*/
    id = "sel_bag"          ; sel_bag                       = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( sel_bag );

    /*}}}*/
    /* PANEL [dom_traversal] {{{*/
    id = "dom_traversal"    ; dom_traversal                 = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( dom_traversal );

    /*}}}*/
    /* PANEL [headsup_bw] {{{*/
    id = "headsup_bw"       ; headsup_bw                    = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) )  TOOL_panels.push( headsup_bw );

    /*}}}*/
    /* PANEL [headsup_bz] {{{*/
    id = "headsup_bz"       ; headsup_bz                    = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( headsup_bz );

    /*}}}*/

    /* ROW #3: [test_panel dev_log_map dom_load_tags transcript1 transcript2] */
    /* PANEL [test_panel] {{{*/
    id = "test_panel"    ; test_panel                       = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( test_panel );

    /*}}}*/
    /* PANEL [dev_log_map] {{{*/
    id = "dev_log_map"      ; dev_log_map                   = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( dev_log_map );

    /*}}}*/
    /* PANEL [dom_load_tags] {{{*/
    id = "dom_load_tags"    ; dom_load_tags                 = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( dom_load_tags );

    /*}}}*/
    /* PANEL [transcript1] [transcript2] {{{*/
    id = "transcript1"      ; transcript1                   = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( transcript1 );

    id = "transcript2"      ; transcript2                   = get_tool(id);
    if( is_a_DOM_LOAD_panel(id) ) TOOL_panels.push( transcript2 );

    log_tr1 = transcript1;
    log_tr2 = transcript2;
    /*}}}*/

    /* FLOATING PANELS */
    /* pivspot seeker fly_div dom_grid_html {{{*/
    id = "pivspot"          ; pivspot                       = get_tool(id);
    id = "pivspot_c"        ; pivspot_c                     = get_tool(id);

    id = "seeker_PD"        ; seeker_PD                     = get_tool(id);
    id = "seeker_PU"        ; seeker_PU                     = get_tool(id);
    id = "seeker_CD"        ; seeker_CD                     = get_tool(id);
    id = "seeker_CU"        ; seeker_CU                     = get_tool(id);

    id = "seekzone"         ; seekzone                      = get_tool(id);
    id = "seekspot_A"       ; seekspot_A                    = get_tool(id);
    id = "seekspot_U"       ; seekspot_U                    = get_tool(id);
    id = "seekspot_D"       ; seekspot_D                    = get_tool(id);

    id = "fly_div"          ; fly_div                       = get_tool(id);

    id = "dom_grid_html"    ; dom_grid_html                 = get_tool(id);
    /*}}}*/

    /* hide all panels {{{*/
    if(dom_tools_html) dom_tools_html.style.visibility = "hidden";
    let el;
    for(let i=1; i < TOOL_panels.length; ++i)
        if( el   = TOOL_panels[i]) add_el_class(el, CSS_HIDDEN);

    /*}}}*/
if( log_this) prop_log_MAP(caller);
};
/*}}}*/
/*_ t_prop_set_EL {{{*/
let t_prop_set_EL = function(id,el)
{
/*{{{*/
let caller = "t_prop_set_EL";
let log_this = LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

/*}}}*/
    prop_set_EL(id, el);

    if( playground_clones_panel ) t2_clone_panel_id_bg_type_label(playground_clones_panel, id, "bg7", "input");
};
/*}}}*/

/*  t4_load */
/*  t4_load */
/*  t4_load */
/*  t4_load_HEADSUP {{{*/
let t4_load_HEADSUP = function()
{
/*{{{*/
let caller = "t4_load_HEADSUP";
let log_this = LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+SD4+"%c "+caller, lbS+lf4, lbH+lf4);
/*}}}*/
    /* headsup {{{*/
    let el;

    if( el = toolbar_thumb                 ) { el.style.position   = "absolute"; el.style.left = " 20px"; el.style.top = "  5px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( WORDING         )) { el.style.position   = "absolute"; el.style.left = "  5px"; el.style.top = " 72px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( ANCHOR_FREEZE   )) { el.style.position   = "absolute"; el.style.left = " 30px"; el.style.top = " 20px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( CONTAINERS_HI   )) { el.style.position   = "absolute"; el.style.left = " 85px"; el.style.top = " 33px"; el.style.transform = "" /*"initial"*/; }

    if( el = prop_get_EL( THEME_DARK      )) { el.style.position   = "absolute"; el.style.left = "135px"; el.style.top = "  5px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( TOOLS_EXTRAS    )) { el.style.position   = "absolute"; el.style.left = "155px"; el.style.top = " 58px"; el.style.transform = "" /*"initial"*/; }

    if( el = prop_get_EL( SCROLL_SMOOTH   )) { el.style.position   = "absolute"; el.style.left = "110px"; el.style.top = " 90px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( OVERFLOW_VISI   )) { el.style.position   = "absolute"; el.style.left = " 60px"; el.style.top = " 85px"; el.style.transform = "" /*"initial"*/; }

    if( el = prop_get_EL( SHOW_SEEKZONE   )) { el.style.position   = "absolute"; el.style.left = "190px"; el.style.top = "  5px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( PIN_SEEKSPOT    )) { el.style.position   = "absolute"; el.style.left = "220px"; el.style.top = " 45px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( LOG_SEEKSPOT    )) { el.style.position   = "absolute"; el.style.left = "200px"; el.style.top = " 90px"; el.style.transform = "" /*"initial"*/; }

    /*}}}*/
    /* headsup_w {{{*/
    if( el = prop_get_EL( WORDS_EXACT     )) { el.style.position   = "absolute"; el.style.left =  "10px"; el.style.top = " 47px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( WORDS_SEGMENT   )) { el.style.position   = "absolute"; el.style.left =  "55px"; el.style.top = " 33px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( WORDS_HEAD_TAIL )) { el.style.position   = "absolute"; el.style.left = "100px"; el.style.top = " 47px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( WORDS_OPCYCLE   )) { el.style.position   = "absolute"; el.style.left =  "55px"; el.style.top = " 80px"; el.style.transform = "" /*"initial"*/; }
    if( el = recycle_button                ) { el.style.position   = "absolute"; el.style.left = "130px"; el.style.top = " 80px"; el.style.transform = "" /*"initial"*/; }

    let    top =  48; /* MAGIC NUMBER */
    let   left = 155; /* MAGIC NUMBER */

    let id_array = t_get_words_drop_affix_array();
    for(let i=0; i < id_array.length; ++i)
    {
        let id = id_array[i];
        if( el = prop_get_EL(id)) {
            el.style.position  = "absolute";
            el.style.left      =  left+"px";
            el.style.top       =   top+"px";
            el.style.transform =         "";
            top += 30; /* MAGIC NUMBER */
        }
    }
    /*}}}*/
    /* headsup_ds {{{*/
    if( el = prop_get_EL( TOOLS_TRAP      )) { el.style.position   = "absolute"; el.style.left =  "10px"; el.style.top =   "5px"; }
    if( el = prop_get_EL( TOOLS_SCROLL    )) { el.style.position   = "absolute"; el.style.left =  "80px"; el.style.top =   "5px"; }

    if( el = prop_get_EL( SITE_OR_PAGE    )) { el.style.position   = "absolute"; el.style.left =   "5px"; el.style.top =  "50px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( MASK_OR_HIDE    )) { el.style.position   = "absolute"; el.style.left =  "45px"; el.style.top =  "50px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( EDIT_OR_STAGE   )) { el.style.position   = "absolute"; el.style.left =  "85px"; el.style.top =  "50px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( DOM_HIDE1_RESET )) { el.style.position   = "absolute"; el.style.left = "125px"; el.style.top =  "40px"; el.style.transform = "" /*"initial"*/; }
    if( el = prop_get_EL( DENY_OR_ALLOW   )) { el.style.position   = "absolute"; el.style.left = "120px"; el.style.top =  "75px"; el.style.transform = "scale(0.7)"    ; }

    /*}}}*/
};
/*}}}*/
/*  t5_load */
/*  t5_load */
/*  t5_load */
/*  t5_load_STORAGE {{{*/
/*{{{*/
let IN_WEBVIEW = "";
let USERAGENT  = "";

/*}}}*/
let t5_load_STORAGE = function()
{
/*{{{*/
let   caller = "t5_load_STORAGE";
let log_this = LOG_MAP.T0_STORE || LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+SD5+"%c "+caller, lbS+lf5, lbH+lf5);
/*}}}*/
    /* LOAD STORED USER-SETTINGS {{{*/

    t_store0_set_settings();

    let id, state;

    id = ANCHOR_FREEZE         ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  CONTAINERS_HI        ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  FLY_DIV_MAGNIFIED    ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  LOG_SEEKSPOT         ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  OVERFLOW_VISI        ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  PIN_SEEKSPOT         ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  PIVOT_MAGNIFIED      ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  SCROLL_SMOOTH        ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  SHOW_SEEKZONE        ; state = (store_getItem(id) == "true"); prop_set(id, state, t_SHOW_SEEKZONE_changed);
    id =  THEME_DARK           ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  TOOLS_EXTRAS         ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  TOOLS_SCROLL         ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  TOOLS_TRAP           ; state = (store_getItem(id) == "true"); prop_set(id, state);

    id =  WORDING              ; state = (store_getItem(id) == "true"); prop_set(id, state);
    id =  WORDS_EXACT          ; state = (store_getItem(id) == "true"); prop_set(id, state, t_words_option_select_key);
    id =  WORDS_SEGMENT        ; state = (store_getItem(id) == "true"); prop_set(id, state, t_words_option_select_key);
    id =  WORDS_HEAD_TAIL      ; state = (store_getItem(id) == "true"); prop_set(id, state, t_words_option_select_key);
    id =  WORDS_OPCYCLE        ; state = (store_getItem(id) == "true"); prop_set(id, state, t_words_option_select_key);

    let id_array = t_get_words_drop_affix_array();
    for(let i=0; i < id_array.length; ++i) {
        let id = id_array[i];
        id = id_array[i]; state = (store_getItem(id) == "true"); prop_set(id, state, t_words_option_select_key);
    }

    t_words_option_initialize();

     /*}}}*/
    /* SELECTION CSV {{{*/
    id = "sel_csv"             ; sel_csv = store_getItem(id) || "";
    id = "pat_csv"             ; pat_csv = store_getItem(id) || "";
    id = "off_csv"             ; off_csv = store_getItem(id) || "";
    id = "bak_csv"             ; bak_csv = store_getItem(id) || "";
    id = "alt_csv"             ; alt_csv = store_getItem(id) || "";

    if(off_csv && (csv_count(off_csv) == csv_count(pat_csv)))
    {
/*{{{
logXXX("%c RESELECTING [ALL-OFF SELECTION]", lbH+lf4);
}}}*/
        off_csv="";
    }
    all_csv        = csv_cat(pat_csv, off_csv);
    all_csv        = csv_cat(all_csv, bak_csv);
    all_csv        = csv_cat(all_csv, alt_csv);

/*{{{
logXXX(csv_count(pat_csv)+" in pat_csv");
logXXX(csv_count(off_csv)+" in off_csv");
logXXX(csv_count(bak_csv)+" in bak_csv");
logXXX(csv_count(alt_csv)+" in alt_csv");
logXXX(csv_count(all_csv)+" in all_csv");
}}}*/

     /*}}}*/
    /* INITIAL MODE .. (EDIT HIDE SITE) {{{*/
/*{{{
}}}*/
    prop_init(  SITE_OR_PAGE   , false, t_SITE_OR_PAGE_changed   );
    prop_init(  MASK_OR_HIDE   , false, t_MASK_OR_HIDE_changed   );
    prop_init(  EDIT_OR_STAGE  , false, t_EDIT_OR_STAGE_changed  );
    prop_init(  DOM_HIDE1_RESET, false, t_DOM_HIDE1_RESET_changed);
    prop_init(  DENY_OR_ALLOW  , false, t_store0_log_settings    );

    prop_init(  WORDS_DROP_ING ,  true                           );
    prop_init(  WORDS_DROP_S   ,  true                           );
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

    t_cache_w_H_w_W_p_H();
    /* pivotXY .. (DEFAULT or STORED value) {{{*/
    pivotXY.x = window.innerWidth  / 2;
    pivotXY.y = window.innerHeight / 2;

    let     xy, x=0, y=0;
    if(     xy = store_parseXY("pivotXY")) {
        x = xy.x;
        y = xy.y;
    }

    x = Math.max( -w_W , x      );
    y = Math.max( -w_H , y      );
    x = Math.min(        x, w_W );
    y = Math.min(        y, w_H );

    pivotXY.x = x;
    pivotXY.y = y;
    /*}}}*/
    /* pivot_PANEL {{{*/
    id = store_getItem("pivot_PANEL");
    let panel = (id == null) ? null : get_tool(id);

    t_set_pivot_PANEL(panel);
    /*}}}*/
    /* transcript1 transcript2 {{{*/
    if(transcript1)
    {
        let panel = transcript1;
        let key   = panel.id +"_pinned";
        let prop  = prop_set(key, store_getBool(key));
        if(!prop.value)
            panel.style.position = prop_get( TOOLS_SCROLL ) ? "absolute" : "fixed";
        else {
            if( xy = store_parseXY(panel.id +"_XY")) {
                xy = t_get_tool_XY_in_viewport(panel, xy.x, xy.y);
                t_pin_tool_at_XY(panel, xy.x, xy.y, "fixed", ZINDEX_PINNED_PANEL_ZERO);
            }
        }
    }
    if(transcript2)
    {
        let panel = transcript2;
        let key   = panel.id +"_pinned";
        let prop  = prop_set(key, store_getBool(key));
        if(!prop.value)
            panel.style.position = prop_get( TOOLS_SCROLL ) ? "absolute" : "fixed";
        else {
            if( xy = store_parseXY(panel.id +"_XY")) {
                xy = t_get_tool_XY_in_viewport(panel, xy.x, xy.y);
                t_pin_tool_at_XY(panel, xy.x, xy.y, "fixed", ZINDEX_PINNED_PANEL_ZERO);
            }
        }
    }
    /*}}}*/
    /* TOOL_panels [pinned xy magnified] {{{*/
    for(let i=0; i < TOOL_panels.length; ++i)
    {
        /* stored json value {{{*/
        let panel = TOOL_panels[i];
        if(!panel      ) continue;

        let panel_json = store_getItem(panel.id+"_JSON");
        if(!panel_json ) continue;

        let value = JSON.parse( panel_json );
if( log_this) log_key_val(caller+" "+panel.id+" value", value, lf3);
        /*}}}*/
        /* [pinned] [xy] {{{*/
        if( value.pinned) {
            if( value.xy ) {
                let vp_xy = t_get_tool_XY_in_viewport(panel, value.xy.x, value.xy.y);
                t_pin_tool_at_XY(panel, vp_xy.x, vp_xy.y, "fixed", i+ZINDEX_PINNED_PANEL_ZERO);
            }
        }
        /*}}}*/
        /* [magnified] {{{*/
        t_layout_panel_magnified(panel, value.magnified);

        /*}}}*/
    }
    /*}}}*/
    /* target_tool [xy] .. (visible when PINNED) {{{*/
    for(let tt_num=1; tt_num <= TARGET_MAX; ++tt_num)
    {
        /* LOAD [tt_num] {{{*/
        let               tt = t_target_tool_get(tt_num);
        let tt_json = store_getItem(tt.id+"_JSON");
        if(!tt_json ) continue;
        /*}}}*/
        /* [xy] [date_MS] {{{*/
        let value = JSON.parse( tt_json );
        if( value.pinned )
            t_pin_tt_at_XY_position_date_MS_msg(  tt
                                                , value.xy.x
                                                , value.xy.y
                                                , "absolute"
                                                , value.date_MS
                                                , value.msg
                                               );

        /*}}}*/
        /* [dir_class] {{{*/
        if( value.dir_class ) {
            add_el_class(tt, value.dir_class);
        }
        /*}}}*/
if( log_this) console_dir(tt, caller);
    }
    /* ORDER PINNED [target_tool] INSTANCES */
    t_target_tool_reorder(caller);

    /*}}}*/
    /* topTool xy {{{*/
    if( xy            = store_parseXY("topTool_XY")) {
        xy.x          = Math.max( -w_W , xy.x      );
        xy.y          = Math.max( -w_H , xy.y      );
        xy.x          = Math.min(        xy.x, w_W );
        xy.y          = Math.min(        xy.y, w_H );

        topTool.x     = xy.x;
        topTool.y     = xy.y;
    }
/*{{{
logBIG("topTool=["+topTool.x+" "+topTool.y+"]")
log("...WINDOW %c "+ w_W+" x "+w_H +" %c PAGE %c "+p_H +" ", lb3,lbA, lb4);
}}}*/
    /*}}}*/
    /* spread_ratio {{{*/
    x =                      parseFloat(   store_getItem("spread_ratio_x") || 0.5);
    y =                      parseFloat(   store_getItem("spread_ratio_y") || 0.5);

    spread_ratio.x = x;
    spread_ratio.y = y;
/*{{{
logBIG(caller+": spread_ratio=["+spread_ratio.x+" "+spread_ratio.y+"]")
}}}*/
    /*}}}*/
    /* [dom_hide] {{{*/
    dom_hide6_add_container_observer      ( t_seek_set_container_selected );
    dom_hide6_add_store_set_value_observer( store_set_value               );
    dom_hide6_add_info_observer           ( t_fly                         );

    /*}}}*/
    /* IPC [dom_store] {{{*/
    dom_store_add_info_observer( t_pat_bag_status_set_innerText );

    store_add_listener();
    /*}}}*/
    /* scroll to tools_scrollY {{{ */
    let tools_scrollY = store_getItem("tools_scrollY"); tools_scrollY = (tools_scrollY == null) ? 0 : parseFloat(tools_scrollY);
    if( tools_scrollY) {
        setTimeout( function() { t_window_scrollTo(window.scrollX, tools_scrollY, "instant"); }, 0);
    }
    /*}}}*/
    /* add prop change listener {{{*/
    prop_set_CB( t1_prop_id_state_CB );

    /*}}}*/
    /* LOG SETTINGS */
if( log_this) t_store0_log_settings();

};
/*}}}*/
/*_ t_pin_tool_at_XY {{{*/
let t_pin_tool_at_XY = function(tool_el, x, y, position, zIndex)
{
/*{{{*/
let   caller = "t_pin_tool_at_XY";
let log_this = LOG_MAP.T0_STORE || LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;


if( log_this) log(caller+"("+get_n_lbl(tool_el)+", ["+x+" "+y+"], position=["+position+"], zIndex=["+zIndex+"])");
/*}}}*/

    if(position) tool_el.style.position = position;
    tool_el.style.left                  = x+"px"  ;
    tool_el.style.top                   = y+"px"  ;

    t_set_CSS_PINNED(tool_el, true);

    tool_el.style.display = "block";
    if(zIndex  ) tool_el.style.zIndex   = zIndex;
};
/*}}}*/
/*_ t_get_tool_XY_in_viewport {{{*/
let t_get_tool_XY_in_viewport = function(panel, x, y)
{
/*{{{*/
let   caller = "t_get_tool_XY_in_viewport";
let log_this = LOG_MAP.T0_STORE || LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

/*}}}*/
    let h = panel.offsetHeight;
    let w = panel.offsetWidth;

    let t = -h+2*BOX_MARGIN                   ; /* near top    */
    let l = -w+2*BOX_MARGIN                   ; /* near left   */
    let b =                 w_H - 2*BOX_MARGIN; /* near bottom */
    let r =                 w_W - 2*BOX_MARGIN; /* near right  */

    let xy    = { x:x , y:y };
    xy.x      = Math.max( l, x   );
    xy.x      = Math.min( xy.x, r);

    xy.y      = Math.max( t, y   );
    xy.y      = Math.min( xy.y, b);

    xy.capped = (x != xy.x) || (y != xy.y);

if( log_this)
    log_key_val( caller
                 , {       panel : panel.id
                     ,         x : x
                     ,         y : y
                     , WINDOW_WH : "["+  w_W +" "+  w_H +"]"
                     ,        tl : "["+    t +" "+    l +"]"
                     ,        br : "["+    b +" "+    r +"]"
                     ,        wh : "["+    w +" "+    h +"]"
                     ,        xy : "["+ xy.x +" "+ xy.y +"]"
                     ,    capped : xy.capped
                 }
               , lf4);
    return xy;
};
/*}}}*/
/*  t6_load */
/*  t6_load */
/*  t6_load */
/*  t6_load_DOM_TAGS {{{*/
let t6_load_DOM_TAGS = function()
{
/*{{{*/
    let caller = "t6_load_DOM_TAGS";
let log_this = LOG_MAP.T0_STORE || LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+SD6+"%c "+caller+" COLOR-STAMPING MODULE TAGS", lbS+lf6, lbH+lf6);
/*}}}*/
    /* dom_load_tags_el UI {{{*/
    let dom_load_tags_el = get_tool("dom_load_tags");
    if(!dom_load_tags) {
logBIG(caller+" *** get_tool('dom_load_tags') failed");

        return;
    }
    /*}}}*/
    let id, el;

    id = "dom_tools_html"; if(el = get_tool(id+"_tag")) DOM_TOOLS_HTML_TAG = el.innerHTML;
    id =  "dom_grid_html"; if(el = get_tool(id+"_tag")) DOM_GRID_HTML_TAG  = el.innerHTML;

    id =   "dom_host_css";                              DOM_HOST_CSS_TAG   = t6_load_css1_document_tag(id);
    id =  "dom_tools_css";                              DOM_TOOLS_CSS_TAG  = t6_load_css2_tool_tag    (id);
    id =   "dom_grid_css";                              DOM_GRID_CSS_TAG   = t6_load_css2_tool_tag    (id);

    if( typeof DOM_LOAD_TAG  == "undefined") {
        window.DOM_LOAD_TAG="${DOM_LOAD_TAG}";
if( log_this) logBIG("DOM_LOAD_TAG ["+DOM_LOAD_TAG+"] SET FROM TEMPLATE LITERAL");
    }

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
        + ((typeof DOM_HIDE_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_HIDE_JS_TAG    *</em>" : "<em class='cc"+ get_tag_hour( DOM_HIDE_JS_TAG    ) +"'>"+ DOM_HIDE_JS_TAG     +"</em>")
        + ((typeof DOM_LOG_JS_TAG     == "undefined") ? "<em class='"+m_class+"'>DOM_LOG_JS_TAG     *</em>" : "<em class='cc"+ get_tag_hour( DOM_LOG_JS_TAG     ) +"'>"+ DOM_LOG_JS_TAG      +"</em>")
        + ((typeof DOM_PROP_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_PROP_JS_TAG    *</em>" : "<em class='cc"+ get_tag_hour( DOM_PROP_JS_TAG    ) +"'>"+ DOM_PROP_JS_TAG     +"</em>")
        + ((typeof DOM_SELECT_JS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_SELECT_JS_TAG  *</em>" : "<em class='cc"+ get_tag_hour( DOM_SELECT_JS_TAG  ) +"'>"+ DOM_SELECT_JS_TAG   +"</em>")
        + ((typeof DOM_STORE_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_STORE_JS_TAG   *</em>" : "<em class='cc"+ get_tag_hour( DOM_STORE_JS_TAG   ) +"'>"+ DOM_STORE_JS_TAG    +"</em>")
        + ((typeof DOM_TOOLS_CSS_TAG  == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_CSS_TAG  *</em>" : "<em class='cc"+ get_tag_hour( DOM_TOOLS_CSS_TAG  ) +"'>"+ DOM_TOOLS_CSS_TAG   +"</em>")
        + ((typeof DOM_TOOLS_HTML_TAG == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_HTML_TAG *</em>" : "<em class='cc"+ get_tag_hour( DOM_TOOLS_HTML_TAG ) +"'>"+ DOM_TOOLS_HTML_TAG  +"</em>")
        + ((typeof DOM_TOOLS_JS_TAG   == "undefined") ? "<em class='"+m_class+"'>DOM_TOOLS_JS_TAG   *</em>" : "<em class='cc"+ get_tag_hour( DOM_TOOLS_JS_TAG   ) +"'>"+ DOM_TOOLS_JS_TAG    +"</em>")
        + ((typeof DOM_UTIL_JS_TAG    == "undefined") ? "<em class='"+m_class+"'>DOM_UTIL_JS_TAG    *</em>" : "<em class='cc"+ get_tag_hour( DOM_UTIL_JS_TAG    ) +"'>"+ DOM_UTIL_JS_TAG     +"</em>")
    ;
if(LOG_MAP.T3_LAYOUT) log(strip_html(dom_load_tags_el.innerHTML));

};
/*}}}*/
/*_ t6_load_css1_document_tag {{{*/
let t6_load_css1_document_tag = function(id)
{
let caller = "t6_load_css1_document_tag("+id+")";

    let tag = "";

    /* check or provide a target DOCUMENT-HTMLElement for this id */
    let el = document.getElementById(id+"_tag");
    if(!el) {
        el               = document.createElement("SPAN");
        el.id            = id+"_tag";
        el.style.display = "none";
        document.body.appendChild( el );
    }

    /* return the content property value applied by the defined CSS ID selector */
    try {
        let style = getComputedStyle(el);
        let   txt = strip_pat(style.getPropertyValue("content"), DOUBLE_QUOTE);
        tag       = txt.includes(id) ? "DOCUMENT: "+txt : "";
    }
    catch(ex) {
/*{{{
console.trace(caller+": "+ ex);
}}}*/
    }

/*{{{
logXXX(caller+": ...return %c "+tag, lbH+lf1);
}}}*/
    return tag;
};
/*}}}*/
/*_ t6_load_css2_tool_tag {{{*/
let t6_load_css2_tool_tag = function(id)
{
let  caller = "t6_load_css2_tool_tag("+id+")";
    let tag = "";

    /* check the target HTMLElement for this id */
    let el       = get_tool(id)  ;
    if( el ) tag = t6_load_css3_first_rule_text(el);

    /* ...or provide a target SHADOW-HTMLElement for this id */
    if(!tag) {
        el               = document.createElement("SPAN");
        el.id            = id+"_tag";
        el.style.display = "none";
        shadow_root.appendChild( el );

        try {
            let style = getComputedStyle(el);
            let   txt = strip_pat(style.getPropertyValue("content"), DOUBLE_QUOTE);
            tag       = txt.includes(id) ? "SHADOW: "+txt : "";
        }
        catch(ex) {
/*{{{
console.trace(caller+": "+ ex);
}}}*/
        }
    }
/*{{{
logXXX(caller+": ...return %c "+tag, lbH+lf2);
}}}*/
    return tag;
};
/*}}}*/
/*_ t6_load_css3_first_rule_text {{{*/
let t6_load_css3_first_rule_text = function(el)
{
    let  caller = "t6_load_css3_first_rule_text("+el.id+")";

    let tag = "";

    let                                result = "";
    try {
        if(     !el.sheet            ) result = "!el.sheet";
        else if(!el.sheet.cssRules   ) result = "!el.sheet.cssRules";
        else if(!el.sheet.cssRules[0]) result = "!el.sheet.cssRules[0]";
        else {
            let txt = el.sheet.cssRules[0].cssText;
            let x_1 = txt.indexOf    ('"');
            let x_2 = txt.lastIndexOf('"');
            txt     = txt.substring(x_1+1, x_2);
            tag     = txt.includes(el.id) ? "SHEET: "+txt : "";
        }
    }
    catch(ex) {
        result = ex;
/*{{{
console.trace()
}}}*/
    }
/*{{{
logXXX(caller+": ...return: %c"+(tag || result), lbH+lf3);
}}}*/
    return tag;
};
/*}}}*/
/*  t7_load */
/*  t7_load */
/*  t7_load */
/*  t7_load_GRID {{{ */
let t7_load_GRID = function()
{
/*{{{*/
let   caller = "t7_load_GRID";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SD7+"%c "+caller, lbS+lf7, lbH+lf7);
/*}}}*/
    if(typeof t_grid_MEASURE != "undefined")
        t_grid_MEASURE();
};
/* }}} */
/*  t8_load */
/*  t8_load */
/*  t8_load */
/*_ t8_load_LOG_MAP {{{ */
/*{{{*/
let KEY_LOG_IPC             = "LOG IPC"      ;
let KEY_LOG_EVENTS          = "LOG EVENTS"   ;
let KEY_LOG_HIGHLIGHT       = "LOG HIGHLIGHT";
let KEY_LOG_TOOLBAR         = "LOG TOOLBAR"  ;

/*}}}*/
let t8_load_LOG_MAP = function()
{
/*{{{*/
let   caller = "t8_load_LOG_MAP";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SD8+"%c "+caller, lbS+lf8, lbH+lf8);
/*}}}*/
    if( !dev_log_map ) return;

    let button_className = CSS_TOOLBAG_BUTTON;
    dev_log_map.innerHTML = ""
        + "<em class='"+button_className+" "+ (LOG_IPC                ? "cc9" : "cc8") +"'>"+ KEY_LOG_IPC       +"</em>"
        + "<em class='"+button_className+" "+ (logging_EVENTS         ? "cc9" : "cc8") +"'>"+ KEY_LOG_EVENTS    +"</em>"
        + "<em class='"+button_className+" "+ (logging_HIGHLIGHT      ? "cc9" : "cc8") +"'>"+ KEY_LOG_HIGHLIGHT +"</em>"
        + "<em class='"+button_className+" "+ (logging_TOOLBAR        ? "cc9" : "cc8") +"'>"+ KEY_LOG_TOOLBAR   +"</em>"

        + "<em class='"+button_className+" "+ (LOG_MAP.EV0_LISTEN     ? "cc9" : "cc8") +"'>"+ "EV0_LISTEN"      +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV1_DOWN       ? "cc1" : "cc8") +"'>"+ "EV1_DOWN"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV2_MOVE       ? "cc2" : "cc8") +"'>"+ "EV2_MOVE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV3_UP         ? "cc3" : "cc8") +"'>"+ "EV3_UP"          +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV4_LONG_PRESS ? "cc4" : "cc8") +"'>"+ "EV4_LONG_PRESS"  +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV5_TOOL_CB    ? "cc5" : "cc8") +"'>"+ "EV5_TOOL_CB"     +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV6_CHANGED    ? "cc6" : "cc8") +"'>"+ "EV6_CHANGED"     +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV7_DISPATCH   ? "cc7" : "cc8") +"'>"+ "EV7_DISPATCH"    +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.EV8_FLOATLOG   ? "cc9" : "cc8") +"'>"+ "EV8_FLOATLOG"    +"</em>"

        + "<em class='"+button_className+" "+ (LOG_MAP.S1_RANGE       ? "cc1" : "cc8") +"'>"+ "S1_RANGE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.S2_SELECT      ? "cc2" : "cc8") +"'>"+ "S2_SELECT"       +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.S3_SLOT        ? "cc3" : "cc8") +"'>"+ "S3_SLOT"         +"</em>"

        + "<em class='"+button_className+" "+ (LOG_MAP.T0_STORE       ? "cc9" : "cc8") +"'>"+ "T0_STORE"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T1_DOM_LOAD    ? "cc1" : "cc8") +"'>"+ "T1_DOM_LOAD"     +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T2_GRID        ? "cc2" : "cc8") +"'>"+ "T2_GRID"         +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T3_LAYOUT      ? "cc3" : "cc8") +"'>"+ "T3_LAYOUT"       +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T4_PIVOT       ? "cc4" : "cc8") +"'>"+ "T4_PIVOT"        +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T5_SPREAD      ? "cc5" : "cc8") +"'>"+ "T5_SPREAD"       +"</em>"
        + "<em class='"+button_className+" "+ (LOG_MAP.T6_SLOT        ? "cc6" : "cc8") +"'>"+ "T6_SLOT"         +"</em>"

/* UNICODE {{{
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

    if(!t_has_push_pin_on_panel( dev_log_map ) ) t_add_toolpins_on_panel  ( dev_log_map );
    else                                         t_eval_wide_or_tall_panel( dev_log_map );
};
/* }}} */
/*  t9_load */
/*  t9_load */
/*  t9_load */
/*_ t9_load_BEHAVIOR {{{*/
let t9_load_BEHAVIOR = function()
{
/*{{{*/
let   caller = "t9_load_BEHAVIOR";
let log_this = LOG_MAP.T1_DOM_LOAD || LOG_MAP.EV7_DISPATCH;

if( log_this) log("%c"+SD9+"%c "+caller, lbS+lf9, lbH+lf9);
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
/*{{{
    behavior_TOUCH_ELSE_DESKTOP = window.matchMedia("only screen and (min-resolution : 128dpi)").matches;
logXXX("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
}}}*/
    /*}}}*/
    /* f(navigator.appVersion) {{{*/
    let appVersion = navigator.appVersion.toLowerCase();
    behavior_TOUCH_ELSE_DESKTOP
        =  !appVersion.includes("windows")
        && !appVersion.includes("hp"     )
        && !appVersion.includes("mac"    )
        && !appVersion.includes("sunos"  )
    ;
/*{{{
logXXX("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
}}}*/
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
        + "<li>ontouchstart "+ ((typeof document.documentElement.ontouchstart != "undefined") ? e_yes : e_no)+"</li>"+LF
        + "<li>s_log        "+ ((typeof s_log                                 != "undefined") ? e_yes : e_no)+"</li>"+LF
        + "<li>  log        "+ ((typeof   log                                 != "undefined") ? e_yes : e_no)+"</li>"+LF
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
/*  t10_load */
/*  t10_load */
/*  t10_load */
/*  t10_load_IPC_and_LISTENERS {{{*/
let t10_load_IPC_and_LISTENERS = function()
{
/*{{{*/
let   caller = "t10_load_IPC_and_LISTENERS";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SDA+"%c "+caller, lbS+lf9, lbH+lf9);
/*}}}*/
    /* [TOOLS NOT LOADED] .. f(CSP) .. [SEND IPC TOOLS NOT LOADED] {{{*/
    /* Content Security Poplicy (CSP) MAY HAVE "Refused to load the stylesheet" */
    let script_loaded;
    if((typeof DOM_TOOLS_CSS_TAG == "undefined") || !DOM_TOOLS_CSS_TAG)
    {
if(log_this) console.log("%c DOM_TOOLS_CSS_TAG=["+DOM_TOOLS_CSS_TAG+"] .. %c TOOLS INLINING REJECTED", lb7, lb2);

        /* hide all optional tools */
        let el;
        for(let i=1; i < TOOL_panels.length; ++i)
            if(el =      TOOL_panels[i]) el.style.display = "none";
        /* ipc seeker_PD seeker_PU {{{*/
        if(    el = pivspot            ) el.style.display = "none";
        if(    el = seeker_PD          ) el.style.display = "none";
        if(    el = seeker_PU          ) el.style.display = "none";

/*{{{
        if(    el = dom_grid_css_tag   ) el.style.display = "none";
        if(    el = dom_host_css_tag   ) el.style.display = "none";
        if(    el = dom_tools_css_tag  ) el.style.display = "none";
        if(    el = dom_tools_html_tag ) el.style.display = "none";
}}}*/
        /*}}}*/
        let ipc      = {  t_load : TOOLS3_NEED_RELAXED_CSP
            ,             caller : DOM_TOOLS_JS_TAG
            ,            details : caller
        };
        t_send_IPC( ipc );

        script_loaded = false;
    }
    /*}}}*/
    /* [TOOLS LOADED] ... ADD EVENT LISTENERS {{{*/
    else {
if(LOG_MAP.EV0_LISTEN || logging_EVENTS) log(caller+": ADDING EVENT LISTENERS");

        t_add_LISTENERS();

        script_loaded = true;
    }
    /*}}}*/
if( log_this) log("..."+caller+": return script_loaded=["+script_loaded+"]");
    return script_loaded;
};
/*}}}*/
/*  t11_load */
/*  t11_load */
/*  t11_load */
/*_ t11_load_POST {{{*/
let t11_load_POST = function()
{
/*{{{*/
let   caller = "t11_load_POST";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SDB+"%c "+caller, lbS+lf1, lbH+lf1);
/*}}}*/
    /* SCRIPT INJECTION WAS PREVENTED BY CSP .. TELL BROWSER EXTENSION {{{*/
    /* Content Security Policy .. (needs header.csp amending) */
    if((typeof DOM_TOOLS_CSS_TAG == "undefined") || !DOM_TOOLS_CSS_TAG)
    {
        log("%c *** "+caller+": %c TOOLS CSS NOT LOADED ", lb2, lbF);
        /*if(extension_signature) {*/
            let ipc = {  t_load : TOOLS3_NEED_RELAXED_CSP
                ,        caller : DOM_TOOLS_JS_TAG
                ,       details : caller
            };
            t_send_IPC( ipc );
        /*}*/
    }
    /*}}}*/
    /* SENDING TOOLS SIGNATURE .. (to browser extension) {{{*/
    else {
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

    }
    /*}}}*/
    /* IPC .. (MutationObserver) {{{*/
    if(!t_ipc_listener_id) {
        t_ipc_add_MutationObserver(DOM_TOOLS_JS_ID);

      /*t_ipc_add_message_listener(DOM_TOOLS_JS_ID);*/
    }
    /*}}}*/
    /* UI .. (init event parameters state) {{{*/
    t_clr_has_moved(caller+": CLEARING ONLOAD SCROLL");

    t_sync_styles(caller);
    t_SITE_OR_PAGE_changed();

    if(typeof sync_containers_hi != "undefined") sync_containers_hi();
    /*}}}*/
    /* TOOLS .. (display tools) {{{*/
    if(dom_tools_html) dom_tools_html.style.visibility = "visible";

    t_sync_layout(caller, 0); /* short call */
    /*}}}*/
    /* PROP AND DOC TOOLS {{{*/
    setTimeout(t_display_delayed_divs_shadow_root,   500); /* .. (dom_grid_playground) */
    setTimeout(t_display_delayed_divs_document   ,  1000);
    /*}}}*/
    t_sync_wording(caller);
};
/*}}}*/



/*_ t_TOOL_SET_select {{{*/
let t_TOOL_SET_select = function()
{
/*{{{*/
let   caller = "t_TOOL_SET_select";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    /* WORDING PANELS {{{*/
if( log_this) log("...pat_bag=["+get_n_lbl(pat_bag)+"]");
if( log_this) log("...TOOL_panels.includes(pat_bag)=["+TOOL_panels.includes(pat_bag)+"]");
    if(pat_bag && !off_bag) t_build_bag_tools();

    /*}}}*/
    /* FLOATLOG PRELOAD {{{*/
    t_log_set_state( LOG_MAP.EV8_FLOATLOG );

    set_el_class_on_off(fly_log, CSS_CHECKED, LOG_MAP.EV8_FLOATLOG  );
    /*}}}*/
    /* default to selecting first panel {{{*/
    let some_panel_selected = false;
    for(let i=0; i < TOOL_SET.length; ++i)
    {
        let panel = get_tool( TOOL_SET[i].panel_id );
        if( panel ) {
            let map = tools_map_get(panel);
            if( map && map.selected) {
                some_panel_selected = true;
                break;
            }
        }
    }
    /*}}}*/
/*{{{
if( log_this) logBIG("...some_panel_selected=["+some_panel_selected+"]");
}}}*/
    /* [pivot_PANEL] .. f(UNSELECTED or PINNED) {{{*/
    if(!some_panel_selected || has_el_class(pivot_PANEL, CSS_PINNED))
    {
        t_set_pivot_PANEL(null);
    }
    /* [pivot_PANEL] .. f(FIRST SELECTED DOM_LOAD_ID TOOL_SET) */
    if(!pivot_PANEL && some_panel_selected)
    {
        let dom_load_id = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
        for(let i=0; i < TOOL_SET.length; ++i)
        {
            if(    (dom_load_id ==          TOOL_SET[i].dom_load_id)
                && (       panel = get_tool(TOOL_SET[i].panel_id)  )
                && (         map = tools_map_get(panel)            )
                && (         map.selected                          )
                && !has_el_class(panel, CSS_PINNED)
              ) {
                t_set_pivot_PANEL( panel );
                break;
            }
        }
    }

    t_get_selected_count( caller );
    /*}}}*/
    t_cache_init_by(caller);
};
/*}}}*/
/*_ t_TOOL_SET_set_class_state {{{*/
let t_TOOL_SET_set_class_state = function(className, state)
{
/*{{{*/
let   caller = "t_TOOL_SET_set_class_state("+className+", "+state+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    let i, el;
    for(i = 0; i < TOOL_SET.length; ++i)
    {
        if(el = get_tool( TOOL_SET[i].panel_id ))
            set_el_class_on_off(el, className, state);
    }
};
    /*}}}*/
/*_ t_TOOL_SET_eval_wide_or_tall_panel {{{*/
let t_TOOL_SET_eval_wide_or_tall_panel = function()
{
    for(let i=0; i < TOOL_SET.length; ++i)
    {
        let panel = get_tool( TOOL_SET[i].panel_id );
        if( panel ) {
            let map = tools_map_get(panel);
            if( map && map.selected) {
                t_eval_wide_or_tall_panel( panel );
            }
        }
    }
};
/*}}}*/

/*_ DELAYED TOOLS {{{*/
/*{{{*/
const CSS_DISPLAY_DELAYED = "display_delayed";

/*}}}*/
let t_display_delayed_divs_shadow_root = function() { t_display_delayed_divs_handler(shadow_root  ); };
let t_display_delayed_divs_document    = function() { t_display_delayed_divs_handler(document.body); };
let t_display_delayed_divs_handler     = function(container)
{
    let caller = "t_display_delayed_divs_handler";
let log_this = LOG_MAP.EV7_DISPATCH;

if(log_this) log("%c"+caller+"%c"+get_n_lbl(container),lbL+lf1,lbR+lf3);

    for(let i=0; i < container.childNodes.length; ++i)
    {
        let child = container.childNodes[i];

        if( child.classList && child.classList.contains( CSS_DISPLAY_DELAYED ) )
        {
if(log_this) log(".%c"+ get_n_lbl(child)+" ", lbH+lf3);
            child.classList.remove  ( CSS_DISPLAY_DELAYED );
        }

        for(let j=0; j < child.childNodes.length; ++j)
        {
            let el = child.childNodes[j];

            if(el.classList && el.classList.contains( CSS_DISPLAY_DELAYED ) )
            {
if(log_this) log("..%c"+ get_n_lbl(el)+" ", lbH+lf4);
                el.classList.remove  ( CSS_DISPLAY_DELAYED );
            }
        }
    }

};
/*}}}*/

/*}}}*/
/* _TOOL NODE {{{*/
/*{{{*/
let behavior_TOUCH_ELSE_DESKTOP;

let shadow_root;

let dom_grid_html; /* PLAYGROUND */

let hotspot;
let  hotring;
let  hotwave;
let pivspot;

let pat_bag;
let sel_bag;
let headsup;
let headsup_bw;
let headsup_bz;
let headsup_ds;
let headsup_f;
let headsup_w;

let dom_traversal;
let   pivspot_c;
let   hotspot_c;

let toolbar_thumb;
let tools_filter_input;
let recycle_button;
let tools_node_input;

let test_panel;

let transcript1;
let transcript2;
let  log_tr1;
let  log_tr2;

/*}}}*/
/*_ [TOOLS_MAP] CLASS {{{*/
let  TOOLS_MAP = function(panel, selected)
{
    /*this.init {{{*/
    this.init = function(panel, selected) {
        this.panel    =    panel;
        this.selected = selected;
        this.p        =       ""; /* position */
        this.x        =        0;
        this.y        =        0;
        this.w        =        0;
        this.h        =        0;
    };
    /*}}}*/
    /* this.log {{{*/
    this.log = function() {

        let   pinned =  this.panel.classList.contains(CSS_PINNED);

        let      lfx =  pinned                       ? lf2
            :           this.selected                ? lf4
            :                                          lf8;

        let      sym = !this.selected                ? SYMBOL_CLOSEPIN
            :           pinned                       ? SYMBOL_PUSH_PIN
            :                                          SYMBOL_CHECK_MARK;

        let      arr = " "+SYMBOL_RIGHT_LEFT_ARROW+" ";
        log( " %c "+sym+" " + this.panel.id
            +  " %c   POS=["+ this.p                + arr + this.panel.style.position                                +"]"
            +   " %c  X_Y=["+ this.x +" x "+ this.y + arr + this.panel.offsetLeft   +" x "+ this.panel.offsetTop     +"]"
            +    " %c W_H=["+ this.w +" x "+ this.h + arr + this.panel.offsetWidth  +" x "+ this.panel.offsetHeight  +"]"
            ,  lbH+lfx
            ,    lbH+lf5
            ,     lbH+lf6
            ,      lbH+lf7
           );
    };
    /*}}}*/
    this.init(panel, selected); /* construction-time-init */
};
/*_ [tools_map] ARRAY .. set get {{{*/

let tools_map = [];

let tools_map_set = function(map)
{
    tools_map.push( map );
};

let tools_map_get = function(panel)
{
    for(let i=0; i< tools_map.length; ++i) {
        if(panel == tools_map[i].panel) {
            return  tools_map[i];
        }
    }
    return null;
};
/*}}}*/
/*}}}*/
/*_ t_load_TOOLS_MAP {{{*/
/*{{{*/
let t_tools_loaded = false;
/*}}}*/
let t_load_TOOLS_MAP = function(_caller)
{
    /* TOOLS INLINING HAS BEEN REJECTED {{{*/
let   caller = "t_load_TOOLS_MAP("+_caller+")";
let log_this = LOG_MAP.T2_GRID || LOG_MAP.T1_DOM_LOAD;

if( log_this) logBIG(caller+": CALLED BY ["+ _caller+"]");

    if((typeof DOM_TOOLS_CSS_TAG == "undefined") || !DOM_TOOLS_CSS_TAG) {
log("%c *** "+caller+": TOOLS INLINING HAS BEEN REJECTED", lb2);

        return;
    }
    /*}}}*/
    /* ALREADY LOADED {{{*/
    if( t_tools_loaded ) {
/*{{{
        log("%c *** "+caller+": [tools_map] ALREADY LOADED ", lb2);
}}}*/
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
    /*  dom_grid_is_loaded {{{*/
    let dom_grid_is_loaded = is_dom_grid_loaded();
    if(!dom_grid_is_loaded )
        log_dom_grid_js_not_loaded(caller+"("+ _caller+")");

    /*}}}*/
    /* SELECT [tools_map] .. (t1_load_SHADOW's PRELOADED HIDDEN TOOLS) {{{*/
let dom_load_id = (typeof DOM_LOAD_ID != "undefined") ? DOM_LOAD_ID : "default";
if(log_this) log("SELECTING TOOLS FOR DOM_LOAD_ID=["+dom_load_id+"] .. ("+TOOL_panels.length+" TOOL panels)");

    let selected_count = 0;
    let selected;
    if(t_tools_loaded) {
        for(let i=0; i < TOOL_panels.length; ++i)
        {
            let        panel = TOOL_panels[i];
            if(       !panel ) {
                log("%c *** "+caller+": panel #"+i+" IS MISSING ", lb2);
                continue;
            }

            if( is_a_DOM_LOAD_panel(panel.id) )
            {
/*{{{
                selected       = store_getBool(panel.id+".selected");
}}}*/
                let panel_json = store_getItem(panel.id+"_JSON");
                if( panel_json ) {
                    let value = JSON.parse( panel_json );
                    selected = value.selected;
                }
                else {
                    selected = false;
                }

                tools_map_set(new TOOLS_MAP(panel, selected));

                if(panel != hotspot)
                    t_add_toolpins_on_panel(panel);

                set_el_class_on_off(panel,CSS_HIDDEN, !selected);

                selected_count += selected ? 1 : 0;

if(log_this && selected) tools_map_get(panel).log(caller+":");
            }
        }
    }
    /*}}}*/
    /* SHOW [hotspot] {{{*/
    del_el_class(hotspot, CSS_HIDDEN);

    /*}}}*/
if(log_this) log("tools_map.length=["+tools_map.length+"] selected_count=["+selected_count+"]");
};
/*}}}*/
/*_ t_get_selected_count {{{*/
let t_get_selected_count = function(_caller)
{
/*{{{*/
let log_this = LOG_MAP.T2_GRID;

if( log_this) log("t_get_selected_count: CALLED BY ["+ _caller+"]");
/*}}}*/
    let selected_count = 0;
    for(let i=0; i< TOOL_panels.length; ++i) {
        let panel = TOOL_panels[i];
        if(!panel ) {
            log("%c *** t_get_selected_count: panel #"+i+" IS MISSING ", lb2);
            continue;
        }
        let         key = panel.id+".selected";
        let    selected = store_getBool(key) ? true : false;
/*
if(log_this) log("... t_get_selected_count: ...store_getItem(key=["+key+"]): ...selected=["+selected+"]");
*/
        selected_count += selected ? 1 : 0;
    }

if(log_this) log("t_get_selected_count: ...return "+selected_count);
    return selected_count;
};
/*}}}*/
/*_ t_tools_panel_select {{{*/
let t_tools_panel_select = function(panel, state=true)
{
/*{{{*/
let caller = "t_tools_panel_select("+get_n_lbl(panel)+", "+state+")";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    let map = tools_map_get( panel );
    if(!map) return;
    if( map.selected != state)
    {
if(log_this) log("..."+(state ? "SHOWING" : "HIDING")+" "+get_n_lbl(panel));

        t_grid_TOOLS_SELECT_panel(panel, state);

        set_el_class_on_off(panel,CSS_HIDDEN, !map.selected);

        t_sync_layout(caller);
    }
};
/*}}}*/
/*_ t_set_tool_id_value {{{*/
let t_set_tool_id_value = function(id, value)
{
    let el = get_tool(id);
    if( el ) el.value     = value;
    if( el ) el.value_set = value;
};
/*}}}*/
/*_ t_get_tool_id_value {{{*/
let t_get_tool_id_value = function(id)
{
    let el = get_tool(id);
    if( el ) return el.value;
    else     return       "";
};
/*}}}*/
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
        case "seekzone"  :

        case "headsup"    :
        case "headsup_w"  :
        case "headsup_ds" :
        case "headsup_bw" :
        case "headsup_bz" :

        case "test_panel"    :
        case "dev_log_map"   :
        case "dom_load_tags" :
        case "dom_traversal" :

        case "transcript1" :
        case "transcript2" :

        case "fly_div" :

/*{{{
logXXX("...el=["+get_n_lbl(el)+"] .. bag_id=["+node.id+"]");
}}}*/
        return node.id;
        }
    }
    if( is_el_child_of_class(el, "prop_bag") ) {
/*{{{
logXXX("...el=["+get_n_lbl(el)+"] .. is_el_child_of_class(el, 'prop_bag')");
}}}*/
        return "prop_bag";
    }
    else {
        return "";
    }
};
/*}}}*/
/*_ get_tool {{{*/
let get_tool = function(id)
{
let caller = "get_tool("+id+")";

    if( id.includes(" ") ) return null;
    let selector
        = (id.charAt(0) != '.') && (id.charAt(0) != '#')
        ?  "#"+id
        :      id
    ;
    let el;

    if(shadow_root) el = shadow_root.querySelector(selector);
    else            el = document   .querySelector(selector);

/*{{{
logXXX(caller+": ...return ["+get_n_lbl(el)+"]");
}}}*/
    return el;
};
/*}}}*/

/*_ t_update_TOOLS_MAP_GEOMETRY {{{*/
/*{{{*/
const T_UPDATE_TOOLS_MAP_GEOMETRY_DELAY = 1000;
let   t_update_TOOLS_MAP_GEOMETRY_timer;

/*}}}*/
let   t_update_TOOLS_MAP_GEOMETRY = function(_caller, delay=T_UPDATE_TOOLS_MAP_GEOMETRY_DELAY)
{
/*{{{*/
let   caller ="t_update_TOOLS_MAP_GEOMETRY()";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller+"("+ _caller+", delay=["+delay+"])");
/*}}}*/
    if(       t_update_TOOLS_MAP_GEOMETRY_timer ) clearTimeout( t_update_TOOLS_MAP_GEOMETRY_timer );
              t_update_TOOLS_MAP_GEOMETRY_timer = null;

    if(delay) t_update_TOOLS_MAP_GEOMETRY_timer =   setTimeout( t_update_TOOLS_MAP_GEOMETRY_handler, delay);
    else                                                        t_update_TOOLS_MAP_GEOMETRY_handler(); /* sync call */
};
/*}}}*/
/*_ t_update_TOOLS_MAP_GEOMETRY_handler {{{*/
let t_update_TOOLS_MAP_GEOMETRY_handler = function()
{
/*{{{*/
let   caller ="t_update_TOOLS_MAP_GEOMETRY_handler";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*{{{
if( log_this) console.trace();
if( log_this) console_clear(caller);
}}}*/
/*}}}*/
    t_update_TOOLS_MAP_GEOMETRY_timer = null;

/*{{{
    if( call_t_grid_IS_SIZED(caller) ) {
        t_cache_init_by(caller+": TOOLS WERE ON-GRID AT LAST CALL");
        return;
    }
}}}*/
    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);

    let panelNum = 0;
    for(let i=0; i< tools_map.length; ++i)
    {
        let   map = tools_map[i];
        let panel =       map.panel;
/*{{{
logXXX(get_n_lbl(panel)+".position=["+ panel.style.position +"]");
}}}*/
        if(!map.selected                   ) continue;
        if( has_el_class(panel, CSS_HIDDEN)) continue;

/*{{{
let cs = getComputedStyle(panel)
console.dir(cs)
logXXX("cs.width=["+cs.width+"]");
logXXX("cs.height=["+cs.height+"]");
logXXX("position=["+panel.style.position+"]");
}}}*/
        if(!panel.style.position) {
            panel.style.position = prop_get( TOOLS_SCROLL ) ? "absolute" : "fixed";
/*{{{
logBIG("SETTING position=["+panel.style.position+"]")
}}}*/
        }

        map.p   = panel.style.position;
        map.x   = panel.offsetLeft;
        map.y   = panel.offsetTop;
        map.w   = panel.offsetWidth;
        map.h   = panel.offsetHeight;

/*{{{
logXXX("%c"+caller+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/
if(log_this) map.log("...");
/*{{{
if(panel == pat_bag) log(caller+": ...pat_bag map.h=["+map.h+"] .. offsetHeight=["+panel.offsetHeight+"]");
}}}*/
        if( panel.classList.contains(CSS_PINNED) )
        {
            let xy = t_get_tool_XY_in_viewport(panel, map.x, map.y);
            if( xy.capped )
            {
                let zIndex = ++panelNum + ZINDEX_PINNED_PANEL_ZERO;
                t_pin_tool_at_XY(panel, xy.x, xy.y, "fixed", zIndex);
                t_store_update_post(caller);
/*{{{
t_log_panel_style_zIndex(panel, caller+" [xy.capped]");
}}}*/
            }
/*{{{
else logBIG(get_n_lbl(panel)+" not capped")
}}}*/
        }
    }
};
/*}}}*/
/*}}}*/
/* _TOOL CHANGE {{{*/
/*  t_SITE_OR_PAGE_changed {{{*/
/*{{{*/
const SITE_LOCALSTORAGE    = "site_localstorage";

/*}}}*/
let t_SITE_OR_PAGE_changed = function(id, site_or_page_mode) /* id=unused .. (callback glue) .. (function-name redundant) */
{
/* {{{*/
let   caller = "t_SITE_OR_PAGE_changed";
let log_this = LOG_MAP.T3_LAYOUT;

    site_or_page_mode = (typeof site_or_page_mode != "undefined") ? site_or_page_mode  : prop_get( SITE_OR_PAGE ); /* set of fetch */

if( log_this)
    log(  "%c"    + caller
         +"%c to "+ site_or_page_mode
         +"%c on "+ (behavior_TOUCH_ELSE_DESKTOP ? "MOBILE" : "DESKTOP")
         , lbL+lf3
         , lbR+lf4
         , lbH+lbb+ (   behavior_TOUCH_ELSE_DESKTOP ?      lf7 : lf9   )
       );

if(log_this || LOG_MAP.EV8_FLOATLOG || fly_log_checked)
    t_fly("<em class='cc3'>"+caller+"</em> to <em class='cc4'>"+site_or_page_mode+"</em> on <em class='cc9'>"+(behavior_TOUCH_ELSE_DESKTOP ? "MOBILE" : "DESKTOP")+"</em>");

if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);

/*}}}*/
    /* TODO unexpand combinations (EDIT_OR_STAGE * SITE_OR_PAGE) */
    /* NOT EDITING {{{*/
    let          lfw;
    let      context;
    let   transition;
    let  which_nodes;

    let in_page_mode = !site_or_page_mode;
    let       action =  prop_get(  MASK_OR_HIDE ) ? "MASKING" : "HIDING";
    let          lfa = (action == "MASKING"     ) ?       lf6 : lf2     ;

    if(!prop_get( EDIT_OR_STAGE ) )
    {
        context = "WHILE NOT EDITING";
        if( in_page_mode ) {
            transition  = "ENTERING PAGE MODE";
            which_nodes = "SITE AND PAGE NODES";     lfw = lf4;
            dom_hide2_store_reload("both");
            del_el_class(hotspot, SITE_LOCALSTORAGE);
        }
        else {
            transition  = "LEAVING PAGE MODE";
            which_nodes = "SITE ONLY NODES";         lfw = lf6;
            dom_hide2_store_reload("site");
            add_el_class(hotspot, SITE_LOCALSTORAGE);
        }
    }
    /*}}}*/
    /* WHILE EDITING {{{*/
    else {
        context = "WHILE EDITING";
        if( in_page_mode ) {
            transition  = "ENTERING PAGE MODE";
            which_nodes = "PAGE ONLY NODES";         lfw = lf5;
            dom_hide2_store_reload("page");
            del_el_class(hotspot, SITE_LOCALSTORAGE);
        }
        else {
            transition  = "LEAVING PAGE MODE";
            which_nodes = "SITE ONLY NODES";         lfw = lf6;
            dom_hide2_store_reload("site");
            add_el_class(hotspot, SITE_LOCALSTORAGE);
        }
    }
    /*}}}*/
    dom_hide_set_MASK_OR_HIDE();

    if(!t_cache_empty)
        t_store4_save_site_layout(caller);
/*{{{*/
if( log_this)
    log("%c"+transition+"%c"+context+"%c"+action +"%c"+which_nodes
        ,lbb+lbL        ,lbb+lbR     ,lbb+lbL+lfa ,lbb+lbR+lfw    );

/*}}}*/
};
/*}}}*/
/*  t_DOM_HIDE1_RESET_changed {{{*/
let t_DOM_HIDE1_RESET_changed = function(id, value)
{
/*{{{*/
let   caller = "t_DOM_HIDE1_RESET_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    dom_hide1_reset();

    /* transient state fallback .. not a checkbox */
    setTimeout(function() { del_el_class(prop_get_EL(id), CSS_CHECKED); }, 1000);

};
/*}}}*/
/*  t_EDIT_OR_STAGE_changed {{{*/
let t_EDIT_OR_STAGE_changed = function(id, value)
{
/*{{{*/
let   caller = "t_EDIT_OR_STAGE_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    if( value ) t_dom_edit_or_stage_start(id, value);
    else        t_dom_edit_or_stage_end  (id, value);

};
/*}}}*/
/*_ t_dom_edit_or_stage_start {{{*/
let t_dom_edit_or_stage_start = function ()
{
/* {{{*/
let   caller = "t_dom_edit_or_stage_start"; if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    t_gutter_drag_hotspot_IN(t_hotspot_last_GUTTER_XY.x, t_hotspot_last_GUTTER_XY.y);
    t_gutter_drag_hotspot_to_LAST_GUTTER_XY();
    add_el_class(hotspot  , DOM_EDITING);

    del_el_class(hotspot_c, CSS_ROTATE_NE);
    del_el_class(hotspot_c, CSS_ROTATE_SE);
    del_el_class(hotspot_c, CSS_ROTATE_SW);
    del_el_class(hotspot_c, CSS_ROTATE_NW);

    /* START IN PAGE MODE .. (skipping onchange) */
    dom_hide2_store_reload("page");

    /* ENTER EDIT MODE .. (skipping onchange) */
    prop_set(MASK_OR_HIDE,  true);
    dom_hide_set_MASK_OR_HIDE();

    /* ANCHOR FREEZE WHILE EDITING */
    t_sync_wording( caller );
};
/*}}}*/
/*_ t_dom_edit_or_stage_end {{{*/
let t_dom_edit_or_stage_end = function ()
{
/* {{{*/
let   caller = "t_dom_edit_or_stage_end"; if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/

    t_gutter_drag_hotspot_OUT(t_hotspot_last_WINDOW_XY.x, t_hotspot_last_WINDOW_XY.y, caller);
    t_gutter_drag_hotspot_to_LAST_WINDOW_XY();

    t_seekzone4_hide("instant");

    /* BACK TO HIDING PAGE HIDDEN NODES */
    prop_set(MASK_OR_HIDE, false);
    prop_set(SITE_OR_PAGE, false);

    /* RELOAD PAGE HIDDEN NODES */
    dom_hide2_store_reload   ("both");
    dom_hide_set_MASK_OR_HIDE( true);

    /* ANCHOR UNFREEZE AFTER EDITING */
    t_sync_wording( caller );
};
/*}}}*/
/*  t_MASK_OR_HIDE_changed {{{*/
let t_MASK_OR_HIDE_changed = function(id, value)
{
/*{{{*/
let   caller = "t_MASK_OR_HIDE_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/

    /* [node_to_hide] toggle */
    dom_hide_set_MASK_OR_HIDE();

    /* tools toggle */
    if( prop_get( MASK_OR_HIDE ) )
    {
        del_el_class(hotspot , MARKED_TO_HIDE);
        del_el_class(seekzone, MARKED_TO_HIDE);
    }
    else {
        add_el_class(hotspot , MARKED_TO_HIDE);
        add_el_class(seekzone, MARKED_TO_HIDE);
    }
    t_SITE_OR_PAGE_changed();
};
/*}}}*/
/*  t_words_option_select_key {{{*/
let t_words_option_initialize = function() { t_words_option_select_key("INIT"); };
let t_words_option_select_key = function(key)
{
/*{{{*/
let   caller = "t_words_option_select_key("+key+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
    switch(key)
    {
    case WORDS_EXACT    :
    prop_init(WORDS_SEGMENT  , false);
    prop_init(WORDS_HEAD_TAIL, false);
    break;

    case WORDS_SEGMENT  :
    prop_init(WORDS_EXACT    , false);
    prop_init(WORDS_HEAD_TAIL, false);
    break;

    default             :
    prop_init(WORDS_HEAD_TAIL,  true);
    /* ...then fall through: */
    case WORDS_HEAD_TAIL:
    prop_init(WORDS_EXACT    , false);
    prop_init(WORDS_SEGMENT  , false);
    break;
    }
};
/*}}}*/
/*_ t_SHOW_SEEKZONE_changed {{{*/
let t_SHOW_SEEKZONE_changed = function(id, value)
{
/*{{{*/
let   caller = "t_SHOW_SEEKZONE_changed("+id+", "+value+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf5);
/*}}}*/
      if(!prop_get(id) ) t_seekzone4_hide("instant");
};
/*}}}*/
/*}}}*/
/* _TOOL STORE {{{*/
/* TODO GENERALIZE THE HANDLING OF [UNDECIDED NUMBER OF MULTIPLE-ITEMS-PROPERTY (e.g. words suffix) ] */
/* WORDS SUFFIX OPTIONS {{{*/
const WORDS_SUFFIXES          = ["s"     , "ing"  ];
const WORDS_SUFFIXE_MIN_LEN   = { s:3    ,  ing:6 }; /* needs at least this number of chars to still make sense */
const WORDS_MUST_NOT_END_WITH = { s:"ss"          }; /* this word ending in is not likely a suffix */

/*_ t_get_words_drop_affix_array {{{*/
let       words_drop_affix_array;
let t_get_words_drop_affix_array = function()
{
    if(!words_drop_affix_array)
    {
        words_drop_affix_array = [];
        for(let i=0; i < WORDS_SUFFIXES.length; ++i)
            words_drop_affix_array.push("words_drop_"+WORDS_SUFFIXES[i]);
    }

    return words_drop_affix_array;
};
/*}}}*/
/*}}}*/
/* TOOL_KEY_PAGE_SITE_TRANSIENT {{{*/
const TOOL_KEY_PAGE_SITE_TRANSIENT = [
    /* LOG_MAP ENTRIES {{{*/
    {   key : "EV0_LISTEN"         , page : false , site : false , transient :  true }
    , { key : "EV1_DOWN"           , page : false , site : false , transient : false }
    , { key : "EV2_MOVE"           , page : false , site : false , transient : false }
    , { key : "EV3_UP"             , page : false , site : false , transient : false }
    , { key : "EV4_LONG_PRESS"     , page : false , site : false , transient : false }
    , { key : "EV5_TOOL_CB"        , page : false , site : false , transient : false }
    , { key : "EV6_CHANGED"        , page : false , site : false , transient : false }
    , { key : "EV7_DISPATCH"       , page : false , site : false , transient : false }
    , { key : "EV8_FLOATLOG"       , page : false , site : false , transient : false }
    , { key : "S1_RANGE"           , page : false , site : false , transient : false }
    , { key : "S2_SELECT"          , page : false , site : false , transient : false }
    , { key : "S3_SLOT"            , page : false , site : false , transient : false }
    , { key : "T0_STORE"           , page : false , site : false , transient : false }
    , { key : "T1_DOM_LOAD"        , page : false , site : false , transient : false }
    , { key : "T2_GRID"            , page : false , site : false , transient : false }
    , { key : "T3_LAYOUT"          , page : false , site : false , transient : false }
    , { key : "T4_PIVOT"           , page : false , site : false , transient : false }
    , { key : "T5_SPREAD"          , page : false , site : false , transient : false }
    , { key : "T6_SLOT"            , page : false , site : false , transient : false }

    , { key : "LOG_IPC"            , page : false , site : false , transient :  true }

    , { key : "logging_EVENTS"     , page : false , site : false , transient :  true }
    , { key : "logging_HIGHLIGHT"  , page : false , site : false , transient :  true }
    , { key : "logging_TOOLBAR"    , page : false , site : false , transient :  true }
    /*}}}*/
    /* TOOLS LAYOUT {{{*/
    , { key : "pivotXY"            , page : false , site : false , transient :  true }
    , { key : "pivot_PANEL"        , page : false , site : false , transient : false }
    , { key :  PIVOT_MAGNIFIED     , page : false , site : false , transient : false }

    , { key : "spread_ratio_x"     , page : false , site : false , transient :  true }
    , { key : "spread_ratio_y"     , page : false , site : false , transient :  true }
    , { key : "topTool_XY"         , page : false , site : false , transient :  true }
    , { key : "tools_scrollY"      , page :  true , site : false , transient : false }

    , { key : "transcript1_pinned" , page : false , site : false , transient : false }
    , { key : "transcript2_pinned" , page : false , site : false , transient : false }
    /*}}}*/
    /* USER PATTERNS CSV {{{*/
    , { key : "sel_csv"            , page :  true , site : false , transient : false }
    , { key : "pat_csv"            , page :  true , site : false , transient : false }
    , { key : "off_csv"            , page :  true , site : false , transient : false }
    , { key : "bak_csv"            , page :  true , site : false , transient : false }
    , { key : "alt_csv"            , page :  true , site : false , transient : false }

    , { key : "node_to_hide_csv"   , page :  true , site :  true , transient : false }
    /*}}}*/
];
/*}}}*/
/*  t_store0_set_settings {{{*/
let t_store0_set_settings = function()
{
/*{{{*/
let   caller = "t_store0_set_settings";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller);
/*}}}*/

    TOOL_KEY_PAGE_SITE_TRANSIENT.forEach(
        function(each) {
            if(  each.page     ) store_add_page_key           ( each.key );
            if(  each.site     ) store_add_site_key           ( each.key );
            if(  each.transient) store_do_not_log_transient_key( each.key );
        }
    );
};
/*}}}*/
/*  t_store0_log_settings {{{*/
let t_store0_log_settings = function()
{
log("%c STORAGE SETTINGS:", lbF+lb8);

    prop_log_MAP("t_store0_log_settings");

    dom_hide8_log();

    TOOL_KEY_PAGE_SITE_TRANSIENT.forEach(
        function(each) {
            let value = store_getItem(    each.key       );
            if( value ) store_key_log("", each.key, value);
        }
    );

    let id;

    id = "USERAGENT"         ; log("o %c "+id+": %c "+ USERAGENT +"] IN_WEBVIEW=["+ IN_WEBVIEW  +" ", lbF+lb1, lbA);
    id = "sel_csv"           ; log("o %c "+id+": %c "+ sel_csv                                  +" ", lbF+lb5, lbA);
    id = "pat_csv"           ; log("o %c "+id+": %c "+ pat_csv                                  +" ", lbF+lb5, lbA);
    id = "off_csv"           ; log("o %c "+id+": %c "+ off_csv                                  +" ", lbF+lb5, lbA);
    id = "bak_csv"           ; log("o %c "+id+": %c "+ bak_csv                                  +" ", lbF+lb5, lbA);
    id = "alt_csv"           ; log("o %c "+id+": %c "+ alt_csv                                  +" ", lbF+lb5, lbA);
    id = "pivot_PANEL"       ; log("o %c "+id+": %c "+ get_n_lbl(pivot_PANEL)                   +" ", lbF+lb8, lbA);
    id = "pivotXY"           ; log("o %c "+id+": %c "+ pivotXY.x+" "+pivotXY.y                  +" ", lbF+lb8, lbA);
    id = "topTool"           ; log("o %c "+id+": %c "+ topTool.x+" "+topTool.y                  +" ", lbF+lb8, lbA);
    id = "spread_ratio"      ; log("o %c "+id+": %c "+ spread_ratio.x +" "+ spread_ratio.y      +" ", lbF+lb8, lbA);

};
/*}}}*/
/*  t_store1_save_all_settings {{{*/
let t_store1_save_all_settings = function()
{
let   caller = "t_store1_save_all_settings";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller);

    /* NOTHING TO SAVE */
    if(!has_el_class(hotring, ALL_PAGE_ITEMS_REMOVED) )
    {
/*{{{
logBIG("NOTHING TO SAVE .. ALL_PAGE_ITEMS_REMOVED",lf9);
}}}*/
        return;
    }
    t_store2_save_site_theme   ();
    t_store3_save_site_logging ();
    t_store4_save_site_layout  ("SAVING ALL SETTINGS");
    t_store5_save_page_wording ();
};
/*}}}*/
/*_ t_store2_save_site_theme {{{*/
let t_store2_save_site_theme = function()
{
let   caller = "t_store2_save_site_theme";
let log_this = LOG_MAP.T0_STORE;
    /* TOOLS LAYOUT */
    let key, value;
if( log_this) log(caller);

    key = "tools_scrollY"      ; value = scroll_last_scrollY;       store_set_value(key, value);

    key = ANCHOR_FREEZE        ; value = prop_get( ANCHOR_FREEZE ); store_set_state(key, value);
    key =  CONTAINERS_HI       ; value = prop_get( CONTAINERS_HI ); store_set_state(key, value);
    key =  THEME_DARK          ; value = prop_get( THEME_DARK    ); store_set_state(key, value);
    key =  TOOLS_TRAP          ; value = prop_get( TOOLS_TRAP    ); store_set_state(key, value);
    key =  TOOLS_EXTRAS        ; value = prop_get( TOOLS_EXTRAS  ); store_set_state(key, value);

};
/*}}}*/
/*_ t_store3_save_site_logging {{{*/
let t_store3_save_site_logging = function()
{
let   caller = "store_per_site_logging";
let log_this = LOG_MAP.T0_STORE;
    /* LOGGING */
    let key, value;
if( log_this) log(caller);

    key = "tools_scrollY"      ; value = scroll_last_scrollY   ; store_set_value(key, value);
    key = "EV0_LISTEN"         ; value = LOG_MAP.EV0_LISTEN    ; store_set_state(key, value);
    key = "EV1_DOWN"           ; value = LOG_MAP.EV1_DOWN      ; store_set_state(key, value);
    key = "EV2_MOVE"           ; value = LOG_MAP.EV2_MOVE      ; store_set_state(key, value);
    key = "EV3_UP"             ; value = LOG_MAP.EV3_UP        ; store_set_state(key, value);
    key = "EV4_LONG_PRESS"     ; value = LOG_MAP.EV4_LONG_PRESS; store_set_state(key, value);
    key = "EV5_TOOL_CB"        ; value = LOG_MAP.EV5_TOOL_CB   ; store_set_state(key, value);
    key = "EV6_CHANGED"        ; value = LOG_MAP.EV6_CHANGED   ; store_set_state(key, value);
    key = "EV7_DISPATCH"       ; value = LOG_MAP.EV7_DISPATCH  ; store_set_state(key, value);
    key = "EV8_FLOATLOG"       ; value = LOG_MAP.EV8_FLOATLOG  ; store_set_state(key, value);
    key = "S1_RANGE"           ; value = LOG_MAP.S1_RANGE      ; store_set_state(key, value);
    key = "S2_SELECT"          ; value = LOG_MAP.S2_SELECT     ; store_set_state(key, value);
    key = "S3_SLOT"            ; value = LOG_MAP.S3_SLOT       ; store_set_state(key, value);
    key = "T0_STORE"           ; value = LOG_MAP.T0_STORE      ; store_set_state(key, value);
    key = "T1_DOM_LOAD"        ; value = LOG_MAP.T1_DOM_LOAD   ; store_set_state(key, value);
    key = "T2_GRID"            ; value = LOG_MAP.T2_GRID       ; store_set_state(key, value);
    key = "T3_LAYOUT"          ; value = LOG_MAP.T3_LAYOUT     ; store_set_state(key, value);
    key = "T4_PIVOT"           ; value = LOG_MAP.T4_PIVOT      ; store_set_state(key, value);
    key = "T5_SPREAD"          ; value = LOG_MAP.T5_SPREAD     ; store_set_state(key, value);
    key = "T6_SLOT"            ; value = LOG_MAP.T6_SLOT       ; store_set_state(key, value);

    key =  FLY_DIV_MAGNIFIED   ; value = prop_get( FLY_DIV_MAGNIFIED ); store_set_state(key, value);
    key = "LOG_IPC"            ; value = LOG_IPC               ; store_set_state(key, value);
    key = "logging_EVENTS"     ; value = logging_EVENTS        ; store_set_state(key, value);
    key = "logging_HIGHLIGHT"  ; value = logging_HIGHLIGHT     ; store_set_state(key, value);
    key = "logging_TOOLBAR"    ; value = logging_TOOLBAR       ; store_set_state(key, value);

};
/*}}}*/
/*_ t_store4_save_site_layout {{{*/
let t_store4_save_site_layout = function(reason)
{
/*{{{*/
let   caller = "t_store4_save_site_layout("+reason+")";
let log_this = LOG_MAP.T0_STORE;

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly(caller);
/*}}}*/
    /* UNLESS NO PAGE DATA WORTH REMEMBERING {{{*/
    if( t_store_patterns_consider_removing_all_page_items(caller) ) return;

    /*}}}*/
    /* TOOLS LAYOUT {{{*/
    let key, value, xy;
    if(hotring) {
if( log_this) log(caller);

        key = "tools_scrollY"       ; value = scroll_last_scrollY           ; store_set_value(key, value);

        t_gutter_save_last_hotspot_WINDOW_XY();

        if(pivot_PANEL) {
            key = "pivot_PANEL"     ; value = pivot_PANEL.id                ; store_set_value(key, value);
            key = "pivotXY"         ; value = JSON.stringify(pivotXY)       ; store_set_value(key, value);
            key =  PIVOT_MAGNIFIED  ; value = prop_get(key)                 ; store_set_state(key, value);
        }

        xy = { x:fly_div.offsetLeft , y:fly_div.offsetTop };
        key = "fly_div_XY"          ; value = JSON.stringify(xy)            ; store_set_value(key, value);

        key =  FLY_DIV_MAGNIFIED    ; value = prop_get(key); store_set_state(key, value);

        xy = { x:topTool.x , y:topTool.y };
        key = "topTool_XY"          ; value = JSON.stringify(xy)            ; store_set_value(key, value);

        key = "spread_ratio_x"      ; value = spread_ratio.x                ; store_set_value(key, value);
        key = "spread_ratio_y"      ; value = spread_ratio.y                ; store_set_value(key, value);

        key =  SHOW_SEEKZONE        ; value = prop_get(key); store_set_state(key, value);
        key =  PIN_SEEKSPOT         ; value = prop_get(key); store_set_state(key, value);
        key =  LOG_SEEKSPOT         ; value = prop_get(key); store_set_state(key, value);
    }
    /*}}}*/
    /* SCROLL OVERFLOW_VISI {{{*/
    key =  SCROLL_SMOOTH            ; value = prop_get(key); store_set_state(key, value);
    key =  OVERFLOW_VISI            ; value = prop_get(key); store_set_state(key, value);

    key =  TOOLS_SCROLL             ; value = prop_get(key); store_set_state(key, value);
    /*}}}*/
    /* PANELS SELECTED AND PINNED XY {{{*/
    t_store_panel_selected_pinned_XY(transcript1);
    t_store_panel_selected_pinned_XY(transcript2);
    t_store_panel_selected_pinned_XY(fly_div    );

    for(let i=0; i < TOOL_panels.length; ++i)
        t_store_panel_selected_pinned_XY( TOOL_panels[i] );

    /*}}}*/
    /* target_tool [XY PINNED] {{{*/
    for(let tt_num = 1; tt_num <= TARGET_MAX; ++tt_num)
    {
        t_store_target_tool( target_tools_map_get( tt_num ) );
    }
    /*}}}*/
};
/*}}}*/
/* TODO REMOVE KEY=VALUE VERSION */
/*_ t_store_panel_selected_pinned_XY {{{*/
let t_store_panel_selected_pinned_XY = function(panel)
{
/*{{{*/
let   caller = "t_store_panel_selected_pinned_XY";
let log_this = LOG_MAP.T0_STORE;

/*}}}*/
    if(!panel) return;

    let key , value;                let             map = tools_map_get( panel );
    key     = panel.id+".selected"; let selected = (map && map.selected);
    key     = panel.id+"_pinned"  ; let   pinned = selected && panel.classList.contains(CSS_PINNED);
    key     = panel.id+"_XY"      ; let       xy = get_el_xy(panel, caller);

    key     =   panel.id + "_JSON";
    value   = { selected : selected
        ,       pinned : pinned
        ,           xy : xy
        ,    magnified : has_el_class(panel,CSS_MAGNIFIED)
    };
if( log_this) log_key_val(key, value, lf3);

    store_set_value(key, JSON.stringify(value));
};
/*}}}*/
/*_ t_store_target_tool {{{*/
let t_store_target_tool = function(tt)
{
/*{{{*/
let   caller = "t_store_target_tool";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller+"("+get_n_lbl(tt)+")");
/*}}}*/
    if(!tt) return;

    /* REMOVE UNPINNED STORAGE {{{*/
    let    key = tt.id+"_JSON";
    let pinned = tt.classList.contains( CSS_PINNED );
    if(!pinned) {
        if(store_getItem( key ))
        {
if( log_this) log("REMOVE UNPINNED STORAGE FOR "+ get_n_lbl(tt));

            store_set_value(key, null);
        }
        return;
    }
    /*}}}*/
    /* UPDATE PINNED STORAGE {{{*/
    let dir_class
        = tt.classList.contains(CSS_POINT_EE) ? CSS_POINT_EE
        : tt.classList.contains(CSS_POINT_SE) ? CSS_POINT_SE
        : tt.classList.contains(CSS_POINT_SW) ? CSS_POINT_SW
        : tt.classList.contains(CSS_POINT_WW) ? CSS_POINT_WW
        : tt.classList.contains(CSS_POINT_NW) ? CSS_POINT_NW
        : tt.classList.contains(CSS_POINT_NE) ? CSS_POINT_NE
        :                                                 ""
    ;
    let     xy = get_el_xy(tt, caller);

    let value
        = {       xy : xy
        ,     pinned : pinned
        ,  dir_class : dir_class
        ,    date_MS : tt.date_MS
        ,        msg : tt.msg
/*{{{
        ,       text : strip_CR_LF( tt.innerText )
}}}*/
    };
    store_set_value(key, JSON.stringify(value));
    /*}}}*/
};
/*}}}*/
/*_ t_store5_save_page_wording {{{*/
let t_store5_save_page_wording = function()
{
let   caller = "t_store5_save_page_wording";
let log_this = LOG_MAP.T0_STORE;

    /* SCROLL WORDS FILTER NODE */
    let key, value;
if( log_this) log(caller);

    key = "sel_csv"            ; value = sel_csv               ; store_set_value(key, value);
    key = "pat_csv"            ; value = pat_csv               ; store_set_value(key, value);
    key = "off_csv"            ; value = off_csv               ; store_set_value(key, value);
    key = "bak_csv"            ; value = bak_csv               ; store_set_value(key, value);
    key = "alt_csv"            ; value = alt_csv               ; store_set_value(key, value);

    dom_hide2_store_save();

    key =  WORDING             ; value = prop_get(key)         ; store_set_state(key, value);
    key =  WORDS_EXACT         ; value = prop_get(key)         ; store_set_value(key, value);
    key =  WORDS_SEGMENT       ; value = prop_get(key)         ; store_set_value(key, value);
    key =  WORDS_HEAD_TAIL     ; value = prop_get(key)         ; store_set_value(key, value);
    key =  WORDS_OPCYCLE       ; value = prop_get(key)         ; store_set_state(key, value);
    let id_array = t_get_words_drop_affix_array();
    for(let i=0; i < id_array.length; ++i)
    {
        key   = id_array[i];
        value = prop_get(key);
        store_set_state(key, value);
    }

};
/*}}}*/
/*  t_store_update_post {{{*/
/*{{{*/
let PENDING_LOCALSTORAGE_DELAY = 1000;

let t_update_store3_site_layout_timer;
let t_update_store3_site_layout_callers = "";
let t_update_store3_site_layout_count   =  0;
/*}}}*/
let t_store_update_post = function(_caller, delay=PENDING_LOCALSTORAGE_DELAY)
{
    /*{{{*/
    let caller = "t_store_update_post";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller+"("+_caller+")");
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
    if(delay) t_update_store3_site_layout_timer = setTimeout(t_store_update_handler, PENDING_LOCALSTORAGE_DELAY);
    else                                                     t_store_update_handler();

    /*}}}*/
};
/*}}}*/
/*_ t_store_update_is_pending {{{*/
let t_store_update_is_pending = function()
{
    return (t_update_store3_site_layout_timer != null);
};
/*}}}*/
/*_ t_store_update_handler {{{*/
let t_store_update_handler = function()
{
    /* [onWork_EL] is not released .. (postpone update) {{{*/
    t_update_store3_site_layout_timer = null;
let log_this = LOG_MAP.T0_STORE;

    if(onWork_EL) {
if(log_this) log("%c PENDING LOCAL STORAGE POSTPONED BY %c "+get_n_lbl(onWork_EL)+" ", lb3,lb0);
        t_update_store3_site_layout_timer = setTimeout(t_store_update_handler, PENDING_LOCALSTORAGE_DELAY);
        return;
    }
    /*}}}*/

if(log_this) log("%c PENDING LOCAL STORAGE (x"+t_update_store3_site_layout_count+") BY: %c"+LF+t_update_store3_site_layout_callers, lb3,lb0);

    /*....*/ t_store4_save_site_layout(t_update_store3_site_layout_callers);
    t_update_store3_site_layout_count   = 0;
    t_update_store3_site_layout_callers = "";
};
/*}}}*/
/*}}}*/

/* EVENT LISTENER ONDOWN PIVOT PINNED */
/*{{{*/
/*{{{*/

/*_______________XY___________________________*/
let onDown_HSPOT_XY        = { x:0, y:0 }; /* TODO ? could better be [onDown_HSPOT_MID] ? */
let onDown_TOOL_XY         = { x:0, y:0 };
let onDown_PANEL_XY        = { x:0, y:0 };
let onDown_XY_sign         = { x:0, y:0 };
let onMove_pivotXY         = { x:0, y:0 };

/*_________SCROLL_____________________________*/
let onDown_SCROLL_XY        = { x:0, y:0 };

/*_________PANEL______________________________*/
let onWork_PANEL           = null;
let pivot_PANEL            = null;
let onStandby_PANEL        = null;
let onWork_PANEL_magnified = null;
let onWork_MOVABLE_PANEL   = null;

/*_________TOOL_______________________________*/
let onDown_EL              = null;
let onWork_EL              = null;
let onWork_SEEK_TOOL       = null;
let onWork_MOVABLE_CHILD   = null;
let onWork_EL_last_used    = null;

/*_________MODIFIER___________________________*/
let onDown_SHIFT           = false;
let onDown_ALT             = false;
let onDown_CTRL            = false;

/*_________MILLISECOND_TIMING_________________*/
let onDownPMS              = 0;
let onDown_MS              = 0;
let onUp_MS                = 0;

/*__what_was_selected_at_event_start__________*/

/*__DURATION__________________________________*/
const CLICK_DURATION       =                500;
const MISCLICK_TOUCH_MS    = CLICK_DURATION / 4;
const MISCLICK_MOUSE_MS    = CLICK_DURATION / 4;
const LONG_PRESS_DURATION  = CLICK_DURATION * 2;

const DBLCLICK_DELAY       = CLICK_DURATION;
const DBLTOUCH_DELAY       = CLICK_DURATION / 2;

const DRAG_MAX_MS          = CLICK_DURATION * 2;
const DRAG_MIN_MS          = CLICK_DURATION / 4;

/*}}}*/
/* LISTENER {{{*/
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

 [sourceURL]
 :!start explorer "https://www.html5rocks.com/en/tutorials/developertools/sourcemaps"

 option=[capture || true] .. e.eventPhase == (CAPTURING_PHASE || AT_TARGET) .. ( !BUBLINB_PHASE)
 option=[passive        ] .. will not call preventDefault

}}}*/
/* ADD */
/*_ t_add_LISTENERS {{{*/
let t_add_LISTENERS = function()
{
/*{{{*/
let   caller = "t_add_LISTENERS";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+caller, lbb+lbH+lf2);
/*}}}*/
    /* UNLOAD */
    add_listener_capture_active(       window, "beforeunload"     , t_load_listener);
    add_listener_capture_active(       window,       "unload"     , t_load_listener);

    /* LAYOUT */
    add_listener_capture_active(       window, "scroll"           , t_scroll_listener);
    add_listener_capture_active(       window, "resize"           , t_resize_listener);
    add_listener_capture_active(       window, "orientationchange", t_layout_listener);

    /* TOUCH */
    if( ("ontouchstart" in document.documentElement) ) {
        add_listener_capture_active(   window, "touchstart"       , t_pointerdown_listener);
        add_listener_capture_active(   window, "touchend"         , t_pointerup_listener);
    }
    /* MOUSE */
    else {
        add_listener_capture_active(   window, "mousedown"        , t_pointerdown_listener);
        add_listener_capture_active(   window, "mouseup"          , t_pointerup_listener);
    }
/*{{{*/
if( log_this) {
    log("%c"+t_load_listener        .name+"%c beforeunload unload %c window",lbL,lbF+lf1,lbR);
    log("%c"+t_scroll_listener      .name+"%c scroll              %c window",lbL,lbF+lf3,lbR);
    log("%c"+t_resize_listener      .name+"%c resize              %c window",lbL,lbF+lf3,lbR);
    log("%c"+t_layout_listener      .name+"%c orientationchange   %c window",lbL,lbF+lf3,lbR);

    log("%c"+t_pointerdown_listener .name+"%c mousedown           %c window",lbL,lbF+lf4,lbR);
    log("%c"+t_pointerup_listener   .name+"%c mousedown           %c window",lbL,lbF+lf4,lbR);
    log("%c"+t_pointerdown_listener .name+"%c touchstart          %c window",lbL,lbF+lf5,lbR);
    log("%c"+t_pointerup_listener   .name+"%c touchend            %c window",lbL,lbF+lf5,lbR);

}
/*}}}*/

    /* INPUT */
    let inputs = dom_tools_html.getElementsByTagName("INPUT");
    for(let i=0; i < inputs.length ; ++i) {
        if( inputs[i].id ) {
if( log_this) log("%c"+t2_input_CB.name+"%c onkeyup onchange %c"+(inputs[i].id || ("INPUT #"+i)),lbL,lbF+lf2,lbR);
            add_listener_capture_active(inputs[i], "keyup"        , t2_input_CB);
            add_listener_capture_active(inputs[i], "change"       , t2_input_CB);
        }
    }

    /* WINDOW KEYBOARD */
    add_listener_capture_active(        window   , "keyup"        , t2_window_keyup_CB);

};
/*}}}*/
/*_ add_page_pointermove_listener {{{*/
let add_page_pointermove_listener = function(_caller)
{
/*{{{*/
let   caller = "add_page_pointermove_listener";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_log_event_status(caller+" .. CALLED BY "+ _caller, lf2);
/*}}}*/
/*{{{
    if(typeof MWebJS != "undefined") MWebJS.eval("SCROLL OFF");
}}}*/
    if(("ontouchmove" in document.documentElement))
        add_listener_capture_active(   window, "touchmove"        , t_page_pointermove_drag);
    else
        add_listener_capture_active(   window, "mousemove"        , t_page_pointermove_drag);
};
/*}}}*/
/*_ add_tool_pointermove_listener {{{*/
let add_tool_pointermove_listener = function(_caller)
{
/*{{{*/
let  caller = "add_tool_pointermove_listener";
    let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_log_event_status(caller+" .. CALLED BY "+ _caller, lf2);
/*}}}*/
    if(("ontouchmove" in document.documentElement))
        add_listener_capture_active(   window, "touchmove"        , t_tool_pointermove_drag);
    else
        add_listener_capture_active(   window, "mousemove"        , t_tool_pointermove_drag);
};
/*}}}*/
/* REMOVE */
/*_ t_del_listeners {{{*/
let t_del_listeners = function()
{
let   caller = "t_del_listeners";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) log(caller, "info");

    /* LAYOUT */
    remove_listener_capture_active    (window, "orientationchange", t_layout_listener);
    remove_listener_capture_active    (window, "resize"           , t_resize_listener);
    remove_listener_capture_active    (window, "scroll"           , t_scroll_listener);

    /* TOUCH (DOWN UP) (HOST TOOL) */
    if( ("ontouchstart" in document.documentElement) ) {
        remove_listener_capture_active(window, "touchstart"       , t_pointerdown_listener);
        remove_listener_capture_active(window, "touchend"         , t_pointerup_listener);
    }
    /* MOUSE (DOWN UP) (HOST TOOL) */
    else {
        remove_listener_capture_active(window, "mousedown"        , t_pointerdown_listener);
        remove_listener_capture_active(window, "mouseup"          , t_pointerup_listener);
    }

    /* MOVE (dynamically added) */
    del_page_and_tool_pointermove_listeners(caller);
};
/*}}}*/
/*_ del_page_and_tool_pointermove_listeners {{{*/
let del_page_and_tool_pointermove_listeners = function(_caller)
{
let   caller = "del_page_and_tool_pointermove_listeners";
let log_this = LOG_MAP.EV0_LISTEN;

if( log_this) t_log_event_status(caller+" .. CALLED BY "+ _caller, lf2);

/*
    if(typeof MWebJS != "undefined") MWebJS.eval("SCROLL ON");
*/
    remove_listener_capture_active(    window, "mousemove"        , t_page_pointermove_drag);
    remove_listener_capture_active(    window, "touchmove"        , t_page_pointermove_drag);

    remove_listener_capture_active(    window, "mousemove"        , t_tool_pointermove_drag);
    remove_listener_capture_active(    window, "touchmove"        , t_tool_pointermove_drag);
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

/*_ t_acceptBubble {{{*/
let t_acceptBubble = function(e, msg)
{
    if( logging_something() )
        t_log_transcript_event_top("<span style='color:yellow;'>"+ SYMBOL_BLACK_CIRCLE +"</span>"
            +                      " ACCEPT BUBBLE <em>"+          e.type              +"</em>"
            +                      " <em>"+                        msg                 +"</em>"
        );
};
/*}}}*/
/*_ t_preventDefault {{{*/
/*{{{*/
let t_preventDefault_caller;

/*}}}*/
let t_preventDefault = function(e, preventDefault_caller)
{
/*{{{*/
    if(t_preventDefault_caller) return;
    t_preventDefault_caller = preventDefault_caller;

let log_this = !onDown_SHIFT && LOG_MAP.EV7_DISPATCH;

if( log_this)
{
    logBIG("PREVENT DEFAULT "+ preventDefault_caller, lbH+lf9);

    t_log_event_status("t_preventDefault("+e.type+")", lbF+lf3);

    log_key_val( "t_preventDefault"
                 , {   bubbles                  : e.bubbles
                     , cancelable               : e.cancelable
                     , defaultPrevented         : e.defaultPrevented
                     , preventDefault           : e.preventDefault
                     , stopImmediatePropagation : e.stopImmediatePropagation
                     , stopPropagation          : e.stopPropagation
                     , cancelBubble             : e.cancelBubble
                     , returnValue              : e.returnValue
                 }
                 , lbH+lf8
               );
}
/*}}}*/
/* NOTE: {{{
 *  [e.stopPropagation         ()] .. stop bubbling phase #3 handlers
 *  [e.stopImmediatePropagation()] .. stop   target phase #2 handlers
 *  [e.preventDefault          ()] .. i.e. return false from within on<event> attribute handler
 *
 *  [e.cancelBubble]               .. depreciated .. (may not reach [outer body])
 *  [e.returnValue]                .. depreciated
 }}}*/
    if( e.stopPropagation          ) e.stopPropagation         ();
    if( e.stopImmediatePropagation ) e.stopImmediatePropagation();
    if( e.preventDefault           ) e.preventDefault          ();
};
/*}}}*/
/*_ t_preventDefault_has_been_called {{{*/

let t_preventDefault_has_been_called = function(_caller)
{
    return (t_preventDefault_caller != "");
};
/*}}}*/
/*_ t_restoreDefault {{{*/
let t_restoreDefault = function(restoreDefault_caller)
{
let log_this = logging_something();

if(log_this && t_preventDefault_caller) {

    if( logging_something() )
        t_log_transcript_event_bot( "<span style='color:green;'>"+ SYMBOL_BLACK_CIRCLE +"</span>"
            +                      " <span style='text-decoration:line-through;'>preventDefault</span>"
            +                      " <em>"+ restoreDefault_caller +"</em> was set by "+ t_preventDefault_caller
        );

}
    t_preventDefault_caller = "";
};
/*}}}*/

/*}}}*/
/** DOWN {{{*/
/* javascript/dom_ondown.js */
/* ONDOWN {{{*/
/*{{{*/
const CSS_SEEK0_ONDOC           = "seek0_onDOC";
const CSS_SEEK0_ONTOOL          = "seek0_onTOOL";
const CSS_SEEK1_ONSLOTEL        = "seek1_onSlotEL";
const CSS_SEEK2_ONRESUME        = "seek2_onResume";
const CSS_SEEK3_ONJUMPEL        = "seek3_onJumpEL";
const CSS_SEEK4_ONSEEKER        = "seek4_onSeeker";
const CSS_SEEK5_ONTARGET        = "seek5_onTarget";

/*}}}*/
/*  get_onDown_SEEK {{{*/
let get_onDown_SEEK = function(e)
{
/*{{{*/
let caller = "get_onDown_SEEK";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

/*{{{
if( log_this) console_clear(caller);
}}}*/
if( log_this) t_log_event_status(caller+SYMBOL_RIGHT_ARROW+"BEFORE", lbb+lf9);
if( log_this) console.dir(e);
/*}}}*/
    /* seek1_onSlotEL seek3_onJumpEL seek5_onTarget seek4_onSeeker seek2_onResume */
    /*{{{*/

    let seeker_PU_showing = t_seeker_PU_is_active() /*&& !t_node_is_off_screen(seeker_PU)*/;

    let  is_on_scrollbar  = get_onDown_is_on_scrollbar(e);

    let     seek5_onTarget                               /* target_tool  is a tool */
        =               (target_tool != undefined      ) /* some ative target_tool */
        &&              (target_tool == onWork_EL      ) /* just touched           */
        &&  has_el_class(target_tool  , CSS_SEEK_TARGET) /* pad in seeking state   */
        && !has_el_class(target_tool  , CSS_LIFTED     ) /* not in LIFTED  state   */
    ;
    let slot         = t_get_EL_slot(onWork_EL);
    let slot_has_ccs = get_ccs_slot(slot);

    let     seek4_onSeeker
        =  !seek5_onTarget
        && ((seeker_CU == onWork_EL) || (seeker_PU == onWork_EL))
    ;

    let     seek3_onJumpEL
        =  !seek4_onSeeker                      /* seeker not touched */
        && !seek5_onTarget
        &&  seeker_PU_showing                   /* seeker showing */
        &&  t_is_onSeekEL(onWork_EL)            /* onWork_EL has a slot */
    ;

    let     seek1_onSlotEL
        =  !seek3_onJumpEL
        && !seek4_onSeeker
        && !seek5_onTarget
        && slot
        && slot_has_ccs
    ;

    let     seek0_onTOOL
        =  !seek5_onTarget
        && !seek4_onSeeker
        && !seek3_onJumpEL
        && !seek1_onSlotEL
        &&  t_is_a_tool_el(onWork_EL, caller)
    ;

    let     seek2_onResume
        =  !seek0_onTOOL
        && !seek1_onSlotEL
        && !seek3_onJumpEL                      /* not switching slot */
        && !seek4_onSeeker                      /* not touching the seeker itself */
        && !seek5_onTarget
        &&  seeker_PU_showing                   /* seeker showing */
    ;

    let     seek0_onDOC                         /* .. NONE OF THE ABOVE */
        =  !seek5_onTarget
        && !seek4_onSeeker
        && !seek3_onJumpEL
        && !seek2_onResume
        && !seek1_onSlotEL
    ;

    /*}}}*/
/* log {{{*/
    let lfx
        =   seek0_onTOOL   ? lf9
        :   seek0_onDOC    ? lf8
        :   seek5_onTarget ? lf5
        :   seek4_onSeeker ? lf4
        :   seek3_onJumpEL ? lf3
        :   seek2_onResume ? lf2
        :   seek1_onSlotEL ? lf1
        :                    lf8;
if( log_this) {
    let the_highest
        = seek5_onTarget   ? CSS_SEEK5_ONTARGET
        : seek4_onSeeker   ? CSS_SEEK4_ONSEEKER
        : seek3_onJumpEL   ? CSS_SEEK3_ONJUMPEL
        : seek2_onResume   ? CSS_SEEK2_ONRESUME
        : seek1_onSlotEL   ? CSS_SEEK1_ONSLOTEL
        : seek0_onTOOL     ? CSS_SEEK0_ONTOOL
        : seek0_onDOC      ? CSS_SEEK0_ONDOC
        :                    "<seek_state_unexpected>"
    ;

    log_key_val_group(       the_highest
                       , {   seek0_onDOC       : seek0_onDOC
                           , seek0_onTOOL      : seek0_onTOOL
                           , seek5_onTarget    : seek5_onTarget
                           , seek4_onSeeker    : seek4_onSeeker
                           , seek3_onJumpEL    : seek3_onJumpEL
                           , seek2_onResume    : seek2_onResume
                           , seek1_onSlotEL    : seek1_onSlotEL
                           , seeker_PU_showing : seeker_PU_showing
                           , target_tool       : get_n_lbl(target_tool)
                           , onWork_EL         : get_n_lbl(onWork_EL)
                           , onWork_PANEL      : get_n_lbl(onWork_PANEL)
                           , is_on_scrollbar   : is_on_scrollbar
                       }
                       , lfx, true /* collapse */
                     );
}
/*}}}*/
    /* TRANSITION SEEKER {{{*/
    del_el_class(seeker_PU, CSS_SEEK1_ONSLOTEL); /* seek1_onSlotEL */
    del_el_class(seeker_PU, CSS_SEEK2_ONRESUME); /* seek2_onResume */
    del_el_class(seeker_PU, CSS_SEEK3_ONJUMPEL); /* seek3_onJumpEL */
    del_el_class(seeker_PU, CSS_SEEK4_ONSEEKER); /* seek4_onSeeker */
    del_el_class(seeker_PU, CSS_SEEK5_ONTARGET); /* seek5_onTarget */

    if     ( seek0_onTOOL     ) set_onDown_seek0_onTOOL  (lfx, log_this);
    else if( seek1_onSlotEL   ) set_onDown_seek1_onSlotEL(lfx, log_this);
    else if( seek3_onJumpEL   ) set_onDown_seek3_onJumpEL(lfx, log_this);
    else if( seek5_onTarget   ) set_onDown_seek5_onTarget(lfx, log_this);
    else if( seek4_onSeeker   ) set_onDown_seek4_onSeeker(lfx, log_this);
    else if( seek2_onResume   ) set_onDown_seek2_onResume(lfx, log_this);
    else if( seek0_onDOC      ) set_onDown_seek0_onDOC   (lfx, log_this);

    if     ( seek0_onTOOL     ) t_set_onDown_SEEK_label(CSS_SEEK0_ONTOOL  );
    else if( seek1_onSlotEL   ) t_set_onDown_SEEK_label(CSS_SEEK1_ONSLOTEL);
    else if( seek2_onResume   ) t_set_onDown_SEEK_label(CSS_SEEK2_ONRESUME);
    else if( seek3_onJumpEL   ) t_set_onDown_SEEK_label(CSS_SEEK3_ONJUMPEL);
    else if( seek4_onSeeker   ) t_set_onDown_SEEK_label(CSS_SEEK4_ONSEEKER);
    else if( seek5_onTarget   ) t_set_onDown_SEEK_label(CSS_SEEK5_ONTARGET);
    else if( seek0_onDOC      ) t_set_onDown_SEEK_label(CSS_SEEK0_ONDOC   );
    else                        t_set_onDown_SEEK_label(                  );

    /*}}}*/
    /* SYNC prop {{{*/
     prop_set(CSS_SEEK0_ONDOC   , seek0_onDOC   );
     prop_set(CSS_SEEK0_ONTOOL  , seek0_onTOOL  );
     prop_set(CSS_SEEK1_ONSLOTEL, seek1_onSlotEL);
     prop_set(CSS_SEEK2_ONRESUME, seek2_onResume);
     prop_set(CSS_SEEK3_ONJUMPEL, seek3_onJumpEL);
     prop_set(CSS_SEEK4_ONSEEKER, seek4_onSeeker);
     prop_set(CSS_SEEK5_ONTARGET, seek5_onTarget);

    /*}}}*/
if( log_this) t_log_event_status(caller+SYMBOL_RIGHT_ARROW+"AFTER", lbb+lfx);
if( log_this && target_tool) t_target_tool_log(target_tool);
};
/*}}}*/
/* seek1_onSlotEL seek3_onJumpEL seek5_onTarget seek4_onSeeker seek2_onResume {{{*/
/*_ set_onDown_seek0_onDOC {{{*/
let set_onDown_seek0_onDOC = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek0_onDOC";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/
    let slot = t_get_EL_slot(onWork_EL);
    if( slot )
    {
if( log_this) logBIG(caller+": IGNORING onWork_EL slot #"+slot);
        if( onDown_EL   == onWork_EL)
            onDown_EL    = onWork_EL.parentElement;
        onWork_EL        = onWork_EL.parentElement;
        onWork_SEEK_TOOL = null;
    }

/*{{{
    if(!target_tool && !has_el_class(onWork_EL, CSS_TARGET_TOOL))
}}}*/
};
/*}}}*/
/*_ set_onDown_seek0_onTOOL {{{*/
let set_onDown_seek0_onTOOL = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek0_onTOOL";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/

};
/*}}}*/
/*_ set_onDown_seek1_onSlotEL {{{*/
let set_onDown_seek1_onSlotEL = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek1_onSlotEL";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/

    add_el_class(seeker_PU, CSS_SEEK1_ONSLOTEL);

/*{{{
    if(!target_tool && !has_el_class(onWork_EL, CSS_TARGET_TOOL))
}}}*/
};
/*}}}*/
/*_ set_onDown_seek2_onResume {{{*/
let set_onDown_seek2_onResume = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek2_onResume";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/
    add_el_class(seeker_PU, CSS_SEEK2_ONRESUME);
    if(target_tool && (target_tool == onWork_EL_last_used))
        add_el_class(seeker_PU, CSS_SEEK5_ONTARGET);
    set_seek_grab_done( true );

    t_change_onWork_SEEK_TOOL(seeker_PU);

};
/*}}}*/
/*_ set_onDown_seek3_onJumpEL {{{*/
let set_onDown_seek3_onJumpEL = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek3_onJumpEL";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/
    /* [seeker_PU] .. CSS_SEEK3_ONJUMPEL {{{*/
    add_el_class(seeker_PU, CSS_SEEK3_ONJUMPEL);

    /*}}}*/
    t_seek_slot_num_SELECT_EL(onWork_EL);
};
/*}}}*/
/*_ set_onDown_seek4_onSeeker {{{*/
let set_onDown_seek4_onSeeker = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek4_onSeeker";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/
    add_el_class(seeker_PU, CSS_SEEK4_ONSEEKER);
    set_seek_grab_done( true );

    t_change_onWork_SEEK_TOOL(seeker_PU);
};
/*}}}*/
/*_ set_onDown_seek5_onTarget {{{*/
let set_onDown_seek5_onTarget = function(lfx,log_this)
{
/*{{{*/
let caller = "set_onDown_seek5_onTarget";

if( log_this) log("%c"+caller, lbH+lfx);
/*}}}*/
    add_el_class(seeker_PU, CSS_SEEK5_ONTARGET);

    t_change_onWork_SEEK_TOOL(target_tool);
};
/*}}}*/
/*}}}*/
/*}}}*/
/* onSeekXYL {{{*/
/*  t_set_onDown_SEEK_label {{{*/
/*{{{*/
let onSeekXYL = { x:0, y:0, label:"" }; /* where to move seeker_PU at next ccs highlighting */

/*}}}*/
/*_ t_set_onSeekXYL {{{*/
let t_set_onSeekXYL = function(xy, seek_label)
{
    onSeekXYL.label = seek_label;
    onSeekXYL.x     = xy.x - window.scrollX;
    onSeekXYL.y     = xy.y - window.scrollY;
/*{{{
log( log_json(onSeekXYL, true) );
}}}*/
};
/*}}}*/
let t_set_onDown_SEEK_label = function(seek_label="")
{
    t_seek_clr_container_selected();

    let xy
        = {   x : onDown_XY.x + window.scrollX
            , y : onDown_XY.y + window.scrollY
        };
    t_set_onSeekXYL(xy, seek_label);
};
/*}}}*/
/*  t_set_onSeekXYL_from_container {{{*/
let t_set_onSeekXYL_from_container = function(container, seek_label)
{
    if(!container ) return;

    let xy = get_el_xy( container, "t_set_onSeekXYL_from_container");
    if( xy ) t_set_onSeekXYL(xy, seek_label);

    t_seekzone1_show(SYMBOL_BLACK_CIRCLE+" FOLLOW CONTAINER "+container_selected.tagName);
};
/*}}}*/
/*  is_onSeekXYL_onTarget {{{*/
let is_onSeekXYL_onTarget = function()
{
    let result = (onSeekXYL.label.startsWith(CSS_SEEK5_ONTARGET));
/*{{{
logBIG("is_onSeekXYL_onTarget: ...return "+result+" .. "+ log_json(onSeekXYL, true));
}}}*/
    return result;
};
/*}}}*/
/*}}}*/
/* onWork_EL {{{*/
/*  t_clr_onWork_EL .. [onWork_EL  onWork_SEEK_TOOL  onWork_PANEL] {{{*/
let t_clr_onWork_EL = function(_caller, log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV5_TOOL_CB)
{
/*{{{*/
let   caller = "t_clr_onWork_EL";

if( log_this ) log("%c"+caller+" .. CALLED BY "+ _caller, lf8);
/*}}}*/

    onWork_MOVABLE_CHILD    = null;
    onWork_MOVABLE_PANEL    = null;
    onWork_SEEK_TOOL        = null;
    onWork_PANEL_magnified  = null;

    t_set_onWork_EL_last_used( onWork_EL );

    if(onWork_EL) t_clr_onWork_EL_pressed();
    onWork_EL               = null;

    onWork_PANEL            = null;
};
/*}}}*/
/*  t_set_onWork_EL .. [onWork_EL  onWork_SEEK_TOOL  onWork_PANEL] {{{*/
let t_set_onWork_EL = function(el,_caller)
{
/*{{{*/
let   caller = "t_set_onWork_EL";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV5_TOOL_CB;

if( log_this ) log("%c"+caller+" .. CALLED BY "+ _caller, lf9);
/*}}}*/
    /* t_clr_onWork_EL {{{*/
    t_clr_onWork_EL(caller);

    if(!el) return; /* all done */

    /*}}}*/
    /* [target_tool] [onDown_EL] [onWork_EL] [onDown_TOOL_XY] {{{*/
    let new_target_tool
        = (el != target_tool)
        && t_set_target_tool_from_el(el)
    ;

    onDown_EL = new_target_tool ? target_tool : el;
    onWork_EL = onDown_EL;

    onDown_TOOL_XY.x = onWork_EL.offsetLeft;
    onDown_TOOL_XY.y = onWork_EL.offsetTop ;

    /*}}}*/
    /* [onWork_MOVABLE_CHILD] {{{*/
    t_set_movable_TOOL_CHILD(onWork_EL, _caller);

    /*}}}*/
    /* [onWork_SEEK_TOOL] .. (any that conveys some SEEK info) {{{*/
    if(        !prop_get(    EDIT_OR_STAGE )
        && (   (    seeker_PU == onWork_EL )
            || (    seeker_CU == onWork_EL )
         /* || (    seeker_PD == onWork_EL ) */
         /* || (    seeker_CD == onWork_EL ) */
            || (  target_tool == onWork_EL )
            || (                 onWork_EL.id.startsWith("thumb_p_"))
            || (                 onWork_EL.id.startsWith("seekzone"))
            || is_node_selected( onWork_EL )
           )
      ) {
        onWork_SEEK_TOOL = onWork_EL;
    }
    else {
        onWork_SEEK_TOOL = null;
    }
    /*}}}*/
    /* [onWork_PANEL] [onDown_PANEL_XY] [onWork_MOVABLE_PANEL] {{{*/
    t_set_onWork_PANEL(onWork_EL, _caller);

    /*}}}*/
    /* [onDown_HSPOT_XY] [onDown_XY_sign] [onMove_pivotXY] {{{*/
    onDown_HSPOT_XY.x        = h_x;
    onDown_HSPOT_XY.y        = h_y;

    onDown_XY_sign.x         = (onDown_HSPOT_XY.x < pivotXY.x) ? 1 : -1;
    onDown_XY_sign.y         = (onDown_HSPOT_XY.y < pivotXY.y) ? 1 : -1;

    onMove_pivotXY.x         = pivotXY.x;
    onMove_pivotXY.y         = pivotXY.y;

/*{{{
log("....hotspot.Left.Top=["+hotspot.offsetLeft    +" "+ hotspot.offsetTop     +"]");
log(".....onDown_HSPOT_XY=["+onDown_HSPOT_XY.x     +" "+ onDown_HSPOT_XY.y     +"]");
log(".onMove_pivotXY=["+onMove_pivotXY.x +" "+ onMove_pivotXY.y +"]");
log("......onDown_XY_sign=["+onDown_XY_sign.x      +" "+ onDown_XY_sign.y      +"]");
}}}*/
    /*}}}*/
    t_set_onWork_EL_pressed();
    /* ...grid log {{{*/
if(typeof t_grid_onWork_EL_changed != "undefined") t_grid_onWork_EL_changed(_caller);

    /*}}}*/
};
/*}}}*/
/*_ t_change_onWork_SEEK_TOOL {{{*/
let t_change_onWork_SEEK_TOOL = function(seek_tool)
{
/*{{{
log("%c t_change_onWork_SEEK_TOOL %c "+get_n_lbl(seek_tool)+"%c"+((seek_tool == onWork_SEEK_TOOL) ? "UNCHANGED" : "FROM "+get_n_lbl(onWork_SEEK_TOOL)+"")
   ,lbL                          ,lbC+lf6                   ,lbR+lf7                                                                                     );
}}}*/

    onWork_SEEK_TOOL = seek_tool;

    if(onWork_EL) t_clr_onWork_EL_pressed();
    onWork_EL        = seeker_PU;

    onWork_PANEL     = hotspot;
};
/*}}}*/
/*_ t_set_movable_TOOL_CHILD(el, {{{*/
let t_set_movable_TOOL_CHILD = function(el, _caller)
{
    onDown_TOOL_XY.x     = el.offsetLeft;
    onDown_TOOL_XY.y     = el.offsetTop;

    if(el == target_tool) onDown_TOOL_XY.y += target_tool.offsetHeight/2;

    onWork_MOVABLE_CHILD = is_a_movable_TOOL_CHILD(el)
        ?                                          el
        :                                          null;
};
/*}}}*/
/*_ t_set_onWork_PANEL {{{*/
let t_set_onWork_PANEL = function(el, _caller)
{
    onWork_PANEL = t_get_tool_panel(el);

    onWork_PANEL_magnified
        = has_el_class(onWork_PANEL, CSS_MAGNIFIED)
        ?              onWork_PANEL
        :              null;

    onWork_MOVABLE_PANEL
        = is_a_movable_panel(onWork_PANEL)
        ?                    onWork_PANEL
        :                    null;

    let  xy
        = onWork_PANEL
        ? get_el_xy(onWork_PANEL, _caller)
        : { x:0 , y:0 };
    onDown_PANEL_XY.x   = xy.x;
    onDown_PANEL_XY.y   = xy.y;

    /* cache map */
    if( onWork_PANEL )
    {
        if(!t_tools_loaded  ) t_load_TOOLS_MAP(caller);

        let map             = tools_map_get(onWork_PANEL);
        if( map ) {
            map.x           = xy.x;
            map.y           = xy.y;
        }

    }
};
/*}}}*/
/*  t_get_tool_panel {{{*/
let t_get_tool_panel = function(el)
{
    let tool_panel = null;
    if(      is_el_or_child_of_parent_el(el, hotspot  ) ) tool_panel =   hotspot;
    else if( is_el_or_child_of_parent_el(el, fly_div  ) ) tool_panel =   fly_div;
    else if( is_el_or_child_of_parent_el(el, dimm_mask) ) tool_panel = dimm_mask;
/*
    else if( is_el_or_child_of_parent_el(el, seeker_PU) ) tool_panel = hotspot;
    else if( is_el_or_child_of_parent_el(el, seeker_PD) ) tool_panel = hotspot;
*/
    else {
        for(let i=1; i < TOOL_panels.length; ++i)
        {
            if( is_el_or_child_of_parent_el(el, TOOL_panels[i]) )
            {
                tool_panel = TOOL_panels[i];
                break;
            }
        }
    }
    return tool_panel;
};
/*}}}*/
/*_ t_set_onWork_EL_pressed {{{*/
let t_set_onWork_EL_pressed = function()
{
    let caller = "t_set_onWork_EL_pressed";
/*{{{
t_log_event_status("t_set_onWork_EL_pressed: onWork_EL=["+get_id_or_tag(onWork_EL)+"]", lbb+lf9);
}}}*/

    if(!onWork_EL                            ) return;
    if( onWork_EL    == onWork_PANEL         ) return;
    if( onWork_EL.id == "div_slot_containers") return;

    add_el_class(onWork_EL, CSS_PRESSED);

    if(has_el_class(onWork_EL, CSS_TARGET_TOOL)) t_target_tool_set_parked(false, "PRESSED");

/* SET PRESSED BUTTON BUNDLES {{{
    if     (onWork_EL == button_NEXT     ) add_el_class(button_NEXT_LEFT, CSS_PRESSED);
    else if(onWork_EL == button_NEXT_LEFT) add_el_class(button_NEXT     , CSS_PRESSED);

    if     (onWork_EL == button_PREV     ) add_el_class(button_PREV_LEFT, CSS_PRESSED);
    else if(onWork_EL == button_PREV_LEFT) add_el_class(button_PREV     , CSS_PRESSED);
}}}*/
};
/*}}}*/
/*_ t_clr_onWork_EL_pressed {{{*/
let t_clr_onWork_EL_pressed = function()
{
/*{{{*/
    let caller = "t_clr_onWork_EL_pressed";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV3_UP;

if(log_this) t_log_event_status("t_clr_onWork_EL_pressed: onWork_EL=["+get_id_or_tag(onWork_EL)+"]", lbb+lf9);
/*}}}*/

    /* DON't CLEAR WHEN... */
    if(!onWork_EL                            ) return;
    if( onWork_EL    == onWork_PANEL         ) return;
    if( onWork_EL.id == "div_slot_containers") return;
    del_el_class(onWork_EL, CSS_PRESSED);

/* CLEAR PRESSED BUTTON BUNDLES {{{
    if     (onWork_EL == button_NEXT         ) del_el_class(button_NEXT_LEFT, CSS_PRESSED);
    else if(onWork_EL == button_NEXT_LEFT    ) del_el_class(button_NEXT     , CSS_PRESSED);

    if     (onWork_EL == button_PREV         ) del_el_class(button_PREV_LEFT, CSS_PRESSED);
    else if(onWork_EL == button_PREV_LEFT    ) del_el_class(button_PREV     , CSS_PRESSED);
}}}*/

    /* LASTLY */
    /*......................................*/ del_el_class(onWork_EL       , CSS_PRESSED);
    if(seekzone)                               del_el_class(seekzone        , CSS_PRESSED);
};
/*}}}*/
/*_ t_set_onWork_EL_last_used {{{*/
let t_set_onWork_EL_last_used = function(el)
{
/*{{{
logXXX("t_set_onWork_EL_last_used("+get_id_or_tag(el)+")");
}}}*/

    if(el) onWork_EL_last_used = el; /* never forget last use */

    if( has_el_class(el, CSS_TARGET_TOOL) )
    {
        let thumb_p     = 100 * el.offsetTop / get_page_height();
        let thumb_p_str = get_thumb_p_str(thumb_p)+"%";
        el.title        = el.id +LF+ thumb_p_str;
    }

};
/*}}}*/
/*_ t_get_onWork_EL_last_used {{{*/
let t_get_onWork_EL_last_used = function()
{
    return onWork_EL_last_used;
};
/*}}}*/
/*_ t_get_onWork_tool_label {{{*/
let t_get_onWork_tool_label = function()
{
    return (onWork_PANEL ?       get_n_lbl(onWork_PANEL)      : "")
        +  (onWork_EL    ? " ("+ get_n_lbl(onWork_EL   ) +")" : "")
    ;
};
/*}}}*/
/*}}}*/
/* SELECTION {{{*/
/*  get_onDown_SELECTION {{{*/
/*{{{*/
let onDown_SELECTION       = null;
let onDown_SEL_TEXT        =   "";

/*}}}*/
let get_onDown_SELECTION = function()
{
    onDown_SELECTION = window.getSelection();
    onDown_SEL_TEXT  = t_get_current_sel_text() || onDown_SEL_TEXT; /* update or keep previous */
};
/*}}}*/
/*_ t_get_current_sel_text {{{*/
let t_get_current_sel_text = function()
{
    let selection = window.getSelection();
    return (selection && (selection.rangeCount > 0))
        ?   selection.getRangeAt(0).toString().trim()
        :   ""
    ;
};
/*}}}*/
/*_ t_window_getSelection_removeAllRanges {{{*/
let t_window_getSelection_removeAllRanges = function(_caller)
{
let  caller = "t_window_getSelection_removeAllRanges";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_log_event_status(caller+": .. CALLED BY "+ _caller, lf2);

    window.getSelection().removeAllRanges();

    t_target_tool_sync_pastable();
};
/*}}}*/
/*}}}*/
/* onDown_XY {{{*/
/*  get_onDown_XY {{{*/
let     onDown_XY = { x:0, y:0 };
let get_onDown_XY = function(e, _caller)
{
    let      xy = get_event_XY(e);
    onDown_XY.x = xy.x;
    onDown_XY.y = xy.y;
/*{{{
logXXX("%c get_event_XY: onWork_SEEK_TOOL=["+get_id_or_tag(onWork_SEEK_TOOL)+"] .. CALLED BY "+_caller, lbH+lf7);
}}}*/
};
/*}}}*/
/*  get_onMoveDXY {{{*/
let     onMoveDXY = { x:0, y:0 };
let get_onMoveDXY = function(e, _caller)
{
    let      xy = get_event_XY(e);
    onMoveDXY.x = xy.x - onDown_XY.x;
    onMoveDXY.y = xy.y - onDown_XY.y;
/*{{{
    if(onDown_ALT) {
        onMoveDXY.x = onDown_XY.x - xy.x;
        onMoveDXY.y = onDown_XY.y - xy.y;
    }
}}}*/
/*{{{
logXXX("%c get_event_XY: onWork_SEEK_TOOL=["+get_id_or_tag(onWork_SEEK_TOOL)+"] .. CALLED BY "+_caller, lbH+lf7);
}}}*/
};
/*}}}*/
/*  get_event_XY {{{*/
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
/*}}}*/
/*}}}*/
/* PIVOT {{{*/
/*{{{*/
const T_RAISE_PIVOT_PANEL_DELAY_LONG  = 2000;
const T_RAISE_PIVOT_PANEL_DELAY_SHORT =  500;

let   t_raise_pivot_PANEL_timer;
let   pivot_PANEL_changed_since_onDown;
/*}}}*/
/* t_set_pivot_PANEL {{{*/
/*{{{*/
let pivotXY = { x:512 , y:512 };

/*}}}*/
let t_set_pivot_PANEL = function(panel)
{
/*{{{*/
let   caller = "t_set_pivot_PANEL("+get_n_lbl(panel)+")";
let log_this   = LOG_MAP.T4_PIVOT;

if(log_this) t_log_event_status(caller, lf1);
/*}}}*/
    /* [pat_bag] .. (t_pat_bag_open_or_close on focus) {{{*/
    if((panel == pat_bag) && off_bag && (pivot_PANEL != pat_bag))
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
        if( t_is_panel_magnified( pivot_PANEL ) )
        {
            let pinned =  pivot_PANEL.classList.contains(CSS_PINNED);
            if(!pinned) t_toggle_panel_magnified(pivot_PANEL, false);
        }
    }
    /*}}}*/
    /* SELECT AND STORE NEW PIVOT PANEL {{{*/
    pivot_PANEL_changed_since_onDown = "from ["+get_n_lbl(pivot_PANEL)+"] to ["+get_n_lbl(panel)+"]";

    if(pivot_PANEL) t_set_CSS_PIVOT_PANEL(pivot_PANEL, false);

    pivot_PANEL = panel;
    if( !pivot_PANEL ) {
        t_set_pivotXY(topTool.x, topTool.y);
        return;
    }

    t_layout_panel_magnified(panel , prop_get( PIVOT_MAGNIFIED ));
    /*}}}*/
    /* MOVE PIVOT POINT {{{*/
    let map = tools_map_get(pivot_PANEL);
    if(!map) {
if( log_this) log("MOVE PIVOT POINT: pivot_PANEL NOT TRACKED YET");
        return;
    }
    map.x   = panel.offsetLeft;
    map.y   = panel.offsetTop;
    map.w   = panel.offsetWidth;
    map.h   = panel.offsetHeight;

/*{{{
logXXX("%c"+caller+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/

    let   x = map.x;
    let   y = map.y;
    let   w = map.w;
    let   h = map.h;
/*{{{
seekspot_A.style.marginLeft = (map.x) +"px";
seekspot_A.style.top        = (map.y) +"px";
seekspot_A.style.display    =       "block";
}}}*/

    let x_sign = (x > topTool.x) ? 1 : -1;
    let y_sign = (y > topTool.y) ? 1 : -1;
    if( x_sign < 0) x += w;
    if( y_sign < 0) y += h;
/*{{{
log("topTool_xy=["+topTool.x+" "+topTool.y+"] xy_sign=["+x_sign+" "+y_sign+"]");
}}}*/
    /* CHANGE [pivotXY] and [onMove_pivotXY] */
    let piv_x  =  x + x_sign * w * spread_ratio.x;
    let piv_y  =  y + y_sign * h * spread_ratio.y;
    t_set_pivotXY(piv_x, piv_y);

    t_store_update_post(caller);

    onMove_pivotXY.x = piv_x;
    onMove_pivotXY.y = piv_y;

    t_set_has_moved( caller );

    /*}}}*/
};
/*}}}*/
/*  t_set_pivotXY {{{*/
let t_set_pivotXY = function(x,y)
{
    if(pivotXY.x != x) pivotXY.x = parseInt(x);
    if(pivotXY.y != y) pivotXY.y = parseInt(y);

    if(pivspot) t_tool_set_panel_xy(pivspot, pivotXY.x, pivotXY.y);
};
/*}}}*/
/*  t_flash_unpinned_panels {{{*/
let t_flash_unpinned_panels = function(_caller)
{
/*{{{*/
let   caller = "t_flash_unpinned_panels";
let log_this = LOG_MAP.T4_PIVOT;

if( log_this) log(caller+".. CALLED BY "+ _caller);
/*}}}*/
    /* PANEL STYLE .. f(pivot_PANEL DIMMED_PANEL fully_spread) {{{*/
    for(let i=0; i < TOOL_panels.length; ++i)
    {
        let tool_panel  = TOOL_panels[i];
        if( tool_panel == hotspot    ) continue;
        if( tool_panel == fly_div    ) continue;
        /*..........................*/ t_show_unpinned_panel( tool_panel );
    }
    /*}}}*/
    /* SCHEDULE t_raise_pivot_PANEL_delayed {{{*/
    t_raise_pivot_PANEL_delayed(T_RAISE_PIVOT_PANEL_DELAY_LONG, caller);

    /*}}}*/
};
/*}}}*/
/*  t_raise_pivot_PANEL {{{*/
let t_raise_pivot_PANEL         = function(_caller) { t_raise_pivot_PANEL_delayed(0, _caller); };
let t_raise_pivot_PANEL_delayed = function(delay=0, _caller)
{
/*{{{*/
let   caller = "t_raise_pivot_PANEL_delayed("+delay+") .. CALLED BY "+_caller;
let log_this = LOG_MAP.T4_PIVOT;

if(log_this) logBIG(caller);
/*}}}*/

    /* to be handled once only [since onDown] ...cleared by [onUp] */
    if( t_raise_pivot_PANEL_timer == null)
        t_raise_pivot_PANEL_timer  = setTimeout(t_raise_pivot_PANEL_handler, delay);
};
/*}}}*/
/*_ t_raise_pivot_PANEL_handler {{{*/
let t_raise_pivot_PANEL_handler = function()
{
/* handler may be called early {{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_handler";

if(log_this) logBIG(caller);
if(log_this) t_log_event_status(caller);
/*}}}*/
    /* canceled {{{*/
    if(t_raise_pivot_PANEL_timer == null) {
if(log_this) logBIG(caller+": has been canceled");
        return
    }
    t_raise_pivot_PANEL_timer = null;

    if( call_t_grid_IS_ON_GRID(caller) ) return;
    /*}}}*/
    t_raise_pivot_PANEL_layout(caller);
};
/*}}}*/
/*_ t_raise_pivot_PANEL_layout {{{*/
let t_raise_pivot_PANEL_layout = function(_caller)
{
/* handler may be called early {{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_layout";

if(log_this) logBIG(caller+" CALLED BY "+_caller);
/*}}}*/
    /* [selected_tools] {{{*/
    let selected_tools = [];
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        let tool_panel = TOOL_panels[i];
        if(!tool_panel) continue; /* i.e. fly_div may not be there yet ... TODO */
        if( tool_panel.classList.contains(CSS_PINNED)) continue;

        let map = tools_map_get(tool_panel);
        if(!map ) continue;
        if( map.selected) selected_tools.push(tool_panel);
    }

if(log_this) log(".....selected_tools.length=["+ selected_tools.length +"]");
    /*}}}*/
    /* [panel_rank] {{{*/
    let pivot_idx  = selected_tools.indexOf( pivot_PANEL );
    let panel_rank = selected_tools.length;
if(log_this) log(".....pivot_idx...........................=["+ pivot_idx  +"]");
if(log_this) log(".....panel_rank..........................=["+ panel_rank +"]");
    /*}}}*/
    for(let i=0; i < selected_tools.length; ++i) {
        /* [zIndex] .. f(tool_rank) {{{*/
        let tool_panel = selected_tools[i];
        let tool_idx   = selected_tools.indexOf( tool_panel );
        tool_panel.tool_rank = panel_rank - Math.abs(pivot_idx - tool_idx);

        let s = "....................".substring(0, tool_panel.tool_rank);
if(log_this) log("...["+s+"] ["+get_n_lbl(tool_panel)+"] .. tool_panel.tool_rank=["+tool_panel.tool_rank+"]");

        /*}}}*/
        /* PIVOT  PANEL  .. [unhide] [zIndex] {{{*/
        if(tool_panel == pivot_PANEL)
        {
            t_show_unpinned_panel (tool_panel);
            t_set_CSS_PIVOT_PANEL (tool_panel,  true);

            tool_panel.style.zIndex = ZINDEX_ABOVE_TOOLS-1; /* as the last tool */
/*{{{
t_log_panel_style_zIndex(tool_panel, caller);
}}}*/

/*
            tool_panel.style.boxShadow = "0px 0px "+(2*panel_rank)+"px blue";
            tool_panel.style.opacity   = "1";
*/
        }
        /*}}}*/
        /* PINNED PANELS .. [unhide] {{{*/
        else if( tool_panel.classList.contains(CSS_PINNED) )
        {
            t_show_pinned_panel(tool_panel, panel_rank);
        }
        /*}}}*/
        /* OTHER  PANELS .. [hide] [zIndex] {{{*/
        else {
            t_set_CSS_PIVOT_PANEL(tool_panel, false);
            if(!tool_panel.classList.contains(CSS_PINNED))
            {
                if(t_show_or_dimm_unpinned_panels(caller)) t_show_unpinned_panel( tool_panel );
                else                                       t_dimm_unpinned_panel( tool_panel );
            }
            tool_panel.style.zIndex    = ZINDEX_TOOL_PANEL_ZERO + tool_panel.tool_rank;
/*{{{
t_log_panel_style_zIndex(tool_panel, caller);
}}}*/
/*{{{
            tool_panel.style.boxShadow = "0px 0px "+(2*tool_panel.tool_rank)+"px black";
            tool_panel.style.opacity   = tool_panel.tool_rank/2 / panel_rank;
}}}*/
        }
        /*}}}*/
    }
    /* STORE TOOLS LAYOUT {{{*/
    /* pat_bag geometry takes time to reflect dynamic content layout .. TODO */
    if(!onWork_PANEL) {
        t_update_TOOLS_MAP_GEOMETRY(caller);
        t_tool_set_top_xy(caller, topTool.x, topTool.y);
    }
    else {
/*
if(onWork_PANEL) log("NOT UPDATING GEOMETRY WHILE WORKING ON ["+onWork_PANEL.id+"]");
*/
    }
    /*}}}*/
};
/*}}}*/

/*  t_raise_pivot_PANEL_called_since_onDown {{{*/
let t_raise_pivot_PANEL_called_since_onDown = function(_caller)
{
/*{{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_called_since_onDown";

if(log_this) log(caller+"("+_caller+"): ...return "+(t_raise_pivot_PANEL_timer != null));
/*}}}*/
    return (t_raise_pivot_PANEL_timer != null);
};
/*}}}*/
/*  t_raise_pivot_PANEL_reset {{{*/
let t_raise_pivot_PANEL_reset = function(_caller)
{
/*{{{*/
let log_this   = LOG_MAP.T4_PIVOT;
    let caller = "t_raise_pivot_PANEL_reset";

if(log_this) logBIG(caller+"("+_caller+")", lf8);
/*}}}*/
    if(t_raise_pivot_PANEL_timer)
    {
        clearTimeout(t_raise_pivot_PANEL_timer);

        t_raise_pivot_PANEL_timer = null;
    }
};
/*}}}*/

/*}}}*/
/* PINNED {{{*/
/*{{{*/
const CSS_FULLY_SPREAD   = "fully_spread";
const DIMMED_PANEL   = "dimmed_panel";
const CSS_PIVOT_PANEL    = "pivot_panel";

/*}}}*/
/* XXX MOVE FUNCTION BELOW WHERE IT FITS BEST */
/*_ t_show_or_dimm_unpinned_panels {{{*/
let t_show_or_dimm_unpinned_panels = function(_caller)
{
/*{{{*/
let   caller = "t_show_or_dimm_unpinned_panels";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.T4_PIVOT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    let fully_spread          = ((spread_ratio.x >= 0.9) || (spread_ratio.y >= 0.9));
    let moving_unpinned_panel = (onWork_PANEL && (onWork_PANEL != pivot_PANEL) && !has_el_class(onWork_PANEL, CSS_PINNED));
    let moving_hotspot        = (             onWork_PANEL        == hotspot    );
    let moving_hotring        = (             onWork_EL_last_used == hotring    );
if(log_this) { /*{{{*/
    log_key_val( caller
                 , {   moving_hotspot        : moving_hotspot
                     , moving_hotring        : moving_hotring
                     , moving_unpinned_panel : moving_unpinned_panel
                     , onWork_PANEL          : get_id_or_tag(onWork_PANEL)
                     , pivot_PANEL           : get_id_or_tag(pivot_PANEL)
                     , fully_spread          : fully_spread
                 }
                 , lb0
               );
}
/*}}}*/

    let show_or_dimm_unpinned_panels
        = moving_hotspot        ?               "hotspot"
        : moving_hotring        ?               "hotring"
        : fully_spread          ?          "fully_spread"
        : moving_unpinned_panel ? "moving_unpinned_panel"
        :                                              "" /* no reason to show */
    ;

if(log_this) log("%c"+caller+" .. CALLED BY "+ _caller+"%c"+(show_or_dimm_unpinned_panels ? "SHOW "+show_or_dimm_unpinned_panels : "DIMM"), lbH, lbb+lbH+lf5);
    return show_or_dimm_unpinned_panels;
};
    /*}}}*/
/*_ t_show_unpinned_panel {{{*/
let t_show_unpinned_panel = function(tool_panel)
{
    /* UNDIMM {{{*/
    let tool_panel_is_dimmed    = has_el_class(tool_panel, DIMMED_PANEL);
    if( tool_panel_is_dimmed )    del_el_class(tool_panel, DIMMED_PANEL);

    /*}}}*/
    /* CSS_PIVOT_PANEL {{{*/
    if(!has_el_class(tool_panel, CSS_PIVOT_PANEL))
    {
        let tool_panel_pinned       = has_el_class(tool_panel  , CSS_PINNED);
        let moving_a_pinned_panel   = has_el_class(onWork_PANEL, CSS_PINNED);
        let panels_are_fully_spread = ((spread_ratio.x >= 0.9) || (spread_ratio.y >= 0.9));
        let fully_spread
            =  !tool_panel_pinned
            && !moving_a_pinned_panel
            &&  panels_are_fully_spread
        ;

        t_set_CSS_FULLY_SPREAD(tool_panel, fully_spread);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_dimm_unpinned_panel {{{*/
let t_dimm_unpinned_panel = function(tool_panel)
{
    add_el_class(tool_panel, DIMMED_PANEL);
};
/*}}}*/
/*_ t_show_pinned_panel {{{*/
let t_show_pinned_panel = function(tool_panel, panel_rank)
{
    del_el_class          (tool_panel, DIMMED_PANEL);
    t_set_CSS_FULLY_SPREAD(tool_panel, false);
    t_set_CSS_PIVOT_PANEL (tool_panel, false);

    tool_panel.style.zIndex = ZINDEX_PINNED_PANEL_ZERO + panel_rank;
/*{{{
t_log_panel_style_zIndex(tool_panel, "t_show_pinned_panel");
}}}*/
};
/*}}}*/

/*}}}*/
/* [target focus has_moved clicked consumed] {{{*/
/*_ t_get_event_target {{{*/
let t_get_event_target = function(e, caller)
{
    /* e_target .. f(event) {{{*/
    let e_target;
    /* [event.target] {{{

     * A reference to the object that dispatched the event.
     * It is different from [event.currentTarget]
     * . when the event handler is called
     * . during the bubbling
     * . or capturing phase of the event.
     }}} */
    if     (e.path && (e.path[0].tagName != "IMG")) { e_target = e.path[0];                /*log("e.path..................=["+ e.path                   +"]");*/ }
    else if(e.path &&  e.path[1]                  ) { e_target = e.path[1];                /*log("e.path..................=["+ e.path                   +"]");*/ }
    else if(e.target                              ) { e_target = e.target ;                /*log("e.target................=["+ e.target                 +"]");*/ }
    else if(e.originalTarget                      ) { e_target = e.originalTarget;         /*log("e.originalTarget........=["+ e.originalTarget         +"]");*/ }
    else if(e.explicitOriginalTarget              ) { e_target = e.explicitOriginalTarget; /*log("e.explicitOriginalTarget=["+ e.explicitOriginalTarget +"]");*/ }

    /*}}}*/

    /* skip proxy el {{{*/
    let el;
    e_target
        = ((el = e_target.firstElementChild) && (el.tagName == "INPUT")) ? e_target.firstElementChild
        : ((el = e_target                  ) && (el.htmlFor           )) ? document.getElementById(el.htmlFor)
        : ((el = e_target.parentElement    ) && (el.htmlFor           )) ? document.getElementById(el.htmlFor)
        : /*..........................................................*/   e_target
    ;

    /*}}}*/
    /* handled_target .. f(handler) {{{*/
    if( t_get_EL_slot(e_target) )
    {
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
            if( !get_el_mouse_event_handler(e_target) ) handled_target = get_el_parent_with_any_event_handler(e_target);
            break;
            /* KEY */
            case "keydown"   :
            case "keypress"  :
            case "keyup"     :
            if( !get_el_onkey_event_handler(e_target) ) handled_target = get_el_parent_with_any_event_handler(e_target);
            break;
            /* INPUT .. (form frame) */
            case "change"    :
            case "focus"     :
            case "select"    :
            case "input"     :
            case "submit"    :
            case "blur"      :
            if( !get_el_input_event_handler(e_target) ) handled_target = get_el_parent_with_any_event_handler(e_target);
            break;
            /* NOT HANDLED */
            default:
            log("%c*** t_get_event_target: EVENT TYPE ["+e.type+"] NOT HANDLED", lbF+lb2);
            break;
        }
        if(handled_target) {
            e_target = handled_target;
        }
    }
    /*}}}*/
/* log {{{
onmousedown onmouseup onclick ondblclick
onkeydown onkeypress onkeyup
onchange
onfocus onselect oninput onsubmit onblur TODO

console.dir(e);
console.dir(e_target);

try { log("e_target.id......=["+e_target.id      +"]"); } catch(ex) { console.warn(ex); console.dir(e_target); }
try { log("e_target.nodeName=["+e_target.nodeName+"]"); } catch(ex) { console.warn(ex); console.dir(e_target); }
try { log("e_target.tagName.=["+e_target.tagName +"]"); } catch(ex) { console.warn(ex); console.dir(e_target); }
}}}*/
/*{{{
let target_label = get_n_lbl((e.path ? e.path[0] : e.e_target));
logXXX("t_get_event_target("+e.type+" on "+target_label+" .. CALLED BY "+caller+") ...return %c"+get_n_lbl(e_target), lb5);
}}}*/
    return e_target;
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
/*{{{
logBIG("t_clr_has_moved: "+_caller, lbH+lf4)
}}}*/
    has_moved     = "";
    has_been_scrolled_by_script  = "";
};
/*}}}*/
/*_ t_set_has_moved {{{*/
let t_set_has_moved = function(_caller)
{
/*{{{*/
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV1_DOWN || LOG_MAP.EV2_MOVE || LOG_MAP.EV3_UP || LOG_MAP.EV4_LONG_PRESS ;

if( log_this && !has_moved) t_log_event_status("t_set_has_moved "+ _caller, lf3);
/*}}}*/
    has_moved = _caller;
/*{{{
    if(onWork_EL) t_clr_onWork_EL_pressed();
}}}*/

    if( is_long_press_pending() )
        del_long_press_listener(has_moved);
};
/*}}}*/
let t_check_has_moved       = function(dx, dy, _caller) {                 return t_check_has_moved_dx_dy(dx, dy, _caller,   MOVED_ENOUGH) };
let t_check_big_moved       = function(dx, dy, _caller) { has_moved = ""; return t_check_has_moved_dx_dy(dx, dy, _caller, 2*MOVED_ENOUGH) };
let t_check_has_moved_dx_dy = function(dx, dy, _caller, d_min)
{
    if( has_moved                   ) return  true;
    if(!onWork_EL                   ) return false;
    if( onDown_7_STALL_is_pending() ) return false; /* WAKE UP DELAY */

    /* SEEKER MAGNET */
    if( onWork_SEEK_TOOL ) t_check_on_seeker_move(dx, dy, d_min);

    /* NOT MOVED ENOUGH */
    let dx_dy = Math.max(Math.abs(dx), Math.abs(dy));
    if( dx_dy < d_min) return false;

    /* HAS MOVED ENOUGH */
    t_set_has_moved("[has_moved "+dx_dy+"px] ["+_caller+"] ["+get_n_lbl(onWork_EL)+"]");

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
/*_ t_is_bouncing_e_type {{{*/
/*{{{*/
const T_EVENT_DEBOUNCE_DELAY = 100;
let   t_last_handled_event_of_type_MS = {};

/*}}}*/
let t_is_bouncing_e_type = function(e_type, _caller)
{
let log_this = logging_something();

    let last_MS = t_last_handled_event_of_type_MS[e_type] || 0;

    let this_MS = new Date().getTime() % 86400000;
    let delay   = this_MS - last_MS;

    let bouncing = (delay < T_EVENT_DEBOUNCE_DELAY);

    t_last_handled_event_of_type_MS[e_type] = this_MS;

if(log_this && bouncing) log("t_is_bouncing_e_type(%c "+e_type+" %c) %c .. CALLED BY ["+_caller+"] %c .. DEBOUNCED: ["+Math.floor(delay)+"ms < "+T_EVENT_DEBOUNCE_DELAY+"] .. onWork_EL=["+get_n_lbl(onWork_EL)+"] onWork_PANEL=["+get_n_lbl(onWork_PANEL)+"]",lb5,lbA, lb6,lbA);
    return bouncing;
};
/*}}}*/
/*_ t_event_set_e_consumed_by {{{*/
/*{{{*/
let t_event_consumed_cause = "";

/*}}}*/
let t_event_set_e_consumed_by = function(e, consume_cause)
{
let log_this = !onDown_SHIFT && logging_something();
if( log_this) log("t_event_set_e_consumed_by: %c "+consume_cause, lb0);

    t_event_consumed_cause = consume_cause;
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
/*_ t_post_focus_to {{{*/
let t_post_focus_to = function(el)
{
    if(t_post_focus_to_el) del_el_class(t_post_focus_to_el,CSS_FOCUSSED);
    t_post_focus_to_el = el;

    setTimeout(t_post_focus_to_handler, T_POST_FOCUS_TO_DELAY);
};
/*}}}*/
/*_ t_post_focus_to_handler {{{*/
let t_post_focus_to_handler = function(el)
{
/*{{{*/
let   caller = "t_post_focus_to_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    if(!t_post_focus_to_el) return;
/*{{{
logXXX(caller+": ...moving focus to "+ get_n_lbl(t_post_focus_to_el)+")");
}}}*/
    add_el_class( t_post_focus_to_el,CSS_FOCUSSED);
    t_focus     ( t_post_focus_to_el );

    let panel = t_get_tool_panel(t_post_focus_to_el);
    if( panel && (pivot_PANEL != panel) )
    {
        t_set_pivot_PANEL( panel );
        t_raise_pivot_PANEL(caller+"("+get_n_lbl(el)+")");
        t_toggle_pivot_PANEL_magnified( prop_get( PIVOT_MAGNIFIED ) );
    }

    t_post_focus_to_el = null;
};
/*}}}*/
/*_ t_focus {{{*/
let t_focus = function(el)
{
/*{{{
logXXX("t_focus("+get_id_or_tag(el)+")");
logXXX("...behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
}}}*/
    /*if( !behavior_TOUCH_ELSE_DESKTOP )*/ el.focus ();
};
/*}}}*/
/*}}}*/

/*}}} */
/* [magnified] {{{*/
/*_ t_layout_panel_magnified {{{*/
let t_layout_panel_magnified = function(panel, magnified)
{
/*{{{*/
let   caller = "t_layout_panel_magnified";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+panel.id+", "+magnified+")");
/*}}}*/
    if( magnified ) {
        /*...........................*/ add_el_class(panel,CSS_MAGNIFIED);
        if(!t_can_be_magnified(panel) ) add_el_class(panel,CSS_TOO_LARGE);
        else                            del_el_class(panel,CSS_TOO_LARGE);
    } else {
        /*...........................*/ del_el_class(panel,CSS_MAGNIFIED);
        /*...........................*/ del_el_class(panel,CSS_TOO_LARGE);
    }
};
/*}}}*/
/*_ t_toggle_panel_magnified {{{*/
let t_toggle_panel_magnified = function(panel, new_state)
{
/*{{{*/
let   caller = "t_toggle_panel_magnified("+get_id_or_tag(panel)+", "+new_state+")";
let log_this = (LOG_MAP.T4_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

/*}}}*/
    /* TOGGLE STATE {{{*/
    let old_state = panel.classList.contains("magnified");
    switch( new_state ) {
        case  true: new_state =  new_state; break; /* SET    */
        case false: new_state =  new_state; break; /* UNSET  */
        default:    new_state = !old_state; break; /* TOGGLE */
    }
    /*}}}*/
    /* STORE CHANGE {{{*/
    if(new_state != old_state)
    {
        t_store_update_post(get_n_lbl(panel)+" magnified "+new_state);

if( log_this) log(caller+": ...TOGGLED TO "+ new_state);
    }
    else {
if( log_this) log(caller+": ...NO CHANGE");
    }
    /*}}}*/
    t_layout_panel_magnified(panel, new_state);

    return new_state;
};
/*}}}*/
/*_ t_toggle_pivot_PANEL_magnified {{{*/
let t_toggle_pivot_PANEL_magnified = function(new_state)
{
/*{{{*/
let   caller = "t_toggle_pivot_PANEL_magnified("+new_state+")";
let log_this = (LOG_MAP.T4_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

/*}}}*/
    /* TOGGLE STATE {{{*/
    if( !pivot_PANEL ) return;

    let old_state = prop_get                ( PIVOT_MAGNIFIED );
    new_state     = t_toggle_panel_magnified( pivot_PANEL, new_state);

    /*}}}*/
    /* STORE CHANGE {{{*/
    if(new_state != old_state) {
        prop_set(PIVOT_MAGNIFIED , new_state);

        t_store_update_post("pivot_magnified "+new_state);

if(log_this) log(caller+": pivot_magnified: %c "+new_state+" ", (new_state ? lb2 : lb8));
    }
    /*}}}*/
    return new_state;
};
/*}}}*/
/*_ t_is_panel_magnified {{{*/
let t_is_panel_magnified = function(panel)
{
let log_this  = LOG_MAP.T4_PIVOT;

    let state
        = panel.classList.contains("magnified")
    ;
if(log_this) log("%c t_is_panel_magnified(panel=["+get_n_lbl(panel)+"]) %c: ...return "+state, lbF+lb1, lb2);

    return state;
};
/*}}}*/
/*_ t_can_be_magnified {{{*/
let t_can_be_magnified = function(panel)
{
/*{{{*/
let   caller = "t_can_be_magnified";
let log_this = (LOG_MAP.T4_PIVOT || LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

/*}}}*/
    if(panel == seeker_PD          )           return true; /* not a TOOL_panels .. but can be magnified */
    let  map  = tools_map_get(panel); if(!map) return true; /* NO SUCH PANEL (YET) .. as when loading */

    /*...............................................*/ let reject_reason = "";
    if     ( map.w > (w_W / 2)                            ) reject_reason = "["+map.w+" > "+w_W+"/2] .. "+ "["+get_n_lbl(panel)+ "] IS TOO WIDE";
    else if( map.h > (w_H / 2)                            ) reject_reason = "["+map.h+" > "+w_H+"/2) .. "+ "["+get_n_lbl(panel)+ "] IS TOO HIGH";
/*
    else if( onWork_EL && !t_tools_layout_on_mouseup_timer) reject_reason = "["+map.h+" > "+w_H+"/2) .. onWork_EL layout pending";
    else if( onWork_EL                                    ) reject_reason = "["+map.h+" > "+w_H+"/2) .. onWork_EL layout pending";
*/
    let result = (reject_reason == "");

if(log_this) log("t_can_be_magnified("+get_n_lbl(panel)+"): ...return "+result+" %c "+reject_reason, lbF+lb2);
    return result;
};
/*}}}*/
/*_ t_update_panel_magnified {{{*/
let t_update_panel_magnified = function()
{
    for(let i=0; i < TOOL_panels.length; ++i)
    {
        let                        panel = TOOL_panels[i];
        if(t_is_panel_magnified(   panel ))
           t_layout_panel_magnified(panel , true);
    }
};
/*}}}*/
/*}}}*/
/*}}}*/

/* EVENT HANDLERS DOWN MOVE LONG_PRESS UP CLICK LONG_CLICK */
/*{{{*/
/* DOWN */
/*{{{*/
/*  t_pointerdown_listener {{{*/
let t_pointerdown_listener = function(e)
{
/*{{{*/
let   caller = "t_pointerdown_listener";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log(caller+"("+ get_n_lbl(t_get_event_target(e))+")");
/*}}}*/
    /* DOWN .. times (PMS .. MS] .. modifiers (SHIFT CTRL ALT) {{{*/
    log_sep_clr();

    onDownPMS    = onDown_MS;            /* previous  */
    onDown_MS    = new Date().getTime(); /* current   */

    onDown_SHIFT = e.shiftKey;           /* modifiers */
    onDown_CTRL  = e.ctrlKey ;
    onDown_ALT   = e.altKey  ;
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* return .. [onDown_CTRL] [onDown_SHIFT] {{{*/
    if(onDown_CTRL ) { log(); return; } /* right-button-menu override */
    if(onDown_ALT  ) { log(); console.clear();                                    t_preventDefault(e, caller); return; }
    if(onDown_SHIFT) { log(); caller="SHIFT "+caller; console_clear_post(caller); t_preventDefault(e, caller); t_event_set_e_consumed_by(e, caller); return; }
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                               let  consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onDown_0_MULTITOUCH               (e); consumed_by_css = lf9; }
    if(!consumed_by) { consumed_by = onDown_1_INIT_CTRL_DEBOUNCE_INPUT (e); consumed_by_css = lf1; }
    if(!consumed_by) { consumed_by = onDown_2_target_tool_MOVE         (e); consumed_by_css = lf4; }
    if(!consumed_by) { consumed_by = onDown_2_slot_fullscreen_DRAG     (e); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onDown_2_TOOL_PICK                (e); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onDown_3_TOOL_PRESS               (e); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onDown_4_TOOL_MOVE                (e); consumed_by_css = lf4; }
/*{{{
    if(!consumed_by) { consumed_by = onDown_5_TOOL_SEEKER_TO_HIDE      (e); consumed_by_css = lf5; }
}}}*/
    if(!consumed_by) { consumed_by = onDown_6_DOC_SELECT_OR_SEEK       (e); consumed_by_css = lf6; }
    if(!consumed_by) { consumed_by = e.type+" BUBBLING"; onDown_7_STALL( ); consumed_by_css = lf7; }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

    /* consumed_by {{{*/
if( log_this) t_log_event_status(caller+":"+LF+SYMBOL_RIGHT_ARROW+" "+consumed_by, lbb+consumed_by_css);

    if( logging_something() )
        t_log_transcript_event_top("<span class='big'>"+ SYMBOL_DOWN_ARROW +"</span>"
            +                      "<em>"+               consumed_by       +"</em>");

    /*}}}*/
};
/*}}}*/

/*_ onDown_0_MULTITOUCH {{{*/
/*{{{*/
let onDown_TOUCHES;

/*}}}*/
let onDown_0_MULTITOUCH = function(e)
{
    onDown_TOUCHES     = e.touches ? e.touches.length : 1;
    let    consumed_by = ((onDown_TOUCHES > 1) ? "MULTI-TOUCH x"+onDown_TOUCHES : "");
    return consumed_by;
};
/*}}}*/
/*_ onDown_1_INIT_CTRL_DEBOUNCE_INPUT {{{*/
let onDown_1_INIT_CTRL_DEBOUNCE_INPUT = function(e)
{
/*{{{*/
let   caller = "onDown_1_INIT_CTRL_DEBOUNCE_INPUT";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb1);
/*}}}*/
    /* INIT EVENT CHAIN {{{*/
    t_log_clr_status();
    t_clr_has_moved(caller);
    t_raise_pivot_PANEL_reset(caller);

    t_seekzone8_clear_feedback();

    set_seek_grab_done( false );

    t_scrollIntoViewCanceled(caller);

    if(               t_tools_layout_on_mouseup_timer ) {
        clearTimeout( t_tools_layout_on_mouseup_timer );
        /*.........*/ t_tools_layout_on_mouseup_timer = null;
    }

    if(t_preventDefault_caller) t_restoreDefault("ON DOWN INIT");

    mousemove_consumed_by    = "";
    onMove_selection_removed = false;

    move_cooldown_handler();

    /*}}}*/
    /* EVENT START-TO-END TRANSITION {{{*/
    fully_spread_since_onDown                      = false;
    pivot_PANEL_changed_since_onDown               = false;

    /*}}}*/

    /* XY */
    get_onDown_XY(e, caller);
    onMoveDXY.x = 0;
    onMoveDXY.y = 0;

    /* SCROLL */
    if(!dimm_mask_displayed() )
        onDown_SCROLL_XY
            = {   x : window.scrollX
                , y : window.scrollY
            };

    /* EL */
    let e_target = t_get_event_target(e, caller);
    t_set_onWork_EL(e_target, caller);

    /* SEEKER: seek1_onSlotEL seek3_onJumpEL seek5_onTarget seek4_onSeeker seek2_onResume */
    get_onDown_SEEK(e);

    if( prop_get(SHOW_SEEKZONE) ) {
        t_seekzone1_show_onDown();
        t_seekzone1_add_onDown_XY();
    }

    /* SELECTION */
    get_onDown_SELECTION();

    /* IGNORE CLICK BURST */
    let consumed_by = "";
    if(t_is_bouncing_e_type(e.type, "t_pointerdown_listener"))
        consumed_by = "BOUNCING [EVENT <= "+T_EVENT_DEBOUNCE_DELAY+" ms]";

if(consumed_by) t_clear( consumed_by );
    return consumed_by;
};
/*}}}*/
/*_ onDown_2_target_tool_MOVE {{{*/
let onDown_2_target_tool_MOVE = function(e)
{
/*{{{*/
let   caller = "onDown_2_target_tool_MOVE";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) t_log_event_status(caller, lf2);
    if(onDown_EL != target_tool) return;
if( log_this) t_target_tool_log(target_tool);
    let consumed_by;
/*}}}*/
    /* ADD MOVE LISTENERS FOR [target_tool] {{{*/
    if(target_tool.clicked == "handle")
    {
        consumed_by = "MOVING TARGET TOOL";
        t_preventDefault(e, "PREVENT PAGE SCROLL WHILE "+consumed_by);

        add_tool_pointermove_listener(caller);
    }
    /*}}}*/
    /* ADD MOVE LISTENERS FOR [target_tool] DIRECTION {{{*/
    if((target_tool.clicked == "pad") && has_el_class( target_tool, CSS_LIFTED))
    {
        consumed_by = "POINTING TARGET TOOL";
        t_preventDefault(e, "PREVENT PAGE SCROLL WHILE "+consumed_by);

        add_tool_pointermove_listener(caller);
    }
    /*}}}*/
if( log_this && consumed_by) logBIG(consumed_by, lf2);
    return consumed_by;
};
/*}}}*/
/*_ onDown_2_slot_fullscreen_DRAG {{{*/
let onDown_2_slot_fullscreen_DRAG = function(e)
{
/* {{{*/
let   caller = "onDown_2_slot_fullscreen_DRAG";
let log_this = LOG_MAP.EV1_DOWN ||LOG_MAP.T3_LAYOUT;

if( log_this) t_log_event_status(caller, lf2);
/*}}}*/
    if(!div_slot_containers_displayed()         ) return "";
    if(!has_el_class(onWork_EL, CSS_FULLSCREEN )) return "";

    let    consumed_by = "START button_magnify DRAG ["+get_n_lbl(onWork_EL)+"]";
    /* ADD MOVE LISTENERS {{{*/
    add_tool_pointermove_listener(caller);
    /*}}}*/

    return consumed_by;
};
/*}}}*/
/*_ onDown_2_TOOL_PICK {{{*/
let onDown_2_TOOL_PICK = function(e)
{
    /* [e_target] {{{*/
let   caller = "onDown_2_TOOL_PICK";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb2);

    let e_target = t_get_event_target(e, caller);
    /*}}}*/
    /* PLAYGROUND [doc_evt_div] {{{*/
    if(doc_evt_div)
    {
        if(    !is_el_or_child_of_parent_el(e_target, doc_evt_div)
            && !is_el_or_child_of_parent_el(e_target, doc_log_div)
        )
            t_doc_div_clear("doc_evt_div")

    }
    /*}}}*/
    /* FOCUS ON SOME INPUT {{{*/
/*{{{
try{
logXXX("...e_target............=["+ get_id_or_tag(e_target) +"]");
logXXX("...e_target.tagName....=["+ e_target.tagName        +"]");
} catch(ex) {}
}}}*/
    if(e_target)
    {
        /* [e_target] IS AN INPUT .. (t_post_focus_to) {{{*/
        if(e_target.tagName == "INPUT")
        {
if( log_this) log("...%c INPUT FOCUS TO TARGET:", lb2);

            t_focus( e_target );
        }
        /*}}}*/
        /* TODO FOCUSSING NEXT PANEL INPUT {{{*/
/* TODO {{{
        else {
            let inputs = e_target.getElementsByTagName("INPUT");
            if(inputs.length)
            {
                logXXX(caller+": ...TARGET CONTAINS "+inputs.length+" INPUT NODES");
                for(let i=0; i < inputs.length; ++i)
                {
                    let el = inputs[i];
                    if( el.tagName == "INPUT")
                    {
logXXX("...document.activeElement=["+ get_n_lbl(document.activeElement) +"]");
logXXX(".........posting focus to ["+ get_n_lbl(el                    ) +"]");
logXXX(".....INPUT FOCUS TO CHILD ["+ get_n_txt(el                    ) +"]");

                        t_post_focus_to(el);
                        break;
                    }
                }
            }
        }
}}}*/
        /*}}}*/
    }
    /*}}}*/
    /* PIVOT PANEL SWITCH .. (move tool drag) {{{*/
    let     consumed_by = "";

    if(    !consumed_by
        && (onWork_PANEL                                )
        && (onWork_PANEL                  != dimm_mask  )
        && (onWork_PANEL                  != hotspot    )
        && (onWork_PANEL                  != fly_div    )
        && !onWork_PANEL.classList.contains( CSS_PINNED )
    ) {
        if(onWork_EL == onWork_PANEL) t_seeker_PU_hide("instant");

/*{{{
try {
logXXX("......................................onWork_PANEL=["+ get_id_or_tag(onWork_PANEL                      ) +"]");
logXXX(".......................................pivot_PANEL=["+ get_id_or_tag(pivot_PANEL                       ) +"]");
logXXX("..........................................e_target=["+ get_id_or_tag(e_target                          ) +"]");
logXXX("..................................e_target.tagName=["+ e_target.tagName                                  +"]");
logXXX("is_el_or_child_of_parent_el(e_target, pivot_PANEL)=["+is_el_or_child_of_parent_el(e_target, pivot_PANEL) +"]");
} catch(ex) {}
}}}*/
        /* SWITCH [pivot_PANEL] {{{*/
        if(      (onWork_PANEL != pivot_PANEL)
/*FIXME
              && (   !e_target || (e_target.tagName != "INPUT")
                  || !is_el_or_child_of_parent_el(e_target, pivot_PANEL))
*/
          ) {
if( log_this) log("PIVOT PANEL SWITCH:");
            let msg
                = caller+": EVENT CANCELED:"
                + LF+"SWITCHING PIVOT PANEL"
                +    " FROM ["+ get_n_lbl(pivot_PANEL ) +"]"
                +      " TO ["+ get_n_lbl(onWork_PANEL) +"]"
                + LF+"...onWork_EL=["+ get_n_lbl(onWork_EL) +"]"
            ;
            t_event_set_e_consumed_by(e, msg);

            onWork_MOVABLE_CHILD      = null;

            fully_spread_since_onDown = true; /* FIXME so it may not be cycled without another onDown */

            t_set_pivot_PANEL( onWork_PANEL );

            let show_or_dimm_unpinned_panels = true;
            t_raise_pivot_PANEL_layout(show_or_dimm_unpinned_panels, caller);

            t_sync_layout(caller);
        }
        /*}}}*/
        /* CURRENT PANEL .. RAISE & MAGNIFY {{{*/
        else {
if( log_this) log("PIVOT PANEL CURRENT");
            if( t_show_or_dimm_unpinned_panels(caller) )
                t_raise_pivot_PANEL(caller);

            /* INPUT CLICKED */
            if(e_target && (e_target.tagName == "INPUT"))
                consumed_by = "INPUT CLICKED";

        }
        /*}}}*/
    }
    /*}}}*/
    /* FLASH UNPINNED PANELS .. f(hotspot) {{{*/
    if(onWork_PANEL == hotspot)
    {
        t_flash_unpinned_panels();
    }
    /*}}}*/
    /* WHETHER TO CALL [t_preventDefault] .. f(onWork_EL or onWork_PANEL handler) {{{*/
    if(!consumed_by)
    {
/*{{{
if( log_this) log("%c...ACCEPT BUBBLE or PREVENT DEFAULT...", lf2);
}}}*/

        let has_handler      = (get_el_event_handler(onWork_EL, caller) != null);
        let is_a_tool        = t_is_a_tool_el(onWork_EL, caller);
        let is_a_tool_dimmed = is_el_or_child_of_parent_el(onWork_EL, dimm_mask);
/*{{{
log(caller);
log("...(onWork_PANEL == pivot_PANEL)...: "+ (onWork_PANEL != pivot_PANEL));
log("...has_handler.....................: "+ has_handler                        );
log("...is_a_tool.......................: "+ is_a_tool                          );
log("...is_a_tool_dimmed................: "+ is_a_tool_dimmed                   );
log("...onWork_PANEL....................: "+ get_n_lbl    (onWork_PANEL        ));
log("...onWork_EL.......................: "+ get_n_lbl(    onWork_EL           ));
log("...onWork_SEEK_TOOL................: "+ get_id_or_tag(onWork_SEEK_TOOL    ));
log("...onWork_MOVABLE_CHILD............: "+ get_id_or_tag(onWork_MOVABLE_CHILD));
}}}*/

/*{{{
        let is_a_push_pin    = has_el_class(onWork_EL, CSS_PUSH_PIN);
log("...is_a_push_pin...................: "+ is_a_push_pin                );
        if     (is_a_push_pin && (onWork_PANEL != pivot_PANEL))
                                                  t_preventDefault(e, "ON DOWN .. TOOL PIN ["+ get_n_lbl(onWork_EL)+"]");
}}}*/

        if     (    onWork_SEEK_TOOL            ) t_preventDefault(e, "ON DOWN .. SEEK_TOOL             ["+ get_n_lbl( onWork_EL    )+"]");
        else if(    onWork_MOVABLE_CHILD        ) t_preventDefault(e, "ON DOWN .. MOVE_CHILD            ["+ get_n_lbl( onWork_EL    )+"]");
        else if(t_touching_a_scrollable_panel() ) {
/*{{{
        if( behavior_TOUCH_ELSE_DESKTOP         ) t_preventDefault(e, "ON DOWN .. TOOL TOUCHED          ["+ get_n_lbl( onWork_EL    )+"]");
                                                  t_preventDefault(e, "ON DOWN .. PANNEL SCROLL         ["+ get_n_lbl( onWork_PANEL )+"]");
}}}*/
            t_set_body_style_overflow_hidden(true);
        }
        else if( is_a_tool && !is_a_tool_dimmed ) {
/*{{{
            if(     behavior_TOUCH_ELSE_DESKTOP ) t_preventDefault(e, "ON DOWN .. TOOL TOUCHED          ["+ get_n_lbl( onWork_EL    )+"]");
}}}*/
            if     (has_handler                 ) t_preventDefault(e, "ON DOWN .. TOOL WITH    HANDLER  ["+ get_n_lbl( onWork_EL    )+"]");
            else                                  t_preventDefault(e, "ON DOWN .. TOOL WITH NO HANDLER  ["+ get_n_lbl( onWork_EL    )+"]");
        }
        else if(    onWork_PANEL                ) {
            if(     has_handler                 ) t_preventDefault(e, "ON DOWN .. PANEL WITH    HANDLER ["+ get_n_lbl( onWork_PANEL )+"]");
            else if(!behavior_TOUCH_ELSE_DESKTOP) t_preventDefault(e, "ON DOWN .. PANEL WITH NO HANDLER ["+ get_n_lbl( onWork_PANEL )+"]");
        }
/* TODO NO SCROLL ON MOBILE{{{
        else if(prop_get( ANCHOR_FREEZE )       ) t_preventDefault(e, "ON DOWN .. [anchor_freeze] SET   ["+ get_n_lbl( onWork_EL    )+"]");
}}}*/
        else if(log_this)                         t_acceptBubble  (e, "ON DOWN .. NOT A PANEL OR TOOL   ["+ get_n_lbl( onWork_EL    )+"]");

    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onDown_3_TOOL_PRESS {{{*/
let onDown_3_TOOL_PRESS = function(e)
{
/* TODO child of [dimm_mask] .. [div_slot_containers fullscreen selected container] */
/* {{{*/
let   caller = "onDown_3_TOOL_PRESS";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb3);
/*}}}*/
    /* ADD LONG PRESS TIMER .. (do not consume) {{{*/
    let consumed_by = "";
    if( onDown_3_TOOL_has_long_press_handler() )
    {
if( log_this) log("%cADDING LONG PRESS TIMER:", lbF+lf3);

        add_long_press_listener("ON DOWN TOOL PRESS "+ get_n_lbl(onWork_PANEL));
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onDown_3_TOOL_has_long_press_handler {{{*/
let onDown_3_TOOL_has_long_press_handler = function()
{
/*{{{*/
let caller = "onDown_3_TOOL_has_long_press_handler";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV4_LONG_PRESS || logging_EVENTS;

if(log_this) t_log_event_status(caller, lf3);
/*}}}*/
    /* context {{{*/
    if(!onWork_EL) return false;

    /* onWork_PANEL */
    let panel1_is_a_dimm_mask        = dimm_mask_is(                onWork_EL                    );
    let panel2_is_hotspot            = (                            onWork_PANEL   ==  hotspot   );
    let panel3_is_a_sel_bag_CHILD    = (            sel_bag ==      onWork_PANEL) && ( onWork_EL != sel_bag);
    let panel4_is_onWork_EL          = (onWork_PANEL &&       (     onWork_PANEL   ==  onWork_EL ));
    let panel5_has_a_SCALEPIN        = get_el_child_with_class(     onWork_PANEL    , CSS_SCALEPIN);
    /* onWork_EL */
    let el0_onSlotEL                 = (t_get_EL_slot             ( onWork_EL) > 0);
    let el1_is_a_tool                = t_is_a_tool_el             ( onWork_EL       , caller         );
    let el2_is_a_dimm_mask_child     = is_el_or_child_of_parent_el( onWork_EL       , dimm_mask      );
    let el3_is_a_fly_div_child       = is_el_or_child_of_parent_el( onWork_EL       , fly_div        );

    let el4_has_t_target_tool_feed   = is_a_DOM_LOAD_featured_function("t_target_tool_feed");
    let el5_is_a_seek_target_tool    = el4_has_t_target_tool_feed && has_el_class(onWork_SEEK_TOOL, CSS_TARGET_TOOL);
    let el6_pinned_target_tool_count = el4_has_t_target_tool_feed && t_get_pinned_target_tool_count();

/*{{{*/
if(log_this) {
    log_key_val( caller
                 , {   onWork_PANEL                  : get_n_lbl(onWork_PANEL)
                     ,  panel1_is_a_dimm_mask         : panel1_is_a_dimm_mask
                     ,  panel2_is_hotspot             : panel2_is_hotspot
                     ,  panel3_is_a_sel_bag_CHILD     : panel3_is_a_sel_bag_CHILD
                     ,  panel4_is_onWork_EL           : panel4_is_onWork_EL
                     ,  panel5_has_a_SCALEPIN         : panel5_has_a_SCALEPIN
                     , onWork_EL                     : get_n_lbl(onWork_EL)
                     ,  el0_onSlotEL                  : el0_onSlotEL
                     ,  el1_is_a_tool                 : el1_is_a_tool
                     ,  el2_is_a_dimm_mask_child      : el2_is_a_dimm_mask_child
                     ,  el3_is_a_fly_div_child        : el3_is_a_fly_div_child
                     ,  el4_has_t_target_tool_feed    : el4_has_t_target_tool_feed
                     ,  el5_is_a_seek_target_tool     : el5_is_a_seek_target_tool
                     ,  el6_pinned_target_tool_count  : el6_pinned_target_tool_count
                     , onDown_SEL_TEXT               : ellipsis_short(onDown_SEL_TEXT)
                 }
                 , lf8);
}
/*}}}*/
    /*}}}*/
    /* handled_by {{{*/
    let                                                          handled_by = "";
    if( el1_is_a_tool ) {
    /* onWork_PANEL */
        if     ( panel1_is_a_dimm_mask          ) handled_by =     onWork_EL.id          ;
/*{{{
        else if( panel2_is_hotspot              ) handled_by = "HOTSPOT PANELS UNHIDE"  ;
}}}*/
        else if( panel3_is_a_sel_bag_CHILD      ) handled_by = "A [sel_bag] CHILD"      ;
        else if( panel4_is_onWork_EL            ) handled_by = "A TOOL PANEL TO MAGNIFY";
        else if( panel5_has_a_SCALEPIN          ) handled_by = "";
    /* onWork_EL */
        else if( el2_is_a_dimm_mask_child       ) handled_by = "A [dimm_mask] CHILD"    ;
        else if( el3_is_a_fly_div_child         ) handled_by = "A [fly_div] CHILD"      ;
        else if( el5_is_a_seek_target_tool      ) handled_by = "A [target_tool] TO FEED FROM SEL_TEXT";
        else if((onWork_EL    == alt_bag       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == bag_rot       )) handled_by = "A [pat_bag] TOOL"       ;
        else if((onWork_EL    == bak_bag       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == bot_div       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == off_bag       )) handled_by = "A [pat_bag] DIV"        ;
        else if((onWork_EL    == transcript1   )) handled_by =    onWork_EL.id          ;
        else if((onWork_EL    == transcript2   )) handled_by =    onWork_EL.id          ;

    }
    else {
        if     (     el0_onSlotEL                    ) handled_by = "";
        else if(     onDown_SEL_TEXT                 ) handled_by = "LONG PRESS [NEW target_tool]";
        else if(     el4_has_t_target_tool_feed      ) {
            if     ( el6_pinned_target_tool_count < 1) handled_by = "A [target_tool] TO ADD FIRST TARGET";
            else if( el6_pinned_target_tool_count > 0) handled_by = el6_pinned_target_tool_count+" [target_tool] TO CHOOSE FROM";
        }
    }
    /*}}}*/
    let result = (handled_by != "");
if(log_this) log("%c onDown_3_TOOL_has_long_press_handler %c return "+result    +"%c"+handled_by
                 ,lbL+lf3                                ,lbC+(result ? lf4:lf8) ,lbR+lf3       );
    return result;
};
/*}}}*/
/*_ onDown_4_TOOL_MOVE {{{*/
let onDown_4_TOOL_MOVE = function(e)
{
/*{{{*/
let   caller = "onDown_4_TOOL_MOVE";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log("%c"+caller, lbF+lb4);
/*}}}*/
    /* MOVABLE [onWork_EL] [onWork_PANEL] {{{*/
    if(    onWork_SEEK_TOOL           ) return ""; /* SEEKING DOCUMENT */
    if(   !onWork_MOVABLE_CHILD
       && !onWork_MOVABLE_PANEL       ) return ""; /* NO MOVING TOOL */

    if( call_t_grid_IS_SIZED(caller)  ) return "";

    let consumed_by;
    /*}}}*/
    /* [PIN / UNPIN] .. [UNGROUP / REGROUP] {{{*/
    let mouse_down_on_a_push_pin = onWork_EL.classList.contains( CSS_PUSH_PIN );
if(log_this) log("...%c[mouse_down_on_a_push_pin: "+mouse_down_on_a_push_pin+"]%c .. %c[onWork_EL "   +get_n_lbl(onWork_EL   )+"]%c ...classList=["+onWork_EL.classList   +"]",lb4,lbA, lbF,lbA);

    if( mouse_down_on_a_push_pin )
    {
        consumed_by = "START TOOL_DRAG PUSH_PIN ["+get_n_lbl(onWork_PANEL)+"]";

        onDown_4_TOOL_DRAG_PUSH_PIN(e);
    }
    else {
        consumed_by = "START TOOL_DRAG PANEL ["+get_n_lbl(onWork_PANEL)+"]";
    }
    /*}}}*/
    /* (THEN) START DRAGGING PANEL {{{*/
/* SCROLL FREEZE .. (EMULATOR=OK .. TABLET=KO) {{{
    if(behavior_TOUCH_ELSE_DESKTOP) document.body.style.overflow = "hidden";
}}}*/
    /* DRAG [hotspot] INTO GUTTER .. f(seekzone in gutter) {{{*/
    if(t_gutter_is_XY_IN(h_x, h_y))
    {
        if( !has_el_class(seekzone, CSS_GUTTER) )
            t_gutter_drag_hotspot_IN(h_x, h_y);
    }
    /*}}}*/
    /* ADD MOVE LISTENERS {{{*/
    add_tool_pointermove_listener(caller);
    /*}}}*/
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onDown_4_TOOL_DRAG_PUSH_PIN {{{*/
let onDown_4_TOOL_DRAG_PUSH_PIN = function(e)
{
/*{{{*/
    let caller = "onDown_4_TOOL_DRAG_PUSH_PIN";
let log_this   = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) log("%c"+caller, lbH+lf4);
/*}}}*/
    /* PIN [pivot_PANEL] or UNPIN A PINNED PANEL {{{*/
    let pinned = onWork_PANEL.classList.contains(CSS_PINNED);

/*{{{
logBIG("...pivot_PANEL_changed_since_onDown=["+ pivot_PANEL_changed_since_onDown +"]")
logXXX("........................pivot_PANEL=["+ get_n_lbl(pivot_PANEL )          +"]");
logXXX(".......................onWork_PANEL=["+ get_n_lbl(onWork_PANEL)          +"]");
logXXX(".............................pinned=["+pinned                            +"]");
logXXX("..........................classList=["+ onWork_PANEL.classList           +"]");
}}}*/

    if(!pinned && pivot_PANEL_changed_since_onDown) return;
    /*}}}*/
    /* [pinned] TOGGLE {{{*/
if(log_this) console.dir(onWork_PANEL);

    /* PINNED / NOT PINNED */
    pinned = !pinned;
    t_set_CSS_PINNED(onWork_PANEL, pinned);

    /* STORE PANEL PINNED STATE */ /* (ONLY FOR TRANSCRIPT 1 AND 2) TODO... what about other panels */
    if(onWork_PANEL == transcript1) prop_set("transcript1_pinned", pinned);
    if(onWork_PANEL == transcript2) prop_set("transcript2_pinned", pinned);
    t_store_update_post(caller);

    /* FLASH UNPINNED PANELS .. f(PUSH_PIN) */
    t_flash_unpinned_panels(caller);

    /* PINNING PIVOT PANEL .. set last as the new pivot_PANEL */
    if(pinned && (onWork_PANEL == pivot_PANEL))
    {
        let last_panel_idx = t_get_TOOL_panels_last_selected_not_pinned_idx();
        t_set_pivot_PANEL(               (last_panel_idx > 0)
                            ? TOOL_panels[last_panel_idx]
                            : null
                         );
    }

    /* ADJUST POSITION */
    onWork_PANEL.style.transformOrigin = "98% 52% 0"; /* near push_pin */
    onWork_PANEL.style.position = pinned ? "fixed" : prop_get( TOOLS_SCROLL ) ? "absolute": "fixed";

    /*}}}*/
    /* 1/2 UNGROUP JUST-PINNED TOOL {{{*/
    if(pinned) {
if(log_this) log("UNGROUP JUST-PINNED TOOL", lb4);
        if( prop_get( TOOLS_SCROLL ) ) {

            let x = onWork_PANEL.offsetLeft - window.scrollX;
            let y = onWork_PANEL.offsetTop  - window.scrollY;

            onWork_PANEL.style.left = x+"px";
            onWork_PANEL.style.top  = y+"px";
        }
        onWork_PANEL.style.zIndex = ZINDEX_PINNED_PANEL_ZERO + onWork_PANEL.tool_rank;
/*{{{
t_log_panel_style_zIndex(onWork_PANEL, caller+" [UNGROUP JUST-PINNED TOOL]");
}}}*/
        t_set_onWork_EL(onWork_PANEL);
/* TODO (180313) removed while tuning t_touching_a_scrollable_panel
*/
    }
    /*}}}*/
    /* 2/2 REGROUP JUST-UNPINNED TOOL {{{*/
    else {
if( log_this) log("REGROUP UNPINNED TOOL", lb4);
if( log_this) t_log_event_status(caller, lf5);

        if( onWork_PANEL )
        {
            t_set_has_moved("REGROUP JUST-UNPINNED TOOL");
            add_el_class(dom_tools_html, CSS_REGROUPING);
/*{{{
for(let i=1; i < TOOL_panels.length; ++i) logBIG(i+" "+get_id_or_tag(TOOL_panels[i]), lf5)
}}}*/

            let work_panel_idx = TOOL_panels.indexOf( onWork_PANEL );
/*{{{
logBIG("...work_panel_idx=["+ work_panel_idx +"] ["+ get_id_or_tag(TOOL_panels[ work_panel_idx ]) +"]", lf2)
}}}*/

            let last_panel_idx = t_get_TOOL_panels_last_selected_not_pinned_idx();
/*{{{
logBIG("...last_panel_idx=["+ last_panel_idx +"] ["+ get_id_or_tag(TOOL_panels[ last_panel_idx ]) +"]", lf8)
}}}*/

            /* RE-ORDER PANELS .. (onWork_PANEL shifted to the end) */
            if(       work_panel_idx < last_panel_idx) {
/*{{{
logXXX("shifting onWork_PANEL to the end");
}}}*/
                while(work_panel_idx < last_panel_idx) TOOL_panels[ work_panel_idx ] = TOOL_panels[ ++work_panel_idx ];
                /*..................................*/ TOOL_panels[ last_panel_idx ] = onWork_PANEL;
/*{{{
for(let i=1; i < TOOL_panels.length; ++i) logBIG(i+" "+get_id_or_tag(TOOL_panels[i]), lf6)
}}}*/
            }

            t_set_spread_ratio_up_to_panel(onWork_PANEL);

            t_set_pivot_PANEL(onWork_PANEL);

            /* UPDATE REGROUPED PANELS LAYOUT */
            t_tool_set_top_xy(caller, topTool.x, topTool.y);
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ onDown_5_TOOL_SEEKER_TO_HIDE {{{*/
let onDown_5_TOOL_SEEKER_TO_HIDE = function(e)
{
/* {{{*/
let caller = "onDown_5_TOOL_SEEKER_TO_HIDE";
let log_this   = LOG_MAP.EV1_DOWN;

if( log_this) t_log_event_status(caller, lf5);
    if( !t_is_a_tool_el(onWork_EL) ) return "";
/*}}}*/

    let consumed_by = "ON TOOL ["+get_id_or_tag(onWork_EL)+"] .. SEEK TOOL ["+get_n_lbl(onWork_SEEK_TOOL)+"]";

    t_seeker_PU_hide("instant");

/*{{{
logXXX("consumed_by=["+consumed_by+"]");
}}}*/
    return consumed_by;
};
/*}}}*/
/* add_page_pointermove_listener */
/*_ onDown_6_DOC_SELECT_OR_SEEK {{{*/
let onDown_6_DOC_SELECT_OR_SEEK = function(e)
{
/* {{{*/
let   caller = "onDown_6_DOC_SELECT_OR_SEEK";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) t_log_event_status(caller, lf6);
    let consumed_by = "";
/*}}}*/
/*{{{
logBIG("SELECT WORD: t_seeker_PU_is_active()...................=["+ t_seeker_PU_is_active()                 +"]")
logBIG("...onWork_EL=["+get_id_or_tag(onWork_EL)+"]")
}}}*/
    /* SELECT WORD {{{*/
/*{{{
logXXX("SELECT WORD: anchor_freeze..............................=["+ prop_get( ANCHOR_FREEZE )                  +"]");
logXXX("SELECT WORD: t_preventDefault_has_been_called(caller)...=["+ t_preventDefault_has_been_called(caller) +"]");
logXXX("SELECT WORD: onWork_EL.tagName..........................=["+ onWork_EL.tagName                        +"]");
}}}*/
    if(!consumed_by && prop_get( ANCHOR_FREEZE ) && !t_preventDefault_has_been_called(caller))
    {
        consumed_by = "SELECT WORD";

        if(onWork_EL.tagName == "A")
        {
            consumed_by += " .. (ANCHOR FREEZED)";
            t_preventDefault(e, consumed_by);
        }
        else if(get_el_event_handler(onWork_EL, caller) != null)
        {
            consumed_by += ".. (EVENT HANDLER FREEZED)";
            t_preventDefault(e, consumed_by);
        }
        else {
            let msg     = caller+": SELECT WORD .. ("+get_n_lbl(onWork_EL)+" HAS NO EVENT HANDLER)";
            t_acceptBubble(e, msg);
        }
    }
    /*}}}*/
    /* SEEK TOOL {{{*/
    if(!consumed_by && onWork_SEEK_TOOL)
    {
        consumed_by += "SEEK TOOL ["+get_n_lbl(onWork_SEEK_TOOL)+"]";
        add_page_pointermove_listener( caller );

        add_long_press_listener("ON DOWN DOC TOOL");
    }
    /*}}}*/
if( log_this && consumed_by) logBIG(consumed_by, lf6);
    return consumed_by;
};
/*}}}*/
/*_ onDown_7_STALL .. handler .. is_pending {{{*/
/*{{{*/
const MOVE_ON_STALL_DURATION = 500;
let   move_on_stall_timer    = null;

/*}}}*/
let onDown_7_STALL = function()
{
/* {{{*/
let   caller = "onDown_7_STALL";
let log_this = LOG_MAP.T4_PIVOT || LOG_MAP.EV1_DOWN;

if( log_this) log("%c"+caller, lb7);
/*}}}*/
    if(move_on_stall_timer) clearTimeout(move_on_stall_timer);
    move_on_stall_timer   =   setTimeout(onDown_7_STALL_handler, MOVE_ON_STALL_DURATION);
};
let onDown_7_STALL_handler = function()
{
/*{{{
logXXX("...onDown_7_STALL_handler");
t_log_event_status("onDown_7_STALL: TODO .. why has_moved should be freezed when this is called-for ?");
}}}*/
    /* restart from there, after a stall interval */
    move_on_stall_timer = null;
/*{{{
    onDown_XY.x         = 0;
    onDown_XY.y         = 0;
}}}*/
    t_check_on_seeker_clear("onDown_7_STALL_handler");
};
let onDown_7_STALL_is_pending = function()
{
/*{{{
if(move_on_stall_timer != null) logXXX("onDown_7_STALL_is_pending");
}}}*/
    return (move_on_stall_timer != null);
};
let onDown_7_STALL_cancel  = function()
{
    move_on_stall_timer = null;
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

/*{{{
logXXX("t_touching_a_scrollable_panel("+get_n_lbl(onWork_PANEL)+" .. "+get_n_lbl(onWork_EL)+"): ...return "+result);
logXXX("...scrollHeight=["+onWork_PANEL.scrollHeight+"]");
logXXX("...offsetHeight=["+onWork_PANEL.offsetHeight+"]");
logXXX("...clientHeight=["+onWork_PANEL.clientHeight+"]");
}}}*/
    return result;
};
/*}}}*/
/*_ t_set_body_style_overflow_hidden {{{*/
let t_set_body_style_overflow_hidden = function(hidden)
{
    document.body.style.overflow = (hidden ? "hidden" : "");
/*
     if(onWork_PANEL) onWork_PANEL.style.overflow = (hidden ? "auto" : "hidden");
*/
};
/*}}}*/
/*}}}*/
/* MOVE */
/*{{{*/
/* t_page_pointermove_drag {{{*/
/*{{{*/
const SELECT_NEXT_DURATION = 200;

const MOVE_GRAB           = "MOVE_GRAB";
const MOVE_NUM_NEXT       = "MOVE_NUM_NEXT";
const MOVE_NUM_PREV       = "MOVE_NUM_PREV";
const MOVE_SLOT_NEXT      = "MOVE_SLOT_NEXT";
const MOVE_SLOT_PREV      = "MOVE_SLOT_PREV";

let mousemove_consumed_by = "";
let onMove_selection_removed;
/*}}}*/
/*_ t_page_pointermove_drag {{{*/
let t_page_pointermove_drag = function(e)
{
/* log {{{ */
let   caller =    "t_page_pointermove_drag";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

    if(!onWork_EL                                      ) return false; /* moving element .. none */
    if(!onWork_EL.id                                   ) return false; /* moving element .. unknown */
    if(!onWork_SEEK_TOOL && !(onWork_EL == target_tool)) return false; /* moving element .. not at document-level */
/*}}}*/
if(!log_this) log_this = onDown_CTRL;
    /* update onMoveDXY {{{*/
        get_onMoveDXY(e, caller);

    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                       let  log_css = lbF;
    if(!consumed_by) { consumed_by = onMove_0_MULTITOUCH       (e); log_css = lb9; }
    if(!consumed_by) { consumed_by = onMove_1_ON_COOLDOWN      (e); log_css = lb1; }
    if(!consumed_by) { consumed_by = onMove_4_MUST_MOVE_MORE   (e); log_css = lb2; }
    if(!consumed_by) { consumed_by = onMove_5_GRAB_SELECTION   (e); log_css = lb5; }
    if(!consumed_by) { consumed_by = onMove_6_GRAB_TARGET      (e); log_css = lb5; }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( log_this && (mousemove_consumed_by != consumed_by)) log("%c "+caller+": %c "+consumed_by, lb7, log_css);

    mousemove_consumed_by = consumed_by;
    /*}}}*/
};
/*}}}*/
/*_ set_seek_grab_done {{{*/
let     seek_grab_done = false;
let set_seek_grab_done= function(state)
{
    seek_grab_done = state;
};
/*}}}*/
/*}}}*/
/*  t_tool_pointermove_drag {{{*/
let t_tool_pointermove_drag = function(e)
{
if(e.ctrlKey) {logXXX("MOVE IGNORED .. f(e.ctrlKey)"); return; }
/*{{{*/
let   caller = "t_tool_pointermove_drag";
let log_this = LOG_MAP.EV2_MOVE;

/*{{{
if( log_this) t_log_event_status(caller, lf2);
}}}*/
/*}}}*/
    /* onMove_selection_removed {{{*/
    if( !onMove_selection_removed )
    {
        t_window_getSelection_removeAllRanges(caller);
        onMove_selection_removed = true;
    }
    /*}}}*/
    /* [onWork_EL] not selected {{{*/
    if(!onWork_EL) return;

    /* onWork_PANEL new CENTER */
    get_onMoveDXY(e, caller);

    let x = onDown_XY.x + onMoveDXY.x;
    let y = onDown_XY.y + onMoveDXY.y;

    /* indirect hotspot dragging */
    if(onWork_PANEL == hotspot)
    {
/*{{{
        if( t_seeker_PU_is_active() ) t_seeker_PU_hide("instant");
}}}*/

        x -= onDown_XY.x - onDown_PANEL_XY.x;
        y -= onDown_XY.y - onDown_PANEL_XY.y;
        if( hotspot.style.transform != "") {
            x -= onDown_XY.x - onDown_PANEL_XY.x;
            y -= onDown_XY.y - onDown_PANEL_XY.y;
        }
    }

    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                                       let log_css =  "";
    if(!consumed_by) { consumed_by = onMove_0_MULTITOUCH       (e           );     log_css = lb9; }
    if(!consumed_by) { consumed_by = onMove_1_TARGET_TOOL_SEEK (e           );     log_css = lb1; }
    if(!consumed_by) { consumed_by = onMove_2_TARGET_TOOL_MOVE (e,          );     log_css = lb2; }
    if(!consumed_by) { consumed_by = onMove_3_DIV_MAGNIFY      (e           );     log_css = lb3; }
    if(!consumed_by) { consumed_by = onMove_4_MUST_MOVE_MORE   (e           );     log_css = lb4; }
    if(!consumed_by) { consumed_by = onMove_5_GRAB_TOOL_PANEL  (e, x, y     );     log_css = lb5; }
    if(!consumed_by) { consumed_by = onMove_6_GRAB_TOOL_CHILD  (e, x, y     );     log_css = lb6; }
    if(!consumed_by) { consumed_by = "DRAGGING ["+get_n_lbl    (onWork_PANEL)+"]"; log_css = lb7;
        /*{{{*/
        if(onWork_PANEL) {
            /* FLASH UNPINNED PANELS */
            if(   !t_raise_pivot_PANEL_called_since_onDown(caller)
                && is_a_spread_drag()
            ) {
                t_flash_unpinned_panels(caller);
            }

            if(onWork_PANEL == hotspot)
            {
                t_tool_pointermove_drag_hotspot(x,y);
            }
            else {
                t_set_pivotXY( onMove_pivotXY.x + onMoveDXY.x
                    ,          onMove_pivotXY.y + onMoveDXY.y);
                t_tool_set_top_xy(caller, topTool.x, topTool.y);
            }
        }
        /*}}}*/
    }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* consumed_by {{{*/
if( log_this && (mousemove_consumed_by != consumed_by)) log("%c "+caller+": %c "+consumed_by, lb9, log_css);

    mousemove_consumed_by = consumed_by;
    /*}}}*/
};
/*}}}*/

/* HOTSPOT */
/*  t_tool_pointermove_drag_hotspot {{{*/
let t_tool_pointermove_drag_hotspot = function(x,y)
{
/*{{{*/
let   caller = "t_tool_pointermove_drag_hotspot";
let log_this = LOG_MAP.EV2_MOVE;

if( log_this) log(caller);
/*}}}*/
    t_tool_set_panel_xy(hotspot, x, y);
    /* DRAG [hotspot] INTO GUTTER .. SHOW [seekzone] .. [add_long_press_listener] {{{*/
/*{{{
logXXX("...is_long_press_pending()=["+ is_long_press_pending()                  +"]");
logXXX("....t_gutter_is_XY_IN(x,y)=["+ t_gutter_is_XY_IN(x,y)                 +"]");
}}}*/
    if(t_gutter_is_XY_IN(x, y))
    {
        if(!has_el_class(seekzone, CSS_GUTTER) )
            t_gutter_drag_hotspot_IN(x,y);

        add_long_press_listener("ON MOVE [hotspot] IN GUTTER");
    }
    /*}}}*/
    /* [hotspot] IS IN GUTTER {{{*/
    else if( has_el_class(seekzone, CSS_GUTTER) )
    {
        /* [hotspot] STILL IN GUTTER .. UPDATE IN-GUTTER-POSITION {{{*/
        if( t_gutter_is_XY_IN(x, y) ) {
            t_gutter_save_last_hotspot_GUTTER_XY(x,y);
        }
        /*}}}*/
        /* DRAG [hotspot] OFF GUTTER .. HIDE [seekzone] {{{*/
        else {
            if( log_this) log("%c OFF  GUTTER %c HIDE [seekzone]"
                              ,lbb+lbH+lf7 ,lbH                );

            del_el_class(seekzone, CSS_GUTTER);
            t_seekzone4_hide_handler();

            if(   has_moved && (onWork_PANEL == hotspot)
               && prop_get( EDIT_OR_STAGE )
              )
                prop_set(   EDIT_OR_STAGE, false); /* EDITING DONE */
        }
        /*}}}*/
    }
    /*}}}*/
    /* DRAG [pivspot] .. f( TOOLS_TRAP ) {{{*/
    let dragging_pivspot = prop_get( TOOLS_TRAP );
    if( dragging_pivspot )
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
    t_tool_set_top_xy(caller, x, y);
};
/*}}}*/
/* DOC & TOOL */
/*_ onMove_0_MULTITOUCH {{{*/
let onMove_0_MULTITOUCH = function(e)
{

    let    consumed_by = ((onDown_TOUCHES > 1) ? "MULTI-TOUCH x"+onDown_TOUCHES : "");
    return consumed_by;
};
/*}}}*/
/*_ onMove_1_ON_COOLDOWN {{{*/
let onMove_1_ON_COOLDOWN = function(e)
{
    let caller = "onMove_1_ON_COOLDOWN";

    let                                   consumed_by = "";
    if     ( scroll_not_done_yet()      ) consumed_by = "SCROLLING";
    else if( move_cooldown_is_pending() ) consumed_by = "MOVE COOLDOWN";

    if(consumed_by)
    {
        consumed_by += ".. (get_onDown_XY tracking)";

        get_onDown_XY(e, caller);
        onMoveDXY.x = 0;
        onMoveDXY.y = 0;
    }

/*{{{
logXXX(consumed_by);
}}}*/
    return consumed_by;
};
/*}}}*/
/* TOOL */
/*_ onMove_1_TARGET_TOOL_SEEK {{{*/
let onMove_1_TARGET_TOOL_SEEK = function(e)
{
/*{{{*/
let   caller = "onMove_1_TARGET_TOOL_SEEK";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

/*{{{
if( log_this) log("%c"+caller, lf1);
}}}*/
if(!mousemove_consumed_by && log_this) t_target_tool_log(target_tool, lf1);
/*{{{
if(               target_tool  != onWork_EL    ) return;
if(!has_el_class( target_tool, CSS_SEEK_TARGET)) return;
}}}*/
    let dismissed_by
        = (target_tool  != onDown_EL                     ) ?              "(target_tool != onDown_EL)"
        : (!has_el_class( target_tool, CSS_SEEK_TARGET)  ) ? "!has_el_class(target_tool  , CSS_SEEK_TARGET)"
        : ( has_el_class( target_tool, CSS_LIFTED     )  ) ? "!has_el_class(target_tool  , CSS_SEEK_TARGET)"
        : (               target_tool.clicked == "handle") ? "target_tool.clicked=["+target_tool.clicked+"]"
        :                                                  ""
    ;

    if(dismissed_by) {
if( log_this && !mousemove_consumed_by) log("%c"+caller+"%c dismissed_by %c"+dismissed_by, lf4, lbA, lf9);

        return "";
    }

if( log_this && !mousemove_consumed_by) t_log_event_status(caller, lf1);
if( log_this && !mousemove_consumed_by) t_target_tool_log(target_tool);

    let consumed_by = caller+" "+target_tool.id;
/*}}}*/
    /* CLEAR PAGE SELECTION {{{*/
    t_window_getSelection_removeAllRanges(caller);

    /*}}}*/
    /* MOVE [seeker_PU] on [target_tool] {{{*/
    consumed_by = caller+" "+target_tool.id;

    t_move_seeker_PU_on_target_tool(target_tool);
    /*}}}*/
if(!mousemove_consumed_by && log_this) log(caller+": consumed_by=["+consumed_by+"]");
    return consumed_by;
};
/*}}}*/
/*_ onMove_2_TARGET_TOOL_MOVE {{{*/
/*{{{*/
let target_tool_H;
let target_tool_W;

/*}}}*/
let onMove_2_TARGET_TOOL_MOVE = function(e)
{
/*{{{*/
let   caller = "onMove_2_TARGET_TOOL_MOVE";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

    if(onWork_EL   != target_tool) return false;

    log_this &= !mousemove_consumed_by; /* FIRST MOVE ONLY */

if( log_this) t_log_event_status(caller, lf2);
if( log_this) t_target_tool_log(target_tool, "MOVING", lf7);
/*}}}*/
    /* HIDE seeker_PU {{{*/
/*{{{
log_key_val_group( caller
                   , { seeker_PU_classList_contains_hiding : seeker_PU.classList.contains("hiding")
                     , seeker_PU_style_display             : seeker_PU.style.display
                   }, lf2, false);
}}}*/
    if( t_seeker_PU_is_active() )
    {
if(log_this) log("HIDE seeker_PU");

        t_seeker_PU_hide("instant");
    }
    /*}}}*/
    /* LIFTED PAD .. CYCLE POINTING DIR {{{*/
    let consumed_by;
    if((target_tool.clicked == "pad") && has_el_class(target_tool, CSS_LIFTED) )
    {
        /* ON COOLDOWN .. IGNORE MOUSE {{{*/
        consumed_by = target_tool.id +"."+CSS_LIFTED;

        if( move_cooldown_is_pending() )
        {
            get_onDown_XY(e, caller);
        }
        /*}}}*/
        /* COOLDOWN DONE .. TRACK MOUSE {{{*/
        else {
            t_check_has_moved(onMoveDXY.x, onMoveDXY.y, caller);
            if(has_moved)
            {
                let  dir = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? "RIGHT" : "LEFT")
                    :                                                        ((onMoveDXY.y > 0) ?  "DOWN" : "UP"  );
/*{{{
logBIG(dir, lf7);
}}}*/
                t_target_tool_cycle_dir_class(target_tool, dir);

                move_cooldown_start();
                onMoveDXY.x = 0;
                onMoveDXY.y = 0;
            }
        }
        /*}}}*/
    }
    /*}}}*/
    /* OR .. MOVE [target_tool] {{{*/
    if(!consumed_by) {
        /* LIFT TARGETS ON FIRST MOVE {{{*/
/*{{{
        if(!has_el_class(target_tool, CSS_LIFTED) )
            t_target_tool_set_lifted(true);
}}}*/

        /*}}}*/
        /* TARGET PAGE COORDINATES {{{*/
        let x = onDown_TOOL_XY.x + onMoveDXY.x;
        let y = onDown_TOOL_XY.y + onMoveDXY.y + target_tool_H/2;

        x = Math.max(x,                   onDown_SCROLL_XY.x      );
        x = Math.min(x,                   onDown_SCROLL_XY.x + w_W);
        y = Math.max(y - target_tool_H/2, onDown_SCROLL_XY.y      );
        y = Math.min(y - target_tool_H/2, onDown_SCROLL_XY.y + w_H);

        target_tool.style.left = x+"px";
        target_tool.style.top  = y+"px";

        /*}}}*/
        /* CLIP TO VIEWPORT {{{*/
        if(target_tool.style.position != "fixed")
        {
            x -= onDown_SCROLL_XY.x;
            y -= onDown_SCROLL_XY.y;
        }

        if(!target_tool_H) {
            target_tool_H = target_tool.offsetHeight;
            target_tool_W = target_tool.offsetWidth;
        }
        let x_min = target_tool_W; let x_max = w_W -   target_tool_W;
        let y_min = target_tool_H; let y_max = w_H - 2*target_tool_H;

        let nearing_T = (y <= y_min);
        let nearing_L = (x <= x_min);
        let nearing_B = (y >= y_max);
        let nearing_R = (x >= x_max);

        /*}}}*/
        /* FLIP POINTING DIRECTION NEAR BORDERS {{{*/
        if(nearing_T || nearing_L || nearing_B || nearing_R)
        {
            /* check current pointing direction {{{*/
            let pointing_X = target_tool.className.includes("point_");
            let pointing_N
                =   pointing_X
                && !has_el_class(target_tool, CSS_POINT_SE)
                && !has_el_class(target_tool, CSS_POINT_SW)
            ;
            let pointing_E
                =   pointing_X
                && !has_el_class(target_tool, CSS_POINT_SW)
                && !has_el_class(target_tool, CSS_POINT_WW)
                && !has_el_class(target_tool, CSS_POINT_NW)
            ;

            /*}}}*/
            /* [new direction] {{{*/
            let switching_N = !pointing_N && nearing_B;
            let switching_E = !pointing_E && nearing_L;
            let switching_S =  pointing_N && nearing_T;
            let switching_W =  pointing_E && nearing_R || !pointing_X; /* start from there */

            if(   switching_N
               || switching_E
               || switching_S
               || switching_W
              )
                t_set_target_tool_pointing(target_tool, pointing_E, pointing_N, switching_N, switching_S, switching_E, switching_W);

            /*}}}*/
        }
        /*}}}*/
        onMove_2_TARGET_TOOL_MOVE_ONGRID();
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onMove_2_TARGET_TOOL_MOVE_ONGRID {{{*/
/*{{{*/
let TARGET_PIN_RESOLUTION =  32;
let TARGET_PIN_DELAY      = 150;

let onMove_2_TARGET_TOOL_MOVE_ONGRID_timer;
/*}}}*/
/*_ onMove_2_TARGET_TOOL_MOVE_ONGRID {{{*/
let onMove_2_TARGET_TOOL_MOVE_ONGRID = function()
{
    if(onMove_2_TARGET_TOOL_MOVE_ONGRID_timer) clearTimeout(onMove_2_TARGET_TOOL_MOVE_ONGRID_timer);
    onMove_2_TARGET_TOOL_MOVE_ONGRID_timer =     setTimeout(onMove_2_TARGET_TOOL_MOVE_ONGRID_handler, TARGET_PIN_DELAY);
};
/*}}}*/
/*_ onMove_2_TARGET_TOOL_MOVE_ONGRID_handler {{{*/
let onMove_2_TARGET_TOOL_MOVE_ONGRID_handler = function()
{
    let x = target_tool.offsetLeft;
    let y = target_tool.offsetTop;

    x = TARGET_PIN_RESOLUTION * Math.floor((x + TARGET_PIN_RESOLUTION / 2) / TARGET_PIN_RESOLUTION);
    y = TARGET_PIN_RESOLUTION * Math.floor((y + TARGET_PIN_RESOLUTION / 2) / TARGET_PIN_RESOLUTION);

    target_tool.style.left = x+"px";
    target_tool.style.top  = y+"px";
};
/*}}}*/
/*}}}*/
/*_ onMove_3_DIV_MAGNIFY {{{*/
let onMove_3_DIV_MAGNIFY = function(e)
{
/* [!div_slot_containers] {{{*/
let   caller = "onMove_3_DIV_MAGNIFY";
    if( !div_slot_containers_displayed() ) return "";

    if(!div_slot_containers) return "";

    let consumed_by = get_id_or_tag(onWork_EL);
    t_preventDefault(e, caller+" "+consumed_by);
/*}}}*/
    /* ON COOLDOWN .. IGNORE MOUSE {{{*/
    if(move_cooldown_is_pending() )
    {
        get_onDown_XY(e, caller);
    }
    /*}}}*/
    /* COOLDOWN DONE .. TRACK MOUSE {{{*/
    else {
        t_check_has_moved(onMoveDXY.x, onMoveDXY.y, caller);
        if(has_moved) {
            /* HORIZONTAL .. button_PREV button_NEXT {{{*/
            let  dir = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ?    "PREV" : "NEXT"    )
                :                                                        ((onMoveDXY.y > 0) ? "ZOOM_IN" : "ZOOM_OUT");
/*{{{
logBIG(dir, lf7);
}}}*/

            if((dir == "PREV") || (dir == "NEXT"))
            {
                t_slot_container_set_fullscreen((dir == "PREV") ? button_PREV : button_NEXT);
            }
            /*}}}*/
            /* VERTICAL .. slot_container_magnified_0_to_9 {{{*/
            else {
                let value = (dir == "ZOOM_IN") ? 1 : -1;
                if( value ) {
                    value += slot_container_magnified_0_to_9;
                    value  = Math.max(value, 0);
                    value  = Math.min(value, 9);
                    if( slot_container_magnified_0_to_9 != value) {
                        slot_container_magnified_0_to_9  = value;
                        t_slot_containers_magnify();
                    }
                }
            }
            /*}}}*/
            /* MOVE COOLDOWN {{{*/
            move_cooldown_start();
            onMoveDXY.x = 0;
            onMoveDXY.y = 0;
            /*}}}*/
        }
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/* DOC & TOOL */
/*_ onMove_4_MUST_MOVE_MORE {{{*/
let onMove_4_MUST_MOVE_MORE = function(e)
{
/* [has_moved] {{{*/
let caller = "onMove_4_MUST_MOVE_MORE";

    if(has_moved && is_long_press_pending())
        del_long_press_listener(caller);

    if(has_moved) return "";
/*}}}*/
/*{{{*/
let log_this = (LOG_MAP.EV0_LISTEN || logging_EVENTS || LOG_MAP.EV2_MOVE);
if(!log_this) log_this = onDown_CTRL;

if( log_this && !mousemove_consumed_by) t_log_event_status(caller, lf4);
/*}}}*/
    /* NOT FOR [hotspot] .. NO LAG {{{*/
    if(   (onWork_PANEL == hotspot)
       && (onWork_EL    == hotring)
    ) {
        if( !t_gutter_is_XY_IN(onDown_HSPOT_XY.x, onDown_HSPOT_XY.y) )
        {
            t_set_has_moved(caller+": no lag for [hotring] when not IN GUTTER");

            del_el_class(pivspot, CSS_HIDDEN);

            return ""; /* HAS MOVED ENOUGH */
        }
    }
    /*}}}*/
    /* YES WHILE SEEKING [target_tool] {{{*/
    if(onWork_EL == target_tool)
    {
        let dxy = Math.abs(onMoveDXY.x + onMoveDXY.y);
        if(dxy >= 3*MOVED_ENOUGH) {
/*{{{
t_log_event_status(caller+" .. [target_tool] .. dxy=["+dxy+"]");
}}}*/
            return "";
        }
        else {
            return  "NOT ENOUGH WHILE SEEKING [target_tool]";
        }
    }
    /*}}}*/
    /* NOT FOR [fly_div] .. NO LAG {{{*/
    if(onWork_PANEL == fly_div)
    {
/*
        t_set_has_moved(caller+": no lag for fly_div");
*/

        return ""; /* HAS MOVED ENOUGH */
    }
    /*}}}*/
    /* DOWN STALL: DISCARD SMALL MOVES {{{*/
    if( onDown_7_STALL_is_pending() )
    {
        let has_not_moved  = "MOVE ON STALL WAKEUP DELAY";

        has_not_moved     += ".. (get_onDown_XY tracking)";
        get_onDown_XY(e, caller);
        onMoveDXY.x       = 0;
        onMoveDXY.y       = 0;

        return has_not_moved;
    }
    /*}}}*/
    /* [t_check_has_moved] {{{*/
    if(!has_moved)
    {
        t_check_has_moved(onMoveDXY.x, onMoveDXY.y, "MOVE CHECK");
    }
    /*}}}*/
    /* HAS MOVED .. CLEAR LONG_PRESS .. [onWork_MOVABLE_CHILD] {{{*/
    if( has_moved )
    {
        if( is_long_press_pending() )
            del_long_press_listener("HAS MOVED "+has_moved);

        if(onWork_MOVABLE_CHILD) onMove_4_GRAB_PANEL_CHILD();

        return ""; /* HAS MOVED ENOUGH */
    }
    /*}}}*/
    return "HAS NOT MOVED ENOUGH";
};
/*}}}*/
/*_ onMove_4_GRAB_PANEL_CHILD {{{*/
/*{{{*/
let mov_src_div;
let mov_dst_div;
/*}}}*/
let onMove_4_GRAB_PANEL_CHILD = function()
{
/*{{{*/
let   caller = "onMove_4_GRAB_PANEL_CHILD";
let log_this = (LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE);

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
    let parent_div  = get_el_parent_with_tag(onWork_EL,"DIV");
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
        || (parent_div == alt_bag)
    ;

    if(!parent_div_has_movable_child) return;
    /*}}}*/
    /* MOVE A BAG CHILD COPY */
    if(onWork_EL) t_clr_onWork_EL_pressed();
    onWork_EL = t_pat_bag9_grab_child( parent_div );

    t_set_onWork_EL_pressed();
};
/*}}}*/
/* PAGE SELECTION */
/*_ onMove_5_GRAB_SELECTION {{{*/
const WRAPSCAN = true;
let onMove_5_GRAB_SELECTION = function(e)
{
/*{{{*/
let   caller = "onMove_5_GRAB_SELECTION";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if( log_this) t_log_event_status(caller, lbH+lf5);
/*}}}*/
    /* REQUIRES CURRENT SLOT OR [last_highlight_slot] {{{*/
    let slot =  t_get_EL_slot(onWork_EL);
    if( slot <= 0) {
if( log_this) logBIG(caller+": slot=["+slot+"]", lbH+lf8);

/*{{{
        if( t_seeker_PU_is_active() ) t_seeker_PU_hide("instant");
}}}*/

        return;
    }
    if(!ccs[slot]) {
if( log_this) log(caller+": SLOT #"+slot+" NOT CURRENLTY INITIALIZED");
    if(t_preventDefault_caller) t_restoreDefault("NOT CURRENLTY INITIALIZED");
        return;
    }
    let consumed_by = "SCROLL TO [SLOT] [NUM]";
    /*}}}*/
    /* LONG PRESS dismiss {{{*/
    if( is_long_press_pending() )
        del_long_press_listener("PAGE DRAGGED");

    /*}}}*/
    /* GRAB SELECTION {{{*/
    if(!seek_grab_done)
    {
        if     (onWork_EL    == seeker_CU) { seek_grab_done  = true; }
        else if(onWork_PANEL == sel_bag  ) { seek_grab_done  = true; }
    }
/*{{{
log("%c _onWork_EL...........=["+ get_n_lbl(onWork_EL       ) +"]", lbb+lf5);
log("%c _onWork_PANEL........=["+ get_n_lbl(onWork_PANEL    ) +"]", lbb+lf5);
log("%c _onWork_SEEK_TOOL....=["+ get_n_lbl(onWork_SEEK_TOOL) +"]", lbb+lf5);
log("%c seek_grab_done.......=["+ seek_grab_done              +"]", lbb+lf5);
}}}*/
    /*}}}*/

    /* [dir] .. (horizontal..vertical) {{{*/
    let  dir = (!seek_grab_done                              ) ? (                    MOVE_GRAB                      )
        :      (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? MOVE_NUM_NEXT  : MOVE_NUM_PREV )
        :                                                        ((onMoveDXY.y > 0) ? MOVE_SLOT_NEXT : MOVE_SLOT_PREV)
    ;

    /*}}}*/
    /* [slot] [num] .. (onWork_EL) .. (dir) {{{*/
    let  num =  t_get_onWork_EL_num ();
    switch(dir) {
        /* (slot.num) .. GRAB onWork_EL {{{*/
        default:
        case MOVE_GRAB:        { seek_grab_done = true; } break;
        /*}}}*/
        /* ( num - 1) .. UP {{{*/
        case  MOVE_NUM_NEXT:   { num +=  1;             } break;

        /*}}}*/
        /* ( num + 1) .. DOWN {{{*/
        case    MOVE_NUM_PREV: { num += -1;             } break;
        /*}}}*/
        /* (slot - 1) .. LEFT {{{*/
        case  MOVE_SLOT_PREV:  {
            let to_slot  = t_get_used_slot_dir(slot, -1);

            if( to_slot != slot) {
                let to_num  = ccs[to_slot].num_selected;
                t_seek_slot_num_JUMP_FROM_TO(slot, num, to_slot, to_num);
                slot       =                            to_slot;
                num        =                                     to_num;
            }
        }
        break;
        /*}}}*/
        /* (slot + 1) .. RIGHT {{{*/
        case MOVE_SLOT_NEXT: {
            let to_slot  = t_get_used_slot_dir(slot, +1);

            if( to_slot != slot) {
                let to_num  = ccs[to_slot].num_selected;
                t_seek_slot_num_JUMP_FROM_TO(slot, num, to_slot, to_num);
                slot        =                           to_slot;
                num         =                                    to_num;
            }
        }
        break;
        /*}}}*/
    }
    /*}}}*/
    /* [num] .. (wrapscan) {{{*/
    if( WRAPSCAN ) {
        num = 1 + (ccs[slot].nodes.length + (num-1)) % ccs[slot].nodes.length;
    }
    else {
        num = Math.min(ccs[slot].nodes.length, num);
        num = Math.max(1                     , num);
    }

    let to_slot_num_EL = ccs[slot].nodes[num-1];
    /*}}}*/

    /* SCROLL TO [slot] [num] {{{*/
    let quick_move;
    if((slot >= 0) && (num > 0))
    {
        if(!t_seeker_PU_is_active())
            t_seeker_PU_show();

        let visible = scroll_to_slot_num(slot, num, onSeekXYL);
        t_seeker_move_on_slot_num(slot, num, visible);

        /* COOLDOWN BETWEEN JUMPS .. (SHIFT == sqeeze move cooldown) */
        quick_move = has_el_class(seeker_PU, CSS_SEEK4_ONSEEKER);
        if( quick_move ) move_cooldown_short();
        else             move_cooldown_start();
    }
    /*}}}*/
    /*  NEXT [to_slot_num_EL] {{{*/
    if( onWork_EL    != to_slot_num_EL) {

        t_set_onWork_EL(to_slot_num_EL, caller);
    }
    /*}}}*/
/*{{{*/
if( log_this)
{
    consumed_by = "SCROLL TO [slot "+slot+"] [num "+num+"]";

    let lfx
        = (dir == MOVE_GRAB     ) ? lf8
        : (dir == MOVE_NUM_PREV ) ? lf3
        : (dir == MOVE_SLOT_NEXT) ? lf4
        : (dir == MOVE_NUM_NEXT ) ? lf5
        : (dir == MOVE_SLOT_PREV) ? lf6
        :                           lf8;

    log_key_val(  caller
                , {              dir : dir
                    ,           slot : slot
                    ,            num : num
                    ,      onMoveDXY : onMoveDXY.x+" "+onMoveDXY.y
                    ,     quick_move : quick_move
                    , from_onWork_EL : get_n_lbl( onWork_EL      )
                    , to_slot_num_EL : get_n_lbl( to_slot_num_EL )
                    , onWork_PANEL   : get_n_lbl( onWork_PANEL   )
                }
                , lbb+lfx
               );

}
/*}}}*/
if( log_this) logBIG(caller+" "+consumed_by, lbH+lf5);
    return consumed_by;
};
/*}}}*/
/* PAGE TARGET */
/*_ onMove_6_GRAB_TARGET {{{*/
let onMove_6_GRAB_TARGET = function(e)
{
/*{{{*/
let   caller = "onMove_6_GRAB_TARGET";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if(log_this) {
    t_log_event_status(caller, lf6);
    log_key_val( caller
                 , {   target_tool        : get_n_lbl(target_tool)
                     , onSeekXYL          : onSeekXYL
                     , CSS_SEEK2_ONRESUME : has_el_class(seeker_PU, CSS_SEEK2_ONRESUME)
                     , CSS_SEEK5_ONTARGET : has_el_class(seeker_PU, CSS_SEEK5_ONTARGET)
                 }, lf6
               );
}
/*}}}*/
    /* REQUIRES [target_tool] and [seek5_onTarget or seek2_onResume] {{{*/
    if(        !target_tool
        || (   !(onSeekXYL.label = CSS_SEEK5_ONTARGET)
            && !(onSeekXYL.label = CSS_SEEK2_ONRESUME))
      ) {

        return;
    }
    let consumed_by = onSeekXYL.label;
    /*}}}*/
/*{{{
logXXX(caller+": .. onMoveDXY=["+onMoveDXY.x+" "+onMoveDXY.y+"]");
}}}*/
    /* [dir] .. (horizontal..vertical) {{{*/
    let  dir = (!seek_grab_done                              ) ? (                    MOVE_GRAB                      )
        :      (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? MOVE_NUM_NEXT  : MOVE_NUM_PREV )
        :                                                        ((onMoveDXY.y > 0) ? MOVE_SLOT_NEXT : MOVE_SLOT_PREV)
    ;
    ;

    /*}}}*/
    /* SCROLL TO NEXT TARGET .. (dir) {{{*/
    switch(dir)
    {
    default:
    case MOVE_GRAB     : { t_seek_next_target_tool(target_tool, 0); seek_grab_done = true; } break;
    case MOVE_NUM_NEXT : { t_seek_next_target_tool(target_tool,+1);                        } break;
    case MOVE_NUM_PREV : { t_seek_next_target_tool(target_tool,-1);                        } break;
    case MOVE_SLOT_PREV: { t_seek_next_target_tool(target_tool,-1);                        } break;
    case MOVE_SLOT_NEXT: { t_seek_next_target_tool(target_tool,+1);                        } break;
    }

    /* COOLDOWN BETWEEN JUMPS .. (SHIFT == sqeeze move cooldown) */
    let quick_move
        =  has_el_class(seeker_PU, CSS_SEEK4_ONSEEKER)
        || prop_get(TOOLS_EXTRAS);

    if( quick_move ) move_cooldown_short();
    else             move_cooldown_start();
/*}}}*/
/*{{{*/
if( log_this)
{
    let lfx
        = (dir == MOVE_GRAB     ) ? lf2
        : (dir == MOVE_NUM_PREV ) ? lf3
        : (dir == MOVE_SLOT_NEXT) ? lf4
        : (dir == MOVE_NUM_NEXT ) ? lf5
        : (dir == MOVE_SLOT_PREV) ? lf6
        :                           lf8;

    log_key_val(  caller
                , {              dir : dir
                    ,      onMoveDXY : onMoveDXY.x+" "+onMoveDXY.y
                    ,     quick_move : quick_move
                    ,    target_tool : get_n_lbl( target_tool )
                }
                , lbb+lfx
               );

    consumed_by += " ["+get_n_lbl(target_tool)+"]";
}
/*}}}*/
if(log_this) log("%c"+consumed_by, lbb+lbH+lf6);
    return consumed_by;
};
/*}}}*/
/* TOOL PANEL */
/*_ onMove_5_GRAB_TOOL_PANEL {{{*/
let onMove_5_GRAB_TOOL_PANEL = function(e,x,y)
{
/*{{{*/
let   caller = "onMove_5_GRAB_TOOL_PANEL";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if( onWork_MOVABLE_CHILD) return "";
if(!onWork_PANEL        ) return "";

/*{{{
if( log_this) log("%c"+caller, lbH+lf5);
}}}*/
let consumed_by = "";
/*}}}*/
    /* PANELS WITH SCROLLABLE CONTENT {{{*/
    if(!consumed_by && t_touching_a_scrollable_panel())
    {
        if( !has_el_class(onWork_PANEL, CSS_EMPTY) )
            consumed_by = "SCROLLABLE PANEL ["+get_n_lbl(onWork_PANEL)+"]";

    }
    /*}}}*/
    /* MOVE A PINNED PANEL {{{*/
    if(!consumed_by && onWork_PANEL.classList.contains(CSS_PINNED))
    {
        onMove_5_TOOL_PANEL_PINNED(x, y);
        consumed_by = "TOOL PINNED ["+get_n_lbl(onWork_PANEL)+"]";
    }
    /*}}}*/
    /* UNHIDE PANELS [pivspot] .. f(!pinned) {{{*/
    if(!consumed_by && !onWork_PANEL.classList.contains(CSS_PINNED))
    {
        let moving_a_panel
            =                               onWork_PANEL
            &&                             !onWork_MOVABLE_CHILD
            && !is_el_or_child_of_parent_el(onWork_EL, fly_div)
        ;

        if( moving_a_panel ) del_el_class(pivspot, CSS_HIDDEN);
    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*_ onMove_5_TOOL_PANEL_PINNED {{{*/
let onMove_5_TOOL_PANEL_PINNED = function(x,y)
{
    /* {{{*/
    let caller = "onMove_5_TOOL_PANEL_PINNED";

    /*}}}*/
    /* dismiss long press timer on big move {{{*/
    if( is_long_press_pending() )
    {
        if( t_check_big_moved(onMoveDXY.x, onMoveDXY.y, caller) )
            del_long_press_listener("MOVE PINNED");

    }
    /*}}}*/
    /* KEEPING MOVED [fly_div] PANEL ON SCREEN {{{*/
    if( is_el_or_child_of_parent_el(onWork_EL, fly_div) )
    {
        if(t_log_clr_innerHTML_is_pending())
            t_fly_clr_cancel();

        t_add_closepin_on_panel( fly_div );
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

    /*}}}*/
/*{{{
t_spread_log(onWork_PANEL);
}}}*/
};
/*}}}*/
/* TOOL CHILD */
/*_ onMove_6_GRAB_TOOL_CHILD {{{*/
let onMove_6_GRAB_TOOL_CHILD = function(e,x,y)
{
/* [onWork_MOVABLE_CHILD] {{{*/
if(!onWork_MOVABLE_CHILD) return "";

let   caller = "onMove_6_GRAB_TOOL_CHILD";
let log_this = (LOG_MAP.EV0_LISTEN || logging_EVENTS|| LOG_MAP.EV2_MOVE);

if(log_this) t_log_event_status(caller, lf6);
/*}}}*/
    let consumed_by = "MOVING ["+get_n_lbl(onWork_EL)+"]";
    /* D_XY [onDown_XY .. XY] {{{*/
    x -= onDown_XY.x;
    y -= onDown_XY.y;
    y -= onWork_EL.offsetHeight * (behavior_TOUCH_ELSE_DESKTOP ? 1.5 : 0.5); /* TODO CONFIRM */

    /*}}}*/
    /* CLIP [within parent area] {{{*/
    let   v_W = onWork_EL.parentElement.offsetWidth ;
    let   v_H = onWork_EL.parentElement.offsetHeight;
    let   e_W = onWork_EL              .offsetWidth ;
    let   e_H = onWork_EL              .offsetHeight;

    let x_min = 0 - onDown_TOOL_XY.x;
    let x_max = v_W - e_W;
    let y_min = 0 - onDown_TOOL_XY.y;
    let y_max = v_H - e_H;

    if(onWork_PANEL_magnified) {
        x /= 2;
        y /= 2;
    }

    x = (x < x_min) ? x_min : (x > x_max) ? x_max : x;
    y = (y < y_min) ? y_min : (y > y_max) ? y_max : y;
    /*}}}*/
    /* MOVE [mov_div] {{{*/
    if( t_pat_bag9_grab_item_is_mov_div() )
    {
        t_pat_bag9_grab_item_mov_div_xy(e, x, y);

    }
    /*}}}*/
    /* OR.. [onWork_MOVABLE_CHILD] {{{*/
    else {
        onWork_EL.style.left = x +"px";
        onWork_EL.style.top  = y +"px";

    }
    /*}}}*/
    return consumed_by;
};
/*}}}*/
/*}}}*/
/* LONG_PRESS */
/*{{{*/
/*{{{*/
const LONG_PRESS_ARM     = "long_press_arm";
let LONG_PRESS_ARM_DELAY = CLICK_DURATION;
let LONG_PRESS_DELAY     = CLICK_DURATION * 2;

let long_press_caller;
let long_press_timer;
let long_press_arm_timer;
/*}}}*/
/*  add_long_press_listener .. (call birst debouncer) {{{*/
let add_long_press_listener = function(_caller="setTimeout")
{
/*{{{*/
let   caller = "add_long_press_listener";
let log_this = LOG_MAP.EV4_LONG_PRESS;

if( log_this) log("%c"+caller+" %c "+_caller, lbL+lf4, lbR+lf0);
/*}}}*/

    /* Remember [LAST LONG PRESS CALLER] */
    long_press_caller = _caller;

    /* Clear pending [LONG PRESS TIMER] */
    if(long_press_timer) clearTimeout(long_press_timer);
    /*.............................*/ long_press_timer = null;

    /* Replace [LONG PRESS ARM TIMER] */
    if(long_press_arm_timer) clearTimeout(long_press_arm_timer);
    long_press_arm_timer =     setTimeout(long_press_arm_handler, LONG_PRESS_ARM_DELAY);
};
/*}}}*/
/* rearm_long_press_listener {{{*/
/*{{{*/
const REARM_LONG_PRESS_DELAY = 500;
let   rearm_long_press_timer;

/*}}}*/
let rearm_long_press_listener = function()
{
/*{{{*/
let   caller = "rearm_long_press_listener";
let log_this = logging_EVENTS;

if( log_this) log(caller);
/*}}}*/

    if( rearm_long_press_timer ) clearTimeout( rearm_long_press_timer );
    rearm_long_press_timer = null;

    if(   has_el_class(seeker_PU, CSS_SEEKER_PU2_LOOK_UP   )
       || has_el_class(seeker_PU, CSS_SEEKER_PU3_LOOK_RIGHT)
       || has_el_class(seeker_PU, CSS_SEEKER_PU4_LOOK_DOWN )
       || has_el_class(seeker_PU, CSS_SEEKER_PU5_LOOK_LEFT )
      )
        rearm_long_press_timer =  setTimeout(add_long_press_listener, REARM_LONG_PRESS_DELAY);
};
 /*}}}*/
/*_ long_press_arm_handler {{{*/
let long_press_arm_handler = function()
{
/*{{{*/
let   caller = "long_press_arm_handler";
let log_this = LOG_MAP.EV4_LONG_PRESS;

/*}}}*/

    /* [LONG PRESS ARM DONE] */
    long_press_arm_timer = null;

    /* SHOW PENDING [LONG PRESS ARM SCHEDULED] */
    if( t_seeker_PU_is_active() )
    {
        t_seeker_PU_show();
        add_el_class(seeker_CU, LONG_PRESS_ARM);
    }
    /* Replace [LONG PRESS TIMER] */
    if(long_press_timer) clearTimeout(long_press_timer);
    long_press_timer     = setTimeout(long_press_handler, LONG_PRESS_DELAY);

    /* TRANSCRIPT LOG {{{*/
if( log_this) log("%c"+caller+": ADDING LONG PRESS LISTENER ON %c"+t_get_onWork_tool_label(), lbH+lf4, lbH+lf3);

if( log_this)
    t_log_transcript_event_top("<span style='color:yellow;'>"+ SYMBOL_BLACK_CIRCLE +"</span>"
        +                      "long_press_arm_handler .. CALLED BY <em>"+ long_press_caller +"</em>");
    /*}}}*/
};
/*}}}*/
/*_ long_press_handler {{{*/
let long_press_handler  = function()
{
/* {{{*/
let   caller = "long_press_handler";
let log_this = LOG_MAP.EV4_LONG_PRESS;

/*}}}*/
    /* [LONG PRESS DONE] */
    long_press_timer = null;

    /* HIDE PENDING [LONG PRESS ARM SCHEDULED] */
    del_el_class(seeker_CU, LONG_PRESS_ARM);

    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                               let consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onLong_press1_HOTSPOT_IN_GUTTER   (); consumed_by_css = lf1; }
    if(!consumed_by) { consumed_by = onLong_press2_TOOLS_ON_GRID       (); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onLong_press3_TOOL_EL_CB          (); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onLong_press4_TOOL_PANEL_MAGNIFY  (); consumed_by_css = lf4; }
    if(!consumed_by) { consumed_by = onLong_press5_HOTSPOT_PANEL_UNHIDE(); consumed_by_css = lf5; }
    if(!consumed_by) { consumed_by = onLong_press6_SLOT_CONTAINERS     (); consumed_by_css = lf6; }
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* NO LONG PRESS ACTION FOR [onWork_EL]  {{{*/
    if(!consumed_by)
    {
        consumed_by = "NO LONG PRESS ACTION FOR ["+get_n_lbl(onWork_EL)+"] target_tool=["+get_n_lbl(target_tool)+"]";

/*{{{
log("%c "+caller+" %c *** "+consumed_by+" ***", lbb+lbL+lf9, lbb+lbR+lf2);
t_log_event_status(caller+": "+consumed_by);
}}}*/
    }
    /*}}}*/
    /* ALL DONE {{{*/
    if( logging_something() )
        t_log_transcript_event_bot( "<span style='color:white;'>"+SYMBOL_CHECK_MARK+"</span>"
            +                      " long press <em>"+ consumed_by +"</em>"
        );

    arm_long_presss_timer = null; /* done */

    long_press_timer      = null; /* nearly done */

    /*}}}*/
if( log_this) t_log_event_status(caller+":"+LF+SYMBOL_RIGHT_ARROW+" "+consumed_by, lbb+consumed_by_css);
};
/*}}}*/

/*_ onLong_press1_HOTSPOT_IN_GUTTER {{{*/
let onLong_press1_HOTSPOT_IN_GUTTER = function()
{
/* {{{*/
let   caller = "onLong_press1_HOTSPOT_IN_GUTTER";

/*}}}*/

    if(  onWork_PANEL != hotspot ) return "";
    if(  onWork_EL    != hotring ) return "";
    if(!t_gutter_is_hotspot_IN() ) return "";

    prop_toggle( EDIT_OR_STAGE ); /* START EDITING */

    return "NODE HIDING: HOTSPOT DRAGGED IN GUTTER";
};
/*}}}*/
/*_ onLong_press2_TOOLS_ON_GRID {{{*/
let onLong_press2_TOOLS_ON_GRID = function()
{
/* {{{*/
let   caller = "onLong_press2_TOOLS_ON_GRID";

/*}}}*/
    if( !dimm_mask_displayed() ) return "";

    if( call_t_grid_IS_ON_GRID(caller) )
    {
        t_move_TOOLS_OFF_GRID(caller);

        return "MOVING TOOLS OFF GRID";
    }

    if( has_el_class(pat_bag, CSS_OPEN_BAG) )
    {
        t_pat_bag_close(caller,caller);

        dimm_stop(caller);

        return "CLOSING [pat_bag]";
    }

    return "";
};
/*}}}*/
/* XXX target_tool */
/*_ onLong_press3_TOOL_EL_CB {{{*/
let onLong_press3_TOOL_EL_CB = function()
{
/*{{{*/
let   caller = "onLong_press3_TOOL_EL_CB";
let log_this = LOG_MAP.EV4_LONG_PRESS;

if( log_this) t_log_event_status(caller, lf3);

    let el_slot                  = (t_get_EL_slot(onWork_EL) > 0);
    let current_sel_text         = t_get_current_sel_text();

    let target_tool_seeking      = (target_tool && !has_el_class( target_tool, CSS_SEEK_TARGET));
    let pinned_target_tool_count = t_get_pinned_target_tool_count();

if( log_this) {
    log_key_val( caller
                 , {   el_slot                  : el_slot
                     , current_sel_text         : ellipsis_short(current_sel_text)
                     , onDown_SEL_TEXT          : ellipsis_short(onDown_SEL_TEXT )
                     , target_tool_seeking      : target_tool_seeking
                     , pinned_target_tool_count : pinned_target_tool_count
                 }, lf3);
}
    if(el_slot) return;
/*}}}*/
    /* LONG PRESS ON [pat_bag.bag_rot] {{{*/
    let consumed_by = "";
    if(onWork_EL == bag_rot)
    {
        consumed_by = "TODO: HANDLE LONG PRESS ON "+get_id_or_tag(onWork_EL);
/*{{{ FIXME .. FLYING SEEKER_CD DOES NOT LOOK GREAT .. (.. AND IT IS DOC-POSITIONNED-TOOL NOT A VIEWPORT-FIXED ONE)
        seeker_CD.innerHTML = "<div><pre>"+ bag_rot.title +"</pre></div>";
        t_seeker_PD_show();
        let xy = get_el_xy(pat_bag, caller);
        let  x = onDown_SCROLL_XY.x + xy.x + pat_bag.offsetWidth  / 2;
        let  y = onDown_SCROLL_XY.y + xy.y + pat_bag.offsetHeight + BOX_MARGIN;
logXXX("...bag_rot=["+xy.x+"  "+xy.y+"] .. xy=["+x+" "+y+"]");
        t_seeker_move_below_XY(seeker_PD, x, y);
        del_el_class(seeker_PD, CSS_ON_HIDEN_NODE);
}}}*/

/* FIXME .. should be visible without this hack with fly_log_checked ... */
let was_fly_log_checked = fly_log_checked;
        fly_log_checked = true;
        t_fly("<pre class='cc7'>"+ bag_rot.title +"</pre>");
        fly_log_checked = was_fly_log_checked;
    }
    /*}}}*/
    /* LONG PRESS ON [dimm_mask] .. t_slot_container_set_fullscreen {{{*/
    else if( is_el_or_child_of_parent_el(onWork_EL,  dimm_mask) )
    {
        consumed_by = "LONG PRESS ON SLOT CONTAINER .. [t_slot_container_set_fullscreen]";

        t_slot_container_set_fullscreen( onWork_EL );
    }
    /*}}}*/

else if( is_a_DOM_LOAD_featured_function("t_target_tool_feed") )
{
    /* LONG PRESS ON [target_tool] .. PASTE OR RESTORE {{{*/
    if(onWork_SEEK_TOOL && (onWork_SEEK_TOOL == target_tool))
    {
        consumed_by = "LONG PRESS ON  [target_tool] .. TO PASTE SEL_TEXT";
if(log_this) log("%c"+consumed_by, lbb+lbH+lf3);

        t_target_tool_feed(target_tool);
    }
     /*}}}*/
    /* LONG PRESS ON [DOC PAGE] .. PASTE TO TARGET {{{*/
    else if(current_sel_text || onDown_SEL_TEXT)
    {
        if(pinned_target_tool_count < TARGET_MAX)
        {
            consumed_by = onLong_press3_TARGET_TOOL_CB();

        }
    }
    /*}}}*/
    /* LONG PRESS ON [DOC PAGE] .. TARGET NOT SEEKING .. CHOOSE PINNED TARGET {{{*/
    else if(!pinned_target_tool_count && (pinned_target_tool_count > 0))
    {
        consumed_by = "LONG PRESS [OFF target_tool] .. x"+pinned_target_tool_count+" PINNED TO CHOOSE FROM";
if(log_this) log("%c"+consumed_by, lbb+lbH+lf3);

        t_target_tool_feed();
    }
    /*}}}*/
    /* LONG PRESS ON [DOC PAGE] .. [NO onWork_PANEL] .. ADD FIRST TARGET {{{*/
    else if(!onWork_PANEL)
    {
        consumed_by = "LONG PRESS [OFF target_tool] .. ADD FIRST EMPTY TARGET";
if(log_this) log("%c"+consumed_by, lbb+lbH+lf3);

        t_target_tool_new_XY_SEL_TEXT(onDown_XY.x, onDown_XY.y, SYMBOL_DIRECT_HIT);
    }
    /*}}}*/
}
if(log_this && !consumed_by) logBIG(caller+": NOT CONSUMED", lf8);
    return consumed_by;
};
/*}}}*/
/*_ onLong_press3_TARGET_TOOL_CB {{{*/
let onLong_press3_TARGET_TOOL_CB = function()
{
/*{{{*/
let   caller = "onLong_press3_TARGET_TOOL_CB";
let log_this = LOG_MAP.EV4_LONG_PRESS;

/*}}}*/
    /* SELECTION IS CHANGING .. WAIT FOR ANOTHER LONG_PRESS_DELAY {{{*/
    let consumed_by = "";
    let current_sel_text = t_get_current_sel_text();
    if( current_sel_text && onDown_SEL_TEXT && (current_sel_text != onDown_SEL_TEXT))
    {
        consumed_by      = "LONG PRESS CANCLED BY CHANGING SELECTION:"+LF+" FROM ["+onDown_SEL_TEXT+"]"+LF+"...TO ["+current_sel_text+"]";
if(log_this) log("%c"+consumed_by,     lbH+lf8);

/*{{{
            onDown_SEL_TEXT  = current_sel_text;
            long_press_timer = setTimeout(long_press_handler, LONG_PRESS_DELAY);
            pulse_id( hotspot );
            t_seekzone2_add_dblclick();
 t_seekzone1_show(SYMBOL_BLACK_CIRCLE);
            t_seekzone3_add_longpress();
}}}*/
    }
    /*}}}*/
    /* SELECTION READY .. CONSUME SEL_TEXT TO ADD NEW TARGET {{{*/
    else
    {
        if(onUp_MS > onDown_MS)
        {
if(log_this) logBIG("MOUSE BUTTON RELEASED");

        }
        else if(!onDown_SEL_TEXT)
        {
if(log_this) logBIG("(!onDown_SEL_TEXT)");
        }
        else {
            consumed_by      = "LONG PRESS [OFF target_tool] .. ADD NEW WITH onDown_SEL_TEXT=["+onDown_SEL_TEXT+"]";
if(log_this) log("%c"+consumed_by, lbb+lbH+lf3);

            t_target_tool_new_XY_SEL_TEXT(onDown_XY.x, onDown_XY.y, onDown_SEL_TEXT);

            /* consume selection */
            t_window_getSelection_removeAllRanges(caller);
            onDown_SEL_TEXT = "";
        }
    }
    /*}}}*/
if(log_this && !consumed_by) logBIG(caller+": NOT CONSUMED", lf8);
    return consumed_by;
};
/*}}}*/
/*_ onLong_press4_TOOL_PANEL_MAGNIFY {{{*/
let onLong_press4_TOOL_PANEL_MAGNIFY = function()
{
/* {{{*/
let   caller = "onLong_press4_TOOL_PANEL_MAGNIFY";

/*}}}*/
    /* MAGNIFY [fly_div] {{{*/
    if( is_el_or_child_of_parent_el(onWork_EL, fly_div) )
    {
        t_fly_div_magnified_toggle();

        return "FLOAT LOG MAGNIFICATION";
    }
    /*}}}*/
    /* NO [onWork_PANEL] SELETED {{{*/
    if( !onWork_PANEL ) return "";

    /*}}}*/
    /* DRAG [pivot_PANEL] AND SYNC PANELS MAGNIFICATION {{{*/
    if( is_a_spread_drag() )
    {
        if(onWork_PANEL == pivot_PANEL) {
            t_toggle_pivot_PANEL_magnified( prop_get( PIVOT_MAGNIFIED ) );
            return "SETTING DRAGGED PIVOT PANEL RE-MAGNIFICATION";
        }
    }
    /*}}}*/
    /* MAGNIFY ANOTHER PANEL {{{*/
    else if(onWork_PANEL != hotspot)
    {
        if(onWork_PANEL == pivot_PANEL) {
            t_toggle_pivot_PANEL_magnified();
            return "TOGGLED PIVOT PANEL MAGNIFICATION";
        }
        else
        {
            t_toggle_panel_magnified(  onWork_PANEL , "toggle");
            return "TOGGLED "+get_n_lbl(onWork_PANEL)+" MAGNIFICATION";
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ onLong_press5_HOTSPOT_PANEL_UNHIDE {{{*/
let onLong_press5_HOTSPOT_PANEL_UNHIDE = function()
{
/* {{{*/
let   caller = "onLong_press5_HOTSPOT_PANEL_UNHIDE";

/*}}}*/

    /* [has_moved] normal check .. (standard check was too sensitive due to no-lag-constraint) */
    t_clr_has_moved();
    t_check_has_moved(onMoveDXY.x, onMoveDXY.y, caller);

    if(  onWork_PANEL != hotspot ) return "";
    if(  onWork_EL    != hotring ) return "";
    if(  has_moved               ) return "";

    if(!t_raise_pivot_PANEL_called_since_onDown(caller))
        t_flash_unpinned_panels(caller);

    return "UNHIDING PANELS";
};
/*}}}*/
/*_ onLong_press6_SLOT_CONTAINERS {{{*/
let onLong_press6_SLOT_CONTAINERS = function()
{
/* {{{*/
let   caller = "onLong_press6_SLOT_CONTAINERS";

/*}}}*/

    let      slot = t_get_EL_slot(onWork_EL);
    if(     !slot  ) return;
    if(!ccs[ slot] ) return;

    /* SET PARAGRAPH TO OUTLINE */
    ccs[slot].num_selected = t_get_onWork_EL_num();

    /* FILL [dimm_mask] WITH [div_slot_containers] */
    if( ccs[slot] )
        t_slot_containers_display(slot);

    return "SHOWING SLOT ["+slot+"] CONTAINERS";
};
/*}}}*/
/*  is_long_press_pending {{{*/
let is_long_press_pending = function()
{
    let result
            =  (long_press_arm_timer != null)
            || (long_press_timer     != null)
    ;

/*{{{
log_key_val(   "is_long_press_pending"
            , {              onWork_EL : get_n_lbl(onWork_EL)
                ,     long_press_timer : long_press_timer
                , long_press_arm_timer : long_press_arm_timer
                ,               result : result
            }
            , lbb+lf4)

}}}*/
    return result;
};
/*}}}*/
/*  del_long_press_listener {{{*/
let del_long_press_listener = function(_caller)
{
/*{{{*/
let   caller = "del_long_press_listener";
let log_this = !onDown_SHIFT && (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.EV2_MOVE);

if( log_this) t_log_event_status(caller+LF+".. CALLED BY "+_caller, lf4);
/*}}}*/
    /* [hotspot] IN GUTTER .. PRESERVE long_press_listener {{{*/
    if(  (onWork_PANEL == hotspot)
       && t_gutter_is_XY_IN(h_x, h_y))
    {
        if(_caller != MOUSEUP) {
if( log_this) log("%c IN GUTTER "+_caller+" (onWork_EL != null) .. PRESERVE long_press_listener", lbb+lbH+lf7);
            return;
        }
        else {
if( log_this) log("%c IN GUTTER "+_caller+" (onWork_EL == null) .. DELETING long_press_listener", lbb+lbH+lf7);
        }

    }
    /*}}}*/
    /* WAS PRELOADING .. [long_press_arm_timer] {{{*/
    if(long_press_arm_timer)
    {
        clearTimeout( long_press_arm_timer );
        /*.........*/ long_press_arm_timer = null;

        /* HIDE PENDING [LONG PRESS ARM SCHEDULED] */
        del_el_class(seeker_CU, LONG_PRESS_ARM);

        if(long_press_timer == null) {
            if( logging_something() )
                t_log_transcript_event_bot( "<span style='color:white;'>x</span>"
                    +                      " <span style='text-decoration:line-through;'>long press</span> disarmed"
                    +                      " <em>"+ _caller +"</em>"
                );
if( log_this) log("LONG PRESS DISARMED BY: "+ _caller);

            return;
        }
    }
    /*}}}*/
    /* WAS PENDING .. [long_press_timer] {{{*/
    if(long_press_timer)
    {
        clearTimeout( long_press_timer );
        /*.........*/ long_press_timer = null; /* done */

        if( logging_something() )
            t_log_transcript_event_bot( "<span style='color:white;'>"+SYMBOL_HEAVY_BALLOT+"</span>"
                +                      " <span style='text-decoration:line-through;'>LONG PRESS</span> CANCELED: "
                +                      " <em>"+ _caller +"</em>"
            );
if( log_this) t_fly("LONG PRESS CANCELED: "+_caller);

        if(onWork_PANEL == null) return;
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* UP */
/*{{{*/
/* t_pointerup_listener {{{*/
/*{{{*/
const MOUSEUP_DBL_CLICK  = "DBL_CLICK";
const MOUSEUP_CLICK      = "CLICK";
const MOUSEUP_LONG_CLICK = "LONG_CLICK";
const MOUSEUP            = "MOUSE UP";

/*}}}*/
let t_pointerup_listener  = function(e)
{
if(e.ctrlKey) {logXXX("UP   IGNORED .. f(e.ctrlKey)"); return; }
/* {{{*/
let   caller = "t_pointerup_listener";
let log_this = !onDown_SHIFT && !onDown_ALT && (LOG_MAP.EV0_LISTEN || logging_EVENTS || LOG_MAP.EV3_UP);

if( log_this) log("%c"+caller, lbb+lbH+lf8);
/*}}}*/
    /* DEL MOVE and LONG_PRESS LISTENERS {{{*/
    del_page_and_tool_pointermove_listeners( caller );

    if( is_long_press_pending() )
        del_long_press_listener( MOUSEUP );

    /*}}}*/
    /* log event chain {{{*/
    /*
if( log_this ) console_dir(e);
if( log_this ) log("...onWork_EL=["+(onWork_EL ? onWork_EL.tagName : "")+"]");
if( log_this ) log("..........id=["+(onWork_EL ? onWork_EL.id      : "")+"]");
if( log_this ) log("..........XY=["+e.clientX+" "+e.clientY+"]");
     */
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* return .. [onDown_CTRL] [onDown_SHIFT] {{{*/
    /* DEBOUNCE CTRL INPUT {{{*/
    if( t_is_bouncing_e_type(e.type, caller) ) return;
/*
    if( onWork_EL && (onWork_EL.tagName == "INPUT")) return;
*/
    /*}}}*/
    if(onDown_CTRL ) { log(); return; } /* right-button-menu override */
    if(onDown_ALT  ) { log(); return; }
    if(onDown_SHIFT) { log(); return; }
    /*}}}*/
    /* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    /* [has_moved] [clicked] [dblclicked] [LONG-PRESS] {{{*/
    get_onMoveDXY(e, caller);

/* TODO rename to make it clear this is required to check [has_move] */
onDown_7_STALL_cancel();
    if(!has_moved) t_check_has_moved(onMoveDXY.x, onMoveDXY.y, MOUSEUP);

/*{{{
logXXX(" %c...has_moved..................=["+ has_moved                   +"%c]",lf8,lbA);
logXXX(" %c...has_been_scrolled_by_script=["+ has_been_scrolled_by_script +"%c]",lf8,lbA);
logXXX(" %c............onDown_SCROLL_XY.y=["+ onDown_SCROLL_XY.y          +"%c]",lf8,lbA);
logXXX(" %c................window.scrollY=["+ window.scrollY              +"%c]",lf8,lbA);
logXXX(" %c...........scroll_last_scrollY=["+ scroll_last_scrollY         +"%c]",lf8,lbA);
    if(!has_moved && (Math.abs(scroll_last_scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH))
    if(!has_moved && (Math.abs(window.scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH))
}}}*/
    if(!has_moved && behavior_TOUCH_ELSE_DESKTOP && has_been_scrolled_by_script)
        t_set_has_moved( has_been_scrolled_by_script );

    let clicked    = is_a_click() && !move_cooldown_is_pending();

    let dblclicked =  clicked && is_a_dblclick(e, caller);

/*{{{
    if( clicked ) t_scrollIntoViewCanceled(caller);
}}}*/

    let detail
        = has_moved  ? has_moved
        : dblclicked ? MOUSEUP_DBL_CLICK
        :    clicked ? MOUSEUP_CLICK
        :              MOUSEUP_LONG_CLICK
    ;
if( log_this) t_log_event_status(caller, lf8);
if(log_this) {
    log_key_val( caller+": details"
                 , {   behavior_TOUCH_ELSE_DESKTOP : behavior_TOUCH_ELSE_DESKTOP
                     , t_preventDefault_caller     : t_preventDefault_caller
                     , t_event_consumed_cause      : t_event_consumed_cause
                     , clicked                     : clicked
                     , dblclicked                  : dblclicked
                     , fullscreen_slot_container   : get_id_or_tag(fullscreen_slot_container)
                     , EDIT_OR_STAGE               :  prop_get( EDIT_OR_STAGE )
                 }
                 , lb0
               );
}

/*{{{
    caller += " "+detail;
}}}*/
    /*}}}*/
    /* EVENT CONSUME OR BUBBLE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
    let                consumed_by = "";                                            let consumed_by_css =  "";
    if(!consumed_by) { consumed_by = onUp_0_MULTITOUCH         (e                    ); consumed_by_css = lf9; }
    if(!consumed_by) { consumed_by = onUp_1_TOOL_GRID_CB       (e, clicked           ); consumed_by_css = lf1; }
    if(!consumed_by) { consumed_by = onUp_2_SLOT_CONTAINER_CB  (e, clicked           ); consumed_by_css = lf2; }
    if(!consumed_by) { consumed_by = onUp_3_TARGET_TOOL_CB     (e, clicked,dblclicked); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onUp_3_DOC_TOOL_CB        (e, clicked,dblclicked); consumed_by_css = lf3; }
    if(!consumed_by) { consumed_by = onUp_4_DOC_TOUCH_CB       (e, clicked,dblclicked); consumed_by_css = lf4; }
    if(!consumed_by) { consumed_by = onUp_5_TOOL_ONCLICK       (e, clicked,dblclicked); consumed_by_css = lf5; }
    if(!consumed_by) { consumed_by = onUp_6_DOC_CB             (e, clicked,dblclicked); consumed_by_css = lf6; }
    if(!consumed_by) { consumed_by = onUp_7_ON_EVENT_CONSUMED  (e                    ); consumed_by_css = lf7; }
    if(!consumed_by) { consumed_by = e.type+" BUBBLING";                                consumed_by_css = lf8; }
    /*............................*/ onUp_8_ON_MOUSEUP_DONE    (e);
    /* DONE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

    /* consumed_by {{{*/
/*{{{
log("%c"+caller+":", lbF);
log("_ e..........path[0]=["+get_n_lbl(e.path[0])+"]");
log("_ e..........handler=["+get_n_lbl(get_el_parent_with_any_event_handler(e.path[0]), caller)+"]");
log("_ e..........bubbles=["+e.bubbles+"]");
log("_ e.......cancelable=["+e.cancelable+"]");
log("_ e.....cancelBubble=["+e.cancelBubble+"]");
log("_ e.defaultPrevented=["+e.defaultPrevented+"]");
log(consumed_by);
if( log_this) log("%c"+caller+" %c "+consumed_by, lbL+lf8, lbR+lf9);
}}}*/

if( log_this) t_log_event_status(caller+" "+SYMBOL_RIGHT_ARROW+" "+consumed_by, lbb+consumed_by_css);
    if(consumed_by && logging_something())
        t_log_transcript_event_bot("<span class='big'>"+ SYMBOL_UP_ARROW +"</span>"
            +                      "<em>"+               consumed_by     +"</em>");

    /*}}}*/
    /* rewind nested collapsed logging {{{*/
    log_sep_clr();

    /*}}}*/
};
/*}}}*/
/* CLICK {{{*/
/*_  is_a_spread_drag {{{*/
let  is_a_spread_drag = function(e)
{
/*{{{*/
let   caller = "is_a_spread_drag";
let log_this = logging_EVENTS;

/*}}}*/

    let this_MS      = new Date().getTime();
    let delayMS      = onDown_MS ? (this_MS - onDown_MS) : 0;
    let in_hand      = (delayMS > DRAG_MIN_MS);
    let fully_spread = ((spread_ratio.x >= 0.9) || (spread_ratio.y >= 0.9));

    let cause        = "";

    if(in_hand && has_moved && fully_spread)
        cause = "MOVED FULLY SPREAD AFTER "+ (this_MS-onDown_MS)+" ms .. "+has_moved;

/*{{{
    else if( (onWork_EL_last_used != hotring    )
        &&   (onWork_EL_last_used != pivot_PANEL)
        &&   t_is_a_selected_panel(onWork_EL_last_used)
    )
        cause = "(pivot_PANEL != onWork_EL_last_used)";
logXXX("pivot_PANEL=["+get_n_lbl(pivot_PANEL)+"] onWork_EL_last_used=["+get_n_lbl(onWork_EL_last_used)+"]");
*/
/* works well .. results are not that great ?... */

/*
    else if(delayMS > DRAG_MAX_MS)
        cause = "DRAGGED MORE THAN "+ DRAG_MAX_MS +" ms";
*/
/*}}}*/

    let result  = (cause != "");

if(log_this && result) log("is_a_spread_drag: ...return "+result+" .. %c"+cause, lb7);

    return result;
};
/*}}}*/
/*_  is_a_click {{{*/
let  is_a_click = function(e)
{
/*{{{*/
let   caller = "is_a_click";
let log_this = logging_EVENTS;

/*}}}*/
    let cause   = "";
    let this_MS = new Date().getTime();
    let delayMS = onDown_MS ? (this_MS - onDown_MS) : 0;

    if(delayMS <=  CLICK_DURATION) cause = "pressed during "+delayMS+" ms";

    let clicked  = (cause != "");

if(!clicked && (delayMS > LONG_PRESS_DURATION)) t_seekzone3_add_longpress();
/*{{{
}}}*/
    is_a_click_last_result = clicked;

if(log_this && clicked) log(caller+": ...return "+clicked+" .. %c"+cause, lb7);
    return clicked;
};
/*}}}*/
/*_  is_a_dblclick {{{*/
let  is_a_dblclick = function(e, _caller)
{
/*{{{*/
let   caller = "is_a_dblclick";
let log_this = !onDown_SHIFT && logging_something();

/*{{{
t_log_event_status(caller, lf8);
}}}*/
/*}}}*/
    let this_MS      = new Date().getTime();
    let clicks_MS    =             onDown_MS - onDownPMS;
    let pressMS      = (this_MS -  onDown_MS);
    let downs_MS     =             onDown_MS ? pressMS : 0;
    let quick_enough = (downs_MS < DBLCLICK_DELAY);
    let multi_click  = e.detail ? (e.detail > 1) : (clicks_MS < DBLCLICK_DELAY);
    let misclick     = is_a_misclick(e, multi_click, pressMS);
    let dblclick     = !misclick  && multi_click && quick_enough;
/*{{{*/
if(log_this) {
    let                                                  cause  = "";
    if     ( misclick                                  ) cause += "misclick";
    if     ( e.type == "mouseup"                       ) cause += "click count "+ e.detail;
    else if(!dblclick && !multi_click ) cause += "not multi_click";
    else if(!dblclick && !quick_enough) cause += "not quick_enough";

    let lfx = (dblclick ? lf4 : lf8);

    log("%c"+caller+": ...%c return "+dblclick +" %c"+cause +"%c e.type ["+e.type+"] %c downs_MS ["+ downs_MS +"] %c clicks_MS ["+clicks_MS+"] %c onWork_PANEL ["+get_id_or_tag(onWork_PANEL)+"]"
        ,lbL+lf3         ,lbR+lfx                ,lbH+lfx    ,lb0                   ,lf6                         ,lf7                         ,lf3);
}
/*}}}*/

    if( dblclick ) t_seekzone2_add_dblclick(pressMS);

    is_a_dblclick_last_result = dblclick;

    return dblclick;
};
/*}}}*/
/*_  is_a_misclick {{{*/
let  is_a_misclick = function(e, multi_click, pressMS)
{
/*{{{*/
let   caller = "is_a_misclick";
let log_this = !onDown_SHIFT && logging_something();

/*}}}*/

    let window_selection = String(window.getSelection());
    let misclick_MS      = behavior_TOUCH_ELSE_DESKTOP ? MISCLICK_TOUCH_MS : MISCLICK_MOUSE_MS;
    let misclick         =  !multi_click
        &&                 (pressMS < misclick_MS)
        &&                 !onWork_PANEL
        &&                 !window_selection
    ;

    if( misclick ) t_seekzone2_add_misclick(pressMS, misclick_MS);

    is_a_misclick_last_result = misclick;

if(log_this) log("%c "+caller+":  %c window_selection ["+window_selection+"]",lb0,lf8);

    return misclick;
};
/*}}}*/
/*_ was_a_click {{{*/
let  is_a_click_last_result;
let was_a_click = function()
{
    return is_a_click_last_result;
};
/*}}}*/
/*_ was_a_dblclick {{{*/
let  is_a_dblclick_last_result;
let was_a_dblclick = function()
{
    return is_a_dblclick_last_result;
};
/*}}}*/
/*_ was_a_misclick {{{*/
let  is_a_misclick_last_result;
let was_a_misclick = function()
{
    return is_a_misclick_last_result;
};
/*}}}*/
/*_ clr_click_last_result {{{*/
let clr_click_last_result = function()
{
    is_a_click_last_result    = false;
    is_a_dblclick_last_result = false;
    is_a_misclick_last_result = false;
};
/*}}}*/
/*}}}*/

/*_ onUp_0_MULTITOUCH {{{*/
let onUp_0_MULTITOUCH = function(e)
{

    onUp_MS = new Date().getTime();
    let    consumed_by = ((onDown_TOUCHES > 1) ? "MULTI-TOUCH x"+onDown_TOUCHES : "");
    return consumed_by;
};
/*}}}*/
/*_ onUp_1_TOOL_GRID_CB {{{*/
let onUp_1_TOOL_GRID_CB = function(e, clicked)
{
/*{{{*/
let   caller = "onUp_1_TOOL_GRID_CB(clicked "+clicked+")";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_log_event_status(caller, lf1);

    if(!clicked                   ) return "";

    if( prop_get( EDIT_OR_STAGE ) ) return "";

    if(has_moved)
    {
        if(t_check_big_moved(onMoveDXY.x, onMoveDXY.y, caller) ) {
if( log_this) logBIG("BIG MOVE", lf2);
            return;
        }
        else {
if( log_this) logBIG("SMALL MOVE", lf7);
        }
    }

    let consumed_by = "";
/*}}}*/
    /*  MOVING TOOLS ON GRID .. f(hotring) {{{*/
    if(!call_t_grid_IS_ON_GRID(caller))
    {
        if(onWork_EL == hotring) {
            consumed_by     = "MOVING TOOLS ON GRID";

            t_move_TOOLS_ON_GRID(caller);
        }
    }
    /*}}}*/
    /*  TOOLS ON GRID {{{*/
    else {
        /* MOVING TOOLS OFF GRID .. f(hotring || dimm_mask) {{{*/
        if((onWork_EL == hotring) || dimm_mask_is(onWork_EL))
        {
            consumed_by = " MOVING TOOLS OFF GRID";

            t_move_TOOLS_OFF_GRID(caller);

            t_sync_layout(caller);
        }
        /*}}}*/
        /* ELSE: SELECT TOOLS ON GRID {{{*/
        else {
            consumed_by = " SELECT TOOLS ON GRID ";

            t_grid_TOOLS_SELECT(e);
        }
        /*}}}*/
    }
    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onUp_2_SLOT_CONTAINER_CB {{{*/
let onUp_2_SLOT_CONTAINER_CB = function(e, clicked)
{
/* log {{{*/
let   caller = "onUp_2_SLOT_CONTAINER_CB";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = !onDown_SHIFT && (LOG_MAP.EV3_UP || LOG_MAP.T1_DOM_LOAD);

if( log_this) caller += "(clicked "+clicked+")";
if( log_this) t_log_event_status(caller, lf2);
/*}}}*/
    /* ASSERT FEATURE {{{*/
    if(!div_slot_containers_displayed()         ) return "";
    if(!clicked                                 ) return "";
    if( has_moved                               ) return "";

    /*}}}*/
    /* PARSE TARGET ELEMENT AND ITS CONTAINER {{{*/
    let consumed_by               =  "ON "+ get_id_or_tag(onWork_EL);

    let clicked_COPY_TO_CLIPBOARD = has_el_class(                 onWork_EL, CSS_BUTTON_COPY   ) ? "COPY TO CLIPBOARD" : "";
    let clicked_MAGNIFY_START     = has_el_class(                 onWork_EL, CSS_BUTTON_MAGNIFY) ?           "MAGNIFY" : "";
    let clicked_PREV              = has_el_class(                 onWork_EL, CSS_BUTTON_PREV   ) ?      "MAGNIFY PREV" : "";
    let clicked_NEXT              = has_el_class(                 onWork_EL, CSS_BUTTON_NEXT   ) ?      "MAGNIFY NEXT" : "";
    let clicked_MONO              = has_el_class(                 onWork_EL, CSS_BUTTON_MONO   ) ?         "MONOSPACE" : "";
    let clicked_MAGNIFY_STOP      = (fullscreen_slot_container == onWork_EL                    ) ?        "FULLSCREEN" : "";


    let clicked_target
        = clicked_COPY_TO_CLIPBOARD ? onWork_EL.parentElement
        : clicked_MAGNIFY_START     ? onWork_EL
        : clicked_PREV              ? onWork_EL
        : clicked_NEXT              ? onWork_EL
        : clicked_MONO              ? onWork_EL
        : clicked_MAGNIFY_STOP      ? null
        :                             onWork_EL
    ;

if(log_this) {
    let s = log_key_val(       caller
                         , {   consumed_by               : consumed_by
                             , clicked_COPY_TO_CLIPBOARD : clicked_COPY_TO_CLIPBOARD
                             , clicked_MAGNIFY_START     : clicked_MAGNIFY_START
                             , clicked_PREV              : clicked_PREV
                             , clicked_NEXT              : clicked_NEXT
                             , clicked_MONO              : clicked_MONO
                             , clicked_MAGNIFY_STOP      : clicked_MAGNIFY_STOP
                             , clicked_target            : get_n_lbl(clicked_target)
                          }
                         , lf2
                       );
}
    /*}}}*/
    /* MAGNIFY_START {{{*/
    if     (clicked_MAGNIFY_START) { consumed_by += " .. "+ clicked_MAGNIFY_START; t_slot_container_set_fullscreen( clicked_target ); }

    /*}}}*/
    /* MAGNIFY_PREV  {{{*/
    else if(clicked_PREV         ) { consumed_by += " .. "+ clicked_PREV         ; t_slot_container_set_fullscreen( clicked_target ); }

    /*}}}*/
    /* MAGNIFY_NEXT  {{{*/
    else if(clicked_NEXT         ) { consumed_by += " .. "+ clicked_NEXT         ; t_slot_container_set_fullscreen( clicked_target ); }

    /*}}}*/
    /* MONO {{{*/
    else if(clicked_MONO         ) { consumed_by += " .. "+ clicked_MONO         ; t_slot_container_set_fullscreen( clicked_target ); }

    /*}}}*/
    /* MAGNIFY_STOP {{{*/
    else if(clicked_MAGNIFY_STOP ) { consumed_by += " .. "+ clicked_MAGNIFY_STOP ; t_slot_container_set_fullscreen( clicked_target ); }

    /*}}}*/
    /* COPY TO CLIPBOARD {{{*/
    else if(clicked_COPY_TO_CLIPBOARD && clicked_target) {
        consumed_by += " .. "+ clicked_COPY_TO_CLIPBOARD;

        let container_to_copy_from
            = (clicked_target.id == 'button_COPY_ALL_parent_div')
            ?  clicked_target.parentElement
            :  clicked_target
        ;
/*{{{
console.dir(container_to_copy_from)
logBIG("textContent")
log(container_to_copy_from.textContent)
logBIG("innerHTML")
log(container_to_copy_from.innerHTML)
}}}*/
        t_slot_containers_copy_to_clipboard_outerHTML( container_to_copy_from );

        /* highlight copied container */
        let              div_slot_containers = clicked_target.parentElement;
        for(let i=0; i < div_slot_containers.childNodes.length; ++i)
            del_el_class(div_slot_containers.childNodes[i], CSS_FOCUSSED);

        add_el_class(        clicked_target               , CSS_FOCUSSED);
    }
    /*}}}*/
    /* SCROLL TO [clicked_target] .. [dimm_stop] {{{*/
    else if( clicked_target )
    {
        consumed_by += " .. SCROLL TO "+t_onclick_target_handle_scroll_to_slot_num(clicked_target, caller);

        dimm_stop( caller );
    }
    /*}}}*/
    /* SCROLL BACK TO DIM SCROLL POINT .. [dimm_stop] {{{*/
    else {
        consumed_by += " .. SCROLL BACK TO DIM START POINT";

        t_window_scrollTo(0, onDown_SCROLL_XY.y);

        dimm_stop( caller );
    }
    /*}}}*/
if(log_this)  log("%c"+consumed_by, lbb+lbH+lf2);
    return caller+":"+LF+consumed_by;
};
/*}}}*/
/*_ onUp_3_TARGET_TOOL_CB {{{*/
let onUp_3_TARGET_TOOL_CB = function(e,clicked,dblclicked)
{
/*{{{*/
let   caller = "onUp_3_TARGET_TOOL_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_log_event_status(caller, lf3);

    let onDown_target_tool  = (onDown_EL == target_tool) ;
    let seeker_PU_is_active = t_seeker_PU_is_active() ;

if( log_this) {
    log_key_val(caller
                , {   seeker_PU_is_active   :      seeker_PU_is_active
                    , onDown_target_tool    :      onDown_target_tool
                    , onSeekXYL             :      onSeekXYL
                    , target_tool           : "["+ get_n_lbl(target_tool     ) +"]"
                    , onDown_EL             : "["+ get_n_lbl(onDown_EL       ) +"]"
                    , onWork_EL             : "["+ get_n_lbl(onWork_EL       ) +"]"
                    , onWork_PANEL          : "["+ get_n_lbl(onWork_PANEL    ) +"]"
                    , onWork_SEEK_TOOL      : "["+ get_n_lbl(onWork_SEEK_TOOL) +"]"
                    , clicked               :      clicked
                    , dblclicked            :      dblclicked
                    , has_moved             :      has_moved
                    , onDown_SEL_TEXT       : "["+ onDown_SEL_TEXT             +"]"
                }
                , lf3
               );
}
/*}}}*/
    /* PAGE CLICK .. UNLIFT TARGETS .. HIDE TARGET SEEKER {{{*/
    let rejected_by = "";
    if(!onDown_target_tool )
    {
        if( t_target_tool_set_lifted(false) ) {
            rejected_by += " UNLIFTING TARGETS";
        }
        if(clicked && seeker_PU_is_active && is_onSeekXYL_onTarget())
        {
            t_seeker_PU_hide("instant");
            rejected_by += " HIDING TARGET SEEKER";
        }
        if(onWork_EL == dimm_mask)
        {
            rejected_by += " "+dimm_mask.id;
        }
    }
    /*}}}*/
    /* TARGET CLICK .. TRANSITION {{{*/
    let consumed_by = "";
    if(onDown_target_tool && !rejected_by)
    {
        rejected_by
            = !clicked                    ?     "NO CLICK"
            :  dblclicked                 ? "DOUBLE CLICK"
            :  has_moved                  ? "HAS MOVED ["+has_moved+"]"
            :  prop_get(EDIT_OR_STAGE)    ? "HIDE EDIT MODE"
            :                               "NO [target_tool] TRANSITION";

        if(        clicked
                   &&     !dblclicked
                   &&     !has_moved
                   &&     !prop_get(EDIT_OR_STAGE)
          )
            consumed_by = t_target_tool_CB(target_tool);

    }
    /*}}}*/
/*{{{*/
if(log_this) {
    if(consumed_by) log("%c"+caller+":%c consumed_by %c TARGET "+consumed_by, lbb+lbH+lf3, lbL, lbb+lbH+lf4);
    else            log("%c"+caller+":%c rejected_by %c PAGE "  +rejected_by, lbb+lbH+lf3, lbL, lbb+lbH+lf8);
}
    return consumed_by;
/*}}}*/
};
/*}}}*/
/*_ onUp_3_DOC_TOOL_CB {{{*/
let onUp_3_DOC_TOOL_CB = function(e,clicked,dblclicked)
{
    /* clicked dblclicked consumed TOOL {{{*/
let   caller = "onUp_3_DOC_TOOL_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lf3);

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
        if(doc_div) {
            if(has_el_class(onWork_EL, CSS_CLOSEPIN)) {
                consumed_by     = "EMBEDDED TOOL: CLOSING "+doc_div.id;
                t_doc_div_clear(doc_div.id);
            }
            else {
                consumed_by     = "EMBEDDED TOOL: CLICK IGNORED";
            }
        }
        else {
if(log_this) log("NO DOC EMBEDDED TOOL");
        }
    }
    /*}}}*/
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
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onUp_4_DOC_TOUCH_CB {{{*/
let onUp_4_DOC_TOUCH_CB = function(e,clicked,dblclicked)
{
/*{{{*/
let   caller = "onUp_4_DOC_TOUCH_CB";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lf4);
/*}}}*/
    /* dismissed_by .. f(!clicked OR dblclicked OR t_event_has_been_consumed) {{{*/
    let is_a_tool = t_is_a_tool_el(onWork_EL, caller);

    let dismissed_by
        = (!clicked                          ) ? "!clicked"
        : ( is_a_tool                        ) ? "is_a_tool"
        /*( prop_get( ANCHOR_FREEZE )        ) ? ANCHOR_FREEZE*/
        : ( dblclicked                       ) ? "dblclicked"
        : ( t_event_has_been_consumed(caller)) ? t_event_consumed_cause
        :                                        ""
    ;

    if(dismissed_by) {
if( log_this) log("%c"+caller+"%c dismissed_by %c"+dismissed_by, lf4, lbA, lf9);
        return "";
    }
    /*}}}*/
    /* dismissed_by .. f((NO el_event_handler) {{{*/
    let el_event_handler  = get_el_event_handler(onWork_EL, caller);
    dismissed_by
        = (el_event_handler == null)
        ? "NO EVENT HANDLER"
        : "";
    if(dismissed_by) {
if( log_this) log("%c"+caller+"%c dismissed_by %c"+dismissed_by, lf4, lbA, lf9);
        return "";
    }
    /*}}}*/
    /* MOBILE el_event_handler .. CALLING {{{*/
if( log_this) log("...handler=["+el_event_handler.label+"]");
    let consumed_by = onUp_el_event_handler(e, el_event_handler);

    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
/*}}}*/
/*_ onUp_5_TOOL_ONCLICK {{{*/
let onUp_5_TOOL_ONCLICK = function(e,clicked,dblclicked)
{
    /* TOOL {{{*/
let   caller = "onUp_5_TOOL_ONCLICK";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

    let dismissed_by
    = ( t_event_has_been_consumed(caller)  ) ? t_event_consumed_cause
    : (!t_is_a_tool_el(onWork_EL, caller)  ) ? "NOT A TOOL ["+get_n_lbl(onWork_EL)+"]"
    :                                          "";
if( log_this && dismissed_by) log("%c"+caller+"%c dismissed_by %c"+dismissed_by, lf5, lbA, lf9);
    if(dismissed_by) return "";
if( log_this) log("%c"+caller, lf5);

    let consumed_by = "ON TOOL "+get_n_lbl(onWork_EL);
    /*}}}*/
    /* PANEL or [target_tool] MOVED .. TOOLS LAYOUT STORAGE UPDATE {{{*/
    if(has_moved && (onWork_PANEL || (onWork_EL == target_tool)))
    {
        t_store_update_post(caller);
    }
    /*}}}*/
    /* MOVE OR (slightly moved) CLICK {{{*/
    if(onWork_PANEL && clicked && has_moved)
    {
        if(t_check_big_moved(onMoveDXY.x, onMoveDXY.y, caller) )
        {
if(log_this) log("%c [CLICKED + BIG   MOVE] .. CANCEL CLICK ON ["+get_n_lbl(onWork_PANEL)+"]", lf5);
            clicked = false;
        }
        else {
if(log_this) log("%c [CLICKED + SMALL MOVE] .. CANCEL MOVE  ON ["+get_n_lbl(onWork_PANEL)+"]", lf6);
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
    let pinned = onWork_PANEL && onWork_PANEL.classList.contains(CSS_PINNED);
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

    if(dblclicked) {
/*{{{
        if(      t_clear_ON_DBLCLICK_for( onWork_EL    ) ) { consumed_by += " DBLCLICK CLEAR"  ;    t_clear(caller);                                  }
}}}*/
        if     ( t_filter_STANDBY_for   ( onWork_PANEL ) ) { consumed_by += " DBLCLICK STANDBY";    t1_onclick( onWork_EL   , 0, true        ); }
        else if( t_shake_ON_DBLCLICK_for( onWork_PANEL ) ) { consumed_by += " DBLCLICK TOOLPIN";
            if(! t_has_push_pin_on_panel( onWork_PANEL ) )                                          t_add_toolpins_on_panel ( onWork_PANEL );
            else                                                                                    t_del_toolpins_on_panel ( onWork_PANEL );
            clicked = false;
        }
    }
    /*}}}*/
    /* CLICKED .. [hotspot] .. [EDIT_OR_STAGE] .. [dom_hide] {{{*/
    if(   (hotspot == onWork_PANEL)
       &&  prop_get( EDIT_OR_STAGE )
/*     &&  t_gutter_is_XY_IN(h_x, h_y) */
      ) {
        if( clicked ) {
            prop_toggle( MASK_OR_HIDE );
            consumed_by += " CLICK .. NODE TO HIDE "+ (prop_get( MASK_OR_HIDE ) ? "MASKED" : "HIDDEN");
        }
        /* TODO: to make [dblclicked] work .. [clicked] should be prevented somehow */
/*{{{
        if(dblclicked) {
            consumed_by += " DBLCLICK .. NODE TO CLEAR HIDDEN NODES";
            dom_hide1_reset();
        }
}}}*/

    }
    /*}}}*/
/*{{{
logBIG(caller+": "+consumed_by, lbb+lf7);
}}}*/
    /* CLICKED onWork_SEEK_TOOL ..  HIDING {{{*/
    if(       clicked
          && (onWork_SEEK_TOOL && !t_is_a_tool_el(onWork_SEEK_TOOL))
      ) {
if( log_this) log("%c clicked ON %c onWork_SEEK_TOOL %c"+get_id_or_tag(onWork_SEEK_TOOL)+"%c WHICH IS NOT A TOOL"
                  ,lbH+lf5      ,lbL+lf6            ,lbR+lf6                             ,lbH+lf5                );

        t_seeker_PU_hide("instant");

        consumed_by = "";
    }
    /*}}}*/
    /* CLICKED .. PIVOT-MAGNIFY .. CLICK-HANDLER .. [t1_onclick] {{{*/
    else if( clicked && !has_moved) {
/*{{{
        if     ( target_tool && (onWork_SEEK_TOOL == target_tool) ) { consumed_by += " target_tool   HANDLER"; t1_onclick( onWork_EL                    ); }
}}}*/
        if     ( target_tool        ==  onWork_EL                 ) { consumed_by += " target_tool   HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( dimm_mask          ==  onWork_EL                 ) { consumed_by += " dimm_mask     HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( t_filter_SEL_CLICK_for(onWork_EL               ) ) { consumed_by += " DOC SEL CLICK HANDLER"; t1_onclick( onWork_EL   , 0, false       ); }
        else if( has_el_class          (onWork_EL, CSS_PUSH_PIN ) ) { consumed_by += " .. [push_pin] HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( has_el_class          (onWork_EL, CSS_CLOSEPIN ) ) { consumed_by += " .. [closepin] HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( has_el_class          (onWork_EL, CSS_SCALEPIN ) ) { consumed_by += " .. [scalepin] HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( has_el_class          (onWork_EL, CSS_CLEARPIN ) ) { consumed_by += " .. [clearpin] HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( t_tool_has_onclick_for(onWork_EL               ) ) { consumed_by += " onWork_EL     HANDLER"; t1_onclick( onWork_EL                    ); }
        else if( t_tool_has_onclick_for(onWork_PANEL            ) ) { consumed_by += " onWork_PANEL  HANDLER"; t1_onclick( onWork_EL   , T_ONCLICK_DELAY); }
        else {
            let el_event_handler
                =  get_el_event_handler(onWork_EL, caller);
            if(el_event_handler                                   )   consumed_by += onUp_el_event_handler(e, el_event_handler);
        }
    }
    /*}}}*/
    /* [has_moved] .. (t_pat_bag9_move_item_to_div) {{{*/
    else if(has_moved) {
        /* SUBTOOL MOVED {{{*/
        if(    mov_dst_div && mov_src_div
           && (mov_dst_div != mov_src_div)
          ) {
            consumed_by += t_pat_bag9_move_item_to_div( mov_dst_div );
        }
        /*}}}*/
        /* TOOL PANEL MOVED {{{*/
        else {
            consumed_by += " TOOL MOVED";

            /* TRANSCRIPT MOVED {{{*/
            let is_a_pinned_transcript
                =  (      (onWork_PANEL                 == transcript1)
                       || (onWork_PANEL                 == transcript2))
                && (       onWork_PANEL.classList.contains(CSS_PINNED ));

            if( is_a_pinned_transcript )
            {
                let  xy = get_el_xy(onWork_PANEL, caller);
                let key =           onWork_PANEL.id+"_XY";
                store_set_value(key, JSON.stringify(xy));
                consumed_by += " (a pinned transcript)";
            }
            /*}}}*/
        }
        /*}}}*/
    }
    /*}}}*/
    /* TODO - make clear what is prevented by this call... */
    if(consumed_by) t_event_set_e_consumed_by(e, consumed_by);

if( log_this) log("...return %c["+consumed_by+"]", lf5);
    return consumed_by;
};
/*}}}*/
/*_ onUp_6_DOC_CB {{{*/
let onUp_6_DOC_CB = function(e, clicked, dblclicked)
{
    /* !t_is_a_tool_el .. !has_moved .. !t_seeker_PU_is_active {{{*/
let   caller = "onUp_6_DOC_CB";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = !onDown_SHIFT && (LOG_MAP.EV3_UP || LOG_MAP.T1_DOM_LOAD);

    let dismissed_by
        = ( t_is_a_tool_el(onWork_EL, caller)  ) ? "[onWork_EL] IS A TOOL"
        : ( has_moved                          ) ?   has_moved
        : ( t_seeker_PU_is_active()            ) ? "[seeker_PU] IS ACTIVE"
        :                                          "";
if( log_this && dismissed_by) log("%c"+caller+"%c dismissed_by %c"+dismissed_by, lf6, lbA, lf9);
    if(dismissed_by) return "";

if( log_this) log("%c"+caller, lf6);

    let consumed_by;
    /*}}}*/
    /* DOC CLICK {{{*/
    if(clicked && !dblclicked)
    {
        if( was_a_misclick() )
        {
if(log_this) logBIG("WAS A MISSCLICK", lf3);
            consumed_by = "DOC MISSCLICK";

/*{{{ //FIXME_PARKED
            let parked = !t_target_tool_all_parked();
            t_target_tool_set_parked_handler(parked, consumed_by)
}}}*/
        }
        else {
            consumed_by = "DOC CLICKED";
            /* 1/3 - ON DOC SELECTION .. CLEAR SELECTION {{{*/
            if( onWork_SEEK_TOOL )
            {
                let slot     = t_get_EL_slot(onWork_EL);
                consumed_by += " clear_slot("+slot+")";

                t_clear_slot( slot );
            }
            /*}}}*/
            /* 2/3 -!EDIT_OR_STAGE ON HOTSPOT IN GUTTER .. HIDE CONTAINER {{{ */
            else if( prop_get( EDIT_OR_STAGE ) )
            {
                let range = get_range_from_XY(onDown_XY.x, onDown_XY.y);
                if( range.startContainer )
                {
                    let    container  = get_text_container( range.startContainer );
                    if(    container
                           && (container != document.body)
                           && (container != document.documentElement)
                      ) {
                        consumed_by += " .. dom_hide1_container_clicked("+get_n_lbl(container)+")";

                        t_window_getSelection_removeAllRanges(caller);
                        dom_hide1_container_clicked( container );
                    }
                }
            }
            /*}}}*/
            /* 3/3 - ON A DOC WORD .. ADD A SELECTION {{{*/
            else {
                /* [SELECT WORD] .. (NO EVENT HANDLER] {{{*/
                if( !get_el_event_handler(onWork_EL,caller) )
                {
                    consumed_by += " SELECT WORD .. (NO EVENT HANDLER) for ["+get_n_lbl(onWork_EL)+"]";

                    onUp_6_DOC_CB_CLICK_WORD(consumed_by);
                }
                /*}}}*/
                /* [EVENT HANDLER NOT FREEZED] .. OR .. [CLICK WORD] {{{*/
                else {
                    if(prop_get( ANCHOR_FREEZE )) {
                        consumed_by += " SELECT WORD .. (EVENT HANDLER FREEZED)";
                        t_preventDefault(e, caller+" "+consumed_by);

                        onUp_6_DOC_CB_CLICK_WORD(consumed_by);
                    }
                    else {
                        /* NOTE: [anchor_freeze should have been processed by onUp_4_DOC_TOUCH_CB] */
                        consumed_by += " CLICK WORD .. (EVENT HANDLER NOT FREEZED";
                        t_acceptBubble(e, caller+" "+consumed_by);

                    }
                }
                /*}}}*/
            }
            /*}}}*/
        }
    }
    /*}}}*/
if(log_this && consumed_by) log("%c"+consumed_by, lbb+lbH+lf6);
    return consumed_by;
};
/*}}}*/
/*_ onUp_6_DOC_CB_CLICK_WORD {{{*/
let onUp_6_DOC_CB_CLICK_WORD = function(_consumed_by)
{
/*{{{*/
let   caller = "onUp_6_DOC_CB_CLICK_WORD";
if(!is_a_DOM_LOAD_featured_function(caller)) return "";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) caller += "("+_consumed_by+")";
/*}}}*/
    /* SEARCH DOC {{{*/
    call_s_touchedWord(onDown_XY.x, onDown_XY.y);

    /*}}}*/
    /* GOT NO SELECTION RANGE {{{*/
    if( !s_touchedWord_range_parent )
    {
if( log_this) log("%c "+caller+" %c NO SELECTION RANGE",lbL+lf6  ,lbR+lf2);

        return;
    }
    /*}}}*/
    /* GOT NO SELECTED SLOT {{{*/
    if( !s_touchedWord_slot )
    {
if( log_this) log("%c "+caller+" %c NO TOUCHED WORD SLOT",lbL+lf6  ,lbR+lf2);

        return;
    }
    /*}}}*/
    /* GOT NO SLOT PATTERN .. RESELECTING ALL PATTERNS {{{*/
    if( !ccs[s_touchedWord_slot].pattern )
    {
if( log_this) log("%c "+caller+" %c NO TOUCHED WORD PATTERN: RESELECTING",lbL+lf6  ,lbR+lf2);

        t_pat_bag3_reselect_all();
/*{{{
logXXX("%c "+caller+" %c NO TOUCHED WORD PATTERN: NOT RESELECTING", lbL+lf6, lbR+lf2);
}}}*/
        return;
    }
    /*}}}*/
if( log_this) log("%c"+caller+" %c s_touchedWord_slot %c "+s_touchedWord_slot, lbL+lf6, lbC, lbR+lfX[s_touchedWord_slot]);
    /* SYNC CONTAINER AND BAGS {{{*/
    t_set_touchedWord_startContainer();

    t_onPatternUpdate("DOCUMENT <em>"+ _consumed_by +"</em>", caller);
    /*}}}*/
};
/*}}}*/
/*_ onUp_7_ON_EVENT_CONSUMED {{{*/
let onUp_7_ON_EVENT_CONSUMED = function(e)
{
let   caller = "onUp_7_ON_EVENT_CONSUMED";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller +" "+t_event_consumed_cause, lf7);

    return t_event_has_been_consumed(caller);
};
/*}}}*/
/*_ onUp_8_ON_MOUSEUP_DONE {{{*/
/*{{{*/
const   TOOLS_LAYOUT_ON_MOUSEUP_HANDLER_DELAY = 500;

let   t_tools_layout_on_mouseup_timer;
/*}}}*/
let onUp_8_ON_MOUSEUP_DONE = function(e)
{
/*{{{*/
let   caller = "onUp_8_ON_MOUSEUP_DONE";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) t_log_event_status(caller, lf8);
/*}}}*/
    /* HIDE TRANSIENT TOOLS .. [hotspot] [pivspot] BAGS [seeker_PU] [seeker_CU] [misclick] {{{*/
    add_el_class(pivspot, CSS_HIDDEN);

    /* SYNC SEEKER .. [CLEAR LONG-PRESS-ARM STATE] */
    if( has_el_class(seeker_CU, LONG_PRESS_ARM) )
    {
        del_el_class(seeker_CU, LONG_PRESS_ARM);
if( log_this) logBIG("REVIVE SEEKER .. f(LONG_PRESS_ARM)");

        t_seeker_PU_show();
    }

    del_el_class(seeker_CU, LONG_PRESS_ARM);

    move_cooldown_clear_pending();

    /* EDITING DONE */
    if(    has_moved && (onWork_PANEL == hotspot)
       &&  prop_get( EDIT_OR_STAGE )
       && !t_gutter_is_XY_IN(h_x, h_y)
      )
        t_gutter_drag_hotspot_OUT(h_x, h_y, caller);

    /* [target_tool] MOVING DONE */
    if(has_moved && (onWork_EL == target_tool))
        onMove_2_TARGET_TOOL_MOVE_ONGRID_handler();

    if( t_pat_bag9_grab_item_mov_div_is_showing() )
        t_pat_bag9_grab_item_mov_div_drop();

    t_check_on_seeker_clear();

    t_set_body_style_overflow_hidden(false);

    if( t_raise_pivot_PANEL_called_since_onDown(caller) )
        t_raise_pivot_PANEL_reset( caller );

    /*}}}*/
    t_target_tool_sync_pastable();
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
    /* [seeker_PU] {{{*/
    if(seeker_PU)
    {
        for(let i = 1; i <= SELECT_SLOT_MAX; ++i) {
            set_id_class_on_off(seeker_PU.id, "slot_color"+i, false);
        }
        set_el_class_on_off(seeker_PU,  SHOW_SEEKZONE , false);
    }
    /*}}}*/
    /* [seekzone] {{{*/
    if( prop_get( SHOW_SEEKZONE ) )
    {
        if( was_a_misclick() )
            t_seekzone1_show("onUP .. was_a_misclick");
/*{{{
        else t_seekzone4_hide();
}}}*/
    }
    /*}}}*/
    /* [target_tool] {{{*/
    if( target_tool )
    {
if(log_this) {
    let s = log_key_val(    caller
                       , {  was_a_misclick : was_a_misclick()
                          , was_a_click    : was_a_click   ()
                          , was_a_dblclick : was_a_dblclick()
                          ,      has_moved : has_moved
                          ,       CONSUMED : t_event_consumed_cause
                         } , lf8
                       );
}

        if(has_el_class(target_tool, CSS_PRESSED)) {
if(log_this) log("%c RELEASING CSS_PRESSED ["+target_tool.id+"]", lbb+lbH+lf8);
            del_el_class(target_tool, CSS_PRESSED);
        }

/*{{{
        if(was_a_click() && !has_moved && has_el_class(target_tool, CSS_LIFTED)) {
if(log_this) log("%c was_a_click .. UNLIFTING ["+target_tool.id+"]", lbb+lbH+lf7);
            t_target_tool_set_lifted(false);
        }
}}}*/

    }
    /*}}}*/

    clr_click_last_result();

    /* POST EVENT DONE HANDLER {{{*/
    if(has_moved || call_t_grid_IS_ON_GRID(caller) || cached_user_options_map.length) {
        t_tools_layout_on_mouseup_timer = setTimeout(onUp_8_TOOLS_LAYOUT_HANDLER, TOOLS_LAYOUT_ON_MOUSEUP_HANDLER_DELAY);
    }
    else {
        let _log_this = false;
        t_clr_onWork_EL(caller, _log_this);

if( log_this) t_log_event_status(caller, lbb+lf8);
    }
    if( t_preventDefault_caller )
        t_restoreDefault("ON UP DONE");

    onWork_MOVABLE_CHILD = null;
    /*}}}*/
};
/*}}}*/
/*_ onUp_8_TOOLS_LAYOUT_HANDLER {{{*/
let onUp_8_TOOLS_LAYOUT_HANDLER = function()
{
let caller   = "onUp_8_TOOLS_LAYOUT_HANDLER";
let log_this = !onDown_SHIFT && (LOG_MAP.EV0_LISTEN || logging_EVENTS || LOG_MAP.EV3_UP);

    if(call_t_grid_IS_ON_GRID(caller)) return;

    /* TOOL PANELS LAYOUT {{{*/
    if( t_cache_changed(  caller) ) {
        t_cache_layout("Tools layout adjusted");
        t_tool_set_top_xy(caller, topTool.x, topTool.y);
    }
    t_set_onWork_EL(null, caller);
if( log_this) t_log_event_status(caller, lbb+lf8);

    let h_xy = get_el_xy(hotspot, caller);
    t_raise_pivot_PANEL(caller);
    t_toggle_pivot_PANEL_magnified( prop_get( PIVOT_MAGNIFIED ) );

    del_el_class(dom_tools_html, CSS_REGROUPING);

    /*}}}*/
    /* TOOL ACCESSORIES RESET {{{*/
    t_hide_hov();

    /*}}}*/

    t_reinstate_USER_OPTIONS( caller );
};
/*}}}*/

/*_ onUp_el_event_handler {{{*/
let onUp_el_event_handler = function(e, el_event_handler)
{
/*{{{*/
let   caller = "onUp_el_event_handler";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lbb+lf7);
/*}}}*/
    let consumed_by;
    /* MOBILE el_event_handler .. CALLING {{{*/

if( log_this) log("behavior_TOUCH_ELSE_DESKTOP=["+behavior_TOUCH_ELSE_DESKTOP+"]");
if( log_this) log("t_preventDefault_caller=["+t_preventDefault_caller+"]");

    if(behavior_TOUCH_ELSE_DESKTOP && t_preventDefault_caller)
    {
        consumed_by = "MOBILE  CALLING EVENT HANDLER ["+ get_n_lbl(onWork_EL) +"] ["+el_event_handler.label+"] HANDLER";

        if(t_preventDefault_caller) t_restoreDefault("ON TOUCH UP");

        el_event_handler.handler(e);
        t_cache_init_by( consumed_by );
    }
    /*}}}*/
    /* DESKTOP DOC EVENT HANDLER .. BUBBLING {{{*/
    else {
        consumed_by = "DESKTOP BUBBLING TO DOC EVENT HANDLER <em>"+ get_n_lbl(onWork_EL) +"</em> HANDLER";
    }
    /*}}}*/
if(log_this) log(consumed_by);
    return consumed_by;
};
    /*}}}*/

/*_ t_tool_has_onclick_for {{{*/
let t_tool_has_onclick_for = function(el)
{
/*{{{*/
let   caller = "t_tool_has_onclick_for";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

    if(!el   ) return false;
    if(!el.id) return false;

if( log_this) log(caller+": prop_get_EL("+el.id+")=["+get_n_lbl(prop_get_EL(el.id))+"]");
/*}}}*/

    let bag_id = get_bag_id(el);

    let result
        = (                         (bag_id != "") /* DELEGATED TO CONTAINER PANEL   */
           || t_is_a_toggle_option  ( el.id      ) /* DYNAMICALLY ADDED TOOL TARGETS */
           || get_n_lbl( prop_get_EL( el.id     )) /* DYNAMICALLY ADDED PROP TOOL    */
          );

/*{{{*/
if( log_this)
    log("%c "+caller+"("+get_n_lbl(el)+"): %c ...return "+result   +"%c el=["+get_n_lbl(el)+"]%c bag=["+bag_id+"]%c parent=["+get_n_lbl(get_el_parent_with_id(el))+"]"
        ,lbL                              ,lbR+(result ? lf5 : lf8) ,lbL                     ,lbC+lf3           ,lbR+lf7                                              );
/*}}}*/
    return result;
};
/*}}}*/
/*_ t_is_a_toggle_option {{{*/
let t_is_a_toggle_option = function(id)
{
/*{{{*/
let   caller = "t_is_a_toggle_option";
let log_this = !onDown_SHIFT && LOG_MAP.EV3_UP;

/*{{{
if( log_this) prop_log_MAP(caller);
}}}*/
/*}}}*/
    if(!id) return false;
    let result
        =  (id == ANCHOR_FREEZE)
        || (id ==  CONTAINERS_HI   )
        || (id ==  SCROLL_SMOOTH   )
        || (id ==  OVERFLOW_VISI   )

        || (id ==  SHOW_SEEKZONE   )
        || (id ==  PIN_SEEKSPOT    )
        || (id ==  LOG_SEEKSPOT    )

        || (id ==  SITE_OR_PAGE    )
        || (id ==  MASK_OR_HIDE    )
        || (id ==  EDIT_OR_STAGE   )
        || (id ==  DOM_HIDE1_RESET )
        || (id ==  DENY_OR_ALLOW   )

        || (id ==  THEME_DARK      )
        || (id ==  TOOLS_TRAP      )
        || (id ==  TOOLS_EXTRAS    )
        || (id ==  TOOLS_SCROLL    )

        || (id ==  WORDING         )
        || (id ==  WORDS_EXACT     )
        || (id ==  WORDS_SEGMENT   )
        || (id ==  WORDS_HEAD_TAIL )
        || (id ==  WORDS_OPCYCLE   )

        || id.startsWith( SQUEEZE_CYCLE )

        || t_get_words_drop_affix_array().includes(id)
    ;

/*{{{*/
if( log_this)
    log("%c "+caller+"("+id+"): %c ...return "+result
        ,lbL                   ,lbR+(result ? lf5 : lf8));
/*}}}*/
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
    if(     !el   ) return false;
    if(     !el.id) return false;

    return  (el.id.startsWith( "transcript"));
};
/*}}}*/
/*_ t_shake_ON_DBLCLICK_for {{{*/
let t_shake_ON_DBLCLICK_for = function(el)
{
    if(     !el   ) return false;
    if(     !el.id) return false;

    return  has_el_class(el, CSS_TRANSCRIPT);

};
/*}}}*/
/*}}}*/
/* CHANGE */
/*{{{*/
/* TOOL onchange {{{*/
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
/* TOOL CB {{{*/
/*_ t_dom_traversal_CB {{{*/
let t_dom_traversal_CB = function(e_target, e_type)
{
/*{{{
if( t_preventDefault_has_been_called("t_dom_traversal_CB") ) return;
}}}*/
    /* log {{{*/
    let caller   = "t_dom_traversal_CB("+get_n_lbl(e_target)+", e_type=["+e_type+"])";
let log_this = logging_EVENTS || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf5);
    /*}}}*/
    /* [has_moved] [INPUT] {{{*/
    if( has_moved                         ) return;
    if(e_target.tagName == "INPUT"        ) return;
    if( t_event_has_been_consumed(caller) ) return;

    /*}}}*/
    /* [focussed] [t_clear] {{{*/
if(e_target) del_el_class(e_target, CSS_FOCUSSED);
/*
t_clear( caller );
*/
    /*}}}*/
    /*  keyword {{{*/
    let keyword;
    if(!keyword) try { keyword =                e_target.id;                   } catch(ex) {}
    if(!keyword) try { keyword = get_first_word(e_target.textContent, caller); } catch(ex) {}
    if(!keyword)       keyword =                e_type;
/*{{{
logXXX("keyword=["+keyword+"]");
}}}*/
    /*}}}*/
    switch(keyword) {
        /* Traversal {{{*/
        case "NodeIterator":
        case "TreeWalker"  :
        case "childNodes"  :
        case "tagNodes"    :
        {
            current_traversal = keyword;

if(log_this) log("%c SETTING current_traversal to %c"+current_traversal, lbL, lbR);
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
/*{{{*/
let   caller = "t_call_dom_traversal";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

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
    if( tools_filter_input ) t_focus( tools_filter_input );
};
/*}}}*/
/*_ t_log_option_changes {{{*/
let t_log_option_changes = function(changes)
{

    let options
        = prop_get( WORDS_EXACT   ) ? WORDS_EXACT
        : prop_get( WORDS_SEGMENT ) ? WORDS_SEGMENT
        :                             WORDS_HEAD_TAIL
    ;
    let s = "<em>"+changes+"</em>" +"<br>"+LF
        +"<table>"+LF
        +"<tr><th>OPTIONS:</th></tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state( TOOLS_SCROLL       , prop_get( TOOLS_SCROLL       )     ) +"</td>"
        +" <td>"+ get_log_option_state( ANCHOR_FREEZE      , prop_get( ANCHOR_FREEZE      )     ) +"</td>"
        +" <td>"+ get_log_option_state( CONTAINERS_HI      , prop_get( CONTAINERS_HI      )     ) +"</td>"
        +" <td>"+ get_log_option_state( SCROLL_SMOOTH      , prop_get( SCROLL_SMOOTH      )     ) +"</td>"
        +" <td>"+ get_log_option_state( OVERFLOW_VISI      , prop_get( OVERFLOW_VISI      )     ) +"</td>"
        +" <td>"+ get_log_option_state( TOOLS_EXTRAS       , prop_get( TOOLS_EXTRAS       )     ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_value("WORDS OPTIONS"     , t_get_words_options_symbol( options )     )
        +" <td>"+ get_log_option_state( WORDS_EXACT        , prop_get( WORDS_EXACT        )     ) +"</td>"
        +" <td>"+ get_log_option_state( WORDS_SEGMENT      , prop_get( WORDS_SEGMENT      )     ) +"</td>"
        +" <td>"+ get_log_option_state( WORDS_HEAD_TAIL    , prop_get( WORDS_HEAD_TAIL    )     ) +"</td>"
        +" <td>"+ get_log_option_state( WORDS_OPCYCLE      , prop_get( WORDS_OPCYCLE      )     ) +"</td>"
        +" <td>"+ get_log_option_state( WORDING            , prop_get( WORDING            )     ) +"</td>"
        +" <td>"+ get_log_option_state( THEME_DARK         , prop_get( THEME_DARK         )     ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
      /*+" <td>"+ get_log_option_value("tools_node"        , "<em class='cc9'>"+tools_node  +"</em>" )         */
      /*+" <td>"+ get_log_option_value("tools_filter"      , "<em class='cc9'>"+tools_filter+"</em>" )         */
      /*+" <td>"+ get_log_option_state("filter_auto"       , filter_auto                             ) +"</td>"*/
      /*+" <td>"+ get_log_option_state("transcripts"       , transcripts                             ) +"</td>"*/
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state("logging_EVENTS"    , logging_EVENTS                          ) +"</td>"
        +" <td>"+ get_log_option_state("logging_HIGHLIGHT" , logging_HIGHLIGHT                       ) +"</td>"
        +" <td>"+ get_log_option_state("logging_TOOLBAR"   , logging_TOOLBAR                         ) +"</td>"
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
/*_ t_override_USER_OPTION .. (called while adjusting .. by s_touchedWord_adjust) {{{*/
/*{{{*/
let t_override_USER_OPTION = function(key, val)
{
/*{{{*/
let   caller = "t_override_USER_OPTION("+key+", "+val+")";
let log_this = logging_something();

if( log_this) log(caller);
/*}}}*/
    if(!cached_user_options_map_get(key) ) {
        cached_user_options_map_set(key, prop_get(key));
if(log_this) log(caller+": ...caching USER OPTION %c"+key+"%c"+val, lbL+lf3, lbR+lf3);
    }
if(log_this) log(caller+": ...overriding "+key+" option from %c "+cached_user_options_map_get(key)+" %c to %c "+val, lb1,lbA ,lb2);
    prop_set(key, val);
};
/*}}}*/
/*_ t_reinstate_USER_OPTIONS .. (called when done .. by onDown_1_INIT_CTRL_DEBOUNCE_INPUT) {{{*/
let t_reinstate_USER_OPTIONS = function(key)
{
/*{{{*/
let   caller = "t_reinstate_USER_OPTIONS("+key+")";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV0_LISTEN;

if( log_this) log(caller);
/*}}}*/
    for(let i=0; i< cached_user_options_map.length; ++i)
    {
        let    key =   cached_user_options_map[i].key;
        let cached =   cached_user_options_map[i].val;
        let option =                prop_get(key);
        if( option != cached) {
if(log_this)
        log(caller+": ...restoring %c"+key+"%c option from %c"+option+"%c to %c"+cached+"]"
            ,                      lb1     ,lbA           ,lb4       ,lbA   ,lb3           );
            prop_set(key, cached);
        }
        else {
if(log_this)
        log(caller+": ............ %c"+key+"%c option ==== %c"+cached+"%c (as cached)"
            ,                      lb1     ,lbA           ,lb3       ,lbA             );
        }
    }
    cached_user_options_map = [];
};
/*}}}*/

/*_ t_onclick_target_handle_scroll_to_slot_num {{{*/
let t_onclick_target_handle_scroll_to_slot_num = function(e_target, _caller)
{

let log_this = LOG_MAP.EV5_TOOL_CB || LOG_MAP.T2_GRID || LOG_MAP.T6_SLOT;

if(log_this) log("t_onclick_target_handle_scroll_to_slot_num(e_target=["+get_n_lbl(e_target)+"]) ..%c CALLED BY "+ _caller, lb0);

    /* slot */
    let     slot  = get_slot_from_id_or_className(e_target);
    if(     slot <= 0) return "NO SLOT FOR "+get_n_lbl(e_target);

    if(!ccs[slot].thumbs) ccs[slot].thumbs = [];

    /* num */
    let num = get_num_from_id_or_className_slot(e_target, slot);
if(log_this) log_add_TR_SELECT(".slot=<em>"+slot+"</em> num=<em>"+num+"</em>");
if(log_this) log(              ".slot="    +slot     +" num="    +num        );

    /* next num .. f(last_highlight_thumb_p) */
    if(!num) {
        num = get_slot_num_for_thumb_p(slot, last_highlight_thumb_p, prop_get( SEL_BACK ));
if(log_this) log(".slot_num_for_thumb_p=["+ num +"]");

        /* next num .. (may wrap at boundaries) */
        let first = 1;
        let  last = ccs[slot].nodes.length;

        if(prop_get( SEL_BACK )) num = (num > first) ? num-1 : last;
        else                          num = (num < last ) ? num+1 : first;
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
/*_ [cached_user_options_map] ARRAY .. set get {{{*/

let cached_user_options_map = [];

let cached_user_options_map_set = function(key,val)
{
    cached_user_options_map.push({ key:key , val:val });
};

let cached_user_options_map_get = function(key)
{
    for(let i=0; i< cached_user_options_map.length; ++i) {
        if(key   == cached_user_options_map[i].key) {
            return  cached_user_options_map[i].val;
        }
    }
    return null;
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
/*{{{
logBIG("t_standby_bag_id("+bag_id+")",lf1)
}}}*/
/*{{{*/
    let caller = "t_standby_bag_id("+bag_id+")";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbF+lb0);
if( log_this) log_add_TR_EVENT("<em class='cc1'>STANDBY</em> <em class='cc9'>"+bag_id+"</em>");
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, " <em class='cc9'>standby ["+bag_id+"]</em>");
/*}}}*/

    /* clear old */
    if(onStandby_PANEL) t_standby3_release("t_standby_bag_id");

    /* select new */
    if(bag_id) onStandby_PANEL = get_tool(bag_id);
    else       onStandby_PANEL = null;

    if(onStandby_PANEL) add_el_class(onStandby_PANEL, CSS_STANDBY);

if(onStandby_PANEL) if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_3_RESULT, " Setting "+bag_id+" on STANDBY");

    /* new timer */
    if(t_standby1_timer) clearTimeout(t_standby1_timer);
    t_standby1_timer =     setTimeout(t_standby1_handle, T_STANDBY1_DELAY);
};
/*}}}*/
/*_ t_standby1_handle {{{*/
let t_standby1_handle = function()
{
/*{{{
logBIG("t_standby1_handle",lf1)
}}}*/
    if(!onStandby_PANEL) return;

    let caller = "t_standby1_handle";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller+": ["+onStandby_PANEL.id+"]", lbF+lb1);

    switch( onStandby_PANEL.id )
    {
        case "pat_bag":
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_1_INPUT, " STANDBY HANDLE <em class='cc9'>"+onStandby_PANEL.id+"</em>");
        t_pat_bag_stage_target( pat_bag );
        break;

        case "sel_bag":
        prop_toggle( SEL_BACK );
if(log_this) log_add_TR_EVENT("_<em class='cc3'>SELBAG SELECT <em class='cc9'>"+(prop_get( SEL_BACK ) ? "BACKWARD" : "FORWARD")+"</em></em>");
        t_sync_seek_back(caller);
        break;
    }

    if( t_standby2_is_done(onStandby_PANEL.id, caller) )
        t_standby3_release(caller);
};
/*}}}*/
/*_ t_standby2_is_done {{{*/
let t_standby2_is_done = function(id,_caller)
{
/*{{{
logBIG("t_standby2_is_done",lf2)
}}}*/
let log_this = LOG_MAP.S2_SELECT;

/*
    let target_handled
        =               (id     != "pat_bag")
        || !has_el_class(pat_bag, CSS_OPEN_BAG)
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
/*{{{
logBIG("t_standby3_release",lf3)
}}}*/
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;
if( log_this) log("%c t_standby3_release: ["+get_n_lbl(onStandby_PANEL)+"] .. CALLED BY "+ _caller, lbF+lb3);

    if( !check_wall_of_text_done)
    {
logXXX("CALLING check_wall_of_text");
/*{{{
}}}*/
        check_wall_of_text();
    }

    if(!onStandby_PANEL) return;

    if(t_standby1_timer) clearTimeout( t_standby1_timer );
    /*..............................*/ t_standby1_timer = null; /* done */

    del_el_class(onStandby_PANEL, CSS_STANDBY);

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_3_RESULT, " STANDBY CLEAR <em class='cc9'>"+onStandby_PANEL.id+"</em>");

    onStandby_PANEL  = null;
};
/*}}}*/
/*}}}*/
/* TOOL CLEAR {{{*/
/*_ t_clear {{{*/
/*{{{*/
let T_CLEAR_INTERVAL_MIN = 500;
let t_clear_timeStamp    = 0;
/*}}}*/
let t_clear = function(_caller)
{
/*{{{*/
    let caller = "t_clear .. CALLED BY ["+_caller+"]";
let log_this = logging_something();
if( log_this) log(caller);
if( log_this) log("...t_preventDefault_caller=["+t_preventDefault_caller+"]");
/*
if( t_preventDefault_has_been_called("t_clear") ) return;
*/
/*}}}*/
    /* ...debounce {{{*/
    let          this_MS = new Date().getTime();
    let t_clear_interval = this_MS - t_clear_timeStamp;
    if( t_clear_interval < T_CLEAR_INTERVAL_MIN)
    {
if(log_this) log(caller+": BOUNCING: "+t_clear_interval+" < (T_CLEAR_INTERVAL_MIN "+T_CLEAR_INTERVAL_MIN+")");
        return;
    }
    t_clear_timeStamp = this_MS;

    /* clear log buffers */
    log();

    /* clear browser selection */
    t_window_getSelection_removeAllRanges(caller);

    /*}}}*/
    /* TARGET ACTION .. (pat_bag input cycle dblclick) {{{*/
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
        /* CLEAR : TARGET=[default ] ACTION=[           dblclick] {{{*/
        case "default.dblclick":

if(log_this) log(".fall through case default...");
        /*}}}*/
        /* CLEAR : default .. (transcript1 transcript2 doc_evt_div doc_log_div) {{{*/
        default:
/*{{{
if(!LOG_MAP.EV3_UP) console_clear_post(caller + (onWork_PANEL ? " on "+get_n_lbl(onWork_PANEL) : ""));
}}}*/

        /* LOG BUFFER */
        log();
if( LOG_MAP.EV3_UP) log("%c t_clear("+caller+") console logs preserved for %c LOG_MAP.EV3_UP", lb4, lbF+lb3);

        /* LOG TOOLS */
        log_clr_TR1(caller);
        log_clr_TR2(caller);

        /* bring back empty pinned panels within window viewport */
        if( transcript1.classList.contains(CSS_PINNED) ) t_clear_move_panel_within_window(transcript1);
        if( transcript2.classList.contains(CSS_PINNED) ) t_clear_move_panel_within_window(transcript2);

        /* DOCUMENT DIV */
        t_doc_div_clear("doc_evt_div");
        t_doc_div_clear("doc_log_div");

        /*}}}*/
    }
    t_outline_clear();
    /* CACHE */
    t_cache_init_by(caller);
};
/*}}}*/
/*_ t_clear_move_panel_within_window {{{*/
let t_clear_move_panel_within_window = function(panel)
{
    let caller = "t_clear_move_panel_within_window("+get_n_lbl(panel)+")";
let log_this = logging_something();

    let xy = get_el_xy(panel, caller);

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
/*  DOC  CB {{{*/
/*_ t_body_width_show {{{*/
let t_body_width_show = function()
{
    let panel = get_tool("headsup_bw_value"); if(!panel) return;
    let     m = parseInt( document.body.style.marginLeft );
    let     w = parseInt( document.body.clientWidth      )
        -                 document.body.clientLeft          /* borders */
        ;
    if( isNaN(m) ) m = 0;
    if( isNaN(w) ) w = 0;

    panel.innerHTML = "BODY "
        +" <em class='cc1' title='Body   style.marginLeft'      >"+ SYMBOL_LEFT_HALF_BLACK     +" "+ m   +"</em>"
        +" <em class='cc2' title='Body   clientWidth clientLeft'>"+ SYMBOL_BLACK_SMALL_SQUARE  +" "+ w   +"</em>"
        +" <em class='cc3' title='Window innerWidth'            >"+ SYMBOL_BLACK_MEDIUM_SQUARE +" "+ w_W +"</em>"
    ;
    t_eval_wide_or_tall_panel( panel );
};
/*}}}*/
/*_ t_body_layout_CB {{{*/
let t_body_layout_CB = function(e_target)
{
/*{{{*/
let   caller = "t_body_layout_CB("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf7);

    if( has_moved                                ) return;
    if( e_target.tagName != "EM"                 ) return;
/*}}}*/

    let body_width = parseInt( e_target.innerText.trim() );
if( log_this) log("...body_width=["+body_width+"]");

    if(!isNaN(body_width) ) {
        body_width -= 2 * document.body.clientLeft; /* left and right borders */
/*{{{
        let   m =    (w_W - body_width) / 2;
        document.body.style.marginLeft  = m+"px";
        document.body.style.width       = body_width+"px";
        let style = getComputedStyle( document.body );
        document.body.setAttribute("style", style +"; width: "+ body_width +"px !important");
}}}*/
        document.body.style.width       = body_width+"px";
    }
    else {
        document.body.style.width       = ""/*"initial"*/;
    }

    t_layout_listener();
};
/*}}}*/

/*_ t_body_zoom_show {{{*/
let t_body_zoom_show = function()
{
    let panel = get_tool("headsup_bz_value"); if(!panel) return;

    let zoom_class = document.body.className  ? "cc2" : "cc8";

    let zoom_label
        =  document.body.className.includes("zoom")
        ?  document.body.className
        : (document.body.style.zoom || "default");

    panel.innerHTML = "BODY zoom factor <em class='"+zoom_class+"'>"+zoom_label+"</em>";

    t_eval_wide_or_tall_panel( panel );
};
/*}}}*/
/*_ t_body_zoom_CB {{{*/
/*{{{*/
let   body_zoom_percent = 100;

/*}}}*/
let t_body_zoom_CB = function(e_target)
{
/*{{{*/
    let caller   = "t_body_zoom_CB("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV0_LISTEN || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf7);

    if(has_moved                                 ) return;
    if(e_target.tagName != "EM"                  ) return;
/*}}}*/

    let old_page_height = get_page_height();

    /* [body_zoom_percent] {{{*/
    body_zoom_percent = parseInt( e_target.innerText.trim() );
if( log_this) log("...body_zoom_percent=["+body_zoom_percent+"]");

    if( !isNaN(body_zoom_percent) )
    {
        let className = "zoom_"+body_zoom_percent;
        set_el_class(document.body , className);
    }
    else {
        body_zoom_percent          = 100 ;
        set_el_class(document.body ,  "");
        set_el_class(dom_tools_html,  "");
    }
    /*}}}*/

    let new_page_height = get_page_height();

    let    s_X = Math.floor(window.scrollX);
    let    s_Y = Math.floor(window.scrollY * new_page_height / old_page_height);


if( log_this)
    log_key_val_group( caller
                       , {            WINDOW : window.innerHeight +" "+ window.innerWidth
                           ,          SCROLL : window.scrollX     +" "+ window.scrollY
                           ,         s_X_s_Y :                s_X +" "+ s_Y
                           , old_page_height : old_page_height
                           , new_page_height : new_page_height
                       }, lf1, false
                     );

    s_X /= (body_zoom_percent  / 100);
    s_Y /= (body_zoom_percent  / 100);
    t_window_scrollTo(s_X, s_Y, "instant");

    t_layout_listener();

/*{{{ to update selection thumbs .. OBSOLETE!
    t_pat_bag3_reselect();
}}}*/
};
/*}}}*/

/*_ prop_tools_CB {{{*/
let prop_tools_CB = function(e_target)
{
/*{{{*/
let   caller = "prop_tools_CB(e_target=["+get_n_lbl(e_target)+"]";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbb+lbH+lf7);
/*}}}*/
    /* [has_moved] [t_preventDefault_has_been_called] [t_event_has_been_consumed] {{{*/
    let keyword = ""; try { keyword = e_target.id                ; } catch(ex) {}
    if(!keyword)      try { keyword = e_target.title      .trim(); } catch(ex) {}
    if(!keyword)      try { keyword = e_target.textContent.trim(); } catch(ex) {}

/*{{{
if( log_this) {
    log("%c...............e_target............=["+ get_n_lbl(e_target)                      +"]", lf8);
    log("%c...............e_target.textContent=["+           e_target.textContent           +"]", lf8);
    log("%c...............e_target.title......=["+           e_target.title                 +"]", lf8);
    log("%c............................keyword=["+ keyword                                  +"]", lf8);
    log("%c..........................has_moved=["+ has_moved                                +"]", lf8);
    log("%c..........t_event_has_been_consumed=["+ t_event_has_been_consumed       (caller) +"]", lf8);
    log("%c...t_preventDefault_has_been_called=["+ t_preventDefault_has_been_called(caller) +"]", lf8);
}
}}}*/

    if( has_moved                                ) return;
/*{{{
    if( t_preventDefault_has_been_called(caller) ) return;
}}}*/
/*{{{
    if( e_target.tagName != "EM"                 ) return;
    if( t_event_has_been_consumed(caller)        ) return;
}}}*/
    /*}}}*/
    /* parse [keyword] {{{*/
    if(logging_toggle( keyword ))
    {
log("%c "+caller+": %c TOGGLED keyword=["+ keyword +"]",lb9, lbF);

        t_store_update_post("DOC LOGGING CB");
    }
    /*}}}*/
    /* SYNC TOOL CLONES {{{*/
    t_sync_tool_clones( caller );

    /*}}}*/
};
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

/*}}}*/
/* LAYOUT */
/*{{{*/
/* t_layout_listener {{{*/
/*{{{*/
let LAYOUT_CHANGED_DELAY = 200;
let layout_changed_timer;

/*}}}*/
let t_layout_listener = function(delay=LAYOUT_CHANGED_DELAY)
{
    if(layout_changed_timer) clearTimeout(layout_changed_timer );
    layout_changed_timer   =   setTimeout(layout_changed_handler, delay); /* wait for new window geometry */
};
/*}}}*/
/* t_resize_listener {{{*/
let t_resize_listener = function(e)
{
    if(layout_changed_timer) clearTimeout(layout_changed_timer);
    layout_changed_timer   =   setTimeout(layout_changed_handler, LAYOUT_CHANGED_DELAY); /* wait for new window geometry */

    scroll_changed(e);
};
/*}}}*/
/*_ layout_changed_handler {{{*/
let layout_changed_handler = function()
{
/*{{{*/
let   caller = "layout_changed_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    t_outline_clear();

    t_update_TOOLS_MAP_GEOMETRY(caller,0);

    t_cache_init_by(caller);

    /* DEV TOOLS: Toggle Device Toolbar */
    if(window.matchMedia("only screen and (min-resolution : 128dpi)").matches != behavior_TOUCH_ELSE_DESKTOP)
        document.location.reload();

    t_cache_layout("Layout changed");

    t_gutter_layout_has_CHANGED();

    /* TOOLS GRID {{{*/
    if( call_t_grid_IS_SIZED() )
    {
        if(has_el_class(dimm_mask, "dimm_target_tool"))
            t_target_tool_feed_stop(caller);
        dimm_start_grid(caller);
    }
    /*}}}*/
    /* DIMMED CONTAINERS {{{*/
    else if(div_slot_containers_displayed())
    {
        dimm_start_slot_containers(caller);

        t_scrollIntoViewIfNeeded_dimm_mask_container_selected( dimm_mask.firstElementChild );
    }
    /*}}}*/
    /* [t_target_tool_feed_deploy] {{{*/
    else if(target_tool && dimm_mask_displayed() && has_el_class(dimm_mask, "dimm_target_tool"))
    {
        if(has_el_class(dimm_mask, "dimm_target_tool"))
            t_target_tool_feed_deploy();
    }
    /*}}}*/
    if( dimm_mask_displayed() ) dimm_start(); /* no args to resize */

    t_sync_layout(caller);

    t_log_onlayout(caller);

    t_body_width_show();
    t_body_zoom_show();

    t_tool_set_top_xy(caller, topTool.x, topTool.y);

    t_TOOL_SET_eval_wide_or_tall_panel();

    layout_changed_timer = null;
};
/*}}}*/
/*}}}*/
/* SCROLL */
/*{{{*/
/* t_scroll_listener {{{*/
/*{{{*/
const SCROLLED_ENOUGH                 =  16;
const WINDOW_SCROLLTO_BY_SCRIPT_DELAY = 100;

let   has_been_scrolled_by_script;
/*}}}*/
let t_scroll_listener = function(e)
{
/*{{{*/
let caller = "t_scroll_listener";
let log_this = LOG_MAP.EV1_DOWN || LOG_MAP.EV3_UP;

    let scrolled_by_script = "";
    let scrolled_by_user   = "";
    let            this_MS = new Date().getTime();
/*}}}*/
        t_target_tool_set_parked(false, "SCROLL");
    /* WITHIN DELAY [SCROLL BY SCRIPT] {{{*/
    if( t_window_scrollTo_DONE_MS )
    {
        let elapsed = this_MS - t_window_scrollTo_DONE_MS;
        if( elapsed < WINDOW_SCROLLTO_BY_SCRIPT_DELAY)
            scrolled_by_script = "WITHIN SCROLL_BY_SCRIPT DELAY OF "+WINDOW_SCROLLTO_BY_SCRIPT_DELAY+"ms";

        t_window_scrollTo_DONE_MS = 0;

if( log_this) log("%c"+caller+"%c WINDOW SCROLL %c ENDED "+elapsed+"ms AGO"
                  ,lbL+lf8    ,lbC+lf9         ,lbR+lf3);
    }
    /*}}}*/
    /* WITHIN DELAY [SCROLL INTO VIEW IF NEEDED] {{{*/
    if( t_scrollIntoViewIfNeeded_DONE_MS )
    {
        let elapsed = this_MS - t_scrollIntoViewIfNeeded_DONE_MS;
        if( elapsed < WINDOW_SCROLLTO_BY_SCRIPT_DELAY)
            scrolled_by_script += " .. INTO VIEW";

        t_scrollIntoViewIfNeeded_DONE_MS = 0;
    }
    /*}}}*/
    /* WITHIN DELAY [SCROLL RECENTER] {{{*/
    if( t_scroll_recenter_DONE_MS )
    {
        let elapsed = this_MS - t_scroll_recenter_DONE_MS;
        if( elapsed < WINDOW_SCROLLTO_BY_SCRIPT_DELAY)
            scrolled_by_script += " .. RECENTER";

        t_scroll_recenter_DONE_MS = 0;
    }
    /*}}}*/
    /* WITHIN DELAY [SCROLL TO LAST HIDDEN NODE] {{{*/
    if( dom_hide4_scroll_to_last_hidden_handled_recently(WINDOW_SCROLLTO_BY_SCRIPT_DELAY) )
    {
        scrolled_by_script += " .. TO LAST HIDDEN NODE";

    }
    /*}}}*/
    if( div_slot_containers_displayed() ) {
        /* KEEP WITHIN [div_slot_containers] BOUNDS {{{*/
        let scrollY_max = dimm_mask.firstElementChild.offsetHeight - window.innerHeight;
        if(window.scrollY > scrollY_max)
        {
if( log_this) logBIG(caller+": .. CLIPPING window.scrollY=["+window.scrollY+"] TO scrollY_max=["+scrollY_max+"]", lf5);
            t_window_scrollTo(window.scrollX, scrollY_max, "instant");

            return;
        }
        /*}}}*/
        /* WAITING FOR [div_slot_containers] SCROLLED_INTO_VIEW {{{*/
        if( !has_el_class(dimm_mask.firstElementChild, SCROLLED_INTO_VIEW) )
        {
            scrolled_by_script += " .. WAITING CONTAINERS INTO VIEW";
        }
        else {
/*{{{
logXXX("IGNORING PENDING SCROLL CONTAINER INTO VIEW");
}}}*/
            return;
        }
        /*}}}*/
    }
    /* INTERRUPTED BY USER .. CLEAR ALL PENDING SCROLL HANDLERS {{{*/
    if( !scrolled_by_script )
    {
        if( t_scrollIntoViewIfNeeded_is_pending() ) {
if( log_this) log("%c SCROLLED BY USER %c CLEAR SCROLL INTO VIEW AND RECENTER", lbL+lf8, lbR+lf9);

            t_scrollIntoViewIfNeeded( null );
        }

        if( dom_hide4_scroll_to_last_hidden_is_pending() ) {
if( log_this) log("%c SCROLLED BY USER %c CLEAR SCROLL TO LAST HIDDEN HANDLER", lbL+lf8, lbR+lf9);

            dom_hide4_scroll_to_last_hidden( null );
        }
    }
/*{{{
    else if( onDown_MS ) {
        let elapsed = this_MS - onDown_MS;
if( log_this) log(caller+"%c scrolled_by_script=["+scrolled_by_script+"] %c ONDOWN TO SCROLL EVENT DELAY %c "+elapsed+"ms"
                  ,       lbH+lf7                                       ,lbL+lf4                        ,lbR+lf4);
    }
}}}*/
    /*}}}*/

if( log_this && scrolled_by_script) log("%c"+caller+" %c "+scrolled_by_script, lbb+lbL+lf8, lbb+lbR+lf3);
if( log_this && scrolled_by_user  ) log("%c"+caller+" %c "+scrolled_by_user  , lbb+lbL+lf7, lbb+lbR+lf3);
    scroll_changed(e, scrolled_by_script);
};
/*}}}*/
/*_ t_is_xy_in_viewport {{{*/
let t_is_xy_in_viewport = function(x,y)
{
    x = Math.floor(x);
    y = Math.floor(y);

    let x_min         =       window.scrollX;
    let y_min         =       window.scrollY;
    let x_max         =       window.scrollX + window.innerWidth ;
    let y_max         =       window.scrollY + window.innerHeight;
    let x_in_viewport = (x >= x_min) && (x <= x_max);
    let y_in_viewport = (y >= y_min) && (y <= y_max);

    let           lfx = x_in_viewport ? lf5 : lf8;
    let           lfy = y_in_viewport ? lf5 : lf8;

/*{{{
log("%c x_in_viewport %c "+x_min+" < "+x+" < "+x_max+" %c y_in_viewport %c "+y_min+" < "+y+" < "+y_max
    ,lbL+lfx         ,lbR+lf9                         ,lbL+lfy         ,lbR+lf9                       );
}}}*/

    return x_in_viewport && y_in_viewport;
};
/*}}}*/
/*_ t_is_xy_near_viewport {{{*/
let t_is_xy_near_viewport = function(x,y)
{
    x = Math.floor(x);
    y = Math.floor(y);

    let x_min         =       window.scrollX - window.innerWidth     ;
    let y_min         =       window.scrollY - window.innerHeight    ;
    let x_max         =       window.scrollX + window.innerWidth  * 2;
    let y_max         =       window.scrollY + window.innerHeight * 2;
    let x_nearviewport = (x >= x_min) && (x <= x_max);
    let y_nearviewport = (y >= y_min) && (y <= y_max);

    let           lfx = x_nearviewport ? lf5 : lf8;
    let           lfy = y_nearviewport ? lf5 : lf8;

/*{{{
log("%c x_nearviewport %c "+x_min+" < "+x+" < "+x_max+" %c y_nearviewport %c "+y_min+" < "+y+" < "+y_max
    ,lbL+lfx          ,lbR+lf9                         ,lbL+lfy          ,lbR+lf9                       );
}}}*/

    return x_nearviewport && y_nearviewport;
};
/*}}}*/
/*_ t_window_scrollTo {{{*/
/*{{{*/
/*{{{
let CACHED_GLOBAL_WINDOW_SCROLLTO = window.scrollTo;
let window_overriden_scrollTo_deleted;
}}}*/

let t_window_scrollTo_DONE_MS;
/*}}}*/
let t_window_scrollTo = function(x, y, scrollBehavior)
{
    x *= (body_zoom_percent  / 100);
    y *= (body_zoom_percent  / 100);
/*{{{
logXXX("%c t_window_scrollTo("+x+", "+y+", "+scrollBehavior+")", lbb+lbH+lf5);
logXXX("...y=["+y+"] (p_H)=["+p_H+"] (y/p_H)=["+parseInt(100 * y / p_H)+"%]");
logXXX("...scrollBehavior=["+scrollBehavior+"]");
}}}*/

    scrollBehavior = scrollBehavior || (prop_get( SCROLL_SMOOTH ) ? "smooth" : "instant");

    t_window_scrollTo_DONE_MS = new Date().getTime();

    if(scrollBehavior == "smooth") { set_smoothing( true); window.scrollTo(x, y); if( !prop_get( SCROLL_SMOOTH ) ) set_smoothing(false); }
    else                           { set_smoothing(false); window.scrollTo(x, y); if(  prop_get( SCROLL_SMOOTH ) ) set_smoothing( true); }

    onMoveDXY.x = 0;
    onMoveDXY.y = 0;
};
/*}}}*/
/*_ set_smoothing {{{*/
/*{{{*/
let html;

/*}}}*/
let set_smoothing = function(smoothing)
{
    if(!html)   html  = document.getElementsByTagName("HTML")[0];
    let is_smoothing  = has_el_class(html,   SCROLL_SMOOTH );

    if( is_smoothing != smoothing) {
/*{{{
logXXX("%c set_smoothing %c "+smoothing, lbL, lbR+(smoothing ? lf5 : lf8));
}}}*/
        set_el_class_on_off(html           , SCROLL_SMOOTH               , smoothing);
        set_el_class_on_off(    prop_get_EL( SCROLL_SMOOTH ), CSS_CHECKED, smoothing);
    }
};
/*}}}*/
/*_ scroll_changed {{{*/
let scroll_changed = function(e, scrolled_by_script="")
{
/*{{{*/
let   caller = "scroll_changed";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller +": ["+ window.scrollX +" "+ window.scrollY +"]"+ (scrolled_by_script ? " scrolled_by_script" : "") + (container_selected ? " container_selected=["+get_id_or_tag(container_selected)+" "+get_n_txt(container_selected)+"]" : "") + (onWork_SEEK_TOOL   ? " onWork_SEEK_TOOL"   : ""));
/*}}}*/
    /* has_been_scrolled_by_script {{{*/
    if(scrolled_by_script && !has_been_scrolled_by_script && (Math.abs(window.scrollY - onDown_SCROLL_XY.y) > SCROLLED_ENOUGH))
    {
        has_been_scrolled_by_script = "HAS SCROLLED .. abs("+(window.scrollY - onDown_SCROLL_XY.y)+") > "+ SCROLLED_ENOUGH;
    }
    /*}}}*/
    t_set_has_moved(has_been_scrolled_by_script || caller);
    /* seeker follow scrolling {{{*/
    if( !t_seeker_sync_is_pending() )
        t_seeker_sync();

    /*}}}*/
    if( div_slot_containers_displayed() )
    {
        /* div_slot_containers {{{*/
        if(dimm_mask.firstElementChild.id == "div_slot_containers")
        {
            /* SCROLLED BY SCRIPT */
            if( scrolled_by_script )
            {
if( log_this) logBIG(caller+": "+ scrolled_by_script +" .. SCROLL INTO VIEW", lf4);

                t_scrollIntoViewIfNeeded_dimm_mask_container_selected( dimm_mask.firstElementChild );
            }
            /* SCROLLED BY USER .. INTERRUPT SCHEDULED SCROLLING */
            else if( t_scrollIntoViewIfNeeded_is_pending() )
            {
if( log_this) logBIG(caller+": "+ scrolled_by_script +" .. SCROLL INTO VIEW CANCELED", lf5);

                t_scrollIntoViewIfNeeded_dimm_mask_container_selected( null );
            }
        }
        /*}}}*/
    }
    /* follow [container_selected] {{{*/
    if(container_selected)
    {
        t_set_onSeekXYL_from_container(container_selected,  caller+" ON ["+get_n_lbl(container_selected)+"]");
    }
    /*}}}*/
    /* display current window scrollY percentage .. (thumb_p) {{{*/
    if( toolbar_thumb )
    {
        /* keep only 2 digits */
        let thumb_p             = 100 * window.scrollY / get_page_height();
        let thumb_p_str         = get_thumb_p_str(thumb_p);
        toolbar_thumb.innerHTML = thumb_p_str.replace(" ","&nbsp;");
    }
    /*}}}*/
    /* track and store [tools_scrollY] {{{*/
    if(!scroll_check_timeout)
    {
/*{{{
console_clear("scroll_changed")
logXXX("SCROLLING START");
}}}*/
        add_el_class(document.body, CSS_SCROLLING);

        scroll_check_timeout = setTimeout(scroll_check_handler, SCROLL_DONE_COOLDOWN);
    }
    /*}}}*/
};
/*}}}*/
/*_ scroll_check_handler {{{*/
/*{{{*/
const SCROLL_DONE_COOLDOWN  =  250;
let   scroll_check_timeout  = null;

let   scroll_last_scrollY   = 0;
/*}}}*/
let scroll_check_handler     = function()
{
/*{{{*/
let   caller = "scroll_check_handler";
let log_this = LOG_MAP.T3_LAYOUT;

    scroll_check_timeout = null;
/*}}}*/
    let                this_scrollY  =      window.scrollY;
    let done_moving = (this_scrollY == scroll_last_scrollY);
    if( done_moving )
    {
        /* [el_to_mark_SCROLLED_INTO_VIEW] MARK DONE {{{*/
        if( el_to_mark_SCROLLED_INTO_VIEW )
        {
if( log_this) log("%c"+caller+" %c ["+get_id_or_tag(el_to_mark_SCROLLED_INTO_VIEW) +"] SCROLLED_INTO_VIEW DONE", lbb+lbL+lf8, lbb+lbR+lf3);

            add_el_class(el_to_mark_SCROLLED_INTO_VIEW, SCROLLED_INTO_VIEW);

            el_to_mark_SCROLLED_INTO_VIEW = null;
        }
        /*}}}*/
        /* SCROLLING DONE: .. CALL [t_clr_has_moved] {{{*/
        t_clr_has_moved("scroll_check_handler");

        del_el_class(document.body, CSS_SCROLLING);

        scroll_done_collect_nodes_in_view();
        /*}}}*/
        /* STORE SCROLL POSITION {{{*/
        store_set_value("tools_scrollY", scroll_last_scrollY);

        /*}}}*/
    }
    else {
        /* RECHECK AGAIN LATER {{{*/
        scroll_last_scrollY  = this_scrollY;
        scroll_check_timeout = setTimeout(scroll_check_handler, SCROLL_DONE_COOLDOWN);
        /*}}}*/
    }
};
/*}}}*/
/*_ scroll_not_done_yet {{{*/
let scroll_not_done_yet = function()
{
    return (scroll_check_timeout != null);
};
/*}}}*/
/* TODO */
/*_ scroll_done_collect_nodes_in_view {{{*/
/*{{{*/
let nodes_in_view_array         = [];

/*}}}*/
let scroll_done_collect_nodes_in_view = function(dir)
{
/*{{{*/
let   caller = "scroll_done_collect_nodes_in_view";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c TODO %c "+caller, lbb+lbL+lf2, lbb+lbR+lf8);
/*..............*/ return;

if( log_this) console.time(caller);
/*}}}*/
    /* CURRENT [VIEWPORT TOP BOTTOM] thumb_p {{{*/
    let view_T = window.scrollY;
    let view_B = window.scrollY+ window.innerHeight;

if( log_this) log("...view_T=["+ view_T +"]");
if( log_this) log("...view_B=["+ view_B +"]");
    /*}}}*/
    /* FORGET PREVIOUSLY VIEWABLE NODES {{{*/
    for(let i = 1; i <= nodes_in_view_array.length; ++i)
        del_el_class(   nodes_in_view_array[i], CSS_VIEWABLE);

    /*}}}*/
    /* COLLECT CURRENTLY VIEWABLE NODES {{{*/
    nodes_in_view_array = [];
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
                nodes_in_view_array.push( node );
                add_el_class(node, CSS_VIEWABLE);

if( log_this) log(". "+nodes_in_view_array.length+": slot["+slot+"] num["+num+"]");
            }
        }

    }
    /*}}}*/
if( log_this) console.time(caller);
if( log_this) console.timeEnd(caller);
};
/*}}}*/
/*}}}*/
/*}}}*/

/* EVENT CALLBACK */
/*{{{*/

/* 1 [t1_onclick] .. called from [onUp_5_TOOL_ONCLICK] */
/*{{{*/
const T_ONCLICK_DELAY = CLICK_DURATION;
let   t_onclick_e_target;
let   t_onclick_timer;

/*}}}*/
/*  t1_onclick {{{*/
let t1_onclick = function(e_target, delay=0, dblclicked=false)
{
/*{{{*/
let   caller = "t1_onclick("+get_n_lbl(e_target)+", delay=["+delay+"], dblclicked=["+dblclicked+"])";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf5);
/*}}}*/
    /* return .. f(t_event_has_been_consumed) {{{*/
    if( t_event_has_been_consumed(caller) )
    {
if(log_this) console_warn("*** "+caller+": ALREADY CONSUMED BY:"+LF+t_event_consumed_cause);

        return;
    }
    /*}}}*/
    /* or repost .. f(t_onclick_timer) {{{*/
    if(t_onclick_timer) clearTimeout(t_onclick_timer);
    /*............................*/ t_onclick_timer = null;

    t_onclick_e_target   = e_target;

    if( delay ) t_onclick_timer = setTimeout(t1_onclick_handler, delay);
    else                                     t1_onclick_handler();
    /*}}}*/
};
/*}}}*/
/*  t1_onclick_handler {{{*/
let t1_onclick_handler = function()
{
/*{{{*/
let   caller = "t1_onclick_handler";
let log_this = LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* [e_target] .. f(parentElement htmlFor firstElementChild) {{{*/
    let e_target = t_onclick_e_target;
    if( e_target.nodeType == Node.TEXT_NODE)
        e_target = e_target.parentElement;

    if(!e_target.id && t_is_a_tool_el(onWork_EL, caller))
    {
        if     ( e_target.htmlFor                              ) e_target = document.getElementById(e_target.htmlFor              ); /* INPUT label for */
        else if( e_target.parentElement.htmlFor                ) e_target = document.getElementById(e_target.parentElement.htmlFor); /* INPUT label for */
        else if( e_target.firstChild.nodeType != Node.TEXT_NODE) e_target = e_target.firstChild;
    }

    if(!e_target) return;
    /*}}}*/
    /* ID by content {{{*/
    if(!e_target.id ) {
        if(e_target.textContent && (e_target.textContent.length <= 64))
            e_target.id = e_target.textContent.trim();
    }
    /*}}}*/
    /* [bag_id] {{{*/
    let   bag_id = get_bag_id(e_target);

    /*}}}*/
/*{{{*/
if(log_this) {
    let s = log_key_val(       caller
                         , {   e_target : get_n_lbl( e_target        )
                             ,   bag_id :            bag_id
                             ,  standby : get_n_lbl( onStandby_PANEL )
                          }
                         , lf5
                       );
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly( s );

    t_log_event_status(caller+": e_target.id=["+e_target.id+"] bag_id=["+bag_id+"]", lf5);
}
/*}}}*/
    t1_onclick_e_target_bag_id(e_target, bag_id);
};
/*}}}*/
/*  t1_onclick_e_target_bag_id {{{*/
let t1_onclick_e_target_bag_id = function(e_target, bag_id)
{
/*{{{*/
let   caller = "t1_onclick_e_target_bag_id";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this)
    log("%c"+caller+"%c"+get_n_lbl(e_target)+"%c bag_id=["+bag_id+"]"
       ,lbL         ,lbC+lf3                 ,lbR+lf4);
/*}}}*/
    /* 1/5 CB BAG PIN  {{{*/
    let consumed_by;
    if( has_el_class(e_target, CSS_PUSH_PIN) ) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_PUSH_PIN; }
    if( has_el_class(e_target, CSS_CLOSEPIN) ) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_CLOSEPIN; }
    if( has_el_class(e_target, CSS_SCALEPIN) ) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_SCALEPIN; }
    if( has_el_class(e_target, CSS_CLEARPIN) ) { t_click_panel_pin_CB(onWork_PANEL, e_target); consumed_by = bag_id+"."+CSS_CLEARPIN; }

    /*}}}*/
    /* 2/5 CB BAG DELEGATE {{{*/
    if(!consumed_by && bag_id)
    {
        switch(bag_id)
        {
        case "sel_bag"      :
        case "seeker_PU"    :
        case "seeker_PD"    : t1_onclick_seek_or_sel(e_target, bag_id ); consumed_by = bag_id; break;

        case "pat_bag"      : t1_handle_pat_bag     (e_target         ); consumed_by = bag_id; break;

/*{{{
        case "headsup_w"    : t3_wording_CB         (e_target, "click"); consumed_by = bag_id; break;
}}}*/
        case "headsup_bw"   : t_body_layout_CB      (e_target         ); consumed_by = bag_id; break;
        case "headsup_bz"   : t_body_zoom_CB        (e_target         ); consumed_by = bag_id; break;

        case "dom_traversal": t_dom_traversal_CB    (e_target, "click"); consumed_by = bag_id; break;

        case "dev_log_map"  :
        case "prop_bag"     : prop_tools_CB         (e_target         ); consumed_by = bag_id; break;

        case "fly_div"      : t_fly_clr_div         (e_target         ); consumed_by = bag_id; break;

        default:
if(log_this) log("%c"+caller+"%c ["+bag_id+"] has no delegation from ["+get_n_lbl(e_target)+"]"
                 ,lbL        ,lbH+lf8                                                          );
        break;
        }
    }
    /*}}}*/
    /* 3/5 CB [e_target] {{{*/
    if(!consumed_by)
    {
        if( t1_onclick_e_target(e_target) )
            consumed_by = "["+e_target.id+"] HANDLER";

    }
    /*}}}*/
    /* 4/5 EXTRA [e_target] CB {{{*/
    if(!consumed_by)
    {
        switch(e_target.id)
        {
        case "pat_sort"     : t1_handle_pat_bag_sort(); consumed_by = e_target.id; break;

        case "console_clear": console_clear   (caller); consumed_by = e_target.id; break;

        case "dimm_mask"    : {
            dimm_stop(caller);
            if(has_el_class(dimm_mask, "dimm_target_tool")) t_target_tool_feed_stop("dimm_start");
        }
        consumed_by = e_target.id;
        break;

        case "recycle"     : t3_wording_CB(e_target, "click"); consumed_by = e_target.id;   break;
        case "tools_filter": t3_wording_CB(e_target, "click"); consumed_by = e_target.id;   break;

        default:
        log("%c"+caller+"%c NO EXTRA HANDLER FOR %c e_target=["+get_n_lbl(e_target)+"]"
            ,lbL        ,lbR+lf2                ,lbH+lf4                               );
        break;
        }
    }
    /*}}}*/
    /* 5/5 DEFAULT PROP TOGGLE [e_target] {{{*/
    if(!consumed_by)
    {
        consumed_by = t1_prop_id_state_CB(e_target.id, "toggle");
    }
    /*}}}*/
if( log_this) log("%c"+caller+"%c consumed_by %c"+consumed_by, lbL, lbR+lf1, lbR+lf3);
};
/*}}}*/
/*  t1_onclick_e_target {{{*/
let t1_onclick_e_target = function(e_target)
{
/*{{{*/
let   caller = "t1_onclick_e_target("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf5);
/*}}}*/
    /* [hotring] {{{*/
    if( e_target.id == "hotring"                           ) { t_move_TOOLS_TOGGLE_GRID(caller); return true; }

    /*}}}*/
    /* t_is_a_toggle_option {{{*/
    if( t_is_a_toggle_option(e_target.id)                  ) { t1_prop_id_toggle( e_target.id   );   return true; }

    /*}}}*/
    /* pin .. (has_el_class) {{{*/
    if( has_el_class(e_target, CSS_PUSH_PIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    if( has_el_class(e_target, CSS_CLOSEPIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    if( has_el_class(e_target, CSS_SCALEPIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    if( has_el_class(e_target, CSS_CLEARPIN)               ) { t_click_panel_pin_CB(onWork_PANEL, e_target); return true; }
    /*}}}*/
    /* transcript {{{*/
    if( e_target.id == "transcript1_clearpin"              ) {                               log_clr_TR1(caller); return true; }
    if( e_target.id == "transcript2_clearpin"              ) {                               log_clr_TR2(caller); return true; }
    if( is_el_or_child_of_parent_el(e_target, transcript1) ) { if(is_a_dblclick_last_result) log_clr_TR1(caller); return true; }
    if( is_el_or_child_of_parent_el(e_target, transcript2) ) { if(is_a_dblclick_last_result) log_clr_TR2(caller); return true; }

     /*}}}*/
    /* [dom_hide] {{{*/
    if( e_target.id == "dom_hide1_reset"                 ) { dom_hide1_reset                ( ); return true; }
    if( e_target.id == "dom_hide2_store_reload"          ) { dom_hide2_store_reload         ( ); return true; }
    if( e_target.id == "dom_hide2_store_save"            ) { dom_hide2_store_save           ( ); return true; }
    if( e_target.id == "dom_hide4_scroll_to_last_hidden" ) { dom_hide4_scroll_to_last_hidden( ); return true; }
    if( e_target.id == "dom_hide5_start_history"         ) { dom_hide5_start_history        ( ); return true; }

    if( e_target.id == "dom_hide1_collect_nodes_1"       ) { dom_hide1_collect_nodes        (1); return true; }
    if( e_target.id == "dom_hide1_collect_nodes_2"       ) { dom_hide1_collect_nodes        (2); return true; }
    if( e_target.id == "dom_hide1_collect_nodes_3"       ) { dom_hide1_collect_nodes        (3); return true; }
    if( e_target.id == "dom_hide1_collect_nodes_4"       ) { dom_hide1_collect_nodes        (4); return true; }
    if( e_target.id == "dom_hide1_container_clicked"     ) { dom_hide1_container_clicked    ( ); return true; }

    /*}}}*/
    /* [dom_grid] .. () {{{*/
    if( e_target.id == "dom_grid_playground"             ) { e_target.firstElementChild .style.display = "initial"; t_grid_logging_toggle( true); return true; }
    if( e_target.id == "dom_grid_close_em"               ) { e_target.parentElement     .style.display =    "none"; t_grid_logging_toggle(false); return true; }

    /*}}}*/
    /* [test_panel] .. (RELOAD CLEAR REGEX BEHAVIOR) {{{*/
    if( e_target.id == "RELOAD"                            ) { document.location.reload();          return true; }
    if( e_target.id == "CLEAR"                             ) { t_clear(caller);                     return true; }
    if( e_target.id == "REGEX"                             ) { t_log_regex();                       return true; }
    if( e_target.id == "BEHAVIOR"                          ) { t_log_behavior();                    return true; }
    if( e_target.id == "HIGHLIGHT"                         ) { t_outline_viewport_top_containers(); return true; }

    /*}}}*/
    return false;
};
/*}}}*/
/*  t1_prop_id_state_CB {{{*/
let t1_prop_id_state_CB = function(id, checked)
{
/*{{{*/
let caller = "t1_prop_id_state_CB("+id+" , checked=["+checked+"])";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf5);
/*}}}*/
    /* SET TOOL checked attribute {{{*/
    let tool_el       = get_tool         (id); if(log_this && tool_el      ) console_dir(tool_el      , "...tool_el"      );
    let tool_clone    = get_tool_clone   (id); if(log_this && tool_clone   ) console_dir(tool_clone   , "...tool_clone"   );
    let tool_embedded = get_tool_embedded(id); if(log_this && tool_embedded) console_dir(tool_embedded, "...tool_embedded");

    if( tool_clone    ) tool_clone   ["checked"] = checked;
    if( tool_el       ) tool_el      ["checked"] = checked;
    if( tool_embedded ) tool_embedded["checked"] = checked;

    /*}}}*/
    /* SYNC TOOLS GUI DEPENDENCIES {{{*/
    t_sync_styles(caller);

    /*}}}*/
    /* SYNC OPTIONAL PLAYGROUND CLONE {{{*/
    t1_clone_id_state_CB(id, checked);

    /*}}}*/
    /* OPTIONAL PLAYGROUND DOC TRANSCRIPTS {{{*/
    if(typeof playground_prop_CB != "undefined") playground_prop_CB(id, checked);

    /*}}}*/
    /* OPTIONAL CASCADE CALL {{{*/
    switch(id)
    {
    case "t_target_tool_reorder":
if(log_this) log("%c calling [funcion "+id+"]", lbb+lbH+lf7);

        t_target_tool_reorder(caller);
    break;
    }
    /*}}}*/
    let state
        = tool_el
        ? tool_el.checked
        : checked
    ;
if( log_this) log("%c"+caller+"%c return "+state, lbL, lbR+lf1);
    return state;
};
/*}}}*/
/*_ t1_prop_id_toggle {{{*/
let t1_prop_id_toggle = function(keyword)
{
/*{{{*/
let   caller = "t1_prop_id_toggle("+keyword+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
    /* [has_moved] [t_preventDefault_has_been_called] [t_event_has_been_consumed] {{{*/

    if( log_this) log("...................keyword %c["+ keyword                 +"]", lb0);
    if( log_this) log(".................has_moved %c "+ has_moved               +" ", lb2);
    if( log_this) log("....t_event_consumed_cause %c "+ t_event_consumed_cause  +" ", lb2);
    if( log_this) log("...t_preventDefault_caller %c "+ t_preventDefault_caller +" ", lb2);

    let                                                 dismissed_by = "";
    if     ( has_moved                                ) dismissed_by = "has_moved";
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
    /* narrow affixed keyword {{{*/
    if( keyword.startsWith(SQUEEZE_CYCLE) )
        keyword = SQUEEZE_CYCLE;

    /*}}}*/
    /* (keyword) (changes) {{{*/
    let changes = "";
    switch(keyword)
    {

    case ANCHOR_FREEZE: if(!prop_get( WORDING )) changes +=  keyword  ; prop_toggle(ANCHOR_FREEZE); break;

    case  TOOLS_TRAP      : changes += keyword; prop_toggle( keyword ); break;

    case  THEME_DARK      : changes += keyword; prop_toggle( keyword ); break;
    case "theme_LIGHT"    : changes += keyword; prop_set( THEME_DARK  ,  false   ); break;
    case "theme_DARK"     : changes += keyword; prop_set( THEME_DARK  ,  true    ); break;

    case  WORDING         : changes += keyword; prop_toggle( keyword ); break;

    case  CONTAINERS_HI   : changes += keyword; prop_toggle( keyword ); break;
    case  SCROLL_SMOOTH   : changes += keyword; prop_toggle( keyword ); break;
    case  OVERFLOW_VISI   : changes += keyword; prop_toggle( keyword ); break;

    case  SHOW_SEEKZONE   : changes += keyword; prop_toggle( keyword ); break;
    case  PIN_SEEKSPOT    : changes += keyword; prop_toggle( keyword ); break;
    case  LOG_SEEKSPOT    : changes += keyword; prop_toggle( keyword ); break;

    case  MASK_OR_HIDE    : changes += keyword; prop_toggle( keyword ); break;
    case  SITE_OR_PAGE    : changes += keyword; prop_toggle( keyword ); break;
    case  EDIT_OR_STAGE   : changes += keyword; prop_toggle( keyword ); break;
    case  DOM_HIDE1_RESET : changes += keyword; prop_toggle( keyword ); break;
    case  DENY_OR_ALLOW   : changes += keyword; prop_toggle( keyword ); break;

    case  TOOLS_EXTRAS    : changes += keyword; prop_toggle( keyword ); break;

    case  WORDS_EXACT     : changes += keyword; prop_set   ( keyword , true); break;
    case  WORDS_SEGMENT   : changes += keyword; prop_set   ( keyword , true); break;
    case  WORDS_HEAD_TAIL : changes += keyword; prop_set   ( keyword , true); break;
    case  WORDS_OPCYCLE   : changes += keyword; prop_toggle( keyword       ); break;

    case  TOOLS_SCROLL    : changes += keyword; prop_toggle( keyword ); break;

    case  SQUEEZE_CYCLE   : changes += keyword; t1_cycle_onWork_EL_classList(SQUEEZE_CYCLE_CLASSLIST); break;

    default               :
    /* DYNAMIC KEYWORDS {{{*/
    let keyword_array = t_get_words_drop_affix_array();
    for(let i=0; i < keyword_array.length; ++i)
    {
        let id = keyword_array[i];
        if(keyword == id) {
            changes += keyword;
            prop_toggle(keyword);
            break;
        }
    }
    /*}}}*/
if(!changes) log("%c "+caller+" %c "+keyword+" %c *** not handled ***", lbH+lf4, lbb+lbL+lf2, lbb+lbR+lf2);
    }
/*{{{
logXXX("changes=["+changes+"]");
}}}*/
    if(changes) {
if(log_this) t_log_option_changes(changes);
        t_log_transcript_info("<em class='cc8'>"+caller+"</em> changes <em class='cc9'>"+changes+"</em>");
    }
    else {
        t_log_transcript_info("<em class='cc8'>"+caller+"</em> changes <em class='cc0'>none</em>");
    }
    /*}}}*/
    /* SITE AND PAGE {{{*/
    /* OVERFLOW_VISI SCROLL_SMOOTH */
    if(         changes.includes( OVERFLOW_VISI  )
            ||  changes.includes( SCROLL_SMOOTH  )
            ||  changes.includes( PIN_SEEKSPOT   )
      ) {
        t_store1_save_all_settings(); /* SITE [THEME LOGGING LAYOUT] .. PAGE [WORDING] */
    }
    else {
        /* SITE THEME */
        if(     changes.includes( ANCHOR_FREEZE  )
            ||  changes.includes( CONTAINERS_HI  )
            ||  changes.includes( THEME_DARK     )
            ||  changes.includes( TOOLS_TRAP     )
            ||  changes.includes( TOOLS_EXTRAS   )
          ) {
            t_store2_save_site_theme();
        }
        /* PAGE WORDING */
        if(     changes.includes( WORDING        )
            ||  changes.includes( WORDS_EXACT    )
            ||  changes.includes( WORDS_SEGMENT  )
            ||  changes.includes( WORDS_HEAD_TAIL)
            ||  changes.includes( WORDS_OPCYCLE  )
            ||  t_get_words_drop_affix_array().includes(changes)
          ) {
            t_store5_save_page_wording();
        }
    }
    /*}}}*/
    /* SHOW_SEEKZONE {{{*/
    if( prop_get( SHOW_SEEKZONE ))
    {
        if(     changes.includes( LOG_SEEKSPOT   )
            ||  changes.includes( SITE_OR_PAGE   )
            ||  changes.includes( PIN_SEEKSPOT   )
            ||  changes.includes( SHOW_SEEKZONE  )
          ) {
            t_seekzone1_show(caller);
            t_sync_seek_back(caller);
        }
    }
    /*}}}*/
    /* TOOLS_SCROLL {{{*/
    if(         changes.includes( TOOLS_SCROLL   ))
    {
        t_store4_save_site_layout(TOOLS_SCROLL);
    }
    /*}}}*/
    /* sync_containers_hi {{{*/
    if(       changes.includes( CONTAINERS_HI  )
           || changes.includes( THEME_DARK     )
           || changes.includes("theme_DARK"    )
           || changes.includes("theme_LIGHT"   )
      )
        sync_containers_hi();

    /*}}}*/
    /* t_sync_wording {{{*/
    if(            changes.includes( ANCHOR_FREEZE  )
           ||      changes.includes( THEME_DARK     )
           ||      changes.includes( WORDING        )
           ||      changes.includes( CONTAINERS_HI  )
           ||      changes.includes("theme_DARK"    )
           ||      changes.includes("theme_LIGHT"   )
      )
        t_sync_wording(caller);

    if( changes.includes( WORDS_EXACT       ) ) t3_wording_CB(null, WORDS_EXACT    );
    if( changes.includes( WORDS_SEGMENT     ) ) t3_wording_CB(null, WORDS_SEGMENT  );
    if( changes.includes( WORDS_HEAD_TAIL   ) ) t3_wording_CB(null, WORDS_HEAD_TAIL);

    /*}}}*/
    /* t_sync_tools_scroll t_sync_layout t_sync_tools_extras {{{*/
    if( changes.includes( TOOLS_SCROLL     ) ) t_sync_tools_scroll();
    if( changes.includes( TOOLS_SCROLL     ) ) t_sync_layout(caller);
    if( changes.includes( TOOLS_EXTRAS     ) ) t_sync_layout(caller);
    if( changes.includes( TOOLS_EXTRAS     ) ) t_sync_tools_extras(caller);

    /*}}}*/
    /* t_sync_styles {{{*/
    t_sync_styles(caller);

    /*}}}*/
    /* SYNC TOOL CLONES {{{*/
    t_sync_tool_clones( caller );

/*{{{
if( log_this) prop_log_MAP(caller);
}}}*/
    /*}}}*/
    t_store_update_post("PROP TOGGLED ["+keyword+"]");
};
/*}}}*/
/*  t1_cycle_onWork_EL_classList {{{*/
let t1_cycle_onWork_EL_classList = function(classList)
{
    let el;
    for(let i=0; i < classList.length ; ++i)
    {
        if(el = get_el_parent_with_class(onWork_EL, classList[i]))
            break;
    }

    if(el) cycle_el_classList(el, SQUEEZE_CYCLE_CLASSLIST);
};
/*}}}*/
/*_ t1_onclick_seek_or_sel {{{*/
let t1_onclick_seek_or_sel = function(e_target, bag_id)
{
/*{{{*/
let   caller = "t1_onclick_seek_or_sel";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) t_log_event_status(caller, lf5);
/*}}}*/
    /* [action switch] {{{*/
    let bag_id_is_on_standby
        =   onStandby_PANEL
        && (onStandby_PANEL.id == bag_id) ;

    let e_target_is_seeker_handle_left_or_right
        =      e_target.classList.contains( CSS_SEEKER_HANDLE)
        && (   has_el_class(e_target      , CSS_LEFT         )
            || has_el_class(e_target      , CSS_RIGHT        ));

    let action
        =      ( "seeker_PU" == bag_id                  ) ? "seeker_up_clicked"
        :      ( "seeker_PD" == bag_id                  ) ? "seeker_down_clicked"
    /*___________"sel_bag"_______________(or_whatever)_*/
        :      ( is_a_thumb_el(e_target)                ) ? "sel_clicked"
        :      ( e_target_is_seeker_handle_left_or_right) ?  SEL_BACK
        :      ( bag_id_is_on_standby                   ) ? "standby_release"
        :                                                   "standby"
    ;

if( log_this) log("%c "+caller+": %c bag_id ["+bag_id+"] %c e_target ["+get_n_lbl(e_target)+"] %c action ["+action+"]"
                  , lb1          ,lb2                   ,lb3                                  ,lb4                    );
if( log_this && (LOG_MAP.EV8_FLOATLOG || fly_log_checked)) t_log_stage_msg(STAGE_2_ACTION, " <em class='cc9'>"+action+"</em>");
    /*}}}*/
    switch(action) {
        case "seeker_up_clicked": /* .. [target_tool] {{{*/
        {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

/*{{{
            if(target_tool && (target_tool == onWork_SEEK_TOOL))
            {
                t1_onclick_e_target(target_tool);
            }
}}}*/

            /* SHOW seeker_PD {{{*/
            if((onDown_EL == seeker_CU) && t_seeker_PD_is_hiding() && !is_onSeekXYL_onTarget())
            {
if(log_this) log_add_TR_EVENT("_<em class='cc5'>SHOW seeker_PD</em> "+onSeekXYL.label);
                t_seeker_PD_show();
                t_toggle_panel_magnified(seeker_PD, false);
                t_seeker_move_on_last_highlight_slot_num();
            }
            /*}}}*/
            /* HIDE seeker_PU {{{*/
            else if( t_seeker_PU_is_active() )
            {
if(log_this) log_add_TR_EVENT("_<em class='cc8'>HIDE seeker_PU</em> "+onSeekXYL.label);
                t_seeker_PU_hide("instant");
            }
            /*}}}*/
        }
        break;
        /*}}}*/
        case "seeker_down_clicked": /*{{{*/
        {
            /* 1. TOGGLE SEL_BACK {{{*/
if(log_this) log(".switch ["+action+"]");
            let e_target_is_seeker_handle_left_or_right
                =  e_target.classList.contains(CSS_SEEKER_HANDLE)
                && (   has_el_class(e_target,  CSS_LEFT         )
                    || has_el_class(e_target,  CSS_RIGHT        ))
            ;

            if( e_target_is_seeker_handle_left_or_right )
            {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>TOGGLE "+SEL_BACK+"</em>");

                prop_toggle( SEL_BACK );
if(log_this) log_add_TR_SELECT("_<em class='cc3'>SELECT <em class='cc9'>"+(prop_get( SEL_BACK ) ? "BACKWARD" : "FORWARD")+"</em></em>");

                t_sync_seek_back(caller);
            }
            /*}}}*/
            /* 2. SCROLL TO [e_target.id]{{{*/
            else if(e_target.id.startsWith("thumb_s_"))
            {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>SCROLL TO "+e_target.id+"</em>");

                t_onclick_target_handle_scroll_to_slot_num(e_target, caller);
            }
            /*}}}*/
            /* 3. MAGNIFY [seeker_PD] {{{*/
            else if( !t_is_panel_magnified(seeker_PD) )
            {
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>MAGNIFY seeker_PD</em>");

                t_toggle_panel_magnified(seeker_PD, "toggle");
            }
            /*}}}*/
            /* 4. HIDE [seeker_PD] {{{*/
            else {
if(log_this) log_add_TR_EVENT("_<em class='cc8'>HIDE seeker_PD</em>");

                t_seeker_PD_hide();
            }
            /*}}}*/
        }
        break;
        /*}}}*/
        case "sel_clicked": /*{{{*/
        {
            /* t_onclick_target_handle_scroll_to_slot_num {{{*/
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");

            t_onclick_target_handle_scroll_to_slot_num(e_target, caller);
            /*}}}*/
        }
        break;
        /*}}}*/
        case  SEL_BACK : /*{{{*/
        {
            /* prop_toggle t_sync_seek_back {{{*/
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+"</em>");
            prop_toggle( SEL_BACK );

if(log_this) log_add_TR_EVENT("_<em class='cc3'>SELBAG SELECT <em class='cc9'>"+(prop_get( SEL_BACK ) ? "BACKWARD" : "FORWARD")+"</em></em>");
            t_sync_seek_back(caller);
            /*}}}*/
        }
        break;
        /*}}}*/
        case "standby": /*{{{*/
        {
            /*{{{*/
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+" bag_id ["+bag_id+"]</em>");

            t_standby_bag_id( bag_id );
            /*}}}*/
        }
        break;
        /*}}}*/
        case "standby_release": /*{{{*/
        {
            /*{{{*/
if(log_this) log_add_TR_EVENT(".switch <em class='cc1'>"+action+" bag_id ["+bag_id+"]</em>");

            if(onStandby_PANEL) t_standby3_release(caller);
            /*}}}*/
        }
        break;
        /*}}}*/
        /* default {{{*/
        default:
        {
logBIG(caller+": default: action=["+action+"] .. bag_id=["+bag_id+"]");
        }
        /*}}}*/
    }
};
/*}}}*/

/* 2 [t2_input_CB] .. called from t_add_LISTENERS */
/*  t2_input_CB .. t2_window_keyup_CB {{{*/
let t2_window_keyup_CB = function(e)
{
    t2_input_CB(e, "window")
};
let t2_input_CB = function(e, listener_tag="input")
{
/*{{{*/
let e_target = t_get_event_target(e, "t2_input_CB");
let caller = "t2_input_CB";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+"("+e.type+", "+listener_tag+"): on "+get_n_lbl(e_target));
/*}}}*/

    switch(e.type)
    {
    case "keydown" : t2_input_handle(e, e_target, listener_tag); break;
    case "keyup"   : t2_input_handle(e, e_target, listener_tag); break;
    case "change"  : {
        if     ( is_el_or_child_of_parent_el(e_target, headsup_w    ) ) t3_wording_CB     (e_target, e.type);
        else if( is_el_or_child_of_parent_el(e_target, dom_traversal) ) t_dom_traversal_CB(e_target, e.type);
    }
    break;
    default:
    }

};
/*}}}*/
/*_ t2_input_handle {{{*/
/*{{{*/
const CHAR_CODE_A         = 65;
const CHAR_CODE_B         = 66;
const CHAR_CODE_C         = 67;
const CHAR_CODE_F         = 70;
const CHAR_CODE_SPACE     = 32;
const CHAR_CODE_ESC       = 27;

const CHAR_CODE_BACKSPACE =  8;
const CHAR_CODE_SHIFT     = 16;
const CHAR_CODE_CONTROL   = 17;
const CHAR_CODE_ALT       = 18;
const CHAR_CODE_LEFT      = 37;
const CHAR_CODE_UP        = 38;
const CHAR_CODE_RIGHT     = 39;
const CHAR_CODE_DOWN      = 40;
const CHAR_CODE_DELETE    = 46;

/*}}}*/
let t2_input_handle = function(e, e_target, listener_tag)
{
/*{{{*/
let   caller = "t2_input_handle";
let log_this = LOG_MAP.EV5_TOOL_CB;

let charCode = (e.keyCode) ? e.keyCode : e.which;

if(log_this) log(caller+"("+e.type+", "+listener_tag+"): on "+get_n_lbl(e_target)+" .. charCode=["+charCode+"]");
/*}}}*/
/*{{{
:new C:/LOCAL/GAMES/IVANWFR/INPUT/Truly_Ergonomic/trulyergonomic/javascripts/layout.js
}}}*/
    t_clr_has_moved(caller); /* this is a new event-chain */
    switch(charCode) {
        /* IGNORE {{{*/
        case  8: if( log_this) log("%c BACKSPACE %c IGNORE",lbL,lbR+lf2); break;
        case 16: if( log_this) log("%c SHIFT     %c IGNORE",lbL,lbR+lf2); break;
        case 17: if( log_this) log("%c CONTROL   %c IGNORE",lbL,lbR+lf2); break;
        case 18: if( log_this) log("%c ALT       %c IGNORE",lbL,lbR+lf2); break;
        case 37: if( log_this) log("%c LEFT      %c IGNORE",lbL,lbR+lf2); break;
        case 39: if( log_this) log("%c RIGHT     %c IGNORE",lbL,lbR+lf2); break;
        case 46: if( log_this) log("%c DELETE    %c IGNORE",lbL,lbR+lf2); break;

/*{{{
        case 38: if( log_this) log("%c UP        %c IGNORE",lbL,lbR+lf2); break;
        case 40: if( log_this) log("%c DOWN      %c IGNORE",lbL,lbR+lf2); break;
}}}*/
        /*}}}*/
        /* [CTRL-SHIFT-F] .. [FIND IN PAGE] {{{*/
        case CHAR_CODE_F:
        if(onDown_CTRL && onDown_SHIFT && tools_filter_input)
        {
if( log_this) log("%c CTRL F %c FIND IN PAGE",lbLlbR+lf2);

            if(headsup_w)
            {
                let map = tools_map_get(headsup_w);
                if(map && !map.selected) {
                    t_grid_TOOLS_SELECT_panel(headsup_w, true);
                    t_grid_TOOLS_MAP_changed();
                }
                t_gutter_drag_hotspot_to_LAST_WINDOW_XY();
            }

            t_set_onWork_EL_last_used(tools_filter_input);

            add_el_class(e_target,CSS_FOCUSSED);

            t_post_focus_to(tools_filter_input);
        }
        break;
        /*}}}*/
        /* [ESCAPE] .. [UNDO CHANGES] {{{*/
        case 27:
        if(listener_tag == "input") {
if( log_this) log("%c ESCAPE %c ESCAPE CURRENT STATE",lbL,lbR+lf2);

            e_target.value = e_target.value_set ? e_target.value_set : "";
            /* del_el_class(e_target,CSS_FOCUSSED); */

            t_ESCAPE_CURRENT_STATE();

        }
        break;
        /*}}}*/
        /* [RETURN] .. [SUBMIT] {{{*/
        case 13:
        if(listener_tag == "input") {
if( log_this) log("%c RETURN %c SUBMIT",lbL,lbR+lf2);

            if( logging_something() )
                t_log_transcript_event_top("<em class='cc8'>"+caller+"</em>"
                    +                      " "+e_target.id+" <em class='cc9'>"+e_target.value+"</em>");

            t3_wording_CB(e_target, "submit");

            e_target.selectionStart = e_target.value.length-1;
            e_target.selectionEnd   = e_target.value.length;
            t_focus(                  e_target );

        }
        break;
        /*}}}*/
/*{{{
        default:
        if     (e_target.id == "tools_node_input"  ) set_id_class_on_off(e_target.id, "focussed", (e_target.value != tools_node  ));
        else if(e_target.id == "tools_filter_input") set_id_class_on_off(e_target.id, "focussed", (e_target.value != tools_filter));
}}}*/
    }

    if(listener_tag == "input")
    {
        switch(charCode) {
        case 38: t_set_tools_filter_from_all_csv_dir(-1); break;
        case 40: t_set_tools_filter_from_all_csv_dir(+1); break;
        }
    }
};
/*}}}*/

/*_ t_set_tools_filter_from_all_csv_dir {{{*/
/*{{{*/
let all_csv     = "";
let all_csv_idx =  0;

/*}}}*/
let t_set_tools_filter_from_all_csv_dir = function(dir)
{
let   caller = "t_set_tools_filter_from_all_csv_dir("+dir+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

    let max = csv_count(all_csv);
    if(!max) return;

    all_csv_idx = (all_csv_idx + dir + max) % max;
    let     csv = csv_get(all_csv, 1+all_csv_idx);

if(log_this)
    log_key_val_group( caller
                       , {           max : max
                           , all_csv_idx : all_csv_idx
                           ,         csv : csv
                       }
                       , lf3, false
                     );

    t_set_tool_id_value("tools_filter", csv);
};
/*}}}*/
/*_ t_ESCAPE_CURRENT_STATE {{{*/
let t_ESCAPE_CURRENT_STATE = function()
{
/*{{{*/
let   caller = "t_ESCAPE_CURRENT_STATE";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/

    /* TOOLS ON GRID {{{*/
    if( call_t_grid_IS_ON_GRID() )
    {
if( log_this) logBIG("ESCAPE FROM TOOLS ON GRID");
        t_move_TOOLS_OFF_GRID(caller);

    }
    /*}}}*/
    /* SLOT CONTAINERS DISPLAYED {{{*/
    else if( div_slot_containers_displayed() )
    {
/*{{{
log("...div_slot_containers.className=["+div_slot_containers.className+"]")
}}}*/
        if( has_el_class(div_slot_containers, CSS_FULLSCREEN))
        {
if( log_this) logBIG("ESCAPE SLOT CONTAINERS FULLSCREEN");
            t_slot_container_set_fullscreen();
        }
        else {
if( log_this) logBIG("ESCAPE SLOT CONTAINERS DISPLAYED");
            t_window_scrollTo(0, onDown_SCROLL_XY.y);
            dimm_stop( caller );
        }
    }
    /*}}}*/
    else {
        console_clear("NOTHING TO ESCAPE FROM");

if( log_this) t_log_event_status(caller, lf4);
        if(onWork_EL_last_used == tools_filter_input)
            t_gutter_drag_hotspot_to_LAST_GUTTER_XY();
    }

};
/*}}}*/

/* 3 [t3_wording_CB] */
/*_ t3_wording_CB {{{*/
let t3_wording_CB = function(e_target, action)
{
    /* [has_moved] {{{*/
let caller = "t3_wording_CB("+get_n_lbl(e_target)+" , action=["+action+"]) "+ t_event_consumed_cause;
let log_this   = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+(has_moved ? ": has_moved=["+has_moved+"]" : ""));

    if( has_moved ) return;
/*}}}*/
    /* INPUT .. (cool down on submit) {{{*/

    if(e_target) del_el_class(e_target, CSS_FOCUSSED);

    /*}}}*/
    /* INPUT .. [WORDS_OPCYCLE] {{{*/
    if(e_target && (e_target.tagName == "INPUT"))
    {
if(log_this) log("...tools_filter_input.value=["+tools_filter_input.value+"]");
        switch(action)
        {
        /* case submit : keyup (WORDS_OPCYCLE) {{{*/
        case "submit":
        {
if(log_this) log("...case ACTION "+action+":");
            let slot = get_slot_matching_pattern( tools_filter_input.value );
            if(      prop_get( WORDS_OPCYCLE ) )
            {
                /* CYCLE-RE-SELECT {{{*/
                if( slot ) {
if(log_this) log("%c WORDS OPTIONS CYCLE SLOT ["+slot+"]",lb6);
                    clear_slot(slot);
                    t_onPatternUpdate("CLEARING SLOT <em>"+ slot +"</em>", caller);
                    cycle_on_last_cleared_pattern();
                    t_call_dom_traversal();
                    return;
                }
                /*}}}*/
                /* CYCLE-FRESH-SELECT {{{*/
                else {
if(log_this) log("%c WORDS OPTIONS CYCLE FRESH-SELECT",lb7);
                    t_call_dom_traversal();
                    return;
                }
                /*}}}*/
            }
            else if(slot)
            {
if(log_this) log("%c CLEAR SELECTION SLOT ["+slot+"]",lb3);

                t_clear_slot( slot );
                return;
            }
            /* FRESH-SELECT {{{*/
            else {
if(log_this) log("%c WORDS NEW-SELECT",lb4);

                t_call_dom_traversal();
                return;
            }
            /*}}}*/
        }
         /*}}}*/
        /* case click : (ignored) {{{*/
        case "click":
        {
if(log_this) log("...case ACTION "+action+":");
/*{{{
}}}*/
                t_focus( tools_filter_input );
                tools_filter_input.selectionEnd   = tools_filter_input.value.length;
                tools_filter_input.selectionStart = 0;
                t_focus( tools_filter_input );
            return;
        }
        break;
        /*}}}*/
        }
    }
    /*}}}*/
    /* [tools_filter] [recycle] [words_exact words_segment words_head_tail] {{{*/
    let    keyword;
    if(   !keyword) try { keyword =                e_target.id;                   } catch(ex) {}
    if(   !keyword) try { keyword = get_first_word(e_target.textContent, caller); } catch(ex) {}
    if(   !keyword)       keyword = action;
if(log_this) logBIG( keyword );

    switch(keyword) {
        /* headsup: tools_filter {{{*/
        case "tools_filter":
        {
if(log_this) log("...case "+keyword+":");

            if(e_target.id != "tools_filter") t_set_tool_id_value("tools_filter", e_target.value);

            if(e_target) del_el_class(e_target, CSS_FOCUSSED);

/*{{{
            let msg    = "<em class='big'>CHANGED FILTER</em> : <em>"+ e_target.value +"</em>";
if(e_target && log_this) log_add_TR_SELECT(msg);

            t_call_dom_traversal();
}}}*/
        }
        break;
        /*}}}*/
        /* headsup: recycle {{{*/
        case "recycle":
        {
if(log_this) log("...case "+keyword+":");

            /* TODO: animate recycle */

            /* INPUT */
            let   slotted = s_get_slotted_pattern_count();
            let all_count = csv_count(all_csv);
            let    action = slotted
                            ? "hiding "+slotted+" of "+all_count
                            :                   "all "+all_count+" cleared"
            ;
            t_set_tool_id_value("tools_filter", action);
            if(!slotted) t_pat_bag3_dump_all();

            t_pat_bag5_hide_sel();

            if( tools_filter_input )
            {
                t_focus( tools_filter_input );
                tools_filter_input.selectionStart = 0;
                tools_filter_input.selectionEnd   = tools_filter_input.value.length;
                t_focus( tools_filter_input );
            }
        }
        break;
        /*}}}*/
        /* headsup: words_exact words_segment words_head_tail {{{*/
        case WORDS_EXACT     :
        case WORDS_SEGMENT   :
        case WORDS_HEAD_TAIL :
        {
if(log_this) log("...case "+keyword+":");

            t_call_dom_traversal();
        }
        break;
        /*}}}*/
        /* default .. (ignore when traversal params unchanged) {{{*/
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

/*}}}*/

/** PAT */
/*{{{*/
/*{{{*/

let alt_csv = "";
let bak_csv = "";
let bin_csv = "";
let off_csv = "";
let pat_csv = "";
let sel_csv = "";

let bot_div;
let  fly_log;
let  pat_sort;
let  fly_log_checked = false;
let  bag_log;

let off_bag;
let bak_bag;
let alt_bag;

let bag_rot; /* bags rotate button (pat..bak..alt) */

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

/* PAT CSV {{{*/
/*_ t_are_pat_sorted {{{*/
let t_are_pat_sorted = function()
{
    if(!sel_csv) return false;

    let csv = csv_sort( pat_csv );

    return csv == sel_csv;
};
/*}}}*/
/*_ t_are_pat_reversed {{{*/
let t_are_pat_reversed = function()
{
    if(!sel_csv) return false;

    let csv = csv_reverse( pat_csv );

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
    off_csv = csv_add(off_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_add_bak_csv {{{*/
let csv_add_bak_csv = function(pattern)
{
    bak_csv = csv_add(bak_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_add_alt_csv {{{*/
let csv_add_alt_csv = function(pattern)
{
    alt_csv = csv_add(alt_csv, pattern); /* moved from */
};
/*}}}*/
/*_ csv_add_bin_csv {{{*/
let csv_add_bin_csv = function(pattern)
{
    bin_csv = csv_add(bin_csv, pattern); /* moved from */
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
/*_ csv_del_alt_csv {{{*/
let csv_del_alt_csv = function(pattern)
{
    alt_csv = csv_del(alt_csv, pattern); /* moved from */
};
/*}}}*/

/*_ csv_move_pattern_to_pat {{{*/
let csv_move_pattern_to_pat = function(pattern)
{
    /* FROM */
    csv_del_bak_csv( pattern );
    csv_del_off_csv( pattern );
    csv_del_alt_csv( pattern );

    /* TO */
    csv_add_pat_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_off {{{*/
let csv_move_pattern_to_off = function(pattern)
{
    /* FROM */
    csv_del_pat_csv( pattern );
    csv_del_bak_csv( pattern );
    csv_del_alt_csv( pattern );

    /* TO */
    csv_add_off_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_bak {{{*/
let csv_move_pattern_to_bak = function(pattern)
{
    /* FROM */
    csv_del_pat_csv( pattern );
    csv_del_off_csv( pattern );
    csv_del_alt_csv( pattern );

    /* TO */
    csv_add_bak_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_alt {{{*/
let csv_move_pattern_to_alt = function(pattern)
{
    /* FROM */
    csv_del_pat_csv( pattern );
    csv_del_off_csv( pattern );
    csv_del_bak_csv( pattern );

    /* TO */
    csv_add_alt_csv( pattern );
};
/*}}}*/
/*_ csv_move_pattern_to_bin {{{*/
let csv_move_pattern_to_bin = function(pattern)
{
    /* FROM */
    csv_del_pat_csv( pattern );
    csv_del_off_csv( pattern );
    csv_del_bak_csv( pattern );
    csv_del_alt_csv( pattern );

    /* TO */
    csv_add_bin_csv( pattern );
};
/*}}}*/

/*_ csv_clr_bak_csv .. (into bin_csv) {{{*/
let csv_clr_bak_csv = function()
{
    bin_csv = bak_csv;
    bak_csv = "";
};
/*}}}*/
/*}}}*/

/* PAT HANDLE */ /*{{{*/
/*  t1_handle_pat_bag {{{*/
/*{{{*/
let last_bak_alt_move;

/*}}}*/
let t1_handle_pat_bag = function(e_target)
{
/*{{{*/
let   caller = "t1_handle_pat_bag";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller+": id=["+e_target.id+"]",lbF);
/*}}}*/
    /* pat_bag_is_on_standby {{{*/
    let pat_bag_is_on_standby = (onStandby_PANEL && (onStandby_PANEL.id == pat_bag.id));
    if( pat_bag_is_on_standby)
    {
        t_standby3_release( caller );
    }
    /*}}}*/
    /* [pat_sort] CLICK {{{*/
    else if(e_target.id == "pat_sort")
    {
        t1_handle_pat_bag_sort();
    }
    /*}}}*/
    /* [bag_rot] CLICK {{{*/
    else if(e_target.id == "bag_rot")
    {
        t1_handle_pat_bag_rot();
    }
    /*}}}*/
    /* [fly_log] CLICK {{{*/
    else if(e_target.id == "fly_log") {
        let state = has_el_class(e_target, CSS_CHECKED);
        t_log_set_state( !state ); /* set run-time [DISPLAY OPTION] .. leaving saved [LOGGING OPTION] unchanged */
    }
    /*}}}*/
    else {
        t_pat_bag_stage_target( e_target );
    }
};
/*}}}*/
/*_ t_pat_bag_stage_target {{{*/
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
const STAGE3__ALT_SOME___________ALT_CLICKED_ACTION_ALT_OFF        = { color:3 , level:"3", context:"ALT_SOME___________ALT_CLICKED", action:"ALT_OFF"        };
const STAGE4__BAK_NONE_SEL_SOME______________ACTION_HIDE_SEL       = { color:5 , level:"5", context:"BAK_NONE_SEL_SOME"             , action:"HIDE_SEL"       };
const STAGE4__ALT_NONE_SEL_SOME______________ACTION_HIDE_SEL       = { color:5 , level:"5", context:"ALT_NONE_SEL_SOME"             , action:"HIDE_SEL"       };

const STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       = { color:2 , level:"2", context:"OFF_MANY_SEL_NONE__BAG_CLOSED" , action:"OPEN_BAG"       };
const STAGE3__OFF_SOME___________OFF_CLICKED_ACTION_BACK_OFF       = { color:3 , level:"3", context:"OFF_SOME___________OFF_CLICKED", action:"BACK_OFF"       };
const STAGE4__OFF_SOME_SEL_NONE__BAG_OPENED__ACTION_SHOW_OFF       = { color:4 , level:"4", context:"OFF_MANY_SEL_NONE__BAG_OPENED" , action:"SHOW_OFF"       };
const STAGE5__OFF_NONE_SEL_SOME______________ACTION_HIDE_SEL       = { color:5 , level:"5", context:"OFF_NONE_SEL_SOME"             , action:"HIDE_SEL"       };

const STAGE6__STANDBY_IDLE___________________ACTION_STANDBY_ON     = { color:6 , level:"6", context:"STANDBY_IDLE"                  , action:"STANDBY_ON"     };
const STAGE7__STANDBY_CLOSED_________________ACTION_STANDBY_OPENED = { color:7 , level:"7", context:"STANDBY_CLOSED"                , action:"STANDBY_OPENED" };
const STAGE8__STANDBY_OPENED_________________ACTION_STANDBY_DONE   = { color:8 , level:"8", context:"STANDBY_OPENED"                , action:"STANDBY_DONE"   };

/*}}}*/
let t_pat_bag_stage_target = function(e_target)
{
/* {{{*/
let   caller = "t_pat_bag_stage_target("+get_n_lbl(e_target)+")";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log(caller);
/*}}}*/
    /* (FIXME NO NEED: .. single click on bak_bag does the job) .. [bak_bag is_a_dblclick_last_result] - CLEAR BAG {{{*/
/*{{{
if( log_this) log("...is_a_dblclick_last_result "+is_a_dblclick_last_result);
    if((e_target == bak_bag) && is_a_dblclick_last_result)
    {
        let count = csv_count(bak_csv);
if(log_this) log("...csv_count(bak_csv)=["+count+"]");
        if( count) {
            let clearing_action =  " CLEARING ("+count+") items FROM <em class='cc0'>bak</em>";
            csv_clr_bak_csv();
            t_onPatternUpdate(clearing_action, caller);
        }
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_1_INPUT, "<em class='cc0'>DBL_CLICK on bak_bag</em>");
        return;
    }
}}}*/
    /*}}}*/
    /* UI {{{*/
    if(e_target.nodeType == Node.TEXT_NODE) e_target = e_target.parentElement;

    let            parent_div = get_el_parent_with_tag(e_target,"DIV");
    let pat_bag_is_on_standby = ((onStandby_PANEL != null ) && (onStandby_PANEL == e_target));
    let pat_bag_is_opened     = (        has_el_class( pat_bag, CSS_OPEN_BAG)              );

    let pattern_clicked       = (e_target.tagName == "EM") || e_target.id.startsWith( "pattern");
    let pat_bag_clicked       = (parent_div == pat_bag);
    let bak_bag_clicked       = (parent_div == bak_bag);
    let alt_bag_clicked       = (parent_div == alt_bag);
    let off_bag_clicked       = (parent_div == off_bag);
    let bot_div_clicked       = (parent_div == bot_div);

if(log_this) log("...parent_div......................=["+ get_n_lbl(parent_div) +"]");
if(log_this) log("...pat_bag_is_on_standby...........=["+ pat_bag_is_on_standby +"]");
if(log_this) log("...pat_bag_is_opened...............=["+ pat_bag_is_opened     +"]");
if(log_this) log("...pattern_clicked.................=["+ pattern_clicked       +"]");
if(log_this) log("...bak_bag_clicked.................=["+ bak_bag_clicked       +"]");
if(log_this) log("...alt_bag_clicked.................=["+ alt_bag_clicked       +"]");
if(log_this) log("...off_bag_clicked.................=["+ off_bag_clicked       +"]");
if(log_this) log("...bot_div_clicked.................=["+ bot_div_clicked       +"]");
    /*}}}*/
    /* CSV {{{*/
    let sel_csv_is_empty         = (           csv_count( sel_csv ) < 1             );
    let off_csv_one_or_more      = (           csv_count( off_csv ) > 0             );
    let off_csv_more_than_one    = (           csv_count( off_csv ) > 1             );
    let bak_csv_one_or_more      = (           csv_count( bak_csv ) > 0             );
    let bak_csv_more_than_one    = (           csv_count( bak_csv ) > 1             );
    let alt_csv_one_or_more      = (           csv_count( alt_csv ) > 0             );
    let alt_csv_more_than_one    = (           csv_count( alt_csv ) > 1             );

if(log_this) log("...sel_csv_is_empty................=["+ sel_csv_is_empty      +"]");
if(log_this) log("...off_csv_one_or_more.............=["+ off_csv_one_or_more   +"]");
if(log_this) log("...off_csv_more_than_one...........=["+ off_csv_more_than_one +"]");
if(log_this) log("...bak_csv_one_or_more.............=["+ bak_csv_one_or_more   +"]");
if(log_this) log("...bak_csv_more_than_one...........=["+ bak_csv_more_than_one +"]");
if(log_this) log("...alt_csv_one_or_more.............=["+ alt_csv_one_or_more   +"]");
if(log_this) log("...alt_csv_more_than_one...........=["+ alt_csv_more_than_one +"]");
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
        : (  alt_csv_one_or_more                          &&   alt_bag_clicked   ) ? STAGE3__ALT_SOME___________ALT_CLICKED_ACTION_ALT_OFF
        : (  bak_csv_one_or_more                          &&   bak_bag_clicked   ) ? STAGE3__BAK_SOME___________BAK_CLICKED_ACTION_DUMP_BAK

    /*_______OFF________________________SEL________________________DIV__________*/
        : (  off_csv_one_or_more    &&  sel_csv_is_empty                         ) ? STAGE4__OFF_SOME_SEL_NONE__BAG_OPENED__ACTION_SHOW_OFF
        : ( !off_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE5__OFF_NONE_SEL_SOME______________ACTION_HIDE_SEL
    /*_______BAK________________________SEL________________________DIV__________*/
        : ( !bak_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE4__BAK_NONE_SEL_SOME______________ACTION_HIDE_SEL
    /*_______ALT________________________SEL________________________DIV__________*/
        : ( !alt_csv_one_or_more    && !sel_csv_is_empty                         ) ? STAGE4__ALT_NONE_SEL_SOME______________ACTION_HIDE_SEL
    /*_______PAT_BAG_STANDBY____________________________________________________*/
        : ( !pat_bag_is_on_standby                        &&   pat_bag_clicked   ) ? STAGE6__STANDBY_IDLE___________________ACTION_STANDBY_ON
        : ( !pat_bag_is_opened                                                   ) ? STAGE7__STANDBY_CLOSED_________________ACTION_STANDBY_OPENED
        :                                                                            STAGE8__STANDBY_OPENED_________________ACTION_STANDBY_DONE
    ;

    /*}}}*/
    /* [t_log_stage] {{{*/
        let  something_clicked
            =  pattern_clicked
            || bak_bag_clicked
          /*|| alt_bag_clicked */
            || off_bag_clicked
            || bot_div_clicked
        ;
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked)
        t_log_stage(stage, something_clicked, pattern_clicked, e_target, parent_div);

    /*}}}*/
    /* [t_pat_bag_status_set_innerText] {{{*/
    t_pat_bag_status_set_innerText(stage.level+" "+stage.context+" "+stage.action);

    /*}}}*/

if( log_this) log("%c "+caller+" %c level %c "+stage.level   +" %c context %c "+stage.context+" %c action %c "+ stage.action
                  ,lbH+lbb+lf7  ,lbL     ,lbR+lfX[stage.color] ,lbL       ,lbR+lf9             ,lbL      ,lbR+lf9);
    switch(stage) {
        case STAGE1__PAT_CLICKED____________________ACTION_TOGGLE_PAT     : t_pat_bag1_toggle_pat   (e_target); break;

        case STAGE2__BAK_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       : t_pat_bag2_bag_open     ();         break;
        case STAGE2__OFF_MANY_SEL_NONE__BAG_CLOSED__ACTION_OPEN_BAG       : t_pat_bag2_bag_open     ();         break;

        case STAGE3__OFF_SOME___________OFF_CLICKED_ACTION_BACK_OFF       : t_pat_bag3_back_off     ();         break;
        case STAGE3__ALT_SOME___________ALT_CLICKED_ACTION_ALT_OFF        : t_pat_bag3_alt_off      ();         break;
        case STAGE3__BAK_SOME___________BAK_CLICKED_ACTION_DUMP_BAK       : t_pat_bag3_dump_bak     ();         break;

        case STAGE4__BAK_NONE_SEL_SOME______________ACTION_HIDE_SEL       : t_pat_bag5_hide_sel     ();         break;
        case STAGE4__ALT_NONE_SEL_SOME______________ACTION_HIDE_SEL       : t_pat_bag5_hide_sel     ();         break;

        case STAGE4__OFF_SOME_SEL_NONE__BAG_OPENED__ACTION_SHOW_OFF       : t_pat_bag4_show_off     ();         break;
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
/*_ t1_handle_pat_bag_sort {{{*/
let t1_handle_pat_bag_sort = function()
{
/* {{{*/
let   caller = "t1_handle_pat_bag_sort";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+": t_pat_bag3_reselect_sort_direction=["+t_pat_bag3_reselect_sort_direction+"]");
/*}}}*/
    let pat_sorted   =                t_are_pat_sorted  ();
    let pat_reversed = !pat_sorted && t_are_pat_reversed();

    switch(t_pat_bag3_reselect_sort_direction)
    {
    default:
    case  0: t_pat_bag3_reselect_sort_direction = (pat_sorted   ? -1 :  1); break; /* from user_set .. alternate current order */
    case  1: t_pat_bag3_reselect_sort_direction = (pat_sorted   ?  0 : -1); break; /* when in phase .. transition by user_set */
    case -1: t_pat_bag3_reselect_sort_direction = (pat_reversed ?  0 :  1); break; /* when in phase .. transition by user_set */
    }
if( log_this) log("...t_pat_bag3_reselect_sort_direction=["+ t_pat_bag3_reselect_sort_direction+"]");
if( log_this) log("...........................pat_sorted=["+ pat_sorted                        +"]");
if( log_this) log(".........................pat_reversed=["+ pat_reversed                      +"]");
    if(t_pat_bag3_reselect_sort_direction != 0)
    {
        if(     (!pat_sorted   && (t_pat_bag3_reselect_sort_direction > 0))
             || (!pat_reversed && (t_pat_bag3_reselect_sort_direction < 0))
          )
            t_pat_bag3_reselect();
    }
    else {
        t_sync_pat_buttons( caller );
    }
};
/*}}}*/
/*_ t1_handle_pat_bag_rot {{{*/
let t1_handle_pat_bag_rot = function()
{
/* {{{*/
let   caller = "t1_handle_pat_bag_rot";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
    /* current [pat_csv] [bak_csv] [alt_csv] {{{*/
    let hiding_csv = s_clear_slot_all();        /* ignore current selections */
    pat_csv        = csv_cat(pat_csv, off_csv); /* select current patterns   */
    off_csv        = "";

if( log_this) log("%c pat_csv %c["+pat_csv+"]",lbL+lf4, lbR);
if( log_this) log("%c bak_csv %c["+bak_csv+"]",lbL+lf2, lbR);
if( log_this) log("%c alt_csv %c["+alt_csv+"]",lbL+lf6, lbR);

    /*}}}*/
    /* bags parmutations {{{*/
    let to = SYMBOL_RIGHT_ARROW; let ft = SYMBOL_RIGHT_LEFT_ARROW;
    /*TODO: longer code lines!...295chars*/ let move;                                                                                                                                        let l_x;
    if     ( pat_csv &&  bak_csv &&  alt_csv) { move = "<span class='bg4'>PAT</span>"+ft+"<span class='bg6'>ALT</span>"                                                                    ; l_x=1; let tmp = alt_csv;  alt_csv = String(pat_csv);  pat_csv = String(    tmp);                }
    else if( pat_csv &&  bak_csv && !alt_csv) { move = "<span class='bg2'>BAK</span>"+to+"<span class='bg6'>ALT</span>"                                                                    ; l_x=2;                     alt_csv = String(bak_csv);  bak_csv =             "" ;                }
    else if( pat_csv && !bak_csv &&  alt_csv) { move = "<span class='bg4'>PAT</span>"+to+"<span class='bg2'>BAK</span>..<span class='bg6'>ALT</span>"+to+"<span class='bg4'>PAT</span>"; l_x=3;                     bak_csv = String(pat_csv);  pat_csv = String(alt_csv);  alt_csv = ""; }
    else if( pat_csv && !bak_csv && !alt_csv) { move = "<span class='bg4'>PAT</span>"+to+"<span class='bg6'>ALT</span>"                                                                    ; l_x=4;                     alt_csv = String(pat_csv);  pat_csv =             "" ;                }
    else if(!pat_csv &&  bak_csv &&  alt_csv) { move = "<span class='bg6'>ALT</span>"+to+"<span class='bg4'>PAT</span>..<span class='bg2'>BAK</span>"+to+"<span class='bg6'>ALT</span>"; l_x=5;                     pat_csv = String(alt_csv);  alt_csv = String(bak_csv);  bak_csv = ""; }
    else if(!pat_csv &&  bak_csv && !alt_csv) { move = "<span class='bg2'>BAK</span>"+to+"<span class='bg6'>ALT</span>"                                                                    ; l_x=6;                     alt_csv = String(bak_csv);  bak_csv =             "" ;                }
    else if(!pat_csv && !bak_csv &&  alt_csv) { move = "<span class='bg6'>ALT</span>"+to+"<span class='bg4'>PAT</span>"                                                                    ; l_x=7;                     pat_csv = String(alt_csv);  alt_csv =             "" ;                }
    else if(!pat_csv && !bak_csv && !alt_csv) { move = "BAGS EMPTY";                                                                                                                             l_x=8; }

    last_bak_alt_move = move;

    let lfx = lfX[l_x];
if(log_this) log("%c "+SDX[l_x]+" %c "+move, lbB+lfx, lbH+lfx);
    /*}}}*/
    /* UPDATE UI {{{*/

    t_cleanup_div( sel_bag );
    t_cleanup_div( pat_bag );
    t_cleanup_div( off_bag );
    t_cleanup_div( bak_bag );
    t_cleanup_div( alt_bag );

    t_pat_bag3_reselect( pat_csv );

if( log_this) log("%c pat_csv %c["+pat_csv+"]",lbL+lf4, lbR);
if( log_this) log("%c bak_csv %c["+bak_csv+"]",lbL+lf2, lbR);
if( log_this) log("%c alt_csv %c["+alt_csv+"]",lbL+lf3, lbR);

    bag_rot.title
        = move
        + LF      + csv_count(pat_csv)+" PAT   "+pat_csv
        + LF      + csv_count(bak_csv)+" BAK   "+bak_csv
        + LF      + csv_count(alt_csv)+" ALT   "+alt_csv
    ;

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly("<pre class='cc7'>"+bag_rot.title+"</pre>");
    /*}}}*/
};
/*}}}*/
/*. t_pat_bag1_slot_pattern {{{*/
let t_pat_bag1_slot_pattern = function(pattern, msg)
{
    /*{{{*/
    let caller  = "t_pat_bag1_slot_pattern("+pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbB+lf1);
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
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbB+lf1);
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
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbB+lf1);
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
/*. t_pat_bag1_alt_pattern {{{*/
let t_pat_bag1_alt_pattern = function(pattern, msg)
{
    /*{{{*/
    let caller  = "t_pat_bag1_alt_pattern("+pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbB+lf1);
    /*}}}*/
    /* ALT    [    CLEARED PAT] {{{*/
    let             slot = get_slot_matching_pattern(pattern);
    if(             slot) {
        clear_slot( slot );
        csv_move_pattern_to_alt( pattern );

        t_onPatternUpdate(msg, caller);
    }
    /*}}}*/
    /* ALT    [NOT SLOTTED PAT] {{{*/
    else {
        csv_move_pattern_to_alt( pattern );

        t_onPatternUpdate(SYMBOL_BAK+" OFF <em class='cc0'>"+ ellipsis_short(pattern) +"</em>", caller);
    }
    /*}}}*/
};
/*}}}*/

/*_ t_pat_bag1_toggle_pat {{{*/
let t_pat_bag1_toggle_pat = function(e_target)
{
/*{{{*/
    let want_pattern = e_target.title;
let caller  = "t_pat_bag1_toggle_pat("+want_pattern+")";
let log_this    = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbB+lf1);
    /*}}}*/
    /* [pattern] [slot] {{{*/
    if(!want_pattern) {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_1_INPUT, "<em class='cc0'>NO PATTERN TO TOGGLE</em>");

        return;
    }

    let slot = get_slot_matching_pattern( want_pattern );
if(log_this) log("...slot=["+slot+"]");
    /*}}}*/
    /* TOGGLE [pat_clicked] {{{*/
    flip_el_class(e_target,CSS_PAT_CLICKED);

    /*}}}*/
    if(slot) {
        /* HIDE TOGGLED PATTERN {{{*/
        if(want_pattern == ccs[slot].pattern)
        {
if(log_this) log("HIDE TOGGLED PATTERN");
            t_pat_bag1_hide_pattern(ccs[slot].pattern, SYMBOL_HID+" SEL <em class='cc"+slot+"'>"+ccs[slot].pattern+"</em>");
            if( prop_get( WORDS_OPCYCLE ) )
                setTimeout(cycle_on_last_cleared_pattern, PATTERN_CYCLE_DELAY);
        }
        /*}}}*/
        else {
            /* HIDE ALL COLIDING PATTERNS {{{*/
            do {
if(log_this) log("HIDE COLIDING PATTERN IN SLOT ["+slot+"]");
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly(SYMBOL_COLIDE+" <em class='cc4'>"+want_pattern+"</em> "+SYMBOL_DISMISS+" <em class='cc4'>"+ccs[slot].pattern+"</em>");
                t_pat_bag1_hide_pattern(ccs[slot].pattern, SYMBOL_HID+" SEL <em class='cc"+slot+"'>"+ccs[slot].pattern+"</em>");
            }
            while(slot = get_slot_matching_pattern( want_pattern ));
            /*}}}*/
            /* THEN SHOW TOGGLED PATTERN {{{*/
if(log_this) log("THEN SHOW TOGGLED PATTERN slot=["+slot+"]");

            t_pat_bag1_slot_pattern(want_pattern, SYMBOL_SEL+" <em class='cc1'>"+want_pattern+"</em>");
            /*}}}*/
        }
    }
    /* SHOW TOGGLED PATTERN {{{*/
    else {
if(log_this) log("SHOW TOGGLED PATTERN");
        t_pat_bag1_slot_pattern(    want_pattern, SYMBOL_SEL+" <em class='cc1'>"+want_pattern+"</em>");

    }
    /*}}}*/
};
/*}}}*/

/*_ t_pat_bag2_bag_open {{{*/
let t_pat_bag2_bag_open = function()
{
/*{{{*/
let   caller = "t_pat_bag2_bag_open";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c "+caller, lbB+lf2);
/*}}}*/
    t_pat_bag_open("t_pat_bag2_bag_open", "Showing OFF selections");
};
/*}}}*/

/*_ t_pat_bag3_back_off {{{*/
let t_pat_bag3_back_off = function()
{
/*{{{*/
let caller = "t_pat_bag3_back_off";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf4);
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
/*_ t_pat_bag3_alt_off  {{{*/
let t_pat_bag3_alt_off = function()
{
/*{{{*/
let   caller = "t_pat_bag3_alt_off";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
    let tmp_csv  =    String( alt_csv );
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
let   caller = "t_pat_bag3_dump_bak";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_CLEAR_BAK, "want");

    let tmp_csv  =    String( bak_csv );
    let    count = csv_count( tmp_csv );
    let patterns = "";
    for(let pos = 1; pos <= count; ++pos)
    {
        /* TO PAT [    SLOTTED PAT] {{{*/
        let pattern = csv_get(tmp_csv, pos     );
        if(     get_slot_of_pattern(   pattern )) {
            csv_move_pattern_to_pat(   pattern );
        }
        /*}}}*/
        /* TO BIN [NOT SLOTTED PAT] {{{*/
        else {
            csv_move_pattern_to_bin(   pattern);
            patterns += pattern+" ";
        }
        /*}}}*/
    }

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_CLEAR_BIN, "done");

    let dumping_action
        = " DUMPING ("+count+") <em class='cc2'>"+ ellipsis_short(patterns) +"</em> TO <em class='cc0'>bin</em>";
    t_onPatternUpdate(dumping_action, caller);
};
/*}}}*/
/*_ t_pat_bag3_dump_all {{{*/
let t_pat_bag3_dump_all = function()
{
/*{{{*/
let   caller = "t_pat_bag3_dump_all";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_CLEAR_BAK, "want");

    let tmp_csv  =    String( all_csv );
    let    count = csv_count( tmp_csv );
    let patterns = "";
    for(let pos = 1; pos <= count; ++pos)
    {
        /* TO PAT [    SLOTTED PAT] {{{*/
        let pattern = csv_get(tmp_csv, pos     );
        if(     get_slot_of_pattern(   pattern )) {
            csv_move_pattern_to_pat(   pattern );
        }
        /*}}}*/
        /* TO BIN [NOT SLOTTED PAT] {{{*/
        else {
            csv_move_pattern_to_bin(   pattern);
            patterns += pattern+" ";
        }
        /*}}}*/
    }

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_CLEAR_BIN, "done");

    let dumping_action
        = " DUMPING ("+count+") <em class='cc2'>"+ ellipsis_short(patterns) +"</em> TO <em class='cc0'>bin</em>";
    t_onPatternUpdate(dumping_action, caller);
};
/*}}}*/

/* t_pat_bag3_reselect_all {{{*/
/*{{{*/
const T_PAT_BAG3_RESELECT_DELAY = 1000;
let   t_pat_bag3_reselect_timer;

/*}}}*/
let   t_pat_bag3_reselect_all = function()
{
/*{{{*/
let   caller = "t_pat_bag3_reselect_all";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
    if(t_pat_bag3_reselect_timer) clearTimeout( t_pat_bag3_reselect_timer  );
    t_pat_bag3_reselect_timer     = setTimeout(t_pat_bag3_reselect_handler, T_PAT_BAG3_RESELECT_DELAY);
};
/*}}}*/
/*_ t_pat_bag3_reselect_handler {{{*/
let t_pat_bag3_reselect_handler = function()
{
/*{{{*/
let caller = "t_pat_bag3_reselect_handler";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf3);
/*}}}*/
    /* clear all slots {{{*/
    let reselected_csv = s_clear_slot_all();
if( log_this) csv_log(reselected_csv, "currently slotted");

    /*}}}*/
    /* ++ reinject unselected patterns {{{*/

        reselected_csv = csv_cat(reselected_csv, pat_csv);
        reselected_csv = csv_cat(reselected_csv, off_csv);
        reselected_csv = csv_cat(reselected_csv, bak_csv);
if( log_this) csv_log(reselected_csv, "bak_bag_too");

    /*}}}*/
    t_pat_bag3_reselect( reselected_csv );
};
/*}}}*/
/*_ t_pat_bag3_reselect {{{*/
let t_pat_bag3_reselect_sort_direction = 0;
let t_pat_bag3_reselect = function(reselected_csv="NONE")
{
/*{{{*/
let caller = "t_pat_bag3_reselect";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller+": direction="+t_pat_bag3_reselect_sort_direction+"", lbB+lf3);
/*}}}*/
    /* default to reselect currently slotted patterns {{{*/
    if(reselected_csv == "NONE")
    {
        reselected_csv = s_clear_slot_all();
    }
    /*}}}*/
    /* sort .. [eventually] {{{*/
    if(reselected_csv && (t_pat_bag3_reselect_sort_direction != 0))
    {
if( log_this) csv_log(reselected_csv, "reselected_csv");

        let    reverse = (t_pat_bag3_reselect_sort_direction < 0);
        reselected_csv = csv_sort(reselected_csv, reverse);

if( log_this) csv_log(reselected_csv, "(reverse="+reverse+")");
    }
    /*}}}*/
    /* re-slot {{{*/
    if(reselected_csv)
    {
        let       count = csv_count( reselected_csv );
        for(let pos=1; pos<=count; ++pos)
        {
            let pattern = csv_get(reselected_csv, pos);

            t_pat_bag1_slot_pattern(pattern, SYMBOL_SEL+" <em class='cc1'>"+pattern+"</em>");
        }
    }
    /*}}}*/
    t_sync_pat_buttons( caller );
};
/*}}}*/

/*_ t_pat_bag4_show_off {{{*/
let t_pat_bag4_show_off = function()
{
/*{{{*/
let caller = "t_pat_bag4_show_off";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf4);
/*}}}*/
    t_sel_pat_bag_all();
};
/*}}}*/
/*_ t_pat_bag5_hide_sel {{{*/
let t_pat_bag5_hide_sel = function()
{
/*{{{*/
let   caller = "t_pat_bag5_hide_sel";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf5);
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

    let hiding_csv = s_clear_slot_all();
if( log_this) log("...hiding_csv=["+hiding_csv+"]");
    /* .. clear_slot
     * .. t_clear_slot_sync
     * .. t_onPatternUpdate
     */

};
/*}}}*/
/*_ t_pat_bag6_standby {{{*/
let t_pat_bag6_standby = function()
{
/*{{{*/
let   caller = "t_pat_bag6_standby";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf6);
/*}}}*/
    t_standby_bag_id( pat_bag.id );
};
/*}}}*/
/*_ t_pat_bag7_standby_open {{{*/
let t_pat_bag7_standby_open = function()
{
/*{{{*/
let   caller = "t_pat_bag7_standby_open";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf7);
/*}}}*/
/*{{{
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, "Setting STANDBY OPENED");
}}}*/
    t_pat_bag_open("t_pat_bag7_standby_open", "Standby OPEN");
};
/*}}}*/
/*_ t_pat_bag8_standby_done {{{*/
let t_pat_bag8_standby_done = function()
{
/*{{{*/
let   caller = "t_pat_bag8_standby_done";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c "+caller, lbB+lf8);
/*}}}*/
/*{{{
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, "Setting STANDBY EMPTY");
}}}*/
    t_pat_bag_close("t_pat_bag8_standby_done", "Standby DONE");
};
/*}}}*/
/*_ t_pat_bag9_grab_child {{{*/
/*{{{*/
let off_bag_rect;
let bak_bag_rect;
let alt_bag_rect;
let mov_pat_span;
let pat_bag_was_grid_onGrab;

/*}}}*/
let t_pat_bag9_grab_child = function(parent_div)
{
/*{{{*/
let   caller = "t_pat_bag9_grab_child("+get_n_lbl(parent_div)+")";
let log_this = (LOG_MAP.S2_SELECT || LOG_MAP.EV2_MOVE);

if( log_this) t_log_event_status(caller, lf4);
/*}}}*/
    /* [mov_div] {{{*/
    mov_div.style.display = "block";
    mov_div.style.zIndex  = onWork_EL.style.zIndex + 1;

    mov_div.innerHTML     = onWork_EL.outerHTML;
    t_pat_bag_set_moving_item_label(mov_div.innerHTML);

    /*}}}*/
    /* [mov_pat_span] {{{*/
    mov_pat_span = get_el_parent_with_tag(onWork_EL, "SPAN");

    /*}}}*/
    /* [mov_src] [mov_src_div] [mov_dst_div] {{{*/
    mov_src_div  = parent_div;
    mov_dst_div  = null;

/*
add_el_class(onWork_EL  , CSS_MOV_SRC    );
*/
    add_el_class(mov_src_div, CSS_MOV_SRC);
    /*}}}*/
    /* on grab layout rectangles {{{*/
    pat_bag_was_grid_onGrab = has_el_class(pat_bag, CSS_GRID_BAG);

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

    alt_bag_rect = {
        top    : alt_bag.offsetTop                        ,
        left   : alt_bag.offsetLeft                       ,
        bottom : alt_bag.offsetTop  + alt_bag.offsetHeight,
        right  : alt_bag.offsetLeft + alt_bag.offsetWidth ,
    };

    /*}}}*/
    /* DIM BG (light) {{{*/
    dimm_start_pat_bag( caller );

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
console.dir("A "+onDown_ALT  )
console.dir("C "+onDown_CTRL )
console.dir("S "+onDown_SHIFT)
}}}*/
    let bag;

    let hovering_or_nearing = onDown_SHIFT;

    if( hovering_or_nearing )
        bag =  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, off_bag) ? off_bag
            :  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, bak_bag) ? bak_bag
            :  t_pat_bag_mov_div_is_xy_hovering_bag(x, y, alt_bag) ? alt_bag
            :                                                        pat_bag
        ;
    else
        bag = t_pat_bag_mov_div_get_dst_near_xy(x, y);

    add_el_class(bag, (hovering_or_nearing ? CSS_HOVERING : "nearing"));
    /*}}}*/
    /* [mov_dst_div] .. (move to) {{{*/
    let                                                pattern = mov_div.firstElementChild.title;

    if     ((bag == bak_bag) && !csv_contains(bak_csv, pattern)) t_pat_bag_hover_div_accept( bak_bag     );
    else if((bag == alt_bag) && !csv_contains(alt_csv, pattern)) t_pat_bag_hover_div_accept( alt_bag     );
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
    el = pat_bag; del_el_class(el, CSS_HOVERING); del_el_class(el, "nearing"); del_el_class(el, CSS_DIMMED);
    el = bak_bag; del_el_class(el, CSS_HOVERING); del_el_class(el, "nearing"); del_el_class(el, CSS_DIMMED);
    el = alt_bag; del_el_class(el, CSS_HOVERING); del_el_class(el, "nearing"); del_el_class(el, CSS_DIMMED);
    el = off_bag; del_el_class(el, CSS_HOVERING); del_el_class(el, "nearing"); del_el_class(el, CSS_DIMMED);

    /* highlight dst */
    del_el_class(mov_dst_div, CSS_DIMMED);
    if(mov_dst_div != mov_src_div) {
        add_el_class( mov_dst_div, (hovering_or_nearing ? CSS_HOVERING : "nearing"));
        del_el_class( mov_div, CSS_GRAYED_OUT);
    }
    else {
        add_el_class( mov_div, CSS_GRAYED_OUT);
    }

    /* dimm others */
/*
    if(mov_dst_div != pat_bag) add_el_class(pat_bag, CSS_DIMMED);
    if(mov_dst_div != off_bag) add_el_class(off_bag, CSS_DIMMED);
    if(mov_dst_div != bak_bag) add_el_class(bak_bag, CSS_DIMMED);
*/
    /* dimm source */
    if(mov_src_div == pat_bag) add_el_class(pat_bag, CSS_DIMMED);
    if(mov_src_div == off_bag) add_el_class(off_bag, CSS_DIMMED);
    if(mov_src_div == bak_bag) add_el_class(bak_bag, CSS_DIMMED);
    if(mov_src_div == alt_bag) add_el_class(alt_bag, CSS_DIMMED);

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
    :     (bag == alt_bag) ? lbX[6]
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
/*{{{
    if( has_el_class(mov_src_div, CSS_MOV_SRC))
    {
        let                  elements        = mov_src_div.getElementsByTagName("EM");
        for(let i=0; i <     elements.length ; ++i) {
            if( has_el_class(elements[i]     , CSS_MOV_SRC) )
                del_el_class(elements[i]     , CSS_MOV_SRC);
        }

        del_el_class(mov_src_div, CSS_MOV_SRC);
    }
}}}*/
    del_el_class(pat_bag     , CSS_MOV_SRC);
    del_el_class(off_bag     , CSS_MOV_SRC);
    del_el_class(bak_bag     , CSS_MOV_SRC);
    del_el_class(alt_bag     , CSS_MOV_SRC);
    del_el_class(mov_pat_span, CSS_MOV_SRC);

    mov_pat_span = null;
    mov_src_div  = null;
    mov_dst_div  = null;
    /*}}}*/
    /* t_hide_hov {{{*/
    t_hide_hov();

    /*}}}*/
    /* [moving] [hovering] [dimmed] {{{*/
    del_el_class(mov_div, CSS_MOVING);

    del_el_class(bak_bag, CSS_HOVERING); del_el_class(bak_bag, CSS_DIMMED); del_el_class(bak_bag, "nearing");
    del_el_class(alt_bag, CSS_HOVERING); del_el_class(alt_bag, CSS_DIMMED); del_el_class(alt_bag, "nearing");
    del_el_class(off_bag, CSS_HOVERING); del_el_class(off_bag, CSS_DIMMED); del_el_class(off_bag, "nearing");
    del_el_class(pat_bag, CSS_HOVERING); del_el_class(pat_bag, CSS_DIMMED); del_el_class(pat_bag, "nearing");

    /*}}}*/
    t_pat_bag_open_or_close(caller);
};
/*}}}*/
/*_ t_pat_bag9_move_item_to_div {{{*/
let t_pat_bag9_move_item_to_div = function(to_div)
{
/*
log("t_pat_bag9_move_item_to_div:");
log(". mov_div.firstElementChild.title...["+mov_div.firstElementChild.title+"]");
*/

    let ccX
        = (to_div == pat_bag) ? "cc1"
        : (to_div == off_bag) ? "cc5"
        : (to_div == bak_bag) ? "cc2"
        : (to_div == alt_bag) ? "cc6"
        : "";

    let moving_action
        = " MOVING <em class='cc9'>"    + get_n_lbl( mov_div.firstElementChild ) +"</em>"
        +     " TO <em class='"+ccX+"'>"+ get_n_lbl( to_div ) +"</em>"
    ;
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, moving_action);

    let pattern = mov_div.firstElementChild.title;

    switch(to_div) {
        case pat_bag: t_pat_bag1_slot_pattern(pattern, SYMBOL_SEL +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
        case off_bag: t_pat_bag1_hide_pattern(pattern, SYMBOL_HID +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
        case bak_bag: t_pat_bag1_back_pattern(pattern, SYMBOL_BAK +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
        case alt_bag: t_pat_bag1_alt_pattern (pattern, SYMBOL_ALT +" <em class='"+ccX+"'>"+pattern+"</em>"); break;
    }

    return moving_action;
};
/*}}}*/
/*}}}*/

/* PAT LAYOUT */ /*{{{*/
/*. t_build_bag_tools {{{*/
let t_build_bag_tools = function()
{
    if(!dom_tools_html) return;
    /* fly_div {{{*/
    fly_div    = document.createElement("DIV"  );
    fly_div.id = "fly_div";
    t_set_CSS_PINNED(fly_div, true);

    let xy = store_parseXY("fly_div_XY");
/*{{{
logBIG("t_log_onlayout: store_parseXY('fly_div_XY')=["+xy+"]", lf4);
}}}*/
    if(xy) {
        fly_div.style.left = xy.x+"px";
        fly_div.style.top  = xy.y+"px";
    }

    dom_tools_html.appendChild(fly_div);

    /*}}}*/
    /* off_bag {{{*/
    off_bag = document.createElement("DIV"  ); off_bag.id = "off_bag"; add_el_class( off_bag, CSS_EMPTY);
    off_bag.title = "OFF BAG";

/* off_bag_place_holder {{{
    off_bag.insertAdjacentHTML("beforeend", place_holder_line);
    off_bag_place_holder = off_bag.firstElementChild;
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
    bak_bag_place_holder = bak_bag.firstElementChild;
}}}*/
    /*}}}*/
    /* alt_bag {{{*/
    alt_bag = document.createElement("DIV"  ); alt_bag.id = "alt_bag";
    alt_bag.title = "ALT BAG";

    /*}}}*/
    /* bot_div bag_log bag_rot pat_sort fly_log {{{*/
    bot_div  = document.createElement("DIV"); bot_div .id = "bot_div" ;
    bag_log  = document.createElement("DIV"); bag_log .id = "bag_log" ; add_el_class(bag_log, CSS_TXT_LOG);
    fly_log  = document.createElement("DIV"); fly_log .id = "fly_log" ;
    pat_sort = document.createElement("DIV"); pat_sort.id = "pat_sort";
    bag_rot  = document.createElement("DIV"); bag_rot .id = "bag_rot" ;

    fly_log .title = "flying log"+LF+".. click them to hide";
    pat_sort.title = "sort";
    bag_rot .title = "BAGS CONTENT"+ LF
        + LF       + csv_count(pat_csv)+" PAT   "+pat_csv
        + LF       + csv_count(bak_csv)+" BAK   "+bak_csv
        + LF       + csv_count(alt_csv)+" ALT   "+alt_csv
    ;

    bot_div.appendChild( bag_log  );
    bot_div.appendChild( fly_log  );
    bot_div.appendChild( pat_sort );
    bot_div.appendChild( bag_rot  );
    /*}}}*/
    /* bag_swap {{{*/
/*{{{
:new %:h/../stylesheet/dom_tools.css

 -----------------DIV-----------------
 -----------------top-----------------
 -----[PAT]---------------[BAK]-------
 -----------------tip-----------------
 -----------s_e--------s_w------------
 -------------------------------------
 ----------------[ALT]----------------
 -------------------------------------

}}}*/
/*{{{
    swap_div    = document.createElement("DIV"); swap_div.id = "swap_div";
    swap_tip    = document.createElement("DIV"); swap_tip.id = "swap_tip";
    swap_pat    = document.createElement("DIV"); swap_pat.id = "swap_pat";
    swap_bak    = document.createElement("DIV"); swap_bak.id = "swap_bak";
    swap_alt    = document.createElement("DIV"); swap_alt.id = "swap_alt";
    swap_top    = document.createElement("DIV"); swap_top.id = "swap_top";
    swap_s_e    = document.createElement("DIV"); swap_s_e.id = "swap_s_e";
    swap_s_w    = document.createElement("DIV"); swap_s_w.id = "swap_s_w";

    swap_div.appendChild( swap_tip );
    swap_div.appendChild( swap_pat );
    swap_div.appendChild( swap_bak );
    swap_div.appendChild( swap_alt );
    swap_div.appendChild( swap_top );
    swap_div.appendChild( swap_s_e );
    swap_div.appendChild( swap_s_w );

    shadow_root.insertBefore(swap_div, shadow_root.firstElementChild);
}}}*/
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
    pat_bag.appendChild(alt_bag);
    pat_bag.appendChild(bot_div);
    pat_bag.appendChild(mov_div);

/* pat_bag_place_holder {{{
    pat_bag.insertAdjacentHTML("beforeend", place_holder_line);
    pat_bag_place_holder = pat_bag.firstElementChild;
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
/*_ t_sync_pat_buttons {{{*/
let t_sync_pat_buttons = function(_caller)
{
    /* [pat_csv] is sorted in ascending alphabetic order {{{*/
    if( pat_sort ) {
        let pat_user_set = (t_pat_bag3_reselect_sort_direction == 0);
        let pat_sorted   =                t_are_pat_sorted();
        let pat_reversed = !pat_sorted && t_are_pat_reversed();
/*{{{
        set_el_class_removing(pat_sort, pat_sorted ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
}}}*/

        pat_sort.innerHTML
            = pat_user_set ? (                SYMBOL_CHECK_MARK                       )
            : pat_sorted   ? ("<sup>A</sup>"+ SYMBOL_UP                +"<sub>Z</sub>")
            : pat_reversed ? ("<sup>Z</sup>"+ SYMBOL_DOWN              +"<sub>A</sub>")
            :                (                SYMBOL_UP+LF+SYMBOL_DOWN                )
        ;

        set_el_class_on_off(pat_sort, CSS_CHECKED , (pat_sorted || pat_reversed));
        set_el_class_on_off(pat_sort, CSS_USER_SET,  pat_user_set               );

/*{{{
logBIG("...pat_sort.className=["+pat_sort.className+"]")
}}}*/
    }
    /*}}}*/
    /* [alt_csv] contains an alternate set of patterns {{{*/
    if( bag_rot )
    {
/*{{{
        if( !bag_rot.innerHTML )
        {
            if( alt_csv ) { bag_rot.innerHTML = csv_count(alt_csv); add_el_class(el, CSS_CHECKED); }
            else          { bag_rot.innerHTML = SYMBOL_NOT_CHECKED; del_el_class(el, CSS_CHECKED); }
        }
}}}*/

        if( !last_bak_alt_move ) last_bak_alt_move = "BAGS CONTENT";
        bag_rot.innerHTML
            =  last_bak_alt_move + "<br>"
            + "<span class='bg4'>pat"+csv_count(pat_csv)+"</span> "
            + "<span class='bg2'>bak"+csv_count(bak_csv)+"</span> "
            + "<span class='bg6'>alt"+csv_count(alt_csv)+"</span>"
        ;
    }
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
/*_ t_pat_bag_open_or_close {{{*/
let t_pat_bag_open_or_close = function(_caller)
{
    /*{{{*/
    let caller = "t_pat_bag_open_or_close";
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log(caller+" .. CALLED BY "+ _caller);
if( log_this) log("...onWork_MOVABLE_CHILD=["+onWork_MOVABLE_CHILD+"]");

    /*}}}*/
    /* msg {{{*/
    let no_change_msg                  = "Panel left "+ (has_el_class(pat_bag, CSS_OPEN_BAG) ? "OPENED" : "CLOSED");
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

    let close_canceled =  false /* !onWork_MOVABLE_CHILD */; /* t_pat_bag_close_handler will reschedule itself */

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
/* UPDATE */
/*. t_pat_bag_set_moving_item_label {{{*/
let t_pat_bag_set_moving_item_label  = function(moving_item_label)
{
    let caller =          "t_pat_bag_set_moving_item_label("+moving_item_label+")";
if(LOG_MAP.S2_SELECT) log(caller);

    if(moving_item_label) add_el_class(pat_bag, CSS_HAS_MOVING_CHILD);
    else                  del_el_class(pat_bag, CSS_HAS_MOVING_CHILD);

    let bag_is_opened    = has_el_class(pat_bag, CSS_OPEN_BAG);

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

    if(!has_el_class(pat_bag, CSS_OPEN_BAG))
    {
        if( logging_something() )
            t_log_transcript_event_bot("<span style='color:red;'>"+SYMBOL_BLACK_CIRCLE+"</span>"
                +                      " <span>open_bag</span>"
                +                      " <em>"+msg+"</em>"
            );

        add_el_class(pat_bag, CSS_OPEN_BAG);

        t_sync_pat_off_bak_innerHTML();
        t_cache_layout(msg);
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
    /* PAT_BAG DELAYED CLOSE {{{*/
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

    if( has_el_class(pat_bag, CSS_OPEN_BAG) )
    {
        let close_canceled
            = onWork_MOVABLE_CHILD
            ?  true
            :  false;

        if( logging_something() )
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
            del_el_class(pat_bag, CSS_OPEN_BAG);

            t_sync_pat_off_bak_innerHTML();
            t_cache_layout("t_pat_bag_close_handler");
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
/* TODO WHEN TO USE t_pat_bag_mov_div_get_dst_near_xy */
/*_ t_pat_bag_mov_div_get_dst_near_xy {{{*/
let t_pat_bag_mov_div_get_dst_near_xy = function(x,y)
{
    if(pat_bag_was_grid_onGrab)
    {
        let h_22 = pat_bag.offsetHeight / 2;
        let w_32 = pat_bag.offsetWidth / 3;
        let w_33 = pat_bag.offsetWidth / 3 * 2;

        if     (x > w_33  ) return alt_bag; /* Right       */
        else if(x > w_32  ) return bak_bag; /* Right       */
        else if(y > h_22  ) return off_bag; /* Left Bottom */
        else                return pat_bag; /* Left Top    */
    }
    else {
        let h_42 = pat_bag.offsetHeight / 4;
        let h_43 = pat_bag.offsetHeight / 4 * 2;
        let h_44 = pat_bag.offsetHeight / 4 * 3;

        if     (y <  h_42 ) return pat_bag; /* TOP */
        else if(y <  h_43 ) return off_bag; /* 2/4 */
        else if(y <  h_44 ) return bak_bag; /* 3/4 */
        else                return alt_bag; /* BOT */
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
        else if(bak_bag        == mov_dst_div) bak_bag.insertBefore( mov_pat_span, bak_bag.firstElementChild);
        else if(alt_bag        == mov_dst_div) alt_bag.insertBefore( mov_pat_span, alt_bag.firstElementChild);
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
        if(  bak_bag_place_holder.parentNode) bak_bag.removeChild ( bak_bag_place_holder, bak_bag.firstElementChild );
        if( !off_bag_place_holder.parentNode) off_bag.insertBefore( off_bag_place_holder, off_bag.firstElementChild );
        if( !pat_bag_place_holder.parentNode) pat_bag.insertBefore( pat_bag_place_holder, off_bag.nextElementSibling);
        break;
        case off_bag:
        if( !bak_bag_place_holder.parentNode) bak_bag.insertBefore( bak_bag_place_holder, bak_bag.firstElementChild );
        if(  off_bag_place_holder.parentNode) off_bag.removeChild ( off_bag_place_holder                     );
        if( !pat_bag_place_holder.parentNode) pat_bag.insertBefore( pat_bag_place_holder, off_bag.nextElementSibling);
        break;
        case pat_bag:
        if( !bak_bag_place_holder.parentNode) bak_bag.insertBefore( bak_bag_place_holder, bak_bag.firstElementChild );
        if( !off_bag_place_holder.parentNode) off_bag.insertBefore( off_bag_place_holder, off_bag.firstElementChild );
        if(  pat_bag_place_holder.parentNode) pat_bag.removeChild ( pat_bag_place_holder                     );
        break;
    }
}}}*/
/*{{{
    if(mov_dst.parentNode) mov_dst.parentNode.removeChild( mov_dst );
    if     (div == pat_bag) div.insertBefore(mov_dst, off_bag.nextElementSibling);
    else                    div.insertBefore(mov_dst,     div.firstElementChild );
}}}*/
/*{{{
    switch(div) {
        case bak_bag:
        if( !bak_bag_place_holder.parentNode) bak_bag.insertBefore( bak_bag_place_holder, bak_bag.firstElementChild );
        break;

        case off_bag:
        if( !off_bag_place_holder.parentNode) off_bag.insertBefore( off_bag_place_holder, off_bag.firstElementChild );
        break;

        case pat_bag:
        if( !pat_bag_place_holder.parentNode) pat_bag.insertBefore( pat_bag_place_holder, off_bag.nextElementSibling);
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

    /* SEARCH DOCUMENT FOR NOT ALREADY SLOTTED PATTERNS {{{*/
    let       count = csv_count( pat_csv );
if( log_this) log("...ALREADY SLOTTED PATTERNS x"+count);

    let     tmp_csv =    String( pat_csv );
    let slotted_csv = "";
    let missing_csv = "";

    for(let pos=1; pos<=count; ++pos)
    {
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
    }
    /*}}}*/

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

    t_set_4_pat_off_bak_alt_innerHTML("sync_pat_off_bak_innerHTML_timer");
};
/*}}}*/
/*}}}*/

/* PAT FOOTER */ /*{{{*/
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

    t_eval_wide_or_tall_panel( pat_bag );
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
      /*:         ("nothing "+more+LF+" to "+LF+" choose "+LF+" from") .. checking bag_log layout */
    ;

    let pat_bag_status
        = selected
        + LF +SYMBOL_RIGHT_ARROW + can_do
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
    let lines = 2;

    let    l = innerText.indexOf(LF);
    let head = (l > 0) ? innerText.substring(0,l+1) : ""       ; /* LF included .. (  only with  a head-line) */
    let tail = (l > 0) ? innerText.substring(  l+1) : innerText; /* second line .. (or all with no head-line) */

    bot_div.title     = innerText;

    let  len = parseInt(bot_div.clientWidth / em_pixels);
/*{{{
    bag_log.innerText = head + ellipsis(tail, len);
}}}*/
    bag_log.innerText = head +          tail      ;

if(log_this) log("t_pat_bag_status_set_innerText: %c "+len+" %c "+ strip_CR_LF(bag_log.innerText) +" ", lbF+lb4, lb8);
};
/*}}}*/
/*}}}*/

/* PAT STORE */ /*_ t_onPatternUpdate_done {{{*/
let t_onPatternUpdate_done = function()
{
/*{{{*/
let caller   = "t_onPatternUpdate_done";
let log_this = LOG_MAP.S2_SELECT;

if( log_this ) log(caller);
/*}}}*/

    t_store_patterns_csv();

    t_pat_bag_open_or_close(caller);

    t_pat_bag_status();

    t_sync_seek_back  ( caller );
    t_sync_tool_clones( caller );
    t_cache_init_by   ( caller );
    t_sync_pat_buttons( caller );
};
/*}}}*/

/*_ t_store_patterns_csv {{{*/
/*{{{*/
let STORE_PATTERNS_CSV_DELAY = 2000;
let t_store_patterns_timer;
/*}}}*/
/*_ t_store_patterns_csv {{{*/
let t_store_patterns_csv = function()
{
    if(t_store_patterns_timer) clearTimeout( t_store_patterns_timer);
    t_store_patterns_timer   =   setTimeout( t_store_patterns_handler, STORE_PATTERNS_CSV_DELAY);
};
/*}}}*/
/*_ t_store_patterns_handler {{{*/
let t_store_patterns_handler = function()
{
/*{{{*/
let   caller = "t_store_patterns_handler";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller, lbF+lb7);
/*}}}*/
    t_store_patterns_timer = null;

    /* SAVING PAGE PATTERNS */
    store_set_value("alt_csv", alt_csv);
    store_set_value("bak_csv", bak_csv);
    store_set_value("off_csv", off_csv);
    store_set_value("pat_csv", pat_csv);
    store_set_value("sel_csv", sel_csv);

    /* [headsup_w] [all_csv] {{{*/
    all_csv         = csv_cat(pat_csv, off_csv);
    all_csv         = csv_cat(all_csv, bak_csv);
    all_csv         = csv_cat(all_csv, alt_csv);

    let     recycle = prop_get_EL("recycle");
    let     slotted = s_get_slotted_pattern_count();
    if     (slotted) recycle.innerText = SYMBOL_RECYCLE;
    else if(all_csv) recycle.innerText = SYMBOL_DOUBLE_VBAR;
    else             recycle.innerText = SYMBOL_ELLIPSIS;

    recycle.title
        = slotted
        ? "showing "+slotted+" of "+ csv_count(all_csv)+" stored patterns"
        :                            csv_count(all_csv)+" stored patterns"
    ;
    /*}}}*/

    t_store_patterns_consider_removing_all_page_items(caller);

};
/*}}}*/
/*_ t_store_patterns_consider_removing_all_page_items {{{*/
/*{{{*/
const CLEAR_STORAGE_MSG
    = "No Page data worth storing:"+LF
    + "---"+LF
    + "...drag hotspot into gutter to clear storage"+LF
    + "...also clears tools selection and layout"
;

/*}}}*/
let t_store_patterns_consider_removing_all_page_items = function(reason)
{
/*{{{*/
let   caller = "t_store_patterns_consider_removing_all_page_items("+reason+")";
let log_this = LOG_MAP.T0_STORE;

/*}}}*/

    let has_document_wording_feature
        =  is_a_DOM_LOAD_featured_function("t_store_patterns_csv");

    let has_pat_csv
        =   has_document_wording_feature
        && (pat_csv && (pat_csv != off_csv));

    let has_bak_csv
        =   has_document_wording_feature
        &&  bak_csv;

    let has_alt_csv
        =   has_document_wording_feature
        &&  alt_csv;

    let some_reason_not_to
        =  has_pat_csv              ? "Storing x"+ csv_count(pat_csv)          +  " current Selection(s)          in green bag:"+LF+ pat_csv
        :  has_bak_csv              ? "Storing x"+ csv_count(bak_csv)          +   " hidden Selection(s) in store in   red bag:"+LF+ bak_csv
        :  has_alt_csv              ? "Storing x"+ csv_count(alt_csv)          +" alternate Selection(s) in store in  blue bag:"+LF+ alt_csv
        :  node_to_hide_csv         ? "Hiding "  + csv_count(node_to_hide_csv) +          " Panel(s)"
        : !t_gutter_is_hotspot_IN() ? CLEAR_STORAGE_MSG
        :                             "";
if(log_this) {
    let s = log_key_val(       caller
                         , {   some_reason_not_to           : some_reason_not_to
                             , has_document_wording_feature : has_document_wording_feature
                             , has_pat_csv                  : has_pat_csv
                             , has_bak_csv                  : has_bak_csv
                             , has_alt_csv                  : has_alt_csv
                             ,     pat_csv                  :     pat_csv
                             ,     bak_csv                  :     bak_csv
                             ,     alt_csv                  :     alt_csv
                          }
                         , lf3
                       );
}
    if(!some_reason_not_to)
    {
if( log_this) log("... REMOVING PAGE localStorage:");
        store_remove_all_page_items();
        t_store_show_all_page_items_removed(true, "Page data storage cleared");
        return true;
    }
    else {
        t_store_show_all_page_items_removed(false, some_reason_not_to);
        return false;
    }
};
/*}}}*/
/*_ t_store_show_all_page_items_removed {{{*/
/*{{{*/
const ALL_PAGE_ITEMS_REMOVED = "all_page_items_removed";

/*}}}*/
let t_store_show_all_page_items_removed = function(removed, reason)
{
    let restoring_removed_page_items = has_el_class(hotring, ALL_PAGE_ITEMS_REMOVED);

    set_el_class_on_off(hotring, ALL_PAGE_ITEMS_REMOVED, removed);

    hotring.title =    strip_to_lines( reason );

    /* restore previously removed settings */
    if(restoring_removed_page_items && !removed)
        t_store1_save_all_settings();
};
/*}}}*/
/*}}}*/

/*}}}*/

/* OUTLINE */
/*{{{*/
/*{{{*/
const OUTLINE_SCAN_STEP_MAX = 3;
const OUTLINE_SCAN_SIGN_MAX = [
    { x: 1 , y: 1 } /* RIGHT  ABOVE  */
  , { x: 1 , y:-1 } /* RIGHT  BELOW  */
  , { x:-1 , y: 1 } /* LEFT   ABOVE  */
  , { x:-1 , y:-1 } /* LEFT   BELOW  */
];

const COLORX
    = [   "#964B00"
        , "#FF0000"
        , "#FFA500"
        , "#FFFF00"
        , "#9ACD32"
        , "#6495ED"
        , "#EE82EE"
        , "#A0A0A0"
        , "#FFFFFF"
        , "#000000"
    ];

let outlined_divs = [];
let outlined_dots = [];
let outlined_dots_used_since_t_outline_clear;
/*}}}*/
/*_ t_outline_viewport_top_containers {{{*/
let t_outline_viewport_top_containers = function()
{
/*{{{*/
let caller = "t_outline_viewport_top_containers";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
if( log_this) console.time(caller);
    /* clear previous {{{*/
    t_outline_clear();

    /*}}}*/
    /* outline current {{{*/
    let v_W = window.innerWidth ;
    let v_H = window.innerHeight;
    let w_2 = v_W / 2;
    let h_2 = v_H / 2;

    /*}}}*/
    /* CIRCLE SCAN AROUND VIEWPORT CENTER {{{*/
    let          step_Y  = v_H / 2 /  OUTLINE_SCAN_STEP_MAX        ;
    let          step_X  = v_W / 2 /  OUTLINE_SCAN_STEP_MAX        ;
    let             num  = 0;
    for(        let col  = 0; (col <= OUTLINE_SCAN_STEP_MAX       ); ++col) { let d_x = col * step_X;
        for(    let row  = 0; (row <= OUTLINE_SCAN_STEP_MAX       ); ++row) { let d_y = row * step_Y;
            for(let dir  = 0; (dir <  OUTLINE_SCAN_SIGN_MAX.length); ++dir)
            {
                if((col == 0)     && (OUTLINE_SCAN_SIGN_MAX[dir].x != 1)) continue; /* skip zero mirror */
                if((row == 0)     && (OUTLINE_SCAN_SIGN_MAX[dir].y != 1)) continue;

                let left = w_2 + d_x *  OUTLINE_SCAN_SIGN_MAX[dir].x ;
                let top  = h_2 + d_y *  OUTLINE_SCAN_SIGN_MAX[dir].y ;

if( log_this)   t_outline_dot(left, top, num);

                if(range = get_range_from_caret ( left, top))
                    num  = t_outline_range(range, left, top, num);
                if((col == 0) && (row == 0)) break; /* directionless case */
            }
        }
    }
/*{{{
}}}*/
    /*}}}*/
if( log_this) console.timeEnd(caller);
};
/*}}}*/
/*_ t_outline_range {{{*/
let t_outline_range = function(range, left, top, num)
{
/*{{{*/
let caller = "t_outline_range";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log_range(range, caller);
/*}}}*/
    /* container {{{*/
    let el = range.startContainer;
    if( el.nodeType == Node.TEXT_NODE) el = el.parentElement;

    /*}}}*/
    /* outined already {{{*/
    if(has_el_class(el, "outlined")               ) return num;
    add_el_class   (el, "outlined");

    /*}}}*/
    /* viewport .. top-left not within {{{*/
    let tl   = get_el_xy(el, caller);
    if( tl.x < (window.scrollX                   )) return num;
    if( tl.y < (window.scrollY                   )) return num;
    if( tl.x > (window.scrollX+window.innerWidth )) return num;
    if( tl.y > (window.scrollY+window.innerHeight)) return num;

    /*}}}*/
    /* viewport .. bottom-right not within {{{*/
    let br   = get_el_xy(el, caller);
    br.x += el.offsetWidth;
    br.y += el.offsetHeight;
    if( br.x < (window.scrollX                   )) return num;
    if( br.y < (window.scrollY                   )) return num;
    if( br.x > (window.scrollX+window.innerWidth )) return num;
    if( br.y > (window.scrollY+window.innerHeight)) return num;

    /*}}}*/
    /* new div {{{*/
    let div = outlined_divs[num];
    if(!div) {
        div = document.createElement("DIV");
        add_el_class(div, "outlined_divs");
        document.documentElement.appendChild(div);
        outlined_divs[num] = div;
    }
    /*}}}*/
    /* show div {{{*/
    div.style.top             = (tl.y           -     div.style.borderWidth) +"px";
    div.style.left            = (tl.x           -     div.style.borderWidth) +"px";
    div.style.width           = (el.offsetWidth + 2 * div.style.borderWidth) +"px";
    div.style.height          = (el.offsetHeight+ 2 * div.style.borderWidth) +"px";

    div.style.zIndex          = el.style.zIndex + 1;
    div.style.borderColor     = COLORX[num % 10];
    div.style.display         = "block";

    /*}}}*/
    return num + 1;
};
/*}}}*/
/*_ t_outline_dot {{{*/
let t_outline_dot = function(left, top, num)
{
    /* new dot {{{*/
    let div = outlined_dots[outlined_dots_used_since_t_outline_clear];
    if(!div) {
        div = document.createElement("DIV");
        add_el_class(div, "outlined_dots");
        document.documentElement.appendChild(div);
        outlined_dots[outlined_dots_used_since_t_outline_clear] = div;
    }

    outlined_dots_used_since_t_outline_clear += 1;
    /*}}}*/
    /* show div {{{*/
    div.style.top             = (window.scrollY + top )+"px";
    div.style.left            = (window.scrollX + left)+"px";

    div.style.backgroundColor = COLORX[num % 10];
    div.style.display         = "block";
/*{{{
    div.innerHTML             = num+1;
}}}*/
    div.innerHTML             = outlined_dots_used_since_t_outline_clear;

    /*}}}*/
};
/*}}}*/
/*_ t_outline_clear {{{*/
let t_outline_clear = function()
{
    /* declassify document containers {{{*/
    let className = "outlined";
    let node_list = document.querySelectorAll("."+className);
    for(let i=0; i < node_list.length; ++i)
        del_el_class(node_list[i], className);

    /*}}}*/
    /* hide outlined_divs {{{*/
    for(let i=0; i < outlined_divs.length; ++i)
        outlined_divs[i].style.display = "none";

/*}}}*/
    /* hide outlined_dots {{{*/
    for(let i=0; i < outlined_dots.length; ++i)
        outlined_dots[i].style.display = "none";

    /*}}}*/
    outlined_dots_used_since_t_outline_clear = 0;
};
/*}}}*/
/*}}}*/
/** LAYOUT */
/*{{{*/
/* SPREAD MOVE STATE CACHE POSITION OPTIONAL STYLE {{{*/
/*{{{*/
let fully_spread_since_onDown;

/*}}}*/

/* LOAD */
/*_ is_dom_grid_loaded {{{*/
let is_dom_grid_loaded = function()
{
    return (typeof t_grid_ON_OFF_CB != "undefined");
};
/*}}}*/
/*_ log_dom_grid_js_not_loaded {{{*/
let log_dom_grid_js_not_loaded = function (_caller)
{
logXXX("%c *** dom_grid.js NOT LOADED *** .. CALLED BY "+ _caller, lbH+lf3);
console.trace();
};
/*}}}*/

/* POSITION */
/*  t_sync_tools_scroll {{{*/
let t_sync_tools_scroll = function()
{
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T2_GRID;

    let caller = "t_sync_tools_scroll";

    let position =  prop_get( TOOLS_SCROLL )  ? "absolute" : "fixed";
if(log_this) log(caller+"...tools_scroll=[%c "+prop_get( TOOLS_SCROLL )+" %c]", lb6,lbA);
if(log_this) log(caller+"...position....=[%c "+position    +" %c]", lb5,lbA);

    let position_has_changed = (hotspot.style.position != position);
    if( position_has_changed)
    {
        t_cache_init_by(caller);
        t_cache_layout("TOOLS_SCROLL "+prop_get( TOOLS_SCROLL ));

        t_sync_tools_position(caller, position_has_changed);
    }
};
/*}}}*/
/*_ t_sync_tools_position {{{*/
let t_sync_tools_position = function(_caller)
{
/*{{{*/
    let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T2_GRID;
if(log_this) log("t_sync_tools_position .. CALLED BY "+ _caller);

    let position =  prop_get( TOOLS_SCROLL ) ? "absolute" : "fixed";
if(log_this) log("...FROM position=["+hotspot.style.position+"]");
if(log_this) log(".....TO position=["+              position+"]");

/*}}}*/
/*{{{
    let      xy  = get_el_xy(hotspot, _caller);
    let x  = xy.x;
    let y  = xy.y;
}}}*/
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
/*{{{
logBIG("t_sync_tools_position ["+position+"] XY=["+x+" "+y+"]")
}}}*/

    t_tool_set_top_xy("t_sync_tools_position", x, y, position);
};
/*}}}*/

/* OPTIONAL */
/*_ t_sync_tools_extras {{{*/
let t_sync_tools_extras = function(_caller)
{
let log_this = LOG_MAP.T2_GRID;

    let state = prop_get( TOOLS_EXTRAS );
if(log_this) log("t_sync_tools_extras .. CALLED BY "+ _caller+": tools_extras=["+state+"]");

    let el;
    if( el = dom_traversal) set_id_class_on_off(el.id, "hidden", !state || !t_is_a_selected_panel(el));
    if( el = dev_log_map  ) set_id_class_on_off(el.id, "hidden", !state || !t_is_a_selected_panel(el));
    if( el = test_panel   ) set_id_class_on_off(el.id, "hidden", !state || !t_is_a_selected_panel(el));
    if( el = dom_load_tags) set_id_class_on_off(el.id, "hidden", !state || !t_is_a_selected_panel(el));

};
/*}}}*/
/*_ t_sync_wording {{{*/
let t_sync_wording = function(_caller)
{
/*{{{*/
    let caller = "t_sync_wording";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+": wording=["+ prop_get( WORDING ) +"] %c CALLED BY "+_caller, lbH+lf5);
/*}}}*/

    if(typeof dom_wording_cycle == "undefined") return;

    let cycle_step
        = !prop_get( WORDING        ) ? "OFF"
        : (prop_get( THEME_DARK     ) ? "DARK" : "LIGHT")
    ;

    let anchor_freeze_by_wording_or_user
        =  prop_get( WORDING       )
        || prop_get( ANCHOR_FREEZE )
        || prop_get( EDIT_OR_STAGE )
    ;
if( log_this) log(caller+": anchor_freeze_by_wording_or_user=["+anchor_freeze_by_wording_or_user+"]");
    dom_wording_cycle(cycle_step, anchor_freeze_by_wording_or_user);
};
/*}}}*/

/* PINS */
/* TODO: call t_eval_wide_or_tall_panel on transcript contents change */
/*_ t_eval_wide_or_tall_panel {{{*/
let t_eval_wide_or_tall_panel = function(tool_panel)
{
    if(!tool_panel.offsetWidth || !tool_panel.offsetHeight) return;
/*{{{
logBIG("t_eval_wide_or_tall_panel("+get_n_lbl(tool_panel)+"): WH=["+tool_panel.offsetWidth+" "+tool_panel.offsetHeight+"]")
}}}*/

    /* manage pin top-right pin layout */
    if(   !get_el_child_with_class(tool_panel,    CSS_PUSH_PIN  )
       && !get_el_child_with_class(tool_panel,    CSS_CLOSEPIN  )
       && !get_el_child_with_class(tool_panel,    CSS_SCALEPIN  )
       && !get_el_child_with_class(tool_panel,    CSS_CLEARPIN  )
      ) {
        del_el_class(tool_panel,                  CSS_WIDE_PANEL);
        del_el_class(tool_panel,                  CSS_TALL_PANEL);
    }
    else {

        /* manage pin right padding */
        if(tool_panel.offsetWidth > tool_panel.offsetHeight) {
            if(!has_el_class(         tool_panel, CSS_WIDE_PANEL))
                set_el_class_removing(tool_panel, CSS_WIDE_PANEL, [CSS_TALL_PANEL]);
        }
        /* manage pin   top padding */
        else {
            if(!has_el_class(         tool_panel, CSS_TALL_PANEL))
                set_el_class_removing(tool_panel, CSS_TALL_PANEL, [CSS_WIDE_PANEL]);
        }
    }

};
/*}}}*/

/*_ t_add_toolpins_on_panel {{{*/
let t_add_toolpins_on_panel = function(panel)
{
    t_add_push_pin_on_panel( panel );
    t_add_closepin_on_panel( panel );
    t_add_scalepin_on_panel( panel );
    if(      (panel.id == "transcript1")
          || (panel.id == "transcript2")
          || (panel.id == "pat_bag"    )
      )
        t_add_clearpin_on_panel(panel);
};
/*}}}*/
/*_ t_add_push_pin_on_panel {{{*/
let t_add_push_pin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let push_pin = get_el_child_with_class(tool_panel, CSS_PUSH_PIN);
    if( push_pin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    push_pin           = document.createElement("em");
    push_pin.className = "push_pin cc8";
    push_pin.id        = tool_panel.id +"_push_pin";
    push_pin.title     = "Pin "+tool_panel.id;
    push_pin.innerHTML = SYMBOL_PUSH_PIN;

    /*}}}*/
    /* [push_pin] closepin scalepin clearpin {{{*/
    tool_panel.insertBefore(push_pin, tool_panel.firstElementChild);

    /*}}}*/
    /* layout portrait or landscape {{{*/
    t_eval_wide_or_tall_panel( tool_panel );

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_add_closepin_on_panel {{{*/
let t_add_closepin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let closepin = get_el_child_with_class(tool_panel, CSS_CLOSEPIN);
    if( closepin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    closepin           = document.createElement("em");
    closepin.className = "closepin";
    closepin.id        = tool_panel.id +"_closepin";
    closepin.title     = "Close "+tool_panel.id;
    closepin.innerHTML = SYMBOL_CLOSEPIN;

    /*}}}*/
    /* [push_pin closepin scalepin clearpin] {{{*/
    let     prevpin;
    if     (prevpin = get_el_child_with_class(tool_panel, CSS_PUSH_PIN)) tool_panel.insertBefore(closepin, prevpin.nextElementSibling);
    else {  prevpin = tool_panel.firstElementChild;                           tool_panel.insertBefore(closepin, prevpin            ); }

    /*}}}*/
    /* layout portrait or landscape {{{*/
    t_eval_wide_or_tall_panel( tool_panel );

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_add_scalepin_on_panel {{{*/
let t_add_scalepin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let scalepin = get_el_child_with_class(tool_panel, CSS_SCALEPIN);
    if( scalepin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    scalepin           = document.createElement("em");
    scalepin.className = CSS_SCALEPIN;
    scalepin.id        = tool_panel.id +"_scalepin";
    scalepin.title     = "Magnify "+tool_panel.id;

    /*}}}*/
    /* push_pin closepin [scalepin] clearpin {{{*/
    let     prevpin;
    if     (prevpin = get_el_child_with_class(tool_panel, CSS_CLOSEPIN)) tool_panel.insertBefore(scalepin, prevpin.nextElementSibling);
    else if(prevpin = get_el_child_with_class(tool_panel, CSS_PUSH_PIN)) tool_panel.insertBefore(scalepin, prevpin.nextElementSibling);
    else {  prevpin = tool_panel.firstElementChild;                           tool_panel.insertBefore(scalepin, prevpin            ); }

    /*}}}*/
    /* layout portrait or landscape {{{*/
    t_eval_wide_or_tall_panel( tool_panel );

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/
/*_ t_add_clearpin_on_panel {{{*/
let t_add_clearpin_on_panel = function(tool_panel)
{
    /* inserted already {{{*/
    let clearpin = get_el_child_with_class(tool_panel, CSS_CLEARPIN);
    if( clearpin ) return;

    /*}}}*/
    /* create class id title content insert {{{*/
    clearpin           = document.createElement("em");
    clearpin.className = "clearpin";
    clearpin.id        = tool_panel.id +"_clearpin";
    clearpin.title     = "Clear "+tool_panel.id;
    clearpin.innerHTML = SYMBOL_RECYCLE;

    tool_panel.insertBefore(clearpin, tool_panel.firstElementChild);
    /*}}}*/
    /* push_pin closepin scalepin [clearpin] {{{*/
    let     prevpin;
    if     (prevpin = get_el_child_with_class(tool_panel, CSS_SCALEPIN)) tool_panel.insertBefore(clearpin, prevpin.nextElementSibling);
    else if(prevpin = get_el_child_with_class(tool_panel, CSS_CLOSEPIN)) tool_panel.insertBefore(clearpin, prevpin.nextElementSibling);
    else if(prevpin = get_el_child_with_class(tool_panel, CSS_PUSH_PIN)) tool_panel.insertBefore(clearpin, prevpin.nextElementSibling);
    else {  prevpin = tool_panel.firstElementChild;                    tool_panel.insertBefore(clearpin, prevpin                   ); }

    /*}}}*/
    /* layout portrait or landscape {{{*/
    t_eval_wide_or_tall_panel( tool_panel );

    add_el_class(tool_panel, CSS_PIN_ON_PANEL);
    /*}}}*/
};
/*}}}*/

/*_ t_has_pinclass_on_panel {{{*/
let t_has_push_pin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_PUSH_PIN); };
let t_has_closepin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_CLOSEPIN); };
let t_has_scalepin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_SCALEPIN); };
let t_has_clearpin_on_panel = function(tool_panel) { return t_has_pinclass_on_panel(tool_panel, CSS_CLEARPIN); };
let t_has_pinclass_on_panel = function(tool_panel, pin_class)
{
    return (get_el_child_with_class(tool_panel, pin_class) != null);
};
/*}}}*/
/*_ t_del_pin_css_on_panel {{{*/

let t_del_push_pin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_PUSH_PIN); };
let t_del_closepin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_CLOSEPIN); };
let t_del_scalepin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_SCALEPIN); };
let t_del_clearpin_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_CLEARPIN); };
let t_del_toolpins_on_panel = function(tool_panel) { t_del_pin_css_on_panel(tool_panel, CSS_PUSH_PIN);
                                                     t_del_pin_css_on_panel(tool_panel, CSS_CLOSEPIN);
                                                     t_del_pin_css_on_panel(tool_panel, CSS_SCALEPIN);
                                                     t_del_pin_css_on_panel(tool_panel, CSS_CLEARPIN); };

let t_del_pin_css_on_panel = function(tool_panel, pin_class)
{
    let el = get_el_child_with_class(tool_panel, pin_class);
    if(!el )   return;

    tool_panel.removeChild( el );

    del_el_class(tool_panel, CSS_PIN_ON_PANEL); /* manage pin top-right padding    */
    del_el_class(tool_panel, CSS_WIDE_PANEL  ); /* manage pin top-right pin layout */
    del_el_class(tool_panel, CSS_TALL_PANEL  ); /* manage pin top-right pin layout */
};
/*}}}*/

/*_ t_click_panel_pin_CB {{{*/
let t_click_panel_pin_CB = function(panel, pin)
{
/*{{{*/
    let caller = "t_click_panel_pin_CB";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log("%c"+caller+"%c"+get_n_lbl(panel)+"%c"+get_n_lbl(pin)+"])"
        ,          lbL+lf5    ,lbC+lf3              ,lbR+lf4                );
/*}}}*/
let result;
    if     (         panel.id == "fly_div"  ) t_fly_set("");
    else if( has_el_class(pin , CSS_PUSH_PIN) ) result = "handling done onDown";
    else if( has_el_class(pin , CSS_CLOSEPIN) ) t_tools_panel_select(panel, false);
    else if( has_el_class(pin , CSS_SCALEPIN) ) result = onLong_press4_TOOL_PANEL_MAGNIFY();
    else if( has_el_class(pin , CSS_CLEARPIN) ) t_clear(caller);

if(log_this && result) log("%c"+result, lbH+lf5);
};
/*}}}*/

/*_ t_clear_panel_pined_innerHTML {{{*/
let t_clear_panel_pined_innerHTML = function(panel)
{
/*{{{
logXXX("t_clear_panel_pined_innerHTML("+get_n_lbl(panel)+")");
}}}*/

    let push_pin = get_el_child_with_class(panel, CSS_PUSH_PIN); if( push_pin ) panel.removeChild(push_pin);
    let closepin = get_el_child_with_class(panel, CSS_CLOSEPIN); if( closepin ) panel.removeChild(closepin);
    let scalepin = get_el_child_with_class(panel, CSS_SCALEPIN); if( scalepin ) panel.removeChild(scalepin);
    let clearpin = get_el_child_with_class(panel, CSS_CLEARPIN); if( clearpin ) panel.removeChild(clearpin);

    panel.innerHTML = "";

    if( clearpin ) panel.insertBefore(clearpin, panel.firstElementChild);
    if( scalepin ) panel.insertBefore(scalepin, panel.firstElementChild);
    if( closepin ) panel.insertBefore(closepin, panel.firstElementChild);
    if( push_pin ) panel.insertBefore(push_pin, panel.firstElementChild);
};
    /*}}}*/

/* ORDER */
/*_ t_cycle_pivot_panel {{{*/
let t_cycle_pivot_panel = function()
{
/*{{{*/
let caller   = "t_cycle_pivot_panel";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this ) log(caller);
/*}}}*/
    /* [pivot_PANEL] {{{*/
if( log_this) log("...pivot_PANEL=["+ get_id_or_tag(pivot_PANEL) +"]");
    if( !pivot_PANEL) return;

    /*}}}*/
    /* [next_visible_panel] {{{*/
    let next_visible_panel; let  next_visible_panel_idx;
    /*...................*/ let         pivot_PANEL_idx;
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* PINNED */
        let panel = TOOL_panels[i];
        if(!panel                               ) continue; /* i.e. fly_div may not be there yet ... TODO */
        if( panel.classList.contains(CSS_PINNED)) continue;

        /* SELECTED */
        let map = tools_map_get(panel);
        if(!map.selected) continue;

        if(! next_visible_panel && pivot_PANEL_idx) {  next_visible_panel_idx = i;  next_visible_panel    = panel; }
        if(               panel == pivot_PANEL    ) {         pivot_PANEL_idx = i;                                 }

        if(  next_visible_panel ) break;
    }
if( log_this) log("..........pivot_PANEL #"+        pivot_PANEL_idx+" ["+ get_id_or_tag( pivot_PANEL         ) +"]");
if( log_this) log("...next_visible_panel #"+ next_visible_panel_idx+" ["+ get_id_or_tag(  next_visible_panel ) +"]");

    if( !next_visible_panel ) return;

    /*}}}*/
    /* [dragging_first_panel] {{{*/
/*{{{
    let  dragging_first_panel = (pivot_PANEL == first_visible_panel);
if( log_this) log("...dragging_first_panel "+ dragging_first_panel);

    if( !dragging_first_panel) return;
}}}*/
    /*}}}*/
    /* left-shift following panels {{{*/
/*{{{
if( log_this) t_log_TOOL_panels(caller);
    for(let i=first_visible_panel_idx       ; (i+1) < TOOL_panels.length; ++i)
        TOOL_panels[i] = TOOL_panels[i+1];
    TOOL_panels[TOOL_panels.length-1] = first_visible_panel;
if( log_this) t_log_TOOL_panels(caller, lf4);

    t_TOOL_panels_SLOT_SELECTED();
}}}*/
    /*}}}*/
    /* switch with next visible */
if( log_this) t_log_TOOL_panels(caller);

        TOOL_panels[        pivot_PANEL_idx ] =  next_visible_panel;
        TOOL_panels[ next_visible_panel_idx ] =         pivot_PANEL;

if( log_this) t_log_TOOL_panels(caller, lf4);
};
/*}}}*/
/*_ t_get_TOOL_panels_last_selected_not_pinned_idx {{{*/
let t_get_TOOL_panels_last_selected_not_pinned_idx = function()
{
/*{{{*/
let caller   = "t_get_TOOL_panels_last_selected_not_pinned_idx";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this ) log(caller);
/*}}}*/
    let                               panel_idx = 0;
    for(let i=TOOL_panels.length-1; (!panel_idx) && (i > 0); --i)
    {
        let panel = TOOL_panels[i];                if(!panel       )  continue; /* i.e. fly_div may not be there yet ... TODO */
        if(                  panel.classList.contains( CSS_PINNED  )) continue;
        let   map = tools_map_get(panel);  if(!map || !map.selected ) continue;
        panel_idx = i;
    }
if( log_this) log("...panel_idx #"+ panel_idx+" ["+ get_id_or_tag(  TOOL_panels[panel_idx] ) +"]");
    return panel_idx;
};
/*}}}*/
/*_ t_TOOL_panels_SLOT_SELECTED {{{*/
let t_TOOL_panels_SLOT_SELECTED = function()
{
/*{{{*/
let   caller = "t_TOOL_panels_SLOT_SELECTED";
let log_this = LOG_MAP.T5_SPREAD;

if( log_this) log(caller);
/*}}}*/
if( log_this) t_log_TOOL_panels(caller);

if( log_this) log("%c REORDERING ", lbb+lbH+lf7);
    let free_slots = [];
    for(let i=1; i < TOOL_panels.length; ++i) /* keep hotspot first */
    {
        /* COLLECT A FREE SLOT */
        let                   panel = TOOL_panels[i];
        if(                  !panel                                /*       slot empty */
           ||                 panel.classList.contains(CSS_PINNED) /*     pinned panel */
           || !tools_map_get( panel ).selected                     /* unselected panel */
          ) {
            free_slots.push(i); /* ...first slot where to move next selected panel */
        }
        /* ALLOCATE A SLOT TO SELECTED PANELS */
        else {
            let free_slot = free_slots.shift();
            if( free_slot ) {
if( log_this) log("...free_slot=["+free_slot+" "+SYMBOL_LEFT_ARROW+" "+i+"] .. ["+get_id_or_tag(TOOL_panels[free_slot])+" "+SYMBOL_LEFT_ARROW+" "+get_id_or_tag(TOOL_panels[i])+"]");
                let removed = TOOL_panels[free_slot];                            /* extract  unselected panel */
                /*.........*/ TOOL_panels[free_slot] = TOOL_panels[i];           /* insert     selected panel */
                /*..................................*/ TOOL_panels[i] = removed; /* relocate unselected panel */
            }
            /* OR LEAVE PANEL WHERE IT IS */
        }

    }

if( log_this) t_log_TOOL_panels(caller, lf5);
};
/*}}}*/
/*_ t_log_TOOL_panels {{{*/
let t_log_TOOL_panels = function(_caller, lfx=lf8)
{
log("%c"+_caller+":", lbb+lbH+lfx);
    let s = "";
    for(let i=0; i < TOOL_panels.length; ++i)
        s += LF+i+"."+get_id_or_tag(TOOL_panels[i]);
log(s);
};
/*}}}*/

/*_ t_log_panel_style_zIndex {{{*/
/*{{{*/
let t_log_panel_style_zIndex_logged_once;

/*}}}*/
let t_log_panel_style_zIndex = function(panel, _caller)
{
    if(!t_log_panel_style_zIndex_logged_once) /*{{{*/
    {
        log("%c ZINDEX_ON_GRID............%c"+ ZINDEX_ON_GRID          , lbH+lf8, lbb+lf4);
        log("%c ZINDEX_ABOVE_TOOLS........%c"+ ZINDEX_ABOVE_TOOLS      , lbH+lf8, lbb+lf4);
        log("%c ZINDEX_BELOW_TOOLS........%c"+ ZINDEX_BELOW_TOOLS      , lbH+lf8, lbb+lf3);
        log("%c ZINDEX_TOOL_PANEL_ZERO....%c"+ ZINDEX_TOOL_PANEL_ZERO  , lbH+lf8, lbb+lf3);
        log("%c ZINDEX_PINNED_PANEL_ZERO..%c"+ ZINDEX_PINNED_PANEL_ZERO, lbH+lf8, lbb+lf2);
        log("%c ZINDEX_TARGET_TOOL_ZERO...%c"+ ZINDEX_TARGET_TOOL_ZERO , lbH+lf8, lbb+lf1);

        t_log_panel_style_zIndex_logged_once = true;
    }
    /*}}}*/

    /*.......................................*/ let label  = " TOOL";      let lfx = lf3;

    if( panel == pivot_PANEL                        ) { label += " [pivot_PANEL]"; lfx = lf7; }
    if( panel.classList.contains( CSS_PIVOT_PANEL ) ) { label += " PIVOT_PANEL"  ; lfx = lf7; }
    if( panel.classList.contains( CSS_PINNED      ) ) { label += " PINNED"       ; lfx = lf2; }
    if( panel.classList.contains( "on_grid"       ) ) { label += " on_grid"      ; lfx = lf5; }

log("%c"+_caller+"%c "+label+"%c "+panel.id+".style.zIndex %c"+panel.style.zIndex
    ,lbH         ,lbL+lf8    ,lbR+lfx                     ,lbH+lfx               );
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
    let caller = "t_tool_set_top_xy";
/*
log(caller+"("+x+" , "+y+") .. CALLED BY "+ _caller);
*/
let log_this = LOG_MAP.T5_SPREAD;

/*{{{
if( log_this) t_log_event_status(caller+"("+x+" "+y+ ((p) ? (" p=["+p+"]") : "") +"):"+LF +".. CALLED BY "+ _caller, lf2);
}}}*/
    if(!hotspot) return;
/*}}}*/
    /* NOT WHEN TOOLS ON GRID {{{*/
    if( call_t_grid_IS_ON_GRID(caller) )
    {
if(log_this) log(caller+"("+x+" , "+y+"): IS ON GRID");

        return;
    }
    /*}}}*/
    /* [hiding_tools] .. (HOTSPOT IN GUTTER) {{{*/
    if((x != h_x) || (y != h_y))
    {
        t_tool_set_hotspot_xy(x, y, _caller);

    }
    let hiding_tools
        =  t_gutter_is_XY_IN(x,y)
        || prop_get( EDIT_OR_STAGE ) /* [dom_hide] */
    ;

    if( has_el_class(hotspot, CSS_FREEZED) )
    {
        if(hiding_tools) {
if(log_this) log("%c HOTSPOT ALREADY FREEZED", lf8);
            return;
        }
        else {
if(log_this) log("%c HOTSPOT UNFREEZED", lf2);
if(log_this) log(caller+"("+x+" , "+y+")");
        }
    }

    let panel_not_hidden = [];
    if(hiding_tools && prop_get( EDIT_OR_STAGE ) && has_el_class(headsup_ds, CSS_PINNED))
        panel_not_hidden.push( headsup_ds );

if(log_this && panel_not_hidden) {
    log("...........................hiding_tools=["+               hiding_tools            +"]");
    log(".......................panel_not_hidden=["+    get_n_lbl( panel_not_hidden      ) +"]");
    log("................prop_get(EDIT_OR_STAGE)=["+     prop_get( EDIT_OR_STAGE         ) +"]");
    log("...has_el_class(headsup_ds, CSS_PINNED)=["+ has_el_class( headsup_ds, CSS_PINNED) +"]");
}

    /*}}}*/
    /* TOOLS [css-position] {{{*/
    if(p && (p != hotspot.style.position))
    {
        hotspot              .style.position = p;

        headsup              .style.position = p;
        headsup_w            .style.position = p;
        headsup_ds           .style.position = p;
        headsup_bw           .style.position = p;
        headsup_bz           .style.position = p;

        pat_bag              .style.position = p;
        sel_bag              .style.position = p;
        dom_traversal        .style.position = p;

        test_panel           .style.position = p;
        dev_log_map          .style.position = p;
        dom_load_tags        .style.position = p;

        /* TRANSCRIPTS POSITION .. (when not pinned) */
        if(!transcript1.classList.contains(CSS_PINNED) ) transcript1.style.position = p;
        if(!transcript2.classList.contains(CSS_PINNED) ) transcript2.style.position = p;

        /* UNPIN FIXED {{{*/
        if(p != "fixed") {
            t_set_CSS_PINNED(hotspot      , true);

            t_set_CSS_PINNED(headsup      , true);
            t_set_CSS_PINNED(headsup_w    , true);
            t_set_CSS_PINNED(headsup_ds   , true);
            t_set_CSS_PINNED(headsup_bw   , true);
            t_set_CSS_PINNED(headsup_bz   , true);

            t_set_CSS_PINNED(pat_bag      , true);
            t_set_CSS_PINNED(sel_bag      , true);

            t_set_CSS_PINNED(dom_traversal, true);
            t_set_CSS_PINNED(test_panel   , true);
            t_set_CSS_PINNED(dev_log_map  , true);
            t_set_CSS_PINNED(dom_load_tags, true);
        }
        /*}}}*/

    }
    /*}}}*/
    /* SPREAD GROUPED TOOLS {{{*/
    if( !hiding_tools ) {
        t_tool_spread_xy(caller, x, y);

    }
    /*}}}*/
    /* LAYOUT OR HIDE TOOLS {{{*/
    let x_sign = (x < pivotXY.x) ? 1 : -1;
    let y_sign = (y < pivotXY.y) ? 1 : -1;
    if( t_gutter_is_XY_IN(x,y) ) { x_sign *= -1; y_sign *= -1; }

    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);

    for(let i=1; i < TOOL_panels.length; ++i)
    {
        let panel  = TOOL_panels[i];
        if(!panel) continue; /* i.e. fly_div may not be there yet ... TODO */

        /* 1/3 HIDE TOOLS */
        if(hiding_tools && !panel_not_hidden.includes( panel ))
        {
            add_el_class(panel, CSS_HIDDEN);
        }
        /* 2/3 SHOW PINNED TOOLS */
        else if( panel.classList.contains(CSS_PINNED) )
        {
            let map = tools_map_get(panel);
            if( map && map.selected)
                del_el_class(panel, CSS_HIDDEN);

/*{{{
t_log_panel_style_zIndex(panel, caller+" .. CALLED BY "+_caller);
}}}*/

        }
        /* 3/3 LAYOUT UNPINNED TOOLS */
        else {

            let map;
            if( map = tools_map_get(panel))
            {
                if(map.selected) del_el_class(panel, CSS_HIDDEN);
                else             add_el_class(panel, CSS_HIDDEN);

                if(p) map.p = p;

                if(map.selected)
                {
                    let w = map.w;
                    let h = map.h;

                    t_tool_set_panel_xy_wh(panel, map.x, map.y, w, h, x_sign, y_sign);

                    panel.style.zIndex
                        = (panel == pivot_PANEL)
                        ?  ZINDEX_ABOVE_TOOLS     - 1 /* as the top-most tool */
                        :  ZINDEX_TOOL_PANEL_ZERO + i;
/*{{{
t_log_panel_style_zIndex(panel, caller+" .. CALLED BY "+_caller+" [map.selected]");
}}}*/
                }
            }
        }
    }
    /*}}}*/
    /* pause or resume animation {{{*/
    set_el_class_on_off(hotspot, CSS_FREEZED, hiding_tools);
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
    /* [hiding_tools] {{{*/
    t_trapped_dir_show( hiding_tools );

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

    let    vp = t_get_viewport();
    if(x < vp.left  ) x = vp.left;
    if(x > vp.right ) x = vp.right;
    if(y < vp.top   ) y = vp.top;
    if(y > vp.bottom) y = vp.bottom;

    h_x = x; hotspot.style.left = h_x +"px";
    h_y = y; hotspot.style.top  = h_y +"px";

    let has_changed = false;
    if(topTool.x != h_x) { topTool.x = h_x; has_changed = true; }
    if(topTool.y != h_y) { topTool.y = h_y; has_changed = true; }
    if(has_changed) {
        /* DO NOT SAVE TRANSIENT HOTSPOT POSITION */
        if(    !t_store_update_is_pending()
            && !t_gutter_is_XY_IN(h_x, h_y)
            && !prop_get( EDIT_OR_STAGE   )
          )
            t_store_update_post("t_tool_set_hotspot_xy");
    }

if(LOG_MAP.T5_SPREAD) {
    if(has_changed)
        log("t_tool_set_hotspot_xy("+x+" "+y+") .. CALLED BY "+ _caller+":"+LF
           +"...topTool FROM XY=["+ topTool.x  +" "+ topTool.y +"]"+LF
           +".............TO XY=["+       h_x  +" "+       h_y +"]");
    else
        log( "t_tool_set_hotspot_xy("+x+" "+y+") .. CALLED BY "+ _caller+": UNCHANGED");
}

};
/*}}}*/
/*_ t_get_viewport {{{*/
let t_get_viewport = function()
{
    let w_H_or_p_H
        = (hotspot.style.position == "fixed")
        ?  w_H
        :  p_H;

    let margin     = hotring.clientWidth / 2;

    let top        =             -margin;
    let left       =             -margin;
    let right      = w_W        - margin;
    let bottom     = w_H_or_p_H - margin;

/*{{{
logXXX("t_get_viewport: return XY=["+top+" "+left+"] RB=["+right+" "+bottom+"]");
}}}*/
    return { top    : top
        ,    left   : left
        ,    right  : right
        ,    bottom : bottom
    };
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
/*{{{*/
let caller = "t_tool_set_panel_xy_wh("+get_n_lbl(panel)+", xy=["+x+" , "+y+"], w=["+w+" "+h+"])";
let log_this = LOG_MAP.T5_SPREAD;

/*}}}*/
    /* [top_left] or [bottom_right] .. f(x_sign, y_sign) {{{*/
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

/* SPREAD */
/*_ t_tool_spread_xy {{{*/
let t_tool_spread_xy = function(_caller, x, y)
{
/*{{{*/
let log_this = LOG_MAP.T5_SPREAD;

/*{{{
if( log_this) t_log_event_status("%c t_tool_spread_xy("+x+" "+y+") .. CALLED BY "+ _caller, lf2);
}}}*/

    if(!hotspot) return;
/*}}}*/
    /* [x_sign y_sign] {{{*/
    let x_sign = (x < pivotXY.x) ? 1 : -1;
    let y_sign = (y < pivotXY.y) ? 1 : -1;
    if( t_gutter_is_XY_IN(x,y) ) { x_sign *= -1; y_sign *= -1; }

    x += x_sign * h_W / 2;
    y += y_sign * h_H / 2;

    /*}}}*/
    /* [onWork_PANEL_num dx dy] {{{*/
    if(!t_tools_loaded) t_load_TOOLS_MAP("t_tool_spread_xy");
if(!pivot_PANEL) t_set_pivot_PANEL( onWork_PANEL );

    let xy_ratio = t_set_spread_ratio_at_xy_in_panel(x, y, pivot_PANEL);
/*{{{
logBIG("xy_ratio=["+xy_ratio.x+" "+xy_ratio.y+"]", lf4)
}}}*/

    /*}}}*/
    /*  fully_spread .. (while moving pivot_PANEL) {{{*/
    if(!fully_spread_since_onDown && (onWork_PANEL == pivot_PANEL))
    {
        let fully_spread = ((spread_ratio.x >= 0.99) || (spread_ratio.y >= 0.99));
if( log_this) log("%c"+(fully_spread ? "@@@ fully_spread" : "not fully_spread"), lbH+(fully_spread ? lf4 : lf8));

        if( fully_spread ) {
if( log_this) t_log_event_status("t_tool_spread_xy:"+LF +".. CALLED BY "+ _caller, lf2);

            fully_spread_since_onDown = true;
            t_cycle_pivot_panel();
        }
    }
    /*}}}*/
    /* SPREAD TOOLS AWAY FROM HOTSPOT {{{*/
    let xy = { x:x , y:y };

    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* PINNED */
        let panel = TOOL_panels[i];
        if(!panel) continue; /* i.e. fly_div may not be there yet ... TODO */
        if( panel.classList.contains(CSS_PINNED)) continue;

        /* SELECTED */
        let map = tools_map_get(panel);
        if(!map         ) continue;
        if(!map.selected) continue;

        let w = map.w;
        let h = map.h;

        let dx = xy_ratio.x * w;
        let dy = xy_ratio.y * h;

/*
if(panel == pat_bag) log("t_tool_spread_xy: pat_bag map.h=["+map.h+"] .. offsetHeight=["+panel.offsetHeight+"]")
*/
        xy = t_tool_spread_panel_xy(panel, xy.x, xy.y, dx, dy, x_sign, y_sign);
/*{{{
logXXX(panel.id+" WY=["+w+" "+h+"] .. xy=["+xy.x+" "+xy.y+"]");
}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_set_spread_ratio_at_xy_in_panel {{{*/
/*{{{*/
let spread_ratio = { x:0 , y:0 };

/*}}}*/
let t_set_spread_ratio_at_xy_in_panel = function(x, y, moving_panel)
{
/* i.e. spread_ratio := (pivotXY / SUM-OF-ALL-UNPINNED-SELECTED-PANELS-WH) */
let caller = "t_set_spread_ratio_at_xy_in_panel";
/*{{{
logXXX(caller+"("+x+","+y+") has_moved=["+has_moved+"] spread_ratio.x=["+spread_ratio.x+"]");
}}}*/
    /* unchanged {{{*/
    if(!has_moved && spread_ratio.x) {
/*{{{
logXXX("%c "+caller+": !has_moved .. returning spread_ratio", lbb+lbF+lf2);
}}}*/
        return spread_ratio;
    }
    /*}}}*/
    /* [spread_ratio] .. [0 .. (fully_spread=1)] {{{*/
    let panels_wh = t_spread_get_leading_panels_wh_up_to_panel( moving_panel );
    if( panels_wh ) {
/*{{{
log(caller+"%c"+moving_panel.id+"%c FROM "+parseInt(100 * spread_ratio.x)+" x "+ parseInt(100 * spread_ratio.y)+"  %c"+panels_wh.w+" "+panels_wh.h
    ,       lbH+lf8             ,lbH+lf8                                                                          ,lbF+lb7                        );
}}}*/

        let x_ratio = Math.abs(x - pivotXY.x) / panels_wh.w;
        let y_ratio = Math.abs(y - pivotXY.y) / panels_wh.h;

        x_ratio     = Math.min(x_ratio , 1);
        y_ratio     = Math.min(y_ratio , 1);
        x_ratio     = Math.max(x_ratio , 0);
        y_ratio     = Math.max(y_ratio , 0);

        spread_ratio.x = x_ratio;
        spread_ratio.y = y_ratio;

        if(!t_store_update_is_pending()) t_store_update_post(caller);
    }
    /*}}}*/
/*{{{
log(caller+"%c"+moving_panel.id+"%c TO..."+parseInt(100 * spread_ratio.x) +" x "+ parseInt(100 * spread_ratio.y), lbH+lf3, lbH+lf4);
}}}*/
/*{{{
t_spread_log(moving_panel);
}}}*/
    return spread_ratio;
};
/*}}}*/
/*_ t_set_spread_ratio_up_to_panel {{{*/
let t_set_spread_ratio_up_to_panel = function(panel)
{
    /* panel corner .. f(pivot quadrant) */
    let      x = panel.offsetLeft;
    let      y = panel.offsetTop ;
    let x_sign = (x > topTool.x) ? 1 : -1;
    let y_sign = (y > topTool.y) ? 1 : -1;
    if( x_sign < 0) x += onWork_PANEL.offsetWidth;
    if( y_sign < 0) y += onWork_PANEL.offsetHeight;

    x += x_sign * h_W / 2;
    y += y_sign * h_H / 2;

    /*  sum of preceeding fully spread panels */
    let fully_spread_WH = t_spread_get_leading_panels_wh_up_to_panel( panel );

    /* WH ratio to reach panel corner */
    spread_ratio.x = Math.abs(x - topTool.x) / fully_spread_WH.w;
    spread_ratio.y = Math.abs(y - topTool.y) / fully_spread_WH.h;
};
/*}}}*/
/*_ t_spread_log {{{*/
let t_spread_log = function(moving_panel)
{
    t_set_tool_id_value("tools_filter"
                        , moving_panel.id+" "
                        + parseInt(100 * spread_ratio.x)+"*"+parseInt(100 * spread_ratio.y)
                       );

    let msg
        = "HS "+ topTool.x               +" "+ topTool.y              +LF
        + "Pv "+ pivotXY.x               +" "+ pivotXY.y              +LF
        + "Pn "+ moving_panel.offsetLeft +" "+ moving_panel.offsetTop
    ;

logXXX("t_spread_log"+LF+msg);
/*{{{
}}}*/

    t_words_regex_log(msg);
};
        /*}}}*/
/*_ t_spread_get_leading_panels_wh_up_to_panel {{{*/
let              panels_wh = {};
let t_spread_get_leading_panels_wh_up_to_panel = function( moving_panel )
{
    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);

/* {Width Height} .. f(selected tools collated spread area) */
    panels_wh.w = 0;
    panels_wh.h = 0;
    let map_selected_count = 0;
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        /* PINNED */
        let panel = TOOL_panels[i];
        if(!panel) continue; /* i.e. fly_div .. TODO */
        if( panel.classList.contains( CSS_PINNED )) continue;

        /* SELECTED */
        let map = tools_map_get(panel);
        if(!map.selected) continue;

        map_selected_count += 1;

        panels_wh.w += map.w;
        panels_wh.h += map.h;

        if(panel == moving_panel) break;
    }

/*{{{
log("...["+moving_panel.id+"] map_selected_count=["+map_selected_count+"] .. panels_wh=["+panels_wh.w+" "+panels_wh.h+"]");
}}}*/
    return (map_selected_count > 0) ? panels_wh : null;
};
/*}}}*/

/*_ t_tool_spread_panel_xy {{{*/
let t_tool_spread_panel_xy = function(panel, x, y, dx, dy, x_sign, y_sign)
{
    /* panel spread location {{{*/
    let map = tools_map_get(panel);
    map.x = x;
    map.y = y;

/*{{{
logXXX("%c"+"t_tool_spread_panel_xy"+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/
    /*}}}*/
    /* CAP PIVOT POINT at 100% {{{*/
    let    w  = map.w;
    let    h  = map.h;
    if(panel == pivot_PANEL) {
        if((spread_ratio.x == 1) || (spread_ratio.y == 1)) {
            let piv_x = (spread_ratio.x == 1) ? (x + x_sign * w) : pivotXY.x;
            let piv_y = (spread_ratio.y == 1) ? (y + y_sign * h) : pivotXY.y;
            t_set_pivotXY(piv_x, piv_y);
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

/* STATE */
/*_ are_p1_p2_in_same_quadrant_and_p2_in_corner {{{*/
let are_p1_p2_in_same_quadrant_and_p2_in_corner = function(p1, p2)
{
let log_this = LOG_MAP.T5_SPREAD;
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
let log_this = LOG_MAP.T5_SPREAD;

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
let log_this = LOG_MAP.T5_SPREAD;

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

let t_cache_layout_callers = CACHE_EMPTY;
/*}}}*/
/*_ t_cache_init_by {{{*/
let t_cache_init_by = function(_caller)
{
    let log_this = LOG_MAP.EV5_TOOL_CB;

    t_cache_layout_callers
        = (t_cache_layout_callers)
        ?  t_cache_layout_callers+" + "+_caller
        :                        _caller
    ;

if(log_this) log("%c CACHE INIT BY "+ _caller, lbF+lb7);

};
/*}}}*/
/*_ t_cache_empty {{{*/
let t_cache_empty = function(_caller)
{
    let log_this = LOG_MAP.EV5_TOOL_CB;

if(log_this) log("t_cache_empty: t_cache_layout_callers = %c "+t_cache_layout_callers+" %c", lbF+lb7,lbA);

    return (t_cache_layout_callers == CACHE_EMPTY);
};
/*}}}*/
/*_ t_cache_changed {{{*/
let t_cache_changed = function(_caller)
{
    let log_this = LOG_MAP.EV5_TOOL_CB;

if(log_this) log("t_cache_changed: %c CACHE INIT BY ["+t_cache_layout_callers+"] %c .. CALLED BY "+ _caller, lbF+lb7,lbA);

    return (t_cache_layout_callers != "");
};
/*}}}*/
/*_ t_cache_layout .. [w_WH .. p_WH .. h_H .. tools_map.WH] {{{*/
let t_cache_layout = function(_caller)
{
/*_ log_this {{{*/
let log_this = LOG_MAP.EV5_TOOL_CB;

/*{{{
    if(!t_cache_layout_callers) {
if(log_this) log("%c t_cache_layout: ** NO CHANGE SET"   +" .. CALLED BY "+ _caller, lbF+lb2);
        return;
    }
}}}*/
if(log_this) log("%c t_cache_layout .. CALLED BY "+ _caller,lbF+lb5);
/*}}}*/
    /* [window] [page] {{{*/
    t_cache_w_H_w_W_p_H();

    /*}}}*/
    /* [hotring] {{{*/
    if(hotring) {
        h_W = hotring.offsetWidth ;
        h_H = hotring.offsetHeight;

if(log_this) log("...HOTSPOT %c "+ h_W+" x "+h_H +" ", lb7);
    }
    /*}}}*/
    /* TOOLS GEOMETRY {{{*/
    t_update_TOOLS_MAP_GEOMETRY("t_cache_layout .. CALLED BY "+ _caller);

/*
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION,"<em class='cc0'>LAYOUT</em> Window <em class='cc8'>"+w_H+"x"+w_W+"</em>  Page <em class='cc8'>"+p_H+"</em>");
*/
    /*}}}*/
    t_cache_layout_callers = "";
};
/*}}}*/
/*_ t_cache_w_H_w_W_p_H {{{*/
let t_cache_w_H_w_W_p_H = function()
{
    w_H = window.innerHeight;
    w_W = window.innerWidth;

    p_H = get_page_height();

    if(window.scrollbars.visible)
    {
        w_W -= 17;
        w_H -= 17;
    }

/*{{{
logXXX("t_cache_w_H_w_W_p_H");
logXXX("...window:  innerWidth=["+window.innerWidth+"]  outerWidth=["+window.outerWidth+"]");
logXXX("...window: innerHeight=["+window.innerHeight+"] outerHeight=["+window.outerHeight+"]");
logXXX("...window.scrollbars.visible=["+window.scrollbars.visible+"]");
logXXX("...WINDOW %c "+ w_W+" x "+w_H +" %c PAGE %c "+p_H +" ", lb3,lbA, lb4);
console.dir(window)
}}}*/
};
/*}}}*/

/* STYLE */
/*_ t_sync_styles {{{*/
/*{{{*/
const T_SYNC_STYLES_DELAY = 50;
let   t_sync_styles_timer;
let   t_sync_styles_caller_csv;

/*}}}*/
let t_sync_styles = function(_caller)
{
    t_sync_styles_caller_csv = csv_add(t_sync_styles_caller_csv, _caller);

    if(t_sync_styles_timer) clearTimeout(t_sync_styles_timer);
    t_sync_styles_timer   =   setTimeout(t_sync_styles_handler, T_SYNC_STYLES_DELAY);
};
/*}}}*/
/*_ t_sync_styles_handler {{{*/
let t_sync_styles_handler = function()
{
/*{{{*/
let   caller = "t_sync_styles_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    t_sync_styles_timer      = null;
    t_sync_styles_caller_csv = "";
    /* CHECKBOXES {{{*/
    prop_get_MAP().forEach( function(prop,index,array)
                            {
                                set_id_class_on_off(prop.id, CSS_CHECKED,  prop.value);
                            });

    /*}}}*/
    /* UI [dark theme] {{{*/
    let state, id, el;
    state = prop_get( THEME_DARK );

    t_TOOL_SET_set_class_state      (                 CSS_DARK    , state);
    t_set_tool_class_theme_state    (CSS_TARGET_TOOL, CSS_DARK    , state);
    t_set_doc_tool_class_theme_state(CSS_TRANSCRIPT , CSS_DARK    , state);
    /*}}}*/
    /* UI [scrolled or fixed] {{{*/
    state = prop_get( TOOLS_SCROLL );

    t_TOOL_SET_set_class_state      (                 TOOLS_SCROLL, state);
    t_set_tool_class_theme_state    (CSS_TARGET_TOOL, TOOLS_SCROLL, state);
    t_set_doc_tool_class_theme_state(CSS_TRANSCRIPT , TOOLS_SCROLL, state);
    /*}}}*/
    /* UI [trapped or pivoting] {{{*/
    state = prop_get( TOOLS_TRAP );

    if(el = hotspot_c )                           set_el_class_on_off(el, CSS_TRAPPED, state);
    if(el = pivspot_c )                           set_el_class_on_off(el, CSS_TRAPPED, state);
    id = TOOLS_TRAP    ; if(el = prop_get_EL(id)) set_id_class_on_off(id, CSS_TRAPPED, state);

/*{{{
    id = TOOLS_TRAP    ; if(el = prop_get_EL(id))   set_id_class_on_off(id, CSS_CHECKED,  prop_get( TOOLS_TRAP    ));
}}}*/

    /*}}}*/
    /* SCROLL_SMOOTH & OVERFLOW {{{*/
    el = document.getElementsByTagName("HTML")[0] ; set_el_class_on_off(el,  OVERFLOW_VISI, prop_get( OVERFLOW_VISI ));
    el = document.getElementsByTagName("HTML")[0] ; set_el_class_on_off(el,  SCROLL_SMOOTH, prop_get( SCROLL_SMOOTH ));
    el = seeker_PU                                ; set_el_class_on_off(el,  SCROLL_SMOOTH, prop_get( SCROLL_SMOOTH ));

    /*}}}*/
    /* TOOLS CONTENT {{{*/
    if(el = prop_get_EL( THEME_DARK   )) el.innerHTML = (prop_get( THEME_DARK   )) ? SYMBOL_THEME_DARK_IS_ON : SYMBOL_THEME_DARK_IS_OFF;
    if(el = prop_get_EL( TOOLS_SCROLL )) el.innerHTML = (prop_get( TOOLS_SCROLL )) ? SYMBOL_UP_DOWN_ARROW    : SYMBOL_ANCHOR           ;
    if(el = prop_get_EL( WORDING      )) el.innerHTML = (prop_get( WORDING      )) ? SYMBOL_WORDING_IS_ON    : SYMBOL_WORDING_IS_OFF   ;
    if(el = prop_get_EL( TOOLS_EXTRAS )) el.innerHTML = (prop_get( TOOLS_EXTRAS )) ? SYMBOL_EXPAND_IS_ON     : SYMBOL_EXPAND_IS_OFF    ;

    id    = ANCHOR_FREEZE;
    if(el = prop_get_EL(id)) {
        state = (prop_get( WORDING ) || prop_get( ANCHOR_FREEZE ));
        set_id_class_on_off(id,  CSS_CHECKED,  state);
        el.innerHTML
            = state
            ? SYMBOL_NO_ENTRY
            : SYMBOL_SAILBOAT
        ;
    }
    /*}}}*/
    /* WORDING {{{*/
    let cycling    = prop_get   (WORDS_OPCYCLE);
    let cycling_el = prop_get_EL(WORDS_OPCYCLE);
    if( cycling_el )
    {
        if( cycling ) {
            cycling_el.style.backgroundColor
                = prop_get( WORDS_EXACT   ) ? window.getComputedStyle( prop_get_EL( WORDS_EXACT     ) ).backgroundColor
                : prop_get( WORDS_SEGMENT ) ? window.getComputedStyle( prop_get_EL( WORDS_SEGMENT   ) ).backgroundColor
                :                             window.getComputedStyle( prop_get_EL( WORDS_HEAD_TAIL ) ).backgroundColor
            ;
        }
        else {
            cycling_el.style.backgroundColor = "white";
        }

        if     ( prop_get( WORDS_EXACT   ) ) sync_words_opcycle_button( WORDS_EXACT     );
        else if( prop_get( WORDS_SEGMENT ) ) sync_words_opcycle_button( WORDS_SEGMENT   );
        else                                 sync_words_opcycle_button( WORDS_HEAD_TAIL );
    }
    /*}}}*/
};
/*}}}*/
/*_ t_set_doc_tool_class_theme_state {{{*/
let t_set_doc_tool_class_theme_state = function(className, theme, state)
{
/*{{{
logBIG("t_set_doc_tool_class_theme_state("+className+", "+theme+", "+state+")")
}}}*/

    let                     node_list = document.querySelectorAll("."+className);
    for(let i=0;        i < node_list.length; ++i)
    {
/*{{{
logXXX("...set_el_class_on_off("+get_id_or_tag(node_list[i])+", "+theme+", "+state+")");
}}}*/
        set_el_class_on_off(node_list[i], theme, state);
    }
};
/*}}}*/
/*_ t_set_tool_class_theme_state {{{*/
let t_set_tool_class_theme_state = function(className, theme, state)
{
/*{{{
logBIG("t_set_tool_class_theme_state("+className+", "+theme+", "+state+")")
}}}*/

    let                     node_list = shadow_root.querySelectorAll("."+className);
    for(let i=0;        i < node_list.length; ++i)
    {
/*{{{
logXXX("...set_el_class_on_off("+get_id_or_tag(node_list[i])+", "+theme+", "+state+")");
}}}*/
        set_el_class_on_off(node_list[i], theme, state);
    }
};
/*}}}*/

/*}}}*/
/* GRID {{{*/
/*_ t_move_TOOLS_ON_GRID {{{*/
let t_move_TOOLS_ON_GRID = function(_caller)
{
/*{{{
logXXX("t_move_TOOLS_ON_GRID .. CALLED BY "+_caller+"");
}}}*/
    call_t_grid_ON_OFF_CB(true);
};
/*}}}*/
/*_ t_move_TOOLS_OFF_GRID {{{*/
let t_move_TOOLS_OFF_GRID = function(_caller)
{
/*{{{
logXXX("t_move_TOOLS_OFF_GRID .. CALLED BY "+_caller+"");
}}}*/
    call_t_grid_ON_OFF_CB(false);

    dimm_stop(_caller);
};
/*}}}*/
/*_ t_move_TOOLS_TOGGLE_GRID {{{*/
let t_move_TOOLS_TOGGLE_GRID = function(_caller)
{
/*{{{
logXXX("t_move_TOOLS_TOGGLE_GRID .. CALLED BY "+_caller+"");
}}}*/
    call_t_grid_ON_OFF_CB(false);

    dimm_stop(_caller);
};
/*}}}*/
/*_ call_t_grid_ON_OFF_CB javascript/dom_grid.js {{{ */
let call_t_grid_ON_OFF_CB = function(new_state="toggle")
{
    let caller = "call_t_grid_ON_OFF_CB("+new_state+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

    if(new_state == "toggle") new_state = !call_t_grid_IS_ON_GRID(caller);
if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb2+lbF);

    if(!new_state                                           ) t_raise_pivot_PANEL_delayed(T_RAISE_PIVOT_PANEL_DELAY_SHORT, caller);
    else if(!t_raise_pivot_PANEL_called_since_onDown(caller)) t_flash_unpinned_panels    (caller);

    if(typeof t_grid_ON_OFF_CB == "undefined") log_dom_grid_js_not_loaded(caller);
    else      t_grid_ON_OFF_CB(new_state);

    t_fly_set("");
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
let t_IS_ON_GRID_observerCB = function(on_grid)
{
/*{{{*/
    let caller = "t_IS_ON_GRID_observerCB("+on_grid+")";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    /* TOOLS STAGING PHASE {{{*/
    if( on_grid )
    {
        t_target_tool_feed_stop(caller);
        dimm_start_grid(caller);

        if(!t_raise_pivot_PANEL_called_since_onDown(caller))
            t_flash_unpinned_panels(caller);
    }
    /*}}}*/
    /* TOOLS SHOWING PHASE {{{*/
    else {
        dimm_stop(caller);

        t_grid_TOOLS_MAP_changed();

        t_TOOL_SET_eval_wide_or_tall_panel();
    }
    /*}}}*/
};
/*}}}*/
/*_ t_grid_TOOLS_MAP_changed {{{*/
let t_grid_TOOLS_MAP_changed = function()
{
/*{{{*/
let caller = "t_grid_TOOLS_MAP_changed";
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);
/*}}}*/
    t_TOOL_panels_SLOT_SELECTED();

    t_update_TOOLS_MAP_GEOMETRY(caller, 0);

    t_tool_set_top_xy(caller, topTool.x, topTool.y);
};
/*}}}*/
/*}}}*/
/* DIMM {{{*/
/*{{{*/

let dimm_mask       = null;
let dimm_mask_timer = null;

/*}}}*/
/*_ dimm_start {{{*/
const DIMM_CLASS_ARRAY = ["dimm_grid", "dimm_pat_bag", "dimm_target_tool", "dimm_slot_containers"];
const DIMM_STYLE_ARRAY = ["dimm_light", "dimm_dark"];

let dimm_start_pat_bag         = function(_caller) { dimm_start(_caller, ZINDEX_PINNED_PANEL_ZERO, "dimm_pat_bag"        ,  "dimm_light", "fixed" ); };
let dimm_start_grid            = function(_caller) { dimm_start(_caller, ZINDEX_TOOL_PANEL_ZERO  , "dimm_grid"           ,  "dimm_light", "fixed" ); };
let dimm_start_target_tool     = function(_caller) { dimm_start(_caller, ZINDEX_ABOVE_TOOLS      , "dimm_target_tool"    ,  "dimm_dark" , "fixed" ); };
let dimm_start_slot_containers = function(_caller) { dimm_start(_caller, ZINDEX_ABOVE_TOOLS      , "dimm_slot_containers",            "", ""      ); };
let dimm_start                 = function(                      _caller, zIndex                  , dimm_class=""         , dimm_style="", position)
{
    /* dimm_add dimm_class dimm_style {{{*/
    if(!dimm_mask) dimm_add();
    if(dimm_class && !has_el_class(dimm_mask, dimm_class)) set_el_class_removing(dimm_mask, dimm_class, DIMM_CLASS_ARRAY);
    if(dimm_style && !has_el_class(dimm_mask, dimm_style)) set_el_class_removing(dimm_mask, dimm_style, DIMM_STYLE_ARRAY);

    /*}}}*/
    /* zIndex {{{*/
let log_this = LOG_MAP.T2_GRID;
if( log_this) log("dimm_start(zIndex=["+zIndex+"], dimm_class=["+dimm_class+"], dimm_style=["+dimm_style+"]) .. CALLED BY "+ _caller);

    if(zIndex) dimm_mask.style.zIndex = zIndex;

    /*}}}*/
    /* position .. (fixed or absolute) {{{*/
    if( position == "fixed")
    {
        dimm_mask.style.position = "fixed";
        dimm_mask.style.top      = "0";
        dimm_mask.style.left     = "0";

    }
    else if(position == "absolute") {
        dimm_mask.style.position = "absolute";
        dimm_mask.style.left     = window.scrollX +"px";
        dimm_mask.style.top      = window.scrollY +"px";
    }
    /*}}}*/
    /* display block {{{*/
    dimm_mask.style.display = "block";

    add_el_class(document.body, CSS_DIMMED);
    /*}}}*/
    /* width height .. content width {{{*/
    dimm_mask.style.width      = window.innerWidth +"px";

    if( !div_slot_containers_displayed() ) /* TODO .. EXPLAIN WHY */
        dimm_mask.style.height = window.innerHeight+"px";

    /*}}}*/
    /* firstElementChild fullscreen {{{*/
    if(dimm_mask.firstElementChild)
        dimm_mask.firstElementChild.style.width = w_W+"px";

    /*}}}*/
/*{{{
logXXX("dimm_mask.className=["+dimm_mask.className+"]");
}}}*/
};
/*}}}*/
/*_ dimm_stop {{{*/
let dimm_stop  = function(_caller="setTimeout")
{
/*{{{*/
let log_this = LOG_MAP.T2_GRID;

if( log_this) log("dimm_stop .. CALLED BY "+ _caller);
/*}}}*/

    /* clearTimeout {{{*/
    if(dimm_mask_timer) {
        clearTimeout( dimm_mask_timer );
        /*.........*/ dimm_mask_timer = null;
    }
    /*}}}*/
    /* undisplay {{{*/
    if( dimm_mask ) {
        dimm_mask.style.display = "none";
        dimm_mask.innerHTML     = "";

        del_el_class(document.body, CSS_DIMMED);
    }
    /*}}}*/
    /* may go along with a hidden [hotspot] {{{*/
    del_el_class(hotspot, CSS_HIDDEN);

    /*}}}*/
/*{{{
    t_gutter_drag_hotspot_to_LAST_WINDOW_XY();
}}}*/
    t_clr_fullscreen_slot_container();
};
/*}}}*/
/*_ dimm_add {{{*/
let dimm_add = function()
{
let log_this = LOG_MAP.T3_LAYOUT;
if( log_this) log("dimm_add");

    if(dimm_mask) return;

    dimm_mask              = document.createElement("DIV");
    dimm_mask.id           = "dimm_mask";
/*
    shadow_root.appendChild( dimm_mask );
*/
    shadow_root.insertBefore(dimm_mask, shadow_root.firstElementChild);
};
/*}}}*/
/*_ dimm_mask_displayed {{{*/
let dimm_mask_displayed = function()
{
    if(!dimm_mask) return false;
    return (dimm_mask && (dimm_mask.style.display != "none"));
};
/*}}}*/
let div_slot_containers_displayed = function()
{
    if(    !dimm_mask                  )       return false;
    if(    !dimm_mask.firstElementChild)       return false;
    return (dimm_mask.firstElementChild.id == "div_slot_containers");
};
/*_ dimm_mask_is {{{*/
let dimm_mask_is = function(el)
{
    return (el == dimm_mask);
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
/*{{{*/
    let caller = "t_sync_layout_handler(called by "+t_sync_layout_callers+")";
let log_this = LOG_MAP.EV7_DISPATCH || LOG_MAP.T3_LAYOUT;

if(log_this) log(caller);
/*}}}*/

    t_sync_tool_clones( caller );

    /* requires [hotspot] and [tools_map] {{{*/
    t_sync_layout_timer = null;
    t_sync_layout_callers = "";

    if(!t_tools_loaded) t_load_TOOLS_MAP(caller);
    /*}}}*/

    /* IS_ON_GRID {{{*/
    if( call_t_grid_IS_ON_GRID(caller) )
    {
if(log_this) log("- %c TOOLS ON GRID", lb7);
        t_grid_onresize(caller);

        return;
    }
    /*}}}*/
    /* EVENT HANDING IN PROGRESS {{{*/
    if(onWork_EL) {
if(log_this) log("- %c EVENT HANDING IN PROGRESS: %c ["+get_n_lbl(onWork_EL)+"]", lbF, lbF+lb0);

        return;
    }
    /*}}}*/
    /* TOOLS NOT VISIBLE YET {{{*/
    if(dom_tools_html && (dom_tools_html.style.visibility != "visible"))
    {
if(log_this) log("- %c [dom_tools_html] IS NOT visible", lb7);

        return;
    }
    /*}}}*/
    /*...OR...*/
    /* INITIAL TOOLS LAYOUT {{{*/
    if(dom_tools_html && t_cache_empty())
    {
        let msg = "INITIAL LAYOUT";

        t_TOOL_SET_select();
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
/*{{{
logXXX("t_sync_layout_handler:7785:");
logXXX("...pat_csv=["+pat_csv+"]"   );
logXXX("...off_csv=["+off_csv+"]"   );
logXXX("...bak_csv=["+bak_csv+"]"   );
}}}*/
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

        t_cache_layout(msg);

        /* INITAL LAYOUT {{{*/
        if( t_gutter_is_XY_IN(topTool.x, topTool.y) )
            t_gutter_hotspot_IS_IN_ON_LOAD();

        t_set_pivotXY(pivotXY.x, pivotXY.y);
        t_raise_pivot_PANEL_delayed(T_RAISE_PIVOT_PANEL_DELAY_LONG, caller);
        t_toggle_pivot_PANEL_magnified( prop_get( PIVOT_MAGNIFIED ) );

        let position =  prop_get( TOOLS_SCROLL )  ? "absolute" : "fixed";
        t_tool_set_top_xy(caller, topTool.x, topTool.y, position);

        t_fly_div_magnified_toggle( prop_get( FLY_DIV_MAGNIFIED ) );

if( log_this) log("%c...INJECTING AN INITIAL LAYOUT EVENT HANDLING", lb2);
        t_layout_listener();
        /*}}}*/

        t_target_tool_set_parked(false, msg);

        return;
    }
    /*}}}*/
    /*...OR...*/
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
    /* TOOLS HIDE .. f(t_gutter_is_XY_IN) {{{*/
    if(dom_tools_html && t_gutter_is_XY_IN(topTool.x, topTool.y))
    {
if(log_this) log("- %c HOTSPOT IN GUTTER: HIDING TOOL PANELS", lb7);

if(log_this) log("...topTool: FROM XY=[%c "+ topTool.x  +" "+ topTool.y +" %c]",lb6,lbA);
        topTool.x = Math.max( -w_W, topTool.x      );
        topTool.y = Math.max( -w_H, topTool.y      );
        topTool.x = Math.min(       topTool.x, w_W );
        topTool.y = Math.min(       topTool.y, w_H );
if(log_this) log("...topTool: TO   XY=[%c "+ topTool.x  +" "+ topTool.y +" %c]",lb6,lbA);

        let position =  prop_get( TOOLS_SCROLL )  ? "absolute" : "fixed";
        t_tool_set_top_xy(caller, topTool.x, topTool.y, position);

        t_store_update_post("HOTSPOT IN GUTTER");
        return;
    }
    /*}}}*/
    /* NOT IF NO SELECTED PANEL {{{*/
    let first_tool = t_get_first_selected_tool_panel();
    if(!first_tool) {
if(log_this) log(caller+": %c NO TOOL SELECTED", lb7);

        t_store_update_post("NO TOOL SELECTED");
        return;
    }
    /*}}}*/
    /* COLLECT [spreaded_tools] AND THEIR BOUNDING BOX {{{*/
if(log_this) log("...first_tool=[%c "+get_n_lbl(first_tool)+" %c]", lbF,lbA);

    let map = tools_map_get(first_tool);
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
        t_set_pivot_PANEL             ( panel   );
        t_raise_pivot_PANEL           ( caller  );
        t_toggle_pivot_PANEL_magnified( prop_get( PIVOT_MAGNIFIED ) );
    }
    /*}}}*/
    /* SOME TOOLS TO UNHIDE .. f(some_tools_to_unhide) {{{*/
    if( some_tools_to_unhide )
    {
if(log_this) log(caller+": %c SOME TOOLS TO UNHIDE: %c "+some_tools_to_unhide, lb7, lbF);

        t_cache_init_by(caller);
        t_cache_layout("Showing some tools");
        t_tool_set_top_xy(caller, topTool.x, topTool.y);

        t_store_update_post("SOME TOOLS TO UNHIDE");
        return;
    }
    /*}}}*/
    /*...OR...*/
    /* ALL TOOLS WITHING VIEWPORT .. f(BOUNDING BOX: UNCHANGED) {{{*/
    if((bb_dx_dy.dx==0) && (bb_dx_dy.dy==0))
    {
if(log_this) log("- %c ALL TOOLS WITHIN VIEWPORT", lb7);

        t_toggle_pivot_PANEL_magnified( prop_get( PIVOT_MAGNIFIED ) ); /* in case layout has changed */

        t_store_update_post("ALL TOOLS WITHIN VIEWPORT");
    }
    /*}}}*/
    /*...OR...*/
    /* NO TOOLS IN VIEWPORT .. f(BOUNDING BOX: EXPANDED) {{{*/
    else {
if(log_this) log("- %c NO TOOLS WITHIN VIEWPORT: BOUNDING BOX: EXPANDED: %c "+t_bounding_box_toString(bb_dx_dy), lbF+lb7);

        let    xy = get_el_xy(first_tool, caller);
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
        t_cache_layout("Layout viewport");
        let position =  prop_get( TOOLS_SCROLL )  ? "absolute" : "fixed";
        t_tool_set_top_xy(caller, topTool.x, topTool.y, position);

        t_store_update_post("CONFINE TO VIEWPORT");
    }
    /*}}}*/
    t_update_panel_magnified();
};
/*}}}*/
/*_ t_expand_bounding_box {{{*/
let t_expand_bounding_box = function(panel, bb_dx_dy, viewport)
{
    let caller = "t_expand_bounding_box("+get_n_lbl(panel)+" , ["+t_bounding_box_toString(bb_dx_dy)+" ])";
let log_this = LOG_MAP.T3_LAYOUT;

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
    let xy = get_el_xy_computed(panel, "t_expand_bounding_box");
}}}*/

    let  xy = get_el_xy(    panel, "t_expand_bounding_box");
    let map = tools_map_get(panel);
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
/* TOOLS {{{*/
/*_ t_is_a_tool_el {{{*/
let t_is_a_tool_el = function(el, _caller)
{
let log_this = logging_EVENTS;

    if(!el) return   false;

    let result = "";
try {
    /* Element ID */
    if     ((el == seeker_PU) || (el == seeker_CU)               ) { result = el.id;              }
    else if( el.id            &&  el.id.startsWith("seekzone"   )) { result = el.id;              }
    else if( el.id            &&  el.id.startsWith("cb_textArea")) { result = el.id;              }
    /* shadow_root */
    else if( shadow_root && shadow_root.contains(el)             ) { result = "A SHADOW ELEMENT"; }
    /* DOC TOOL */
    else if( has_el_class(el,                 CSS_TOOLBAG_BUTTON)) { result = "A DOC TOOL";       }
    else if( is_el_child_of_class(el,         CSS_TOOLBAG_BUTTON)) { result = "A DOC TOOL CHILD"; }
}
catch(ex) { log("t_is_a_tool_el("+get_n_lbl(el)+"):"+LF+ex); }

if( log_this) log("%c t_is_a_tool_el("+get_n_lbl(el)+") %c CALLED BY "+_caller+"%c ...return %c"+(result || "[]"),lbH, lbH, lbA, lbF);
if( log_this) console.dir(el);
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
/*_ is_a_movable_TOOL_CHILD {{{*/
let is_a_movable_TOOL_CHILD = function(el)
{
let log_this = logging_EVENTS;

    if(!el) return false;

    let rejected_reason = "";

/*{{{
    if     ( is_headsup_ds_movable_child(el)               ) rejected_reason = "";
}}}*/
    if     (!pat_bag                                       ) rejected_reason = " .. ([pat_bag] IS MISSSING)";
    else if(!pat_bag.contains(el)                          ) rejected_reason = " .. (NOT A [pat_bag] NODE )";
    else if(                 !el.className.startsWith("cc")) rejected_reason = " .. (IS A "+el.className+" SEL ITEM)";

    let result = (rejected_reason == "");

if(log_this) log("is_a_movable_TOOL_CHILD("+get_n_lbl(el)+"): %c...return "+result + rejected_reason, (result ? lb3 : lb8));
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

    else if(                                        panel.id.startsWith("seekzone"   )) reject_reason = panel.id;
    else if(                                        panel.id.startsWith("cb_textArea")) reject_reason = panel.id;

    let result = (reject_reason == "");

if(log_this) log("%c is_a_movable_panel("+get_n_lbl(panel)+" "+panel.className+"): ...return "+result+" %c "+reject_reason, lb3,lbF);
    return result;
};
/*}}}*/
/*}}}*/
/*}}}*/
/** LAYOUT STATE */
/*{{{*/
/*_ t_is_tool_deployed {{{*/
let t_is_tool_deployed = function(el)
{
    if(!el) return false;
let log_this = LOG_MAP.T3_LAYOUT;

    let reject_reason = "";

    if     (el.classList.contains("hidden")   || el.parentNode.classList.contains("hidden"  )) reject_reason = "hidden";
    else if(el.style.display   == "none"      || el.parentNode.style.display   == "none"     ) reject_reason = "display:none";
    else if(el.classList.contains(CSS_PINNED) || el.parentNode.classList.contains(CSS_PINNED)) reject_reason = CSS_PINNED;

    let result = (reject_reason == "");

if(log_this) log("%c t_is_tool_deployed("+get_n_lbl(el)+" "+el.className+"): ...return "+result+" %c "+reject_reason, lb7,lbF);
    return result;
};
/*}}}*/
/*_ t_is_a_spreaded_tool {{{*/
let t_is_a_spreaded_tool = function(el)
{
let log_this = LOG_MAP.T3_LAYOUT;

    if(!el) return false;
    let reject_reason = "";

    /* may currently be hidden but not pinned */
    if(el.classList.contains(CSS_PINNED) || el.parentNode.classList.contains( CSS_PINNED )) reject_reason = "PINNED";
    let map = tools_map_get(el);                                          if(!map.selected) reject_reason = "NOT SELECTED";

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
    for(let i=1; i < TOOL_panels.length; ++i)
    {
        let panel = TOOL_panels[i];
        if( panel && t_is_a_spreaded_tool(panel))
        {
            spreaded_tools.push(panel);

            if(panel.classList.contains("hidden"))
            {
                some_tools_to_unhide += panel.id+" ";

                del_el_class(panel, CSS_HIDDEN);
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
let log_this = LOG_MAP.T3_LAYOUT;

    let reject_reason = "";

    let      map =  panel ? tools_map_get(panel) : null;      let  logX1 = lbA;
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
    let n_max = TOOL_panels.length;

    for(let n = n_min; n <= n_max; ++n)
    {
        let i = (dir > 0) ? n-1 : (n_max - n);
        let p = TOOL_panels[i];
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
    for(let i=1; i< TOOL_panels.length; ++i) {
        let panel = TOOL_panels[i];
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
/*_ t_trapped_dir_show {{{*/
let t_trapped_dir_show = function(hiding_tools)
{
    /* CURRENT TOOLS [nw_ne_se_sw] CORNER */
    let nw_ne_se_sw = t_get_NW_NE_SE_SW_from_to(topTool.x,topTool.y, pivotXY.x, pivotXY.y);
/*{{{
logXXX("t_trapped_dir_show: "+nw_ne_se_sw+" ["+topTool.x+" "+topTool.y+"]");
}}}*/

    /* {{{*/
        /* ROTATION [hotspot_c] [pivspot_c] [tools_trap_el] {{{*/
        let rotate_className = "rotate_"+nw_ne_se_sw;
        if(!has_el_class(hotspot_c, rotate_className))
        {
            /* hotspot_c {{{*/
            del_el_class(    hotspot_c    , CSS_ROTATE_NE);
            del_el_class(    hotspot_c    , CSS_ROTATE_SE);
            del_el_class(    hotspot_c    , CSS_ROTATE_SW);
            del_el_class(    hotspot_c    , CSS_ROTATE_NW);
            add_el_class(    hotspot_c    ,  rotate_className);

            /*}}}*/
            /* pivspot_c {{{*/
            del_el_class(    pivspot_c    , CSS_ROTATE_NE);
            del_el_class(    pivspot_c    , CSS_ROTATE_SE);
            del_el_class(    pivspot_c    , CSS_ROTATE_SW);
            del_el_class(    pivspot_c    , CSS_ROTATE_NW);
            add_el_class(    pivspot_c    ,  rotate_className);

            /*}}}*/
            /* GUI {{{*/
            let tools_trap_el = prop_get_EL(TOOLS_TRAP);
            if( tools_trap_el )
            {
                del_el_class(tools_trap_el, CSS_ROTATE_NE);
                del_el_class(tools_trap_el, CSS_ROTATE_SE);
                del_el_class(tools_trap_el, CSS_ROTATE_SW);
                del_el_class(tools_trap_el, CSS_ROTATE_NW);
                add_el_class(tools_trap_el,  rotate_className);
            }
            /*}}}*/
        }
        /*}}}*/
        /* LAYOUT [hotring] {{{*/
        let layout_className = "layout_"+nw_ne_se_sw;
        if(!has_el_class(hotring, layout_className))
        {
            del_el_class(hotring          , CSS_LAYOUT_NE);
            del_el_class(hotring          , CSS_LAYOUT_SE);
            del_el_class(hotring          , CSS_LAYOUT_SW);
            del_el_class(hotring          , CSS_LAYOUT_NW);
            add_el_class(hotring          ,  layout_className);
        }
        /*}}}*/

        if( hiding_tools ) add_el_class(hotring, CSS_GUTTER);
        else               del_el_class(hotring, CSS_GUTTER);
    /*}}}*/
/*{{{
t_fly(        parseInt(pivotXY.x)
         +"<br>"+ parseInt(pivotXY.y)
         +"<br>"+ nw_ne_se_sw
);
}}}*/
};
/*}}}*/
/*}}}*/
/*_ t_set_CSS_PINNED {{{*/
let t_set_CSS_PINNED = function(tool_el, state)
{
    if(state) {
        add_el_class(tool_el, CSS_PINNED      );
        del_el_class(tool_el, CSS_FULLY_SPREAD); /* mutual exclusion */
    }
    else {
        del_el_class(tool_el, CSS_PINNED      );
    }
};
/*}}}*/
/*_ t_set_CSS_PIVOT_PANEL {{{*/
let t_set_CSS_PIVOT_PANEL = function(tool_el, state)
{
    if(state) {
        add_el_class(tool_el, CSS_PIVOT_PANEL);
        del_el_class(tool_el, CSS_FULLY_SPREAD); /* mutual exclusion */
    }
    else {
        del_el_class(tool_el, CSS_PIVOT_PANEL);
    }
};
/*}}}*/
/*_ t_set_CSS_FULLY_SPREAD {{{*/
let t_set_CSS_FULLY_SPREAD = function(tool_el, state)
{
    if(state) {
        add_el_class(tool_el, CSS_FULLY_SPREAD);
    }
    else {
        del_el_class(tool_el, CSS_FULLY_SPREAD);
    }
};
/*}}}*/
/** LAYOUT GUTTER */
/*{{{*/
/* SET */
/*_ t_gutter_hotspot_IS_IN_ON_LOAD {{{*/
let t_gutter_hotspot_IS_IN_ON_LOAD = function()
{
/*{{{*/
let   caller = "t_gutter_hotspot_IS_IN_ON_LOAD";
let log_this = logging_something();

if(log_this) log("%c "+caller, lbF+lb7);
/*}}}*/

    /* tools_scroll OFF */
    let                 prop = prop_set( TOOLS_SCROLL , false     );
    store_set_state(    prop           , TOOLS_SCROLL , prop.value);
    set_id_class_on_off(prop.el.id     , CSS_CHECKED  , prop.value);
    prop.el.innerHTML = prop.value ? SYMBOL_UP_DOWN_ARROW : SYMBOL_ANCHOR ;

/*
    let position = prop.value ? "absolute" : "fixed";
    t_tool_set_top_xy(caller, topTool.x, topTool.y, position);
*/
};
/*}}}*/
/*_ t_gutter_save_last_hotspot_GUTTER_XY {{{*/
let t_hotspot_last_GUTTER_XY = { x:0, y:0 };

let t_gutter_save_last_hotspot_GUTTER_XY = function(x,y)
{
/*{{{
logXXX("t_gutter_save_last_hotspot_GUTTER_XY("+x+","+y+")");
}}}*/
    t_hotspot_last_GUTTER_XY.x = x;
    t_hotspot_last_GUTTER_XY.y = y;
};
/*}}}*/
/*_ t_gutter_save_last_hotspot_WINDOW_XY {{{*/
let t_gutter_save_last_hotspot_WINDOW_XY = function()
{
    if( t_gutter_is_hotspot_NEAR() ) return;
/*{{{
logXXX("t_gutter_save_last_hotspot_WINDOW_XY");
}}}*/

/*{{{
logBIG("SAVING t_hotspot_last_WINDOW_XY AT hotspot current XY=["+hotspot.offsetLeft+" "+hotspot.offsetTop+"]");
}}}*/
    t_hotspot_last_WINDOW_XY.x = hotspot.offsetLeft;
    t_hotspot_last_WINDOW_XY.y = hotspot.offsetTop ;
/*{{{
logXXX("t_gutter_save_last_hotspot_WINDOW_XY: t_hotspot_last_WINDOW_XY=["+t_hotspot_last_WINDOW_XY.x+" "+t_hotspot_last_WINDOW_XY.y+"]");
}}}*/
};
/*}}}*/
/*_ t_gutter_layout_has_CHANGED {{{*/
let t_hotspot_last_WINDOW_XY = { x:0, y:0 };

let t_gutter_layout_has_CHANGED = function()
{
/*{{{
logXXX("t_gutter_layout_has_CHANGED");
}}}*/
    let     vp = t_get_viewport();
    let margin = hotring.clientWidth;

    /* HIDING SPOT: back to top-left gutter */
    t_hotspot_last_GUTTER_XY.x = vp.left + margin/* / 2*/;
    t_hotspot_last_GUTTER_XY.y = vp.top  + margin/* / 2*/;

    /* STAGING SPOT: confined into viewport */
/*{{{
logBIG("CONFINING t_hotspot_last_WINDOW_XY TO VIEWPORT to XY=["+vp.left+" "+vp.top+"] RB=["+vp.right+" "+vp.bottom+"]");
}}}*/
    t_hotspot_last_WINDOW_XY.x = Math.max(t_hotspot_last_GUTTER_XY.x , vp.left   + margin);
    t_hotspot_last_WINDOW_XY.x = Math.min(t_hotspot_last_GUTTER_XY.x , vp.right  - margin);
    t_hotspot_last_WINDOW_XY.y = Math.max(t_hotspot_last_GUTTER_XY.y , vp.top    + margin);
    t_hotspot_last_WINDOW_XY.y = Math.min(t_hotspot_last_GUTTER_XY.y , vp.bottom - margin);

/*{{{
log_key_val("vp",vp);
log_key_val("t_hotspot_last_GUTTER_XY", t_hotspot_last_GUTTER_XY);
log_key_val("t_hotspot_last_WINDOW_XY", t_hotspot_last_WINDOW_XY);
}}}*/
};
/*}}}*/
/* GET */
/*_ t_gutter_is_XY_IN {{{*/
let t_gutter_is_XY_IN = function(x, y, _margin)
{
  /*if(onWork_PANEL && (onWork_PANEL != hotspot)) return false;*/ /* moving another panel */
  /*if( hotspot.style.transform != "")            return false;*/

/*{{{
    if    ((x == 0) && (y == 0)) return false;
}}}*/

/*{{{
    return (x <= h_W) || (x >= (w_W - h_W))
        || (y <= h_H) || (y >= (w_H - h_H));
}}}*/
    let     vp = t_get_viewport();
    let margin = _margin || hotring.clientWidth;
    return (x <= (vp.left + margin)) || (x >= (vp.right  - margin))
        || (y <= (vp.top  + margin)) || (y >= (vp.bottom - margin));
};
/*}}}*/
/*_ t_gutter_is_hotspot_IN {{{*/
let t_gutter_is_hotspot_IN = function()
{
    let answer = hotspot && t_gutter_is_XY_IN(hotspot.offsetLeft, hotspot.offsetTop);
/*{{{
logXXX("t_gutter_is_hotspot_IN return %c"+ answer+"%c"+hotspot.offsetLeft+"%c"+hotspot.offsetTop, lbH, lbL+lf3, lbR+lf4);
}}}*/
    return answer;
};
/*}}}*/
/*_ t_gutter_is_hotspot_NEAR {{{*/
let t_gutter_is_hotspot_NEAR = function()
{
    let answer = hotspot && t_gutter_is_XY_IN(hotspot.offsetLeft, hotspot.offsetTop, 2 * hotring.clientWidth);
/*{{{
logXXX("t_gutter_is_hotspot_NEAR return %c"+ answer+"%c"+hotspot.offsetLeft+"%c"+hotspot.offsetTop, lbH, lbL+lf3, lbR+lf4);
}}}*/
    return answer;
};
/*}}}*/
/*_ t_gutter_hotspot_WAS_PICKED_FROM_GUTTER {{{*/
let t_gutter_hotspot_WAS_PICKED_FROM_GUTTER = function()
{
    return t_gutter_is_XY_IN(onDown_HSPOT_XY.x ,  onDown_HSPOT_XY.y);
};
/*}}}*/
/*_ t_gutter_drag_hotspot_to_LAST_GUTTER_XY {{{*/
/*_ t_gutter_drag_hotspot_to_LAST_GUTTER_XY {{{*/
let t_gutter_drag_hotspot_to_LAST_GUTTER_XY = function()
{
    let caller = "t_gutter_drag_hotspot_to_LAST_GUTTER_XY";
/*{{{
logXXX(caller);
}}}*/

/*{{{
    t_gutter_save_last_hotspot_WINDOW_XY();
}}}*/

    /* IF NOT IN GUTTER .. MOVE TO LAST GUTTER_XY */
    if(!t_gutter_is_XY_IN(        t_hotspot_last_WINDOW_XY.x, t_hotspot_last_WINDOW_XY.y) )
        t_tool_set_top_xy(caller, t_hotspot_last_GUTTER_XY.x, t_hotspot_last_GUTTER_XY.y);
};
/*}}}*/
/*_ t_gutter_drag_hotspot_to_LAST_WINDOW_XY {{{*/
let t_gutter_drag_hotspot_to_LAST_WINDOW_XY = function()
{
/*{{{
logXXX("t_gutter_drag_hotspot_to_LAST_WINDOW_XY");
}}}*/

    if(   (t_hotspot_last_WINDOW_XY.x == 0)
       && (t_hotspot_last_WINDOW_XY.y == 0)
      ) {
/*{{{
logBIG("INIT t_hotspot_last_WINDOW_XY to [w_W w_H] CENTER");
}}}*/
        t_hotspot_last_WINDOW_XY.x = w_W / 2;
        t_hotspot_last_WINDOW_XY.y = w_H / 2;
    }

    /* IF t_hotspot_last_WINDOW_XY NOT IN GUTTER .. MOVE [hotspot] TO WHERE IT WAS BEFORE IT WAS PUSHED INTO GUTTER */
    if(!t_gutter_is_XY_IN(                                           t_hotspot_last_WINDOW_XY.x, t_hotspot_last_WINDOW_XY.y) )
        t_tool_set_top_xy("t_gutter_drag_hotspot_to_LAST_WINDOW_XY", t_hotspot_last_WINDOW_XY.x, t_hotspot_last_WINDOW_XY.y);
/*{{{
else logBIG("...was there already=["+t_hotspot_last_WINDOW_XY.x+" "+t_hotspot_last_WINDOW_XY.y+"]")
}}}*/
};
/*}}}*/
/*}}}*/
/* USE */
/*_ t_gutter_drag_hotspot_IN {{{*/
let t_gutter_drag_hotspot_IN = function(x,y)
{
/*{{{*/
let   caller = "t_gutter_drag_hotspot_IN";
let log_this = LOG_MAP.EV2_MOVE;

/*}}}*/
    t_gutter_save_last_hotspot_GUTTER_XY(x,y);
    /* HIGLIGHT GUTTER {{{*/
    if(!has_el_class(seekzone, CSS_GUTTER) )
    {
        add_el_class(seekzone, CSS_GUTTER);
        /* GUTTER LEFT .. RIGHT .. TOP .. BOTTOM {{{*/
/*{{{
        let margin       = hotring.clientWidth;

        let along_top    =                  (y < (        margin));
        let along_left   = !along_top    && (x < (        margin));
        let along_bottom = !along_left   && (y > (w_H - 2*margin));
        let along_right  = !along_bottom && (x > (w_W - 2*margin));

        let side_class   = along_top    ? CSS_TOP
            :              along_bottom ? CSS_BOTTOM
            :              along_left   ? CSS_LEFT
            :                             CSS_RIGHT
        ;
if( log_this) log("%c INTO GUTTER %c SHOW [seekzone] %c "+side_class
                  ,lbb+lbH+lf7 ,lbL                 ,lbR            );
        set_el_class(seekzone, "gutter "+ side_class);

        let  s_x = (along_left || along_top    || along_bottom) ?   0 : (w_W - margin);
        let  s_y = (along_top  || along_left   || along_right ) ?   0 : (w_H - margin);
        let  s_w = (along_top  || along_bottom                ) ? w_W : (      margin);
        let  s_h = (along_left || along_right                 ) ? w_H : (      margin);
}}}*/
        /*}}}*/
        /* GUTTER VIEWPORT [seekzone] {{{*/
        let  x =    0;
        let  y =    0;
        let  w =  window.innerWidth;
        let  h =  window.innerHeight;

        t_seekzone1_ON_GUTTER_XYWH(y, x, w, h);

if( log_this) log("%c HOTSPOT INTO GUTTER %c SHOW [seekzone]"
                  ,lbb+lbH+lf7           ,lbL                );
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_gutter_drag_hotspot_OUT {{{*/
let t_gutter_drag_hotspot_OUT = function(x, y, _caller)
{
/*{{{*/
let   caller = "t_gutter_drag_hotspot_OUT";
let log_this = LOG_MAP.EV3_UP;

if( log_this) t_log_event_status(caller, lf8);
if( log_this) log("%c"+caller+" .. CALLED BY "+_caller, lbF+lb8);
/*}}}*/
/*{{{
logXXX(".................................has_moved=["+ has_moved                             +"]");
logXXX(".................(onWork_PANEL == hotspot)=["+ (onWork_PANEL == hotspot)             +"]");
logXXX("...has_el_class(hotspot, DOM_EDITING     )=["+ has_el_class(hotspot, DOM_EDITING   ) +"]");
logXXX("...has_el_class(hotspot, MARKED_TO_HIDE  )=["+ has_el_class(hotspot, MARKED_TO_HIDE) +"]");
}}}*/
    /* [dom_hide_done] .. (getting hotspot out from gutter) {{{*/
if( log_this) log("%c [hotspot] NODE TO HIDE .. DRAGGED OFF GUTTER", lbH+lf8);

    /* RESET [hotspot] */
    del_el_class(hotspot , DOM_EDITING   );
    del_el_class(hotspot , MARKED_TO_HIDE);
    del_el_class(seekzone, MARKED_TO_HIDE);

    /* FIXME causes unwanted selection .. explain why this call was there */
    /* FIXME t_call_dom_traversal(); */ /* REFRESH [sel_bag] [pat_bag] */

    t_sync_wording(caller); /* ANCHOR (UN)FREEZE */

    prop_set(EDIT_OR_STAGE, false);

    del_el_class(seekzone, CSS_GUTTER);
    t_seekzone4_hide_handler();
};
/*}}}*/
/*}}}*/
/*}}}*/
/** WORDING */
/*{{{*/
/* CONTAINERS_FULLSCREEN {{{*/
/*{{{*/
const DIMM_MASK_MARGIN = 32;
const DIV_MAGNIFY = "<em class='button_magnify' title='magnify'>"+ SYMBOL_MAGNIFY_LEFT +"</em>";

let div_slot_containers;
let button_PREV/*, button_PREV_LEFT*/;
let button_NEXT/*, button_NEXT_LEFT*/;
let button_MONO;

/*
 :!start explorer "https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"
*/

/*}}}*/
/*_ t_slot_containers_display {{{*/
let t_slot_containers_display = function(slot)
{
/* {{{*/
let caller = "t_slot_containers_display(slot "+slot+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* TODO account for window geometry {{{*/
/*{{{
    let  body_SH = document.body.scrollHeight;
    let  body_CH = document.body.clientHeight;
    let  body_OH = document.body.offsetHeight;
if(log_this) log("...body   [  H] = ["+body_SH +" "+ body_CH +" "+ body_OH +"] .. [Scroll Client Offset]");
}}}*/
if(log_this) log("...window [W H] = ["+w_H     +" "+ w_W                   +"]");
    /*}}}*/
    /* BUILD dimm_mask.innerHTML {{{*/
    if(!dimm_mask) dimm_add();
    dimm_mask.innerHTML = "";
    let       innerHTML = "";
    let           pinsL = "";

    let    num_selected = ccs[slot].num_selected; /* (selection to return to when done) */
    let container_count = 0;
    for(let num = 0;   num <= ccs[slot].nodes.length; ++num)
    {
        /* count more than one num .. in the same container {{{*/
        let container = ccs[slot].containers[num-1];
        let  num_last = num;
        while(    ( num_last <  ccs[slot].nodes.length)
               && (container == ccs[slot].containers[num_last])
             )
            num_last += 1;

        /*}}}*/
        if( ccs[slot].containers[num-1] ) {
            /* container .. (slot paragraph) {{{*/
            container        = ccs[slot].containers[num-1];
            container_count += 1;
            /*}}}*/
            /* geometry {{{*/
            let  container_is_body_single_child = (container == document.body) && (document.body.childNodes.length == 1);
/*
if(log_this) log("...container_is_body_single_child.: "+ container_is_body_single_child);
*/

            let                         cont_CH = container.clientHeight;
            let                         cont_OH = container.offsetHeight;
            let                     container_H = container.scrollHeight;
/*
if(log_this) log("...cont   [  H] = ["+ container_H +" "+ cont_CH +" "+ cont_OH +"] .. [Scroll Client Offset]");
*/

            let content_is_too_big = container_H >= (w_H * 0.9);
/*
if(log_this) log("...content_is_too_big..........: "+ content_is_too_big +"] .. [container_H / window_H] ["+container_H+" / "+w_H+"]");
*/

            /*}}}*/
            /* title .. [title num copy_icon css text] {{{*/
            let title_em
                = (container           .title) ? " <em>"+container           .title+"</em>"
                : !container.parentNode        ? " "
                :  container.parentNode.title  ? " <em>"+container.parentNode.title+"</em>"
                :                                         " ";

            let num_from_to
                = (num_last == num)            ? num : (num +"-"+ num_last);

            let slot_num_selected
                = (num <= num_selected) && (num_selected <= num_last);

            let tooltip
                = SYMBOL_SCISSORS+" "+num_from_to+" Copy paragraph to Clipboard";

            let div_class
                = "class_s_"+slot+"_"+num      + " note"+(container_count % 10)
                + (content_is_too_big          ? " content_is_too_big" : ""   )
                + (slot_num_selected           ? " container_selected" : ""   )
            ;

            let div_copy_content_innerHTML
                = content_is_too_big           ? (ellipsis(container.innerText, 512)  )
                : (container.tagName == "LI")  ? ("<p>"+container.innerHTML+"</p>" +LF)  /* TURN A DANGLING <LI> INTO A <P> */
                :                                (      container.outerHTML           )
            ;

            /*}}}*/
            /* css {{{*/
            /* wrap with containers highlight */
/*{{{
            let css = (container.tagName == "P"      ) ? "preformatted" : "";
            let css = (prop_get( CONTAINERS_HI )) ?             "" : "white-space:pre";
            let css = (prop_get( CONTAINERS_HI )) ? "preformatted" : "";
}}}*/
            let css = "white-space:pre-line";

            /*}}}*/
            /* html {{{*/
            innerHTML
                += " <div class='"+  div_class              +"' style='"+css+"' title='Scroll to this paragraph'>"+LF

                +                    DIV_MAGNIFY            +LF

                +  "  <div class='"+ CSS_BUTTON_COPY        +"' title='"+tooltip+"'>"+LF
                +  "  "            + container_count
                +  "  "            + SYMBOL_CLIPBOARD
                +  "   <em>"       + ccs[slot].pattern      +"</em>"
                +  "   <em>#"      + num_from_to            +"</em> <em>of "+ ccs[slot].nodes.length +"</em>"
                +  "  </div>"                               +LF

                +  "  " + title_em                          +LF

                +  "  <div class='div_copy_content'>"       +LF
                +  "  "+div_copy_content_innerHTML          +LF
                +  "  </div>"                               +LF

                +  " </div>"                                +LF
            ;

            /*}}}*/
        }
        num = num_last; /* .. (done with all selections associated with this container) */
    }
    /*}}}*/
    /* DISPLAY innerHTML {{{*/
    if(innerHTML) {
        /* [window-scroll-to-top] [dimm_mask] [hotspot] [seeker_PU] {{{*/
        t_gutter_drag_hotspot_to_LAST_GUTTER_XY();
        add_el_class(hotspot , CSS_HIDDEN);

        t_window_scrollTo(0, 0);

        /*}}}*/
        /* background dimmed {{{*/
        dimm_start_slot_containers(caller);

        /*}}}*/
        /* [button_COPY_ALL_parent_div] {{{*/
        let tooltip
            = SYMBOL_SCISSORS+" Copy all to Clipboard";

        let button_COPY_ALL_parent_div
            =  " <div     id='button_COPY_ALL_parent_div'>" +LF

            +                        DIV_MAGNIFY            +LF

            +  "  <div class='"    + CSS_BUTTON_COPY        +"' title='"+tooltip+"'>"+LF
            +  "  "                + SYMBOL_CLIPBOARD
            +  "   <em>"           + ccs[slot].pattern      +"</em>"
            +  "   <em>#1 to "     + ccs[slot].nodes.length +"</em>"
            +  "  </div>"                                   +LF

            +  "  <div class='div_copy_content'>"
            +  "  "+ container_count+" Paragraphs containing <em class='cc"+slot+"'>"+ ccs[slot].pattern +"</em>"
            +  "  </div>"+LF
            +  " </div>"+LF
        ;
        /*}}}*/
        /* [div_slot_containers create ] {{{*/
        if(!div_slot_containers)
        {
            div_slot_containers    = document.createElement("DIV");
            div_slot_containers.id = "div_slot_containers";

            button_PREV            = t_slot_containers_get_button("button_prev", SYMBOL_HEAVY_RIGHT_ARROW);
/*{{{
            button_PREV_LEFT       = t_slot_containers_get_button("button_prev", SYMBOL_HEAVY_RIGHT_ARROW);
            add_el_class(button_PREV_LEFT, CSS_LEFT);
}}}*/

            button_NEXT            = t_slot_containers_get_button("button_next", SYMBOL_HEAVY_RIGHT_ARROW);
/*{{{
            button_NEXT_LEFT       = t_slot_containers_get_button("button_next", SYMBOL_HEAVY_RIGHT_ARROW);
            add_el_class(button_NEXT_LEFT, CSS_LEFT);
}}}*/

            button_MONO            = t_slot_containers_get_button("button_mono", SYMBOL_MENU             );
            button_MONO.title = "monospace";
        }

        /*}}}*/
        /* [div_slot_containers content] {{{*/
        div_slot_containers.innerHTML         = ""; /* removes all children */

        div_slot_containers.insertAdjacentHTML("beforeend", button_COPY_ALL_parent_div);
        div_slot_containers.insertAdjacentHTML("beforeend", innerHTML                 );

        /*}}}*/
        /* LAYOUT [dimm_mask] {{{*/

        let v_W = window.innerWidth - DIMM_MASK_MARGIN;
        let v_H = get_page_height();

        dimm_mask.style.position            = "absolute";
        dimm_mask.style.left                =      "0px";
        dimm_mask.style.top                 =      "0px";
        dimm_mask.style.width               =   v_W+"px";
        dimm_mask.style.height              =   v_H+"px";

if( log_this) log("dimm_mask XY=["+dimm_mask.style.left+" "+dimm_mask.style.top+"] WH=["+dimm_mask.style.width+" "+dimm_mask.style.height+"]");
        /*}}}*/
        /* LAYOUT [div_slot_containers] [button_NEXT] [button_PREV] {{{*/
        let x = 0;
        let y = 0;
        let h = v_H - y;
        let w = v_W - x;

        div_slot_containers.style.position  =         "";
        div_slot_containers.style.left      =     x+"px";
        div_slot_containers.style.top       =     y+"px";
        div_slot_containers.style.width     =     w+"px";
        div_slot_containers.style.minHeight =   w_H+"px";

if( log_this) log("div_slot_containers XY=["+div_slot_containers.style.left+" "+div_slot_containers.style.top+"] WminH=["+div_slot_containers.style.width+" "+div_slot_containers.style.minHeight+"]");

        dimm_mask.appendChild( div_slot_containers      );
        dimm_mask.appendChild( button_NEXT ); /*dimm_mask.appendChild( button_NEXT_LEFT );*/
        dimm_mask.appendChild( button_PREV ); /*dimm_mask.appendChild( button_PREV_LEFT );*/
        dimm_mask.appendChild( button_MONO );
        /*}}}*/
        t_seeker_PU_hide("instant");
    }
    /*}}}*/
};
/*}}}*/
/*_ t_slot_containers_get_button {{{*/
let t_slot_containers_get_button = function(className, content)
{
    let el         = document.createElement("EM");

    el.textContent = content;

    add_el_class(el, className);

    return el;
};
/*}}}*/
/*_ t_slot_container_set_fullscreen {{{*/
let       fullscreen_slot_container;
let t_clr_fullscreen_slot_container = function() { t_slot_container_set_fullscreen(null); };
let t_slot_container_set_fullscreen = function(clicked_target)
{
/* {{{*/
let caller = "t_slot_container_set_fullscreen("+get_id_or_tag(clicked_target) || clicked_target+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_log_event_status(caller, lf8);
/*}}}*/
    /* EVENT  TARGET */ let slot_container = clicked_target;
    /* MAGNIFY START */ if     (has_el_class(clicked_target, CSS_BUTTON_MAGNIFY         )) slot_container = clicked_target.parentElement;
    /* MAGNIFY STOP  */ else if(            (clicked_target == fullscreen_slot_container)) slot_container = clicked_target;
    /* MAGNIFY PREV  */ else if(has_el_class(clicked_target, CSS_BUTTON_PREV              )) slot_container = fullscreen_slot_container.previousElementSibling || fullscreen_slot_container;
    /* MAGNIFY NEXT  */ else if(has_el_class(clicked_target, CSS_BUTTON_NEXT              )) slot_container = fullscreen_slot_container.nextElementSibling     || fullscreen_slot_container;
    /* MONSPACE      */ else if(has_el_class(clicked_target, CSS_BUTTON_MONO              )) {
if(log_this)
logBIG("flip_el_class(div_slot_containers, CSS_BUTTON_MONOSPACE)");
        flip_el_class(div_slot_containers, CSS_BUTTON_MONOSPACE);
        return;
    }
    /* [fullscreen_slot_container] {{{*/
    if(clicked_target == fullscreen_slot_container)
    {
if(log_this) log("fullscreen_slot_container UNCHANGED");
        return;
    }
    /*}}}*/
    /* [new fullscreen_slot_container] {{{*/
    fullscreen_slot_container = slot_container;

    /*}}}*/
    /* fullscreen CSS {{{*/
    /* TODO: post-refactoring ...setup css propagation for proper cascade styling */
    if(fullscreen_slot_container) add_el_class(dimm_mask          , CSS_FULLSCREEN);
    else                          del_el_class(dimm_mask          , CSS_FULLSCREEN);

    if(fullscreen_slot_container) add_el_class(div_slot_containers, CSS_FULLSCREEN);
    else                          del_el_class(div_slot_containers, CSS_FULLSCREEN);

    /*}}}*/
    /* children {{{*/
    let slot_max = div_slot_containers.children.length;
    let slot_num = -1;
    for(let i=0; i < slot_max; ++i)
    {
        let child =  div_slot_containers.children[i];

        if( child == fullscreen_slot_container) slot_num = i;

        /* [fullscreen] */
        if( child == fullscreen_slot_container) add_el_class(child, CSS_FULLSCREEN);
        else                                    del_el_class(child, CSS_FULLSCREEN);

        /* display */
        child.style.display
            = (!fullscreen_slot_container || (child == fullscreen_slot_container))
            ? "block"
            : "none"
        ;
    }
    /*}}}*/
    /* PREV NEXT {{{*/
    let display_prev = ((slot_num >= 0) && (slot_num > (0         ))) ? "inline" : "none";
    let display_next = ((slot_num >= 0) && (slot_num < (slot_max-1))) ? "inline" : "none";

    if( log_this)
        log_key_val(caller
                    , {       slot_num : slot_num
                        ,     slot_max : slot_max
                        , display_prev : display_prev
                        , display_next : display_next
                    });
    button_PREV.style.display = display_prev; /*button_PREV_LEFT.style.display = display_prev;*/
    button_NEXT.style.display = display_next; /*button_NEXT_LEFT.style.display = display_next;*/
    button_MONO.style.display = display_prev;

    /*}}}*/
    t_window_scrollTo(0, 0);
};
/*}}}*/
/*_ t_slot_containers_magnify {{{*/
let slot_container_magnified_0_to_9 = 2; /* CSS [magnified_0]..[magnified_9] */
let t_slot_containers_magnify = function()
{
/*{{{
logXXX("t_slot_containers_magnify");
logXXX("...slot_container_magnified_0_to_9=["+slot_container_magnified_0_to_9+"]");
console_clear( slot_container_magnified_0_to_9 )
}}}*/

    for(i = 0; i <= 9; ++i)
    {
        let className = "magnified_"+i;
        if(i == slot_container_magnified_0_to_9) add_el_class(div_slot_containers, className);
        else                                     del_el_class(div_slot_containers, className);
    }

};
/*}}}*/
/*_ t_slot_containers_is_showing {{{*/
let t_slot_containers_is_showing = function()
{
    return (dimm_mask.innerHTML != "");
};
/*}}}*/
/*_ t_slot_containers_copy_to_clipboard {{{*/
/*{{{*/
let cb_textArea = null;

/*}}}*/
let t_slot_containers_copy_to_clipboard_outerHTML = function(el) { t_slot_containers_copy_to_clipboard(el,  true); };
let t_slot_containers_copy_to_clipboard_innerHTML = function(el) { t_slot_containers_copy_to_clipboard(el, false); };
let t_slot_containers_copy_to_clipboard           = function(el,   outer_or_inner)
{
/*{{{*/
    let caller = "t_slot_containers_copy_to_clipboard("+get_n_lbl(el)+", "+outer_or_inner+")";
let log_this   = LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller, lbR+lf2);
if( log_this) log("%c"+(outer_or_inner ? "outerHTML" : "innerHTML")+"%c "+ (outer_or_inner ? el.outerHTML : el.innerHTML), lbL, lbR);
/*}}}*/
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
    /* A CSS_BUTTON_COPY {{{*/
if( log_this) console_dir(el, "el should be a ["+CSS_BUTTON_COPY+"]");

    /*}}}*/
    /* A COPY ALL BUTTON {{{*/
if( log_this) log("...el.id=["+(el.id == 'button_COPY_ALL_parent_div')+"]");
    if(el.id == 'button_COPY_ALL_parent_div')
    {
        el = dimm_mask.firstElementChild;
    }
    /*}}}*/
    /* BUFFER TEXTAREA SHOW AND FILL WITH CONTENT {{{*/
    cb_textArea.style.display = "block";
    let text_or_html = has_el_class(div_slot_containers, CSS_BUTTON_MONOSPACE);
if( log_this) log("...text_or_html=["+text_or_html+"]");
    cb_textArea.value
        = (outer_or_inner)
        ?  (text_or_html ? el.innerText : el.outerHTML)
        :  (text_or_html ? el.innerText : el.innerHTML)
    ;
    /*}}}*/
    /* COPY TO CLIPBOARD {{{*/
    cb_textArea.select();
if( log_this) log("%c window.getSelection() %c "+window.getSelection(), lbL+lf8, lbR+lf9);

    if( !document.execCommand("copy") )
    {
        log("%c*** COPY TO CLIPBOARD REJECTED ***", lb2);
logXXX("%c USER EVENT CALLBACK REQUIRED ", lbb+lbH+lf2);
/*{{{
}}}*/
    }
    else {
if( log_this) log("%c...COPY TO CLIPBOARD: "+cb_textArea.value.length+" characters ", lbR+lf2);

    }
    /*}}}*/
    /* BUFFER TEXTAREA HIDE AND CLEAR {{{*/
    cb_textArea.style.display = "none";
    cb_textArea.value         = "";

    /*}}}*/
};
/*}}}*/
/*}}}*/
/* CONTAINER SELECT {{{*/
/*_ t_seek_set_container_selected {{{*/
/*{{{*/
let container_selected;
let container_selected_x;

/*}}}*/
let t_seek_set_container_selected = function(container, _caller)
{
/*{{{
logXXX("t_seek_set_container_selected%c("+get_id_or_tag(container)+")", lbH+lf7);
}}}*/
    /* [container_selected] {{{*/
    if(container_selected == container) return;

    if(container_selected) del_el_class(container_selected, CSS_CONTAINER_SELECTED);

    container_selected     = container;

    /*}}}*/
    /* SEEKER FOLLOWS [container_selected] {{{*/
    if(container_selected)
    {
        t_set_onSeekXYL_from_container(container_selected, _caller+" ON ["+get_n_lbl(container_selected)+"]");
    }
    /*}}}*/
    /* add_el_class [container_selected] {{{*/
    if(container_selected) {
        add_el_class(container_selected, CSS_CONTAINER_SELECTED);
        add_el_class(seekzone          , CSS_CONTAINER_SELECTED);

        let xy = get_el_xy(container_selected, "t_seek_set_container_selected");
        if( xy           ) container_selected_x = xy.x;
    }
    else {
        container_selected_x = 0;
        del_el_class(seekzone          , CSS_CONTAINER_SELECTED);
    }
    /*}}}*/
    dom_hide4_scroll_to_last_hidden( container );
};
/*}}}*/
/*_ t_seek_clr_container_selected {{{*/
let t_seek_clr_container_selected = function()
{
    if(!container_selected ) return;
    /* del_el_class [container_selected] {{{*/
    del_el_class(container_selected, CSS_CONTAINER_SELECTED);
    del_el_class(seekzone          , CSS_CONTAINER_SELECTED);

    /*}}}*/
    /* [container_selected] {{{*/
    container_selected = null;

    /*}}}*/
};
/*}}}*/
/*_ t_set_touchedWord_startContainer {{{*/
let t_set_touchedWord_startContainer = function()
{
/*{{{*/
    let caller = "t_set_touchedWord_startContainer";
let log_this   = LOG_MAP.EV3_UP;

if( log_this) log("%c"+caller+" %c FOR SELECTION RANGE "+get_id_or_tag(s_touchedWord_range_parent)+" %c "+       s_touchedWord_slot
                  ,lbb+lbL+lf3 ,lbb+lbC+lf3                                                         ,lbb+lbR+lfX[s_touchedWord_slot]);

/*}}}*/
    /* GET [touched_container] {{{*/
    let slot = s_touchedWord_slot;
    let touched_container;
    for(let num=1; num <= ccs[slot].containers.length; ++num)
    {
        if( is_el_or_child_of_parent_el(s_touchedWord_range_parent, ccs[slot].containers[num-1]) )
        {
            touched_container = ccs[slot].containers[num-1];

if( log_this) log("%c"+caller+" %c "+get_id_or_tag(touched_container)+" %c num "+num
                  ,lbb+lbL+lf3 ,lbb+lbC+lf3                             ,lbb+lbR+lf3 );
            break;
        }
    }
    /*}}}*/
    /* HIGHLIGHT [touched_container] {{{*/
    if(touched_container)
    {
        t_seek_set_container_selected(touched_container, caller);
        t_scrollIntoViewIfNeeded     (touched_container);
    }
    else {
if( log_this) log("%c"+caller+" %c NO [touched_container]"
                  ,lbb+lbL+lf3 ,lbb+lbR+lf2               );
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/*}}}*/

/** SCROLL */
/* {{{*/
/*{{{*/
const SCROLLED_INTO_VIEW     = "scrolled_into_view";

const SCROLL_INTO_VIEW_DELAY = 500;
const SCROLL_RECENTER_DELAY  = 500;
const SCROLL_CONTAINER_DELAY = 500;

let t_scrollIntoView_EL;

let t_scrollIntoViewIfNeeded_timer;
let t_scrollIntoViewIfNeeded_DONE_MS;
let t_scroll_recenter_timer;
let t_scroll_recenter_DONE_MS;

/*}}}*/

/*_ t_scrollIntoViewCanceled {{{*/
let t_scrollIntoViewCanceled = function(_caller)
{
/*{{{*/
let log_this = logging_EVENTS;

/*}}}*/

    t_scrollIntoView_EL = null;

    if( t_scroll_recenter_timer )
    {
if( log_this) log("PENDING RECENTER INTERRUPTED BY "+ _caller);
        clearTimeout(t_scroll_recenter_timer);
        t_scroll_recenter_timer = null;
    }

    if( t_scrollIntoViewIfNeeded_timer )
    {
if( log_this) log("PENDING SCROLL INTERRUPTED BY "+ _caller);
        clearTimeout( t_scrollIntoViewIfNeeded_timer );
    }

};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded {{{*/
let t_scrollIntoViewIfNeeded = function(el)
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded";
let log_this = logging_EVENTS;

if( log_this) log("%c "+caller+" %c "+get_id_or_tag(el), lbL+lf4,lbR+lf4);
if( log_this) console_dir(el);
/*}}}*/

    t_scrollIntoViewCanceled(caller);

    t_scrollIntoView_EL = el;

    if(t_scrollIntoView_EL) t_scrollIntoViewIfNeeded_timer = setTimeout(t_scrollIntoViewIfNeeded_handler, SCROLL_INTO_VIEW_DELAY);
    else                    t_scrollIntoViewIfNeeded_timer = null;
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_handler {{{*/
let t_scrollIntoViewIfNeeded_handler = function()
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded_handler";
let log_this = logging_EVENTS;

if( log_this) log("%c "+caller+" %c "+get_id_or_tag(t_scrollIntoView_EL), lbL+lf5,lbR+lf5);
/*}}}*/
    if( !t_scrollIntoView_EL) return;

    /* SCROLL WHERE {{{*/
    t_scrollIntoViewIfNeeded_timer   = null;
    t_scrollIntoViewIfNeeded_DONE_MS = new Date().getTime();

    let xy = t_scrollIntoViewIfNeeded_get_scrollXY( t_scrollIntoView_EL );
    if(!xy) return;
    /*}}}*/
    /* IS NEEDED {{{*/
    if((window.scrollX != xy.x) || (window.scrollY != xy.y))
    {
if( log_this) t_log_event_status("SCROLL INTO VIEW DX=["+window.scrollX+" .. "+xy.x+"] .. DY=["+window.scrollY+" .. "+xy.y+"]", lf5);
/*{{{
logXXX("%c "+caller+": scroll_not_done_yet=["+scroll_not_done_yet()+"]", lbH+lf7);
}}}*/

        t_window_scrollTo(xy.x, xy.y, "smooth"); /* that's only an adjustment */
    }
    /*}}}*/
    /* NOT NEEDED {{{*/
    else {
if( log_this) log("%c SCROLL INTO VIEW NOT NEEDED %c "+window.scrollX+" "+window.scrollY, lbb+lbH+lf5, lbb+lbH+lf5)
    }
    /*}}}*/

    /* XXX .. SHOULD WE ALWAYS ? */
    t_scroll_recenter_timer = setTimeout(t_scrollIntoViewIfNeeded_then_recenter_handler, SCROLL_RECENTER_DELAY);
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_then_recenter_handler {{{*/
let t_scrollIntoViewIfNeeded_then_recenter_handler = function()
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded_then_recenter_handler";
let log_this = logging_EVENTS;

if( log_this) log("%c "+caller+" %c "+get_id_or_tag(t_scrollIntoView_EL), lbL+lf6,lbR+lf6);
/*}}}*/
    /* RECENTER DONE .. POINTER STILL DOWN .. REARM A LONG PRESS {{{*/
    rearm_long_press_listener();

    /*}}}*/
    if( !t_scrollIntoView_EL) return;
    /* SCROLL WHERE {{{*/
    t_scroll_recenter_timer   = null;
    t_scroll_recenter_DONE_MS = new Date().getTime();

    let xy = get_el_xy(t_scrollIntoView_EL, "t_scrollIntoViewIfNeeded_then_recenter_handler");
    if(!xy ) return;

    let e_W = t_scrollIntoView_EL.clientWidth  || t_scrollIntoView_EL.offsetWidth;
    let e_H = t_scrollIntoView_EL.clientHeight || t_scrollIntoView_EL.offsetHeight;

    xy.x    = xy.x  /* container left   */
        +     e_W/2 /* container center */
        -     w_W/2 /*   window  center */
    ;

    xy.y    = xy.y  /* container top    */
        +     e_H/2 /* container middle */
        -     w_H/2 /*   window  middle */
    ;

    /*}}}*/
    /* IS NEEDED .. (not already there) {{{*/
    if((window.scrollX != xy.x) || (window.scrollY != xy.y))
    {
if( log_this) t_log_event_status("SCROLL RECENTER  DX=["+window.scrollX+" .. "+xy.x+"] .. DY=["+window.scrollY+" .. "+xy.y+"]", lf6);
        if( onWork_EL )
        {
/*{{{
logXXX("%c NOT RECENTERING WHEN [onWork_EL] NOT NULL %c"+ get_id_or_tag(onWork_EL), lbb+lbL+lf4, lbb+lbR+lf7);
}}}*/
        }
        else {
/*{{{
logXXX("%c ... RECENTERING WHEN [onWork_EL]  IS NULL", lbb+lbH+lf8);
}}}*/
            t_window_scrollTo(xy.x, xy.y, "smooth"); /* RECENTER ALWAYS SMOOTH */
        }
    }
    /*}}}*/
    /* NOT NEEDED {{{*/
    else {
if( log_this) log("%c SCROLL RECENTER NOT NEEDED %c "+window.scrollX+" "+window.scrollY, lbb+lbH+lf6, lbb+lbH+lf6)

    }
    /*}}}*/
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_is_pending {{{*/
let t_scrollIntoViewIfNeeded_is_pending = function()
{
    return (t_scrollIntoViewIfNeeded_timer != null)
        || (t_scroll_recenter_timer        != null)
    ;
};
/*}}}*/

/*_ t_scrollIntoViewIfNeeded_dimm_mask_container_selected {{{*/
/*{{{*/
let t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer;

let el_to_mark_SCROLLED_INTO_VIEW;
/*}}}*/
let t_scrollIntoViewIfNeeded_dimm_mask_container_selected = function(el)
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded_dimm_mask_container_selected";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c "+caller+" %c "+get_id_or_tag(el), lbL+lf4,lbR+lf4);
/*}}}*/

    el_to_mark_SCROLLED_INTO_VIEW = el;

    if(    t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer) clearTimeout( t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer );
    if(el) t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer =  setTimeout( t_scrollIntoViewIfNeeded_dimm_mask_container_selected_handler, SCROLL_CONTAINER_DELAY);
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_dimm_mask_container_selected_handler {{{*/
let t_scrollIntoViewIfNeeded_dimm_mask_container_selected_handler = function()
{
/*{{{*/
let   caller = "t_scrollIntoViewIfNeeded_dimm_mask_container_selected_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    /* SLOT CONTAINERS CURRENTLY DISPLAYED */
    let containers                      =  dimm_mask.firstElementChild;
if( log_this) console_dir(containers    , "dimm_mask.firstElementChild");

    if(!containers                                               ) return;
    if( containers.id                  != "div_slot_containers"  ) return;

    /* FIRST CONTAINER */
    let                       container =  containers.firstElementChild;
if( log_this) console_dir(    container , "containers.firstElementChild");

    /* SELECTED CONTAINER */
    while(container && !has_el_class(container , CSS_CONTAINER_SELECTED))
        container =                  container .  nextElementSibling;

    /* SCROLL INTO VIEW IF NEEDED */
if( log_this) console_dir(container, "container");
    if(container &&  has_el_class(container, CSS_CONTAINER_SELECTED)) t_scrollIntoViewIfNeeded( container );

    t_scrollIntoViewIfNeeded_dimm_mask_container_selected_timer = null;
};
/*}}}*/

/*_ t_scrollIntoViewIfNeeded_get_scrollXY {{{*/
let t_scrollIntoViewIfNeeded_get_scrollXY = function(el)
{
    return t_scrollIntoViewIfNeeded_get_scrollXY_with_options(el, false);
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_get_scrollXY_with_margin {{{*/
let t_scrollIntoViewIfNeeded_get_scrollXY_with_margin = function(el)
{
    return t_scrollIntoViewIfNeeded_get_scrollXY_with_options(el, true);
};
/*}}}*/
/*_ t_scrollIntoViewIfNeeded_get_scrollXY_with_options {{{*/
/*{{{*/
const SCROLLBAR_WIDTH = 16;
const VIEWPORT_MARGIN =
    {     top    :160
        , left   : 16
        , right  : 16 + SCROLLBAR_WIDTH
        , bottom : 80 + SCROLLBAR_WIDTH
    };
/*}}}*/
let t_scrollIntoViewIfNeeded_get_scrollXY_with_options = function(container, with_margin=true)
{
/*{{{*/
let caller = "t_scrollIntoViewIfNeeded_get_scrollXY_with_options";

/*{{{
container.scrollIntoView(true);
- opt_center: (if false): aligned to the nearest edge of the visible area of the scrollable ancestor
- scrollable ancestor...: (node.scrollHeight > node.clientHeight)
container.scrollIntoViewIfNeeded(true);
}}}*/
    /*}}}*/
    /* VIEW {{{*/
    let w_W = window.innerWidth ;
    let w_H = window.innerHeight;

    let view_rect
        = {   left   : window.scrollX       + (with_margin ? VIEWPORT_MARGIN.left   : 16)
            , top    : window.scrollY       + (with_margin ? VIEWPORT_MARGIN.top    : 16)
            , right  : window.scrollX + w_W - (with_margin ? VIEWPORT_MARGIN.right  : 32)
            , bottom : window.scrollY + w_H - (with_margin ? VIEWPORT_MARGIN.bottom : 32)
        };
    /*}}}*/
    /* EL {{{*/
    let xy = get_el_xy(container, caller);
    if(!xy) return null;

    let e_W = container.clientWidth  || container.offsetWidth;
    let e_H = container.clientHeight || container.offsetHeight;

    let container_rect
        = { left   : xy.x
        ,   top    : xy.y
        ,   right  : xy.x + e_W
        ,   bottom : xy.y + e_H
    };

    /*}}}*/
    /* OVER [top left bottom right] {{{*/
    let over_top    = (container_rect.top    < view_rect.top   );
    let over_left   = (container_rect.left   < view_rect.left  );
    let over_bottom = (container_rect.bottom > view_rect.bottom);
    let over_right  = (container_rect.right  > view_rect.right );

    let may_go_left = (container_rect.right  < window.innerWidth); /* i.e. still visible with no left margin */
    /*}}}*/
/*{{{
console_clear(caller)
logXXX(caller+"("+ get_n_lbl(container)+"):");
if(over_top   ) logXXX("over_top"   );
if(over_left  ) logXXX("over_left"  );
if(over_right ) logXXX("over_right" );
if(over_bottom) logXXX("over_bottom");
logXXX("may_go_left=["+may_go_left+"]");

console.dir(container)
console.dir(document.documentElement)
logXXX(".....view_rect=["+JSON.stringify(view_rect)+"]");
logXXX(".....container_rect=["+JSON.stringify(container_rect)+"]");
}}}*/
    /* scrollX scrollY {{{*/
    let scrollX
        = (over_left  ) ? container_rect.left                         - (with_margin ? VIEWPORT_MARGIN.left   : 16)
        : (over_right ) ? container_rect.right   - window.innerWidth  + (with_margin ? VIEWPORT_MARGIN.right  : 32)
        : may_go_left   ?                          0
        :                                          window.scrollX;

    let scrollY
        = (over_top    ) ? container_rect.top                         - (with_margin ? VIEWPORT_MARGIN.top    : 16)
        : (over_bottom ) ? container_rect.bottom - window.innerHeight + (with_margin ? VIEWPORT_MARGIN.bottom : 32)
        :                                          window.scrollY;

    /*}}}*/
    return { x : scrollX , y : scrollY };
};
/*}}}*/
/*}}}*/

/* SLOT SEEK */
/*{{{*/
/*_ t_seek_slot_num_SELECT_EL {{{*/
let t_seek_slot_num_SELECT_EL = function(el)
{
let caller = "t_seek_slot_num_SELECT_EL";
/*{{{
logBIG(caller+"("+get_n_lbl(el)+")", lf1);
}}}*/
    /* [slot] {{{*/
/*  let slot = get_slot_from_id_or_className(el); */
    let slot = t_get_EL_slot(el);
/*{{{
logXXX("...slot=["+ slot +"]");
}}}*/

    if(!slot) return false;
    if(!ccs[slot]) {
logBIG(caller+": SLOT #"+slot+" NOT CURRENLTY INITIALIZED");
    if(t_preventDefault_caller) t_restoreDefault("NOT CURRENLTY INITIALIZED");
/*{{{
}}}*/
        return;
    }
    /*}}}*/
    /* [num] {{{*/
/*  let num = get_num_from_id_or_className_slot(el, slot); */
    let num = t_get_EL_num (el);
/*{{{
logXXX("....num=["+ num  +"]");
}}}*/

    if(!num ) return false;
    /*}}}*/
    /* [seeker_PU] .. CSS_SEEK3_ONJUMPEL {{{*/
    add_el_class(seeker_PU, CSS_SEEK3_ONJUMPEL);

    /*}}}*/
    /* SET ccs[to_slot].num_selected {{{*/
    t_seek_slot_num_SELECT_SLOT_NUM(slot, num);

    t_seeker_move_on_slot_num   (slot, num);

    /*}}}*/
    /* CONTAINER {{{*/
    let container =  get_slot_num_container(slot, num);
    t_seek_set_container_selected(container, caller);

    /*}}}*/
    /* CLEAR WINDOW SELECTION SEEKER {{{*/
    t_window_getSelection_removeAllRanges(caller);

    /*}}}*/
    return true;
};
/*}}}*/
/*_ t_seek_slot_num_SELECT_SLOT_NUM {{{*/
let t_seek_slot_num_SELECT_SLOT_NUM = function(to_slot, to_num)
{
let caller = "t_seek_slot_num_SELECT_SLOT_NUM";
/*{{{
logBIG(caller+"("+to_slot+", "+to_num+")", lf2);
}}}*/
    /* unhighlight current to_slot {{{*/
    let num_selected = ccs[to_slot].num_selected;
    if( num_selected > 0)
        del_el_class(ccs[to_slot].nodes[num_selected-1], CSS_NUM_SELECTED);

    /*}}}*/
    /* highlight selected to_slot {{{*/
    if( to_num > 0) {
        ccs[to_slot].num_selected     = to_num;
        add_el_class(ccs[to_slot].nodes[to_num-1], CSS_NUM_SELECTED);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_seek_slot_num_JUMP_FROM_TO {{{*/
let t_seek_slot_num_JUMP_FROM_TO = function(from_slot, from_num, to_slot, to_num)
{
let caller = "t_seek_slot_num_JUMP_FROM_TO";
/*{{{
logBIG(caller+"(FROM ["+from_slot+" "+from_num+"] TO ["+to_slot+" "+to_num+"]", lf3);
}}}*/
    /* unhighlight current from_slot {{{*/
    let num_selected = ccs[from_slot].num_selected;
    if( num_selected > 0)
        del_el_class(ccs[from_slot].nodes[num_selected-1], CSS_NUM_SELECTED);

    /*}}}*/
    /* highlight abandonned from_slot {{{*/
    if(from_num > 0) {
        add_el_class(ccs[from_slot].nodes[from_num-1], CSS_NUM_SELECTED);
        ccs[from_slot].num_selected     = from_num;
    }

    /*}}}*/
    /* unhighlight landing to_slot {{{*/
    if( to_num > 0)
        del_el_class(ccs[  to_slot].nodes[  to_num-1], CSS_NUM_SELECTED);

    /*}}}*/
};
/*}}}*/
/*_ t_seek_slot_num_CLEAR_SELECTED {{{*/
let t_seek_slot_num_CLEAR_SELECTED = function(_caller)
{
let caller = "t_seek_slot_num_CLEAR_SELECTED";
/*{{{
logBIG(caller+" .. CALLED BY "+_caller, lf4);
}}}*/
    /* del CSS_NUM_SELECTED {{{*/
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if(               !ccs[slot]) continue;
        let num_selected = ccs[slot].num_selected;
        if( num_selected > 0)
            del_el_class(ccs[slot].nodes[num_selected-1], CSS_NUM_SELECTED);
    }
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* SLOT THUMB */
/*{{{*/
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
let   caller = "get_num_from_id_or_className_slot(node.id=["+node.id+"], slot=["+slot+"])";
let log_this = LOG_MAP.T6_SLOT;

    let num = 0;

    /* thumb_p_4_95 */
    /* thumb_s_4_95 */
    /* class_s_4_95 */
    /* 012345678901 */
    /* select4_95   */
    if     ((pfx = "thumb_p_"+slot+"_") && node.id       .startsWith(pfx)) num = parseInt( node.id       .substring(pfx.length) );
    else if((pfx = "thumb_s_"+slot+"_") && node.id       .startsWith(pfx)) num = parseInt( node.id       .substring(pfx.length) );
    else if((pfx = "class_s_"+slot+"_") && node.className.startsWith(pfx)) num = parseInt( node.className.substring(pfx.length) );
    else if((pfx =   "select"+slot+"_") && node.id       .startsWith(pfx)) num = parseInt( node.id       .substring(pfx.length) );

if( log_this) log(caller+": ...return "+((num != 0) ? num : "NOT A SLOT NUM"));
    return num;
};
/*}}}*/
/*_ get_slot_from_id_or_className  {{{*/
let get_slot_from_id_or_className  = function(node)
{
let   caller = "get_slot_from_id_or_className("+ get_n_lbl(node) +" id=["+node.id+"] node.class=["+node.className+"])";
let log_this = LOG_MAP.T6_SLOT;

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

    let last_highlight_slot = s_get_last_highlight_slot();
    if(slot <= 0)
        slot = last_highlight_slot;

    slot = ((slot >= 0              )
        &&  (slot <  SELECT_SLOT_MAX))
        ?    slot
        :    last_highlight_slot
    ;

if( log_this) log(caller+": ...return "+((slot != 0) ? slot : "NOT A SLOT"));
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
            ||   (onWork_EL.id.startsWith("seekzone"))
            ||   (onWork_EL.id.startsWith("thumb_p_"))
        )
        ?      last_highlight_num
        :      t_get_EL_num (onWork_EL, 0);

/*
logXXX("t_get_EL_num("+get_n_lbl(onWork_EL)+"): ...return ["+num +"] .. last_highlight_num=["+last_highlight_num+"]")
*/
    return num;
};
/*}}}*/
/*_ t_get_onWork_EL_container {{{*/
let t_get_onWork_EL_container = function()
{
    let slot = t_get_EL_slot(onWork_EL); if(!slot) return null;
    let num  = t_get_onWork_EL_num() ; if(!num ) return null;

    let container = ccs[slot].containers[num-1];
log("t_get_onWork_EL_container("+get_n_lbl(onWork_EL)+"): ...return ["+get_id_or_tag(container)+" "+get_n_txt(container) +"]");
    return container;
};
/*}}}*/
/*_ t_get_EL_slot {{{*/
let t_get_EL_slot = function(el)
{
/*{{{*/
let caller = "t_get_EL_slot";
let log_this = LOG_MAP.T6_SLOT;

/*}}}*/
    let slot = -1;
    if(!el) return slot;
    if((el == seeker_PU) || (el == seeker_CU) || (el.id.startsWith("seekzone")))
    {
        slot = s_get_last_highlight_slot();
    }
    else {

        let offset                                  /* 01234567890 */
            = el.id.startsWith("select"    ) ?  6   /* select5_0   */
            : el.id.startsWith("thumb_p_"  ) ?  8   /* thumb_p_5   */
            : el.id.startsWith("thumb_s_"  ) ?  8   /* thumb_s_5   */
            :                                   0
        ;

        let ccX = parseInt( el.id.substring(offset) );
        slot
            = isNaN(ccX    ) ?   0  /* not found     */
            :      (ccX > 0) ? ccX  /*  ccX=[1..9,0] */
            :                   10; /* slot=[1...10] */

    }

if( log_this) log(caller+"("+get_n_lbl(el)+"): ...return ["+slot+"]");
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

/*_ t_clear_slot {{{*/
let t_clear_slot = function(slot)
{
/*{{{*/
let   caller = "t_clear_slot("+slot+")";
let log_this = LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
    if( logging_something() )
        t_log_transcript_event_bot( "<em class='big'>CLEAR CLICKED SLOT #"+slot+" .. onWork_EL.id=["+onWork_EL.id+"]</em>");

    clear_slot(slot);
    t_onPatternUpdate("CLEARING SLOT <em>"+ slot +"</em>", caller);

    if( prop_get( WORDS_OPCYCLE ) )
    {
if( log_this) log("...words_opcycle POSTING cycle_on_last_cleared_pattern");

        setTimeout(cycle_on_last_cleared_pattern, PATTERN_CYCLE_DELAY);
    }
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
let log_this = LOG_MAP.T6_SLOT;
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

    if((onWork_EL) && (slot == t_get_EL_slot(onWork_EL)))
    {
        t_set_onWork_EL(null, caller);

if( log_this) t_log_event_status(caller, lbb+lf6);
    }

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
let log_this = LOG_MAP.T6_SLOT;
if( log_this) log("%c "+caller,lb6);

    /*}}}*/
    t_clear_slot_sync_timer = null;
/*
     if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv("SOME CLEARED", "want");
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
        = prop_get( WORDS_EXACT  ) ? WORDS_SEGMENT
        : prop_get( WORDS_SEGMENT) ? WORDS_HEAD_TAIL
        :                            WORDS_EXACT
    ;
if(log_this) log("...next_option=["+next_option+"]");

    sync_words_opcycle_button( next_option );

    prop_set(next_option, true);

    if(next_option == WORDS_EXACT)
    {
        t_clear( caller );
if(log_this) log_set_TR_SELECT("<em class='big'>CYCLE BACK TO WORDS OPTION "+ t_get_words_options_symbol(next_option)+"</em>");

        t_sync_styles(caller);

        t_store5_save_page_wording();

/*{{{
        if( tools_filter_input ) t_focus( tools_filter_input );
}}}*/

        t_words_regex_log("...");

        return
    }

    if( t_preventDefault_caller )
        t_restoreDefault("WORDING CYCLE");

    t1_prop_id_toggle(next_option);
};
/*}}}*/
/*_ t_get_words_options_symbol {{{*/
let WORDS_EXACT_SYMBOL       = "<em class='cc3'>&equiv;</em>";
let WORDS_SEGMENT_SYMBOL     = "<em class='cc4'>&sub;</em>"  ;
let WORDS_HEAD_TAIL_SYMBOL   = "<em class='cc5'>&isin;</em>" ;
let WORDS_OPCYCLE_SYMBOL     = "<em class='cc9'>\u27F3</em>" ;

let t_get_words_options_symbol = function(option)
{
    switch( option) {
        case WORDS_EXACT     : return WORDS_EXACT_SYMBOL     ;
        case WORDS_SEGMENT   : return WORDS_SEGMENT_SYMBOL   ;
        case WORDS_HEAD_TAIL : return WORDS_HEAD_TAIL_SYMBOL ;
        default              : return "*** WRONG WORDS OPTION ***";
    }
};
/*}}}*/

/*_ sync_words_opcycle_button {{{*/
let sync_words_opcycle_button = function(words_options)
{
    let el = prop_get_EL( WORDS_OPCYCLE );
    switch(words_options)
    {
        case WORDS_EXACT:
        add_el_class(el, WORDS_EXACT    );
        del_el_class(el, WORDS_SEGMENT  );
        del_el_class(el, WORDS_HEAD_TAIL);
        break;

        case WORDS_SEGMENT:
        del_el_class(el, WORDS_EXACT    );
        add_el_class(el, WORDS_SEGMENT  );
        del_el_class(el, WORDS_HEAD_TAIL);
        break;

        case WORDS_HEAD_TAIL:
        del_el_class(el, WORDS_EXACT    );
        del_el_class(el, WORDS_SEGMENT  );
        add_el_class(el, WORDS_HEAD_TAIL);
        break;
    }
};
/*}}}*/

/*}}}*/

/** ANIM */
/*{{{*/
/* PULSE {{{*/
/*_ {{{*/
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
if(LOG_MAP.T3_LAYOUT) log(caller);
/*{{{
console.warn(caller);
}}}*/
    if( csv_contains(PULSE_BLACKLIST_ID_CSV, id) ) {
if(LOG_MAP.T3_LAYOUT) log("...IGNORING BLACKLISTED ID");
        return;
    }
    let el;
    el     = get_tool(id);

    if(!el) id = pulse_id_get_alias(id);
    if(!id) return;

if(LOG_MAP.T3_LAYOUT) log(".id_alias=["+id+"]");
    el     = get_tool(id);

    if(!el ) return;
    if(id == pulsing_id) return; /* grouping */

    pulsing_id_csv = csv_add(pulsing_id_csv, id);
/*{{{
csv_log(pulsing_id_csv);
}}}*/

    pulse_id_start();

};
/*}}}*/
/*_ pulse_id_get_alias {{{*/
let pulse_id_get_alias = function(id)
{
    switch(id) {
        default              : return "";
        case       "bag_rot" : return "pat_bag";
        case       "pat_csv" : return "pat_bag";
        case  "tools_filter" : return "sel_bag";
        case     "topTool_XY": return "headsup";
        case "tools_scrollY" : return "thumb_p";
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

    set_el_class_on_off(hotwave, CSS_PULSING, true);

    if(!pulsing_id) pulse_id_timer = setTimeout(pulse_id_next_handler, PULSE_START_DELAY);
};
/*}}}*/
/*_ pulse_id_next_handler {{{*/
/*{{{*/
let HOTSPOT_HTML_IDLE       = "\u00BB;";
/*}}}*/
let pulse_id_next_handler = function()
{
    pulsing_id = csv_get(pulsing_id_csv, 1);
    if(!pulsing_id) {
        pulse_id_timer = null; /* done */
        set_el_class_on_off(hotwave, CSS_PULSING, false);
t_fly(HOTSPOT_HTML_IDLE);
        return;
    }
    else {
        let count = csv_count(pulsing_id_csv);
t_fly("<em class='cc"+count+"'>"+pulsing_id+"</em>");
    }

/*{{{
csv_log(pulsing_id_csv);
}}}*/
if(LOG_MAP.T3_LAYOUT) log(".pulse_id_next_handler: .. pulsing_id=["+pulsing_id+"]");

    pulsing_id_csv = csv_del(pulsing_id_csv, pulsing_id);

    set_id_class_on_off(pulsing_id, "pulse_in" , true );

    setTimeout(pulse_id_out_handler, PULSE_IN_DURATION);
};
/*}}}*/
/*_ pulse_id_out_handler {{{*/
let pulse_id_out_handler  = function()
{
    if(!pulsing_id) return;
if(LOG_MAP.T3_LAYOUT) log("..pulse_id_out_handler: pulsing_id=["+pulsing_id+"]");

    set_id_class_on_off(pulsing_id, "pulse_in"    , false);
    set_id_class_on_off(pulsing_id, "pulse_id_out", true );

    setTimeout(pulse_id_done_handler, PULSE_OUT_DURATION);
};
/*}}}*/
/*_ pulse_id_done_handler {{{*/
let pulse_id_done_handler = function()
{
    if(!pulsing_id) return;
if(LOG_MAP.T3_LAYOUT) log("...pulse_id_done_handler: pulsing_id=["+pulsing_id+"]");

    set_id_class_on_off(pulsing_id, "pulse_id_out", false);

    pulse_id_next_handler();
};
/*}}}*/
/*}}}*/
/* MOVE COOLDOWN {{{*/
/*_ move_cooldown_start {{{*/
/*{{{*/
const MOVE_COOLDOWN_DURATION =  500;
const MOVE_COOLDOWN_SHORT    =  100;
let   move_cooldown_timer    = null;

/*}}}*/
let move_cooldown_short = function() { move_cooldown_start( MOVE_COOLDOWN_SHORT ); };
let move_cooldown_start = function(delay=MOVE_COOLDOWN_DURATION)
{
/*{{{
logBIG("COOLDOWN START ("+delay+")", lbH+lfX[delay/100 % 10]);
}}}*/

    if(move_cooldown_timer) clearTimeout(move_cooldown_timer);
    move_cooldown_timer   =   setTimeout(move_cooldown_handler, delay);

    add_el_class(seeker_PU, CSS_ON_COOLDOWN);
};
/*}}}*/
/*_ move_cooldown_handler {{{*/
let move_cooldown_handler = function()
{
/*{{{
logBIG("COOLDOWN END", lbH+lf8);
}}}*/
/*{{{
    if(!seeker_PU) return;
}}}*/

    move_cooldown_timer = null; /* done */
    t_clr_has_moved("move_cooldown_handler");

    del_el_class(seeker_PU, CSS_ON_COOLDOWN);
};
/*}}}*/
/*_ move_cooldown_is_pending {{{*/
let move_cooldown_is_pending = function()
{
    return (move_cooldown_timer != null);
};
/*}}}*/
/*_ move_cooldown_clear_pending {{{*/
let move_cooldown_clear_pending = function()
{
    if(move_cooldown_timer) clearTimeout(move_cooldown_timer);
    move_cooldown_timer = null;
};
/*}}}*/
/*}}}*/
/*XXX*/
/* SEEKER FEEDBACK {{{*/
/*_ t_check_on_seeker_move {{{*/
let t_check_on_seeker_move = function(dx, dy, d_min)
{
/* NO [slot] [num] {{{*/
let caller = "t_check_on_seeker_move";
let log_this = LOG_MAP.S2_SELECT;

    if(!onWork_SEEK_TOOL) return;
    if(!seeker_CU       ) return;

    let slot =  t_get_EL_slot(onWork_EL);
    let  num =  t_get_onWork_EL_num ();

if(log_this) log(caller+": slot=["+slot+"] num=["+ num+"]");
    if(slot <= 0) return;
    if(num  <= 0) return;
/*}}}*/

    t_check_on_seeker_update(dx, dy, d_min, slot, num);
};
/*}}}*/
/*_ t_check_on_seeker_update {{{*/
let t_check_on_seeker_update = function(dx, dy, d_min, slot, num)
{
/*{{{*/
let   caller = "t_check_on_seeker_update(slot "+slot+")";
let log_this = LOG_MAP.T6_SLOT;

/*}}}*/
/*{{{
logXXX(caller+": ...css.length=["+ccs.length+"]");
}}}*/
    if(!ccs[slot]) return;
    /* SEEKER DISPLAY SLOT [NUM AND NUM MAX] {{{*/
    seeker_CU.innerHTML        = num +"<sup>/"+ ccs[slot].nodes.length+"</sup>";

    /*}}}*/
    /* SEEKER STRETCH .. (in dead zone) {{{*/
/*
    let dx_ratio               = 0.01 * dx / d_min;
    let dy_ratio               = 0.01 * dy / d_min;
    seeker_PU.style.marginLeft = (seeker_PU.offsetWidth  * dx_ratio)+"px";
    seeker_PU.style.marginTop  = (seeker_PU.offsetHeight * dy_ratio)+"px";
*/
    /*}}}*/
    /* SEEKER CSS DIR .. f(Up Right Down Left) {{{*/
    let  dir = (Math.abs(onMoveDXY.x) > Math.abs(onMoveDXY.y)) ? ((onMoveDXY.x > 0) ? MOVE_SLOT_NEXT : MOVE_SLOT_PREV)
        :                                                        ((onMoveDXY.y > 0) ? MOVE_NUM_NEXT  : MOVE_NUM_PREV );
if( log_this) log(caller+"("+slot+"): ...dir %c"+ dir, lbb+lbH+lf7);

    t_check_on_seeker_PU_look_dir( dir );
    /*}}}*/
    /* SEEKER CSS COLOR .. f(slot prev next) {{{*/
    /* LOOK AHEAD COLOR
     * 1/2 ON-SLOT   UP-DOWN  .. NUM  +/-
     * 2/2 TO-SLOT LEFT-RIGHT .. SLOT +/-
     */

    for(let i = 1; i <= SELECT_SLOT_MAX; ++i)
        set_id_class_on_off(seeker_PU.id, "slot_color"+i, false);

    let slot_color = slot;
    if((dir == MOVE_SLOT_PREV) || (dir == MOVE_SLOT_NEXT))
    {
        let pre_or_next_slot
            = (dir == MOVE_SLOT_PREV)
            ?  get_prev_populated_slot( slot )
            :  get_next_populated_slot( slot );
if( log_this) log(caller+"("+slot+"): ...pre_or_next_slot %c"+ pre_or_next_slot, lbb+lbH+((dir == MOVE_SLOT_PREV) ? lf5 : lf4));

        if(pre_or_next_slot)
            slot_color = pre_or_next_slot;
    }
    set_id_class_on_off(seeker_PU.id, "slot_color"+slot_color, true);
    set_el_class_on_off(seeker_PU,  SHOW_SEEKZONE , prop_get( SHOW_SEEKZONE ));
    /*}}}*/
};
/*}}}*/
/*_ t_check_on_seeker_PU_look_dir {{{*/
let t_check_on_seeker_PU_look_dir = function( dir )
{
    /* URDL */
    set_id_class_on_off(seeker_PU.id, CSS_SEEKER_PU2_LOOK_UP   , (dir == MOVE_NUM_PREV ));
    set_id_class_on_off(seeker_PU.id, CSS_SEEKER_PU3_LOOK_RIGHT, (dir == MOVE_SLOT_NEXT));
    set_id_class_on_off(seeker_PU.id, CSS_SEEKER_PU4_LOOK_DOWN , (dir == MOVE_NUM_NEXT ));
    set_id_class_on_off(seeker_PU.id, CSS_SEEKER_PU5_LOOK_LEFT , (dir == MOVE_SLOT_PREV));
};
/*}}}*/
/*_ t_check_on_seeker_clear {{{*/
let t_check_on_seeker_clear = function()
{
    if(!seeker_PU) return;

    seeker_PU.style.marginLeft = 0;
    seeker_PU.style.marginTop  = 0;

    t_check_on_seeker_PU_look_dir(null);
};
/*}}}*/
/*}}}*/
/*}}}*/

/** LOG */
/*{{{*/
/* LOG STATE {{{*/
/*_ t_log_set_state {{{*/
/*{{{*/
let div_ccX = 0;

/*}}}*/
let t_log_set_state = function(state)
{
    if(!fly_log) return;

    /* [LOGGING OPTION] takes precedence */
    if(LOG_MAP.EV8_FLOATLOG) state = true;

    if(LOG_MAP.EV8_FLOATLOG) add_el_class(fly_log, CSS_DISABLED);
    else                     del_el_class(fly_log, CSS_DISABLED);

    /* UI button .. (distinct [DISPLAY] and [LOGGING] symbol) */
    fly_log.innerHTML =  state ? (LOG_MAP.EV8_FLOATLOG ? SYMBOL_GEAR : SYMBOL_CHECK_MARK) : SYMBOL_MENU;

    set_id_class_on_off(fly_log.id, CSS_CHECKED , state);

    /* TOOLS UI */
    set_el_class_on_off(fly_div   , CSS_FLOATLOG, state);

    /* TOOLS BEHAVIOR */
    fly_log_checked      = state;
    div_ccX              = 0;

    /* CLEAR [fly_div] */
    t_fly_set("");
};
/*}}}*/
/*_ t_fly_div_magnified_toggle {{{*/
let t_fly_div_magnified_toggle = function(new_state="toggle")
{
/*{{{*/
let   caller = "t_fly_div_magnified_toggle("+new_state+")";
let log_this = (LOG_MAP.EV4_LONG_PRESS || LOG_MAP.T3_LAYOUT);

if( log_this) t_log_event_status(caller, lf9);
/*}}}*/
    prop_set( FLY_DIV_MAGNIFIED , new_state);

    /* switch from [LOAD-TIME-LAYOUT] to [USER-POSITIONING] */
    if(new_state == "toggle")
    {
        fly_div.style.right = "unset";

        let dx = onDown_XY.x - onDown_PANEL_XY.x;
        let dy = onDown_XY.y - onDown_PANEL_XY.y;
        fly_div.style.transformOrigin = dx+"px  "+dy+"px";
    }

    new_state = (new_state == "toggle") ? !has_el_class(fly_div, CSS_MAGNIFIED) : new_state ;
if(log_this) log("...new_state=["+new_state+"]");

    if( new_state ) add_el_class(fly_div, CSS_MAGNIFIED);
    else            del_el_class(fly_div, CSS_MAGNIFIED);

    t_store_update_post("fly_div_magnified "+new_state);

if(log_this) log(caller+": fly_div_magnified: %c "+new_state+" ", (new_state ? lb9 : lb8));
};
/*}}}*/
/*_ t_log_onlayout {{{*/
let t_log_onlayout = function(_caller)
{

    if(!fly_div) return;

    t_fly_div_magnified_toggle( false );

    let xy = store_parseXY("fly_div_XY");
/*{{{
logBIG("t_log_onlayout: store_parseXY('fly_div_XY')=["+xy+"]", lf5);
}}}*/
    if( xy ) {
        fly_div.style.left = xy.x+"px";
        fly_div.style.top  = xy.y+"px";
    }

    /* TOP-LEFT WITHIN 80% */
    if((fly_div.offsetLeft < 0) || (fly_div.offsetLeft > (w_W * 0.8))) fly_div.style.left = "30%"   ;
    if((fly_div.offsetTop  < 0) || (fly_div.offsetTop  > (w_H * 0.8))) fly_div.style.top  = "1em"   ;
};
/*}}}*/
/*_ t_log_onchange {{{*/
let t_log_onchange = function()
{
    if(   fly_div.innerHTML ) {
        add_el_class(fly_div, CSS_PAUSE_ANIMATION    );
        add_el_class(fly_div, CSS_STACKING           );
        t_fly_clr();                                    /* schedule a cleanup */
    }
    else {
        del_el_class(fly_div, CSS_PAUSE_ANIMATION    );
        del_el_class(fly_div, CSS_STACKING           );
        t_del_pin_css_on_panel(fly_div, CSS_CLOSEPIN); /* remove close pin */
    }
};
/*}}}*/
/*}}}*/
/* SEEKZONE LOG {{{*/
/*{{{*/
const HIDE_SEEKZONE_DELAY = 1000;
const CSS_LONGPRESS             = "longpress";
const CSS_MISCLICK              = "misclick";
const CSS_DBLCLICK              = "dblclick";
const CSS_MISCLICK1             = "misclick1";
const CSS_MISCLICK2             = "misclick2";
const CSS_MISCLICK3             = "misclick3";
const CSS_SEEKZONE_ARRAY
    = [   CSS_LONGPRESS
        , CSS_MISCLICK
        , CSS_DBLCLICK
        , CSS_MISCLICK1
        , CSS_MISCLICK2
        , CSS_MISCLICK3
    ];

let t_hide_seekzone_timer;
/*}}}*/
/*  t_seekzone1_show_onDown {{{*/
let t_seekzone1_show_onDown = function()
{
    let container_symbol
        = container_selected
        ? container_selected.tagName+" "+ SYMBOL_HEAVY_RIGHT_ARROW+" "
        : ""
    ;

    let container_msg
        = get_n_txt(onWork_EL) +" "+SYMBOL_BLACK_CIRCLE+" "+get_n_lbl(onWork_EL)
    ;

    let sym;
    let msg;
    switch( onSeekXYL.label )
    {
        case CSS_SEEK1_ONSLOTEL : { sym = SYMBOL_BLACK_R_HAND ; msg = "SEEK SLOT #"+t_get_EL_slot(onWork_EL); } break;
        case CSS_SEEK3_ONJUMPEL : { sym = "ON"                ; msg = get_id_or_tag(onWork_EL)              ; } break;
        case CSS_SEEK5_ONTARGET : { sym = "ON"                ; msg = get_id_or_tag(onWork_EL)              ; } break;
        case CSS_SEEK4_ONSEEKER : { sym = container_symbol    ; msg = container_msg                         ; } break;
        case CSS_SEEK2_ONRESUME : { sym = SYMBOL_GEAR         ; msg = "RESUME"                              ; } break;
        case CSS_SEEK0_ONDOC    : { sym = SYMBOL_BLACK_R_HAND ; msg = "SEEK DOC"                            ; } break;
        default                 : { sym = SYMBOL_CIRCLE       ; msg = onSeekXYL.label || "NOT SEEKING"      ; } break;
    }

    t_seekzone1_show(sym +" "+ msg);
};
/*}}}*/
/*  t_seekzone1_show {{{*/
/*{{{*/
const SEEKSPOT_SPACING        =  2;
const SEEKSPOT_H_MIN          = 32;
const SEEKSPOT_W_MIN          = 32;
const SHOW_SEEKZONE_DELAY     = 500;
const SYMBOL_SEEK_SPOT        = SYMBOL_UP_ARROW;

let   seekspot_caption;
let t_seekzone1_show_msg      = [];
let t_seekzone1_show_msg_last = "";
let t_seekzone1_show_msg_num  = 0;
let t_seekzone1_show_timeout  = 0;

/*}}}*/
let t_seekzone1_show = function(msg="")
{
/*{{{*/
let caller = "t_seekzone1_show";
let log_this = LOG_MAP.EV3_UP;

/*}}}*/
    /* QUEUE SHOW_SEEKZONE MSG {{{*/
    if( prop_get( SHOW_SEEKZONE ) )
    {
        if(prop_get( LOG_SEEKSPOT ) && msg && (t_seekzone1_show_msg_last != msg))
        {
if( log_this) log("%c"+caller+"("+msg+")", lbH+lf1);

            t_seekzone1_show_msg.push(    msg );
            t_seekzone1_show_msg_last  =  msg;
        }
        if(!t_seekzone1_show_timeout && t_seekzone1_show_msg.length)
            t_seekzone1_show_timeout = setTimeout(t_seekzone1_show_handler, SHOW_SEEKZONE_DELAY);
    }
    /*}}}*/
    /* OR CLEANUP MSG HISTORY {{{*/
    else {
        /* HISTORY CLEANUP {{{*/
        if(t_seekzone1_show_msg.length)
        {
if( log_this) log("%c"+caller+"("+msg+"): LOG_SEEKSPOT OFF .. HISTORY CLEANUP", lbH+lf1);
            t_seekzone1_show_msg     = [];
            t_seekzone1_show_msg_num = 0;
        }
        /*}}}*/
        /* SEEKERS CLEANUP {{{*/
        if(seekspot_U.innerHTML || seekspot_D.innerHTML)
        {
            seekspot_U.innerHTML     = "";
            seekspot_D.innerHTML     = "";
        }
        /*}}}*/
    }
    /*}}}*/
};
/*}}}*/
/*_ t_seekzone1_show_handler {{{*/
let t_seekzone1_show_handler = function()
{
/*{{{*/
let   caller = "t_seekzone1_show_handler";
let log_this = LOG_MAP.EV3_UP || LOG_MAP.T6_SLOT;

if( log_this) t_log_event_status(caller, lf8);
if( log_this) log("%c"+SYMBOL_BULB+"%c "+caller+"%c container_selected %c "+ get_id_or_tag(container_selected)+"%c onSeekXYL %c "+onSeekXYL.x+" "+onSeekXYL.y
                  ,lb2             ,lbL         ,lbL                  ,lbR+lf4                                 ,lbL         ,lbR+lf4                         );

    t_seekzone1_show_timeout = null;
/*}}}*/
    if(!prop_get( SHOW_SEEKZONE ) ) {
if( log_this) logBIG("aborted by prop_get(SHOW_SEEKZONE)");
        return;
    }
    /* clear pending hide {{{*/
    if(t_hide_seekzone_timer   ) { clearTimeout(t_hide_seekzone_timer); t_hide_seekzone_timer = null; }

    /*}}}*/
    /* clear previous seek visual feedback {{{*/
/*{{{
    if(container_selected      ) t_seekzone8_clear_feedback();
    if(onWork_EL == target_tool) t_seekzone8_clear_feedback();
}}}*/

    /*}}}*/
    /* DISPLAY TOOLS .. [seekzone] [seekspot_U] [seekspot_D] [seekspot_A] {{{*/

    seekzone.style.borderWidth      = SEEKSPOT_SPACING;

    seekzone.style  .display        = "block";
    seekspot_U.style.display        = "table-cell";
    seekspot_D.style.display        = "table-cell";

    /*}}}*/
    /* AREA .. f(container_selected PAGE-GEOMETRY) {{{*/
    let seek_X    = container_selected ? container_selected_x            : onDown_XY.x;

    let seek_H    = container_selected ? container_selected.scrollHeight : SEEKSPOT_H_MIN;
    let seek_W    = container_selected ? container_selected.scrollWidth  : SEEKSPOT_W_MIN;

    if(container_selected)
        seekzone.style.borderRadius = parseInt(window.getComputedStyle(container_selected).borderRadius) +"px";

    let page_H    = document.body.parentElement.clientHeight;

    let above_H   = Math.max(SEEKSPOT_SPACING, onSeekXYL.y);
    let inset_H   = Math.max(SEEKSPOT_SPACING, seek_H);
    let inset_W   = Math.max(SEEKSPOT_SPACING, seek_W);

    above_H       = Math.min(page_H - inset_H, above_H);

    let below_H   = Math.max(SEEKSPOT_SPACING, page_H - (above_H + inset_H));

    /*}}}*/
    /* POSITION: [seekspot_U seekspot_A seekzone seekspot_D] {{{*/

    seekspot_U.style.height         = (above_H     - SEEKSPOT_SPACING   ) +"px";

    if( prop_get( LOG_SEEKSPOT ) )
    {
        seekspot_A.style.display    = "block";
        seekspot_A.style.top            = (above_H                          ) +"px";
        seekspot_A.style.marginLeft     = (seek_X      - SEEKSPOT_SPACING   ) +"px";
    }

    if(container_selected)
    {
        seekzone.style.left         = (seek_X                           ) +"px";
        seekzone.style.top          = (above_H                          ) +"px";
        seekzone.style.width        = (        inset_W                  ) +"px";
        seekzone.style.height       = (        inset_H                  ) +"px";

        add_el_class(seekzone, CSS_ON_CONTAINER);
    }
    else {
        seekzone.style.left         = (onDown_XY.x                      ) +"px";
        seekzone.style.top          = (onDown_XY.y                      ) +"px";
        seekzone.style.width        = (              seek_W             ) +"px";
        seekzone.style.height       = (              seek_H             ) +"px";

        del_el_class(seekzone, CSS_ON_CONTAINER);
    }

    seekspot_D.style.height         = (                below_H - SEEKSPOT_SPACING   ) +"px";
    /*}}}*/
    /* SHOW [seekspot_caption LOG] .. (above or below) {{{*/
    if( prop_get( LOG_SEEKSPOT ) )
    {
        let msg = t_seekzone1_show_msg.shift();
        if( msg )
        {
            seekspot_caption
                = (seekspot_caption   ==   seekspot_U)
                ? (above_H < (page_H/4)) ? seekspot_D : seekspot_U
                : (below_H < (page_H/4)) ? seekspot_U : seekspot_D
            ;

            let empty_caption = (seekspot_caption == seekspot_D) ? seekspot_U : seekspot_D;
            empty_caption.innerHTML = "";

/*{{{
            if(seekspot_caption == seekspot_U) { add_el_class(seekzone,CSS_CAPTION_U); del_el_class(seekzone,CSS_CAPTION_D); }
            else                               { del_el_class(seekzone,CSS_CAPTION_U); add_el_class(seekzone,CSS_CAPTION_D); }
}}}*/
            let ccx = (++t_seekzone1_show_msg_num) % 10;
log("SHOW_SEEKZONE %c"+t_seekzone1_show_msg_num +"%c"+ msg, lbH+lfX[ccx], lbH+lf9);
            seekspot_caption.innerHTML
                = "<pre><em class='big cc"+ccx+"'>"+t_seekzone1_show_msg_num+"</em> "+(msg ? ("<em class='big cc7'>"+msg+"</em>") : "")
                +          (prop_get( PIN_SEEKSPOT ) ? " <em class='cc8' style='float:right;'>"+SYMBOL_PUSH_PIN+"</em>" : "")
                + LF+     ".. WH ["  + window.innerWidth +" "+ window.innerHeight +"]"
                +         ".. SEEK ["+ onSeekXYL.x       +" "+ onSeekXYL.y        +"]"
                +         ".. XY ["  + onDown_XY.x       +" "+ onDown_XY.y        +"]"
                + LF + "-----------------------------------------------------------"
                + LF + t_log_get_ui_status()
                + LF + t_log_get_ev_status()
                + "</pre>"
            ;

            /* post next message */
            if( t_seekzone1_show_msg.length)
                t_seekzone1_show_timeout = setTimeout(t_seekzone1_show_handler, SHOW_SEEKZONE_DELAY);
        }
    }
    else {
        seekspot_U.style.display = "none";
        seekspot_D.style.display = "none";
    }
    /*}}}*/
};
/*}}}*/

/*_ t_seekzone1_add_onDown_XY {{{*/
let t_seekzone1_add_onDown_XY = function()
{
    let x = onDown_XY.x;
    let y = onDown_XY.y;
/*{{{*/
let   caller = "t_seekzone1_add_onDown_XY";
/*{{{
if(!is_a_DOM_LOAD_featured_function(caller)) return;
}}}*/
let log_this = LOG_MAP.T6_SLOT;

if( log_this) t_log_event_status(caller, lf1);
if( log_this) log("%c"+SYMBOL_BULB+"%c onWork_EL %c "+ get_id_or_tag(onWork_EL)+"%c container_selected %c "+ get_id_or_tag(container_selected)+"%c onSeekXYL %c "+onSeekXYL.x+" "+onSeekXYL.y
                  ,lbb+lf2         ,lbL         ,lbR+lf4                        ,lbL                  ,lbR+lf4                                 ,lbL         ,lbR+lf4                         );
/*}}}*/

    if(t_hide_seekzone_timer ) { clearTimeout(t_hide_seekzone_timer); t_hide_seekzone_timer = null; }

    seekzone.style.display = "block";

    seekzone.style.left    = (x                )+"px";
    seekzone.style.top     = (y                )+"px";
    seekzone.style.width   = (  SEEKSPOT_W_MIN )+"px";
    seekzone.style.height  = (  SEEKSPOT_H_MIN )+"px";

    del_el_class(seekzone, CSS_ON_CONTAINER);

    seekzone.innerHTML     = "";

    add_el_class(seekzone, CSS_PRESSED);
/*{{{
logXXX("seekzone %c "+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/
/*_ t_seekzone2_add_misclick {{{*/
let t_seekzone2_add_misclick = function(pressMS, misclick_MS)
{
/*{{{
logBIG("t_seekzone2_add_misclick", lf2);
}}}*/
/*{{{
    if(!is_a_DOM_LOAD_featured_function("t_seekzone2_add_misclick") ) return;
}}}*/

    if     (pressMS < misclick_MS * 0.25) set_el_class_removing(seekzone, CSS_MISCLICK1, CSS_SEEKZONE_ARRAY);
    else if(pressMS < misclick_MS * 0.50) set_el_class_removing(seekzone, CSS_MISCLICK2, CSS_SEEKZONE_ARRAY);
    else if(pressMS < misclick_MS * 0.75) set_el_class_removing(seekzone, CSS_MISCLICK3, CSS_SEEKZONE_ARRAY);
    else                                  set_el_class_removing(seekzone, CSS_MISCLICK , CSS_SEEKZONE_ARRAY);

/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/
/*_ t_seekzone2_add_dblclick {{{*/
let t_seekzone2_add_dblclick = function(pressMS, misclick_MS)
{
/*{{{
logBIG("t_seekzone2_add_dblclick", lf6);
}}}*/
/*{{{
    if(!is_a_DOM_LOAD_featured_function("t_seekzone2_add_dblclick") ) return;
}}}*/

    set_el_class_removing(seekzone, CSS_DBLCLICK, CSS_SEEKZONE_ARRAY);

/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/
/*_ t_seekzone3_add_longpress  {{{*/
let t_seekzone3_add_longpress = function()
{
/*{{{
logBIG("t_seekzone3_add_longpress", lf7);
}}}*/
/*{{{
    if(!is_a_DOM_LOAD_featured_function("t_seekzone3_add_longpress") ) return;
}}}*/

    set_el_class_removing(seekzone, CSS_LONGPRESS, CSS_SEEKZONE_ARRAY);

/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/

/*_ t_seekzone1_ON_GUTTER_XYWH {{{*/
let t_seekzone1_ON_GUTTER_XYWH = function(x, y, w, h)
{
/*{{{
logXXX("%c t_seekzone1_ON_GUTTER_XYWH(XY["+x+" "+y+"] WH["+w+" "+h+"])", lbH+lf1);
}}}*/
    if(!seekzone) return;

    if(t_hide_seekzone_timer ) { clearTimeout(t_hide_seekzone_timer); t_hide_seekzone_timer = null; }

    seekzone.style.display = "block";
    seekzone.style.left    = x +"px";
    seekzone.style.top     = y +"px";
    seekzone.style.width   = w +"px";
    seekzone.style.height  = h +"px";

    del_el_class(seekzone, CSS_ON_CONTAINER);
    add_el_class(seekzone, CSS_GUTTER);
};
/*}}}*/
/*_ t_seekzone4_hide {{{*/
let t_seekzone4_hide = function(instant=false)
{
    if(!seekzone                        ) return;
/*{{{
    if( seekzone.style.display == "none") return;
}}}*/
    if( t_hide_seekzone_timer           ) return;

/*{{{
logXXX("%c t_seekzone4_hide("+instant+")", lbH+lf4);
}}}*/

    if(!instant) { t_hide_seekzone_timer =   setTimeout(t_seekzone4_hide_handler, HIDE_SEEKZONE_DELAY); }
    else         { t_hide_seekzone_timer = null;        t_seekzone4_hide_handler();                     }
/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/
/*_ t_seekzone4_hide_handler {{{*/
let t_seekzone4_hide_handler = function()
{
/*{{{
logXXX("%c t_seekzone4_hide_handler", lbH+lf4);
}}}*/
    t_hide_seekzone_timer = null;

    if(!seekzone) return;

    t_seekzone8_clear_feedback();

    if(!prop_get( SHOW_SEEKZONE ) || !prop_get( PIN_SEEKSPOT ))
    {
        seekzone  .style.display = "none";
        seekspot_U.style.display = "none";
        seekspot_A.style.display = "none";
        seekspot_D.style.display = "none";
    }
/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
};
/*}}}*/
/*_ t_seekzone8_clear_feedback {{{*/
let t_seekzone8_clear_feedback = function()
{
/*{{{
t_log_event_status("t_seekzone8_clear_feedback", lbH+lf8);
}}}*/
    set_el_class_removing(seekzone, "", CSS_SEEKZONE_ARRAY);

/*{{{
logXXX("seekzone %c"+seekzone.className,lbH+lf7);
}}}*/
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
const STAGE_0_NONE   = "stage_0_none";

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

if( log_this && prev_div) log("%c prev_div=["+strip_html(prev_div.innerHTML)+"]", lbH);
    /*}}}*/
    /* prev_stage {{{*/
    let prev_stage
        = has_el_class(prev_div, STAGE_1_INPUT ) ? STAGE_1_INPUT
        : has_el_class(prev_div, STAGE_2_ACTION) ? STAGE_2_ACTION
        : has_el_class(prev_div, STAGE_3_RESULT) ? STAGE_3_RESULT
        :                                          STAGE_0_NONE;
if( log_this) log("......prev_stage=["+ prev_stage +"]");

    /*}}}*/
    /* is_prev_stage_continuation {{{*/
    let ui_status = t_log_get_ui_status();
    let ev_status = t_log_get_ev_status();
    let is_prev_stage_continuation
        =  (        stage == prev_stage    )
        || (   (ui_status == SAME_UI_STATUS)
            && (ev_status == SAME_EV_STATUS));

if( log_this) log("...is_prev_stage_continuation=["+is_prev_stage_continuation+"]");
    /*}}}*/
    /* PREV STAGE MISSED {{{*/
    if( !is_prev_stage_continuation ) {
        let prev_stage_missed = "";
        switch( stage ) {
            case STAGE_1_INPUT : if(prev_stage != STAGE_3_RESULT) prev_stage_missed = STAGE_3_MISSED; break;
            case STAGE_2_ACTION: if(prev_stage != STAGE_3_RESULT) prev_stage_missed = STAGE_3_MISSED; break;
            case STAGE_3_RESULT: if(prev_stage != STAGE_3_RESULT) prev_stage_missed = STAGE_3_MISSED; break;
        }
        if(prev_stage == STAGE_0_NONE)                            prev_stage_missed = STAGE_1_MISSED;

        if(prev_stage_missed)
            add_el_class(prev_div, prev_stage_missed);
    }
    else {
        flip_el_class(   prev_div    , STAGE_3_MISSED); /* no bot radius */
        if(              prev_stage == STAGE_3_RESULT)
            add_el_class(prev_div    , STAGE_3_MORE  ); /* bottom dashed */
    }
    /*}}}*/
    /* THIS STAGE MISSED {{{*/
    let stage_missed = "";
    switch(stage) {
        case     STAGE_0_NONE  :                                          stage_missed = STAGE_3_MISSED+" "+STAGE_3_MISSED;   break;
        case     STAGE_1_INPUT : if( is_prev_stage_continuation )         stage_missed = STAGE_1_MORE  ;                      break;
        case     STAGE_2_ACTION: if(!is_prev_stage_continuation )         stage_missed = STAGE_1_MISSED;                      break;
        case     STAGE_3_RESULT: if(!is_prev_stage_continuation )         stage_missed = STAGE_1_MISSED+" "+STAGE_2_MISSED;   break;
    }
if( log_this) log("...stage_missed=["+stage_missed+"]");
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
    let title = strip_html(ui_status + LF + ev_status);

    /*}}}*/
    /* message {{{*/
    t_fly_add("<div class='cc"+div_ccX+" "+stage+" "+stage_missed+"' title='"+title+"'>"+symbol+" "+msg+"</div>");

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
        :                                          STAGE_0_NONE;
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
/* INFO LOG {{{*/
/*_ t_log_behavior {{{*/
let t_log_behavior = function()
{
    /* activate doc playground or tool transcript */
    if(!t_doc_div_clear("doc_log_div") )
        t_tools_panel_select(transcript2);

    t_clear();
    t9_load_BEHAVIOR();
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
    html += "<br>SAMPLE=<div class='eso_div'>"+             sample                 +"</div>";
    html += "RESULT=<div class='eso_div'>"+ get_first_word( sample, "t_log_regex") +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>get_first_word:</em>"; /*{{{*/
    sample += "--- !! @@ ## $$ %% ~~ ^^ ** (( ))"+          sample;
    html += "<br>SAMPLE=<div class='eso_div'>"+             sample                 +"</div>";
    html += "RESULT=<div class='eso_div'>"+ get_first_word( sample, "t_log_regex") +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>get_word_at_offset:</em>"; /*{{{*/

    let ruler_tens = "_________1_________2_________3_________4_________5_________6_________7_________8_________9_______100_______110___";
    let ruler_unit = "123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123";
    let ruler_off  = "|_|_____|___|_____|___|_____|___|__|_|_____|___|_____||___|||______|___|___________________________________|___||";
    sample         = "Le papillon qui est la forme 'adulte' de la chenille, éclos durant l'été entre juin et septembre selon le climat.";

    if( !IN_WEBVIEW ) ruler_off = vbar_to_up_arrow(           ruler_off );
/*
sample = character_entities_to_char( sample );
sample = character_entities_to_hex ( sample );
*/
/*

dom_util.js:545 Le papillon qui est la forme 'adulte' de la chenille, ?clos durant l'?t? entre juin et septembre selon le climat.
dom_util.js:552 Le XXXaXXXillon qui est la forme 'adulte' de la chenille, ?clos durant l'?t? entre juin et seXXXtembre selon le climat.


*/
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
    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample    +"</div>";
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

    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample         +"</div>";
    html += "RESULT=<div class='eso_div'>"+  trim_empty_lines(  sample, false) +"</div>";

    /*}}}*/
    html += "<hr><em class='cc1'>trim_empty_lines(alnum_filter=true):</em>"; /*{{{*/
    html += "<br>SAMPLE=<div class='eso_div'>"+                 sample        +"</div>";
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
let t_log_event_status = function(_caller, l_x)
{
/*{{{
    let l_l = l_x ? l_x : (lbL    );
    let l_c = l_x ? l_x : (lbC+lf8);
    let l_r = l_x ? l_x : (lbR+lf8);

    log(  "%c"+ _caller               + LF
        + "%c"+ t_log_get_ui_status() + LF
        + "%c"+ t_log_get_ev_status()
        ,  l_l+lbH
        ,  l_c
        ,  l_r
    );
}}}*/
/*{{{
    let status = {
        ui_status : t_log_get_ui_status(),
        ev_status : t_log_get_ev_status()
    };
    log_key_val(_caller, status);
console.groupCollapsed("%c"+SYMBOL_RIGHT+" "+_caller+" %c STATUS:", lbL+l_x, lbR+l_x);
}}}*/
    let l_l = _caller.includes(LF) ? lbH : lbL;
console.groupCollapsed("%c"+_caller+" %c STATUS ", l_l+l_x, lbR+l_x);
    log_key_val_group("UI", t_log_get_ui_status_object(), lf5, false);
    log_key_val_group("EV", t_log_get_ev_status_object(), lf6, false);
console.trace();
console.groupEnd();

};
/*}}}*/
/*_ t_log_clr_status {{{*/
let t_log_clr_status = function()
{
    t_event_consumed_cause   = "";
    t_preventDefault_caller  = "";
    t_last_ui_status         = "";
    t_last_ev_status         = "";
};
/*}}}*/
/*_ t_log_get_ui_status {{{*/
let t_log_get_ui_status = function()
{
    let caller = "t_log_get_ui_status";

    let o = t_log_get_ui_status_object();

    let ui_status
        = " onWork_EL.......: "+ o.onWork_EL
        +                   " "+ o.ui_details       + LF
        + " onWork_SEEK_TOOL: "+ o.onWork_SEEK_TOOL + LF
        + " onWork_PANEL....: "+ o.onWork_PANEL     + LF
        + " .pivot_PANEL....: "+ o. pivot_PANEL
    ;

    if( t_last_ui_status      != ui_status)
        t_last_ui_status       = ui_status;
    return t_last_ui_status;
};
/*}}}*/
/*_ t_log_get_ev_status {{{*/
let t_log_get_ev_status = function()
{
    let caller = "t_log_get_ev_status";

    let o = t_log_get_ev_status_object();

    let ev_status
        =  "EVENT CAPTURED BY "+ o.captured_by    + LF
        +  "EVENT CONSUMED BY "+ o.consumed_by    + LF
        +  ".....................has_moved: "+ o.has_moved                   + LF
        +  "...has_been_scrolled_by_script: "+ o.has_been_scrolled_by_script + LF
        +  "................window.scrollY: "+ o.window_scrollY              + LF
        +  ".....................onSeekXYL: "+ o.onSeekXYL                   + LF
        +                                      o.onSeek_XY_label
    ;

    if( t_last_ev_status  != ev_status)
        t_last_ev_status   = ev_status;
    return t_last_ev_status;
};
/*}}}*/
/*_ t_log_get_ui_status_object {{{*/
let t_log_get_ui_status_object = function()
{
    let caller = "t_log_get_ui_status_object";

    /* SEEK TOOL */
    let ui_details  = "";
    if(                   (onWork_SEEK_TOOL    )) { ui_details  = "A SEEK TOOL ("+get_n_lbl(onWork_SEEK_TOOL)+")"; }
    else if(              (onWork_MOVABLE_CHILD)) { ui_details  = "A MOVABLE CHILD"; }
    else if(t_is_onSeekEL(onWork_EL           )) { ui_details  = "A SEEK EL"      ; }

    if(ui_details && t_seeker_PU_is_active()) {
        let on_off_screen
            = t_node_is_off_screen(seeker_PU)
            ? "OFF SCREEN" : "ON SCREEN";        ui_details += " .. seeker_PU "+ on_off_screen;
    }

    /* SOME TOOL */
    if(!ui_details)
    {
        if(t_is_a_tool_el ( onWork_EL, caller ))
        {
            ui_details
                = (onWork_EL.tagName != "DIV") ? "["+ onWork_EL.textContent +"]"
                : (onWork_EL == target_tool  ) ? "A TARGET TOOL"
                :                                "A TOOL BAG"
            ;
        }
        else {
            ui_details  = "NOT A TOOL";
        }
    }

    let ui_status_object
        = { onDown_EL           :  get_n_lbl( onDown_EL           )
          , onWork_EL           :  get_n_lbl( onWork_EL           )
          , ui_details          :             ui_details
          , onWork_PANEL        :  get_n_lbl( onWork_PANEL        )
          , onWork_SEEK_TOOL    :  get_n_lbl( onWork_SEEK_TOOL    )
          , onWork_EL_last_used :  get_n_lbl( onWork_EL_last_used )
          , target_tool         :  get_n_lbl( target_tool         )
          , pivot_PANEL         :  get_n_lbl( pivot_PANEL         )
        };

/*{{{
log_key_val("ui_status_object", ui_status_object)
}}}*/
    return ui_status_object;
};
/*}}}*/
/*_ t_log_get_ev_status_object {{{*/
let t_log_get_ev_status_object = function()
{
    let caller = "t_log_get_ev_status_object";

    let ev_status_object
        = {                 captured_by  : (t_preventDefault_caller ? (t_preventDefault_caller                                                      ) :   "")
          ,                 consumed_by  : (t_event_consumed_cause  ? (t_event_consumed_cause                                                       ) :   "")
          ,                   has_moved  :                            (has_moved                   ? has_moved.replace(":",":"+LF+SYMBOL_RIGHT_ARROW) : "NO")
          , has_been_scrolled_by_script  :                            (has_been_scrolled_by_script ? has_been_scrolled_by_script                      : "NO")
          ,              window_scrollY  :                             window.scrollY
          ,                   onSeekXYL  : "<em class='cc8'>"+strip_CR_LF(onSeekXYL.label)+"</em> XY=["+onSeekXYL.x+" "+onSeekXYL.y+"]"
        };

    if(t_preventDefault_caller != "")
        ev_status_object["t_preventDefault_caller"] = t_preventDefault_caller;

/*{{{
log_key_val("ev_status_object", ev_status_object)
}}}*/
    return ev_status_object;
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
    /* [t_fly] {{{*/
    if(    LOG_MAP.EV7_DISPATCH
       && (LOG_MAP.EV8_FLOATLOG || fly_log_checked)
      ) {
        let stage
            = (log_class == "log_sep_top") ? STAGE_1_INPUT
            : (log_class != "log_sep_bot") ? STAGE_2_ACTION
            : /*.............log_sep_bot..*/ STAGE_3_RESULT
        ;
        t_fly_add("<div class='"+stage+"'>"+html+"</div>");
    }
    /*}}}*/
/*{{{
logXXX("t_log_transcript");
logXXX("...div_id....................=["+ div_id    +"]");
logXXX("...log_class.................=["+ log_class +"]");
logXXX("...html......................=["+ html      +"]");
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
/*{{{*/
const DOC_EVT_DIV_EMPTY  = "<span style='font-size:500%;'>"+SYMBOL_GEAR+"</span>";
const DOC_LOG_DIV_EMPTY  = "<span style='font-size:500%;'>"+SYMBOL_BULB+"</span>";
const DOC_EVT_DIV_HEADER = "<span style='font-size:200%;'>"+SYMBOL_GEAR+"</span>";
const DOC_LOG_DIV_HEADER = "<span style='font-size:200%;'>"+SYMBOL_BULB+"</span>";

let   doc_evt_div;
let   doc_log_div;

/*}}}*/
/*_ t_doc_div_clear {{{*/
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

    let doc_div = null;
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
        t_add_closepin_on_panel( doc_div );
    }

    doc_div.innerHTML += html;

    return true;
};
/*}}}*/
/*}}}*/
/*}}}*/

/** FLY */
/*{{{*/
/* LOG FLY {{{*/
/*_ t_fly_pat_off_bak_bin_csv {{{*/
/*{{{*/
let t_log_pat_off_bak_bin_csv_prev;

/*}}}*/
let t_fly_pat_off_bak_bin_csv = function(phase_update_pushed_staged, have_want_done)
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
        log("t_fly_pat_off_bak_bin_csv: BACKSTAGE PHASE ["+phase_update_pushed_staged+"]");
        break;
    }
    /*}}}*/
    /* t_fly {{{*/
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

    t_fly( phase_update_pushed_staged + html);
    /*}}}*/

/*{{{
csv_log(bak_csv, phase_update_pushed_staged+": bak_csv [x"+csv_count(bak_csv)+"] ")
if(log_this) if(sel_csv) csv_log(sel_csv, "sel_csv [x"+csv_count(sel_csv)+"] "); else log("%c sel_csv [x"+csv_count(sel_csv)+"] %c UNCHANGED ["+sel_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(pat_csv) csv_log(pat_csv, "pat_csv [x"+csv_count(pat_csv)+"] "); else log("%c pat_csv [x"+csv_count(pat_csv)+"] %c UNCHANGED ["+pat_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(off_csv) csv_log(off_csv, "off_csv [x"+csv_count(off_csv)+"] "); else log("%c off_csv [x"+csv_count(off_csv)+"] %c UNCHANGED ["+off_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bak_csv) csv_log(bak_csv, "bak_csv [x"+csv_count(bak_csv)+"] "); else log("%c bak_csv [x"+csv_count(bak_csv)+"] %c UNCHANGED ["+bak_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bin_csv) csv_log(bin_csv, "bin_csv [x"+csv_count(bin_csv)+"] "); else log("%c bin_csv [x"+csv_count(bin_csv)+"] %c UNCHANGED ["+bin_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(alt_csv) csv_log(alt_csv, "alt_csv [x"+csv_count(alt_csv)+"] "); else log("%c alt_csv [x"+csv_count(alt_csv)+"] %c UNCHANGED ["+alt_csv+"]", lbF+lb9, lbF+lb0);
}}}*/
};
/*}}}*/
/*_ t_fly {{{*/
let t_fly = function(html)
{
/*{{{
logXXX("%c t_fly %c"+strip_html(html), lbL+lf2, lbR+lf2);
}}}*/
    /* TODO log("%c "+html+" ", lbF+lb0);*/

    t_fly_add("<div class='stage_0_log'>"+ html +"</div>");
};
/*}}}*/
/*_ t_fly_add {{{*/
/*{{{*/
let T_CLR_FLY_DIV_POSTPONED_DELAY =  500;
let T_CLR_FLY_DIV_CLEANUP_DELAY   = 3000; /* can be shortened by user with a click on any [t_log_stage_msg] item */
let t_clr_fly_div_postponed = false;
/*}}}*/
let t_fly_add = function(innerHTML)
{
    if(!innerHTML) return;
    if(!fly_div  ) return;

    fly_div.insertAdjacentHTML("beforeend", innerHTML);

    t_log_onchange();
};
/*}}}*/
/*_ t_fly_set {{{*/
let t_fly_set = function(innerHTML)
{

    t_clear_panel_pined_innerHTML( fly_div );

    fly_div.innerHTML = innerHTML;

    t_log_onchange();
};
/*}}}*/
/*_ t_fly_clr {{{*/
/*{{{*/
const T_FLOATLOG_STACK_MAX = 16;
let t_log_clr_innerHTML_timer;

/*}}}*/
let t_fly_clr = function()
{
    /* clearTimeout {{{*/
    t_fly_clr_cancel();

    if(!fly_div.innerHTML) return;
    /*}}}*/
    /* MARK "removing" entries .. (beyond T_FLOATLOG_STACK_MAX) {{{*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked)
    {
        let more_on_stage = false;
        let      closepin = get_el_child_with_class(fly_div, CSS_CLOSEPIN);
        let    next_child =                                  (closepin ? 1 : 0);
        let    stack_size = fly_div.childNodes.length      - (closepin ? 1 : 0);

/*{{{
logXXX(".....closepin=["+ get_id_or_tag(closepin) +"]");
logXXX("...next_child=["+ next_child              +"]");
logXXX("...stack_size=["+ stack_size              +"]");
}}}*/

        let removing_count = 0;
        while((stack_size > T_FLOATLOG_STACK_MAX) || (more_on_stage && (stack_size > 0)))
        {
            let child  = fly_div.childNodes[next_child++];
            if( child == closepin) continue;

            add_el_class(child, CSS_REMOVING);
            removing_count += 1;

            --stack_size;
            more_on_stage
                =        has_el_class(fly_div.childNodes[next_child], STAGE_1_MORE  )
                ||       has_el_class(fly_div.childNodes[next_child], STAGE_3_MORE  )
                || (    !has_el_class(fly_div.childNodes[next_child], STAGE_1_INPUT )
                    &&  !has_el_class(fly_div.childNodes[next_child], STAGE_1_MISSED))
            ;
        }
/*{{{
logXXX("t_fly_clr: fly_div.childNodes.length=["+fly_div.childNodes.length+"]");
}}}*/
        if(removing_count > 0)
            t_log_clr_innerHTML_timer = setTimeout(t_fly_clr_handler, T_CLR_FLY_DIV_CLEANUP_DELAY);
    }
    /*}}}*/
    /* OR JUST FADE AND POST CLEANUP HANDLER {{{*/
    else {
        let fading_count = 0;
        for(let i=0; i < fly_div.childNodes.length; ++i) {
            add_el_class(fly_div.childNodes[i], CSS_FADING);
            fading_count += 1;
        }
/*
log("t_clr_fly_div_postponed = "+t_clr_fly_div_postponed);
*/
        let delay = t_clr_fly_div_postponed
            ?       T_CLR_FLY_DIV_POSTPONED_DELAY
            :       T_CLR_FLY_DIV_CLEANUP_DELAY;
        if(fading_count > 0)
            t_log_clr_innerHTML_timer   = setTimeout( t_fly_clr_handler, delay);
    }
    /*}}}*/
};
/*}}}*/
/*_ t_log_clr_innerHTML_is_pending {{{*/
let t_log_clr_innerHTML_is_pending = function()
{
    return (t_log_clr_innerHTML_timer != null);
};
/*}}}*/
/*_ t_fly_clr_cancel {{{*/
let t_fly_clr_cancel = function()
{
    if(!t_log_clr_innerHTML_timer ) return;

    clearTimeout( t_log_clr_innerHTML_timer );
    /*.........*/ t_log_clr_innerHTML_timer = null;
};
/*}}}*/
/*_ t_fly_clr_div {{{*/
let t_fly_clr_div = function(e_target)
{
/*{{{
logXXX("%c t_fly_clr_div: %c e_target=["+get_n_lbl(e_target)+"]", lbL, lbR+lf9);
}}}*/
    /*
     * CLEAR FROM TOP    .. removing old history
     * CLEAR FROM BOTTOM .. shaving recent history
     * ....................(up to some older specific stage of interest)
     */
    let fly_div_child_nb = fly_div.childNodes.length;
    if(!fly_div_child_nb) return;

    let last_child_clicked = (e_target == fly_div.childNodes[fly_div_child_nb - 1]);
/*{{{
logXXX("...last_child_clicked=["+last_child_clicked+"]");
}}}*/

    if( last_child_clicked ) t_fly_clr_bot();
    else                     t_fly_clr_top();
};
/*}}}*/
/*_ t_fly_clr_top {{{*/
let t_fly_clr_top = function()
{
/*{{{
logXXX("%c t_fly_clr_top", lb5);
}}}*/
    let stack_size = fly_div.childNodes.length;
    if( stack_size == 0) return;

    let more_on_stage = false;
    let      closepin = get_el_child_with_class(fly_div, CSS_CLOSEPIN);
    let    next_child =                                   closepin ? 1 : 0;
        let removing_count = 0;
    do {
        let child  = fly_div.childNodes[next_child++];
        if( child == closepin) continue;
        add_el_class(child, CSS_REMOVING);
            removing_count += 1;

        --stack_size;
        child     = fly_div.childNodes[next_child];
        more_on_stage
            =        has_el_class(child, STAGE_1_MORE  )
            ||       has_el_class(child, STAGE_3_MORE  )
            || (    !has_el_class(child, STAGE_1_INPUT )
                &&  !has_el_class(child, STAGE_1_MISSED))
        ;
    }
    while(more_on_stage && (stack_size > 0));
/*{{{
logXXX("t_fly_clr_top: fly_div.childNodes.length=["+fly_div.childNodes.length+"]");
}}}*/

    if(removing_count > 0)
        t_log_clr_innerHTML_timer = setTimeout(t_fly_clr_handler, 0);
};
/*}}}*/
/*_ t_fly_clr_bot {{{*/
let t_fly_clr_bot = function()
{
/*{{{
logXXX("%c t_fly_clr_bot", lb6);
}}}*/
    let stack_size = fly_div.childNodes.length;
    if( stack_size == 0) return;

    let more_on_stage = false;
    let      closepin = get_el_child_with_class(fly_div, CSS_CLOSEPIN);
    let    prev_child = stack_size - 1;
        let removing_count = 0;
    do {
        let child  = fly_div.childNodes[prev_child--];
        if( child == closepin) continue;
        add_el_class(child, CSS_REMOVING);
            removing_count += 1;

        --stack_size;
        child     = fly_div.childNodes[prev_child];
        more_on_stage
            =        has_el_class(child, STAGE_3_RESULT) /* last of previous bunch */
            ||      !has_el_class(child, STAGE_3_MISSED)
            &&      !has_el_class(child, STAGE_0_NONE  ) /* stand-alone */
        ;
    }
    while(more_on_stage && (stack_size > 0));
/*{{{
logXXX("t_fly_clr_bot: fly_div.childNodes.length=["+fly_div.childNodes.length+"]");
}}}*/

    if(removing_count > 0)
        t_log_clr_innerHTML_timer   = setTimeout(t_fly_clr_handler, 0);
};
/*}}}*/
/*_ t_fly_clr_handler {{{*/
let t_fly_clr_handler = function(_caller="timer")
{
/*{{{*/
let log_this = LOG_MAP.EV8_FLOATLOG;

if( log_this) log("t_fly_clr_handler .. CALLED BY "+ _caller);
/*}}}*/

    /* clearTimeout {{{*/
    t_fly_clr_cancel();

    /*}}}*/
    /* POSTPONE cleanup .. f(some onWork_EL selected) {{{*/
    if(/*TODO (_caller == "timer") &&*/ (onWork_EL != null))
    {
if( log_this) log("HOTSPOT CLEANUP POSTPONED BY %c"+get_n_lbl(onWork_EL), lbF+lb0);
        t_clr_fly_div_postponed   = true;
        t_log_clr_innerHTML_timer = setTimeout( t_fly_clr_handler, T_CLR_FLY_DIV_POSTPONED_DELAY);

        return;
    }
/*
log("%c HOTSPOT CLEANUP NOT POSTPONED", lbF+lb0);
*/
    /*}}}*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) {
        /* REMOVE "removing" entries {{{*/
        let child_removed;
let count =              fly_div.childNodes.length;
        for(let i=0; i < fly_div.childNodes.length; i += (child_removed ? 0 : 1))
        {
            child_removed = false;
            let child = fly_div.childNodes[i];
            if( has_el_class(child, CSS_REMOVING) )
            {
                fly_div.removeChild(child);
                child_removed = true;
/*{{{
log("#"+i+" / "+count+" ....removed: "+get_id_or_tag(child))
}}}*/
         }
         else {
/*{{{
log("#"+i+" / "+count+" not removed: "+get_id_or_tag(child))
}}}*/
            }
        }
        /*}}}*/
/*{{{
logXXX("t_fly_clr_handler: fly_div.childNodes.length=["+fly_div.childNodes.length+"]");
}}}*/
        if(fly_div.childNodes.length < 2) {
            let closepin = get_el_child_with_class(fly_div, CSS_CLOSEPIN);
            if( closepin ) {
/*{{{
logXXX("REMOVING LONE CLOSEPIN");
}}}*/
                fly_div.removeChild( closepin );
            }
        }
    }
    else {
        /* DO THE CLEANUP {{{*/
if( log_this) log("HOTSPOT CLEANUP TRIGGERED BY "+ _caller+"");

        t_clr_fly_div_postponed   = false;
        t_fly_set("");

        /*}}}*/
    }

};
/*}}}*/
/*}}}*/
/*}}}*/

/** TARGET */
/*{{{*/
/* DIRECTION {{{*/
const CSS_LAYOUT_NE             = "layout_NE";
const CSS_LAYOUT_NW             = "layout_NW";
const CSS_LAYOUT_SE             = "layout_SE";
const CSS_LAYOUT_SW             = "layout_SW";

const CSS_POINT_EE              = "point_EE";
const CSS_POINT_SE              = "point_SE";
const CSS_POINT_SW              = "point_SW";
const CSS_POINT_WW              = "point_WW";
const CSS_POINT_NW              = "point_NW";
const CSS_POINT_NE              = "point_NE";
const CSS_POINT_00              = "point_00";
const CSS_POINT_XX
    = [   CSS_POINT_EE
        , CSS_POINT_SE
        , CSS_POINT_SW
        , CSS_POINT_WW
        , CSS_POINT_NW
        , CSS_POINT_NE
        , CSS_POINT_00
    ];

const CSS_ROTATE_NE             = "rotate_NE";
const CSS_ROTATE_NW             = "rotate_NW";
const CSS_ROTATE_SE             = "rotate_SE";
const CSS_ROTATE_SW             = "rotate_SW";
/*}}}*/
/* .. (LOG_MAP T3_LAYOUT EV3_UP) {{{*/
const TARGET_MAX              = 10;
const TARGET_SEL_TEXT_LEN_MAX = 128;

let target_tool;
/*}}}*/
/*_ [target_tools_map] ARRAY .. set get {{{*/

let target_tools_map = [];

let target_tools_map_set = function(tt_num, tt)
{
    target_tools_map.push({ tt_num:tt_num , tt:tt });
};

let target_tools_map_get = function(tt_num)
{
    for(let i=0; i < target_tools_map.length; ++i) {
        if(tt_num == target_tools_map[i].tt_num) {
            return   target_tools_map[i].tt    ;
        }
    }
    return null;
};
/*}}}*/
/*_ t_target_tool_sync_pastable {{{*/
let t_target_tool_sync_pastable = function()
{
    let pastable = t_get_current_sel_text();
    for(let tt_num=1; tt_num <= TARGET_MAX; ++tt_num)
    {
        let tt = target_tools_map_get(tt_num);
        if(tt && has_el_class(tt, CSS_PINNED))
            set_el_class_on_off(tt, "pastable", pastable);
    }
};
/*}}}*/
/*_ t_target_tool_set_parked {{{*/
/*{{{*/
const T_SEEKER_SET_PARKED_DELAY = 5000;

let   t_target_tool_set_parked_timer;
/*}}}*/
let t_target_tool_set_parked = function(parked, _caller)
{
/*{{{
                logXXX("t_target_tool_set_parked(parked "+parked+") .. CALLED BY "+_caller)//FIXME_PARKED
}}}*/

/*{{{ //FIXME_PARKED
    if( parked && t_target_tool_all_parked()) return;
    if(!parked && t_target_tool_not_parked()) return;

    log_key_val_group( "t_target_tool_set_parked(parked "+ parked+") .. "+_caller
                       , {                       parked  : parked
                           ,     target_tools_map_length : target_tools_map.length
                           ,   t_target_tool_all_parked  : t_target_tool_all_parked()
                           ,   t_target_tool_not_parked  : t_target_tool_not_parked()
                       }
                       , (parked ? lf8 : lf3)
                       , true
                     );
}}}*/

    if(t_target_tool_set_parked_timer) clearTimeout(t_target_tool_set_parked_timer);
       t_target_tool_set_parked_timer = null;

    /* ALL DONE .. WHEN DEFAULT STABLE STATE RESTORED */
    if( parked && t_target_tool_all_parked()) return;

    let delay = parked
        ?        T_SEEKER_SET_PARKED_DELAY
        :        0
    ;
    t_target_tool_set_parked_timer   =   setTimeout(function() { t_target_tool_set_parked_handler(parked, _caller); }, delay);
};
/*}}}*/
/*//FIXME_PARKED*/
/*_ t_target_tool_all_parked {{{*/
let t_target_tool_all_parked = function()
{
    let    tt =  target_tools_map_get(1);
    return tt ?  has_el_class(tt, "parked") : false
};
/*}}}*/
/*_ t_target_tool_not_parked {{{*/
let t_target_tool_not_parked = function()
{
    let    tt =  target_tools_map_get(1);
    return tt ? !has_el_class(tt, "parked") :  true;
};
/*}}}*/
/*//FIXME_PARKED*/
/*_ t_target_tool_set_parked_handler {{{*/
let t_target_tool_set_parked_handler = function(parked, _caller)
{
/*{{{
log("%c t_target_tool_set_parked_handler(parked "+parked+") .. "+_caller, (parked ? lf8 : lf3))//FIXME_PARKED
}}}*/
    if(!t_target_tool_set_parked_timer) return; /* has been canceled */

    for(let tt_num=1; tt_num <= TARGET_MAX; ++tt_num)
    {
        let tt = target_tools_map_get(tt_num);
        if(tt && has_el_class(tt, CSS_PINNED))
            set_el_class_on_off(tt, "parked", parked);
    }
    /* consume */
    t_target_tool_set_parked_timer = null;

    /* then auto park */
    if(!parked) t_target_tool_set_parked(true, "HANDLER");
};
/*}}}*/
/*_ t_target_get_sel_text {{{*/
let t_target_get_sel_text = function()
{
    let sel_text  = ellipsis(onDown_SEL_TEXT, TARGET_SEL_TEXT_LEN_MAX);

    return sel_text;
};
/*}}}*/
/*_ t_target_tool_new_XY_SEL_TEXT {{{*/
let t_target_tool_new_XY_SEL_TEXT = function(x, y, sel_text)
{
/*{{{*/
let caller = "t_target_tool_new_XY_SEL_TEXT";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"("+sel_text+")");
/*}}}*/

    let tt = t_target_tool_new(x, y);
    if(!tt ) return;

    /* paste selection */
    tt.date_MS = new Date().getTime();
    let    msg = trim_WORDS(sel_text) || sel_text;
    tt.msg     = ellipsis(msg, TARGET_SEL_TEXT_LEN_MAX);

    /* layout pad content */
    t_update_target_tool_pad( tt );

    /* enter lifted mode */
    t_target_tool_set_lifted(true);

    /* MOVE CREATED TARGET */
    t_set_onWork_EL(tt, caller);
    tt.clicked  = "handle";
    add_tool_pointermove_listener(caller);

    /* schedule a storage update */
    t_store_update_post(caller);

    return tt;
};
/*}}}*/
/*  t_target_tool_cycle_dir_class XXX checked by dom_target.html */
/*  t_target_tool_log {{{*/
let t_target_tool_log = function(tt, msg="", lfx)
{
    if(!tt) return;
    log_key_val_group( "target_tools tt_num["+tt.num+"] "+msg
                       , {   tt_num    : tt.num
                           , tt_id     : tt.id
                           , clicked   : tt.clicked
                           , className : tt.className
                           , date_MS   : tt.date_MS+" .. "+new Date(tt.date_MS)
                           , msg       : tt.msg
                           , title     : target_tool.title
                       }
                       , (lfx||lf8)
                       , true
                     );
};
/*}}}*/
/*  t_target_tool_get {{{*/
let t_target_tool_get = function(tt_num)
{
    let tt = target_tools_map_get(tt_num     ); /* FROM CACHE */
    if(!tt) {
        tt =    t_add_target_tool(tt_num,"tt"); /* CREATE NEW */
        target_tools_map_set     (tt_num, tt ); /* ADD CACHED */

/*{{{
t_log_panel_style_zIndex(tt, "TT GET: "+tt.num);
}}}*/
    }
    return tt;
};
/*}}}*/
/*  t_target_tool_new {{{*/
let t_target_tool_new = function(fixed_x, fixed_y)
{
/*{{{*/
let   caller = "t_target_tool_new("+fixed_x+", "+fixed_y+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* PICK NOT PINNED [tt_num] {{{*/
    let tt_num;
    for(tt_num = 1; tt_num <= TARGET_MAX; ++tt_num)
    {
        let tt = target_tools_map_get(tt_num);
        if(!tt || !has_el_class(tt, CSS_PINNED))
            break;
    }
    /*}}}*/
    /* WARN [TARGET_MAX] {{{*/
    if(tt_num > TARGET_MAX)
    {
        t_fly_add("<div class='stage_0_log'><em class='cc4'>tt_num > TARGET_MAX</em> .. <em class='big cc2'></div>");
/*{{{
        t_fly("<em class='cc4'>tt_num > TARGET_MAX</em> .. <em class='big cc2'>"+TARGET_MAX+"</em>");
}}}*/
        t_target_tool_feed();

        return;
    }
    /*}}}*/
    /* PLACE NEW OR UNPINNED [tt] {{{*/
    let tt = t_target_tool_get( tt_num );
    add_el_class(tt, "parked");
/*{{{
    t_target_tool_reorder(caller);
}}}*/


    let x = fixed_x + window.scrollX;
    let y = fixed_y + window.scrollY - TARGET_TOOL_HALF_HEIGHT;
/*{{{
    tt.style.left     = window.scrollX + fixed_x+"px";
    tt.style.top      = window.scrollY + fixed_y+"px";
}}}*/
    t_pin_tool_at_XY(tt, x, y);
    t_store_update_post(caller);

    let thumb_p     = 100 * tt.offsetTop / get_page_height();
    let thumb_p_str = get_thumb_p_str(thumb_p);
    tt.title        = thumb_p_str;

    /*}}}*/
    /* CENTER [targe_tool] {{{*/
    t_target_tool_scrollTo(tt_num, fixed_x, fixed_y);

    /*}}}*/
    return tt;
};
/*}}}*/
/*_ t_target_tool_set_lifted {{{*/
let t_target_tool_set_lifted = function(state)
{
    let some_was_changed;
    for(let tt_num=1; tt_num <= TARGET_MAX; ++tt_num)
    {
        let tt = target_tools_map_get(tt_num);
        if(!tt) continue;
        some_was_changed
            =   some_was_changed
            || (state != has_el_class(tt, CSS_LIFTED))
        ;
        set_el_class_on_off(tt, CSS_LIFTED, state);
        if(state) t_update_target_tool_tt_dat(tt);
    }
/*{{{
logXXX("t_target_tool_set_lifted("+state+"): ...return some_was_changed=["+some_was_changed+"]");
}}}*/
    return some_was_changed;
};
/*}}}*/
/*  t_set_target_tool_from_el .. CURRENT [target_tool] {{{*/
let t_set_target_tool_from_el = function(from_el)
{
/*{{{*/
let  caller = "t_set_target_tool_from_el("+get_n_lbl(from_el)+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* new_target_tool {{{*/
    let new_target_tool = get_el_parent_with_class(from_el, CSS_TARGET_TOOL);

    if(!new_target_tool) return false;

    /*}}}*/
    /* previous target_tool {{{*/
    if( target_tool ) del_el_class(target_tool, CSS_SEEK_TARGET);
/*{{{
    if( target_tool ) del_el_class(target_tool, CSS_PRESSED);
    if( target_tool ) setTimeout(function() { del_el_class(target_tool, CSS_PRESSED); }, 250);
}}}*/

    /*}}}*/
    /* CLICK [handle] {{{*/
    target_tool = new_target_tool;

    if( get_el_parent_with_class(from_el, "handle"))
    {
if( log_this) log("%c target_tool CLICK HANDLE", lbH+lf4);

        target_tool.clicked = "handle";
    }
    /*}}}*/
    /* CLICK [pad] {{{*/
    else {
if( log_this) log("%c target_tool CLICK PAD", lbH+lf3);

        if( has_el_class(from_el, "tt_pin") )
            target_tool.clicked = "tt_pin";
        else
            target_tool.clicked = "pad";

        add_el_class(target_tool, CSS_SEEK_TARGET);
        s_clear_last_highlight_slot();
    }
    /*}}}*/
    /* UPDATE [tt_dat] {{{*/
    t_update_target_tool_tt_dat(target_tool);

    /*}}}*/
if( log_this) t_target_tool_log(target_tool, lf9);
    return true
};
/*}}}*/
/*  t_target_tool_unpin_tt_num {{{*/
let t_target_tool_unpin_tt_num = function(tt_num)
{
/*{{{*/
let   caller = "t_target_tool_unpin_tt_num";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+tt_num+")", lbH+lf5);
/*}}}*/
    /* UNPIN tt {{{*/
    for(let i=0; i < target_tools_map.length; ++i)
    {
        if(target_tools_map[i].tt_num == tt_num)
        {
            let  tt = target_tools_map[i].tt;
if( log_this) log("...unchecking tt.num["+tt.num+"] .. tt_num["+tt_num+"] .. tt.id=["+tt.id+"]");

            t_set_CSS_PINNED(tt, false);
            tt.style.display = "none";

            tt.date_MS = 0;

/*{{{
            t_target_tool_reorder(caller);
}}}*/

            t_store_update_post(caller);
            break;
        }
    }
    /*}}}*/
};
/*}}}*/
/*  t_move_seeker_PU_on_target_tool {{{*/
let t_move_seeker_PU_on_target_tool = function(tt)
{
/*{{{
    t_seeker_move_above_XY(seeker_PU, tt.offsetLeft, tt.offsetTop);
}}}*/
/*{{{
    let x_sign = (onMoveDXY.x >= 0) ? 1 : -1;
    let y_sign = (onMoveDXY.y >= 0) ? 1 : -1;

    let x = onDown_XY.x + x_sign * Math.min(32, Math.abs(onMoveDXY.x));
    let y = onDown_XY.y + y_sign * Math.min(32, Math.abs(onMoveDXY.y));
}}}*/

    if(!t_seeker_PU_is_active())
        t_seeker_PU_show();

    let x = tt.offsetLeft - onDown_SCROLL_XY.x;
    let y = tt.offsetTop  - onDown_SCROLL_XY.y;

    t_seeker_move_on_target_tool(tt, x,y);
};
/*}}}*/
/*  t_seek_next_target_tool {{{*/
let t_seek_next_target_tool = function(tt_from, dir=1)
{
/*{{{*/
    let caller = "t_seek_next_target_tool";
let log_this = LOG_MAP.T3_LAYOUT;

/*{{{
logXXX(caller+"("+tt_from.id+" , "+dir+")");
}}}*/
/*}}}*/
    let tt = !dir
        ?    tt_from
        :    t_get_next_pinned_target_tool(tt_from, dir);
    if( tt ) {
        /* [CSS_SEEK_TARGET] ON [tt] {{{*/
if( log_this) log("%c"+caller+"%c"+tt.num, lbL+lf3, lbR+lf4);

        t_set_onWork_EL(tt, caller);

        add_el_class(tt, CSS_SEEK_TARGET);

        t_move_seeker_PU_on_target_tool(tt);

        /*}}}*/
        /* [WINDOW SCROLL TO] NEW CURRENT TARGET TOOL {{{*/
        let tt_num = t_target_tool_get_targetNum_of(tt);
        let   fixed_x = tt.offsetLeft - onDown_SCROLL_XY.x;
        let   fixed_y = tt.offsetTop  - onDown_SCROLL_XY.y;

        t_target_tool_scrollTo(tt_num, fixed_x, fixed_y);
        /*}}}*/
    }
    /* OR HIDE seeker_PU {{{*/
    else if( t_seeker_PU_is_active() )
    {
        t_seeker_PU_hide("instant");
    }
    /*}}}*/
};
/*}}}*/
/*  t_get_next_pinned_target_tool {{{*/
let t_get_next_pinned_target_tool = function(tt_from, dir)
{
/*{{{*/
    let caller = "t_get_next_pinned_target_tool";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* [tt_from] index {{{*/
    if(!dir) return tt_from;

    let idx_from
        = t_target_tool_get_targetNum_of(tt_from)
        + dir /* next */
        - 1   /* make it zero-based to deal with modulo */
    ;

    /*}}}*/
    /* next PINNED {{{*/
    let tt;
    for(let step = 0; step < TARGET_MAX; ++step) /* may wrap */
    {
        let tt_num = 1 + (idx_from + step*dir + TARGET_MAX) % TARGET_MAX;
        tt         = t_target_tool_get(tt_num);

        if( has_el_class(tt, CSS_PINNED) )     break;
        else                               tt = null;
    }
    /*}}}*/
if( log_this) log("%c"+caller+"("+tt_from.id+" dir="+dir+") %c return "+(tt ? tt.num : "null"), lbL+lf9, lbR+(tt ? lf3:lf2));
    return tt;
};
/*}}}*/
/*  t_get_pinned_target_tool_count {{{*/
let t_get_pinned_target_tool_count = function()
{
    let count = 0;
    for(let i=0; i < target_tools_map.length; ++i)
    {
        let  tt    = target_tools_map[i].tt;
        count     += has_el_class(tt, CSS_PINNED) ? 1 : 0;
    }
    return count;
};
/*}}}*/
/*  t_seeker_move_on_target_tool {{{ */
let t_seeker_move_on_target_tool = function(tt, fixed_x, fixed_y)
{
/* {{{*/
let   caller = "t_seeker_move_on_target_tool("+fixed_x+" "+fixed_y+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* [seeker_CU] content {{{*/
    let tt_num = t_target_tool_get_targetNum_of( tt );

    seeker_CU.innerHTML
        = (prop_get(TOOLS_EXTRAS) ? "<sup>"+SYMBOL_LEFT_ARROW+"</sup>" : "")
        + tt_num
    ;
    /*}}}*/
    /* [seeker_CU] style {{{*/
    set_el_class(seeker_CU, "cc"+(tt_num % 10));

    /*}}}*/
/*{{{
    let xy = get_el_xy(tt, caller);

    let x = onDown_XY.x + onMoveDXY.x;
    let y = onDown_XY.y + onMoveDXY.y;

    t_seeker_move_above_XY(seeker_PU, xy.x, xy.y);
}}}*/
    /* center seekerPU at target_tool handle tip */
    fixed_y += TARGET_TOOL_HALF_HEIGHT + seeker_PU.offsetHeight / 6;
    t_seeker_move_above_XY(seeker_PU, fixed_x+onDown_SCROLL_XY.x, fixed_y+onDown_SCROLL_XY.y);
};
/*}}}*/
/*_ t_target_tool_get_targetNum_of {{{*/
let t_target_tool_get_targetNum_of = function(el)
{
    for(let i=0; i < target_tools_map.length; ++i) {
        let tt     = target_tools_map[i].tt;
        if( tt.id == el.id) return tt.num;
    }
    return 0; /* not a tt_num */
};
/*}}}*/
/*  t_target_tool_scrollTo {{{*/
const TARGET_TOOL_HALF_HEIGHT = 36;
let t_target_tool_scrollTo = function(tt_num, fixed_x, fixed_y)
{
/*{{{*/
let   caller = "t_target_tool_scrollTo";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_log_event_status(caller+"(tt_num=["+tt_num+"], fixed_xy=["+fixed_x+" "+fixed_y+"])", lf5);
/*}}}*/
    /* ELECT CURRENT TARGET_TOOL {{{*/
    let tt = t_target_tool_get( tt_num );

    t_set_target_tool_from_el(tt);
/*{{{
    setTimeout(function() { del_el_class(tt, CSS_PRESSED); }, 250);
}}}*/
    /*}}}*/
    /* CENTER [tt] {{{*/
    let xy = get_el_xy(tt, caller);
    let  x = Math.floor(xy.x                      );
    let  y = Math.floor(xy.y + tt.offsetHeight / 2);

    if( !t_is_xy_in_viewport(x, y) )
    {
        let scrollBehavior
            = t_is_xy_near_viewport(x, y)
            ? "smooth"
            : "" /* use current default */
        ;

        x -= w_W / 2;
        y -= w_H / 2;

        x  = Math.max(0, x);
        y  = Math.max(0, y);

        t_window_scrollTo(x, y, scrollBehavior);
    }
    /*}}}*/
};
/*}}}*/
/* CREATE */
/*  t_add_target_tool {{{*/
let t_add_target_tool = function(tt_num, id, zIndex=ZINDEX_TARGET_TOOL_ZERO)
{
/*{{{*/
let   caller = "t_add_target_tool("+tt_num+" id=["+id+"])";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/

    let tt            = document.createElement("DIV");
    tt.num            = 1+ (tt_num-1) % TARGET_MAX; /* (0..9) */
/*{{{
    tt.id             = "target_tool_"+tt_num;
}}}*/
    tt.id             = id+"_"+tt_num;
    tt.className      = CSS_TARGET_TOOL +" fg"+(tt.num % 10);
    tt.style.display  = "none";
    tt.style.position = "absolute";
    tt.style.zIndex   = zIndex + tt_num;

    tt.title          = tt.id;
    tt.innerHTML
        = "<span  class='handle'>&nbsp;"
        + " <span class='tt_dir'>"+SYMBOL_CLOCKWISE_OPEN_CIRCLE+"</span>"
        + "</span>"
        + "<div   class='pad bg"+(tt.num % 10)+"'>"
        +  "<span class='tt_pin'>"+ SYMBOL_TT_PIN +"</span>"
        + "</div>"
    ;

    dom_tools_html.appendChild(tt);

if( log_this) log(caller+"%c"+ tt.id, lbH+lf5);
    return tt;
};
/*}}}*/
/*  t_pin_tt_at_XY_position_date_MS_msg {{{*/
let t_pin_tt_at_XY_position_date_MS_msg = function(tt, x,y ,position,date_MS, msg)
{
    t_pin_tool_at_XY(tt, x,y, position);

    tt.date_MS = date_MS;
    tt.msg     = msg;

    t_set_CSS_PINNED(tt, true);
    tt.style.display = "block";

    /*
     * LOADING ALL PINNED [target_tool]
     * THE CALLER SHOULD TAKE CARE OF THE ORDERING WHEN DONE
     * NEED ORDERING .. CHANGED [PINNED-TIME-DATE]
     */
};
/*}}}*/
/*  t_target_tool_cycle_dir_class XXX checked by dom_target.html */
/*  t_target_tool_cycle_dir_class {{{*/
let t_target_tool_cycle_dir_class = function(tt,dir)
{
/*{{{
logXXX("t_target_tool_cycle_dir_class("+tt.id+", dir=["+dir+"])");
}}}*/
    let prev_class = set_el_class_removing(tt, "", CSS_POINT_XX);
/*{{{
logBIG("...prev_class=["+prev_class+"]");
}}}*/

    let next_class;
    switch(dir)
    {
    default:
    case "CYCLE":
    next_class
        = (prev_class == ""          ) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_SE /* CLOCKWISE */
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_NW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_NE
        : /*____________ CSS_POINT_NE */ CSS_POINT_EE
    ;
    break;

    case    "UP": /* can swtich from SW or SE or EE */
    next_class
        = (prev_class == ""          ) ? CSS_POINT_NE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_NE
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_NW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_NW
        : /*____________ CSS_POINT_NE */ CSS_POINT_NE
    ;
   break;

    case  "DOWN":
    next_class
        = (prev_class == ""          ) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_WW
        : /*____________ CSS_POINT_NE */ CSS_POINT_EE
    ;
   break;

    case "RIGHT":
    next_class
        = (prev_class == ""          ) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_SE
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_EE
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_NE
        : /*____________ CSS_POINT_NE */ CSS_POINT_EE
    ;
      break;

    case  "LEFT":
    next_class
        = (prev_class == ""          ) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_EE) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_SE) ? CSS_POINT_SW
        : (prev_class == CSS_POINT_SW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_WW) ? CSS_POINT_WW
        : (prev_class == CSS_POINT_NW) ? CSS_POINT_WW
        : /*____________ CSS_POINT_NE */ CSS_POINT_NW
    ;
     break;

    }

/*{{{
logBIG("...next_class=["+next_class+"]");
}}}*/

    if(next_class) add_el_class(tt, next_class);

};
/*}}}*/
/*  t_set_target_tool_pointing .. TODO .. [CLEANUP THIS POINT + SWITCH MESS] {{{*/
let t_set_target_tool_pointing = function(tt, pointing_E, pointing_N, switching_N, switching_S, switching_E, switching_W)
{
    /* remove direction className */
    set_el_class_removing(tt, "", CSS_POINT_XX);

    let dir_class;

    if     (switching_N  ) dir_class = pointing_E ? CSS_POINT_NE : CSS_POINT_NW; /* NORTH-SOUTH .. keeping current EAST-WEST */
    else if(switching_S  ) dir_class = pointing_E ? CSS_POINT_SE : CSS_POINT_SW;

    else if(switching_E  ) dir_class = pointing_N ? CSS_POINT_NE : CSS_POINT_SE; /* EAST-WEST   .. keeping current NORTH-SOUTH */
    else /* switching_W */ dir_class = pointing_N ? CSS_POINT_NW : CSS_POINT_SW;

    if(dir_class)        add_el_class(tt, dir_class);

};
/*}}}*/
/* EVENT */
/*  t_target_tool_CB {{{*/
let t_target_tool_CB = function(tt)
{
/*{{{*/
let   caller = "t_target_tool_CB";
let log_this = LOG_MAP.EV3_UP || LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf3);
/*}}}*/
    /* state {{{*/
    let sel_text       = t_get_current_sel_text() || onDown_SEL_TEXT;

    let state_clicked_page     = !onWork_PANEL && !t_is_a_tool_el(tt) && !onWork_SEEK_TOOL;
    let state_tt_feed_deployed = dimm_mask_displayed();

    let state_onTarget         = (target_tool != undefined) &&     (tt  ==  target_tool );
    let state_target_clicked   = (target_tool != undefined) ?               target_tool.clicked  : ""       ;
    let state_clicked_handle   = state_onTarget             &&             (target_tool.clicked == "handle");
    let state_clicked_pad      = (target_tool != undefined) &&             (target_tool.clicked == "pad"   );
    let state_clicked_tt_pin   = (target_tool != undefined) &&             (target_tool.clicked == "tt_pin");
    let state_target_lifted    = (target_tool != undefined) && has_el_class(target_tool,         CSS_LIFTED);

    let state_clicked_tt_feed  = (target_tool != undefined) &&      has_el_class(target_tool,     "tt_feed");

    /*}}}*/
    /* action {{{*/
    let action_tt_pin_unpin            =  state_clicked_tt_pin;
    let action_tt_feed_select          =  state_clicked_tt_feed && !state_clicked_tt_pin;
    let action_pad_selection_paste     = !state_clicked_tt_feed &&  state_target_clicked && (sel_text != "");
    let action_handle_or_lifted_toggle = !state_clicked_tt_feed && (state_target_lifted  ||  state_clicked_handle);
    let action_pad_not_lifted_choose   = !state_clicked_tt_feed &&  state_clicked_pad    && !state_target_lifted;

    /*}}}*/
    /*{{{*/
    if(log_this) {
        if(target_tool)
            t_target_tool_log(target_tool, lf6);

        log_key_val(    "state"
                              , {   sel_text       : "["+ellipsis_short(sel_text)+"]"
                                  , onWork_PANEL           : get_n_lbl(onWork_PANEL)

                                  , state_clicked_page     : state_clicked_page
                                  , state_tt_feed_deployed : state_tt_feed_deployed

                                  , state_onTarget         : state_onTarget
                                  , state_target_clicked   : state_target_clicked
                                  , state_clicked_handle   : state_clicked_handle
                                  , state_clicked_pad      : state_clicked_pad
                                  , state_clicked_tt_pin   : state_clicked_tt_pin
                                  , state_target_lifted    : state_target_lifted

                                  , state_clicked_tt_feed  : state_clicked_tt_feed

                              }
                              , lf5, false
                         );

        log_key_val(    "action"
                              , {   action_tt_pin_unpin            : action_tt_pin_unpin
                                  , action_tt_feed_select          : action_tt_feed_select
                                  , action_pad_selection_paste     : action_pad_selection_paste
                                  , action_handle_or_lifted_toggle : action_handle_or_lifted_toggle
                                  , action_pad_not_lifted_choose   : action_pad_not_lifted_choose
                              }
                              , lf4, false
                         );
    }
    /*}}}*/
    /* transition {{{*/
    let      transition;
    if     ( action_tt_pin_unpin            ) { t_target_tool_unpin_tt_num( target_tool.num    ); transition = "PIN"                +" .. UNPIN TARGET"   ; }
    else if( action_tt_feed_select          ) { t_target_tool_feed_select ( target_tool        ); transition = "FEED"               +" .. STOP CHOOSER"   ; }
    else if( action_pad_selection_paste     ) { t_target_tool_feed        ( target_tool        ); transition = "PAD WITH SELECTION" +" .. PASTE SELECTION"; }
    else if( action_pad_not_lifted_choose   ) { t_target_tool_feed        (                    ); transition = "PAD"                +" .. START CHOOSER"  ; }
    else if( action_handle_or_lifted_toggle ) { t_target_tool_set_lifted  (!state_target_lifted); transition = "HANDLE OR LIFTED"   +" .. TOGGLE LIFTED "+(state_target_lifted ? "OFF" : "ON"); }

    /*}}}*/
    /* NO MORE TARGET .. STOP CHOOSER {{{*/
    if(action_tt_pin_unpin && state_tt_feed_deployed && !t_target_tool_feed_deploy())
    {
        t_target_tool_feed_stop(caller);
        dimm_stop(caller);
    }
    /*}}}*/
if(log_this) log("%c transition .. %c"+(transition ? transition : "NONE"), lbb+lbH+lf4, lbb+lbH+lf6);
    return transition;
};
/*}}}*/
/*  t_update_target_tool_pad {{{*/
const SECONDS_MS =  1000;
const MINUTES_MS =  60 * SECONDS_MS;
const   HOURS_MS =  60 * MINUTES_MS;
const    DAYS_MS =  24 *   HOURS_MS;
const  MONTHS_MS =  30 *    DAYS_MS;
const   YEARS_MS = 365 *  MONTHS_MS;

let t_update_target_tool_pad = function(tt)
{
/*{{{*/
let   caller = "t_update_target_tool_pad";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this)
    log(caller+"%c"+tt.id+"%c tt.num=["+tt.num+"] %c date_MS=["+tt.date_MS+"] %c msg=["+tt.msg+"]"
        ,        lbL+lf8   ,lbC+lf3               ,lbR+lf3                    ,lbH+lf9            );
/*}}}*/
    /* tt_num {{{*/
    let tt_num = (tt.num == 10) ? "X" : tt.num;

    /*}}}*/
    /* tt_msg {{{*/
    let tt_msg = tt.msg || "";

    /*}}}*/
    /* tt_size {{{*/
    let tt_size
        = "weight3 "
        +(    (tt_msg.length <=  5) ? "size4"
            : (tt_msg.length <= 15) ? "size3"
            : (tt_msg.length <= 25) ? "size2"
            :                         "size1"
         );
    /*}}}*/

    let handle = tt.firstElementChild;
    let    pad = handle.nextElementSibling;
/*{{{
    let      c = "RTABSrtabs".substring(tt.num-1,tt.num);
}}}*/
    pad.innerHTML
        =  "<span class='tt_num'>"            + tt_num          +"</span>"
        +  "<span class='tt_pin'>"            + SYMBOL_TT_PIN   +"</span>"
        +  "<span class='tt_msg "+tt_size+"'>"+ tt_msg          +"</span>"
        +  "<span class='tt_dat'>"                              +"</span>"
        +  "<span class='tt_paste'>"          + SYMBOL_TT_PASTE +"</span>"
    ;
    pad.className
        = "pad bg"+(tt.num % 10)
    ;

/*{{{
log_key_val_group( tt.id
                   , {   tt_num : tt_num
                       , tt_size: tt_size
                       , tt_msg : tt_msg
                       , tt_dat : strip_html(tt_dat)
                       , tt_pad : strip_html(pad.innerHTML)
                   }, lf9, false);
t_target_tool_log(tt);
}}}*/

    t_update_target_tool_tt_dat(tt);

    t_store_update_post(caller);
};
/*}}}*/
/*  t_update_target_tool_tt_dat {{{*/
let t_update_target_tool_tt_dat = function(tt)
{
/*{{{*/
let   caller = "t_update_target_tool_tt_dat";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this)
    log(caller+"%c"+tt.id+"%c tt.num=["+tt.num+"] %c date_MS=["+tt.date_MS+"] %c msg=["+tt.msg+"]"
        ,        lbL+lf8   ,lbC+lf3               ,lbR+lf3                    ,lbH+lf9            );
/*}}}*/
    let tt_num = (tt.num == 10) ? "X" : tt.num;

    let delay = "";
    if( tt.date_MS )
    {
        let date   = new Date(tt.date_MS);
        let now    = new Date();

        let diff   = now - date;

        let span = {};
        span["years"  ] =  Math.floor(diff /   YEARS_MS); diff -=   YEARS_MS * span.years;
        span["months" ] =  Math.floor(diff /  MONTHS_MS); diff -=  MONTHS_MS * span.months;
        span["days"   ] =  Math.floor(diff /    DAYS_MS); diff -=    DAYS_MS * span.days;
        span["hours"  ] =  Math.floor(diff /   HOURS_MS); diff -=   HOURS_MS * span.hours;
        span["minutes"] =  Math.floor(diff / MINUTES_MS); diff -= MINUTES_MS * span.minutes;
        span["seconds"] =  Math.floor(diff / SECONDS_MS);

        let dy = span.years;
        let dm = span.months;
        let dd = span.days;
        let dh = span.hours;
        let dn = span.minutes;
        let ds = span.seconds;
        delay = ""
            + " <span>"
            + (dy ? ("<span class='weight1 size1'>"+ dy +"y </span>") : "")
            + (dm ? ("<span class='weight3 size1'>"+ dm +"m </span>") : "")
            + (dd ? ("<span class='weight2 size1'>"+ dd +"d </span>") : "")
            + (dh ? ("<span class='weight3 size3'>"+ dh +"h </span>") : "")
            + (dn ? ("<span class='weight2 size2'>"+ dn +"m </span>") : "")
            + (ds ? ("<span class='weight3 size1'>"+ ds +"s </span>") : "")
            + "</span>"
        ;
    }

    if(delay)
    {
        let handle = tt.firstElementChild;
        let    pad = handle.nextElementSibling;
        let tt_dat = get_el_child_with_class(pad, "tt_dat");
        tt_dat.innerHTML = delay;
/*{{{
logBIG("delay=["+strip_html(delay)+"]");
}}}*/
    }
};
/*}}}*/
/*  t_target_tool_reorder {{{*/
let t_target_tool_reorder = function(_caller)
{
/*{{{*/
let  caller = "t_target_tool_reorder";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"%c CALLED BY "+ _caller, lbL+lf6,lbR+lf6);
/*}}}*/
/*{{{*/
if(log_this) {
    log("%c NOT SORTED ON DATE .. target_tools_map.size=["+target_tools_map.size+"]...", lbb+lf3);

    for(let i=0; i < target_tools_map.length; ++i) {
        let tt_num = target_tools_map[i].num;
        let tt     = target_tools_map[i].tt;
        if(tt.date_MS) log("tt_num=["+tt_num+"] .. tt.date_MS=["+tt.date_MS+"] "+new Date(tt.date_MS));
    }
}
/*}}}*/
    /* Array sort on date {{{*/
    targets = [];
    for(let i=0; i <  target_tools_map.length; ++i)
        targets.push( target_tools_map[i].tt );

    targets
        = targets.sort(
                       function(a,b) {
                           if(!a.date_MS)             return  1; /* undefined a to the   end */
                           if(!b.date_MS)             return -1; /*   defined a to the start */
                           if( a.date_MS > b.date_MS) return  1;
                           if( a.date_MS < b.date_MS) return -1;
                           else                       return  0;
                       }
                      );
    /*}}}*/
    /* renumber collection {{{*/
    target_tools_map = [];
    let tt_num = 0;
    for(let i=0; i < targets.length; ++i)
    {
        let tt = targets[i];
        tt.num =       1+i;
        t_update_target_tool_pad(tt);
        target_tools_map_set(tt.num, tt);
    }
    /*}}}*/
/*{{{*/
if(log_this) {
    log("%c SORTED ON DATE .. targets.length=["+targets.length+"]...", lbb+lf4);

    for(let i=0; i <  target_tools_map.length; ++i) {
        let tt_num =  target_tools_map[i].num;
        let tt     =  target_tools_map[i].tt;
        if( tt.date_MS) log("tt_num=["+tt_num+"] .. tt.num=["+tt.num+"] tt.date_MS=["+tt.date_MS+"] "+new Date(tt.date_MS));
    }
}
/*}}}*/
};
/*}}}*/
/* FEED */
/*  t_target_tool_feed {{{*/
/*{{{*/
let tt_feed_array = [];
let tt_to_feed;
/*}}}*/
let t_target_tool_feed = function(tt_for)
{
/*{{{*/
let   caller = "t_target_tool_feed("+get_n_lbl(tt_for)+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) t_log_event_status(caller, lf7);
/*}}}*/

    if( t_seeker_PU_is_active() )
        t_seeker_PU_hide("instant");

    tt_to_feed
        = (tt_for && !has_el_class(tt_for, "tt_feed")) ? tt_for
        : null;

    if(tt_for)
    {
        t_target_tool_feed_select( tt_for );
    }
    else {
        if(!tt_feed_array.length)
            t_target_tool_feed_init_tt_feed_array();

        dimm_start_target_tool(caller);
        t_target_tool_feed_repin();
        t_target_tool_feed_select(); /* clear TT_FEED_SELECTED */
        t_target_tool_feed_collapse();
        t_target_tool_feed_re_point();
        t_target_tool_feed_deploy();
    }

/* TODO ...deal with CLIPBOARD Promise */
};
/*}}}*/
/*_ t_target_tool_feed_init_tt_feed_array {{{*/
let t_target_tool_feed_init_tt_feed_array = function()
{
    for(let tt_num = 1; tt_num <= 10; ++tt_num)
    {
        let tt = t_add_target_tool(tt_num, "tt_feed", ZINDEX_ABOVE_TOOLS);

        /* overload */
        tt.style.position = "fixed";
        tt.innerHTML
            = "<span  class='handle'>&nbsp;"
            + "</span>"
            + "<div   class='pad bg"+(tt_num % 10)+"'>"
            +  "<span class='tt_pin'>"+ SYMBOL_WASTEBASKET +"</span>"
            + "</div>"
        ;

        add_el_class(tt, "tt_feed");

        tt_feed_array.push(tt);

/*{{{
t_log_panel_style_zIndex(tt, "TT FEED INIT: "+tt.id);
}}}*/
    }
};
/*}}}*/
/*_ t_target_tool_feed_re_point {{{*/
let t_target_tool_feed_re_point = function()
{
/*{{{
logBIG("t_target_tool_feed_re_point");
}}}*/
    for(let tt_num = 1; tt_num <= 10; ++tt_num)
    {
        let tt_feed = tt_feed_array[tt_num-1];

        if     (tt_num < 3) set_el_class_removing(tt_feed, CSS_POINT_NE, CSS_POINT_XX);
        else if(tt_num < 5) set_el_class_removing(tt_feed, CSS_POINT_EE, CSS_POINT_XX);
        else if(tt_num < 6) set_el_class_removing(tt_feed, CSS_POINT_SE, CSS_POINT_XX);
        else if(tt_num < 7) set_el_class_removing(tt_feed, CSS_POINT_SW, CSS_POINT_XX);
        else if(tt_num < 9) set_el_class_removing(tt_feed, CSS_POINT_WW, CSS_POINT_XX);
        else                set_el_class_removing(tt_feed, CSS_POINT_NW, CSS_POINT_XX);
    }
};
/*}}}*/
/*_ t_target_tool_feed_deploy {{{*/
let t_target_tool_feed_deploy = function()
{
/*{{{*/
let caller = "t_target_tool_feed_deploy";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller);
/*}}}*/
/*{{{
}}}*/
    /* [center radius] {{{*/
    t_cache_w_H_w_W_p_H();
    let center_x  = w_W / 2;
    let center_y  = w_H / 2;
    let radius    = Math.min(w_W,w_H) / 4;
/*{{{
logXXX("center ["+center_x+" "+center_y+"] .. radius ["+radius+"]");
}}}*/

    let deg_delta = 360 / 12;
    let deg_start = -90 + deg_delta; /*..............ONE O'CLOCK */
    let rad_delta = deg_delta * Math.PI / 180;
    let rad_start = deg_start * Math.PI / 180;
/*{{{
logXXX("deg_start=["+    deg_start +"]");
logXXX("deg_delta=["+    deg_delta +"]");
logXXX("...rad_delta=["+ rad_delta +"]");
logXXX("...rad_start=["+ rad_start +"]");
}}}*/

    /*}}}*/
/*{{{
if(tt_to_feed) logBIG("tt_to_feed=["+get_n_lbl(tt_to_feed)+"]");
}}}*/
    let tt_feed_deployed = 0;
    for(let tt_num=1; tt_num <= tt_feed_array.length; ++tt_num)
    {
        let        tt_feed = tt_feed_array[tt_num-1];
        if(!tt_feed) continue;
        let    tt_feed_handle = tt_feed.firstElementChild;
        let       tt_feed_pad = tt_feed_handle.nextElementSibling;

        if(tt_to_feed) {
            tt_feed_deployed += t_target_tool_feed_provision(tt_num, tt_feed_handle, tt_feed_pad);
        }
        else {
            tt_feed_deployed += t_target_tool_feed_clone(tt_num, tt_feed_handle, tt_feed_pad);
        }

/* SHOW [CLIPBOARD] {{{
    let clipboard = document.execCommand("paste");
    let clipboard = navigator.clipboard.readText();
    let clipboard = window.getSelection();
}}}*/

        /* t_pin_tool_at_XY(NEW OR LAST) {{{*/
        let rad_angle = rad_start + rad_delta * (tt_num-1);

        let deg_angle = Math.floor(0.5 + rad_angle / Math.PI * 180) % 360;

        let      tt_x = center_x + radius * Math.cos(rad_angle);
        let      tt_y = center_y + radius * Math.sin(rad_angle);
/*{{{
logXXX("...rad_angle=["+rad_angle+"]");
logXXX("...deg_angle=["+deg_angle+"]");
logXXX("... Math.sin(rad_angle)=["+ Math.sin(rad_angle)+"]");
logXXX("...["+tt_x+" "+tt_y+"]");
        tt_feed.style.position = "fixed";
}}}*/
        t_pin_tool_at_XY(tt_feed, tt_x,tt_y);
        tt_feed.style.zIndex = ZINDEX_ABOVE_TOOLS + tt_num;
        /*}}}*/
    }

if( log_this) log(caller+": ...return tt_feed_deployed=["+tt_feed_deployed+"]");
    return tt_feed_deployed;
};
/*}}}*/
/*_ t_target_tool_feed_provision {{{*/
let t_target_tool_feed_provision = function(tt_num, tt_feed_handle, tt_feed_pad)
{
/*{{{*/
let caller = "t_target_tool_feed_provision";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+"(tt_num=["+tt_num+"], tt_feed_handle=["+get_n_lbl(tt_feed_handle)+"], tt_feed_pad=["+get_n_lbl(tt_feed_pad)+"])");
/*}}}*/
    let tt_feed_deployed = 0;
            /* FIRST .. [onDown_SEL_TEXT] {{{*/
            if((tt_num == 1) && onDown_SEL_TEXT)
            {
                /* tt_feed_handle {{{*/
                add_el_class(tt_feed_handle, "size4");
                tt_feed_handle.innerText = SYMBOL_CLIPBOARD;

                /*}}}*/
                /* tt_feed_pad {{{*/
                let msg = t_target_get_sel_text();
                let tt_class
                    =    (msg.length <=  5) ? "size5"
                       : (msg.length <= 10) ? "size4"
                       : (msg.length <= 15) ? "size3"
                       : (msg.length <= 25) ? "size2"
                       :                      "size1"
                     ;

                tt_feed_pad   .innerHTML = "<span class='clipboard "+tt_class+"'>"+msg+"</span>";
                /*}}}*/
                tt_feed_deployed += 1;
            }
            /*}}}*/
            /* SECOND .. CURRENT [tt_to_feed.msg] {{{*/
            else if(tt_num == 2)
            {
                /* tt_feed_handle {{{*/
                if(tt_to_feed) {
                    add_el_class(tt_feed_handle, "size4");
                    let num = (tt_to_feed.num < 10) ? tt_to_feed.num : "X";
                    tt_feed_handle.innerHTML
                        = "<span class='fg"+tt_to_feed.num+"'>"+num+"</span>";
                    tt_feed_deployed += 1;
                }
                /*}}}*/
                /* tt_feed_pad {{{*/

                let tt_to_feed_div      = tt_to_feed.querySelectorAll("DIV")[0];
                let tt_to_feed_msg_span = tt_to_feed_div.lastElementChild;
                let msg                 = tt_to_feed_msg_span.innerHTML;
                let tt_class            = tt_to_feed_msg_span.className;
/*{{{
logXXX("tt_to_feed_div........["+ get_n_lbl(tt_to_feed_div     ) +"]");
logXXX("tt_to_feed_msg_span...["+ get_n_lbl(tt_to_feed_msg_span) +"]");
logXXX("2/10 CURRENT [tt_to_feed.msg]");
logXXX("msg...................["+ msg      +"]");
logXXX("tt_class..............["+ tt_class +"]");
}}}*/
                tt_feed_pad.innerHTML    =  "<span class='"+tt_class+"'>"+ msg +"</span>";
                /*}}}*/
            }
            /*}}}*/
            /* OTHERS .. TODO [tt_num] {{{*/
            else {
                let     num = (tt_num < 10) ? tt_num : "X"      ;
                let flipped = (tt_num <  6) ?     "" : "flipped";
                tt_feed_handle.innerHTML
                    = "<span class='"+flipped+" fg"+tt_num+"'>"+num+".</span>";

                tt_feed_pad.innerHTML
                    =  "<span>TODO</span>";
            }
            /*}}}*/
    return tt_feed_deployed;
};
/*}}}*/
/*_ t_target_tool_feed_clone {{{*/
let t_target_tool_feed_clone = function(tt_num, tt_feed_handle, tt_feed_pad)
{
/*{{{*/
let caller = "t_target_tool_feed_clone";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

if( log_this) log(caller+"(tt_num=["+tt_num+"], tt_feed_handle=["+get_n_lbl(tt_feed_handle)+"], tt_feed_pad=["+get_n_lbl(tt_feed_pad)+"])");
/*}}}*/
    let tt_feed_deployed = 0;
            /* tt_feed_handle .. tt_num {{{*/
            add_el_class(tt_feed_handle, "size4");
            let     num = (tt_num < 10) ? tt_num : "X";
            let flipped = (tt_num <  6) ?     "" : "flipped";
            tt_feed_handle.innerHTML
                = "<span class='"+flipped+" fg"+tt_num+"'>"+num+".</span>";
/*{{{
            if(tt_num > 6) add_el_class(tt_feed_handle, "flipped");
            else           del_el_class(tt_feed_handle, "flipped");
}}}*/
            /*}}}*/
            /* tt_feed_pad .. PINNED-PAD or EMPTY {{{*/
            let tt = target_tools_map_get(tt_num);
            if( tt && has_el_class(tt, CSS_PINNED)) {
                let tt_div       = tt.querySelectorAll("DIV")[0];
                tt_feed_pad.innerHTML    = tt_div.innerHTML;
                tt_feed_deployed += 1;
/*{{{
t_target_tool_log(tt, "is PINNED", lf7);
}}}*/
            }
            else {
                tt_feed_pad.innerHTML   = "";
            }
            /*}}}*/
    return tt_feed_deployed;
};
/*}}}*/
/*_ t_target_tool_feed_collapse {{{*/
let t_target_tool_feed_collapse = function(tt)
{
    /* CHECK DEPLOYED STATE {{{*/
let state_tt_feed_deployed = tt_feed_array.length && dimm_mask_displayed();
if(!state_tt_feed_deployed) return;

/*}}}*/
/* COLLAPSE ONTO [tt_to_feed] or current [target_tool] {{{*/

let css_point_dir = CSS_POINT_00;

/*{{{
if( !has_el_class(tt, CSS_PINNED) ) tt = null;
}}}*/
if( tt )
    css_point_dir
        = has_el_class(tt, CSS_POINT_EE) ? CSS_POINT_EE
        : has_el_class(tt, CSS_POINT_SE) ? CSS_POINT_SE
        : has_el_class(tt, CSS_POINT_SW) ? CSS_POINT_SW
        : has_el_class(tt, CSS_POINT_WW) ? CSS_POINT_WW
        : has_el_class(tt, CSS_POINT_NW) ? CSS_POINT_NW
        : has_el_class(tt, CSS_POINT_NE) ? CSS_POINT_NE
        : ""
;
/*}}}*/
/* DEFAULT TO WINDOW CENTER {{{*/
let x = tt ? (tt.offsetLeft - window.scrollX) : w_W / 2;
let y = tt ? (tt.offsetTop  - window.scrollY) : w_H / 2;

/*}}}*/
/* SET POSITION AND DIRECTION {{{*/
for(let tt_num=1; tt_num<=10; ++tt_num)
{
    let tt_feed             = tt_feed_array[tt_num-1];

    tt_feed.style.left      = x+"px"  ;
    tt_feed.style.top       = y+"px"  ;
    tt_feed.style.zIndex    = ZINDEX_TARGET_TOOL_ZERO;

    set_el_class_removing(tt_feed, css_point_dir, CSS_POINT_XX);
    t_set_CSS_PINNED     (tt_feed, false);
}
/*}}}*/
};
/*}}}*/
/*_ t_target_tool_feed_select {{{*/
/*{{{*/
const TT_FEED_SELECTED  = "tt_feed_selected";

/*}}}*/
let t_target_tool_feed_select = function(tt_feed_to_select)
{
/*{{{*/
let  caller = "t_target_tool_feed_select";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if( log_this) log(caller+"("+get_n_lbl(tt_feed_to_select)+")");
/*}}}*/
for(let tt_num=1; tt_num<=10; ++tt_num)
{
    let tt  = tt_feed_array[tt_num-1];
    if( tt == tt_feed_to_select) add_el_class(tt, TT_FEED_SELECTED);
    else                         del_el_class(tt, TT_FEED_SELECTED);
}
if(tt_feed_to_select)
{
    t_target_tool_feed_stop(caller);
    dimm_stop(caller);
}
};
/*}}}*/
/*_ t_target_tool_feed_stop {{{*/
let t_target_tool_feed_stop = function(_caller)
{
/*{{{*/
let  caller = "t_target_tool_feed_stop";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if( log_this) log(caller+": ...tt_to_feed=["+get_n_lbl(tt_to_feed)+"]");
/*}}}*/
    /* FEED [tt_to_feed] from [selected tt_feed] */
    let tt_seeked_to;

    /* PASTE [sel_text] INTO [tt_to_feed] {{{*/
    if(tt_to_feed)
    {

        /* paste and consume selection */
        tt_to_feed.date_MS = new Date().getTime();
        let sel_text = t_get_current_sel_text() || onDown_SEL_TEXT;

        /* new selection */
        if( sel_text )
        {
            if(tt_to_feed.msg)
                tt_to_feed.msg_bak = tt_to_feed.msg;

            tt_to_feed.msg = trim_WORDS( sel_text ) || sel_text;

if( log_this) log("%c save.current..msg=["+tt_to_feed.msg_bak +"]", lf3);
if( log_this) log("%c change........msg=["+tt_to_feed.msg     +"]", lf4);
        }
        /* empty selection */
        else {
            let current_msg = tt_to_feed.msg;

            /* restore saved */
            if(tt_to_feed.msg_bak) {
                tt_to_feed.msg = tt_to_feed.msg_bak;
if( log_this) log("%c restore saved msg=["+tt_to_feed.msg_bak +"]", lf5);
            }
            else {
                tt_to_feed.msg     = "";
if( log_this) log("%c missing saved msg=["+tt_to_feed.msg_bak +"]", lf2);
            }

            /* save current */
            if( current_msg ) {
                tt_to_feed.msg_bak = current_msg;
if( log_this) log("%c save.current..msg=["+tt_to_feed.msg_bak +"]", lf3);
            }
        }

        t_window_getSelection_removeAllRanges(caller);
        onDown_SEL_TEXT = "";

        t_update_target_tool_pad(tt_to_feed);
    }
    /*}}}*/
    /* OR SEEK TT_FEED_SELECTED [tt_feed] {{{*/
    else if(tt_feed_array.length)
    {
        for(let tt_num=1; tt_num<=10; ++tt_num)
        {
            let tt_feed = tt_feed_array[tt_num-1];
            if(has_el_class(tt_feed, TT_FEED_SELECTED))
            {
                tt_seeked_to = t_target_tool_get( tt_num );
                if( has_el_class(tt_seeked_to, CSS_PINNED) )
                {
                    t_seek_next_target_tool(tt_seeked_to, 0);
                    t_target_tool_feed_collapse(tt_seeked_to);
                }
                else {
                    t_target_tool_feed_collapse();
                }

                setTimeout(t_target_tool_feed_unpin_handler, 1000);

                break;
            }
        }
    }
    /*}}}*/

    if(!tt_seeked_to)
        setTimeout(t_target_tool_feed_unpin_handler, 0);

    t_target_tool_set_lifted(false);

    /* hide tt_feed_array */
};
/*}}}*/
/*_ t_target_tool_feed_unpin_handler {{{*/
let t_target_tool_feed_unpin_handler = function()
{
    if(!tt_feed_array.length) return;

    for(let tt_num=1; tt_num<=10; ++tt_num)
    {
        let              tt = tt_feed_array[tt_num-1];
        t_set_CSS_PINNED(tt , false);
        tt.style.display    = "none";
        tt.style.zIndex     = ZINDEX_ABOVE_TOOLS + tt_num;
    }
};
/*}}}*/
/*_ t_target_tool_feed_repin {{{*/
let t_target_tool_feed_repin = function()
{

    for(let tt_num=1; tt_num<=10; ++tt_num)
    {
        let tt = tt_feed_array[tt_num-1];
        t_set_CSS_PINNED(tt, true);
        tt.style.display = "block";
    }
};
/*}}}*/
/*}}}*/

/* SEEKER */
/*{{{*/
/*{{{*/

let seeker_CD;
let seeker_CU;
let seeker_PD;
let seeker_PU;

let seekzone;
let  seekspot_A;
let  seekspot_U;
let  seekspot_D;
/*}}}*/
/*_ [seeker_PU] .. show hide fade .. sync {{{*/
/*{{{*/
const T_SEEKER_PU_HIDE_LONG_DELAY = 5000;
const T_SEEKER_PU_HIDE_FAST_DELAY = 5000;
const T_SEEKER_PU_FADE_DELAY      = 3000;
const T_SEEKER_SYNC_DELAY         = 500;

let   t_seeker_sync_timer;
let   t_seeker_PU_fade_timer;
let   t_seeker_PU_hide_timer;
/*}}}*/
/*_ t_seeker_sync {{{*/
let t_seeker_sync = function()
{
    if(t_seeker_sync_timer) clearTimeout(t_seeker_sync_timer);
    t_seeker_sync_timer   =   setTimeout(t_seeker_sync_handler, T_SEEKER_SYNC_DELAY);
};

let t_seeker_sync_handler = function()
{
    t_seeker_sync_timer = null;

    if     (  t_seeker_PU_is_active() ) t_seeker_PU_show();
    else if( !scroll_check_timeout    ) t_seekzone4_hide("instant");
};

let t_seeker_sync_is_pending = function()
{
    return (t_seeker_sync_timer != null);
};
/*}}}*/
/*_ t_seeker_PU_show {{{*/
let t_seeker_PU_show = function()
{
    if(logging_EVENTS) log("t_seeker_PU_show");

    if(t_seeker_PU_hide_timer) {
        clearTimeout( t_seeker_PU_hide_timer );
        /*.........*/ t_seeker_PU_hide_timer = null;
    }

    if(t_seeker_PU_fade_timer) {
        clearTimeout( t_seeker_PU_fade_timer );
        /*.........*/ t_seeker_PU_fade_timer = null;
    }

    del_el_class(seeker_PU, CSS_FADING);
    del_el_class(seeker_PU, CSS_HIDING);

/*{{{
    set_el_class_on_off(seeker_PU,  SHOW_SEEKZONE , prop_get( SHOW_SEEKZONE ));
}}}*/

    seeker_PU.style.display = "block";

    /* SCHEDULE AUTO-HIDE */
    t_seeker_PU_hide();
};
/*}}}*/
/*_ t_seeker_PU_hide {{{*/
let t_seeker_PU_hide = function(instant="")
{
/*{{{*/
let   caller = "t_seeker_PU_hide";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if(log_this) log(caller);
/*}}}*/
    if(!t_seeker_PU_is_active() ) return;

    if(t_seeker_PU_hide_timer     ) { clearTimeout(t_seeker_PU_hide_timer); t_seeker_PU_hide_timer = null; }
    if(t_seeker_PU_fade_timer     ) { clearTimeout(t_seeker_PU_fade_timer); t_seeker_PU_fade_timer = null; }

    /*FIXME*/
    let delay
        = instant                   ? 0
        : prop_get( SHOW_SEEKZONE ) ? T_SEEKER_PU_HIDE_FAST_DELAY
        :                             T_SEEKER_PU_HIDE_LONG_DELAY
    ;

/*{{{
logXXX(caller+"("+instant+"): %c delay %c"+delay+"] %c prop_get( SHOW_SEEKZONE ) %c"+prop_get( SHOW_SEEKZONE )+" %c container %c"+container_selected;
    ,                         lbL     ,lbR         ,lbL                              ,lbR                                 ,lbL         ,lbR                   )
}}}*/

    /* HIDE AND FADE TRANSITIONS */
    if( delay ) {
        t_seeker_PU_hide_timer =   setTimeout(t_seeker_PU_hide_handler, delay);
        t_seeker_PU_fade_timer =   setTimeout(t_seeker_PU_fade_handler, T_SEEKER_PU_FADE_DELAY);
    }
    /* HIDE TRANSITON ONLY */
    else {
        t_seeker_PU_hide_handler(instant);
    }

};
/*}}}*/
/*_ t_seeker_PU_fade_handler {{{*/
let t_seeker_PU_fade_handler = function()
{
/*{{{*/
let   caller = "t_seeker_PU_fade_handler";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if(log_this) log(caller);
/*}}}*/

    t_seeker_PU_fade_timer = null;

    add_el_class(seeker_PU, CSS_FADING);
    del_el_class(seeker_PU, CSS_HIDING);
};
/*}}}*/
/*_ t_seeker_PU_hide_handler {{{*/
let t_seeker_PU_hide_handler = function(instant="")
{
/*{{{*/
let   caller = "t_seeker_PU_hide_handler("+instant+")";
let log_this = LOG_MAP.EV2_MOVE || LOG_MAP.T6_SLOT;

if(log_this) log(caller);
/*}}}*/

    if(!instant ) {
if( log_this) log("...t_seeker_PU_hide_timer=["+ t_seeker_PU_hide_timer +"]");
        if(!t_seeker_PU_hide_timer) return;
    }
    t_seeker_PU_hide_timer = null;

    del_el_class(seeker_PU, CSS_FADING);
    add_el_class(seeker_PU, CSS_HIDING);

    seeker_PU.style.display = "none";

    if(!prop_get( SHOW_SEEKZONE ) || !prop_get( PIN_SEEKSPOT ) || dimm_mask_displayed())
    {
        t_seekzone4_hide("instant");
    }
    else {
        seekspot_A.style.display = "none";
/*{{{
        if(!prop_get( LOG_SEEKSPOT ) ) {
            seekspot_U.innerHTML     = "";
            seekspot_D.innerHTML     = "";
        }
}}}*/
    }

    t_seek_clr_container_selected();

    t_seek_slot_num_CLEAR_SELECTED(caller);

    s_clear_last_highlight_slot();
};
/*}}}*/
/*}}}*/
/*_ [seeker_PD] .. show hide {{{*/
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
    t_seeker_PD_hide_timer   =   setTimeout(t_seeker_PD_hide_handler, T_SEEKER_PD_DISPLAY_NONE_DELAY);
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

    t_sync_seek_back(caller);

    del_el_class(seeker_PD, CSS_FADING);
    del_el_class(seeker_PD, CSS_HIDING);

    seeker_PD.style.display = "block";
};
/*}}}*/
/*_ t_seeker_PD_hide_handler {{{*/
let t_seeker_PD_hide_handler = function()
{
    if( !seeker_PD ) return;
    if(logging_EVENTS) log("t_seeker_PD_hide_handler");

    t_seeker_PD_hide_timer = null;

    del_el_class(seeker_PD, CSS_FADING);
    add_el_class(seeker_PD, CSS_HIDING);

    seeker_PD.style.display = "none";

};
/*}}}*/
/*}}}*/
/*_ t_is_onSeekEL {{{ */
let regexp_SELECT_ID = new RegExp("select[0-9]+_[0-9]+");
let t_is_onSeekEL = function(node)
{
/*{{{*/
    if(!node) return false;

    let picked_node = null;
/*}}}*/
    /* ON SEEKER {{{*/
    if((node == seeker_PU) || (node == seeker_CU))/* || (node.id.startsWith("seekzone")))*/
    {
        picked_node = node;
    }
    /*}}}*/
    /* ON SLOT {{{*/
    else {
        for(    picked_node  = node
              ; picked_node != null
              ; picked_node  = picked_node.parentNode
           ) {
            if(       !picked_node.id                          ) continue;
            if( String(picked_node.id).match(regexp_SELECT_ID) )    break;
        }
    }
    /*}}}*/
    let result = (picked_node != null);
/*
logXXX(caller+": ...return "+ result + (picked_node ? " ["+picked_node.id+"]" : ""));
*/
    return result;
};
/* }}} */

/* MOVE */
/*_ t_seeker_move_on_last_highlight_slot_num {{{*/
let t_seeker_move_on_last_highlight_slot_num = function()
{
    if(LOG_MAP.S3_SLOT) log("t_seeker_move_on_last_highlight_slot_num");

    let last_highlight_slot  = s_get_last_highlight_slot();
    if( last_highlight_slot >= 0)
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
let   caller = "t_seeker_move_on_slot_num";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log(caller+"(slot=["+slot+"], num=["+num+"], visible=["+visible+"])");

if( !seeker_PU || !seeker_PD || !seeker_CD || !seeker_CU) return;
/*}}}*/
    /* CLEAR WINDOW SELECTION {{{*/
    t_window_getSelection_removeAllRanges(caller);

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
        /*{{{
            + "<span class='seeker_handle    top'>A-Z+"+SYMBOL_UP+"</span>"
            }}}*/
            + "<span class='seeker_handle  left' ></span>"
            + "<div     id='seeker_thumbs'       ></div>"
            + "<span class='seeker_handle  right'></span>"
        /*{{{
            + "<span class='seeker_handle bottom'>"+SYMBOL_UP_ARROW+"</span>"
            }}}*/
        ;
        seeker_thumbs = get_tool("seeker_thumbs");
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
    /* SEEKER ON invisible node {{{*/
    if(!visible) {
        add_el_class(seeker_PU, CSS_ON_HIDEN_NODE);
        add_el_class(seeker_PD, CSS_ON_HIDEN_NODE);
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
            let xy = get_el_xy(node, caller);
            if((xy.x > 0) || (xy.y > 0))
            {
                let node_W = node.offsetWidth;
                let node_H = node.offsetHeight;

                let node_L = xy.x;
                let node_C = node_L + node_W/2;
                let node_T = xy.y;
                let node_B = node_T + node_H;

                /* show at leat one seeker */
                if(!t_seeker_PU_is_active() && t_seeker_PD_is_hiding())
                    t_seeker_PU_show();

                /* [seeker_PU] ABOVE */
                t_seeker_move_above_XY(seeker_PU, node_C, node_T);

                /* [seeker_PD] BELOW */
                t_seeker_move_below_XY(seeker_PD, node_C, node_B);

                del_el_class(seeker_PU, CSS_ON_HIDEN_NODE);
                del_el_class(seeker_PD, CSS_ON_HIDEN_NODE);
            }
        }
    }
    /*}}}*/
    /* t_seek_set_container_selected {{{*/
    let clicked_target = get_slot_num_container(slot, num);

    t_seek_set_container_selected(clicked_target, caller);

    if(visible) {
        if(body_zoom_percent == 100)
            t_scrollIntoViewIfNeeded(clicked_target);
    }

    /*}}}*/
    t_sync_seek_back(caller);
    /*
console_dir(ccs[slot], caller+" ccs["+slot+"]")
     */
};
/*}}}*/
/*_ t_seeker_move_above_XY {{{*/
let t_seeker_move_above_XY = function(tool, x, y)
{
    x *= (body_zoom_percent  / 100);
    y *= (body_zoom_percent  / 100);
/*{{{
logBIG("t_seeker_move_above_XY("+get_n_lbl(tool)+", "+x+" "+y+"): body_zoom_percent=["+body_zoom_percent+"]");
}}}*/
    /* postpone hiding */
    if(t_seeker_PU_hide_timer && (tool == seeker_PU))
    {
/*{{{
logXXX("...rescheduling seeker_PU HIDING");
}}}*/
        t_seeker_PU_hide();
    }

    let      tool_W = tool.offsetWidth ;
    let      tool_H = tool.offsetHeight;
    tool.style.left = (x-tool_W/2)+"px";
    tool.style.top  = (y-tool_H  )+"px";
};
/*}}}*/
/*_ t_seeker_move_below_XY {{{*/
let t_seeker_move_below_XY= function(tool, x, y)
{
    x *= (body_zoom_percent  / 100);
    y *= (body_zoom_percent  / 100);
/*{{{
logBIG("t_seeker_move_below_XY("+get_n_lbl(tool)+", "+x+" "+y+"): body_zoom_percent=["+body_zoom_percent+"]");
}}}*/
    let      tool_W = tool.offsetWidth ;
    let      tool_H = tool.offsetHeight;
    tool.style.left = (x-tool_W/2)+"px";
    tool.style.top  = (y         )+"px";

};
/*}}}*/

/* STATE */
/*_ t_seeker_PU_is_active {{{*/
let t_seeker_PU_is_active = function()
{
/*{{{*/
let   caller = "t_seeker_PU_is_active";
let log_this = logging_EVENTS;

/*}}}*/

    let reject_reason = "";

    if     ( seeker_PU.style.display    != "block"   ) reject_reason = "[seeker_PU] NOT DISPLAYED";
    else if( seeker_PU.classList.contains("hiding"  )) reject_reason = "[seeker_PU] IS HIDING" ;
/*{{{
    else if( seeker_PU.classList.contains(CSS_FADING)) reject_reason = "[seeker_PU] IS FADING";
    else if( t_node_is_off_screen(seeker_PU)         ) reject_reason = "[seeker_PU] OFF SCREEN ";
}}}*/

    let is_active = (reject_reason == "");

if(!is_active && log_this)
    log(caller+": ...return "+is_active+" %c "+reject_reason,lb2);
    return is_active;
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
    if(LOG_MAP.T3_LAYOUT) log(caller);

    /* xy_wh */
    let   xy = get_el_xy(node, caller);
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

/*_ t_sync_seek_back {{{*/
/*{{{*/
const T_SYNC_SEEKER_ARROW_DELAY = 750;
const T_SYNC_SEEKER_DELAY       = 500;
let   t_sync_seeker_timeout;

/*}}}*/
/*_ t_sync_seek_back {{{*/
let t_sync_seek_back = function(_caller)
{
    /*{{{
logXXX("%c t_sync_seek_back("+_caller+")", lbH+lf7);
}}}*/
    if(t_sync_seeker_timeout) clearTimeout(t_sync_seeker_timeout);
    t_sync_seeker_timeout   =   setTimeout(t_sync_seek_back_handle, T_SYNC_SEEKER_DELAY);
};
/*}}}*/
/*_ t_sync_seek_back_handle {{{*/
let t_sync_seek_back_handle = function()
{
    let caller = "t_sync_seek_back_handle";
    /*{{{
logXXX("%c"+caller, lbb+lbH+lf7);
}}}*/
    /* [seeker_handle] nodes */
    let el, node_list;
    if(shadow_root)  node_list = shadow_root.querySelectorAll(".seeker_handle");
    else             node_list = document   .querySelectorAll(".seeker_handle");
    for(let i=0; i < node_list.length; ++i) {
        let     el = node_list[i];
        /*{{{
console_dir(el, caller+"seeker_handle #"+i)
}}}*/
        /* ARROW [LEFT..RIGHT] .. f(back) {{{*/
        if(      has_el_class(el, CSS_LEFT )
                 ||   has_el_class(el, CSS_RIGHT)
          ) {
            if( el.innerText != SYMBOL_DOWN_ARROW) el.innerText = SYMBOL_DOWN_ARROW;

            del_el_class(el, CSS_PRESSED);

            if( prop_get( SEL_BACK )) add_el_class(el, CSS_BACK);
            else                      del_el_class(el, CSS_BACK);

            setTimeout(t_sync_sel_back, T_SYNC_SEEKER_ARROW_DELAY);
        }
        /*}}}*/
        /* ...(top) remove pat_sort clone {{{
        else if( has_el_class(el, CSS_TOP) )
        {
            el.innerHTML   = pat_sort.innerHTML;
            if( t_are_pat_sorted() ) add_el_class(el, CSS_CHECKED);
            else                     del_el_class(el, CSS_CHECKED);
        }
        }}}*/
        /* ...[show_seekzone] toggle .. (bottom) {{{
        else if( has_el_class(el, CSS_BOTTOM )) {
            if(      prop_get(  LOG_SEEKSPOT )) add_el_class(el  , CSS_CHECKED);
            else                                del_el_class(el  , CSS_CHECKED);
        }
        }}}*/
    }
};
/*}}}*/
/*}}}*/
/*_ t_sync_sel_back {{{*/
let t_sync_sel_back = function()
{
    if(LOG_MAP.T3_LAYOUT) log("t_sync_sel_back");

    if( prop_get( SEL_BACK ) )
    {
        add_el_class(sel_bag      , CSS_BACK);
        add_el_class(seeker_CD    , CSS_BACK);
        add_el_class(seeker_thumbs, CSS_BACK);
    }
    else {
        del_el_class(sel_bag      , CSS_BACK);
        del_el_class(seeker_CD    , CSS_BACK);
        del_el_class(seeker_thumbs, CSS_BACK);
    }

};
/*}}}*/
/*_ t_words_regex_log {{{*/
/*{{{*/
let words_regex;

/*}}}*/
let t_words_regex_log = function(innerText)
{
    if(!words_regex) words_regex = get_tool("words_regex");
    words_regex.title            = innerText;
    words_regex.innerText        = ellipsis(innerText, 64);
};
/*}}}*/
/*}}}*/

/** CLONES */
/*{{{*/
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

/*}}}*/
/*  t3_load_PLAYGROUND_PANELS {{{*/
let t3_load_PLAYGROUND_PANELS = function()
{
/*{{{*/
let   caller = "t3_load_PLAYGROUND_PANELS";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log("%c"+SD3+"%c "+caller, lbS+lf3, lbH+lf3);
/*}}}*/
    /* [dom_hide_tools_panel] {{{*/
    if( panel = document.getElementById("dom_hide_tools_panel"))
    {
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc1'>HIDE TOOLS</em>";
        t2_clone_DOC_SLIDER(panel, SITE_OR_PAGE   , "bg4");
        t2_clone_DOC_SLIDER(panel, MASK_OR_HIDE   , "bg3");
        t2_clone_DOC_SLIDER(panel, EDIT_OR_STAGE  , "bg2");
        t2_clone_DOC_SLIDER(panel, DOM_HIDE1_RESET, "bg1");
        t2_clone_DOC_SLIDER(panel, DENY_OR_ALLOW  , "bg0");
    }
    /*}}}*/
    /* [dom_hide_select_panel] {{{*/
    if(panel = document.getElementById("dom_hide_select_panel"))
    {
        let id, label, el;
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc2'>HIDE SELECT</em>";
        id = "dom_hide1_collect_nodes_1"      ; label = "collect_nodes_1"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide1_collect_nodes_2"      ; label = "collect_nodes_2"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg3","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide1_collect_nodes_3"      ; label = "collect_nodes_3"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg4","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide1_collect_nodes_4"      ; label = "collect_nodes_4"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg5","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide1_container_clicked"    ; label = "container_clicked"    ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide4_scroll_to_last_hidden"; label = "scroll to last hidden"; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1","input",label); if(el) prop_set_EL(id, el);
    }
    /*}}}*/
    /* [dom_hide_store_panel] {{{*/
    if(panel = document.getElementById("dom_hide_store_panel"))
    {
        let id, label, el;
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc3'>HIDE STORE</em>";
        id = "dom_hide2_store_save"   ; label = "store_save"   ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide1_reset"        ; label = "store_reset"  ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg3","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide2_store_reload" ; label = "store_reload" ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg4","input",label); if(el) prop_set_EL(id, el);
        id = "dom_hide5_start_history"; label = "start_history"; el = t2_clone_panel_id_bg_type_label(panel,id,"bg6","input",label); if(el) prop_set_EL(id, el);
    }
    /*}}}*/
    /* [dom_target_tool_panel] {{{*/
    if(panel = document.getElementById("dom_target_tool_panel"))
    {
        let id, label, el;
        if(!panel.innerHTML) panel.innerHTML = "<em class='cc3'>target_tool</em>";
        id = "t_target_tool_reorder"  ; label = "REORDER"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2","input",label); if(el) prop_set_EL(id, el);

    }
    /*}}}*/


    t2_load_PLAYGROUND_clones_panel();
};
/*}}}*/
/*_ t2_clone_DOC_SLIDER {{{*/
let t2_clone_DOC_SLIDER = function(panel, id, className)
{
    /* [id] {{{*/
    let box               = document.createElement("DIV");
    panel.appendChild( box );
    box.className         = "box cb_slider_cap toolbag_button "+className;
    /*}}}*/
    /* input {{{*/
    let input             = document.createElement("INPUT");
    box.appendChild( input );
    input.type            = "checkbox";
    input.id              = id;
    input.name            = "check";
    input.className       = "cc2";
    /*}}}*/
    /* thumb {{{*/
    let label0            = document.createElement("LABEL");
    box.appendChild( label0 );
    label0.htmlFor        = id;

    /*}}}*/
    /* track {{{*/
    let label1            = document.createElement("LABEL");
    box.appendChild( label1 );
    label1.htmlFor        = id;
    /*}}}*/
    t1_clone_id_state_CB(id, false); /* initialize */
};
/*}}}*/
/* t2_load_PLAYGROUND_clones_panel {{{*/
let         playground_clones_panel = false;
let t2_load_PLAYGROUND_clones_panel = function()
{
/*{{{*/
let caller = "t2_load_PLAYGROUND_clones_panel";
let log_this = LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* look for playground_clones_panel {{{*/
    playground_clones_panel = document.getElementById("playground_clones_panel");
    if(!playground_clones_panel)
    {
if( log_this) log("FOUND NO DOC TOOL CLONES PANEL [playground_clones_panel]");

        return;
    }

if(log_this) console_dir(playground_clones_panel, caller+": FOUND DOC TOOL CLONES PANEL");
    /*}}}*/
    /* add control buttons {{{*/
    let panel = playground_clones_panel;
    let id, el;
    id = "t_target_tool_reorder"; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop_set_EL(id, el);
    id = "SEEK"                 ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "em"  );
    id = CSS_SEEK1_ONSLOTEL     ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop_set_EL(id, el);
    id = CSS_SEEK2_ONRESUME     ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop_set_EL(id, el);
    id = CSS_SEEK3_ONJUMPEL     ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop_set_EL(id, el);
    id = CSS_SEEK4_ONSEEKER     ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop_set_EL(id, el);
    id = CSS_SEEK5_ONTARGET     ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg1", "input"); if(el) prop_set_EL(id, el);

    id = "HIDE"                 ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2", "em"   );
    id = "container_clicked"    ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop_set_EL(id, el);
    id = "reset"                ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop_set_EL(id, el);
    id = "scroll_to_last_hidden"; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop_set_EL(id, el);

    id = "COLLECT"              ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg3", "em"   );
    id = "collect_nodes_1"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg3", "input"); if(el) prop_set_EL(id, el);
    id = "collect_nodes_2"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg3", "input"); if(el) prop_set_EL(id, el);
    id = "collect_nodes_3"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg3", "input"); if(el) prop_set_EL(id, el);
    id = "collect_nodes_4"      ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg2", "input"); if(el) prop_set_EL(id, el);

    id = "STORE"                ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg4", "em"   );
    id = "store_reload"         ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg4", "input"); if(el) prop_set_EL(id, el);
    id = "store_save"           ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg4", "input"); if(el) prop_set_EL(id, el);
    id = "start_history"        ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg4", "input"); if(el) prop_set_EL(id, el);

    id = "MISC1"                ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg5", "em"   );
    id = "RELOAD"               ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop_set_EL(id, el);
    id = "show_seekzone"        ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop_set_EL(id, el);
    id = "pin_seekspot"         ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop_set_EL(id, el);
    id = "log_seekspot"         ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg5", "input"); if(el) prop_set_EL(id, el);

    id = "MISC2"                ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg6", "em"   );
    id = "theme_dark"           ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg6", "input"); if(el) prop_set_EL(id, el);
    id = "pat_sort"             ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg6", "input"); if(el) prop_set_EL(id, el);
    id = "console_clear"        ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg6", "input"); if(el) prop_set_EL(id, el);

    id = "PROPERTIES"           ; el = t2_clone_panel_id_bg_type_label(panel,id,"bg7", "em"   );

    /*}}}*/
};
/*}}}*/
/*_ t2_clone_panel_id_bg_type_label {{{*/
let t2_clone_panel_id_bg_type_label = function(panel, id, bg, type, label)
{
/*{{{*/
let caller = "t2_clone_panel_id_bg_type_label("+id+" , "+bg+" , "+type+")";
let log_this = LOG_MAP.T1_DOM_LOAD || LOG_MAP.T3_LAYOUT;

/*}}}*/

    let el;

    el = get_tool_clone(id);
    if( el ) {
if( log_this) log("%c"+caller+"%c TOOL ALREADY CLONED ["+id+"]", lbL+lf8, lbR+lf3);
        return null;
    }

    let title = id;

    el = get_tool_embedded(id);
    if( el ) {
if( log_this) log("%c"+caller+"%c TOOL ALREADY EMBEDDED ["+id+"]", lbL+lf8, lbR+lf4);
        type  = "span"; /* placeholder */
        title =  "placeholder for ["+id+"]";
    }

    label = underline_to_space(label || id);

    let tool_innerHTML
        = (type == "input")
        ?  (  "<input type='checkbox'     id='"+ id    +"' name='check' />"
            + "<label                    for='"+ id    +"'>"
            +  "<div class='small     middle'>"+ label +"</div>"
            + "</label>"
           )
        : (   "<"+type+" class='box_label'>"+ label +"</"+type+">");

    let div
        = document.createElement("DIV");

    let div_class
        = (type == "input")
        ? "box  cb_filled_pin "+ bg +" toolbag_button"
        : bg
        ;

    div.innerHTML
        =    "<div class='"+div_class+"' title='"+title+"'>"
        +     tool_innerHTML
        +    "</div>";

    panel.appendChild( div );

    el = div.firstElementChild.firstElementChild;

if( log_this) console_dir(el, caller+" ...return:");
    return  el;
};
/*}}}*/
/*_ get_tool_clone {{{*/
let get_tool_clone = function(id)
{
    if(!id               ) return null;
    if( id.includes(" ") ) return null;
    let el
        = playground_clones_panel
        ? playground_clones_panel.querySelector("#"+id)
        : null;

/*{{{
if(el) console_dir(el, "get_tool_clone("+id+") ...return:");
}}}*/
    return el;
};
/*}}}*/
/*_ get_tool_embedded {{{*/
let get_tool_embedded = function(id)
{
    if(!id               ) return null;
    if( id.includes(" ") ) return null;
    let el
        = document.querySelector("#"+id)
    ;

/*{{{
if(el) console_dir(el, "get_tool_embedded("+id+") ...return:");
}}}*/
    return el;
};
/*}}}*/
/*XXX*/
/*_ t1_clone_id_state_CB {{{*/
let t1_clone_id_state_CB = function(id, checked)
{
/*{{{*/
let caller = "t1_clone_id_state_CB("+id+" , checked=["+checked+"])";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.EV5_TOOL_CB;

/*}}}*/
    /* SLIDER TRACK + THUMB {{{*/
    let clone_el = document.getElementById(id);
    if(!clone_el ) return false;

    let el_thumb = clone_el.labels ? clone_el.labels[0] : null;
    let el_track = clone_el.labels ? clone_el.labels[1] : null;

    if( el_thumb && el_track)
    {
        let                a =   id.split("_or_");
        if(a.length  != 2) a =   id.split("_"   );
        if(a.length  != 2) a = [ id      ,"OFF" ];
        if(a.length  == 2) {

            let label_ON  = a[0].toUpperCase();
            let label_OFF = a[1].toUpperCase();

if( log_this) log("%c"+id+"  "+checked+" %c ON..OFF=["+label_ON +".."+label_OFF+"]", lbL+lf3, lbR+lf5);
if( log_this) log(caller+": %c"+id      +" %c"+label_OFF                 +" %c"+label_ON
                  ,         lbb+lbH+lf9   ,lbH+(!checked ? lbb : "")+lf8   ,lbH+( checked ? lbb : "")+lf2);

            el_thumb.innerHTML = checked ? "<em class='bg8'>"+ label_ON  +"</em>" : "<em class='bg2'>"+ label_OFF +"</em>" ;
            el_track.innerHTML = checked ?                     label_OFF          :                     label_ON           ;

        }
        else {
if( log_this) log("%c"+caller+"%c *** no match with [cb_slider_cap] ID '_or_' naming separator feature", lbL, lbR+lf2);
        }
    }
    /*}}}*/
    /* NOT A SLIDER {{{*/
    else {
if( log_this) log("%c"+caller+"%c ... not a [cb_slider_cap] .. thumb+track labels not found"           , lbL, lbR+lf8);
        t1_clone_id_state_CB_PULSE(id, checked);
    }
    /*}}}*/
    /* PARENT BACKGROUND .. (stylesheet/checkbox.css) {{{*/
    set_el_class_on_off(clone_el.parentElement, CSS_ON, checked);

    /*}}}*/
};
/*}}}*/
/*_ t1_clone_id_state_CB_PULSE {{{*/
let t1_clone_id_state_CB_PULSE = function(input_id, checked)
{
    let       checkbox = document.getElementById(input_id);
/*{{{
console_dir(checkbox,"t1_clone_id_state_CB_PULSE("+input_id+", "+checked+")");
}}}*/

    checkbox.checked = true;

    setTimeout( function() { t1_prop_id_clone_OFF(checkbox); }, 2000);
};
let t1_prop_id_clone_OFF = function(checkbox)
{
    checkbox.checked = false;
};
/*}}}*/
/*_ t_sync_tool_clones .. called by (prop_tools_CB t1_prop_id_toggle t_onPatternUpdate_done t_sync_layout_handler) {{{*/
/*{{{*/
const T_SYNC_TOOL_CLONES_DELAY = 500;

let t_sync_tool_clones_timeout;
/*}}}*/
let t_sync_tool_clones = function(_caller)
{
/*{{{*/
let   caller = "t_sync_tool_clones";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"%c CALLED BY "+ _caller, lbL+lf6,lbR+lf6);
/*}}}*/
/*{{{
logBIG(caller+" *** HANDLER NOT CALLED ***", lbH+lf2);
return;
}}}*/
    if(t_sync_tool_clones_timeout) clearTimeout(t_sync_tool_clones_timeout);
    t_sync_tool_clones_timeout   =   setTimeout(t_sync_tool_clones_handler, T_SYNC_TOOL_CLONES_DELAY);
};
/*}}}*/
/*_ t_sync_tool_clones_handler {{{*/
let t_sync_tool_clones_handler = function()
{
/*{{{*/
let   caller = "t_sync_tool_clones_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    let id;

    id = KEY_LOG_IPC       ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_IPC                   ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
    id = KEY_LOG_EVENTS    ; if(el = document.getElementById(id)) set_el_class_removing(el, logging_EVENTS            ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
    id = KEY_LOG_HIGHLIGHT ; if(el = document.getElementById(id)) set_el_class_removing(el, logging_HIGHLIGHT         ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
    id = KEY_LOG_TOOLBAR   ; if(el = document.getElementById(id)) set_el_class_removing(el, logging_TOOLBAR           ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);

    id = "EV0_LISTEN"      ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV0_LISTEN        ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
    id = "EV1_DOWN"        ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV1_DOWN          ? CSS_CC1 : CSS_CC8, CCX_CLASSLIST);
    id = "EV2_MOVE"        ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV2_MOVE          ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id = "EV3_UP"          ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV3_UP            ? CSS_CC3 : CSS_CC8, CCX_CLASSLIST);
    id = "EV4_LONG_PRESS"  ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV4_LONG_PRESS    ? CSS_CC4 : CSS_CC8, CCX_CLASSLIST);
    id = "EV5_TOOL_CB"     ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV5_TOOL_CB       ? CSS_CC5 : CSS_CC8, CCX_CLASSLIST);
    id = "EV6_CHANGED"     ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV6_CHANGED       ? CSS_CC6 : CSS_CC8, CCX_CLASSLIST);
    id = "EV7_DISPATCH"    ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV7_DISPATCH      ? CSS_CC7 : CSS_CC8, CCX_CLASSLIST);
    id = "EV8_FLOATLOG"    ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP.EV8_FLOATLOG      ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);

    id =  "S1_RANGE"       ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. S1_RANGE         ? CSS_CC1 : CSS_CC8, CCX_CLASSLIST);
    id =  "S2_SELECT"      ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. S2_SELECT        ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  "S3_SLOT"        ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. S3_SLOT          ? CSS_CC3 : CSS_CC8, CCX_CLASSLIST);

    id =  "T0_STORE"       ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T0_STORE         ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
    id =  "T1_DOM_LOAD"    ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T1_DOM_LOAD      ? CSS_CC1 : CSS_CC8, CCX_CLASSLIST);
    id =  "T2_GRID"        ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T2_GRID          ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  "T3_LAYOUT"      ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T3_LAYOUT        ? CSS_CC3 : CSS_CC8, CCX_CLASSLIST);
    id =  "T4_PIVOT"       ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T4_PIVOT         ? CSS_CC4 : CSS_CC8, CCX_CLASSLIST);
    id =  "T5_SPREAD"      ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T5_SPREAD        ? CSS_CC5 : CSS_CC8, CCX_CLASSLIST);
    id =  "T6_SLOT"        ; if(el = document.getElementById(id)) set_el_class_removing(el, LOG_MAP. T6_SLOT          ? CSS_CC6 : CSS_CC8, CCX_CLASSLIST);

    id =  CONTAINERS_HI    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get( CONTAINERS_HI ) ? CSS_CC1 : CSS_CC8, CCX_CLASSLIST);
    id =  WORDS_EXACT      ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC3 : CSS_CC8, CCX_CLASSLIST);
    id =  WORDS_SEGMENT    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC4 : CSS_CC8, CCX_CLASSLIST);
    id =  WORDS_HEAD_TAIL  ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC5 : CSS_CC8, CCX_CLASSLIST);
    id =  WORDS_OPCYCLE    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);

    let id_array = t_get_words_drop_affix_array();
    for(let i=0; i < id_array.length; ++i)
    {
        id = id_array[i]   ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC9 : CSS_CC8, CCX_CLASSLIST);
    }

    id =  SCROLL_SMOOTH    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);

    id =  SHOW_SEEKZONE    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get( SHOW_SEEKZONE ) ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  PIN_SEEKSPOT     ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get( PIN_SEEKSPOT  ) ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  LOG_SEEKSPOT     ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get( LOG_SEEKSPOT  ) ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);

    id =  DENY_OR_ALLOW    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  EDIT_OR_STAGE    ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  DOM_HIDE1_RESET  ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  MASK_OR_HIDE     ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);
    id =  SITE_OR_PAGE     ; if(el = document.getElementById(id)) set_el_class_removing(el, prop_get(id)              ? CSS_CC2 : CSS_CC8, CCX_CLASSLIST);

    /* [dom_grid] .. (DOC TOOLS PLAYGROUND) */
    id = "dom_grid_headsup"; if(el = document.getElementById(id)) set_el_class(el, CSS_COLLAPSED, LOG_MAP.T2_GRID);
};
/*}}}*/
/*}}}*/

/* IPC */
/*{{{*/
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

            t_load();
            let script_loaded = ((typeof DOM_TOOLS_CSS_TAG != "undefined") && DOM_TOOLS_CSS_TAG);
            if(LOG_IPC) console.log("...DOM_TOOLS_CSS_TAG=["+ DOM_TOOLS_CSS_TAG +"]");
            if(LOG_IPC) console.log(".......script_loaded=["+ script_loaded     +"]");
            return script_loaded;
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
    if(LOG_IPC) console.log("...calling t1_prop_id_toggle("+t_theme+")");
    t1_prop_id_toggle(t_theme);
};
/*}}}*/
let IPC_SCRIPT_ID = DOM_TOOLS_JS_ID;
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

    for(let i=0; i < elements.length; ++i)
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

if(LOG_IPC) console.log("%c "+DOM_TOOLS_JS_ID+" LOADING DONE ", lbH+lf5);

/* STAND-ALONE OR EXTENSION STARTUP MESSAGE RECEIVED {{{*/
let extension_signature
    = document.body.attributes[IPC_EXTENSION_ID]
    ? document.body.attributes[IPC_EXTENSION_ID].textContent
    : "";
if(LOG_IPC) console.log("...calling   t_load");

t_load();
/*}}}*/

console.log("");
/*}}}*/

