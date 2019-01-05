"use strict";
/* dom_select_js */
let DOM_SELECT_JS_ID        = "dom_select_js";
let DOM_SELECT_JS_TAG       = DOM_SELECT_JS_ID  +" (190102:14h)";
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
/*{{{
  let DOUBLE_QUOTE  = String.fromCharCode(34);
  let LF            = String.fromCharCode(10);
  let CR            = String.fromCharCode(13);
}}}*/
  let BACKSLASH     = String.fromCharCode(92);
  let FORESLASH     = String.fromCharCode(47);
  let CS            = "font-size:150%; font-weight:900; border:1px solid gray; color:yellow; background-color:navy; padding:0 .5em 0 .5em; border-radius:1em 1em 1em 1em; background:linear-gradient(to bottom, #000 0%, #223 50%, #000 100%);";
  let console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);                 } catch(ex) {} };
  let console_dir   = function(o,msg=null) { try {                  if(msg) console.log (          "%c"+msg      ,CS); console.dir(o); } catch(ex) {} };
  let console_log   = function(  msg     ) { try {                          console.log (               msg         );                 } catch(ex) {} };
  let console_warn  = function(  msg=null) { try {                          console.warn(               msg         );                 } catch(ex) {} };
/*}}}*/
/* let {{{*/
let HORIZONTAL_ELLLIPSIS = "\u2026";

let SYMBOL_U             = "\u25B2";
let SYMBOL_R             = "\u25B6";
let SYMBOL_D             = "\u25BC";
let SYMBOL_L             = "\u25C0";
let SYMBOL_E             = "\u2026";
let SYMBOL_LF            = "\u21B5";
let SYMBOL_CR            = "\u2943";
let SYMBOL_TOFU          = "\uFFFD";
let SYMBOL_PUSH_PIN      = "\uD83D\uDCCC";
let SYMBOL_CLOSEPIN      = "\u2715";

let mStartRange =  null;
let mEndRange   =  null;
let mTouchPoint =  null;

/*}}}*/

/** CCS .. (ecc color coded nodes) */
/*{{{*/
let CCS = function()
{
    /*this.clear {{{*/
    this.clear = function() {
        this.slot         =  0; /* first active slot = 1 */
        this.num_selected =  1;
        this.pattern      = "";
        this.options      = "";
        this.nodes        = [];
        this.thumbs       = [];
        this.containers   = [];
/*
        this.seek_up   = [];
        this.seek_down = [];
*/
    };
    /*}}}*/
    /*this.toString {{{*/
    this.toString = function() {
        return ""
            +  "Slot "+ this.slot              +" "
            +  "num_s"+ this.num_selected      +" "
            +  " "    + this.pattern           +" "
            +  "("    + this.options           +")"
            +  " ["   + this.nodes.length      +" nodes]"
            +  " ["   + this.thumbs.length     +" thumbs]"
            +  " ["   + this.containers.length +" containers]"
        ;
    };
    /*}}}*/
    /*this.num_toHTML {{{*/
    this.num_toHTML = function(num) {
        let slot_em    =              "<em class='cc"+((this.slot) % SELECT_SLOT_MAX)+"'>"+ this.slot + "</em>";
        let num_em     =              "<em class='cc"+((     num ) % SELECT_SLOT_MAX)+"'>"+      num  + "</em>";

        let pattern_em = pattern_toHTML(this.pattern, this.options);

        let empty      = (this.nodes.length < 1);
        let thumb_p_str= empty ? "" : get_thumb_p_str(this.thumbs[num-1]) +"% ";

        let text_em    = empty ? "" : "<em class='cc7'>"                + this.nodes [num-1].textContent + "</em>";

        return ""
            + slot_em + num_em + thumb_p_str.replace(" ","&nbsp;")
            + pattern_em +"="+ text_em
        ;

    };
    /*}}}*/
    this.clear(); /* construction-time-init */
};
let ccs = [];
/*_ s_get_slotted_pattern_count {{{*/
let s_get_slotted_pattern_count = function()
{
    let count = 0;
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if(!ccs[slot]                 ) continue;
        if( ccs[slot].nodes.length > 0) count += 1;
    }
if(LOG_MAP.S3_SLOT) log("s_get_slotted_pattern_count: ...return "+count);
    return count;
};
/*}}}*/
/*_ ccs_sort_pattern {{{*/
let ccs_sort_pattern = function()
{
    ccs.sort(
        function(a, b) {
            return b.pattern - a.pattern;
        }
    );
};
/*}}}*/
/*_ ccs_log {{{*/
let ccs_log = function()
{
    for(let slot = 0; slot < ccs.length; ++slot)
    {
        if(ccs[slot])
            log(slot+" "+ ccs[slot].toString());
    }
};
/*}}}*/

/*}}}*/

/** SLOT */
/*{{{*/
let SELECT_SLOT_MAX           =  10;
let S_TOUCHED_WORD_LENGTH_MAX = 256;
let last_cleared_slot         =   1;
let next_to_reuse_slot        =   1;
/*_ get_slot_for_range {{{*/
let SEL_CLASS_PREFIX = "select";
let get_slot_for_range = function(range)
{
    /* return range.parentNode highlight slot */

    let caller = "get_slot_for_range("+range+")";

    let slot = -1;

    if(range.startContainer && (range.startContainer.parentNode.id))
    {
        slot = range.startContainer.parentNode.id.startsWith( SEL_CLASS_PREFIX )
            ?  range.startContainer.parentNode.id.substring ( SEL_CLASS_PREFIX.length, SEL_CLASS_PREFIX.length+1)
            :                                                 -1
        ;
    }

if(LOG_MAP.S3_SLOT) log("get_slot_for_range("+range.toString()+"): return ["+slot+"] .. (startContainer: id=["+range.startContainer.id+"] parentNode.id=["+range.startContainer.parentNode.id+"])");

    if((slot >=0) && !ccs[slot]) ccs[slot] = new CCS();

    return slot;
};
/*}}}*/
/*_ get_slot_matching_pattern {{{*/
let get_slot_matching_pattern = function(pattern)
{
    let caller = "get_slot_matching_pattern("+pattern+")";
let log_this = LOG_MAP.S3_SLOT;

    let slot;
    try {
        for(slot = 1; slot < ccs.length; ++slot)
        {
            if( !ccs[slot]         ) continue;
            if( !ccs[slot].pattern ) continue;

            if( pattern ==        ccs[slot].pattern ) {
if(log_this) log(caller+": ...return slot #"+slot+" .. (pattern ==       CCS.PATTERN)");
                return slot;
            }
            if( ccs[slot].pattern.includes( pattern ) ) {
if(log_this) log(caller+": ...return slot #"+slot+" .. (CCS.PATTERN includes pattern)");
                return slot;
            }
            if( pattern.includes( ccs[slot].pattern ) ) {
if(log_this) log(caller+": ...return slot #"+slot+" .. (pattern includes CCS.PATTERN)");
                return slot;
            }

        }
    }
    catch(ex) { log(caller+": slot=["+slot+"]"+LF+" ccs[slot].pattern=["+ccs[slot].pattern+"]"+LF+ex, "error"); }

if(log_this) log(caller+": ...found no pattern matching current filter");
    return 0;
};
/*}}}*/
/*_ get_slot_of_pattern {{{*/
let get_slot_of_pattern = function(pattern)
{
let   caller = "get_slot_of_pattern("+pattern+")";
let log_this = LOG_MAP.S3_SLOT;

    pattern =      unescape(pattern);
    let slot;
    for(slot = 1; slot < ccs.length; ++slot)
    {
        if( !ccs[slot]         ) continue;
        if( !ccs[slot].pattern ) continue;
        if( pattern == unescape(ccs[slot].pattern))
            break;
    }

    if(slot >= ccs.length) slot = 0;

if(log_this) log(caller+": ...return slot=["+slot+"]");
    return slot;
};
/*}}}*/
/*_ set_slot_of_pattern {{{*/
let set_slot_of_pattern = function(new_slot, pattern)
{
let   caller = "set_slot_of_pattern("+new_slot+" ,"+pattern+")";
let log_this = LOG_MAP.S3_SLOT;

    pattern  = unescape(pattern);

    let was_slot;
    for(was_slot = 1; was_slot < ccs.length; ++was_slot)
    {
        if( !ccs[was_slot]         ) continue;
        if( !ccs[was_slot].pattern ) continue;
        if( pattern == unescape(ccs[was_slot].pattern))
            break;
    }

    if(was_slot < ccs.length)
    {
        let ccs_was_in_slot = ccs[new_slot];
        let ccs_new_in_slot = ccs[was_slot];

        ccs[was_slot]      = ccs_was_in_slot;
        ccs[new_slot]      = ccs_new_in_slot;

        if(ccs[was_slot]) ccs[was_slot].slot = was_slot;
        if(ccs[new_slot]) ccs[new_slot].slot = new_slot;

if(log_this) log(caller+":");
if(log_this && ccs[new_slot]) log("...PUSHED IN: ["+ccs[new_slot].slot+"]=["+ccs[new_slot].pattern+"]");
if(log_this && ccs[was_slot]) log("...MOVED OUT: ["+ccs[was_slot].slot+"]=["+ccs[was_slot].pattern+"]");
    }
    else {
if(log_this) log(caller+": nothing to move out from slot #"+new_slot+"");
    }

    return new_slot;
};
/*}}}*/
/*_ get_free_slot {{{ */
let get_free_slot = function()
{
    let caller = "get_free_slot";
let log_this = LOG_MAP.S3_SLOT;

    /* pick first available color slot */

    /* SKIP USED SLOTS  slot=[1..10] .. ccX=[1..0] */
    let slot;
    for(slot = 1; slot <= SELECT_SLOT_MAX; ++slot)
    {
        let ccX       = slot % SELECT_SLOT_MAX;
        let sel_class = SEL_CLASS_PREFIX + ccX;
        let selector  = "."+sel_class;

        let el = document.querySelector( selector ); /* .. (first will do) */
        if(!el) break;
    }

    if(slot <= SELECT_SLOT_MAX) {
        next_to_reuse_slot = slot + 1; if(next_to_reuse_slot > SELECT_SLOT_MAX) next_to_reuse_slot = 1;
if(log_this) log(caller+": 1/2 - FREE  SLOT ["+slot+"] .. next_to_reuse_slot=["+next_to_reuse_slot+"]");
    }
    else {
        slot = next_to_reuse_slot;
        next_to_reuse_slot = slot + 1; if(next_to_reuse_slot > SELECT_SLOT_MAX) next_to_reuse_slot = 1;
if(log_this) log(caller+": 2/2 - REUSE SLOT ["+slot+"] .. next_to_reuse_slot=["+next_to_reuse_slot+"]");
    }

    if(   !ccs[slot] ) ccs[slot] = new CCS();
    else clear_slot(       slot);

    return slot;
};
/*}}}*/
/*_ clear_slot {{{ */
let last_cleared_pattern;
let clear_slot = function(slot)
{
    let caller = "clear_slot("+slot+")";
let log_this = LOG_MAP.S3_SLOT;
if(log_this) log(caller);

    last_cleared_slot = slot;

    let ccX       = slot % SELECT_SLOT_MAX;
    let sel_class = SEL_CLASS_PREFIX + ccX;
    let selector  = "."+sel_class;
    let sel_list  = document.querySelectorAll( selector );
if(log_this && sel_list.length) log("...["+selector+"] sel_list.length=["+sel_list.length+"]");

    if(ccs[slot] && ccs[slot].pattern)
        t_clear_slot_sync(slot, ccs[slot].pattern);

    let cleared_count = 0;
    for(let i = 0; i < sel_list.length; ++i)
    {
        sel_list[i].outerHTML = sel_list[i].innerHTML;
        cleared_count += 1;
    }

    if( ccs[slot] ) {
        last_cleared_pattern = ccs[slot].pattern;
        ccs[slot].clear();
    }

    if(cleared_count) {
        sync_containers_hi();
    }

if(log_this && cleared_count) log("."+selector+": "+cleared_count+" nodes cleared");
    return cleared_count;
};
/*}}}*/
/*_ get_ccs_slot {{{*/
let get_ccs_slot = function(slot)
{
    return ccs[slot];
};
/*}}}*/
/*_ get_prev_populated_slot {{{*/
let get_prev_populated_slot = function(slot)
{
    let slot_with_nodes = 0;
    for(let i = (slot-1); i > (slot-SELECT_SLOT_MAX); --i)
    {
        let s = 1+ ((i-1+SELECT_SLOT_MAX) % SELECT_SLOT_MAX);
        let l = ccs[s]
            ?   ccs[s].nodes.length
            :   0;
        if(l && !slot_with_nodes) slot_with_nodes = s;
    }
    return slot_with_nodes;
};
/*}}}*/
/*_ get_next_populated_slot {{{*/
let get_next_populated_slot = function(slot)
{
    let slot_with_nodes = 0;
    for(let i = (slot+1); i < (slot+SELECT_SLOT_MAX); ++i)
    {
        let s = 1+ ((i-1+SELECT_SLOT_MAX) % SELECT_SLOT_MAX);
        let l = ccs[s]
            ?   ccs[s].nodes.length
            :   0;
        if(l && !slot_with_nodes) slot_with_nodes = s;
    }
    return slot_with_nodes;
};
/*}}}*/
/*}}}*/

/** EVENTS */
/*_ [tse] object usage {{{
    tse.s    .. word start
    tse.e    .. word end
    tse.t    .. word text
    tse.drop .. dropped suffix (as of 181024)
}}}*/
/* SELECT {{{*/
/*_ s_touchedWord {{{ */
/*{{{*/
let s_touchedWord_range_parent;
let s_touchedWord_slot;

/*}}}*/
let s_touchedWord = function(x,y)
{
/*{{{*/
let   caller = "s_touchedWord(x="+x+" , y="+y+")";
let log_this = LOG_MAP.S1_RANGE;

    if(log_this) log(caller);
/*}}}*/
    /* get_range_from_XY {{{ */
    s_touchedWord_range_parent = null;

    let  rangeFromXY = get_range_from_XY(x, y);

    if( !rangeFromXY ) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: NO RANGE AT ["+x+"@"+y+"]</em>");
        return;
    }
    /*}}}*/
    /* 1/3 CLEAR CLICKED SELECTION {{{*/
    let slot = get_slot_for_range(rangeFromXY);
    if( slot >= 0) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: CLEAR CLICKED SLOT #"+slot+"</em>");

        clear_slot( slot );

        return;
    }
    /*}}}*/
    /* 2/3 selected word range {{{*/
    let range = s_touchedWord_adjust( rangeFromXY );
    if(!range ) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: NO WORD RANGE</em>");

        return;
    }
    /*}}}*/
    /* 3/3 CLEAR CLICKED SELECTION (adjusted) {{{*/
if(log_this || log_this) log( rangeToString(range) );

    slot = get_slot_for_range(range);
    if( slot >= 0) {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: CLEAR ADJUSTED SLOT #"+slot+"</em>");
        clear_slot( slot );
        return;
    }
    /*}}}*/
    /* Select new range {{{*/

  /*let touched_text =  get_first_word( range.toString(), caller);*/
    let touched_text =                  range.toString();
if(log_this) log("touched_text=["+touched_text+"]");

    if( touched_text )
    {
if(log_this) log_set_TR_SELECT("<em class='big'>SELECTION: FILTER=["+touched_text+"]</em>");
/*{{{
logXXX("...touched_text=["+touched_text+"]")
}}}*/
        if(!prop_get(WORDS_SEGMENT) ) {
            touched_text = s_escapeREGEX(touched_text);
/*{{{
logXXX("...s_escapeREGEX=["+touched_text+"]")
}}}*/
        }
        /* optional suffix regex */
        if(range.drop) {
            touched_text += "("+range.drop+")?"
/*{{{
logXXX("...range.drop["+range.drop+"] .. touched_text=["+touched_text+"]")
}}}*/
        }

        s_touchedWord_range_parent = range.startContainer.parentNode;

        set_tools_filter( touched_text );

        check_TreeWalker("", touched_text);

        return;
    }
    /*}}}*/
};
/*}}}*/
/*_ s_escapeREGEX {{{*/
/*{{{*/
var s_escapeREGEX_chars
    = {  "\\" : "\\\\"

        ,"^"  :  "\\^"
        ,"$"  :  "\\$"
        ,"."  :  "\\."
        ,"+" :  "\\+"
        ,"*" :  "\\*"

        ,"("  :  "\\("
        ,")"  :  "\\)"
        ,"["  :  "\\["
        ,"]"  :  "\\]"
    };

let regexp_REGEX_CHARS = new RegExp("[\\\\"+"^$"+"\.\+\*"+"\\(\\)\\[\\]]", "g");
/*}}}*/
let s_escapeREGEX = function (text)
{
  return text.replace(regexp_REGEX_CHARS, function(character) { return s_escapeREGEX_chars[character]; });
};
/*}}}*/

