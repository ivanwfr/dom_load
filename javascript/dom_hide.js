"use strict";
/* dom_hide_js */
let DOM_HIDE_JS_ID        = "dom_hide_js";
let DOM_HIDE_JS_TAG       = DOM_HIDE_JS_ID  +" (181230:00h)";

/* DOM_HIDE1_SELECT */
/*  dom_hide1_container_clicked .. (called by onUp_6_DOC_CB.[DOC CLICKED]) {{{*/
let dom_hide1_container_clicked = function( container )
{
/*{{{*/
let   caller = "dom_hide1_container_clicked"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(container)+")", lbH+lf2);
    if(!container) return;
/*{{{
if( log_this) console_clear_post(caller);
}}}*/
/*}}}*/
    let          hiding = !prop_get( MASK_OR_HIDE );
    let     node_hidden = _dom_hide_mark_container( container );
    while(  node_hidden && (node_hidden != document.body))
    {
        if(!_dom_hide_all_siblings_hidden( node_hidden ))
        {
            if( hiding )  _dom_hide_set_visibility( node_hidden,  true);
            break;
        }
        else {
            node_hidden = _dom_hide_mark_container( node_hidden.parentElement );
        }
    }
};
/*}}}*/

/*  dom_hide1_collect_nodes {{{*/
/*{{{*/
let  children_collection = [];

/*}}}*/
let dom_hide1_collect_nodes = function(child_level, _parent, parent_level)
{
/*{{{*/
let   caller = "dom_hide1_collect_nodes(child_level=["+child_level+"], _parent=["+get_n_lbl(_parent)+"], parent_level=["+parent_level+"])";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* walk body tree nodes {{{*/
    let parent = _parent;
    if(!parent || (parent == document.body)) {
        children_collection = [];
        parent              = document.body;
        parent_level        = 0;
    }
    /*}}}*/
    /* build [children_collection] {{{*/
    let child_collected_count = 0;
    for(let num=0; num < parent.children.length; ++num)
    {
        let child = parent.children[num];
        /* reached child_level .. collect children_collection */
        if(parent_level == (child_level-1))
        {
            if( _dom_hide_is_node_maskable(child, num) )
            {
                children_collection.push( child );
                child_collected_count += 1;
            }
        }
        /* or step down one level */
        else
            dom_hide1_collect_nodes(child_level,  child, parent_level+1);

    }
    /*}}}*/
/*{{{*/
if(log_this && (parent_level == (child_level-1)) && parent.children.length)
    log(caller+": %c level"+child_level+" %c"+get_parentage(parent)+" %c "+ child_collected_count +" children"
        ,        lbH                     ,lbL+lf9                    ,lbR+lf7);

if(log_this && (parent == document.body))
    log("%c "+children_collection.length+" %c level "+child_level+" nodes"
        ,lbH+lbb+lf7                      ,lbH+lf7);
/*}}}*/
    /* hide [children_collection] {{{*/
    _dom_hide_add_children_collection();
    /*}}}*/
};
/*}}}*/
/*  _dom_hide_is_node_maskable( {{{*/
let _dom_hide_is_node_maskable = function(node, num)
{
/*{{{*/
let   caller = "_dom_hide_is_node_maskable";
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    let                                             not_maskable = "";                    let lfX =  "";
    if(                      !node.clientWidth  ) { not_maskable = "HAS NO WIDTH";            lfX = lf5; }
    if(                      !node.clientHeight ) { not_maskable = "HAS NO HEIGHT";           lfX = lf6; }
    if( is_a_doc_tool_panel ( node )            ) { not_maskable = "IS A DOC TOOL PANEL";     lfX = lf3; }
    if( is_a_doc_tool_button( node )            ) { not_maskable = "IS A DOC TOOL BUTTON";    lfX = lf4; }

    let result = (not_maskable == "");
if(log_this && !result) log(caller+": %c #"+num+" %c"+get_parentage(node)+"%c"+not_maskable
    ,                                 lbL+lf2    ,lbC+lf9                 ,lbR+lfX         );
    return (not_maskable == "");
};
/*}}}*/
/*  _dom_hide_add_children_collection {{{*/
let _dom_hide_add_children_collection = function()
{
/*{{{*/
let   caller = "_dom_hide_add_children_collection";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+": "+children_collection.length+" nodes");
/*}}}*/
    _dom_hide_freeze_history(true, caller);
/*
    for(let i=0                           ; i <  children_collection.length; ++i) dom_hide1_container_clicked(children_collection[i]);
*/
    for(let i=children_collection.length-1; i >= 0                         ; --i) dom_hide1_container_clicked(children_collection[i]);

    _dom_hide_freeze_history(false);
    _dom_hide_csv_stack_push("AFTER _dom_hide_add_children_collection");
};
/*}}}*/

/*  dom_hide1_reset .. (called by onUp_5_TOOL_CB) {{{*/
let dom_hide1_reset = function()
{
/*{{{*/
let   caller = "dom_hide1_reset"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*{{{
if( log_this) console_clear_post(caller);
}}}*/
/*}}}*/
    _dom_hide_csv_stack_clear_history();
    _dom_hide_clear_csv_and_store();
    _dom_hide_clear_display();

    _site_page_or_both_label
        = "ALL RESET"
    ;
    _dom_hide__sync_DOM_HIDE1_RESET();
};
/*}}}*/
/*  _dom_hide_all_siblings_hidden {{{*/
let _dom_hide_all_siblings_hidden = function( node )
{
    if( !node                                ) return false;
    if( !node.parentElement                  ) return false;
    if(  node               == document.body ) return false;
    if(  node.parentElement == document.body ) return false;

    let all_siblings_hidden = true;
    for(let i=0;    i < node.parentElement.childNodes.length; ++i)
    {
        let     child = node.parentElement.childNodes[i];
        if(    !child.classList ) continue; /* TEXT have none */

        if(    !child.classList.contains( NODE_TO_HIDE_NOT_VISIBLE )
            && !child.node_mask
          ) {
            all_siblings_hidden = false;
/*{{{
console.dir(child)
}}}*/
            break;
        }
    }

/*{{{
logXXX("_dom_hide_all_siblings_hidden("+_dom_hide_get_id_or_tag(node)+"): ...return "+all_siblings_hidden+"")
}}}*/
    return all_siblings_hidden;
};
/*}}}*/
/*  _dom_hide_mark_container {{{*/
let _dom_hide_mark_container = function( container )
{
/*{{{*/
let   caller = "_dom_hide_mark_container";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(container)+")", lbH+lf2);
/*{{{
if(log_this) console_clear_post(caller);
}}}*/
/*}}}*/
    /* [node_hidden] [node_mask] {{{*/
    let node_hidden
        = container.node_hidden ? container.node_hidden /* container is a mask        .. with a link to its hidden node */
        : container.node_mask   ? container             /* container is a hidden node .. with a link to its mask */
        :                         container
    ;
if(log_this) console_dir(node_hidden, "node_hidden");

    let node_mask
        = container.node_hidden ? container             /* container is the mask      .. with a link to its hidden node */
        : container.node_mask   ? container.node_mask   /* container is a hidden node .. with a link to its mask */
        :                         null
    ;

if(log_this) console_dir(node_mask, "node_mask");

    /*}}}*/
    /* NO  MASK .. ADD ONE {{{*/
    if( !node_mask ) {
if( log_this) log("...NO  MASK .. ADD ONE");
        /* ADD CSV ...return if already stored {{{*/
        if( !_dom_hide_add_csv ( node_hidden )) return;

        /*}}}*/
        /* DISPLAY {{{*/
        _dom_hide_add_node_mask( node_hidden );

        let hiding = !prop_get( MASK_OR_HIDE );
        if( hiding ) {
            _dom_hide_set_visibility(node_hidden, false);
        }
        /*}}}*/
        /* CLEAR SUBTREE .. (may clear some container hidden children) {{{*/
        if( _dom_hide_clear_subtree( node_hidden ) )
        {
            /* SYNC CSV .. (container hidden children (possibly) cleared) */
            _dom_hide_rebuild_csv_from_hidden_and_masked_nodes();

            let count = csv_count( node_to_hide_csv );
            let em_class = count ? "cc"+(count % 10) : "done cc9";
            _notify_hide_info("<em class='"+em_class+"'>"+(count || "NO")+" HIDDEN SUBTREE NODES</em> <em class='cc2'>SUBTREE REBUILT</em>");
        }
        else {
            let count = csv_count( node_to_hide_csv );
            let em_class = count ? "cc"+(count % 10) : "done cc9";
            _notify_hide_info("<em class='"+em_class+"'>"+(count || "NO")+" NODES MARKED TO HIDE</em>");
        }
        /*}}}*/
    }
    /*}}}*/
    /* HAS MASK .. REMOVE IT {{{*/
    else {
if( log_this) log("...HAS MASK .. REMOVE IT");
        if( has_el_class(node_hidden, LAST_HIDDEN) )
        {
if( log_this) log("...has_el_class(node_hidden, LAST_HIDDEN)");
            del_el_class(node_hidden, LAST_HIDDEN);
            /* TRASH MASK AND UNHIDE NODE {{{*/
            _dom_hide_del_node_mask( node_hidden );

            /*}}}*/

            _dom_hide_csv_stack_pop("REMOVING LAST_HIDDEN"); /* TODO history tool */
        }
        else {
            /* TRASH MASK AND UNHIDE NODE {{{*/
            _dom_hide_del_node_mask( node_hidden );

            /*}}}*/
            /* DEL CSV {{{*/
            _dom_hide_del_csv      ( node_hidden );

            /*}}}*/
        }
        let count = csv_count( node_to_hide_csv );
        let em_class = count ? "cc"+(count % 10) : "done cc9";
        _notify_hide_info("<em class='"+em_class+"'>"+(count || "NO")+" NODES MARKED TO HIDE</em>");
    }
    /*}}}*/
    /* HIGHLIGHT LAST HIDDEN {{{*/
    _dom_hide_highlight_last_hidden();

    /*}}}*/
    let site_page_or_both
        = (          node_to_hide_csv   ? csv_count(node_to_hide_csv) : "NO"  )
        + (prop_get( SITE_OR_PAGE     ) ?                      "SITE" : "PAGE")
    ;
    _dom_hide__sync_DOM_HIDE1_RESET();
    return node_hidden;
};
/*}}}*/

/* DOM_HIDE2_STORE */
/*  dom_hide2_store_reload .. (called by t_store_page_site) {{{*/
let dom_hide2_store_reload = function(site_or_page_or_both="both")
{
/*{{{*/
let   caller = "dom_hide2_store_reload"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"("+site_or_page_or_both+")", lbH+lf2);
/*}}}*/

    _dom_hide_csv_stack_clear_history();

    _dom_hide_clear_display();

    _dom_hide_localStorage_load( site_or_page_or_both );            /* SITE and-or PAGE */

};
/*}}}*/
/*  dom_hide2_store_save {{{*/
let dom_hide2_store_save = function()
{
/*{{{*/
let   caller = "dom_hide2_store_save"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/

    let key   = "node_to_hide_csv";
    let value =  node_to_hide_csv ;

    _notify_hide_store(key, value);

    /* NOTE: node_to_hide_csv_STACK csv history not saved */
};
/*}}}*/
/*  _dom_hide_localStorage_load {{{*/
let _site_page_or_both_label = "";

