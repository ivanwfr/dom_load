/* dom_util_js */
/* jshint esversion: 6, laxbreak:true, laxcomma:true, boss:true */
const DOM_UTIL_JS_ID        = "dom_util_js";
const DOM_UTIL_JS_TAG       = DOM_UTIL_JS_ID  +" (200410:17h)";
let dom_util    = (function() {
"use strict";
/* JSHint {{{*/
/* globals dom_data, dom_log, dom_store, dom_tools */
/* globals escape, unescape */
/*
:1,$y *
:!start explorer https://jshint.com/
*/
/*}}}*/
let   DOM_UTIL_LOG          = false;
let   DOM_UTIL_TAG          = false;

/* IMPORT */
/*{{{*/
/*➔ t_util_IMPORT {{{*/
/*{{{*/
/*....................................*/
let t_data     = {}        ;    /* 05 */
let t_log      = {}        ;    /* 06 */
/*  t_util     = {}        ; */ /* 07 */
/*  t_prop     = {}        ; */ /* 08 */
/*  t_store    = {}        ; */ /* 09 */
/*  t_fly      = {}        ; */ /* 10 */
/* ...................................*/
/*  t_wording  = {}        ; */ /* 11 */
/*  t_select   = {}        ; */ /* 12 */
/*  t_slot     = {}        ; */ /* 13 */
/* ...................................*/
/*  t_hide     = {}        ; */ /* 14 */
/*  t_view     = {}        ; */ /* 15 */
/*  t_sticky   = {}        ; */ /* 16 */
/*  t_seek     = {}        ; */ /* 17 */
/*  t_share    = {}        ; */ /* 18 */
/* ...................................*/
/*  t_grid     = {}        ; */ /* 19 */
/*  t_gutter   = {}        ; */ /* 20 */
/* ...................................*/
/*  t_ipc      = {}        ; */ /* 21 */
let t_tools    = {}        ;    /* 22 */
/*....................................*/
/*}}}*/
let t_util_IMPORT  = function(log_this)
{
/* LOAD {{{*/
/* ...................................*/
    t_data    = dom_data   ;    /* 05 */
    t_log     = dom_log    ;    /* 06 */
/*  t_util    = dom_util   ; */ /* 07 */
/*  t_prop    = dom_prop   ; */ /* 08 */
/*  t_store   = dom_store  ; */ /* 09 */
/*  t_fly     = dom_fly    ; */ /* 10 */
/* ...................................*/
/*  t_wording = dom_wording; */ /* 11 */
/*  t_select  = dom_select ; */ /* 12 */
/*  t_slot    = dom_slot   ; */ /* 13 */
/* ...................................*/
/*  t_hide    = dom_hide   ; */ /* 14 */
/*  t_view    = dom_view   ; */ /* 15 */
/*  t_sticky  = dom_sticky ; */ /* 16 */
/*  t_seek    = dom_seek   ; */ /* 17 */
/*  t_share   = dom_share  ; */ /* 18 */
/* ...................................*/
/*  t_grid    = dom_grid   ; */ /* 19 */
/*  t_gutter  = dom_gutter ; */ /* 20 */
/* ...................................*/
/*  t_ipc     = dom_ipc    ; */ /* 21 */
    t_tools   = dom_tools  ;    /* 22 */
/* ...................................*/
/*}}}*/
    util_INTERN();
    /* MODULE LOGGING TAGGING {{{*/
    DOM_UTIL_LOG = DOM_UTIL_LOG || dom_store.t_store_getBool("DOM_UTIL_LOG");
    DOM_UTIL_TAG = DOM_UTIL_TAG || dom_store.t_store_getBool("DOM_UTIL_TAG");

    /*}}}*/
if(log_this) log("%c 07 util", lbH+lf7);
};
/*}}}*/
/*_   util_INTERN {{{*/
/*{{{*/

/* t_log */
let LOG_MAP;
let lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX;
let lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb          ;
let lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX;
let log, logBIG, logXXX, log_caller, log_json_one_liner, log_key_val, log_key_val_group;

/*}}}*/
let   util_INTERN = function()
{
    /* t_log {{{*/
    LOG_MAP = t_log.LOG_MAP;

    [ lb0, lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9, lbX                               ] = t_log.LOG_BG_ARR;
    [ lbA, lbB, lbC, lbF, lbH, lbL, lbR, lbS, lbb                                         ] = t_log.LOG_XX_ARR;
    [ lf0, lf1, lf2, lf3, lf4, lf5, lf6, lf7, lf8, lf9, lfX                               ] = t_log.LOG_FG_ARR;

    log                 = t_log.functions.log;
    logBIG              = t_log.functions.logBIG;
    logXXX              = t_log.functions.logXXX;
    log_caller          = t_log.functions.log_caller;
    log_json_one_liner  = t_log.functions.log_json_one_liner;
    log_key_val         = t_log.functions.log_key_val;
    log_key_val_group   = t_log.functions.log_key_val_group;

    /*}}}*/

    util_DEPEND();
};
/*}}}*/
/*_   util_DEPEND {{{*/
/*{{{*/

let regexp_HTML_QUOTE;

/*}}}*/
let   util_DEPEND = function()
{
    regexp_HTML_QUOTE = new RegExp(t_data.DOUBLE_QUOTE, "g");

};
/*}}}*/
/*}}}*/

/* const */
/*{{{*/
const LF    = String.fromCharCode(10);

/*}}}*/

/* DOM */
/* XY {{{*/
/*➔ get_el_xy {{{*/
let get_el_xy = function(el)
{
    if(!el) return null;
    let  x = 0;
    let  y = 0;

    let cs = window.getComputedStyle(el);

    if(   (cs.position == "fixed"   )
       || (cs.position == "absolute")
      ) {
/*{{{
log("%c"+(el.id || el.tagName)+" "+cs.position,lbH+lf7);
}}}*/
        x   = el.offsetLeft;
        y   = el.offsetTop ;
    }
    else {
/*{{{
log("%c"+(el.id || el.tagName)+" "+cs.position,lbH+lf8);
}}}*/
        while(el) {
            x  += el.offsetLeft;
            y  += el.offsetTop ;
            el  = el.offsetParent;
        }
/*{{{
        let r = el.getBoundingClientRect();
        y     = r.top  + window.scrollY;
        x     = r.left + window.scrollX;
}}}*/
    }

    return { x: x, y: y };
};
/*}}}*/
/*➔ get_el_xy_computed {{{*/
let get_el_xy_computed = function(el)
{
    let cs = window.getComputedStyle(el);
    let  x = parseInt(cs.left);
    let  y = parseInt(cs.top );
    return { x: x, y: y };
};
/*}}}*/
/*}}}*/
/* LAYOUT {{{*/
/*➔ check_xy_in_node_rect {{{*/
let check_xy_in_node_rect = function(x, y, node)
{
/*{{{
    let bcr = node.getBoundingClientRect();
    let   t = Math.round(window.scrollY + bcr.top   );
    let   l = Math.round(window.scrollX + bcr.left  );
    let   w = Math.round(                 bcr.width );
    let   h = Math.round(                 bcr.height);
}}}*/

    let   t = Math.round( node.scrollTop    );
    let   l = Math.round( node.scrollLeft   );
    let   w = Math.round( node.scrollWidth  );
    let   h = Math.round( node.scrollHeight );
    let   b = t + h;
    let   r = l + w;

    t -= t_data.VIEWPORT_MARGIN.top;
    l -= t_data.VIEWPORT_MARGIN.left;
    b += t_data.VIEWPORT_MARGIN.bottom;
    r += t_data.VIEWPORT_MARGIN.right;

/*{{{
    log_key_val_group(       get_n_lbl(node)
                             , {   x
                                 , y
                                 , t
                                 , l
                                 , w
                                 , h
                                 , b
                                 , r
                             }
                             , lf7
                             , true
                     );
}}}*/

    if(    (x >= l)
        && (y >= t)
        && (x <= r)
        && (y <= b)
      )
        return true;

/*{{{
    logBIG("check_xy_in_node_rect:");
    let                node_label = mPadStart(get_id_or_tag(node), 32);
    if(x < l) log("%c"+node_label+"%c x %c "+ x +" < "+ l +" %c by "+ (l - x    ) +"px",lbH, lf2, lb2, lbH+lf8);
    if(y < t) log("%c"+node_label+"%c y %c "+ y +" < "+ t +" %c by "+ (t - y    ) +"px",lbH, lf3, lb3, lbH+lf8);
    if(x > r) log("%c"+node_label+"%c x %c "+ x +" > "+ r +" %c by "+ (    x - r) +"px",lbH, lf2, lb2, lbH+lf8);
    if(y > b) log("%c"+node_label+"%c y %c "+ y +" > "+ b +" %c by "+ (    y - b) +"px",lbH, lf3, lb3, lbH+lf8);
}}}*/

    return false;
};
/*}}}*/
/*➔ getInPageTop {{{ */
let getInPageTop = function(el)
{
    if(el.nodeType == Node.TEXT_NODE) el = el.parentElement;

/*{{{
    let y    = el.offsetTop;
    while(el = el.offsetParent)
        y   += el.offsetTop;
}}}*/

    let    y = Math.round(el.getBoundingClientRect().top + window.scrollY);
/*{{{
log("getInPageTop("+el.tagName+") %c"+y, lbb+lbH+lf5, lbb+lbH+lf6);
}}}*/

    return y;
};
/*}}}*/
/*➔ getPageHeight {{{ */
let getPageHeight = function()
{
/*{{{
logXXX(    "ocument.body")
logXXX(    document.body.scrollHeight)
logXXX(    document.body.clientHeight)
logXXX(    document.body.offsetHeight)
logXXX(    "ocument.body.parentElement")
logXXX(    document.body.parentElement.scrollHeight)
logXXX(    document.body.parentElement.clientHeight)
logXXX(    document.body.parentElement.offsetHeight)
}}}*/
    return document.body.parentElement.scrollHeight; /* HTML */
/*{{{*/
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
/*}}}*/
};
/*}}}*/
/*➔ t_el_geometry {{{*/
let t_el_geometry = function(el)
{
/*{{{
    let cs = window.getComputedStyle(el);
}}}*/

    let w  = el.offsetWidth;
    let h  = el.offsetHeight;
    let l  = el.offsetLeft;
    let t  = el.offsetTop;

    return {  WH        : "["+( w   )+" "+( h   )+"]"
            , TOP_LEFT  : "["+( t   )+" "+( l   )+"]"
            , BOT_RIGHT : "["+( t+h )+" "+( l+w )+"]"
/*{{{
            , display   : cs.display
            , position  : cs.position
}}}*/
    };

};
/*}}}*/
/*➔ t_get_panel_scale {{{*/
let t_get_panel_scale = function(panel)
{
/*{{{
May have to use window.screen.width
...not required as of 190206
:!start explorer "https://stackoverflow.com/questions/5603615/get-the-scale-value-of-an-element"
}}}*/

    let    cw = parseInt(panel.getBoundingClientRect().width);
    let    pw = parseInt(panel.offsetWidth);
    let scale = (cw && pw)
        ?        parseInt(0.5 + (cw / pw) * 100) / 100
        :        1;
/*{{{
log("t_get_panel_scale("+get_n_lbl(panel)+"): ...return "+scale);
}}}*/
    return scale;
};
/*}}}*/
/*➔ get_el_transformOrigin {{{*/
let get_el_transformOrigin = function(el)
{
    let xy = [];
    let cs = window.getComputedStyle(el);
    let px = cs.transformOrigin.split(" ");
    px.forEach( s => xy.push(parseInt(s)) );
    return { x:xy[0] , y:xy[1] };
};
/*}}}*/
/*➔ t_adjust_panel_transform_origin {{{*/
let t_adjust_panel_transform_origin = function(panel)
{
/*{{{*/
let   caller = "t_adjust_panel_transform_origin";
let log_this = LOG_MAP.T2_GRID || LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    /* WINDOW CENTER .. PANEL CENTER {{{*/
    let     scale = t_get_panel_scale(panel);
/*{{{
    let wcX = (Math.min(window.innerHeight, document.body.parentElement.clientHeight) - t_data.SCROLLBAR_WIDTH) / 2;
    let wcY = (Math.min(window.innerWidth , document.body.parentElement.clientWidth ) - t_data.SCROLLBAR_WIDTH) / 2;
}}}*/
    let wcX = (window.innerWidth  - t_data.SCROLLBAR_WIDTH) / 2;
    let wcY = (window.innerHeight - t_data.SCROLLBAR_WIDTH) / 2;

/*{{{
    let p_x =                            panel.offsetLeft  ;
    let p_y =                            panel.offsetTop   ;
    let p_w =                    scale * panel.offsetWidth ;
    let p_h =                    scale * panel.offsetHeight;
}}}*/
    /* scaled effective dimensions */
    let bcr = panel.getBoundingClientRect();
    let p_x =                            bcr.left  ;
    let p_y =                            bcr.top   ;
    let p_w =                            bcr.width ;
    let p_h =                            bcr.height;

    let pcX = p_x + scale * p_w / 2;
    let pcY = p_y + scale * p_h / 2;

    /*}}}*/
    /* [transformOrigin] {{{*/
    let l_or_r = (pcX < wcX);
    let t_or_b = (pcY < wcY);
/*{{{
    panel.style.transformOrigin
        = (l_or_r ? "0%" : "100%")
        +" "
        + (t_or_b ? "0%" : "100%")
    ;
}}}*/

    /*}}}*/
    /* URDL CSS_CORNER FROM {{{*/
    let u, r, d, l;
    if     (has_el_class(panel, t_data.CSS_CORNER_U_R)) { u = true;  r = true; } /* from    top-right */
    else if(has_el_class(panel, t_data.CSS_CORNER_R_D)) { r = true;  d = true; } /* from  right-down  */
    else if(has_el_class(panel, t_data.CSS_CORNER_D_L)) { d = true;  l = true; } /* from bottom-left  */
    else if(has_el_class(panel, t_data.CSS_CORNER_L_U)) { l = true;  u = true; } /* from  right-top   */

    /*}}}*/
    /* URDL CSS_CORNER TO {{{*/
    let d_x = 0; let d_y = 0;
    if     ((pcY <  wcY) && !u) { d_y = -1; u = true; } /* from bottom to top    */
    else if((pcX >= wcX) && !r) { d_x =  1; r = true; } /* from   left to right  */
    if     ((pcY >= wcY) && !d) { d_y =  1; d = true; } /* from    top to bottom */
    else if((pcX <  wcX) && !l) { d_x = -1; l = true; } /* from  right to left   */

    /*}}}*/
    /* SET CSS_CORNER {{{*/
    set_el_class_on_off(panel, t_data.CSS_CORNER_U_R, u && r);
    set_el_class_on_off(panel, t_data.CSS_CORNER_R_D, r && d);
    set_el_class_on_off(panel, t_data.CSS_CORNER_D_L, d && l);
    set_el_class_on_off(panel, t_data.CSS_CORNER_L_U, l && u);

    /*}}}*/
    /* SCALED .. MOVED DOWN .. ADJUST FROM BOTTOM {{{*/
    if(scale != 1) {
        if     (d_y > 0) panel.style.top  = (p_y + p_h - panel.offsetHeight)+"px";
        else if(d_y < 0) panel.style.top  = (p_y                           )+"px";
        if     (d_x > 0) panel.style.left = (p_x + p_w - panel.offsetWidth )+"px";
        else if(d_x < 0) panel.style.left = (p_x                           )+"px";
    }
    /*}}}*/
/*{{{*/
if( log_this) {
t_log.console_clear(caller);
    let cs = getComputedStyle(panel);
    log_key_val_group(    caller+"("+get_n_lbl(panel)+") .. "+panel.className
                                , { bcr
                                  , window_center_XY : wcX+" "+wcY
                                  , panel_XY         : pcX+" "+pcY
                                  , CORNER           : (t_or_b ?  "TOP":"BOTTOM")+"-"+(l_or_r ? "LEFT":"RIGHT")
                                  , URDL             : (u ? "U":"_")+ (r ? "R":"_")+ (d ? "D":"_")+ (l ? "L":"_")
                                  , className        : panel.className
                                  , transformOrigin  : cs.transformOrigin
                                  , d_x
                                  , d_y
                                }
                                , lf6, false);
}
/*}}}*/
};
/*}}}*/

/*➔ t_get_divs_style_z_index_max {{{*/
/*{{{*/
let              divs_style_z_index_max;
let              b_computed_z_index_max;
/*}}}*/
let t_get_divs_style_z_index_max = function()
{
/*{{{*/
let   caller = "t_get_divs_style_z_index_max";
let log_this = DOM_UTIL_TAG || DOM_UTIL_LOG;

/*}}}*/

if( log_this) console.time(caller);

    divs_style_z_index_max =  0;
    b_computed_z_index_max =  0;
    let            bs_hist = "";
    let            bc_hist = "";

/*
    let div_list = document.body.children;
*/
    let div_list = document.querySelectorAll("DIV");

    for(let i=0; i<div_list.length; ++i)
    {
        let child = div_list[i];
        if( child.id == "shadow_host") continue;

        let    cs = window.getComputedStyle( child );

        if( child.style.zIndex                                   ) bs_hist = "["+get_id_or_tag(child) +" "+child.style.zIndex +"] ← "+ bs_hist;
        if(          cs.zIndex > parseInt(b_computed_z_index_max)) bc_hist = "["+get_id_or_tag(child) +" "+cs.zIndex          +"] ← "+ bc_hist;

        if( child.style.zIndex > parseInt(divs_style_z_index_max)) divs_style_z_index_max = child.style.zIndex;
        if(          cs.zIndex > parseInt(b_computed_z_index_max)) b_computed_z_index_max = cs.zIndex;
    }

    let result = Math.max(divs_style_z_index_max , b_computed_z_index_max);

if(log_this) {
    log_key_val_group(caller
                      , {   div_list_length        : div_list.length
                          , divs_style_z_index_max : bs_hist
                          , b_computed_z_index_max : bc_hist
                          , return                 : result
                      }, lf9, false);
    console.timeEnd(caller);
}

    return result;
};
/*}}}*/

/*➔ get_xy_tlbr_dist {{{*/
let get_xy_tlbr_dist = function(x, y, tlbr)
{
    let   cx = (tlbr.l + tlbr.r) / 2;
    let   cy = (tlbr.t + tlbr.b) / 2;

    let   dx = x - cx;
    let   dy = y - cy;

    return Math.round( Math.sqrt(dx*dx + dy*dy) );
};
/*}}}*/
/*➔ intersect_r1_r2 {{{*/
let intersect_r1_r2 = function(r1,r2)
{
    /* MISSING SURFACE .. (flat rectangle) */
    if(r1.width  <= 0        ) return false;
    if(r1.height <= 0        ) return false;
    if(r2.width  <= 0        ) return false;
    if(r2.height <= 0        ) return false;

    /* APART FROM ONE ANOTHER */
    if(r1.left   >  r2.right ) return false; /*    r1_LEFT   .. TO_THE_RIGHT of   r2_RIGHT  */
    if(r1.right  <  r2.left  ) return false; /*    r1_RIGHT  .. TO_THE_LEFT  of   r2_LEFT   */
    if(r1.bottom <  r2.top   ) return false; /*    r1_BOTTOM .. ABOVE        of   r2_TOP    */
    if(r1.top    >  r2.bottom) return false; /*    r1_TOP    .. BELLOW       of   r2_BOTTOM */

    /* SOME/ALL CORNER(s) [IN or NEXT-TO] or [ONE CONTAINING THE OTHER] */
    let r1_T_IN  = (r1.top    >= r2.top   ) && (r1.top    <= r2.bottom);
    let r1_L_IN  = (r1.left   >= r2.left  ) && (r1.left   <= r2.right ); if(r1_T_IN && r1_L_IN) return true; /* TOP-LEFT  IN R2 */
    let r1_R_IN  = (r1.right  >= r2.left  ) && (r1.right  <= r2.right ); if(r1_T_IN && r1_R_IN) return true; /* TOP-RIGHT IN R2 */
    let r1_B_IN  = (r1.bottom >= r2.top   ) && (r1.bottom <= r2.bottom); if(r1_B_IN && r1_L_IN) return true; /* BOT-LEFT  IN R2 */
    /*................................................................*/ if(r1_B_IN && r1_R_IN) return true; /* BOT-RIGHT IN R2 */

    return false; /* SHOULD NOT HAPPEN */
};
/*}}}*/
/*➔ intersect_tlbr {{{*/
let intersect_tlbr = function({p , o , gap})
{
    if(p.l > (o.r + (gap || 0))) return false; /* panel_LEFT   .. TO_THE_RIGHT of other_RIGHT  */
    if(p.r < (o.l - (gap || 0))) return false; /* panel_RIGHT  .. TO_THE_LEFT  of other_LEFT   */
    if(p.b < (o.t - (gap || 0))) return false; /* panel_BOTTOM .. ABOVE        of other_TOP    */
    if(p.t > (o.b + (gap || 0))) return false; /* panel_TOP    .. BELLOW       of other_BOTTOM */
    /*........................*/ return  true; /* .. DOES INTERSECT */
};
/*}}}*/
/*➔ is_contained_by_parent {{{*/
let is_contained_by_parent = function(el,log_this)
{
    let r_CHILD  = el.              getBoundingClientRect();
    let r_PARENT = el.parentElement.getBoundingClientRect();

    /* MISSING SURFACE .. (flat rectangle) */
    if(r_CHILD .width  <= 0        ) return false;
    if(r_CHILD .height <= 0        ) return false;
    if(r_PARENT.width  <= 0        ) return false;
    if(r_PARENT.height <= 0        ) return false;

    /* APART FROM ONE ANOTHER */
    if(r_CHILD .left   >  r_PARENT.right ) return false; /* CHILD LEFT   .. TO_THE_RIGHT of PARENT RIGHT  */
    if(r_CHILD .right  <  r_PARENT.left  ) return false; /* CHILD RIGHT  .. TO_THE_LEFT  of PARENT LEFT   */
    if(r_CHILD .bottom <  r_PARENT.top   ) return false; /* CHILD BOTTOM .. ABOVE        of PARENT TOP    */
    if(r_CHILD .top    >  r_PARENT.bottom) return false; /* CHILD TOP    .. BELLOW       of PARENT BOTTOM */

    /* ALL CHILD CORNER(s) [IN or NEXT-TO] PARENT */
    let r_CHILD_T_IN  = (r_CHILD.top    >= r_PARENT.top ) && (r_CHILD.top    <= r_PARENT.bottom);
    let r_CHILD_L_IN  = (r_CHILD.left   >= r_PARENT.left) && (r_CHILD.left   <= r_PARENT.right );
    let r_CHILD_R_IN  = (r_CHILD.right  >= r_PARENT.left) && (r_CHILD.right  <= r_PARENT.right );
    let r_CHILD_B_IN  = (r_CHILD.bottom >= r_PARENT.top ) && (r_CHILD.bottom <= r_PARENT.bottom);

    /* CHILD CORNERS INSIDE PARENT */
    let contained_H = r_CHILD_L_IN && r_CHILD_R_IN;
    let contained_V = r_CHILD_T_IN && r_CHILD_B_IN;

if(log_this) {
    let lfx
        = (contained_H && contained_V) ? lf7
        : (contained_H               ) ? lf4
        : (               contained_V) ? lf5
        :                                lf8;

    log_key_val_group("is_contained_by_parent("+get_id_or_tag( el )+")"
                      , {   r_PARENT             : rect_toString(r_PARENT) +"  ["+ get_id_or_tag(el              )+"]"
                          , r_CHILD              : rect_toString(r_CHILD ) +"  ["+ get_id_or_tag(el.parentElement)+"]"
                          , contained_H
                          , contained_V
                      },lbH+lfx, false);
}

    return [ contained_H , contained_V ];
};
/*}}}*/
/*_ is_overflowing_parent {{{*/
let is_overflowing_parent = function(el,log_this)
{
    let e_bcr = el.              getBoundingClientRect();
    let p_bcr = el.parentElement.getBoundingClientRect();

    let result = intersect_r1_r2(e_bcr, p_bcr);

if(log_this)
    log_key_val_group("is_overflowing_parent("+get_id_or_tag( el )+")"
                      , {   parent          : rect_toString(p_bcr) +"  ["+ get_id_or_tag(el.parentElement)+"]"
                          , element         : rect_toString(e_bcr) +"  ["+ get_id_or_tag(el              )+"]"
                          , intersect_r1_r2 : result
                      },lfX[result ? 4:8], false);

    return result;
};
/*}}}*/
/*}}}*/
/* EVENTS {{{*/
/*➔ has_scrollbar {{{*/
/*{{{*/
const SCROLLABLE_TEXT_MIN_LENGTH = 12; /* as an attempt to skip button names */

/*}}}*/
let has_scrollbar = function(el)
{
    return has_scrollbar_x(el)
        || has_scrollbar_y(el)
    ;
};
/*}}}*/
/*➔ has_scrollbar_x {{{*/
let has_scrollbar_x = function(el)
{
/*{{{*/
let   caller = "has_scrollbar_x";
let log_this = DOM_UTIL_LOG;

/*}}}*/
    if( !el                                                ) return false;
    if( !el.scrollHeight                                   ) return false;
    if( !el.clientHeight                                   ) return false;
    if(  el.textContent.length < SCROLLABLE_TEXT_MIN_LENGTH) return false;

    let cs = window.getComputedStyle(el);

    let scrollbar_HEIGHT = el.offsetHeight
        - (  parseInt(cs.borderTopWidth   )
           + parseInt(el.clientHeight)
           + parseInt(cs.borderBottomWidth)
          );

    let is_top_el
        = ((el == document.body) || (el == document.documentElement));

    let result
        = is_top_el
        ? ((window.innerHeight  > document.documentElement.offsetHeight) &&  "WINDOW_TALLER")
        : ((    el.offsetHeight >                       el.clientHeight) && "ELEMENT_TALLER")
    ;
/*{{{*/
if( log_this) {
    let         bcr = el.getBoundingClientRect();

    log_key_val_group(caller+"( "+get_id_or_tag(el      )+" ) ...return "+result
                , { OFFSET_SCROLL_CLIENT  :  "---"
                  , el_scrollHeight       :  el.scrollHeight
                  , el_offsetHeight       :  el.offsetHeight
                  , el_clientHeight       :  el.clientHeight
                  , ELEMENT_TALLER        : (el.offsetHeight > el.clientHeight)

                  , BOUNDINGS             :  "---"
                  , bcr_height            :  bcr.height

                  , MARGIN_BORDER_PADDING :  "---"
                  , cs_margin             :  cs.margin
                  , cs_border             :  cs.border
                  , cs_padding            :  cs.padding

                  , TOP_HEIGHT_BOTTOM     :  "---"
                  , cs_marginTop          :  cs.marginTop   
                  , cs_borderTop          :  cs.borderTop
                  , cs_paddingTop         :  cs.paddingTop   
                  , cs_height             :  cs.height
                  , cs_paddingBottom      :  cs.paddingBottom
                  , cs_borderBottom       :  cs.borderBottom
                  , cs_marginBottom       :  cs.marginBottom

                  , SCROLLBAR             :  "---"
                  , scrollbar_HEIGHT      :  scrollbar_HEIGHT+" = [el.offsetHeight "+ parseInt(el.offsetHeight)+"] - ( [cs.borderTop "+parseInt(cs.borderTop)+"] + [el.clientHeight "+parseInt(el.clientHeight)+"] + [cs.borderBottom "+parseInt(cs.borderBottom)+"] )"

                  , WINDOW                :  "---"
                  , is_top_el
                  ,   HTML_offsetHeight   :  document.documentElement.offsetHeight
                  , WINDOW_innerHeight    :  window.innerHeight
                  , WINDOW_outerHeight    :  window.outerHeight
                  , WINDOW_TALLER         : (window.innerHeight > document.documentElement.offsetHeight)

                  , caller                :  t_log.get_callers()
                  , result                :  result+" [scrollbar_HEIGHT "+scrollbar_HEIGHT+"]"
                } ,lbH+lfX[result ? 4:8], false);
}
/*}}}*/
    return result;
};
/*}}}*/
/*➔ has_scrollbar_y {{{*/
let has_scrollbar_y = function(el)
{
/*{{{*/
let   caller = "has_scrollbar_y";
let log_this = DOM_UTIL_LOG;

/*}}}*/
    if( !el                                                ) return false;
    if( !el.scrollWidth                                    ) return false;
    if( !el.clientWidth                                    ) return false;
    if(  el.textContent.length < SCROLLABLE_TEXT_MIN_LENGTH) return false;

    let cs = window.getComputedStyle(el);

    let scrollbar_WIDTH = el.offsetWidth
        - (  parseInt(cs.borderLeftWidth  )
           + parseInt(el.clientWidth )
           + parseInt(cs.borderRightWidth )
          );

    let is_top_el
        = ((el == document.body) || (el == document.documentElement));

    let result
        = is_top_el
        ? ((window.innerWidth  > document.documentElement.offsetWidth) &&  "WINDOW_WIDER")
        : ((    el.offsetWidth >                       el.clientWidth) && "ELEMENT_WIDER")
    ;

/*{{{*/
if( log_this) {
    let         bcr = el.getBoundingClientRect();

    log_key_val_group(caller+"( "+get_id_or_tag(el      )+" ) ...return "+result
                , { OFFSET_SCROLL_CLIENT  :  "---"
                  , el_scrollWidth        :  el.scrollWidth
                  , el_offsetWidth        :  el.offsetWidth
                  , el_clientWidth        :  el.clientWidth
                  , ELEMENT_WIDER         : (el.offsetWidth > el.clientWidth)

                  , BOUNDINGS             :  "---"
                  , bcr_width             :  bcr.width

                  , MARGIN_BORDER_PADDING :  "---"
                  , cs_margin             :  cs.margin
                  , cs_border             :  cs.border
                  , cs_padding            :  cs.padding

                  , LEFT_WIDTH_RIGHT      :  "---"
                  , cs_marginLeft         :  cs.marginLeft   
                  , cs_borderLeft         :  cs.borderLeft
                  , cs_paddingLeft        :  cs.paddingLeft   
                  , cs_width              :  cs.width
                  , cs_paddingRight       :  cs.paddingRight
                  , cs_borderRight        :  cs.borderRight
                  , cs_marginRight        :  cs.marginRight

                  , SCROLLBAR             :  "---"
                  , scrollbar_WIDTH       :  scrollbar_WIDTH+" = [el.offsetWidth "+ parseInt(el.offsetWidth)+"] - ( [cs.borderLeft "+parseInt(cs.borderLeft)+"] + [el.clientWidth "+parseInt(el.clientWidth)+"] + [cs.borderRight "+parseInt(cs.borderRight)+"] )"

                  , WINDOW                :  "---"
                  , is_top_el
                  ,   HTML_offsetWidth    :  document.documentElement.offsetWidth
                  , WINDOW_innerWidth     :  window.innerWidth
                  , WINDOW_outerWidth     :  window.outerWidth
                  , WINDOW_WIDER          : (window.innerWidth > document.documentElement.offsetWidth)

                  , caller                :  t_log.get_callers()
                  , result                :  result+" [scrollbar_WIDTH "+scrollbar_WIDTH+"]"
                } ,lbH+lfX[result ? 4:8], false);
}
/*}}}*/
    return result;
};
/*}}}*/
/*➔ is_event_on_scrollbar {{{*/
let is_event_on_scrollbar = function(e)
{
/*{{{*/
let   caller = "is_event_on_scrollbar";
let log_this = DOM_UTIL_LOG;

/*{{{
    let e_target = t_tools.t_get_event_target(e);
    let e_target = e.touches ? e.touches[0].target : e.target;
}}}*/
/*}}}*/
    let event_XY = t_tools.get_event_XY(e);

    let    e_target = e.path ? e.path[0] : e.target; /* Chrome || Firefox */
    if(   !e_target                 ) return false;
    if(   !e_target.scrollWidth     ) return false;
    if(   !e_target.scrollHeight    ) return false;
    if(   !has_scrollbar_x(e_target)
       && !has_scrollbar_y(e_target)) return false;
/*{{{
    if( !e_target.clientWidth  ) return false;
    if( !e_target.clientHeight ) return false;
}}}*/
/*{{{
    let result = (event_XY.x > e_target.scrollWidth )
        ||       (event_XY.y > e_target.scrollHeight);
}}}*/
    let          bcr = e_target.getBoundingClientRect();
    let     bcr_left = (bcr.left                                ).toFixed(0);
    let     bcr_top  = (bcr.top                                 ).toFixed(0);
    let     scale = t_get_panel_scale(e_target);
    let        x_max = (bcr.left + e_target.scrollWidth  * scale).toFixed(0);
    let        y_max = (bcr.top  + e_target.scrollHeight * scale).toFixed(0);

    let    off_right = (event_XY.x  > x_max);
    let   off_bottom = (event_XY.y  > y_max);

    let on_scrollbar =   off_right || off_bottom;

if( log_this) {
    log_key_val(caller+"( "+get_id_or_tag(e_target)+" ) ...return "+on_scrollbar
                , {     e_target : get_id_or_tag(e_target)
                  ,     event_XY :           event_XY.x+" "+event_XY.y
                  ,       bcr_XY :  bcr.left.toFixed(0)+" "+bcr.top.toFixed(0)
                  ,        scale
                  ,    scroll_WH : e_target.scrollWidth+" "+e_target.scrollHeight
                  ,    offset_WH : e_target.offsetWidth+" "+e_target.offsetHeight
                  ,    client_WH : e_target.clientWidth+" "+e_target.clientHeight
                  ,            X : "[left "+bcr_left+"] .. [X "+event_XY.x+"] .. [x_max "+x_max+"] .. "+(off_right  ? "OFF-RIGHT" :"")
                  ,            Y : "[top  "+bcr_top +"] .. [Y "+event_XY.y+"] .. [y_max "+y_max+"] .. "+(off_bottom ? "OFF-BOTTOM":"")
                  , on_scrollbar
                  ,   callers : t_log.get_callers()
                } ,lbH+lfX[on_scrollbar ? 4:8]);

/*{{{
t_log.console_dir(e       ,"e"       );
t_log.console_dir(e_target,"e_target");
t_log.console_dir(bcr,"bcr");
}}}*/
}
    return on_scrollbar;
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
let log_this = LOG_MAP.EV0_LISTEN;

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

if(log_this) log("%c get_el_event_handler("+get_n_lbl(el)+") .. CALLED BY ["+ _caller+"]: ...return handler=["+((handler != null) ? "function" : "null")+"]"+LF+"%c"+label,lb6,lbH+lf6);

    let bubbling = has_el_class(e_target_or_parent, "bubbling");
if(log_this && bubbling) log("...bubbling=["+bubbling+"] .. return null");
    if(bubbling) return null;

    return { handler:handler , label:label };
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

    let handler_name =                       handler.name              ;
    let handler_code = ellipsis(strip_CR_LF( handler.toString() ), 128);

    return el_label +" "+ (handler_name || handler_code);
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
/* NODE {{{*/
/*_ get_position_absolute_children {{{*/
let get_position_absolute_children = function(el,level=1)
{
    /* leaf .. not a node {{{*/
    let arr = [];
    if(!el || !el.classList)
    {

    }
    /*}}}*/
    /* leaf .. absolute {{{*/
    else if( el.children.length < 1)
    {
        if(el.style.position == "absolute") arr.push(el);

    }
    /*}}}*/
    /* children .. absolute {{{*/
    else if(level < 3)
    {
        for(let i = 0
            ;   i < el.children.length
            ;   i += 1
           )
        {
            let child = el.children[i];

            if( child.children.length > 0)
                arr.concat( get_position_absolute_children( child ,level+1) );

            else if(el.style.position == "absolute")
                arr.push( child );
        }
    }
    /*}}}*/
    /* container .. absolute {{{*/
/*{{{
    if(el.style.position == "absolute") arr.push( el );
}}}*/

    /*}}}*/
/*{{{
log("%c get_position_absolute_children("+get_node_path(el)+") %c arr.length=["+arr.length+"]", lbH, lbH+lfX[1 + (level % 10)]);
}}}*/
    return arr;
};
/*}}}*/
/*_ node_toString {{{ */
let node_toString = function(node)
{
    let caller = "node_toString";
    if(!node) return "<span class='gr'>"+caller+"(null_node)</span>";

    let result = "";
    try {

        let p_str = get_p_str( node          );
        let n_str = get_n_str( node          );
/*{{{
        let t_str = get_t_str( node.nodeType );
}}}*/

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
            + " <em  class='"+em_class     +"'>"+ t_get_htmlEntities( text ) +"</em>"
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
/*_ get_h_tag {{{ */
let get_h_tag = function(node_nodeName)
{
    let symbol;
    let   name;

    switch(node_nodeName) {
    case "#document"    : { symbol = "\u2622";      name = "document"   ; } break;
    case  "HTML"        : { symbol = "\u2AFC";      name = "HTML"       ; } break;
    case   "HEAD"       : { symbol = "\u265E";      name = "head"       ; } break;
    case   "BODY"       : { symbol = "\u26AB";      name = "body"       ; } break;

    case    "SCRIPT"    : { symbol = "\u2710";      name = "script"     ; } break;

    case    "DIV"       : { symbol = "\u2610";      name = "div"        ; } break;
    case    "BLOCKQUOTE": { symbol = "\u275D";      name = "blockquote" ; } break;
    case    "SPAN"      : { symbol = "\u2799";      name = "span"       ; } break;
    case    "SUP"       : { symbol = "\u2799";      name = "sup"        ; } break;
    case    "EM"        : { symbol = "\u2794";      name = "em"         ; } break;

    case    "A"         : { symbol = "\u27A4";      name = "a"          ; } break;
    case    "BUTTON"    : { symbol = "\u274D";      name = "button"     ; } break;
    case    "INPUT"     : { symbol = "\u270B";      name = "input"      ; } break;
    case    "TEXTAREA"  : { symbol = "\u2774";      name = "textarea"   ; } break;

    case    "TABLE"     : { symbol = "TA";          name = "table"      ; } break;
    case     "THEAD"    : { symbol = "TH";          name = "thead"      ; } break;
    case     "TFOOT"    : { symbol = "TF";          name = "tfoot"      ; } break;
    case     "TBODY"    : { symbol = "TB";          name = "tbody"      ; } break;
    case      "TR"      : { symbol = "tr";          name = "tr"         ; } break;
    case      "TH"      : { symbol = "th";          name = "th"         ; } break;
    case      "TD"      : { symbol = "td";          name = "td"         ; } break;

    case    "UL"        : { symbol = "UL";          name = "ul"         ; } break;
    case    "OL"        : { symbol = "OL";          name = "ol"         ; } break;
    case    "LI"        : { symbol = "\u26AC";      name = "li"         ; } break;

    default             : { symbol = node_nodeName; name = node_nodeName; } break;
    }
    return              "<em class='cc3'>"+symbol+"<sup class='fg0'>"+name+"</sup></em>";
};
/*}}}*/
/*_ get_n_lbl {{{ */
let get_n_lbl = function(node)
{
    if(!node                 ) return "null_node";
    if( node == window       ) return "window";
    if( node == document.body) return "body";

/*  if(node.id    ) try { return            node.tagName +"#"+ node.id                                ; } catch(ex) {} */

    if(node.id    ) try { return       "#"+ node.id                                                   ; } catch(ex) {}
    if(node.title ) try { return "title=["+ node.title +"]"                                           ; } catch(ex) {}

    let                          n_lbl  = null;
    try                 {        n_lbl  = node.tagName +(node.className ? ("."+ node.className) : "") ; } catch(ex) {}
    if(   n_lbl )   try {        n_lbl += " .. TEXT=["+ truncate(node.textContent,  24)+"]"           ; } catch(ex) {}
    if(   n_lbl )         return n_lbl;

    try                 { return              "TEXT=["+ truncate(node.textContent,  24)+"]"           ; } catch(ex) {}
    try                 { return                                 node.tagName                         ; } catch(ex) {}
    try                 { return                                 node.nodeType                        ; } catch(ex) {}

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
/*_ get_p_str {{{ */
let get_p_str = function(node)
{
    let names = "";

    for(let       parent  = node.parentNode
        ;         parent != null
        ;         parent  = parent.parentNode
    ) {
        let n_str         = get_n_str(parent);
        if( n_str) names  =            n_str            + names;
     /* if( n_str) names  = mPadEnd(   n_str,8,".") +"."+ names; */
    }

    return names;
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
    return !node           ? ("null_node"                        )
        :   node.id        ? ("#"+ node.id                       )
        :   node.className ? (node.tagName+"."+ node.classList[0])
        :                    (node.tagName                       )
    ;
};
/*}}}*/
/*_ get_id_or_tag_and_className {{{ */
let get_id_or_tag_and_className = function(node)
{
    let result
        = !node           ? ("null_node"                        )
        :  node.id        ? ("#"+ node.id                       )
        :  node.className ? (node.tagName+"."+ node.classList[0])
        :                   (node.tagName                       )
    ;
    return result+((node && node.className) ? (" "+node.className) : "");

};
/*}}}*/
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

/*_ has_a_fixed_parent {{{*/
let has_a_fixed_parent = function(el)
{
    while( el ) {
        if(window.getComputedStyle( el ).position == "fixed") return true;
        else                        el = el.parentElement;
    }
    return false;
};
/*}}}*/
/*_ get_document_el_at_XY {{{*/

let get_document_el_at_XY = function(x,y)
{
/*{{{*/
let   caller = "get_document_el_at_XY";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.T7_SHARE;

if( log_this) t_log.console_clear(caller);
if( log_this) log(caller+"("+x+" , "+y+")");
/*}}}*/
    /* [abs_nodes] {{{*/
    let abs_nodes = get_abs_nodes();
    /*}}}*/
    /* //RANGE FROM XY {{{*/
/*{{{
    let range
        = (el.style.position == "fixed")
        ?  dom_select.get_range_from_XY(x               , y               )
        :  dom_select.get_range_from_XY(x-window.scrollX, y-window.scrollY)
        ;

    if(!range) {
        range = document.createRange();
        range.selectNodeContents( document.body );
    }
    let el_at_XY = range.startContainer;

}}}*/
    /*}}}*/
    /* ELEMENT FROM XY {{{*/
/*{{{
    let              elements = Array.from( abs_nodes ) .     concat(document.elementsFromPoint(x , y)) ;
}}}*/
    let              elements = document.elementsFromPoint(x , y);
if( log_this) t_log.console_dir(abs_nodes, "get_document_el_at_XY .. abs_nodes");
if( log_this) t_log.console_dir(elements , "get_document_el_at_XY .. elements" );

    let           shadow_root = t_tools.t_get_shadow_root();
    let              el_at_XY;
    for(let i=0; i < elements.length; ++i)
    {
        /* SKIP: [shadow_host] {{{*/
        let     el = elements[i];
        if( el.shadowRoot    )
        {

if( log_this) log("%c"+(i+1)+" SKIP: shadow_root %c "+get_n_lbl(el), lbL+lfX[i+1], lbH+lf3);
        }
        /*}}}*/
        /* SKIP: [shadow_root] child {{{*/
        else if( is_el_or_child_of_parent_el(el, shadow_root) )
        {
            el = shadow_root.elementFromPoint(x,y);

if( log_this) log("%c"+(i+1)+" SKIP: shadow_root child %c "+get_n_lbl(el), lbL+lfX[i+1], lbH+lf3);
        }
        /*}}}*/
        /* SKIP: [has_a_fixed_parent] {{{*/
        else if( has_a_fixed_parent(el) )
        {

if( log_this) log("%c"+(i+1)+" SKIP: ....fixed element %c "+get_n_lbl(el), lbL+lfX[i+1], lbF+lf2);
        }
        /*}}}*/
        /*{{{*/
        else if( abs_nodes.includes(el) ) {
if( log_this) log("%c"+(i+1)+" PICK: ...ABSOLUTE CHILD %c "+get_n_lbl(el), lbb+lbL+lfX[i+1], lbb+lbH+lfX[el_at_XY ? 9:4]);

            if(!el_at_XY) el_at_XY = el; /* pick first */
        }
        /*}}}*/
        /*{{{*/
        else {
if( log_this) log("%c"+(i+1)+" PICK: ...document child %c "+get_n_lbl(el), lbL+lfX[i+1], lbH+lfX[el_at_XY ? 9:4]);

            if(!el_at_XY) el_at_XY = el; /* pick first */
        }
        /*}}}*/
    }
    /*}}}*/
    /* VERBOSELY DEFAULT TO BODY {{{*/
    if(!el_at_XY)
    {
if( log_this) log(caller+" .. document.elementFromPoint("+x+" "+y+") returned "+get_n_lbl(el_at_XY), lbF+lf2);

        el_at_XY = document.body;
    }
    /*}}}*/
if( log_this) log("...return %c"+get_n_lbl(el_at_XY), lbH+lf4);
    return el_at_XY;
};
/*}}}*/
/*_ get_abs_nodes {{{*/
let     abs_nodes_cache;
let get_abs_nodes = function()
{
    if(!abs_nodes_cache)
        abs_nodes_cache = Array.from( document.querySelectorAll("[style*='position:absolute']") );
    return abs_nodes_cache;
};
/*}}}*/
/*_ get_selector_nodes {{{*/
let get_selector_nodes = function(selector)
{
    let nodes = Array.from( document.querySelectorAll(selector) );
t_log.console_dir(nodes, selector);
    return nodes;
};
/*}}}*/
/*_ get_viewport_nodes {{{*/
let get_viewport_nodes = function()
{
    let nodes = Array.from( document.querySelectorAll("*[style*='position:absolute']") );
    return nodes;
};
/*}}}*/
/*➔ get_el_anchor_in_view_array {{{*/
let get_el_anchor_in_view_array = function(root=document.body)
{
/*{{{*/
let   caller = "get_el_anchor_in_view_array("+get_id_or_tag(root)+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) console.time   (caller);
    let time_start = new Date().getTime();
/*}}}*/
    let anchor_in_view_array = [];
    let node;
    if(anchor_leaf_in_view_filter(root) == NodeFilter.FILTER_ACCEPT)
    {
if( log_this) log("root is a LEAF");
        anchor_in_view_array.push(root);
    }
    else {
        let treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, anchor_leaf_in_view_filter);
        while(node = treeWalker.nextNode())
            anchor_in_view_array.push(node);
    }
    let time_end = new Date().getTime();
if( log_this) console.timeEnd(caller);
if( log_this) t_log.console_dir(anchor_in_view_array, "anchor_in_view_array");
    return { anchor_in_view_array , search_ms:(time_end - time_start) };
};
/*}}}*/
/*_ anchor_leaf_in_view_filter {{{*/
let anchor_leaf_in_view_filter = function(node)
{
    /* REJECT TOOL {{{*/
    let why = NodeFilter.FILTER_ACCEPT;
    let why_not;
    if     ( has_el_class(node, "transcript"   ) ) { why = NodeFilter.FILTER_REJECT;  why_not =       "transcript"; }
    else if( has_el_class(node, "doc_tool"     ) ) { why = NodeFilter.FILTER_REJECT;  why_not =         "doc_tool"; }

    /*}}}*/
    /* REJECT INVISIBLE {{{*/
    else if( node.tagName    == "SCRIPT"         ) { why = NodeFilter.FILTER_REJECT;  why_not =       node.tagName; }
    else if( node.tagName    == "STYLE"          ) { why = NodeFilter.FILTER_REJECT;  why_not =       node.tagName; }
    else if( is_marked_to_hide( node )           ) { why = NodeFilter.FILTER_REJECT;  why_not =   "MARKED_TO_HIDE"; }
    else if( node.style.display == "none"        ) { why = NodeFilter.FILTER_REJECT;  why_not =     "DISPLAY_NONE"; }

    /*}}}*/
    /* ACCEPT FIXED CONTAINER {{{*/
    else if( node.style.position == "fixed") { why = NodeFilter.FILTER_ACCEPT; }

    /*}}}*/
    /* SKIP CONTAINER .. STILL EXPLORE SUB-TREE {{{*/
    else if( node.children.length > 0            ) { why = NodeFilter.FILTER_SKIP  ;  why_not =     "HAS_CHILDREN"; }

    /*}}}*/
    /* REJECT LEAF OUT OF VIEW {{{*/
    if(why != NodeFilter.FILTER_REJECT)
    {
        /* REJECT NO DIMENSION LEAF */
        let bcr = node.getBoundingClientRect();
        if(node.children.length == 0)
        {
            if     (bcr.height < 1               ) { why = NodeFilter.FILTER_REJECT;  why_not =        "NO HEIGHT"; }
            else if(bcr.width  < 1               ) { why = NodeFilter.FILTER_REJECT;  why_not =         "NO WIDTH"; }
            else if(bcr.top > window.innerHeight ) { why = NodeFilter.FILTER_REJECT;  why_not =           "BELLOW"; }
            else if(bcr.bottom < 0               ) { why = NodeFilter.FILTER_REJECT;  why_not =            "ABOVE"; }
        }
        /* REJECT CONTAINER BELOW VIEW */
        else if(    bcr.top > window.innerHeight ) { why = NodeFilter.FILTER_REJECT;  why_not = "CONTAINER BELLOW"; }

        /* ACCEPT CONTAINER ABOVE VIEW .. (as it may have spreading absolute children) */
/*{{{
        else if(    bcr.bottom < 0               ) { why = NodeFilter.FILTER_REJECT;  why_not =  "CONTAINER ABOVE"; }
}}}*/
        else if(    bcr.bottom < 0               ) {
/*{{{
            log("ACCEPT CONTAINER ABOVE VIEW %c"+get_node_path_tail(node), lbH);
}}}*/
        }
    }
    /*}}}*/
/*{{{*/
/*{{{
if(why_not) {
    log(why_not+" .. "+get_id_or_tag(node));
    del_el_class(node, "cc3");
} else {
    add_el_class(node, "cc3");
    console.log(node)
    console.dir(node)
    log("%c why=["+why+"]", lbH+lf8)
}
}}}*/
/*}}}*/
    return why;
};
/*}}}*/

/*➔ t_REMOVE_ADS {{{*/
/*{{{*/
let   remove_ads_result;

/*}}}*/
let t_REMOVE_ADS = function(tag)
{
    if(!remove_ads_result)
        remove_ads_result = "";

    if( tag ) {
        remove_ads_result += remove_ads_tag( tag    );
    }
    else {
        let tag;    let result;
        tag = "SCRIPT"; result = remove_ads_tag(tag); remove_ads_result += result + (result ? LF : "");
        tag = "IFRAME"; result = remove_ads_tag(tag); remove_ads_result += result + (result ? LF : "");
        tag = "INS"   ; result = remove_ads_tag(tag); remove_ads_result += result + (result ? LF : "");
    }

/*{{{
log("%c"+remove_ads_result, lbH);
}}}*/

};
/*}}}*/
/*➔ t_REMOVE_ADS_results {{{*/
let t_REMOVE_ADS_results = function()
{
    return remove_ads_result;
};
/*}}}*/
/*…   remove_ads_tag {{{*/
let   remove_ads_tag = function(tag)
{
/*{{{*/
let   caller = "remove_ads_tag";
let log_this = LOG_MAP.T1_DOM_LOAD;

/*}}}*/
    let removed = 0;
    for(let pass = 1; pass <= 10; ++pass)
    {
        /* get remaining nodes */
        let node_list = document.getElementsByTagName(tag);
        if(!node_list || !node_list.length) break;

        /* try to remove those nodes */
        for(let i=0; i < node_list.length; ++i)
        {
            let node = node_list[i];
            if( node.parentElement ) {
                node.parentElement.removeChild( node );
                removed += 1;
            }
        }
        /* could not remove any */
        if(!removed) break;
    }
    let results
        = removed
        ? removed+" "+tag+" removed"
        : "";

if( log_this) log(caller+": %c"+(results || "no "+tag+" tag to remove from page"), lbH+(removed ? lf7:lf8));

    return results;
};
/*}}}*/
/*➔ t_get_e_target_proxy {{{*/
let t_get_e_target_proxy = function(e_target)
{
    if( e_target.htmlFor                               ) return document.getElementById( e_target.htmlFor );

    if( e_target.parentElement &&
        e_target.parentElement.htmlFor                 ) return document.getElementById( e_target.parentElement.htmlFor );

    if( e_target.firstChild.nodeType != Node.TEXT_NODE ) return                          e_target.firstChild;

    /*................................................*/ return                          e_target;
};
/*}}}*/
/*➔ t_TEXT_LINES_to_COLORED_HTML {{{*/
let t_TEXT_LINES_to_COLORED_HTML = function(text_lines)
{
    let html = "";
    let    a =   text_lines.split(LF);
    for(let i=0;  i < a.length; ++i) {
        let    line = a[i];
        let num = get_num_in_string( line );
        if( num ) html += "<span class='fg"+(num % 10)+"'>"+line+"</span>"+LF;
        else      html +=                                   line          +LF;
    }
    return html;
};
/*}}}*/
/*➔ t_replace_initial_title .. t_restore_initial_title {{{*/
let t_replace_initial_title = function(el, title) { if(!el.initial_title) el.initial_title = el.        title; el.title = title; };
let t_restore_initial_title = function(el       ) { if( el.initial_title) el.title         = el.initial_title;                   };
/*}}}*/
/*}}}*/
/* NODE PATH {{{*/
/*  get_id_or_node_path_tail .. get_node_path_tail .. get_node_path {{{*/
let get_id_or_node_path_tail = function(node_to) { return !node_to ? "null_node" : node_to.id || get_node_path_tail(node_to); };
let get_node_path_tail       = function(node_to) { return get_node_path(node_to, true); };
let get_node_path            = function(node_to, base_name_only)
{
/*{{{
log("get_node_path %c"+get_n_lbl(node_to), lb7);
log_caller();
}}}*/

    if(!node_to) return "";

    let node     = node_to;
    let node_csv = "";
    do {
        /* document node .. up from a doc_tool */
/*{{{
        while( is_a_doc_tool_node(node) ) node = node.parentElement;
}}}*/
        /* [num .. skipped] .. (count preceding siblings .. skipping doc_tools) {{{*/
        let num = 1;
        let skipped = 0;
        for(num = 1; (node.parentElement) && (num <= node.parentElement.children.length); ++num)
        {
            let                    child  = node.parentElement.children[num-1];
            if(            node == child  ) break;

            if( is_a_doc_tool_node(child) ) skipped += 1; /* ignore doc_tools */
        }
        /*}}}*/

        let tag_num_str = _dom_hide_tag_num_to_str(node, (num-skipped), skipped);

        node_csv        = csv_ins(node_csv, tag_num_str);

        node = node.parentElement;
    }
    while(    node
          && (node != document.body)
          && (node != document.documentElement)
          && !base_name_only
         );
    let node_path = comma_to_vbar( node_csv );
/*{{{
logXXX("... %c"+node_path, lb8);
}}}*/
    return node_path;
};
/*}}}*/
/*  get_node_path_target {{{*/
let get_node_path_target = function(node_path, log_num=8)
{
/*{{{*/
let caller = "get_node_path_target";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"%c"+node_path+")", lbL+lf3, lbR+lf9);
/*}}}*/
    /* LOG {{{*/
    let args = [""]; let s = "";
    if( log_this) {
        let lfn = lfX[log_num % 10];

        s += "%c"+log_num; args.push(/*lbb+*/lfn);
    }
    /*}}}*/
    let node               = document.body;
    let node_tag_num_array = node_path.split("|");   /* pre_0 | div_2 */
    for(let s_num = 1; s_num <= node_tag_num_array.length; ++s_num)
    {
        let         node_tag_num = _dom_hide_str_to_tag_num( node_tag_num_array[s_num-1] );
        let              tag     = node_tag_num.tag;
        let                  num = node_tag_num.num;

        /* child_num .. f(skipped) */
        let     skipped = 0;
        for(let  c_num  = 1                     /* check all skippable child */
            ;   (c_num <  node.children.length) /* from first to last */
             && (c_num <= (skipped + num)     ) /* up to num (skipped excluded) */
            ;    c_num += 1                     /* check next one */
           ) {
            let child = node.children[c_num-1];
            if( is_a_doc_tool_node( child ) ) {
                skipped += 1;
            }
if( log_this) add_el_class(child, "c_num_"+c_num+"_skipped_"+skipped);
        }

        let child_num = num + skipped;

        if( !(node = node.children[child_num-1])     ) break; /* NOT FOUND */

/*{{{*/
if( log_this) {
    s      +=     " %c "+tag+" %c"+num +(skipped ? " ("+skipped+" skipped ➔ "+(num+skipped)+")" : "");

    let lfs = lfX[s_num % 10];
    args.push( lbL+lfs);
    args.push(            lbR+lfs);
}
/*}}}*/
    }
/*{{{*/
if( log_this ) {
    let lfs = lfX[(1 + node_tag_num_array.length) % 10];
    s      +=  "%c...return "+get_node_txt_id_or_tag_path(node); args.push(/*lbb+*/lbH+lfs);
    args[0] = s;
    console.log.apply(console, Array.prototype.slice.call(args));
}
/*}}}*/
    return node;
};
/*}}}*/
/*  get_node_txt_id_or_tag_path {{{*/
let get_node_txt_id_or_tag_path = function(node)
{
    if(!node) return "null node";

    let       txt =      "["+ ellipsis_16( get_n_txt( node ) )+"]";

    let id_or_tag =           node.id
        ?               " #"+ node.id
        :               " " + node.tagName;

    let path =          " ["+ get_node_path( node ) +"]";

    return txt + mPadEnd(id_or_tag,10) + path;

};
/*}}}*/
/*  _dom_hide_tag_num_to_str - (USE get_node_id_or_tag) {{{*/
let _dom_hide_tag_num_to_str = function(child, num, skipped)
{
/*{{{
    let  child_label = get_node_id_or_tag( child               );
    let parent_label = get_node_id_or_tag( child.parentElement );

    let  child_label = child              .tagName;
    let parent_label = child.parentElement.tagName;
}}}*/
    let  child_label = get_node_id_or_tag(child              );
    let parent_label = get_node_id_or_tag(child.parentElement);

    return    num                       /* 0 num    */
        +" "+ child_label               /* 1 child  */
        +   " of"                       /* 2 of     */
        +" "+ parent_label              /* 3 parent */
/*{{{
        +(skipped ? " ("+skipped+" skipped)" : "")
}}}*/
    ;
};
/*}}}*/
/*  _dom_hide_str_to_tag_num {{{*/
let _dom_hide_str_to_tag_num = function( node_tag_num )
{
    let words = node_tag_num.split(" ");

    let num   = parseInt( words[0]);    /* 0 num   */
    /* ----------------------------------- 1 child */
    /* ----------------------------------- 2 of    */
    let tag   =           words[3] ;    /* 3 tag   */
/*
logXXX("_dom_hide_str_to_tag_num("+node_tag_num+") ...return { tag:"+tag+" , num:"+num+" }")
*/
    return { tag:tag , num:num };
};
/*}}}*/
/* get_node_id_or_tag {{{ */
let get_node_id_or_tag = function(el)
{
    if(!el) return "null_node";
    return el.id || el.tagName;
};
/*}}}*/
/*}}}*/
/* PARENT CHILD {{{*/
/*_ is_a_doc_tool_button {{{*/
let is_a_doc_tool_button = function(node)
{
    return is_el_child_of_class(node,"transcript");
};
/*}}}*/
/*_ is_a_doc_tool_panel {{{*/
let is_a_doc_tool_panel = function(node)
{
    return node.classList.contains("transcript");
};
/*}}}*/
/*_ is_el_child_of_id {{{*/
let is_el_child_of_id = function(el, id)
{
    while(el && (el.id != id) && (el = el.parentElement))
        ;
    return (el != null);
};
/*}}}*/
/*_ is_el_child_of_class {{{*/
let is_el_child_of_class = function(el, className)
{
    while(el && (el = el.parentElement) && !el.classList.contains(className))
        ;
/*{{{
if(el) logBIG("is_el_child_of_class("+get_n_lbl(el)+", "+className+") .. ["+get_n_lbl(el)+"]");
}}}*/
    return  el;
};
/*}}}*/
/*_ is_el_or_child_of_class {{{*/
let is_el_or_child_of_class = function(el, className)
{
    while(el && !el.classList.contains(className))
        el     = el.parentElement;
/*{{{
if(el) logBIG("is_el_or_child_of_class("+get_n_lbl(el)+", "+className+") .. ["+get_n_lbl(el)+"]");
}}}*/
    return el;
};
/*}}}*/
/*_ is_el_or_child_of_parent_el {{{*/
let is_el_or_child_of_parent_el = function(el, parent_el)
{
    if(!parent_el) return false;

    while(el && (el != parent_el))
        el     = el.parentElement;

    return (el == parent_el);
};
/*}}}*/
/*_ get_child_num {{{*/
let get_child_num = function(child)
{
    for(let c = 0; c < child.parentElement.children.length; ++c) {
        if(child == child.parentElement.children[c])
            return c+1;
    }
    return 0;
};
/*}}}*/
/*_ get_el_child_with_class {{{*/
let get_el_child_with_class = function(parent,className,level=1)
{
    if(!parent) return null;

    for(let c=0; c < parent.children.length; ++c) {
        /* direct child {{{*/
        let child  = parent.children[c];
        if((child != null) && has_el_class(child, className)) {
/*{{{
log("get_el_child_with_class("+get_id_or_tag(parent)+" , "+className+" , "+level+") %c DIRECT CHILD "+get_id_or_tag(child)+"", lbH+lf4);
}}}*/

            return child;
        }
        /*}}}*/
        /* descendant {{{*/
        if(child.children.length)
        {
            if( child = get_el_child_with_class(child, className, level+1)) {
/*{{{
log("get_el_child_with_class("+get_id_or_tag(parent)+" , "+className+") %c LEVEL "+level+" DESCENDANT "+get_id_or_tag(child)+"", lbH+lf3);
}}}*/

                return child;
            }
        }
        /*}}}*/
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
/*_ get_el_child_with_id {{{*/
let get_el_child_with_id = function(parent,id)
{
    for(let     c = 0; c < parent.children.length; ++c) {
        let child = parent.children[c];
        if((child != null) && (child.id == id))
            return child;
    }
    return null;
};
/*}}}*/
/*_ get_el_child_with_tag_class {{{*/
let get_el_child_with_tag_class = function(parent,tag,className)
{
    let children_with_tag = parent.getElementsByTagName( tag );

    for(let i = 0; i < children_with_tag.length; ++i)
    {
        let child = children_with_tag[i];
        if( has_el_class(child, className) )
            return child;
    }
    return null;
};
/*}}}*/
/*_ get_el_child_with_tag_first_word {{{*/
let get_el_child_with_tag_first_word = function(parent,tag,first_word)
{
/*{{{
log("get_el_child_with_tag_first_word("+get_n_lbl(parent)+", "+tag+", "+first_word+")")
}}}*/

    let children = parent.querySelectorAll( tag );

    for(let     c = 0; c < children.length; ++c)
    {
        let child          = children[c];
        if(!child                ) continue;
        let child_first_word  = get_first_word(child.innerText, "get_el_child_with_tag_first_word");
/*{{{
log("%c child_first_word=["+child_first_word+"]", lbH+lf8)
}}}*/
        if( child_first_word == first_word)
            return child;
    }
    return null;
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
/*_ get_el_parent_with_id {{{*/
let get_el_parent_with_id = function(el,id)
{
    while(               el
          && (          !el.id            /* no ID */
              || (id && (el.id != id))    /* or not the expected one */
             )
         )
        el = el.parentElement;

    return el; /* ID EXPECTED .. or the first DEFINED */
};
/*}}}*/
/*_ get_el_parent_with_display_none {{{*/
let get_el_parent_with_display_none = function(el)
{
    while(   el ) {
        if(window.getComputedStyle(el).display == "none") return el;
        el = el.parentElement;
    }
    return null;
};
/*}}}*/
/*_ get_el_parent_child_of_id {{{*/
let get_el_parent_child_of_id = function(el,id)
{
    do {
        if(!el                       ) return null;
        if(!el.parentElement         ) return null;
        if( el.parentElement.id == id) return   el;
    }
    while(el = el.parentElement);

    return null;
};
/*}}}*/
/*_ get_el_parent_child_of_class {{{*/
let get_el_parent_child_of_class = function(el,className)
{
    do {
        if(!el                                     ) return null;
        if(!el.parentElement                       ) return null;
        if( el.parentElement.className == className) return   el;
    }
    while(el = el.parentElement);

    return null;
};
/*}}}*/
/*_ get_el_parent_with_tag {{{*/
let get_el_parent_with_tag = function(el,tag)
{
    while(el && (el.tagName != tag))
        el     = el.parentElement;

    if(    !el                        ) return null;
    return (         tag == el.tagName) ? el : null;
};
/*}}}*/
/*_ get_el_in_view_up_from_el {{{*/
let get_el_in_view_up_from_el = function(from_el)
{
/*{{{*/
let   caller = "get_el_in_view_up_from_el";
let log_this = LOG_MAP.S1_RANGE || LOG_MAP.S2_SELECT;

if( log_this) log("%c"+caller+"("+get_n_lbl(from_el)+")", lbH);
/*}}}*/
    /* Parent of No-dimension Node {{{*/
    let node = from_el;
    while((    node.offsetWidth  == 0)
          && ( node.offsetHeight == 0))
        node = node.parentElement;

if( log_this && (node != from_el)) log("%c parent of No-dimension Node: node=["+get_n_lbl(node)+"]", lbH+lf3);

    /*}}}*/
    /* Parent of TOOL Nodes {{{*/
    if( not_an_anchor_target(node) )
        node = node.parentElement;

if( log_this && (node != from_el)) log("%c parent of TOOL Node: node=["+get_n_lbl(node)+"]", lbH+lf4);
    /*}}}*/
    /* Down to BODY {{{*/
    if(node == document.body.parentElement) node = document.body;

if( log_this && (node != from_el)) log("%c HTML down to BODY: node=["+get_n_lbl(node)+"]", lbH+lf4);
    /*}}}*/
    /* Default to from_el {{{*/
    if(!node) node = from_el;

if( log_this && (node == from_el)) log("%c returning from_el", lbH+lf0);
    /*}}}*/
    return node;
};
/*}}}*/
/*_ is_a_doc_tool_node {{{*/
let is_a_doc_tool_node = function(node)
{
/*{{{*/
let   caller = "is_a_doc_tool_node";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.T7_SHARE;

/*}}}*/
    if(!node) return false;                                let result = false;     let lfx = lf8;

    if( node.id && node.id.startsWith("select")            ) { result =      "SELECT"; lfx = lf5; }

if( log_this && result) log(caller+"%c"+result+"%c"+get_n_lbl(node), lbL+lfx, lbR+lf8);
    return result;
};
/*}}}*/
/*_ not_an_anchor_target {{{*/
let not_an_anchor_target = function(node)
{
/*{{{*/
let   caller = "not_an_anchor_target";
let log_this = LOG_MAP.T3_LAYOUT || LOG_MAP.T7_SHARE;

/*}}}*/
    if(!node) return false;
    let      shadow_root = t_tools.t_get_shadow_root();           let why_not = "";                 let lfx = lf8;

    /* REJECT DOM STRUCTURE NODES */
    if     ( node                == document.body.parentElement   ) { why_not = "HTML"                ;            }
    else if( node                == document.body                 ) { why_not = "BODY"                ;            }
    else if( node.nodeType       != Node.ELEMENT_NODE             ) { why_not = "NOT AN ELEMENT_NODE ";            }
    else if( node.tagName        == "STYLE"                       ) { why_not = "HAS A STYLE TAG"     ;            }
    else if( node.tagName        == "SCRIPT"                      ) { why_not = "HAS A SCRIPT TAG"    ;            }
    else if( node.shadowRoot                                      ) { why_not = "HAS A SHADOWROOT "   ;            }
    else if(!node.parentElement                                   ) { why_not = "HAS NO PARENT "      ;            }
    /* REJECT TOOL NODES */
    else if( node                == shadow_root                   ) { why_not = "SHADOW_ROOT"         ; lfx = lf6; }
    else if( node.id   && node.id.startsWith("select")            ) { why_not = "SELECT_TOOL"         ; lfx = lf5; }
    else if( has_el_class(node, dom_data.CSS_DOC_TOOL)            ) { why_not = "IS_A_TOOL"           ; lfx = lf3; }
    else if( has_el_class(node, dom_data.CSS_LINE_NUM)            ) { why_not = "IS_A_LINE_NUM"       ; lfx = lf3; }
/*{{{
    else if( node.style.position == "fixed"                       ) { why_not = "IS_FIXED"            ; lfx = lf2; }
}}}*/
    /* REJECT NO-LAYOUT NODES */
/*{{{
    else if( node.offsetHeight    > window.innerHeight            ) { why_not = "TALLER THAN VIEWPORT"; lfx = lf7; }
    else if( node.offsetWidth    == undefined                     ) { why_not = "NOT_AN_ELEMENT"      ;            }
    else if(!node.offsetWidth    ||       !node.offsetHeight      ) { why_not =       "NOT_AN_ELEMENT";            }
    else if((node.offsetWidth    == 0) && (node.offsetHeight == 0)) { why_not =          "HAS_NO_SIZE";            }
    else if(window.getComputedStyle( node ).position   == "fixed" ) { why_not =             "IS_FIXED"; lfx = lf2; }
}}}*/

if( log_this && (why_not != "") && (lfx != lf8)) log("%c"+caller+"%c"+why_not+"%c"+get_n_lbl(node)
                                                     ,lbb+lbH+lfx,lbL+lfx     ,lbR+lfX[node.id ? 3:8]);
    return why_not;
};
/*}}}*/
/*}}}*/
/* CSS_CLASS {{{*/
let add_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
let set_el_class     = function(el, className) { if(!el || !el.classList) return      ;                                            el.className       = className  ; };
let has_el_class     = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };
/*_ clear_el_classList .. cycle_el_classList .. cycle_id_classList {{{*/
let clear_el_classList = function(el_or_id, classList) { cycle_el_classList(el_or_id, classList, true); };
let cycle_el_classList = function(el_or_id, classList, remove_only)
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
    if( remove_only ) return;

    /* WRAP [next_picked] */
    if(!next_picked) next_picked = classList[0];
/*{{{
log("%c next_picked=["+next_picked+"]", lbH+lfX[parseInt(next_picked)])
}}}*/

    /* ADD [next_picked] */
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

let cycle_id_classList = cycle_el_classList;
/*}}}*/
/*_ flip_el_class .. flip_id_class {{{*/
let flip_el_class = function(el_or_id, className)
{
    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    if( has_el_class(el, className) ) del_el_class(el, className);
    else                              add_el_class(el, className);
};

let flip_id_class = flip_el_class;
/*}}}*/
/*_ set_el_class_on_off .. set_id_class_on_off {{{*/
let set_el_class_on_off = function(el, className, on_off)
{
    if(on_off) add_el_class(el, className);
    else       del_el_class(el, className);
};

let set_id_class_on_off = function(id, className, on_off)
{
    let el = t_tools.t_get_tool(id);
    if(!el) return;

    set_el_class_on_off(el, className, on_off);
};
/*}}}*/
/*_ set_el_class_removing {{{*/
let set_el_class_removing = function(el_or_id, class_to_add, classes_to_remove) /* string or collection */
{
    if(       typeof      classes_to_remove != "object") classes_to_remove = [ classes_to_remove ];

    let el = (typeof               el_or_id == "object")
        ?                          el_or_id
        :  document.getElementById(el_or_id)
    ;
    /* [classes_to_remove] */
    let removed = "";
    for(let i=0; i <               classes_to_remove.length; ++i)
    {
        if(el.classList.contains(  classes_to_remove[i] )) {
            el.classList.remove (  classes_to_remove[i] );
            removed =              classes_to_remove[i]  ;
        }
    }

    /* [class_to_add] */
    if( class_to_add )
    {
        if(!el.classList.contains( class_to_add ))
            el.classList.add     ( class_to_add );
    }

    return removed;
};
/*}}}*/
/*  is_marked_to_hide {{{*/
let is_marked_to_hide = function( node )
{
    return has_el_class(node, dom_data.MARKED_TO_HIDE);

};
/*}}}*/
/*}}}*/
/* SELECTION {{{*/
/*_ selectNodeContents {{{*/
let selectNodeContents = function(el)
{
/*{{{*/
let   caller = "selectNodeContents";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log_caller();
/*}}}*/
    try {
        let range = document.createRange();

        range.selectNodeContents( el );

        window.getSelection().addRange( range );
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ clearSelection {{{ */
let clearSelection = function()
{
    let                       selection = window.getSelection();
    let                       selection_text = selection.toString();
    let something_removed = !!selection.baseNode;
    try {                     selection.removeAllRanges(); } catch(ex) { log("clearSelection: "+ex, "error"); }
/*{{{
log("clearSelection: ...return something_removed: %c"+something_removed, lbH+lfX[something_removed ? 5:8]);
}}}*/
/*{{{
    return something_removed;
}}}*/
    return selection_text;
};
/*}}}*/
/*}}}*/

/* STRING */
/* STRING {{{*/
/*_ ellipsis {{{*/
const HORIZONTAL_ELLLIPSIS = "\u2026";
const ELLIPSIS_DEFAULT_LEN = 96;
const ELLIPSIS_SHORT_LEN   = 48;

let ellipsis_16 = function(msg)
{
    return mPadEnd( ellipsis(msg, 16) , 16);
};

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
/*_ mPadStart .. mPadEnd {{{*/
let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };

let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };
/*}}}*/
/*_ isAlNum {{{ */
/*{{{
/[0-9A-Z_a-z\xC0-\xD6\xD8-\xf6\xf8-\xff]
const regexp_WORDS              = new RegExp("[0-9A-Z_a-z\\xC0-\\xD6\\xD8-\\xf6\\xf8-\\xff]", "g");
:!start explorer "https://www.regextester.com/94757"
}}}*/
let isAlNum = function(s)
{
    let      cp  = s.codePointAt(0);

    return ((cp >=   48 ) && (cp <=  57)) /* 0-9 */
        || ((cp >=   65 ) && (cp <=  90)) /* A-Z */
        || ((cp ==   95 )               ) /*  _  */
        || ((cp >=   97 ) && (cp <= 122)) /* a-z */
        || ((cp >=   192) && (cp <= 214)) /* À-Ö */
        || ((cp >=   214) && (cp <= 246)) /* Ø-ö */
        || ((cp >=   248) && (cp <= 255)) /* ø-ÿ */
    ;
};

/*{{{
let _sAlNum = function(s) { return /[0-9a-z]/.test( s.toLowerCase() ); };
}}}*/

/*}}}*/
/*_ object_label {{{*/
let object_label = function(object)
{
    return object.toString()
        .replace("[object ","")
        .replace(       "]","");
};
/*}}}*/
/*_ btoa_msg {{{*/
/*
:!start explorer "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa"
*/
let btoa_msg = function(msg)
{
    if(!msg) return "";

    try {
      /*msg = btoa(                            msg  );*/
        msg = btoa(unescape(encodeURIComponent(msg)));
    }
    catch(ex) {
        if(DOM_UTIL_LOG || DOM_UTIL_TAG)
        {
            log("%c btoa("+msg+"):"+LF+ex, lf3);
            log_caller();
        }
    }

    return msg;
};
/*}}}*/
/*_ atob_msg {{{*/
let atob_msg = function(msg)
{
    if(!msg) return "";

    try {
      /*msg = atob(                          msg  );*/
        msg = decodeURIComponent(escape(atob(msg)));
    }
    catch(ex) {
        if(DOM_UTIL_LOG || DOM_UTIL_TAG)
        {
            log("%c"+"atob(msg):",lbH+lf3);
            log("%c"+msg         ,lb3    );
            log("%c"+ex          ,    lf3);
            log_caller();
            log("%c Returning received msg (unchanged)", lbH+lf3);
        }
    }

    return msg;
};
/*}}}*/
/*… unicode_to_charCode {{{*/
let unicode_to_charCode = function(u_str)
{
    return String.fromCharCode( parseInt( u_str.charCodeAt(0) ) );
};
    /*}}}*/
/*  rect_toString {{{*/
let rect_toString = function(r)
{
    return       parseInt(r.x    ) +"@"+ parseInt(r.y     )
        +" .. "+ parseInt(r.width) +"x"+ parseInt(r.height)
    ;
};
/*}}}*/
/*  string_to_ms {{{*/
let string_to_ms = function(s)
{
    let ms
        = (s.indexOf("ms") > 0)
        ?  parseInt(s)
        :  1000 * parseFloat(s)
    ;
    return ms;
};
/*}}}*/
/*}}}*/
/* REGEX {{{*/
/* RegExp {{{*/

/* CSV */
const APOST_ASC = "'";
/*{{{
const APOST_UTF = "\\u0027";
}}}*/
const APOST_HTM = "&apos;";
const regexp_APOST_ASC          = new RegExp(APOST_ASC                      , "g");
const regexp_APOST_HTM          = new RegExp(APOST_HTM                      , "g");
/*{{{
const regexp_APOST_UTF          = new RegExp(APOST_UTF                      , "g");
}}}*/
const COMMA_ASC = ",";
/*{{{
const COMMA_UTF = "\\u002C";
}}}*/
const COMMA_HTM = "&comma;";
const regexp_COMMA_ASC          = new RegExp(COMMA_ASC                      , "g");
const regexp_COMMA_HTM          = new RegExp(COMMA_HTM                      , "g");
/*{{{
const regexp_COMMA_UTF          = new RegExp(COMMA_UTF                      , "g");
}}}*/

/* SPECIAL */
const regexp_CR                 = new RegExp("\\r"                          , "g");
const regexp_LF                 = new RegExp("\\n"                          , "g");
const regexp_LF2                = new RegExp("\\n{2,}"                      , "g");
const regexp_AN                 = new RegExp("[^a-z_ A-Z0-9]"               , "g");
const regexp_SFX                = new RegExp("_\\d$"                        , "g");

/* PARSE */
const regexp_PERCENT_C          = new RegExp(" ?%c ?"                       , "g");
const regexp_TAG_HOUR           = new RegExp(":\\d(\\d)h", "i"); /* [9] .. (170602:19h11) */

/* CHAR */
const regexp_BACKSLASH          = new RegExp("\\\\"                         , "g");
const regexp_BRACKET_C          = new RegExp("\\]"                          , "g");
const regexp_BRACKET_O          = new RegExp("\\["                          , "g");
const regexp_COLON              = new RegExp(":"                            , "g");
const regexp_COMMA              = new RegExp(" *, *"                        , "g");
const regexp_NBSP               = new RegExp("&nbsp;"                       , "g");
const regexp_SPACE              = new RegExp(" +"                           , "g"); /*                    _     LOCAL_STORE */
const regexp_UL                 = new RegExp(  "_"                          , "g");
const regexp_ULX                = new RegExp("__+"                          , "g");
const regexp_UNDERLINE          = new RegExp("_"                            , "g");
const regexp_UNDERLINE_UTF8     = new RegExp("\\{U\\+005F\\}"               , "g");
const regexp_VBAR               = new RegExp("\\|"                          , "g");
const regexp_eacute_to_char     = new RegExp("\\xE9"                        , "g"); var char_eacute = String.fromCharCode(0xE9); /* E-ACUTE */
const regexp_eacute_to_hex      = new RegExp(String.fromCharCode(0xE9)      , "g"); var hex_eacute = "\\xE9"; /* E-ACUTE */
const regexp_egrave_to_char     = new RegExp("\\xE8"                        , "g"); var char_egrave = String.fromCharCode(0xE8); /* E-GRAVE */
const regexp_egrave_to_hex      = new RegExp(String.fromCharCode(0xE8)      , "g"); var hex_egrave = "\\xE8"; /* E-GRAVE */
const regexp_mS                 = new RegExp("\\s{2,}"                      , "g");

/* KEYWORD */
/*{{{
const regexp_TRUE               = new RegExp("=?\\[?true\\]?"               , "g");
const regexp_FALSE              = new RegExp("=?\\[?false\\]?"              , "g");
}}}*/

/* WORD */
const regexp_FIRST_WORD         = new RegExp("(\\w+)"                                   , "i");
const regexp_HEADS              = new RegExp("^\\w\\s"                                       ); /* _   C LOCAL_STORE */
const regexp_HLEAD              = new RegExp("\\[\\s*\\["                               , "g");
const regexp_HTAIL              = new RegExp("\\]\\s*\\]"                               , "g");
const regexp_HWORD              = new RegExp("\\b(html)\\b"                             , "g");

/*{{{
const regexp_NOWRD_E            = new RegExp(   "[^0-9~A-z\\xC0-\\xFF]+ *$"             , "g");
const regexp_NOWRD_S            = new RegExp("^ *[^0-9~A-z\\xC0-\\xFF]+"                , "g");
}}}*/
const regexp_NOWRD              = new RegExp("[^0-9~A-Za-z\\xC0-\\xFF]+"                , "g"); /* quantité */

/* HTML */
const regexp_EM_C               = new RegExp(" *</em[^>]*>"                             , "g");
const regexp_EM_O               = new RegExp("<em[^>]*> *"                              , "g");
const regexp_ENTT               = new RegExp("&\\w+;"                                   , "g");
const regexp_EOL                = new RegExp("<(ol|ul|/li|/div|br|pre)>"                , "g");
const regexp_HTML               = new RegExp("<[^>]*>"                                  , "g");
const regexp_HTML_AMP           = new RegExp("&"                                        , "g");
const regexp_HTML_GT            = new RegExp(">"                                        , "g");
const regexp_HTML_LT            = new RegExp("<"                                        , "g");

/*}}}*/
/* TRIM {{{*/
/*_ trim_WORDS {{{*/
let trim_WORDS = function(text)
{
    return text
/*{{{
        .   replace(regexp_NOWRD_S, "")
        .   replace(regexp_NOWRD_E, "")
}}}*/
        .   replace(regexp_NOWRD  , " ")
        .trim()
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
/*r regexp_nW = new RegExp("\\W"           , "g");*/
let trim_empty_lines = function(textContent, alnum_filter=false)
{
    let caller = "trim_empty_lines";
    let text = "";
    try {
        if(textContent)
        {
            /* erase t_data.CR LF */
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
/*_ trim_node_textContent {{{ */
let trim_node_textContent = function(node)
{
/* CALLERS:
// javascript/dom_select.js	touchedWord_adjust_3_word_syntaxic_lookup
// javascript/dom_select.js	log_range
// javascript/dom_select.js	log_range
// javascript/dom_select.js	log_range
*/
    return strip_CR_LF( ellipsis(node.textContent.trim(), 64) );
};
/*}}}*/
/*  trim_space_lf {{{*/
let trim_space_lf = function(text)
{
    if(!text) return text;

    while(text.startsWith(" ") || text.startsWith(LF)) text = text.substring(1, text.length  );
    while(text.  endsWith(" ") || text.endsWith  (LF)) text = text.substring(0, text.length-1);

    return text;
};
/*}}}*/

/*}}}*/
/* STRIP {{{*/
/*_ strip_CR_LF {{{*/
let strip_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, " ")
        .   trim()
    ;
};
/*}}}*/
/*_ strip_el_id_suffix {{{*/
let strip_el_id_suffix = function(text)
{
    return text
        .   replace(regexp_SFX,  "")
    ;
};
/*}}}*/
/*_ strip_UL {{{*/
let strip_UL = function(text)
{
    return text
        .   replace(regexp_ULX, LF    )
        .   replace(regexp_UL , " "   )
        .   trim()
    ;
};
/*}}}*/
/*_ strip_console_formatting {{{*/

let strip_console_formatting = function(text)
{
    return text
        .   replace(regexp_PERCENT_C, "")
        .trim()
    ;
};
/*}}}*/
/*_ strip_HTML {{{*/
/*{{{
let LOG_TRUE          = " TRUE_____";
let LOG_FALSE         = " ____false";
}}}*/
let strip_HTML = function(text)
{
    if(   !text) return "";
    return text
        .   replace(regexp_EM_O , "["         )
        .   replace(regexp_EM_C , "] "        )
        .   replace(regexp_EOL  , LF          )
        .   replace(regexp_LF2  , LF          )
        .   replace(regexp_HTML , " "         )
        .   replace(regexp_SPACE, " "         )
        .   replace(regexp_NBSP , " "         )
        .   replace(regexp_ENTT , t_data.SYMBOL_EMPTY)
        .   replace(regexp_HLEAD, "["         )
        .   replace(regexp_HTAIL, "]"         )
/*{{{
        .   replace("%c"         , ""         )
        .   replace(regexp_TRUE , LOG_TRUE    )
        .   replace(regexp_FALSE, LOG_FALSE   )
}}}*/
        .trim()
    ;
};
/*}}}*/
/*_ strip_contentEditable {{{*/
const regexp_BR                 = new RegExp("<br>"          , "ig");
const regexp_BR_DIV_O           = new RegExp("<br><div>"     , "ig");
const regexp_DIV_O              = new RegExp("<div>"         , "ig");
const regexp_DIV_C              = new RegExp("</div>"        , "ig");
/*{{{
const regexp_PRE_O              = new RegExp( "^<pre[^>]*>"  , "ig");
const regexp_PRE_C              = new RegExp("<\/pre>$"      , "ig");
}}}*/
const regexp_PRE_O              = new RegExp(  "<pre[^>]*>"  , "ig");
const regexp_PRE_C              = new RegExp("<\/pre>"       , "ig");
const regexp_SPAN_O              = new RegExp(  "<span[^>]*>", "ig");
const regexp_SPAN_C              = new RegExp("<\/span>"     , "ig");

let strip_contentEditable = function(text)
{
/*{{{
log("strip_contentEditable: %c"+t_data.LF+text, lb9);
}}}*/

    if(   !text) return "";
    let result
    = text
        .   replace(regexp_BR_DIV_O , LF)
        .   replace(regexp_BR       , LF)
        .   replace(regexp_DIV_O    , LF)
        .   replace(regexp_DIV_C    , "")
        .   replace(regexp_PRE_O    , "")
        .   replace(regexp_PRE_C    , "")
        .   replace(regexp_SPAN_O   , "")
        .   replace(regexp_SPAN_C   , "")
        .trim()
    ;

/*{{{
log("...return: %c"+t_data.LF+result, lb8);
}}}*/
    return result;
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
/*_ strip_to_lines {{{*/
let strip_to_lines = function(text)
{
    if(!text) return text;
    return "- "+text
        .   replace(regexp_BRACKET_O, LF)
        .   replace(regexp_COMMA    , LF+"- ")
        .   replace(regexp_BRACKET_C, "")
    ;
};
/*}}}*/
/*}}}*/
/* CHAR TO CHAR {{{*/
/*_ bracket_to_em {{{*/
let bracket_to_em = function(text)
{
    return text
        .   replace(regexp_BRACKET_O,  "<em>")
        .   replace(regexp_BRACKET_C, "</em>")
    ;
};
/*}}}*/
/*_ comma_to_vbar    {{{*/
let comma_to_vbar = function(text)
{
    return text
        .   replace(regexp_COMMA_ASC, "|")
    ;
};
/*}}}*/
/*_ escapeHTML {{{*/
/*{{{*/
var escapeHTML_chars
    = {   "<"                   : "&lt;"
        , ">"                   : "&gt;"
        , "&"                   : "&amp;"
        , '"'                   : "&quot;"
    };

/*}}}*/
let escapeHTML = function (text)
{
    let result = text.replace(/[<>&"]/g, function(character) { return escapeHTML_chars[character]; });
    return result;
};
/*}}}*/
/*_ escape_CR_LF {{{*/
let escape_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR, t_data.SYMBOL_CR   )
        .   replace(regexp_LF, t_data.SYMBOL_LF+"<br>"+LF)
        .   trim()
    ;
};
/*}}}*/
/*_ escape_LF_BR {{{*/
let escape_LF_BR = function(text)
{
    return text
        .   replace(regexp_CR, ""       )
        .   replace(regexp_LF, "<br>"+LF)
        .   trim()
    ;
};
/*}}}*/
/*_ encode_LF {{{*/
let encode_LF = function(text)
{
    return text
        .   replace(regexp_CR, "")
        .   replace(regexp_LF, t_data.SYMBOL_LF)
        .   trim()
    ;
};
/*}}}*/
/*_ underline_from_utf8 {{{*/
let underline_from_utf8 = function(text)
{
    return text
        .   replace(regexp_UNDERLINE_UTF8, "_")
    ;
};
/*}}}*/
/*_ underline_to_space {{{*/
let underline_to_space = function(text)
{
    return text
        .   replace(regexp_UNDERLINE,  " ")
    ;
};
/*}}}*/
/*_ vbar_to_LF    {{{*/
let vbar_to_LF = function(text, prefix="")
{
    return prefix
        +  text
        .   replace(regexp_VBAR, LF+prefix)
    ;
};
/*}}}*/
/*_ vbar_to_QUOTED_LINES {{{*/
let vbar_to_QUOTED_LINES = function(text)
{
    return '"'
        +  text
        .   replace(regexp_VBAR, '"'+LF+'"')
        +  '"'
    ;
};
/*}}}*/
/*_ vbar_to_BR    {{{*/
let vbar_to_BR = function(text, prefix="")
{
    return text
        .   replace(regexp_VBAR, "<br>"+LF+prefix)
    ;
};
/*}}}*/
/*_ vbar_to_comma    {{{*/
let vbar_to_comma = function(text)
{
    return text
        .   replace(regexp_VBAR, ",")
    ;
};
/*}}}*/
/*_ vbar_to_up_arrow {{{*/

let vbar_to_up_arrow = function(text)
{
    return text
        .   replace(regexp_VBAR, t_data.SYMBOL_UP_ARROW)
    ;
};
/*}}}*/
/*_ comma_to_LF    {{{*/
let comma_to_LF = function(text, prefix="")
{
    return prefix
        +  text
        .   replace(regexp_COMMA, LF+prefix)
    ;
};
/*}}}*/
/*}}}*/
/* CHAR ENTITY {{{*/
/*_ character_entities_to_char {{{*/
let character_entities_to_char = function(text)
{
    return text
        .   replace(regexp_eacute_to_char, char_eacute)
        .   replace(regexp_egrave_to_char, char_egrave)
    ;
};
/*}}}*/
/*_ character_entities_to_hex {{{*/
let character_entities_to_hex = function(text)
{
    return text
        .   replace(regexp_eacute_to_hex, hex_eacute)
        .   replace(regexp_egrave_to_hex, hex_egrave)
    ;
};
/*}}}*/
/*_ t_get_htmlEntities {{{ */
let t_get_htmlEntities = function(str)
{
    return String(str)
        .replace(regexp_HTML_AMP  , "&amp;")
        .replace(regexp_HTML_LT   , "&lt;")
        .replace(regexp_HTML_GT   , "&gt;")
        .replace(regexp_HTML_QUOTE, "&quot;")
    ;

};
/*}}}*/
/*}}}*/
/* WORD {{{*/
/*_ get_first_word {{{*/
let get_first_word = function(text, _caller)
{
let log_this = LOG_MAP.S1_RANGE;
/*
    return strip_CR_LF( text.trim() )
        .  replace(regexp_FIRST_WORD, "$1");
    return text;
*/
    regexp_FIRST_WORD.lastIndex = 0;

    let matches = regexp_FIRST_WORD.exec( text );

    let  result = (matches) ? matches[0] : "";

if( log_this) log("get_first_word(text=["+text+"], caller=["+_caller+"]): "+ regexp_FIRST_WORD +" .. return ["+result+"]");
    return result;
};
/*}}}*/
/*_ get_tag_hour {{{*/
let get_tag_hour = function(text)
{
let log_this = LOG_MAP.S1_RANGE;

    regexp_TAG_HOUR.lastIndex = 0;

    let matches = regexp_TAG_HOUR.exec( text );

    let  result = (matches) ? matches[1] : "0";

if(log_this) log("get_tag_hour("+ text +"): "+ regexp_TAG_HOUR +" .. return ["+result+"]");
    return result;
};
/*}}}*/
/*_ tokenize {{{*/
/* ............................................................... HOSTNAME__________   PATHNAME_______ */
let tokenize = function(text, sep=" ")
{
    return text
        .   replace(regexp_NOWRD    , sep)
        .   replace(regexp_BRACKET_O,  "")
        .   replace(regexp_BACKSLASH,  "")
        .   replace(regexp_BRACKET_C,  "")
        .   replace(regexp_HWORD    ,  "")
        .   replace(regexp_HEADS    ,  "")
        .   replace(regexp_CR       ,  "")
        .   replace(regexp_LF       , " ")
        .   trim(                        )
        .   replace(regexp_SPACE    , "_")
    ;
};
/*}}}*/
/*}}}*/
/* NUM {{{*/
/*_ get_num_in_string {{{*/
const regexp_DIGITS = new RegExp("\\d");

let get_num_in_string = function(s)
{
        let matches = s.match(regexp_DIGITS);
        return        matches ? matches[0] : 9;
};
/*}}}*/
/*_ get_int_in_string {{{*/
const regexp_NUMBER = new RegExp("\\d+");

let get_int_in_string = function(s)
{
        let matches = s.match(regexp_NUMBER);
        return        matches ? matches[0] : 9;
};
/*}}}*/
/*}}}*/
/*}}}*/
/* CSV {{{*/
/*_ csv_add {{{*/
let csv_add = function(csv, val)
{
/*{{{
logXXX("csv_add(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
}}}*/
    if(                     !val  ) return csv;
    val = csv_escape(val);
    if(             !csv          ) return val;
    if( csv_contains(csv,    val) ) return csv; /* as a SET (i.e. NOT as a BAG) */
/*{{{
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
logXXX(".return val=[%c"+csv+","+val+"%c]", lb2,lbA)
}}}*/
    return           csv+","+val;
};
/*}}}*/
/*_ csv_ins {{{*/
let csv_ins = function(csv, val)
{
/*{{{
logXXX("csv_ins(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
}}}*/
    if(                     !val  ) return csv;
    val = csv_escape(val);
    if(             !csv          ) return val;
    if( csv_contains(csv,    val) ) return csv; /* as a SET (i.e. NOT as a BAG) */
/*{{{
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
logXXX(".return val=[%c"+csv+","+val+"%c]", lb2,lbA)
}}}*/
    return           val+","+csv;
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

/*_ csv_get {{{*/
let csv_get = function(csv,pos)
{
    if(!csv || !pos) return "";
    let   val = "";
    let     v = csv.split(",");
    for(let i = 0; i < v.length; ++i)
        if((i+1) == pos) { val = v[i]; break; }

    val = csv_unescape(val);
/*{{{
logXXX("csv_get(csv=[%c"+csv+"%c], pos=[%c"+pos+"%c])", lb1,lbA, lb2,lbA)
logXXX(".return val=[%c"+val+"%c]", lb2,lbA)
}}}*/
    return val;
};
/*}}}*/

/*_ csv_count {{{*/
let csv_count = function(csv)
{
    if(!csv) return 0;

    return csv.split(",").length;
};
/*}}}*/
/*_ csv_contains {{{*/
/*
:new C:/LOCAL/DEV/DEVEL/EMC/Extensions/PJC_SPECS/script/PJC_SPECS.asp
*/
let csv_contains = function(csv, val)
{
/*{{{
    if(!val) return false;

    csv = t_tools.t_pattern_del_words_option_sfx(csv);
    val = t_tools.t_pattern_del_words_option_sfx(val);

    val = csv_escape(val);

    let c = ","+ csv.trim() +",";
    let v = ","+ val.trim() +",";
    let r =        c.includes(v);
    return r;
}}}*/
    return (csv_pos(csv,val) > 0);
};
/*}}}*/
/*_ csv_pos {{{*/
let csv_pos = function(csv,val)
{
    if(       !val) return 0;
    if(!csv       ) return 0;

/*{{{
    csv = t_tools.t_pattern_del_words_option_sfx(csv);
    val = t_tools.t_pattern_del_words_option_sfx(val);
}}}*/
    let csv_no_sfx  =            t_tools.t_pattern_del_words_option_sfx(csv); /* ? single entry csv */
    let val_no_sfx  = csv_escape(t_tools.t_pattern_del_words_option_sfx(val));
    if( val_no_sfx == csv_no_sfx) return 1;

    let a = csv.split(",");
    for(let i=0; i < a.length; ++i)
    {
        let       a_i = t_tools.t_pattern_del_words_option_sfx(a[i]);
        if(val_no_sfx == a_i ) return (i+1);
    }

    return 0;
};
/*}}}*/

/*_ csv_del {{{*/
let csv_del = function(csv,val)
{
    if(       !val) return csv;
    if(!csv       ) return csv;
/*{{{
logXXX("csv_del(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
}}}*/

    let csv_no_sfx =            t_tools.t_pattern_del_words_option_sfx(csv); /* ? single entry csv */
    let val_no_sfx = csv_escape(t_tools.t_pattern_del_words_option_sfx(val));

    /* removing a single item */
    if( csv_no_sfx == val_no_sfx)
    {
       csv  = "";
    }
    else {
        val_no_sfx = csv_escape(val_no_sfx);
/*{{{
logXXX("___val=[%c"+val_no_sfx+"%c]", lb2,lbA)
}}}*/

        let a = csv.split(",");
        csv = "";
        for(let i=0; i < a.length; ++i) {
            let item_no_sfx = t_tools.t_pattern_del_words_option_sfx(a[i]);

            if(              !item_no_sfx) continue;
            if( val_no_sfx == item_no_sfx) continue;

            if(!csv)  csv  =     a[i]; /* take first (with sfx) */
            else      csv += ","+a[i]; /* then  more */
        }
    }

/*{{{
logXXX(".return csv=[%c"+csv+"%c]", lb1,lbA)
}}}*/
    return csv;
};
/*}}}*/
/*_ csv_del_last {{{*/
let csv_del_last = function(csv)
{
    if(!csv       ) return csv;
/*{{{
logXXX("csv_del_last(csv=[%c"+csv+"%c])", lb1,lbA)
}}}*/

        let a = csv.split(",");
        csv = "";
        for(let i=0; i < (a.length-1); ++i) {
            let       a_i  =     a[i];
            if(!csv)  csv  =     a_i; /* first */
            else      csv += ","+a_i; /*  more */
        }

/*{{{
logXXX(".return csv=[%c"+csv+"%c]", lb1,lbA)
}}}*/
    return csv;
};
/*}}}*/
/*_ csv_slice .. head .. tail {{{*/
let csv_slice_head         = function(csv, length_max) { return csv_slice_head_or_tail(csv, length_max,  true); };
let csv_slice_tail         = function(csv, length_max) { return csv_slice_head_or_tail(csv, length_max, false); };
let csv_slice_head_or_tail = function(csv, length_max, head_or_tail)
{
let log_this = LOG_MAP.S0_PATTERN || LOG_MAP.S2_SELECT;
    /* no overflow .. [return csv] {{{*/
    if(!csv)                    return csv;

    let a = csv.split(",");
    if( a.length <= length_max) return csv;

    /*}}}*/
    /* head_part tail_part {{{*/
    let head_part = head_or_tail ?  a.length_max -length_max :               -length_max;
    let tail_part = head_or_tail ?               -length_max :  a.length_max -length_max;

    let head = a.slice(head_part);
    let tail = a.slice(tail_part);

    /*}}}*/
    /* head_csv  tail_csv {{{*/
    let head_csv = "";
    for(let i=0; i < (head.length-1); ++i) {
        if(!head_csv) head_csv  =     head[i]; /* first */
        else          head_csv += ","+head[i]; /*  more */
    }

    let tail_csv = "";
    for(let i=0; i < (tail.length-1); ++i) {
        if(!tail_csv) tail_csv  =     tail[i]; /* first */
        else          tail_csv += ","+tail[i]; /*  more */
    }
    /*}}}*/
    /* return result {csv,overflow} {{{*/
    let result
        = {        csv : (head_or_tail ? head_csv : tail_csv )
            , overflow : (head_or_tail ? tail_csv : head_csv )
        };

/*{{{*/
if(log_this) {
    log_key_val_group( "csv_slice_head_or_tail"
                       , {               csv : csv
                           ,      length_max :  length_max
                           ,    head_or_tail : head_or_tail
                           ,        a_length : a.length
                           ,       head_csv  : head_csv
                           ,       tail_csv  : tail_csv
                           ,      result_csv : result.csv
                           , result_overflow : result.overflow
                       }
                       , lf9
                       , false
                     );
}
/*}}}*/
    return result;
    /*}}}*/
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

/*_ csv_escape .. csv_unescape {{{*/
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
/*_ csv_log {{{*/
let csv_log = function(csv, title="")
{
    if(title) {
        if(csv) log("%c "+title                   , lbb+lbH+lf9         );
        else    log("%c "+title+LF+"%c IS  EMPTY ", lbb+lbH+lf9, lbA+lb8);
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
/*}}}*/
/* TITLE {{{*/
/*  get_el_title {{{*/
let get_el_title = function(el)
{
    if(!el) return "";

    while( el ) {
        if(el.title                   ) return el.title;
        if(el.attributes["data-title"]) return el.attributes["data-title"].textContent;

        el =       el.parentElement;
    }

    return "";
};
/*}}}*/
/*  get_id_caption {{{*/
let get_id_caption = function(el_id, caption, lang)
{
/*{{{*/
let   caller = "get_id_caption";
let log_this = LOG_MAP.T0_STORE;

/*}}}*/
    if(!lang) lang = user_lang;
    el_id = strip_el_id_suffix( el_id );
    let el_caption_lang;
    /* FROM.DOM_ID..............................................i18n_get(I18N_GLOSSARY_ENTRY    , el_id, lang){{{*/
    if     (el_id == "pat_bag"              ) el_caption_lang = i18n_get(I18N_PAT_BAG           , el_id, lang);
    else if(el_id == "sel_bag"              ) el_caption_lang = i18n_get(I18N_SEL_BAG           , el_id, lang);

    else if(el_id == "headsup_w"            ) el_caption_lang = i18n_get(I18N_HEADSUP_W         , el_id, lang);
    else if(el_id == "headsup"              ) el_caption_lang = i18n_get(I18N_HEADSUP           , el_id, lang);
    else if(el_id == "headsup_ds"           ) el_caption_lang = i18n_get(I18N_HEADSUP_DS        , el_id, lang);
    else if(el_id == "dom_traversal"        ) el_caption_lang = i18n_get(I18N_DOM_TRAVERSAL     , el_id, lang);
    else if(el_id == "headsup_bw"           ) el_caption_lang = i18n_get(I18N_HEADSUP_BW        , el_id, lang);
    else if(el_id == "headsup_bz"           ) el_caption_lang = i18n_get(I18N_HEADSUP_BZ        , el_id, lang);
    else if(el_id == "headsup_fs"           ) el_caption_lang = i18n_get(I18N_HEADSUP_FS        , el_id, lang);
    else if(el_id == "test_panel"           ) el_caption_lang = i18n_get(I18N_TEST_PANEL        , el_id, lang);
    else if(el_id == "dev_log_map"          ) el_caption_lang = i18n_get(I18N_DEV_LOG_MAP       , el_id, lang);
    else if(el_id == "transcript1"          ) el_caption_lang = i18n_get(I18N_TRANSCRIPT1       , el_id, lang);
    else if(el_id == "transcript2"          ) el_caption_lang = i18n_get(I18N_TRANSCRIPT2       , el_id, lang);
    else if(el_id == "dom_load_tags"        ) el_caption_lang = i18n_get(I18N_DOM_LOAD_TAGS     , el_id, lang);

    else if(el_id == "alt_bag"              ) el_caption_lang = i18n_get(I18N_ALT_BAG           , el_id, lang);
    else if(el_id == "bak_bag"              ) el_caption_lang = i18n_get(I18N_BAK_BAG           , el_id, lang);
    else if(el_id == "off_bag"              ) el_caption_lang = i18n_get(I18N_OFF_BAG           , el_id, lang);
    else if(el_id == "bag_rot"              ) el_caption_lang = i18n_get(I18N_BAG_ROT           , el_id, lang);
    else if(el_id == "words_bag_rot"        ) el_caption_lang = i18n_get(I18N_BAG_ROT           , el_id, lang);
    else if(el_id == "bagopen"              ) el_caption_lang = i18n_get(I18N_BAGOPEN           , el_id, lang);
    else if(el_id == "bag_log"              ) el_caption_lang = i18n_get(I18N_BAG_LOG           , el_id, lang);
    else if(el_id == "pat_sort"             ) el_caption_lang = i18n_get(I18N_SORT_SELECTION    , el_id, lang);

    else if(el_id == "fly_log"              ) el_caption_lang = i18n_get(I18N_FLY_LOG           , el_id, lang);

    else if(el_id == "scroll_smooth"        ) el_caption_lang = i18n_get(I18N_SCROLL_SMOOTH     , el_id, lang);
    else if(el_id == "anchor_freeze"        ) el_caption_lang = i18n_get(I18N_ANCHOR_FREEZE     , el_id, lang);
    else if(el_id == "containers_hi"        ) el_caption_lang = i18n_get(I18N_CONTAINERS_HI     , el_id, lang);
    else if(el_id == "deny_or_allow"        ) el_caption_lang = i18n_get(I18N_DENY_OR_ALLOW     , el_id, lang);
    else if(el_id == "dom_hide1_reset"      ) el_caption_lang = i18n_get(I18N_DOM_HIDE1_RESET   , el_id, lang);
    else if(el_id == t_data.EDIT_OR_STAGE   ) el_caption_lang = i18n_get(I18N_EDIT_OR_STAGE     , el_id, lang);
    else if(el_id == "log_seekspot"         ) el_caption_lang = i18n_get(I18N_LOG_SEEKSPOT      , el_id, lang);

    else if(el_id == "remove_ads"           ) el_caption_lang = i18n_get(I18N_REMOVE_ADS        , el_id, lang);
    else if(el_id == "split_wot"            ) el_caption_lang = i18n_get(I18N_SPLIT_WALL_OF_TEXT, el_id, lang);
    else if(el_id == "lines_wot"            ) el_caption_lang = i18n_get(I18N_LINES_WALL_OF_TEXT, el_id, lang);

    else if(el_id == "mask_or_hide"         ) el_caption_lang = i18n_get(I18N_MASK_OR_HIDE      , el_id, lang);
    else if(el_id == "overflow_visi"        ) el_caption_lang = i18n_get(I18N_OVERFLOW_VISI     , el_id, lang);
    else if(el_id == "pin_seekspot"         ) el_caption_lang = i18n_get(I18N_PIN_SEEKSPOT      , el_id, lang);
    else if(el_id == "words_recycle"        ) el_caption_lang = i18n_get(I18N_WORDS_RECYCLE     , el_id, lang);
    else if(el_id == "show_seekzone"        ) el_caption_lang = i18n_get(I18N_SHOW_SEEKZONE     , el_id, lang);
    else if(el_id == "site_or_page"         ) el_caption_lang = i18n_get(I18N_SITE_OR_PAGE      , el_id, lang);
    else if(el_id == "theme_dark"           ) el_caption_lang = i18n_get(I18N_THEME_DARK        , el_id, lang);
    else if(el_id == "tools_extras"         ) el_caption_lang = i18n_get(I18N_TOOLS_EXTRAS      , el_id, lang);
    else if(el_id == "tools_scroll"         ) el_caption_lang = i18n_get(I18N_TOOLS_SCROLL      , el_id, lang);
    else if(el_id == "tools_trap"           ) el_caption_lang = i18n_get(I18N_TOOLS_TRAP        , el_id, lang);

    else if(el_id == "wording"              ) el_caption_lang = i18n_get(I18N_1_WORDING         , el_id, lang);
    else if(el_id == "words_exact"          ) el_caption_lang = i18n_get(I18N_2_WORDS_EXACT     , el_id, lang);
    else if(el_id == "words_segment"        ) el_caption_lang = i18n_get(I18N_3_WORDS_SEGMENT   , el_id, lang);
    else if(el_id == "words_head_tail"      ) el_caption_lang = i18n_get(I18N_4_WORDS_HEAD_TAIL , el_id, lang);
    else if(el_id == "words_opcycle"        ) el_caption_lang = i18n_get(I18N_5_WORDS_OPCYCLE   , el_id, lang);
    else if(el_id == "words_drop_case"      ) el_caption_lang = i18n_get(I18N_6_WORDS_DROP_CASE , el_id, lang);
    else if(el_id == "words_drop_ing"       ) el_caption_lang = i18n_get(I18N_7_WORDS_DROP_ING  , el_id, lang);
    else if(el_id == "words_drop_s"         ) el_caption_lang = i18n_get(I18N_8_WORDS_DROP_S    , el_id, lang);

/* TODO .. PANELS TOOLTIP IS CURRENTLY CAPTURED BY THEIR LONG_PRESS MAGNIY HANDLER */
/*{{{
const BODY_WIDTH                     = "BODY .. Fixed Width";
        , [ BODY_WIDTH               , "BODY .. Largeur fixe" ]
    else if(el_id == "headsup_bw"           ) el_caption_lang = i18n_get(I18N_BODY_WIDTH        , el_id, lang);
}}}*/

    /*}}}*/
    /* FROM.SUB-TOOL.CSS_CLASSNAME..............................i18n_get(I18N_GLOSSARY_ENTRY    , el_id, lang) {{{*/
    else {
        if     ( el_id.includes("clearpin") ) el_caption_lang = i18n_get(  I18N_CLEAR_PANEL     , el_id, lang);
        else if( el_id.includes("closepin") ) el_caption_lang = i18n_get(  I18N_CLOSE_PANEL     , el_id, lang);
        else if( el_id.includes("push_pin") ) el_caption_lang = i18n_get(    I18N_PIN_PANEL     , el_id, lang);
        else if( el_id.includes("scalepin") ) el_caption_lang = i18n_get(I18N_MAGNIFY_PANEL     , el_id, lang);
    }
    /*}}}*/
    /* DEFAULT TO [BARE DOM_ID] or [BARE CAPTION TOOLTIP] {{{*/
    if(!el_caption_lang) {
        if(!caption && el_id) el_caption_lang = i18n_get(el_id);
        else                  el_caption_lang = "";
    }
    /*}}}*/
    /* [WARNING LOG FOR MISSING ELEMENT TITLE] {{{*/
    if(!el_caption_lang) {
        log("%c"+caller+"("+el_id+"%c"+lang+" %c IS MISSING", lbb+lbL+lf6, lbb+lbC+lf3, lbb+lbR+lf3);
log_caller(2);
    }
    /*}}}*/
    /* [APPEND SPECIFIED CAPTION LINE] {{{*/
    if( caption )
        el_caption_lang += LF + caption;

    /*}}}*/
if(log_this)
    log(caller+"("+el_id+", ["+caption+"], "+lang+"): ...el_caption_lang %c"+el_caption_lang, lbH+lf7);
/*{{{
}}}*/
    return el_caption_lang;
};
/*}}}*/
/*  set_el_caption {{{*/
let set_el_caption = function(el, caption)
{
    el.title = get_id_caption(el.id, caption);
};
/*}}}*/
/*_ get_ex_tooltip {{{*/
let get_ex_tooltip = function(ex)
{
    return ex.message
        .   replace(regexp_COLON, LF)
    ;
};
/*}}}*/
/*}}}*/
/* URL {{{*/
/*  get_url_domain {{{*/
const regex_DOMAIN   = new RegExp("^(\\w*:\/\/[^\/]+)\/?.*");
let get_url_domain = function(url)
{
    if(   !url ) return "";

    let domain
        = (url.indexOf("://" ) > 0)
        ?  url.split  (  '/' )[2]
        :  url.split  (  '/' )[0]
    ;

    return  domain.replace(regex_DOMAIN, "$1") || parseURL(url).scheme+"://";
};
/*}}}*/
/*  parseURL {{{*/
const regexp_URL = new RegExp("^([^:]+):\\/\\/(?:([^@]+)@)?([^\\/:]*)?(?::([\\d]+))?(?:(\\/[^#]*)(?:#(.*))?)?$", "i");
/*_________________ SEPARATOR:_________^__^__^__________^________________^________________^_________^________^______*/
/*____________________ AFFIXE:__1111111__________2222222___3333333333_____44444444_____5555555555____66666__________*/
/*_____________________ TOKEN:   scheme:  /  /  userinfo@  host          :port            /path     #fragment       */

let parseURL = function(url)
{
    var result = {};
    var match  = String(url).match(regexp_URL);
    if( match ) {
        result.scheme   = match[1].toLowerCase();
        result.userinfo = match[2];
        result.host     = match[3];
        result.port     = match[4];
        result.path     = match[5] || "/";
        result.fragment = match[6];

        if(result.userinfo) {
            let               a = result.userinfo.split(":");
            result.user     = a[0];
            result.password = a[1];
        }
    }

    return result;
};
/*}}}*/
/*}}}*/
/* CLIPBOARD {{{*/
/*{{{*/
let cb_textArea = null;

/*}}}*/
/*_ t_copy_to_CLIPBOARD {{{*/
let t_copy_to_CLIPBOARD = function(copy_content)
{
/*{{{*/
    let caller = "t_copy_to_CLIPBOARD";
let log_this   = LOG_MAP.EV3_UP;

if( log_this) log(caller+"("+ellipsis_short(copy_content)+")");
/*}}}*/
    /* [cb_textArea] {{{*/
    if(!cb_textArea) {
        let shadow_root = t_tools.t_get_shadow_root();
        cb_textArea     = document.createElement("TEXTAREA");
        cb_textArea.id  = "cb_textArea";
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
    /* BUFFER TEXTAREA SHOW AND FILL WITH CONTENT {{{*/
    cb_textArea.style.display = "block";
    cb_textArea.value         = copy_content;

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
/*_ get_import_key_val_array_from_free_form_data_text {{{*/
let get_import_key_val_array_from_free_form_data_text = function(page_key, data_text_one_liner)
{
let log_this = DOM_UTIL_LOG || DOM_UTIL_TAG;

    let pat_arr = tokenize( data_text_one_liner ).split("_");
    let alt_arr = pat_arr.splice(10);
    let bak_arr = alt_arr.splice(10);
    let bin_arr = bak_arr.splice(10);

if(log_this && pat_arr.length) t_log.console_dir(pat_arr,"pat_arr");
if(log_this && alt_arr.length) t_log.console_dir(alt_arr,"alt_arr");
if(log_this && bak_arr.length) t_log.console_dir(bak_arr,"bak_arr");
if(log_this && bin_arr.length) t_log.console_dir(bin_arr,"bin_arr");

    let                result = [];
    if(pat_arr.length) result.push( { key : page_key+".pat_arr" , val : JSON.stringify( pat_arr )} );
    if(alt_arr.length) result.push( { key : page_key+".alt_arr" , val : JSON.stringify( alt_arr )} );
    if(bak_arr.length) result.push( { key : page_key+".bak_arr" , val : JSON.stringify( bak_arr )} );
    if(bin_arr.length) result.push( { key : page_key+".bin_arr" , val : JSON.stringify( bin_arr )} );

if(log_this) t_log.console_dir(result,"result");
    return  result;
};
/*}}}*/
/*}}}*/
/* JSON {{{*/
/*_ JSON_parse {{{*/
/*{{{*/
const TO_ERR_100 = "____________________________________________________________________________________________________";
const DIGITS_100 = "0123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789_123456789";
const DECADE_100 = "0_________1_________2_________3_________4_________5_________6_________7_________8_________9_________";

/*}}}*/
let JSON_parse = function(json_str, silent)
{
/*{{{
logBIG("JSON_parse")
}}}*/

    let json_item;
    try {
        json_item = JSON.parse( json_str );
    }
    catch(ex)
    {
        if(!silent) {
            let     offset = get_int_in_string( ex.message );
            let     to_err = Math.floor(offset / 100);
            let    err_str =   json_str.substring(to_err, to_err + 100 );
            let to_err_str = TO_ERR_100.substring(0     ,          offset - to_err       );
            let digits_str = DIGITS_100.substring(0     , Math.max(offset - to_err+2, 10));
            let decade_str = DECADE_100.substring(0     , Math.max(offset - to_err+2, 10));

            log("%c➔ *** "+ex.message     , lbH+lf2);
            log("%c➔ "+    err_str        ,     lf4);
            log("%c➔ "+    to_err_str+"^_",     lf3);
            log("%c➔ "+    digits_str     ,     lf3);
            log("%c➔ "+    decade_str     ,     lf3);
            log_caller();
        }
    }
    return json_item;
};
/*}}}*/
/*}}}*/

/* I18N */
/*{{{*/
/*{{{
let user_lang                        = "EN";
}}}*/
let user_lang                        = "FR"; /*"EN";*/
/* i18n_get {{{*/
let i18n_get = function(key, el_id,lang=user_lang)
{
let   caller = "i18n_get";
let log_this = LOG_MAP.T0_STORE;

    if(!i18n_map_FR) i18n_load();

    let     value;
    switch( lang ) {
    default  :
    case "en": case "EN": value = key;                   break;
    case "fr": case "FR": value =  i18n_map_FR.get(key); break;
    }

    if(!value) {
        value = key;

log("%c"+ caller +"%c"+ el_id  +"%c"+ key    +"%c"+ lang   +"%c IS MISSING"
    ,lbb+lbH+lf8  ,lbb+lbL+lf4  ,lbb+lbC+lf7  ,lbb+lbC+lf8  ,lbb+lbR+lf3   );
log_caller(2);
    }

    /* ID ON SECOND LINE */
    if( el_id )
        value += LF+ unicode_to_charCode( dom_data.SYMBOL_BLACK_SUN ) +" "+el_id;

if(log_this) log("%c"+caller+"("+el_id+" .. "+key+ ")%c...return "+ value, lbL+lf4, lbR+lf5);

    return value;
};
/*}}}*/
/*_ I18N ID {{{*/

const I18N_PAT_BAG                        = "PAT bag";
const I18N_SEL_BAG                        = "SEL bag";
const I18N_HEADSUP_W                      = "Words options";
const I18N_HEADSUP                        = "Tools options";

const I18N_HEADSUP_DS                     = "Document tools";
const I18N_DOM_TRAVERSAL                  = "DOM traversal";
const I18N_HEADSUP_BW                     = "Body width";
const I18N_HEADSUP_BZ                     = "Body zoom";
const I18N_HEADSUP_FS                     = "Body font-size";

const I18N_TEST_PANEL                     = "Test PANEL";
const I18N_DEV_LOG_MAP                    = "DEV [LOG_MAP";
const I18N_TRANSCRIPT1                    = "Transcript 1";
const I18N_TRANSCRIPT2                    = "Transcript 2";

const I18N_DOM_LOAD_TAGS                  = "DOM [LOAD_TAGS";


const I18N_ALT_BAG                        = "ALT bag";
const I18N_BAK_BAG                        = "BAK bag";
const I18N_OFF_BAG                        = "OFF bag";

const I18N_BAGOPEN                        = "Open-Close BAGS";
const I18N_BAG_LOG                        = "Status details";
const I18N_BAG_ROT                        = "Rotate bags";

const I18N_CLEAR_PANEL                    = "Clear panel";
const I18N_CLOSE_PANEL                    = "Close panel";
const I18N_MAGNIFY_PANEL                  = "Magnify panel";
const I18N_PIN_PANEL                      = "Pin panel";

const I18N_FLY_LOG                        = "Flying tooltips";
const I18N_SORT_SELECTION                 = "Sort selection";


const I18N_SCROLL_SMOOTH                  = "Smooth or Instant scrolling";
const I18N_ANCHOR_FREEZE                  = "Disable links navigation";
const I18N_CONTAINERS_HI                  = "Highlight paragraph containers";
const I18N_DENY_OR_ALLOW                  = "Deny or Allow (no-op at this time)";
const I18N_DOM_HIDE1_RESET                = "Reset all hidden containers";
const I18N_EDIT_OR_STAGE                  = "Edit or Apply hidden containers";
const I18N_LOG_SEEKSPOT                   = "Log seekspot tool parameters";

const I18N_REMOVE_ADS                     = "Remove Ads Tags";
const I18N_SPLIT_WALL_OF_TEXT             = "Split Text Panels"+LF+"(i.e. Wall-of-Text)";
const I18N_LINES_WALL_OF_TEXT             = "Show Wall-of-Text line numbers";

const I18N_MASK_OR_HIDE                   = "Mask or Hide hidden containers";
const I18N_OVERFLOW_VISI                  = "Force text-overflow visibility";
const I18N_PIN_SEEKSPOT                   = "Keep last seekspot visible";
const I18N_WORDS_RECYCLE                  = "Recycle";
const I18N_WORDS_RECYCLE_CLICK_TO_HIDE    = "Click to hide";
const I18N_WORDS_RECYCLE_CLICK_TO_DISCARD = "Click to discard all";
const I18N_STORED_PATTERNS                = "Stored patterns";
const I18N_SHOW_SEEKZONE                  = "Show lst seek zone area";
const I18N_SITE_OR_PAGE                   = "Hiding containers at SITE or PAGE level";
const I18N_THEME_DARK                     = "Dark Theme";
const I18N_TOOLS_EXTRAS                   =   "EXTRA TOOLS SELECTED"
    /*.................................*/ +LF+"✔ dom_traversal"
    /*.................................*/ +LF+"✔ dev_log_map"
    /*.................................*/ +LF+"✔ test_panel"
    /*.................................*/ +LF+"✔ dom_load_tags"
    /*.................................*/ +LF+"☀ t_sync_tools_extras"
    /*.................................*/ +LF
    /*.................................*/ +LF+"SEEKER MOVES FASTER"
    /*.................................*/ +LF+"☀ onMove_5_GRAB_SELECTION"
    /*.................................*/ +LF+"☀ onMove_6_GRAB_STICKY"
    /*.................................*/ +LF+"☀ t_seeker_onMove2_ON_NEXT_STICKY"
    /*.................................*/ +LF
;
const I18N_TOOLS_SCROLL                   = "Tools fixed or scrolling with the page";
const I18N_TOOLS_TRAP                     = "Trap tools in their current quadrant while moving hotspot";

const I18N_1_WORDING                      = "Wording State: FREEZED LINKS and PAGE-COLOR-THEME";
const I18N_2_WORDS_EXACT                  = "Select whole words only";
const I18N_3_WORDS_SEGMENT                = "Select word segment";
const I18N_4_WORDS_HEAD_TAIL              = "Grab words prefix and suffix";
const I18N_5_WORDS_OPCYCLE                = "Auto-cycle:"+LF+"1 - whole words"+LF+"2 - word segments"+LF+"3 - head and tail"+LF+"4 .. unselected";
const I18N_6_WORDS_DROP_CASE              = "Ignore case";
const I18N_7_WORDS_DROP_ING               = "Drop [ing] word terminaisons";
const I18N_8_WORDS_DROP_S                 = "Drop [s] word treminations";

/*}}}*/
/*_ I18N STRING {{{*/
const I18N_AS_SET_BY_USER                   = "As set by user";
const I18N_BAGS_CONTENT                     = "Current content";
const I18N_IS_EMPTY                         = " is empty";
const I18N_COPY_ALL_PARAGRAPHS_TO_CLIPBOARD = "Copy all paragraphs to clipboard";
const I18N_MONOSPACE                        = "SHOW (and COPY) HTML or TEXT Format";
const I18N_COPY_PARAGRAPH_TO_CLIPBOARD      = "Copy paragraph to clipboard";
const I18N_CURRENTLY                        = "Currently";
const I18N_REVERSED_Z_TO_A                  = "Reversed Z..A";
const I18N_SCROLL_TO_THIS_PARAGRAPH         = "Scroll to this paragraph";
const I18N_SORTED_A_TO_Z                    = "Sorted A..Z";
const I18N_UNORDERED                        = "Unordered";
const I18N_MOVE_IN_GUTTER_TO_CLEAR_STORAGE
    = "No data worth storing about this page:"+LF
    + "---"+LF
    + "Drag hotspot into gutter"+LF
    + "to clear tools selection and layout."
;
const I18N_ALL_PAGE_LOCAL_STORAGE_REMOVED
    = "No stored information for this page."+LF
    +dom_data.SYMBOL_BLACK_SUN+" Local Storage is empty"
;

/*}}}*/
/*_ I18N STICKY {{{*/
const I18N_STICKY_FIX_TOOLTIP               = "DELETE";
const I18N_STICKY_HAND_MOV_TOOLTIP          = "MOVE";
const I18N_STICKY_PAD_TOOLTIP               = "LONG PRESS EDIT";
const I18N_STICKY_PASTE_TOOLTIP             = "PASTE SELECTED TEXT";
const I18N_STICKY_PEN_TOOLTIP               = "EDIT";
const I18N_STICKY_REFLOW_TOOLTIP            = "RESIZE";
const I18N_STICKY_REFONT_TOOLTIP            = "RESIZE FONT";
const I18N_STICKY_ROTATE                    = "ROTATE";

/*}}}*/
/*_ I18N_ARRAY_FR .. TODO .. SETUP AN EXTERNAL INITIALIZATION  {{{*/
const I18N_ARRAY_FR
    = [ /* ID {{{*/
        [   I18N_SEL_BAG                          , "Index des mots sélectionnés" ]
        , [ I18N_PAT_BAG                          , "Liste des mots sélectionnés" ]
        , [ I18N_ALT_BAG                          , "Liste ALT"                   ]
        , [ I18N_BAK_BAG                          , "Liste BAK"                   ]
        , [ I18N_OFF_BAG                          , "Liste OFF"                   ]

        , [ I18N_BAGOPEN                          , "Déployer-Replier les listes" ]
        , [ I18N_BAG_LOG                          , "Informations détaillées"     ]
        , [ I18N_BAG_ROT                          , "Rotation des listes"         ]

        , [ I18N_CLEAR_PANEL                      , "Vider le panneau"            ]
        , [ I18N_CLOSE_PANEL                      , "Déselectionner le panneau"   ]
        , [ I18N_MAGNIFY_PANEL                    , "Agrandir le panneau"         ]
        , [ I18N_PIN_PANEL                        , "Épingler le panneau"         ]

        , [ I18N_FLY_LOG                          , "Infos-bulles"                ]
        , [ I18N_SORT_SELECTION                   , "Classer la sélection"        ]

        , [ I18N_DOM_TRAVERSAL                    , "Exploration du DOM"          ]

        , [ I18N_HEADSUP                          , "Options des outils"          ]
        , [ I18N_HEADSUP_BW                       , "Body - largeur"              ]
        , [ I18N_HEADSUP_BZ                       , "Body - zoom"                 ]
        , [ I18N_HEADSUP_FS                       , "Body - font-size"            ]
        , [ I18N_HEADSUP_DS                       , "Opérations sur le document"  ]
        , [ I18N_HEADSUP_W                        , "Sélection des mots"          ]

        , [ I18N_DEV_LOG_MAP                      , "DEV [LOG_MAP]"               ]
        , [ I18N_DOM_LOAD_TAGS                    , "DOM [LOAD_TAGS]"             ]
        , [ I18N_TEST_PANEL                       , "Tests"                       ]
        , [ I18N_TRANSCRIPT1                      , "Panneau de test 1"           ]
        , [ I18N_TRANSCRIPT2                      , "Panneau de test 2"           ]

        /*}}}*/

        /* STRINGS {{{*/
        , [ I18N_AS_SET_BY_USER                   , "Positionné par l'utilisateur"                      ]
        , [ I18N_BAGS_CONTENT                     , "contenu actuel"                                    ]
        , [ I18N_IS_EMPTY                         , " est vide"                                         ]
        , [ I18N_COPY_ALL_PARAGRAPHS_TO_CLIPBOARD , "Copier tous les paragraphes dans le presse-papier" ]
        , [ I18N_MONOSPACE                        , "Affichage (et Copie) au format HTML ou TEXTE"      ]
        , [ I18N_COPY_PARAGRAPH_TO_CLIPBOARD      , "Copier ce  paragraphe  dans le presse-papier"      ]
        , [ I18N_CURRENTLY                        , "Actuellement"                                      ]
        , [ I18N_REVERSED_Z_TO_A                  , "inversé Z..A"                                      ]
        , [ I18N_SCROLL_TO_THIS_PARAGRAPH         , "Recentrer sur ce paragraphe"                       ]
        , [ I18N_SORTED_A_TO_Z                    , "ordonné A..Z"                                      ]
        , [ I18N_UNORDERED                        , "non classé"                                        ]
        , [ I18N_MOVE_IN_GUTTER_TO_CLEAR_STORAGE  , "Pas d'information à enregistrer pour cette page:"+LF
            /*...................................*/ + "---"+LF
            /*...................................*/ + "Glissez le panneau vers une bordure"+LF
            /*...................................*/ + "pour supprimer les paramètres associés."
        ]
        , [ I18N_ALL_PAGE_LOCAL_STORAGE_REMOVED   , "Aucune information enregistrée pour cette page."+LF
            /*...................................*/ +dom_data.SYMBOL_BLACK_SUN+" Local Storage est vide"]

        , [ I18N_STICKY_FIX_TOOLTIP               , "SUPPRIMER"                   ]
        , [ I18N_STICKY_HAND_MOV_TOOLTIP          , "DÉPLACER"                    ]
        , [ I18N_STICKY_PAD_TOOLTIP               , "ÉDITER AVEC UN APPUI LONG"   ]
        , [ I18N_STICKY_PASTE_TOOLTIP             , "COPIER LE TEXTE SÉLECTIONNÉ" ]
        , [ I18N_STICKY_PEN_TOOLTIP               , "ÉDITER"                      ]
        , [ I18N_STICKY_REFLOW_TOOLTIP            , "REDIMENSIONNER"              ]
        , [ I18N_STICKY_REFONT_TOOLTIP            , "TAILLE DES CARACTÈRES"       ]
        , [ I18N_STICKY_ROTATE                    , "ORIENTER"                    ]

        , [ I18N_SCROLL_SMOOTH                    , "Défilement progressif ou instantané"                                    ]
        , [ I18N_ANCHOR_FREEZE                    , "Blocage des liens de navigation"                                        ]
        , [ I18N_CONTAINERS_HI                    , "Coloration des paragraphes sélectionnés"                                ]
        , [ I18N_DENY_OR_ALLOW                    , "Deny or Allow (no-op pour le moment)"                                   ]
        , [ I18N_DOM_HIDE1_RESET                  , "Remise à zéro des sections cachées"                                     ]
        , [ I18N_EDIT_OR_STAGE                    , "Édition ou Application des section cachées"                             ]
        , [ I18N_LOG_SEEKSPOT                     , "Log des paramètres du seekspot"                                         ]

        , [ I18N_REMOVE_ADS                       , "Suppression des Tags de Pub"                                            ]
        , [ I18N_SPLIT_WALL_OF_TEXT               , "Partition des pages de texte"+LF+"(i.e. Wall-of-Text)"                   ]
        , [ I18N_LINES_WALL_OF_TEXT               , "Numérotation des lignes Wall-of-Text"                                   ]

        , [ I18N_MASK_OR_HIDE                     , "Masquer ou Cacher les sections à cacher"                                ]
        , [ I18N_OVERFLOW_VISI                    , "Rendre visible les textes en overflow"                                  ]
        , [ I18N_PIN_SEEKSPOT                     , "Garder le dernier seekspot visible"                                     ]
        , [ I18N_WORDS_RECYCLE                    , "Recycler"                                                               ]
        , [ I18N_WORDS_RECYCLE_CLICK_TO_HIDE      , "Click pour les cacher"                                                  ]
        , [ I18N_WORDS_RECYCLE_CLICK_TO_DISCARD   , "Click pour les supprimer"                                               ]
        , [ I18N_STORED_PATTERNS                  , "Mots sélectionnés"                                                      ]
        , [ I18N_SHOW_SEEKZONE                    , "Afficher la dernière zone de sélection"                                 ]
        , [ I18N_SITE_OR_PAGE                     , "Cacher les containers au niveau SITE ou PAGE"                           ]
        , [ I18N_THEME_DARK                       , "Theme foncé"                                                            ]
        , [ I18N_TOOLS_EXTRAS                     , I18N_TOOLS_EXTRAS                                                        ]
        , [ I18N_TOOLS_SCROLL                     , "Outils fixes à l'écran ou sur la page"                                  ]
        , [ I18N_TOOLS_TRAP                       , "Outils confinés dans leur quadrant pendant les déplacements du hotspot" ]

        , [ I18N_1_WORDING                        , "Mode de sélection des mots-clés:"+LF+"- Navigation bloquée"+LF+"- Couleurs de la page" ]
        , [ I18N_2_WORDS_EXACT                    , "Sélectionner des mots entiers"                                          ]
        , [ I18N_3_WORDS_SEGMENT                  , "Sélectionner des segments de mot"                                       ]
        , [ I18N_4_WORDS_HEAD_TAIL                , "Sélectionner aussi les prefixes et suffixes"                            ]
        , [ I18N_5_WORDS_OPCYCLE                  , "Cycle-auto:"+LF+"1 - mots entier"+LF+"2 - segments de mot"+LF+"3 - préfixes et suffixes"+LF+"4 .. désélectionner" ]
        , [ I18N_6_WORDS_DROP_CASE                , "Ignorer majuscules minuscules"                                          ]
        , [ I18N_7_WORDS_DROP_ING                 , "Ignorer les terminaisons en [ing]"                                      ]
        , [ I18N_8_WORDS_DROP_S                   , "Ignorer les terminaisons en [s]"                                        ]

        /*}}}*/
    ];

let i18n_map_FR;
/*}}}*/
/*_ i18n_load {{{*/
let i18n_load = function()
{
let   caller = "i18n_load";
let log_this = LOG_MAP.T0_STORE;

    let i18n_object_FR             = new Object    ( I18N_ARRAY_FR              ); /* OBJECT ..from.. LITERAL .. TO TEST  */
    let i18n_object_FR_stringified = JSON.stringify( i18n_object_FR             ); /* STRING ..from.. OBJECT  .. TO STORE */
    let i18n_object_FR_parsed      = JSON.parse    ( i18n_object_FR_stringified ); /* OBJECT ..from.. STRING  .. TO LOAD  */
    /**/i18n_map_FR                = new Map       ( i18n_object_FR_parsed      ); /*    MAP ..from.. OBJECT  .. TO RUN   */

/*{{{*/
if(log_this) {
    log(caller);

    t_log.console_dir(I18N_ARRAY_FR, "I18N_ARRAY_FR");

    t_log.console_dir(i18n_object_FR    ,   "i18n_object_FR");
    log_key_val_group("i18n_object_FR"  , i18n_object_FR       ,     lf1, false);

    log("%c i18n_object_FR_stringified"+LF + "%c"+ i18n_object_FR_stringified, lbH+lf2, lbA);

    log_key_val_group("i18n_object_FR_parsed     " , i18n_object_FR_parsed           ,     lf3, false);
    t_log.console_dir(i18n_object_FR_parsed        ,   "i18n_object_FR_parsed");

    t_log.console_dir(i18n_map_FR      ,   "i18n_map_FR");
    log_key_val_group("i18n_map_FR"    , i18n_map_FR         ,     lf4, false);

    t_log.console_dir(i18n_map_FR,"i18n_map_FR");
    i18n_map_FR.forEach(function(value, key) {
        log("%c"+key +"%c"+ value, lbL+lf4,lbR+lf5);
    });

}
/*}}}*/
};
/*}}}*/
/*}}}*/

/* ARRAY */
/*_ array_equals {{{*/
let array_equals = function(a1, a2)
{
    if(                                  !a1                     ) return false;
    if(                                               !a2        ) return false;
    if(                                  a1.length !=  a2.length ) return false;
    for(let i=0; i < a1.length; ++i) if( a1[i]     !=  a2[i]     ) return false;
    /*..........................................................*/ return  true;
};
/*}}}*/

/* EXPORT */
/*{{{*/
return { name : "dom_util"
    , logging : function(value) { if(value != undefined) DOM_UTIL_LOG = value; dom_store.t_store_set_value("DOM_UTIL_LOG", DOM_UTIL_LOG); return DOM_UTIL_LOG; }
    , tagging : function(value) { if(value != undefined) DOM_UTIL_TAG = value; dom_store.t_store_set_value("DOM_UTIL_TAG", DOM_UTIL_TAG); return DOM_UTIL_TAG; }
    , t_util_IMPORT

    /* DOM */
    /* EVENT {{{*/
    , get_el_event_handler
    , get_el_event_handler_label
    , get_el_input_event_handler
    , get_el_mouse_event_handler
    , get_el_onkey_event_handler
    , get_el_parent_with_any_event_handler
    , is_event_on_scrollbar
    , send_onchange_event_to

    /*}}}*/
    /* XY {{{*/
    , get_el_xy
    , get_el_xy_computed

    /*}}}*/
    /* LAYOUT {{{*/
    , check_xy_in_node_rect
    , getInPageTop
    , getPageHeight
    , get_el_transformOrigin
    , get_xy_tlbr_dist
    , has_scrollbar
    , has_scrollbar_x
    , has_scrollbar_y
    , intersect_r1_r2
    , intersect_tlbr
    , is_contained_by_parent
    , is_overflowing_parent
    , t_adjust_panel_transform_origin
    , t_el_geometry
    , t_get_panel_scale

    /*}}}*/
    /* NODE {{{*/

    , get_abs_nodes
    , get_document_el_at_XY
    , get_el_anchor_in_view_array
    , get_h_tag
    , get_id_or_node_path_tail
    , get_id_or_tag
    , get_id_or_tag_and_className
    , get_n_lbl
    , get_n_str
    , get_n_txt
    , get_node_id_or_tag
    , get_node_path
    , get_node_path_tail
    , get_node_path_target
    , get_node_txt_id_or_tag_path
    , get_p_str
    , get_parentage
    , get_position_absolute_children
    , get_selector_nodes
    , get_t_str
    , get_viewport_nodes
    , has_a_fixed_parent
    , node_toString

    , t_REMOVE_ADS
    , t_REMOVE_ADS_results
    , t_TEXT_LINES_to_COLORED_HTML
    , t_get_divs_style_z_index_max
    , t_get_e_target_proxy
    , t_replace_initial_title
    , t_restore_initial_title

    /*}}}*/
    /* PARENT-CHILD {{{*/
    , get_child_num
    , get_el_child_with_class
    , get_el_child_with_id
    , get_el_child_with_tag
    , get_el_child_with_tag_class
    , get_el_child_with_tag_first_word
    , get_el_in_view_up_from_el
    , get_el_parent_child_of_class
    , get_el_parent_child_of_id
    , get_el_parent_with_class
    , get_el_parent_with_display_none
    , get_el_parent_with_id
    , get_el_parent_with_tag
    , is_a_doc_tool_button
    , is_a_doc_tool_node
    , is_a_doc_tool_panel
    , is_el_child_of_class
    , is_el_child_of_id
    , is_el_or_child_of_class
    , is_el_or_child_of_parent_el
    , not_an_anchor_target

    /*}}}*/
    /* CSS_CLASS {{{*/
    , add_el_class
    , del_el_class
    , set_el_class
    , has_el_class

    , clear_el_classList
    , cycle_el_classList
    , cycle_id_classList
    , flip_el_class
    , flip_id_class
    , set_el_class_on_off
    , set_id_class_on_off
    , set_el_class_removing

    , is_marked_to_hide
    /*}}}*/
    /* SELECTION {{{*/
    , clearSelection
    , selectNodeContents

    /*}}}*/

    /* STRING */
    /* STRING {{{*/
    , atob_msg
    , btoa_msg
    , ellipsis
    , ellipsis_16
    , ellipsis_short
    , isAlNum
    , mPadEnd
    , mPadStart
    , object_label
    , rect_toString
    , string_to_ms
    , truncate
    /*}}}*/
    /* REGEX {{{*/
    /* TRIM {{{*/
    , trim_WORDS
    , trim_alNum_lines
    , trim_empty_lines
    , trim_node_textContent
    , trim_space_lf

    /*}}}*/
    /* STRIP {{{*/
    , strip_CR_LF
    , strip_HTML
    , strip_UL
    , strip_console_formatting
    , strip_contentEditable
    , strip_pat
    , strip_to_lines

    /*}}}*/
    /* CHAR TO CHAR {{{*/
    , bracket_to_em
    , comma_to_LF
    , comma_to_vbar
    , encode_LF
    , escapeHTML
    , escape_CR_LF
    , escape_LF_BR
    , underline_from_utf8
    , underline_to_space
    , vbar_to_BR
    , vbar_to_LF
    , vbar_to_QUOTED_LINES
    , vbar_to_comma
    , vbar_to_up_arrow

    /*}}}*/
    /* CHAR ENTITY {{{*/
    , character_entities_to_char
    , character_entities_to_hex
    , t_get_htmlEntities

    /*}}}*/
    /* WORD {{{*/
    , get_first_word
    , tokenize

    /*}}}*/
    /* LOG {{{*/
    , get_tag_hour

    /*}}}*/
    /* NUM {{{*/
    , get_num_in_string
    , get_int_in_string

    /*}}}*/
    /*}}}*/
    /* CSV {{{*/
    , csv_add
    , csv_cat
    , csv_ins

    , csv_get

    , csv_count
    , csv_contains
    , csv_pos

    , csv_del
    , csv_del_last
    , csv_slice_head
    , csv_slice_tail
    , csv_slice_head_or_tail

    , csv_sort
    , csv_reverse

    , csv_escape
    , csv_unescape
    , csv_log
    /*}}}*/
    /* TITLE {{{*/
    , get_el_title
    , get_ex_tooltip
    , get_id_caption
    , set_el_caption

    /*}}}*/
    /* URL {{{*/
    , get_url_domain
    , parseURL

    /*}}}*/
    /* CLIPBOARD {{{*/
    , t_copy_to_CLIPBOARD
    , get_import_key_val_array_from_free_form_data_text

    /*}}}*/
    /* JSON {{{*/
    , JSON_parse

    /*}}}*/

    /* I18N  */
    /* GET {{{*/
    , i18n_get

    /*}}}*/
    /*_ I18N ID {{{*/

    , I18N_PAT_BAG
    , I18N_SEL_BAG
    , I18N_HEADSUP_W
    , I18N_HEADSUP

    , I18N_HEADSUP_DS
    , I18N_DOM_TRAVERSAL
    , I18N_HEADSUP_BW
    , I18N_HEADSUP_BZ

    , I18N_TEST_PANEL
    , I18N_DEV_LOG_MAP
    , I18N_TRANSCRIPT1
    , I18N_TRANSCRIPT2

    , I18N_DOM_LOAD_TAGS


    , I18N_ALT_BAG
    , I18N_BAK_BAG
    , I18N_OFF_BAG

    , I18N_BAGOPEN
    , I18N_BAG_LOG
    , I18N_BAG_ROT

    , I18N_CLEAR_PANEL
    , I18N_CLOSE_PANEL
    , I18N_MAGNIFY_PANEL
    , I18N_PIN_PANEL

    , I18N_FLY_LOG
    , I18N_SORT_SELECTION


    , I18N_SCROLL_SMOOTH
    , I18N_ANCHOR_FREEZE
    , I18N_CONTAINERS_HI
    , I18N_DENY_OR_ALLOW
    , I18N_DOM_HIDE1_RESET
    , I18N_EDIT_OR_STAGE
    , I18N_LOG_SEEKSPOT
    , I18N_MASK_OR_HIDE
    , I18N_OVERFLOW_VISI
    , I18N_PIN_SEEKSPOT
    , I18N_WORDS_RECYCLE
    , I18N_WORDS_RECYCLE_CLICK_TO_HIDE
    , I18N_WORDS_RECYCLE_CLICK_TO_DISCARD
    , I18N_STORED_PATTERNS
    , I18N_SHOW_SEEKZONE
    , I18N_SITE_OR_PAGE
    , I18N_THEME_DARK
    , I18N_TOOLS_EXTRAS
    , I18N_TOOLS_SCROLL
    , I18N_TOOLS_TRAP

    , I18N_1_WORDING
    , I18N_2_WORDS_EXACT
    , I18N_3_WORDS_SEGMENT
    , I18N_4_WORDS_HEAD_TAIL
    , I18N_5_WORDS_OPCYCLE
    , I18N_6_WORDS_DROP_CASE
    , I18N_7_WORDS_DROP_ING
    , I18N_8_WORDS_DROP_S

    /*}}}*/
    /*_ I18N STRING {{{*/
    , I18N_AS_SET_BY_USER
    , I18N_BAGS_CONTENT
    , I18N_IS_EMPTY
    , I18N_COPY_ALL_PARAGRAPHS_TO_CLIPBOARD
    , I18N_MONOSPACE
    , I18N_COPY_PARAGRAPH_TO_CLIPBOARD
    , I18N_CURRENTLY
    , I18N_REVERSED_Z_TO_A
    , I18N_SCROLL_TO_THIS_PARAGRAPH
    , I18N_SORTED_A_TO_Z
    , I18N_UNORDERED
    , I18N_MOVE_IN_GUTTER_TO_CLEAR_STORAGE
    , I18N_ALL_PAGE_LOCAL_STORAGE_REMOVED

    /*}}}*/
    /*_ I18N TOOLTIP STICKY {{{*/
    , I18N_STICKY_FIX_TOOLTIP
    , I18N_STICKY_HAND_MOV_TOOLTIP
    , I18N_STICKY_PAD_TOOLTIP
    , I18N_STICKY_PASTE_TOOLTIP
    , I18N_STICKY_PEN_TOOLTIP
    , I18N_STICKY_REFLOW_TOOLTIP
    , I18N_STICKY_REFONT_TOOLTIP
    , I18N_STICKY_ROTATE

    /*}}}*/
    /* ARRAY */
    /* {{{*/
    , array_equals

    /*}}}*/

};
/*}}}*/

}());

/*
:!start explorer "https://blog.wax-o.com/2014/11/working-in-the-devtools-you-dont-use-the-console-engouh/"
*/
