"use strict";
/* dom_prop_js */
let DOM_PROP_JS_ID        = "dom_prop_js";
let DOM_PROP_JS_TAG       = DOM_PROP_JS_ID  +" (181230:00h)";


/* Prop public */
let prop_init    = function(id, value, onchange) { return _prop_set  (id, value, onchange)        ; }; /* returns prop (not calling onchange) */
let prop_set     = function(id, value, onchange) { return _prop_parse(id, value, onchange)        ; }; /* returns prop     */
let prop_get     = function(id                 ) { return _prop_get  (id                 ).value  ; }; /* returns value    */
let prop_toggle  = function(id                 ) { return _prop_parse(id,"toggle"        ).value  ; }; /* returns value    */
let prop_set_EL  = function(id, el             ) { return _prop_get  (id                 ).el = el; }; /* returns EL       */
let prop_get_EL  = function(id                 ) { return _prop_get  (id                 ).el     ; }; /* returns EL       */
let prop_get_MAP = function(                   ) { return                                 Prop_Map; }; /* returns Prop_Map */
let prop_set_CB  = function(cb                 ) {                                    Prop_CB = cb; }; /* UI state handler */
let prop_log_MAP = function(_caller            ) {
/* {{{*/

    Prop_Map.forEach(
                     function(prop,index,array) {
                         prop.log(index +" "+ _caller);
                     });

};
/*}}}*/

/* Prop private */
/* Prop_Map Prop_CB {{{*/
let Prop_Map = [];
let Prop_CB;

/*}}}*/
/*_Prop new {{{*/
let Prop = function(id, value, onchange)
{
    this.id        = id;
    this.value     = (value == "toggle") ? true      : value        ;
    this.onchange  = onchange;
    this.el        = null;
    /* this.toString {{{*/
    this.toString = function() {
        return ""
            +  "["+                  this.id
            +  " "+                  this.value         +"]"
            +  "["+ (this.onchange ? this.onchange.name : "")
            +  " "+    get_id_or_tag(this.el)           +"]"
        ;

    };
    /*}}}*/
    /* this.log {{{*/
    this.log = function(prefix="") {

        let lfv = (this.value ==  null) ? lf8
            :     (this.value == false) ? lb6
            :     (this.value ==  true) ? lb5
            :                             lb7;

        let lfe = (this.el            ) ? lf4
            :                             lf2;

        console.groupCollapsed( "%c"+ mPadEnd  (               prefix     , 42)
                       +       " %c"+ mPadStart(               this.id    , 24)
                       +       " %c"+ mPadStart(               this.value , 16)
                       +       " %c"+ mPadStart( get_id_or_tag(this.el   ), 24)
                       +       " %c"+ (this.el ? " "+this.el.className : "")
                       ,       lbH
                       ,       lbL+lfe
                       ,       lbC+lfv
                       ,       lbR+lfe
                       ,       lbH+lf3
                              );

        log_key_val(this.id, this, lf3);
        console.trace();
        console.groupEnd();
    };

    /*}}}*/
};
/*}}}*/
/*  _prop_set {{{*/
let _prop_set = function(id, value="toggle", onchange)
{
/*{{{*/
let   caller = "_prop_set("+id+", "+value+")"; if(typeof dom_prop_notify != "undefined") dom_prop_notify(caller);
let log_this = LOG_MAP.T3_LAYOUT;

if( log_this) log("%c"+caller, lbH+lf3);
/*}}}*/

    let    prop  =  _prop_get(id, value, onchange);
    if(onchange &&  (prop.onchange  != onchange )) { prop.onchange       = onchange;  }
    if(             (prop.value     != value    )) { prop.value = (value == "toggle") ? !prop.value : value ; }
    else if( log_this) log("...unchanged");

    t1_prop_id_state_CB(id, prop.value);

    return prop;
};
/*}}}*/
/*  _prop_get {{{*/
let _prop_get = function(id, value, onchange)
{
    let prop;
    for(let i=0; i < Prop_Map.length; ++i ) {
        if(  id == Prop_Map[i].id  ) {
            prop = Prop_Map[i];
            break;
        }
    }
    if(!prop ) {
        prop = new Prop(id, value, onchange);
        Prop_Map.push(prop);
    }
    return prop;
};
/*}}}*/
/*  _prop_parse {{{*/
let _prop_parse = function(id, value, onchange)
{
/*{{{*/
let   caller = "_prop_parse("+id+", "+value+")";
let log_this = LOG_MAP.T1_DOM_LOAD;

if( log_this) log(caller);
/*}}}*/
    let prop = _prop_get(id, value, onchange);
    if(      onchange && (onchange != prop.onchange ))
        prop .onchange  =  onchange;

    if(  prop.value != value) {
        _prop_set(id , value);

        if(Prop_CB) Prop_CB(id, prop.value);

        if( prop.onchange)
            prop.onchange(id, prop.value);
    }
else if( log_this) log("...unchanged");

if( log_this) prop.log(caller);
    return prop;
};
/*}}}*/

