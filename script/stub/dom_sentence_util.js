/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_sentence_util               [dom_sentence] ➔ [dom_util] dependencies │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/

/* globals window, document, Node */

/* exported dom_sentence_util */

const DOM_SENTENCE_UTIL_JS_ID        = "dom_sentence_util_js";
const DOM_SENTENCE_UTIL_JS_TAG       = DOM_SENTENCE_UTIL_JS_ID  +" (211122:18h:25)";  /* eslint-disable-line no-unused-vars */
/*}}}*/
let dom_sentence_util    = (function() {
"use strict";

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [ellipsis]                                                               │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*_ mPadStart .. mPadEnd {{{*/
let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; }; /* eslint-disable-line no-unused-vars */

let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };
/*}}}*/
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
    let msg = show_CR_LF( String(_msg) );
    return (msg.length    <= len)
        ?   msg
        :   msg.substring(0, len-3)+HORIZONTAL_ELLLIPSIS
    ;
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [show_CR_LF]                                                             │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
const regexp_CR              = new RegExp("\\r", "g");
const regexp_LF              = new RegExp("\\n", "g");
const SYMBOL_DOWN_LEFT_ARROW = "\u21B5";
/*_ show_CR_LF {{{*/
let show_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, SYMBOL_DOWN_LEFT_ARROW)
        .   trim()
    ;
};
/*}}}*/

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [t_get_htmlEntities]                                                     │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*_ t_get_htmlEntities {{{ */
/*{{{
const regexp_HTML_AMP           = new RegExp("&"                                        , "g");
const regexp_HTML_LT            = new RegExp("<"                                        , "g");
const regexp_HTML_GT            = new RegExp(">"                                        , "g");
const regexp_HTML_APOS          = new RegExp("'", "g");
const regexp_HTML_QUOTE         = new RegExp('"', "g");
}}}*/
const regexp_HTML_ENTITIES = new RegExp("[\\u00A0-\\u9999<>\\&']", "gim");

let t_get_htmlEntities = function(str)
{
/*{{{
    return String(str)
        .replace(regexp_HTML_AMP  , "&amp;" )
        .replace(regexp_HTML_LT   , "&lt;"  )
        .replace(regexp_HTML_GT   , "&gt;"  )
        .replace(regexp_HTML_APOS , "&apos;")
        .replace(regexp_HTML_QUOTE, "&quot;")
    ;
}}}*/
    return str.replace(regexp_HTML_ENTITIES, function(c) { return "&#"+c.charCodeAt(0)+";"; });
};
/*}}}*/


/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [add_el_class del_el_class clear_el_classList]                           │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
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
    if( remove_only ) return undefined;

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

let cycle_id_classList = cycle_el_classList; /* eslint-disable-line no-unused-vars */
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

let flip_id_class = flip_el_class; /* eslint-disable-line no-unused-vars */
/*}}}*/
/*_ set_el_class_on_off {{{*/
let set_el_class_on_off = function(el, className, on_off)
{
    if(on_off) add_el_class(el, className);
    else       del_el_class(el, className);

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
    if(!el) return false; /* @hapens with dom_sticky.html */
    /* [classes_to_remove] */
    let removed = "";
    for(let i=0; i <               classes_to_remove.length; ++i)
    {
        if( el.classList.contains( classes_to_remove[i] )) {
            el.classList.remove  ( classes_to_remove[i]  );
            removed =              classes_to_remove[i]   ;
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
const MARKED_TO_HIDE        = "marked_to_hide";
let is_marked_to_hide = function( node )
{
    return has_el_class(node, MARKED_TO_HIDE);

};
/*}}}*/
/*}}}*/


/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [get_el_child_with_class]                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
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
/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [get_el_parent_fragment]                                                 │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ get_el_parent_fragment {{{*/
let get_el_parent_fragment = function(el)
{
    while( el ) {
        if(el.shadowRoot                             ) return el;
        if(el.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return el;
        el              = el.parentNode;
    }
    return null;
};
/*}}}*/
/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [get_el_child_with_class]                                                │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
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

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [get_n_lbl]                                                              │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
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

/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [get_node_sibling_at_offset]                                             │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*➔ get_node_sibling_at_offset {{{*/
let get_node_sibling_at_offset = function(node,offset)
{
    if(offset > 0)
    {
        for(let next_node  = node.nextElementSibling
            ;   next_node
            ;   next_node  = next_node.nextElementSibling
           ) {
            if( next_node.nodeName == node.nodeName) {
                if( offset ) offset -= 1;
                if(!offset ) return next_node;
            }
        }
    }
    else {
        for(let prev_node  = node.previousElementSibling
            ;   prev_node
            ;   prev_node  = prev_node.previousElementSibling
           ) {
            if( prev_node.nodeName == node.nodeName) {
                if( offset ) offset += 1;
                if(!offset ) return prev_node;
            }
        }
    }
    return null;
 };
/*}}}*/
/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ [get_parent_tag_id_class_chain]                                          │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/*_ get_nodeName_rank {{{*/
let get_nodeName_rank = function(node)
{
    if(node.nodeType == Node.ATTRIBUTE_NODE) return null;

    let rank = 1;
    for(let prev_node =      node.previousElementSibling
    ;       prev_node
    ;       prev_node = prev_node.previousElementSibling
    ) {
        if(prev_node.nodeName == node.nodeName)
            rank += 1;
    }
    return rank;
 };
/*}}}*/
/*➔ get_parent_tag_id_class_chain {{{*/
const LF    = String.fromCharCode(10);
const PREFIX = "                               \u21B3";
let get_parent_tag_id_class_chain = function(el)
{
    let array = [];

    while( el )
    {
        let e_class = (el.id || el.className) ? "left"   : ""     ;
        let i_class = (         el.className) ? "center" : "right";
        let c_class =                                      "right";

        let el_className = ellipsis_short(el.className);

        let rank         = get_nodeName_rank(el);
        let el_tagName   = el.tagName+( (rank > 1) ? "["+rank+"]":"");

        array.push(   (               "<em class='tag   "+e_class+"'>" + el_tagName   +"</em>"     ) /* TAG     */
                   +  (el.id        ? "<em class='id    "+i_class+"'>#"+ el.id        +"</em>" : "") /* ID      */
                   +  (el_className ? "<em class='class "+c_class+"'>."+ el_className +"</em>" : "") /* CLASS   */
                  );
        el = el.parentElement;
    }

    let parent_id_class_chain = "";

    for(let l=0, i=array.length-1; i>=0; ++l, --i)
        parent_id_class_chain
            += ((l>0) ? (LF+" "+PREFIX.slice(-l))+" " : "")
            +            array[i];

    return parent_id_class_chain;
};
/*}}}*/


/* EXPORT */
/*{{{*/
return { add_el_class
    ,    clear_el_classList
    ,    cycle_el_classList
    ,    del_el_class
    ,    ellipsis
    ,    ellipsis_16
    ,    ellipsis_short
    ,    flip_el_class
    ,    get_el_child_with_class
    ,    get_el_parent_fragment
    ,    get_el_parent_with_class
    ,    get_n_lbl
    ,    get_node_sibling_at_offset
    ,    get_parent_tag_id_class_chain
    ,    has_el_class
    ,    is_marked_to_hide
    ,    set_el_class
    ,    set_el_class_on_off
    ,    set_el_class_removing
    ,    show_CR_LF
    ,    t_get_htmlEntities
};
/*}}}*/

}());

