"use strict";
/* dom_target_js */
let DOM_TARGET_JS_ID        = "dom_target_js";
let DOM_TARGET_JS_TAG       = DOM_TARGET_JS_ID  +" (181230:00h)";
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
                logXXX("t_target_tool_set_parked(parked "+parked+") .. CALLED BY "+_caller)//FIXME PARKED
}}}*/

/*{{{ //FIXME PARKED
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
/*//FIXME PARKED*/
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
/*//FIXME PARKED*/
/*_ t_target_tool_set_parked_handler {{{*/
let t_target_tool_set_parked_handler = function(parked, _caller)
{
/*{{{
log("%c t_target_tool_set_parked_handler(parked "+parked+") .. "+_caller, (parked ? lf8 : lf3))//FIXME PARKED
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
//FIXMEfor(let [tt_num, tt] of target_tools_map)
    for(let i=0; i < target_tools_map.length; ++i)
    {
        if(target_tools_map[i].tt_num == tt_num)
        {
            let  tt = target_tools_map[i].tt;
if( log_this) log("...unchecking tt.num["+tt.num+"] .. tt_num["+tt_num+"] .. tt.id=["+tt.id+"]");

            del_el_class(tt, CSS_PINNED);
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
//FIXMEfor(let [tt_num, tt] of target_tools_map)
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

    add_el_class(tt, CSS_PINNED);
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

if( log_this) log("%c"+caller, lbH+lf3);;
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
    del_el_class         (tt_feed, CSS_PINNED);
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
        let tt = tt_feed_array[tt_num-1];
        del_el_class(tt, CSS_PINNED);
        tt.style.display = "none";
        tt.style.zIndex  = ZINDEX_ABOVE_TOOLS + tt_num;
    }
};
/*}}}*/
/*_ t_target_tool_feed_repin {{{*/
let t_target_tool_feed_repin = function()
{

    for(let tt_num=1; tt_num<=10; ++tt_num)
    {
        let tt = tt_feed_array[tt_num-1];
        add_el_class(tt, CSS_PINNED);
        tt.style.display = "block";
    }
};
/*}}}*/
/*}}}*/