let _dom_hide_localStorage_load = function(site_or_page_or_both)
{
/*{{{*/
let   caller = "_dom_hide_localStorage_load("+site_or_page_or_both+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* [site_csv] [site_label] {{{*/
    let site_csv   = "";
    let site_label = "";
    if((site_or_page_or_both == "site") || (site_or_page_or_both == "both"))
    {
        site_csv   = store_getItem("node_to_hide_csv", "site"); if(site_csv == null) site_csv = "";
        site_label = (site_csv ? csv_count(site_csv) : "NO")+" SITE";
    }
    /*}}}*/
    /* [page_csv] [page_label] {{{*/
    let page_csv   = "";
    let page_label = "";
    if((site_or_page_or_both == "page") || (site_or_page_or_both == "both"))
    {
        page_csv   = store_getItem("node_to_hide_csv", "page"); if(page_csv == null) page_csv = "";
        page_label = (page_csv ? csv_count(page_csv) : "NO")+" PAGE";
    }
    /*}}}*/

    /* [node_to_hide_csv] = [site_csv + page_csv] {{{*/
    if((site_or_page_or_both == "site"))
    {
        node_to_hide_csv =  site_csv;

if(log_this) csv_log(node_to_hide_csv, "SITE");
    }
    else if((site_or_page_or_both == "page"))
    {
        node_to_hide_csv = page_csv;

if(log_this) csv_log(node_to_hide_csv, "PAGE");
    }
    else {
        node_to_hide_csv = page_csv;

        let csv_array =  site_csv.split(",");
        site_label    = (site_csv ? csv_count(site_csv) : "NO")+" SITE";

        for(let i = csv_array.length-1; i >= 0; --i)
            node_to_hide_csv = csv_ins(node_to_hide_csv, csv_array[i]);
    }
if(log_this) csv_log(node_to_hide_csv, "CURRENT");
    /*}}}*/

    _dom_hide_csv_stack_clear_history();

    _site_page_or_both_label
        = (site_label && page_label) ? (site_label+" and "+page_label)
        :                site_label  ?  site_label
        :                page_label  ?  page_label
        : ""
    ;
    _dom_hide__sync_DOM_HIDE1_RESET();
};
/*}}}*/

/* DOM_HIDE3_OR_MASK */
/*  dom_hide_set_MASK_OR_HIDE {{{*/
let dom_hide_set_MASK_OR_HIDE = function(_hiding)
{
/*{{{*/
let   caller = "dom_hide_set_MASK_OR_HIDE"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

/*}}}*/
    /* HIDE OR MASK SELECTED NODES {{{*/
    let hiding = _hiding || !prop_get( MASK_OR_HIDE );
if( log_this) log("%c HIDE OR MASK %c "+(hiding ? "HIDE" : "MASK"), lbL, lbR);

if( log_this) csv_log(node_to_hide_csv, "node_to_hide_csv");

    let invisible_count = 0;
    if(                         !node_to_hide_csv       ) return;
    let                          node_to_hide_csv_array = node_to_hide_csv.split(","); /* pre_0|div_2 , ul_23|li_8 */
    for(let n_num = 1; n_num <=  node_to_hide_csv_array.length; ++n_num)
    {
        let node_path         =  node_to_hide_csv_array[n_num-1];
        let node              = _dom_hide_get_node_path_target(node_path, n_num);
        if( node ) {
            if( hiding ) {
                _dom_hide_MARKED_TO_HIDE                   ( node,  true);
                _dom_hide_set_visibility                   ( node, false); ++invisible_count;
            }
            else {
                if(!node.node_mask) _dom_hide_add_node_mask( node );
                else                _dom_hide_fit_node_mask( node );
                _dom_hide_set_visibility(                    node, true);
            }
        }
    }
    /*}}}*/
    /* NOTIFY INFO {{{*/
    let       hidden_count = document.querySelectorAll("."+MARKED_TO_HIDE   ).length;
    let       masked_count = document.querySelectorAll("."+NODE_TO_HIDE_MASK).length;
    let              count = csv_count(node_to_hide_csv);
    let                ccx = hiding ? 7 : 2;
    let  hiding_or_masking = hiding ? "HIDING" : "MASKING";

    _notify_hide_info(            " <em class='cc"+ccx         +"'>"+ hiding_or_masking            +      "</em>"
                      +           " <em class='cc"+(count % 10)+"'>"+ (count || "No")              +" Nodes</em>"
                      + (!hidden_count    ? "" : " <em class='cc9'>hidden_count="+ hidden_count    +      "</em>")
                      + (!masked_count    ? "" : " <em class='cc9'>masked_count="+ masked_count    +      "</em>")
                      + (!invisible_count ? "" : " <em class='cc0'> not visible="+ invisible_count +      "</em>")
                     );

    /*}}}*/
    /* HIGHLIGHT LAST HIDDEN {{{*/
    if(!hiding )
        _dom_hide_highlight_last_hidden();

    /*}}}*/
};
/*}}}*/

/* DOM_HIDE4_SCROLL */
/*{{{*/
const SCROLL_TO_LAST_HIDDEN_DELAY =  250;

let _dom_hide_scroll_to_last_hidden_timer;
let _dom_hide_scroll_to_last_hidden_DONE_MS;
let _dom_hide_scroll_to_last_hidden_el;

/*}}}*/
/*  dom_hide4_scroll_to_last_hidden .. (called by t_seek_set_container_selected) {{{*/
let dom_hide4_scroll_to_last_hidden = function( node )
{
/*{{{*/
let   caller = "dom_hide4_scroll_to_last_hidden"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    _dom_hide_scroll_to_last_hidden_el = node;

    if(      _dom_hide_scroll_to_last_hidden_timer ) clearTimeout(_dom_hide_scroll_to_last_hidden_timer);

    if(node) _dom_hide_scroll_to_last_hidden_timer  =  setTimeout(_dom_hide_scroll_to_last_hidden_handler, SCROLL_TO_LAST_HIDDEN_DELAY);
    else     _dom_hide_scroll_to_last_hidden_timer  = null;
};
/*}}}*/
/*  dom_hide4_scroll_to_last_hidden_is_pending .. (called by scroll_listener to cancel pending scroll) {{{*/
let dom_hide4_scroll_to_last_hidden_is_pending = function()
{
    return (_dom_hide_scroll_to_last_hidden_timer != null);
};
/*}}}*/
/*  dom_hide4_scroll_to_last_hidden_handled_recently .. (called by scroll_listener to differentiate SCRIPTED and USER scroll) {{{*/
let dom_hide4_scroll_to_last_hidden_handled_recently = function(delay)
{
    if(_dom_hide_scroll_to_last_hidden_DONE_MS == 0)
        return false;

    let           this_MS = new Date().getTime();
    let elapsed = this_MS - _dom_hide_scroll_to_last_hidden_DONE_MS;

    _dom_hide_scroll_to_last_hidden_DONE_MS = 0;

/*{{{
    _notify_hide_info("<em class='cc7'>SCROLLED TO LAST HIDDEN NODE</em>");
}}}*/

    return (elapsed < delay);
};
/*}}}*/
/*  _dom_hide_scroll_to_last_hidden_handler {{{*/
let _dom_hide_scroll_to_last_hidden_handler = function()
{
    _dom_hide_scroll_to_last_hidden_timer   = null;

    _dom_hide_scroll_to_last_hidden_DONE_MS = new Date().getTime();

    let xy = t_scrollIntoViewIfNeeded_get_scrollXY_with_margin( _dom_hide_scroll_to_last_hidden_el );
    if( xy ) {
        let dx = (xy.x - window.scrollX);
        let dy = (xy.y - window.scrollY);
        if(dx || dy) t_window_scrollTo(xy.x, xy.y);
    }
};
/*}}}*/

/* DOM_HIDE5_START_HISTORY */
/*  dom_hide5_start_history {{{*/
let dom_hide5_start_history = function()
{
/*{{{*/
let   caller = "dom_hide5_start_history"; if(typeof playground_notify != "undefined") playground_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
if( log_this) csv_log(node_to_hide_csv, "REBUILDING STACK HISTORY FROM node_to_hide_csv:");

    node_to_hide_csv_STACK = [];
    let        count       = csv_count( node_to_hide_csv );
    let      tmp_csv       =            node_to_hide_csv;
    node_to_hide_csv       =            "";

    for(let step = 1; step <= count; ++step)
    {
        let    node_path = csv_get(         tmp_csv, step);
        node_to_hide_csv = csv_add(node_to_hide_csv, node_path);

        if(step < count) /* stack all but last step */
            _dom_hide_csv_stack_push("INIT");
    }
if( log_this) csv_log(node_to_hide_csv, "REBUILT STACK HISTORY");

    let site_page_or_both
        = (          node_to_hide_csv   ? csv_count(node_to_hide_csv) : "NO"  )
        + (prop_get( SITE_OR_PAGE     ) ?                      "SITE" : "PAGE")
    ;
    _dom_hide__sync_DOM_HIDE1_RESET();
};
/*}}}*/

/* DOM_HIDE6_OBSERVERS */
/*  dom_hide6_add_container_observer .. (t_seek_set_container_selected) {{{*/
/*{{{*/
let hide_container_observers = [];

/*}}}*/
let dom_hide6_add_container_observer = function(observer)
{
/*{{{
logXXX("dom_hide6_add_container_observer("+observer.name+")")
}}}*/
    if(!hide_container_observers.includes( observer ))
        hide_container_observers.push    ( observer );
};
let _notify_hide_container = function(container, _caller, msg)
{
/*{{{
logXXX("_notify_hide_container("+container+", "+_caller+", "+msg+")")
}}}*/
    for(let i=0; i < hide_container_observers.length; ++i)
        hide_container_observers[i](container, _caller, msg);
};
/*}}}*/
/*  dom_hide6_add_store_set_value_observer .. (store_set_value) {{{*/
/*{{{*/
let hide_store_set_value_observers = [];

/*}}}*/
let dom_hide6_add_store_set_value_observer = function(observer)
{
/*{{{
logXXX("dom_hide6_add_store_set_value_observer("+observer.name+")")
}}}*/
    if(!hide_store_set_value_observers.includes( observer ))
        hide_store_set_value_observers.push    ( observer );
};
let _notify_hide_store = function(key,value)
{
/*{{{
logXXX("_notify_hide_store("+key+", "+value+")")
}}}*/
    for(let i=0; i < hide_store_set_value_observers.length; ++i)
        hide_store_set_value_observers[i](key, value);
};
/*}}}*/
/*  dom_hide6_add_info_observer .. (t_fly) {{{*/
/*{{{*/
let hide_info_observers = [];

/*}}}*/
let dom_hide6_add_info_observer = function(observer)
{
/*{{{
logXXX("dom_hide6_add_info_observer("+observer.name+")")
}}}*/
    if(!hide_info_observers.includes( observer ))
        hide_info_observers.push    ( observer );
};
let _notify_hide_info = function(info)
{
/*{{{*/
    let caller = "node_to_hide_csv("+info+")";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    for(let i=0; i < hide_info_observers.length; ++i)
        hide_info_observers[i](info);
};
/*}}}*/

/* DOM_HIDE8_LOG */
/*  dom_hide8_log .. (called by t_store0_log_settings) {{{*/
/*{{{*/
let _transcript = null;
let node_to_hide_csv_logged;
let     site_or_page_logged;

let missing_transcript_notified_once;
/*}}}*/
let dom_hide8_log = function()
{
/*{{{
logBIG("dom_hide8_log")
}}}*/

    if( _transcript == null) _transcript = document.getElementById("dom_hide_log");

    /* notify missing log transcript {{{*/
    if(!_transcript) {
        if( !missing_transcript_notified_once)
        {
            logBIG("HTML HAS NO [dom_hide_log] TRANSCRIPT TO LOG TO", lbH+lf3);
            missing_transcript_notified_once = true;
        }
        return;
    }
    /*}}}*/
    let key = "node_to_hide_csv";
    let item = node_to_hide_csv ;
    let lfs =               _store_isa_site_or_page_key(key) ? lf5 : lf7;
/*{{{
logXXX("store_getItem %c "+(_store_isa_site_or_page_key(key) ? "PAGE" : "SITE")+" %c"+key+" %c"+ item
    ,                 lbH+lfs                                                    ,lbH+lf4  ,lbH+lfs)
}}}*/
/*{{{
logXXX("o %c node_to_hide_csv  : %c "+node_to_hide_csv+" ", lbF+lb6, lbA);
}}}*/
    let         site_or_page = _store_isa_site_or_page_key(key);
    let   ccX = site_or_page ?  "cc6" : "cc2" ;
    let scope = site_or_page ? "PAGE" : "SITE";
/*{{{
logXXX("scope=["+scope+"]")
}}}*/

    if(        (site_or_page     ==     site_or_page_logged)
          &&   (node_to_hide_csv == node_to_hide_csv_logged)
      ) return;

    let children_collection_length    =            children_collection   .length ;
    let csv_count_node_to_hide_csv    = csv_count( node_to_hide_csv             );
    let node_to_hide_csv_stack_length =            node_to_hide_csv_STACK.length ;

    /* save first sub-tool */
    let firstElementChild = _transcript.firstElementChild;
    _transcript.innerHTML
        = "<em class='big "+ccX+"'>"+ scope + "</em><br>"
        + "COLLECTION    <em class='big cc8'>"+ children_collection_length    +"</em><br>"
        + "NODES TO HIDE <em class='big cc9'>"+ csv_count_node_to_hide_csv    +"</em><br>"
        + "HISTORY       <em class='big cc7'>"+ node_to_hide_csv_stack_length +"</em><br>"
        + _dom_hide_csv_to_html( node_to_hide_csv )
    ;

    /* restore first sub-tool */
    if(       firstElementChild
       && (   firstElementChild.classList.contains( CSS_CLEARPIN )
           || firstElementChild.classList.contains( CSS_CLOSEPIN )
           || firstElementChild.classList.contains( CSS_PUSH_PIN )
           || firstElementChild.classList.contains( CSS_SCALEPIN )
           || firstElementChild.classList.contains("toolbag_button")
         )
      )
        _transcript.insertBefore(firstElementChild, _transcript.firstElementChild);

    node_to_hide_csv_logged = node_to_hide_csv;
    site_or_page_logged     = site_or_page;
};
/*}}}*/


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PRIVATE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ {{{*/
/* const {{{*/
const LAST_HIDDEN               = "last_hidden";
const MARKED_TO_HIDE            = "marked_to_hide";
const NODE_TO_HIDE_MASK         = "node_to_hide_mask";
const NODE_TO_HIDE_NOT_VISIBLE  = "node_to_hide_not_visible";

let node_to_hide_csv            = "";
/*}}}*/
/* [dom_util] DEPENDENT {{{

/\v\w+\zs(add_el_class|csv_add|csv_contains|csv_count|csv_ins|csv_log|del_el_class|get_el_xy|has_el_class|is_el_or_child_of_parent_el)

get_el_xy
is_el_or_child_of_parent_el

add_el_class
del_el_class
has_el_class

csv_add
csv_contains
csv_count
csv_ins
csv_log

}}}*/

/* UI */
/*  _dom_hide__sync_DOM_HIDE1_RESET {{{*/
/*{{{*/
const DOM_HIDE__SYNC_DOM_HIDE1_RESET_DELAY = 500;

let _dom_hide__sync_DOM_HIDE1_RESET_timer;
/*}}}*/
let _dom_hide__sync_DOM_HIDE1_RESET = function()
{
    if(_dom_hide__sync_DOM_HIDE1_RESET_timer) clearTimeout(_dom_hide__sync_DOM_HIDE1_RESET_timer);
    _dom_hide__sync_DOM_HIDE1_RESET_timer   =   setTimeout(_dom_hide__sync_DOM_HIDE1_RESET_handler, DOM_HIDE__SYNC_DOM_HIDE1_RESET_DELAY);

};
/*}}}*/
/*  _dom_hide__sync_DOM_HIDE1_RESET_handler {{{*/
let _dom_hide__sync_DOM_HIDE1_RESET_handler = function()
{
/*{{{
logBIG("_dom_hide__sync_DOM_HIDE1_RESET_handler: _site_page_or_both_label=["+_site_page_or_both_label+"]", lf3);
}}}*/

    let count = csv_count(node_to_hide_csv);
    prop_init(DOM_HIDE1_RESET, (count > 0));

    let el = prop_get_EL(DOM_HIDE1_RESET);
    if( el )
        el.title
            = _site_page_or_both_label
            + LF+" HIDDEN CONTAINERS"
            + LF+" TO UNHIDE"
    ;

/*{{{
    set_el_class_on_off(prop_get_EL( DOM_HIDE1_RESET ), CSS_CHECKED, have_node_to_hide_csv);
}}}*/
};
/*}}}*/

/* clear */
/*  _dom_hide_clear_display {{{*/
let _dom_hide_clear_display = function()
{
/*{{{*/
let caller = "_dom_hide_clear_display";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*{{{
if( log_this) console_clear_post(caller);
}}}*/
/*}}}*/
    _dom_hide_clear_subtree();

};
/*}}}*/
/*  _dom_hide_clear_subtree {{{*/
let _dom_hide_clear_subtree = function( parent_node=null )
{
/*{{{*/
let   caller = "_dom_hide_clear_subtree";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(parent_node)+")", lbH+lf2);
/*}}}*/
    let hide_count = _dom_hide_clear_mark_subtree_MARKED_TO_HIDE( parent_node );
    let mask_count = _dom_hide_clear_mark_subtree_mask          ( parent_node );

    let count
        = hide_count
        + mask_count
    ;

    let            msg  = "";
    if(hide_count) msg  = "<em class='cc8'>"+hide_count+" HIDDEN NODES CLEARED</em>";
    if(mask_count) msg += "<em class='cc8'>"+mask_count+" MASKED NODES CLEARED</em>";
    if(!msg)       msg  = "<em class='cc8'>            NO HIDDEN NODES</em>";

    _notify_hide_info( msg );

    return count;
};
/*}}}*/
/*  _dom_hide_clear_mark_subtree_MARKED_TO_HIDE {{{*/
let _dom_hide_clear_mark_subtree_MARKED_TO_HIDE = function(parent_node)
{
    let count     = 0;
    let node_hidden_list = document.querySelectorAll("."+MARKED_TO_HIDE);
    for(let     i = 0; i < node_hidden_list.length; ++i)
    {
        if( parent_node == node_hidden_list[i]) continue;
        let node_hidden  = node_hidden_list[i];
        if(!parent_node || is_el_or_child_of_parent_el(node_hidden, parent_node))
        {
            _dom_hide_del_node_mask( node_hidden );
            count   += 1;
        }
    }
    return count;
};
/*}}}*/
/*  _dom_hide_clear_mark_subtree_mask {{{*/
let _dom_hide_clear_mark_subtree_mask  = function( parent_node )
{
    let count     = 0;
    let node_mask_list = document.querySelectorAll("."+NODE_TO_HIDE_MASK);
    for(let     i = 0; i < node_mask_list.length; ++i) {
        if( parent_node == node_mask_list[i].node_hidden) continue;
        let    node_mask = node_mask_list[i];
        let  node_hidden = node_mask.node_hidden;

        if(!parent_node || is_el_or_child_of_parent_el(node_hidden, parent_node))
        {
            _dom_hide_del_node_mask( node_hidden );
            count   += 1;
        }
    }
    return count;
};
/*}}}*/

/* hide visibility xy */
/*  _dom_hide_MARKED_TO_HIDE {{{*/

let _dom_hide_MARKED_TO_HIDE = function(node, state)
{
/*{{{*/
let caller = "_dom_hide_MARKED_TO_HIDE";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c(["+_dom_hide_get_id_or_tag(node)+"], "+state+")", lbH+lf2);
/*}}}*/

    if( state ) add_el_class(node, MARKED_TO_HIDE);
    else        del_el_class(node, MARKED_TO_HIDE);
};

let dom_hide_is_marked_to_hide = function( node )
{
    return has_el_class(node, MARKED_TO_HIDE);

};
/*}}}*/
/*  _dom_hide_is_node_parent_hidden {{{*/
let _dom_hide_is_node_parent_hidden = function( node )
{
    let                     node_hidden_list = document.querySelectorAll("."+MARKED_TO_HIDE);
    for(let i = 0;      i < node_hidden_list.length; ++i) {
        if( node         == node_hidden_list[i]) continue;
        let parent_hidden = node_hidden_list[i];
        if( is_el_or_child_of_parent_el(node, parent_hidden) )
            return                            parent_hidden;
    }
    return null;
};
/*}}}*/
/*  _dom_hide_set_visibility {{{*/
let _dom_hide_set_visibility = function(node, visible)
{
/*{{{*/
let   caller = "_dom_hide_set_visibility";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c(["+_dom_hide_get_id_or_tag(node)+"], "+visible+")", lbH+lf2);
/*}}}*/
/*{{{
    if(!visible && (node == document.body))
    {
        logBIG(caller+"NOT HIDING "+get_id_or_tag(node), lf2);
        console.trace();
        logXXX("NOT HIDING NODE");
        return;
    }
}}}*/

    /* SHOW PARENT THEN CHILD .. (in that order or it wont work) {{{*/
    if(!node) return;
    let mask = node.node_mask;
    if(visible) {
        if(    node.parentElement
           &&  node.parentElement.classList
           &&  node.parentElement.classList.contains( NODE_TO_HIDE_NOT_VISIBLE )
          ) {
/*{{{
logXXX("%c CHILD   VISIBLE .. SHOW PARENT "+_dom_hide_get_id_or_tag(node.parentElement), lbH+lf4)
}}}*/
            del_el_class(node.parentElement, NODE_TO_HIDE_NOT_VISIBLE);
        }

        /* node*/del_el_class(node, NODE_TO_HIDE_NOT_VISIBLE);
        if(mask) del_el_class(mask, NODE_TO_HIDE_NOT_VISIBLE);

        /* MASK DELAYED-SYNC-LAYOUT */
        if(mask) setTimeout(function() { _dom_hide_fit_node_mask(node); }, 100);
    }
    /*}}}*/
    /* HIDE CHILD [AND PARENT .. f(currently no visible child)] {{{*/
    else {
        add_el_class(node, NODE_TO_HIDE_NOT_VISIBLE);
        if( _dom_hide_all_siblings_hidden( node ) )
        {
/*{{{
logXXX("%c HIDE PARENT "+_dom_hide_get_id_or_tag(node.parentElement)+" .. f(no other visible child)", lbH+lf8)
}}}*/
            if(node && (node.parentElement != document.body)) add_el_class(node.parentElement, NODE_TO_HIDE_NOT_VISIBLE);
            if(mask && (mask.parentElement != document.body)) add_el_class(mask.parentElement, NODE_TO_HIDE_NOT_VISIBLE);
        }
    }
    /*}}}*/

/*{{{
if( node.style) {
    node.              style   .visibility =   (visible ? "" : "hidden"           ) ;
    node.setAttribute("style", "visibility : "+(visible ? "" : "hidden !important"));
    node.setAttribute("style",    "display : "+(visible ? "" : "none   !important"));
}
}}}*/
};
/*}}}*/
/*  _dom_hide_is_at_xy {{{*/
let _dom_hide_is_at_xy = function(node, x, y)
{
    let caller = "_dom_hide_is_at_xy";
    if(!node.offsetTop              ) return false;
    if(!node.style.display == "none") return false;

    let    xy = get_el_xy(node, caller);
    let result
        =  (x > xy.x)
        && (x < (xy.x + node.offsetWidth ))
        && (y > xy.y)
        && (y < (xy.y + node.offsetHeight))
    ;
/*{{{
logXXX("%c xy=["+xy.x+" "+xy.y+"] %c "+ _dom_hide_get_id_or_tag(node) +" %c TL=["+ node.offsetLeft +" "+ node.offsetTop  +"] %c WH=["+ node.offsetWidth +" "+ node.offsetHeight+"]"
      ,lbL                       ,lbR+lf4                                   ,lbL                                                ,lbR)
logXXX(caller+": ...return "+result);
}}}*/
    return result;
};
/*}}}*/

/* mask */
/*  _dom_hide_add_node_mask {{{*/
/*{{{*/
let _node_mask_div;

/*}}}*/
let _dom_hide_add_node_mask = function( node )
{
/*{{{*/
let   caller = "_dom_hide_add_node_mask";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(node)+")", lbH+lf2);
/*}}}*/
    /* MASK TEMPLATE TO CLONE FROM {{{*/
    if(!_node_mask_div )
    {
        _node_mask_div           = document.createElement("div");
        _node_mask_div.className = NODE_TO_HIDE_MASK;
    }
    /*}}}*/
    /* ASSOCIATE MASK {{{*/
    let node_mask         = _node_mask_div.cloneNode(true);
    node_mask.innerText   = _dom_hide_get_body_hop_count(node);
    node_mask.title       = get_parentage(node);
    node_mask.node_hidden = node;

    document.body.insertBefore(node_mask, document.lastChild.nextSibling);

    node     .node_mask   = node_mask;
    add_el_class(node, "has_node_mask");

    _dom_hide_fit_node_mask( node );
    /*}}}*/
};
/*}}}*/
/*  _dom_hide_get_body_hop_count {{{*/
let _dom_hide_get_body_hop_count = function(node)
{
    let hop = 0; /* body-level is 0 */
    while(        node
              && (node != document.body)
              && (node != document.documentElement)
         ) {
        node            = node.parentNode;
        hop             = hop + 1;
    }
/*{{{
logXXX("_dom_hide_get_body_hop_count: ...return "+hop+"")
}}}*/
    return hop;
};
/*}}}*/
/*  _dom_hide_fit_node_mask {{{*/
let _dom_hide_fit_node_mask = function( node )
{
/*{{{*/
let   caller = "_dom_hide_fit_node_mask";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(node)+")", lbH+lf2);
/*}}}*/
    if( has_el_class(node.parentElement, NODE_TO_HIDE_NOT_VISIBLE) ) del_el_class(node.parentElement, NODE_TO_HIDE_NOT_VISIBLE);
    if( has_el_class(node              , NODE_TO_HIDE_NOT_VISIBLE) ) del_el_class(node              , NODE_TO_HIDE_NOT_VISIBLE);

    let  xy = get_el_xy(   node);
    let e_W = Math.max(16, node.scrollWidth  || node.offsetWidth );
    let e_H = Math.max(16, node.scrollHeight || node.offsetHeight);

    if( node.node_mask)
    {
        node.node_mask.style.left         =     xy.x +"px";
        node.node_mask.style.top          =     xy.y +"px";
        node.node_mask.style.width        =     e_W  +"px";
        node.node_mask.style.height       =     e_H  +"px";

        node.node_mask.style.zIndex       = 1 + node.style.zIndex;
        node.node_mask.style.borderRadius = parseInt(window.getComputedStyle(node).borderRadius) +"px";
    }

};
    /*}}}*/
/*  _dom_hide_del_node_mask {{{*/
let _dom_hide_del_node_mask = function( node )
{
/*{{{*/
let   caller = "_dom_hide_del_node_mask";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(node)+")", lbH+lf2);
/*}}}*/
    /* TRASH MASK {{{*/
    if( node.node_mask )
    {
        document.body.removeChild( node.node_mask );
        node.node_mask = null;
        del_el_class(node, "has_node_mask");
    }
    /*}}}*/
    /* UNHIDE NODE {{{*/
    del_el_class            (node, MARKED_TO_HIDE);
    _dom_hide_set_visibility(node, true);

    /*}}}*/
};
/*}}}*/
/*  _dom_hide_is_node_parent_masked {{{*/
let _dom_hide_is_node_parent_masked = function( node )
{
    let                     node_mask_list = document.querySelectorAll("."+NODE_TO_HIDE_MASK);
    for(let i = 0;      i < node_mask_list.length; ++i) {
        if( node         == node_mask_list[i].node_hidden) continue;
        let parent_hidden = node_mask_list[i].node_hidden;
        if( is_el_or_child_of_parent_el(node, parent_hidden) )
            return                            parent_hidden;
    }
    return null;
};
/*}}}*/

/* csv */
/*  _dom_hide_add_csv {{{*/
let _dom_hide_add_csv = function( node )
{
/*{{{*/
let   caller = "_dom_hide_add_csv";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(node)+")", lbH+lf2);
/*}}}*/
    /* ...return false if already hidden by parent {{{*/
    let node_parent
        =  _dom_hide_is_node_parent_hidden( node )
        || _dom_hide_is_node_parent_masked( node )
    ;
    if( node_parent )
    {
        _notify_hide_info("<em class='cc9'>"+ _dom_hide_get_id_or_tag(node)          +"</em>"
                   +      "<em class='cc8'>   already hidden by                        </em>"
                   +      "<em class='cc9'>"+ _dom_hide_get_id_or_tag( node_parent ) +"</em>"
                 );

        return false;
    }
    /*}}}*/
    /*  CSV node_path {{{*/
    let node_path = _dom_hide_get_node_path( node );
if(log_this) log("...node_path=["+node_path+"]");

    /*}}}*/
    /* ...return false if already hidden {{{*/
    if( csv_contains(node_to_hide_csv, node_path))
    {
        return false;
    }
    /*}}}*/
    /* PUSH CURRENT CSV [BEFORE ADD] {{{*/
    _dom_hide_csv_stack_push("BEFORE ADD");

    /*}}}*/
    /* ADD CSV {{{*/
    node_to_hide_csv = csv_add(node_to_hide_csv, node_path);
if(log_this) _dom_hide_csv_dump(caller);

    /*}}}*/
    /* STORE CSV ...return true {{{*/
    dom_hide2_store_save();

    return true;
    /*}}}*/
};
/*}}}*/
/*  _dom_hide_del_csv {{{*/
let _dom_hide_del_csv = function( node )
{
/*{{{*/
let caller = "_dom_hide_del_csv";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller+"%c("+_dom_hide_get_id_or_tag(node)+")", lbH+lf2);
/*}}}*/
    /*  CSV node_path {{{*/
    let node_path = _dom_hide_get_node_path( node );
if(log_this) log("...node_path=["+node_path+"]");

    /*}}}*/
    /* ...return false if not yet stored {{{*/
    if(!csv_contains(node_to_hide_csv, node_path))
    {
        return false;
    }
    /*}}}*/
    /* PUSH CURRENT CSV [BEFORE DEL] {{{*/
    _dom_hide_csv_stack_push("BEFORE DEL");

    /*}}}*/
    /* DEL CSV {{{*/
        node_to_hide_csv = csv_del(node_to_hide_csv, node_path);
if(log_this) _dom_hide_csv_dump(caller);

    /*}}}*/
    /* STORE CSV ...return true {{{*/
    dom_hide2_store_save();

    return true;
    /*}}}*/
};
/*}}}*/
/*  _dom_hide_clear_csv_and_store {{{*/
let _dom_hide_clear_csv_and_store = function()
{
/*{{{*/
let caller = "_dom_hide_clear_csv_and_store";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    /* CLEAR CSV {{{*/
    node_to_hide_csv = "";

    /*}}}*/
    /* STORE CSV {{{*/
    dom_hide2_store_save();

    /*}}}*/
};
/*}}}*/
/*  _dom_hide_rebuild_csv_from_hidden_and_masked_nodes {{{*/
let _dom_hide_rebuild_csv_from_hidden_and_masked_nodes = function() {
/*{{{*/
let caller = "_dom_hide_rebuild_csv_from_hidden_and_masked_nodes";
let log_this = LOG_MAP.T3_LAYOUT;
if( log_this) log(caller);
/*}}}*/
    /* CLEAR CSV {{{*/
    _dom_hide_clear_csv_and_store();

    /*}}}*/
    /* ADD MARKED_TO_HIDE {{{*/
    let hidden_count = 0;
    let                      node_hidden_list = document.querySelectorAll("."+MARKED_TO_HIDE);
    for(let i = 0;      i <  node_hidden_list.length; ++i) {
        let node_hidden   =  node_hidden_list[i];
        let     node_path = _dom_hide_get_node_path( node_hidden );
if(log_this) log("...node_path=["+node_path+"]");
        node_to_hide_csv = csv_add(node_to_hide_csv, node_path);
        hidden_count += 1;
    }
if(log_this) log("...hidden_count=["+hidden_count+"]");

    /*}}}*/
    /* ADD NODE_TO_HIDE_MASK {{{*/
    let masked_count = 0;
    let                      node_mask_list = document.querySelectorAll("."+NODE_TO_HIDE_MASK);
    for(let i = 0;      i <  node_mask_list.length; ++i) {
        let node_hidden   =  node_mask_list[i].node_hidden;
        let     node_path = _dom_hide_get_node_path( node_hidden );
if(log_this) log("...node_path=["+node_path+"]");
        node_to_hide_csv = csv_add(node_to_hide_csv, node_path);
        masked_count += 1;
    }
if(log_this) log("...masked_count=["+masked_count+"]");

    /*}}}*/
    /* STORE CSV {{{*/
    dom_hide2_store_save();

    /*}}}*/
if(log_this) _dom_hide_csv_dump(caller);
};
/*}}}*/

