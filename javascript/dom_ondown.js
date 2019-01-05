"use strict";
/* dom_down_js */
let DOM_ONDOWN_JS_ID        = "dom_down_js";
let DOM_ONDOWN_JS_TAG       = DOM_ONDOWN_JS_ID  +" (181230:00h)";
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

