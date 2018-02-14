// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.garden.v1v3v3.garden.color');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29063__auto__,k__29064__auto__){
var self__ = this;
var this__29063__auto____$1 = this;
return this__29063__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29064__auto__,null);
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29065__auto__,k44088,else__29066__auto__){
var self__ = this;
var this__29065__auto____$1 = this;
var G__44093 = k44088;
var G__44093__$1 = (((G__44093 instanceof cljs.core.Keyword))?G__44093.fqn:null);
switch (G__44093__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k44088,else__29066__auto__);

}
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29077__auto__,writer__29078__auto__,opts__29079__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
var pr_pair__29080__auto__ = ((function (this__29077__auto____$1){
return (function (keyval__29081__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,cljs.core.pr_writer,""," ","",opts__29079__auto__,keyval__29081__auto__);
});})(this__29077__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29078__auto__,pr_pair__29080__auto__,"#mranderson047.garden.v1v3v3.garden.color.CSSColor{",", ","}",opts__29079__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44087){
var self__ = this;
var G__44087__$1 = this;
return (new cljs.core.RecordIter((0),G__44087__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29061__auto__){
var self__ = this;
var this__29061__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29058__auto__){
var self__ = this;
var this__29058__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29067__auto__){
var self__ = this;
var this__29067__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29059__auto__){
var self__ = this;
var this__29059__auto____$1 = this;
var h__28877__auto__ = self__.__hash;
if(!((h__28877__auto__ == null))){
return h__28877__auto__;
} else {
var h__28877__auto____$1 = ((function (h__28877__auto__,this__29059__auto____$1){
return (function (coll__29060__auto__){
return (1451323715 ^ cljs.core.hash_unordered_coll.call(null,coll__29060__auto__));
});})(h__28877__auto__,this__29059__auto____$1))
.call(null,this__29059__auto____$1);
self__.__hash = h__28877__auto____$1;

return h__28877__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44089,other44090){
var self__ = this;
var this44089__$1 = this;
return (!((other44090 == null))) && ((this44089__$1.constructor === other44090.constructor)) && (cljs.core._EQ_.call(null,this44089__$1.red,other44090.red)) && (cljs.core._EQ_.call(null,this44089__$1.green,other44090.green)) && (cljs.core._EQ_.call(null,this44089__$1.blue,other44090.blue)) && (cljs.core._EQ_.call(null,this44089__$1.hue,other44090.hue)) && (cljs.core._EQ_.call(null,this44089__$1.saturation,other44090.saturation)) && (cljs.core._EQ_.call(null,this44089__$1.lightness,other44090.lightness)) && (cljs.core._EQ_.call(null,this44089__$1.alpha,other44090.alpha)) && (cljs.core._EQ_.call(null,this44089__$1.__extmap,other44090.__extmap));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29072__auto__,k__29073__auto__){
var self__ = this;
var this__29072__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__29073__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29072__auto____$1),self__.__meta),k__29073__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29073__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29070__auto__,k__29071__auto__,G__44087){
var self__ = this;
var this__29070__auto____$1 = this;
var pred__44094 = cljs.core.keyword_identical_QMARK_;
var expr__44095 = k__29071__auto__;
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"red","red",-969428204),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(G__44087,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"green","green",-945526839),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,G__44087,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,G__44087,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,G__44087,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__44087,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__44087,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__44094.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__44095))){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__44087,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29071__auto__,G__44087),null));
}
}
}
}
}
}
}
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29075__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29062__auto__,G__44087){
var self__ = this;
var this__29062__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__44087,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29068__auto__,entry__29069__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29069__auto__)){
return this__29068__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29069__auto__,(0)),cljs.core._nth.call(null,entry__29069__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29068__auto____$1,entry__29069__auto__);
}
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.call = (function() {
var G__44098 = null;
var G__44098__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__44098__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k);
});
var G__44098__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k,missing);
});
G__44098 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__44098__1.call(this,self__);
case 2:
return G__44098__2.call(this,self__,k);
case 3:
return G__44098__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__44098.cljs$core$IFn$_invoke$arity$1 = G__44098__1;
G__44098.cljs$core$IFn$_invoke$arity$2 = G__44098__2;
G__44098.cljs$core$IFn$_invoke$arity$3 = G__44098__3;
return G__44098;
})()
;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.apply = (function (self__,args44092){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args44092)));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k);
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k,missing);
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__29099__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mranderson047.garden.v1v3v3.garden.color/CSSColor");
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__29099__auto__,writer__29100__auto__){
return cljs.core._write.call(null,writer__29100__auto__,"mranderson047.garden.v1v3v3.garden.color/CSSColor");
});