/* history */
/*{{{*/
let node_to_hide_csv_STACK = [];
let node_to_hide_csv_pushed_last_on_top;

/*}}}*/
/*   _dom_hide_csv_stack_clear_history {{{*/
let _dom_hide_csv_stack_clear_history = function()
{
    node_to_hide_csv_STACK = [];
};
/*}}}*/
/*_ _dom_hide_freeze_history {{{*/
let _dom_hide_freeze_history_caller;
let _dom_hide_freeze_history = function(state, caller)
{
    if(state) _dom_hide_freeze_history_caller = caller;
    else      _dom_hide_freeze_history_caller =     "";
};
/*}}}*/
/*  _dom_hide_csv_stack_push {{{*/
let _dom_hide_csv_stack_push = function(reason)
{
/*{{{*/
let caller = "_dom_hide_csv_stack_push";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+"(%c "+reason+"):"
                  ,lbH         ,lbL+lf3);
/*}}}*/
    /* PUSH ON TOP OF STACK {{{*/
    if( _dom_hide_freeze_history_caller )
    {

if( log_this) log("...%c HISTORY FREEZED BY "+ _dom_hide_freeze_history_caller, lbH+lf8);
    }
    else if(node_to_hide_csv == node_to_hide_csv_pushed_last_on_top)
    {

if( log_this) log("...%c ALREADY ON TOP OF STACK", lbH+lf3);
    }
    else {
        node_to_hide_csv_STACK.push( node_to_hide_csv   );
        node_to_hide_csv_pushed_last_on_top = node_to_hide_csv;

if( log_this) csv_log(node_to_hide_csv,csv_count(node_to_hide_csv)+" NODES PUSHED ON TOP OF STACK");
    }
    /*}}}*/
};
/*}}}*/
/*  _dom_hide_csv_stack_pop {{{*/
let _dom_hide_csv_stack_pop = function(reason)
{
/*{{{*/
let caller = "_dom_hide_csv_stack_pop";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller+" %c "+reason, lbL+lf3,lbR+lf3);
/*{{{
csv_log(node_to_hide_csv, "node_to_hide_csv");
}}}*/
/*}}}*/
    /* [HISTORY BACK] OR [LAST DROPPED] {{{*/
    let popped_csv = node_to_hide_csv_STACK.pop() || "";
