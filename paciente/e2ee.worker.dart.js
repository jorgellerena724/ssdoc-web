(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.jk(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.F(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eH(b)
return new s(c,this)}:function(){if(s===null)s=A.eH(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eH(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
eM(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dX(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.eJ==null){A.j9()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.c(A.fe("Return interceptor for "+A.b(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.dy
if(o==null)o=$.dy=A.dW(n)
p=q[o]}if(p!=null)return p
p=A.jf(a)
if(p!=null)return p
if(typeof a=="function")return B.O
s=Object.getPrototypeOf(a)
if(s==null)return B.C
if(s===Object.prototype)return B.C
if(typeof q=="function"){o=$.dy
if(o==null)o=$.dy=A.dW(n)
Object.defineProperty(q,o,{value:B.r,enumerable:false,writable:true,configurable:true})
return B.r}return B.r},
hn(a,b){if(a<0||a>4294967295)throw A.c(A.Z(a,0,4294967295,"length",null))
return J.ho(new Array(a),b)},
ho(a,b){var s=A.F(a,b.k("w<0>"))
s.$flags=1
return s},
aw(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b7.prototype
return J.c0.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.b8.prototype
if(typeof a=="boolean")return J.c_.prototype
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dX(a)},
dT(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dX(a)},
dU(a){if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dX(a)},
j5(a){if(typeof a=="number")return J.b9.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.aM.prototype
return a},
dV(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.W.prototype
if(typeof a=="symbol")return J.aD.prototype
if(typeof a=="bigint")return J.aC.prototype
return a}if(a instanceof A.h)return a
return J.dX(a)},
cD(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aw(a).E(a,b)},
eP(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.jd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dT(a).i(a,b)},
eQ(a,b,c){return J.dV(a).bx(a,b,c)},
aZ(a,b){return J.dU(a).aT(a,b)},
el(a){return J.dV(a).aU(a)},
eR(a,b,c){return J.dV(a).a3(a,b,c)},
ha(a,b){return J.dU(a).S(a,b)},
em(a){return J.dV(a).gG(a)},
cE(a){return J.aw(a).gq(a)},
en(a){return J.dU(a).gt(a)},
b_(a){return J.dT(a).gl(a)},
eo(a){return J.aw(a).gp(a)},
hb(a,b,c){return J.dU(a).U(a,b,c)},
eS(a){return J.j5(a).c8(a)},
K(a){return J.aw(a).j(a)},
bY:function bY(){},
c_:function c_(){},
b8:function b8(){},
ba:function ba(){},
a5:function a5(){},
cf:function cf(){},
aM:function aM(){},
W:function W(){},
aC:function aC(){},
aD:function aD(){},
w:function w(a){this.$ti=a},
bZ:function bZ(){},
cW:function cW(a){this.$ti=a},
bQ:function bQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b9:function b9(){},
b7:function b7(){},
c0:function c0(){},
aB:function aB(){}},A={et:function et(){},
hp(a){return new A.bc("Field '"+a+"' has not been initialized.")},
fc(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hI(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dP(a,b,c){return a},
eK(a){var s,r
for(s=$.au.length,r=0;r<s;++r)if(a===$.au[r])return!0
return!1},
hr(a,b,c,d){if(t.V.b(a))return new A.b3(a,b,c.k("@<0>").A(d).k("b3<1,2>"))
return new A.X(a,b,c.k("@<0>").A(d).k("X<1,2>"))},
bw:function bw(a){this.a=0
this.b=a},
bc:function bc(a){this.a=a},
d3:function d3(){},
i:function i(){},
a7:function a7(){},
aE:function aE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(a,b){this.a=a
this.b=b},
b6:function b6(){},
fV(a){var s=A.fU(a)
if(s!=null)return s
return"minified:"+a},
jd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.E.b(a)},
b(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.K(a)
return s},
bn(a){var s,r=$.f5
if(r==null)r=$.f5=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cg(a){var s,r,q,p
if(a instanceof A.h)return A.J(A.aX(a),null)
s=J.aw(a)
if(s===B.N||s===B.P||t.o.b(a)){r=B.u(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.J(A.aX(a),null)},
hC(a){var s,r,q
if(typeof a=="number"||A.dM(a))return J.K(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ag)return a.j(0)
s=$.h9()
for(r=0;r<1;++r){q=s[r].ca(a)
if(q!=null)return q}return"Instance of '"+A.cg(a)+"'"},
hD(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
I(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
hB(a){return a.c?A.I(a).getUTCFullYear()+0:A.I(a).getFullYear()+0},
hz(a){return a.c?A.I(a).getUTCMonth()+1:A.I(a).getMonth()+1},
hv(a){return a.c?A.I(a).getUTCDate()+0:A.I(a).getDate()+0},
hw(a){return a.c?A.I(a).getUTCHours()+0:A.I(a).getHours()+0},
hy(a){return a.c?A.I(a).getUTCMinutes()+0:A.I(a).getMinutes()+0},
hA(a){return a.c?A.I(a).getUTCSeconds()+0:A.I(a).getSeconds()+0},
hx(a){return a.c?A.I(a).getUTCMilliseconds()+0:A.I(a).getMilliseconds()+0},
hu(a){var s=a.$thrownJsError
if(s==null)return null
return A.ad(s)},
f6(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.y(a,s)
a.$thrownJsError=s
s.stack=b.j(0)}},
eI(a,b){var s,r="index"
if(!A.fy(b))return new A.T(!0,b,r,null)
s=J.b_(a)
if(b<0||b>=s)return A.eZ(b,s,a,r)
return A.hE(b,r)},
j1(a,b,c){if(a<0||a>c)return A.Z(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.Z(b,a,c,"end",null)
return new A.T(!0,b,"end",null)},
c(a){return A.y(a,new Error())},
y(a,b){var s
if(a==null)a=new A.a_()
b.dartException=a
s=A.jl
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
jl(){return J.K(this.dartException)},
O(a,b){throw A.y(a,b==null?new Error():b)},
V(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.O(A.il(a,b,c),s)},
il(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.bq("'"+s+"': Cannot "+o+" "+l+k+n)},
bP(a){throw A.c(A.b2(a))},
a0(a){var s,r,q,p,o,n
a=A.jj(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.F([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.d9(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
da(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
fd(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
eu(a,b){var s=b==null,r=s?null:b.method
return new A.c1(a,r,s?null:b.receiver)},
G(a){if(a==null)return new A.d2(a)
if(a instanceof A.b5)return A.ae(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ae(a,a.dartException)
return A.iV(a)},
ae(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
iV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.h.a2(r,16)&8191)===10)switch(q){case 438:return A.ae(a,A.eu(A.b(s)+" (Error "+q+")",null))
case 445:case 5007:A.b(s)
return A.ae(a,new A.bm())}}if(a instanceof TypeError){p=$.fX()
o=$.fY()
n=$.fZ()
m=$.h_()
l=$.h2()
k=$.h3()
j=$.h1()
$.h0()
i=$.h5()
h=$.h4()
g=p.B(s)
if(g!=null)return A.ae(a,A.eu(s,g))
else{g=o.B(s)
if(g!=null){g.method="call"
return A.ae(a,A.eu(s,g))}else if(n.B(s)!=null||m.B(s)!=null||l.B(s)!=null||k.B(s)!=null||j.B(s)!=null||m.B(s)!=null||i.B(s)!=null||h.B(s)!=null)return A.ae(a,new A.bm())}return A.ae(a,new A.cm(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bp()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ae(a,new A.T(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bp()
return a},
ad(a){var s
if(a instanceof A.b5)return a.b
if(a==null)return new A.bE(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bE(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ee(a){if(a==null)return J.cE(a)
if(typeof a=="object")return A.bn(a)
return J.cE(a)},
j2(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.u(0,a[s],a[r])}return b},
iw(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.M("Unsupported number of arguments for wrapped closure"))},
bO(a,b){var s=a.$identity
if(!!s)return s
s=A.j_(a,b)
a.$identity=s
return s},
j_(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.iw)},
hi(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.d5().constructor.prototype):Object.create(new A.b0(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.he(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
he(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hc)}throw A.c("Error in functionType of tearoff")},
hf(a,b,c,d){var s=A.eW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eX(a,b,c,d){if(c)return A.hh(a,b,d)
return A.hf(b.length,d,a,b)},
hg(a,b,c,d){var s=A.eW,r=A.hd
switch(b?-1:a){case 0:throw A.c(new A.ch("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hh(a,b,c){var s,r
if($.eU==null)$.eU=A.eT("interceptor")
if($.eV==null)$.eV=A.eT("receiver")
s=b.length
r=A.hg(s,c,a,b)
return r},
eH(a){return A.hi(a)},
hc(a,b){return A.dH(v.typeUniverse,A.aX(a.a),b)},
eW(a){return a.a},
hd(a){return a.b},
eT(a){var s,r,q,p=new A.b0("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.c(A.a4("Field name "+a+" not found.",null))},
dW(a){return v.getIsolateTag(a)},
jM(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jf(a){var s,r,q,p,o,n=$.fO.$1(a),m=$.dR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e1[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fI.$2(a,n)
if(q!=null){m=$.dR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e1[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ed(s)
$.dR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e1[n]=s
return s}if(p==="-"){o=A.ed(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.fR(a,s)
if(p==="*")throw A.c(A.fe(n))
if(v.leafTags[n]===true){o=A.ed(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.fR(a,s)},
fR(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ed(a){return J.eM(a,!1,null,!!a.$iH)},
jg(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ed(s)
else return J.eM(s,c,null,null)},
j9(){if(!0===$.eJ)return
$.eJ=!0
A.ja()},
ja(){var s,r,q,p,o,n,m,l
$.dR=Object.create(null)
$.e1=Object.create(null)
A.j8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.fS.$1(o)
if(n!=null){m=A.jg(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
j8(){var s,r,q,p,o,n,m=B.F()
m=A.aV(B.G,A.aV(B.H,A.aV(B.v,A.aV(B.v,A.aV(B.I,A.aV(B.J,A.aV(B.K(B.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fO=new A.dZ(p)
$.fI=new A.e_(o)
$.fS=new A.e0(n)},
aV(a,b){return a(b)||b},
j0(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
jj(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bo:function bo(){},
d9:function d9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bm:function bm(){},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a){this.a=a},
d2:function d2(a){this.a=a},
b5:function b5(a,b){this.a=a
this.b=b},
bE:function bE(a){this.a=a
this.b=null},
ag:function ag(){},
cH:function cH(){},
cI:function cI(){},
d8:function d8(){},
d5:function d5(){},
b0:function b0(a,b){this.a=a
this.b=b},
ch:function ch(a){this.a=a},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bd:function bd(a,b){this.a=a
this.$ti=b},
c3:function c3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
ab(a){return a},
hs(a){return new DataView(new ArrayBuffer(a))},
f3(a){return new Uint8Array(a)},
E(a,b,c){return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ar(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.eI(b,a))},
ik(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.c(A.j1(a,b,c))
if(b==null)return c
return b},
aI:function aI(){},
aH:function aH(){},
bj:function bj(){},
cz:function cz(a){this.a=a},
bg:function bg(){},
aJ:function aJ(){},
bh:function bh(){},
bi:function bi(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
bk:function bk(){},
bl:function bl(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
ev(a,b){var s=b.c
return s==null?b.c=A.bJ(a,"U",[b.x]):s},
f9(a){var s=a.w
if(s===6||s===7)return A.f9(a.x)
return s===11||s===12},
hF(a){return a.as},
aW(a){return A.dG(v.typeUniverse,a,!1)},
at(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.at(a1,s,a3,a4)
if(r===s)return a2
return A.fn(a1,r,!0)
case 7:s=a2.x
r=A.at(a1,s,a3,a4)
if(r===s)return a2
return A.fm(a1,r,!0)
case 8:q=a2.y
p=A.aU(a1,q,a3,a4)
if(p===q)return a2
return A.bJ(a1,a2.x,p)
case 9:o=a2.x
n=A.at(a1,o,a3,a4)
m=a2.y
l=A.aU(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.ez(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.aU(a1,j,a3,a4)
if(i===j)return a2
return A.fo(a1,k,i)
case 11:h=a2.x
g=A.at(a1,h,a3,a4)
f=a2.y
e=A.iS(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fl(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.aU(a1,d,a3,a4)
o=a2.x
n=A.at(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.eA(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.c(A.bS("Attempted to substitute unexpected RTI kind "+a0))}},
aU(a,b,c,d){var s,r,q,p,o=b.length,n=A.dI(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.at(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
iT(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dI(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.at(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
iS(a,b,c,d){var s,r=b.a,q=A.aU(a,r,c,d),p=b.b,o=A.aU(a,p,c,d),n=b.c,m=A.iT(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cu()
s.a=q
s.b=o
s.c=m
return s},
F(a,b){a[v.arrayRti]=b
return a},
fK(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.j7(s)
return a.$S()}return null},
jb(a,b){var s
if(A.f9(b))if(a instanceof A.ag){s=A.fK(a)
if(s!=null)return s}return A.aX(a)},
aX(a){if(a instanceof A.h)return A.as(a)
if(Array.isArray(a))return A.aR(a)
return A.eE(J.aw(a))},
aR(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
as(a){var s=a.$ti
return s!=null?s:A.eE(a)},
eE(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.it(a,s)},
it(a,b){var s=a instanceof A.ag?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.i8(v.typeUniverse,s.name)
b.$ccache=r
return r},
j7(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dG(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
j6(a){return A.ac(A.as(a))},
iR(a){var s=a instanceof A.ag?A.fK(a):null
if(s!=null)return s
if(t.R.b(a))return J.eo(a).a
if(Array.isArray(a))return A.aR(a)
return A.aX(a)},
ac(a){var s=a.r
return s==null?a.r=new A.dF(a):s},
P(a){return A.ac(A.dG(v.typeUniverse,a,!1))},
is(a){var s=this
s.b=A.iP(s)
return s.b(a)},
iP(a){var s,r,q,p
if(a===t.K)return A.iC
if(A.ax(a))return A.iG
s=a.w
if(s===6)return A.iq
if(s===1)return A.fA
if(s===7)return A.ix
r=A.iO(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.ax)){a.f="$i"+q
if(q==="p")return A.iA
if(a===t.m)return A.iz
return A.iF}}else if(s===10){p=A.j0(a.x,a.y)
return p==null?A.fA:p}return A.io},
iO(a){if(a.w===8){if(a===t.S)return A.fy
if(a===t.i||a===t.n)return A.iB
if(a===t.N)return A.iE
if(a===t.y)return A.dM}return null},
ir(a){var s=this,r=A.im
if(A.ax(s))r=A.ig
else if(s===t.K)r=A.aa
else if(A.aY(s)){r=A.ip
if(s===t.a3)r=A.ic
else if(s===t.T)r=A.eD
else if(s===t.cG)r=A.ia
else if(s===t.ae)r=A.ie
else if(s===t.dd)r=A.ib
else if(s===t.aQ)r=A.fs}else if(s===t.S)r=A.aq
else if(s===t.N)r=A.k
else if(s===t.y)r=A.eB
else if(s===t.n)r=A.id
else if(s===t.i)r=A.eC
else if(s===t.m)r=A.bL
s.a=r
return s.a(a)},
io(a){var s=this
if(a==null)return A.aY(s)
return A.je(v.typeUniverse,A.jb(a,s),s)},
iq(a){if(a==null)return!0
return this.x.b(a)},
iF(a){var s,r=this
if(a==null)return A.aY(r)
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.aw(a)[s]},
iA(a){var s,r=this
if(a==null)return A.aY(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.h)return!!a[s]
return!!J.aw(a)[s]},
iz(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
fz(a){if(typeof a=="object"){if(a instanceof A.h)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
im(a){var s=this
if(a==null){if(A.aY(s))return a}else if(s.b(a))return a
throw A.y(A.ft(a,s),new Error())},
ip(a){var s=this
if(a==null||s.b(a))return a
throw A.y(A.ft(a,s),new Error())},
ft(a,b){return new A.bH("TypeError: "+A.fg(a,A.J(b,null)))},
fg(a,b){return A.cL(a)+": type '"+A.J(A.iR(a),null)+"' is not a subtype of type '"+b+"'"},
N(a,b){return new A.bH("TypeError: "+A.fg(a,b))},
ix(a){var s=this
return s.x.b(a)||A.ev(v.typeUniverse,s).b(a)},
iC(a){return a!=null},
aa(a){if(a!=null)return a
throw A.y(A.N(a,"Object"),new Error())},
iG(a){return!0},
ig(a){return a},
fA(a){return!1},
dM(a){return!0===a||!1===a},
eB(a){if(!0===a)return!0
if(!1===a)return!1
throw A.y(A.N(a,"bool"),new Error())},
ia(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.y(A.N(a,"bool?"),new Error())},
eC(a){if(typeof a=="number")return a
throw A.y(A.N(a,"double"),new Error())},
ib(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.N(a,"double?"),new Error())},
fy(a){return typeof a=="number"&&Math.floor(a)===a},
aq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.y(A.N(a,"int"),new Error())},
ic(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.y(A.N(a,"int?"),new Error())},
iB(a){return typeof a=="number"},
id(a){if(typeof a=="number")return a
throw A.y(A.N(a,"num"),new Error())},
ie(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.N(a,"num?"),new Error())},
iE(a){return typeof a=="string"},
k(a){if(typeof a=="string")return a
throw A.y(A.N(a,"String"),new Error())},
eD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.y(A.N(a,"String?"),new Error())},
bL(a){if(A.fz(a))return a
throw A.y(A.N(a,"JSObject"),new Error())},
fs(a){if(a==null)return a
if(A.fz(a))return a
throw A.y(A.N(a,"JSObject?"),new Error())},
fF(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.J(a[q],b)
return s},
iK(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fF(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.J(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fu(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.F([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.J(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.J(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.J(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.J(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.J(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
J(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.J(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.J(a.x,b)+">"
if(m===8){p=A.iU(a.x)
o=a.y
return o.length>0?p+("<"+A.fF(o,b)+">"):p}if(m===10)return A.iK(a,b)
if(m===11)return A.fu(a,b,null)
if(m===12)return A.fu(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
iU(a){var s=A.fU(a)
if(s!=null)return s
return"minified:"+a},
i9(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
i8(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dG(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bK(a,5,"#")
q=A.dI(s)
for(p=0;p<s;++p)q[p]=r
o=A.bJ(a,b,q)
n[b]=o
return o}else return m},
i6(a,b){return A.fq(a.tR,b)},
i5(a,b){return A.fq(a.eT,b)},
dG(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fp(a,null,b,!1)
r.set(b,s)
return s},
dH(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fp(a,b,c,!0)
q.set(c,r)
return r},
i7(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.ez(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
fp(a,b,c,d){return A.hY(A.hS(a,b,c,d))},
a9(a,b){b.a=A.ir
b.b=A.is
return b},
bK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.R(null,null)
s.w=b
s.as=c
r=A.a9(a,s)
a.eC.set(c,r)
return r},
fn(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.i3(a,b,r,c)
a.eC.set(r,s)
return s},
i3(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.ax(b))if(!(b===t.P||b===t.u))if(s!==6)r=s===7&&A.aY(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.R(null,null)
q.w=6
q.x=b
q.as=c
return A.a9(a,q)},
fm(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.i1(a,b,r,c)
a.eC.set(r,s)
return s},
i1(a,b,c,d){var s,r
if(d){s=b.w
if(A.ax(b)||b===t.K)return b
else if(s===1)return A.bJ(a,"U",[b])
else if(b===t.P||b===t.u)return t.bc}r=new A.R(null,null)
r.w=7
r.x=b
r.as=c
return A.a9(a,r)},
i4(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.R(null,null)
s.w=13
s.x=b
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
bI(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
i0(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.R(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.a9(a,r)
a.eC.set(p,q)
return q},
ez(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.R(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.a9(a,o)
a.eC.set(q,n)
return n},
fo(a,b,c){var s,r,q="+"+(b+"("+A.bI(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.R(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.a9(a,s)
a.eC.set(q,r)
return r},
fl(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bI(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bI(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.i0(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.R(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.a9(a,p)
a.eC.set(r,o)
return o},
eA(a,b,c,d){var s,r=b.as+("<"+A.bI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.i2(a,b,c,r,d)
a.eC.set(r,s)
return s},
i2(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dI(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.at(a,b,r,0)
m=A.aU(a,c,r,0)
return A.eA(a,n,m,c!==m)}}l=new A.R(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.a9(a,l)},
hS(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hY(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.hU(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.fj(a,r,l,k,!1)
else if(q===46)r=A.fj(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.ap(a.u,a.e,k.pop()))
break
case 94:k.push(A.i4(a.u,k.pop()))
break
case 35:k.push(A.bK(a.u,5,"#"))
break
case 64:k.push(A.bK(a.u,2,"@"))
break
case 126:k.push(A.bK(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.hW(a,k)
break
case 38:A.hV(a,k)
break
case 63:p=a.u
k.push(A.fn(p,A.ap(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fm(p,A.ap(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.hT(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fk(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.hZ(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.ap(a.u,a.e,m)},
hU(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
fj(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.i9(s,o.x)[p]
if(n==null)A.O('No "'+p+'" in "'+A.hF(o)+'"')
d.push(A.dH(s,o,n))}else d.push(p)
return m},
hW(a,b){var s,r=a.u,q=A.fi(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bJ(r,p,q))
else{s=A.ap(r,a.e,p)
switch(s.w){case 11:b.push(A.eA(r,s,q,a.n))
break
default:b.push(A.ez(r,s,q))
break}}},
hT(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fi(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.ap(p,a.e,o)
q=new A.cu()
q.a=s
q.b=n
q.c=m
b.push(A.fl(p,r,q))
return
case-4:b.push(A.fo(p,b.pop(),s))
return
default:throw A.c(A.bS("Unexpected state under `()`: "+A.b(o)))}},
hV(a,b){var s=b.pop()
if(0===s){b.push(A.bK(a.u,1,"0&"))
return}if(1===s){b.push(A.bK(a.u,4,"1&"))
return}throw A.c(A.bS("Unexpected extended operation "+A.b(s)))},
fi(a,b){var s=b.splice(a.p)
A.fk(a.u,a.e,s)
a.p=b.pop()
return s},
ap(a,b,c){if(typeof c=="string")return A.bJ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.hX(a,b,c)}else return c},
fk(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ap(a,b,c[s])},
hZ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ap(a,b,c[s])},
hX(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.c(A.bS("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.c(A.bS("Bad index "+c+" for "+b.j(0)))},
je(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.x(a,b,null,c,null)
r.set(c,s)}return s},
x(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.ax(d))return!0
s=b.w
if(s===4)return!0
if(A.ax(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.x(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.u){if(q===7)return A.x(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.x(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.x(a,b.x,c,d,e))return!1
return A.x(a,A.ev(a,b),c,d,e)}if(s===6)return A.x(a,p,c,d,e)&&A.x(a,b.x,c,d,e)
if(q===7){if(A.x(a,b,c,d.x,e))return!0
return A.x(a,b,c,A.ev(a,d),e)}if(q===6)return A.x(a,b,c,p,e)||A.x(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.M)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.x(a,j,c,i,e)||!A.x(a,i,e,j,c))return!1}return A.fx(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.fx(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.iy(a,b,c,d,e)}if(o&&q===10)return A.iD(a,b,c,d,e)
return!1},
fx(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.x(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.x(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.x(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.x(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.x(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
iy(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.dH(a,b,r[o])
return A.fr(a,p,null,c,d.y,e)}return A.fr(a,b.y,null,c,d.y,e)},
fr(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.x(a,b[s],d,e[s],f))return!1
return!0},
iD(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.x(a,r[s],c,q[s],e))return!1
return!0},
aY(a){var s=a.w,r=!0
if(!(a===t.P||a===t.u))if(!A.ax(a))if(s!==6)r=s===7&&A.aY(a.x)
return r},
ax(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fq(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dI(a){return a>0?new Array(a):v.typeUniverse.sEA},
R:function R(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cu:function cu(){this.c=this.b=this.a=null},
dF:function dF(a){this.a=a},
ct:function ct(){},
bH:function bH(a){this.a=a},
hJ(){var s,r,q
if(self.scheduleImmediate!=null)return A.iW()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.bO(new A.df(s),1)).observe(r,{childList:true})
return new A.de(s,r,q)}else if(self.setImmediate!=null)return A.iX()
return A.iY()},
hK(a){self.scheduleImmediate(A.bO(new A.dg(a),0))},
hL(a){self.setImmediate(A.bO(new A.dh(a),0))},
hM(a){A.i_(0,a)},
i_(a,b){var s=new A.dD()
s.bh(a,b)
return s},
C(a){return new A.co(new A.u($.n,a.k("u<0>")),a.k("co<0>"))},
B(a,b){a.$2(0,null)
b.b=!0
return b.a},
j(a,b){A.ih(a,b)},
A(a,b){b.al(a)},
z(a,b){b.am(A.G(a),A.ad(a))},
ih(a,b){var s,r,q=new A.dK(b),p=new A.dL(b)
if(a instanceof A.u)a.aS(q,p,t.z)
else{s=t.z
if(a instanceof A.u)a.b5(q,p,s)
else{r=new A.u($.n,t.r)
r.a=8
r.c=a
r.aS(q,p,s)}}},
D(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.n.ar(new A.dO(s))},
eq(a){var s
if(t.C.b(a)){s=a.gN()
if(s!=null)return s}return B.n},
iu(a,b){if($.n===B.f)return null
return null},
iv(a,b){if($.n!==B.f)A.iu(a,b)
if(b==null)if(t.C.b(a)){b=a.gN()
if(b==null){A.f6(a,B.n)
b=B.n}}else b=B.n
else if(t.C.b(a))A.f6(a,b)
return new A.L(a,b)},
ew(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.fa()
b.ac(new A.L(new A.T(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.aQ(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.O()
b.Z(p.a)
A.ao(b,q)
return}b.a^=2
A.aT(null,null,b.b,new A.dq(p,b))},
ao(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.cA(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.ao(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.cA(m.a,m.b)
return}j=$.n
if(j!==k)$.n=k
else j=null
f=f.c
if((f&15)===8)new A.du(s,g,p).$0()
else if(q){if((f&1)!==0)new A.dt(s,m).$0()}else if((f&2)!==0)new A.ds(g,s).$0()
if(j!=null)$.n=j
f=s.c
if(f instanceof A.u){r=s.a.$ti
r=r.k("U<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a0(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.ew(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a0(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
iL(a,b){if(t.Q.b(a))return b.ar(a)
if(t.v.b(a))return a
throw A.c(A.ep(a,"onError",u.c))},
iI(){var s,r
for(s=$.aS;s!=null;s=$.aS){$.bN=null
r=s.b
$.aS=r
if(r==null)$.bM=null
s.a.$0()}},
iQ(){$.eF=!0
try{A.iI()}finally{$.bN=null
$.eF=!1
if($.aS!=null)$.eO().$1(A.fJ())}},
fH(a){var s=new A.cp(a),r=$.bM
if(r==null){$.aS=$.bM=s
if(!$.eF)$.eO().$1(A.fJ())}else $.bM=r.b=s},
iN(a){var s,r,q,p=$.aS
if(p==null){A.fH(a)
$.bN=$.bM
return}s=new A.cp(a)
r=$.bN
if(r==null){s.b=p
$.aS=$.bN=s}else{q=r.b
s.b=q
$.bN=r.b=s
if(q==null)$.bM=s}},
fT(a){var s=null,r=$.n
if(B.f===r){A.aT(s,s,B.f,a)
return}A.aT(s,s,r,r.aV(a))},
jv(a){A.dP(a,"stream",t.K)
return new A.cx()},
fG(a){return},
hR(a,b){if(b==null)b=A.iZ()
if(t.aD.b(b))return a.ar(b)
if(t.bo.b(b))return b
throw A.c(A.a4("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
iJ(a,b){A.cA(a,b)},
cA(a,b){A.iN(new A.dN(a,b))},
fD(a,b,c,d){var s,r=$.n
if(r===c)return d.$0()
$.n=c
s=r
try{r=d.$0()
return r}finally{$.n=s}},
fE(a,b,c,d,e){var s,r=$.n
if(r===c)return d.$1(e)
$.n=c
s=r
try{r=d.$1(e)
return r}finally{$.n=s}},
iM(a,b,c,d,e,f){var s,r=$.n
if(r===c)return d.$2(e,f)
$.n=c
s=r
try{r=d.$2(e,f)
return r}finally{$.n=s}},
aT(a,b,c,d){if(B.f!==c){d=c.aV(d)
d=d}A.fH(d)},
df:function df(a){this.a=a},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
dD:function dD(){},
dE:function dE(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=!1
this.$ti=b},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
dO:function dO(a){this.a=a},
L:function L(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.$ti=b},
bt:function bt(a,b,c,d){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=null},
aO:function aO(){},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
dC:function dC(a,b){this.a=a
this.b=b},
cq:function cq(){},
bs:function bs(a,b){this.a=a
this.$ti=b},
aP:function aP(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
u:function u(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
dm:function dm(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b){this.a=a
this.b=b},
dw:function dw(a){this.a=a},
dt:function dt(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
cp:function cp(a){this.a=a
this.b=null},
aL:function aL(){},
d6:function d6(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
bu:function bu(){},
bv:function bv(){},
an:function an(){},
bF:function bF(){},
cs:function cs(){},
cr:function cr(a){this.b=a
this.a=null},
cw:function cw(){this.a=0
this.c=this.b=null},
dz:function dz(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=1
this.b=a
this.c=null},
cx:function cx(){},
dJ:function dJ(){},
dA:function dA(){},
dB:function dB(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
this.b=b},
fh(a,b){var s=a[b]
return s===a?null:s},
ey(a,b,c){if(c==null)a[b]=a
else a[b]=c},
ex(){var s=Object.create(null)
A.ey(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
f(a,b,c){return A.j2(a,new A.aj(b.k("@<0>").A(c).k("aj<1,2>")))},
be(a,b){return new A.aj(a.k("@<0>").A(b).k("aj<1,2>"))},
f2(a){var s,r
if(A.eK(a))return"{...}"
s=new A.cj("")
try{r={}
$.au.push(a)
s.a+="{"
r.a=!0
a.ao(0,new A.d0(r,s))
s.a+="}"}finally{$.au.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
by:function by(){},
aQ:function aQ(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bz:function bz(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
t:function t(){},
ak:function ak(){},
d0:function d0(a,b){this.a=a
this.b=b},
hQ(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m=h>>>2,l=3-(h&3)
for(s=f.$flags|0,r=c,q=0;r<d;++r){p=b[r]
q|=p
m=(m<<8|p)&16777215;--l
if(l===0){o=g+1
s&2&&A.V(f)
f[g]=a.charCodeAt(m>>>18&63)
g=o+1
f[o]=a.charCodeAt(m>>>12&63)
o=g+1
f[g]=a.charCodeAt(m>>>6&63)
g=o+1
f[o]=a.charCodeAt(m&63)
m=0
l=3}}if(q>=0&&q<=255){if(l<3){o=g+1
n=o+1
if(3-l===1){s&2&&A.V(f)
f[g]=a.charCodeAt(m>>>2&63)
f[o]=a.charCodeAt(m<<4&63)
f[n]=61
f[n+1]=61}else{s&2&&A.V(f)
f[g]=a.charCodeAt(m>>>10&63)
f[o]=a.charCodeAt(m>>>4&63)
f[n]=a.charCodeAt(m<<2&63)
f[n+1]=61}return 0}return(m<<2|3-l)>>>0}for(r=c;r<d;){p=b[r]
if(p>255)break;++r}throw A.c(A.ep(b,"Not a byte value at index "+r+": 0x"+B.h.c9(b[r],16),null))},
hP(a,b,c,d,e,f){var s,r,q,p,o,n,m,l="Invalid encoding before padding",k="Invalid character",j=B.h.a2(f,2),i=f&3,h=$.h7()
for(s=d.$flags|0,r=b,q=0;r<c;++r){p=a.charCodeAt(r)
q|=p
o=h[p&127]
if(o>=0){j=(j<<6|o)&16777215
i=i+1&3
if(i===0){n=e+1
s&2&&A.V(d)
d[e]=j>>>16&255
e=n+1
d[n]=j>>>8&255
n=e+1
d[e]=j&255
e=n
j=0}continue}else if(o===-1&&i>1){if(q>127)break
if(i===3){if((j&3)!==0)throw A.c(A.aA(l,a,r))
s&2&&A.V(d)
d[e]=j>>>10
d[e+1]=j>>>2}else{if((j&15)!==0)throw A.c(A.aA(l,a,r))
s&2&&A.V(d)
d[e]=j>>>4}m=(3-i)*3
if(p===37)m+=2
return A.ff(a,r+1,c,-m-1)}throw A.c(A.aA(k,a,r))}if(q>=0&&q<=127)return(j<<2|i)>>>0
for(r=b;r<c;++r)if(a.charCodeAt(r)>127)break
throw A.c(A.aA(k,a,r))},
hN(a,b,c,d){var s=A.hO(a,b,c),r=(d&3)+(s-b),q=B.h.a2(r,2)*3,p=r&3
if(p!==0&&s<c)q+=p-1
if(q>0)return new Uint8Array(q)
return $.h6()},
hO(a,b,c){var s,r=c,q=r,p=0
for(;;){if(!(q>b&&p<2))break
A:{--q
s=a.charCodeAt(q)
if(s===61){++p
r=q
break A}if((s|32)===100){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===51){if(q===b)break;--q
s=a.charCodeAt(q)}if(s===37){++p
r=q
break A}break}}return r},
ff(a,b,c,d){var s,r
if(b===c)return d
s=-d-1
while(s>0){r=a.charCodeAt(b)
if(s===3){if(r===61){s-=3;++b
break}if(r===37){--s;++b
if(b===c)break
r=a.charCodeAt(b)}else break}if((s>3?s-3:s)===2){if(r!==51)break;++b;--s
if(b===c)break
r=a.charCodeAt(b)}if((r|32)!==100)break;++b;--s
if(b===c)break}if(b!==c)throw A.c(A.aA("Invalid padding character",a,b))
return-s-1},
cG:function cG(){},
dj:function dj(a){this.a=0
this.b=a},
cF:function cF(){},
di:function di(){this.a=0},
bU:function bU(){},
hk(a,b){a=A.y(a,new Error())
a.stack=b.j(0)
throw a},
f0(a,b,c,d){var s,r=J.hn(a,d)
if(a!==0&&b!=null)for(s=0;s<a;++s)r[s]=b
return r},
f_(a,b){var s,r=A.F([],b.k("w<0>"))
for(s=J.en(a);s.n();)r.push(s.gm())
return r},
hG(a){var s
A.f7(0,"start")
s=A.hH(a,0,null)
return s},
hH(a,b,c){var s=a.length
if(b>=s)return""
return A.hD(a,b,s)},
fb(a,b,c){var s=J.en(b)
if(!s.n())return a
if(c.length===0){do a+=A.b(s.gm())
while(s.n())}else{a+=A.b(s.gm())
while(s.n())a=a+c+A.b(s.gm())}return a},
fa(){return A.ad(new Error())},
hj(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
eY(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW(a){if(a>=10)return""+a
return"0"+a},
cL(a){if(typeof a=="number"||A.dM(a)||a==null)return J.K(a)
if(typeof a=="string")return JSON.stringify(a)
return A.hC(a)},
hl(a,b){A.dP(a,"error",t.K)
A.dP(b,"stackTrace",t.l)
A.hk(a,b)},
bS(a){return new A.bR(a)},
a4(a,b){return new A.T(!1,null,b,a)},
ep(a,b,c){return new A.T(!0,a,b,c)},
hE(a,b){return new A.aK(null,null,!0,a,b,"Value not in range")},
Z(a,b,c,d,e){return new A.aK(b,c,!0,a,d,"Invalid value")},
f8(a,b,c){if(0>a||a>c)throw A.c(A.Z(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.Z(b,a,c,"end",null))
return b}return c},
f7(a,b){if(a<0)throw A.c(A.Z(a,0,null,b,null))
return a},
eZ(a,b,c,d){return new A.bX(b,!0,a,d,"Index out of range")},
br(a){return new A.bq(a)},
fe(a){return new A.cl(a)},
ci(a){return new A.al(a)},
b2(a){return new A.bT(a)},
M(a){return new A.dl(a)},
aA(a,b,c){return new A.cO(a,b,c)},
hm(a,b,c){var s,r
if(A.eK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.F([],t.s)
$.au.push(a)
try{A.iH(a,s)}finally{$.au.pop()}r=A.fb(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
cV(a,b,c){var s,r
if(A.eK(a))return b+"..."+c
s=new A.cj(b)
$.au.push(a)
try{r=s
r.a=A.fb(r.a,a,", ")}finally{$.au.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
iH(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.n())return
s=A.b(l.gm())
b.push(s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gm();++j
if(!l.n()){if(j<=4){b.push(A.b(p))
return}r=A.b(p)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.n();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.b(p)
r=A.b(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ht(a,b){var s=B.h.gq(a)
b=B.h.gq(b)
b=A.hI(A.fc(A.fc($.h8(),s),b))
return b},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(){},
r:function r(){},
bR:function bR(a){this.a=a},
a_:function a_(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aK:function aK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bX:function bX(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bq:function bq(a){this.a=a},
cl:function cl(a){this.a=a},
al:function al(a){this.a=a},
bT:function bT(a){this.a=a},
cd:function cd(){},
bp:function bp(){},
dl:function dl(a){this.a=a},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
d:function d(){},
v:function v(){},
h:function h(){},
cy:function cy(){},
cj:function cj(a){this.a=a},
es(a,b){var s,r,q,p,o
if(b.length===0)return!1
s=b.split(".")
r=v.G
for(q=s.length,p=0;p<q;++p,r=o){o=r[s[p]]
A.fs(o)
if(o==null)return!1}return a instanceof t.g.a(r)},
d1:function d1(a){this.a=a},
fv(a){var s
if(typeof a=="function")throw A.c(A.a4("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ii,a)
s[$.ej()]=a
return s},
fw(a){var s
if(typeof a=="function")throw A.c(A.a4("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.ij,a)
s[$.ej()]=a
return s},
ii(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
ij(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
fC(a){return a==null||A.dM(a)||typeof a=="number"||typeof a=="string"||t.U.b(a)||t.p.b(a)||t.e.b(a)||t.O.b(a)||t.G.b(a)||t.k.b(a)||t.w.b(a)||t.B.b(a)||t.q.b(a)||t.J.b(a)||t.Y.b(a)},
e(a){if(A.fC(a))return a
return new A.e2(new A.aQ(t.A)).$1(a)},
eG(a,b,c){return a[b].apply(a,c)},
a2(a,b){var s=new A.u($.n,b.k("u<0>")),r=new A.bs(s,b.k("bs<0>"))
a.then(A.bO(new A.ef(r),1),A.bO(new A.eg(r),1))
return s},
fB(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
fL(a){if(A.fB(a))return a
return new A.dQ(new A.aQ(t.A)).$1(a)},
e2:function e2(a){this.a=a},
ef:function ef(a){this.a=a},
eg:function eg(a){this.a=a},
dQ:function dQ(a){this.a=a},
dx:function dx(a){this.a=a},
a6:function a6(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c){this.a=a
this.b=b
this.d=c},
cZ(a){return $.hq.bW(a,new A.d_(a))},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.f=null},
d_:function d_(a){this.a=a},
af:function af(a,b){this.a=a
this.b=b},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=-1
_.b=a
_.c=b
_.d=c
_.f=d},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=$
_.w=_.r=!1
_.x=e
_.y=0
_.z=f
_.Q=g},
cP:function cP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4(a,b,c){var s=new A.ce(a,c,b),r=a.f
if(r<=0||r>255)A.O(A.M("Invalid key ring size"))
s.b=A.f0(r,null,!1,t.I)
return s},
cX:function cX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=null
_.f=d},
bb:function bb(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c){var _=this
_.a=0
_.b=$
_.c=!1
_.d=a
_.e=b
_.f=c
_.r=0},
jc(a){return a===0||a===1||a===2||a===3||a===4||a===5||a===6||a===7||a===8||a===9||a===16||a===17||a===18||a===19||a===20||a===21},
j4(a,b,c){var s,r,q,p,o
for(s=b.length,r=c==="h265",q=0;q<s;++q){p=b[q]
if(r){if(A.jc(a[p]>>>1&63))return p+2}else{o=a[p]&31
if(o===5||o===1)return p+2}}return null},
j3(a){var s,r,q,p,o=A.F([],t.t),n=a.length,m=n-3
for(s=m-1,r=0,q=0;q<m;r=q){while(q<m){if(q<s&&a[q]===0&&a[q+1]===0&&a[q+2]===0&&a[q+3]===1)break
if(a[q]===0&&a[q+1]===0&&a[q+2]===1)break;++q}if(q>=m)q=n
p=q
for(;;){if(!(p>r&&a[p-1]===0))break;--p}if(r===0){if(p!==r)throw A.c(A.M("byte stream contains leading data"))}else o.push(r)
q+=q<m&&a[q]===0&&a[q+1]===0&&a[q+2]===0&&a[q+3]===1?4:3}return o},
ji(a,b){var s,r=A.j3(a)
if(b==="unknown")return new A.c5(0,b)
s=A.j4(a,r,b)
if(s==null)throw A.c(A.M("Could not find NALU"))
return new A.c5(s,b)},
c5:function c5(a,b){this.a=a
this.b=b},
d4:function d4(){var _=this
_.a=0
_.b=null
_.d=_.c=0},
fP(a,b,c){var s,r,q=null,p=A.ai($.ay,new A.dY(b))
if(p==null){$.q().h(B.e,"creating new cryptor for "+a+", trackId "+b,q,q)
s=v.G.self
r=t.S
p=new A.ah(A.be(r,r),a,b,c.F(a),B.l,s,new A.d4())
$.ay.push(p)}else if(a!==p.b){s=c.F(a)
if(p.x!==B.j){$.q().h(B.e,"setParticipantId: lastError != CryptorError.kOk, reset state to kNew",q,q)
p.x=B.l}p.b=a
p.e=s
p.Q.b3()}return p},
fN(a,b,c){var s,r=A.ai($.eN,new A.dS(b))
if(r==null){$.q().h(B.e,"creating new cryptor for "+a+", dataCryptorId "+b,null,null)
s=v.G.self
r=new A.az(a,b,c.F(a),s)
$.eN.push(r)}else if(a!==r.b){s=c.F(a)
r.b=a
r.d=s}return r},
jm(a){var s=A.ai($.ay,new A.eh(a))
if(s!=null)s.b=null},
jn(a){var s=A.ai($.eN,new A.ei(a))
if(s!=null)s.b=null},
eL(){var s=0,r=A.C(t.H),q,p
var $async$eL=A.D(function(a,b){if(a===1)return A.z(b,r)
for(;;)switch(s){case 0:p=$.cB()
if(p.b!=null)A.O(A.br('Please set "hierarchicalLoggingEnabled" to true if you want to change the level on a non-root logger.'))
J.cD(p.c,B.b)
p.c=B.b
p.aO().bU(new A.e9())
p=$.q()
p.h(B.e,"Worker created",null,null)
q=v.G
if("RTCTransformEvent" in q.self){p.h(B.e,"setup RTCTransformEvent event handler",null,null)
q.self.onrtctransform=A.fv(new A.ea())}q.self.onmessage=A.fv(new A.eb(new A.ec()))
return A.A(null,r)}})
return A.B($async$eL,r)},
dY:function dY(a){this.a=a},
dS:function dS(a){this.a=a},
eh:function eh(a){this.a=a},
ei:function ei(a){this.a=a},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
eb:function eb(a){this.a=a},
fU(a){return v.mangledGlobalNames[a]},
jh(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
jk(a){throw A.y(new A.bc("Field '"+a+"' has been assigned during initialization."),new Error())},
a3(){throw A.y(A.hp(""),new Error())},
ai(a,b){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.bP)(a),++r){q=a[r]
if(b.$1(q))return q}return null},
fM(a,b){switch(a){case"HKDF":return A.f(["name","HKDF","salt",b,"hash","SHA-256","info",new Uint8Array(128)],t.N,t.z)
case"PBKDF2":return A.f(["name","PBKDF2","salt",b,"hash","SHA-256","iterations",1e5],t.N,t.z)
default:throw A.c(A.M("algorithm "+a+" is currently unsupported"))}}},B={}
var w=[A,J,B]
var $={}
A.et.prototype={}
J.bY.prototype={
E(a,b){return a===b},
gq(a){return A.bn(a)},
j(a){return"Instance of '"+A.cg(a)+"'"},
gp(a){return A.ac(A.eE(this))}}
J.c_.prototype={
j(a){return String(a)},
gq(a){return a?519018:218159},
gp(a){return A.ac(t.y)},
$il:1}
J.b8.prototype={
E(a,b){return null==b},
j(a){return"null"},
gq(a){return 0},
$il:1,
$iv:1}
J.ba.prototype={$im:1}
J.a5.prototype={
gq(a){return 0},
gp(a){return B.X},
j(a){return String(a)}}
J.cf.prototype={}
J.aM.prototype={}
J.W.prototype={
j(a){var s=a[$.fW()]
if(s==null)s=a[$.ej()]
if(s==null)return this.be(a)
return"JavaScript function for "+J.K(s)}}
J.aC.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.aD.prototype={
gq(a){return 0},
j(a){return String(a)}}
J.w.prototype={
bD(a,b){var s
a.$flags&1&&A.V(a,"addAll",2)
for(s=b.gt(b);s.n();)a.push(s.gm())},
U(a,b,c){return new A.Y(a,b,A.aR(a).k("@<1>").A(c).k("Y<1,2>"))},
S(a,b){return a[b]},
bE(a,b){var s
for(s=0;s<a.length;++s)if(J.cD(a[s],b))return!0
return!1},
j(a){return A.cV(a,"[","]")},
gt(a){return new J.bQ(a,a.length,A.aR(a).k("bQ<1>"))},
gq(a){return A.bn(a)},
gl(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.c(A.eI(a,b))
return a[b]},
gp(a){return A.ac(A.aR(a))},
$ii:1,
$id:1,
$ip:1}
J.bZ.prototype={
ca(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cg(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.cW.prototype={}
J.bQ.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.c(A.bP(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b9.prototype={
c8(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.c(A.br(""+a+".toInt()"))},
c9(a,b){var s,r,q,p
if(b<2||b>36)throw A.c(A.Z(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.O(A.br("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.k.az("0",q)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a8(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bA(a,b){return(a|0)===a?a/b|0:this.bB(a,b)},
bB(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.c(A.br("Result of truncating division is "+A.b(s)+": "+A.b(a)+" ~/ "+b))},
a2(a,b){var s
if(a>0)s=this.by(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
by(a,b){return b>31?0:a>>>b},
gp(a){return A.ac(t.n)},
$io:1}
J.b7.prototype={
gp(a){return A.ac(t.S)},
$il:1,
$ia:1}
J.c0.prototype={
gp(a){return A.ac(t.i)},
$il:1}
J.aB.prototype={
bO(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aD(a,r-s)},
bd(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
Y(a,b,c){return a.substring(b,A.f8(b,c,a.length))},
aD(a,b){return this.Y(a,b,null)},
az(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.c(B.L)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bS(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
j(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gp(a){return A.ac(t.N)},
gl(a){return a.length},
i(a,b){if(!(b.cc(0,0)&&b.cd(0,a.length)))throw A.c(A.eI(a,b))
return a[b]},
$il:1,
$ia8:1}
A.bw.prototype={
aT(a,b){var s,r,q,p,o,n,m=this,l=b.length
if(l===0)return
s=m.a+l
r=m.b
q=r.length
if(q<s){p=s*2
if(p<1024)p=1024
else{o=p-1
o|=B.h.a2(o,1)
o|=o>>>2
o|=o>>>4
o|=o>>>8
p=((o|o>>>16)>>>0)+1}n=new Uint8Array(p)
B.d.aB(n,0,q,r)
m.b=n
r=n}B.d.aB(r,m.a,s,b)
m.a=s},
av(){var s=this
if(s.a===0)return $.cC()
return new Uint8Array(A.ab(J.eR(B.d.gG(s.b),s.b.byteOffset,s.a)))},
gl(a){return this.a}}
A.bc.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.d3.prototype={}
A.i.prototype={}
A.a7.prototype={
gt(a){var s=this
return new A.aE(s,s.gl(s),A.as(s).k("aE<a7.E>"))},
U(a,b,c){return new A.Y(this,b,A.as(this).k("@<a7.E>").A(c).k("Y<1,2>"))}}
A.aE.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.dT(q),o=p.gl(q)
if(r.b!==o)throw A.c(A.b2(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.S(q,s);++r.c
return!0}}
A.X.prototype={
gt(a){var s=this.a
return new A.c4(s.gt(s),this.b,A.as(this).k("c4<1,2>"))},
gl(a){var s=this.a
return s.gl(s)}}
A.b3.prototype={$ii:1}
A.c4.prototype={
n(){var s=this,r=s.b
if(r.n()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.Y.prototype={
gl(a){return J.b_(this.a)},
S(a,b){return this.b.$1(J.ha(this.a,b))}}
A.am.prototype={
gt(a){return new A.cn(J.en(this.a),this.b)},
U(a,b,c){return new A.X(this,b,this.$ti.k("@<1>").A(c).k("X<1,2>"))}}
A.cn.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()}}
A.b6.prototype={}
A.bo.prototype={}
A.d9.prototype={
B(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bm.prototype={
j(a){return"Null check operator used on a null value"}}
A.c1.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cm.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.d2.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.b5.prototype={}
A.bE.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iS:1}
A.ag.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.fV(r==null?"unknown":r)+"'"},
gcb(){return this},
$C:"$1",
$R:1,
$D:null}
A.cH.prototype={$C:"$0",$R:0}
A.cI.prototype={$C:"$2",$R:2}
A.d8.prototype={}
A.d5.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.fV(s)+"'"}}
A.b0.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b0))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.ee(this.a)^A.bn(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cg(this.a)+"'")}}
A.ch.prototype={
j(a){return"RuntimeError: "+this.a}}
A.aj.prototype={
gl(a){return this.a},
ga7(){return new A.bd(this,this.$ti.k("bd<1>"))},
a4(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bR(b)},
bR(a){var s,r,q=this.d
if(q==null)return null
s=this.br(q,a)
r=this.b_(s,a)
if(r<0)return null
return s[r].b},
u(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.aE(s==null?m.b=m.ah():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.aE(r==null?m.c=m.ah():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.ah()
p=J.cE(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.ai(b,c)]
else{n=m.b_(o,b)
if(n>=0)o[n].b=c
else o.push(m.ai(b,c))}}},
bW(a,b){var s,r,q=this
if(q.a4(a)){s=q.i(0,a)
return s==null?q.$ti.y[1].a(s):s}r=b.$0()
q.u(0,a,r)
return r},
c0(a,b){var s=this.bv(this.b,b)
return s},
ao(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.c(A.b2(s))
r=r.c}},
aE(a,b,c){var s=a[b]
if(s==null)a[b]=this.ai(b,c)
else s.b=c},
bv(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.bC(s)
delete a[b]
return s.b},
aP(){this.r=this.r+1&1073741823},
ai(a,b){var s,r=this,q=new A.cY(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.aP()
return q},
bC(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.aP()},
br(a,b){return a[J.cE(b)&1073741823]},
b_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.cD(a[r].a,b))return r
return-1},
j(a){return A.f2(this)},
ah(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cY.prototype={}
A.bd.prototype={
gl(a){return this.a.a},
gt(a){var s=this.a
return new A.c3(s,s.r,s.e)}}
A.c3.prototype={
gm(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.b2(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dZ.prototype={
$1(a){return this.a(a)},
$S:13}
A.e_.prototype={
$2(a,b){return this.a(a,b)},
$S:14}
A.e0.prototype={
$1(a){return this.a(a)},
$S:15}
A.aI.prototype={
gp(a){return B.Q},
a3(a,b,c){return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aU(a){return this.a3(a,0,null)},
$il:1,
$ib1:1}
A.aH.prototype={$iaH:1}
A.bj.prototype={
gG(a){if(((a.$flags|0)&2)!==0)return new A.cz(a.buffer)
else return a.buffer},
bs(a,b,c,d){var s=A.Z(b,0,c,d,null)
throw A.c(s)},
aJ(a,b,c,d){if(b>>>0!==b||b>c)this.bs(a,b,c,d)}}
A.cz.prototype={
a3(a,b,c){var s=A.E(this.a,b,c)
s.$flags=3
return s},
aU(a){return this.a3(0,0,null)},
$ib1:1}
A.bg.prototype={
gp(a){return B.R},
bx(a,b,c){return a.setInt8(b,c)},
$il:1,
$ier:1}
A.aJ.prototype={
gl(a){return a.length},
$iH:1}
A.bh.prototype={
i(a,b){A.ar(b,a,a.length)
return a[b]},
$ii:1,
$id:1,
$ip:1}
A.bi.prototype={
aB(a,b,c,d){var s,r,q,p
a.$flags&2&&A.V(a,5)
s=a.length
this.aJ(a,b,s,"start")
this.aJ(a,c,s,"end")
if(b>c)A.O(A.Z(b,0,c,null,null))
r=c-b
q=d.length
if(q<r)A.O(A.ci("Not enough elements"))
p=q!==r?d.subarray(0,r):d
a.set(p,b)
return},
$ii:1,
$id:1,
$ip:1}
A.c6.prototype={
gp(a){return B.S},
$il:1,
$icM:1}
A.c7.prototype={
gp(a){return B.T},
$il:1,
$icN:1}
A.c8.prototype={
gp(a){return B.U},
i(a,b){A.ar(b,a,a.length)
return a[b]},
$il:1,
$icS:1}
A.c9.prototype={
gp(a){return B.V},
i(a,b){A.ar(b,a,a.length)
return a[b]},
$il:1,
$icT:1}
A.ca.prototype={
gp(a){return B.W},
i(a,b){A.ar(b,a,a.length)
return a[b]},
$il:1,
$icU:1}
A.cb.prototype={
gp(a){return B.Z},
i(a,b){A.ar(b,a,a.length)
return a[b]},
$il:1,
$idb:1}
A.cc.prototype={
gp(a){return B.a_},
i(a,b){A.ar(b,a,a.length)
return a[b]},
$il:1,
$idc:1}
A.bk.prototype={
gp(a){return B.a0},
gl(a){return a.length},
i(a,b){A.ar(b,a,a.length)
return a[b]},
$il:1,
$idd:1}
A.bl.prototype={
gp(a){return B.a1},
gl(a){return a.length},
i(a,b){A.ar(b,a,a.length)
return a[b]},
v(a,b,c){return new Uint8Array(a.subarray(b,A.ik(b,c,a.length)))},
aC(a,b){return this.v(a,b,null)},
$il:1,
$ick:1}
A.bA.prototype={}
A.bB.prototype={}
A.bC.prototype={}
A.bD.prototype={}
A.R.prototype={
k(a){return A.dH(v.typeUniverse,this,a)},
A(a){return A.i7(v.typeUniverse,this,a)}}
A.cu.prototype={}
A.dF.prototype={
j(a){return A.J(this.a,null)}}
A.ct.prototype={
j(a){return this.a}}
A.bH.prototype={$ia_:1}
A.df.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.de.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:16}
A.dg.prototype={
$0(){this.a.$0()},
$S:6}
A.dh.prototype={
$0(){this.a.$0()},
$S:6}
A.dD.prototype={
bh(a,b){if(self.setTimeout!=null)self.setTimeout(A.bO(new A.dE(this,b),0),a)
else throw A.c(A.br("`setTimeout()` not found."))}}
A.dE.prototype={
$0(){this.b.$0()},
$S:0}
A.co.prototype={
al(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.ab(a)
else{s=r.a
if(r.$ti.k("U<1>").b(a))s.aI(a)
else s.aL(a)}},
am(a,b){var s=this.a
if(this.b)s.a_(new A.L(a,b))
else s.ac(new A.L(a,b))}}
A.dK.prototype={
$1(a){return this.a.$2(0,a)},
$S:3}
A.dL.prototype={
$2(a,b){this.a.$2(1,new A.b5(a,b))},
$S:17}
A.dO.prototype={
$2(a,b){this.a(a,b)},
$S:18}
A.L.prototype={
j(a){return A.b(this.a)},
$ir:1,
gN(){return this.b}}
A.aN.prototype={}
A.bt.prototype={
aj(){},
ak(){}}
A.aO.prototype={
gag(){return this.c<4},
bz(a,b,c,d){var s,r,q,p,o,n=this
if((n.c&4)!==0){s=new A.bx($.n)
A.fT(s.gbt())
if(c!=null)s.c=c
return s}s=$.n
r=d?1:0
q=b!=null?32:0
A.hR(s,b)
p=new A.bt(n,a,s,r|q)
p.CW=p
p.ch=p
p.ay=n.c&1
o=n.e
n.e=p
p.ch=null
p.CW=o
if(o==null)n.d=p
else o.ch=p
if(n.d===p)A.fG(n.a)
return p},
a9(){if((this.c&4)!==0)return new A.al("Cannot add new events after calling close")
return new A.al("Cannot add new events while doing an addStream")},
bp(a){var s,r,q,p,o=this,n=o.c
if((n&2)!==0)throw A.c(A.ci(u.o))
s=o.d
if(s==null)return
r=n&1
o.c=n^3
while(s!=null){n=s.ay
if((n&1)===r){s.ay=n|2
a.$1(s)
n=s.ay^=1
q=s.ch
if((n&4)!==0){p=s.CW
if(p==null)o.d=q
else p.ch=q
if(q==null)o.e=p
else q.CW=p
s.CW=s
s.ch=s}s.ay=n&4294967293
s=q}else s=s.ch}o.c&=4294967293
if(o.d==null)o.aH()},
aH(){if((this.c&4)!==0)if(null.gce())null.ab(null)
A.fG(this.b)}}
A.bG.prototype={
gag(){return A.aO.prototype.gag.call(this)&&(this.c&2)===0},
a9(){if((this.c&2)!==0)return new A.al(u.o)
return this.bf()},
a1(a){var s=this,r=s.d
if(r==null)return
if(r===s.e){s.c|=2
r.aF(a)
s.c&=4294967293
if(s.d==null)s.aH()
return}s.bp(new A.dC(s,a))}}
A.dC.prototype={
$1(a){a.aF(this.b)},
$S(){return this.a.$ti.k("~(an<1>)")}}
A.cq.prototype={
am(a,b){var s=this.a
if((s.a&30)!==0)throw A.c(A.ci("Future already completed"))
s.ac(A.iv(a,b))},
aW(a){return this.am(a,null)}}
A.bs.prototype={
al(a){var s=this.a
if((s.a&30)!==0)throw A.c(A.ci("Future already completed"))
s.ab(a)}}
A.aP.prototype={
bV(a){if((this.c&15)!==6)return!0
return this.b.b.au(this.d,a.a)},
bQ(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.c3(r,p,a.b)
else q=o.au(r,p)
try{p=q
return p}catch(s){if(t._.b(A.G(s))){if((this.c&1)!==0)throw A.c(A.a4("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.a4("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.u.prototype={
b5(a,b,c){var s,r=$.n
if(r===B.f){if(!t.Q.b(b)&&!t.v.b(b))throw A.c(A.ep(b,"onError",u.c))}else b=A.iL(b,r)
s=new A.u(r,c.k("u<0>"))
this.aa(new A.aP(s,3,a,b,this.$ti.k("@<1>").A(c).k("aP<1,2>")))
return s},
aS(a,b,c){var s=new A.u($.n,c.k("u<0>"))
this.aa(new A.aP(s,19,a,b,this.$ti.k("@<1>").A(c).k("aP<1,2>")))
return s},
bw(a){this.a=this.a&1|16
this.c=a},
Z(a){this.a=a.a&30|this.a&1
this.c=a.c},
aa(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.aa(a)
return}s.Z(r)}A.aT(null,null,s.b,new A.dm(s,a))}},
aQ(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.aQ(a)
return}n.Z(s)}m.a=n.a0(a)
A.aT(null,null,n.b,new A.dr(m,n))}},
O(){var s=this.c
this.c=null
return this.a0(s)},
a0(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aL(a){var s=this,r=s.O()
s.a=8
s.c=a
A.ao(s,r)},
bn(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.O()
q.Z(a)
A.ao(q,r)},
a_(a){var s=this.O()
this.bw(a)
A.ao(this,s)},
bm(a,b){this.a_(new A.L(a,b))},
ab(a){if(this.$ti.k("U<1>").b(a)){this.aI(a)
return}this.bj(a)},
bj(a){this.a^=2
A.aT(null,null,this.b,new A.dp(this,a))},
aI(a){A.ew(a,this,!1)
return},
ac(a){this.a^=2
A.aT(null,null,this.b,new A.dn(this,a))},
$iU:1}
A.dm.prototype={
$0(){A.ao(this.a,this.b)},
$S:0}
A.dr.prototype={
$0(){A.ao(this.b,this.a.a)},
$S:0}
A.dq.prototype={
$0(){A.ew(this.a.a,this.b,!0)},
$S:0}
A.dp.prototype={
$0(){this.a.aL(this.b)},
$S:0}
A.dn.prototype={
$0(){this.a.a_(this.b)},
$S:0}
A.du.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.c1(q.d)}catch(p){s=A.G(p)
r=A.ad(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.eq(q)
n=k.a
n.c=new A.L(q,o)
q=n}q.b=!0
return}if(j instanceof A.u&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.u){m=k.b.a
l=new A.u(m.b,m.$ti)
j.b5(new A.dv(l,m),new A.dw(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.dv.prototype={
$1(a){this.a.bn(this.b)},
$S:5}
A.dw.prototype={
$2(a,b){this.a.a_(new A.L(a,b))},
$S:19}
A.dt.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.au(p.d,this.b)}catch(o){s=A.G(o)
r=A.ad(o)
q=s
p=r
if(p==null)p=A.eq(q)
n=this.a
n.c=new A.L(q,p)
n.b=!0}},
$S:0}
A.ds.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.bV(s)&&p.a.e!=null){p.c=p.a.bQ(s)
p.b=!1}}catch(o){r=A.G(o)
q=A.ad(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.eq(p)
m=l.b
m.c=new A.L(p,n)
p=m}p.b=!0}},
$S:0}
A.cp.prototype={}
A.aL.prototype={
gl(a){var s={},r=new A.u($.n,t.x)
s.a=0
this.b0(new A.d6(s,this),!0,new A.d7(s,r),r.gbl())
return r}}
A.d6.prototype={
$1(a){++this.a.a},
$S(){return this.b.$ti.k("~(1)")}}
A.d7.prototype={
$0(){var s=this.b,r=this.a.a,q=s.O()
s.a=8
s.c=r
A.ao(s,q)},
$S:0}
A.bu.prototype={
gq(a){return(A.bn(this.a)^892482866)>>>0},
E(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aN&&b.a===this.a}}
A.bv.prototype={
aj(){},
ak(){}}
A.an.prototype={
aF(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.a1(a)
else this.bi(new A.cr(a))},
aj(){},
ak(){},
bi(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cw()
s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aA(q)}},
a1(a){var s=this,r=s.e
s.e=r|64
s.d.c7(s.a,a)
s.e&=4294967231
s.bk((r&4)!==0)},
bk(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.aj()
else q.ak()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aA(q)}}
A.bF.prototype={
b0(a,b,c,d){return this.a.bz(a,d,c,b===!0)},
bU(a){return this.b0(a,null,null,null)}}
A.cs.prototype={}
A.cr.prototype={}
A.cw.prototype={
aA(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.fT(new A.dz(s,a))
s.a=1}}
A.dz.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.a
q.b=r
if(r==null)q.c=null
this.b.a1(s.b)},
$S:0}
A.bx.prototype={
bu(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.b4(s)}}else r.a=q}}
A.cx.prototype={}
A.dJ.prototype={}
A.dA.prototype={
b4(a){var s,r,q
try{if(B.f===$.n){a.$0()
return}A.fD(null,null,this,a)}catch(q){s=A.G(q)
r=A.ad(q)
A.cA(s,r)}},
c6(a,b){var s,r,q
try{if(B.f===$.n){a.$1(b)
return}A.fE(null,null,this,a,b)}catch(q){s=A.G(q)
r=A.ad(q)
A.cA(s,r)}},
c7(a,b){return this.c6(a,b,t.z)},
aV(a){return new A.dB(this,a)},
i(a,b){return null},
c2(a){if($.n===B.f)return a.$0()
return A.fD(null,null,this,a)},
c1(a){return this.c2(a,t.z)},
c5(a,b){if($.n===B.f)return a.$1(b)
return A.fE(null,null,this,a,b)},
au(a,b){var s=t.z
return this.c5(a,b,s,s)},
c4(a,b,c){if($.n===B.f)return a.$2(b,c)
return A.iM(null,null,this,a,b,c)},
c3(a,b,c){var s=t.z
return this.c4(a,b,c,s,s,s)},
c_(a){return a},
ar(a){var s=t.z
return this.c_(a,s,s,s)}}
A.dB.prototype={
$0(){return this.a.b4(this.b)},
$S:0}
A.dN.prototype={
$0(){A.hl(this.a,this.b)},
$S:0}
A.by.prototype={
gl(a){return this.a},
ga7(){return new A.bz(this,this.$ti.k("bz<1>"))},
a4(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.bo(a)},
bo(a){var s=this.d
if(s==null)return!1
return this.af(this.aK(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.fh(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.fh(q,b)
return r}else return this.bq(b)},
bq(a){var s,r,q=this.d
if(q==null)return null
s=this.aK(q,a)
r=this.af(s,a)
return r<0?null:s[r+1]},
u(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.aG(s==null?m.b=A.ex():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.aG(r==null?m.c=A.ex():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.ex()
p=A.ee(b)&1073741823
o=q[p]
if(o==null){A.ey(q,p,[b,c]);++m.a
m.e=null}else{n=m.af(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
ao(a,b){var s,r,q,p,o,n=this,m=n.aM()
for(s=m.length,r=n.$ti.y[1],q=0;q<s;++q){p=m[q]
o=n.i(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.c(A.b2(n))}},
aM(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.f0(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
aG(a,b,c){if(a[b]==null){++this.a
this.e=null}A.ey(a,b,c)},
aK(a,b){return a[A.ee(b)&1073741823]}}
A.aQ.prototype={
af(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bz.prototype={
gl(a){return this.a.a},
gt(a){var s=this.a
return new A.cv(s,s.aM(),this.$ti.k("cv<1>"))}}
A.cv.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.b2(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.t.prototype={
gt(a){return new A.aE(a,a.length,A.aX(a).k("aE<t.E>"))},
S(a,b){return a[b]},
U(a,b,c){return new A.Y(a,b,A.aX(a).k("@<t.E>").A(c).k("Y<1,2>"))},
j(a){return A.cV(a,"[","]")}}
A.ak.prototype={
ao(a,b){var s,r,q,p
for(s=this.ga7(),s=s.gt(s),r=A.as(this).y[1];s.n();){q=s.gm()
p=this.i(0,q)
b.$2(q,p==null?r.a(p):p)}},
gl(a){var s=this.ga7()
return s.gl(s)},
j(a){return A.f2(this)},
$ibf:1}
A.d0.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.b(a)
r.a=(r.a+=s)+": "
s=A.b(b)
r.a+=s},
$S:20}
A.cG.prototype={
H(a){var s=a.length
if(s===0)return""
s=new A.dj("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").bK(a,0,s,!0)
s.toString
return A.hG(s)}}
A.dj.prototype={
bK(a,b,c,d){var s,r=this.a,q=(r&3)+(c-b),p=B.h.bA(q,3),o=p*4
if(q-p*3>0)o+=4
s=new Uint8Array(o)
this.a=A.hQ(this.b,a,b,c,!0,s,0,r)
if(o>0)return s
return null}}
A.cF.prototype={
H(a){var s,r,q,p=A.f8(0,null,a.length)
if(0===p)return new Uint8Array(0)
s=new A.di()
r=s.bF(a,0,p)
r.toString
q=s.a
if(q<-1)A.O(A.aA("Missing padding character",a,p))
if(q>0)A.O(A.aA("Invalid length, must be multiple of four",a,p))
s.a=-1
return r}}
A.di.prototype={
bF(a,b,c){var s,r=this,q=r.a
if(q<0){r.a=A.ff(a,b,c,q)
return null}if(b===c)return new Uint8Array(0)
s=A.hN(a,b,c,q)
r.a=A.hP(a,b,c,s,0,r.a)
return s}}
A.bU.prototype={}
A.bV.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.bV&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gq(a){return A.ht(this.a,this.b)},
j(a){var s=this,r=A.hj(A.hB(s)),q=A.bW(A.hz(s)),p=A.bW(A.hv(s)),o=A.bW(A.hw(s)),n=A.bW(A.hy(s)),m=A.bW(A.hA(s)),l=A.eY(A.hx(s)),k=s.b,j=k===0?"":A.eY(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.dk.prototype={
j(a){return this.aN()}}
A.r.prototype={
gN(){return A.hu(this)}}
A.bR.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cL(s)
return"Assertion failed"}}
A.a_.prototype={}
A.T.prototype={
gae(){return"Invalid argument"+(!this.a?"(s)":"")},
gad(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.b(p),n=s.gae()+q+o
if(!s.a)return n
return n+s.gad()+": "+A.cL(s.gap())},
gap(){return this.b}}
A.aK.prototype={
gap(){return this.b},
gae(){return"RangeError"},
gad(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.b(q):""
else if(q==null)s=": Not greater than or equal to "+A.b(r)
else if(q>r)s=": Not in inclusive range "+A.b(r)+".."+A.b(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.b(r)
return s}}
A.bX.prototype={
gap(){return this.b},
gae(){return"RangeError"},
gad(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.bq.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.cl.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.al.prototype={
j(a){return"Bad state: "+this.a}}
A.bT.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cL(s)+"."}}
A.cd.prototype={
j(a){return"Out of Memory"},
gN(){return null},
$ir:1}
A.bp.prototype={
j(a){return"Stack Overflow"},
gN(){return null},
$ir:1}
A.dl.prototype={
j(a){return"Exception: "+this.a}}
A.cO.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b,e=g<0||g>f.length
if(e)g=null
if(g==null){if(f.length>78)f=B.k.Y(f,0,75)+"..."
return h+"\n"+f}for(s=1,r=0,q=!1,p=0;p<g;++p){o=f.charCodeAt(p)
if(o===10){if(r!==p||!q)++s
r=p+1
q=!1}else if(o===13){++s
r=p+1
q=!0}}h=s>1?h+(" (at line "+s+", character "+(g-r+1)+")\n"):h+(" (at character "+(g+1)+")\n")
n=f.length
for(p=g;p<n;++p){o=f.charCodeAt(p)
if(o===10||o===13){n=p
break}}m=""
if(n-r>78){l="..."
if(g-r<75){k=r+75
j=r}else{if(n-g<75){j=n-75
k=n
l=""}else{j=g-36
k=g+36}m="..."}}else{k=n
j=r
l=""}return h+m+B.k.Y(f,j,k)+l+"\n"+B.k.az(" ",g-j+m.length)+"^\n"}}
A.d.prototype={
U(a,b,c){return A.hr(this,b,A.as(this).k("d.E"),c)},
gl(a){var s,r=this.gt(this)
for(s=0;r.n();)++s
return s},
S(a,b){var s,r
A.f7(b,"index")
s=this.gt(this)
for(r=b;s.n();){if(r===0)return s.gm();--r}throw A.c(A.eZ(b,b-r,this,"index"))},
j(a){return A.hm(this,"(",")")}}
A.v.prototype={
gq(a){return A.h.prototype.gq.call(this,0)},
j(a){return"null"}}
A.h.prototype={$ih:1,
E(a,b){return this===b},
gq(a){return A.bn(this)},
j(a){return"Instance of '"+A.cg(this)+"'"},
gp(a){return A.j6(this)},
toString(){return this.j(this)}}
A.cy.prototype={
j(a){return""},
$iS:1}
A.cj.prototype={
gl(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.d1.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.e2.prototype={
$1(a){var s,r,q,p
if(A.fC(a))return a
s=this.a
if(s.a4(a))return s.i(0,a)
if(t.f.b(a)){r={}
s.u(0,a,r)
for(s=a.ga7(),s=s.gt(s);s.n();){q=s.gm()
r[q]=this.$1(a.i(0,q))}return r}else if(t.d.b(a)){p=[]
s.u(0,a,p)
B.A.bD(p,J.hb(a,this,t.z))
return p}else return a},
$S:8}
A.ef.prototype={
$1(a){return this.a.al(a)},
$S:3}
A.eg.prototype={
$1(a){if(a==null)return this.a.aW(new A.d1(a===undefined))
return this.a.aW(a)},
$S:3}
A.dQ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(A.fB(a))return a
s=this.a
a.toString
if(s.a4(a))return s.i(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.O(A.Z(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.dP(!0,"isUtc",t.y)
return new A.bV(r,0,!0)}if(a instanceof RegExp)throw A.c(A.a4("structured clone of RegExp",null))
if(a instanceof Promise)return A.a2(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.be(p,p)
s.u(0,a,o)
n=Object.keys(a)
m=[]
for(s=n.length,l=0;l<n.length;n.length===s||(0,A.bP)(n),++l)m.push(A.fL(n[l]))
for(k=0;k<n.length;++k){j=n[k]
i=m[k]
if(j!=null)o.u(0,i,this.$1(a[j]))}return o}if(a instanceof Array){h=a
o=[]
s.u(0,a,o)
g=a.length
for(k=0;k<g;++k)o.push(this.$1(h[k]))
return o}return a},
$S:8}
A.dx.prototype={
bg(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.c(A.br("No source of cryptographically secure random numbers available."))},
aq(a){var s,r,q,p,o,n,m,l,k=null
if(a<=0||a>4294967296)throw A.c(new A.aK(k,k,!1,k,k,"max must be in range 0 < max \u2264 2^32, was "+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.V(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.aq(Math.pow(256,s))
for(o=a-1,n=(a&o)>>>0===0;;){crypto.getRandomValues(J.eR(B.q.gG(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.a6.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.a6&&this.b===b.b},
gq(a){return this.b},
j(a){return this.a}}
A.aF.prototype={
j(a){return"["+this.a.a+"] "+this.d+": "+this.b}}
A.aG.prototype={
gaZ(){var s=this.b,r=s==null?null:s.a.length!==0,q=this.a
return r===!0?s.gaZ()+"."+q:q},
gbT(){var s,r
if(this.b==null){s=this.c
s.toString
r=s}else{s=$.cB().c
s.toString
r=s}return r},
h(a,b,c,d){var s,r=this,q=a.b
if(q>=r.gbT().b){if(q>=2000){A.fa()
a.j(0)}q=r.gaZ()
Date.now()
$.f1=$.f1+1
s=new A.aF(a,b,q)
if(r.b==null)r.aR(s)
else $.cB().aR(s)}},
aO(){if(this.b==null){var s=this.f
if(s==null)s=this.f=new A.bG(null,null,t.W)
return new A.aN(s,A.as(s).k("aN<1>"))}else return $.cB().aO()},
aR(a){var s=this.f
if(s!=null){if(!s.gag())A.O(s.a9())
s.a1(a)}return null}}
A.d_.prototype={
$0(){var s,r,q,p=this.a
if(B.k.bd(p,"."))A.O(A.a4("name shouldn't start with a '.'",null))
if(B.k.bO(p,"."))A.O(A.a4("name shouldn't end with a '.'",null))
s=B.k.bS(p,".")
if(s===-1)r=p!==""?A.cZ(""):null
else{r=A.cZ(B.k.Y(p,0,s))
p=B.k.aD(p,s+1)}q=new A.aG(p,r,A.be(t.N,t.L))
if(r==null)q.c=B.e
else r.d.u(0,p,q)
return q},
$S:21}
A.af.prototype={
aN(){return"Algorithm."+this.b}}
A.b4.prototype={}
A.az.prototype={
a6(a,b){return this.bN(a,b)},
bN(a1,a2){var s=0,r=A.C(t.bW),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$a6=A.D(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:c=$.q()
b=""+a2.length
c.h(B.i,"encodeFunction: buffer "+b,null,null)
h=n.d.J(0)
m=h==null?null:h.b
l=0
if(m==null){c.h(B.b,"encodeFunction: no secretKey for index "+A.b(l)+", cannot encrypt",null,null)
q=null
s=1
break}h=Date.now()
g=new DataView(new ArrayBuffer(12))
f=n.a
if(f===-1)f=n.a=$.ek().aq(65535)
g.setUint32(0,$.ek().aq(Math.max(0,4294967295))>>>0,!1)
g.setUint32(4,h,!1)
g.setUint32(8,h-B.h.a8(f,65535),!1)
n.a=f+1
k=J.el(B.q.gG(g))
e=new DataView(new ArrayBuffer(2))
e.setInt8(0,12)
e.setInt8(1,l)
p=4
h=n.f.crypto.subtle
f=A.e(A.f(["name","AES-GCM","iv",k],t.N,t.K))
if(f==null)f=A.aa(f)
a0=t.a
s=7
return A.j(A.a2(h.encrypt(f,m,a2),t.X),$async$a6)
case 7:j=a0.a(a4)
c.h(B.c,"encodeFunction: encrypted buffer: "+b+", cipherText: "+A.E(j,0,null).length,null,null)
b=A.E(j,0,null)
q=new A.b4(b,l,k)
s=1
break
p=2
s=6
break
case 4:p=3
a=o.pop()
i=A.G(a)
$.q().h(B.b,"encodeFunction encrypt: e "+J.K(i),null,null)
throw a
s=6
break
case 3:s=2
break
case 6:case 1:return A.A(q,r)
case 2:return A.z(o.at(-1),r)}})
return A.B($async$a6,r)},
R(a,b){return this.bI(a,b)},
bI(a4,a5){var s=0,r=A.C(t.D),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$R=A.D(function(a6,a7){if(a6===1){o.push(a7)
s=p}for(;;)switch(s){case 0:a1={}
a1.a=0
e=$.q()
d=a5.a
e.h(B.i,"decodeFunction: data packet length "+d.length,null,null)
a1.b=a1.c=null
m=0
p=4
c={}
b=a5.c
l=b.length
k=a5.b
j=b
i=d
a=a1.b=n.d.J(m)
e.h(B.c,"decodeFunction: start decrypting data packet length "+J.b_(i)+", ivLength "+A.b(l)+", keyIndex "+A.b(k)+", iv "+A.b(j),null,null)
if(a==null||!n.d.c){q=null
s=1
break}c.a=a
h=new A.cJ(a1,c,n,j,i,m)
g=new A.cK(a1,c,n,h)
p=8
s=11
return A.j(h.$0(),$async$R)
case 11:p=4
s=10
break
case 8:p=7
a2=o.pop()
f=A.G(a2)
e=$.q()
e.h(B.c,"decodeFunction: kInternalError catch "+A.b(f),null,null)
s=12
return A.j(g.$0(),$async$R)
case 12:s=10
break
case 7:s=4
break
case 10:d=a1.c
if(d==null){a1=A.M(u.r)
throw A.c(a1)}c=n.d
c.r=0
c.c=!0
e.h(B.c,u.f+J.b_(i)+", decrypted: "+A.E(d,0,null).length,null,null)
a1=a1.c
a1.toString
a1=A.E(a1,0,null)
q=a1
s=1
break
p=2
s=6
break
case 4:p=3
a3=o.pop()
n.d.aX()
throw a3
s=6
break
case 3:s=2
break
case 6:case 1:return A.A(q,r)
case 2:return A.z(o.at(-1),r)}})
return A.B($async$R,r)}}
A.cJ.prototype={
$0(){var s=0,r=A.C(t.H),q=this,p,o,n,m,l,k,j
var $async$$0=A.D(function(a,b){if(a===1)return A.z(b,r)
for(;;)switch(s){case 0:m=q.c
l=m.f.crypto.subtle
k=A.e(A.f(["name","AES-GCM","iv",q.d],t.N,t.K))
if(k==null)k=A.aa(k)
p=q.b
j=t.a
s=2
return A.j(A.a2(l.decrypt(k,p.a.b,q.e),t.X),$async$$0)
case 2:o=j.a(b)
k=q.a
k.c=o
l=$.q()
l.h(B.c,u.D+A.E(o,0,null).length,null,null)
n=k.c
if(n==null)throw A.c(A.M("[decryptFrameInternal] could not decrypt"))
l.h(B.c,u.D+A.E(n,0,null).length,null,null)
s=p.a!==k.b?3:4
break
case 3:l.h(B.i,u.E,null,null)
s=5
return A.j(m.d.K(p.a,q.f),$async$$0)
case 5:case 4:return A.A(null,r)}})
return A.B($async$$0,r)},
$S:2}
A.cK.prototype={
$0(){var s=0,r=A.C(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$$0=A.D(function(a,b){if(a===1)return A.z(b,r)
for(;;)switch(s){case 0:n=q.a
m=n.a
l=q.c
k=l.d
j=k.d
i=j.c
if(m>=i||i<=0)throw A.c(A.M(u.w))
m=q.b
s=2
return A.j(k.L(m.a.a,j.b),$async$$0)
case 2:p=b
s=3
return A.j(l.d.M(m.a.a,J.em(p)),$async$$0)
case 3:o=b
l=l.d
h=m
s=4
return A.j(l.I(o,l.d.b),$async$$0)
case 4:h.a=b;++n.a
s=5
return A.j(q.d.$0(),$async$$0)
case 5:return A.A(null,r)}})
return A.B($async$$0,r)},
$S:2}
A.Q.prototype={
aN(){return"CryptorError."+this.b}}
A.cR.prototype={}
A.ah.prototype={
gaY(){if(this.b==null)return!1
return this.r},
X(a,b,c,d,e,f,g){return this.bc(a,b,c,d,e,f,g)},
bb(a,b,c,d,e,f){return this.X(null,a,b,c,d,e,f)},
bc(a,b,c,d,e,f,g){var s=0,r=A.C(t.H),q,p=this,o,n,m,l,k,j
var $async$X=A.D(function(h,a0){if(h===1)return A.z(a0,r)
for(;;)switch(s){case 0:j=$.q()
j.h(B.e,"setupTransform "+d+" kind "+c,null,null)
p.f=c
if(a!=null){j.h(B.e,"setting codec on cryptor to "+a,null,null)
p.d=a}if(b&&p.w){j.h(B.e,"setupTransform: transform already active, skipping setup",null,null)
s=1
break}j=v.G.TransformStream
m=d==="encode"?A.fw(p.gbL()):A.fw(p.gbG())
l=t.N
o=new j(A.bL(A.e(A.f(["transform",m],l,t.g))))
try{e.pipeThrough(o).pipeTo(g)}catch(i){n=A.G(i)
$.q().h(B.b,"e "+J.K(n),null,null)
if(p.x!==B.p){p.x=B.p
p.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",p.b,"state","internalError","error","Internal error: "+J.K(n)],l,t.T)))}}p.w=!0
p.c=f
case 1:return A.A(q,r)}})
return A.B($async$X,r)},
aw(a,b){var s,r,q,p,o,n,m=this,l=null,k="Unsupported codec for track ",j=""
if(A.es(a,"RTCEncodedVideoFrame")){s=A.E(a.data,0,l)
if("type" in a){j=a.type
$.q().h(B.c,"frameType: "+j,l,l)}}else s=l
r=A.F(["h264","h265"],t.s)
q=b==null?l:b.toLowerCase()
if(B.A.bE(r,q==null?"":q)){if(s==null)throw A.c(A.ci("Frame data is null for codec "+A.b(b)))
b.toString
p=A.ji(s,b)
r=p.b
if(r==="unknown"){if(m.x!==B.y){m.x=B.y
q=m.b
o=m.c
n=m.f
n===$&&A.a3()
m.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",q,"trackId",o,"kind",n,"state","unsupportedCodec","error",k+o+", detected codec "+r],t.N,t.T)))}throw A.c(A.M(k+m.c))}return p.a}switch(j){case"key":return 10
case"delta":return 3
case"audio":return 1
default:return 0}},
b1(a){var s,r,q,p,o,n=null
new Uint8Array(0)
if(A.es(a,"RTCEncodedVideoFrame")){s=A.E(a.data,0,n)
if("type" in a){r=a.type
$.q().h(B.c,"frameType: "+r,n,n)}else r=""
q=a.getMetadata()
p=q.synchronizationSource
if("rtpTimestamp" in q)o=J.eS(q.rtpTimestamp)
else o="timestamp" in a?A.aq(A.eC(a.timestamp)):0}else{if(A.es(a,"RTCEncodedAudioFrame")){s=A.E(a.data,0,n)
q=a.getMetadata()
p=q.synchronizationSource
if("rtpTimestamp" in q)o=J.eS(q.rtpTimestamp)
else o="timestamp" in a?A.aq(A.eC(a.timestamp)):0}else throw A.c(A.M("encodeFunction: frame is not a RTCEncodedVideoFrame or RTCEncodedAudioFrame"))
r="audio"}return new A.cR(r,p,o,s)},
an(a,b,c){a.data=t.a.a(B.d.gG(c.av()))
b.enqueue(a)},
a5(a,b){return this.bM(a,b)},
bM(a6,a7){var s=0,r=A.C(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$a5=A.D(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:p=4
d=!0
if(n.gaY()){c=a6.data
if(!(c.byteLength===0)){d=a6.data
d=d.byteLength===0}}if(d){if(n.e.d.r){s=1
break}a7.enqueue(a6)
s=1
break}m=n.b1(a6)
d=$.q()
d.h(B.i,"encodeFunction: buffer "+m.d.length+", synchronizationSource "+m.b+" frameType "+m.a,null,null)
c=n.e.J(n.y)
l=c==null?null:c.b
k=n.y
if(l==null){if(n.x!==B.o){n.x=B.o
d=n.b
c=n.c
b=n.f
b===$&&A.a3()
n.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",d,"trackId",c,"kind",b,"state","missingKey","error","Missing key for track "+c],t.N,t.T)))}s=1
break}c=n.f
c===$&&A.a3()
j=c==="video"?n.aw(a6,n.d):1
b=m.b
a=m.c
a0=new DataView(new ArrayBuffer(12))
c=n.a
if(c.i(0,b)==null)c.u(0,b,$.ek().aq(65535))
a1=c.i(0,b)
if(a1==null)a1=0
a0.setUint32(0,b,!1)
a0.setUint32(4,a,!1)
a0.setUint32(8,a-B.h.a8(a1,65535),!1)
c.u(0,b,a1+1)
i=J.el(B.q.gG(a0))
h=new DataView(new ArrayBuffer(2))
c=h
c.$flags&2&&A.V(c,6)
J.eQ(c,0,12)
c=h
c.$flags&2&&A.V(c,6)
J.eQ(c,1,k)
c=n.z
b=c.crypto.subtle
a=t.N
a2=A.e(A.f(["name","AES-GCM","iv",i,"additionalData",B.d.v(m.d,0,j)],a,t.K))
if(a2==null)a2=A.aa(a2)
a5=t.a
s=7
return A.j(A.a2(b.encrypt(a2,l,B.d.v(m.d,j,m.d.length)),t.X),$async$a5)
case 7:g=a5.a(a9)
d.h(B.c,"encodeFunction: encrypted buffer: "+m.d.length+", cipherText: "+A.E(g,0,null).length,null,null)
b=$.cC()
f=new A.bw(b)
J.aZ(f,new Uint8Array(A.ab(B.d.v(m.d,0,j))))
J.aZ(f,A.E(g,0,null))
J.aZ(f,i)
J.aZ(f,J.el(J.em(h)))
n.an(a6,a7,f)
if(n.x!==B.j){n.x=B.j
c.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",n.b,"trackId",n.c,"kind",n.f,"state","ok","error","encryption ok"],a,t.T)))}d.h(B.c,"encodeFunction[CryptorError.kOk]: frame enqueued kind "+n.f+",codec "+A.b(n.d)+" headerLength: "+A.b(j)+",  timestamp: "+m.c+", ssrc: "+m.b+", data length: "+m.d.length+", encrypted length: "+f.av().length+", iv "+A.b(i),null,null)
p=2
s=6
break
case 4:p=3
a4=o.pop()
e=A.G(a4)
$.q().h(B.b,"encodeFunction encrypt: e "+J.K(e),null,null)
if(n.x!==B.x){n.x=B.x
d=n.b
c=n.c
b=n.f
b===$&&A.a3()
n.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",d,"trackId",c,"kind",b,"state","encryptError","error",J.K(e)],t.N,t.T)))}s=6
break
case 3:s=2
break
case 6:case 1:return A.A(q,r)
case 2:return A.z(o.at(-1),r)}})
return A.B($async$a5,r)},
P(a,b){return this.bH(a,b)},
bH(b0,b1){var s=0,r=A.C(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$P=A.D(function(b2,b3){if(b2===1){o.push(b3)
s=p}for(;;)switch(s){case 0:a6={}
a7=n.b1(b0)
a6.a=0
b=$.q()
b.h(B.i,"decodeFunction: frame length "+a7.d.length,null,null)
a6.b=a6.c=null
a6.d=n.y
if(!n.gaY()||a7.d.length===0){n.Q.b2()
if(n.e.d.r){s=1
break}b.h(B.i,"enqueuing empty dtx frame",null,null)
b1.enqueue(b0)
s=1
break}a=n.e.d.e
if(a!=null){a0=a7.d
a1=a.length
a2=a1+1
if(a0.length>a2){a3=B.d.v(a7.d,a7.d.length-a1,a7.d.length)
b.h(B.c,"magicBytesBuffer "+A.b(a3)+", magicBytes "+A.b(a),null,null)
a0=n.Q
if(A.cV(a3,"[","]")===A.cV(a,"[","]")){++a0.a
if(a0.b==null)a0.b=Date.now()
a0.c=Date.now()
if(a0.a<100)if(a0.b!=null){a6=Date.now()
a0=a0.b
a0.toString
a0=a6-a0<2000
a6=a0}else a6=!0
else a6=!1
if(a6){b.h(B.c,"decodeFunction: skip unencrypted frame, type "+B.d.aC(a7.d,a7.d.length-1)[0],null,null)
e=new A.bw($.cC())
e.aT(0,new Uint8Array(A.ab(B.d.v(a7.d,0,a7.d.length-a2))))
b.h(B.i,"decodeFunction: enqueuing silent frame src: "+A.b(a7.d),null,null)
n.an(b0,b1,e)
b.h(B.i,"decodeFunction: enqueuing done",null,null)
s=1
break}else{b.h(B.b,"decodeFunction: SIF limit reached, dropping frame",null,null)
s=1
break}}else a0.b2()}}p=4
a={}
a0=n.f
a0===$&&A.a3()
m=a0==="video"?n.aw(b0,n.d):1
l=B.d.aC(a7.d,a7.d.length-2)
k=J.eP(l,0)
j=J.eP(l,1)
i=B.d.v(a7.d,a7.d.length-k-2,a7.d.length-2)
a4=a6.b=n.e.J(j)
a6.d=j
b.h(B.c,"decodeFunction: start decrypting frame headerLength "+A.b(m)+" "+a7.d.length+" frameTrailer "+A.b(l)+", ivLength "+A.b(k)+", keyIndex "+A.b(j)+", iv "+A.b(i),null,null)
if(a4==null||!n.e.c){if(n.x!==B.o){n.x=B.o
a6=n.b
b=n.c
n.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",a6,"trackId",b,"kind",n.f,"state","missingKey","error","Missing key for track "+b],t.N,t.T)))}s=1
break}a.a=a4
h=new A.cP(a6,a,n,i,a7,m,k)
g=new A.cQ(a6,a,n,h)
p=8
s=11
return A.j(h.$0(),$async$P)
case 11:p=4
s=10
break
case 8:p=7
a8=o.pop()
f=A.G(a8)
n.x=B.p
b=$.q()
b.h(B.c,"decodeFunction: kInternalError catch "+A.b(f),null,null)
s=12
return A.j(g.$0(),$async$P)
case 12:s=10
break
case 7:s=4
break
case 10:a=a6.c
if(a==null){a6=A.M(u.r)
throw A.c(a6)}a0=n.e
a0.r=0
a0.c=!0
b.h(B.c,u.f+a7.d.length+", decrypted: "+A.E(a,0,null).length,null,null)
a=$.cC()
e=new A.bw(a)
J.aZ(e,new Uint8Array(A.ab(B.d.v(a7.d,0,m))))
a6=a6.c
a6.toString
J.aZ(e,A.E(a6,0,null))
n.an(b0,b1,e)
if(n.x!==B.j){n.x=B.j
n.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",n.b,"trackId",n.c,"kind",n.f,"state","ok","error","decryption ok"],t.N,t.T)))}b.h(B.i,"decodeFunction[CryptorError.kOk]: decryption success kind "+n.f+", headerLength: "+A.b(m)+", timestamp: "+a7.c+", ssrc: "+a7.b+", data length: "+a7.d.length+", decrypted length: "+e.av().length+", keyindex "+A.b(j)+" iv "+A.b(i),null,null)
p=2
s=6
break
case 4:p=3
a9=o.pop()
d=A.G(a9)
c=A.ad(a9)
$.q().h(B.b,"decodeFunction[CryptorError.kDecryptError]: "+A.b(d)+", "+A.b(c),null,null)
if(n.x!==B.w){n.x=B.w
a6=n.b
b=n.c
a=n.f
a===$&&A.a3()
n.z.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",a6,"trackId",b,"kind",a,"state","decryptError","error",J.K(d)],t.N,t.T)))}n.e.aX()
s=6
break
case 3:s=2
break
case 6:case 1:return A.A(q,r)
case 2:return A.z(o.at(-1),r)}})
return A.B($async$P,r)}}
A.cP.prototype={
$0(){var s=0,r=A.C(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$$0=A.D(function(a,b){if(a===1)return A.z(b,r)
for(;;)switch(s){case 0:n=q.c
m=n.z
l=m.crypto.subtle
k=q.e
j=k.d
i=q.f
h=t.N
g=A.e(A.f(["name","AES-GCM","iv",q.d,"additionalData",B.d.v(j,0,i)],h,t.K))
if(g==null)g=A.aa(g)
p=q.b
f=t.a
s=2
return A.j(A.a2(l.decrypt(g,p.a.b,B.d.v(j,i,j.length-q.r-2)),t.X),$async$$0)
case 2:o=f.a(b)
j=q.a
j.c=o
i=$.q()
i.h(B.c,u.D+A.E(o,0,null).length,null,null)
l=j.c
if(l==null)throw A.c(A.M("[decryptFrameInternal] could not decrypt"))
i.h(B.c,u.D+A.E(l,0,null).length,null,null)
s=p.a!==j.b?3:4
break
case 3:i.h(B.i,u.E,null,null)
s=5
return A.j(n.e.K(p.a,j.d),$async$$0)
case 5:case 4:l=n.x
if(l!==B.j&&l!==B.z&&j.a>0){i.h(B.c,"decodeFunction::decryptFrameInternal: KeyRatcheted: ssrc "+k.b+" timestamp "+k.c+" ratchetCount "+j.a+"  participantId: "+A.b(n.b),null,null)
i.h(B.c,"decodeFunction::decryptFrameInternal: ratchetKey: lastError != CryptorError.kKeyRatcheted, reset state to kKeyRatcheted",null,null)
n.x=B.z
l=n.b
k=n.c
n=n.f
n===$&&A.a3()
m.postMessage(A.e(A.f(["type","cryptorState","msgType","event","participantId",l,"trackId",k,"kind",n,"state","keyRatcheted","error","Key ratcheted ok"],h,t.T)))}return A.A(null,r)}})
return A.B($async$$0,r)},
$S:2}
A.cQ.prototype={
$0(){var s=0,r=A.C(t.H),q=this,p,o,n,m,l,k,j,i,h
var $async$$0=A.D(function(a,b){if(a===1)return A.z(b,r)
for(;;)switch(s){case 0:n=q.a
m=n.a
l=q.c
k=l.e
j=k.d
i=j.c
if(m>=i||i<=0)throw A.c(A.M(u.w))
m=q.b
s=2
return A.j(k.L(m.a.a,j.b),$async$$0)
case 2:p=b
s=3
return A.j(l.e.M(m.a.a,J.em(p)),$async$$0)
case 3:o=b
l=l.e
h=m
s=4
return A.j(l.I(o,l.d.b),$async$$0)
case 4:h.a=b;++n.a
s=5
return A.j(q.d.$0(),$async$$0)
case 5:return A.A(null,r)}})
return A.B($async$$0,r)},
$S:2}
A.cX.prototype={
j(a){var s=this
return"KeyOptions{sharedKey: "+s.a+", ratchetWindowSize: "+s.c+", failureTolerance: "+s.d+", uncryptedMagicBytes: "+A.b(s.e)+", ratchetSalt: "+A.b(s.b)+"}"}}
A.c2.prototype={
F(a){var s,r,q=this,p=q.c
if(p.a)return q.V()
s=q.d
r=s.i(0,a)
if(r==null){r=A.f4(p,a,q.a)
p=q.f
if(p.length!==0)r.b7(p)
s.u(0,a,r)}return r},
V(){var s=this,r=s.e
return r==null?s.e=A.f4(s.c,"shared-key",s.a):r},
W(a,b){return this.ba(a,b)},
ba(a,b){var s=0,r=A.C(t.H),q=this
var $async$W=A.D(function(c,d){if(c===1)return A.z(d,r)
for(;;)switch(s){case 0:$.q().h(B.e,"setting shared key",null,null)
q.f=a
s=2
return A.j(q.V().C(a,b),$async$W)
case 2:return A.A(null,r)}})
return A.B($async$W,r)}}
A.bb.prototype={}
A.ce.prototype={
aX(){var s=this,r=s.d.d
if(r<0)return
if(++s.r>r){$.q().h(B.b,"key for "+s.f+" is being marked as invalid",null,null)
s.c=!1}},
T(a){return this.bP(a)},
bP(a){var s=0,r=A.C(t.D),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$T=A.D(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=n.J(a)
i=j==null?null:j.a
if(i==null){q=null
s=1
break}p=4
g=t.a
s=7
return A.j(A.a2(n.e.crypto.subtle.exportKey("raw",i),t.X),$async$T)
case 7:m=g.a(c)
j=A.E(m,0,null)
q=j
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
l=A.G(h)
$.q().h(B.b,"exportKey: "+A.b(l),null,null)
q=null
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.A(q,r)
case 2:return A.z(o.at(-1),r)}})
return A.B($async$T,r)},
D(a){return this.bY(a)},
bY(a){var s=0,r=A.C(t.D),q,p=this,o,n,m,l
var $async$D=A.D(function(b,c){if(b===1)return A.z(c,r)
for(;;)switch(s){case 0:m=p.J(a)
l=m==null?null:m.a
if(l==null){q=null
s=1
break}m=p.d.b
s=3
return A.j(p.L(l,m),$async$D)
case 3:o=c
s=5
return A.j(p.M(l,B.d.gG(o)),$async$D)
case 5:s=4
return A.j(p.I(c,m),$async$D)
case 4:n=c
s=6
return A.j(p.K(n,a==null?p.a:a),$async$D)
case 6:q=o
s=1
break
case 1:return A.A(q,r)}})
return A.B($async$D,r)},
M(a,b){return this.bZ(a,b)},
bZ(a,b){var s=0,r=A.C(t.m),q,p=this
var $async$M=A.D(function(c,d){if(c===1)return A.z(d,r)
for(;;)switch(s){case 0:s=3
return A.j(A.a2(A.eG(p.e.crypto.subtle,"importKey",["raw",t.a.a(b),a.algorithm.name,!1,t.c.a(A.e(A.F(["deriveBits","deriveKey"],t.s)))]),t.m),$async$M)
case 3:q=d
s=1
break
case 1:return A.A(q,r)}})
return A.B($async$M,r)},
J(a){var s=this.b
s===$&&A.a3()
return s[a==null?this.a:a]},
C(a,b){return this.b8(a,b)},
b7(a){return this.C(a,0)},
b8(a,b){var s=0,r=A.C(t.H),q=this,p,o
var $async$C=A.D(function(c,d){if(c===1)return A.z(d,r)
for(;;)switch(s){case 0:p=q.e.crypto.subtle
o=t.N
o=A.e(A.f(["name","PBKDF2"],o,o))
if(o==null)o=A.aa(o)
s=4
return A.j(A.a2(A.eG(p,"importKey",["raw",a,o,!1,t.c.a(A.e(A.F(["deriveBits","deriveKey"],t.s)))]),t.m),$async$C)
case 4:s=3
return A.j(q.I(d,q.d.b),$async$C)
case 3:s=2
return A.j(q.K(d,b),$async$C)
case 2:q.r=0
q.c=!0
return A.A(null,r)}})
return A.B($async$C,r)},
K(a,b){return this.b9(a,b)},
b9(a,b){var s=0,r=A.C(t.H),q=this,p
var $async$K=A.D(function(c,d){if(c===1)return A.z(d,r)
for(;;)switch(s){case 0:$.q().h(B.a,"setKeySetFromMaterial: set new key, index: "+b,null,null)
if(b>=0){p=q.b
p===$&&A.a3()
q.a=B.h.a8(b,p.length)}p=q.b
p===$&&A.a3()
p[q.a]=a
return A.A(null,r)}})
return A.B($async$K,r)},
I(a,b){return this.bJ(a,b)},
bJ(a,b){var s=0,r=A.C(t.h),q,p=this,o,n,m,l,k,j,i
var $async$I=A.D(function(c,d){if(c===1)return A.z(d,r)
for(;;)switch(s){case 0:n=A.fM(A.k(a.algorithm.name),b)
m=p.e.crypto.subtle
l=A.e(n)
if(l==null)l=A.aa(l)
o=A.e(A.f(["name","AES-GCM","length",128],t.N,t.K))
if(o==null)o=A.aa(o)
k=A
j=a
i=A
s=3
return A.j(A.a2(A.eG(m,"deriveKey",[l,a,o,!1,t.c.a(A.e(A.F(["encrypt","decrypt"],t.s)))]),t.X),$async$I)
case 3:q=new k.bb(j,i.bL(d))
s=1
break
case 1:return A.A(q,r)}})
return A.B($async$I,r)},
L(a,b){return this.bX(a,b)},
bX(a,b){var s=0,r=A.C(t.p),q,p=this,o,n,m,l
var $async$L=A.D(function(c,d){if(c===1)return A.z(d,r)
for(;;)switch(s){case 0:o=A.fM("PBKDF2",b)
n=p.e.crypto.subtle
m=A.e(o)
if(m==null)m=A.aa(m)
l=A
s=3
return A.j(A.a2(n.deriveBits(m,a,256),t.a),$async$L)
case 3:q=l.E(d,0,null)
s=1
break
case 1:return A.A(q,r)}})
return A.B($async$L,r)}}
A.c5.prototype={}
A.d4.prototype={
b2(){var s=this
if(s.b==null)return
if(++s.d>s.a||Date.now()-s.c>2000)s.b3()},
b3(){this.a=this.d=0
this.b=null}}
A.dY.prototype={
$1(a){return a.c===this.a},
$S:1}
A.dS.prototype={
$1(a){return a.c===this.a},
$S:10}
A.eh.prototype={
$1(a){return a.c===this.a},
$S:1}
A.ei.prototype={
$1(a){return a.c===this.a},
$S:10}
A.e9.prototype={
$1(a){A.jh("["+a.d+"] "+a.a.a+": "+a.b)},
$S:22}
A.ea.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.q()
g.h(B.e,"Got onrtctransform event",h,h)
s=a.transformer
s.handled=!0
r=A.bL(s.options)
q=A.k(r.kind)
p=A.k(r.participantId)
o=A.k(r.trackId)
n=A.eD(r.codec)
m=A.k(r.msgType)
l=A.k(r.keyProviderId)
k=$.a1.i(0,l)
if(k==null){g.h(B.b,"KeyProvider not found for "+l,h,h)
return}j=A.fP(p,o,k)
g=s.readable
i=s.writable
j.X(n==null?h:n,!1,q,m,g,o,i)},
$S:11}
A.ec.prototype={
$1(a){return this.b6(a)},
b6(d2){var s=0,r=A.C(t.P),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1
var $async$$1=A.D(function(d3,d4){if(d3===1){o.push(d4)
s=p}for(;;)switch(s){case 0:c6=t.f.a(A.fL(d2.data))
c7=c6.i(0,"msgType")
c8=A.eD(c6.i(0,"msgId"))
c9=$.q()
c9.h(B.a,"Got message "+A.b(c7)+", msgId "+A.b(c8),null,null)
case 3:switch(c7){case"keyProviderInit":s=5
break
case"keyProviderDispose":s=6
break
case"enable":s=7
break
case"decode":s=8
break
case"encode":s=9
break
case"removeTransform":s=10
break
case"setKey":s=11
break
case"setSharedKey":s=12
break
case"ratchetKey":s=13
break
case"ratchetSharedKey":s=14
break
case"setKeyIndex":s=15
break
case"exportKey":s=16
break
case"exportSharedKey":s=17
break
case"setSifTrailer":s=18
break
case"updateCodec":s=19
break
case"dispose":s=20
break
case"dataCryptorEncrypt":s=21
break
case"dataCryptorDecrypt":s=22
break
case"dataCryptorDispose":s=23
break
default:s=24
break}break
case 5:a0=c6.i(0,"keyOptions")
a1=A.k(c6.i(0,"keyProviderId"))
a2=J.dT(a0)
a3=a2.i(a0,"sharedKey")
a4=new Uint8Array(A.ab(B.m.H(A.k(a2.i(a0,"ratchetSalt")))))
a5=a2.i(a0,"ratchetWindowSize")
a6=a2.i(a0,"failureTolerance")
if(a6==null)a6=-1
a7=a2.i(a0,"uncryptedMagicBytes")!=null?new Uint8Array(A.ab(B.m.H(A.k(a2.i(a0,"uncryptedMagicBytes"))))):null
a8=a2.i(a0,"keyRingSize")
if(a8==null)a8=16
a2=a2.i(a0,"discardFrameWhenCryptorNotReady")
a9=new A.cX(a3,a4,a5,a6,a7,a8,a2==null?!1:a2)
c9.h(B.a,"Init with keyProviderOptions:\n "+a9.j(0),null,null)
c9=v.G
a2=c9.self
a3=t.N
a4=new Uint8Array(0)
$.a1.u(0,a1,new A.c2(a2,a9,A.be(a3,t.F),a4))
c9.self.postMessage(A.e(A.f(["type","init","msgId",c8,"msgType","response"],a3,t.T)))
s=4
break
case 6:a1=A.k(c6.i(0,"keyProviderId"))
c9.h(B.a,"Dispose keyProvider "+a1,null,null)
$.a1.c0(0,a1)
v.G.self.postMessage(A.e(A.f(["type","dispose","msgId",c8,"msgType","response"],t.N,t.T)))
s=4
break
case 7:b0=A.eB(c6.i(0,"enabled"))
b1=A.k(c6.i(0,"trackId"))
a2=$.ay
a3=A.aR(a2).k("am<1>")
b2=A.f_(new A.am(a2,new A.e3(b1),a3),a3.k("d.E"))
for(a2=b2.length,a3=""+b0,a4="Set enable "+a3+" for trackId ",a5="setEnabled["+a3+u.h,b3=0;b3<b2.length;b2.length===a2||(0,A.bP)(b2),++b3){k=b2[b3]
c9.h(B.a,a4+k.c,null,null)
if(k.x!==B.j){c9.h(B.e,a5,null,null)
k.x=B.l}c9.h(B.a,"setEnabled for "+A.b(k.b)+", enabled: "+a3,null,null)
k.r=b0}v.G.self.postMessage(A.e(A.f(["type","cryptorEnabled","enable",b0,"msgId",c8,"msgType","response"],t.N,t.X)))
s=4
break
case 8:case 9:b4=c6.i(0,"kind")
b5=A.eB(c6.i(0,"exist"))
n=A.k(c6.i(0,"participantId"))
b1=c6.i(0,"trackId")
b6=A.bL(c6.i(0,"readableStream"))
b7=A.bL(c6.i(0,"writableStream"))
a1=A.k(c6.i(0,"keyProviderId"))
c9.h(B.a,"SetupTransform for kind "+A.b(b4)+", trackId "+A.b(b1)+", participantId "+n+", "+J.eo(b6).j(0)+" "+J.eo(b7).j(0)+"}",null,null)
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","cryptorSetup","participantId",n,"trackId",b1,"exist",b5,"operation",c7,"error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.z)))
s=1
break}k=A.fP(n,b1,b8)
s=25
return A.j(k.bb(b5&&J.cD(c7,"decode"),b4,c7,b6,b1,b7),$async$$1)
case 25:v.G.self.postMessage(A.e(A.f(["type","cryptorSetup","participantId",n,"trackId",b1,"exist",b5,"operation",c7,"msgId",c8,"msgType","response"],t.N,t.z)))
k.x=B.l
s=4
break
case 10:b1=A.k(c6.i(0,"trackId"))
c9.h(B.a,"Removing trackId "+b1,null,null)
A.jm(b1)
v.G.self.postMessage(A.e(A.f(["type","cryptorRemoved","trackId",b1,"msgId",c8,"msgType","response"],t.N,t.T)))
s=4
break
case 11:case 12:b9=new Uint8Array(A.ab(B.m.H(A.k(c6.i(0,"key")))))
e=A.aq(c6.i(0,"keyIndex"))
a1=A.k(c6.i(0,"keyProviderId"))
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","setKey","error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}a2=b8.c.a
a3=""+e
s=a2?26:28
break
case 26:c9.h(B.a,"Set SharedKey keyIndex "+a3,null,null)
s=29
return A.j(b8.W(b9,e),$async$$1)
case 29:s=27
break
case 28:n=A.k(c6.i(0,"participantId"))
c9.h(B.a,"Set key for participant "+n+", keyIndex "+a3,null,null)
s=30
return A.j(b8.F(n).C(b9,e),$async$$1)
case 30:case 27:v.G.self.postMessage(A.e(A.f(["type","setKey","participantId",c6.i(0,"participantId"),"sharedKey",a2,"keyIndex",e,"msgId",c8,"msgType","response"],t.N,t.z)))
s=4
break
case 13:case 14:e=c6.i(0,"keyIndex")
n=A.k(c6.i(0,"participantId"))
a1=A.k(c6.i(0,"keyProviderId"))
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","setKey","error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}a2=b8.c.a
s=a2?31:33
break
case 31:c9.h(B.a,"RatchetKey for SharedKey, keyIndex "+A.b(e),null,null)
s=34
return A.j(b8.V().D(e),$async$$1)
case 34:c0=d4
s=32
break
case 33:c9.h(B.a,"RatchetKey for participant "+n+", keyIndex "+A.b(e),null,null)
s=35
return A.j(b8.F(n).D(e),$async$$1)
case 35:c0=d4
case 32:c9=v.G.self
a3=c0!=null?B.t.H(c0):""
c9.postMessage(A.e(A.f(["type","ratchetKey","sharedKey",a2,"participantId",n,"newKey",a3,"keyIndex",e,"msgId",c8,"msgType","response"],t.N,t.z)))
s=4
break
case 15:e=c6.i(0,"index")
b1=A.k(c6.i(0,"trackId"))
c9.h(B.a,"Setup key index for track "+b1,null,null)
a2=$.ay
a3=A.aR(a2).k("am<1>")
b2=A.f_(new A.am(a2,new A.e4(b1),a3),a3.k("d.E"))
for(a2=b2.length,b3=0;b3<b2.length;b2.length===a2||(0,A.bP)(b2),++b3){c1=b2[b3]
c9.h(B.a,"Set keyIndex for trackId "+c1.c,null,null)
if(c1.x!==B.j){c9.h(B.e,"setKeyIndex: lastError != CryptorError.kOk, reset state to kNew",null,null)
c1.x=B.l}c9.h(B.a,"setKeyIndex for "+A.b(c1.b)+", newIndex: "+A.b(e),null,null)
c1.y=e}v.G.self.postMessage(A.e(A.f(["type","setKeyIndex","keyIndex",e,"msgId",c8,"msgType","response"],t.N,t.z)))
s=4
break
case 16:case 17:e=A.aq(c6.i(0,"keyIndex"))
n=A.k(c6.i(0,"participantId"))
a1=A.k(c6.i(0,"keyProviderId"))
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","setKey","error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}a2=""+e
s=b8.c.a?36:38
break
case 36:c9.h(B.a,"Export SharedKey keyIndex "+a2,null,null)
s=39
return A.j(b8.V().T(e),$async$$1)
case 39:b9=d4
s=37
break
case 38:c9.h(B.a,"Export key for participant "+n+", keyIndex "+a2,null,null)
s=40
return A.j(b8.F(n).T(e),$async$$1)
case 40:b9=d4
case 37:c9=v.G.self
a2=b9!=null?B.t.H(b9):""
c9.postMessage(A.e(A.f(["type","exportKey","participantId",n,"keyIndex",e,"exportedKey",a2,"msgId",c8,"msgType","response"],t.N,t.X)))
s=4
break
case 18:c2=new Uint8Array(A.ab(B.m.H(A.k(c6.i(0,"sifTrailer")))))
a1=A.k(c6.i(0,"keyProviderId"))
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","setKey","error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}b8.c.e=c2
c9.h(B.a,"SetSifTrailer = "+A.b(c2),null,null)
for(a2=$.ay,a3=a2.length,b3=0;b3<a2.length;a2.length===a3||(0,A.bP)(a2),++b3){c1=a2[b3]
c9.h(B.a,"setSifTrailer for "+A.b(c1.b)+", magicBytes: "+A.b(c2),null,null)
c1.e.d.e=c2}v.G.self.postMessage(A.e(A.f(["type","setSifTrailer","msgId",c8,"msgType","response"],t.N,t.T)))
s=4
break
case 19:c3=A.k(c6.i(0,"codec"))
b1=A.k(c6.i(0,"trackId"))
c9.h(B.a,"Update codec for trackId "+b1+", codec "+c3,null,null)
k=A.ai($.ay,new A.e5(b1))
if(k!=null){if(k.x!==B.j){c9.h(B.e,"updateCodec["+c3+u.h,null,null)
k.x=B.l}c9.h(B.a,"updateCodec for "+A.b(k.b)+", codec: "+c3,null,null)
k.d=c3}v.G.self.postMessage(A.e(A.f(["type","updateCodec","msgId",c8,"msgType","response"],t.N,t.T)))
s=4
break
case 20:b1=A.k(c6.i(0,"trackId"))
c9.h(B.a,"Dispose for trackId "+b1,null,null)
k=A.ai($.ay,new A.e6(b1))
c9=v.G
a2=t.N
a3=t.T
if(k!=null){k.x=B.M
c9.self.postMessage(A.e(A.f(["type","cryptorDispose","participantId",k.b,"trackId",b1,"msgId",c8,"msgType","response"],a2,a3)))}else c9.self.postMessage(A.e(A.f(["type","cryptorDispose","error","cryptor not found","msgId",c8,"msgType","response"],a2,a3)))
s=4
break
case 21:n=A.k(c6.i(0,"participantId"))
m=t.p.a(c6.i(0,"data"))
e=A.aq(c6.i(0,"keyIndex"))
l=A.k(c6.i(0,"dataCryptorId"))
c4=A.k(c6.i(0,"algorithm"))
if(A.ai(B.B,new A.e7(c4))==null){v.G.self.postMessage(A.e(A.f(["type","dataCryptorEncrypt","error","algorithm not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}c9.h(B.a,"Encrypt for dataCryptorId "+A.b(l)+", participantId "+A.b(n)+", keyIndex "+e+", data length "+J.b_(m)+", algorithm "+c4,null,null)
a1=A.k(c6.i(0,"keyProviderId"))
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","dataCryptorEncrypt","error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}k=A.fN(n,l,b8)
p=42
s=45
return A.j(k.a6(k.d,m),$async$$1)
case 45:j=d4
v.G.self.postMessage(A.e(A.f(["type","dataCryptorEncrypt","participantId",n,"dataCryptorId",l,"data",j.a,"keyIndex",j.b,"iv",j.c,"msgId",c8,"msgType","response"],t.N,t.X)))
p=2
s=44
break
case 42:p=41
d0=o.pop()
i=A.G(d0)
$.q().h(B.b,"Error encrypting data: "+A.b(i),null,null)
c9=v.G.self
a2=A.e(A.f(["type","dataCryptorEncrypt","error",J.K(i),"msgId",c8,"msgType","response"],t.N,t.T))
c9.postMessage(a2)
s=44
break
case 41:s=2
break
case 44:s=4
break
case 22:h=A.k(c6.i(0,"participantId"))
a2=t.p
g=a2.a(c6.i(0,"data"))
f=a2.a(c6.i(0,"iv"))
e=A.aq(c6.i(0,"keyIndex"))
d=A.k(c6.i(0,"dataCryptorId"))
c4=A.k(c6.i(0,"algorithm"))
if(A.ai(B.B,new A.e8(c4))==null){v.G.self.postMessage(A.e(A.f(["type","dataCryptorDecrypt","error","algorithm not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}c9.h(B.a,"Decrypt for dataCryptorId "+A.b(d)+", participantId "+A.b(h)+", keyIndex "+A.b(e)+", data length "+J.b_(g)+", algorithm "+c4,null,null)
a1=A.k(c6.i(0,"keyProviderId"))
b8=$.a1.i(0,a1)
if(b8==null){c9.h(B.b,"KeyProvider not found for "+a1,null,null)
v.G.self.postMessage(A.e(A.f(["type","dataCryptorDecrypt","error","KeyProvider not found","msgId",c8,"msgType","response"],t.N,t.T)))
s=1
break}c=A.fN(h,d,b8)
p=47
s=50
return A.j(c.R(c.d,new A.b4(g,e,f)),$async$$1)
case 50:b=d4
v.G.self.postMessage(A.e(A.f(["type","dataCryptorDecrypt","participantId",h,"dataCryptorId",d,"data",b,"msgId",c8,"msgType","response"],t.N,t.X)))
p=2
s=49
break
case 47:p=46
d1=o.pop()
a=A.G(d1)
$.q().h(B.b,"Error decrypting data: "+A.b(a),null,null)
c9=v.G.self
a2=A.e(A.f(["type","dataCryptorDecrypt","error",J.K(a),"msgId",c8,"msgType","response"],t.N,t.T))
c9.postMessage(a2)
s=49
break
case 46:s=2
break
case 49:s=4
break
case 23:l=A.k(c6.i(0,"dataCryptorId"))
c9.h(B.a,"Dispose for dataCryptorId "+l,null,null)
A.jn(l)
v.G.self.postMessage(A.e(A.f(["type","dataCryptorDispose","dataCryptorId",l,"msgId",c8,"msgType","response"],t.N,t.T)))
s=4
break
case 24:c9.h(B.b,"Unknown message kind "+c6.j(0),null,null)
case 4:case 1:return A.A(q,r)
case 2:return A.z(o.at(-1),r)}})
return A.B($async$$1,r)},
$S:23}
A.e3.prototype={
$1(a){return a.c===this.a},
$S:1}
A.e4.prototype={
$1(a){return a.c===this.a},
$S:1}
A.e5.prototype={
$1(a){return a.c===this.a},
$S:1}
A.e6.prototype={
$1(a){return a.c===this.a},
$S:1}
A.e7.prototype={
$1(a){return a.b===this.a},
$S:12}
A.e8.prototype={
$1(a){return a.b===this.a},
$S:12}
A.eb.prototype={
$1(a){this.a.$1(a)},
$S:11};(function aliases(){var s=J.a5.prototype
s.be=s.j
s=A.aO.prototype
s.bf=s.a9})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u
s(A,"iW","hK",4)
s(A,"iX","hL",4)
s(A,"iY","hM",4)
r(A,"fJ","iQ",0)
q(A,"iZ","iJ",7)
p(A.u.prototype,"gbl","bm",7)
o(A.bx.prototype,"gbt","bu",0)
var n
p(n=A.ah.prototype,"gbL","a5",9)
p(n,"gbG","P",9)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.h,null)
q(A.h,[A.et,J.bY,A.bo,J.bQ,A.bw,A.r,A.d3,A.d,A.aE,A.c4,A.cn,A.b6,A.d9,A.d2,A.b5,A.bE,A.ag,A.ak,A.cY,A.c3,A.cz,A.R,A.cu,A.dF,A.dD,A.co,A.L,A.aL,A.an,A.aO,A.cq,A.aP,A.u,A.cp,A.cs,A.cw,A.bx,A.cx,A.dJ,A.cv,A.t,A.bU,A.dj,A.di,A.bV,A.dk,A.cd,A.bp,A.dl,A.cO,A.v,A.cy,A.cj,A.d1,A.dx,A.a6,A.aF,A.aG,A.b4,A.az,A.cR,A.ah,A.cX,A.c2,A.bb,A.ce,A.c5,A.d4])
q(J.bY,[J.c_,J.b8,J.ba,J.aC,J.aD,J.b9,J.aB])
q(J.ba,[J.a5,J.w,A.aI,A.bj])
q(J.a5,[J.cf,J.aM,J.W])
r(J.bZ,A.bo)
r(J.cW,J.w)
q(J.b9,[J.b7,J.c0])
q(A.r,[A.bc,A.a_,A.c1,A.cm,A.ch,A.ct,A.bR,A.T,A.bq,A.cl,A.al,A.bT])
q(A.d,[A.i,A.X,A.am])
q(A.i,[A.a7,A.bd,A.bz])
r(A.b3,A.X)
r(A.Y,A.a7)
r(A.bm,A.a_)
q(A.ag,[A.cH,A.cI,A.d8,A.dZ,A.e0,A.df,A.de,A.dK,A.dC,A.dv,A.d6,A.e2,A.ef,A.eg,A.dQ,A.dY,A.dS,A.eh,A.ei,A.e9,A.ea,A.ec,A.e3,A.e4,A.e5,A.e6,A.e7,A.e8,A.eb])
q(A.d8,[A.d5,A.b0])
q(A.ak,[A.aj,A.by])
q(A.cI,[A.e_,A.dL,A.dO,A.dw,A.d0])
r(A.aH,A.aI)
q(A.bj,[A.bg,A.aJ])
q(A.aJ,[A.bA,A.bC])
r(A.bB,A.bA)
r(A.bh,A.bB)
r(A.bD,A.bC)
r(A.bi,A.bD)
q(A.bh,[A.c6,A.c7])
q(A.bi,[A.c8,A.c9,A.ca,A.cb,A.cc,A.bk,A.bl])
r(A.bH,A.ct)
q(A.cH,[A.dg,A.dh,A.dE,A.dm,A.dr,A.dq,A.dp,A.dn,A.du,A.dt,A.ds,A.d7,A.dz,A.dB,A.dN,A.d_,A.cJ,A.cK,A.cP,A.cQ])
r(A.bF,A.aL)
r(A.bu,A.bF)
r(A.aN,A.bu)
r(A.bv,A.an)
r(A.bt,A.bv)
r(A.bG,A.aO)
r(A.bs,A.cq)
r(A.cr,A.cs)
r(A.dA,A.dJ)
r(A.aQ,A.by)
q(A.bU,[A.cG,A.cF])
q(A.T,[A.aK,A.bX])
q(A.dk,[A.af,A.Q])
s(A.bA,A.t)
s(A.bB,A.b6)
s(A.bC,A.t)
s(A.bD,A.b6)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",o:"double",fQ:"num",a8:"String",av:"bool",v:"Null",p:"List",h:"Object",bf:"Map",m:"JSObject"},mangledNames:{},types:["~()","av(ah)","U<~>()","~(@)","~(~())","v(@)","v()","~(h,S)","h?(h?)","~(m,m)","av(az)","v(m)","av(af)","@(@)","@(@,a8)","@(a8)","v(~())","v(@,S)","~(a,@)","v(h,S)","~(h?,h?)","aG()","~(aF)","U<v>(m)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.i6(v.typeUniverse,JSON.parse('{"W":"a5","cf":"a5","aM":"a5","js":"aI","c_":{"l":[]},"b8":{"v":[],"l":[]},"ba":{"m":[]},"a5":{"m":[]},"w":{"p":["1"],"i":["1"],"m":[],"d":["1"]},"bZ":{"bo":[]},"cW":{"w":["1"],"p":["1"],"i":["1"],"m":[],"d":["1"]},"b9":{"o":[]},"b7":{"o":[],"a":[],"l":[]},"c0":{"o":[],"l":[]},"aB":{"a8":[],"l":[]},"bc":{"r":[]},"i":{"d":["1"]},"a7":{"i":["1"],"d":["1"]},"X":{"d":["2"],"d.E":"2"},"b3":{"X":["1","2"],"i":["2"],"d":["2"],"d.E":"2"},"Y":{"a7":["2"],"i":["2"],"d":["2"],"d.E":"2","a7.E":"2"},"am":{"d":["1"],"d.E":"1"},"bm":{"a_":[],"r":[]},"c1":{"r":[]},"cm":{"r":[]},"bE":{"S":[]},"ch":{"r":[]},"aj":{"ak":["1","2"],"bf":["1","2"]},"bd":{"i":["1"],"d":["1"],"d.E":"1"},"aH":{"m":[],"b1":[],"l":[]},"aI":{"m":[],"b1":[],"l":[]},"bj":{"m":[]},"cz":{"b1":[]},"bg":{"er":[],"m":[],"l":[]},"aJ":{"H":["1"],"m":[]},"bh":{"t":["o"],"p":["o"],"H":["o"],"i":["o"],"m":[],"d":["o"]},"bi":{"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"]},"c6":{"cM":[],"t":["o"],"p":["o"],"H":["o"],"i":["o"],"m":[],"d":["o"],"l":[],"t.E":"o"},"c7":{"cN":[],"t":["o"],"p":["o"],"H":["o"],"i":["o"],"m":[],"d":["o"],"l":[],"t.E":"o"},"c8":{"cS":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"c9":{"cT":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"ca":{"cU":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"cb":{"db":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"cc":{"dc":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"bk":{"dd":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"bl":{"ck":[],"t":["a"],"p":["a"],"H":["a"],"i":["a"],"m":[],"d":["a"],"l":[],"t.E":"a"},"ct":{"r":[]},"bH":{"a_":[],"r":[]},"L":{"r":[]},"aN":{"aL":["1"]},"bt":{"an":["1"]},"bG":{"aO":["1"]},"bs":{"cq":["1"]},"u":{"U":["1"]},"bu":{"aL":["1"]},"bv":{"an":["1"]},"bF":{"aL":["1"]},"by":{"ak":["1","2"],"bf":["1","2"]},"aQ":{"by":["1","2"],"ak":["1","2"],"bf":["1","2"]},"bz":{"i":["1"],"d":["1"],"d.E":"1"},"ak":{"bf":["1","2"]},"p":{"i":["1"],"d":["1"]},"bR":{"r":[]},"a_":{"r":[]},"T":{"r":[]},"aK":{"r":[]},"bX":{"r":[]},"bq":{"r":[]},"cl":{"r":[]},"al":{"r":[]},"bT":{"r":[]},"cd":{"r":[]},"bp":{"r":[]},"cy":{"S":[]},"cU":{"p":["a"],"i":["a"],"d":["a"]},"ck":{"p":["a"],"i":["a"],"d":["a"]},"dd":{"p":["a"],"i":["a"],"d":["a"]},"cS":{"p":["a"],"i":["a"],"d":["a"]},"db":{"p":["a"],"i":["a"],"d":["a"]},"cT":{"p":["a"],"i":["a"],"d":["a"]},"dc":{"p":["a"],"i":["a"],"d":["a"]},"cM":{"p":["o"],"i":["o"],"d":["o"]},"cN":{"p":["o"],"i":["o"],"d":["o"]}}'))
A.i5(v.typeUniverse,JSON.parse('{"i":1,"cn":1,"b6":1,"c3":1,"aJ":1,"an":1,"bt":1,"bu":1,"bv":1,"bF":1,"cs":1,"cr":1,"cw":1,"bx":1,"cx":1,"bU":2}'))
var u={o:"Cannot fire new event. Controller is already firing an event",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",r:"[decodeFunction] decryption failed even after ratcheting",w:"[ratchetKeyInternal] cannot ratchet anymore",h:"]: lastError != CryptorError.kOk, reset state to kNew",f:"decodeFunction: decryption success, buffer length ",D:"decodeFunction::decryptFrameInternal: decrypted: ",E:"decodeFunction::decryptFrameInternal: ratchetKey: decryption ok, newState: kKeyRatcheted"}
var t=(function rtii(){var s=A.aW
return{J:s("b1"),Y:s("er"),V:s("i<@>"),C:s("r"),B:s("cM"),q:s("cN"),Z:s("jq"),O:s("cS"),k:s("cT"),U:s("cU"),d:s("d<@>"),s:s("w<a8>"),b:s("w<@>"),t:s("w<a>"),c:s("w<h?>"),u:s("b8"),m:s("m"),g:s("W"),E:s("H<@>"),h:s("bb"),j:s("p<@>"),L:s("aG"),f:s("bf<@,@>"),a:s("aH"),P:s("v"),K:s("h"),F:s("ce"),M:s("ju"),l:s("S"),N:s("a8"),R:s("l"),_:s("a_"),G:s("db"),w:s("dc"),e:s("dd"),p:s("ck"),o:s("aM"),r:s("u<@>"),x:s("u<a>"),A:s("aQ<h?,h?>"),W:s("bG<aF>"),y:s("av"),i:s("o"),z:s("@"),v:s("@(h)"),Q:s("@(h,S)"),S:s("a"),bW:s("b4?"),bc:s("U<v>?"),aQ:s("m?"),I:s("bb?"),X:s("h?"),T:s("a8?"),D:s("ck?"),cG:s("av?"),dd:s("o?"),a3:s("a?"),ae:s("fQ?"),n:s("fQ"),H:s("~"),bo:s("~(h)"),aD:s("~(h,S)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.N=J.bY.prototype
B.A=J.w.prototype
B.h=J.b7.prototype
B.k=J.aB.prototype
B.O=J.W.prototype
B.P=J.ba.prototype
B.q=A.bg.prototype
B.d=A.bl.prototype
B.C=J.cf.prototype
B.r=J.aM.prototype
B.m=new A.cF()
B.t=new A.cG()
B.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.F=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.K=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.J=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.I=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.H=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.v=function(hooks) { return hooks; }

B.L=new A.cd()
B.a2=new A.d3()
B.f=new A.dA()
B.n=new A.cy()
B.l=new A.Q(0,"kNew")
B.j=new A.Q(1,"kOk")
B.w=new A.Q(2,"kDecryptError")
B.x=new A.Q(3,"kEncryptError")
B.y=new A.Q(4,"kUnsupportedCodec")
B.o=new A.Q(5,"kMissingKey")
B.z=new A.Q(6,"kKeyRatcheted")
B.p=new A.Q(7,"kInternalError")
B.M=new A.Q(8,"kDisposed")
B.a=new A.a6("CONFIG",700)
B.c=new A.a6("FINER",400)
B.i=new A.a6("FINE",500)
B.e=new A.a6("INFO",800)
B.b=new A.a6("WARNING",900)
B.D=new A.af(0,"kAesGcm")
B.E=new A.af(1,"kAesCbc")
B.B=s([B.D,B.E],A.aW("w<af>"))
B.Q=A.P("b1")
B.R=A.P("er")
B.S=A.P("cM")
B.T=A.P("cN")
B.U=A.P("cS")
B.V=A.P("cT")
B.W=A.P("cU")
B.X=A.P("m")
B.Y=A.P("h")
B.Z=A.P("db")
B.a_=A.P("dc")
B.a0=A.P("dd")
B.a1=A.P("ck")})();(function staticFields(){$.dy=null
$.au=A.F([],A.aW("w<h>"))
$.f5=null
$.eV=null
$.eU=null
$.fO=null
$.fI=null
$.fS=null
$.dR=null
$.e1=null
$.eJ=null
$.aS=null
$.bM=null
$.bN=null
$.eF=!1
$.n=B.f
$.f1=0
$.hq=A.be(t.N,t.L)
$.ay=A.F([],A.aW("w<ah>"))
$.eN=A.F([],A.aW("w<az>"))
$.a1=A.be(t.N,A.aW("c2"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jp","fW",()=>A.dW("_$dart_dartClosure"))
s($,"jo","ej",()=>A.dW("_$dart_dartClosure_dartJSInterop"))
s($,"jJ","cC",()=>A.f3(0))
s($,"jL","h9",()=>A.F([new J.bZ()],A.aW("w<bo>")))
s($,"jw","fX",()=>A.a0(A.da({
toString:function(){return"$receiver$"}})))
s($,"jx","fY",()=>A.a0(A.da({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"jy","fZ",()=>A.a0(A.da(null)))
s($,"jz","h_",()=>A.a0(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jC","h2",()=>A.a0(A.da(void 0)))
s($,"jD","h3",()=>A.a0(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"jB","h1",()=>A.a0(A.fd(null)))
s($,"jA","h0",()=>A.a0(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"jF","h5",()=>A.a0(A.fd(void 0)))
s($,"jE","h4",()=>A.a0(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"jG","eO",()=>A.hJ())
s($,"jI","h7",()=>new Int8Array(A.ab(A.F([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"jH","h6",()=>A.f3(0))
s($,"jK","h8",()=>A.ee(B.Y))
s($,"jt","ek",()=>{var r=new A.dx(A.hs(8))
r.bg()
return r})
s($,"jr","cB",()=>A.cZ(""))
s($,"jN","q",()=>A.cZ("E2EE.Worker"))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.aI,ArrayBuffer:A.aH,ArrayBufferView:A.bj,DataView:A.bg,Float32Array:A.c6,Float64Array:A.c7,Int16Array:A.c8,Int32Array:A.c9,Int8Array:A.ca,Uint16Array:A.cb,Uint32Array:A.cc,Uint8ClampedArray:A.bk,CanvasPixelArray:A.bk,Uint8Array:A.bl})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aJ.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"
A.bB.$nativeSuperclassTag="ArrayBufferView"
A.bh.$nativeSuperclassTag="ArrayBufferView"
A.bC.$nativeSuperclassTag="ArrayBufferView"
A.bD.$nativeSuperclassTag="ArrayBufferView"
A.bi.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.eL
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=e2ee.worker.dart.js.map
