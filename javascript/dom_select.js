/*dom_select_js "use strict";*/
let DOM_SELECT_JS_ID        = "dom_select_js";
let DOM_SELECT_JS_TAG       = DOM_SELECT_JS_ID  +" (180606:20h)";
/* CONSOLE TEMPLATE TO BE IMPLEMENTED BY EMBEDDING LAYER {{{*/
      DOUBLE_QUOTE  = String.fromCharCode(34);
      LF            = String.fromCharCode(10);
      CR            = String.fromCharCode(13);
      CS            = "color:yellow;background-color:navy;font-size:150%;";
      console_clear = function(  msg=null) { try { console.clear(); if(msg) console.warn("%c=== CLEARED BY: "+msg,CS);        } catch(ex) {} };
      console_dir   = function(o,msg=null) { try {                  if(msg) console.log (               msg); console.dir(o); } catch(ex) {} };
      console_log   = function(  msg     ) { try {                          console.log (               msg);                 } catch(ex) {} };
      console_warn  = function(  msg=null) { try {                          console.warn(               msg);                 } catch(ex) {} };
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
let SYMBOL_EMPTY         = "\u23D8";
let SYMBOL_PUSH_PIN      = "\uD83D\uDCCC";
let SYMBOL_CLEARPIN      = "\u2715";

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
if(LOG_MAP.T4_SLOT) log("s_get_slotted_pattern_count: ...return "+count);
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

if(LOG_MAP.T4_SLOT) log("get_slot_for_range("+range.toString()+"): return ["+slot+"] .. (startContainer: id=["+range.startContainer.id+"] parentNode.id=["+range.startContainer.parentNode.id+"])");

    if((slot >=0) && !ccs[slot]) ccs[slot] = new CCS();

    return slot;
};
/*}}}*/
/*_ get_slot_matching_pattern {{{*/
let get_slot_matching_pattern = function(pattern)
{
    let caller = "get_slot_matching_pattern("+pattern+")";
let log_this = LOG_MAP.T4_SLOT;

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
let log_this = LOG_MAP.T4_SLOT;

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
let log_this = LOG_MAP.T4_SLOT;

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
let log_this = LOG_MAP.T4_SLOT;

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
let log_this = LOG_MAP.T4_SLOT;
if(log_this) log(caller);

    last_cleared_slot = slot;

    let ccX       = slot % SELECT_SLOT_MAX;
    let sel_class = SEL_CLASS_PREFIX + ccX;
    let selector  = "."+sel_class;
    let sel_list  = document.querySelectorAll( selector );
if(log_this && sel_list.length) log("...["+selector+"] sel_list.length=["+sel_list.length+"]");

    if( ccs[slot].pattern )
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
        t_seeker_PU_hide();
        t_seeker_PD_hide();
    }