/*{{{
csv_log(popped_csv, "popped_csv")
}}}*/

    if(popped_csv) {
if(log_this) log("%c HISTORY BACK", lbH+lf7);

        node_to_hide_csv = popped_csv;
    }
    else {
if(log_this) log("%c LAST DROPPED", lbH+lf3);

        node_to_hide_csv = csv_del_last(node_to_hide_csv);
    }

/*{{{
csv_log(node_to_hide_csv, "node_to_hide_csv");
}}}*/
    /*}}}*/
    /* STORE CSV {{{*/
    dom_hide2_store_save();

    /*}}}*/
    /* HIGHLIGHT LAST HIDDEN {{{*/
    _dom_hide_highlight_last_hidden();

    /*}}}*/

    dom_hide_set_MASK_OR_HIDE();
};
/*}}}*/
/*  _dom_hide_csv_to_html {{{*/
let _dom_hide_csv_to_html = function(csv)
{
    if(!csv) return "";

    let html = "<em class='cc9'>PARENT</em> <em class='cc0 sup'>child-num</em> <em class='cc9'>CHILD</em><br>";

    let            nodes = csv.split(",");
    for(let i=0; i < nodes.length; ++i)
    {
        let path    = "";
        let indent  = "";
        let p_count =  1;
        let            steps = nodes[i].split("|");
        for(let j=0; j < steps.length; ++j)
        {
            let num_child_parent = steps[j].split(" ");
            let              num = num_child_parent[0];
            let            child = num_child_parent[1]; /* of */
            let           parent = num_child_parent[3];
            path += indent
                +   "<em class='cc"+(  p_count)+"'>"+ parent +"</em><em class='sup cc"+(num % 10)+"'>"+num+"</em>"
                +  " <em class='cc"+(++p_count)+"'>"+ child  +"</em>"
                +  "<br>"+LF
            ;
            indent += SYMBOL_RIGHT_ARROW;
        }
        html += path+"<br>";
    }
/*
    logXXX("_dom_hide_csv_to_html: ...return\n"+html)
*/
    return html;
};
/*}}}*/

