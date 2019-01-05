"use strict";
/* dom_store_js */
let DOM_STORE_JS_ID        = "dom_store_js";
let DOM_STORE_JS_TAG       = DOM_STORE_JS_ID  +" (181212:17h)";

/* OBSERVERS */
/*  dom_store_add_info_observer {{{*/
/*{{{*/
let store_info_observers = [];

/*}}}*/
let dom_store_add_info_observer = function(observer)
{
/*{{{
logXXX("dom_store_add_info_observer("+observer.name+")")
}}}*/
    if(!store_info_observers.includes( observer ))
        store_info_observers.push    ( observer );
};
let _notify_info = function(info)
{
/*{{{
logXXX("_notify_info("+info+")")
}}}*/
    for(let i=0; i < store_info_observers.length; ++i)
        store_info_observers[i](info);
};
/*}}}*/

/* SET */
/*  store_set_state {{{*/
let store_set_state = function(key, state)
{
/*{{{*/
let caller = "store_set_state(key=["+key+"], state=["+state+"]";
let log_this = LOG_MAP.T0_STORE;

/*}}}*/
    let v = store_getBool(key);
    if( v == state) {
/*{{{
if(log_this) store_key_log("UNCHANGED STATE", key, state);
}}}*/
        return;
    }
    else if(state) {
if(log_this) store_key_log("STORING   STATE", key, state);
        _store_setItem   (key ,"true");
    }
    else if(v) {
if(log_this) store_key_log("REMOVING STATE" , key);
        _store_removeItem(key);
    }
};
/*}}}*/
/*  store_set_value {{{*/
let store_set_value = function(key, value)
{
/*{{{*/
    let caller = "store_set_value(key=["+key+"] value=["+value+"])";
let log_this = LOG_MAP.T0_STORE;

if(log_this) log(caller);
/*}}}*/

    let v = store_getItem(key);
    if( v && (v == value)) {
/*{{{
if(log_this) store_key_log("UNCHANGED VALUE", key, value);
}}}*/

        return;
    }
    else if(value) {
if(log_this) store_key_log("STORING   VALUE", key, value);
        _store_setItem(key , value);
    }
    else if(v) {
if(log_this) store_key_log("REMOVING  VALUE", key);
        _store_removeItem(key);
    }

};
/*}}}*/
/*  _store_setItem {{{*/
let _store_setItem = function(key,value)
{
    localStorage        .setItem(    _store_get_site_or_page_pfx_for_key(key)+"_"+key, value);
};
/*}}}*/
/*  _store_removeItem {{{*/
let _store_removeItem = function(key)
{
    return  localStorage.removeItem( _store_get_site_or_page_pfx_for_key(key)+"_"+key       );
};
/*}}}*/

/* GET */
/*  store_getBool {{{*/
let store_getBool = function(key)
{
    return (localStorage.getItem(    _store_get_site_or_page_pfx_for_key(key)+"_"+key) == "true");
};
/*}}}*/
/*  store_getItem {{{*/
let store_getItem = function(key, site_or_page)
{
    let item
        = (site_or_page == "page") ? localStorage.getItem( _store_get_page_pfx_for_key        ( key )+"_"+key)
        : (site_or_page == "site") ? localStorage.getItem( _store_get_site_pfx_for_key        ( key )+"_"+key)
        :                            localStorage.getItem( _store_get_site_or_page_pfx_for_key( key )+"_"+key)
    ;
    let lfs =                        _store_isa_site_or_page_key        (         key) ? lf5 : lf7;
/*{{{
logXXX("store_getItem %c "+(_store_isa_site_or_page_key(key) ? "PAGE" : "SITE")+" %c"+key+" %c"+ item
    ,                 lbH+lfs                                                    ,lbH+lf4  ,lbH+lfs)
}}}*/
    return item;
};
/*}}}*/
/*  store_parseXY {{{*/
let store_parseXY = function(key)
{
    let caller = "store_parseXY("+key+")";
let log_this = LOG_MAP.T0_STORE;
if( log_this) log(caller);

    let dom_string = store_getItem(key);
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
if( log_this) log("%c"+strip_CR_LF(dom_string)                                   , lbF+lb0);
if( log_this) log("%c0123456789_123456789_123456789_123456789_123456789_123456789_", lbF+lb8);
if( log_this) log("%c0_________1_________2_________3_________4_________5_________6", lbF+lb8);
if( log_this) log("%c*** "+ex, lb2);
    }
};
/*}}}*/