if(log_this && cleared_count) log("."+selector+": "+cleared_count+" nodes cleared");
    return cleared_count;
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
/* SELECT {{{*/
/*_ s_touchedWord {{{ */
let s_touchedWord = function(x,y)
{
    /* get_range_from_XY {{{ */
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord(x="+x+" , y="+y+")"; if(log_this) log(caller);

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
        set_tools_filter( touched_text );

        t_seeker_PU_hide();
        t_seeker_PD_hide();

        check_TreeWalker("body", touched_text);
    }
    /*}}}*/
};
/*}}}*/
/*_ s_touchedWord_adjust {{{ */
let s_touchedWord_adjust = function(range)
{
    /* 1/3 - EXPANDED TO EMBEDDING-CONTAINERS {{{*/
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_adjust";

    let node = range.startContainer ? range.startContainer : range.offsetNode;
    let text = strip_CR_LF(node.textContent);
    if((text.length > 0) && (words_options == WORDS_HEAD_TAIL)
        && s_touchedWord_adjust_1_in_embedding_container(range)
    ) {
if(log_this) log("...EXPANDED TO EMBEDDING-CONTAINERS %c["+ strip_CR_LF(range.toString()) +"]", lb6);
        return range;
    }
    /*}}}*/
    /* 2/3 - EXPANDED TO SELECTION-RANGE {{{*/
    if(s_touchedWord_adjust_2_in_selection(range))
    {
        if(words_options == WORDS_EXACT)
        {
/*
            if(log_this) log("%c *** WORDS_EXACT OPTION SELECTED ... CANNOT EXPANDED TO SELECTION-RANGE *** ", lbF+lb3);
            s_selection_add_cannot_expand();
            return null;
*/
            t_override_USER_OPTION("words_options", WORDS_SEGMENT);
        }
if(log_this) log("...EXPANDED TO SELECTION-RANGE %c["+strip_CR_LF(range.toString())+"]", lb5);
        return range;
    }
     /*}}}*/
    /* 2/3 - GOT WORD FROM SYNTAXIC LOOKUP {{{*/
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
    /* RETURN FALSE .. NO EMBEDING CONTAINERS */
    /* {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_adjust_1_in_embedding_container";

    let node        = range.startContainer ? range.startContainer : range.offsetNode;
    let node_parent = node.parentNode;
    let node_before = node.previousSibling;
    let node_after  = node.nextSibling;

    let rejected_by = "";
    if     (  !node_parent                                               ) rejected_by = " !node_parent";
    else if( !(node_parent.tagName            == "EM")                   ) rejected_by = "!(node_parent.tagName == 'EM')";
    else if(   node_parent.textContent.length > S_TOUCHED_WORD_LENGTH_MAX) rejected_by = "node_parent.textContent.length > "+S_TOUCHED_WORD_LENGTH_MAX+")";
/*
    else if((!node_before && !node_after)  ) rejected_by = "(!node_before && !node_after)";
*/

    if(rejected_by)
    {
if(log_this) log(caller+": %c "+ rejected_by, lb6);
        return false;
    }
    /*}}}*/

    /* RETURN TRUE: RANGE WITHING EMBEDDING_CONTAINER */
    /*{{{*/
    if(      (node_parent.tagName ==     "EM")
          || (node_parent.tagName ==   "SPAN")
        /*|| (node_before.tagName ==      "A")*/
        /*|| (node_before.tagName ==      "B")*/
        /*|| (node_before.tagName == "STRONG")*/
    ) {
    let text = strip_CR_LF(node.textContent);
    let    s = range.startOffset   ;
    let    e = range. endOffset    ;
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
/*{{{
}}}*/

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

if(log_this) {
    log("...........................range=%c["+strip_CR_LF( range.toString() ) +"]", lb6);
    log_range(range,caller);
}
/*{{{
}}}*/
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
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_adjust_2_in_selection";

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
    if(words_options != WORDS_SEGMENT)
    {
if(log_this) log(caller+": ADJUSTING TO WORDS BOUNDARIES .. %c(words_options "+words_options+")", lbF+lb6);

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
/*_ s_touchedWord_adjust_3_word_syntaxic_lookup {{{*/
let s_touchedWord_adjust_3_word_syntaxic_lookup = function(range)
{
    /* WORD SEARCH LOOP {{{*/
let log_this = LOG_MAP.S1_RANGE;
    let caller = "s_touchedWord_word_syntaxic_lookup";

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
    let word = range.toString();

if(log_this) log("SELECTED WORD s=["+s+"] e=["+e+"] l=["+word.length+"] word: <em>"+word+"</em> FROM: <em>"+ truncate(trim_node_textContent(node)) +"</em>");
    return range;
    /*}}}*/
};
/*}}}*/
/*}}}*/
/* SELECT (NOT USED) {{{*/
/*_ setTouchPoint ...CLEAR [rangeFrom] ..CLEAR [rangeTo  ] {{{ */
let setTouchPoint = function(x, y)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setTouchPoint"; if(log_this) log(caller);

    try {
        mStartRange = null;
        mEndRange   = null;

        mTouchPoint = {"x": x, "y": y};
        if(log_this) log(caller+" OK: mTouchPoint={"+mTouchPoint.x+","+mTouchPoint.y+"}");
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ setStartXY ......  NEW [rangeFrom] CURRENT [rangeTo  ] {{{ */
let setStartXY = function(x, y)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setStartXY"; if(log_this) log(caller);

    try {
        if(log_this) log(caller+"("+x+","+y+"):");

        let rangeFrom = get_range_from_XY(x, y); /* NEW     [rangeFrom]*/
        let rangeTo   = mEndRange              ; /* CURRENT [rangeTo]*/

        if(rangeFrom && rangeTo)
            setRangeFromTo(rangeFrom, rangeTo);
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ setEndXY   ......  NEW [rangeTo  ] CURRENT [rangeFrom] {{{ */
let setEndXY = function(x, y)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setEndXY";

    try {
        if(log_this) log(caller+"("+x+","+y+")");

        let rangeFrom = mStartRange            ; /* CURRENT [rangeFrom]*/
        let rangeTo   = get_range_from_XY(x, y); /* NEW     [rangeTo]*/

        if(rangeFrom && rangeTo)
            setRangeFromTo(rangeFrom, rangeTo);
    }
    catch(ex) { log(caller+": "+ex, "error"); }
};
/*}}}*/
/*_ setRangeFromTo {{{ */
let setRangeFromTo = function(rangeFrom, rangeTo)
{
    let log_this = LOG_MAP.S1_RANGE;
    let caller = "setRangeFromTo";
    try {
        /* SET [rangeFrom] BEFORE [rangeTo  ] {{{*/
        if(rangeFrom) mStartRange = rangeFrom;
        if(rangeTo  ) mEndRange   = rangeTo;
        let reversed = false;
        if(mStartRange && mEndRange)
        {
            reversed = mStartRange.compareBoundaryPoints(Range.START_TO_END, mEndRange) > 0;
            if( reversed ) {
                let r = mStartRange; mStartRange = mEndRange  ; mEndRange   = r;
            }
        }
        /*}}}*/
        /* BUILD SELECTION RANGE {{{*/
        if(mStartRange && mEndRange)
        {
            let range = document.createRange();
            range.setStart(mStartRange.startContainer, mStartRange.startOffset);
            range.setEnd  (mEndRange  .  endContainer, mEndRange  .  endOffset);
if(log_this) log(caller+":"+ rangeToString(range, "selectionRange"));

            window.getSelection().removeAllRanges();
            window.getSelection().addRange( range );
            document.execCommand("copy"); /* to clipboard */

            set_tools_filter( get_first_word(range.toString(), caller) );

        }
        /* LOG ONLY*/
        else if(mStartRange && logging_TRANSCRIPTS) log(caller+LF+"...mStartRange:"+ rangeToString(mStartRange, "mStartRange"));
        else if(mEndRange   && logging_TRANSCRIPTS) log(caller+LF+"...mEndRange:"+   rangeToString(mEndRange  , "mEndRange"  ));

        /*}}}*/
        window.getSelection().removeAllRanges();
    }
    catch(ex) { log(caller+": "+ex, "error"); }

    let tools_filter = t_get_tool_id_value("tools_filter");
    log_set_TR_RANGE("<em class='big'>SELECT RANGE FROM TO <em class='cc0 small'>tools_filter=["+tools_filter+"]</em></em>");
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
        let mTreeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, mNodeFilter);
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
/*_ get_words_options_symbol {{{*/
let WORDS_EXACT_SYMBOL       = "<em class='cc3'>&equiv;</em>";
let WORDS_SEGMENT_SYMBOL     = "<em class='cc4'>&sub;</em>"  ;
let WORDS_HEAD_TAIL_SYMBOL   = "<em class='cc5'>&isin;</em>" ;
let WORDS_OPCYCLE_SYMBOL     = "<em class='cc9'>\u27F3</em>" ;

let get_words_options_symbol = function(option)
{
    switch( option) {
        case WORDS_EXACT     : return WORDS_EXACT_SYMBOL     ;
        case WORDS_SEGMENT   : return WORDS_SEGMENT_SYMBOL   ;
        case WORDS_HEAD_TAIL : return WORDS_HEAD_TAIL_SYMBOL ;
        default              : return "*** WRONG words_options ***";
    }
};
/*}}}*/
/*}}}*/

/** HIGHLIGHT */
/*{{{*/
/*_ scroll_to_slot_num {{{*/
let scroll_to_slot_num = function(slot, num, onSeek_XY)
{
    /*{{{*/
let caller = "scroll_to_slot_num(slot=["+slot+"] num=["+num+"], ["+onSeek_XY.x+" "+onSeek_XY.y+"])";
let log_this = LOG_MAP.T4_SLOT;
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
    if(LOG_MAP.T5_LAYOUT)
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
    /* possibly hidden  .. f(parent_with_overflow) {{{*/
    let el                   = ccs[slot].nodes[num-1];
    let parent_with_overflow = null;/*FIXME: get_parent_with_overflow( el );*/
    if( parent_with_overflow )
    {
if(log_this) log("..get_parent_with_overflow(el): %c "+ get_n_lbl(parent_with_overflow), lbb+lbH+lf7);
    }
    else {
        let xy = t_get_el_into_view_scrollXY( el );
        if( xy )
        {
            let dx = (xy.x - window.scrollX);
            let dy = (xy.y - window.scrollY);
/*
logXXX("xy=["+dx+" "+dy+"]")
*/
            if(dx || dy)
                t_window_scrollTo(xy.x, xy.y, caller);
        }
/*
        else
            scroll_thumb_p_to_onSeek_XY(thumb_p, slot, onSeek_XY);
*/
    }
    /*}}}*/

    highlight_thumb_p_slot_num(slot, num, thumb_p);

    if((thumb_p <= 0) || parent_with_overflow) return false;
    else                                       return  true;
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
let scroll_thumb_p_to_onSeek_XY = function(thumb_p, slot, onSeek_XY)
{
let   caller = "scroll_thumb_p_to_onSeek_XY(thumb_p=["+thumb_p+"], slot=["+slot+"], onSeek_XY["+onSeek_XY.x+" "+onSeek_XY.y+"])";
let log_this = LOG_MAP.T4_SLOT;
if( log_this ) log(caller);

    let page_height
        = get_page_height() * (body_zoom_percent / 100.0);

    let scrollX
        = window.scrollX
        - onSeek_XY.x;

    let scrollY
        = page_height * (thumb_p / 100.0)
        - onSeek_XY.y;

    try {
        t_window_scrollTo(scrollX, scrollY, caller);
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
if(LOG_MAP.T4_SLOT) log(caller);

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
/*_ highlight_data_thumb_p {{{*/
let highlight_data_thumb_p = function(thumb_p, slot)
{
    /* text .. f(thumb_p) {{{*/
    let caller = "highlight_data_thumb_p(thumb_p=["+thumb_p+"] slot=["+ slot+"])";
    let log_this = LOG_MAP.T4_SLOT;
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
        let selector;
        selector = ".select"  +s     ; if(el = get_tool(selector)) { if(s == slot) add_el_class(el,"current_slot"); else del_el_class(el,"current_slot"); }
        selector = "#thumb_p_"+s+"_0"; if(el = get_tool(selector)) { if(!(el.innerHTML.includes(SYMBOL_E))) el.innerText = SYMBOL_E; }
        selector = "#thumb_s_"+s+"_0"; if(el = get_tool(selector)) { if(!(el.innerHTML.includes(SYMBOL_E))) el.innerText = SYMBOL_E; }
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
                let slot_num_id = "#thumb_p_"+ slot +"_"+ num;
                if( !get_tool(slot_num_id) )
                {
                    /* SEL_BAG */
                    let id = "#thumb_p_"+slot+"_0";
                    if( el = get_tool( id ))
                    {
if(log_this) log(".HIGHLIGHT: id=["+id+"]");
                        el.innerText = String(num);
                        add_el_class(el, "current_slot_num");
                    }

                    /* SEEKER */
                    id = "#thumb_s_"+slot+"_0";
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
let log_this = LOG_MAP.S2_SELECT || LOG_MAP.T4_SLOT;

    let cleared_count   = 0;
    let cleared_pat_csv = "";

    for(let slot = ccs.length-1; slot > 0; --slot)
    {
        if(                   !ccs[slot]) continue;
        let       pattern    = ccs[slot].pattern;
        let clear_slot_count = clear_slot( slot );
        cleared_count       += clear_slot_count;

        if(clear_slot_count)
            cleared_pat_csv = csv_add(cleared_pat_csv, pattern);

    }

if(log_this) log(caller+": "+cleared_count+" words highlighting cleared");
    return cleared_pat_csv;
};
/*}}}*/

/*_ s_selection_execCommand {{{ */
let s_selection_execCommand = function(cmd_csv)
{
    let caller = "s_selection_execCommand("+cmd_csv+")";
if(LOG_MAP.T4_SLOT) log(caller);

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
let log_this = LOG_MAP.T4_SLOT;
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
/*_ (add del set) id_class {{{*/

let set_id_class_on_off = function(id, className, on_off)
{
    let el = get_tool("#"+id);
    if(!el) return;

    set_el_class_on_off(el, className, on_off);
};

let set_el_class_on_off = function(el, className, on_off)
{
    if(on_off) add_el_class(el, className);
    else       del_el_class(el, className);
};

let set_el_class     = function(el, className) { if(!el || !el.classList) return      ;                                            el.className       = className  ; };
let add_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(   !el.classList.contains( className )) el.classList.add   ( className ); };
let del_el_class     = function(el, className) { if(!el || !el.classList) return      ; if(    el.classList.contains( className )) el.classList.remove( className ); };
let has_el_class     = function(el, className) { if(!el || !el.classList) return false; return el.classList.contains( className );                                   };

let add_hi_container = function(container    ) { add_el_class(container, theme_dark ? "container_dark" : "container_light");  };

let set_el_class_removing = function(el, className, remove_array)
{
    for(let i=0; i <              remove_array.length; ++i) {
        if(el.classList.contains( remove_array[i] ))
            el.classList.remove ( remove_array[i] );
    }
    if(!el.classList.contains( className ))
        el.classList.add     ( className );
};
/*}}}*/

/*}}}*/

/** RANGE */
/*{{{*/
/*_ get_range_from_XY {{{ */
let get_range_from_XY = function(x, y)
{
    /*{{{*/
    let caller = "get_range_from_XY(x="+x+" , y="+y+")";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
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
    let caller = "get_range_from_caret(x="+x+" , y="+y+")";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
    /*}}}*/
    let  range = null;
    try {
        /* caretPositionFromPoint {{{*/
        if((!range || !range.commonAncestorContainer) && document.caretPositionFromPoint)
        {
if(log_this) log( "...document.caretPositionFromPoint=["+ document.caretPositionFromPoint +"]");
            range =  document.caretPositionFromPoint(x,y);

/*{{{*/
/*log("range=["+range+"]");*/
/*log("range.commonAncestorContainer=["+range.commonAncestorContainer+"]");*/
/*log("range.offsetNode.............=["+range.offsetNode             +"]");*/
/*}}}*/

if(!range) log("caretPositionFromPoint failed", "warn");
/*else     console_dir(range);*/
        }
        /* }}}*/
        /* caretRangeFromPoint {{{*/
        if((!range || !range.commonAncestorContainer) && document.caretRangeFromPoint)
        {
/*if(log_this) log( "...document.caretRangeFromPoint...=["+ document.caretRangeFromPoint    +"]");*/
            range =  document.caretRangeFromPoint(x,y);

/*{{{*/
/*log("range=["+range+"]");*/
/*log("range.commonAncestorContainer=["+range.commonAncestorContainer+"]");*/
/*log("range.offsetNode.............=["+range.offsetNode             +"]");*/
/*}}}*/

if(!range || !range.commonAncestorContainer) log(   "caretRangeFromPoint failed", "warn");
/*else console_dir(range);*/
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
let log_range = function(range, caller="")
{
    if(!range) return;

    let s =  caller+":"
        +    LF+"............range=["+ range                +"]"
    ;

    if(range.startContainer != range.endContainer)
        s += LF+"...............(range.startContainer != range.endContainer)"
    ;

    if(range.startContainer && (range.startContainer.textContent.length < 80))
        s += LF+"range.startContainer:"
        +    LF+"......textContent=["+ trim_node_textContent(range.startContainer) +"]"
        +    LF+"......startOffset=["+ mPadStart("\u21E7", range.startOffset, ".") +" "+range.startOffset
        +    LF+"........endOffset=["+ mPadStart("\u21E7", range.  endOffset, ".") +" "+range.  endOffset
    ;

    if(range.collapsed)
        s += LF+"........collapsed=["+ range.collapsed      +"]"
    ;

    if((range.endContainer != range.startContainer) && (range.endContainer.textContent.length < 80))
        s += LF+".....endContainer=["+ range. endContainer .textContent +"] ....endOffset.=["+ range.endOffset   +"]"
    ;

    log(s);

    console_dir(range);
};
/*}}}*/
/*}}}*/

/** CHECK */
/*{{{*/
let CHECK_LOG_MAX       =  64;
let TOO_MANY_SELECTIONS = 128;
let WORDS_EXACT         = "words_exact";
let WORDS_SEGMENT       = "words_segment";
let WORDS_HEAD_TAIL     = "words_head_tail";
let WORDS_OPCYCLE       = "words_opcycle";

/*_ get_traversal_node_array {{{*/
let get_traversal_node_array = function(pattern, options, mDomTraversal)
{
    let caller = "get_traversal_node_array(pattern=["+pattern+"], "+options+")";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) log_tags();

    mNodeRegexP = get_mNodeRegexP(pattern, options);
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    if(!mNodeRegexP) return null;

    mNodeRegexP.pattern =         pattern;
if( log_this) ("mNodeRegexP........=["+ mNodeRegexP         +"]");
if( log_this) ("mNodeRegexP.pattern=["+ mNodeRegexP.pattern +"]");

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
log("___ node.textContent..................=["+                  node.textContent  +"]");
*/
            if(node_array.length >= TOO_MANY_SELECTIONS)
                break;
            node_array.push(node);
        }
        else {
/*
if(log_this) {
log("XXX !node_has_some_text(node).........=["+ node_toString(node)                +"]");
log("XXX node.nodeValue....................=["+                  node.nodeValue    +"]");
log("XXX node.textContent..................=["+                  node.textContent  +"]");
log("XXX trim_alNum_lines(node.textContent)=["+ trim_alNum_lines(node.textContent) +"]");
}
*/
        }
    }
    return node_array;
};
/*}}}*/
/*_ get_mNodeRegexP {{{*/
let get_mNodeRegexP = function(pattern, options)
{
    let caller = "get_mNodeRegexP <em class='cc5'>"+pattern+"</em> <em class='cc6'>"+options+"</em>";
let log_this = LOG_MAP.S1_RANGE;

    let rx = null;
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
if(log_this) log(caller+": ...return <em class='cc7'>"+rx+"</em>");
    return rx;
};
/*}}}*/

/*_ check_Traversal {{{*/
let check_NodeIterator = function(           id, pattern) { return check_Traversal("NodeIterator", id, pattern); };
let check_TreeWalker   = function(           id, pattern) { return check_Traversal("TreeWalker"  , id, pattern); };
let check_Traversal    = function(traversal, id, pattern)
{
    /* pattern {{{*/
    let caller = "<em class='cc3'>check_traversal</em> traversal=<em class='cc3'>"+traversal+"</em> id=<em class='cc4'>"+id+"</em> pattern=<em class='cc6'>"+pattern+"</em>";
let log_this = LOG_MAP.S3_SLOT;
if(log_this) log();
if(log_this) log(caller);

if(log_this) log_add_TR_SELECT(caller);

    if( !pattern ) {
        log(caller+": no pattern to look for", "warn");
        return;
    }

    /*}}}*/
    /* root {{{*/
    let root = pick_node(id, caller);

    let mDomTraversal
        = (traversal == "NodeIterator")
        ?  document.createNodeIterator(root, NodeFilter.SHOW_TEXT, mNodeFilter)
        :  document.createTreeWalker  (root, NodeFilter.SHOW_ALL , mNodeFilter);

if(log_this) log("<em class='cc3'>"+ object_label(mDomTraversal) +"</em> ID: <em class='cc4'>"+id+"</em>");

    /*}}}*/
    /* pattern matching node_array {{{*/

    let options    = words_options;
    let node_array = get_traversal_node_array(pattern, options, mDomTraversal);
/*
    if((node_array.length < 1) && words_opcycle)
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
*/
    /*}}}*/
    /* collect matching nodes {{{*/
    if(    (node_array.length >= TOO_MANY_SELECTIONS)
        || (node_array.length == 0                  )
    ) {
        let sel_bag;
        if( sel_bag = get_tool("#sel_bag"))
        {

            let msg = (node_array.length > 0)
                ? "*** TOO MANY: <em class='cc8'>"+pattern+"</em> .. (max "+TOO_MANY_SELECTIONS+") ***"
                : "--- NO MATCH: <em class='cc8'>"+pattern+"</em> ---"
            ;
            let el;
            if( el = get_tool(  "#sel_bag_warn_div")) el.innerHTML= msg;
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

    let slot  = get_free_slot();
    for(let i = 0; i < node_array.length; ++i)
    {
if(log_this) log("<em class='cc0' style='font-size:300%;'>"+(i+1)+"/"+node_array.length+"</em>");
        collect_node_matches_to_slot(slot, node_array[i], pattern, options);
    }

    /*}}}*/

if(log_this) log_set_TR_RESULT();
};
/*}}}*/
/*_ check_childNodes {{{*/
let check_childNodes = function(id, pattern)
{
    /* [id] {{{*/
    let caller = "<em class='cc3'>check_childNodes</em> id=<em class='cc4'>"+id+"</em> pattern=<em class='cc6'>"+pattern+"</em>";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);
if( log_this) log_set_TR_SELECT(caller);

    let root = pick_node(id, caller);
    if(!root) return;

if( log_this) log("<em class='cc3'>check_childNodes</em> <em class='cc4'>ID: "+id+"</em> <em class='cc4'>pattern: "+pattern+"</em>");
if( log_this) log_tags();
if( log_this) log("mNodeRegexP=["+mNodeRegexP+"]");
    /*}}}*/
    /* [childNodes] {{{*/
    let node, last_node, count, empty_count=0;
    for(count = 0; count < root.childNodes.length; ++count)
    {
        node         = root.childNodes[count];
        last_node    = node;
        if(count < CHECK_LOG_MAX) log_num_thumb(count, node);
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
            if(count < CHECK_LOG_MAX) log_num_thumb(count, node);
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
        let input_feature = get_tool("#input_feature"); var feature = input_feature.value;
        let input_version = get_tool("#input_version"); var version = input_version.value;
        result = document.implementation.hasFeature(feature, version);
    }
    catch(ex) {
        result = ex.toString();
    }

if( log_this) log(caller+": ...return "+result);
    return result;
};
/*}}}*/


/* filter */
/*_ mNodeFilter {{{ */
let mNodeRegexP;
let mNodeFilter = function(node)
{
    let mNodeFilter_result = do_mNodeFilter(node);

if(LOG_MAP.S1_RANGE && (mNodeFilter_result != NodeFilter.FILTER_SKIP)) log("XXX mNodeFilter: "+ NodeFilter_toString(mNodeFilter_result) + node_toString(node));

    return mNodeFilter_result;
};

let NodeFilter_toString = function(mNodeFilter_result)
{
    switch(mNodeFilter_result)
    {
        case NodeFilter.FILTER_ACCEPT: return "<em class='cc4'>FILTER_ACCEPT </em>";
        case NodeFilter.FILTER_REJECT: return "<em class='cc1'>FILTER_REJECT </em>";
        case NodeFilter.FILTER_SKIP  : return "<em class='cc8'>FILTER_SKIP   </em>";
        default                      : return "<em class='cc2'>FILTER_ERROR  </em>";
    }
};

let do_mNodeFilter = function(node)
{
    if(    mNodeRegexP         && node.textContent  )
        if(mNodeRegexP.pattern == node.textContent  ) return NodeFilter.FILTER_ACCEPT;

    /* REJECT OUT_OF_SCOPE_PARENT */
    let parent = node.parentNode;
    if( parent && (parent.nodeType == Node.ELEMENT_NODE))
    {
        if( parent.tagName  == "SCRIPT"             ) return NodeFilter.FILTER_REJECT;
        if( parent.tagName  == "STYLE"              ) return NodeFilter.FILTER_REJECT;
        if( is_node_selected( parent )              ) return NodeFilter.FILTER_REJECT;
    }
/*
        if( parent.className.includes("knob_content") )
        {
            console.log("REJECTING: "+ parent.parentNode.id);
            console.dir(parent);
            return NodeFilter.FILTER_REJECT;
        }
*/
    /* SKIP NON-TEXT */
    if(node.nodeType != Node.TEXT_NODE              ) return NodeFilter.FILTER_SKIP  ;

    /* ACCEPT UNFILTERED */
    if(                       !mNodeRegexP          ) return NodeFilter.FILTER_ACCEPT;

    /* REJECTED BY FILTER */
    if(!node.textContent                            ) return NodeFilter.FILTER_SKIP  ;
    if(!node.textContent.match(mNodeRegexP)         ) return NodeFilter.FILTER_SKIP  ;

    /* ACCEPTED BY FILTER */
    else                                              return NodeFilter.FILTER_ACCEPT;
};
/*}}}*/

/*_ log_num_thumb {{{*/
let log_num_thumb = function(count, node)
{
    let         num = mPadStart(count, 5, " ");

    let thumb_p     = get_node_thumb_p( node    );
    let thumb_p_str = get_thumb_p_str ( thumb_p );
    let      offset = " ["+ thumb_p_str.replace(" ","&nbsp;") +"%]";

    let         val = node_toString(node);

    log("<span class='log_num_thumb'>"+num + offset +"</span> "+ val);
};
/*}}}*/
/*}}}*/

/** COLLECT */
/*{{{*/
/*_ collect_node_matches_to_slot {{{*/
let collect_node_matches_to_slot = function(slot, node, pattern, options)
{
    let caller = "collect_node_matches_to_slot(slot=["+slot+"])";
let log_this = LOG_MAP.S1_RANGE;
if( log_this) log(caller);

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
    window.getSelection().removeAllRanges(); /* prevent WebView popup */

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
    let caller = "collect_selection_to_slot(slot=["+slot+"], pattern=["+pattern+"], options=["+options+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);

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
let collect_ccs_range_node_slot = function(range, ccs_node, slot, pattern, options)
{
    /*{{{*/
let caller = "collect_ccs_range_node_slot(range, ccs_node, slot=["+slot+"])";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);
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
    let container                      = get_node_container( range.startContainer );
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
/*FIXME*/
    let thumb_p = get_node_thumb_p(container ? container : ccs_node);
/*
    let thumb_p = get_node_thumb_p(                        ccs_node);
*/

    if( thumb_p < 1) {
if(log_this) log(caller+"%c NOT COLLECTING "+get_n_txt(node)+" .. (thumb_p < 1)", lbH+lf2);
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
    if( !containers_hi ) return;
    if( !container     ) return;
    if(  container.classList)
        if(  container.classList.contains( "container_dark" ) || container.classList.contains( "container_light" )) return;
    add_hi_container( container );

    /*}}}*/
};
/*}}}*/

/*_ get_node_container {{{*/
let BAIL_OUT_COUNT = 10;
let get_node_container = function(node)
{
    let caller = "get_node_container("+get_n_txt(node)+")";
let log_this = LOG_MAP.S3_SLOT;
if( log_this) log(caller);

    let container = node.parentElement;

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
        }

        container = container.parentElement;
    }

    if(count >= BAIL_OUT_COUNT)
    {
if(log_this) log("%c"+caller+"%c BAILING OUT ON ["+get_n_str(node)+"] after "+count+" attempts at looking for a container", lbL, lbR+lf1);

    }

    return container;
};
/*}}}*/
/*_ is_text_container_node {{{*/
let is_text_container_node = function(node)
{
    let tag = node.nodeName.toLowerCase();
    let result
        =      (tag == "p"        )
        ||     (tag == "div"      )
        ||    ((tag == "code"     ) && (node.textContent.length >= 80)) /* only if they contain a wall of text */
        ||    ((tag == "li"       ) && (node.textContent.length >= 80)) /* only if they contain a wall of text */
        ||    ((tag == "ul"       ) && (node.textContent.length >= 80)) /* only if they contain a wall of text */
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
        )
    ;

if(LOG_MAP.S1_RANGE) log("is_text_container_node(["+get_n_str(node)+"]...["+get_n_lbl(node)+"]): ...return "+result+" node.textContent.length=["+node.textContent.length+"]");
    return result;
};
/*}}}*/

/*_ sync_containers_hi {{{*/
let sync_containers_hi = function()
{
    let caller = "sync_containers_hi";
if(LOG_MAP.S1_RANGE) log(caller);

    /* 1/2 - forget all current containers */
    let selector  = ".container_light";
    let node_list = document.querySelectorAll( selector );
    for(let i = 0; i < node_list.length; ++i)
    {
        del_el_class(node_list[i], "container_light");
    }

    selector  = ".container_dark";
    node_list = document.querySelectorAll( selector );
    for(let i = 0; i < node_list.length; ++i)
    {
        del_el_class(node_list[i], "container_dark");
    }

    /* highlight active containers */
    if(containers_hi)
    {
        for(let slot = 1; slot < ccs.length; ++slot)
        {
            if( ccs[slot] )
            {
                for(let i = 0; i < ccs[slot].nodes.length; ++i)
                {
                    if( ccs[slot].containers[i] )
                        add_hi_container( ccs[slot].containers[i] );
                }
            }
        }
    }

    /* unhiglight everything else */
    let html = document.getElementsByTagName("HTML")[0];
    if(containers_hi) add_el_class(html             , "containers_hi"  );
    else              del_el_class(html             , "containers_hi"  );
    del_el_class(                  html, theme_dark ? "light" : "dark" );
    add_el_class(                  html, theme_dark ?  "dark" : "light");

};
/*}}}*/
/*_ get_slot_num_container {{{*/
let get_slot_num_container = function(slot, num)
{
    let s =  slot;
    let n = num-1;

    let node
        = (ccs[s] && ccs[s].containers)
        ?            ccs[s].containers[n] /*   a node parent */
        :            ccs[s].nodes     [n] /* the node itself */
        ;

/*
logXXX("get_slot_num_container("+s+","+n+"): ...return "+ get_n_lbl(node) +" .. "+ ((node == ccs[s].nodes[n]) ? "THE NODE ITSELF" : "A NODE PARENT"))
console.dir(ccs[s])
*/
    return  node;
};
/*}}}*/
/*}}}*/
/* PAT_BAG */
/*XXX*/
/*{{{*/
/*_ t_onPatternUpdate {{{*/
/*{{{*/
const  PATTERN_UPDATE_DELAY =  500;/*//FIXME 250;*/
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
let log_this = LOG_MAP.S2_SELECT;
    let caller = "t_onPatternUpdate_handler";
if( log_this) log(caller);

    t_onPatternUpdate_timer = null;

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_UPDATE, "want");

    t_onPatternUpdate_handler_sync_csv_from_ccs();
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_STAGE , "have");

    t_set_1_sel_bag_innerHTML();

    t_set_4_pat_off_bak_innerHTML(caller);
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_pat_off_bak_bin_csv(SYMBOL_RESULT, "have");

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
/*_ t_set_4_pat_off_bak_innerHTML {{{*/
let t_set_4_pat_off_bak_innerHTML = function(_caller)
{
    /*{{{*/
let log_this = LOG_MAP.S2_SELECT;
if( log_this) log("%c t_set_4_pat_off_bak_innerHTML: .. %c CALLED BY ["+_caller+"]", lbF+lb3, lbF+lb0);

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
    let bak_count = t_collect_el_class_from_into("pat_span", bak_bag, pat_spans);
    let off_count = t_collect_el_class_from_into("pat_span", off_bag, pat_spans);
    let pat_count = t_collect_el_class_from_into("pat_span", pat_bag, pat_spans);

if(log_this) for(let i=0; i < pat_spans.length; ++i) log((i+1)+" %c["+pat_spans[i].innerText+"]", lbF+lbX[(i+1) % 10]);

    /*}}}*/
    /* [innerHTML] {{{*/
/*
  _cleanup_pat_bag();
  _cleanup_div(off_bag);
  _cleanup_div(bak_bag);
*/

    let bak_bag_innerHTML = "";
    let off_bag_innerHTML = "";
    let pat_bag_innerHTML = "";
    /*}}}*/
    /* [nil] .. (sucks all nil.pat_spans from their current container] {{{*/
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

if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("MOVED TO <em class='cc2'>BAK</em> FROM <em class='cc9'>"+get_n_lbl(container)+"</em> ["+pat_spans[pat_span_index].innerText+"]");
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
            bak_bag_innerHTML += line;
            bak_inserted_count += 1;
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
            else                       { pat_bag_innerHTML += line; ++pat_inserted_count; }
            /*}}}*/
        }

    }
    /*}}}*/
    /* [pat_spans] unmoved [MOVED_TO bak] {{{*/
    for(let pat_span_index=0; pat_span_index<pat_spans.length; ++pat_span_index)
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
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("MOVED TO <em class='cc5'>OFF</em> <em class='cc8'>LOOSE</em> ["+pat_spans[pat_span_index].innerText+"]");
            csv_move_pattern_to_off(pat);
            off_moved_to_count += 1;
            off_bag.appendChild( pat_spans[pat_span_index] );
        }
        else {
if(LOG_MAP.EV8_FLOATLOG || fly_log_checked) t_log_msg("MOVED TO <em class='cc8'>BAK</em> <em class='cc8'>LOOSE</em> ["+pat_spans[pat_span_index].innerText+"]");
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
        log_msg += t_get_docker_bag_msg("bin", bin_moved_to_count, 0                 , 0                 );

        t_log_msg( log_msg );
    }

if(log_this && pat_bag_innerHTML) log("...pat_bag_innerHTML %c"+pat_bag_innerHTML, lb1);
if(log_this && off_bag_innerHTML) log("...off_bag_innerHTML %c"+off_bag_innerHTML, lb2);
if(log_this && bak_bag_innerHTML) log("...bak_bag_innerHTML %c"+bak_bag_innerHTML, lb3);
pat_bag.title
    = "PAT "+csv_count(pat_csv)+LF
    + "OFF "+csv_count(off_csv)+LF
    + "BAK "+csv_count(bak_csv)
    ;

    /*}}}*/
    /* [wide_bag] {{{*/
    let needs_wide_bag
        =  (csv_count(off_csv) >= 10)
        || (csv_count(bak_csv) >= 10)
    ;

    if(has_el_class(pat_bag, "wide_bag") != needs_wide_bag)
    {
        set_el_class_on_off(pat_bag, "wide_bag", needs_wide_bag);

        t_log_transcript_info("<span style='"+ (needs_wide_bag ? "color:red" : "color:green"                 ) +";'>"+SYMBOL_BLACK_CIRCLE+"</span>"
            +                 "<span style='"+ (needs_wide_bag ?          "" : "text-decoration:line-through") +";'>  wide_bag             </span>"
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

    /*}}}*/
    /* BAGS ORDER {{{*/
    pat_bag.appendChild(off_bag);
    pat_bag.appendChild(bak_bag);
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

    let sel_bag = get_tool("#sel_bag");
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

    sel_bag.innerHTML = sel_bag_innerHTML;
};
/*}}}*/
/*_ t_get_2_sel_bag_line {{{*/
let t_get_2_sel_bag_line = function(slot)
{
    let count   = ccs[slot].nodes.length;
    let title   = ccs[slot].toString();
    let pattern = ccs[slot].pattern;

    return "<div class='select"+slot+"'>"
        +   "<em id='thumb_p_"+slot+"' title='"+title     +"'>"+pattern+"</em>"
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
/*_ t_cleanup_pat_bag {{{*/
let t_cleanup_pat_bag = function()
{
let log_this = LOG_MAP.S2_SELECT;
    let caller = "t_cleanup_pat_bag";
if(log_this) log(caller);

    let transient_pat_count = 0;
    let              length = pat_bag.childNodes.length;
    let                            node_removed;
    for(let i=0; i < length; i += (node_removed ? 0 : 1))
    {
        let node = pat_bag.childNodes[i];
/*console.dir(node);*/
        node_removed = false;
        if( t_is_accessory_node(node) )
        {
/*if(log_this) log("...KEEPING  %c["+get_n_lbl(node) +"]", lbF+lb1);*/
        }
        else if(node) {
/*if(log_this) log("...REMOVING %c["+node.textContent+"]", lbF+lb2);*/
            pat_bag.removeChild(node);
            transient_pat_count += 1;
            node_removed = true;
        }
        else {
/*if(log_this) log("...SKIPPING %c[undefined]"           , lbF+lb8);*/
        }
    }
if(log_this) log("..."+transient_pat_count+" [pat_bag] transient nodes removed");
};
/*}}}*/
/*_ t_cleanup_div {{{*/
let t_cleanup_div = function(div)
{
let log_this = LOG_MAP.S2_SELECT;
    let caller = "t_cleanup_div";
if(log_this) log(caller);

    let transient_pat_count = 0;
    let              length = div.childNodes.length;
    let                            node_removed;
    for(let i=0; i < length; i += (node_removed ? 0 : 1))
    {
        let node = div.childNodes[i];
        node_removed = false;
        if( t_is_accessory_node(node) )
        {
/*if(log_this) log("...KEEPING  %c["+get_n_lbl(node) +"]", lbF+lb1);*/
        }
        else if(node) {
            div.removeChild(node);
            transient_pat_count += 1;
            node_removed = true;
        }
    }
if(log_this) log("..."+transient_pat_count+" ["+get_n_lbl(div)+"] transient nodes removed");
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
    for(let pat_span_index=0; pat_span_index<pat_spans.length; ++pat_span_index)
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
/*_ pick_node {{{*/
let pick_node = function(id, _caller)
{
    let caller = "pick_node("+id+"): caller=["+_caller+"]";
let log_this = LOG_MAP.S1_RANGE;

    let node = (!id) ? document.body : null;
    if(!node)
        try {
            node = document.getElementById(id) || document.getElementsByTagName(id)[0] || getElementsByContent(pattern);
        } catch(ex) { }

    let selector;
    if(!node ) {
        selector = "#"+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");
        node = document.querySelector( selector );
    }

    if(!node ) {
        selector = "."+id;
if(log_this) log(caller+": NOT FOUND .. trying selector ["+selector+"]");
        node = document.querySelector( selector );
    }

    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using body");
        node = document.body;
    }

    if(!node )
    {
if(log_this) log(caller+": NOT FOUND .. using document");
        node = document;
    }

if(log_this) {
    log("<div class='cc8'>");
    log(caller);
    log_node(SYMBOL_CHECK_MARK +" NODE"       , node           );
    log_node(SYMBOL_CHECK_MARK +" PARENT"     , node.parentNode);
    log_node(SYMBOL_CHECK_MARK +" FIRST CHILD", node.firstChild);
    log_node(SYMBOL_CHECK_MARK +" LAST CHILD" , node.lastChild );
    log("</div>");
}
    return node;
};
/*}}}*/

/* attributes */
/*_ node_toString {{{ */
let node_toString = function(node)
{
    let caller = "node_toString";
    if(!node) return "<span class='gr'>"+caller+"(null node)</span>";

    let result = "";
    try {

        let p_str = get_p_str( node          );
        let n_str = get_n_str( node          );
        let t_str = get_t_str( node.nodeType );

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
            + " <em  class='"+em_class     +"'>"+ s_get_htmlEntities( text ) +"</em>"
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
/*_ get_p_str {{{ */
let get_p_str = function(node)
{
    let names = "";

    for(let       parent  = node.parentNode
        ;        (parent != null)
        ;         parent  = parent.parentNode
    ) {
        let n_str         = get_n_str(parent);
        if( n_str) names  =            n_str            + names;
     /* if( n_str) names  = mPadEnd(   n_str,8,".") +"."+ names; */
    }

    return names;
};
/*}}}*/
/*_ get_n_lbl {{{ */
let get_n_lbl = function(node)
{
    if(!node                 ) return "null node";
    if( node == window       ) return "window";
    if( node == document.body) return "body";

    let                n_lbl = null;
    if(node.id ) try { n_lbl =   node.tagName +"#"+ node.id                                  ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =   node.tagName +(node.className ? ("."+ node.className) : "") ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =   truncate(node.textContent, 24)                              ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =            node.tagName                                       ; } catch(ex) {}
    if( !n_lbl ) try { n_lbl =            node.nodeType                                      ; } catch(ex) {}
    if( !n_lbl )       n_lbl = "";
    return             n_lbl;
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
    if(!node) return "null node";
    return strip_CR_LF( ellipsis(node.textContent.trim(), 64) );
};
/*}}}*/
/*_ get_h_tag {{{ */
let get_h_tag = function(node_nodeName)
{
    switch(node_nodeName) {

        case "#document"     : return "|"     ; /*"\u2622";*/
        case  "HTML"         : return "_"     ; /*"\u2AFC";*/
        case   "HEAD"        : return "\u265E";
        case   "BODY"        : return "\u26AB"; /*"\u265C";*/

        case    "SCRIPT"     : return "\u2710";

        case    "DIV"        : return "\u2610";
        case    "BLOCKQUOTE" : return "\u275D";
        case    "SPAN"       : return "\u2799";
        case    "EM"         : return "\u2794";

        case    "A"          : return "\u27A4";
        case    "BUTTON"     : return "\u274D";
        case    "INPUT"      : return "\u270B";
        case    "TEXTAREA"   : return "\u2774";

        case    "TABLE"      : return "TA";
        case     "THEAD"     : return "TH";
        case     "TFOOT"     : return "TF";
        case     "TBODY"     : return "TB";
        case      "TR"       : return "tr";
        case      "TH"       : return "th";
        case      "TD"       : return "td";

        case    "UL"         : return "UL";
        case    "OL"         : return "OL";
        case    "LI"         : return "\u26AC";

        default              : return node_nodeName;
    }
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

/* thumb */
/*_ get_node_thumb_p {{{*/
let THUMB_OFFSET = 0;/*64; NOTE: not needed when using onDown_XY*/
let get_node_thumb_p = function(node)
{
/*
logXXX("%c get_node_thumb_p("+get_n_txt(node)+")",lbb+lbH)
*/
    let          node_top      = getRealTop(node) - THUMB_OFFSET;
    let                     ph = get_page_height();
/*
logXXX("...ph=["+ph+"]")
logXXX("...node_top=["+node_top+"]")
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
/*_ log_option_changes {{{*/
let log_option_changes = function(changes)
{

    let s = "<em>"+changes+"</em>" +"<br>"+LF
        +"<table>"+LF
        +"<tr><th>OPTIONS:</th></tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state("tools_scroll"      , tools_scroll                           ) +"</td>"
        +" <td>"+ get_log_option_state("anchor_freeze"     , anchor_freeze                          ) +"</td>"
        +" <td>"+ get_log_option_state("containers_hi"     , containers_hi                          ) +"</td>"
        +" <td>"+ get_log_option_state("scroll_smooth"     , scroll_smooth                          ) +"</td>"
        +" <td>"+ get_log_option_state("overflow_visi"     , overflow_visi                          ) +"</td>"
        +" <td>"+ get_log_option_state("tools_extras"      , tools_extras                           ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_value("words_options"     , get_words_options_symbol(words_options))
        +" <td>"+ get_log_option_state("words_opcycle"     , words_opcycle                          ) +"</td>"
        +" <td>"+ get_log_option_state("wording"           , wording                                ) +"</td>"
        +" <td>"+ get_log_option_state("theme_dark"        , theme_dark                             ) +"</td>"
        +"</tr>"+LF
        +"<tr>"
      /*+" <td>"+ get_log_option_value("tools_node"        , "<em class='cc9'>"+tools_node  +"</em>")         */
      /*+" <td>"+ get_log_option_value("tools_filter"      , "<em class='cc9'>"+tools_filter+"</em>")         */
      /*+" <td>"+ get_log_option_state("filter_auto"       , filter_auto                            ) +"</td>"*/
      /*+" <td>"+ get_log_option_state("transcripts"       , transcripts                            ) +"</td>"*/
        +"</tr>"+LF
        +"<tr>"
        +" <td>"+ get_log_option_state("logging_EVENTS"    , logging_EVENTS                         ) +"</td>"
        +" <td>"+ get_log_option_state("logging_HIGHLIGHT" , logging_HIGHLIGHT                      ) +"</td>"
        +" <td>"+ get_log_option_state("logging_TOOLBAR"   , logging_TOOLBAR                        ) +"</td>"
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

/** STRING */
/*{{{*/
/*_ csv_add {{{*/
let csv_add = function(csv, val)
{
/*
logXXX("csv_add(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
*/
    if(                     !val  ) return csv;
    val = csv_escape(val);
    if(             !csv          ) return val;
    if( csv_contains(csv,    val) ) return csv; /* as a SET (i.e. NOT as a BAG) */
/*
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
logXXX(".return val=[%c"+csv+","+val+"%c]", lb2,lbA)
*/
    return           csv+","+val;
};
/*}}}*/
/*_ csv_del {{{*/
let csv_del = function(csv,val)
{
    if(       !val) return csv;
    if(!csv       ) return csv;
/*
logXXX("csv_del(csv=[%c"+csv+"%c], val=[%c"+val+"%c])", lb1,lbA, lb2,lbA)
*/

    if( csv == val) {
       csv = "";
    }
    else {
        val = csv_escape(val);
/*
logXXX("___val=[%c"+val+"%c]", lb2,lbA)
*/

        let a = csv.split(",");
        csv = "";
        for(let i=0; i<a.length; ++i) {
            if(                 !a[i]) continue;
            if(       val ==     a[i]) continue;
            if(!csv)  csv  =     a[i]; /* first */
                else      csv += ","+a[i]; /*  more */
        }
    }

/*
logXXX(".return csv=[%c"+csv+"%c]", lb1,lbA)
*/
    return csv;
};
/*}}}*/
/*_ csv_contains {{{*/
/*
:new C:/LOCAL/DEV/DEVEL/EMC/Extensions/PJC_SPECS/script/PJC_SPECS.asp
*/
let csv_contains = function(csv, val)
{
    if(!val) return false;
    val = csv_escape(val);
    let c = ","+ csv.trim() +",";
    let v = ","+ val.trim() +",";
    let r =        c.includes(v);
    return r;
};
/*}}}*/
/*_ csv_count {{{*/
let csv_count = function(csv)
{
    if(!csv) return 0;

    return csv.split(",").length;
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
/*
logXXX("csv_get(csv=[%c"+csv+"%c], pos=[%c"+pos+"%c])", lb1,lbA, lb2,lbA)
logXXX(".return val=[%c"+val+"%c]", lb2,lbA)
*/
    return val;
};
/*}}}*/
/*_ csv_log {{{*/
let csv_log = function(csv, title="")
{
    if(title) {
        if(csv) log("%c "+title                , lbF+lb9         );
        else    log("%c "+title+"%c IS  EMPTY ", lbF+lb9, lbF+lb0);
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
/*_ csv_escape csv_unescape {{{*/

let APOST_ASC = "'";
let APOST_UTF = "\\u0027";
let APOST_HTM = "&apos;";

let COMMA_ASC = ",";
let COMMA_UTF = "\\u002C";
let COMMA_HTM = "&comma;";

let regexp_COMMA_ASC = new RegExp(COMMA_ASC, "g");
let regexp_COMMA_UTF = new RegExp(COMMA_UTF, "g");
let regexp_COMMA_HTM = new RegExp(COMMA_HTM, "g");
let regexp_APOST_ASC = new RegExp(APOST_ASC, "g");
let regexp_APOST_UTF = new RegExp(APOST_UTF, "g");
let regexp_APOST_HTM = new RegExp(APOST_HTM, "g");

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
/*_ csv_cat {{{*/
let csv_cat = function(csv1, csv2)
{
    if(  !csv1) return csv2;
    if(  !csv2) return csv1;
    let   csv = csv1;
    let     v = csv2.split(",");
    for(let i = 0; i < v.length; ++i) {
        csv += "," + v[i];
    }
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
    if(reverse) v.sort( function(a, b) { return a.toLowerCase() < b.toLowerCase(); } );
    else        v.sort( function(a, b) { return b.toLowerCase() < a.toLowerCase(); } );

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

/*_ ellipsis {{{*/
const ELLIPSIS_DEFAULT_LEN = 64;
const ELLIPSIS_SHORT_LEN   = 32;

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
/*_ mPadStart {{{*/
let mPadStart = function(s,l,c=" ") { s = String(s); while(s.length < l) s = c+s; return s; };
/*}}}*/
/*_ mPadEnd{{{*/
let mPadEnd   = function(s,l,c=" ") { s = String(s); while(s.length < l) s = s+c; return s; };
/*}}}*/
/*_ isAlNum {{{ */
let isAlNum = function(s)
{
    let cp
        = s.codePointAt(0);
    let result
        =  ((cp >=   48) && (cp <=  57 )) /* 0-9 */
        || ((cp >=   65) && (cp <=  90 )) /* A-Z */
        || ((cp ==   95)                ) /*  _  */
        || ((cp >=   97) && (cp <= 122 )) /* a-z */
        || ((cp >= 0xDF) && (cp <= 0xFF)) /* SHARP-S - Y-DIAERESIS */
    ;
    if(result)
        return true;
    else
        return false;
};

let _sAlNum = function(s) { return /[0-9a-z]/.test( s.toLowerCase() ); };

/*}}}*/
/*_ object_label {{{*/
let object_label = function(object)
{
    return object.toString()
        .replace("[object ","")
        .replace(       "]","");
};
/*}}}*/
/*}}}*/

/** REGEX */
/*{{{*/
/*_ trim_node_textContent {{{ */
let trim_node_textContent = function(node)
{
    return strip_CR_LF( ellipsis(node.textContent.trim(), 64) );
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
/*_ strip_CR_LF {{{*/
let regexp_CR = new RegExp("\\r", "g");
let regexp_LF = new RegExp("\\n", "g");
let strip_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR,  "")
        .   replace(regexp_LF, " ")
        .   trim()
    ;
};
/*}}}*/
/*_ strip_UL {{{*/
let regexp_ULX = new RegExp("__+", "g");
let regexp_UL  = new RegExp(  "_", "g");
let strip_UL = function(text)
{
    return text
        .   replace(regexp_ULX, LF    )
        .   replace(regexp_UL , " "   )
        .   trim()
    ;
};
/*}}}*/
/*_ tokenize {{{*/                                      /* HOSTNAME           _ PATHNAME        */
let regexp_NW      = new RegExp("[^0-9~A-z\\xC0-\\xFF]+", "g"); /* www.remotetabs.com _ C://LOCAL/STORE */
let regexp_WORDS   = new RegExp("www|com|html"          , "g"); /* www remotetabs com _ C   LOCAL STORE */
let regexp_HEADS   = new RegExp("^\\w\\s"                    ); /*                    _   C LOCAL_STORE */
let regexp_SPACE   = new RegExp("\\s+"                  , "g"); /*                    _     LOCAL_STORE */
let tokenize = function(text)
{
    return text
        .   replace(regexp_NW   , " ")
        .   replace(regexp_WORDS,  "")
        .   replace(regexp_HEADS,  "")
        .   trim(                    )
        .   replace(regexp_SPACE, "_")
    ;
};
/*}}}*/
/*_ vbar_to_up_arrow {{{*/
let regexp_VBAR = new RegExp("\\|", "g");
let vbar_to_up_arrow = function(text)
{
    return text
        .   replace(regexp_VBAR, SYMBOL_UP_ARROW)
    ;
};
/*}}}*/
/*_ escape_CR_LF {{{*/
let escape_CR_LF = function(text)
{
    return text
        .   replace(regexp_CR, SYMBOL_CR   )
        .   replace(regexp_LF, SYMBOL_LF+"<br>"+LF)
        .   trim()
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
let regexp_AN = new RegExp("[^a-z_ A-Z0-9]", "g");
/*r regexp_nW = new RegExp("\\W"           , "g");*/
let regexp_mS = new RegExp("\\s{2,}"       , "g");
let trim_empty_lines = function(textContent, alnum_filter=false)
{
    let caller = "trim_empty_lines";
    let text = "";
    try {
        if(textContent)
        {
            /* erase CR LF */
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
/*_ s_get_htmlEntities {{{ */
let regexp_HTML_AMP   = new RegExp("&", "g");
let regexp_HTML_LT    = new RegExp("<", "g");
let regexp_HTML_GT    = new RegExp(">", "g");
let regexp_HTML_QUOTE = new RegExp(DOUBLE_QUOTE, "g");
let s_get_htmlEntities = function(str)
{
    return String(str)
        .replace(regexp_HTML_AMP  , "&amp;")
        .replace(regexp_HTML_LT   , "&lt;")
        .replace(regexp_HTML_GT   , "&gt;")
        .replace(regexp_HTML_QUOTE, "&quot;")
    ;

};
/*}}}*/
/*_ strip_html {{{*/
let regexp_EM_O = new RegExp("<em[^>]*>"                , "g");
let regexp_EM_C = new RegExp("</em[^>]*>"               , "g");
let regexp_EOL  = new RegExp("<(ol|ul|/li|/div|br|pre)>", "g");
let regexp_HTML = new RegExp("<[^>]*>"                  , "g");
let regexp_ENTT = new RegExp("&\\w+;"                   , "g");
/*
let regexp_TRUE = new RegExp("=?\\[?true\\]?"           , "g");
let regexp_FALSE= new RegExp("=?\\[?false\\]?"          , "g");
*/
let regexp_LF2  = new RegExp("\\n{2,}"                  , "g");

let LOG_TRUE          = " TRUE_____";
let LOG_FALSE         = " ____false";

let strip_html = function(text)
{
    return text
        .   replace(regexp_EM_O , "["         )
        .   replace(regexp_EM_C , "] "        )
        .   replace(regexp_EOL  , LF          )
        .   replace(regexp_LF2  , LF          )
        .   replace(regexp_HTML , ""          )
        .   replace(regexp_ENTT , SYMBOL_EMPTY)
/*
        .   replace(regexp_TRUE , LOG_TRUE    )
        .   replace(regexp_FALSE, LOG_FALSE   )
*/
        .trim()
    ;
};
/*}}}*/
/*_ bracket_to_em {{{*/
let regexp_BRACKET_O = new RegExp("\\[", "g");
let regexp_BRACKET_C = new RegExp("\\]", "g");
let bracket_to_em = function(text)
{
    return text
        .   replace(regexp_BRACKET_O,  "<em>")
        .   replace(regexp_BRACKET_C, "</em>")
    ;
};
/*}}}*/
/*_ get_first_word {{{*/
let regexp_FIRST_WORD = new RegExp("(\\w+)", "i");
let get_first_word = function(text, caller)
{
/*
    return strip_CR_LF( text.trim() )
        .  replace(regexp_FIRST_WORD, "$1");
    return text;
*/
    regexp_FIRST_WORD.lastIndex = 0;

    let matches = regexp_FIRST_WORD.exec( text );

    let  result = (matches) ? matches[0] : "";

if(LOG_MAX.S1_RANGE) log("get_first_word(text=["+text+"], caller=["+caller+"]): "+ regexp_FIRST_WORD +" .. return ["+result+"]");
    return result;
};
/*}}}*/
/*_ get_tag_hour {{{*/
let regexp_TAG_HOUR = new RegExp(":\\d(\\d)h", "i"); /* [9] .. (170602:19h11) */
let get_tag_hour = function(text)
{

    regexp_TAG_HOUR.lastIndex = 0;

    let matches = regexp_TAG_HOUR.exec( text );

    let  result = (matches) ? matches[1] : "0";

if(LOG_MAP.S1_RANGE) log("get_tag_hour("+ text +"): "+ regexp_TAG_HOUR +" .. return ["+result+"]");
    return result;
};
/*}}}*/

/*_ replace_character_entities {{{*/
let regexp_eacute = new RegExp("\\xE9", "g"); var hex_eacute = String.fromCharCode(0xE9); /* E-ACUTE */
let regexp_egrave = new RegExp("\\xE8", "g"); var hex_egrave = String.fromCharCode(0xE8); /* E-GRAVE */
let replace_character_entities = function(text)
{
    return text
        .   replace(regexp_eacute, hex_eacute)
        .   replace(regexp_egrave, hex_egrave)
    ;
};
/*}}}*/

/*}}}*/

/** LAYOUT */
/*{{{*/
/*_ getRealTop {{{ */
let getRealTop = function(el)
{
    if(el.nodeType == Node.TEXT_NODE) el = el.parentElement;
    let    y = el.offsetTop;
/*
logXXX("___"+get_n_lbl(el)+".offsetTop=["+el.offsetTop+"]")
*/
    while(el = el.offsetParent) {
/*
logXXX("____"+get_n_lbl(el)+".offsetTop=["+el.offsetTop+"]")
*/
        y   += el.offsetTop;
    }
    return y;
};
/*}}}*/
/*_ getRealBot {{{ */
let getRealBot = function(el)
{
    if(el.nodeType == Node.TEXT_NODE) el = el.parentElement;
    return getRealTop(el) + el.offsetHeight;
};
/*}}}*/
/*_ get_page_height {{{ */
let get_page_height = function()
{
/*
logXXX(    "ocument.body")
logXXX(    document.body.scrollHeight)
logXXX(    document.body.clientHeight)
logXXX(    document.body.offsetHeight)
logXXX(    "ocument.body.parentElement")
logXXX(    document.body.parentElement.scrollHeight)
logXXX(    document.body.parentElement.clientHeight)
logXXX(    document.body.parentElement.offsetHeight)
*/

    return document.body.parentElement.scrollHeight; /* HTML */

/*  return document.body.scrollHeight;    /* VIEWABLE+OVERFLOW +PADDING                    -border -scrollbar -margin */
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
};
/*}}}*/
/*}}}*/

/** TOOLS */
/*{{{*/
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

/** LOG */
/*{{{*/
let log_HTML    =  "";
/*_ log_object {{{*/
let log_object = function(o,lXX=lb0)
{
    if(!o) {
        console.log("%c null objec ", lXX);
        return "";
    }
    let tdata = "";
    Object.keys(o).forEach(
        function(key) {
            console.log("%c"+key+"%c=%c"+o[key], lXX,lb0,lb8);
            tdata    += "["+key+"]=["+o[key]+"]";
        }
    );
    return tdata;
};
/*}}}*/
/*_ log {{{ */
let  log_is_full = false;
let LOG_MAX = 50000;
let CLEAR   = "DEFAULT_TO_CLEAR";
let s_log = function(first_arg=CLEAR, ...args)
{
    /* [log_msg] {{{*/
    let log_msg = !first_arg ? CLEAR : first_arg.trim();

    /*}}}*/
/*
console.log("@@@")
console.log("@@@ log_msg=["+log_msg+"]")
for(let i=0; i<args.length; ++i) console.log("@@@ args["+i+"]=["+args[i]+"]");
console.log("@@@")
*/
    /* [log_level] {{{*/
    let log_level
        =   log_is_full              ? "warn"
        : (!log_HTML && args.length) ? args[0]
/*
        : (!log_HTML               ) ? "time"
        : (!log_HTML               ) ? "groupCollapsed"
        : (log_msg == CLEAR        ) ? "timeEnd"
        : (log_msg == CLEAR        ) ? "groupEnd"
*/
        :                              "log"
    ;

    /*}}}*/
/*
console.log("@@@ log_level=["+log_level+"]")
*/
    /* console {{{*/
    if(    (log_msg != CLEAR)
        && ((typeof console) != "undefined")
    ) {
        if(arguments[0]) arguments[0] = strip_html(arguments[0]);
/*
console.log("@@@")
console.log("@@@ arguments[0]=["+arguments[0]+"]")
console.log("@@@")
*/
        switch(log_level) {
            default              : console.log            .apply(console, Array.prototype.slice.call(arguments)); /*console.trace();*/ break;

            case "error"         : console.error          .apply(console, Array.prototype.slice.call(arguments)); break;
            case "warn"          : console.warn           .apply(console, Array.prototype.slice.call(arguments)); break;
            case "info"          : console.info           .apply(console, Array.prototype.slice.call(arguments)); break;

            case "time"          : console.time           .apply(console, "selection"                          ); break;
            case "timeEnd"       : console.timeEnd        .apply(console, "selection"                          ); break;
            case "groupEnd"      : console.groupEnd       .apply(console,                                      ); break;
            case "group"         : console.group          .apply(console, Array.prototype.slice.call(arguments)); break;
            case "groupCollapsed": console.groupCollapsed .apply(console, Array.prototype.slice.call(arguments)); break;

        }
    }
    /*}}}*/
    /* CLEAR [log_is_full] {{{*/
    if(log_msg == CLEAR) {
        if(log_is_full) {
            if((typeof console) != "undefined") console.warn("log_is_full");
            log_is_full = false;
        }
        log_HTML = "";
    }
    /*}}}*/
    /* log_HTML ADD {{{*/
    else {
        log_HTML += LF+ strip_pat(log_msg,"%c\\log_msg*");
    }
    /*}}}*/
    /* log_is_full {{{*/
    if(log_HTML.length > LOG_MAX)
    {
        /* WARN ONCE .. (until next init)*/
        if(!log_is_full ) {
            log_is_full = true;
            if((typeof console) != "undefined") console.error("log_is_full: ...LOG_MAX=["+LOG_MAX+"]");
        }
        return;
    }
    /*}}}*/
/*
:!start explorer "https://developers.google.com/web/tools/chrome-devtools/console/console-reference"
*/
};
var log = s_log; /* (global reference) */
/*}}}*/
/*_ logXXX {{{*/
let logXXX = function()
{
    arguments[0] = "XXX "+arguments[0];
    console.log.apply(console, Array.prototype.slice.call(arguments));
};
/*}}}*/
/*_ log_clear {{{*/
let log_clear = function(caller)
{
    t_clear("log_clear(caller=["+_caller+"])");
};
/*}}}*/
/*_ log set add clr {{{ */
let log_set_TR_count = 0;

let _log_add_TR1       = function(   msg="", ...args) { log_add_TR(log_tr1, msg, ...args); };
let _log_add_TR2       = function(   msg="", ...args) { log_add_TR(log_tr2, msg, ...args); };
let _log_set_TR1       = function(   msg="", ...args) { log_set_TR(log_tr1, msg, ...args); };
let _log_set_TR2       = function(   msg="", ...args) { log_set_TR(log_tr2, msg, ...args); };

let log_clr_TR1        = function(_caller) { /*logXXX("log_clr_TR1 .. CALLED BY "+_caller);*/ _log_set_TR1(""); };
let log_clr_TR2        = function(_caller) { /*logXXX("log_clr_TR2 .. CALLED BY "+_caller);*/ _log_set_TR2(""); };

let log_add_TR_EVENT   = _log_add_TR1;
let log_add_TR_SELECT  = _log_add_TR1;
let log_set_TR_EVENT   = _log_set_TR1;
let log_set_TR_LAYOUT  = _log_set_TR1;
let log_set_TR_SELECT  = _log_set_TR1;

let log_add_TR_LAYOUT  = _log_add_TR2;
let log_add_TR_STORAGE = _log_add_TR2;

/*}}}*/
/*_ log_set_TR_RESULT {{{ */
let log_set_TR_RESULT = function(html=log_HTML)
{
    if(!html.trim()) return;

    _log_set_TR2("<hr><table>"
            +   " <tr><td><pre id='html'>"+ html +"</pre></td></tr>"
            +   "</table>"
    );

    t_sync_layout("log_set_TR_RESULT");

    log_HTML = ""; /* NOTE: log() should be called first to clear results to be reported here */
};
/*}}}*/
/*_ log_set_TR {{{*/
let log_set_TR  = function(tr,msg="", ...args) {
    if(tr) {
        /* removeChild {{{*/
        for(let            i = (tr.childNodes.length-1); i > 0; --i)
        {
            if(                !tr.childNodes[i].classList.contains("push_pin") ) {
                tr.removeChild( tr.childNodes[i] );
                i =             tr.childNodes.length;
            }

        }
        /*}}}*/
        /* transcript decoration and step-stamp {{{*/
        tr.innerHTML = "";
        t_add_push_pin_to_panel(tr);
        t_add_clearpin_to_panel(tr);
        tr.innerHTML += ""
            + "<em class='em_log'>"
            + "<span class='cc"+(++log_set_TR_count % SELECT_SLOT_MAX)+"'>"
            +  log_set_TR_count
            + "</span>"
            + "</em>"
        ;
        /*}}}*/
    }

    if(msg) { del_el_class(tr, "empty"); log_add_TR(tr, msg, args); }
    else    { add_el_class(tr, "empty");                            }

    log();
};
/*}}}*/
/*_ log_add_TR {{{*/
let log_add_TR  = function(tr,msg="", ...args)
{
/*{{{
if(msg) console.log("%c"+strip_html(msg), String(args[0]));
}}}*/
    if(!tr) return;
    if(msg) del_el_class(tr, "empty");
    if(!tr.innerHTML) log_set_TR(tr,"");

    if(msg.trim() == "") msg = "empty msg";

    let s = "<table>";

    /* mStartRange {{{*/
    mStartRange_str = (mStartRange) ? rangeToString(mStartRange, "mStartRange") : "";
    if(mStartRange) s += ""
        +" <tr><th                       >        mStartRange             </th></tr>"
        +" <tr><td                       ><pre>"+ mStartRange_str +"</pre></td></tr>"
    ;

    /*}}}*/
    /* mEndRange {{{*/
    mEndRange_str   = (mEndRange  ) ? rangeToString(mEndRange  , "mEndRange"  ) : "";
    if(mEndRange) s += ""
        +" <tr><th                       >        mEndRange               </th></tr>"
        +" <tr><td                       ><pre>"+ mEndRange_str   +"</pre></td></tr>"
    ;

    /*}}}*/

    if(msg) s += ""
        +" <tr><td class='transcript_msg'>"+                    msg    +"</td></tr>"
        +"</table>"
    ;

    s += "<table>";

    tr.insertAdjacentHTML("beforeend", s);

/* send_onchange_event_to( tr ); */
};
/*}}}*/
/*_ log_layout_TR {{{*/
let log_layout_TR = function(tr)
{
    let x_min =         BOX_MARGIN - tr.offsetWidth ; if(tr.offsetLeft < x_min) tr.style.left = x_min+"px";
    let x_max = window.innerWidth  - BOX_MARGIN     ; if(tr.offsetLeft > x_max) tr.style.left = x_max+"px";

    let y_min =         BOX_MARGIN - tr.offsetHeight; if(tr.offsetTop < y_min) tr.style.top   = y_min+"px";
    let y_max = window.innerHeight - BOX_MARGIN     ; if(tr.offsetTop > y_max) tr.style.top   = y_max+"px";
};
/*}}}*/
/*_ log_sep_top log_sep_bot  {{{*/

const STYLE_TOP = "font-weight:900; border:0px #000 solid; border-radius:2em 2em .1em .1em; padding:  0 1em 1em 2em; overflow:visible;";
const STYLE_BOT = "color:#0FF8;     border:0px #000 solid; border-radius:.1em .1em 2em 2em; padding:1em 1em 0em 2em; overflow:visible;";

const STYLE_BG_TOP=[];
      STYLE_BG_TOP [1] = " background:linear-gradient(to bottom, #964B0080 0%, #2222 100%);";
      STYLE_BG_TOP [2] = " background:linear-gradient(to bottom, #FF000080 0%, #2222 100%);";
      STYLE_BG_TOP [3] = " background:linear-gradient(to bottom, #FFA50080 0%, #2222 100%);";
      STYLE_BG_TOP [4] = " background:linear-gradient(to bottom, #FFFF0080 0%, #2222 100%);";
      STYLE_BG_TOP [5] = " background:linear-gradient(to bottom, #9ACD3280 0%, #2222 100%);";
      STYLE_BG_TOP [6] = " background:linear-gradient(to bottom, #6495ED80 0%, #2222 100%);";
      STYLE_BG_TOP [7] = " background:linear-gradient(to bottom, #EE82EE80 0%, #2222 100%);";
      STYLE_BG_TOP [8] = " background:linear-gradient(to bottom, #A0A0A080 0%, #2222 100%);";
      STYLE_BG_TOP [9] = " background:linear-gradient(to bottom, #FFFFFF80 0%, #2222 100%);";
      STYLE_BG_TOP [0] = " background:linear-gradient(to bottom, #00000080 0%, #2222 100%);";

const STYLE_BG_BOT=[];
      STYLE_BG_BOT [1] = " background:linear-gradient(to    top, #964B0080 0%, #2222 100%);";
      STYLE_BG_BOT [2] = " background:linear-gradient(to    top, #FF000080 0%, #2222 100%);";
      STYLE_BG_BOT [3] = " background:linear-gradient(to    top, #FFA50080 0%, #2222 100%);";
      STYLE_BG_BOT [4] = " background:linear-gradient(to    top, #FFFF0080 0%, #2222 100%);";
      STYLE_BG_BOT [5] = " background:linear-gradient(to    top, #9ACD3280 0%, #2222 100%);";
      STYLE_BG_BOT [6] = " background:linear-gradient(to    top, #6495ED80 0%, #2222 100%);";
      STYLE_BG_BOT [7] = " background:linear-gradient(to    top, #EE82EE80 0%, #2222 100%);";
      STYLE_BG_BOT [8] = " background:linear-gradient(to    top, #A0A0A080 0%, #2222 100%);";
      STYLE_BG_BOT [9] = " background:linear-gradient(to    top, #FFFFFF80 0%, #2222 100%);";
      STYLE_BG_BOT [0] = " background:linear-gradient(to    top, #00000080 0%, #2222 100%);";

let log_sep_num=1;

let log_sep_top = function(arg_line="") { console.log("%c "+strip_html(arg_line), STYLE_TOP + STYLE_BG_TOP[log_sep_num]); };
let log_sep_bot = function(arg_line="") { console.log("%c "+strip_html(arg_line), STYLE_BOT + STYLE_BG_BOT[log_sep_num]); log_sep_num = (log_sep_num+1) % 10; };

/* USAGE: if(LOG_MAP.XXX) log_sep_top("TOP_log_line"); */
/* USAGE: if(LOG_MAP.XXX) log_sep_bot("BOT_log_line"); */

/*}}}*/
/*}}}*/