/* _dom_hide_highlight_last_hidden {{{*/
/*{{{*/
const NODE_TO_HIDE_HIGHLIGHT_LAST_HIDDEN_DELAY = 500;

let _dom_hide_highlight_last_hidden_timer;
/*}}}*/
let _dom_hide_highlight_last_hidden = function()
{
/*{{{*/
let caller = "_dom_hide_highlight_last_hidden";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    if(_dom_hide_highlight_last_hidden_timer) clearTimeout(_dom_hide_highlight_last_hidden_timer);
    _dom_hide_highlight_last_hidden_timer   =   setTimeout(_dom_hide_highlight_last_hidden_handler, NODE_TO_HIDE_HIGHLIGHT_LAST_HIDDEN_DELAY);
};
/*}}}*/
/*  _dom_hide_highlight_last_hidden_handler {{{*/
let _dom_hide_highlight_last_hidden_handler = function()
{
/*{{{*/
let caller = "_dom_hide_highlight_last_hidden_handler";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
/*}}}*/
    _dom_hide_highlight_last_hidden_timer = null;
    let         count = csv_count( node_to_hide_csv );
/*{{{
logXXX("count=["+count+"]");
}}}*/
    if(count < 1) return;
/*{{{
logXXX("node_to_hide_csv=["+node_to_hide_csv+"]");
}}}*/

    let node_list = document.querySelectorAll("."+LAST_HIDDEN);
    for(let i=0; i < node_list.length; ++i)
        del_el_class(node_list[i], LAST_HIDDEN);

    let     node_path = csv_get(node_to_hide_csv, count);
/*{{{
logXXX("node_path=["+node_path+"]");
}}}*/
    let          node = _dom_hide_get_node_path_target(node_path);
    if(!node) return;

/*{{{
console_dir(     node          , "NODE");
}}}*/
    add_el_class(node          , LAST_HIDDEN);
    add_el_class(node.node_mask, LAST_HIDDEN);
/*{{{
console_dir(     node.node_mask, "MASK");
}}}*/

    _notify_hide_container(node, caller, "LAST HIDDEN "+get_id_or_tag(node));
};
/*}}}*/