/*_ s_touchedWord_adjust {{{ */
let s_touchedWord_adjust = function(range)
{
/*{{{*/
let   caller = "s_touchedWord_adjust";
let log_this = LOG_MAP.S1_RANGE;

/*}}}*/
    /* 1/3 - EXPANDED TO EMBEDDING-CONTAINERS {{{*/
    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let text = strip_CR_LF(node.textContent);
    if(    (text.length > 0)
       &&  !prop_get(WORDS_EXACT  )
       &&  !prop_get(WORDS_SEGMENT)
       &&  s_touchedWord_adjust_1_in_embedding_container(range)
      ) {
if(log_this) log("...EXPANDED TO EMBEDDING-CONTAINERS %c["+ strip_CR_LF(range.toString()) +"]", lb6);
        return range;
    }
    /*}}}*/
    /* 2/3 - EXPANDED TO SELECTION-RANGE {{{*/
    if(s_touchedWord_adjust_2_in_selection(range)) {
        if( prop_get(WORDS_EXACT) ) {
/*{{{
if(log_this) log("%c *** WORDS_EXACT OPTION SELECTED ... CANNOT BE EXPANDED TO SELECTION-RANGE *** ", lbF+lb3);
            s_selection_add_cannot_expand();
            return null;
}}}*/
            t_override_USER_OPTION(WORDS_EXACT    , false);
            t_override_USER_OPTION(WORDS_HEAD_TAIL, false);
            t_override_USER_OPTION(WORDS_SEGMENT  ,  true);
        }
if(log_this) log("...EXPANDED TO SELECTION-RANGE %c["+strip_CR_LF(range.toString())+"]", lb5);
        return range;
    }
     /*}}}*/
    /* 3/3 - GOT WORD FROM SYNTAXIC LOOKUP {{{*/
    let word_range = s_touchedWord_adjust_3_word_syntaxic_lookup(range);
    if( word_range )
    {
if(log_this) log("...GOT WORD FROM SYNTAXIC LOOKUP %c["+strip_CR_LF(word_range.toString())+"]", lb5);
        return word_range;
    }
    /*}}}*/
if(log_this) log("... GOT NO WORD FROM SYNTAXIC LOOKUP %c["+strip_CR_LF(range.toString())+"]", lb5);
    return null;
};
/* }}}*/
/*_ s_touchedWord_adjust_1_in_embedding_container {{{*/
let s_touchedWord_adjust_1_in_embedding_container = function(range)
{
/*{{{*/
let   caller = "s_touchedWord_adjust_1_in_embedding_container";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) console_dir(range, caller+"(range)");
/*}}}*/
    /* INLINING CONTAINER {{{*/
    let node          = range.startContainer ? range.startContainer : range.offsetNode;
    let node_parent   = node.parentNode;
    let node_before   = node.previousSibling;
    let node_after    = node.nextSibling;
    let node_longword = (node_parent.textContent.length > S_TOUCHED_WORD_LENGTH_MAX);
    let node_inline
        =  (node_parent.tagName == "A"     )
        || (node_parent.tagName == "CITE"  )
        || (node_parent.tagName == "CODE"  )
        || (node_parent.tagName == "EM"    )
        || (node_parent.tagName == "I"     )
        || (node_parent.tagName == "LABEL" )
        || (node_parent.tagName == "SMALL" )
        || (node_parent.tagName == "SPAN"  )
        || (node_parent.tagName == "SUP"   )
        || (node_parent.tagName == "U"     )
        || (node_parent.tagName == "VAR"   )
    ;

if( log_this) { /*{{{*/
    log_key_val( caller
                 , {   node          : node
                     , node_parent   : node_parent
                     , node_before   : node_before
                     , node_after    : node_after
                     , node_longword : node_longword ? "node_longword ("+node_parent.textContent.length+" > "+S_TOUCHED_WORD_LENGTH_MAX+")" : false
                     , node_inline   : node_inline +" ("+node_parent.tagName+")"
                 }
                 , lf1
               );
}
/*}}}*/
    /*}}}*/
    /* RETURN FALSE .. RANGE UNCHANGED {{{*/
    let rejected_by = "";
    if     ( !node_parent   ) rejected_by = "!node_parent";
    else if( !node_inline   ) rejected_by = "!node_inline ("+node_parent.tagName+")";
    else if(  node_longword ) rejected_by = "node_longword xtContent.length > "+S_TOUCHED_WORD_LENGTH_MAX+")";
