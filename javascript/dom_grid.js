"use strict";
/* dom_grid_js */
let DOM_GRID_JS_ID          = 'dom_grid_js';
let DOM_GRID_JS_TAG         = DOM_GRID_JS_ID    +' (181229:17h)';

/*_ {{{*/
const GRID_CAPTION    = "grid_caption";
const GRID_MARGIN_TOP = 180;

/*}}}*/

/* GRID TOOLS */
/*_ t_grid_TOOLS_SELECT {{{ */
let t_grid_TOOLS_SELECT = function(e)
{
    /* GRID_CAPTION {{{*/
    if(e.ctrlKey) return;
let log_this = LOG_MAP.T2_GRID;

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
let log_this = LOG_MAP.T2_GRID;

if(log_this) log(caller+": caption=["+get_n_lbl(caption)+"]");
if(log_this) log("...caption.id=["+caption.id+"]");
    /*}}}*/
    /* SELECTING - DESELECTING {{{*/
    for(let i=0; i< tools_map.length; ++i)
    {
        let   map = tools_map[i];
        let panel =       map.panel;
        if( panel == hotspot) continue;
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
let log_this = LOG_MAP.T2_GRID;

if( log_this) log(caller);

    /* check current panel selection state */
    let      map  = tools_map_get(panel);

    if(new_state == "toggle") new_state = !map.selected;

if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb9+lbF);

    /* select or deselect panel */
    if(map.selected != new_state)
    {
        map.selected = new_state;
if(log_this) log("... %c "+(map.selected ? "SELECTING" : "DESELECTING") + ": "+panel.id, lbF+(map.selected ? lb4 : lb1));

        store_set_state(panel.id+".selected", map.selected);

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
let log_this = LOG_MAP.T2_GRID;
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
    gl.style.zIndex    = ZINDEX_ON_GRID;
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
let log_this = LOG_MAP.T2_GRID;
if( log_this) log(caller);

    for(let i=0; i< tools_map.length; ++i)
    {
        let   map = tools_map[i];
        let panel =       map.panel;
        if( panel == hotspot) continue;
        let    gl  = t_getElement(panel.id+"_"+GRID_CAPTION);
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
let log_this = LOG_MAP.T2_GRID;
if( log_this) log("t_grid_onresize(caller "+caller+")");

    if(t_grid_onresize_timer) clearTimeout(t_grid_onresize_timer);
    t_grid_onresize_timer   = setTimeout  (t_grid_onresize_handle, T_GRID_ONRESIZE_DELAY);
};

let t_grid_onresize_handle = function()
{
    let caller = "t_grid_onresize_handle";

    if( t_grid_IS_ON_GRID(caller) )
        _t_grid_LAYOUT_ON();

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
if(LOG_MAP.T2_GRID) log("t_grid_onWork_EL_changed(caller "+caller+")");
    if(t_grid_onWork_EL_changed_timer) clearTimeout(t_grid_onWork_EL_changed_timer);
    t_grid_onWork_EL_changed_timer   = setTimeout  (t_grid_onWork_EL_changed_handler, T_GRID_ONWORK_EL_CHANGED_TIMER_DELAY);
};
/*}}}*/
/*_ t_grid_onWork_EL_changed_handler {{{*/
let t_grid_onWork_EL_changed_handler = function()
{
    let caller = "t_grid_onWork_EL_changed_handler";
if(LOG_MAP.T2_GRID) log("%c "+caller+": LOG_MAP.T2_GRID=["+LOG_MAP.T2_GRID+"]",lb9+lbF);
    /* GRID LOGGING ON-OFF {{{*/
    if(typeof t_get_onWork_EL_last_used == undefined) return;

    let  el = t_getElement("headsup_l_check"); if(!el) return;

    if(!LOG_MAP.T2_GRID) el.innerHTML="GRID LOGGING IS OFF";

    /*}}}*/
    /* [dom_grid_playground] {{{*/
    let dom_grid_playground = t_getElement("dom_grid_playground");
    if(dom_grid_playground) {
        if(!LOG_MAP.T2_GRID) dom_grid_playground.classList.add   ("collapsed");
        else                 dom_grid_playground.classList.remove("collapsed");
    }
    /*}}}*/
    if(!LOG_MAP.T2_GRID) return;
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

let log_this = LOG_MAP.T2_GRID;

    if(new_state == "toggle") new_state = !t_grid_IS_ON_GRID(caller);
if( log_this) log("%c "+caller+": new_state=["+new_state+"]",lb9+lbF);

    if( new_state ) { if(typeof dimm_start != undefined) dimm_start(caller); }
    else            { if(typeof dimm_stop  != undefined) dimm_stop (caller); }

    if(!new_state )   t_update_TOOLS_MAP_GEOMETRY(caller); /* not when grid_sized */

    if( new_state ) { t_grid_SIZE_ON (); _t_grid_LAYOUT_ON (); }
    else            { t_grid_SIZE_OFF(); _t_grid_LAYOUT_OFF(); }

    call_t_grid_observers(new_state);

};
/*}}}*/
/*_ t_grid_add_observer_callback {{{*/

let t_grid_observer_callbacks = [];

let t_grid_add_observer_callback = function(observer)
{
if(LOG_MAP.T2_GRID) console_log("t_grid_add_observer_callback("+(t_grid_observer_callbacks.length+1)+")");

    if(!t_grid_observer_callbacks.includes( observer ))
        t_grid_observer_callbacks.push    ( observer );
};

let call_t_grid_observers = function(state)
{
if(LOG_MAP.T2_GRID) console_log("call_t_grid_observers("+state+")");

    for(let i=0; i < t_grid_observer_callbacks.length; ++i)
        t_grid_observer_callbacks[i]( state );
};
/*}}}*/
/*_ t_grid_sized_sync {{{*/
let t_grid_sized_sync = function(caller)
{
let log_this = LOG_MAP.T2_GRID;
if( log_this) log("%c t_grid_sized_sync: CALLED BY ["+caller+"] .. grid_sized=["+grid_sized+"]", lb3);

    let n;
    for(let i=0; i< tools_map.length; ++i)
    {
        let   map = tools_map[i];
        let panel =       map.panel;
        if( panel == hotspot) continue;
        if(!panel           ) continue;
        el = panel;
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
if(LOG_MAP.T2_GRID) console_log(caller);

    if(!tools_map.length) return;

    /* GRID GEOMETRY */
    t_grid_MEASURE();

    /* TOOLS TOGGLE ON OR OFF GRID GEOMETRY */
    if(grid_sized ) t_grid_SIZE_OFF();
    else            t_grid_SIZE_ON ();

    /* TOOLS TOGGLE ON OR OFF GRID LOCATION */
    let el = tools_map[0].panel;
    if( el.classList.contains("on_grid")) _t_grid_LAYOUT_ON();
    else                                   t_grid_sized_sync("t_grid_SIZE_TOGGLE");

};
/*}}}*/
/*_ t_grid_IS_SIZED {{{*/
let t_grid_IS_SIZED = function(caller)
{
if(LOG_MAP.T2_GRID) console_log("t_grid_IS_SIZED: ...return "+grid_sized+" .. caller=["+caller+"]");

    return grid_sized;
};
/*}}}*/
/*_ t_grid_IS_ON_GRID {{{*/
let t_grid_IS_ON_GRID = function(_caller)
{
let log_this = LOG_MAP.T2_GRID;

    if(!tools_map.length) t_load_TOOLS_MAP("t_grid_IS_ON_GRID");

if( log_this) log("%c t_grid_IS_ON_GRID %c CALLED BY "+_caller+" %c "+grid_sized, lbL, lbR, lbH+(grid_sized ? lf4 : lf8));
    return grid_sized;
};
/*}}}*/
/*_ t_grid_SIZE_[ON/OFF/SET] {{{*/
const GRID_SIZED      = "GRID SIZED";
let t_grid_SIZE_ON    = function() { t_grid_SIZE_STATE(true ); };
let t_grid_SIZE_OFF   = function() { t_grid_SIZE_STATE(false); };
let t_grid_SIZE_STATE = function(state)
{
    let caller = "t_grid_SIZE_STATE("+state+")";
if(LOG_MAP.T2_GRID) log("%c "+caller,lb5+lbF);

    let          checkbox         = t_getElement("headsup_l_size_checkbox");
    if(checkbox) checkbox.checked = state;

    grid_sized = state;

    t_grid_onWork_EL_changed(caller);

    /* TOOLS MAY SHOW DIMMER MASK (when grid_sized) */
};
/*}}}*/

/* GRID LAYOUT */
/*_ _t_grid_LAYOUT_OFF {{{*/
let _t_grid_LAYOUT_OFF = function()
{
    let caller = "_t_grid_LAYOUT_OFF";
if(LOG_MAP.T2_GRID) log("%c "+caller,lb9+lbF);

    if(!tools_map  ) return;

    let n = 1;
    for(let i=0; i< tools_map.length; ++i)
    {
        let   map = tools_map[i];
        let panel =       map.panel;
        if( panel == hotspot) continue;
        if(!panel           ) continue;
        let    el = panel;

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
/*{{{
logXXX("RESTORE SAVED POSITION=["+map.x+" "+map.y+"]")
}}}*/
            el.style.position = map.p     ;
            el.style.left     = map.x+"px";
            el.style.top      = map.y+"px";
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
/*_ _t_grid_LAYOUT_ON {{{*/
let _t_grid_LAYOUT_ON = function()
{
    let caller  = "_t_grid_LAYOUT_ON";
let log_this = LOG_MAP.T2_GRID;
if(log_this) log("%c "+caller,lb9+lbF);
    /* UPDATE GRID LAYOUT {{{*/
    t_grid_MEASURE();

    /*}}}*/

    let   x = t_mw;
    let   y = t_mh;
    let num = 1;
    for(let i=0; i< tools_map.length; ++i)
    {
        let   map = tools_map[i];
        let panel =       map.panel;
        if( panel == hotspot) continue;
        if(!panel           ) continue;
        let el = panel;

/*if(log_this) console_log(num+" [xy_wh]=["+x+" "+y+"] ["+t_gw+"x"+t_gh+"] ["+el.id+"]");*/

        /* set on grid */
        el.style.position = "fixed";
        el.classList.remove("hidden" );
        el.classList.add   ("on_grid");
        el.classList.add   ("cc"+num );

        map.x = el.offsetLeft;
        map.y = el.offsetTop;

/*{{{
logXXX("%c"+caller+"%c "+panel.id+" %c "+map.x+" "+map.y, lbH, lbC+lf3, lbH+lf8);
}}}*/

        /* grid position */
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
let t_gw   = 0; /* grid */
let t_gh   = 0; /* grid */
let t_mw   = 0; /* margin */
let t_mh   = 0; /* margin */
let t_mg   = 0; /* margin gap */

let t_grid_MEASURE = function()
{
    let caller = "t_grid_MEASURE"; if(LOG_MAP.T2_GRID) console_log(caller);
    /* t_rows t_cols {{{*/

    if(!tools_map.length) t_load_TOOLS_MAP(caller);

    t_cols  = Math.round(Math.sqrt(tools_map.length));

    if((t_cols*t_cols) < tools_map.length  ) t_cols += 1;

    t_rows  = t_cols;

    /*}}}*/
    /* grid {{{*/
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    let  cw = Math.round(ww / (t_cols+1));
    let  ch = Math.round(wh / (t_rows+1));
    if((cw == t_gw) && (ch == t_gh)) {
if(LOG_MAP.T2_GRID) console_warn(caller+": GRID UNCHANGED");
        return;
    }

    t_gw =            cw;
    t_gh =            ch;
    t_mw = Math.round(cw/2);
    t_mh = Math.round(ch/2);
    t_mg = Math.round(ch/8);

if(LOG_MAP.T2_GRID && t_grid_IS_ON_GRID(caller)) console_log(" ("+t_mw+"+ "+t_cols+"x"+t_gw+" + "+t_mw+") == "+(t_mw + t_cols*t_gw +t_mw)+" == ww= "+ww+"");
if(LOG_MAP.T2_GRID && t_grid_IS_ON_GRID(caller)) console_log(" ("+t_mh+"+ "+t_rows+"x"+t_gh+" + "+t_mh+") == "+(t_mh + t_rows*t_gh +t_mh)+" == wh= "+wh+"");
    /*}}}*/
    /* headsup_l_table {{{*/

    let msg = "<table>"
            + " <tr> <td>("+t_mw+"</td><td>+</td> <th>"+t_cols+"x<em class='cc0'>"+t_gw+"</em></th> <td>+</td> <td>"+t_mw+")</td> <td>==</td> <th class='cc4'>"+(t_mw + t_cols*t_gw +t_mw)+"</th> <td>==</td> <th class='cc5'>ww= "+ww+"</th></tr>"
            + " <tr> <td>("+t_mh+"</td><td>+</td> <th>"+t_rows+"x<em class='cc0'>"+t_gh+"</em></th> <td>+</td> <td>"+t_mh+")</td> <td>==</td> <th class='cc4'>"+(t_mh + t_rows*t_gh +t_mh)+"</th> <td>==</td> <th class='cc5'>wh= "+wh+"</th></tr>"
            + "</table>"
        ;
if(LOG_MAP.T2_GRID) log(msg);
    let el = t_getElement("headsup_l_table");
    if(el) el.innerHTML = msg;

    /*}}}*/
};
/*}}}*/

/* GRID CSS RULES */
/*_ t_grid_css_list {{{*/
let t_grid_css_list = function()
{
    let caller = "t_grid_css_list"; if(LOG_MAP.T2_GRID) console_log(caller);
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
if(LOG_MAP.T2_GRID) console_log(caller);

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

if(LOG_MAP.T2_GRID) console_log(caller+":");
if(LOG_MAP.T2_GRID) console_dir(t_grid_css);
};
/*}}}*/
/*_ t_grid_deleteRules {{{*/
let t_grid_deleteRules = function()
{
    let caller = "t_grid_deleteRules"; if(LOG_MAP.T2_GRID) console_log(caller);

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
if(LOG_MAP.T2_GRID) console_log(caller);

    let s = caller+": CREATING <em>"+T_GRID_CSS_ID+"</em><br>";
    let el   = document.createElement("STYLE");
    el.id    = T_GRID_CSS_ID;
    el.title = T_GRID_CSS_ID;
    el.type  = "text/css";
    el.rel   = "stylesheet";

    document.getElementsByTagName('head')[0].appendChild(el);
    t_grid_css = el.sheet;

    t_grid_trace(s);
if(LOG_MAP.T2_GRID) console_dir(t_grid_css);
};
/*}}}*/

/* GRID LOG */
/*_ t_grid_logging_toggle {{{*/
let t_grid_logging_toggle = function(new_state="toggle")
{
    let caller = "t_grid_logging_toggle";

    LOG_MAP.T2_GRID
    = (new_state == "toggle") ? !LOG_MAP.T2_GRID
    :                            new_state;

log("%c "+caller+": LOG_MAP.T2_GRID set to "+LOG_MAP.T2_GRID, lb7+lbF);

    t_grid_onWork_EL_changed(caller);
    t_sync_tool_clones(caller);
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
/*if(LOG_MAP.T2_GRID) log("t_getElement("+id+")");*/
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

