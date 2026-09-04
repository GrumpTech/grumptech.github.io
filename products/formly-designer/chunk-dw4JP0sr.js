import {e,D as Dv,A as Au,a as Vo,b as bI,H as Ha,g as gf,c as Ay,$ as $v,E as Ef,h as hf,B as Bm,k as ky,U as Uv,F as FI,d as V,j,C,f as Kn$1,i as zO,I,l as kt$1,m as De,S,W as WO,L as LI,q as qO,n as kd,u as uo$1,J,o as ue,M as Mi$1,O as Ol,p as qp,r as ut$1,s as $p,t as Dn$1,z as zp,R as Rp,v as KO,w as Ar$1,y as Yv,G as cf,N as Kv,P as Nf,Q as RI,T as bf,X as Tf,Z as tI,a0 as Xv,a1 as eI,a2 as Cf,a3 as wf,a4 as _v,a5 as vf,a6 as My,a7 as Ed,a8 as Ts,a9 as zh,aa as ZO,ab as pf,ac as Tv,ad as Bc,ae as Ko,af as sf,ag as Ne$1,ah as fg,ai as le,aj as Sv,ak as b,al as Ap,am as $,an as mf,ao as Ba,ap as $a,aq as Qv,ar as nI,K as Ke,as as Gn$1,at as Ie$1,au as ct$1,av as U,aw as Yn$1,ax as x,ay as Ur$1,az as La,aA as Ie$2,aB as kf,_,aC as Up,aD as kI}from'./main-7I3VJYJT.js';var Ii=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n;}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n);}registerOnTouched(e){this.onTouched=e;}registerOnChange(e){this.onChange=e;}setDisabledState(e){this.setProperty("disabled",e);}static \u0275fac=function(n){return new(n||i)(Ko(My),Ko(Kn$1))};static \u0275dir=_v({type:i})}return i})(),Fn=(()=>{class i extends Ii{static \u0275fac=(()=>{let e;return function(r){return (e||(e=fg(i)))(r||i)}})();static \u0275dir=_v({type:i,features:[sf]})}return i})(),Ri=new S("");var Mn={provide:Ri,useExisting:Ur$1(()=>st),multi:true};function An(){let i=x()?x().getUserAgent():"";return /android (\d+)/.test(i.toLowerCase())}var Vn=new S(""),st=(()=>{class i extends Ii{_compositionMode;_composing=false;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!An());}writeValue(e){let n=e??"";this.setProperty("value",n);}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e);}_compositionStart(){this._composing=true;}_compositionEnd(e){this._composing=false,this._compositionMode&&this.onChange(e);}static \u0275fac=function(n){return new(n||i)(Ko(My),Ko(Kn$1),Ko(Vn,8))};static \u0275dir=_v({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&Ef("input",function(d){return r._handleInput(d.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(d){return r._compositionEnd(d.target.value)});},standalone:false,features:[RI([Mn]),sf]})}return i})();function St(i){return i==null||Ot(i)===0}function Ot(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var lt=new S(""),It=new S(""),Sn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,O=class{static min(t){return On(t)}static max(t){return In(t)}static required(t){return Ni(t)}static requiredTrue(t){return Rn(t)}static email(t){return Nn(t)}static minLength(t){return Pn(t)}static maxLength(t){return Tn(t)}static pattern(t){return kn(t)}static nullValidator(t){return Xe()}static compose(t){return ji(t)}static composeAsync(t){return Hi(t)}};function On(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return !isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function In(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return !isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function Ni(i){return St(i.value)?{required:true}:null}function Rn(i){return i.value===true?null:{required:true}}function Nn(i){return St(i.value)||Sn.test(i.value)?null:{email:true}}function Pn(i){return t=>{let e=t.value?.length??Ot(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Tn(i){return t=>{let e=t.value?.length??Ot(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function kn(i){if(!i)return Xe;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(St(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Xe(i){return null}function Pi(i){return i!=null}function Ti(i){return La(i)?Ie$2(i):i}function ki(i){let t={};return i.forEach(e=>{t=e!=null?j(j({},t),e):t;}),Object.keys(t).length===0?null:t}function Li(i,t){return t.map(e=>e(i))}function Ln(i){return !i.validate}function Bi(i){return i.map(t=>Ln(t)?t:e=>t.validate(e))}function ji(i){if(!i)return null;let t=i.filter(Pi);return t.length==0?null:function(e){return ki(Li(e,t))}}function Rt(i){return i!=null?ji(Bi(i)):null}function Hi(i){if(!i)return null;let t=i.filter(Pi);return t.length==0?null:function(e){let n=Li(e,t).map(Ti);return Ap(n).pipe(ut$1(ki))}}function Nt(i){return i!=null?Hi(Bi(i)):null}function Fi(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function zi(i){return i._rawValidators}function Ui(i){return i._rawAsyncValidators}function At(i){return i?Array.isArray(i)?i:[i]:[]}function Je(i,t){return Array.isArray(i)?i.includes(t):i===t}function Mi(i,t){let e=At(t);return At(i).forEach(r=>{Je(e,r)||e.push(r);}),e}function Ai(i,t){return At(t).filter(e=>!Je(i,e))}var et=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Rt(this._rawValidators);}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Nt(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[];}reset(t=void 0){this.control?.reset(t);}hasError(t,e){return this.control?this.control.hasError(t,e):false}getError(t,e){return this.control?this.control.getError(t,e):null}},Z=class extends et{name;get formDirective(){return null}get path(){return null}};var Me="VALID",Qe="INVALID",he="PENDING",Ae="DISABLED",Q=class{},tt=class extends Q{value;source;constructor(t,e){super(),this.value=t,this.source=e;}},Se=class extends Q{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e;}},Oe=class extends Q{touched;source;constructor(t,e){super(),this.touched=t,this.source=e;}},pe=class extends Q{status;source;constructor(t,e){super(),this.status=t,this.source=e;}},it=class extends Q{source;constructor(t){super(),this.source=t;}},ge=class extends Q{source;constructor(t){super(),this.source=t;}};function Gi(i){return (dt(i)?i.validators:i)||null}function Bn(i){return Array.isArray(i)?Rt(i):i||null}function qi(i,t){return (dt(t)?t.asyncValidators:i)||null}function jn(i){return Array.isArray(i)?Nt(i):i||null}function dt(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Hn(i,t,e){let n=i.controls;if(!(Object.keys(n)).length)throw new b(1e3,"");if(!Wi(n,e))throw new b(1001,"")}function zn(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new b(-1002,"")});}var nt=class{_pendingDirty=false;_hasOwnPendingAsyncValidator=null;_pendingTouched=false;_onCollectionChange=()=>{};_updateOn;_hasRequired=uo$1(false);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e);}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator();}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t;}get parent(){return this._parent}get status(){return FI(this.statusReactive)}set status(t){FI(()=>this.statusReactive.set(t));}_status=LI(()=>this.statusReactive());statusReactive=uo$1(void 0);get valid(){return this.status===Me}get invalid(){return this.status===Qe}get pending(){return this.status===he}get disabled(){return this.status===Ae}get enabled(){return this.status!==Ae}errors;get pristine(){return FI(this.pristineReactive)}set pristine(t){FI(()=>this.pristineReactive.set(t));}_pristine=LI(()=>this.pristineReactive());pristineReactive=uo$1(true);get dirty(){return !this.pristine}get touched(){return FI(this.touchedReactive)}set touched(t){FI(()=>this.touchedReactive.set(t));}_touched=LI(()=>this.touchedReactive());touchedReactive=uo$1(false);get untouched(){return !this.touched}_events=new J;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t);}setAsyncValidators(t){this._assignAsyncValidators(t);}addValidators(t){this.setValidators(Mi(t,this._rawValidators));}addAsyncValidators(t){this.setAsyncValidators(Mi(t,this._rawAsyncValidators));}removeValidators(t){this.setValidators(Ai(t,this._rawValidators));}removeAsyncValidators(t){this.setAsyncValidators(Ai(t,this._rawAsyncValidators));}hasValidator(t){return Je(this._rawValidators,t)}hasAsyncValidator(t){return Je(this._rawAsyncValidators,t)}clearValidators(){this.validator=null;}clearAsyncValidators(){this.asyncValidator=null;}markAsTouched(t={}){let e=this.touched===false;this.touched=true;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(V(j({},t),{sourceControl:n})),e&&t.emitEvent!==false&&this._events.next(new Oe(true,n));}markAllAsDirty(t={}){this.markAsDirty({onlySelf:true,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t));}markAllAsTouched(t={}){this.markAsTouched({onlySelf:true,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t));}markAsUntouched(t={}){let e=this.touched===true;this.touched=false,this._pendingTouched=false;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:true,emitEvent:t.emitEvent,sourceControl:n});}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==false&&this._events.next(new Oe(false,n));}markAsDirty(t={}){let e=this.pristine===true;this.pristine=false;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(V(j({},t),{sourceControl:n})),e&&t.emitEvent!==false&&this._events.next(new Se(false,n));}markAsPristine(t={}){let e=this.pristine===false;this.pristine=true,this._pendingDirty=false;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:true,emitEvent:t.emitEvent});}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==false&&this._events.next(new Se(true,n));}markAsPending(t={}){this.status=he;let e=t.sourceControl??this;t.emitEvent!==false&&(this._events.next(new pe(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(V(j({},t),{sourceControl:e}));}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Ae,this.errors=null,this._forEachChild(r=>{r.disable(V(j({},t),{onlySelf:true}));}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==false&&(this._events.next(new tt(this.value,n)),this._events.next(new pe(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(j({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(true));}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Me,this._forEachChild(n=>{n.enable(V(j({},t),{onlySelf:true}));}),this.updateValueAndValidity({onlySelf:true,emitEvent:t.emitEvent}),this._updateAncestors(V(j({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(false));}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e));}setParent(t){this._parent=t;}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Me||this.status===he)&&this._runAsyncValidator(n,t.emitEvent);}let e=t.sourceControl??this;t.emitEvent!==false&&(this._events.next(new tt(this.value,e)),this._events.next(new pe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(V(j({},t),{sourceControl:e}));}_updateTreeValidity(t={emitEvent:true}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:true,emitEvent:t.emitEvent});}_setInitialStatus(){this.status=this._allControlsDisabled()?Ae:Me;}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=he,this._hasOwnPendingAsyncValidator={emitEvent:e!==false,shouldHaveEmitted:t!==false};let n=Ti(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t});});}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??false;return this._hasOwnPendingAsyncValidator=null,t}return  false}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==false,this,e.shouldHaveEmitted);}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return !!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new pe(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n);}_initObservables(){this.valueChanges=new Ne$1,this.statusChanges=new Ne$1;}_calculateStatus(){return this._allControlsDisabled()?Ae:this.errors?Qe:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(he)?he:this._anyControlsHaveStatus(Qe)?Qe:Me}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new Se(this.pristine,e));}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Oe(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e);}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t;}_setUpdateStrategy(t){dt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn);}_parentMarkedDirty(t){return !t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Bn(this._rawValidators),this._updateHasRequiredValidator();}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=jn(this._rawAsyncValidators);}_updateHasRequiredValidator(){FI(()=>this._hasRequired.set(this.hasValidator(O.required)));}};function Wi(i,t){return Object.hasOwn(i,t)}function Un(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Gn(i,t,e,n){switch(e){case "name":i.setAttribute(t,e,n);break;case "disabled":case "readonly":case "required":n?i.setAttribute(t,e,""):i.removeAttribute(t,e);break;case "max":case "min":case "minLength":case "maxLength":n!==void 0?i.setAttribute(t,e,n.toString()):i.removeAttribute(t,e);break}}var Vt=class{kind;context;control;message;constructor({kind:t,context:e,control:n}){this.kind=t,this.context=e,this.control=n;}};var qn=(()=>{class i{_validator=Xe;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):Xe,this._onChange?.();}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e;}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,features:[zh]})}return i})();var Wn={provide:lt,useExisting:Ur$1(()=>$i),multi:true};var $i=(()=>{class i extends qn{required;inputName="required";normalizeInput=ZO;createValidator=e=>Ni;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return (e||(e=fg(i)))(r||i)}})();static \u0275dir=_v({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&pf("required",r._enabled?"":null);},inputs:{required:"required"},standalone:false,features:[RI([Wn]),sf]})}return i})();var $n=new S(""),Pt=new S("",{factory:()=>Tt}),Tt="always";function Kn(i,t){return [...t.path,i]}function Yn(i,t,e=Tt){kt(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),Qn(i,t),Jn(i,t),Xn(i,t),Zn(i,t);}function Vi(i,t,e=true){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),ot(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}));}function rt(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t);});}function Zn(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n);};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e);});}}function kt(i,t){let e=zi(i);t.validator!==null?i.setValidators(Fi(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=Ui(i);t.asyncValidator!==null?i.setAsyncValidators(Fi(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();rt(t._rawValidators,r),rt(t._rawAsyncValidators,r);}function ot(i,t){let e=false;if(i!==null){if(t.validator!==null){let r=zi(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(d=>d!==t.validator);o.length!==r.length&&(e=true,i.setValidators(o));}}if(t.asyncValidator!==null){let r=Ui(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(d=>d!==t.asyncValidator);o.length!==r.length&&(e=true,i.setAsyncValidators(o));}}}let n=()=>{};return rt(t._rawValidators,n),rt(t._rawAsyncValidators,n),e}function Qn(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=true,i._pendingDirty=true,i.updateOn==="change"&&Ki(i,t);});}function Xn(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=true,i.updateOn==="blur"&&i._pendingChange&&Ki(i,t),i.updateOn!=="submit"&&i.markAsTouched();});}function Ki(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:false}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=false;}function Jn(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n);};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e);});}function Yi(i,t){kt(i,t);}function er(i,t){return ot(i,t)}function tr(i,t){if(!i.hasOwnProperty("model"))return  false;let e=i.model;return e.isFirstChange()?true:!Object.is(t,e.currentValue)}function ir(i){return Object.getPrototypeOf(i.constructor)===Fn}function Zi(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=false);});}function nr(i,t){if(!t)return null;let e,n,r;return t.forEach(o=>{o.constructor===st?e=o:ir(o)?n=o:r=o;}),r||n||e||null}function rr(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1);}var or={provide:$n,useFactory:()=>{let i=C(X,{self:true});return {setParseErrors:t=>{i.setParseErrorSource(t);},set onReset(t){i.onReset=t;}}}},X=class extends et{_parent=null;name=null;valueAccessor=null;isCustomControlBased=false;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof ge&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription?.add(this.resetSubscription));}isNativeFormElement=false;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=nr(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,n){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(Ke)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe();});}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(zO);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new $,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof ge&&this.control&&this.userOnReset?.(this.control.value);}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator);}ngControlCreate(t){!t.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=true,t.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:false}),this.control?.markAsDirty(),this.viewToModelUpdate(r);}),t.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched();}),this.customControlBindings={},this.isNativeFormElement=Un(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof $i));}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let n=this.control,r=this.customControlBindings;Object.is(r.value,n.value)||(r.value=n.value,t.setCustomControlModelInput(n.value)),this.bindControlProperty(t,r,"touched",n.touched),this.bindControlProperty(t,r,"dirty",n.dirty),this.bindControlProperty(t,r,"valid",n.valid),this.bindControlProperty(t,r,"invalid",n.invalid),this.bindControlProperty(t,r,"pending",n.pending),this.bindControlProperty(t,r,"disabled",n.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,"required",this.isRequired);let o=n.errors;if(r.errors!==o){r.errors=o;let d=this._convertErrors(o);t.setInputOnDirectives("errors",d);}}get isRequired(){return (this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??false}get shouldBindRequired(){return  true}bindControlProperty(t,e,n,r){if(e[n]===r)return;e[n]=r;let o=t.setInputOnDirectives(n,r);this.isNativeFormElement&&!o&&(n==="disabled"||n==="required")&&this.renderer&&Gn(this.renderer,t.nativeElement,n,r);}_convertErrors(t){if(t===null)return [];let e=this.control;return Object.entries(t).map(([n,r])=>new Vt({context:r,kind:n,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,n=LI(()=>{let r=t();return r.length===0?null:r.reduce((o,d)=>(o[d.kind]=d,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Ol(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:false});},{injector:this.injector});}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:false}));}},at=class{_cd;constructor(t){this._cd=t;}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return !!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return !!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return !!this._cd?.control?.invalid}get isPending(){return !!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Qi=(()=>{class i extends at{constructor(e){super(e);}static \u0275fac=function(n){return new(n||i)(Ko(X,2))};static \u0275dir=_v({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Nf("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending);},standalone:false,features:[sf]})}return i})(),Xi=(()=>{class i extends at{constructor(e){super(e);}static \u0275fac=function(n){return new(n||i)(Ko(Z,10))};static \u0275dir=_v({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Nf("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted);},standalone:false,features:[sf]})}return i})(),_e=class extends nt{constructor(t,e,n){super(Gi(e),qi(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator});}controls;registerControl(t,e){let n=this._find(t);return n||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange();}removeControl(t,e={}){let n=this._find(t);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange();}setControl(t,e,n={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange();}contains(t){return this._find(t)?.enabled===true}setValue(t,e={}){FI(()=>{zn(this,true,t),Object.keys(t).forEach(n=>{Hn(this,true,n),this.controls[n].setValue(t[n],{onlySelf:true,emitEvent:e.emitEvent});}),this.updateValueAndValidity(e);});}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this._find(n);r&&r.patchValue(t[n],{onlySelf:true,emitEvent:e.emitEvent});}),this.updateValueAndValidity(e));}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,V(j({},e),{onlySelf:true}));}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==false&&this._events.next(new ge(this));}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(false,(e,n)=>n._syncPendingControls()?true:e);return t&&this.updateValueAndValidity({onlySelf:true}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e);});}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange);});}_updateValue(){this.value=this._reduceValue();}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return  true;return  false}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,o)=>{n=e(n,r,o);}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return  false;return Object.keys(this.controls).length>0||this.disabled}_find(t){return Wi(this.controls,t)?this.controls[t]:null}};var ar={provide:Z,useExisting:Ur$1(()=>Lt)},Ve=Promise.resolve(),Lt=(()=>{class i extends Z{callSetDisabledState;get submitted(){return FI(this.submittedReactive)}_submitted=LI(()=>this.submittedReactive());submittedReactive=uo$1(false);_directives=new Set;form;ngSubmit=new Ne$1;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new _e({},Rt(e),Nt(n));}ngAfterViewInit(){this._setUpdateStrategy();}get formDirective(){return this}get control(){return this.form}get path(){return []}get controls(){return this.form.controls}addControl(e){Ve.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:false}),this._directives.add(e);});}getControl(e){return this.form.get(e.path)}removeControl(e){Ve.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e);});}addFormGroup(e){Ve.then(()=>{let n=this._findContainer(e.path),r=new _e({});Yi(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:false});});}removeFormGroup(e){Ve.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name);});}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Ve.then(()=>{this.form.get(e.path).setValue(n);});}setValue(e){this.control.setValue(e);}onSubmit(e){return this.submittedReactive.set(true),Zi(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new it(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm();}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(false);}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn);}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||i)(Ko(lt,10),Ko(It,10),Ko(Pt,8))};static \u0275dir=_v({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&Ef("submit",function(d){return r.onSubmit(d)})("reset",function(){return r.onReset()});},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[RI([ar]),sf]})}return i})();function Si(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1);}function Oi(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ie=class extends nt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=false;constructor(t=null,e,n){super(Gi(e),qi(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:true,emitEvent:!!this.asyncValidator}),dt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Oi(t)?this.defaultValue=t.value:this.defaultValue=t);}setValue(t,e={}){FI(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==false&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==false)),this.updateValueAndValidity(e);});}patchValue(t,e={}){this.setValue(t,e);}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=false,e?.emitEvent!==false&&this._events.next(new ge(this));}_updateValue(){}_anyControls(t){return  false}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t);}_unregisterOnChange(t){Si(this._onChange,t);}registerOnDisabledChange(t){this._onDisabledChange.push(t);}_unregisterOnDisabledChange(t){Si(this._onDisabledChange,t);}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:true,emitModelToViewChange:false}),true):false}_applyFormState(t){Oi(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:true,emitEvent:false}):this.enable({onlySelf:true,emitEvent:false})):this.value=this._pendingValue=t;}};var sr=i=>i instanceof Ie;var Ji=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:false})}return i})();var lr=(()=>{class i extends Z{callSetDisabledState;get submitted(){return FI(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e);}_submitted=LI(()=>this._submittedReactive());_submittedReactive=uo$1(false);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n);}ngOnChanges(e){this.onChanges(e);}ngOnDestroy(){this.onDestroy();}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form);}onDestroy(){this.form&&(ot(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}));}get formDirective(){return this}get path(){return []}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:false}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Vi(e.control||null,e,false),rr(this.directives,e);}addFormGroup(e){this._setUpFormContainer(e);}removeFormGroup(e){this._cleanUpFormContainer(e);}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e);}removeFormArray(e){this._cleanUpFormContainer(e);}updateModel(e,n){this.form.get(e.path).setValue(n);}onReset(){this.resetForm();}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(false);}onSubmit(e){return this.submitted=true,Zi(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new it(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Vi(n||null,e),sr(r)&&e._setupWithForm(r,this.callSetDisabledState));}),this.form._updateTreeValidity({emitEvent:false});}_setUpFormContainer(e){let n=this.form.get(e.path);Yi(n,e),n.updateValueAndValidity({emitEvent:false});}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&er(n,e)&&n.updateValueAndValidity({emitEvent:false});}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{});}_updateValidators(){kt(this.form,this),this._oldForm&&ot(this._oldForm,this);}_checkFormPresent(){this.form;}static \u0275fac=function(n){return new(n||i)(Ko(lt,10),Ko(It,10),Ko(Pt,8))};static \u0275dir=_v({type:i,features:[sf,zh]})}return i})();var en=new S("");var dr={provide:X,useExisting:Ur$1(()=>Bt)},Bt=(()=>{class i extends X{_ngModelWarningConfig;_added=false;viewModel;control;name=null;set isDisabled(e){}model;update=new Ne$1;static _ngModelWarningSentOnce=false;_ngModelWarningSent=false;constructor(e,n,r,o,d,h,C){super(C,h,o),this._ngModelWarningConfig=d,this._parent=e,this._setValidators(n),this._setAsyncValidators(r);}_setupWithForm(e,n){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Yn(e,this,n));}ngOnChanges(e){this._added||this._setUpControl(),tr(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model));}ngOnDestroy(){this.formDirective?.removeControl(this);}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e);}get path(){return Kn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=true;}\u0275ngControlCreate(e){super.ngControlCreate(e);}\u0275ngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,true));}static \u0275fac=function(n){return new(n||i)(Ko(Z,13),Ko(lt,10),Ko(It,10),Ko(Ri,10),Ko(en,8),Ko(My,8),Ko(le,8))};static \u0275dir=_v({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:false,features:[RI([dr,or]),sf,zh,Sv(null)]})}return i})();var cr={provide:Z,useExisting:Ur$1(()=>Re)},Re=(()=>{class i extends lr{form=null;ngSubmit=new Ne$1;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return (e||(e=fg(i)))(r||i)}})();static \u0275dir=_v({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&Ef("submit",function(d){return r.onSubmit(d)})("reset",function(){return r.onReset()});},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:false,features:[RI([cr]),sf]})}return i})();var ur=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Tv({type:i});static \u0275inj=Bc({})}return i})();var tn=(()=>{class i{static withConfig(e){return {ngModule:i,providers:[{provide:en,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Pt,useValue:e.callSetDisabledState??Tt}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=Tv({type:i});static \u0275inj=Bc({imports:[ur]})}return i})();var jt=class{_box;_destroyed=new J;_resizeSubject=new J;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)));}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new _(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t);}}).pipe(Dn$1(e=>e.some(n=>n.target===t)),Up({bufferSize:1,refCount:true}),zp(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},nn=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=C(De);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new jt(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Yn$1({token:i,factory:i.\u0275fac})}return i})();var mr=["notch"],hr=["*"],rn=["iconPrefixContainer"],on=["textPrefixContainer"],an=["iconSuffixContainer"],sn=["textSuffixContainer"],pr=["textField"],gr=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],_r=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function vr(i,t){i&1&&gf(0,"span",21);}function br(i,t){if(i&1&&(Vo(0,"label",20),Kv(1,1),$v(2,vr,1,0,"span",21),Ha()),i&2){let e=Qv(2);hf("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),pf("for",e._control.disableAutomaticLabeling?null:e._control.id),Bm(2),Uv(!e.hideRequiredMarker&&e._control.required?2:-1);}}function yr(i,t){if(i&1&&$v(0,br,3,5,"label",20),i&2){let e=Qv();Uv(e._hasFloatingLabel()?0:-1);}}function xr(i,t){i&1&&gf(0,"div",7);}function Cr(i,t){}function Dr(i,t){if(i&1&&cf(0,Cr,0,0,"ng-template",13),i&2){Qv(2);let e=nI(1);hf("ngTemplateOutlet",e);}}function wr(i,t){if(i&1&&(Vo(0,"div",9),$v(1,Dr,1,1,null,13),Ha()),i&2){let e=Qv();hf("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),Bm(),Uv(e._forceDisplayInfixLabel()?-1:1);}}function Er(i,t){i&1&&(Vo(0,"div",10,2),Kv(2,2),Ha());}function Fr(i,t){i&1&&(Vo(0,"div",11,3),Kv(2,3),Ha());}function Mr(i,t){}function Ar(i,t){if(i&1&&cf(0,Mr,0,0,"ng-template",13),i&2){Qv();let e=nI(1);hf("ngTemplateOutlet",e);}}function Vr(i,t){i&1&&(Vo(0,"div",14,4),Kv(2,4),Ha());}function Sr(i,t){i&1&&(Vo(0,"div",15,5),Kv(2,5),Ha());}function Or(i,t){i&1&&gf(0,"div",16);}function Ir(i,t){i&1&&(Vo(0,"div",18),Kv(1,6),Ha());}function Rr(i,t){if(i&1&&(Vo(0,"mat-hint",22),bI(1),Ha()),i&2){let e=Qv(2);hf("id",e._hintLabelId),Bm(),kf(e.hintLabel);}}function Nr(i,t){if(i&1&&(Vo(0,"div",19),$v(1,Rr,2,2,"mat-hint",22),Kv(2,7),gf(3,"div",23),Kv(4,8),Ha()),i&2){let e=Qv();Bm(),Uv(e.hintLabel?1:-1);}}var Ne=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["mat-label"]]})}return i})(),hn=new S("MatError"),zt=(()=>{class i{id=C(kt$1).getId("mat-mdc-error-");static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&vf("id",r.id);},inputs:{id:"id"},features:[RI([{provide:hn,useExisting:i}])]})}return i})(),Ht=(()=>{class i{align="start";id=C(kt$1).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(vf("id",r.id),pf("align",null),Nf("mat-mdc-form-field-hint-end",r.align==="end"));},inputs:{align:"align",id:"id"}})}return i})(),Pr=new S("MatPrefix");var Tr=new S("MatSuffix");var pn=new S("FloatingLabelParent"),ln=(()=>{class i{_elementRef=C(Kn$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize();}_floating=false;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe();}_monitorResize=false;_resizeObserver=C(nn);_ngZone=C(De);_parent=C(pn);_resizeSubscription=new $;ngOnDestroy(){this._resizeSubscription.unsubscribe();}getWidth(){return kr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized());}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize());});}static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&Nf("mdc-floating-label--float-above",r.floating);},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function kr(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(true);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var dn="mdc-line-ripple--active",ct="mdc-line-ripple--deactivating",cn=(()=>{class i{_elementRef=C(Kn$1);_cleanupTransitionEnd;constructor(){let e=C(De),n=C(My);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd);});}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ct),e.add(dn);}deactivate(){this._elementRef.nativeElement.classList.add(ct);}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(ct);e.propertyName==="opacity"&&r&&n.remove(dn,ct);};ngOnDestroy(){this._cleanupTransitionEnd();}static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),un=(()=>{class i{_elementRef=C(Kn$1);_ngZone=C(De);open=false;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="");}))):e.classList.add("mdc-notched-outline--no-label");}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`);}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Dv({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Tf(mr,5),n&2){let o;Xv(o=eI())&&(r._notch=o.first);}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&Nf("mdc-notched-outline--notched",r.open);},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:hr,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(Yv(),mf(0,"div",1),Ba(1,"div",2,0),Kv(3),$a(),mf(4,"div",3));},encapsulation:2})}return i})(),Ut=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=false;empty=false;shouldLabelFloat=false;required=false;disabled=false;errorState=false;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i})}return i})();var Gt=new S("MatFormField"),Lr=new S("MAT_FORM_FIELD_DEFAULT_OPTIONS"),fn="fill",Br="auto",mn="fixed",jr="translateY(-50%)",qt=(()=>{class i{_elementRef=C(Kn$1);_changeDetectorRef=C(zO);_platform=C(I);_idGenerator=C(kt$1);_ngZone=C(De);_defaults=C(Lr,{optional:true});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=WO("iconPrefixContainer");_textPrefixContainerSignal=WO("textPrefixContainer");_iconSuffixContainerSignal=WO("iconSuffixContainer");_textSuffixContainerSignal=WO("textSuffixContainer");_prefixSuffixContainers=LI(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=qO(Ne);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=kd(e);}_hideRequiredMarker=false;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Br}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck());}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||fn;this._appearanceSignal.set(n);}_appearanceSignal=uo$1(fn);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||mn}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||mn;}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints();}_hintLabel="";_hasIconPrefix=false;_hasTextPrefix=false;_hasIconSuffix=false;_hasTextSuffix=false;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e;}_destroyed=new J;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ue();constructor(){let e=this._defaults,n=C(Mi$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ol(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset();}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");},300);}),this._changeDetectorRef.detectChanges();}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix();}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck();}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete();}getLabelId=LI(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always");}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck();}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(qp([void 0,void 0]),ut$1(()=>[n.errorState,n.userAriaDescribedBy]),$p(),Dn$1(([[o,d],[h,C]])=>o!==h||d!==C)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(zp(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()));}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText);}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Rp(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck();});}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck();}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck();}),this._validateHints(),this._syncDescribedByIds();}_assertFormFieldControl(){this._control;}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=true,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=false,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e);}_syncOutlineLabelOffset(){KO({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"});}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())});}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return !this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=LI(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():false}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth();}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());}_processHints(){this._validateHints(),this._syncDescribedByIds();}_validateHints(){this._hintChildren;}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(h=>h.align==="start"):null,d=this._hintChildren?this._hintChildren.find(h=>h.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),d&&e.push(d.id);}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(d=>d&&!o.includes(d)));}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e;}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return ["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,d=e?.getBoundingClientRect().width??0,h=n?.getBoundingClientRect().width??0,C=r?.getBoundingClientRect().width??0,D=o?.getBoundingClientRect().width??0,Te=this._currentDirection==="rtl"?"-1":"1",be=`${d+h}px`,mt=`calc(${Te} * (${be} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ke=`var(--mat-mdc-form-field-label-transform, ${jr} translateX(${mt}))`,oe=d+h+C+D;return [ke,oe]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r);}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Dv({type:i,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Cf(o,r._labelChild,Ne,5),wf(o,Ut,5)(o,Pr,5)(o,Tr,5)(o,hn,5)(o,Ht,5)),n&2){tI();let d;Xv(d=eI())&&(r._formFieldControl=d.first),Xv(d=eI())&&(r._prefixChildren=d),Xv(d=eI())&&(r._suffixChildren=d),Xv(d=eI())&&(r._errorChildren=d),Xv(d=eI())&&(r._hintChildren=d);}},viewQuery:function(n,r){if(n&1&&(bf(r._iconPrefixContainerSignal,rn,5)(r._textPrefixContainerSignal,on,5)(r._iconSuffixContainerSignal,an,5)(r._textSuffixContainerSignal,sn,5),Tf(pr,5)(rn,5)(on,5)(an,5)(sn,5)(ln,5)(un,5)(cn,5)),n&2){tI(4);let o;Xv(o=eI())&&(r._textField=o.first),Xv(o=eI())&&(r._iconPrefixContainer=o.first),Xv(o=eI())&&(r._textPrefixContainer=o.first),Xv(o=eI())&&(r._iconSuffixContainer=o.first),Xv(o=eI())&&(r._textSuffixContainer=o.first),Xv(o=eI())&&(r._floatingLabel=o.first),Xv(o=eI())&&(r._notchedOutline=o.first),Xv(o=eI())&&(r._lineRipple=o.first);}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&Nf("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"));},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[RI([{provide:Gt,useExisting:i},{provide:pn,useExisting:i}])],ngContentSelectors:_r,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(Yv(gr),cf(0,yr,1,1,"ng-template",null,0,kI),Vo(2,"div",6,1),Ef("click",function(d){return r._control.onContainerClick(d)}),$v(4,xr,1,0,"div",7),Vo(5,"div",8),$v(6,wr,2,2,"div",9),$v(7,Er,3,0,"div",10),$v(8,Fr,3,0,"div",11),Vo(9,"div",12),$v(10,Ar,1,1,null,13),Kv(11),Ha(),$v(12,Vr,3,0,"div",14),$v(13,Sr,3,0,"div",15),Ha(),$v(14,Or,1,0,"div",16),Ha(),Vo(15,"div",17),$v(16,Ir,2,0,"div",18)(17,Nr,5,1,"div",19),Ha()),n&2){let o;Bm(2),Nf("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),Bm(2),Uv(!r._hasOutline()&&!r._control.disabled?4:-1),Bm(2),Uv(r._hasOutline()?6:-1),Bm(),Uv(r._hasIconPrefix?7:-1),Bm(),Uv(r._hasTextPrefix?8:-1),Bm(2),Uv(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Bm(2),Uv(r._hasTextSuffix?12:-1),Bm(),Uv(r._hasIconSuffix?13:-1),Bm(),Uv(r._hasOutline()?-1:14),Bm(),Nf("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let d=r._getSubscriptMessageType();Bm(),Uv((o=d)==="error"?16:o==="hint"?17:-1);}},dependencies:[ln,un,Ar$1,cn,Ht],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return i})();var Hr=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Dv({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),zr={passive:true},gn=(()=>{class i{_platform=C(I);_ngZone=C(De);_renderer=C(Gn$1).createRenderer(null,null);_styleLoader=C(Ie$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ct$1;this._styleLoader.load(Hr);let n=U(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new J,d="cdk-text-field-autofilled",h=D=>{D.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(d)?(n.classList.add(d),this._ngZone.run(()=>o.next({target:D.target,isAutofilled:true}))):D.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(d)&&(n.classList.remove(d),this._ngZone.run(()=>o.next({target:D.target,isAutofilled:false})));},C=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",h,zr)));return this._monitoredElements.set(n,{subject:o,unlisten:C}),o}stopMonitoring(e){let n=U(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n));}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n));}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Yn$1({token:i,factory:i.\u0275fac})}return i})();var _n=new S("MAT_INPUT_VALUE_ACCESSOR");var vn=(()=>{class i{isErrorState(e,n){return !!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Yn$1({token:i,factory:i.\u0275fac})}return i})();var ut=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=false;matcher;constructor(t,e,n,r,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o;}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??false;o!==t&&(this.errorState=o,this._stateChanges.next());}};var Ur=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Gr=new S("MAT_INPUT_CONFIG"),bn=(()=>{class i{_elementRef=C(Kn$1);_platform=C(I);ngControl=C(X,{optional:true,self:true});_autofillMonitor=C(gn);_ngZone=C(De);_formField=C(Gt,{optional:true});_renderer=C(My);_uid=C(kt$1).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=C(Gr,{optional:true});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=false;_isNativeSelect=false;_isTextarea=false;_isInFormField=false;focused=false;stateChanges=new J;controlType="mat-input";autofilled=false;get disabled(){return this._disabled}set disabled(e){this._disabled=kd(e),this.focused&&(this.focused=false,this.stateChanges.next());}_disabled=false;get id(){return this._id}set id(e){this._id=e||this._uid;}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(O.required)??false}set required(e){this._required=kd(e);}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ed().has(this._type)&&(this._elementRef.nativeElement.type=this._type);}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next());}get readonly(){return this._readonly}set readonly(e){this._readonly=kd(e);}_readonly=false;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e;}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ed().has(e));constructor(){let e=C(Lt,{optional:true}),n=C(Re,{optional:true}),r=C(vn),o=C(_n,{optional:true,self:true}),d=this._elementRef.nativeElement,h=d.nodeName.toLowerCase();o?Ts(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=d,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(d,"keyup",this._iOSKeyupListener);}),this._errorStateTracker=new ut(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h==="select",this._isTextarea=h==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||false,this._isNativeSelect&&(this.controlType=d.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ol(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next();});}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next();});}ngOnChanges(){this.stateChanges.next();}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.();}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder();}focus(e){this._elementRef.nativeElement.focus(e);}updateErrorState(){this._errorStateTracker.updateErrorState();}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0);}this.focused=e,this.stateChanges.next();}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next());}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder");}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ur.indexOf(this._type)>-1;}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return !this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby");}onContainerClick(){this.focused||this.focus();}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0));};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=_v({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&Ef("focus",function(){return r._focusChanged(true)})("blur",function(){return r._focusChanged(false)})("input",function(){return r._onInput()}),n&2&&(vf("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),pf("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),Nf("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()));},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ZO]},exportAs:["matInput"],features:[RI([{provide:Ut,useExisting:i}]),zh]})}return i})();function yn(i,t,e,n,r,o,d){try{var h=i[o](d),C=h.value;}catch(D){return void e(D)}h.done?t(C):Promise.resolve(C).then(n,r);}function qr(i){return function(){var t=this,e=arguments;return new Promise(function(n,r){var o=i.apply(t,e);function d(C){yn(o,n,r,d,h,"next",C);}function h(C){yn(o,n,r,d,h,"throw",C);}d(void 0);})}}function Wr(i,t,e){return (t=Yr(t))in i?Object.defineProperty(i,t,{value:e,enumerable:true,configurable:true,writable:true}):i[t]=e,i}function xn(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n);}return e}function $t(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?xn(Object(e),true).forEach(function(n){Wr(i,n,e[n]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):xn(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n));});}return i}function Cn(i,t){if(i==null)return {};var e,n,r=$r(i,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);for(n=0;n<o.length;n++)e=o[n],t.includes(e)||{}.propertyIsEnumerable.call(i,e)&&(r[e]=i[e]);}return r}function $r(i,t){if(i==null)return {};var e={};for(var n in i)if({}.hasOwnProperty.call(i,n)){if(t.includes(n))continue;e[n]=i[n];}return e}function Kt(){Kt=function(){return t};var i,t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(s,a,l){s[a]=l.value;},o=typeof Symbol=="function"?Symbol:{},d=o.iterator||"@@iterator",h=o.asyncIterator||"@@asyncIterator",C=o.toStringTag||"@@toStringTag";function D(s,a,l){return Object.defineProperty(s,a,{value:l,enumerable:true,configurable:true,writable:true}),s[a]}try{D({},"");}catch{D=function(a,l,f){return a[l]=f};}function Te(s,a,l,f){var c=a&&a.prototype instanceof ht?a:ht,p=Object.create(c.prototype),w=new vt(f||[]);return r(p,"_invoke",{value:wn(s,l,w)}),p}function be(s,a,l){try{return {type:"normal",arg:s.call(a,l)}}catch(f){return {type:"throw",arg:f}}}t.wrap=Te;var ft="suspendedStart",mt="suspendedYield",ke="executing",oe="completed",z={};function ht(){}function Le(){}function J(){}var pt={};D(pt,d,function(){return this});var gt=Object.getPrototypeOf,Be=gt&&gt(gt(bt([])));Be&&Be!==e&&n.call(Be,d)&&(pt=Be);var ae=J.prototype=ht.prototype=Object.create(pt);function Zt(s){["next","throw","return"].forEach(function(a){D(s,a,function(l){return this._invoke(a,l)});});}function je(s,a){function l(c,p,w,V){var S=be(s[c],s,p);if(S.type!=="throw"){var se=S.arg,ye=se.value;return ye&&typeof ye=="object"&&n.call(ye,"__await")?a.resolve(ye.__await).then(function(ee){l("next",ee,w,V);},function(ee){l("throw",ee,w,V);}):a.resolve(ye).then(function(ee){se.value=ee,w(se);},function(ee){return l("throw",ee,w,V)})}V(S.arg);}var f;r(this,"_invoke",{value:function(c,p){function w(){return new a(function(V,S){l(c,p,V,S);})}return f=f?f.then(w,w):w()}});}function wn(s,a,l){var f=ft;return function(c,p){if(f===ke)throw Error("Generator is already running");if(f===oe){if(c==="throw")throw p;return {value:i,done:true}}for(l.method=c,l.arg=p;;){var w=l.delegate;if(w){var V=Qt(w,l);if(V){if(V===z)continue;return V}}if(l.method==="next")l.sent=l._sent=l.arg;else if(l.method==="throw"){if(f===ft)throw f=oe,l.arg;l.dispatchException(l.arg);}else l.method==="return"&&l.abrupt("return",l.arg);f=ke;var S=be(s,a,l);if(S.type==="normal"){if(f=l.done?oe:mt,S.arg===z)continue;return {value:S.arg,done:l.done}}S.type==="throw"&&(f=oe,l.method="throw",l.arg=S.arg);}}}function Qt(s,a){var l=a.method,f=s.iterator[l];if(f===i)return a.delegate=null,l==="throw"&&s.iterator.return&&(a.method="return",a.arg=i,Qt(s,a),a.method==="throw")||l!=="return"&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+l+"' method")),z;var c=be(f,s.iterator,a.arg);if(c.type==="throw")return a.method="throw",a.arg=c.arg,a.delegate=null,z;var p=c.arg;return p?p.done?(a[s.resultName]=p.value,a.next=s.nextLoc,a.method!=="return"&&(a.method="next",a.arg=i),a.delegate=null,z):p:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,z)}function En(s){var a={tryLoc:s[0]};1 in s&&(a.catchLoc=s[1]),2 in s&&(a.finallyLoc=s[2],a.afterLoc=s[3]),this.tryEntries.push(a);}function _t(s){var a=s.completion||{};a.type="normal",delete a.arg,s.completion=a;}function vt(s){this.tryEntries=[{tryLoc:"root"}],s.forEach(En,this),this.reset(true);}function bt(s){if(s||s===""){var a=s[d];if(a)return a.call(s);if(typeof s.next=="function")return s;if(!isNaN(s.length)){var l=-1,f=function c(){for(;++l<s.length;)if(n.call(s,l))return c.value=s[l],c.done=false,c;return c.value=i,c.done=true,c};return f.next=f}}throw new TypeError(typeof s+" is not iterable")}return Le.prototype=J,r(ae,"constructor",{value:J,configurable:true}),r(J,"constructor",{value:Le,configurable:true}),Le.displayName=D(J,C,"GeneratorFunction"),t.isGeneratorFunction=function(s){var a=typeof s=="function"&&s.constructor;return !!a&&(a===Le||(a.displayName||a.name)==="GeneratorFunction")},t.mark=function(s){return Object.setPrototypeOf?Object.setPrototypeOf(s,J):(s.__proto__=J,D(s,C,"GeneratorFunction")),s.prototype=Object.create(ae),s},t.awrap=function(s){return {__await:s}},Zt(je.prototype),D(je.prototype,h,function(){return this}),t.AsyncIterator=je,t.async=function(s,a,l,f,c){c===void 0&&(c=Promise);var p=new je(Te(s,a,l,f),c);return t.isGeneratorFunction(a)?p:p.next().then(function(w){return w.done?w.value:p.next()})},Zt(ae),D(ae,C,"Generator"),D(ae,d,function(){return this}),D(ae,"toString",function(){return "[object Generator]"}),t.keys=function(s){var a=Object(s),l=[];for(var f in a)l.push(f);return l.reverse(),function c(){for(;l.length;){var p=l.pop();if(p in a)return c.value=p,c.done=false,c}return c.done=true,c}},t.values=bt,vt.prototype={constructor:vt,reset:function(s){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=false,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(_t),!s)for(var a in this)a.charAt(0)==="t"&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=i);},stop:function(){this.done=true;var s=this.tryEntries[0].completion;if(s.type==="throw")throw s.arg;return this.rval},dispatchException:function(s){if(this.done)throw s;var a=this;function l(S,se){return p.type="throw",p.arg=s,a.next=S,se&&(a.method="next",a.arg=i),!!se}for(var f=this.tryEntries.length-1;f>=0;--f){var c=this.tryEntries[f],p=c.completion;if(c.tryLoc==="root")return l("end");if(c.tryLoc<=this.prev){var w=n.call(c,"catchLoc"),V=n.call(c,"finallyLoc");if(w&&V){if(this.prev<c.catchLoc)return l(c.catchLoc,true);if(this.prev<c.finallyLoc)return l(c.finallyLoc)}else if(w){if(this.prev<c.catchLoc)return l(c.catchLoc,true)}else {if(!V)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return l(c.finallyLoc)}}}},abrupt:function(s,a){for(var l=this.tryEntries.length-1;l>=0;--l){var f=this.tryEntries[l];if(f.tryLoc<=this.prev&&n.call(f,"finallyLoc")&&this.prev<f.finallyLoc){var c=f;break}}c&&(s==="break"||s==="continue")&&c.tryLoc<=a&&a<=c.finallyLoc&&(c=null);var p=c?c.completion:{};return p.type=s,p.arg=a,c?(this.method="next",this.next=c.finallyLoc,z):this.complete(p)},complete:function(s,a){if(s.type==="throw")throw s.arg;return s.type==="break"||s.type==="continue"?this.next=s.arg:s.type==="return"?(this.rval=this.arg=s.arg,this.method="return",this.next="end"):s.type==="normal"&&a&&(this.next=a),z},finish:function(s){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.finallyLoc===s)return this.complete(l.completion,l.afterLoc),_t(l),z}},catch:function(s){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc===s){var f=l.completion;if(f.type==="throw"){var c=f.arg;_t(l);}return c}}throw Error("illegal catch attempt")},delegateYield:function(s,a,l){return this.delegate={iterator:bt(s),resultName:a,nextLoc:l},this.method==="next"&&(this.arg=i),z}},t}function Kr(i,t){if(typeof i!="object"||!i)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var n=e.call(i,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return (t==="string"?String:Number)(i)}function Yr(i){var t=Kr(i,"string");return typeof t=="symbol"?t:t+""}var Pe={CLASSIC:"classic",V1:"v1"},Zr=Pe.V1,Qr="https://cdn.paddle.com/paddle/paddle.js",Xr="https://cdn.paddle.com/paddle/v2/paddle.js",Jr={url:Qr},eo={url:Xr};function to(i){return document.querySelector('script[src="'.concat(i,'"]'))||void 0}function io(i){var t=document.createElement("script");t.src=i;var e=document.head||document.body;if(!e)throw new Error("Cannot inject Paddle.js. It needs a <head> or <body> element.");return e.appendChild(t),t}var Wt={classic:void 0,v1:void 0},no={classic:"PaddleClassic",v1:"PaddleBillingV1"};function ro(i){var t,e=(t=oo(i))===null||t===void 0?void 0:t.url;if(e){var n=Wt[i],r=no[i];return n!==void 0?n:(Wt[i]=new Promise(function(o,d){if(typeof window>"u"){o(void 0);return}if(window[r]){o(window[r]);return}try{var h=to(e);h||(h=io(e)),h.addEventListener("load",function(){window[r]?o(window[r]):d(new Error("Paddle.js not available"));}),h.addEventListener("error",function(){d(new Error("Failed to load Paddle.js - ".concat(i)));});}catch(C){d(C);return}}),Wt[i])}}function oo(i){if(i===Pe.CLASSIC)return Jr;if(i===Pe.V1)return eo;console.error("[Paddle] Unknown Paddle Version");}var ao=["environment","version"],so=["environment","version"];function lo(i,t){var e=i.environment;i.version;var n=Cn(i,ao);try{e&&t.Environment.set(e),t.Initialized?t.Update($t({},n)):t.Initialize($t({},n));}catch(r){console.warn("[Paddle] Paddle Initialization failed. Please check the inputs",r);}}function co(i,t){var e=i.environment;i.version;var n=Cn(i,so);try{e&&t.Environment.set(e),t.Setup($t({},n));}catch(r){console.warn("[Paddle] Paddle Initialization failed. Please check the inputs",r);}}function Dn(i){return Yt.apply(this,arguments)}function Yt(){return Yt=qr(Kt().mark(function i(t){var e,n;return Kt().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e=t?.version||Zr,o.next=3,ro(e);case 3:if(n=o.sent,!n){o.next=9;break}return t&&(e===Pe.V1?lo(t,n):e===Pe.CLASSIC&&co(t,n)),o.abrupt("return",n);case 9:return console.error("[Paddle] Error Loading Paddle"),o.abrupt("return");case 11:case "end":return o.stop()}},i)})),Yt.apply(this,arguments)}function uo(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Field is required"),Ha());}function fo(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Field is required"),Ha());}function mo(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Enter a valid email address"),Ha());}function ho(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Field is required"),Ha());}function po(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Enter a number"),Ha());}function go(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Field should be 1 or higher"),Ha());}function _o(i,t){i&1&&(Vo(0,"mat-error"),bI(1,"Field should be 999999 or lower"),Ha());}var es=(()=>{class i{form=new _e({companyName:new Ie("",{nonNullable:true,validators:[O.required]}),email:new Ie("",{nonNullable:true,validators:[O.required,O.email]}),nDevelopers:new Ie("",{nonNullable:true,validators:[O.required,O.pattern(/^\d+$/),O.min(1),O.max(999999)]})});paddle=null;async ngAfterContentInit(){let e$1=await Dn({environment:e.environment,token:e.token});e$1&&(this.paddle=e$1);}buy(){if(this.form.invalid){this.form.markAllAsDirty();return}this.paddle?.Checkout.open({items:[{priceId:e.priceId,quantity:parseInt(this.form.value.nDevelopers??"",10)}],customer:{email:this.form.value.email??"",business:{taxIdentifier:"",name:this.form.value.companyName??""}},settings:{variant:"one-page",successUrl:e.successUrl}});}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Dv({type:i,selectors:[["buy"]],decls:22,vars:8,consts:[[3,"formGroup"],["matInput","","type","text","formControlName","companyName"],["matInput","","type","email","formControlName","email"],["matInput","","formControlName","nDevelopers"],["matButton","filled","color","primary",3,"click"]],template:function(n,r){n&1&&(Vo(0,"form",0)(1,"mat-form-field")(2,"mat-label"),bI(3,"Company name"),Ha(),gf(4,"input",1),Ay(),$v(5,uo,2,0,"mat-error"),Ha(),Vo(6,"mat-form-field")(7,"mat-label"),bI(8,"Email"),Ha(),gf(9,"input",2),Ay(),$v(10,fo,2,0,"mat-error"),$v(11,mo,2,0,"mat-error"),Ha(),Vo(12,"mat-form-field")(13,"mat-label"),bI(14,"Number of developers"),Ha(),gf(15,"input",3),Ay(),$v(16,ho,2,0,"mat-error"),$v(17,po,2,0,"mat-error"),$v(18,go,2,0,"mat-error"),$v(19,_o,2,0,"mat-error"),Ha(),Vo(20,"button",4),Ef("click",function(){return r.buy()}),bI(21,"Buy"),Ha()()),n&2&&(hf("formGroup",r.form),Bm(4),ky(),Bm(),Uv(r.form.controls.companyName.hasError("required")?5:-1),Bm(4),ky(),Bm(),Uv(r.form.controls.email.hasError("required")?10:-1),Bm(),Uv(r.form.controls.email.hasError("email")?11:-1),Bm(4),ky(),Bm(),Uv(r.form.controls.nDevelopers.hasError("required")?16:-1),Bm(),Uv(r.form.controls.nDevelopers.hasError("pattern")?17:-1),Bm(),Uv(r.form.controls.nDevelopers.hasError("min")?18:-1),Bm(),Uv(r.form.controls.nDevelopers.hasError("max")?19:-1));},dependencies:[qt,Ne,zt,bn,Au,tn,Ji,st,Qi,Xi,Re,Bt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;align-items:center}form[_ngcontent-%COMP%]{max-width:600px;padding:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})}return i})();
export{es as BuyPage};