/* else if((!node_before && !node_after)  ) rejected_by = "(!node_before && !node_after)"; */

    if(rejected_by) {
if(log_this) log(caller+": %c "+ rejected_by, lb6);
        return false;
    }
    /*}}}*/
    /* RETURN TRUE: .. RANGE EXPANDED {{{*/
    if( node_inline)
    {
        let text = strip_CR_LF(node.textContent);
        let    s = range.startOffset;
        let    e = range.  endOffset;

/*{{{*/
if(log_this) {
    log(caller+": s=["+s+"] e=["+e+"] "+ node_toString(node));
    log("...%c node_parent=["+get_n_lbl(node_parent)+"]", lb7); if(node_parent) console.dir(node_parent);
    log("...%c node_before=["+get_n_lbl(node_before)+"]", lb3); if(node_before) console.dir(node_before);
    log("...%c text.......=["+text+"]"                         , lb4);
    log("...%c node_after.=["+get_n_lbl(node_after  )+"]", lb5); if(node_after ) console.dir(node_after);
    log("___length=["+node.data.length+"]");
    log("___[123456789_1234567890]");
    log("___["+node.data+"]");
}
/*}}}*/

            range.setStart(node, 0);
            range.setEnd  (node, text.length);

            /* TRIM LEADING spaces {{{*/
            while(range.toString().startsWith(" ") || range.toString().startsWith("\t")) { range.setStart(node, range.startOffset+1); range.setEnd  (node, range.  endOffset+1); }
            while(range.toString().  endsWith(" ") || range.toString().  endsWith("\t")) {                                            range.setEnd  (node, range.  endOffset-1); }
            /*}}}*/

            /* TRIM SURROUNDING BRACKETS {{{*/
            if((text[0] == "[") && (text[text.length-1] == "]"))
            {
if(log_this) log("...TRIM SURROUNDING BRACKETS %c["+ strip_CR_LF(range.toString()) +"]", lb6);
                range.setStart(node, 1);
                range.setEnd  (node, text.length-1);
            }
            /*}}}*/

/*{{{*/
if(log_this) {
    log("...........................range=%c["+strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
/*}}}*/
    }
    return true;
    /*}}}*/
};
/*}}}*/

/*_ s_touchedWord_adjust_2_in_selection {{{*/
let s_touchedWord_adjust_2_in_selection = function(range)
{
    /* RETURN FALSE .. NO CURRENT SELECTION OR NO RANGE */
    /*{{{*/
let   caller = "s_touchedWord_adjust_2_in_selection";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+": onDown_SEL_TEXT=["+onDown_SEL_TEXT+"]");

    let rejected_by = "";
    if((typeof onDown_SELECTION) == "undefined"                         ) rejected_by = "onDown_SELECTION...............: NOT DEFINED";
    else if(  !onDown_SELECTION                                         ) rejected_by = "onDown_SELECTION...............: NONE";
    else if(  !onDown_SELECTION.anchorNode                              ) rejected_by = "onDown_SELECTION.anchorNode....: NONE";
    else if(  !onDown_SELECTION.focusNode                               ) rejected_by = "onDown_SELECTION.focusNode.....: NONE";
    else if(   onDown_SELECTION.anchorNode != onDown_SELECTION.focusNode) rejected_by = "onDown_SELECTION...............: MULTI-NODE-SELECTION";
    else if(   onDown_SELECTION.isCollapsed                             ) rejected_by = "onDown_SELECTION...............: isCollapsed";
    else if(  !range                                                    ) rejected_by = "range........................... NO range";
    else if(  !range.startContainer                                     ) rejected_by = "range.startContainer...........: NO startContainer";
    else if( !(onDown_SELECTION.containsNode(range.startContainer,true))) rejected_by = "onDown_SELECTION.containsNode(): OUT OF SELECTION";

    if(rejected_by)
    {
if(log_this) log(caller+": %c "+ rejected_by, lb5);
        return false;
    }
    /*}}}*/

    /* TRUE .. [focusNode] CONTAINS [startContainer] */
    /*{{{*/
/*{{{
if(log_this) {
    log("...focusNode.....: %c["+ strip_CR_LF(onDown_SELECTION     .focusNode.textContent) +"]", lb4);
    log("...startContainer: %c["+ strip_CR_LF(           range.startContainer.textContent) +"]", lb5);
}
}}}*/
/* comparePoint {{{*/
/*
if(log_this) log("...range.comparePoint( onDown_SELECTION.focusNode     ,0)=["+ range.comparePoint( onDown_SELECTION.focusNode     ,0) +"]");
if(log_this) log("...range.comparePoint(            range.startContainer,0)=["+ range.comparePoint(            range.startContainer,0) +"]");
*/
/*}}}*/
    /* EXPAND TO SELECTION {{{*/
    let node = range.startContainer;
/*{{{
if(log_this) {
    log(caller+": EXPAND TO SELECTION:");
    log("...onDown_SELECTION.anchorOffset=%c["+ onDown_SELECTION.anchorOffset   +"]", lb4);
    log("...onDown_SELECTION.focusOffset.=%c["+ onDown_SELECTION.focusOffset    +"]", lb5);
    log("............................node=%c["+ strip_CR_LF(  node.textContent) +"]", lb6);
    log("...........................range=%c["+ strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
}}}*/
    if(onDown_SELECTION.anchorOffset < onDown_SELECTION.focusOffset)
    {
        range.setStart(node, onDown_SELECTION.anchorOffset);
        range.setEnd  (node, onDown_SELECTION.focusOffset );
    } else {
        range.setStart(node, onDown_SELECTION.focusOffset );
        range.setEnd  (node, onDown_SELECTION.anchorOffset);
    }

    /* ADJUST TO WORD START-END {{{*/
    /* s_touchedWord_adjust_2_in_selection_word_bounds(range); */

    /*}}}*/
/*{{{
if(log_this) {
    log("...........................range=%c["+strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
}}}*/
    /*}}}*/
    return true;
    /*}}}*/

};
/*}}}*/
/*_ s_touchedWord_adjust_2_in_selection_word_bounds {{{*/
let s_touchedWord_adjust_2_in_selection_word_bounds = function(range)
{
let   caller = "s_touchedWord_adjust_2_in_selection";
let log_this = LOG_MAP.S1_RANGE;

    if(!prop_get(WORDS_SEGMENT) )
    {
if(log_this)
        log(caller+": ADJUSTING TO WORDS BOUNDARIES");

        let node = range.startContainer;
        let t = node.textContent ;
if(log_this) log(".......t=%c["+ strip_CR_LF(escape_CR_LF(t)) +"]", lb3);
if(log_this) log("...range=%c["+ range.toString()             +"]", lb3);

        let s = range.startOffset+1;
        let e = range.endOffset;
        let l = t.length;

        while((s <= l) && !isAlNum( t.charAt(s-1) )         ) s += 1; /* skip leading blanks */
        while((s >= 1) &&  isAlNum( t.charAt(s-1) )         ) s -= 1; /* fore to first-word  left-boundary */
        if(               !isAlNum( t.charAt(s-1) )         ) s += 1; /* back to first-word first-char */

        while((e >= s) && !isAlNum( t.charAt(e-1) )         ) e -= 1; /* skip trailing blanks */
        while(             isAlNum( t.charAt(e) ) && (e < l)) e += 1; /* fore to last-word last-char */

        s = Math.min(s,l);
if(log_this) log("...l=["+l+"] .. s=["+s+"]=[%c"+ t.charAt(s-1) +"%c] .. e=["+e+"]=[%c"+ t.charAt(e-1) +"%c]", lb1+lbF,lbA , lb2+lbF,lbA);

        range.setStart(node, s-1);
        range.setEnd  (node, e  );

if(log_this) log("...range=%c["+ range.toString() +"]", lb3);
    }
};
/*}}}*/
/*_ s_touchedWord_adjust_3_word_syntaxic_lookup {{{*/
let s_touchedWord_adjust_3_word_syntaxic_lookup = function(range)
{
    /* WORD SEARCH LOOP {{{*/
let   caller = "s_touchedWord_word_syntaxic_lookup";
let log_this = LOG_MAP.S1_RANGE;

    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let    s = range.startOffset   ;
    let    e = range. endOffset    ;
    let  tse = {s:0, e:0, t:""};

    for(let loop_num = 0; node != null; ++loop_num)
    {
        /* TERMINATE SEARCH WHEN LOG IS FULL {{{*/
        if(log_is_full) {
            log();
            break;
        }
        /*}}}*/
        /* LOOK FOR CLOSEST TEXT NODE .. (current or previous) {{{*/
        /* SEARCH PREVIOUS TEXT NODE */
        if(    (node.nodeType != Node.TEXT_NODE) /* .. (not a text_node) */
            || (loop_num > 0)                    /* .. (word not found ) */
        ) {
            node = range_setStart_at_end_of_previous_text_node( range );
            if(node == null)
            {
if(log_this) log("...got nothing from range_setStart_at_end_of_previous_text_node");
                break;
            }

if(log_this) {
    if(range.startContainer) log("___.........range.startContainer.=["+  range.startContainer.textContent +"]");
    if(range.offsetNode    ) log("___.........range.....offsetNode.=["+  range.offsetNode                 +"]");
    log("___.node.........................=["+  node.textContent                 +"]");
    if(range.startContainer) log("___(node == range.startContainer)=["+ (node == range.startContainer)    +"]");
    if(range.offsetNode    ) log("___(node == range.....offsetNode)=["+ (node == range.offsetNode    )    +"]");
}
/*{{{
}}}*/

            s = range.startOffset   ;
            e = range. endOffset    ;
        }
        /* }}}*/
        /* RANGE start boundary NODE text {{{*/
        let text =  node.textContent;
        let l    =  node.textContent.length;

        /*}}}*/
        /* WORD START-END {{{*/
        tse.t = text;
        tse.s = s;
        tse.e = e;
        get_word_start_end( tse );
        s = tse.s;
        e = tse.e;
if(log_this) {
    log("...get_word_start_end: s=["+s+"]=["+strip_CR_LF(escape_CR_LF(text.charAt(s-1)))+"] e=["+e+"]=["+text.charAt(e-1)+"]");
    log("<em>"+ mPadStart(""+ loop_num,3," ")
    + " s=["+s+"]=["+ text.charAt(s-1)            +"]"
    + " e=["+e+"]=["+ text.charAt(e-1)            +"]"
    + " l=["+l+"]=["+ trim_node_textContent(node) +"]</em>");
}
        /*}}}*/
        /* WORD NOT FOUND .. CONTINUE {{{*/
        if(e <= s) {
if(log_this) log("%c WORD NOT FOUND", lb3);

        }
        /*}}}*/
        /* WORD FOUND .. BREAK {{{*/
        else {
if(log_this) log("%c WORD FOUND: <em>"+text.substring(s-1, e)+"</em>", lb4);

            break;
        }
        /*}}}*/
    }
    /*}}}*/
    /* RETURN FALSE: WORD NOT FOUND {{{*/
    if( !node ) {

if(log_this) log("%c FOUND NO TEXT NODE", lb2);
        return null;
    }
    /*}}}*/
    /* RETURN TRUE: WORD AS A TEXT RANGE {{{*/
    range.setStart(node, s);
    range.setEnd  (node, e);
    if(tse.drop) range.drop = tse.drop;

    let word = range.toString();
if(log_this) log("SELECTED WORD s=["+s+"] e=["+e+"] l=["+word.length+"] word: <em>"+word+"</em> FROM: <em>"+ truncate(trim_node_textContent(node)) +"</em>");
    return range;
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* WORD {{{*/
/*_ get_word_at_offset {{{*/
let get_word_at_offset = function(text, offset)
{
    let tse = { s:offset, e:offset, t:text };

    get_word_start_end(tse);

    return text.substring(tse.s, tse.e);
};
/*}}}*/
/*_ get_word_start_end {{{*/
let get_word_start_end = function(tse)
{
    /* ..........................10........20........30  */
    /* ................. 123456789_123456789_123456789_  */
    let t = tse.t;
    let s = tse.s;
    let e = tse.e;
    let l = tse.t.length;

    if(s>l) s = l;
    if(s<1) s = 1;

    while((s >= 1) && !isAlNum( t.charAt(s-1) )) s -= 1;
    while((s <= l) && !isAlNum( t.charAt(s-1) )) s += 1;
    while((s >= 1) &&  isAlNum( t.charAt(s-1) )) s -= 1;

    e = s;
    while( isAlNum( t.charAt(e) ) && (e < l)) e += 1;

    tse.s = s;
    tse.e = e;

    get_word_end_up_to_dropped_suffix(tse);
};
/*}}}*/
/*_ get_word_end_up_to_dropped_suffix {{{*/
/*{{{*/

/*}}}*/
let get_word_end_up_to_dropped_suffix = function(tse)
{
/*{{{*/
let    word = tse.t.substring(tse.s, tse.e).toLowerCase();
let  caller = "get_word_end_up_to_dropped_suffix("+word+")";
let log_this = LOG_MAP.S1_RANGE;

if(log_this) logXXX(caller);

    let len = tse.e - tse.s;
    let suffix, must_not_end_with, drop_checked, min_len;
/*}}}*/
/* FACTORIZATION OF AN UNDECIDED NUMBER OF SUFFIXES: {{{
    - property name would start with "words_drop_"
    - new suffix would be added to the end to guess the name of the correponding option the user can check
    ...an attempt to deal with doubled consonants (WIP):
    // {{{ C:/LOCAL/USR/ivan/DICT/linux.words

            e -= (word.endsWith("tting") ? 4
               : (word.endsWith("ssing") ? 4
               : (word.endsWith("ssing") ? 4
            ;
    bbing
    dding
    eeing
    ffing
    gging
    lling
    mming
    nning
    ooing
    pping
    rring
    ssing
    tting
    zzing

    //}}}
}}}*/
    for(let i = 0; i  < WORDS_SUFFIXES.length; ++i) {
        suffix        = WORDS_SUFFIXES[i];
        let prop_name ="words_drop_"+suffix;

        if(!prop_get(prop_name) ) /* whether the user has checked the option to drop this suffix */
        {
if(log_this) log(   "!prop_get("+prop_name+")");
            continue
        }

        min_len           = WORDS_SUFFIXE_MIN_LEN  [suffix] || suffix.length;
        must_not_end_with = WORDS_MUST_NOT_END_WITH[suffix];
        if(   (len >= min_len)
           &&  word.endsWith( suffix )
           && (!must_not_end_with || !word.endsWith(must_not_end_with)) /* .. OK, it does not! */
          ) {
            tse.drop = suffix;
            tse.e   -= suffix.length;
            break;
        }
    }
if(log_this && tse.drop) {
    log("..............suffix=["+ suffix            +"]");
    log(".............min_len=["+ min_len           +"]");
    log("...must_not_end_with=["+ must_not_end_with +"]");
}
if( log_this)
    log("%c"+caller+"%c return ["+tse.t.substring(tse.s, tse.e)+"] %c"+(tse.drop ? " .. drop=["+tse.drop+"]" : "")
       , lbH        ,lbH+lf4                                      ,lbH+lf3                                        );
};
/*}}}*/
/*_ clearSelection {{{ */
let clearSelection = function()
{
    let caller = "clearSelection"; if(LOG_MAP.S1_RANGE) log(caller);
    try {
        window.getSelection().removeAllRanges(); /* REMOVE any [current window selection]*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ range_setStart_at_end_of_previous_text_node {{{ */
let range_setStart_at_end_of_previous_text_node = function(range)
{
    /* GET PREVIOUS TEXT NODE {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "range_setStart_at_end_of_previous_text_node"; if(log_this) log(caller);

    let node = getPreviousTextNode(range.startContainer ? range.startContainer : range.offsetNode);
    /*}}}*/
    /* AND COLLAPSE RANGE AT THE END {{{*/
    if(node && node.nodeValue)
    {
        let s = node.nodeValue.length;
        let e = s;
        range.setStart(node, s);
        range.setEnd  (node, e);
    }
    /*}}}*/
if(log_this) log(caller+": %c PREVIOUS-TEXT-NODE=["+ node_toString(node) +"]", lbF+lb6);
    return node;
};
/*}}}*/
/*_ getPreviousTextNode {{{ */
let getPreviousTextNode = function(node)
{
    /* CALLER {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "getPreviousTextNode"; if(log_this) log(caller);

if(log_this) log("...node="+ node_toString(node));
    /*}}}*/

    let previousNode = null;
    try {

        /* TreeWalker root .. (look for a parent having more than this single text-typed child) {{{*/
        let   root = null;
        for(  root  = node.parentNode
            ;(root != null) && (root.children.length < 2)
            ; root  = root.parentNode
        ) {
if(log_this) log("...root="+ node_toString( root ));
        }
        if(root == null)
        {
if(log_this) log("getPreviousTextNode: ...return null");
            return null;
        }

if(log_this) log("SEARCHING ROOT: "+ node_toString(root));
        /*}}}*/

        /* TreeWalker {{{*/
        let mTreeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, mNodeFilter_function);
        mNodeRegexP     = null;

        if(log_this) {
            let root = mTreeWalker.root;
            log("...mTreeWalker.root: "+                          node_toString( mTreeWalker.root ) );
            log("....root.parentNode: "+ (!root.parentNode ? "" : node_toString( root.parentNode  )));
            log("....root.firstChild: "+ (!root.firstChild ? "" : node_toString( root.firstChild  )));
            log("....root. lastChild: "+ (!root. lastChild ? "" : node_toString( root. lastChild  )));
        }
        /*}}}*/

        /* SEEK TO REFERENCE NODE {{{*/
        while(mTreeWalker.nextNode())
        {
            if(node == mTreeWalker.currentNode)
            {
                if(log_this) {
                    log("REACHED REFERENCE NODE");
                    log("|..mTreeWalker.currentNode.............:"+ ( mTreeWalker.currentNode                                                ));
                    log("|..mTreeWalker.currentNode.nodeValue...:"+ (!mTreeWalker.currentNode ? "" : mTreeWalker.currentNode.nodeValue       ));
                    log("|==mTreeWalker.currentNode.textContent=["+ (!mTreeWalker.currentNode ? "" : mTreeWalker.currentNode.textContent +"]"));
                }
                break;
            }
        }
        /*}}}*/

        /* RETURN PREVIOUS NODE {{{*/
        do {
            previousNode = mTreeWalker.previousNode();
            if(log_this) {
                log("mTreeWalker.previousNode():");
                log("|..previousNode.............:"+ ( previousNode                                     ));
                log("|..previousNode.nodeValue...:"+ (!previousNode ? "" : previousNode.nodeValue       ));
                log("|==previousNode.textContent=["+ (!previousNode ? "" : previousNode.textContent +"]"));
            }
        }
        while( ( previousNode != null)
            && (!previousNode.nodeValue || (trim_empty_lines(previousNode.textContent).length < 1))
        );

        /*}}}*/

    }
    catch(ex) { log(caller+": "+ex, "warn"); }

    /* RETURN NODE {{{*/
    if(log_this) {
        if(previousNode) log("getPreviousTextNode: ...return "+node_toString(previousNode));
        else             log("getPreviousTextNode: ...return null");
    }
    return previousNode;
    /*}}}*/
};
/*}}}*/
/*_ pattern_toHTML {{{*/
let pattern_toHTML = function(pattern, options) {

    let words_class
        = (options == WORDS_EXACT  ) ? WORDS_EXACT
        : (options == WORDS_SEGMENT) ? WORDS_SEGMENT
        :                              WORDS_HEAD_TAIL
    ;

    switch(options)
    {
/*
        default:
        case WORDS_EXACT    : return "<em title='EXACT WORD'   class='cc7'>"+       "("+ pattern +")"     +"</em>";
        case WORDS_SEGMENT  : return "<em title='WORD SEGMENT' class='cc7'>"+       "["+ pattern +"]"     +"</em>";
        case WORDS_HEAD_TAIL: return "<em title='HEAD & TAIL'  class='cc7'>"+ SYMBOL_R + pattern +SYMBOL_L+"</em>";
*/

        case WORDS_EXACT    : return "<em title='EXACT WORD'   class='cc1 "+words_class+"'>"+ pattern +"</em>";
        case WORDS_SEGMENT  : return "<em title='WORD SEGMENT' class='cc1 "+words_class+"'>"+ pattern +"</em>";
        default:
        case WORDS_HEAD_TAIL: return "<em title='HEAD & TAIL'  class='cc1 "+words_class+"'>"+ pattern +"</em>";

    }
};
/*}}}*/
/*}}}*/

/** HIGHLIGHT */
/*{{{*/
/*_ scroll_to_slot_num {{{*/
let scroll_to_slot_num = function(slot, num, onSeekXYL)
{
    /*{{{*/
let caller = "scroll_to_slot_num(slot=["+slot+"] num=["+num+"], ["+onSeekXYL.x+" "+onSeekXYL.y+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this ) log("%c"+caller, lbH+lf4);

    /*}}}*/
    /* [slot] {{{*/
    if(slot <= 0              ) return false;
    if(slot >  SELECT_SLOT_MAX) return false;

    if(!ccs[slot])              return false;

    let count = ccs[slot].nodes.length;
    if( count < 1)              return false;

    if(  num <=    0)           return false;
    if(  num > count)           return false;

if(log_this) log(".count=["+ count +"]");

    let thumb_p = parseFloat( ccs[slot].thumbs[num-1] );
    /*}}}*/
    /* LOG geometry slot num count {{{*/
    if(LOG_MAP.T3_LAYOUT)
    {
        let page_height = get_page_height();
        let body        = document.body;
        let html        = document.documentElement;
        let page_geometry = ""
            +"<table id='table_params'>"
            +" <tr class='slot'><TH class='cc8'>select</TH> <th>        slot</th><td class='cc"+slot+"'>"+ slot              +"</td> <th>         num</th><td class='cc"+(num % 10)+"'>"+ num               +"</td> <th>       count</th><td class='cc"+(count % 10)+"'>"+ count             +"</td></tr>"
            +" <tr             ><TH class='cc8'>HTML  </TH> <th>scrollHeight</th><td class='cc8'>"       + html.scrollHeight +"</td> <th>offsetHeight</th><td class='cc1'>"             + html.offsetHeight +"</td> <th>clientHeight</th><td class='cc2'>"               + html.clientHeight +"</td></tr>"
            +" <tr             ><TH class='cc8'>BODY  </TH> <th>scrollHeight</th><td class='cc8'>"       + body.scrollHeight +"</td> <th>offsetHeight</th><td class='cc3'>"             + body.offsetHeight +"</td> <th>clientHeight</th><td class='cc4'>"               + body.clientHeight +"</td></tr>"
            +" <tr             ><TH class='cc8'>window</TH> <th> page_height</th><td class='cc8'>"       + page_height       +"</td> <th>     thumb_p</th><td class='cc5'>"             + thumb_p           +"</td> <th>     scrollY</th><td class='cc6'>"               + scrollY           +"</td></tr>"
            +"</table"
        ;

        let info = ""
            +"<div class='info'>"
            +"<em class='cc8'>Scroll state</em><br>"
            +" <u>clientHeight</u> VIEWABLE +PADDING                    -border -scrollbar -margin<br>"
            +" <u>offsetHeight</u> VIEWABLE +PADDING +BORDER +SCROLLBAR                    -margin<br>"
            +" <u>scrollHeight</u> OVERFLOW +PADDING                    -border -scrollbar -margin<br>"
            +"</div>"
        ;

        log_set_TR_LAYOUT(page_geometry +"<br>"+ info);
    }
    else {
        if(log_this) {
            let   count = ccs[slot].nodes.length;
            let    body = document.body;
            let    html = document.documentElement;

            log("select         slot=["+ slot              +"]          num=["+ num               +"]        count=["+ count             +"]");
            log("HTML   scrollHeight=["+ html.scrollHeight +"] offsetHeight=["+ html.offsetHeight +"] clientHeight=["+ html.clientHeight +"]");
            log("BODY   scrollHeight=["+ body.scrollHeight +"] offsetHeight=["+ body.offsetHeight +"] clientHeight=["+ body.clientHeight +"]");
        }
    }
    /*}}}*/
    /* possibly hidden  .. f(hidden_parent) {{{*/
    let el                   = ccs[slot].nodes[num-1];
    let hidden_parent = get_el_parent_with_class(el, MARKED_TO_HIDE);
    if( hidden_parent )
    {
if(log_this) log("..hidden_parent: %c "+ get_n_lbl(hidden_parent), lbb+lbH+lf7);
    }
    else {
        let xy = t_scrollIntoViewIfNeeded_get_scrollXY_with_margin( el );
        if( xy )
        {
            let dx = (xy.x - window.scrollX);
            let dy = (xy.y - window.scrollY);
/*
logXXX("xy=["+dx+" "+dy+"]")
*/
            if(dx || dy)
                t_window_scrollTo(xy.x, xy.y);
        }
/*
        else
            scroll_thumb_p_to_onSeek_XY(thumb_p, slot, onSeekXYL);
*/
    }
    /*}}}*/

    highlight_thumb_p_slot_num(slot, num, thumb_p);
    if((thumb_p <= 0) || hidden_parent) return false;
    else                                return  true;
};
/*}}}*/
/*_ get_parent_with_overflow {{{ */
let get_parent_with_overflow = function(node)
{
    for(let  parent  = node
        ;    parent && parent.style
        ;    parent  = parent.parentNode
    ) {
        let computedStyle = window.getComputedStyle(parent);
        if( computedStyle.overflow && (computedStyle.overflow != "visible"))
        {
/*
*/
logXXX(get_n_lbl(parent)+" %c overflow ["+parent.style.overflow+"] %c COMPUTED ["+computedStyle.overflow+"]"
    ,                      lbL+lf6                                ,lbR+lf7);
            return parent;
        }
    }
    return null;
};
/*}}}*/
/*_ scroll_thumb_p_to_onSeek_XY {{{*/
let scroll_thumb_p_to_onSeek_XY = function(thumb_p, slot, onSeekXYL)
{
let   caller = "scroll_thumb_p_to_onSeek_XY(thumb_p=["+thumb_p+"], slot=["+slot+"], onSeekXYL["+onSeekXYL.x+" "+onSeekXYL.y+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this ) log(caller);

    let page_height
        = get_page_height() * (body_zoom_percent / 100.0);

    let scrollX
        = window.scrollX
        - onSeekXYL.x;

    let scrollY
        = page_height * (thumb_p / 100.0)
        - onSeekXYL.y;

    try {
        t_window_scrollTo(scrollX, scrollY);
if(log_this) log("%c PAGE "+page_height+" %c thumb_p "+thumb_p+" %c scrollY "+Math.floor(scrollY)+" "
    ,             lbL+lf9                ,lbC+lf6                ,lbR+lf7);
    }
    catch(ex) {
        console.log(caller+": "+ex);
    }
};
/*
 TODO: sync last slot .. last num to last thumb_p
 TODO: or check window scrollY at next slot-selection-time
 TODO: option to choose between showing thumb_p-values -OR- dot-list
 TODO: swipe over dot-list to scroll forward or backward
*/
/*}}}*/

/*_ highlight_thumb_p_slot_num {{{*/
let last_highlight_thumb_p = 0;
let last_highlight_slot    =-1;
let last_highlight_num     = 0;
let highlight_thumb_p_slot_num = function(slot, num, thumb_p)
{
    let caller = "highlight_thumb_p_slot_num(slot=["+slot+"], num=["+num+"], thumb_p=["+thumb_p+"])";
if(LOG_MAP.S3_SLOT) log(caller);

    highlight_data_thumb_p(thumb_p, slot);

    if(ccs[slot]) set_tools_filter(ccs[slot].pattern);

    last_highlight_slot    = slot;
/*
logXXX("highlight_thumb_p_slot_num: last_highlight_slot=["+last_highlight_slot+"]")
*/
    last_highlight_num     = num;
    last_highlight_thumb_p = thumb_p;
};
/*}}}*/
let s_get_last_highlight_slot = function()
{
    return last_highlight_slot;
};
/*_ s_clear_last_highlight_slot {{{*/
let s_clear_last_highlight_slot = function()
{
    last_highlight_slot    = -1;
    last_highlight_num     = -1;
};
/*}}}*/
/*_ highlight_data_thumb_p {{{*/
let highlight_data_thumb_p = function(thumb_p, slot)
{
    /* text .. f(thumb_p) {{{*/
    let caller = "highlight_data_thumb_p(thumb_p=["+thumb_p+"] slot=["+ slot+"])";
    let log_this = LOG_MAP.S3_SLOT;
if(log_this) log(caller);
/*
console.warn(caller);
*/
    let el;
    let text                     = String(       thumb_p );
    if(               thumb_p < 10) text  = " "+ text     ;
    if     (text.indexOf(".") <  0) text +=          ".00";
    else if(text.length       <  5) text +=            "0";
if(log_this) log(" text=["+text+"]");

    /*}}}*/
    /* unhighlight all [data-thumb_p] {{{*/
    let doc = (shadow_root) ? shadow_root : document;
    let data_selector = "[data-thumb_p]";
    let elements = doc.querySelectorAll( data_selector );
if(log_this) log(" "+ elements.length+" "+data_selector);
    for(let i=0; i < elements.length; ++i)
        del_el_class(elements[i], "current_slot_num");

    /*}}}*/
    /* unhighlight [selbag div] [ellipsis em] {{{*/
    for(let s=0; s < SELECT_SLOT_MAX; ++s)
    {
        let id;
        id = ".select"  +s    ; if(el = get_tool(id)) { if(s == slot) add_el_class(el,"current_slot"); else del_el_class(el,"current_slot"); }
        id = "thumb_p_"+s+"_0"; if(el = get_tool(id)) { if(!(el.innerHTML.includes(SYMBOL_E))) el.innerText = SYMBOL_E; }
        id = "thumb_s_"+s+"_0"; if(el = get_tool(id)) { if(!(el.innerHTML.includes(SYMBOL_E))) el.innerText = SYMBOL_E; }
    }

    /*}}}*/
    /*   highlight   [data-thumb_p=   text   ] .. (both thumb_p and thumb_s) {{{*/
    data_selector = "[data-thumb_p='"+text+"']";
    elements = doc.querySelectorAll( data_selector );
if(log_this) log(" "+ elements.length+" "+data_selector);
    for(let i=0; i < elements.length; ++i) {
        add_el_class(elements[i], "current_slot_num");
    }

    /*}}}*/
    /* highlight ellipsis (fall back) {{{*/
    for(let slot = 1; slot < ccs.length; ++slot)
    {
        if(!ccs[slot]) continue;

        /* ? has thumb_p */
        for(let num = 1; num <= ccs[slot].thumbs.length; ++num)
        {
            let p  = parseFloat(ccs[slot].thumbs[num-1]);
            if( p == thumb_p)
            {
                /* ? [slot_num_id] */
                let slot_num_id = "thumb_p_"+ slot +"_"+ num;
                if( !get_tool(slot_num_id) )
                {
                    /* SEL_BAG */
                    let id = "thumb_p_"+slot+"_0";
                    if( el = get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        add_el_class(el, "current_slot_num");
                    }

                    /* SEEKER */
                    id = "thumb_s_"+slot+"_0";
                    if( el = get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        add_el_class(el, "current_slot_num");
                    }
                }
                else {
if(log_this) log(".DEDICATED SLOT TOOL HIGHLIGHTED: slot_num_id=["+slot_num_id+"]");
                }
                break;
            }
        }
    }
    /*}}}*/
};
/*}}}*/
/*_ s_clear_slot_all {{{ */
let s_clear_slot_all = function()
{
    let caller = "s_clear_slot_all";
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.S3_SLOT;

    let cleared_count   = 0;
    let cleared_pat_csv = "";

    for(let slot = 1; slot < ccs.length; ++slot)
    {
        let       pattern    = ccs[slot] ? ccs[slot].pattern : "";

        let clear_slot_count = clear_slot( slot );

        if( clear_slot_count && pattern)
            cleared_pat_csv  = csv_add(cleared_pat_csv, pattern);

        cleared_count       += clear_slot_count;
    }

if(log_this) log(caller+": "+cleared_count+" words highlighting cleared");
    return cleared_pat_csv;
};
/*}}}*/

/*_ s_selection_execCommand {{{ */
let s_selection_execCommand = function(cmd_csv)
{
    let caller = "s_selection_execCommand("+cmd_csv+")";
if(LOG_MAP.S3_SLOT) log(caller);

    document.designMode = "on";
    try {
        if(cmd_csv.indexOf("undo"         ) >= 0) document.execCommand("undo"                , false, null           );

        if(cmd_csv.indexOf("foreColor"    ) >= 0) document.execCommand("foreColor"           , false, "#FF0000"      );
        if(cmd_csv.indexOf("backColor"    ) >= 0) document.execCommand("backColor"           , false, "#00AADD"      );
        if(cmd_csv.indexOf("hiliteColor"  ) >= 0) document.execCommand("hiliteColor"         , false, "pink"         );

        if(cmd_csv.indexOf("bold"         ) >= 0) document.execCommand("bold"                , false, null           );
        if(cmd_csv.indexOf("fontName"     ) >= 0) document.execCommand("fontName"            , false, "Comic sans ms");
        if(cmd_csv.indexOf("fontSize"     ) >= 0) document.execCommand("fontSize"            , false, "400%"         );

        if(cmd_csv.indexOf("strikeThrough") >= 0) document.execCommand("strikeThrough"       , false, null           );
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    document.designMode = "off";

};
/*}}}*/
/*_ s_selection_add_cannot_expand {{{*/
const CANNOT_EXPAND_TO_SELECTION = "cannot_expand_to_selection";
let s_selection_add_cannot_expand = function()
{
log("s_selection_add_cannot_expand");
    s_selection_execCommand("hiliteColor");
    add_el_class(document.body, CANNOT_EXPAND_TO_SELECTION);
};
/*}}}*/
/*_ s_selection_del_cannot_expand {{{*/
let s_selection_del_cannot_expand = function()
{
log("s_selection_del_cannot_expand");
    del_el_class(document.body, CANNOT_EXPAND_TO_SELECTION);
};
/*}}}*/

/*_ get_slot_num_for_thumb_p {{{*/
let get_slot_num_for_thumb_p = function(slot, thumb_p, backward)
{
    let caller = "get_slot_num_for_thumb_p(slot=["+slot+"], thumb_p=["+thumb_p+"], backward=["+backward+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);

    if( !ccs[slot] ) {
if( log_this) log(caller+": SLOT "+ slot +" is empty");
        return 0;
    }
    let num_at_or_past_thumb_p = 0;

    let first = 1;
    let  last = ccs[slot].nodes.length;
    let   num = 0;

    if(!backward) {
        for(num    = first; num <= last; num += 1) {
            let p  = parseFloat( ccs[slot].thumbs[num-1] );
            if( p <= thumb_p) num_at_or_past_thumb_p = num;
            if( p >  thumb_p) break;
        }
    }
    else {
        for(num    = last; num >= first; num -= 1) {
            let p  = parseFloat( ccs[slot].thumbs[num-1] );
            if( p >= thumb_p) num_at_or_past_thumb_p = num;
            if( p <  thumb_p) break;
        }
    }

    if((num < first) || (num > last))
        num_at_or_past_thumb_p = 0;

if( log_this) log(caller+": return "+ num_at_or_past_thumb_p);

    return num_at_or_past_thumb_p;
};
/*}}}*/

/*}}}*/

/** RANGE */
/*{{{*/
/*_ get_range_from_XY {{{ */
let get_range_from_XY = function(x, y)
{
    /*{{{*/
    let caller = "get_range_from_XY";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"(x="+x+" , y="+y+")");
if( log_this) log("<div class='div_match'>");
    /*}}}*/
    let       range = get_range_from_caret(x,y);
    let not_a_range = (range && !range.setStart); /* !range.setStart (i.e. Firefox) */
    if( not_a_range )
    {
/*{{{*/
if(log_this) {
    console.dir(range);
    log("..!range.setStart .. CREATING RANGE:");
    log("...range.offsetNode....=["+ get_n_txt(range.offsetNode) +"]");
    log("...range.offset........=["+ range.offset     +"]");
}
/*}}}*/
        let new_range = document.createRange();
        new_range.setStart(range.offsetNode, range.offset);
        range = new_range;
    }
/* log {{{*/
if(log_this) {
    if(range) {
        log( rangeToString(range) );
        console_dir(range);
    }
    else {
        log(caller+": ...return null", "warn");
    }
    log("</div>");
}
/*}}}*/
    return range;
};
/*}}}*/
/*_ get_range_from_caret {{{*/
let get_range_from_caret = function(x, y)
{
/*{{{*/
let   caller = "get_range_from_caret";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"(x="+x+" , y="+y+")");
/*}}}*/

    let  range = null;
    try {
        /* caretRangeFromPoint {{{*/
if(log_this) log("%c...document.caretRangeFromPoint...=["+ document.caretRangeFromPoint    +"]", lbH+lf4);
        if((!range || !range.commonAncestorContainer)   && document.caretRangeFromPoint)
        {
            range =  document.caretRangeFromPoint(x,y); /* within the current viewport */

/*{{{
if(!range || !range.commonAncestorContainer) log("caretRangeFromPoint failed");
}}}*/
        }
        /* }}}*/
        /* caretPositionFromPoint {{{*/
if(log_this) log("%c...document.caretPositionFromPoint=["+ document.caretPositionFromPoint +"]", lbH+lf3);
        if((!range || !range.commonAncestorContainer)   && document.caretPositionFromPoint)
        {
            range =  document.caretPositionFromPoint(x,y);

/*{{{
if(!range) log("caretPositionFromPoint failed");
}}}*/
        }
        /* }}}*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }

if(log_this) log_range(range, caller);
    return range;
};
/*}}}*/
/*_ rangeToString {{{ */
let rangeToString = function(range, rangeName="RANGE")
{
    if(!range) return "<div>rangeToString(null range)</div>";

    let caller = "rangeToString";
    try {

        let range_str
            = range.toString();

        let range_attr
            = range.collapsed
            ?  "<span class='cc8'>collapsed at "+ range.startOffset                              +"</span>"
            :  "<span class='cc4'>offset "      + ellipsis(range.startOffset,32) +" .. "+ ellipsis(range.endOffset,32) +"</span> "
        ;

        let ancestor = "";
        if(range.commonAncestorContainer)
            ancestor =                         range.commonAncestorContainer.toString()          + " "
            +                                  get_n_attributes(range.commonAncestorContainer)   + " "
            +  range.commonAncestorContainer.length ? ""
            :                        "length=["+ range.commonAncestorContainer.length            +"] "
        ;

        let container_node = range.startContainer ? range.startContainer : range.offsetNode;

        let container;
        container = "";
        if(container_node)
            container =                   container_node.toString()                              + " "
            +                   " nodeName=["+ container_node.nodeName                           +"] "
            +                     " length=["+ container_node.length                             +"] "
            +                                  get_n_attributes(container_node                 ) +"] "
            + !container_node.previousSibling ? ""
            :             "previousSibling: "+ get_n_attributes(container_node.previousSibling ) + " "
        ;

        let endContainer = "";
        if(range.endContainer)
            endContainer =                     range.  endContainer.toString()                   + " "
            +                   " nodeName=["+ range.  endContainer.nodeName                     +"] "
            +                     " length=["+ range.  endContainer.length                       +"] "
            +                                  get_n_attributes(range. endContainer            ) +"] "
            + !container_node.nextSibling ? ""
            :                 "nextSibling: "+ get_n_attributes(range. endContainer.nextSibling) + " "
        ;

        rangeName = "<span class='cc7'>"+rangeName+"</span>";
        range_str = "<div  class='ng'>"+range_str+"</div>";

        container = "";
        if(range.commonAncestorContainer)
            container = node_toString( range.commonAncestorContainer.parentElement );

        return rangeName
            +  "<div class='div_match'>"
            +  " <div>container: "     + container    +"</div>"
            +  " <ul>"
            +  "  <li>"                + range_str    +"</li>"
            +  "  <li>"                + range_attr   +"</li>"
            +  "  <li>Ancestor: "      + ancestor     +"</li>"
            +  "  <li>Start: "         + container    +"</li>"
            +  "  <li>End: "           + endContainer +"</li>"
            +  " </ul>"
            +  "</div>"
        ;
    }
    catch(ex) { log(caller+"("+rangeName+"): "+ex, "error"); }
};
/*}}}*/
/*_ log_range {{{*/
let log_range = function(range, _caller="")
{
    if(!range) {
        log(_caller+": range=["+range+"]");
    }
    else if(range.collapsed) {
        log("%c"+_caller   +"%c"+range.startOffset+"%c"+trim_node_textContent(range.startContainer), lbL+lf8, lbC+lf3, lbR+lf3);
    }
    else {
        log("%c"+_caller    +"%c"+range.startOffset+"%c"+trim_node_textContent(range.startContainer), lbL+lf8, lbC+lf4, lbR+lf4);
        log("%c..endContainer %c"+range.  endOffset+"%c"+trim_node_textContent(range.  endContainer), lbL+lf8, lbC+lf5, lbR+lf5);
    }
};
/*}}}*/
/*}}}*/

/** CHECK */
/*{{{*/
/*{{{*/
let CHECK_LOG_MAX       =  64;

let TOO_MANY_SELECTIONS = 256;
/*
//let WORDS_EXACT         = "words_exact";
//let WORDS_SEGMENT       = "words_segment";
//let WORDS_HEAD_TAIL     = "words_head_tail";
//let WORDS_OPCYCLE       = "words_opcycle";
*/
let mNodeRegexP;
/*}}}*/
/*_ get_traversal_node_array {{{*/
let get_traversal_node_array = function(pattern, options, mDomTraversal)
{
/*{{{*/
let   caller = "get_traversal_node_array(pattern=["+pattern+"], "+options+")";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller);
if( log_this) log_tags();
/*}}}*/

    mNodeRegexP = get_mNodeRegexP(pattern, options);
if( log_this) log("mNodeRegexP........=["+mNodeRegexP        +"]");
    if(!mNodeRegexP) return null;

    mNodeRegexP.pattern =         pattern;
if( log_this)    log("mNodeRegexP.pattern=["+mNodeRegexP.pattern+"]");

    t_words_regex_log( mNodeRegexP.toString() );

    /* clear any to-be-reselected selection */
    let slot;
    if( slot = get_slot_matching_pattern( pattern ))
        clear_slot( slot );

    let node_array = [];
    let node;
    while(node = mDomTraversal.nextNode())
    {
        if( node_has_some_text(  node) ) {
/*
logXXX("___ node.textContent..................=["+                  node.textContent  +"]");
*/
            if(node_array.length >= TOO_MANY_SELECTIONS)
                break;
            node_array.push(node);
        }
        else {
if(log_this) {
log("XXX !node_has_some_text(node).........=["+ node_toString(node)                +"]");
log("XXX node.nodeValue....................=["+                  node.nodeValue    +"]");
log("XXX node.textContent..................=["+                  node.textContent  +"]");
log("XXX trim_alNum_lines(node.textContent)=["+ trim_alNum_lines(node.textContent) +"]");
}
/*
*/
        }
    }
if(log_this) log(caller+": return node_array.length=["+node_array.length+"]");
    return node_array;
};
/*}}}*/
/*_ get_mNodeRegexP {{{*/
let get_mNodeRegexP = function(pattern, options)
{
    let caller = "get_mNodeRegexP <em class='cc5'>"+pattern+"</em> <em class='cc6'>"+options+"</em>";
let log_this = LOG_MAP.S1_RANGE;

    let rx = null;
try {
    switch(options)
    {
        case WORDS_EXACT:
        rx = new RegExp("\\b("+pattern+")\\b", "gi");
        break;

        case WORDS_SEGMENT:
        rx = new RegExp(   "("+pattern+")"   , "gi");
        break;

        case WORDS_HEAD_TAIL:
        let s = pattern;
        if(!pattern.startsWith("\\S" ) ) s = "\\S*"+s       ;
        if(!pattern.endsWith  ("\\S*") ) s =        s+"\\S*";
        if( pattern != s) {
            pattern  = s;
            rx = new RegExp(   "("+pattern+")"   , "gi");
        }
        break;

        default:
if(log_this) log("<em class='cc2'>*** wrong options: ["+ options +"] ***</em>");
    }
} catch(ex) { log(caller+": "+ex, "error"); }
if(log_this) log(caller+": ...return <em class='cc7'>"+rx+"</em>");
    return rx;
};
/*}}}*/

/*_ check_Traversal {{{*/
/*{{{*/
let root_last_used_id;

/*}}}*/
let check_NodeIterator = function(           tag_or_id, pattern) { return check_Traversal("NodeIterator", tag_or_id, pattern); };
let check_TreeWalker   = function(           tag_or_id, pattern) { return check_Traversal("TreeWalker"  , tag_or_id, pattern); };
let check_Traversal    = function(traversal, tag_or_id, pattern)
{
/* {{{*/
let   caller = "check_traversal";
let log_this = LOG_MAP.S3_SLOT;

if(log_this) log("%c"+caller+" %c traversal=["+traversal+"] %c tag_or_id=["+tag_or_id+"] %c pattern=["+pattern+"]"
    ,             lbH         ,lbL                         ,lbC                         ,lbR                      );
if(log_this) log_add_TR_SELECT("<em class='cc3'>caller</em> traversal=<em class='cc3'>"+traversal+"</em> tag_or_id=<em class='cc4'>"+tag_or_id+"</em> pattern=<em class='cc6'>"+pattern+"</em>");
/*}}}*/
if( !check_wall_of_text_done) check_wall_of_text();
    /* pattern {{{*/
    if( !pattern ) {
        log("%c"+caller+" %c no pattern to look for", lbL, lbR+lf3);
        return;
    }

    /*}}}*/
    /* ROOT ID PERSISTENCE .. (unspecified tag_or_id fallback) {{{*/
    if(tag_or_id) {              root_last_used_id = tag_or_id; if(log_this) log("%c SET %c root_last_used_id = tag_or_id %c "+tag_or_id, lbL+lf5, lbC, lbR+lf5); }
    else          { tag_or_id  = root_last_used_id            ; if(log_this) log("%c GET %c tag_or_id = root_last_used_id %c "+tag_or_id, lbL+lf8, lbC, lbR+lf8); }

    /*}}}*/
    /* searched root {{{*/
    let root = pick_tag_or_id_node(tag_or_id, caller);

    let mDomTraversal
        = (traversal == "NodeIterator")
        ?  document.createNodeIterator(root, NodeFilter.SHOW_TEXT, mNodeFilter_function)
        :  document.createTreeWalker  (root, NodeFilter.SHOW_ALL , mNodeFilter_function);

if(log_this) log("<em class='cc3'>"+ object_label(mDomTraversal) +"</em> ID: <em class='cc4'>"+tag_or_id+"</em>");

    /*}}}*/
    /* pattern matching node_array {{{*/

    let options
        = prop_get(WORDS_EXACT  ) ? WORDS_EXACT
        : prop_get(WORDS_SEGMENT) ? WORDS_SEGMENT
        :                           WORDS_HEAD_TAIL
    ;
    let node_array = get_traversal_node_array(pattern, options, mDomTraversal);
/*{{{
    if((node_array.length < 1) && prop_get("words_opcycle"))
    {
        options = (options == WORDS_EXACT  ) ? WORDS_SEGMENT
            :     (options == WORDS_SEGMENT) ? WORDS_HEAD_TAIL
            :                                  WORDS_EXACT
        ;
        node_array  = get_traversal_node_array(pattern, options, mDomTraversal);

        if( node_array.length < 1)
        {
            options = (options == WORDS_EXACT  ) ? WORDS_SEGMENT
                :     (options == WORDS_SEGMENT) ? WORDS_HEAD_TAIL
                :                                  WORDS_EXACT
            ;
            node_array  = get_traversal_node_array(pattern, options, mDomTraversal);
        }
    }
}}}*/
    /*}}}*/
    if(!node_array)
    {
if(log_this) log_set_TR_RESULT();
        return;
    }
    /* collect matching nodes {{{*/

    if(    (node_array.length >= TOO_MANY_SELECTIONS)
        || (node_array.length == 0                  )
    ) {
        let sel_bag;
        if( sel_bag = get_tool("sel_bag"))
        {

            let msg = (node_array.length > 0)
                ? "*** TOO MANY: <em class='cc8'>"+pattern+"</em> .. (max "+TOO_MANY_SELECTIONS+") ***"
                : "--- NO MATCH: <em class='cc8'>"+pattern+"</em> ---"
            ;
            let el;
            if( el = get_tool("sel_bag_warn_div")) el.innerHTML= msg;
            else     sel_bag.innerHTML = "<div id='sel_bag_warn_div' class='cc2'>"+  msg +"</div><br>"
                +    sel_bag.innerHTML;
        }
if(log_this) log_set_TR_RESULT();
        return;
    }
    if(log_this) {
        let msg = ""
            +"<p><em class='cc8'>" + options                          +"</em>"
            +"<br><em class='cc7'>"+ pattern_toHTML(pattern, options) +"</em>"
            +"<br>"                + "has selected"
            +"<br><em>"            + node_array.length                +"</em> nodes"
            +"</p>"
        ;

        log("<div class='badge'>"+msg+"</div>");
    }

    s_touchedWord_slot  = get_free_slot();
    for(let i = 0; i < node_array.length; ++i)
    {
if(log_this) log("<em class='cc0' style='font-size:300%;'>"+(i+1)+"/"+node_array.length+"</em>");
        collect_node_matches_to_slot(s_touchedWord_slot, node_array[i], pattern, options);
    }

    /*}}}*/
if(log_this) log_set_TR_RESULT();
};
/*}}}*/

/*_ check_childNodes {{{*/
let check_childNodes = function(tag_or_id, pattern)
{
    /* [tag_or_id] {{{*/
    let caller = "<em class='cc3'>check_childNodes</em> tag_or_id=<em class='cc4'>"+tag_or_id+"</em> pattern=<em class='cc6'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) log_set_TR_SELECT(caller);

    let root = pick_tag_or_id_node(tag_or_id, caller);
    if(!root) return;

if( log_this) log("<em class='cc3'>check_childNodes</em> <em class='cc4'>ID: "+tag_or_id+"</em> <em class='cc4'>pattern: "+pattern+"</em>");
if( log_this) log_tags();
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [childNodes] {{{*/
    let node, last_node, count, empty_count=0;
    for(count = 0; count < root.childNodes.length; ++count)
    {
        node         = root.childNodes[count];
        last_node    = node;
        if(count < CHECK_LOG_MAX) check_log_num_thumb(count, node);
    }

    if( log_this && (count >= CHECK_LOG_MAX)) {
        log(mPadStart(" .../..."));
        log(mPadStart(" "+count,3," ") +  node_toString( last_node ));
    }
    if( log_this && (empty_count > 0)) log("...empty_count=["+empty_count+"]");
    /*}}}*/
};
/*}}}*/
/*_ check_tagNodes {{{*/
let check_tagNodes = function(tag, pattern)
{
    /* [tag] .. (getElementById or getElementsByTagName) {{{*/
    if(!tag) tag = "*";
    let caller = "<em class='cc3'>check_tagNodes</em> tag=<em class='cc4'>"+tag+"</em> pattern=<em class='cc5'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if(log_this) log(caller);
if(log_this) log_set_TR_SELECT(caller);

    /* ELEMENTS */
    let elements = document.getElementsByTagName(tag);
if(log_this) log(caller+" <em class='cc4'>"+elements.length+" "+tag+" elements</em>");

    if(!elements.length) {
        elements = document.querySelectorAll( tag );
if(log_this) log(".document.querySelectorAll("+tag+")=["+elements.length+"]");
    }

    /* FILTER */
    mNodeRegexP  = (pattern) ? new RegExp(pattern, "gi") : null;
if(log_this) log_tags();
if(log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [getElementsByTagName(tag)] {{{*/
    let node, last_node, count, empty_count=0;
    for(count = 0; count < elements.length; ++count)
    {
        node         = elements[count];
        last_node    = node;
        if(!mNodeRegexP || node.textContent.match(mNodeRegexP))
        {
            if(count < CHECK_LOG_MAX) check_log_num_thumb(count, node);
        }
    }

if(log_this && (count >= CHECK_LOG_MAX)) {
    log(mPadStart(" .../..."));
    log(mPadStart(" "+count,3," ") +  node_toString( last_node ));
}

if(log_this && (empty_count > 0)) log("...empty_count=["+empty_count+"]");
    /*}}}*/
};
/*}}}*/
/*_ check_hasFeature {{{ */
let check_hasFeature = function(feature, version)
{
    let caller = "<em class='cc3'>check_hasFeature</em> feature=<em class='cc4'>"+feature+"</em> version=<em class='cc5'>"+version+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);

    let result = "";
    try {
        let input_feature = get_tool("input_feature"); var feature = input_feature.value;
        let input_version = get_tool("input_version"); var version = input_version.value;
        result = document.implementation.hasFeature(feature, version);
    }
    catch(ex) {
        result = ex.toString();
    }

if( log_this) log(caller+": ...return "+result);
    return result;
};
/*}}}*/
/*_ check_log_num_thumb {{{*/
let check_log_num_thumb = function(count, node)
{
    let         num = mPadStart(count, 5, " ");

    let thumb_p     = get_node_thumb_p( node    );
    let thumb_p_str = get_thumb_p_str ( thumb_p );
    let      offset = " ["+ thumb_p_str.replace(" ","&nbsp;") +"%]";

    let         val = node_toString(node);

    log("<span class='check_log_num_thumb'>"+num + offset +"</span> "+ val);
};
/*}}}*/

/*_ mNodeFilter_function {{{*/
let mNodeFilter_function = function(node)
{
    let check_result = mNodeFilter_check_node( node );

if(LOG_MAP.S1_RANGE && (check_result != NodeFilter.FILTER_SKIP)) log("mNodeFilter_function: "+ mNodeFilter_toString(check_result) + node_toString(node));

    return check_result;
};
/*}}}*/
/*_ mNodeFilter_check_node {{{*/
let mNodeFilter_check_node = function(node)
{
    /* REJECT == child nodes are also rejected */
    /* SKIP   == children are still considered */

    /* 2. REJECT [parent   == SCRIPT or STYLE] {{{*/
    let parent = node.parentNode;
    if( parent && (parent.nodeType == Node.ELEMENT_NODE))
    {
        if( parent.tagName  == "SCRIPT"             ) return NodeFilter.FILTER_REJECT;
        if( parent.tagName  == "STYLE"              ) return NodeFilter.FILTER_REJECT;
        if( is_node_selected( parent )              ) return NodeFilter.FILTER_REJECT;
    }
/*{{{
        if( parent.className.includes("knob_content") )
        {
            console.log("REJECTING: "+ parent.parentNode.id);
            console.dir(parent);
            return NodeFilter.FILTER_REJECT;
        }
}}}*/

    /*}}}*/
    /* REJECT .. f(node_to_hide parent) */
    if( dom_hide_is_marked_to_hide( node )      ) {
/*
logXXX("%c mNodeFilter_check_node( "+get_id_or_tag(node)+" ) %c IS HIDDEN", lbL+lf6, lbR+lf7);
*/
        return NodeFilter.FILTER_REJECT;
    }
    /* 3. SKIP   [node     != TEXT_NODE] {{{*/
    if(node.nodeType != Node.TEXT_NODE              ) return NodeFilter.FILTER_SKIP  ;

    /*}}}*/
    /* 1. ACCEPT [REGEXP   == textContent] {{{*/
    if(    mNodeRegexP         && node.textContent  )
        if(mNodeRegexP.pattern == node.textContent  ) return NodeFilter.FILTER_ACCEPT;

    /*}}}*/
    /* 4. ACCEPT [ALL WHEN NO REGEX] {{{*/
    if(                       !mNodeRegexP          ) return NodeFilter.FILTER_ACCEPT;

    /*}}}*/
    /* 5. SKIP   [REGEX MISSMATCH or !textContent] {{{*/
    if(!node.textContent                            ) return NodeFilter.FILTER_SKIP  ;
    if(!node.textContent.match(mNodeRegexP)         ) return NodeFilter.FILTER_SKIP  ;

    /*}}}*/
    /* 6. ACCEPT BY FILTER {{{*/
    else                                              return NodeFilter.FILTER_ACCEPT;

    /*}}}*/
};
/*}}}*/
/*_ mNodeFilter_toString {{{*/
let mNodeFilter_toString = function( check_result )
{
    switch( check_result )
    {
        case NodeFilter.FILTER_ACCEPT: return "<em class='cc4'>FILTER_ACCEPT </em>";
        case NodeFilter.FILTER_REJECT: return "<em class='cc1'>FILTER_REJECT </em>";
        case NodeFilter.FILTER_SKIP  : return "<em class='cc8'>FILTER_SKIP   </em>";
        default                      : return "<em class='cc2'>FILTER_ERROR  </em>";
    }
};
/*}}}*/
/*}}}*/

/* CHUNK WALLS OF TEXT */
/*{{{
:!start explorer "https://regexr.com/32oeg"
:!start explorer "https://www.regular-expressions.info/refrepeat.html"
}}}*/
/* check_wall_of_text {{{*/
/*{{{*/
const WALL_OF_TEXT_PARENT = "wall_of_text_parent";
const WALL_OF_TEXT_SPLIT  = "wall_of_text_split";
const WOT_LENGTH          = 512;
const REPORTS_COUNT_MAX   = 3;
let   check_wall_of_text_done;

/*}}}*/
let check_wall_of_text = function()
{
/*{{{*/
let   caller = "check_wall_of_text";

console.time(caller);
/*{{{
}}}*/
/*}}}*/
    /* split up wall of text nodes */
    check_wall_of_text_done = true;
    reports_count           = 0;

    let          root = document.body;
    let mDomTraversal = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, mNodeFilter_wall_of_text_function);
    let    text_node_array = get_wall_of_text_node_array(mDomTraversal);

/*{{{
log("%c"+caller+" %c "+text_node_array.length+" TEXT NODES FILTER_ACCEPT'ed", lbH, lbH+lf3);
}}}*/
    let node_count = 0;
    let char_count = 0;
    let line_count = 0;
    for(let i = 0; i < text_node_array.length; ++i)
    {
        /* PARENT */
        let                       text_node = text_node_array[i];
        let              parent = text_node.parentNode;
        /* already removed .. already handled */
        if(             !parent                        ) continue;
/*{{{
        if( has_el_class(parent , WALL_OF_TEXT_PARENT) ) continue;
}}}*/
        add_el_class    (parent , WALL_OF_TEXT_PARENT);

/*{{{
log("%c"+i, lbb+lbH+lf3);
console_dir(parent   , "parent has "+   parent.children.length+" children");
console_dir(text_node, "text_node");
log("%c "+get_id_or_tag(parent)+" "+parent.textContent.length+" characters", lbH);
}}}*/

        /* REPLACE #TEXT WITH A BUNCH OF <P> */
        let                 split_node = document.createElement("P");
        parent.insertBefore(split_node , text_node);

        char_count                    += text_node.textContent.length;
        parent.removeChild (             text_node );

        /* INJECT #TEXT INTO A P.innerHTML {{{*/
/*{{{
        split_node.outerHTML = split_WALL_OF_TEXT(text_node.textContent, "P");
}}}*/

        let lines      = text_node.textContent.split(LF);
        let innerHTML  = "";
        let   l = 0;
        while(l < lines.length)
        {
            let p = "";

            do {
                let s    = lines[l++];
                if(s) p += escapeHTML(s)+LF;
            }
            while((l < lines.length) && (p.length + lines[l].length) <= WOT_LENGTH);

            innerHTML += "<p class='"+WALL_OF_TEXT_SPLIT+"'>"+p+"</p>";
        }
        /*}}}*/
        split_node.outerHTML =                                        innerHTML       ;

/*{{{
console_dir(parent, "...parent has "+parent.children.length+" children");
}}}*/

        line_count += lines.length;
        node_count += 1;

/*{{{
logXXX("check_wall_of_text: %c node_count=["+node_count+"] %c line_count=["+line_count+"] %c char_count=["+char_count+"]", lbL, lbC, lbR);
}}}*/
    }

/*{{{
if(node_count) log("%c"+node_count+" WALLS OF TEXT %c "+char_count+" characters %c "+line_count+" lines", lbL, lbC, lbR);
if(node_count) console.timeEnd(caller);
}}}*/
};
/*}}}*/
/*_ split_WALL_OF_TEXT {{{*/
let regexp_CHUNK = new RegExp("((.|\\n){32,512}\\n)", "gm");
let split_WALL_OF_TEXT = function(text, tagName)
{
    let result
    = escapeHTML( text )
        .   replace(regexp_CHUNK, "<"+tagName+" class='"+ WALL_OF_TEXT_SPLIT +"'>$1</"+tagName+">")
    ;
/*{{{
log("%c"+result, lbH+lf5);
}}}*/
    return result;
};
/*}}}*/
/*_ escapeHTML {{{*/
/*{{{*/
var escapeHTML_chars = {"<": "&lt;", ">": "&gt;", "&": "&amp;", [DOUBLE_QUOTE] : "&quot;"};

/*}}}*/
let escapeHTML = function (text)
{
  return text.replace(/[<>&"]/g, function(character) { return escapeHTML_chars[character]; });
};
/*}}}*/
/*_ mNodeFilter_wall_of_text_function {{{*/
let   reports_count;
let mNodeFilter_wall_of_text_function = function(node)
{
    let                                                       check_result = NodeFilter.FILTER_ACCEPT, details = "";
    if     ((!node.parentNode                      )      ) { check_result = NodeFilter.FILTER_REJECT; details = "NODE HAS NO PARENT" ; }
    else if(( node.parentNode.tagName  == "SCRIPT" )      ) { check_result = NodeFilter.FILTER_REJECT; details = "SCRIPT TEXT"        ; }
    else if(( node.parentNode.tagName  == "STYLE"  )      ) { check_result = NodeFilter.FILTER_REJECT; details = "STYLE TEXT"         ; }
    else if(( node.nodeType       != Node.TEXT_NODE)      ) { check_result = NodeFilter.FILTER_SKIP  ; details = "NOT A TEXT NODE"    ; }
    else if((!node.textContent                     )      ) { check_result = NodeFilter.FILTER_SKIP  ; details = "NO TEXT CONTENT"    ; }
    else if(( node.textContent.length < WOT_LENGTH )      ) { check_result = NodeFilter.FILTER_SKIP  ; details = "["+ node.textContent.length+" char] <  [WOT_LENGTH "+WOT_LENGTH+"]"; }
    else if(  dom_hide_is_marked_to_hide( node     )      ) { check_result = NodeFilter.FILTER_REJECT; details = "NODE MARKED TO HIDE"; }
    else                                                    { check_result = NodeFilter.FILTER_ACCEPT; details = "FILTER_ACCEPT ["+ node.textContent.length+" char] >= [WOT_LENGTH "+WOT_LENGTH+"]"; }

/*{{{
if((check_result == NodeFilter.FILTER_ACCEPT) && (reports_count++ < REPORTS_COUNT_MAX))
    logXXX("%c WOT ("+reports_count+"/"+REPORTS_COUNT_MAX+"...) "+ node.parentNode.tagName +"."+ node.nodeName +" %c "+details+" %c"+ellipsis(node.textContent, 64), lbL, lbC, lbR);
}}}*/

    return check_result;
};
/*}}}*/
/*_ get_wall_of_text_node_array {{{*/
let get_wall_of_text_node_array = function(mDomTraversal)
{
    let   node_array = [];
    let   node;

    while(node = mDomTraversal.nextNode())
        node_array.push(node);
/*
log("get_wall_of_text_node_array: return node_array.length=["+node_array.length+"]");
*/
    return node_array;
};
/*}}}*/

/** COLLECT */
/*{{{*/
/*_ collect_node_matches_to_slot {{{*/
let collect_node_matches_to_slot = function(slot, node, pattern, options)
{
/*{{{*/
let   caller = "collect_node_matches_to_slot";
let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+"(slot=["+slot+"], node=["+get_n_txt(node)+"]");
/*}}}*/

if( log_this) log("<div class='div_match'>");
    let matches;
    for(let i = 0; (matches = mNodeRegexP.exec(node.textContent)); ++i)
    {
if( log_this) log("<div class='div_match' style='border:3px dotted yellow !important;'>");

        let num = ccs[slot].nodes.length+1;
if( log_this) log_match(node, slot, num, i, mNodeRegexP, matches);

        let       match = matches[0]; /* the full string */
        let startOffset = matches.index;
        let   endOffset = startOffset + match.length;

        /* select match */
        let       range = document.createRange();
        range.setStart(node, startOffset);
        range.setEnd  (node,   endOffset);

        /* collect match */
        if(ccs[slot].nodes.length < TOO_MANY_SELECTIONS)
        {
            window.getSelection().removeAllRanges();
            window.getSelection().addRange( range );
            if(i == 0) document.execCommand("copy"); /* to clipboard */

            let ccs_node_nextSibling = collect_selection_to_slot(slot, pattern, options);

            if( ccs_node_nextSibling ) {
                node = ccs_node_nextSibling;
                mNodeRegexP.lastIndex = 0;
            }
if( log_this) log("...<blockquote class='cc6'>"+ get_n_txt(node).substring(mNodeRegexP.lastIndex) +"</blockquote>");
        }
        else {
            window.getSelection().addRange( range );
        }
if( log_this) log("</div>");
    }

    window.getSelection().removeAllRanges(); /* .. to dismiss WebView Clipboard-Popup */

if( log_this) log("</div>");
};
/*}}}*/
/*_ log_match {{{*/
let log_match = function(node, slot, num, i, regex, matches)
{
    let s = ""
        + "<blockquote class='cc6'> "+            escape_CR_LF( ellipsis(node.textContent, 128) ) +"</blockquote>"
        + "<em class='cc6 em_match'> "+           matches[0]                                      +"</em>"
        + "<br>"
        + "<em class='cc"+((slot  )%9 + 1)+"'>slot "+   slot                                      +"</em>"
        + "<em class='cc"+(( num-1)%9 + 1)+"'>num "+    num                                       +"</em>"
        + "<em class='cc"+((   i  )%9 + 1)+"'>match #"+ (i+1)                                     +"</em>"
        + " REGEX: "
        + "<em class='cc4'> "+                    regex                                           +"</em>"
        + "<em class='cc5'> index "+              matches.index                                   +"</em>"
        + "<em class='cc8'> lastIndex "+          mNodeRegexP.lastIndex                           +"</em>"
    ;
    log(s);
};
/*}}}*/

/*_ collect_selection_to_slot {{{ */
let collect_selection_to_slot = function(slot, pattern, options)
{
/*{{{*/
    let caller = "collect_selection_to_slot";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log(caller+"(slot=["+slot+"], pattern=["+pattern+"], options=["+options+"])");
/*}}}*/

    let selection = window.getSelection();
    if(!selection               ) return null;
    if( selection.rangeCount < 1) return null;

    let range     = selection.getRangeAt(0);

    let sel_text  = range.toString().trim();
if(log_this) log(".sel_text=["+sel_text +"]");

    if(!sel_text                ) return null;

    if(!pattern) pattern = sel_text;

    /* inject highlight node */
    let ccs_node        = document.createElement("em");
    ccs_node.innerText  = sel_text;

    collect_ccs_range_node_slot(range, ccs_node, slot, pattern, options);

if(log_this) log("return ccs_node.nextSibling=["+ccs_node.nextSibling+"]");
    return ccs_node.nextSibling;
};
/*}}}*/
/*_ collect_ccs_range_node_slot {{{*/

let some_container_is_too_high;

let collect_ccs_range_node_slot = function(range, ccs_node, slot, pattern, options)
{
    /*{{{*/
let caller = "collect_ccs_range_node_slot";
let log_this = LOG_MAP.S3_SLOT;

if( log_this) log(caller+"(range, ccs_node, slot=["+slot+"])");
    /*}}}*/
    /*  parent_with_overflow {{{*/
    let parent_with_overflow = get_parent_with_overflow( ccs_node );
    if( parent_with_overflow )
    {
if(log_this) log(caller+"%c NOT COLLECTING "+get_n_txt( ccs_node )+" .. parent_with_overflow "+get_n_txt( parent_with_overflow ), lbH+lf2);
        return;
    }
    /*}}}*/
    /* container {{{*/
    let container                      = get_text_container( range.startContainer );
    let container_H                    = container ? container.offsetHeight : 0;
    let container_is_too_high          = (container_H             >  window.innerHeight);
    let container_is_body              = (container               == document.body);
    let container_is_body_direct_child = (container.parentElement == document.body);
    let container_is_body_single_child = (container               == document.body) && (document.body.childNodes.length == 1);
    let container_is_body_first_child  = (container               == document.body) && (document.body.childNodes[0]     == container);

if(log_this && container_is_too_high         ) log("%c container_is_too_high         ", lbH+lf2);
if(log_this && container_is_body             ) log("%c container_is_body             ", lbH+lf3);
if(log_this && container_is_body_direct_child) log("%c container_is_body_direct_child", lbH+lf4);
if(log_this && container_is_body_single_child) log("%c container_is_body_single_child", lbH+lf5);
if(log_this && container_is_body_first_child ) log("%c container_is_body_first_child ", lbH+lf6);

    if(     container_is_too_high         ) some_container_is_too_high = true;
    if(     container_is_too_high         ) container = null;
    else if(container_is_body             ) container = null;
    else if(container_is_body_single_child) container = null;
/*
    if(container_is_body_direct_child) container = null;
    if(container_is_body_first_child ) container = null;
*/
if(log_this) log("%c container %c "+get_n_lbl(container)+"%c H="+container_H, lbL, lbC+lf7, lbR+lf8);
    /*}}}*/
    /* thumb_p .. f(parent container or range.startContainer) {{{*/
/*
    let node = container ? container : range.startContainer;
logXXX("...node=["+get_n_lbl(node)+"]")
*/
/*{{{
    TODO
    ? thumb_p of range.startContainer
    ? thumb_p of selected parent container
    ? thumb_p of ccs_node
}}}*/
/*{{{
    let thumb_p = get_node_thumb_p(container ? container : ccs_node);
    let thumb_p = get_node_thumb_p(range.startContainer );
}}}*/
/*
    let thumb_p   = get_node_thumb_p( node );
    if( thumb_p   < 1)
        thumb_p   = get_node_thumb_p(ccs_node);
*/
    /* CCS INSERT .. (TEMPORARILY REPLACE SELECTION) {{{*/
    range.deleteContents();
    range.insertNode(ccs_node);

    /*}}}*/
    let node    = container ? container : ccs_node;
    let thumb_p = get_node_thumb_p( node );

    if(thumb_p < 0.01)
    {
if(log_this) log(caller+"%c NOT COLLECTING "+get_n_txt(node)+" .. (thumb_p < 0.1)=["+thumb_p+"]", lbH+lf2);

        ccs_node.outerHTML = ccs_node.innerHTML;
        return;
    }
    /*}}}*/
    /* CCS CREATE {{{*/
    let                   next_idx = ccs[slot].nodes.length;
    let                        ccX =     slot % SELECT_SLOT_MAX;
    let                 slot_class = SEL_CLASS_PREFIX +     ccX;
    let                 word_class = SEL_CLASS_PREFIX +"_"+ options;

    ccs_node.id                    = slot_class +"_"+(next_idx+1);
    ccs_node.className             = slot_class +" "+ word_class;
    ccs[slot].slot                 = slot;
    ccs[slot].pattern              = pattern;
    ccs[slot].options              = options;
    ccs[slot].nodes     [next_idx] = ccs_node;
    ccs[slot].containers[next_idx] = container;

if(log_this) log("%c ccs_node: "+ node_toString(ccs_node), "background-color:#880");

    /*}}}*/
    /* CCS [thumb_p] {{{*/
    let thumb_p_str = get_thumb_p_str( thumb_p );
    if(!thumb_p_str)
    {
if(log_this) log("%c *** INVALID thumb_p=["+thumb_p+"] .. container=["+get_n_lbl(container)+"] ccs_node=["+get_n_lbl(ccs_node)+"] ***", lbH+lf2);
        thumb_p_str = "0";
    }
    ccs[slot].thumbs    [next_idx] = thumb_p_str;
/*
if(log_this) log("slot=["+slot+"] num=["+(next_idx+1)+"] thumb_p=["+thumb_p_str+"] ["+ccs_node.textContent+"]");
*/

if(log_this) log( ccs[slot].num_toHTML(next_idx + 1) );
    /*}}}*/
    /* CCS CONTAINER HIGHLIGHT [containers_hi] {{{ */
    if( !prop_get("containers_hi") ) return;
    if( !container     ) return;
    if(  container.classList)
        if(  container.classList.contains( "container_dark" ) || container.classList.contains( "container_light" )) return;

    add_el_class(container , prop_get(THEME_DARK) ? "container_dark" : "container_light");

    /*}}}*/
};
/*}}}*/

/*_ get_text_container {{{*/
let BAIL_OUT_COUNT = 10;
let get_text_container = function(node)
{
    let caller = "get_text_container("+get_n_txt(node)+")";
let log_this = LOG_MAP.S3_SLOT;

    let container = node.parentElement;

    let node_text_length = node.textContent.trim().length;
    if(!node_text_length) return container;

    let count;
    for(count = 0; count < BAIL_OUT_COUNT; ++count)
    {
        if(container == null)
        {
if(log_this) log("%c"+caller+"%c NO PARENT", lbL, lbR+lf2);

            break;
        }

        if( is_text_container_node( container ) )
        {
if(log_this) log("%c"+caller+"%c FOUND CONTAINER ["+get_n_str( container )+"] ("+container.tagName+")", lbL, lbR+lf4);
            break;

/* container_text_length {{{
            let container_text_length = container.textContent.trim().length;
            if( container_text_length > node_text_length) {
                break;
            }
            else {
if(log_this) log("...(container_text_length=["+container_text_length+"] <= node_text_length=["+node_text_length+"]");
            }
}}}*/
        }

        container = container.parentElement;
    }

    if(count >= BAIL_OUT_COUNT)
    {
if(log_this) log("%c"+caller+"%c BAILING OUT ON ["+get_n_str(node)+"] after "+count+" attempts at looking for a container", lbL, lbR+lf1);

    }
/*
if(log_this) logXXX("...container.textContent.length=["+container.textContent.length+"]")
if(log_this) log("%c"+container.textContent, lbH);
*/
    return container;
};
/*}}}*/
/*_ is_text_container_node {{{*/
let is_text_container_node = function(node)
{
let   caller = "is_text_container_node";
let log_this = LOG_MAP.S1_RANGE;

    let tag = node.nodeName.toLowerCase();
if( log_this) log("%c"+caller+" %c tag "+tag+" %c len "+node.textContent.length+" %c text "+get_n_txt(node)
                 ,lbL          ,lbR           ,lbH+lf5                           ,lbH+lf4                  );

    let result
        =      (tag == "p"        )
        ||     (tag == "div"      )
        ||    ((tag == "span"     ) && (node.textContent.length >= 360))
        ||    ((tag == "code"     ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||    ((tag == "li"       ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||    ((tag == "ol"       ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||    ((tag == "ul"       ) && (node.textContent.length >=  80)) /* only if they contain a wall of text */
        ||     (tag == "section"  )
        ||     (tag == "article"  )
        ||     (tag == "aside"    )
        ||     (tag == "header"   )
        ||     (tag == "nav"      )
    /*      ...COULD BE CONTAINERS .. IF NONE OF THE FOLLOWING */
        || (   (tag != "span"     )
            && (tag != "a"        )
            && (tag != "b"        )
            && (tag != "em"       )
            && (tag != "font"     )
            && (tag != "strong"   )
            && (tag != "u"        )
    /*      ...COULD BE CONTAINERS .. ONLY WITH A WALL OF TEXT */
            && (tag != "code"     )
            && (tag != "li"       )
            && (tag != "ol"       )
            && (tag != "ul"       )
        )
    ;

if( log_this) log("is_text_container_node(["+get_n_str(node)+"]...["+get_n_lbl(node)+"]): ...return "+result+" node.textContent.length=["+node.textContent.length+"]");
    return result;
};
/*}}}*/

/*_ sync_containers_hi {{{*/
let sync_containers_hi = function()
{
/*{{{*/
    let caller = "sync_containers_hi";
    let log_this = LOG_MAP.S1_RANGE;

if( log_this) log(caller+": containers_hi=["+prop_get("containers_hi")+"]");
/*}}}*/
    /* 1/2 - forget all current containers */
    let className = "container_light";
    let node_list = document.querySelectorAll("."+className);
    for(let i     = 0; i < node_list.length; ++i)
    {
        del_el_class(node_list[i], className);
    }

    className     = "container_dark";
    node_list     = document.querySelectorAll("."+className);
    for(let i     = 0; i < node_list.length; ++i)
    {
        del_el_class(node_list[i], className);
    }

    /* highlight active containers */
    if(prop_get("containers_hi"))
    {
        let theme_class = prop_get(THEME_DARK) ? "container_dark" : "container_light";
        let container;
        for(let slot = 1; slot < ccs.length; ++slot)
        {
            if( ccs[slot] )
            {
                for(let i = 0; i < ccs[slot].nodes.length; ++i)
                {
                    if(container = ccs[slot].containers[i])
                        add_el_class(container, theme_class);
                }
            }
        }
    }

    /* unhiglight everything else */
/* FIXME .. explain...
    let html = document.getElementsByTagName("HTML")[0];
    if(prop_get("containers_hi")) add_el_class(html             , "containers_hi"  );
    else              del_el_class(html                              , "containers_hi"  );
    del_el_class(                  html, prop_get("theme_dark") ? "light" : "dark" );
    add_el_class(                  html, prop_get("theme_dark") ?  "dark" : "light");
*/

};
/*}}}*/
/*_ get_slot_num_container {{{*/
let get_slot_num_container = function(slot, num)
{
    let s =  slot;
    let n = num-1;

    let node
        = (ccs[s] && ccs[s].containers && ccs[s].containers[n]) ? ccs[s].containers[n] /*   a node parent */
        : (ccs[s] && ccs[s].nodes      && ccs[s].nodes     [n]) ? ccs[s].nodes     [n] /* the node itself */
        :                                                         null
    ;
/*
logXXX("%c get_slot_num_container("+s+","+n+"): %c return "+ get_n_lbl(node) +" .. "+ (!node ? "" : ((node == ccs[s].nodes[n]) ? "THE NODE ITSELF" : "A NODE PARENT")), lbL, lbR+lf4)
console.dir(ccs[s])
*/
    return  node;
};
/*}}}*/
/*}}}*/

/* PAT_BAG */
/*{{{*/
/*_ t_onPatternUpdate {{{*/
/*{{{*/
const  PATTERN_UPDATE_DELAY =  500;/* FIXME 250;*/
let t_onPatternUpdate_timer = null;

/*}}}*/
let t_onPatternUpdate_no_delay = function(msg, caller) { t_onPatternUpdate(msg, caller, 0); };
let t_onPatternUpdate = function(msg, caller, delay=PATTERN_UPDATE_DELAY)
{
let log_this = LOG_MAP.S2_SELECT;
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_stage_msg(STAGE_2_ACTION, msg);

    if(t_onPatternUpdate_timer) {
        clearTimeout(t_onPatternUpdate_timer);
        if( delay ) delay  = 2 * PATTERN_UPDATE_DELAY;
    }
    if(delay) t_onPatternUpdate_timer =   setTimeout(t_onPatternUpdate_handler, delay);
    else                                             t_onPatternUpdate_handler();
};
/*}}}*/
/*_ t_onPatternUpdate_handler {{{*/

let t_onPatternUpdate_handler = function()
{
/*{{{*/
let caller = "t_onPatternUpdate_handler";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log(caller);
/*}}}*/
    t_onPatternUpdate_timer = null;

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_UPDATE, "want");

    t_onPatternUpdate_handler_sync_csv_from_ccs();
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_STAGE , "have");

    t_set_1_sel_bag_innerHTML();

    t_set_4_pat_off_bak_alt_innerHTML(caller);
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly_pat_off_bak_bin_csv(SYMBOL_RESULT, "have");

    t_onPatternUpdate_done();

};
/*}}}*/
/*_ t_onPatternUpdate_handler_sync_csv_from_ccs {{{*/
let t_onPatternUpdate_handler_sync_csv_from_ccs = function()
{
    /*{{{*/
    let caller = "t_onPatternUpdate_handler_sync_csv_from_ccs";
let log_this = LOG_MAP.S2_SELECT;
if( log_this ) log(caller);

    /*}}}*/
    /* REBUILD [bak_csv off_csv pat_csv sel_csv] {{{*/
    let old_bak_csv = bak_csv;
    let old_off_csv = off_csv;
    let old_pat_csv = pat_csv;
    let old_sel_csv = sel_csv;
/*
if(log_this) log("...old_bak_csv ["+old_bak_csv+"]");
if(log_this) log("...old_off_csv ["+old_off_csv+"]");
if(log_this) log("...old_pat_csv ["+old_pat_csv+"]");
if(log_this) log("...old_sel_csv ["+old_sel_csv+"]");
*/
    /*}}}*/
    /* ccs[] TO (pat_csv sel_csv) {{{*/
    sel_csv = ""; let sel_csv_count = 0;
    pat_csv = ""; let pat_csv_count = 0;

    for(let slot = 1; slot <= SELECT_SLOT_MAX; ++slot)
    {
        if(           ccs[slot]
            &&        ccs[slot].nodes[0]
            &&        ccs[slot].nodes[0].textContent
        ) {
            let pat = ccs[slot].pattern;
            sel_csv = csv_add(sel_csv, pat); ++sel_csv_count;
            pat_csv = csv_add(pat_csv, pat); ++pat_csv_count;

            bak_csv = csv_del(bak_csv, pat);
        }
    }
    /*}}}*/
    /* [old_pat_csv] TO [pat_csv off_csv bak_csv] {{{*/
    off_csv = ""; let off_csv_count = 0;
    /*.........*/ let bak_csv_count = csv_count(bak_csv);

    let old_pat_count = csv_count( old_pat_csv );
    for(let       pos = 1; pos <=  old_pat_count; ++pos) {
        let       pat = csv_get(   old_pat_csv  ,   pos);

        if(csv_contains(pat_csv, pat)) continue;

        if(pat_csv_count < SELECT_SLOT_MAX) { pat_csv = csv_add(pat_csv, pat); ++pat_csv_count; bak_csv = csv_del(bak_csv, pat); }
        if(off_csv_count < SELECT_SLOT_MAX) { off_csv = csv_add(off_csv, pat); ++off_csv_count; bak_csv = csv_del(bak_csv, pat); }
        else /* pat overload into bak */    {                                                   bak_csv = csv_add(bak_csv, pat); ++bak_csv_count; }
    }
    /*}}}*/
    /* [old_off_csv] TO [pat_csv off_csv bak_csv] {{{*/

    let old_off_count = csv_count( old_off_csv );
    for(let       pos = 1; pos <=  old_off_count; ++pos) {
        let       pat = csv_get(   old_off_csv  ,   pos);

        if(csv_contains(pat_csv, pat)) continue;

        if(pat_csv_count < SELECT_SLOT_MAX) { pat_csv = csv_add(pat_csv, pat); ++pat_csv_count; bak_csv = csv_del(bak_csv, pat); }
        if(off_csv_count < SELECT_SLOT_MAX) { off_csv = csv_add(off_csv, pat); ++off_csv_count; bak_csv = csv_del(bak_csv, pat); }
        else /* off overload into bak */    {                                                   bak_csv = csv_add(bak_csv, pat); ++bak_csv_count; }
    }
    /*}}}*/
    /*{{{*/

if(log_this) if(sel_csv != old_sel_csv) csv_log(sel_csv, "sel_csv [x"+csv_count(sel_csv)+"] "); else log("%c sel_csv [x"+csv_count(sel_csv)+"] %c UNCHANGED ["+sel_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(pat_csv != old_pat_csv) csv_log(pat_csv, "pat_csv [x"+csv_count(pat_csv)+"] "); else log("%c pat_csv [x"+csv_count(pat_csv)+"] %c UNCHANGED ["+pat_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(off_csv != old_off_csv) csv_log(off_csv, "off_csv [x"+csv_count(off_csv)+"] "); else log("%c off_csv [x"+csv_count(off_csv)+"] %c UNCHANGED ["+off_csv+"]", lbF+lb9, lbF+lb0);
if(log_this) if(bak_csv != old_bak_csv) csv_log(bak_csv, "bak_csv [x"+csv_count(bak_csv)+"] "); else log("%c bak_csv [x"+csv_count(bak_csv)+"] %c UNCHANGED ["+bak_csv+"]", lbF+lb9, lbF+lb0);

    /*}}}*/
};
/*}}}*/
/*_ t_set_4_pat_off_bak_alt_innerHTML {{{*/
let t_set_4_pat_off_bak_alt_innerHTML = function(_caller)
{
    /*{{{*/
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log("%c t_set_4_pat_off_bak_alt_innerHTML: .. %c CALLED BY ["+_caller+"]", lbF+lb3, lbF+lb0);

    if(!pat_bag) return;
    let pat_bag_is_opened = has_el_class( pat_bag, "open_bag");
    /*}}}*/
    /* COLLECT [pat_spans] {{{*/
/*
<span class="pat_span"><em class="num_em">&nbsp;num</em>&nbsp;<em title="pat" class="cc1 ">txt</em></span>
<span.................><em......................num..em>......<em........pat...............txt..em><.span>
................................................num......................pat...............txt............
*/
    let pat_spans=[];
    let pat_count = t_collect_el_class_from_into("pat_span", pat_bag, pat_spans);
    let off_count = t_collect_el_class_from_into("pat_span", off_bag, pat_spans);
    let bak_count = t_collect_el_class_from_into("pat_span", bak_bag, pat_spans);
    let alt_count = t_collect_el_class_from_into("pat_span", alt_bag, pat_spans);

if(log_this) for(let i=0; i < pat_spans.length; ++i) log((i+1)+" %c["+pat_spans[i].innerText+"]", lbF+lbX[(i+1) % 10]);

    /*}}}*/
    /* [innerHTML] {{{*/
/*
  _cleanup_pat_bag();
  _cleanup_div(off_bag);
  _cleanup_div(bak_bag);
*/

    let pat_bag_innerHTML = "";
    let off_bag_innerHTML = "";
    let bak_bag_innerHTML = "";
    let alt_bag_innerHTML = "";
    /*}}}*/
    /* [nil] .. (sucks in all nil.pat_spans from their current container) {{{*/
    let bin_moved_to_count = 0;

    for(let pos = 1; pos <= csv_count(bin_csv); ++pos)
    {
        let pat             = csv_get  (bin_csv, pos);
        let pat_span_index  = t_get_pat_span_index(pat_spans, pat);

        /* DUMP ENTRY */
        if(pat_span_index >= 0)
        {
            let container = pat_spans[pat_span_index].parentNode;
            if( container ) {
                container.removeChild( pat_spans[pat_span_index] );
                pat_spans[pat_span_index] = null;
                bin_moved_to_count += 1;
            }
        }
    }

    /* CONTAINER CLEANUP ALL DONE .. f(one shot) */
    bin_csv = "";

    /*}}}*/
    /* [bak] {{{*/
    let bak_moved_to_count = 0;
    let bak_inserted_count = 0;
    let bak_asserted_count = 0;

    for(let pos = 1; pos<= csv_count(bak_csv); ++pos)
    {
        let pat            = csv_get  (bak_csv, pos);
        let pat_span_index = t_get_pat_span_index(pat_spans, pat);

        if(pat_span_index >= 0)
        {
            /* container  bak_bag .. [CONFIRM bak] {{{*/
            let container  = pat_spans[pat_span_index].parentNode;
            if( container == bak_bag) {
                bak_asserted_count += 1;

            }
            /*}}}*/
            /* container !bak_bag .. [MOVED_TO bak] {{{*/
            else {

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly("MOVED TO <em class='cc2'>BAK</em> FROM <em class='cc9'>"+get_n_lbl(container)+"</em> ["+pat_spans[pat_span_index].innerText+"]");
                bak_moved_to_count += 1;
                bak_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            t_sync_pat_span_class(pat, pat_spans[pat_span_index]);
            pat_spans[pat_span_index] = null;
        }
        else {
            /* [new pat_span innerHTML] {{{*/
            let  num = mPadStart(pos,2).replace(" ","&nbsp;");
            let  txt = ellipsis(s_get_htmlEntities(pat), 16);
            let  css_class
                = "cc0"
                + ((mov_div.innerText == txt) ? " mov_src" : "")
            ;

            let line = t_get_pat_span_line(num,pat,css_class,txt);
            /*}}}*/
            /* [INSERTED BAK] {{{*/
            bak_bag_innerHTML  += line;
            bak_inserted_count += 1;
            /*}}}*/
        }
    }
    /*}}}*/
    /* [alt] {{{*/
    let alt_moved_to_count = 0;
    let alt_inserted_count = 0;
    let alt_asserted_count = 0;

    for(let pos = 1; pos<= csv_count(alt_csv); ++pos)
    {
        let pat            = csv_get(alt_csv, pos);
        let pat_span_index = t_get_pat_span_index(pat_spans, pat);

        if(pat_span_index >= 0)
        {
            /* container  alt_bag .. [CONFIRM alt] {{{*/
            let container  = pat_spans[pat_span_index].parentNode;
            if( container == alt_bag) {
                alt_asserted_count += 1;

            }
            /*}}}*/
            /* container !alt_bag .. [MOVED_TO bak] {{{*/
            else {

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly("MOVED TO <em class='cc2'>BAK</em> FROM <em class='cc9'>"+get_n_lbl(container)+"</em> ["+pat_spans[pat_span_index].innerText+"]");
                bak_moved_to_count += 1;
                bak_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            t_sync_pat_span_class(pat, pat_spans[pat_span_index]);
            pat_spans[pat_span_index] = null;
        }
        else {
            /* [new pat_span innerHTML] {{{*/
            let  num = mPadStart(pos,2).replace(" ","&nbsp;");
            let  txt = ellipsis(s_get_htmlEntities(pat), 16);
            let  css_class
                = "cc0"
                + ((mov_div.innerText == txt) ? " mov_src" : "")
            ;

            let line = t_get_pat_span_line(num,pat,css_class,txt);
            /*}}}*/
            /* [INSERTED ALT] {{{*/
            alt_bag_innerHTML += line;
            alt_inserted_count += 1;
            /*}}}*/
        }
    }
    /*}}}*/
    /* [pat] [off] {{{*/

    let pat_moved_to_count = 0;
    let pat_inserted_count = 0;
    let pat_asserted_count = 0;

    let off_moved_to_count = 0;
    let off_inserted_count = 0;
    let off_asserted_count = 0;

    for(let pos = 1; pos<= csv_count(pat_csv); ++pos)
    {
        let pat            = csv_get(pat_csv, pos);
        let pat_span_index = t_get_pat_span_index(pat_spans, pat);
        let pat_off        = csv_contains(off_csv, pat);
        let pat_bak        = csv_contains(bak_csv, pat);

        if(pat_span_index >= 0)
        {
            /* container  pat_bag .. [CONFIRM pat] OR [MOVED_TO off] {{{*/
            let container  = pat_spans[pat_span_index].parentNode;
            if( container == pat_bag)
            {
                let csv_belongs_to_pat = !pat_off /*|| !pat_bag_is_opened*/;
                /* pat CONFIRM {{{*/
                if(csv_belongs_to_pat)
                {
                    pat_asserted_count += 1;

                    /* but move it to the bottom */
                    pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
                }
                /*}}}*/
                /* pat MOVED_TO off {{{*/
                else {
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_spans[pat_span_index] );
                }
                /*}}}*/
            }
             /*}}}*/
            /* container  off_bag .. [CONFIRM off] {{{*/
            else if( container == off_bag)
            {
                let csv_belongs_to_pat = !pat_off /*|| !pat_bag_is_opened*/;
                /* off CONFIRM {{{*/
                if(!csv_belongs_to_pat)
                {
                    off_asserted_count += 1;
                }
                /*}}}*/
                /* off MOVED_TO pat {{{*/
                else {
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* container  bak_bag .. [MOVED_TO pat] OR [MOVED_TO off] {{{*/
            else if( container == bak_bag)
            {
                /* bak MOVED_TO off {{{*/
                if(pat_off) {
                    off_moved_to_count += 1;
                    off_bag.appendChild( pat_spans[pat_span_index] );
                }
                /*}}}*/
                /* bak MOVED_TO pat {{{*/
                else if(!pat_bak) {
                    pat_moved_to_count += 1;
                    pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
                }
                /*}}}*/
            }
            /*}}}*/
            /* HIDE pat .. [MOVED_TO off] {{{*/
            else if( pat_off ) {
                off_moved_to_count += 1;
                off_bag.appendChild( pat_spans[pat_span_index] );
            }
            /*}}}*/
            /* SHOW pat .. [MOVED_TO pat] {{{*/
            else if( !pat_bag_is_opened ) {
                pat_moved_to_count += 1;
                pat_bag.insertBefore(pat_spans[pat_span_index], off_bag);
            }
            /*}}}*/
            t_sync_pat_span_class(pat, pat_spans[pat_span_index], pat_off);
            pat_spans[pat_span_index] = null;
        }
        else {
            /* [new pat_span innerHTML] {{{*/
            let num = mPadStart(pos,2).replace(" ","&nbsp;");
            let txt = ellipsis(s_get_htmlEntities( pat ), 16);
            let ccX = get_slot_of_pattern( pat ) % 10;
            let css_class
                = ((pat_off                 ) ? "cc0"      : "cc"+ccX)
                + ((mov_div.innerText == txt) ? " mov_src" : ""      )
            ;

            let line = t_get_pat_span_line(num,pat,css_class,txt);
            /*}}}*/
            /* [INSERTED OFF] .. [to off when OPENED] [to pat when CLOSED] {{{*/
            if(pat_off) {
                if( pat_bag_is_opened ) { off_bag_innerHTML += line; ++off_inserted_count; }
                else                    { pat_bag_innerHTML += line; ++pat_inserted_count; }
            }
            /*}}}*/
            /* [INSERTED SEL] .. [to pat] {{{*/
            else                        { pat_bag_innerHTML += line; ++pat_inserted_count; }
            /*}}}*/
        }

    }
    /*}}}*/
    /* [pat_spans] unmoved [MOVED_TO bak] {{{*/
    for(let pat_span_index=0; pat_span_index < pat_spans.length; ++pat_span_index)
    {
        if(pat_spans[pat_span_index] == null) continue;

        let  el = pat_spans[pat_span_index].childNodes[2];

/*
        let pat = el.title;
*/
        let pat = csv_unescape(el.title);
/*
logXXX("___el.title=["+ el.title +"]")
logXXX("________pat=["+ pat      +"]")
*/
        let parentNode = pat_spans[pat_span_index].parentNode;

        if(csv_count(pat_csv) < SELECT_SLOT_MAX)
        {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly("MOVED TO <em class='cc5'>OFF</em> <em class='cc8'>LOOSE</em> ["+pat_spans[pat_span_index].innerText+"]");
            csv_move_pattern_to_off(pat);
            off_moved_to_count += 1;
            off_bag.appendChild( pat_spans[pat_span_index] );
        }
        else {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_fly("MOVED TO <em class='cc8'>BAK</em> <em class='cc8'>LOOSE</em> ["+pat_spans[pat_span_index].innerText+"]");
            csv_move_pattern_to_bak(pat);
            bak_moved_to_count += 1;
            bak_bag.appendChild( pat_spans[pat_span_index] );
        }

        t_sync_pat_span_class("", pat_spans[pat_span_index]);
        pat_spans[pat_span_index] = null;

    }
/*
*/
    /*}}}*/
    /* LOG {{{*/
    if(LOG_MAP.EV8_FLOATLOG || fly_log_checked)
    {
        let log_msg = "";

        /* PANEL OPEN / CLOSED */
        log_msg += "<em class='cc"+(pat_bag_is_opened ? 9 : 8)+"'>PANEL "+(pat_bag_is_opened ? "OPENED" : "CLOSED")+"</em> ";

        /* BAGS */

        log_msg                   += "<br>"+ SYMBOL_BAGGER+" <em class='done cc1'>HAVE</em>";

        if(!pat_count && !off_count && !bak_count) {
            log_msg               +=     " ALL BAGS EMPTY";
        }
        else {
            if(pat_count) log_msg += " <em class='bags cc1'>pat "+pat_count /*+" "+ SYMBOL_PAT_BAG*/ +"</em>";
            if(off_count) log_msg += " <em class='bags cc5'>off "+off_count /*+" "+ SYMBOL_OFF_BAG*/ +"</em>";
            if(bak_count) log_msg += " <em class='bags cc2'>bak "+bak_count /*+" "+ SYMBOL_BAK_BAG*/ +"</em>";
        }

        log_msg += t_get_docker_bag_msg("pat", pat_moved_to_count, pat_asserted_count, pat_inserted_count);
        log_msg += t_get_docker_bag_msg("off", off_moved_to_count, off_asserted_count, off_inserted_count);
        log_msg += t_get_docker_bag_msg("bak", bak_moved_to_count, bak_asserted_count, bak_inserted_count);
        log_msg += t_get_docker_bag_msg("alt", alt_moved_to_count, alt_asserted_count, alt_inserted_count);
        log_msg += t_get_docker_bag_msg("bin", bin_moved_to_count, 0                 , 0                 );

        t_fly( log_msg );
    }

if(log_this && pat_bag_innerHTML) log("...pat_bag_innerHTML %c"+pat_bag_innerHTML, lb1);
if(log_this && off_bag_innerHTML) log("...off_bag_innerHTML %c"+off_bag_innerHTML, lb2);
if(log_this && bak_bag_innerHTML) log("...bak_bag_innerHTML %c"+bak_bag_innerHTML, lb3);
pat_bag.title
    = "PAT "+csv_count(pat_csv)+LF
    + "OFF "+csv_count(off_csv) + " .. BAK "+csv_count(bak_csv) + " .. ALT "+csv_count(alt_csv)
    ;

    /*}}}*/
    /* [grid_bag] {{{*/
    let needs_grid_bag
        = true
/*{{{
        =  (csv_count(off_csv) >= 10)
        || (csv_count(bak_csv) >= 10)
}}}*/
    ;

    if(has_el_class(pat_bag, "grid_bag") != needs_grid_bag)
    {
        set_el_class_on_off(pat_bag, "grid_bag", needs_grid_bag);

        t_log_transcript_info("<span style='"+ (needs_grid_bag ? "color:red" : "color:green"                 ) +";'>"+SYMBOL_BLACK_CIRCLE+"</span>"
            +                 "<span style='"+ (needs_grid_bag ?          "" : "text-decoration:line-through") +";'>  grid_bag             </span>"
        );
    }

    /*}}}*/
    /* [off_bag.empty] {{{*/
    let empty   = (csv_count(off_csv) == 0);
    set_el_class_on_off(off_bag, "empty", empty);
/*

*/
    /*}}}*/
    /* innerHTML .. [afterbegin beforeend] {{{*/
    if(pat_bag_innerHTML) pat_bag.insertAdjacentHTML("beforeend", pat_bag_innerHTML);
    if(off_bag_innerHTML) off_bag.insertAdjacentHTML("beforeend", off_bag_innerHTML);
    if(bak_bag_innerHTML) bak_bag.insertAdjacentHTML("beforeend", bak_bag_innerHTML);
    if(alt_bag_innerHTML) alt_bag.insertAdjacentHTML("beforeend", alt_bag_innerHTML);

    /*}}}*/
    /* BAGS ORDER {{{*/
    pat_bag.appendChild(off_bag);
    pat_bag.appendChild(bak_bag);
    pat_bag.appendChild(alt_bag);
    pat_bag.appendChild(bot_div);

    /*}}}*/
};
/*}}}*/
/*_ t_get_docker_bag_msg {{{*/
let t_get_docker_bag_msg = function(bag_name, mov_count, ass_count, ins_count)
{
    let ccX
        = (bag_name == "pat") ? "cc1"
        : (bag_name == "off") ? "cc5"
        : (bag_name == "bak") ? "cc2"
        : (bag_name == "bin") ? "cc0"
        : ""
    ;

    let            docker_bag_msg  = "";
    if(ins_count ) docker_bag_msg += " <em class='done "+ccX+"'> INSERTED</em> <em class='bags "+ccX+"'>"+ bag_name +" + "+ ins_count +"</em>";
    if(mov_count ) docker_bag_msg += " <em class='done "+ccX+"'>    MOVED</em> <em class='bags "+ccX+"'>"+ bag_name +" + "+ mov_count +"</em>";
    if(ass_count ) docker_bag_msg += " <em class='done "+ccX+"'>CONFIRMED</em> <em class='bags "+ccX+"'>"+ bag_name +" = "+ ass_count +"</em>";

    if(!docker_bag_msg) return "";
    else                return "<br>"+ SYMBOL_DOCKER+" "+docker_bag_msg;
};
/*}}}*/

/*_ t_set_1_sel_bag_innerHTML {{{*/
let t_set_1_sel_bag_innerHTML = function()
{
    let caller = "t_set_1_sel_bag_innerHTML";
let log_this = LOG_MAP.S3_SLOT;

    let sel_bag = get_tool("sel_bag");
    if(!sel_bag) return;
    let sel_bag_innerHTML = "";

    for(let slot = 1; slot < ccs.length; ++slot) {
        if(       ccs[slot]
            &&    ccs[slot].nodes[0]
            &&    ccs[slot].nodes[0].textContent
        ) {
            sel_bag_innerHTML += t_get_2_sel_bag_line(slot) +"<br>";
        }
    }

    if(sel_bag_innerHTML)
        sel_bag_innerHTML = "<span class='seeker_handle left'></span>"+ sel_bag_innerHTML;

if(log_this) log("%c "+caller+": sel_bag_innerHTML:%c<br>"+sel_bag_innerHTML, lbF+lb1, lb1);

    t_cleanup_div( sel_bag );
    sel_bag.insertAdjacentHTML("beforeend", sel_bag_innerHTML);
};
/*}}}*/
/*_ t_get_2_sel_bag_line {{{*/
let t_get_2_sel_bag_line = function(slot)
{
    let count   = ccs[slot].nodes.length;
    let title   = ccs[slot].toString();
    let pattern = ccs[slot].pattern;

    return "<div class='select"+slot+"'>"
        +   "<em id='thumb_p_"+slot+"' title='"+title     +"'>"+ellipsis(pattern, 32)+"</em>"
        +   t_get_3_sel_bag_thumbs_EM(slot, "thumb_p")
        +  "</div>"
    ;

};
/*}}}*/
/*_ t_get_3_sel_bag_thumbs_EM {{{*/
let BAG_MAX_ELLIPSIS      = 7;
let BAG_MIN_ELLIPSIS      = Math.ceil(BAG_MAX_ELLIPSIS / 3);
let t_get_3_sel_bag_thumbs_EM = function(slot, id_prefix)
{
    let thumbs_line = "";

    let count   = ccs[slot].thumbs.length;

    for(let num = 1; num <= count; ++num)
    {
/*{{{
        if(ccs[slot].thumbs [num-1] <= 0) {
logXXX("t_get_3_sel_bag_thumbs_EM: NOT DISPLAYED: "+ ccs[slot].toString())

        }
}}}*/
        /* ... before and after center-ellipsis */
        if(    (        count <= BAG_MAX_ELLIPSIS )
            || (num <=           BAG_MIN_ELLIPSIS )
            || (num >= (count -  BAG_MIN_ELLIPSIS))
        ) {
            let percent = get_thumb_p_str(ccs[slot].thumbs [num-1]);
            thumbs_line
                += "<em        id='"+id_prefix+"_" +     slot  +"_"+  num    +"'"
                +  " data-thumb_p='"+                ccs[slot].thumbs[num-1] +"'"
                +  "        title='"+                             percent    +"'"
                +  ">"+                                        String(num)   +"</em>"
            ;
        }
        /* insert a center ellipsis */
        else if(num  == (BAG_MIN_ELLIPSIS+1)) {
            thumbs_line
                += "<em        id='"+id_prefix+"_"+slot+"_0'"
                +  " data-thumb_p=''"
                +  "        class='ellipsis'"
                +  "        title='"+SYMBOL_E+"'"
                +  ">"+              SYMBOL_E +"</em>"
            ;
        }
    }

    return thumbs_line;
};
/*}}}*/

/*_ t_collect_el_class_from_into {{{*/
let t_collect_el_class_from_into = function(el_class, from, into)
{
    let spans = from.getElementsByTagName("SPAN");
    let count = 0;
    for(let i=0; i < spans.length; ++i)
    {
        if(              from != spans[i].parentNode  ) continue; /* not a direct child */
        if( t_is_accessory_node( spans[i]           ) ) continue;
        if(!has_el_class(        spans[i], el_class ) ) continue;
        into.push(spans[i]);
        count += 1;
    }
    return count;
};
/*}}}*/
/*_ t_is_accessory_node {{{*/
let t_is_accessory_node = function(node)
{
    return (node == bak_bag             )
        || (node == off_bag             )
        || (node == bot_div             )
        || (node == mov_div             )
/*
        || (node == bak_bag_place_holder)
        || (node == off_bag_place_holder)
        || (node == pat_bag_place_holder)
*/
        || (node == hov1                )
        || (node == hov2                )
        || (node == hov3                )
        || (node == hov4                )

        || has_el_class(node, "seeker_handle")
        || has_el_class(node, "screener"     )

        || has_el_class(node, "push_pin"     )
        || has_el_class(node, "closepin"     )
        || has_el_class(node, "scalepin"     )
        || has_el_class(node, "clearpin"     )

    ;
};
/*}}}*/
/*_ t_sync_pat_span_class {{{*/
let t_sync_pat_span_class = function(pat, pat_span, pat_off=true)
{
    let el = pat_span.childNodes[2];

    let ccX = pat_off ? 0 : (get_slot_of_pattern(pat) % 10);
    let css_class
        = "cc"+ ccX
        + (has_el_class(el, "mov_src") ? " mov_src" : "")
    ;

    set_el_class(el, css_class);
};
/*}}}*/
/*_ t_cleanup_div {{{*/
let t_cleanup_div = function(div)
{
/*{{{*/
    let caller = "t_cleanup_div";
let log_this = LOG_MAP.S2_SELECT;

if( log_this) log(caller+"("+get_id_or_tag(div)+")");
/*}}}*/

    let  count = 0;
    let length = div.childNodes.length;
    let node_removed;
    for(let i=0; i < length; i += (node_removed ? 0 : 1))
    {
        let node = div.childNodes[i];
        node_removed = false;
        if( t_is_accessory_node(node) )
        {
if(log_this) log("...KEEPING  %c["+get_n_lbl(node) +"]", lbF+lb1);
        }
        else if(node) {
if(log_this) log("...REMOVING %c "+get_id_or_tag(node)+" %c"+node.textContent, lbL, lbR+lf2);
            div.removeChild(node);
            count += 1;
            node_removed = true;
        }
        else {
/*{{{
if(log_this) log("...SKIPPING %c[undefined]"           , lbF+lb8);
}}}*/
        }
    }
if(log_this) log("..."+count+" ["+get_n_lbl(div)+"] transient nodes removed");
};
/*}}}*/

/*_ t_get_pat_span_line {{{*/
let t_get_pat_span_line = function(num,pat,css_class,txt)
{
/*
logXXX("___________pat_=["+           pat +"]")
logXXX("csv_escape(pat)=["+csv_escape(pat)+"]")
*/
    return "<span class='pat_span'>"
        +  "<em class='num_em'>"+num+"</em>&nbsp;"
        +  "<em class='"+css_class+"' title='"+csv_escape(pat)+"'>"+txt+"</em>"
        +  "</span>"
    ;
};
/*}}}*/
/*_ t_get_pat_span_index {{{*/
let t_get_pat_span_index = function(pat_spans, pat)
{
    for(let pat_span_index=0; pat_span_index < pat_spans.length; ++pat_span_index)
    {
        if(pat_spans[pat_span_index] == null) continue;

        let el = pat_spans[pat_span_index].childNodes[2];

        let el_pat  = csv_unescape(el.title);
        if( el_pat == pat)
        {
/*
logXXX("t_get_pat_span_index: ...return "+pat_span_index+"")
logXXX("___el.title=["+ el.title +"]")
logXXX("_____el_pat=["+   el_pat +"]")
logXXX("________pat=["+      pat +"]")
*/
            return pat_span_index;
        }
    }
    return -1;
};
/*}}}*/
/*}}}*/

/** SEARCH */
/*{{{*/
/*_ getElementsByContent {{{*/
let getElementsByContent = function(text)
{
    let caller = "getElementsByContent";
    let result = null;
    try {
        let elements = document.getElementsByTagName("*");

/*log("getElementsByContent("+text+"): searching "+ elements.length +" elements:", "warn");*/

        let deep_containers=[];
        let container = null;
        let text_toLowerCase = text.toLowerCase();
        for(let i = 0; i < elements.length; ++i)
        {
            let        el = elements[i];
            if(        el.textContent ) {
                if(    el.textContent.includes(text)
                    || el.textContent.toLowerCase().includes(text_toLowerCase)
                ) {
                    /*log(i+" childNodes x"+el.childNodes.length+" nodeName=["+el.nodeName+"] text=["+ get_n_txt(el)+"]");*/
                    if     (!container              ) { container = el;                                   /*log_node("CONTAINER:", container);*/ }
                    else if( container.contains(el) ) { container = el;                                   /*log_node("   DEEPER:", container);*/ }
                    else                              { deep_containers.push( container ); container =el; /*log_node("   NOTHER:", container);*/ }
                }
            }
        }

        if( container )
            deep_containers.push( container );

/*log("deep_containers.length=["+deep_containers.length+"]", "warn");*/
        let result = (deep_containers.length > 0)
            ?   deep_containers[0]
            :   null
        ;

/*log_node("getElementsByContent ...return:", result );*/
    }
    catch(ex) { log(caller+": "+ex, "error"); }
    return result;
};
/*}}}*/
/*_ get_n_children {{{ */
let get_n_children = function(node)
{
    let result = node;
    try {
        for(let  i = 0; i < node.childNodes.length; ++i)
            result += " "+i+" ["+node.childNodes[i]+"]"+LF;
    }
    catch(ex) { return "node=["+node+"]:"+ex; }
    return result;
};
/*}}}*/
/*_ get_n_attributes {{{ */
let get_n_attributes = function(node)
{
    if(!node           ) return "*** get_n_attributes( !node ) ***";
    if(!node.attributes) return "";
    let     result = "";
    try {
        for(let  i = 0; i < node.attributes.length; ++i)
            result += "<span class='cc"+(i % SELECT_SLOT_MAX)+"'>"+node.attributes[i].name+": "+ node.attributes[i].value+"</span>";
    }
    catch(ex) { return "*** get_n_attributes("+node+") "+ex +" ***"; }
    return  result;
};
/*}}}*/
/*_ node_has_some_text {{{*/
let node_has_some_text = function(node)
{
    return node.nodeValue
        && node.textContent
        && (trim_alNum_lines(node.textContent).length > 0)
    ;
};
/*}}}*/
/*_ is_node_selected {{{*/
let is_node_selected = function(node)
{
    if(!node) return false;

    let result = false;
    try {
        result = (node.className && node.className.startsWith( SEL_CLASS_PREFIX ));
    } catch(ex) {
/*
console.dir(node);
*/
    }

if(LOG_MAP.S1_RANGE && result) log("is_node_selected("+get_n_lbl(node)+"): ...return "+result);
    return result;
};
/*}}}*/
/*}}}*/

/** NODES */
/*{{{*/

/* pick */
/*_ pick_tag_or_id_node {{{*/
let pick_tag_or_id_node = function(tag_or_id, _caller)
{
/*{{{*/
    let caller = "pick_tag_or_id_node("+tag_or_id+")";
let log_this = LOG_MAP.S1_RANGE;

if(log_this) log(caller+".. CALLED BY ["+_caller+"]");
/*}}}*/
    /* default to body {{{*/
    let node = (!tag_or_id) ? document.body : null;

    let id = tag_or_id;
    /*}}}*/
    /* Note: LOOK FOR A TAG FIRST .. so as to dismiss ID collisions such as [body or html etc.] {{{*/
    /* getElementsByTagName {{{*/
    if(!node) {
        node =    document.getElementsByTagName(  id  )[0] ;

if(log_this) log("document.getElementsByTagName("+id+")[0].....["+get_id_or_tag(node)+"]");
    }
    /*}}}*/
    /* getElementById {{{*/
    if(!node) {
        node =    document.getElementById      (  id      );

if(log_this) log("document.getElementById      ("+id+")........["+get_id_or_tag(node)+"]");
    }
    /*}}}*/
    /* getElementsByContent {{{*/
    if(!node) {
        node =    getElementsByContent         (  tag_or_id );

if(log_this) log("getElementsByContent         ("+tag_or_id+")...["+get_id_or_tag(node)+"]");
    }
    /*}}}*/
if(log_this) console.dir(node);

    /*}}}*/
    /* querySelector(#id) {{{*/
    let selector;
    if(!node ) {
        selector = "#"+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");

        node = document.querySelector( selector );
    }
    /*}}}*/
    /* querySelector(.id) {{{*/
    if(!node ) {
        selector = "."+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");

        node = document.querySelector( selector );
    }
    /*}}}*/
    /* default to body {{{*/
    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using body");

        node = document.body;
    }
    /*}}}*/
    /* default to document {{{*/
    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using document");

        node = document;
    }
    /*}}}*/
/*{{{*/
if(log_this) {
    log("<div class='cc8'>");
    log(caller);
    log_node(SYMBOL_CHECK_MARK +" NODE"       , node           );
    log_node(SYMBOL_CHECK_MARK +" PARENT"     , node.parentNode);
    log_node(SYMBOL_CHECK_MARK +" FIRST CHILD", node.firstChild);
    log_node(SYMBOL_CHECK_MARK +" LAST CHILD" , node.lastChild );
    log("</div>");
    log(caller+": ...return "+get_id_or_tag(node));
console.dir(node);
}
/*}}}*/
    return node;
};
/*}}}*/

/* thumb */
/*_ get_node_thumb_p {{{*/
let THUMB_OFFSET = 0;/*64; NOTE: not needed when using onDown_XY*/
let get_node_thumb_p = function(node)
{
/*
logXXX("%c get_node_thumb_p("+get_n_txt(node)+")",lbb+lbH)
*/
    let      node_top = getRealTop(node) - THUMB_OFFSET;
    let            ph = get_page_height();

/*
logXXX("%c.........ph ["+ ph       +"]"           , lbb+lbH+lf5)
logXXX("%c...node_top ["+ node_top +"]"           , lbb+lbH+lf6)
logXXX("%c....thumb_p ["+ 100 * node_top / ph +"]", lbb+lbH+lf7)
console.dir(node)
*/
    return 100 * node_top / ph;
};
/*}}}*/
/*_ get_thumb_p_str {{{*/
let get_thumb_p_str = function(thumb_p)
{
    if(thumb_p < 0) return "";

    let thumb_i = Math.trunc(       thumb_p           );
    let thumb_f = Math.round(100 * (thumb_p - thumb_i)); /* 2 decimals */

    thumb_i = mPadStart(thumb_i,2," ");
    thumb_f = mPadStart(thumb_f,2,"0");

    return (thumb_i +"."+ thumb_f);
};
/*}}}*/

/* log */
/*_ log_tags {{{*/
let log_tags = function()
{
    let                 s  = "";
    tag = "#document" ; s +=        tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "HTML"      ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "HEAD"      ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "BODY"      ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "SCRIPT"    ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "DIV"       ; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    tag = "BLOCKQUOTE"; s += "    "+tag +" <em class='cc3'>"+ get_h_tag(tag) +"</em>";
    s +="<br>";;
    tag = "SPAN"      ; s +=        tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "EM"        ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "A"         ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "BUTTON"    ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "INPUT"     ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "TEXTAREA"  ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";
    tag = "LI"        ; s += "    "+tag +" <em class='cc4'>"+ get_h_tag(tag) +"</em>";

    log("<div id='log_tags_div'>"+ s +"</div>");
};
/*}}}*/
/*_ log_node {{{*/
let log_node = function(label, node)
{
    if(!node) {
        log(mPadStart(label,16)+" <em></em>");
        return;
    }
    let em_class
        = (node.nodeType == Node.TEXT_NODE   ) ? "cc4"
        : (node.nodeType == Node.COMMENT_NODE) ? "cc8"
        :                                        "cc3"
    ;
    let n_str = get_n_str( node          );
    let p_str = get_p_str( node          );
    let n_tag =            node.nodeName;

    log(mPadStart(label,16)+" <em>"+n_tag+"</em> <em class='"+em_class+"'>"+ p_str +" "+ n_str +"</em>" +" has "+ node.childNodes.length +" childNodes");
};
/*}}}*/

/*}}}*/

/** TOOLS */
/*{{{*/
/*_ set_tools_filter {{{ */
let set_tools_filter = function(text)
{
    t_set_tool_id_value("tools_filter", text);
};
/*}}}*/
/*_ sayHello {{{ */
let sayHello = function()
{
    let caller = "sayHello"; log(caller);
    log_clear(caller);
    try       { log_HTML = caller+": OK";            }
    catch(ex) { log      ( caller+": "+ex, "error"); }
    return      log_HTML;
};
/*}}}*/
/*}}}*/