/* stringify */
/*  _dom_hide_get_node_path {{{*/
let _dom_hide_get_node_path = function( node )
{
    let node_path = "";
    do {
        if( node ) {
            /* count preceding siblings */
            let     child = node;
            let       num = 1;
/*{{{
            while(child = child.previousElementSibling) num += 1;
}}}*/
            for(num = 1; (node.parentElement) && (num <= node.parentElement.children.length); ++num)
            {
                if(node.parentElement.children[num-1] == node) {
/*{{{
logXXX("...(node.parentElement == node.parentNode)=["+(node.parentElement == node.parentNode)+"]")
console.dir(node.parentElement)
logXXX("%c "+num+" of "+_dom_hide_get_id_or_tag(node.parentElement), lbb+lbH+lf7)
console.dir(node)
}}}*/
                    break;
                }
            }

            let   tag_num_str = _dom_hide_tag_num_to_str(node, num);
/*{{{
logXXX("_dom_hide_get_node_path: tag_num_str=["+tag_num_str+"]")
}}}*/
            node_path = csv_ins(node_path, tag_num_str);

            node = node.parentElement;
        }
    }
    while(    node
          && (node != document.body)
          && (node != document.documentElement)
         );

    return comma_to_vbar( node_path );
};
/*}}}*/
/*  _dom_hide_get_node_path_target {{{*/
let _dom_hide_get_node_path_target = function(node_path, log_num=8)
{
/*{{{*/
let caller = "_dom_hide_get_node_path_target";
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log(caller);
if( log_this) log(caller+"("+node_path+")");
/*}}}*/
    /* LOG {{{*/
    let args = [""]; let s = "";
    if( log_this) {
        let lfn = lfX[log_num % 10];

        s += "%c"+log_num; args.push(/*lbb+*/lfn);
    }
    /*}}}*/
    let node_tag_num_array = node_path.split("|");   /* pre_0 | div_2 */
    let          node = document.body;
    for(let s_num = 1; s_num <= node_tag_num_array.length; ++s_num)
    {
        let  node_tag_num = _dom_hide_str_to_tag_num( node_tag_num_array[s_num-1] );
        let       tag     = node_tag_num.tag;
        let           num = node_tag_num.num;
        /* LOG {{{*/
        if( log_this) {
            s      +=     " %c "+tag+" %c"+num;

            let lfs = lfX[s_num % 10];
            args.push( lbL+lfs);
            args.push(            lbR+lfs);
        }
        /*}}}*/
        if( !(node = node.children[num-1]) ) break;
    }
    /* LOG {{{*/
    if( log_this ) {
        let lfs = lfX[(1 + node_tag_num_array.length) % 10];
        s      +=  "%c"+_dom_hide_get_id_or_tag(node); args.push(/*lbb+*/lbH+lfs);
        args[0] = s;
        console.log.apply(console, Array.prototype.slice.call(args));
    }
    /*}}}*/
if(log_this/*|| !node*/) logXXX("%c "+caller+"("+node_path+"): return "+ _dom_hide_get_id_or_tag(node), lbb+lbH+lf7);
    return node;
};
/*}}}*/
/*  _dom_hide_tag_num_to_str - (USAE _dom_hide_get_id_or_tag) {{{*/
let _dom_hide_tag_num_to_str = function(child, num)
{
/*{{{
    let  child_label = _dom_hide_get_id_or_tag( child               );
    let parent_label = _dom_hide_get_id_or_tag( child.parentElement );

    let  child_label = child              .tagName;
    let parent_label = child.parentElement.tagName;
}}}*/
    let  child_label = _dom_hide_get_id_or_tag(child              );
    let parent_label = _dom_hide_get_id_or_tag(child.parentElement);

    return    num                       /* 0 num    */
        +" "+ child_label               /* 1 child  */
        +   " of"                       /* 2 of     */
        +" "+ parent_label              /* 3 parent */
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

/* log */
/* _dom_hide_csv_dump {{{*/
let _dom_hide_csv_dump = function(_caller)
{
    if(!node_to_hide_csv) return;

    let node_to_hide_csv_array = node_to_hide_csv.split(",");               /* pre_0|div_2 , ul_23|li_8 */
    for(let n_num = 1; n_num  <= node_to_hide_csv_array.length; ++n_num)
    {
        let     node_path = node_to_hide_csv_array[n_num-1];

        _dom_hide_get_node_path_target(node_path, n_num);
    }
};
/*}}}*/
/* _dom_hide_get_id_or_tag {{{ */
let _dom_hide_get_id_or_tag = function(el)
{
    if(!el) return "null_node";
    return el.id || el.tagName;
};
/*}}}*/

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ PRIVATE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ }}}*/

