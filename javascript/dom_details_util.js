/*┌──────────────────────────────────────────────────────────────────────────┐*/
/*│ dom_details_util                                                         │*/
/*└──────────────────────────────────────────────────────────────────────────┘*/
/* jshint esversion: 9, laxbreak:true, laxcomma:true, boss:true {{{*/
/* globals window, Document, Node */

/* exported dom_details_util, DOM_DETAILS_UTIL_JS_TAG */

/* eslint-disable no-warning-comments */
/* eslint-disable dot-notation        */

const DOM_DETAILS_UTIL_JS_ID    = "dom_details_util_js";
const DOM_DETAILS_UTIL_JS_TAG   = DOM_DETAILS_UTIL_JS_ID  +" (210928:15h:28)";
/*}}}*/
let dom_details_util    = (function() {
"use strict";

let add_el_class        = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class        = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
let has_el_class        = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };
/*_ get_el_child_with_tag {{{*/
let get_el_child_with_tag = function(parent,tag)
{
    for(let     c  = 0; c < parent.children.length; ++c) {
        let child  = parent.children[c];
        if((child != null) && (child.tagName == tag))
            return child;
    }
    return null;
};
/*}}}*/
/*_ get_el_sibling_with_tag {{{*/
let get_el_sibling_with_tag = function(el,tag)
{
    for(let     c  = 0; c < el.parentElement.children.length; ++c) {
        let child  =        el.parentElement.children[c];
        if((child != null) && (child.tagName == tag) && (child != el))
            return child;
    }
    return null;
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
/*➔ get_nodeXPath {{{*/
let get_nodeXPath = function(node)
{
    if(node instanceof Document) return "/";

    let  node_type_pos_array;
    for( node_type_pos_array = []
    ;    node && !(node instanceof Document)
    ;    node =   (node.nodeType == Node.ATTRIBUTE_NODE)
              ?    node.ownerElement
              :    node.parentNode
    ) {
        let node_type_pos = {};

        /* TYPE */
        switch( node.nodeType ) {
            case Node.TEXT_NODE                   : node_type_pos.name =                   "text()" ; break;
            case Node.ATTRIBUTE_NODE              : node_type_pos.name =       "@" + node.nodeName  ; break;
            case Node.PROCESSING_INSTRUCTION_NODE : node_type_pos.name = "processing-instruction()" ; break;
            case Node.COMMENT_NODE                : node_type_pos.name =                "comment()" ; break;
            case Node.ELEMENT_NODE                : node_type_pos.name =             node.nodeName  ; break;
        }

        /* POS */
        node_type_pos.position = get_nodeName_rank( node );

        node_type_pos_array.push( node_type_pos );
    }

    let nodeXPath = "";
    for(let i=node_type_pos_array.length-1; i >= 0; i -= 1)
    {
        let node_type_pos   = node_type_pos_array[i];
        nodeXPath += node_type_pos.name ? ("/"+node_type_pos.name) : ".";
        if((node_type_pos.position != null) && (node_type_pos.position != "1"))
            nodeXPath += "["+ node_type_pos.position+"]";
    }

    return nodeXPath.toLowerCase();
};
/*}}}*/
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
/*_ is_el_or_child_of_parent_el {{{*/
let is_el_or_child_of_parent_el = function(el, parent_el)
{
    if(!parent_el) return false;

    while(el && (el != parent_el))
        el     = el.parentElement;

    return (el == parent_el);
};
/*}}}*/
/*_ get_el_parent_clipped {{{*/
let get_el_parent_clipped = function(el)
{
    while(  el ) {
        let cs = window.getComputedStyle(el);
        if( cs.clip
        && (cs.clip     != "auto")
        && (cs.clip     != "none")) return el;

        if( cs.clipPath
        && (cs.clip     != "auto")
        && (cs.clipPath != "none")) return el;

        el = el.parentElement;
    }
    return null;
};
/*}}}*/

return { name : "dom_details_util"
    ,    add_el_class
    ,    del_el_class
    ,    get_el_child_with_tag
    ,    get_el_sibling_with_tag
    ,    get_id_or_tag
    ,    get_id_or_tag_and_className
    ,    get_nodeXPath
    ,    get_el_parent_clipped
    ,    has_el_class
    ,    is_el_or_child_of_parent_el
};

}());