mranderson047.garden.v1v3v3.garden.color.__GT_CSSColor = (function mranderson047$garden$v1v3v3$garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

mranderson047.garden.v1v3v3.garden.color.map__GT_CSSColor = (function mranderson047$garden$v1v3v3$garden$color$map__GT_CSSColor(G__44091){
return (new mranderson047.garden.v1v3v3.garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__44091),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__44091),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__44091),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__44091),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__44091),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__44091),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__44091),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__44091,new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441))),null));
});

mranderson047.garden.v1v3v3.garden.color.as_color = mranderson047.garden.v1v3v3.garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
mranderson047.garden.v1v3v3.garden.color.rgb = (function mranderson047$garden$v1v3v3$garden$color$rgb(var_args){
var G__44101 = arguments.length;
switch (G__44101) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson047.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__44102){
var vec__44103 = p__44102;
var r = cljs.core.nth.call(null,vec__44103,(0),null);
var g = cljs.core.nth.call(null,vec__44103,(1),null);
var b = cljs.core.nth.call(null,vec__44103,(2),null);
var vs = vec__44103;
if(cljs.core.every_QMARK_.call(null,((function (vec__44103,r,g,b,vs){
return (function (p1__44099_SHARP_){
return mranderson047.garden.v1v3v3.garden.util.between_QMARK_.call(null,p1__44099_SHARP_,(0),(255));
});})(vec__44103,r,g,b,vs))
,vs)){
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null));
} else {
throw cljs.core.ex_info.call(null,"RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson047.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return mranderson047.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

mranderson047.garden.v1v3v3.garden.color.rgb.cljs$lang$maxFixedArity = 3;

/**
 * Create an RGBA color.
 */
mranderson047.garden.v1v3v3.garden.color.rgba = (function mranderson047$garden$v1v3v3$garden$color$rgba(var_args){
var G__44108 = arguments.length;
switch (G__44108) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return mranderson047.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__44109){
var vec__44110 = p__44109;
var r = cljs.core.nth.call(null,vec__44110,(0),null);
var g = cljs.core.nth.call(null,vec__44110,(1),null);
var b = cljs.core.nth.call(null,vec__44110,(2),null);
var a = cljs.core.nth.call(null,vec__44110,(3),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.between_QMARK_.call(null,a,(0),(1)))){
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.assoc.call(null,mranderson047.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson047.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return mranderson047.garden.v1v3v3.garden.color.rgba.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});

mranderson047.garden.v1v3v3.garden.color.rgba.cljs$lang$maxFixedArity = 4;

/**
 * Create an HSL color.
 */
mranderson047.garden.v1v3v3.garden.color.hsl = (function mranderson047$garden$v1v3v3$garden$color$hsl(var_args){
var G__44116 = arguments.length;
switch (G__44116) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson047.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__44117){
var vec__44118 = p__44117;
var h = cljs.core.nth.call(null,vec__44118,(0),null);
var s = cljs.core.nth.call(null,vec__44118,(1),null);
var l = cljs.core.nth.call(null,vec__44118,(2),null);
var vec__44121 = cljs.core.map.call(null,((function (vec__44118,h,s,l){
return (function (p1__44114_SHARP_){
return cljs.core.get.call(null,p1__44114_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__44114_SHARP_);
});})(vec__44118,h,s,l))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.call(null,vec__44121,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__44121,(1),null);
var l__$1 = cljs.core.nth.call(null,vec__44121,(2),null);
if(cljs.core.truth_((function (){var and__28411__auto__ = mranderson047.garden.v1v3v3.garden.util.between_QMARK_.call(null,s__$1,(0),(100));
if(cljs.core.truth_(and__28411__auto__)){
return mranderson047.garden.v1v3v3.garden.util.between_QMARK_.call(null,l__$1,(0),(100));
} else {
return and__28411__auto__;
}
})())){
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod.call(null,h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null));
} else {
throw cljs.core.ex_info.call(null,"Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson047.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return mranderson047.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

mranderson047.garden.v1v3v3.garden.color.hsl.cljs$lang$maxFixedArity = 3;

/**
 * Create an HSLA color.
 */
mranderson047.garden.v1v3v3.garden.color.hsla = (function mranderson047$garden$v1v3v3$garden$color$hsla(var_args){
var G__44126 = arguments.length;
switch (G__44126) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return mranderson047.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__44127){
var vec__44128 = p__44127;
var h = cljs.core.nth.call(null,vec__44128,(0),null);
var s = cljs.core.nth.call(null,vec__44128,(1),null);
var l = cljs.core.nth.call(null,vec__44128,(2),null);
var a = cljs.core.nth.call(null,vec__44128,(3),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.between_QMARK_.call(null,a,(0),(1)))){
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.assoc.call(null,mranderson047.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson047.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return mranderson047.garden.v1v3v3.garden.color.hsla.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});

mranderson047.garden.v1v3v3.garden.color.hsla.cljs$lang$maxFixedArity = 4;

/**
 * Return true if color is an RGB color.
 */
mranderson047.garden.v1v3v3.garden.color.rgb_QMARK_ = (function mranderson047$garden$v1v3v3$garden$color$rgb_QMARK_(color){
return (cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null)));
});
/**
 * Return true if color is an HSL color.
 */
mranderson047.garden.v1v3v3.garden.color.hsl_QMARK_ = (function mranderson047$garden$v1v3v3$garden$color$hsl_QMARK_(color){
return (cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null)));
});
/**
 * Return true if x is a color.
 */
mranderson047.garden.v1v3v3.garden.color.color_QMARK_ = (function mranderson047$garden$v1v3v3$garden$color$color_QMARK_(x){
var or__28423__auto__ = mranderson047.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return mranderson047.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x);
}
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
mranderson047.garden.v1v3v3.garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
mranderson047.garden.v1v3v3.garden.color.hex_QMARK_ = (function mranderson047$garden$v1v3v3$garden$color$hex_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__28411__auto__ = typeof x === 'string';
if(and__28411__auto__){
return cljs.core.re_matches.call(null,mranderson047.garden.v1v3v3.garden.color.hex_re,x);
} else {
return and__28411__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
mranderson047.garden.v1v3v3.garden.color.hex__GT_rgb = (function mranderson047$garden$v1v3v3$garden$color$hex__GT_rgb(s){
var temp__4657__auto__ = cljs.core.re_matches.call(null,mranderson047.garden.v1v3v3.garden.color.hex_re,s);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__44134 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__44134,(0),null);
var hex = cljs.core.nth.call(null,vec__44134,(1),null);
var hex__$1 = ((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,hex)))?cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,((function (vec__44134,_,hex,temp__4657__auto__){
return (function (p1__44132_SHARP_){
var x__29285__auto__ = p1__44132_SHARP_;
return cljs.core._conj.call(null,(function (){var x__29285__auto____$1 = p1__44132_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29285__auto____$1);
})(),x__29285__auto__);
});})(vec__44134,_,hex,temp__4657__auto__))
,hex)):hex);
return mranderson047.garden.v1v3v3.garden.color.rgb.call(null,cljs.core.map.call(null,((function (hex__$1,vec__44134,_,hex,temp__4657__auto__){
return (function (p1__44133_SHARP_){
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.call(null,p1__44133_SHARP_,(16));
});})(hex__$1,vec__44134,_,hex,temp__4657__auto__))
,cljs.core.re_seq.call(null,/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
mranderson047.garden.v1v3v3.garden.color.rgb__GT_hex = (function mranderson047$garden$v1v3v3$garden$color$rgb__GT_hex(p__44137){
var map__44138 = p__44137;
var map__44138__$1 = ((((!((map__44138 == null)))?((((map__44138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44138):map__44138);
var r = cljs.core.get.call(null,map__44138__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.call(null,map__44138__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.call(null,map__44138__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = ((function (map__44138,map__44138__$1,r,g,b){
return (function mranderson047$garden$v1v3v3$garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace.call(null,mranderson047.garden.v1v3v3.garden.util.format.call(null,"%2s",mranderson047.garden.v1v3v3.garden.util.int__GT_string.call(null,v,(16)))," ","0");
});})(map__44138,map__44138__$1,r,g,b))
;
return cljs.core.apply.call(null,cljs.core.str,"#",cljs.core.map.call(null,hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
mranderson047.garden.v1v3v3.garden.color.trim_one = (function mranderson047$garden$v1v3v3$garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
mranderson047.garden.v1v3v3.garden.color.rgb__GT_hsl = (function mranderson047$garden$v1v3v3$garden$color$rgb__GT_hsl(p__44141){
var map__44142 = p__44141;
var map__44142__$1 = ((((!((map__44142 == null)))?((((map__44142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44142):map__44142);
var color = map__44142__$1;
var red = cljs.core.get.call(null,map__44142__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.call(null,map__44142__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.call(null,map__44142__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,color))){
return color;
} else {
var vec__44144 = cljs.core.map.call(null,((function (map__44142,map__44142__$1,color,red,green,blue){
return (function (p1__44140_SHARP_){
return (p1__44140_SHARP_ / (255));
});})(map__44142,map__44142__$1,color,red,green,blue))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.call(null,vec__44144,(0),null);
var g = cljs.core.nth.call(null,vec__44144,(1),null);
var b = cljs.core.nth.call(null,vec__44144,(2),null);
var mx = (function (){var x__28773__auto__ = (function (){var x__28773__auto__ = r;
var y__28774__auto__ = g;
return ((x__28773__auto__ > y__28774__auto__) ? x__28773__auto__ : y__28774__auto__);
})();
var y__28774__auto__ = b;
return ((x__28773__auto__ > y__28774__auto__) ? x__28773__auto__ : y__28774__auto__);
})();
var mn = (function (){var x__28780__auto__ = (function (){var x__28780__auto__ = r;
var y__28781__auto__ = g;
return ((x__28780__auto__ < y__28781__auto__) ? x__28780__auto__ : y__28781__auto__);
})();
var y__28781__auto__ = b;
return ((x__28780__auto__ < y__28781__auto__) ? x__28780__auto__ : y__28781__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__44147 = cljs.core._EQ_;
var expr__44148 = mx;
if(cljs.core.truth_(pred__44147.call(null,mn,expr__44148))){
return (0);
} else {
if(cljs.core.truth_(pred__44147.call(null,r,expr__44148))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_(pred__44147.call(null,g,expr__44148))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_(pred__44147.call(null,b,expr__44148))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44148)].join('')));
}
}
}
}
})();
var l = mranderson047.garden.v1v3v3.garden.color.trim_one.call(null,((mx + mn) / (2)));
var s = mranderson047.garden.v1v3v3.garden.color.trim_one.call(null,((cljs.core._EQ_.call(null,mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return mranderson047.garden.v1v3v3.garden.color.hsl.call(null,cljs.core.mod.call(null,h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
mranderson047.garden.v1v3v3.garden.color.hsl__GT_rgb = (function mranderson047$garden$v1v3v3$garden$color$hsl__GT_rgb(p__44151){
var map__44152 = p__44151;
var map__44152__$1 = ((((!((map__44152 == null)))?((((map__44152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44152):map__44152);
var color = map__44152__$1;
var hue = cljs.core.get.call(null,map__44152__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__44152__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__44152__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,color))){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__44154 = cljs.core.map.call(null,((function (h,s,l,m2,m1,map__44152,map__44152__$1,color,hue,saturation,lightness){
return (function (p1__44150_SHARP_){
return Math.round((p1__44150_SHARP_ * (255)));
});})(h,s,l,m2,m1,map__44152,map__44152__$1,color,hue,saturation,lightness))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,(h + (1.0 / (3)))),mranderson047.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,h),mranderson047.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,(h - (1.0 / (3))))], null));
var r = cljs.core.nth.call(null,vec__44154,(0),null);
var g = cljs.core.nth.call(null,vec__44154,(1),null);
var b = cljs.core.nth.call(null,vec__44154,(2),null);
return mranderson047.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
mranderson047.garden.v1v3v3.garden.color.hue__GT_rgb = (function mranderson047$garden$v1v3v3$garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
mranderson047.garden.v1v3v3.garden.color.hsl__GT_hex = (function mranderson047$garden$v1v3v3$garden$color$hsl__GT_hex(color){
return mranderson047.garden.v1v3v3.garden.color.rgb__GT_hex.call(null,mranderson047.garden.v1v3v3.garden.color.hsl__GT_rgb.call(null,color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
mranderson047.garden.v1v3v3.garden.color.hex__GT_hsl = (function mranderson047$garden$v1v3v3$garden$color$hex__GT_hsl(color){
return mranderson047.garden.v1v3v3.garden.color.rgb__GT_hsl.call(null,mranderson047.garden.v1v3v3.garden.color.hex__GT_rgb.call(null,color));
});
mranderson047.garden.v1v3v3.garden.color.percent_clip = cljs.core.partial.call(null,mranderson047.garden.v1v3v3.garden.util.clip,(0),(100));
mranderson047.garden.v1v3v3.garden.color.rgb_clip = cljs.core.partial.call(null,mranderson047.garden.v1v3v3.garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
mranderson047.garden.v1v3v3.garden.color.as_hex = (function mranderson047$garden$v1v3v3$garden$color$as_hex(x){
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.color.rgb__GT_hex.call(null,x);
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.color.hsl__GT_hex.call(null,x);
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
mranderson047.garden.v1v3v3.garden.color.as_rgb = (function mranderson047$garden$v1v3v3$garden$color$as_rgb(x){
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.color.hsl__GT_rgb.call(null,x);
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.color.hex__GT_rgb.call(null,x);
} else {
if(typeof x === 'number'){
return mranderson047.garden.v1v3v3.garden.color.rgb.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
mranderson047.garden.v1v3v3.garden.color.as_hsl = (function mranderson047$garden$v1v3v3$garden$color$as_hsl(x){
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x))){
return x;
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.color.rgb__GT_hsl.call(null,x);
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.color.hex__GT_hsl.call(null,x);
} else {
if(typeof x === 'number'){
return mranderson047.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,mranderson047.garden.v1v3v3.garden.color.percent_clip.call(null,x),mranderson047.garden.v1v3v3.garden.color.percent_clip.call(null,x)], null));
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
mranderson047.garden.v1v3v3.garden.color.restrict_rgb = (function mranderson047$garden$v1v3v3$garden$color$restrict_rgb(m){
return cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
mranderson047.garden.v1v3v3.garden.color.make_color_operation = (function mranderson047$garden$v1v3v3$garden$color$make_color_operation(op){
return (function() {
var mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op = null;
var mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.call(null,mranderson047.garden.v1v3v3.garden.color.rgb_clip,op);
var a__$1 = mranderson047.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson047.garden.v1v3v3.garden.color.as_rgb.call(null,a));
var b__$1 = mranderson047.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson047.garden.v1v3v3.garden.color.as_rgb.call(null,b));
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,o,a__$1,b__$1));
});
var mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__44157__delegate = function (a,b,more){
return cljs.core.reduce.call(null,mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op,mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op.call(null,a,b),more);
};
var G__44157 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__44158__i = 0, G__44158__a = new Array(arguments.length -  2);
while (G__44158__i < G__44158__a.length) {G__44158__a[G__44158__i] = arguments[G__44158__i + 2]; ++G__44158__i;}
  more = new cljs.core.IndexedSeq(G__44158__a,0,null);
} 
return G__44157__delegate.call(this,a,b,more);};
G__44157.cljs$lang$maxFixedArity = 2;
G__44157.cljs$lang$applyTo = (function (arglist__44159){
var a = cljs.core.first(arglist__44159);
arglist__44159 = cljs.core.next(arglist__44159);
var b = cljs.core.first(arglist__44159);
var more = cljs.core.rest(arglist__44159);
return G__44157__delegate(a,b,more);
});
G__44157.cljs$core$IFn$_invoke$arity$variadic = G__44157__delegate;
return G__44157;
})()
;
mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__44160 = null;
if (arguments.length > 2) {
var G__44161__i = 0, G__44161__a = new Array(arguments.length -  2);
while (G__44161__i < G__44161__a.length) {G__44161__a[G__44161__i] = arguments[G__44161__i + 2]; ++G__44161__i;}
G__44160 = new cljs.core.IndexedSeq(G__44161__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__44160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1;
mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2;
mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
mranderson047.garden.v1v3v3.garden.color.color_PLUS_ = mranderson047.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
mranderson047.garden.v1v3v3.garden.color.color_ = mranderson047.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
mranderson047.garden.v1v3v3.garden.color.color_STAR_ = mranderson047.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
mranderson047.garden.v1v3v3.garden.color.color_div = mranderson047.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._SLASH_);
mranderson047.garden.v1v3v3.garden.color.update_color = (function mranderson047$garden$v1v3v3$garden$color$update_color(color,field,f,v){
var v__$1 = (function (){var or__28423__auto__ = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__28423__auto__)){
return or__28423__auto__;
} else {
return v;
}
})();
return cljs.core.update_in.call(null,mranderson047.garden.v1v3v3.garden.color.as_hsl.call(null,color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
mranderson047.garden.v1v3v3.garden.color.rotate_hue = (function mranderson047$garden$v1v3v3$garden$color$rotate_hue(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.call(null,(function (p1__44162_SHARP_){
return cljs.core.mod.call(null,p1__44162_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
mranderson047.garden.v1v3v3.garden.color.saturate = (function mranderson047$garden$v1v3v3$garden$color$saturate(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,mranderson047.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
mranderson047.garden.v1v3v3.garden.color.desaturate = (function mranderson047$garden$v1v3v3$garden$color$desaturate(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,mranderson047.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
mranderson047.garden.v1v3v3.garden.color.lighten = (function mranderson047$garden$v1v3v3$garden$color$lighten(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,mranderson047.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
mranderson047.garden.v1v3v3.garden.color.darken = (function mranderson047$garden$v1v3v3$garden$color$darken(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,mranderson047.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Return the inversion of a color.
 */
mranderson047.garden.v1v3v3.garden.color.invert = (function mranderson047$garden$v1v3v3$garden$color$invert(color){
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,cljs.core._,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),mranderson047.garden.v1v3v3.garden.color.as_rgb.call(null,color)));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
mranderson047.garden.v1v3v3.garden.color.mix = (function mranderson047$garden$v1v3v3$garden$color$mix(var_args){
var G__44167 = arguments.length;
switch (G__44167) {
case 2:
return mranderson047.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29611__auto__ = [];
var len__29592__auto___44169 = arguments.length;
var i__29593__auto___44170 = (0);
while(true){
if((i__29593__auto___44170 < len__29592__auto___44169)){
args_arr__29611__auto__.push((arguments[i__29593__auto___44170]));

var G__44171 = (i__29593__auto___44170 + (1));
i__29593__auto___44170 = G__44171;
continue;
} else {
}
break;
}

var argseq__29612__auto__ = (new cljs.core.IndexedSeq(args_arr__29611__auto__.slice((2)),(0),null));
return mranderson047.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29612__auto__);

}
});

mranderson047.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = mranderson047.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson047.garden.v1v3v3.garden.color.as_rgb.call(null,color_1));
var c2 = mranderson047.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson047.garden.v1v3v3.garden.color.as_rgb.call(null,color_2));
return mranderson047.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,mranderson047.garden.v1v3v3.garden.util.average,c1,c2));
});

mranderson047.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.call(null,mranderson047.garden.v1v3v3.garden.color.mix,mranderson047.garden.v1v3v3.garden.color.mix.call(null,color_1,color_2),more);
});

mranderson047.garden.v1v3v3.garden.color.mix.cljs$lang$applyTo = (function (seq44164){
var G__44165 = cljs.core.first.call(null,seq44164);
var seq44164__$1 = cljs.core.next.call(null,seq44164);
var G__44166 = cljs.core.first.call(null,seq44164__$1);
var seq44164__$2 = cljs.core.next.call(null,seq44164__$1);
return mranderson047.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic(G__44165,G__44166,seq44164__$2);
});

mranderson047.garden.v1v3v3.garden.color.mix.cljs$lang$maxFixedArity = (2);

/**
 * Return the complement of a color.
 */
mranderson047.garden.v1v3v3.garden.color.complement = (function mranderson047$garden$v1v3v3$garden$color$complement(color){
return mranderson047.garden.v1v3v3.garden.color.rotate_hue.call(null,color,(180));
});
mranderson047.garden.v1v3v3.garden.color.hue_rotations = (function mranderson047$garden$v1v3v3$garden$color$hue_rotations(var_args){
var args__29599__auto__ = [];
var len__29592__auto___44174 = arguments.length;
var i__29593__auto___44175 = (0);
while(true){
if((i__29593__auto___44175 < len__29592__auto___44174)){
args__29599__auto__.push((arguments[i__29593__auto___44175]));

var G__44176 = (i__29593__auto___44175 + (1));
i__29593__auto___44175 = G__44176;
continue;
} else {
}
break;
}

var argseq__29600__auto__ = ((((1) < args__29599__auto__.length))?(new cljs.core.IndexedSeq(args__29599__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29600__auto__);
});

mranderson047.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.call(null,cljs.core.partial.call(null,mranderson047.garden.v1v3v3.garden.color.rotate_hue,color),amounts);
});

mranderson047.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$applyTo = (function (seq44172){
var G__44173 = cljs.core.first.call(null,seq44172);
var seq44172__$1 = cljs.core.next.call(null,seq44172);
return mranderson047.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(G__44173,seq44172__$1);
});

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
mranderson047.garden.v1v3v3.garden.color.analogous = (function mranderson047$garden$v1v3v3$garden$color$analogous(var_args){
var G__44178 = arguments.length;
switch (G__44178) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson047.garden.v1v3v3.garden.color.analogous.call(null,color,true);
});

mranderson047.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return mranderson047.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),sign.call(null,(30)),sign.call(null,(60)));
});

mranderson047.garden.v1v3v3.garden.color.analogous.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
mranderson047.garden.v1v3v3.garden.color.triad = (function mranderson047$garden$v1v3v3$garden$color$triad(color){
return mranderson047.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),(120),(240));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
mranderson047.garden.v1v3v3.garden.color.split_complement = (function mranderson047$garden$v1v3v3$garden$color$split_complement(var_args){
var G__44181 = arguments.length;
switch (G__44181) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson047.garden.v1v3v3.garden.color.split_complement.call(null,color,(130));
});

mranderson047.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = mranderson047.garden.v1v3v3.garden.util.clip.call(null,(1),(179),distance_from_complement);
return mranderson047.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),d,(- d));
});

mranderson047.garden.v1v3v3.garden.color.split_complement.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
mranderson047.garden.v1v3v3.garden.color.tetrad = (function mranderson047$garden$v1v3v3$garden$color$tetrad(var_args){
var G__44184 = arguments.length;
switch (G__44184) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson047.garden.v1v3v3.garden.color.tetrad.call(null,color,(90));
});

mranderson047.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = mranderson047.garden.v1v3v3.garden.util.clip.call(null,(1),(90),Math.abs(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle)));
var color_2 = mranderson047.garden.v1v3v3.garden.color.rotate_hue.call(null,color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.color.rotate_hue.call(null,color,(0)),mranderson047.garden.v1v3v3.garden.color.complement.call(null,color),color_2,mranderson047.garden.v1v3v3.garden.color.complement.call(null,color_2)], null);
});

mranderson047.garden.v1v3v3.garden.color.tetrad.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
mranderson047.garden.v1v3v3.garden.color.shades = (function mranderson047$garden$v1v3v3$garden$color$shades(var_args){
var G__44187 = arguments.length;
switch (G__44187) {
case 1:
return mranderson047.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson047.garden.v1v3v3.garden.color.shades.call(null,color,(10));
});

mranderson047.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = mranderson047.garden.v1v3v3.garden.color.as_hsl.call(null,color);
var iter__29231__auto__ = ((function (c){
return (function mranderson047$garden$v1v3v3$garden$color$iter__44188(s__44189){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__44189__$1 = s__44189;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44189__$1);
if(temp__4657__auto__){
var s__44189__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44189__$2)){
var c__29229__auto__ = cljs.core.chunk_first.call(null,s__44189__$2);
var size__29230__auto__ = cljs.core.count.call(null,c__29229__auto__);
var b__44191 = cljs.core.chunk_buffer.call(null,size__29230__auto__);
if((function (){var i__44190 = (0);
while(true){
if((i__44190 < size__29230__auto__)){
var i = cljs.core._nth.call(null,c__29229__auto__,i__44190);
cljs.core.chunk_append.call(null,b__44191,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__44193 = (i__44190 + (1));
i__44190 = G__44193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44191),mranderson047$garden$v1v3v3$garden$color$iter__44188.call(null,cljs.core.chunk_rest.call(null,s__44189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44191),null);
}
} else {
var i = cljs.core.first.call(null,s__44189__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),mranderson047$garden$v1v3v3$garden$color$iter__44188.call(null,cljs.core.rest.call(null,s__44189__$2)));
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__29231__auto__.call(null,cljs.core.range.call(null,(1),Math.floor((100.0 / step))));
});

mranderson047.garden.v1v3v3.garden.color.shades.cljs$lang$maxFixedArity = 2;

mranderson047.garden.v1v3v3.garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
mranderson047.garden.v1v3v3.garden.color.ex_info_color_name = (function mranderson047$garden$v1v3v3$garden$color$ex_info_color_name(n){
return cljs.core.ex_info.call(null,["Unknown color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,n))," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set.call(null,cljs.core.keys.call(null,mranderson047.garden.v1v3v3.garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
mranderson047.garden.v1v3v3.garden.color.color_name__GT_color = cljs.core.memoize.call(null,(function (k){
return mranderson047.garden.v1v3v3.garden.color.color_name__GT_hex.call(null,k);
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
mranderson047.garden.v1v3v3.garden.color.from_name = (function mranderson047$garden$v1v3v3$garden$color$from_name(n){
var temp__4655__auto__ = mranderson047.garden.v1v3v3.garden.color.color_name__GT_color.call(null,cljs.core.keyword.call(null,n));
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
return h;
} else {
throw mranderson047.garden.v1v3v3.garden.color.ex_info_color_name.call(null,n);
}
});
mranderson047.garden.v1v3v3.garden.color.scale_color_value = (function mranderson047$garden$v1v3v3$garden$color$scale_color_value(value,amount){
return (value + (((amount > (0)))?(((100) - value) * (amount / (100))):((value * amount) / (100))));
});
/**
 * Scale the lightness of a color by amount
 */
mranderson047.garden.v1v3v3.garden.color.scale_lightness = (function mranderson047$garden$v1v3v3$garden$color$scale_lightness(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),mranderson047.garden.v1v3v3.garden.color.scale_color_value,amount);
});
/**
 * Scale the saturation of a color by amount
 */
mranderson047.garden.v1v3v3.garden.color.scale_saturation = (function mranderson047$garden$v1v3v3$garden$color$scale_saturation(color,amount){
return mranderson047.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),mranderson047.garden.v1v3v3.garden.color.scale_color_value,amount);
});
mranderson047.garden.v1v3v3.garden.color.decrown_hex = (function mranderson047$garden$v1v3v3$garden$color$decrown_hex(hex){
return clojure.string.replace.call(null,hex,/^#/,"");
});
mranderson047.garden.v1v3v3.garden.color.crown_hex = (function mranderson047$garden$v1v3v3$garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
mranderson047.garden.v1v3v3.garden.color.expand_hex = (function mranderson047$garden$v1v3v3$garden$color$expand_hex(hex){
var _ = mranderson047.garden.v1v3v3.garden.color.decrown_hex.call(null,hex);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,_))){
return clojure.string.join.call(null,cljs.core.mapcat.call(null,cljs.core.vector,_,_));
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,_))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,(6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
mranderson047.garden.v1v3v3.garden.color.hex__GT_long = (function mranderson047$garden$v1v3v3$garden$color$hex__GT_long(hex){
return parseInt(mranderson047.garden.v1v3v3.garden.color.expand_hex.call(null,clojure.string.replace.call(null,hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
mranderson047.garden.v1v3v3.garden.color.long__GT_hex = (function mranderson047$garden$v1v3v3$garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
mranderson047.garden.v1v3v3.garden.color.weighted_mix = (function mranderson047$garden$v1v3v3$garden$color$weighted_mix(color_1,color_2,weight){
var vec__44195 = cljs.core.map.call(null,(function (p1__44194_SHARP_){
return (p1__44194_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.call(null,vec__44195,(0),null);
var weight_2 = cljs.core.nth.call(null,vec__44195,(1),null);
var vec__44198 = cljs.core.map.call(null,cljs.core.comp.call(null,mranderson047.garden.v1v3v3.garden.color.hex__GT_long,mranderson047.garden.v1v3v3.garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.call(null,vec__44198,(0),null);
var long_2 = cljs.core.nth.call(null,vec__44198,(1),null);
return mranderson047.garden.v1v3v3.garden.color.crown_hex.call(null,mranderson047.garden.v1v3v3.garden.color.expand_hex.call(null,mranderson047.garden.v1v3v3.garden.color.long__GT_hex.call(null,((long_1 * weight_1) + (long_2 * weight_2)))));
});

//# sourceMappingURL=color.js.map?rel=1518582108253