/* SCOPE [PAGE] [SITE] */
/*  store_add_page_key  {{{*/
let _store_isa_page_key_array = [];
let  store_add_page_key       = function(key) {        _store_isa_page_key_array.push    ( key ); };
let _store_isa_page_key       = function(key) { return _store_isa_page_key_array.includes( key ); };
/*}}}*/
/*  store_add_site_key  {{{*/
let _store_isa_site_key_array = [];
let  store_add_site_key       = function(key) {        _store_isa_site_key_array.push    ( key ); };
let _store_isa_site_key       = function(key) { return _store_isa_site_key_array.includes( key ); };
/*}}}*/
/*  store_remove_all_page_items {{{*/
let store_remove_all_page_items = function(msg)
{
    /*{{{*/
let   caller = "store_remove_all_page_items";
let log_this = LOG_MAP.T0_STORE;

    /*}}}*/
    /* COLLECT [page_items_keys_to_remove_array] {{{*/
    let page_pfx = _store_get_site_or_page_pfx_for_key("sel_csv"     );
    let site_pfx = _store_get_site_or_page_pfx_for_key("tools_scroll");

    let page_items_keys_to_remove_array = [];
    for(let i=0; i < localStorage.length; ++i)
    {
        let k = localStorage.key    ( i );
        let v = localStorage.getItem( k );

        if( k.startsWith( page_pfx ) )
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
    /* REMOVE  [page_items_keys_to_remove_array] {{{*/
    if(page_items_keys_to_remove_array.length)
    {
if( log_this) log("%c"+caller, lbb+lbH+lf4);
if( log_this) log("%c localStorage: %c SITE %c"+site_pfx+"%c PAGE %c"+page_pfx +" %c REMOVING PAGE ITEMS:"
                  ,lbH+lf2         ,lbL+lf8,lbR+lf2      ,lbL+lf8,lbR+lf3        ,lbH+lf3                 );

        for(let i=0; i < page_items_keys_to_remove_array.length; ++i)
        {
            let k = page_items_keys_to_remove_array[i];
if(log_this) log((i+1)+"%c removing %c"+k
                 ,      lbL+lf2    ,lbR+lf3);

            localStorage.removeItem(k);
        }
        _notify_info("storage"+LF+"cleared");
    }
    /*}}}*/
};
/*}}}*/
/*  _store_isa_site_or_page_key {{{*/
let _store_isa_site_or_page_key = function(key)
{
    /* currently in SITE mode */
    if( prop_get(SITE_OR_PAGE) )
    {
        /* WHEN IN SITE MODE .. USE SITE PFX */
        if( _store_isa_site_key( key) ) {
/*{{{
logBIG("_store_isa_site_or_page_key("+key+") IN SITE MODE: USE SITE PFX")
}}}*/
            return false;
        }
    }
/*{{{
logXXX("_store_isa_page_key("+key+")=["+_store_isa_page_key(key)+"]")
logXXX("_store_isa_site_key("+key+")=["+_store_isa_site_key(key)+"]")
}}}*/

    /* currently in PAGE mode */
    return  _store_isa_page_key( key ) /* EXPLICIT PAGE SCOPE .. ( IS PAGE) */
    ||     !_store_isa_site_key( key ) /* IMPLICIT PAGE SCOPE .. (NOT SITE)*/
    ;
};
/*}}}*/
/* _store_get_site_or_page_pfx_for_key {{{*/
/*{{{*/
const PAGE_URL_TEMPLATE = "Archives/Public/w3c-wai-ig/2018JanMar/0148.html"; /* test-purpose - tokenizer template */
const SITE_URL_TEMPLATE = "www.localhost.com";                               /* test-purpose - file to http protocol emulation */

/*}}}*/
let _store_get_site_or_page_pfx_for_key = function(key)
{
    return _store_isa_site_or_page_key( key )
        ?  _store_get_page_pfx_for_key( key )
        :  _store_get_site_pfx_for_key( key );
};
/*}}}*/
/*  _store_get_page_pfx_for_key {{{*/
let _store_get_page_pfx_for_key = function(key)
{
/*{{{
logXXX("_store_get_page_pfx_for_key("+key+") .. window.location.pathname=["+window.location.pathname+"]");
}}}*/
        let pathname = _store_get_location_dir_base();

        return tokenize( pathname );
};
/*}}}*/
/*  _store_get_site_pfx_for_key {{{*/
let _store_get_site_pfx_for_key = function(key)
{
/*{{{
logXXX("_store_get_site_pfx_for_key("+key+") .. window.location.hostname=["+window.location.hostname+"]");
}}}*/
    let hostname =  window.location.hostname
        ||          SITE_URL_TEMPLATE;

    return tokenize( hostname );
};
/*}}}*/
/*  _store_get_location_dir_base {{{*/
let _store_get_location_dir_base = function()
{
    let a
        = (window.location.pathname.indexOf(FORESLASH) >= 0)
        ?  window.location.pathname.split  (FORESLASH)
        :  window.location.pathname.split  (BACKSLASH);

    let fileName_or_index
        =  a[a.length-1]
        || "index"
    ;

    let dirName = (  a.length > 1)
        ?          a[a.length - 2]
        :          ""
    ;

/*{{{
logXXX("...a.length=["+ a.length +"]   dirName =["+ dirName  +"]   fileName_or_index=["+ fileName_or_index +"]")
}}}*/

    let result
        = (dirName   !=               "")
        ? (dirName+"_"+fileName_or_index)
        :              fileName_or_index
    ;

    return result || "index";

};
/*}}}*/

/* EVENTS */
/*  store_add_listener {{{*/
let store_add_listener =function()
{
    /*{{{*/
let   caller = "store_add_listener";
let log_this = LOG_MAP.T0_STORE;

if( log_this) log(caller);
    /*}}}*/

    window.addEventListener("storage", _store_storage_listener);
};
/*}}}*/
/*  _store_storage_listener {{{*/
let _store_storage_listener = function(e)
{
    console.log("_store_storage_listener:");
    console.log("...........url=["+ e.url         +"]");
    console.log("...storageArea=["+ e.storageArea +"]");
    console.log("...........key=["+ e.key         +"]");
    console.log("......oldValue=["+ e.oldValue    +"]");
    console.log("......newValue=["+ e.newValue    +"]");
};
/*}}}*/

/* LOG */
/*   store_do_not_log_transient_key {{{*/

let _store_log_transient_key_array  = [];

let  store_do_not_log_transient_key = function(key) {        _store_log_transient_key_array.push    ( key ); };
let _store_isa_transient_key        = function(key) { return _store_log_transient_key_array.includes( key ); };
/*}}}*/
/*  store_key_log {{{*/
let store_key_log = function(msg, key, value="")
{
    if( _store_isa_transient_key( key ) ) {
/*{{{
logBIG(key+" is transient")
}}}*/
        return;
    }

    let site_or_page = _store_isa_site_or_page_key( key ) ? "PAGE" : "SITE";
    let          lbx = (site_or_page == "PAGE") ? lbA : lbb;
    let          lfx = (site_or_page == "PAGE") ? lf5 : lf7;

    log(   "%c STORE SCOPE %c"+ site_or_page +"%c"+ _store_get_site_or_page_pfx_for_key( key )
          +  "%c"             + msg
          +   "%c"            + key +"%c = %c"+ (value || "&nbsp;")
          ,  lbL+lf8       ,lbC+lfx            ,lbR+lfx
          ,    lbH+lfx
          ,     lbx+lfx+lbL,        lbx+lbC,lbx+lbR+lfx
       );

};
/*}}}*/

