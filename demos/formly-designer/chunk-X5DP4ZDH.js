import{A as pt,Aa as Ci,B as Pe,Ba as tr,C as Oe,Ca as cn,D as Ha,E as Ne,Ea as nr,F as Do,Fa as ir,G as Ga,Ga as mn,H as nn,Ha as Di,I as ui,Ia as or,J as se,Ja as Mi,K as on,Ka as ar,L as Mt,La as pn,M as fi,N as wt,Na as wi,O as an,P as We,Q as hi,Qa as un,R as gi,S as kt,Sa as fn,T as Ua,U as qa,Ua as st,V as _i,X as rn,Z as Et,aa as St,ab as rr,ba as sn,ca as ln,da as Mo,ea as zt,eb as hn,g as ci,ga as Ka,h as Ct,ha as bi,ia as $a,ja as Wa,jb as sr,ka as Qa,lb as lr,ma as Ya,mb as bl,na as Xa,nb as ut,o as ja,oa as dn,ob as dr,pb as ki,qa as vi,r as Q,ra as le,rb as cr,s as Va,sa as Za,sb as Tt,t as Dt,ta as Ja,tb as Ft,u as we,ua as yi,ub as lt,v as mi,va as er,w as tn,wa as wo,x as ot,xa as xi,y as Ke,ya as ko,z as pi,za as Qe}from"./chunk-LFSVO6TC.js";import{$b as ri,A as ni,Ac as li,B as Ca,Ba as ii,Bc as yt,Cc as xt,D as Da,Da as $e,E as Te,Ea as tt,Ec as Zt,F as ue,G as Ma,Ga as k,Gb as H,H as In,Ha as Pa,Hb as E,I as vo,Ic as Jt,J as yo,Jb as S,K as bt,Kc as La,L as ve,Lb as Pn,Lc as Y,M as wa,Mb as He,Mc as w,N as ka,Nb as Ge,Nc as te,Ob as g,Oc as di,Pb as m,Pc as Co,Qb as c,Qc as en,R as Ea,Rb as F,Rc as $,Sb as De,Sc as Ba,T as Sa,Tb as Re,U as Ta,Ub as mt,V as re,Vc as I,W as je,Wc as it,X as ce,Xb as Qt,Xc as za,Yb as K,Z as Ie,Zb as _e,_b as h,a as L,ab as An,ac as _,b as gt,ba as Fa,bb as p,bc as J,ca as x,cc as R,da as X,dc as vt,ec as Me,f as _l,fa as D,fb as qe,fc as O,g as Se,gb as nt,gc as N,ha as s,hc as Yt,i as _t,ib as Bt,ic as he,jb as ye,jc as ie,k as b,ka as Ra,kc as Ae,l as Ce,la as Ia,lb as Oa,lc as Xt,m as _o,ma as A,mb as rt,mc as T,n as ya,na as P,o as ct,oa as Aa,oc as me,p as ti,pc as C,q as z,qa as G,qb as f,qc as pe,ra as Ve,rb as Z,rc as ee,s as xa,sa as fe,sb as M,u as V,ua as q,ub as Na,v as Rn,va as U,vb as ae,wb as Fe,wc as W,xb as oi,xc as si,y as bo,z as Wt,za as j,zb as ai,zc as xo}from"./chunk-MV7PKJ4V.js";function To(i){let o=i.cloneNode(!0),e=o.querySelectorAll("[id]"),t=i.nodeName.toLowerCase();o.removeAttribute("id");for(let n=0;n<e.length;n++)e[n].removeAttribute("id");return t==="canvas"?ur(i,o):(t==="input"||t==="select"||t==="textarea")&&pr(i,o),mr("canvas",i,o,ur),mr("input, textarea, select",i,o,pr),o}function mr(i,o,e,t){let n=o.querySelectorAll(i);if(n.length){let a=e.querySelectorAll(i);for(let r=0;r<n.length;r++)t(n[r],a[r])}}var vl=0;function pr(i,o){o.type!=="file"&&(o.value=i.value),o.type==="radio"&&o.name&&(o.name=`mat-clone-${o.name}-${vl++}`)}function ur(i,o){let e=o.getContext("2d");if(e)try{e.drawImage(i,0,0)}catch{}}function No(i){let o=i.getBoundingClientRect();return{top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height,x:o.x,y:o.y}}function Fo(i,o,e){let{top:t,bottom:n,left:a,right:r}=i;return e>=t&&e<=n&&o>=a&&o<=r}function yl(i,o){let e=o.left<i.left,t=o.left+o.width>i.right,n=o.top<i.top,a=o.top+o.height>i.bottom;return e||t||n||a}function Ln(i,o,e){i.top+=o,i.bottom=i.top+i.height,i.left+=e,i.right=i.left+i.width}function fr(i,o,e,t){let{top:n,right:a,bottom:r,left:l,width:d,height:u}=i,v=d*o,B=u*o;return t>n-B&&t<r+B&&e>l-v&&e<a+v}var Ei=class{_document;positions=new Map;constructor(o){this._document=o}clear(){this.positions.clear()}cache(o){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),o.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:No(e)})})}handleScroll(o){let e=ot(o),t=this.positions.get(e);if(!t)return null;let n=t.scrollPosition,a,r;if(e===this._document){let u=this.getViewportScrollPosition();a=u.top,r=u.left}else a=e.scrollTop,r=e.scrollLeft;let l=n.top-a,d=n.left-r;return this.positions.forEach((u,v)=>{u.clientRect&&e!==v&&e.contains(v)&&Ln(u.clientRect,l,d)}),n.top=a,n.left=r,{top:l,left:d}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function kr(i,o){let e=i.rootNodes;if(e.length===1&&e[0].nodeType===o.ELEMENT_NODE)return e[0];let t=o.createElement("div");return e.forEach(n=>t.appendChild(n)),t}function Lo(i,o,e){for(let t in o)if(o.hasOwnProperty(t)){let n=o[t];n?i.setProperty(t,n,e?.has(t)?"important":""):i.removeProperty(t)}return i}function gn(i,o){let e=o?"":"none";Lo(i.style,{"touch-action":o?"":"none","-webkit-user-drag":o?"":"none","-webkit-tap-highlight-color":o?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function hr(i,o,e){Lo(i.style,{position:o?"":"fixed",top:o?"":"0",opacity:o?"":"0",left:o?"":"-999em"},e)}function Si(i,o){return o&&o!="none"?i+" "+o:i}function gr(i,o){i.style.width=`${o.width}px`,i.style.height=`${o.height}px`,i.style.transform=Bn(o.left,o.top)}function Bn(i,o){return`translate3d(${Math.round(i)}px, ${Math.round(o)}px, 0)`}var On={capture:!0},Eo={passive:!1,capture:!0},xl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,n){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return i})(),Bo=(()=>{class i{_ngZone=s(U);_document=s(Ve);_styleLoader=s(Ke);_renderer=s(Bt).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new b;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=j([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new b;pointerUp=new b;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Eo)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(xl),this._activeDragInstances.update(n=>[...n,e]),this._activeDragInstances().length===1)){let n=t.type.startsWith("touch"),a=l=>this.pointerUp.next(l),r=[["scroll",l=>this._scroll.next(l),On],["selectstart",this._preventDefaultWhileDragging,Eo]];n?r.push(["touchend",a,On],["touchcancel",a,On]):r.push(["mouseup",a,On]),n||r.push(["mousemove",l=>this.pointerMove.next(l),Eo]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=r.map(([l,d,u])=>this._renderer.listen(this._document,l,d,u))})}}stopDragging(e){this._activeDragInstances.update(t=>{let n=t.indexOf(e);return n>-1?(t.splice(n,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new _t(n=>this._ngZone.runOutsideAngular(()=>{let a=this._renderer.listen(e,"scroll",r=>{this._activeDragInstances().length&&n.next(r)},On);return()=>{a()}}))),Te(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _r(i){let o=i.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(i)*o}function Cl(i){let o=getComputedStyle(i),e=So(o,"transition-property"),t=e.find(l=>l==="transform"||l==="all");if(!t)return 0;let n=e.indexOf(t),a=So(o,"transition-duration"),r=So(o,"transition-delay");return _r(a[n])+_r(r[n])}function So(i,o){return i.getPropertyValue(o).split(",").map(t=>t.trim())}var Dl=new Set(["position"]),Ro=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(o,e,t,n,a,r,l,d,u,v){this._document=o,this._rootElement=e,this._direction=t,this._initialDomRect=n,this._previewTemplate=a,this._previewClass=r,this._pickupPositionOnPage=l,this._initialTransform=d,this._zIndex=u,this._renderer=v}attach(o){this._preview=this._createPreview(),o.appendChild(this._preview),br(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(o){this._preview.style.transform=o}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(o){this._preview.classList.add(o)}getTransitionDuration(){return Cl(this._preview)}addEventListener(o,e){return this._renderer.listen(this._preview,o,e)}_createPreview(){let o=this._previewTemplate,e=this._previewClass,t=o?o.template:null,n;if(t&&o){let a=o.matchSize?this._initialDomRect:null,r=o.viewContainer.createEmbeddedView(t,o.context);r.detectChanges(),n=kr(r,this._document),this._previewEmbeddedView=r,o.matchSize?gr(n,a):n.style.transform=Bn(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else n=To(this._rootElement),gr(n,this._initialDomRect),this._initialTransform&&(n.style.transform=this._initialTransform);return Lo(n.style,{"pointer-events":"none",margin:br(n)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Dl),gn(n,!1),n.classList.add("cdk-drag-preview"),n.setAttribute("popover","manual"),n.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(a=>n.classList.add(a)):n.classList.add(e)),n}};function br(i){return"showPopover"in i}var Ml={passive:!0},vr={passive:!1},wl={passive:!1,capture:!0},kl=800,yr="cdk-drag-placeholder",xr=new Set(["position"]);function Er(i,o,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=i.get(ye,null,{optional:!0})||i.get(Bt).createRenderer(null,null);return new Io(o,e,i.get(Ve),i.get(U),i.get(nn),i.get(Bo),t)}var Io=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=j(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new b;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=Se.EMPTY;_pointerUpSubscription=Se.EMPTY;_scrollSubscription=Se.EMPTY;_resizeSubscription=Se.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(o){o!==this._disabled&&(this._disabled=o,this._toggleNativeDragInteractions(),this._handles.forEach(e=>gn(e,o)))}_disabled=!1;beforeStarted=new b;started=new b;released=new b;ended=new b;entered=new b;exited=new b;dropped=new b;moved=this._moveEvents;data;constrainPosition;constructor(o,e,t,n,a,r,l){this._config=e,this._document=t,this._ngZone=n,this._viewportRuler=a,this._dragDropRegistry=r,this._renderer=l,this.withRootElement(o).withParent(e.parentDragRef||null),this._parentPositions=new Ei(t),r.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(o){this._handles=o.map(t=>Pe(t)),this._handles.forEach(t=>gn(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(o){return this._previewTemplate=o,this}withPlaceholderTemplate(o){return this._placeholderTemplate=o,this}withRootElement(o){let e=Pe(o);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,vr),t.listen(e,"touchstart",this._pointerDown,Ml),t.listen(e,"dragstart",this._nativeDragStart,vr)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(o){return this._boundaryElement=o?Pe(o):null,this._resizeSubscription.unsubscribe(),o&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(o){return this._parentDragRef=o,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&yl(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let o=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,n=0;e.left<o.left?t=o.left-e.left:e.right>o.right&&(t=o.right-e.right),e.top<o.top?n=o.top-e.top:e.bottom>o.bottom&&(n=o.bottom-e.bottom);let a=this._activeTransform.x,r=this._activeTransform.y,l=a+t,d=r+n;this._rootElement.style.transform=Bn(l,d),this._activeTransform={x:l,y:d},this._passiveTransform={x:l,y:d}}}disableHandle(o){!this._disabledHandles.has(o)&&this._handles.indexOf(o)>-1&&(this._disabledHandles.add(o),gn(o,!0))}enableHandle(o){this._disabledHandles.has(o)&&(this._disabledHandles.delete(o),gn(o,this.disabled))}withDirection(o){return this._direction=o,this}_withDropContainer(o){this._dropContainer=o}getFreeDragPosition(){let o=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:o.x,y:o.y}}setFreeDragPosition(o){return this._activeTransform={x:0,y:0},this._passiveTransform.x=o.x,this._passiveTransform.y=o.y,this._dropContainer||this._applyRootElementTransform(o.x,o.y),this}withPreviewContainer(o){return this._previewContainer=o,this}_sortFromLastPointerPosition(){let o=this._lastKnownPointerPosition;o&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(o),o)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=o=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(o);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,o)}else this.disabled||this._initializeDragSequence(this._rootElement,o)};_pointerMove=o=>{let e=this._getPointerPositionOnPage(o);if(!this._hasStartedDragging()){let n=Math.abs(e.x-this._pickupPositionOnPage.x),a=Math.abs(e.y-this._pickupPositionOnPage.y);if(n+a>=this._config.dragStartThreshold){let l=Date.now()>=this._dragStartTime+this._getDragStartDelay(o),d=this._dropContainer;if(!l){this._endDragSequence(o);return}(!d||!d.isDragging()&&!d.isReceiving())&&(o.cancelable&&o.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(o)))}return}o.cancelable&&o.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let n=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,a=this._activeTransform;a.x=t.x-n.x+this._passiveTransform.x,a.y=t.y-n.y+this._passiveTransform.y,this._applyRootElementTransform(a.x,a.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:o,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=o=>{this._endDragSequence(o)};_endDragSequence(o){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:o}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(o),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(o);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:o})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(o){Nn(o)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",El,wl)}),t){let n=this._rootElement,a=n.parentNode,r=this._placeholder=this._createPlaceholderElement(),l=this._marker=this._marker||this._document.createComment("");a.insertBefore(l,n),this._initialTransform=n.style.transform||"",this._preview=new Ro(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(a,e)),hr(n,!1,xr),this._document.body.appendChild(a.replaceChild(r,n)),this.started.next({source:this,event:o}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:o}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(o,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),n=Nn(e),a=!n&&e.button!==0,r=this._rootElement,l=ot(e),d=!n&&this._lastTouchEventTime&&this._lastTouchEventTime+kl>Date.now(),u=n?ln(e):sn(e);if(l&&l.draggable&&e.type==="mousedown"&&e.preventDefault(),t||a||d||u)return;if(this._handles.length){let de=r.style;this._rootElementTapHighlight=de.webkitTapHighlightColor||"",de.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(de=>this._updateOnScroll(de)),this._boundaryElement&&(this._boundaryRect=No(this._boundaryElement));let v=this._previewTemplate;this._pickupPositionInElement=v&&v.template&&!v.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,o,e);let B=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:B.x,y:B.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(o){hr(this._rootElement,!0,xr),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),n=this._getPointerPositionOnPage(o),a=this._getDragDistance(n),r=e._isOverContainer(n.x,n.y);this.ended.next({source:this,distance:a,dropPoint:n,event:o}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:r,distance:a,dropPoint:n,event:o}),e.drop(this,t,this._initialIndex,this._initialContainer,r,a,n,o),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:o,y:e},{x:t,y:n}){let a=this._initialContainer._getSiblingContainerFromPosition(this,o,e);!a&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(o,e)&&(a=this._initialContainer),a&&a!==this._dropContainer&&this._ngZone.run(()=>{let r=this._dropContainer.getItemIndex(this),l=this._dropContainer.getItemAtIndex(r+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(a,this._dropContainer,l),this._dropContainer=a,this._dropContainer.enter(this,o,e,a===this._initialContainer&&a.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:a,currentIndex:a.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,n),this._dropContainer._sortItem(this,o,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(o,e):this._applyPreviewTransform(o-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let o=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(o.left,o.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let n=l=>{(!l||this._preview&&ot(l)===this._preview.element&&l.propertyName==="transform")&&(r(),t(),clearTimeout(a))},a=setTimeout(n,e*1.5),r=this._preview.addEventListener("transitionend",n)}))}_createPlaceholderElement(){let o=this._placeholderTemplate,e=o?o.template:null,t;return e?(this._placeholderRef=o.viewContainer.createEmbeddedView(e,o.context),this._placeholderRef.detectChanges(),t=kr(this._placeholderRef,this._document)):t=To(this._rootElement),t.style.pointerEvents="none",t.classList.add(yr),t}_getPointerPositionInElement(o,e,t){let n=e===this._rootElement?null:e,a=n?n.getBoundingClientRect():o,r=Nn(t)?t.targetTouches[0]:t,l=this._getViewportScrollPosition(),d=r.pageX-a.left-l.left,u=r.pageY-a.top-l.top;return{x:a.left-o.left+d,y:a.top-o.top+u}}_getPointerPositionOnPage(o){let e=this._getViewportScrollPosition(),t=Nn(o)?o.touches[0]||o.changedTouches[0]||{pageX:0,pageY:0}:o,n=t.pageX-e.left,a=t.pageY-e.top;if(this._ownerSVGElement){let r=this._ownerSVGElement.getScreenCTM();if(r){let l=this._ownerSVGElement.createSVGPoint();return l.x=n,l.y=a,l.matrixTransform(r.inverse())}}return{x:n,y:a}}_getConstrainedPointerPosition(o){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:n}=this.constrainPosition?this.constrainPosition(o,this,this._initialDomRect,this._pickupPositionInElement):o;if(this.lockAxis==="x"||e==="x"?n=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:a,y:r}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,l=this._boundaryRect,{width:d,height:u}=this._getPreviewRect(),v=l.top+r,B=l.bottom-(u-r),de=l.left+a,Je=l.right-(d-a);t=Cr(t,de,Je),n=Cr(n,v,B)}return{x:t,y:n}}_updatePointerDirectionDelta(o){let{x:e,y:t}=o,n=this._pointerDirectionDelta,a=this._pointerPositionAtLastDirectionChange,r=Math.abs(e-a.x),l=Math.abs(t-a.y);return r>this._config.pointerDirectionChangeThreshold&&(n.x=e>a.x?1:-1,a.x=e),l>this._config.pointerDirectionChangeThreshold&&(n.y=t>a.y?1:-1,a.y=t),n}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let o=this._handles.length>0||!this.isDragging();o!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=o,gn(this._rootElement,o))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(o=>o()),this._rootElementCleanups=void 0}_applyRootElementTransform(o,e){let t=1/this.scale,n=Bn(o*t,e*t),a=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=a.transform&&a.transform!="none"?a.transform:""),a.transform=Si(n,this._initialTransform)}_applyPreviewTransform(o,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,n=Bn(o,e);this._preview.setTransform(Si(n,t))}_getDragDistance(o){let e=this._pickupPositionOnPage;return e?{x:o.x-e.x,y:o.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:o,y:e}=this._passiveTransform;if(o===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),n=this._boundaryElement.getBoundingClientRect();if(n.width===0&&n.height===0||t.width===0&&t.height===0)return;let a=n.left-t.left,r=t.right-n.right,l=n.top-t.top,d=t.bottom-n.bottom;n.width>t.width?(a>0&&(o+=a),r>0&&(o-=r)):o=0,n.height>t.height?(l>0&&(e+=l),d>0&&(e-=d)):e=0,(o!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:o})}_getDragStartDelay(o){let e=this.dragStartDelay;return typeof e=="number"?e:Nn(o)?e.touch:e?e.mouse:0}_updateOnScroll(o){let e=this._parentPositions.handleScroll(o);if(e){let t=ot(o);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&Ln(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=mi(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(o,e){let t=this._previewContainer||"global";if(t==="parent")return o;if(t==="global"){let n=this._document;return e||n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement||n.body}return Pe(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=o=>{if(this._handles.length){let e=this._getTargetHandle(o);e&&!this._disabledHandles.has(e)&&!this.disabled&&o.preventDefault()}else this.disabled||o.preventDefault()};_getTargetHandle(o){return this._handles.find(e=>o.target&&(o.target===e||e.contains(o.target)))}_conditionallyInsertAnchor(o,e,t){if(o===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let n=this._anchor??=To(this._placeholder);n.classList.remove(yr),n.classList.add("cdk-drag-anchor"),n.style.transform="",t?t.before(n):Pe(e.element).appendChild(n)}}};function Cr(i,o,e){return Math.max(o,Math.min(e,i))}function Nn(i){return i.type[0]==="t"}function El(i){i.preventDefault()}function Fi(i,o,e){let t=Dr(o,i.length-1),n=Dr(e,i.length-1);if(t===n)return;let a=i[t],r=n<t?-1:1;for(let l=t;l!==n;l+=r)i[l]=i[l+r];i[n]=a}function Dr(i,o){return Math.max(0,Math.min(o,i))}var Ti=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(o){this._dragDropRegistry=o}_previousSwap={drag:null,delta:0,overlaps:!1};start(o){this.withItems(o)}sort(o,e,t,n){let a=this._itemPositions,r=this._getItemIndexFromPointerPosition(o,e,t,n);if(r===-1&&a.length>0)return null;let l=this.orientation==="horizontal",d=a.findIndex(xe=>xe.drag===o),u=a[r],v=a[d].clientRect,B=u.clientRect,de=d>r?1:-1,Je=this._getItemOffsetPx(v,B,de),Lt=this._getSiblingOffsetPx(d,a,de),et=a.slice();return Fi(a,d,r),a.forEach((xe,ei)=>{if(et[ei]===xe)return;let Kt=xe.drag===o,$t=Kt?Je:Lt,ba=Kt?o.getPlaceholderElement():xe.drag.getRootElement();xe.offset+=$t;let va=Math.round(xe.offset*(1/xe.drag.scale));l?(ba.style.transform=Si(`translate3d(${va}px, 0, 0)`,xe.initialTransform),Ln(xe.clientRect,0,$t)):(ba.style.transform=Si(`translate3d(0, ${va}px, 0)`,xe.initialTransform),Ln(xe.clientRect,$t,0))}),this._previousSwap.overlaps=Fo(B,e,t),this._previousSwap.drag=u.drag,this._previousSwap.delta=l?n.x:n.y,{previousIndex:d,currentIndex:r}}enter(o,e,t,n){let a=this._activeDraggables,r=a.indexOf(o),l=o.getPlaceholderElement();r>-1&&a.splice(r,1);let d=n==null||n<0?this._getItemIndexFromPointerPosition(o,e,t):n,u=a[d];if(u===o&&(u=a[d+1]),!u&&(d==null||d===-1||d<a.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(u=a[0]),u&&!this._dragDropRegistry.isDragging(u)){let v=u.getRootElement();v.parentElement.insertBefore(l,v),a.splice(d,0,o)}else this._element.appendChild(l),a.push(o);l.style.transform="",this._cacheItemPositions()}withItems(o){this._activeDraggables=o.slice(),this._cacheItemPositions()}withSortPredicate(o){this._sortPredicate=o}reset(){this._activeDraggables?.forEach(o=>{let e=o.getRootElement();if(e){let t=this._itemPositions.find(n=>n.drag===o)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(o){return this._getVisualItemPositions().findIndex(e=>e.drag===o)}getItemAtIndex(o){return this._getVisualItemPositions()[o]?.drag||null}updateOnScroll(o,e){this._itemPositions.forEach(({clientRect:t})=>{Ln(t,o,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(o){this._element=o}_cacheItemPositions(){let o=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:No(t)}}).sort((e,t)=>o?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(o,e,t){let n=this.orientation==="horizontal",a=n?e.left-o.left:e.top-o.top;return t===-1&&(a+=n?e.width-o.width:e.height-o.height),a}_getSiblingOffsetPx(o,e,t){let n=this.orientation==="horizontal",a=e[o].clientRect,r=e[o+t*-1],l=a[n?"width":"height"]*t;if(r){let d=n?"left":"top",u=n?"right":"bottom";t===-1?l-=r.clientRect[d]-a[u]:l+=a[d]-r.clientRect[u]}return l}_shouldEnterAsFirstChild(o,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,n=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let r=t[t.length-1].clientRect;return n?o>=r.right:e>=r.bottom}else{let r=t[0].clientRect;return n?o<=r.left:e<=r.top}}_getItemIndexFromPointerPosition(o,e,t,n){let a=this.orientation==="horizontal",r=this._itemPositions.findIndex(({drag:l,clientRect:d})=>{if(l===o)return!1;if(n){let u=a?n.x:n.y;if(l===this._previousSwap.drag&&this._previousSwap.overlaps&&u===this._previousSwap.delta)return!1}return a?e>=Math.floor(d.left)&&e<Math.floor(d.right):t>=Math.floor(d.top)&&t<Math.floor(d.bottom)});return r===-1||!this._sortPredicate(r,o)?-1:r}},Ao=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(o,e){this._document=o,this._dragDropRegistry=e}start(o){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let n=e[t];this._relatedNodes.push([n,n.nextSibling])}this.withItems(o)}sort(o,e,t,n){let a=this._getItemIndexFromPointerPosition(o,e,t),r=this._previousSwap;if(a===-1||this._activeItems[a]===o)return null;let l=this._activeItems[a];if(r.drag===l&&r.overlaps&&r.deltaX===n.x&&r.deltaY===n.y)return null;let d=this.getItemIndex(o),u=o.getPlaceholderElement(),v=l.getRootElement();a>d?v.after(u):v.before(u),Fi(this._activeItems,d,a);let B=this._getRootNode().elementFromPoint(e,t);return r.deltaX=n.x,r.deltaY=n.y,r.drag=l,r.overlaps=v===B||v.contains(B),{previousIndex:d,currentIndex:a}}enter(o,e,t,n){let a=this._activeItems.indexOf(o);a>-1&&this._activeItems.splice(a,1);let r=n==null||n<0?this._getItemIndexFromPointerPosition(o,e,t):n;r===-1&&(r=this._getClosestItemIndexToPointer(o,e,t));let l=this._activeItems[r];l&&!this._dragDropRegistry.isDragging(l)?(this._activeItems.splice(r,0,o),l.getRootElement().before(o.getPlaceholderElement())):(this._activeItems.push(o),this._element.appendChild(o.getPlaceholderElement()))}withItems(o){this._activeItems=o.slice()}withSortPredicate(o){this._sortPredicate=o}reset(){let o=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[n,a]=this._relatedNodes[t];n.parentNode===o&&n.nextSibling!==a&&(a===null?o.appendChild(n):a.parentNode===o&&o.insertBefore(n,a))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(o){return this._activeItems.indexOf(o)}getItemAtIndex(o){return this._activeItems[o]||null}updateOnScroll(){this._activeItems.forEach(o=>{this._dragDropRegistry.isDragging(o)&&o._sortFromLastPointerPosition()})}withElementContainer(o){o!==this._element&&(this._element=o,this._rootNode=void 0)}_getItemIndexFromPointerPosition(o,e,t){let n=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),a=n?this._activeItems.findIndex(r=>{let l=r.getRootElement();return n===l||l.contains(n)}):-1;return a===-1||!this._sortPredicate(a,o)?-1:a}_getRootNode(){return this._rootNode||(this._rootNode=mi(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(o,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let n=1/0,a=-1;for(let r=0;r<this._activeItems.length;r++){let l=this._activeItems[r];if(l!==o){let{x:d,y:u}=l.getRootElement().getBoundingClientRect(),v=Math.hypot(e-d,t-u);v<n&&(n=v,a=r)}}return a}},Mr=.05,Sr=.05,Ye=(function(i){return i[i.NONE=0]="NONE",i[i.UP=1]="UP",i[i.DOWN=2]="DOWN",i})(Ye||{}),Le=(function(i){return i[i.NONE=0]="NONE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT",i})(Le||{});function Tr(i,o){return new Po(o,i.get(Bo),i.get(Ve),i.get(U),i.get(nn))}var Po=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new b;entered=new b;exited=new b;dropped=new b;sorted=new b;receivingStarted=new b;receivingStopped=new b;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=Se.EMPTY;_verticalScrollDirection=Ye.NONE;_horizontalScrollDirection=Le.NONE;_scrollNode;_stopScrollTimers=new b;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(o,e,t,n,a){this._dragDropRegistry=e,this._ngZone=n,this._viewportRuler=a;let r=this.element=Pe(o);this._document=t,this.withOrientation("vertical").withElementContainer(r),e.registerDropContainer(this),this._parentPositions=new Ei(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(o,e,t,n){this._draggingStarted(),n==null&&this.sortingDisabled&&(n=this._draggables.indexOf(o)),this._sortStrategy.enter(o,e,t,n),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:o,container:this,currentIndex:this.getItemIndex(o)})}exit(o){this._reset(),this.exited.next({item:o,container:this})}drop(o,e,t,n,a,r,l,d={}){this._reset(),this.dropped.next({item:o,currentIndex:e,previousIndex:t,container:this,previousContainer:n,isPointerOverContainer:a,distance:r,dropPoint:l,event:d})}withItems(o){let e=this._draggables;return this._draggables=o,o.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(n=>n.isDragging()).every(n=>o.indexOf(n)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(o){return this._direction=o,this._sortStrategy instanceof Ti&&(this._sortStrategy.direction=o),this}connectedTo(o){return this._siblings=o.slice(),this}withOrientation(o){if(o==="mixed")this._sortStrategy=new Ao(this._document,this._dragDropRegistry);else{let e=new Ti(this._dragDropRegistry);e.direction=this._direction,e.orientation=o,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(o){let e=this._container;return this._scrollableElements=o.indexOf(e)===-1?[e,...o]:o.slice(),this}withElementContainer(o){if(o===this._container)return this;let e=Pe(this.element),t=this._scrollableElements.indexOf(this._container),n=this._scrollableElements.indexOf(o);return t>-1&&this._scrollableElements.splice(t,1),n>-1&&this._scrollableElements.splice(n,1),this._sortStrategy&&this._sortStrategy.withElementContainer(o),this._cachedShadowRoot=null,this._scrollableElements.unshift(o),this._container=o,this}getScrollableParents(){return this._scrollableElements}getItemIndex(o){return this._isDragging?this._sortStrategy.getItemIndex(o):this._draggables.indexOf(o)}getItemAtIndex(o){return this._isDragging?this._sortStrategy.getItemAtIndex(o):this._draggables[o]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(o,e,t,n){if(this.sortingDisabled||!this._domRect||!fr(this._domRect,Mr,e,t))return;let a=this._sortStrategy.sort(o,e,t,n);a&&this.sorted.next({previousIndex:a.previousIndex,currentIndex:a.currentIndex,container:this,item:o})}_startScrollingIfNecessary(o,e){if(this.autoScrollDisabled)return;let t,n=Ye.NONE,a=Le.NONE;if(this._parentPositions.positions.forEach((r,l)=>{l===this._document||!r.clientRect||t||fr(r.clientRect,Mr,o,e)&&([n,a]=Sl(l,r.clientRect,this._direction,o,e),(n||a)&&(t=l))}),!n&&!a){let{width:r,height:l}=this._viewportRuler.getViewportSize(),d={width:r,height:l,top:0,right:r,bottom:l,left:0};n=Fr(d,e),a=Rr(d,o),t=window}t&&(n!==this._verticalScrollDirection||a!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=n,this._horizontalScrollDirection=a,this._scrollNode=t,(n||a)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let o=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=o.msScrollSnapType||o.scrollSnapType||"",o.scrollSnapType=o.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let o=this._container.style;o.scrollSnapType=o.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Da(0,ya).pipe(ce(this._stopScrollTimers)).subscribe(()=>{let o=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Ye.UP?o.scrollBy(0,-e):this._verticalScrollDirection===Ye.DOWN&&o.scrollBy(0,e),this._horizontalScrollDirection===Le.LEFT?o.scrollBy(-e,0):this._horizontalScrollDirection===Le.RIGHT&&o.scrollBy(e,0)})};_isOverContainer(o,e){return this._domRect!=null&&Fo(this._domRect,o,e)}_getSiblingContainerFromPosition(o,e,t){return this._siblings.find(n=>n._canReceive(o,e,t))}_canReceive(o,e,t){if(!this._domRect||!Fo(this._domRect,e,t)||!this.enterPredicate(o,this))return!1;let n=this._getShadowRoot().elementFromPoint(e,t);return n?n===this._container||this._container.contains(n):!1}_startReceiving(o,e){let t=this._activeSiblings;!t.has(o)&&e.every(n=>this.enterPredicate(n,this)||this._draggables.indexOf(n)>-1)&&(t.add(o),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:o,receiver:this,items:e}))}_stopReceiving(o){this._activeSiblings.delete(o),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:o,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(o=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(o);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let o=mi(this._container);this._cachedShadowRoot=o||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let o=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,o))}};function Fr(i,o){let{top:e,bottom:t,height:n}=i,a=n*Sr;return o>=e-a&&o<=e+a?Ye.UP:o>=t-a&&o<=t+a?Ye.DOWN:Ye.NONE}function Rr(i,o){let{left:e,right:t,width:n}=i,a=n*Sr;return o>=e-a&&o<=e+a?Le.LEFT:o>=t-a&&o<=t+a?Le.RIGHT:Le.NONE}function Sl(i,o,e,t,n){let a=Fr(o,n),r=Rr(o,t),l=Ye.NONE,d=Le.NONE;if(a){let u=i.scrollTop;a===Ye.UP?u>0&&(l=Ye.UP):i.scrollHeight-u>i.clientHeight&&(l=Ye.DOWN)}if(r){let u=i.scrollLeft;e==="rtl"?r===Le.RIGHT?u<0&&(d=Le.RIGHT):i.scrollWidth+u>i.clientWidth&&(d=Le.LEFT):r===Le.LEFT?u>0&&(d=Le.LEFT):i.scrollWidth-u>i.clientWidth&&(d=Le.RIGHT)}return[l,d]}var Tl=(()=>{class i{_injector=s(G);constructor(){}createDrag(e,t){return Er(this._injector,e,t)}createDropList(e){return Tr(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),wr=new D("CDK_DRAG_PARENT");var Fl=new D("CdkDragHandle");var Ir=new D("CDK_DRAG_CONFIG"),Ar=new D("CdkDropList"),_n=(()=>{class i{element=s(k);dropContainer=s(Ar,{optional:!0,skipSelf:!0});_ngZone=s(U);_viewContainerRef=s(rt);_dir=s(Oe,{optional:!0});_changeDetectorRef=s($);_selfHandle=s(Fl,{optional:!0,self:!0});_parentDrag=s(wr,{optional:!0,skipSelf:!0});_dragDropRegistry=s(Bo);_destroyed=new b;_handles=new Ce([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new q;released=new q;ended=new q;entered=new q;exited=new q;dropped=new q;moved=new _t(e=>{let t=this._dragRef.moved.pipe(V(n=>({source:this,pointerPosition:n.pointerPosition,event:n.event,delta:n.delta,distance:n.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=s(G);constructor(){let e=this.dropContainer,t=s(Ir,{optional:!0});this._dragRef=Er(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(ce(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){qe(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,n=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,n&&!n.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),n=t.indexOf(e);n>-1&&(t.splice(n,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Pe(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,n=this.dragStartDelay,a=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,r=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof n=="object"&&n?n:pt(n),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(r).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(ve(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let n=this._dragDropRegistry.getDragDirectiveForNode(t);if(n){e.withParent(n._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:n,constrainPosition:a,previewClass:r,boundaryElement:l,draggingDisabled:d,rootElementSelector:u,previewContainer:v}=e;this.disabled=d??!1,this.dragStartDelay=n||0,this.lockAxis=t||null,a&&(this.constrainPosition=a),r&&(this.previewClass=r),l&&(this.boundaryElement=l),u&&(this.rootElementSelector=u),v&&(this.previewContainer=v)}_setupHandlesListener(){this._handles.pipe(Ie(e=>{let t=e.map(n=>n.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),je(e=>Te(...e.map(t=>t._stateChanges.pipe(re(t))))),ce(this._destroyed)).subscribe(e=>{let t=this._dragRef,n=e.element.nativeElement;e.disabled?t.disableHandle(n):t.enableHandle(n)})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,n){t&2&&T("cdk-drag-disabled",n.disabled)("cdk-drag-dragging",n._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",I],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",it]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[W([{provide:wr,useExisting:i}]),$e]})}return i})(),Oo=new D("CdkDropListGroup"),Pr=(()=>{class i{_items=new Set;disabled=!1;ngOnDestroy(){this._items.clear()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",I]},exportAs:["cdkDropListGroup"],features:[W([{provide:Oo,useExisting:i}])]})}return i})(),Ri=(()=>{class i{element=s(k);_changeDetectorRef=s($);_scrollDispatcher=s(Do);_dir=s(Oe,{optional:!0});_group=s(Oo,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new b;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=s(se).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new q;entered=new q;exited=new q;sorted=new q;_unsortedItems=new Set;constructor(){let e=s(Ir,{optional:!0}),t=s(G);this._dropListRef=Tr(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(n,a)=>this.enterPredicate(n.data,a.data),this._dropListRef.sortPredicate=(n,a,r)=>this.sortPredicate(n,a.data,r.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),i._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=i._dropLists.indexOf(this);e>-1&&i._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(re(this._dir.value),ce(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=pi(this.connectedTo).map(n=>{if(typeof n=="string"){let a=i._dropLists.find(r=>r.id===n);return a}return n});if(this._group&&this._group._items.forEach(n=>{t.indexOf(n)===-1&&t.push(n)}),!this._scrollableParentsResolved){let n=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a=>a.getElementRef().nativeElement);this._dropListRef.withScrollableParents(n),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let n=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(n)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=pt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(n=>n&&n!==this).map(n=>n._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),Te(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:n,sortingDisabled:a,listAutoScrollDisabled:r,listOrientation:l}=e;this.disabled=n??!1,this.sortingDisabled=a??!1,this.autoScrollDisabled=r??!1,this.orientation=l||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,n){t&2&&(H("id",n.id),T("cdk-drop-list-disabled",n.disabled)("cdk-drop-list-dragging",n._dropListRef.isDragging())("cdk-drop-list-receiving",n._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",I],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",I],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",I],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",I]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[W([{provide:Oo,useValue:void 0},{provide:Ar,useExisting:i}])]})}return i})();var zn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({providers:[Tl],imports:[ui]})}return i})();var Xe=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Xe||{}),zo=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Xe.HIDDEN;constructor(o,e,t,n=!1){this._renderer=o,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},Nr=Mo({passive:!0,capture:!0}),jo=class{_events=new Map;addHandler(o,e,t,n){let a=this._events.get(e);if(a){let r=a.get(t);r?r.add(n):a.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),o.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Nr)})}removeHandler(o,e,t){let n=this._events.get(o);if(!n)return;let a=n.get(e);a&&(a.delete(t),a.size===0&&n.delete(e),n.size===0&&(this._events.delete(o),document.removeEventListener(o,this._delegateEventHandler,Nr)))}_delegateEventHandler=o=>{let e=ot(o);e&&this._events.get(o.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(a=>a.handleEvent(o))})}},jn={enterDuration:225,exitDuration:150},Rl=800,Lr=Mo({passive:!0,capture:!0}),Br=["mousedown","touchstart"],zr=["mouseup","mouseleave","touchend","touchcancel"],Il=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Vn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new jo;constructor(o,e,t,n,a){this._target=o,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=Pe(t)),a&&a.get(Ke).load(Il)}fadeInRipple(o,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=L(L({},jn),t.animation);t.centered&&(o=n.left+n.width/2,e=n.top+n.height/2);let r=t.radius||Al(o,e,n),l=o-n.left,d=e-n.top,u=a.enterDuration,v=document.createElement("div");v.classList.add("mat-ripple-element"),v.style.left=`${l-r}px`,v.style.top=`${d-r}px`,v.style.height=`${r*2}px`,v.style.width=`${r*2}px`,t.color!=null&&(v.style.backgroundColor=t.color),v.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(v);let B=window.getComputedStyle(v),de=B.transitionProperty,Je=B.transitionDuration,Lt=de==="none"||Je==="0s"||Je==="0s, 0s"||n.width===0&&n.height===0,et=new zo(this,v,t,Lt);v.style.transform="scale3d(1, 1, 1)",et.state=Xe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=et);let xe=null;return!Lt&&(u||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ei=()=>{xe&&(xe.fallbackTimer=null),clearTimeout($t),this._finishRippleTransition(et)},Kt=()=>this._destroyRipple(et),$t=setTimeout(Kt,u+100);v.addEventListener("transitionend",ei),v.addEventListener("transitioncancel",Kt),xe={onTransitionEnd:ei,onTransitionCancel:Kt,fallbackTimer:$t}}),this._activeRipples.set(et,xe),(Lt||!u)&&this._finishRippleTransition(et),et}fadeOutRipple(o){if(o.state===Xe.FADING_OUT||o.state===Xe.HIDDEN)return;let e=o.element,t=L(L({},jn),o.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",o.state=Xe.FADING_OUT,(o._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(o)}fadeOutAll(){this._getActiveRipples().forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){let e=Pe(o);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Br.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(o){o.type==="mousedown"?this._onMousedown(o):o.type==="touchstart"?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{zr.forEach(e=>{this._triggerElement.addEventListener(e,this,Lr)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(o){o.state===Xe.FADING_IN?this._startFadeOutTransition(o):o.state===Xe.FADING_OUT&&this._destroyRipple(o)}_startFadeOutTransition(o){let e=o===this._mostRecentTransientRipple,{persistent:t}=o.config;o.state=Xe.VISIBLE,!t&&(!e||!this._isPointerDown)&&o.fadeOut()}_destroyRipple(o){let e=this._activeRipples.get(o)??null;this._activeRipples.delete(o),this._activeRipples.size||(this._containerRect=null),o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),o.state=Xe.HIDDEN,e!==null&&(o.element.removeEventListener("transitionend",e.onTransitionEnd),o.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),o.element.remove()}_onMousedown(o){let e=sn(o),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Rl;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!ln(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=o.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(o=>{let e=o.state===Xe.VISIBLE||o.config.terminateOnPointerUp&&o.state===Xe.FADING_IN;!o.config.persistent&&e&&o.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let o=this._triggerElement;o&&(Br.forEach(e=>i._eventManager.removeHandler(e,o,this)),this._pointerUpEventsRegistered&&(zr.forEach(e=>o.removeEventListener(e,this,Lr)),this._pointerUpEventsRegistered=!1))}};function Al(i,o,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(o-e.top),Math.abs(o-e.bottom));return Math.sqrt(t*t+n*n)}var Vo=new D("mat-ripple-global-options"),Ii=(()=>{class i{_elementRef=s(k);_animationsDisabled=le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(U),t=s(we),n=s(Vo,{optional:!0}),a=s(G);this._globalOptions=n||{},this._rippleRenderer=new Vn(this,e,this._elementRef,t,a)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:L(L(L({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,L(L({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,L(L({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&T("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Pl={capture:!0},Ol=["focus","mousedown","mouseenter","touchstart"],Ho="mat-ripple-loader-uninitialized",Go="mat-ripple-loader-class-name",jr="mat-ripple-loader-centered",Ai="mat-ripple-loader-disabled",Vr=(()=>{class i{_document=s(Ve);_animationsDisabled=le();_globalRippleOptions=s(Vo,{optional:!0});_platform=s(we);_ngZone=s(U);_injector=s(G);_eventCleanups;_hosts=new Map;constructor(){let e=s(Bt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Ol.map(t=>e.listen(this._document,t,this._onInteraction,Pl)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ho,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Go))&&e.setAttribute(Go,t.className||""),t.centered&&e.setAttribute(jr,""),t.disabled&&e.setAttribute(Ai,"")}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ai,""):e.removeAttribute(Ai)}_onInteraction=e=>{let t=ot(e);if(t instanceof HTMLElement){let n=t.closest(`[${Ho}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Go)),e.append(t);let n=this._globalRippleOptions,a=this._animationsDisabled?0:n?.animation?.enterDuration??jn.enterDuration,r=this._animationsDisabled?0:n?.animation?.exitDuration??jn.exitDuration,l={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(Ai),rippleConfig:{centered:e.hasAttribute(jr),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:a,exitDuration:r}}},d=new Vn(l,this._ngZone,t,this._platform,this._injector),u=!l.rippleDisabled;u&&d.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:d,hasSetUpEvents:u}),e.removeAttribute(Ho)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var bn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Nl=["mat-icon-button",""],Ll=["*"],Bl=new D("MAT_BUTTON_CONFIG");function Hr(i){return i==null?void 0:it(i)}var Uo=(()=>{class i{_elementRef=s(k);_ngZone=s(U);_animationsDisabled=le();_config=s(Bl,{optional:!0});_focusMonitor=s(zt);_cleanupClick;_renderer=s(ye);_rippleLoader=s(Vr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(Ke).load(bn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,n){t&2&&(H("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),me(n.color?"mat-"+n.color:""),T("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",I],disabled:[2,"disabled","disabled",I],ariaDisabled:[2,"aria-disabled","ariaDisabled",I],disabledInteractive:[2,"disabledInteractive","disabledInteractive",I],tabIndex:[2,"tabIndex","tabIndex",Hr],_tabindex:[2,"tabindex","_tabindex",Hr]}})}return i})(),qo=(()=>{class i extends Uo{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ae],attrs:Nl,ngContentSelectors:Ll,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(J(),mt(0,"span",0),R(1),mt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Gr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({imports:[Ne]})}return i})();var zl=["matButton",""],jl=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Vl=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Ur=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Be=(()=>{class i extends Uo{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Hl(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?Ur.get(this._appearance):null,a=Ur.get(e);n&&t.remove(...n),t.add(...a),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ae],attrs:zl,ngContentSelectors:Vl,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(J(jl),mt(0,"span",0),R(1),De(2,"span",1),R(3,1),Re(),R(4,2),mt(5,"span",2)(6,"span",3)),t&2&&T("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Hl(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Cp=Be;var Gl=["*"],Ul=(i,o)=>`${o.modificationState}${o.filename}`;function ql(i,o){if(i&1){let e=K();m(0,"matx-file-tab",2),h("tabSelect",function(){let n=A(e).$implicit,a=_();return P(a.selectTab(n.filename))})("tabClose",function(){let n=A(e).$implicit,a=_();return P(a.closeTab(n.filename))}),c()}if(i&2){let e=o.$implicit,t=_();g("text",e.filename)("selected",e===t.selectedTab())("modificationState",e.modificationState)}}var Kl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-file-tab-container"]],ngContentSelectors:Gl,decls:3,vars:0,consts:[[1,"tabs-container"]],template:function(t,n){t&1&&(J(),De(0,"div")(1,"div",0),R(2),Re()())},styles:["[_nghost-%COMP%]{display:flex;overflow:auto}[_nghost-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_nghost-%COMP%]::-webkit-scrollbar-corner{display:none}[_nghost-%COMP%]::-webkit-scrollbar-thumb{border-radius:4px;background:#aaa}[_nghost-%COMP%]::-webkit-scrollbar-track{border-radius:4px;background:#eee}[_nghost-%COMP%]{overflow-y:hidden}.tabs-container[_ngcontent-%COMP%]{white-space:nowrap;display:flex;flex-direction:row;overflow:hidden}"],changeDetection:0})}return i})(),ne=(function(i){return i[i.New=0]="New",i[i.Unmodified=1]="Unmodified",i[i.Modified=2]="Modified",i[i.Unknown=3]="Unknown",i})(ne||{}),$l=(()=>{class i{text=w.required();selected=en.required();modificationState=w(ne.Unmodified);tabSelect=Y();tabClose=Y();hovering=j(!1);buttonTag=Jt(()=>this.hovering()?"close-button":this.buttonTags.get(this.modificationState()));buttonTags=new Map([[ne.New,"add"],[ne.Unknown,"circle"],[ne.Modified,"circle"],[ne.Unmodified,""]]);constructor(){let e=s(k);Va(this.selected).subscribe(t=>t&&e.nativeElement.scrollIntoView&&e.nativeElement.scrollIntoView())}handleClick(e){e.target?.tagName.toLowerCase()!=="mat-icon"&&(this.selected.set(!0),this.tabSelect.emit())}handleClose(){this.tabClose.emit()}handleMouseEnter(){this.hovering.set(!0)}handleMouseLeave(){this.hovering.set(!1)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-file-tab"]],inputs:{text:[1,"text"],selected:[1,"selected"],modificationState:[1,"modificationState"]},outputs:{selected:"selectedChange",tabSelect:"tabSelect",tabClose:"tabClose"},decls:4,vars:8,consts:[["mat-button","",3,"click","mouseenter","mouseleave"],["iconPositionEnd","",3,"click"]],template:function(t,n){t&1&&(m(0,"button",0),h("click",function(r){return n.handleClick(r)})("mouseenter",function(){return n.handleMouseEnter()})("mouseleave",function(){return n.handleMouseLeave()}),C(1),m(2,"mat-icon",1),h("click",function(){return n.handleClose()}),C(3),c()()),t&2&&(me(n.selected()?"tab--selected":"tab"),p(),ee(" ",n.text()," "),p(),me(n.hovering()?"close-button":n.buttonTag()),Xt("margin-left","2px"),p(),pe(n.buttonTag()))},dependencies:[Be,Qe],styles:[".tab[_ngcontent-%COMP%], .tab--selected[_ngcontent-%COMP%]{display:flex;flex-direction:row;opacity:.6;border-bottom:2px solid transparent;padding-right:2px}.tab--selected[_ngcontent-%COMP%]{opacity:.8;border-bottom-color:#000;border-bottom-left-radius:0;border-bottom-right-radius:0}.tab[_ngcontent-%COMP%]:not(:hover)   .close-button[_ngcontent-%COMP%]{visibility:hidden}mat-icon[_ngcontent-%COMP%]{color:#00000080}.close-button[_ngcontent-%COMP%]{border-radius:4px;transform:scale(.85)}.close-button[_ngcontent-%COMP%]:hover{color:#000;background-color:#0000004d}.close-button[_ngcontent-%COMP%]:active{color:#000}.circle[_ngcontent-%COMP%]{transform:scale(.5)}.add[_ngcontent-%COMP%]{transform:scale(.85)}"],changeDetection:0})}return i})(),Hn=(()=>{class i{onChange;onSelectionChange;tabs=[];selectedTab=null;change=new Ce([]);selectionChange=new Ce(null);modified=new b;isModifiedFn;constructor(){this.onChange=this.change.asObservable(),this.onSelectionChange=this.selectionChange.asObservable(),this.modified.pipe(bt(500)).subscribe(()=>{let e=this.isModifiedFn;e&&(this.tabs.forEach(t=>{t.modificationState===ne.Unknown&&(t.modificationState=e(t)?ne.Modified:ne.Unmodified)}),this.change.next(this.tabs.slice()))})}ngOnDestroy(){this.change.complete(),this.selectionChange.complete(),this.modified.complete()}setIsModifiedFn(e){this.isModifiedFn=e}hasModifiedTab(){return this.tabs.some(e=>e.modificationState!==ne.Unmodified)}selectTab(e){this.selectedTab=e,this.selectionChange.next(this.selectedTab)}getTabs(){return this.tabs}getSelectedTab(){return this.selectedTab}getFileNames(){return this.tabs.map(e=>e.filename)}getTabByFilename(e){return this.tabs.find(t=>t.filename==e)}openNewTab(e,t=[]){let n=e.filename.toLowerCase(),a=new Set(this.tabs.map(r=>r.filename.toLowerCase()).concat(t.map(r=>r.toLowerCase())));if(a.has(n)){let r=1;for(;a.has(`${n}-${++r}`););e=gt(L({},e),{filename:`${e.filename}-${r}`})}this.tabs.push(e),this.selectedTab=e,this.triggerEvents()}openTab(e){let t=e.filename.toLowerCase(),n=this.tabs.find(a=>t===a.filename.toLowerCase());n?this.selectedTab=n:(this.tabs.push(e),this.selectedTab=e),this.triggerEvents()}importTabs(e){if(!e.length)return;let t=new Map(this.tabs.map((n,a)=>[n.filename.toLowerCase(),a]));e.forEach(n=>{let a=t.get(n.filename.toLowerCase());a!==void 0?this.tabs[a]=n:this.tabs.push(n)}),this.selectedTab=e[0],this.triggerEvents()}updateModified(e,t){e.length&&(e.forEach(n=>n.modificationState=t),this.triggerEvents())}update(e,t){if(t.filename){let n=t.filename.toLowerCase();if(n!==e.filename.toLowerCase()&&this.tabs.some(a=>a.filename.toLowerCase()===n))throw"tabs-manager: filename already exist"}Object.assign(e,t),this.triggerEvents()}closeTab(e){let t=e===this.selectedTab,n=this.tabs.indexOf(e);this.tabs.splice(n,1),this.tabs.length===0?this.selectedTab=null:t&&(this.selectedTab=this.tabs[Math.min(n,this.tabs.length-1)]),this.triggerEvents()}closeAllTabs(){this.selectedTab=null,this.tabs.splice(0),this.triggerEvents()}triggerEvents(){this.selectionChange.next(this.selectedTab),this.change.next(this.tabs.slice()),this.isModifiedFn&&this.modified.next()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),qr=(()=>{class i{tabSelect=Y();tabClose=Y();tabs;selectedTab;constructor(){let e=s(Hn);this.tabs=Dt(e.onChange,{initialValue:[]}),this.selectedTab=Dt(e.onSelectionChange,{initialValue:null})}dropTab(e){Fi(this.tabs(),e.previousIndex,e.currentIndex)}selectTab(e){this.tabSelect.emit(e)}closeTab(e){this.tabClose.emit(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-file-tab-bar"]],outputs:{tabSelect:"tabSelect",tabClose:"tabClose"},decls:3,vars:0,consts:[["cdkDropList","","cdkDropListOrientation","horizontal",3,"cdkDropListDropped"],["cdkDrag","",3,"text","selected","modificationState"],["cdkDrag","",3,"tabSelect","tabClose","text","selected","modificationState"]],template:function(t,n){t&1&&(m(0,"matx-file-tab-container",0),h("cdkDropListDropped",function(r){return n.dropTab(r)}),He(1,ql,1,3,"matx-file-tab",1,Ul),c()),t&2&&(p(),Ge(n.tabs()))},dependencies:[Kl,$l,zn,Ri,_n],styles:[".cdk-drag-preview[_ngcontent-%COMP%]{background-color:#fff;overflow:hidden}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}return i})();function Wl(i,o){}var Rt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var $o=(()=>{class i extends fi{_elementRef=s(k);_focusTrapFactory=s(Qa);_config;_interactivityChecker=s(Wa);_ngZone=s(U);_focusMonitor=s(zt);_renderer=s(ye);_changeDetectorRef=s($);_injector=s(G);_platform=s(we);_document=s(Ve);_portalOutlet;_focusTrapped=new b;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(Rt,{optional:!0})||new Rt,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),r(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",n),r=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||qe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=tn(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=tn();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=tn()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&Me(wt,7),t&2){let a;O(a=N())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&H("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[ae],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&Fe(0,Wl,0,0,"ng-template",0)},dependencies:[wt],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),Gn=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new b;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!We(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},Ql=new D("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=s(G);return()=>hi(i)}}),Yl=new D("DialogData"),Xl=new D("DefaultDialogConfig");function Zl(i){let o=j(i),e=new q;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var Wo=(()=>{class i{_injector=s(G);_defaultOptions=s(Xl,{optional:!0});_parentDialog=s(i,{optional:!0,skipSelf:!0});_overlayContainer=s(Ua);_idGenerator=s(se);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;_ariaHiddenElements=new Map;_scrollStrategy=s(Ql);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Wt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(re(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new Rt;t=L(L({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),r=Et(this._injector,a),l=new Gn(r,t),d=this._attachContainer(r,l,t);if(l.containerInstance=d,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(ve(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(e,l,d,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Ko(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Ko(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Ko(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new kt({positionStrategy:e.positionStrategy||rn().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let a=n.injector||n.viewContainerRef?.injector,r=[{provide:Rt,useValue:n},{provide:Gn,useValue:t},{provide:qa,useValue:e}],l;n.container?typeof n.container=="function"?l=n.container:(l=n.container.type,r.push(...n.container.providers(n))):l=$o;let d=new on(l,n.viewContainerRef,G.create({parent:a||this._injector,providers:r}));return e.attach(d).instance}_attachDialogContent(e,t,n,a){if(e instanceof nt){let r=this._createInjector(a,t,n,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=L(L({},l),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),n.attachTemplatePortal(new Mt(e,null,l,r))}else{let r=this._createInjector(a,t,n,this._injector),l=n.attachComponentPortal(new on(e,a.viewContainerRef,r));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,n,a){let r=e.injector||e.viewContainerRef?.injector,l=[{provide:Yl,useValue:e.data},{provide:Gn,useValue:t}];return e.providers&&(typeof e.providers=="function"?l.push(...e.providers(t,e,n)):l.push(...e.providers)),e.direction&&(!r||!r.get(Oe,null,{optional:!0}))&&l.push({provide:Oe,useValue:Zl(e.direction)}),G.create({parent:r||a,providers:l})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,r)=>{a?r.setAttribute("aria-hidden",a):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let a=t[n];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ko(i,o){let e=i.length;for(;e--;)o(i[e])}var Kr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({providers:[Wo],imports:[St,an,Xa,an]})}return i})();function Jl(i,o){}var Oi=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Qo="mdc-dialog--open",$r="mdc-dialog--opening",Wr="mdc-dialog--closing",ed=150,td=75,nd=(()=>{class i extends $o{_animationStateChanged=new q;_animationsEnabled=!le();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Yr(this._config.enterAnimationDuration)??ed:0;_exitAnimationDuration=this._animationsEnabled?Yr(this._config.exitAnimationDuration)??td:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Qr,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add($r,Qo)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Qo),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Qo),this._animationsEnabled?(this._hostElement.style.setProperty(Qr,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Wr)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove($r,Wr)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275cmp=f({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(_e("id",n._config.id),H("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),T("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[ae],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(m(0,"div",0)(1,"div",1),Fe(2,Jl,0,0,"ng-template",2),c()())},dependencies:[wt],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),Qr="--mat-dialog-transition-duration";function Yr(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?pt(i.substring(0,i.length-2)):i.endsWith("s")?pt(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var Pi=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(Pi||{}),ft=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new _o(1);_beforeClosed=new _o(1);_result;_closeFallbackTimeout;_state=Pi.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(ue(n=>n.state==="opened"),ve(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(ue(n=>n.state==="closed"),ve(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Te(this.backdropClick(),this.keydownEvents().pipe(ue(n=>n.keyCode===27&&!this.disableClose&&!We(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Xr(this,n.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(ue(t=>t.state==="closing"),ve(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Pi.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=Pi.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Xr(i,o,e){return i._closeInteractionType=o,i.close(e)}var Un=new D("MatMdcDialogData"),id=new D("mat-mdc-dialog-default-options"),od=new D("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(G);return()=>hi(i)}}),Vt=(()=>{class i{_defaultOptions=s(id,{optional:!0});_scrollStrategy=s(od);_parentDialog=s(i,{optional:!0,skipSelf:!0});_idGenerator=s(se);_injector=s(G);_dialog=s(Wo);_animationsDisabled=le();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new b;_afterOpenedAtThisLevel=new b;dialogConfigClass=Oi;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Wt(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(re(void 0)));constructor(){this._dialogRefConstructor=ft,this._dialogContainerType=nd,this._dialogDataToken=Un}open(e,t){let n;t=L(L({},this._defaultOptions||new Oi),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,gt(L({},t),{positionStrategy:rn(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Rt,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(r,l,d)=>(n=new this._dialogRefConstructor(r,t,d),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(n);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Zr=(()=>{class i{dialogRef=s(ft,{optional:!0});_elementRef=s(k);_dialog=s(Vt);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=es(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Xr(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,n){t&1&&h("click",function(r){return n._onButtonClick(r)}),t&2&&H("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[$e]})}return i})(),Jr=(()=>{class i{_dialogRef=s(ft,{optional:!0});_elementRef=s(k);_dialog=s(Vt);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=es(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i})}return i})(),Ni=(()=>{class i extends Jr{id=s(se).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275dir=M({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&_e("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[ae]})}return i})(),Li=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Na([Ga])]})}return i})(),Bi=(()=>{class i extends Jr{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275dir=M({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&T("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[ae]})}return i})();function es(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var zi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({providers:[Vt],imports:[Kr,St,an,Ne]})}return i})();function ad(i,o){if(i&1){let e=K();m(0,"div",1)(1,"button",2),h("click",function(){A(e);let n=_();return P(n.action())}),C(2),c()()}if(i&2){let e=_();p(2),ee(" ",e.data.action," ")}}var rd=["label"];function sd(i,o){}var ld=Math.pow(2,31)-1,qn=class{_overlayRef;instance;containerInstance;_afterDismissed=new b;_afterOpened=new b;_onAction=new b;_durationTimeoutId;_dismissedByAction=!1;constructor(o,e){this._overlayRef=e,this.containerInstance=o,o._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(o){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(o,ld))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},ns=new D("MatSnackBarData"),vn=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},dd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),cd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),md=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),pd=(()=>{class i{snackBarRef=s(qn);data=s(ns);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(t,n){t&1&&(m(0,"div",0),C(1),c(),E(2,ad,3,1,"div",1)),t&2&&(p(),ee(" ",n.data.message,`
`),p(),S(n.hasAction?2:-1))},dependencies:[Be,dd,cd,md],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Yo="_mat-snack-bar-enter",Xo="_mat-snack-bar-exit",ud=(()=>{class i extends fi{_ngZone=s(U);_elementRef=s(k);_changeDetectorRef=s($);_platform=s(we);_animationsDisabled=le();snackBarConfig=s(vn);_document=s(Ve);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=s(G);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new b;_onExit=new b;_onEnter=new b;_animationState="void";_live;_label;_role;_liveElementId=s(se).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===Xo?this._completeExit():e===Yo&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?qe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Yo)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(Yo)},200)))}exit(){return this._destroyed?z(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?qe(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Xo)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Xo),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let n=this._label.nativeElement,a="mdc-snackbar__label";n.classList.toggle(a,!n.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let a=t[n],r=a.getAttribute("aria-owns");this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute("aria-owns",r+" "+e):a.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let n=t.replace(this._liveElementId,"").trim();n.length>0?e.setAttribute("aria-owns",n):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector("[aria-hidden]"),n=e.querySelector("[aria-live]");if(t&&n){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,n){if(t&1&&Me(wt,7)(rd,7),t&2){let a;O(a=N())&&(n._portalOutlet=a.first),O(a=N())&&(n._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(t,n){t&1&&h("animationend",function(r){return n.onAnimationEnd(r.animationName)})("animationcancel",function(r){return n.onAnimationEnd(r.animationName)}),t&2&&T("mat-snack-bar-container-enter",n._animationState==="visible")("mat-snack-bar-container-exit",n._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!n._animationsDisabled)},features:[ae],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(m(0,"div",1)(1,"div",2,0)(3,"div",3),Fe(4,sd,0,0,"ng-template",4),c(),F(5,"div"),c()()),t&2&&(p(5),H("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[wt],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),fd=new D("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new vn}),at=(()=>{class i{_live=s(Ya);_injector=s(G);_breakpointObserver=s(bi);_parentSnackBar=s(i,{optional:!0,skipSelf:!0});_defaultConfig=s(fd);_animationsDisabled=le();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=pd;snackBarContainerComponent=ud;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",n){let a=L(L({},this._defaultConfig),n);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=G.create({parent:n||this._injector,providers:[{provide:vn,useValue:t}]}),r=new on(this.snackBarContainerComponent,t.viewContainerRef,a),l=e.attach(r);return l.instance.snackBarConfig=t,l.instance}_attach(e,t){let n=L(L(L({},new vn),this._defaultConfig),t),a=this._createOverlay(n),r=this._attachSnackBarContainer(a,n),l=new qn(r,a);if(e instanceof nt){let d=new Mt(e,null,{$implicit:n.data,snackBarRef:l});l.instance=r.attachTemplatePortal(d)}else{let d=this._createInjector(n,l),u=new on(e,void 0,d),v=r.attachComponentPortal(u);l.instance=v.instance}return this._breakpointObserver.observe(vi.HandsetPortrait).pipe(ce(a.detachments())).subscribe(d=>{a.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(l,n),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new kt;t.direction=e.direction;let n=rn(this._injector),a=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!a||e.horizontalPosition==="end"&&a,l=!r&&e.horizontalPosition!=="center";return r?n.left("0"):l?n.right("0"):n.centerHorizontally(),e.verticalPosition==="top"?n.top("0"):n.bottom("0"),t.positionStrategy=n,t.disableAnimations=this._animationsDisabled,Et(this._injector,t)}_createInjector(e,t){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector;return G.create({parent:n||this._injector,providers:[{provide:qn,useValue:t},{provide:ns,useValue:e.data}]})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var dt=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0;function hd(i,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(i.type)?new Blob(["\uFEFF",i],{type:i.type}):i}function Zo(i,o,e){var t=new XMLHttpRequest;t.open("GET",i),t.responseType="blob",t.onload=function(){Kn(t.response,o,e)},t.onerror=function(){console.error("could not download file")},t.send()}function is(i){var o=new XMLHttpRequest;o.open("HEAD",i,!1);try{o.send()}catch{}return o.status>=200&&o.status<=299}function ji(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(o)}}var os=dt.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),Kn=dt.saveAs||(typeof window!="object"||window!==dt?function(){}:"download"in HTMLAnchorElement.prototype&&!os?function(o,e,t){var n=dt.URL||dt.webkitURL,a=document.createElement("a");e=e||o.name||"download",a.download=e,a.rel="noopener",typeof o=="string"?(a.href=o,a.origin!==location.origin?is(a.href)?Zo(o,e,t):ji(a,a.target="_blank"):ji(a)):(a.href=n.createObjectURL(o),setTimeout(function(){n.revokeObjectURL(a.href)},4e4),setTimeout(function(){ji(a)},0))}:"msSaveOrOpenBlob"in navigator?function(o,e,t){if(e=e||o.name||"download",typeof o=="string")if(is(o))Zo(o,e,t);else{var n=document.createElement("a");n.href=o,n.target="_blank",setTimeout(function(){ji(n)})}else navigator.msSaveOrOpenBlob(hd(o,t),e)}:function(o,e,t,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof o=="string")return Zo(o,e,t);var a=o.type==="application/octet-stream",r=/constructor/i.test(dt.HTMLElement)||dt.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&r||os)&&typeof FileReader<"u"){var d=new FileReader;d.onloadend=function(){var B=d.result;B=l?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=B:location=B,n=null},d.readAsDataURL(o)}else{var u=dt.URL||dt.webkitURL,v=u.createObjectURL(o);n?n.location=v:location.href=v,n=null,setTimeout(function(){u.revokeObjectURL(v)},4e4)}});dt.saveAs=Kn.saveAs=Kn;var Vi=(()=>{class i{dialogRef=s(ft);data=s(Un);cancel(){this.dialogRef.close()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-confirmation-dialog"]],decls:9,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-stroked-button","","color","primary",3,"mat-dialog-close"],["mat-stroked-button","",3,"click"]],template:function(t,n){t&1&&(m(0,"h1",0),C(1),c(),m(2,"div",1),C(3),c(),m(4,"div",2)(5,"button",3),C(6," Continue "),c(),m(7,"button",4),h("click",function(){return n.cancel()}),C(8,"Cancel"),c()()),t&2&&(p(),pe(n.data.title),p(2),ee(" ",n.data.message,`
`),p(2),g("mat-dialog-close",!0))},dependencies:[zi,Zr,Ni,Bi,Li,Be],styles:["[mat-dialog-actions][_ngcontent-%COMP%]{float:right}"],changeDetection:0})}return i})();var $n=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new b;constructor(o=!1,e,t=!0,n){this._multiple=o,this._emitChanges=t,this.compareWith=n,e&&e.length&&(o?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...o){this._verifyValueAssignment(o),o.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...o){this._verifyValueAssignment(o);let e=this.selected,t=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let e=this._hasQueuedChanges();return o&&this._emitChangeEvent(),e}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(o,t))return t;return o}else return o}};var ea=new D("CDK_TREE_NODE_OUTLET_NODE"),Hi=(()=>{class i{viewContainer=s(rt);_node=s(ea,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkTreeNodeOutlet",""]]})}return i})(),Jo=class{$implicit;level;index;count;constructor(o){this.$implicit=o}},Gi=(()=>{class i{template=s(nt);when;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[0,"cdkTreeNodeDefWhen","when"]}})}return i})();function as(){return Error("Could not find a tree control, levelAccessor, or childrenAccessor for the tree.")}var yn=(()=>{class i{_differs=s(Ba);_changeDetectorRef=s($);_elementRef=s(k);_dir=s(Oe);_onDestroy=new b;_dataDiffer;_defaultNodeDef=null;_dataSubscription;_levels=new Map;_parents=new Map;_ariaSets=new Map;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;treeControl;levelAccessor;childrenAccessor;trackBy;expansionKey;_nodeOutlet;_nodeDefs;viewChange=new Ce({start:0,end:Number.MAX_VALUE});_expansionModel;_flattenedNodes=new Ce([]);_nodeType=new Ce(null);_nodes=new Ce(new Map);_keyManagerNodes=new Ce([]);_keyManagerFactory=s(er);_keyManager;_viewInit=!1;constructor(){}ngAfterContentInit(){this._initializeKeyManager()}ngAfterContentChecked(){this._updateDefaultNodeDefinition(),this._subscribeToDataChanges()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this._nodes.complete(),this._keyManagerNodes.complete(),this._nodeType.complete(),this._flattenedNodes.complete(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,this._keyManager?.destroy()}ngOnInit(){this._checkTreeControlUsage(),this._initializeDataDiffer()}ngAfterViewInit(){this._viewInit=!0}_updateDefaultNodeDefinition(){let e=this._nodeDefs.filter(t=>!t.when);e.length>1,this._defaultNodeDef=e[0]}_setNodeTypeIfUnset(e){this._nodeType.value===null&&this._nodeType.next(e)}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription?.unsubscribe(),this._dataSubscription=void 0,e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._subscribeToDataChanges()}_getExpansionModel(){return this.treeControl?this.treeControl.expansionModel:(this._expansionModel??=new $n(!0),this._expansionModel)}_subscribeToDataChanges(){if(this._dataSubscription)return;let e;Ha(this._dataSource)?e=this._dataSource.connect(this):xa(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=z(this._dataSource)),e&&(this._dataSubscription=this._getRenderData(e).pipe(ce(this._onDestroy)).subscribe(t=>{this._renderDataChanges(t)}))}_getRenderData(e){let t=this._getExpansionModel();return Rn([e,this._nodeType,t.changed.pipe(re(null),Ie(n=>{this._emitExpansionChanges(n)}))]).pipe(je(([n,a])=>a===null?z({renderNodes:n,flattenedNodes:null,nodeType:a}):this._computeRenderingData(n,a).pipe(V(r=>gt(L({},r),{nodeType:a})))))}_renderDataChanges(e){if(e.nodeType===null){this.renderNodeChanges(e.renderNodes);return}this._updateCachedData(e.flattenedNodes),this.renderNodeChanges(e.renderNodes),this._updateKeyManagerItems(e.flattenedNodes)}_emitExpansionChanges(e){if(!e)return;let t=this._nodes.value;for(let n of e.added)t.get(n)?._emitExpansionState(!0);for(let n of e.removed)t.get(n)?._emitExpansionState(!1)}_initializeKeyManager(){let e=Rn([this._keyManagerNodes,this._nodes]).pipe(V(([n,a])=>n.reduce((r,l)=>{let d=a.get(this._getExpansionKey(l));return d&&r.push(d),r},[]))),t={trackBy:n=>this._getExpansionKey(n.data),skipPredicate:n=>!!n.isDisabled,typeAheadDebounceInterval:!0,horizontalOrientation:this._dir.value};this._keyManager=this._keyManagerFactory(e,t)}_initializeDataDiffer(){let e=this.trackBy??((t,n)=>this._getExpansionKey(n));this._dataDiffer=this._differs.find([]).create(e)}_checkTreeControlUsage(){}renderNodeChanges(e,t=this._dataDiffer,n=this._nodeOutlet.viewContainer,a){let r=t.diff(e);!r&&!this._viewInit||(r?.forEachOperation((l,d,u)=>{if(l.previousIndex==null)this.insertNode(e[u],u,n,a);else if(u==null)n.remove(d);else{let v=n.get(d);n.move(v,u)}}),r?.forEachIdentityChange(l=>{let d=l.item;if(l.currentIndex!=null){let u=n.get(l.currentIndex);u.context.$implicit=d}}),a?this._changeDetectorRef.markForCheck():this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){if(this._nodeDefs.length===1)return this._nodeDefs.first;let n=this._nodeDefs.find(a=>a.when&&a.when(t,e))||this._defaultNodeDef;return n}insertNode(e,t,n,a){let r=this._getLevelAccessor(),l=this._getNodeDef(e,t),d=this._getExpansionKey(e),u=new Jo(e);u.index=t,a??=this._parents.get(d)??void 0,r?u.level=r(e):a!==void 0&&this._levels.has(this._getExpansionKey(a))?u.level=this._levels.get(this._getExpansionKey(a))+1:u.level=0,this._levels.set(d,u.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(l.template,u,t),Ht.mostRecentTreeNode&&(Ht.mostRecentTreeNode.data=e)}isExpanded(e){return!!(this.treeControl?.isExpanded(e)||this._expansionModel?.isSelected(this._getExpansionKey(e)))}toggle(e){this.treeControl?this.treeControl.toggle(e):this._expansionModel&&this._expansionModel.toggle(this._getExpansionKey(e))}expand(e){this.treeControl?this.treeControl.expand(e):this._expansionModel&&this._expansionModel.select(this._getExpansionKey(e))}collapse(e){this.treeControl?this.treeControl.collapse(e):this._expansionModel&&this._expansionModel.deselect(this._getExpansionKey(e))}toggleDescendants(e){this.treeControl?this.treeControl.toggleDescendants(e):this._expansionModel&&(this.isExpanded(e)?this.collapseDescendants(e):this.expandDescendants(e))}expandDescendants(e){if(this.treeControl)this.treeControl.expandDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.select(this._getExpansionKey(e)),this._getDescendants(e).pipe(ve(1),ce(this._onDestroy)).subscribe(n=>{t.select(...n.map(a=>this._getExpansionKey(a)))})}}collapseDescendants(e){if(this.treeControl)this.treeControl.collapseDescendants(e);else if(this._expansionModel){let t=this._expansionModel;t.deselect(this._getExpansionKey(e)),this._getDescendants(e).pipe(ve(1),ce(this._onDestroy)).subscribe(n=>{t.deselect(...n.map(a=>this._getExpansionKey(a)))})}}expandAll(){this.treeControl?this.treeControl.expandAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.select(...e))}collapseAll(){this.treeControl?this.treeControl.collapseAll():this._expansionModel&&this._forEachExpansionKey(e=>this._expansionModel?.deselect(...e))}_getLevelAccessor(){return this.treeControl?.getLevel?.bind(this.treeControl)??this.levelAccessor}_getChildrenAccessor(){return this.treeControl?.getChildren?.bind(this.treeControl)??this.childrenAccessor}_getDirectChildren(e){let t=this._getLevelAccessor(),n=this._expansionModel??this.treeControl?.expansionModel;if(!n)return z([]);let a=this._getExpansionKey(e),r=n.changed.pipe(je(d=>d.added.includes(a)?z(!0):d.removed.includes(a)?z(!1):ct),re(this.isExpanded(e)));if(t)return Rn([r,this._flattenedNodes]).pipe(V(([d,u])=>d?this._findChildrenByLevel(t,u,e,1):[]));let l=this._getChildrenAccessor();if(l)return yi(l(e)??[]);throw as()}_findChildrenByLevel(e,t,n,a){let r=this._getExpansionKey(n),l=t.findIndex(B=>this._getExpansionKey(B)===r),d=e(n),u=d+a,v=[];for(let B=l+1;B<t.length;B++){let de=e(t[B]);if(de<=d)break;de<=u&&v.push(t[B])}return v}_registerNode(e){this._nodes.value.set(this._getExpansionKey(e.data),e),this._nodes.next(this._nodes.value)}_unregisterNode(e){this._nodes.value.delete(this._getExpansionKey(e.data)),this._nodes.next(this._nodes.value)}_getLevel(e){return this._levels.get(this._getExpansionKey(e))}_getSetSize(e){return this._getAriaSet(e).length}_getPositionInSet(e){let t=this._getAriaSet(e),n=this._getExpansionKey(e);return t.findIndex(a=>this._getExpansionKey(a)===n)+1}_getNodeParent(e){let t=this._parents.get(this._getExpansionKey(e.data));return t&&this._nodes.value.get(this._getExpansionKey(t))}_getNodeChildren(e){return this._getDirectChildren(e.data).pipe(V(t=>t.reduce((n,a)=>{let r=this._nodes.value.get(this._getExpansionKey(a));return r&&n.push(r),n},[])))}_sendKeydownToKeyManager(e){if(e.target===this._elementRef.nativeElement)this._keyManager.onKeydown(e);else{let t=this._nodes.getValue();for(let[,n]of t)if(e.target===n._elementRef.nativeElement){this._keyManager.onKeydown(e);break}}}_getDescendants(e){if(this.treeControl)return z(this.treeControl.getDescendants(e));if(this.levelAccessor){let t=this._findChildrenByLevel(this.levelAccessor,this._flattenedNodes.value,e,1/0);return z(t)}if(this.childrenAccessor)return this._getAllChildrenRecursively(e).pipe(vo((t,n)=>(t.push(...n),t),[]));throw as()}_getAllChildrenRecursively(e){return this.childrenAccessor?yi(this.childrenAccessor(e)).pipe(ve(1),je(t=>{for(let n of t)this._parents.set(this._getExpansionKey(n),e);return z(...t).pipe(yo(n=>bo(z([n]),this._getAllChildrenRecursively(n))))})):z([])}_getExpansionKey(e){return this.expansionKey?.(e)??e}_getAriaSet(e){let t=this._getExpansionKey(e),n=this._parents.get(t),a=n?this._getExpansionKey(n):null;return this._ariaSets.get(a)??[e]}_findParentForNode(e,t,n){if(!n.length)return null;let a=this._levels.get(this._getExpansionKey(e))??0;for(let r=t-1;r>=0;r--){let l=n[r];if((this._levels.get(this._getExpansionKey(l))??0)<a)return l}return null}_flattenNestedNodesWithExpansion(e,t=0){let n=this._getChildrenAccessor();return n?z(...e).pipe(yo(a=>{let r=this._getExpansionKey(a);this._parents.has(r)||this._parents.set(r,null),this._levels.set(r,t);let l=yi(n(a));return bo(z([a]),l.pipe(ve(1),Ie(d=>{this._ariaSets.set(r,[...d??[]]);for(let u of d??[]){let v=this._getExpansionKey(u);this._parents.set(v,a),this._levels.set(v,t+1)}}),je(d=>d?this._flattenNestedNodesWithExpansion(d,t+1).pipe(V(u=>this.isExpanded(a)?u:[])):z([]))))}),vo((a,r)=>(a.push(...r),a),[])):z([...e])}_computeRenderingData(e,t){if(this.childrenAccessor&&t==="flat")return this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(V(n=>({renderNodes:n,flattenedNodes:n})));if(this.levelAccessor&&t==="nested"){let n=this.levelAccessor;return z(e.filter(a=>n(a)===0)).pipe(V(a=>({renderNodes:a,flattenedNodes:e})),Ie(({flattenedNodes:a})=>{this._calculateParents(a)}))}else return t==="flat"?z({renderNodes:e,flattenedNodes:e}).pipe(Ie(({flattenedNodes:n})=>{this._calculateParents(n)})):(this._clearPreviousCache(),this._ariaSets.set(null,[...e]),this._flattenNestedNodesWithExpansion(e).pipe(V(n=>({renderNodes:e,flattenedNodes:n}))))}_updateCachedData(e){this._flattenedNodes.next(e)}_updateKeyManagerItems(e){this._keyManagerNodes.next(e)}_calculateParents(e){let t=this._getLevelAccessor();if(t){this._clearPreviousCache();for(let n=0;n<e.length;n++){let a=e[n],r=this._getExpansionKey(a);this._levels.set(r,t(a));let l=this._findParentForNode(a,n,e);this._parents.set(r,l);let d=l?this._getExpansionKey(l):null,u=this._ariaSets.get(d)??[];u.splice(n,0,a),this._ariaSets.set(d,u)}}}_forEachExpansionKey(e){let t=[],n=[];this._nodes.value.forEach(a=>{t.push(this._getExpansionKey(a.data)),n.push(this._getDescendants(a.data))}),n.length>0?Rn(n).pipe(ve(1),ce(this._onDestroy)).subscribe(a=>{a.forEach(r=>r.forEach(l=>t.push(this._getExpansionKey(l)))),e(t)}):e(t)}_clearPreviousCache(){this._parents.clear(),this._levels.clear(),this._ariaSets.clear()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["cdk-tree"]],contentQueries:function(t,n,a){if(t&1&&vt(a,Gi,5),t&2){let r;O(r=N())&&(n._nodeDefs=r)}},viewQuery:function(t,n){if(t&1&&Me(Hi,7),t&2){let a;O(a=N())&&(n._nodeOutlet=a.first)}},hostAttrs:["role","tree",1,"cdk-tree"],hostBindings:function(t,n){t&1&&h("keydown",function(r){return n._sendKeydownToKeyManager(r)})},inputs:{dataSource:"dataSource",treeControl:"treeControl",levelAccessor:"levelAccessor",childrenAccessor:"childrenAccessor",trackBy:"trackBy",expansionKey:"expansionKey"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,n){t&1&&Qt(0,0)},dependencies:[Hi],encapsulation:2})}return i})(),Ht=(()=>{class i{_elementRef=s(k);_tree=s(yn);_tabindex=-1;_type="flat";get role(){return"treeitem"}set role(e){}get isExpandable(){return this._isExpandable()}set isExpandable(e){this._inputIsExpandable=e,!(this.data&&!this._isExpandable||!this._inputIsExpandable)&&(this._inputIsExpanded?this.expand():this._inputIsExpanded===!1&&this.collapse())}get isExpanded(){return this._tree.isExpanded(this._data)}set isExpanded(e){this._inputIsExpanded=e,e?this.expand():this.collapse()}isDisabled=!1;typeaheadLabel=null;getLabel(){return this.typeaheadLabel||this._elementRef.nativeElement.textContent?.trim()||""}activation=new q;expandedChange=new q;static mostRecentTreeNode=null;_destroyed=new b;_dataChanges=new b;_inputIsExpandable=!1;_inputIsExpanded=void 0;_shouldFocus=!0;_parentNodeAriaLevel;get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._dataChanges.next())}_data;get isLeafNode(){return this._tree.treeControl?.isExpandable!==void 0&&!this._tree.treeControl.isExpandable(this._data)?!0:this._tree.treeControl?.isExpandable===void 0&&this._tree.treeControl?.getDescendants(this._data).length===0}get level(){return this._tree._getLevel(this._data)??this._parentNodeAriaLevel}_isExpandable(){return this._tree.treeControl?!this.isLeafNode:this._inputIsExpandable}_getAriaExpanded(){return this._isExpandable()?String(this.isExpanded):null}_getSetSize(){return this._tree._getSetSize(this._data)}_getPositionInSet(){return this._tree._getPositionInSet(this._data)}_changeDetectorRef=s($);constructor(){i.mostRecentTreeNode=this}ngOnInit(){this._parentNodeAriaLevel=gd(this._elementRef.nativeElement),this._tree._getExpansionModel().changed.pipe(V(()=>this.isExpanded),ka(),ce(this._destroyed)).pipe(ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()),this._tree._setNodeTypeIfUnset(this._type),this._tree._registerNode(this)}ngOnDestroy(){i.mostRecentTreeNode===this&&(i.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}getParent(){return this._tree._getNodeParent(this)??null}getChildren(){return this._tree._getNodeChildren(this)}focus(){this._tabindex=0,this._shouldFocus&&this._elementRef.nativeElement.focus(),this._changeDetectorRef.markForCheck()}unfocus(){this._tabindex=-1,this._changeDetectorRef.markForCheck()}activate(){this.isDisabled||this.activation.next(this._data)}collapse(){this.isExpandable&&this._tree.collapse(this._data)}expand(){this.isExpandable&&this._tree.expand(this._data)}makeFocusable(){this._tabindex=0,this._changeDetectorRef.markForCheck()}_focusItem(){this.isDisabled||this._tree._keyManager.focusItem(this)}_setActiveItem(){this.isDisabled||(this._shouldFocus=!1,this._tree._keyManager.focusItem(this),this._shouldFocus=!0)}_emitExpansionState(e){this.expandedChange.emit(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["cdk-tree-node"]],hostAttrs:["role","treeitem",1,"cdk-tree-node"],hostVars:5,hostBindings:function(t,n){t&1&&h("click",function(){return n._setActiveItem()})("focus",function(){return n._focusItem()}),t&2&&(_e("tabIndex",n._tabindex),H("aria-expanded",n._getAriaExpanded())("aria-level",n.level+1)("aria-posinset",n._getPositionInSet())("aria-setsize",n._getSetSize()))},inputs:{role:"role",isExpandable:[2,"isExpandable","isExpandable",I],isExpanded:"isExpanded",isDisabled:[2,"isDisabled","isDisabled",I],typeaheadLabel:[0,"cdkTreeNodeTypeaheadLabel","typeaheadLabel"]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["cdkTreeNode"]})}return i})();function gd(i){let o=i.parentElement;for(;o&&!_d(o);)o=o.parentElement;return o?o.classList.contains("cdk-nested-tree-node")?it(o.getAttribute("aria-level")):0:-1}function _d(i){let o=i.classList;return!!(o?.contains("cdk-nested-tree-node")||o?.contains("cdk-tree"))}var bd=/([A-Za-z%]+)$/,ta=(()=>{class i{_treeNode=s(Ht);_tree=s(yn);_element=s(k);_dir=s(Oe,{optional:!0});_currentPadding=null;_destroyed=new b;indentUnits="px";get level(){return this._level}set level(e){this._setLevelInput(e)}_level;get indent(){return this._indent}set indent(e){this._setIndentInput(e)}_indent=40;constructor(){this._setPadding(),this._dir?.change.pipe(ce(this._destroyed)).subscribe(()=>this._setPadding(!0)),this._treeNode._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){let e=(this._treeNode.data&&this._tree._getLevel(this._treeNode.data))??null,t=this._level==null?e:this._level;return typeof t=="number"?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){let t=this._paddingIndent();if(t!==this._currentPadding||e){let n=this._element.nativeElement,a=this._dir&&this._dir.value==="rtl"?"paddingRight":"paddingLeft",r=a==="paddingLeft"?"paddingRight":"paddingLeft";n.style[a]=t||"",n.style[r]="",this._currentPadding=t}}_setLevelInput(e){this._level=isNaN(e)?null:e,this._setPadding()}_setIndentInput(e){let t=e,n="px";if(typeof e=="string"){let a=e.split(bd);t=a[0],n=a[1]||n}this.indentUnits=n,this._indent=it(t),this._setPadding()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[2,"cdkTreeNodePadding","level",it],indent:[0,"cdkTreeNodePaddingIndent","indent"]}})}return i})(),na=(()=>{class i{_tree=s(yn);_treeNode=s(Ht);recursive=!1;constructor(){}_toggle(e){e.stopPropagation(),this.recursive?this._tree.toggleDescendants(this._treeNode.data):this._tree.toggle(this._treeNode.data),this._tree._keyManager.focusItem(this._treeNode)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","cdkTreeNodeToggle",""]],hostAttrs:["tabindex","-1"],hostBindings:function(t,n){t&1&&h("click",function(r){return n._toggle(r)})("keydown.Enter",function(r){return n._toggle(r),r.preventDefault()})("keydown.Space",function(r){return n._toggle(r),r.preventDefault()})},inputs:{recursive:[2,"cdkTreeNodeToggleRecursive","recursive",I]}})}return i})();var rs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({})}return i})();var vd=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function yd(i){return!!i._isNoopTreeKeyManager}var ls=(()=>{class i extends Ht{get tabIndexInputBinding(){return this._tabIndexInputBinding}set tabIndexInputBinding(e){this._tabIndexInputBinding=e}_tabIndexInputBinding;defaultTabIndex=0;_getTabindexAttribute(){return yd(this._tree._keyManager)?this.tabIndexInputBinding:this._tabindex}get disabled(){return this.isDisabled}set disabled(e){this.isDisabled=e}constructor(){super();let e=s(new La("tabindex"),{optional:!0});this.tabIndexInputBinding=Number(e)||this.defaultTabIndex}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],hostVars:5,hostBindings:function(t,n){t&1&&h("click",function(){return n._focusItem()}),t&2&&(_e("tabIndex",n._getTabindexAttribute()),H("aria-expanded",n._getAriaExpanded())("aria-level",n.level+1)("aria-posinset",n._getPositionInSet())("aria-setsize",n._getSetSize()))},inputs:{tabIndexInputBinding:[2,"tabIndex","tabIndexInputBinding",e=>e==null?0:it(e)],disabled:[2,"disabled","disabled",I]},outputs:{activation:"activation",expandedChange:"expandedChange"},exportAs:["matTreeNode"],features:[W([{provide:Ht,useExisting:i}]),ae]})}return i})(),ds=(()=>{class i extends Gi{data;static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275dir=M({type:i,selectors:[["","matTreeNodeDef",""]],inputs:{when:[0,"matTreeNodeDefWhen","when"],data:[0,"matTreeNode","data"]},features:[W([{provide:Gi,useExisting:i}]),ae]})}return i})();var cs=(()=>{class i extends ta{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275dir=M({type:i,selectors:[["","matTreeNodePadding",""]],inputs:{level:[2,"matTreeNodePadding","level",it],indent:[0,"matTreeNodePaddingIndent","indent"]},features:[W([{provide:ta,useExisting:i}]),ae]})}return i})(),ss=(()=>{class i{viewContainer=s(rt);_node=s(ea,{optional:!0});static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matTreeNodeOutlet",""]],features:[W([{provide:Hi,useExisting:i}])]})}return i})(),Wn=(()=>{class i extends yn{_nodeOutlet=void 0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275cmp=f({type:i,selectors:[["mat-tree"]],viewQuery:function(t,n){if(t&1&&Me(ss,7),t&2){let a;O(a=N())&&(n._nodeOutlet=a.first)}},hostAttrs:[1,"mat-tree"],exportAs:["matTree"],features:[W([{provide:yn,useExisting:i}]),ae],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(t,n){t&1&&Qt(0,0)},dependencies:[ss],styles:[`.mat-tree {
  display: block;
  background-color: var(--mat-tree-container-background-color, var(--mat-sys-surface));
}

.mat-tree-node,
.mat-nested-tree-node {
  color: var(--mat-tree-node-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight));
}

.mat-tree-node {
  display: flex;
  align-items: center;
  flex: 1;
  word-wrap: break-word;
  min-height: var(--mat-tree-node-min-height, 48px);
}

.mat-nested-tree-node {
  border-bottom-width: 0;
}
`],encapsulation:2})}return i})(),ms=(()=>{class i extends na{static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275dir=M({type:i,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:[0,"matTreeNodeToggleRecursive","recursive"]},features:[W([{provide:na,useExisting:i}]),ae]})}return i})();var ps=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({imports:[rs,Ne]})}return i})();var ia=class{_box;_destroyed=new b;_resizeSubject=new b;_resizeObserver;_elementObservables=new Map;constructor(o){this._box=o,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(o){return this._elementObservables.has(o)||this._elementObservables.set(o,new _t(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(o,{box:this._box}),()=>{this._resizeObserver?.unobserve(o),t.unsubscribe(),this._elementObservables.delete(o)}}).pipe(ue(e=>e.some(t=>t.target===o)),Sa({bufferSize:1,refCount:!0}),ce(this._destroyed))),this._elementObservables.get(o)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},us=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(U);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new ia(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Cd=["notch"],Dd=["matFormFieldNotchedOutline",""],Md=["*"],fs=["iconPrefixContainer"],hs=["textPrefixContainer"],gs=["iconSuffixContainer"],_s=["textSuffixContainer"],wd=["textField"],kd=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Ed=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Sd(i,o){i&1&&F(0,"span",21)}function Td(i,o){if(i&1&&(m(0,"label",20),R(1,1),E(2,Sd,1,0,"span",21),c()),i&2){let e=_(2);g("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),H("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),S(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Fd(i,o){if(i&1&&E(0,Td,3,5,"label",20),i&2){let e=_();S(e._hasFloatingLabel()?0:-1)}}function Rd(i,o){i&1&&F(0,"div",7)}function Id(i,o){}function Ad(i,o){if(i&1&&Fe(0,Id,0,0,"ng-template",13),i&2){_(2);let e=Ae(1);g("ngTemplateOutlet",e)}}function Pd(i,o){if(i&1&&(m(0,"div",9),E(1,Ad,1,1,null,13),c()),i&2){let e=_();g("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),S(e._forceDisplayInfixLabel()?-1:1)}}function Od(i,o){i&1&&(m(0,"div",10,2),R(2,2),c())}function Nd(i,o){i&1&&(m(0,"div",11,3),R(2,3),c())}function Ld(i,o){}function Bd(i,o){if(i&1&&Fe(0,Ld,0,0,"ng-template",13),i&2){_();let e=Ae(1);g("ngTemplateOutlet",e)}}function zd(i,o){i&1&&(m(0,"div",14,4),R(2,4),c())}function jd(i,o){i&1&&(m(0,"div",15,5),R(2,5),c())}function Vd(i,o){i&1&&F(0,"div",16)}function Hd(i,o){i&1&&(m(0,"div",18),R(1,6),c())}function Gd(i,o){if(i&1&&(m(0,"mat-hint",22),C(1),c()),i&2){let e=_(2);g("id",e._hintLabelId),p(),pe(e.hintLabel)}}function Ud(i,o){if(i&1&&(m(0,"div",19),E(1,Gd,2,2,"mat-hint",22),R(2,7),F(3,"div",23),R(4,8),c()),i&2){let e=_();p(),S(e.hintLabel?1:-1)}}var It=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["mat-label"]]})}return i})(),oa=new D("MatError"),Cn=(()=>{class i{id=s(se).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,n){t&2&&_e("id",n.id)},inputs:{id:"id"},features:[W([{provide:oa,useExisting:i}])]})}return i})(),xn=(()=>{class i{align="start";id=s(se).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(_e("id",n.id),H("align",null),T("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),aa=new D("MatPrefix"),Ms=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[W([{provide:aa,useExisting:i}])]})}return i})(),ra=new D("MatSuffix"),ws=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[W([{provide:ra,useExisting:i}])]})}return i})(),ks=new D("FloatingLabelParent"),bs=(()=>{class i{_elementRef=s(k);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(us);_ngZone=s(U);_parent=s(ks);_resizeSubscription=new Se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return qd(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function qd(i){let o=i;if(o.offsetParent!==null)return o.scrollWidth;let e=o.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var vs="mdc-line-ripple--active",Ui="mdc-line-ripple--deactivating",ys=(()=>{class i{_elementRef=s(k);_cleanupTransitionEnd;constructor(){let e=s(U),t=s(ye);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ui),e.add(vs)}deactivate(){this._elementRef.nativeElement.classList.add(Ui)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Ui);e.propertyName==="opacity"&&n&&t.remove(vs,Ui)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),xs=(()=>{class i{_elementRef=s(k);_ngZone=s(U);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&Me(Cd,5),t&2){let a;O(a=N())&&(n._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&T("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Dd,ngContentSelectors:Md,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(J(),mt(0,"div",1),De(1,"div",2,0),R(3),Re(),mt(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),qi=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i})}return i})();var Dn=new D("MatFormField"),Es=new D("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Cs="fill",Kd="auto",Ds="fixed",$d="translateY(-50%)",Gt=(()=>{class i{_elementRef=s(k);_changeDetectorRef=s($);_platform=s(we);_idGenerator=s(se);_ngZone=s(U);_defaults=s(Es,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=te("iconPrefixContainer");_textPrefixContainerSignal=te("textPrefixContainer");_iconSuffixContainerSignal=te("iconSuffixContainer");_textSuffixContainerSignal=te("textSuffixContainer");_prefixSuffixContainers=Jt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=di(It);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=dn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Kd}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Cs;this._appearanceSignal.set(t)}_appearanceSignal=j(Cs);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ds}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ds}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new b;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=le();constructor(){let e=this._defaults,t=s(Oe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ii(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Jt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(re([void 0,void 0]),V(()=>[t.errorState,t.userAriaDescribedBy]),Ea(),ue(([[a,r],[l,d]])=>a!==l||r!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Te(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){za({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Jt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,r=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,n;if(t){let a=this._describedByIds||e;n=e.concat(t.filter(r=>r&&!a.includes(r)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,d=n?.getBoundingClientRect().width??0,u=a?.getBoundingClientRect().width??0,v=this._currentDirection==="rtl"?"-1":"1",B=`${r+l}px`,Je=`calc(${v} * (${B} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Lt=`var(--mat-mdc-form-field-label-transform, ${$d} translateX(${Je}))`,et=r+l+d+u;return[Lt,et]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,a){if(t&1&&(Yt(a,n._labelChild,It,5),vt(a,qi,5)(a,aa,5)(a,ra,5)(a,oa,5)(a,xn,5)),t&2){ie();let r;O(r=N())&&(n._formFieldControl=r.first),O(r=N())&&(n._prefixChildren=r),O(r=N())&&(n._suffixChildren=r),O(r=N())&&(n._errorChildren=r),O(r=N())&&(n._hintChildren=r)}},viewQuery:function(t,n){if(t&1&&(he(n._iconPrefixContainerSignal,fs,5)(n._textPrefixContainerSignal,hs,5)(n._iconSuffixContainerSignal,gs,5)(n._textSuffixContainerSignal,_s,5),Me(wd,5)(fs,5)(hs,5)(gs,5)(_s,5)(bs,5)(xs,5)(ys,5)),t&2){ie(4);let a;O(a=N())&&(n._textField=a.first),O(a=N())&&(n._iconPrefixContainer=a.first),O(a=N())&&(n._textPrefixContainer=a.first),O(a=N())&&(n._iconSuffixContainer=a.first),O(a=N())&&(n._textSuffixContainer=a.first),O(a=N())&&(n._floatingLabel=a.first),O(a=N())&&(n._notchedOutline=a.first),O(a=N())&&(n._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&T("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[W([{provide:Dn,useExisting:i},{provide:ks,useExisting:i}])],ngContentSelectors:Ed,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(J(kd),Fe(0,Fd,1,1,"ng-template",null,0,Zt),m(2,"div",6,1),h("click",function(r){return n._control.onContainerClick(r)}),E(4,Rd,1,0,"div",7),m(5,"div",8),E(6,Pd,2,2,"div",9),E(7,Od,3,0,"div",10),E(8,Nd,3,0,"div",11),m(9,"div",12),E(10,Bd,1,1,null,13),R(11),c(),E(12,zd,3,0,"div",14),E(13,jd,3,0,"div",15),c(),E(14,Vd,1,0,"div",16),c(),m(15,"div",17),E(16,Hd,2,0,"div",18)(17,Ud,5,1,"div",19),c()),t&2){let a;p(2),T("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),p(2),S(!n._hasOutline()&&!n._control.disabled?4:-1),p(2),S(n._hasOutline()?6:-1),p(),S(n._hasIconPrefix?7:-1),p(),S(n._hasTextPrefix?8:-1),p(2),S(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),p(2),S(n._hasTextSuffix?12:-1),p(),S(n._hasIconSuffix?13:-1),p(),S(n._hasOutline()?-1:14),p(),T("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let r=n._getSubscriptMessageType();p(),S((a=r)==="error"?16:a==="hint"?17:-1)}},dependencies:[bs,xs,ci,ys,xn],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return i})();var Ki=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({imports:[$a,Gt,Ne]})}return i})();var Ts=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return i})(),Wd={passive:!0},Fs=(()=>{class i{_platform=s(we);_ngZone=s(U);_renderer=s(Bt).createRenderer(null,null);_styleLoader=s(Ke);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return ct;this._styleLoader.load(Ts);let t=Pe(e),n=this._monitoredElements.get(t);if(n)return n.subject;let a=new b,r="cdk-text-field-autofilled",l=u=>{u.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:u.target,isAutofilled:!0}))):u.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:u.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Wd)));return this._monitoredElements.set(t,{subject:a,unlisten:d}),a}stopMonitoring(e){let t=Pe(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Rs=(()=>{class i{_elementRef=s(k);_platform=s(we);_ngZone=s(U);_renderer=s(ye);_resizeEvents=new b;_previousValue;_initialHeight;_destroyed=new b;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=pt(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=pt(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=s(Ve);_hasFocus=!1;_isViewInited=!1;constructor(){s(Ke).load(Ts),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen("window","resize",()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,"focus",this._handleFocusEvent),this._renderer.listen(this._textareaElement,"blur",this._handleFocusEvent)],this._resizeEvents.pipe(Ma(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position="absolute",t.visibility="hidden",t.border="none",t.padding="0",t.height="",t.minHeight="",t.maxHeight="",t.top=t.bottom=t.left=t.right="auto",t.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||"",n=this._platform.FIREFOX,a=this._hasFocus,r=n?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";a&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(r);let l=e.scrollHeight-4;return e.classList.remove(r),a&&(e.style.marginBottom=t),l}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type==="focus"};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,n=t.value;if(!e&&this._minRows===this._previousMinRows&&n===this._previousValue)return;let a=this._measureScrollHeight(),r=Math.max(a,this._cachedPlaceholderHeight||0);t.style.height=`${r}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=n,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:n}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(t,n){t&1&&h("input",function(){return n._noopInputHandler()})},inputs:{minRows:[0,"cdkAutosizeMinRows","minRows"],maxRows:[0,"cdkAutosizeMaxRows","maxRows"],enabled:[2,"cdkTextareaAutosize","enabled",I],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]})}return i})();var Is=new D("MAT_INPUT_VALUE_ACCESSOR");var As=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var $i=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(o,e,t,n,a){this._defaultMatcher=o,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=a}updateErrorState(){let o=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(n,e)??!1;a!==o&&(this.errorState=a,this._stateChanges.next())}};var Qd=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Yd=new D("MAT_INPUT_CONFIG"),Wi=(()=>{class i{_elementRef=s(k);_platform=s(we);ngControl=s(ir,{optional:!0,self:!0});_autofillMonitor=s(Fs);_ngZone=s(U);_formField=s(Dn,{optional:!0});_renderer=s(ye);_uid=s(se).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Yd,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new b;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=dn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(nr.required)??!1}set required(e){this._required=dn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ko().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=dn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ko().has(e));constructor(){let e=s(ar,{optional:!0}),t=s(fn,{optional:!0}),n=s(As),a=s(Is,{optional:!0,self:!0}),r=this._elementRef.nativeElement,l=r.nodeName.toLowerCase();a?ai(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new $i(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ii(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Qd.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&h("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(_e("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),H("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),T("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",I]},exportAs:["matInput"],features:[W([{provide:qi,useExisting:i}]),$e]})}return i})();var Xd=["*"],Qi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-full-width-form-fields"]],ngContentSelectors:Xd,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},styles:[`matx-full-width-form-fields mat-form-field{width:100%}
`],encapsulation:2,changeDetection:0})}return i})();function Zd(i,o){if(i&1){let e=K();m(0,"mat-tree-node",4),h("click",function(){let n=A(e).$implicit,a=_();return P(a.handleClick(n.fullName))})("activation",function(){let n=A(e).$implicit,a=_();return P(a.handleClick(n.fullName))}),F(1,"mat-icon"),C(2),c()}if(i&2){let e=o.$implicit,t=_();T("active",e.fullName===t.selectedFile()),p(2),ee(" ",e.name," ")}}function Jd(i,o){if(i&1&&(m(0,"mat-tree-node",5)(1,"mat-icon",6)(2,"mat-icon"),C(3),c()(),C(4),c()),i&2){let e=o.$implicit;_();let t=Ae(1);p(3),ee(" ",t.isExpanded(e)?"expand_more":"chevron_right"," "),p(),ee(" ",e.name," ")}}var sa=(()=>{class i{filenames=w([]);selectedFile=w("");fileClick=Y();data=j([]);tree=te.required(Wn);ngOnChanges(e){e.filenames&&this.toNodes(),e.selectedFile&&this.expandParents(e.selectedFile.currentValue)}collapseAll(){this.tree().collapseAll()}hasChild(e,t){return t.children!==void 0&&t.children.length>0}childrenAccessor(e){return e.children??[]}expansionKeyFn(e){return e.fullName}handleClick(e){this.fileClick.emit(e)}toNodes(){let e=new Map;new Set(this.filenames().flatMap(a=>[...a.matchAll(/[\/]/g)].map(r=>a.substring(0,r.index)))).forEach(a=>{let r=a.lastIndexOf("/");e.set(a,{name:r===-1?a:a.slice(r+1),fullName:a,level:(a.match(/\//g)||[]).length,children:[]})});let n=[];e.forEach((a,r)=>{if(a.level===0)n.push(a);else{let l=r.lastIndexOf("/");e.get(r.slice(0,l))?.children?.push(a)}}),this.filenames().forEach(a=>{let r=a.lastIndexOf("/"),l={name:r===-1?a:a.slice(r+1),fullName:a,level:(a.match(/\//g)||[]).length};l.level===0?n.push(l):e.get(a.slice(0,r))?.children?.push(l)}),e.forEach(a=>{a.children?.sort((r,l)=>this.comparePaths(r,l))}),this.data.set(n.sort((a,r)=>this.comparePaths(a,r)))}comparePaths(e,t){return e.children&&!t.children?-1:t.children&&!e.children?1:this.localCompareNumeric(e.name,t.name)}localCompareNumeric(e,t){return e.localeCompare(t,void 0,{sensitivity:"base",numeric:!0})}expandParents(e){let t=[...e.matchAll(/[\/]/g)].map(a=>e.substring(0,a.index)),n=this.data();for(let a=0;a<t.length;a++){let r=n.find(l=>l.fullName===t[a]);r&&this.tree().expand(r),n=r?.children??[]}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-file-tree"]],viewQuery:function(t,n){t&1&&he(n.tree,Wn,5),t&2&&ie()},inputs:{filenames:[1,"filenames"],selectedFile:[1,"selectedFile"]},outputs:{fileClick:"fileClick"},features:[$e],decls:4,vars:4,consts:[["tree",""],[3,"dataSource","childrenAccessor","expansionKey"],["matTreeNodePadding","","matTreeNodePaddingIndent","10",3,"active","click","activation",4,"matTreeNodeDef"],["matTreeNodePadding","","matTreeNodePaddingIndent","10","matTreeNodeToggle","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodePadding","","matTreeNodePaddingIndent","10",3,"click","activation"],["matTreeNodePadding","","matTreeNodePaddingIndent","10","matTreeNodeToggle",""],[1,"tree-button"]],template:function(t,n){t&1&&(m(0,"mat-tree",1,0),Fe(2,Zd,3,3,"mat-tree-node",2)(3,Jd,5,2,"mat-tree-node",3),c()),t&2&&(g("dataSource",n.data())("childrenAccessor",n.childrenAccessor)("expansionKey",n.expansionKeyFn),p(3),g("matTreeNodeDefWhen",n.hasChild))},dependencies:[Qe,ps,ds,cs,ms,Wn,ls],styles:[".mat-tree-node[_ngcontent-%COMP%]{cursor:pointer;min-height:25px;height:25px;opacity:.8;text-wrap:nowrap}.tree-button[_ngcontent-%COMP%]{cursor:pointer}.active[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:0})}return i})(),ec=(()=>{class i{dialogRef=s(ft);data=s(Un);formControl;buttonDisabled;ngOnInit(){this.formControl=new pn(this.data.value,this.notInSetValidator(this.data.exclude)),this.buttonDisabled=this.formControl.valueChanges.pipe(re(!1),V(e=>!this.canCommit(e))),this.formControl.markAsTouched()}cancel(){this.dialogRef.close()}click(){this.formControl.valid&&this.canCommit(this.formControl.value)&&this.dialogRef.close(this.formControl.value)}commit(e){this.formControl.valid&&this.canCommit(this.formControl.value)&&(e.preventDefault(),this.dialogRef.close(this.formControl.value))}canCommit(e){return(e||"").trim().length!==0&&e!==this.data.value}notInSetValidator(e){return t=>{let n=t.value?.toLowerCase();return!e.has(n)?null:{inList:!0}}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-explorer-dialog"]],decls:18,vars:6,consts:[["mat-dialog-title",""],["mat-dialog-content","",3,"keydown.enter"],["floatLabel","always"],["matInput","",3,"formControl"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","color","primary",3,"click","disabled"]],template:function(t,n){t&1&&(m(0,"h1",0),C(1),c(),m(2,"div",1),h("keydown.enter",function(r){return n.commit(r)}),m(3,"matx-full-width-form-fields")(4,"mat-form-field",2)(5,"mat-label"),C(6,"Filename"),c(),F(7,"input",3),m(8,"mat-error"),C(9,"File with this name already exists."),c(),m(10,"mat-hint"),C(11,'Use slashes to create folders: "folder/file".'),c()()()(),m(12,"div",4)(13,"button",5),h("click",function(){return n.cancel()}),C(14,"Cancel"),c(),m(15,"button",6),yt(16,"async"),h("click",function(){return n.click()}),C(17),c()()),t&2&&(p(),pe(n.data.title),p(6),g("formControl",n.formControl),p(8),g("disabled",xt(16,4,n.buttonDisabled)),p(2),ee(" ",n.data.buttonText," "))},dependencies:[st,cn,mn,un,Ki,Gt,It,xn,Cn,Wi,Be,zi,Ni,Bi,Li,Qi,Ct],styles:["[mat-dialog-actions][_ngcontent-%COMP%]{float:right}"],changeDetection:0})}return i})(),Ut=class{},Xi=(()=>{class i{extension=w("");selectedFile=w("");fileClick=Y();filesLoaded=Y();filenames=j([]);snackBar=s(at);dialog=s(Vt);fileService=s(Ut);destroyRef=s(fe);fileTree=te.required(sa);ngOnInit(){this.refresh()}refresh(){this.fileService.list().pipe(Q(this.destroyRef)).subscribe({next:e=>{this.filenames.set(this.extension()===""?e:e.filter(t=>t.endsWith(`.${this.extension()}`)).map(t=>this.removeExtension(t))),this.filesLoaded.emit(this.filenames().length)},error:e=>this.handleError("Failed loading files.",e)})}getFileNames(){return this.filenames()}collapseAll(){this.fileTree().collapseAll()}openFile(e){return this.fileService.load(`${e}.${this.extension()}`).pipe(Q(this.destroyRef),In(t=>(this.handleError("Failed loading file.",t),ct)))}openFiles(e){return this.fileService.loadMultiple(e.map(t=>this.addExtension(t))).pipe(Q(this.destroyRef),Ie(t=>t.forEach(n=>n.filename=this.removeExtension(n.filename))),In(t=>(this.handleError("Failed loading file.",t),ct)))}saveFile(e,t){return this.fileService.save(this.addExtension(e),t).pipe(Q(this.destroyRef),Ie(()=>{this.refresh(),this.showMessage("File saved.")}),In(n=>(this.handleError("Failed saving file.",n),ct)))}saveFileAs(e,t,n=[]){let a=new b;return this.openSaveDialog("Save file","Save",e,n).afterClosed().subscribe(l=>{l?this.saveFile(l,t).subscribe({next:()=>{a.next(l),a.complete(),this.refresh()},error:()=>a.complete()}):a.complete()}),a}saveFiles(e){return e=e.map(t=>({filename:this.addExtension(t.filename),content:t.content})),this.fileService.saveMultiple(e).pipe(Q(this.destroyRef),Ie(()=>{this.refresh(),this.showMessage("Files saved.")}),In(t=>(this.handleError("Failed saving files.",t),ct)))}renameFile(e,t=[]){let n=new b;return this.openSaveDialog("Rename file","Rename",e,t).afterClosed().subscribe(r=>{r?this.fileService.rename(this.addExtension(e),this.addExtension(r)).pipe(Q(this.destroyRef)).subscribe({next:()=>{n.next(r),n.complete(),this.refresh()},error:l=>{n.complete(),this.handleError("Failed renaming file.",l)}}):n.complete()}),n.asObservable()}renameNewFile(e,t=[]){return this.openSaveDialog("Rename file","Rename",e,t).afterClosed().pipe(ue(a=>a!==void 0))}deleteFile(e){let t=new b;return this.dialog.open(Vi,{data:{title:"Delete file",message:"Are you sure you want to delete this file?"}}).afterClosed().subscribe(n=>{n?this.fileService.delete(this.addExtension(e)).pipe(Q(this.destroyRef)).subscribe({next:()=>{t.next(),t.complete(),this.refresh()},error:a=>{this.handleError("Failed deleting file.",a),t.complete()}}):t.complete()}),t.asObservable()}handleFileClick(e){this.fileClick.emit(e)}openSaveDialog(e,t,n="",a=[]){let r=new Set(this.filenames().concat(a.map(l=>l.toLowerCase())));return r.delete(n.toLowerCase()),this.dialog.open(ec,{width:"500px",data:{title:e,buttonText:t,exclude:r,value:n}})}addExtension(e){let t=this.extension();return t===""?e:`${e}.${t}`}removeExtension(e){let t=this.extension();return t===""||!e.endsWith(`.${t}`)?e:e.slice(0,-(t.length+1))}handleError(e,t){this.showMessage(e),console.warn(e,t),this.refresh()}showMessage(e){this.snackBar.open(e,"X")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-explorer"]],viewQuery:function(t,n){t&1&&he(n.fileTree,sa,5),t&2&&ie()},inputs:{extension:[1,"extension"],selectedFile:[1,"selectedFile"]},outputs:{fileClick:"fileClick",filesLoaded:"filesLoaded"},decls:1,vars:2,consts:[[3,"fileClick","filenames","selectedFile"]],template:function(t,n){t&1&&(m(0,"matx-file-tree",0),h("fileClick",function(r){return n.handleFileClick(r)}),c()),t&2&&g("filenames",n.filenames())("selectedFile",n.selectedFile())},dependencies:[sa],encapsulation:2,changeDetection:0})}return i})(),Ps=new D("formlyxDesignerFileServiceUrl"),Os=new D("formlyxDesignerLocalStoragePrefix"),tc=(()=>{class i{httpClient=s(ja);baseUrl=s(Ps);list(){return this.httpClient.get(`${this.baseUrl}/files`)}load(e){return this.httpClient.get(`${this.baseUrl}/file`,{params:{filename:e},responseType:"text"})}loadMultiple(e){return this.httpClient.post(`${this.baseUrl}/files/load`,e,{responseType:"json"})}save(e,t){return this.httpClient.post(`${this.baseUrl}/file`,{filename:e,content:t}).pipe(V(()=>{}))}saveMultiple(e){return this.httpClient.post(`${this.baseUrl}/files`,e).pipe(V(()=>{}))}delete(e){return this.httpClient.delete(`${this.baseUrl}/file?filename=${e}`).pipe(V(()=>{}))}rename(e,t){return this.httpClient.post(`${this.baseUrl}/file/rename`,{currentFilename:e,newFilename:t}).pipe(V(()=>{}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})(),nc=(()=>{class i{prefix=s(Os);list(){let e=[];for(let t=0,n=localStorage.length;t<n;t++){let a=localStorage.key(t);a?.startsWith(this.prefix)&&e.push(a.substring(this.prefix.length))}return z(e)}load(e){let t=localStorage.getItem(`${this.prefix}${e}`);if(t===null)throw"File does not exist";return z(t)}loadMultiple(e){return z(e.map(t=>{let n=localStorage.getItem(`${this.prefix}${t}`);return{filename:t,content:n??""}}))}save(e,t){return localStorage.setItem(`${this.prefix}${e}`,t),z(void 0)}saveMultiple(e){return e.forEach(t=>this.save(t.filename,t.content)),z(void 0)}delete(e){return localStorage.removeItem(`${this.prefix}${e}`),z(void 0)}rename(e,t){if(localStorage.getItem(`${this.prefix}${t}`))throw`File with name ${t} already exists.`;let n=localStorage.getItem(`${this.prefix}${e}`)??"";return localStorage.setItem(`${this.prefix}${t}`,n),localStorage.removeItem(`${this.prefix}${e}`),z(void 0)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();function Ns(i){return[{provide:Ut,useClass:tc},{provide:Ps,useValue:i}]}function Ls(i="matx_explorer_"){return[{provide:Ut,useClass:nc},{provide:Os,useValue:i}]}var ic=["*"];var oc=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ac=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],rc=new D("MAT_CARD_CONFIG"),Bs=(()=>{class i{appearance;constructor(){let e=s(rc,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,n){t&2&&T("mat-mdc-card-outlined",n.appearance==="outlined")("mdc-card--outlined",n.appearance==="outlined")("mat-mdc-card-filled",n.appearance==="filled")("mdc-card--filled",n.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:ic,decls:1,vars:0,template:function(t,n){t&1&&(J(),R(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return i})();var zs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})();var js=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ac,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(t,n){t&1&&(J(oc),R(0),De(1,"div",0),R(2,1),Re(),R(3,2))},encapsulation:2,changeDetection:0})}return i})();var Vs=(()=>{class i extends Ci{matxOverflowTooltip=w("");element=s(k);resizeObserver=new ResizeObserver(()=>this.setTooltipState());ngOnInit(){this.message=this.matxOverflowTooltip(),this.resizeObserver.observe(this.element.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this.resizeObserver.disconnect()}setTooltipState(){let e=this.element.nativeElement,t=e.scrollWidth<=e.offsetWidth;this.disabled!==t&&(t?super.hide():super.show(),this.disabled=t)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=tt(i)))(n||i)}})();static \u0275dir=M({type:i,selectors:[["","matxOverflowTooltip",""]],inputs:{matxOverflowTooltip:[1,"matxOverflowTooltip"]},features:[ae]})}return i})();var sc=[[["matx-panel-header-button"]],"*"],lc=["matx-panel-header-button","*"],At=(()=>{class i{headerTitle=w("");fullHeight=w(!1);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-panel"]],inputs:{headerTitle:[1,"headerTitle"],fullHeight:[1,"fullHeight"]},ngContentSelectors:lc,decls:7,vars:6,consts:[[1,"title",3,"matxOverflowTooltip"]],template:function(t,n){t&1&&(J(sc),m(0,"mat-card")(1,"mat-card-header")(2,"div",0),C(3),c(),R(4),c(),m(5,"mat-card-content"),R(6,1),c()()),t&2&&(T("full-height",n.fullHeight()),p(2),g("matxOverflowTooltip",n.headerTitle()),p(),ee(" ",n.headerTitle()," "),p(2),T("full-height",n.fullHeight()))},dependencies:[Bs,js,zs,Vs],styles:["mat-card[_ngcontent-%COMP%]{max-height:100%}mat-card-header[_ngcontent-%COMP%]{padding:8px 16px;background-color:#0000;display:flex;justify-content:flex-end;flex-wrap:wrap}.title[_ngcontent-%COMP%]{white-space:nowrap;justify-self:left;flex:1;margin-right:auto;min-width:0;max-width:max-content;overflow:hidden;text-overflow:ellipsis;font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}mat-card-content[_ngcontent-%COMP%]{padding-top:6px;display:flex;flex-direction:column;overflow:auto}mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-corner{display:none}mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:4px;background:#aaa}mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:4px;background:#eee}.full-height[_ngcontent-%COMP%]{height:100%}"],changeDetection:0})}return i})(),Mn=(()=>{class i{icon=w.required();tooltip=w.required();selected=w(!1);disabled=w(!1);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-panel-header-button"]],inputs:{icon:[1,"icon"],tooltip:[1,"tooltip"],selected:[1,"selected"],disabled:[1,"disabled"]},decls:3,vars:5,consts:[["mat-icon-button","",3,"matTooltip","disabled"]],template:function(t,n){t&1&&(m(0,"button",0)(1,"mat-icon"),C(2),c()()),t&2&&(T("selected",n.selected()),g("matTooltip",n.tooltip())("disabled",n.disabled()),p(2),pe(n.icon()))},dependencies:[Qe,qo,Ci],styles:["[_nghost-%COMP%]{flex-shrink:0;margin:-8px -4px}button[_ngcontent-%COMP%]:not(.selected):not(:active:hover){color:#d3d3d3}"],changeDetection:0})}return i})();var dc=["files"],Zi=(()=>{class i{imported=Y();elementRef=te.required("files");destroyRef=s(fe);import(e=!1,t=[]){let n=this.elementRef().nativeElement;n.value="",n.multiple=e,n.accept=t.map(a=>`.${a}`).join(","),n.click()}readFiles(e){let t=e.target.files;if(!t?.length)return;let n=Array.from(t).map(a=>ti(this.readFile(a)));ni(n).pipe(Q(this.destroyRef)).subscribe(a=>this.imported.emit(a))}readFile(e){return new Promise((t,n)=>{let a=new FileReader;a.onload=()=>{t({filename:e.name,content:a.result?.toString()??""})},a.onerror=function(){n(new Error("File importer: Error reading file."))},a.readAsText(e)})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-file-importer"]],viewQuery:function(t,n){t&1&&he(n.elementRef,dc,5),t&2&&ie()},outputs:{imported:"imported"},decls:2,vars:0,consts:[["files",""],["type","file",1,"file-input--hidden",3,"change"]],template:function(t,n){t&1&&(De(0,"input",1,0),ri("change",function(r){return n.readFiles(r)}),Re())},styles:[".file-input--hidden[_ngcontent-%COMP%]{display:none}"],changeDetection:0})}return i})();function cc(i,o){if(i&1){let e=K();m(0,"matx-file-importer",0),h("imported",function(n){A(e);let a=_();return P(a.handleImported(n))}),c()}}var mc=["*"],wn=class{importersByName=new Map;set(o){this.importersByName.clear(),o.forEach(e=>{this.importersByName.set(e.name,e)})}getNames(){return[...this.importersByName.keys()]}getFirstName(){let o=this.getNames();return o.length?o[0]:""}getExtensions(o){return this.importersByName.get(o)?.extensions??[]}hasMultipleFileSelection(o){return this.importersByName.get(o)?.hasMultipleFileSelection??!0}import(o,e,t){let n=this.importersByName.get(o);if(!n)throw new Error("ImportManager: importer does not exist");let a=n.extensions?this.stripExtensions(t,n.extensions??[]):"";return ti(n.import(e,a))}stripExtensions(o,e){let t=Math.max(0,...e.filter(n=>o.endsWith(`.${n}`)).map(n=>n.length+1));return o.substring(0,o.length-t)}},la=(()=>{class i{imported=Y();importManager=w(new wn);hasError=j(!1);changeDectorRef=s($);snackBar=s(at);fileImporter=te.required(Zi);currentImporterName="";import(e){this.currentImporterName!==""&&(this.currentImporterName="",this.hasError.set(!0),this.changeDectorRef.detectChanges(),this.hasError.set(!1),this.changeDectorRef.detectChanges()),this.currentImporterName=e;let t=this.importManager().hasMultipleFileSelection(e),n=this.importManager().getExtensions(e);this.fileImporter().import(t,n)}handleImported(e){if(this.currentImporterName==="")return;let t=e.map(n=>this.importManager().import(this.currentImporterName,n.content,n.filename));ni(t).subscribe(n=>{let a={},r=[];if(n.forEach((l,d)=>{r.push(...l.result.map(u=>({name:u.name,data:u.data}))),l.success||(a[r[d].name]=l.message)}),r.length&&this.imported.emit(r),Object.keys(a).length){let l=`Could not parse file${Object.keys(a).length>1?"s":""}.`;console.warn(l,a),this.snackBar.open(l,"X")}this.currentImporterName=""})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-editor-app-importer"]],viewQuery:function(t,n){t&1&&he(n.fileImporter,Zi,5),t&2&&ie()},inputs:{importManager:[1,"importManager"]},outputs:{imported:"imported"},decls:1,vars:1,consts:[[3,"imported"]],template:function(t,n){t&1&&E(0,cc,1,0,"matx-file-importer"),t&2&&S(n.hasError()?-1:0)},dependencies:[Zi],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0})}return i})(),Qn=class{exportersByName=new Map;set(o){this.exportersByName.clear(),o.forEach(e=>{this.exportersByName.set(e.name,e)})}getNames(){return[...this.exportersByName.keys()]}getFirstName(){let o=this.getNames();return o.length?o[0]:""}getExtension(o){return this.exportersByName.get(o)?.extension??""}export(o,e){let t=this.exportersByName.get(o);if(!t)throw new Error("ExportManager: exporter does not exist");return t.export(e)}},ke=class{commandType;data;constructor(o,e){this.commandType=o,this.data=e}},oe=(function(i){return i[i.FileNew=0]="FileNew",i[i.FileSave=1]="FileSave",i[i.FileSaveAs=2]="FileSaveAs",i[i.FileSaveAll=3]="FileSaveAll",i[i.FileRename=4]="FileRename",i[i.FileDelete=5]="FileDelete",i[i.FileClose=6]="FileClose",i[i.FileCloseAll=7]="FileCloseAll",i[i.FileImport=8]="FileImport",i[i.FileExport=9]="FileExport",i})(oe||{});var Hs=(()=>{class i{convertFn=w.required();convertBackFn=w.required();extension=w("txt");defaultContent=w("");importManager=w(new wn);exportManager=w(new Qn);onCommand=w();selectedFile;importerNames=j([]);exporterNames=j([]);dialog=s(Vt);snackBar=s(at);tabsManager=s(Hn);destroyRef=s(fe);explorer=te.required(Xi);fileImporter=te.required(la);firstExplorerLoad=!0;get default(){if(this._default===void 0){let e=this.convertFn()(this.defaultContent());!e.success&&console.error(e.message),this._default=e.result}return this._default}_default;constructor(){this.selectedFile=Dt(this.tabsManager.onSelectionChange.pipe(V(e=>e?.filename??"")),{initialValue:""})}ngOnInit(){this.onCommand()?.pipe(Q(this.destroyRef)).subscribe(t=>this.handleCommand(t));let e=this.convertBackFn();e&&this.tabsManager.setIsModifiedFn(t=>t.content!==e(t.data)),this.importerNames.set(this.importManager().getNames()),this.exporterNames.set(this.exportManager().getNames())}ngOnDestroy(){this.tabsManager.closeAllTabs()}handleCommand(e){switch(this.snackBar.dismiss(),e.commandType){case oe.FileNew:return this.openNewTab();case oe.FileImport:this.warnAndRun("Import","Your changes might be lost if you don't save them first.",()=>this.tabsManager.hasModifiedTab(),()=>this.fileImporter().import(e.data??this.importManager().getFirstName()));return}let t=this.tabsManager.getSelectedTab();if(!t)return this.showMessage("No open files.");switch(e.commandType){case oe.FileSave:this.explorer().saveFile(t.filename,this.convertBackFn()(t.data)).subscribe(()=>this.tabsManager.updateModified([t],ne.Unmodified));break;case oe.FileSaveAs:this.explorer().saveFileAs(t.filename,this.convertBackFn()(t.data),this.tabsManager.getFileNames()).subscribe(l=>this.tabsManager.update(t,{filename:l,modificationState:ne.Unmodified}));break;case oe.FileSaveAll:let n=this.tabsManager.getTabs();this.explorer().saveFiles(n.map(l=>({filename:l.filename,content:this.convertBackFn()(l.data)}))).subscribe(()=>this.tabsManager.updateModified(n,ne.Unmodified));break;case oe.FileRename:t.modificationState===ne.New?this.explorer().renameNewFile(t.filename,this.tabsManager.getFileNames()).subscribe(l=>this.tabsManager.update(t,{filename:l})):this.explorer().renameFile(t.filename,this.tabsManager.getFileNames()).subscribe(l=>this.tabsManager.update(t,{filename:l}));break;case oe.FileDelete:if(t.modificationState===ne.New){this.tryCloseTab(t.filename);break}this.explorer().deleteFile(t.filename).subscribe(()=>{let l=this.tabsManager.getTabByFilename(t.filename);l&&this.tabsManager.closeTab(l)});break;case oe.FileClose:this.tryCloseTab(t.filename);break;case oe.FileCloseAll:this.warnAndRun("Close all","Your changes will be lost if you don't save them first.",()=>this.tabsManager.hasModifiedTab(),()=>this.tabsManager.closeAllTabs());break;case oe.FileExport:let a=e.data??this.exportManager().getFirstName(),r=new Blob([this.exportManager().export(a,t.data)??""],{type:"text/plain;charset=utf-8"});Kn(r,`${t.filename}.${this.exportManager().getExtension(a)}`);break}}selectTabOrOpenFile(e){let t=this.tabsManager.getTabByFilename(e);t?this.tabsManager.selectTab(t):this.explorer().openFile(e).subscribe(n=>this.openTabFromFile({filename:e,content:n}))}addTabOnEmptyFirstLoad(e){this.firstExplorerLoad&&(!e&&this.openNewTab(),this.firstExplorerLoad=!1)}selectTab(e){let t=this.tabsManager.getTabByFilename(e);t&&this.tabsManager.selectTab(t)}tryCloseTab(e){let t=this.tabsManager.getTabByFilename(e);t&&this.warnAndRun("Close","Your changes will be lost if you don't save them first.",()=>t.modificationState!==ne.Unmodified,()=>this.tabsManager.closeTab(t))}handleImported(e){this.explorer().openFiles(e.map(t=>t.name)).subscribe(t=>{let n=new Map(t.map(r=>[r.filename,r.content])),a=e.map(r=>{let l=n.get(r.name);return{filename:r.name,content:l??"",data:r.data,modificationState:l?ne.Unknown:ne.New}});this.tabsManager.importTabs(a)})}openTabFromFile(e){let t=this.convertFn()(e.content);if(t.success)this.tabsManager.openTab({filename:e.filename,content:e.content,data:t.result,modificationState:ne.Unmodified});else{let n="Could not parse file.";console.warn(n,t.message),this.showMessage(n)}}openNewTab(){this.tabsManager.openNewTab({filename:"new",content:this.defaultContent(),data:this.default,modificationState:ne.New},this.explorer().getFileNames())}warnAndRun(e,t,n,a){if(!n())return a();this.dialog.open(Vi,{data:{title:e,message:t}}).afterClosed().subscribe(r=>r&&a())}showMessage(e){this.snackBar.open(e,"X")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-editor-app"]],viewQuery:function(t,n){t&1&&he(n.explorer,Xi,5)(n.fileImporter,la,5),t&2&&ie(2)},inputs:{convertFn:[1,"convertFn"],convertBackFn:[1,"convertBackFn"],extension:[1,"extension"],defaultContent:[1,"defaultContent"],importManager:[1,"importManager"],exportManager:[1,"exportManager"],onCommand:[1,"onCommand"]},ngContentSelectors:mc,decls:10,vars:6,consts:[["explorer",""],[3,"imported","importManager"],["headerTitle","Files",1,"explorer",3,"fullHeight"],["icon","refresh","tooltip","Refresh",3,"click","selected"],["icon","unfold_less","tooltip","Collapse all",3,"click","selected"],[3,"fileClick","filesLoaded","extension","selectedFile"],[1,"container"],[3,"tabSelect","tabClose"],[1,"editor-container"]],template:function(t,n){if(t&1){let a=K();J(),m(0,"matx-editor-app-importer",1),h("imported",function(l){return n.handleImported(l)}),c(),m(1,"matx-panel",2)(2,"matx-panel-header-button",3),h("click",function(){A(a);let l=Ae(5);return P(l.refresh())}),c(),m(3,"matx-panel-header-button",4),h("click",function(){A(a);let l=Ae(5);return P(l.collapseAll())}),c(),m(4,"matx-explorer",5,0),h("fileClick",function(l){return n.selectTabOrOpenFile(l)})("filesLoaded",function(l){return n.addTabOnEmptyFirstLoad(l)}),c()(),m(6,"div",6)(7,"matx-file-tab-bar",7),h("tabSelect",function(l){return n.selectTab(l)})("tabClose",function(l){return n.tryCloseTab(l)}),c(),m(8,"div",8),R(9),c()()}t&2&&(g("importManager",n.importManager()),p(),g("fullHeight",!0),p(),g("selected",!0),p(),g("selected",!0),p(),g("extension",n.extension())("selectedFile",n.selectedFile()))},dependencies:[qr,Xi,At,Mn,la],styles:["[_nghost-%COMP%]{height:100%;display:flex;min-height:0}.explorer[_ngcontent-%COMP%]{flex:1;max-width:500px}.container[_ngcontent-%COMP%]{flex:4;min-width:0;display:flex;flex-direction:column}.editor-container[_ngcontent-%COMP%]{flex:1;min-height:0;background-color:#00000008;border:1px solid lightgray;border-bottom:0}"],changeDetection:0})}return i})();var kn=(()=>{class i{changeSubject=new Ce(null);onChange=this.changeSubject.asObservable();ngOnDestroy(){this.changeSubject.complete()}set(e){this.changeSubject.next(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Yn=(()=>{class i{states=[];currentState=0;change=new b;onChange=this.change.asObservable();ngOnDestroy(){this.change.complete()}push(e){this.currentState<this.states.length-1&&this.states.splice(this.currentState+1),this.states.push(JSON.stringify(e)),this.currentState=this.states.length-1}clear(){this.states.splice(0,this.states.length-1),this.currentState=0}undo(){this.currentState>0&&(this.currentState--,this.change.next(JSON.parse(this.states[this.currentState])))}redo(){this.currentState<this.states.length-1&&(this.currentState++,this.change.next(JSON.parse(this.states[this.currentState])))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Pt=class{fields=[];parentByField=new Map;build(){return this.fields}set(o){return this.fields=o,this.fields.forEach(e=>this.addToMapsRecursive(e)),this}add(o,e,t){let n=this.fields;return t&&(t.fieldGroup=t.fieldGroup||[],n=t.fieldGroup),n.splice(e,0,o),this.addToMapsRecursive(o,t),this}addToFieldArray(o,e,t=!0){return typeof e.fieldArray=="object"&&(o={type:"formly-group",fieldGroup:t?[o,e.fieldArray]:[e.fieldArray,o]},this.removeFromMapsRecursive(e.fieldArray)),e.fieldArray=o,this.addToMapsRecursive(o,e),this}insert(o,e,t=!0){let n=this.parentByField.get(e);if(n?.fieldArray===e)return this.addToFieldArray(o,n,!1);let a=this.getIndex(e,n?.fieldGroup||this.fields);return this.add(o,a+(t?1:0),n)}update(o,e){let t=this.parentByField.get(o);if(t&&t.fieldArray===o)t.fieldArray=e;else{let n=t?t.fieldGroup||[]:this.fields,a=this.getIndex(o,n);n.splice(a,1,e)}return this.removeFromMapsRecursive(o),this.addToMapsRecursive(e),this}remove(o){let e=this.parentByField.get(o);if(e&&e.fieldArray===o)delete e.fieldArray;else{let t=e?e.fieldGroup||[]:this.fields,n=this.getIndex(o,t);t.splice(n,1)}return this.removeFromMapsRecursive(o),this}getIndex(o,e){let t=e.indexOf(o);if(t===-1)throw new Error(`Formly builder: field not found: ${JSON.stringify(o)}`);return t}addToMapsRecursive(o,e){e&&this.parentByField.set(o,e),typeof o.fieldArray=="object"&&this.addToMapsRecursive(o.fieldArray,o),o.fieldGroup?.forEach(t=>this.addToMapsRecursive(t,o))}removeFromMapsRecursive(o){this.parentByField.delete(o),typeof o.fieldArray=="object"&&this.removeFromMapsRecursive(o.fieldArray),o.fieldGroup?.forEach(e=>this.removeFromMapsRecursive(e))}};var Gs={key:{key:"key",type:"formly-editor-input",props:{label:"key"}},id:{key:"id",type:"formly-editor-input",props:{label:"id"}},name:{key:"name",type:"formly-editor-input",props:{label:"name"}},type:{key:"type",type:"formly-editor-select",props:{label:"type"}},className:{key:"className",type:"formly-editor-input",props:{label:"className"}},template:{key:"template",type:"formly-editor-textarea",props:{label:"template"}},defaultValue:{key:"defaultValue",type:"formly-editor-input",props:{label:"defaultValue"}},hide:{key:"hide",type:"formly-editor-checkbox",props:{label:"hide"}},focus:{key:"focus",type:"formly-editor-checkbox",props:{label:"focus"}},fieldGroupClassName:{key:"fieldGroupClassName",type:"formly-editor-input",props:{label:"fieldGroupClassName"}},"props.type":{key:"props.type",type:"formly-editor-input",props:{label:"type"}},"props.label":{key:"props.label",type:"formly-editor-input",props:{label:"label"}},"props.placeholder":{key:"props.placeholder",type:"formly-editor-input",props:{label:"placeholder"}},"props.disabled":{key:"props.disabled",type:"formly-editor-checkbox",props:{label:"disabled"}},"props.options":{key:"props.options",type:"formly-editor-array-dialog",props:{label:"options",dialogTitle:"Options",field:{fieldGroup:[{key:"label",type:"formly-editor-input",props:{label:"Label"}},{key:"value",type:"formly-editor-input",props:{label:"Value"}}]}}},"props.rows":{key:"props.rows",type:"formly-editor-input-number",props:{label:"rows"}},"props.cols":{key:"props.cols",type:"formly-editor-input-number",props:{label:"cols"}},"props.description":{key:"props.description",type:"formly-editor-input",props:{label:"description"}},"props.hidden":{key:"props.hidden",type:"formly-editor-checkbox",props:{label:"hidden"}},"props.max":{key:"props.max",type:"formly-editor-input-number",props:{label:"max"}},"props.min":{key:"props.min",type:"formly-editor-input-number",props:{label:"min"}},"props.minLength":{key:"props.minLength",type:"formly-editor-input-number",props:{label:"minLength"}},"props.maxLength":{key:"props.maxLength",type:"formly-editor-input-number",props:{label:"maxLength"}},"props.pattern":{key:"props.pattern",type:"formly-editor-input",props:{label:"pattern"}},"props.required":{key:"props.required",type:"formly-editor-checkbox",props:{label:"required"}},"props.tabindex":{key:"props.tabindex",type:"formly-editor-input-number",props:{label:"tabindex"}},"props.readonly":{key:"props.readonly",type:"formly-editor-checkbox",props:{label:"readonly"}},"props.step":{key:"props.step",type:"formly-editor-input-number",props:{label:"step"}},spacing:{},"props.url":{key:"props.url",type:"formly-editor-input",props:{label:"url"}},"props.method":{key:"props.method",type:"formly-editor-input",props:{label:"method"}},"props.valueKey":{key:"props.valueKey",type:"formly-editor-input",props:{label:"value key"}},"props.labelKey":{key:"props.labelKey",type:"formly-editor-input",props:{label:"label key"}},"props.inputGroups":{key:"props.inputGroups",type:"formly-editor-select",props:{label:"input groups",multiple:!0,options:[{label:"path",value:"path"},{label:"query",value:"query"},{label:"body",value:"body"},{label:"result",value:"result"}]}},"props.responseType":{key:"props.responseType",type:"formly-editor-select",props:{label:"response type",options:[{label:"none",value:void 0},{label:"arraybuffer",value:"arraybuffer"},{label:"blob",value:"blob"},{label:"json",value:"json"},{label:"text",value:"text"}]}},"props.addButtonLabel":{key:"props.addButtonLabel",type:"formly-editor-input",props:{label:"add button label"}},"props.emptyArrayMessage":{key:"props.emptyArrayMessage",type:"formly-editor-input",props:{label:"empty array message"}},"props.navigationDisabled":{key:"props.navigationDisabled",type:"formly-editor-checkbox",props:{label:"disable navigation"}},"props.action":{key:"props.action",type:"formly-editor-select",props:{label:"action",options:[{label:"send-and-clear",value:"send-and-clear"},{label:"send-and-close",value:"send-and-close"},{label:"send-and-navigate",value:"send-and-navigate"},{label:"send-and-show-message",value:"send-and-show-message"}]}},"props.autoRun":{key:"props.autoRun",type:"formly-editor-checkbox",props:{label:"run automatically"}},"props.form":{key:"props.form",type:"formly-editor-input",props:{label:"form"}},"props.menu":{key:"props.menu",type:"formly-editor-menu-dialog",props:{label:"menu"}},"props.pages":{key:"props.pages",type:"formly-editor-array-dialog",props:{label:"pages",dialogTitle:"Pages",width:800,field:{fieldGroup:[{key:"url",type:"formly-editor-input",props:{label:"url"}},{key:"breadcrumbParts",type:"formly-editor-array-dialog",props:{label:"breadcrumb parts",dialogTitle:"Breadcrumb parts",width:750,field:{fieldGroup:[{key:"label",type:"formly-editor-input",props:{label:"label"}},{key:"url",type:"formly-editor-input",props:{label:"url"}}]}}}]}}}};var ht=["key","type","props.required","props.label","props.placeholder","props.description","hide","props.disabled","props.readonly"],Ji=["key","type","props.required","props.label","props.placeholder","props.description","hide","props.disabled","props.readonly","props.options"],Us=["key","type","props.required","props.label","hide","props.disabled","props.readonly","props.emptyArrayMessage","props.addButtonLabel"],da=["key","type","props.inputGroups","props.label","props.url","props.method","props.responseType","props.action","hide","props.disabled"],qs={action:da,app:["spacing","type","props.menu","props.pages"],array:Us,boolean:ht,checkbox:ht,datepicker:ht,datetimepicker:ht,"dialog-button":["key","type","props.label","props.form","hide"],enum:Ji,"formly-template":["key","template"],grid:Us,input:ht,integer:ht,link:["key","type","props.label","props.url","hide"],"load-action":da.map(i=>i==="props.action"?"spacing":i).concat(["props.autoRun"]),"formly-group":["key","type","hide","props.disabled"],number:ht,multicheckbox:Ji,object:["key","type","props.required","props.label","hide","props.disabled","props.readonly"],page:["props.navigationDisabled","type"],"save-action":da.map(i=>i==="props.action"?"spacing":i),radio:Ji,select:Ji,string:ht,textarea:ht.slice().concat(["props.rows"]),"url-select":["key","type","props.required","props.label","props.placeholder","props.description","hide","props.disabled","props.readonly","props.url","props.valueKey","props.labelKey"]};var Ks={groupTypes:["formly-group","object","page"],properties:Gs,propertiesByType:qs,formRenderConfig:{editFormFieldConverter:i=>{i.hide&&delete i.hide,i.expressions&&delete i.expressions},testFormFieldConverter:()=>{}}};var eo=new D("formlyEditorConfig");var Ze=(()=>{class i{groupTypes;properties;propertiesByType;formRenderConfig;constructor(){let e=s(eo),t=Ks;this.groupTypes=e.groupTypes??t.groupTypes??[],this.properties=Object.assign({},t.properties,e.properties),this.propertiesByType=Object.assign({},t.propertiesByType,e.propertiesByType),this.formRenderConfig=Object.assign({},t.formRenderConfig,e.formRenderConfig)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var ge=(()=>{class i{formlyConfig=s(rr);groupTypes=s(Ze).groupTypes;initialized=!1;fieldTypes=[];fieldTypesSet=new Set;fieldArrayTypesSet=new Set;fieldGroupTypesSet=new Set;initialize(){if(this.initialized)return;let e=this.formlyConfig.types;this.fieldTypes=Object.freeze(Object.keys(e).filter(t=>!t.startsWith("formly-editor-")).sort((t,n)=>t.localeCompare(n))),this.fieldTypesSet=new Set(this.fieldTypes),this.fieldGroupTypesSet=new Set(this.groupTypes),this.fieldArrayTypesSet=new Set(this.fieldTypes.filter(t=>e[t].component?.prototype instanceof sr)),this.initialized=!0}get(){return this.initialize(),this.fieldTypes}getType(e){return this.initialize(),typeof e.type=="string"?e.type:e.template?"formly-template":"formly-group"}getStandardTypes(){return this.initialize(),this.fieldTypes.filter(e=>e!=="formly-template"&&!this.fieldGroupTypesSet.has(e)&&!this.fieldArrayTypesSet.has(e))}getGroupTypes(){return this.initialize(),this.fieldTypes.filter(e=>this.fieldGroupTypesSet.has(e))}getArrayTypes(){return this.initialize(),this.fieldTypes.filter(e=>this.fieldArrayTypesSet.has(e))}hasExistingType(e){return this.initialize(),!("type"in e)||typeof e.type=="string"&&this.fieldTypesSet.has(e.type)}isFieldGroup(e){return this.initialize(),this.fieldGroupTypesSet.has(this.getType(e))}isFieldArray(e){return this.initialize(),typeof e.type=="string"&&this.fieldArrayTypesSet.has(e.type)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var ze=(()=>{class i{selection=new Set;selectSubject=new Ce(null);onSelect=this.selectSubject.asObservable();ngOnDestroy(){this.selectSubject.complete()}has(e){return this.selection.has(e)}get(){return[...this.selection.keys()]}getLast(){return this.selectSubject.value}set(e){this.selection=new Set(e);let t=this.selectSubject.value;this.next(t&&!this.selection.has(t)?null:t)}replace(e,t){this.selection.has(e)&&(this.selection.delete(e),this.selection.add(t),this.next(t))}clear(){this.selection.size!==0&&this.selection.clear(),this.next(null)}select(e,t,n){if(e===null)return this.clear();if(t||n)return this.toggle(e);if(this.selection.has(e)&&this.selection.size===1)return this.next(e);this.selection.clear(),this.selection.add(e),this.next(e)}toggle(e){this.selection.has(e)?(this.selection.delete(e),this.next(null)):(this.selection.add(e),this.next(e))}next(e){this.selectSubject.next(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Ee=(()=>{class i{onChange;selection=s(ze);undoManager=s(Yn);formlyFieldTypes=s(ge);fields=[];change=new Ce([]);constructor(){this.onChange=this.change.asObservable(),this.undoManager.onChange.subscribe(e=>{this.selection.clear(),this.fields.splice(0),this.fields.push(...e),this.change.next(this.fields)})}ngOnDestroy(){this.change.complete()}setFields(e){this.undoManager.clear(),this.selection.clear(),this.fields=e,this.update()}getFields(){return this.fields}addFields(e){if(e.length===0)return;let t=this.selection.getLast(),n=new Pt().set(this.fields);t?this.formlyFieldTypes.isFieldGroup(t)?e.forEach((a,r)=>n.add(a,r,t??void 0)):this.formlyFieldTypes.isFieldArray(t)?typeof t.fieldArray=="object"?n.update(t.fieldArray,{type:"formly-group",fieldGroup:[...e,t.fieldArray]}):n.addToFieldArray(e.length>1?{type:"formly-group",fieldGroup:e}:e[0],t):e.reverse().forEach(a=>n.insert(a,t)):e.forEach(a=>n.add(a,this.fields.length)),this.update()}updateField(e,t){new Pt().set(this.fields).update(e,t),this.selection.replace(e,t),this.update()}moveField(e,t,n){let a=new Pt().set(this.fields);a.remove(e),!n||!this.formlyFieldTypes.isFieldArray(n)?a.add(e,t,n):a.addToFieldArray(e,n,!t),this.update()}moveToField(e,t,n=!0){if(this.formlyFieldTypes.isFieldGroup(t)){this.moveField(e,t.fieldGroup?.length??0,t);return}if(e!==t){let a=new Pt().set(this.fields);a.remove(e),a.insert(e,t,n),this.update()}}removeSelectedFields(){let e=this.getSelectedFields();if(e.length){let t=new Pt().set(this.fields);e.forEach(n=>t.remove(n)),this.selection.clear(),this.update()}}getSelectedFields(){return this.getSelectedFieldsRecursive(this.fields)}getSelectedFieldsRecursive(e){return e.flatMap(t=>{if(this.selection.has(t))return t;let n=(typeof t.fieldArray=="object"?[t.fieldArray]:[]).concat(t.fieldGroup||[]);return this.getSelectedFieldsRecursive(n)})}update(){this.undoManager.push(this.fields),this.change.next(this.fields)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();function pc(i,o){if(i&1&&(m(0,"div",2)(1,"div",3),C(2),c()()),i&2){let e=_();p(2),pe(e.warningMessage())}}var Ot=(()=>{class i{data=w.required();disabled=w(!1);formatter=w();validator=w();validChange=Y();warningMessage=j("");formControl=new pn("",{nonNullable:!0});id;static counter=0;destroyRef=s(fe);constructor(){this.id=`b-code-editor_${++i.counter}`}ngOnInit(){this.formControl.valueChanges.pipe(Q(this.destroyRef),bt(200)).subscribe(e=>{let t=this.validator();if(!t)return;let n=t(e);n.valid?(this.validChange.emit(e),this.warningMessage.set("")):(this.warningMessage.set(n.message),console.warn(n.message))})}ngOnChanges(e){if(e.data){let t=this.formatter();this.formControl.setValue(t?t(e.data.currentValue):e.data.currentValue)}e.disabled&&(e.disabled.currentValue?this.formControl.disable():this.formControl.enable())}getData(){return this.formControl.value}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["b-code-editor"]],inputs:{data:[1,"data"],disabled:[1,"disabled"],formatter:[1,"formatter"],validator:[1,"validator"]},outputs:{validChange:"validChange"},features:[$e],decls:3,vars:7,consts:[[1,"scroll"],["cdkTextareaAutosize","","spellcheck","false",3,"id","formControl"],[1,"warning-message"],[1,"warning-message_text"]],template:function(t,n){t&1&&(m(0,"div",0),F(1,"textarea",1),c(),E(2,pc,3,1,"div",2)),t&2&&(T("disabled",n.disabled()),p(),Xt("color",n.disabled()?"rgba(0, 0, 0, 0.5)":""),g("id",n.id)("formControl",n.formControl),p(),S(n.warningMessage()?2:-1))},dependencies:[st,cn,mn,un,Rs],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-width:0}.scroll[_ngcontent-%COMP%]{display:block;flex:1;border-radius:4px;border:1px solid gray;padding:6px;min-width:0;overflow:auto}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-corner{display:none}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:4px;background:#aaa}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:4px;background:#eee}.scroll.disabled[_ngcontent-%COMP%]{background-color:#00000008;border-color:#d3d3d3;cursor:text}textarea[_ngcontent-%COMP%]{resize:none;white-space:pre;field-sizing:content;width:auto;padding:0;margin:0;outline:0;border:0;min-width:100%;background-color:transparent}.warning-message[_ngcontent-%COMP%]{flex-shrink:0;position:relative;overflow:hidden;cursor:pointer;margin-top:.5em;border-radius:.5em;background-color:#f44336;height:2em;width:100%}.warning-message_text[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;width:100%;padding:.33em .43em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff}"],changeDetection:0})}return i})();var $s=(()=>{class i{FORMLY_DESIGNER_CLASS_PREFIX="formly-designer-class-prefix_";markField(e,t){e.className=(e.className?`${e.className} `:"")+`${this.FORMLY_DESIGNER_CLASS_PREFIX}${t}`}getIdFromElement(e){for(let t=0,n=e.classList.length;t<n;t++){let a=e.classList[t];if(a.startsWith(this.FORMLY_DESIGNER_CLASS_PREFIX))return a.replace(this.FORMLY_DESIGNER_CLASS_PREFIX,"")}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var En=(()=>{class i{fieldTypesReader=s(ge);validate(e){let t=new Map;return e.length>1&&this.validateField({fieldGroup:e},t),ut(e).forEach((n,a)=>{(a!==0||e.length>1||!this.fieldTypesReader.isFieldArray(n))&&this.validateField(n,t)}),t}validateField(e,t){!this.fieldTypesReader.hasExistingType(e)&&!`${e.type}`.startsWith("formly-editor-")&&t.set(e,`Unknown field type '${e.type}'`),e.fieldGroup?.length&&e.fieldGroup?.filter(n=>!n.key&&this.fieldTypesReader.isFieldArray(n))?.forEach(n=>t.set(n,"Array in a group should have a key"))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var Sn=(()=>{class i{fieldTypesReader=s(ge);create(e,t=0){let n=this.createRecursive(e,t);return t?n:Array.isArray(n)?[]:{}}createRecursive(e,t){if(e.some(l=>l.key)){let l={};return e.forEach(d=>{let u=this.createRecursiveForField(d,t);d.key&&u&&(l[`${d.key}`]=u)}),l}let n=null,a=null,r=!0;for(let l of e){let d=this.createRecursiveForField(l,t);d!==null&&typeof d=="object"&&(Array.isArray(d)?a=d:(r=!1,n??={},Object.assign(n,d)))}return r?a:n}createRecursiveForField(e,t){if(this.fieldTypesReader.isFieldGroup(e)&&e.fieldGroup)return this.createRecursive(e.fieldGroup,t);if(this.fieldTypesReader.isFieldArray(e)){if(t===0)return[];let n=typeof e.fieldArray=="object"?e.fieldArray.fieldGroup:null;return n?[this.createRecursive(n,t)]:[null]}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var to=(()=>{class i{fieldTypesReader=s(ge);add(e){return this.addRecursive(e),e}addRecursive(e,t){e.forEach(n=>{this.addRecursiveForField(n)}),t&&t.type!=="page"&&!t.fieldGroup?.length&&e.push({type:"formly-editor-drop-container",props:{message:t?.type}})}addRecursiveForField(e){if(this.fieldTypesReader.isFieldGroup(e))return e.fieldGroup??=[],this.addRecursive(e.fieldGroup,e);this.fieldTypesReader.isFieldArray(e)&&typeof e.fieldArray=="object"&&(e.fieldArray.fieldGroup??=[],this.addRecursive(e.fieldArray.fieldGroup,e.fieldArray))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var uc=["overlay"];function fc(i,o){if(i&1){let e=K();m(0,"div",5),h("cdkDragMoved",function(n){let a=A(e).$implicit,r=_();return P(r.dragMove(a,n))})("cdkDragEnded",function(n){let a=A(e).$implicit,r=_();return P(r.drop(a.field,n))})("click",function(n){let a=A(e).$implicit,r=_();return P(r.handleClick(a.field,n))}),c()}if(i&2){let e=o.$implicit,t=o.$index,n=_();me("overlay_field"+(n.isSelected(e.field)?"--selected":"")),Xt("left",e.rect.left+"px")("top",e.rect.top+"px")("right",e.rect.right+"px")("bottom",e.rect.bottom+"px"),H("data-idx",t)}}var Ws=(()=>{class i{overlayFields=j([]);form=new or({});formlyFields=j([]);model=j(void 0);elementRef=s(k);changeDetectorRef=s($);injector=s(G);dataManager=s(Ee);selection=s(ze);marker=s($s);dataValidator=s(En);initialValueFactory=s(Sn);dropContainerManager=s(to);formRenderConfig=s(Ze).formRenderConfig;destroyRef=s(fe);overlay=te.required("overlay");renderer=s(ye);dropIndex;dropSide="top";ngOnInit(){Ca(window,"resize").pipe(Q(this.destroyRef),bt(200)).subscribe(()=>this.render(this.dataManager.getFields())),this.dataManager.onChange.subscribe(e=>this.render(e)),this.selection.onSelect.subscribe(()=>this.changeDetectorRef.detectChanges())}isSelected(e){return this.selection.has(e)}handleClick(e,t){this.selection.select(e,t.ctrlKey,t.shiftKey)}dragMove(e,t){(this.selection.get().length!==1||!this.selection.has(e.field))&&this.selection.set([e.field]);let n=this.overlay().nativeElement.getBoundingClientRect(),a={x:(t.event.pageX??t.pointerPosition.x)-n.x,y:(t.event.pageY??t.pointerPosition.y)-n.y},r=this.overlayFields().slice().reverse().find(d=>a.x>=d.rect.left&&a.x<=n.width-d.rect.right&&a.y>=d.rect.top&&a.y<=n.height-d.rect.bottom),l=r?.index!==e.index?r?.index:void 0;this.renderDropPreview(l,!r||a.y<=(r.rect.top-r.rect.bottom+n.height)/2?"top":"bottom")}drop(e,t){this.renderDropPreview(void 0,"top"),t.source.reset();let n=document.elementFromPoint(t.dropPoint.x,t.dropPoint.y);if(n?.parentElement!==this.overlay().nativeElement)return;let a=this.overlay().nativeElement.getBoundingClientRect(),r=parseInt(n.dataset.idx),l=this.overlayFields()[r].rect,d=this.overlayFields()[r].field,u=t.dropPoint.y-a.top>(l.top-l.bottom+a.height)/2;this.dataManager.moveToField(e,d,u)}overlayFieldTrackBy(e,t){return t.field}render(e){let t=new Map(ut(e).map((r,l)=>[`${l}`,r])),n=structuredClone(e),a=this.dataValidator.validate(n);ut(n).forEach((r,l)=>{this.formRenderConfig.editFormFieldConverter(r),this.marker.markField(r,`${l}`);let d=a.get(r);d&&this.markInvalidField(r,d)}),this.clearForm(this.initialValueFactory.create(n,1)),this.formlyFields.set(this.dropContainerManager.add(n)),this.changeDetectorRef.detectChanges(),this.overlayFields().length?Ia(this.injector,()=>qe(()=>this.renderOverlayFields(t))):requestAnimationFrame(()=>this.renderOverlayFields(t))}markInvalidField(e,t){e.type="formly-editor-warning",e.props??={},e.props.message=t,e.fieldArray&&delete e.fieldArray,e.fieldGroup&&delete e.fieldGroup}clearForm(e){Object.keys(this.form.controls).forEach(t=>this.form.removeControl(t)),this.form.reset(e),this.model.set(e)}renderOverlayFields(e){let t=this.elementRef.nativeElement.getBoundingClientRect();this.overlayFields.set(Object.values(this.elementRef.nativeElement.getElementsByTagName("formly-field")).slice(1).map((n,a)=>({index:a,rect:this.calculateRect(n,t),field:e.get(this.marker.getIdFromElement(n))})).filter(n=>n.field))}calculateRect(e,t){let n={left:Number.MAX_VALUE,top:Number.MAX_VALUE,right:0,bottom:0};return[e].concat(Object.values(e.querySelectorAll("*"))).forEach(a=>{let r=a.getBoundingClientRect();r.width&&r.height&&(n.left=Math.min(r.left,n.left),n.top=Math.min(r.top,n.top),n.right=Math.max(r.right,n.right),n.bottom=Math.max(r.bottom,n.bottom))}),{left:Math.max(n.left-t.left,0),top:Math.max(n.top-t.top,0),right:Math.min(t.right-n.right,t.width),bottom:Math.min(t.bottom-n.bottom,t.height)}}renderDropPreview(e,t){(this.dropIndex!==e||this.dropSide!==t)&&(this.dropIndex!==void 0&&this.renderer.removeStyle(this.overlay().nativeElement.children[this.dropIndex],`border-${this.dropSide}`),this.dropIndex=e,this.dropSide=t,e!==void 0&&this.renderer.setStyle(this.overlay().nativeElement.children[e],`border-${t}`,"2px solid black"))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-result-form"]],viewQuery:function(t,n){t&1&&he(n.overlay,uc,5),t&2&&ie()},decls:6,vars:4,consts:[["overlay",""],[3,"formGroup"],["inert","true",3,"fields","form","model"],[1,"overlay"],["cdkDrag","","cdkDragBoundary",".overlay",3,"class","left","top","right","bottom"],["cdkDrag","","cdkDragBoundary",".overlay",3,"cdkDragMoved","cdkDragEnded","click"]],template:function(t,n){t&1&&(m(0,"form",1),F(1,"formly-form",2),c(),m(2,"div",3,0),He(4,fc,1,11,"div",4,n.overlayFieldTrackBy,!0),c()),t&2&&(g("formGroup",n.form),p(),g("fields",n.formlyFields())("form",n.form)("model",n.model()),p(3),Ge(n.overlayFields()))},dependencies:[st,wi,Di,fn,hn,_n],styles:["[_nghost-%COMP%]{position:relative;display:block}.overlay[_ngcontent-%COMP%]{position:absolute;z-index:1;cursor:pointer;inset:0;opacity:.25}.overlay_field[_ngcontent-%COMP%], .overlay_field--selected[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box}.overlay_field--selected[_ngcontent-%COMP%]{opacity:1;background-color:gray}.overlay[_ngcontent-%COMP%]   .cdk-drag-dragging[_ngcontent-%COMP%]{opacity:.4;z-index:1}"],changeDetection:0})}return i})();var ca=(i,o,e)=>({parent:i,array:o,index:e}),hc=(i,o)=>({parent:i,array:o,index:0}),gc=(i,o)=>({array:i,index:o}),_c=()=>[];function Qs(i,o){return this.trackBy()(i,o)}function bc(i,o){i&1&&Qt(0)}function vc(i,o){if(i&1&&(m(0,"div",8),C(1),c()),i&2){let e=o.text;p(),pe(e||"")}}function yc(i,o){if(i&1){let e=K();m(0,"div",9),h("cdkDropListDropped",function(n){A(e);let a=_();return P(a.handleDropped(n))}),F(1,"div",10),c()}if(i&2){let e=_();g("cdkDropListData",xo(1,gc,e.siblings(),e.index()))}}function xc(i,o){if(i&1){let e=K();m(0,"matx-drag-drop-tree-node",12),h("dropped",function(n){A(e);let a=_(2);return P(a.handleDropped(n))}),c()}if(i&2){let e=o.$index,t=_(2);g("headerTemplate",t.headerTemplate())("trackBy",t.trackBy())("parent",t.siblings()[t.index()])("siblings",t.siblings()[t.index()].childNodes||si(5,_c))("index",e)}}function Cc(i,o){if(i&1&&He(0,xc,1,6,"matx-drag-drop-tree-node",11,Qs,!0),i&2){let e=_();Ge(e.siblings()[e.index()].childNodes)}}var Dc=["headerTemplate"];function Mc(i,o){if(i&1){let e=K();m(0,"matx-drag-drop-tree-node",2),h("dropped",function(n){A(e);let a=_();return P(a.handleDropped(n))}),c()}if(i&2){let e=o.$index,t=_();g("headerTemplate",t.headerTemplate())("siblings",t.nodes())("index",e)("trackBy",t.trackBy())}}var wc=(()=>{class i{siblings=w([]);parent=w();index=w.required();headerTemplate=w();trackBy=w(e=>e);dropped=Y();dragging=j(!1);changeDetectorRef=s($);handleDropped(e){e.isPointerOverContainer&&this.dropped.emit(e)}handleDragStarted(){this.dragging.set(!0),this.changeDetectorRef.detectChanges()}handleDragEnded(){this.dragging.set(!1)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-drag-drop-tree-node"]],inputs:{siblings:[1,"siblings"],parent:[1,"parent"],index:[1,"index"],headerTemplate:[1,"headerTemplate"],trackBy:[1,"trackBy"]},outputs:{dropped:"dropped"},decls:11,vars:24,consts:[["defaultHeaderTemplate",""],[1,"container"],["cdkDropList","",1,"drop-after",3,"cdkDropListDropped","cdkDropListData"],[1,"drop-after_border"],["cdkDropList","","cdkDropListSortingDisabled","",3,"cdkDropListDropped","cdkDropListData"],["cdkDrag","",1,"content",3,"cdkDragStarted","cdkDragEnded","cdkDragData"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["cdkDropList","",1,"drop-before",3,"cdkDropListData"],[1,"header"],["cdkDropList","",1,"drop-before",3,"cdkDropListDropped","cdkDropListData"],[1,"drop-before_border"],[3,"headerTemplate","trackBy","parent","siblings","index"],[3,"dropped","headerTemplate","trackBy","parent","siblings","index"]],template:function(t,n){if(t&1&&(m(0,"div",1)(1,"div",2),h("cdkDropListDropped",function(r){return n.handleDropped(r)}),F(2,"div",3),c(),m(3,"div",4),h("cdkDropListDropped",function(r){return n.handleDropped(r)}),m(4,"div",5),h("cdkDragStarted",function(){return n.handleDragStarted()})("cdkDragEnded",function(){return n.handleDragEnded()}),Fe(5,bc,1,0,"ng-container",6)(6,vc,2,1,"ng-template",null,0,Zt),c(),F(8,"div"),c(),E(9,yc,2,4,"div",7),E(10,Cc,2,0),c()),t&2){let a=Ae(7);p(),g("cdkDropListData",li(9,ca,n.parent(),n.siblings(),n.index()+1)),p(2),g("cdkDropListData",n.siblings()[n.index()].childNodes?xo(13,hc,n.siblings()[n.index()],n.siblings()[n.index()].childNodes):li(16,ca,n.parent(),n.siblings(),n.index()+1)),p(),g("cdkDragData",li(20,ca,n.parent(),n.siblings(),n.index())),p(),g("ngTemplateOutlet",n.headerTemplate()?n.headerTemplate():a)("ngTemplateOutletContext",n.siblings()[n.index()]),p(3),me("drop-after_border"+(n.siblings()[n.index()].childNodes?"":"--disabled")),p(),S(!n.parent()&&!n.index()?9:-1),p(),S(n.dragging()?-1:10)}},dependencies:[i,ci,zn,Ri,_n],styles:[".container[_ngcontent-%COMP%]{position:relative}.container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{margin-left:20px}.content[_ngcontent-%COMP%]{position:relative;cursor:pointer;min-width:10px}.header[_ngcontent-%COMP%]{padding:5px}.drop-before[_ngcontent-%COMP%], .drop-after[_ngcontent-%COMP%]{position:absolute;left:0;right:0}.drop-before_border[_ngcontent-%COMP%], .drop-before_border--disabled[_ngcontent-%COMP%], .drop-after_border[_ngcontent-%COMP%], .drop-after_border--disabled[_ngcontent-%COMP%]{height:100%;border-bottom:1px solid transparent}.drop-before[_ngcontent-%COMP%]{top:-12px;height:12px}.drop-after[_ngcontent-%COMP%]{top:0;left:-20px;bottom:0}.drop-after_border[_ngcontent-%COMP%]{margin-left:20px}.cdk-drop-list-dragging[_ngcontent-%COMP%]:hover   .drop-before_border[_ngcontent-%COMP%], .cdk-drop-list-dragging[_ngcontent-%COMP%]:hover   .drop-after_border[_ngcontent-%COMP%], .cdk-drop-list-dragging[_ngcontent-%COMP%]:hover   .drop-after_border--disabled[_ngcontent-%COMP%]{border-color:#555}.cdk-drag-placeholder[_ngcontent-%COMP%]{display:none}"],changeDetection:0})}return i})(),Ys=(()=>{class i{nodes=w([]);trackBy=w(function(e,t){return e});dropped=Y();headerTemplate=di("headerTemplate");handleDropped(e){let t=e.item.data.array,n=e.item.data.index,a=e.container.data.array,r=e.container.data.index;if(!this.includesRecursive(t[n],a)){if(a===t&&(r=n<r?r-1:r,n===r))return;this.dropped.emit({currentParent:e.item.data.parent,currentArray:t,currentIndex:n,targetParent:e.container.data.parent,targetArray:a,targetIndex:r})}}includesRecursive(e,t){return e.childNodes===t||e.childNodes?.some(n=>this.includesRecursive(n,t))||!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-drag-drop-tree"]],contentQueries:function(t,n,a){t&1&&Yt(a,n.headerTemplate,Dc,5),t&2&&ie()},inputs:{nodes:[1,"nodes"],trackBy:[1,"trackBy"]},outputs:{dropped:"dropped"},decls:4,vars:0,consts:[["cdkDropListGroup","",1,"container"],[3,"headerTemplate","siblings","index","trackBy"],[3,"dropped","headerTemplate","siblings","index","trackBy"]],template:function(t,n){t&1&&(m(0,"div")(1,"div",0),He(2,Mc,1,4,"matx-drag-drop-tree-node",1,Qs,!0),c()()),t&2&&(p(2),Ge(n.nodes()))},dependencies:[zn,Pr,wc],styles:[".container[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0})}return i})();var kc=()=>[];function Ec(i,o){if(i&1&&(m(0,"span",6),C(1," \xA0 "),m(2,"mat-icon",7),C(3,"warning"),c()()),i&2){let e=_().data,t=_();p(2),g("title",t.getWarning(e))}}function Sc(i,o){if(i&1){let e=K();m(0,"div",2),h("click",function(n){let a=A(e).data,r=_();return P(r.handleClick(a,n))}),m(1,"strong",3),C(2),c(),m(3,"span",4),C(4),c(),m(5,"em",5),C(6),c(),E(7,Ec,4,1,"span",6),c()}if(i&2){let e=o.data,t=_();me("tree-node-header"+(t.isSelected(e)?"--selected":"")),p(2),ee("[",t.getFieldType(e),"]"),p(2),ee(" ",e==null?null:e.key," "),p(2),pe(e==null||e.props==null?null:e.props.label),p(),S(t.getWarning(e)?7:-1)}}var Xs=(()=>{class i{nodes;fieldTypes=[];formlyFieldTypes=s(ge);dataManager=s(Ee);dataValidator=s(En);selection=s(ze);validationMessages;changeDectorRef=s($);ngOnInit(){this.fieldTypes=this.formlyFieldTypes.get(),this.nodes=this.dataManager.onChange.pipe(V(e=>(this.validationMessages=this.dataValidator.validate(e),this.toDragDropNodes(e)))),this.selection.onSelect.subscribe(()=>this.changeDectorRef.detectChanges())}handleDropped(e){this.dataManager.moveField(e.currentArray[e.currentIndex].data,e.targetIndex,e.targetParent?.data)}handleClick(e,t){this.selection.select(e,t.ctrlKey,t.shiftKey)}isSelected(e){return this.selection.has(e)}getFieldType(e){return this.formlyFieldTypes.getType(e)}treeTrackBy(e,t){return t.data}getWarning(e){return this.validationMessages?.get(e)}toDragDropNodes(e){return e.map(t=>this.formlyFieldTypes.isFieldGroup(t)?{data:t,childNodes:this.toDragDropNodes(t.fieldGroup||[])}:this.formlyFieldTypes.isFieldArray(t)?{data:t,childNodes:typeof t.fieldArray=="object"?this.toDragDropNodes([t.fieldArray]):[]}:{data:t})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-result-structure"]],decls:4,vars:5,consts:[["headerTemplate",""],[1,"tree",3,"dropped","nodes","trackBy"],[3,"click"],["title","type"],["title","key"],["title","label"],[1,"icon-container"],["color","warn",3,"title"]],template:function(t,n){t&1&&(m(0,"matx-drag-drop-tree",1),yt(1,"async"),h("dropped",function(r){return n.handleDropped(r)}),Fe(2,Sc,8,6,"ng-template",null,0,Zt),c()),t&2&&g("nodes",xt(1,2,n.nodes)??si(4,kc))("trackBy",n.treeTrackBy)},dependencies:[Ys,Qe,Ct],styles:[".tree-node-header[_ngcontent-%COMP%], .tree-node-header--selected[_ngcontent-%COMP%]{padding:5px;border-radius:4px;background-color:#fffc}.tree-node-header[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .tree-node-header--selected[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:gray}.tree-node-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%], .tree-node-header--selected[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:inline-block;width:30px;position:relative}.tree-node-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .tree-node-header--selected[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;position:absolute;top:1px;right:-5px}.tree-node-header--selected[_ngcontent-%COMP%], .tree-node-header--selected--selected[_ngcontent-%COMP%]{background-color:#f0f0f0}.tree[_ngcontent-%COMP%]   .tree-node-header[_ngcontent-%COMP%]{background:none}"],changeDetection:0})}return i})();var Zs=(()=>{class i{form=new Mi({});formlyOptions={};formlyFields=[];model;dataManager=s(Ee);initialValueFactory=s(Sn);testValueManager=s(kn);formRenderConfig=s(Ze).formRenderConfig;destroyRef=s(fe);fields=[];constructor(){this.fields=this.dataManager.getFields(),this.reset()}ngAfterViewInit(){this.testValueManager.set(this.model),this.form.valueChanges.pipe(Q(this.destroyRef)).subscribe(()=>this.testValueManager.set(this.model))}reset(){let e=this.initialValueFactory.create(this.fields);this.model=e,this.form.reset(e);let t=structuredClone(this.fields);ut(t).forEach(n=>this.formRenderConfig.testFormFieldConverter(n)),this.formlyFields=t,this.testValueManager.set(this.model)}validate(){this.form.markAsDirty(),this.form.markAllAsTouched()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-result-test"]],decls:6,vars:4,consts:[[3,"form","fields","options","model"],[1,"button-container"],["mat-stroked-button","",3,"click"]],template:function(t,n){t&1&&(F(0,"formly-form",0),m(1,"div",1)(2,"button",2),h("click",function(){return n.reset()}),C(3,"Clear"),c(),m(4,"button",2),h("click",function(){return n.validate()}),C(5,"Validate"),c()()),t&2&&g("form",n.form)("fields",n.formlyFields)("options",n.formlyOptions)("model",n.model)},dependencies:[Be,hn],styles:[".button-container[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0})}return i})();function Tc(i,o){i&1&&F(0,"formly-designer-result-structure")}function Fc(i,o){if(i&1&&F(0,"b-code-editor",5),i&2){let e=_();g("disabled",!0)("data",e.data())("formatter",e.formatter)}}function Rc(i,o){i&1&&F(0,"formly-designer-result-form")}function Ic(i,o){i&1&&F(0,"formly-designer-result-test")}var Js=(()=>{class i{mode=en("select");data=j("");formatter=e=>{let t=Tt(e);return t.success?lt(t.result):e};dataManager=s(Ee);ngAfterContentInit(){this.dataManager.onChange.subscribe(e=>this.data.set(JSON.stringify(e)))}setMode(e){this.mode.set(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-result"]],inputs:{mode:[1,"mode"]},outputs:{mode:"modeChange"},decls:9,vars:5,consts:[["headerTitle","Form"],["icon","highlight_alt","tooltip","Select fields",3,"click","selected"],["icon","density_small","tooltip","Structure",3,"click","selected"],["icon","code","tooltip","View code",3,"click","selected"],["icon","play_arrow","tooltip","Test form",3,"click","selected"],[3,"disabled","data","formatter"]],template:function(t,n){if(t&1&&(m(0,"matx-panel",0)(1,"matx-panel-header-button",1),h("click",function(){return n.setMode("select")}),c(),m(2,"matx-panel-header-button",2),h("click",function(){return n.setMode("structure")}),c(),m(3,"matx-panel-header-button",3),h("click",function(){return n.setMode("code")}),c(),m(4,"matx-panel-header-button",4),h("click",function(){return n.setMode("test")}),c(),E(5,Tc,1,0,"formly-designer-result-structure")(6,Fc,1,3,"b-code-editor",5)(7,Rc,1,0,"formly-designer-result-form")(8,Ic,1,0,"formly-designer-result-test"),c()),t&2){let a;p(),g("selected",n.mode()==="select"),p(),g("selected",n.mode()==="structure"),p(),g("selected",n.mode()==="code"),p(),g("selected",n.mode()==="test"),p(),S((a=n.mode())==="structure"?5:a==="code"?6:a==="select"?7:a==="test"?8:-1)}},dependencies:[Ws,Xs,Zs,At,Mn,Ot],encapsulation:2,changeDetection:0})}return i})();var no=(()=>{class i{fieldTypesReader=s(ge);properties;propertiesByType;constructor(){let e=s(Ze);this.properties=e.properties,this.propertiesByType=e.propertiesByType}getFields(e){let t=[];return this.propertiesByType[e]||console.warn(`Editor config reader: No fields for type ${e} found`),(this.propertiesByType[e]??[]).forEach(n=>{if(!this.properties[n]){console.warn(`Editor config reader: Field with key ${n} for type ${e} not found`);return}let a=structuredClone(this.properties[n]);a.key==="type"&&!a.props?.options&&(a.props??={},a.props.options=this.getOptions(e).filter(r=>this.propertiesByType[r.value])),a.key==="props.menu"&&!a.props?.options&&(a.props??={}),t.push(a)}),[{type:"formly-editor-group",fieldGroup:t}]}getOptions(e){return this.fieldTypesReader.isFieldArray({type:e})?this.fieldTypesReader.getArrayTypes().map(t=>({value:t,label:t})):this.fieldTypesReader.isFieldGroup({type:e})?this.fieldTypesReader.getGroupTypes().map(t=>({value:t,label:t})):this.fieldTypesReader.getStandardTypes().map(t=>({value:t,label:t}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var io=(()=>{class i{form=new Mi({});fields=j([]);formField=j(null);editorFieldsReader=s(no);fieldTypesReader=s(ge);selectionManager=s(ze);dataManager=s(Ee);destroyRef=s(fe);field;ngOnInit(){this.form.valueChanges.pipe(Q(this.destroyRef),bt(200)).subscribe(()=>this.save()),this.selectionManager.onSelect.pipe(Q(this.destroyRef)).subscribe(e=>{this.field!==e&&e!==null&&(this.save(),this.field=e,this.updateForm(e),this.setValue(e))})}save(){if(this.form.pristine)return;let e=this.formField();if(this.field&&e){this.form.markAsPristine();let t=this.field;this.field=structuredClone(e),ki(this.field),this.dataManager.updateField(t,this.field),t.type!==this.field.type&&this.updateForm(this.field)}}setValue(e){e=structuredClone(e),e.props??={},this.formField.set(e)}updateForm(e){Object.keys(this.form.controls).forEach(t=>this.form.removeControl(t)),this.fields.set(this.editorFieldsReader.getFields(this.fieldTypesReader.getType(e)))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-field-editor-edit"]],decls:3,vars:4,consts:[[3,"formGroup"],[3,"fields","form","model"]],template:function(t,n){t&1&&(m(0,"form",0)(1,"matx-full-width-form-fields"),F(2,"formly-form",1),c()()),t&2&&(g("formGroup",n.form),p(2),g("fields",n.fields())("form",n.form)("model",n.formField()))},dependencies:[st,wi,Di,fn,hn,Qi],encapsulation:2,changeDetection:0})}return i})();var el=_l(bl());var oo=(()=>{class i{data=en("");formatter=e=>{let t=Tt(e);return t.success?lt(t.result):e};validator=e=>this.validate(e);dataManager=s(Ee);fieldTypes=s(ge);selection=s(ze);destroyRef=s(fe);jsonEditorChild=te.required(Ot);field;ngOnInit(){this.selection.onSelect.pipe(Q(this.destroyRef)).subscribe(e=>{this.field!==e&&e!==null&&(this.save(),this.field=e,(e.fieldArray||e.fieldGroup)&&(e=L({},e),delete e.fieldGroup,delete e.fieldArray),this.data.set(JSON.stringify(e)))})}save(){let e=this.jsonEditorChild().getData();if(!e||!this.validator(e).valid)return;let t=this.field;this.field=el.default.parse(e),this.field.fieldGroup=t.fieldGroup,this.field.fieldArray=t.fieldArray,ki(this.field),this.dataManager.updateField(t,this.field)}validate(e){let t=Ft(e);if(!t.success||!(t.result[0].fieldArray||t.result[0].fieldGroup))return{valid:t.success,message:t.message};let n=t.result[0];return n.fieldArray&&!this.fieldTypes.isFieldArray(n)?{valid:!1,message:`Can not add /fieldArray to field type '${this.fieldTypes.getType(n)}'.`}:n.fieldGroup&&!this.fieldTypes.isFieldGroup(n)?{valid:!1,message:`Can not add /fieldGroup to field type '${this.fieldTypes.getType(n)}'.`}:{valid:!1,message:"Add fields to /fieldArray or /fieldGroup with 'Add field'."}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-field-editor-code"]],viewQuery:function(t,n){t&1&&he(n.jsonEditorChild,Ot,5),t&2&&ie()},inputs:{data:[1,"data"]},outputs:{data:"dataChange"},decls:1,vars:3,consts:[[3,"validChange","data","formatter","validator"]],template:function(t,n){t&1&&(m(0,"b-code-editor",0),h("validChange",function(){return n.save()}),c()),t&2&&g("data",n.data())("formatter",n.formatter)("validator",n.validator)},dependencies:[Ot],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1;overflow:hidden}b-code-editor[_ngcontent-%COMP%]{flex:1;overflow:hidden}"],changeDetection:0})}return i})();var tl=(()=>{class i{_animationsDisabled=le();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&T("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Ac=["*",[["mat-option"],["ng-container"]]],Pc=["*","mat-option, ng-container"],Oc=["text"],Nc=[[["mat-icon"]],"*"],Lc=["mat-icon","*"];function Bc(i,o){if(i&1&&F(0,"mat-pseudo-checkbox",1),i&2){let e=_();g("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function zc(i,o){if(i&1&&F(0,"mat-pseudo-checkbox",3),i&2){let e=_();g("disabled",e.disabled)}}function jc(i,o){if(i&1&&(m(0,"span",4),C(1),c()),i&2){let e=_();p(),ee("(",e.group.label,")")}}var ao=new D("MAT_OPTION_PARENT_COMPONENT"),ro=new D("MatOptgroup"),Yv=(()=>{class i{label;disabled=!1;_labelId=s(se).getId("mat-optgroup-label-");_inert;constructor(){let e=s(ao,{optional:!0});this._inert=e?.inertGroups??!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-optgroup"]],hostAttrs:[1,"mat-mdc-optgroup"],hostVars:3,hostBindings:function(t,n){t&2&&H("role",n._inert?null:"group")("aria-disabled",n._inert?null:n.disabled.toString())("aria-labelledby",n._inert?null:n._labelId)},inputs:{label:"label",disabled:[2,"disabled","disabled",I]},exportAs:["matOptgroup"],features:[W([{provide:ro,useExisting:i}])],ngContentSelectors:Pc,decls:5,vars:4,consts:[["role","presentation",1,"mat-mdc-optgroup-label",3,"id"],[1,"mdc-list-item__primary-text"]],template:function(t,n){t&1&&(J(Ac),De(0,"span",0)(1,"span",1),C(2),R(3),Re()(),R(4,1)),t&2&&(T("mdc-list-item--disabled",n.disabled),_e("id",n._labelId),p(2),ee("",n.label," "))},styles:[`.mat-mdc-optgroup {
  color: var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));
  line-height: var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));
  font-weight: var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight));
}

.mat-mdc-optgroup-label {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  outline: none;
}
.mat-mdc-optgroup-label.mdc-list-item--disabled {
  opacity: 0.38;
}
.mat-mdc-optgroup-label .mdc-list-item__primary-text {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  white-space: normal;
  color: inherit;
}
`],encapsulation:2,changeDetection:0})}return i})(),Xn=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},Tn=(()=>{class i{_element=s(k);_changeDetectorRef=s($);_parent=s(ao,{optional:!0});group=s(ro,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(se).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new q;_text;_stateChanges=new b;constructor(){let e=s(Ke);e.load(bn),e.load(Ka),this._signalDisableRipple=!!this._parent&&ai(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!We(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Xn(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&Me(Oc,7),t&2){let a;O(a=N())&&(n._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&h("click",function(){return n._selectViaInteraction()})("keydown",function(r){return n._handleKeydown(r)}),t&2&&(_e("id",n.id),H("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),T("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",I]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Lc,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(J(Nc),E(0,Bc,1,2,"mat-pseudo-checkbox",1),R(1),m(2,"span",2,0),R(4,1),c(),E(5,zc,1,1,"mat-pseudo-checkbox",3),E(6,jc,2,1,"span",4),F(7,"div",5)),t&2&&(S(n.multiple?0:-1),p(5),S(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),p(),S(n.group&&n.group._inert?6:-1),p(),g("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[tl,Ii],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function nl(i,o,e){if(e.length){let t=o.toArray(),n=e.toArray(),a=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===n[a]&&a++;return a}return 0}function il(i,o,e,t){return i<e?i:i+o>e+t?Math.max(0,i-t+o):e}var ol=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({imports:[Ne]})}return i})();var pa=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({imports:[Gr,ol,Tn,Ne]})}return i})();var Hc=["panel"],Gc=["*"];function Uc(i,o){if(i&1&&(De(0,"div",1,0),R(2),Re()),i&2){let e=o.id,t=_();me(t._classList),T("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),_e("id",t.id),H("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var ua=class{source;option;constructor(o,e){this.source=o,this.option=e}},al=new D("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),rl=(()=>{class i{_changeDetectorRef=s($);_elementRef=s(k);_defaults=s(al);_animationsDisabled=le();_activeOptionChanges=Se.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new q;opened=new q;closed=new q;optionActivated=new q;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(se).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(we);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Za(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new ua(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(t,n,a){if(t&1&&vt(a,Tn,5)(a,ro,5),t&2){let r;O(r=N())&&(n.options=r),O(r=N())&&(n.optionGroups=r)}},viewQuery:function(t,n){if(t&1&&Me(nt,7)(Hc,5),t&2){let a;O(a=N())&&(n.template=a.first),O(a=N())&&(n.panel=a.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",I],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",I],requireSelection:[2,"requireSelection","requireSelection",I],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",I],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",I]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[W([{provide:ao,useExisting:i}])],ngContentSelectors:Gc,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,n){t&1&&(J(),oi(0,Uc,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})();var qc={provide:tr,useExisting:Fa(()=>ha),multi:!0};var Kc=new D("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(G);return()=>gi(i)}}),ha=(()=>{class i{_environmentInjector=s(Ra);_element=s(k);_injector=s(G);_viewContainerRef=s(rt);_zone=s(U);_changeDetectorRef=s($);_dir=s(Oe,{optional:!0});_formField=s(Dn,{optional:!0,host:!0});_viewportRuler=s(nn);_scrollStrategy=s(Kc);_renderer=s(ye);_animationsDisabled=le();_defaults=s(al,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new b;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=Se.EMPTY;_breakpointObserver=s(bi);_handsetLandscapeSubscription=Se.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new b;_overlayPanelClass=pi(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&xi(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Te(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(ue(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(ue(()=>this._overlayAttached)):z()).pipe(V(e=>e instanceof Xn?e:null))}optionSelections=Wt(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(re(e),je(()=>Te(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(je(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new _t(e=>{let t=a=>{let r=ot(a),l=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,d=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&r!==this._element.nativeElement&&!this._hasFocus()&&(!l||!l.contains(r))&&(!d||!d.contains(r))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(r)&&e.next(a)},n=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{n.forEach(a=>a())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,n=t.keyCode,a=We(t);if(n===27&&!a&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&n===13&&this.panelOpen&&!a)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let r=this.autocomplete._keyManager.activeItem,l=n===38||n===40;n===9||l&&!a&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(l||this.autocomplete._keyManager.activeItem!==r)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,n=t.value;if(t.type==="number"&&(n=n==""?null:parseFloat(n)),this._previousValue!==n){if(this._previousValue=n,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(n),!n)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let a=this.autocomplete.options?.find(r=>r.selected);if(a){let r=this._getDisplayValue(a.value);n!==r&&a.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let a=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(a)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return tn()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new _t(n=>{qe(()=>{n.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Ie(()=>this._positionStrategy.reapplyLastPosition()),wa(0))??z();return Te(e,t).pipe(je(()=>this._zone.run(()=>{let n=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),n!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),ve(1)).subscribe(n=>this._setValueAndClose(n))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,n=e?e.source:this._pendingAutoselectedOption;n?(this._clearPreviousSelectedOption(n),this._assignOptionValue(n.value),this._onChange(n.value),t._emitSelectEvent(n),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(n=>{n!==e&&n.selected&&n.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;wo(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Mt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Et(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(vi.HandsetLandscape).subscribe(a=>{a.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let n=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&n!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!We(e)||e.keyCode===38&&We(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new kt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=_i(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],n=this._aboveClass,a=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:n},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:n}],r;this.position==="above"?r=a:this.position==="below"?r=t:r=[...t,...a],e.withPositions(r)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let n=0;n<e.options.length;n++)if(!e.options.get(n).disabled){t=n;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,n=nl(e,t.options,t.optionGroups);if(e===0&&n===1)t._setScrollTop(0);else if(t.panel){let a=t.options.toArray()[e];if(a){let r=a._getHostElement(),l=il(r.offsetTop,r.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(l)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&xi(this._trackedModal,"aria-owns",t),wo(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;xi(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,n){t&1&&h("focusin",function(){return n._handleFocus()})("blur",function(){return n._onTouched()})("input",function(r){return n._handleInput(r)})("keydown",function(r){return n._handleKeydown(r)})("click",function(){return n._handleClick()}),t&2&&H("autocomplete",n.autocompleteAttribute)("role",n.autocompleteDisabled?null:"combobox")("aria-autocomplete",n.autocompleteDisabled?null:"list")("aria-activedescendant",n.panelOpen&&n.activeOption?n.activeOption.id:null)("aria-expanded",n.autocompleteDisabled?null:n.panelOpen.toString())("aria-controls",n.autocompleteDisabled||!n.panelOpen||n.autocomplete==null?null:n.autocomplete.id)("aria-haspopup",n.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",I]},exportAs:["matAutocompleteTrigger"],features:[W([qc]),$e]})}return i})(),sl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=Z({type:i});static \u0275inj=X({imports:[St,pa,ui,pa,Ne]})}return i})();function Wc(i,o){if(i&1){let e=K();m(0,"mat-option",6),h("click",function(){A(e);let n=_();return P(n.handleClick())}),C(1),c()}if(i&2){let e=o.$implicit;g("value",e),p(),ee(" ",e," ")}}var ll=(()=>{class i{types=[];optionSelected=Y();formControl;filteredTypes;fieldTypesReader=s(ge);editorConfigReader=s(Ze);dataManager=s(Ee);commitHandled=!1;ngOnInit(){this.types=this.fieldTypesReader.get().filter(e=>this.editorConfigReader.propertiesByType[e]).sort((e,t)=>e.localeCompare(t)),this.formControl=new pn("",this.inListValidator(this.types)),this.filteredTypes=this.formControl.valueChanges.pipe(re(""),V(e=>(e=e.toLowerCase(),this.types.filter(t=>t.toLowerCase().includes(e)))))}handleFocusout(){this.formControl.markAsUntouched()}handleClick(){this.commitHandled=!1}handleSelect(e){e.option.deselect(),this.select(e.option.value),this.commitHandled=!0}commit(){if(this.commitHandled){this.commitHandled=!1;return}let e=(this.formControl.value??"").toLowerCase(),t=this.types.filter(n=>n.toLowerCase()===e);t.length?this.select(t[0]):this.formControl.markAsTouched()}select(e){let t={type:e};this.dataManager.addFields([t]),this.formControl.reset("")}inListValidator(e){return t=>{let n=t.value?.toLowerCase();return e.some(r=>r.toLowerCase()===n)?null:{notInList:!0}}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-field-editor-add"]],hostBindings:function(t,n){t&1&&h("focusout",function(){return n.handleFocusout()})},outputs:{optionSelected:"optionSelected"},decls:15,vars:4,consts:[["autocomplete","matAutocomplete"],["floatLabel","always"],["matInput","",3,"keydown.enter","matAutocomplete","formControl"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value"],["mat-stroked-button","","color","primary",3,"click"],[3,"click","value"]],template:function(t,n){if(t&1&&(m(0,"mat-form-field",1)(1,"mat-label"),C(2,"type"),c(),m(3,"input",2),h("keydown.enter",function(){return n.commit()}),c(),m(4,"mat-autocomplete",3,0),h("optionSelected",function(r){return n.handleSelect(r)}),He(6,Wc,2,2,"mat-option",4,Pn),yt(8,"async"),c(),m(9,"mat-error"),C(10,"Select value from list"),c()(),m(11,"button",5),h("click",function(){return n.commit()}),m(12,"mat-icon"),C(13,"add"),c(),C(14," Add field "),c()),t&2){let a=Ae(5);p(3),g("matAutocomplete",a)("formControl",n.formControl),p(3),Ge(xt(8,2,n.filteredTypes))}},dependencies:[st,cn,mn,un,Be,Qe,Wi,sl,rl,Tn,ha,Ki,Gt,It,Cn,Ct],styles:["mat-form-field[_ngcontent-%COMP%]{margin-right:20px}"],changeDetection:0})}return i})();function Qc(i,o){i&1&&F(0,"formly-designer-field-editor-add")}function Yc(i,o){i&1&&F(0,"formly-designer-field-editor-edit")}function Xc(i,o){i&1&&F(0,"formly-designer-field-editor-code")}var lo=(()=>{class i{mode=j("add");selection=s(ze);snackBar=s(at);field=null;editChild=te.required(io);codeChild=te.required(oo);ngOnInit(){this.selection.onSelect.subscribe(e=>{this.field=e,e===null?this.mode.set("add"):this.mode()==="add"&&this.mode.set("edit")})}save(){this.mode()==="edit"&&this.editChild().save(),this.mode()==="code"&&this.codeChild().save()}setMode(e){if(this.field===null&&(e==="edit"||e==="code")){this.snackBar.open("Select a field to edit","X");return}(e==="edit"||e==="code")&&this.save(),this.mode.set(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-field-editor"]],viewQuery:function(t,n){t&1&&he(n.editChild,io,5)(n.codeChild,oo,5),t&2&&ie(2)},decls:7,vars:6,consts:[["headerTitle","Field"],["icon","add","tooltip","Add field",3,"click","selected"],["icon","edit","tooltip","Edit field",3,"click","selected"],["icon","code","tooltip","Code",3,"click","selected"]],template:function(t,n){t&1&&(m(0,"matx-panel",0)(1,"matx-panel-header-button",1),h("click",function(){return n.setMode("add")}),c(),m(2,"matx-panel-header-button",2),h("click",function(){return n.setMode("edit")}),c(),m(3,"matx-panel-header-button",3),h("click",function(){return n.setMode("code")}),c(),E(4,Qc,1,0,"formly-designer-field-editor-add"),E(5,Yc,1,0,"formly-designer-field-editor-edit"),E(6,Xc,1,0,"formly-designer-field-editor-code"),c()),t&2&&(p(),g("selected",n.mode()==="add"),p(),g("selected",n.mode()==="edit"),p(),g("selected",n.mode()==="code"),p(),S(n.mode()==="add"?4:-1),p(),S(n.mode()==="edit"?5:-1),p(),S(n.mode()==="code"?6:-1))},dependencies:[io,oo,ll,At,Mn],encapsulation:2,changeDetection:0})}return i})();var dl=(()=>{class i{data;formatter=e=>{let t=Tt(e);return t.success?lt(t.result):e};constructor(){this.data=s(kn).onChange.pipe(V(e=>JSON.stringify(e??{})))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-test-value"]],decls:3,vars:5,consts:[["headerTitle","Value"],[3,"disabled","data","formatter"]],template:function(t,n){t&1&&(m(0,"matx-panel",0),F(1,"b-code-editor",1),yt(2,"async"),c()),t&2&&(p(),g("disabled",!0)("data",xt(2,3,n.data)??"")("formatter",n.formatter))},dependencies:[At,Ot,Ct],encapsulation:2,changeDetection:0})}return i})();var Ue=class{commandType;data;constructor(o,e){this.commandType=o,this.data=e}},be=(function(i){return i[i.EditUndo=0]="EditUndo",i[i.EditRedo=1]="EditRedo",i[i.EditCut=2]="EditCut",i[i.EditCopy=3]="EditCopy",i[i.EditPaste=4]="EditPaste",i[i.EditDelete=5]="EditDelete",i[i.EditSelectAll=6]="EditSelectAll",i})(be||{});function Zc(i,o){i&1&&(m(0,"div",2),F(1,"formly-designer-test-value"),c())}function Jc(i,o){if(i&1){let e=K();m(0,"div",0)(1,"formly-designer-result",1),h("modeChange",function(n){A(e);let a=_();return P(a.handleModeChange(n))}),c()(),m(2,"div"),F(3,"formly-designer-field-editor"),c(),E(4,Zc,2,0,"div",2)}if(i&2){let e=_();p(),g("mode",e.mode),p(),me(e.mode==="test"?"editor--hidden":"editor"),p(2),S(e.mode==="test"?4:-1)}}var cl=(()=>{class i{hidden=w(!1);fields=w([]);onCommand=w();dataChange=Y();fieldEditor=te.required(lo);mode="select";snackBar=s(at);dataManager=s(Ee);undoManager=s(Yn);selection=s(ze);destroyRef=s(fe);ngOnInit(){this.onCommand()?.pipe(Q(this.destroyRef)).subscribe(e=>this.handleCommand(e)),this.dataManager.setFields(this.fields()),this.dataManager.onChange.pipe(Ta(1)).subscribe(()=>this.dataChange.emit())}handleModeChange(e){this.mode=e}handleCommand(e){if(!this.hidden())switch(this.fieldEditor().save(),e.commandType){case be.EditUndo:this.undoManager.undo();break;case be.EditRedo:this.undoManager.redo();break;case be.EditCut:navigator.clipboard.writeText(this.getSelectedFieldsJson()),this.dataManager.removeSelectedFields();break;case be.EditCopy:navigator.clipboard.writeText(this.getSelectedFieldsJson());break;case be.EditPaste:let t=Ft(e.data??"");t.success?this.dataManager.addFields(t.result):(console.warn(t.message,{data:e.data}),this.snackBar.open("Clipboard contains invalid data","X"));break;case be.EditDelete:this.dataManager.removeSelectedFields();break;case be.EditSelectAll:this.selection.set(ut(this.dataManager.getFields()));break}}getSelectedFieldsJson(){return lt(this.dataManager.getSelectedFields())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-editor"]],viewQuery:function(t,n){t&1&&he(n.fieldEditor,lo,5),t&2&&ie()},hostVars:2,hostBindings:function(t,n){t&2&&T("hidden",n.hidden())},inputs:{hidden:[1,"hidden"],fields:[1,"fields"],onCommand:[1,"onCommand"]},outputs:{dataChange:"dataChange"},features:[W([ze,Ee,kn,Yn])],decls:1,vars:1,consts:[[1,"result"],[3,"modeChange","mode"],[1,"test-value"]],template:function(t,n){t&1&&E(0,Jc,5,4),t&2&&S(n.hidden()?-1:0)},dependencies:[lo,Js,dl],styles:["[_nghost-%COMP%]{display:flex}.hidden[_nghost-%COMP%]{display:none}.result[_ngcontent-%COMP%], .editor[_ngcontent-%COMP%], .editor--hidden[_ngcontent-%COMP%], .test-value[_ngcontent-%COMP%]{box-sizing:border-box}.editor--hidden[_ngcontent-%COMP%]{display:none}.result[_ngcontent-%COMP%]{min-width:0;max-width:1000px;flex:2;margin-right:1px}.editor[_ngcontent-%COMP%], .test-value[_ngcontent-%COMP%]{min-width:0;max-width:500px;flex:1}"],changeDetection:0})}return i})();var co=(()=>{class i{get name(){return"Json"}get extension(){return".json"}export(e){return lt(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ml(i){return[{provide:eo,useValue:i},Ze,no,ge,En,Sn,to]}var em=["mat-menu-item",""],tm=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],nm=["mat-icon, [matMenuItemIcon]","*"];function im(i,o){i&1&&(Aa(),m(0,"svg",2),F(1,"polygon",3),c())}var om=["*"];function am(i,o){if(i&1){let e=K();De(0,"div",0),ri("click",function(){A(e);let n=_();return P(n.closed.emit("click"))})("animationstart",function(n){A(e);let a=_();return P(a._onAnimationStart(n.animationName))})("animationend",function(n){A(e);let a=_();return P(a._onAnimationDone(n.animationName))})("animationcancel",function(n){A(e);let a=_();return P(a._onAnimationDone(n.animationName))}),De(1,"div",1),R(2),Re()()}if(i&2){let e=_();me(e._classList),T("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),_e("id",e.panelId),H("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}var _a=new D("MAT_MENU_PANEL"),Jn=(()=>{class i{_elementRef=s(k);_document=s(Ve);_focusMonitor=s(zt);_parentMenu=s(_a,{optional:!0});_changeDetectorRef=s($);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new b;_focused=new b;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(Ke).load(bn),this._parentMenu?.addItem?.(this)}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let n=0;n<t.length;n++)t[n].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,n){t&1&&h("click",function(r){return n._checkDisabled(r)})("mouseenter",function(){return n._handleMouseEnter()}),t&2&&(H("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),T("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",I],disableRipple:[2,"disableRipple","disableRipple",I]},exportAs:["matMenuItem"],attrs:em,ngContentSelectors:nm,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,n){t&1&&(J(tm),R(0),m(1,"span",0),R(2,1),c(),F(3,"div",1),E(4,im,2,0,":svg:svg",2)),t&2&&(p(3),g("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),p(),S(n._triggersSubmenu?4:-1))},dependencies:[Ii],encapsulation:2,changeDetection:0})}return i})();var rm=new D("MatMenuContent");var sm=new D("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),ga="_mat-menu-enter",mo="_mat-menu-exit",Nt=(()=>{class i{_elementRef=s(k);_changeDetectorRef=s($);_injector=s(G);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=le();_allItems;_directDescendantItems=new Pa;_classList={};_panelAnimationState="void";_animationDone=new b;_isAnimating=j(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,n=L({},this._classList);t&&t.length&&t.split(" ").forEach(a=>{n[a]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(a=>{n[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=n}_previousPanelClass;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new q;close=this.closed;panelId=s(se).getId("mat-menu-panel-");constructor(){let e=s(sm);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ja(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(re(this._directDescendantItems),je(e=>Te(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let n=e.toArray(),a=Math.max(0,Math.min(n.length-1,t.activeItemIndex||0));n[a]&&!n[a].disabled?t.setActiveItem(a):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(re(this._directDescendantItems),je(t=>Te(...t.map(n=>n._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,n=this._keyManager;switch(t){case 27:We(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&n.setFocusOrigin("keyboard"),n.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=qe(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(e).setFirstItemActive(),!n.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=gt(L({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===mo;(t||e===ga)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===ga||e===mo)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(mo),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?ga:mo)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(re(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["mat-menu"]],contentQueries:function(t,n,a){if(t&1&&vt(a,rm,5)(a,Jn,5)(a,Jn,4),t&2){let r;O(r=N())&&(n.lazyContent=r.first),O(r=N())&&(n._allItems=r),O(r=N())&&(n.items=r)}},viewQuery:function(t,n){if(t&1&&Me(nt,5),t&2){let a;O(a=N())&&(n.templateRef=a.first)}},hostVars:3,hostBindings:function(t,n){t&2&&H("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",I],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:I(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[W([{provide:_a,useExisting:i}])],ngContentSelectors:om,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,n){t&1&&(J(),oi(0,am,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),lm=new D("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(G);return()=>gi(i)}});var Fn=new WeakMap,dm=(()=>{class i{_canHaveBackdrop;_element=s(k);_viewContainerRef=s(rt);_menuItemInstance=s(Jn,{optional:!0,self:!0});_dir=s(Oe,{optional:!0});_focusMonitor=s(zt);_ngZone=s(U);_injector=s(G);_scrollStrategy=s(lm);_changeDetectorRef=s($);_animationsDisabled=le();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Se.EMPTY;_menuCloseSubscription=Se.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(_a,{optional:!0});this._parentMaterialMenu=t instanceof Nt?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Fn.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let n=Fn.get(t);Fn.set(t,this),n&&n!==this&&n._closeMenu();let a=this._createOverlay(t),r=a.getConfig(),l=r.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Nt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ce(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,n=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof Nt&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe(ve(1)).subscribe(()=>{t.detach(),Fn.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(t.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&Fn.delete(n),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Et(this._injector,t),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof Nt&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(e){return new kt({positionStrategy:_i(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let a=n.connectionPair.overlayX==="start"?"after":"before",r=n.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(a,r)})})}_setPosition(e,t){let[n,a]=e.xPosition==="before"?["end","start"]:["start","end"],[r,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[d,u]=[r,l],[v,B]=[n,a],de=0;if(this._triggersSubmenu()){if(B=n=e.xPosition==="before"?"start":"end",a=v=n==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let Je=this._parentMaterialMenu.items.first;this._parentInnerPadding=Je?Je._getHostElement().offsetTop:0}de=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(d=r==="top"?"bottom":"top",u=l==="top"?"bottom":"top");t.withPositions([{originX:n,originY:d,overlayX:v,overlayY:r,offsetY:de},{originX:a,originY:d,overlayX:B,overlayY:r,offsetY:de},{originX:n,originY:u,overlayX:v,overlayY:l,offsetY:-de},{originX:a,originY:u,overlayX:B,overlayY:l,offsetY:-de}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:z(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(ue(r=>this._menuOpen&&r!==this._menuItemInstance)):z();return Te(e,n,a,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new Mt(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return Fn.get(e)===this}_triggerIsAriaDisabled(){return I(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(t){Oa()};static \u0275dir=M({type:i})}return i})(),qt=(()=>{class i extends dm{_cleanupTouchstart;_hoverSubscription=Se.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new q;onMenuOpen=this.menuOpened;menuClosed=new q;onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(ye);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{ln(t)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){sn(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,n){t&1&&h("click",function(r){return n._handleClick(r)})("mousedown",function(r){return n._handleMousedown(r)})("keydown",function(r){return n._handleKeydown(r)}),t&2&&H("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu==null?null:n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ae]})}return i})();function cm(i,o){if(i&1&&(m(0,"mat-icon"),C(1),c()),i&2){let e=_(2).$implicit;p(),pe(e.icon)}}function mm(i,o){if(i&1&&(m(0,"span",4),C(1),c()),i&2){let e=_(2).$implicit,t=_();p(),pe(t.getShortcutText(e.shortcuts))}}function pm(i,o){if(i&1){let e=K();m(0,"button",3),h("click",function(){A(e);let n=_().$implicit,a=_();return P(a.handleClick(n))}),E(1,cm,2,1,"mat-icon"),m(2,"span"),C(3),E(4,mm,2,1,"span",4),c()()}if(i&2){let e=_().$implicit;p(),S(e.icon!==void 0?1:-1),p(2),ee("",e.text," "),p(),S(e.shortcuts?4:-1)}}function um(i,o){if(i&1&&(m(0,"mat-icon"),C(1),c()),i&2){let e=_(2).$implicit;p(),pe(e.icon)}}function fm(i,o){if(i&1&&(m(0,"span",4),C(1),c()),i&2){let e=_(2).$implicit,t=_();p(),pe(t.getShortcutText(e.shortcuts))}}function hm(i,o){if(i&1){let e=K();m(0,"button",5),E(1,um,2,1,"mat-icon"),m(2,"span"),C(3),E(4,fm,2,1,"span",4),c()(),m(5,"matx-menu",6,0),h("itemClick",function(n){A(e);let a=_(2);return P(a.handleClick(n))}),c()}if(i&2){let e=Ae(6),t=_().$implicit,n=_();g("matMenuTriggerFor",e.menu()),p(),S(t.icon!==void 0?1:-1),p(2),ee("",t.text," "),p(),S(t.shortcuts?4:-1),p(),me(n.class()),g("items",t.children)}}function gm(i,o){if(i&1&&E(0,pm,5,3,"button",2)(1,hm,7,7),i&2){let e=o.$implicit;S(e.children!=null&&e.children.length?1:0)}}function _m(i,o){if(i&1){let e=K();m(0,"button",2),C(1),c(),m(2,"matx-menu",3,0),h("itemClick",function(n){A(e);let a=_();return P(a.handleClick(n))}),c()}if(i&2){let e=o.$implicit,t=Ae(3),n=_();g("matMenuTriggerFor",t.menu()),p(),ee(" ",e.text," "),p(),me(n.MATX_MENU_CLASS),g("items",e.children)}}var bm=(()=>{class i{items=w([]);class=w("");itemClick=Y();menu=te.required(Nt);handleClick(e){this.itemClick.emit(e)}getShortcutText(e){return e.filter(t=>!t.hideMenuText).map(t=>" -	"+(t.ctrl?"Ctrl + ":"")+(t.alt?"Alt + ":"")+(t.shift?"Shift + ":"")+t.keyCode.replace(/^Key/,"")).join(", ")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-menu"]],viewQuery:function(t,n){t&1&&he(n.menu,Nt,5),t&2&&ie()},inputs:{items:[1,"items"],class:[1,"class"]},outputs:{itemClick:"itemClick"},decls:3,vars:3,consts:[["matxMenu",""],[3,"hasBackdrop"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"shortcut"],["mat-menu-item","",3,"matMenuTriggerFor"],[3,"itemClick","items"]],template:function(t,n){t&1&&(m(0,"mat-menu",1),He(1,gm,2,1,null,null,Pn),c()),t&2&&(me(n.class()),g("hasBackdrop",!1),p(),Ge(n.items()))},dependencies:[i,Qe,Nt,Jn,qt],styles:[".shortcut[_ngcontent-%COMP%]{color:#d3d3d3;font-style:italic}"],changeDetection:0})}return i})(),vm=(()=>{class i{menuClass=w("");elementRef=s(k);menuTriggers=Co(qt);menuTriggerElements=Co(qt,{read:k});openMenuTriggerIndex=null;destroyRef=s(fe);ngAfterContentInit(){if(!this.menuClass())throw new Error("matxMenuTriggers: Set menuClass for detecting clicks on menu's.");this.menuTriggers().forEach(e=>{if(e.menu?.hasBackdrop)throw new Error("matxMenuTriggers: Set hasBackdrop to false for triggered menu's.");e.menuOpened.pipe(Q(this.destroyRef)).subscribe(()=>this.handleOpen(e)),e.menuClosed.pipe(Q(this.destroyRef)).subscribe(()=>this.handleClose())})}handleMouseDown(e){let t=e.target;this.openMenuTriggerIndex!==null&&!t.closest(`.${this.menuClass()}`)&&(t?.closest("[matxMenuTriggers]")!==this.elementRef.nativeElement||!t.closest("button"))&&this.menuTriggers().at(this.openMenuTriggerIndex)?.closeMenu()}handleMouseOver(e){if(this.openMenuTriggerIndex!==null&&e.target){let t=this.menuTriggerElements().map(a=>a.nativeElement).indexOf(e.target.closest("button")),n=this.menuTriggers();t>=0&&this.openMenuTriggerIndex!==t&&(n.at(this.openMenuTriggerIndex)?.closeMenu(),n.at(t)?.openMenu())}}handleOpen(e){this.openMenuTriggerIndex=this.menuTriggers().indexOf(e)}handleClose(){this.openMenuTriggerIndex!==null&&(this.menuTriggerElements().at(this.openMenuTriggerIndex)?.nativeElement).blur(),this.openMenuTriggerIndex=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=M({type:i,selectors:[["","matxMenuTriggers",""]],contentQueries:function(t,n,a){t&1&&Yt(a,n.menuTriggers,qt,4)(a,n.menuTriggerElements,qt,4,k),t&2&&ie(2)},hostBindings:function(t,n){t&1&&h("mouseover",function(r){return n.handleMouseOver(r)})("mousedown",function(r){return n.handleMouseDown(r)},An)},inputs:{menuClass:[1,"menuClass"]}})}return i})(),fl=(()=>{class i{menuBar=w.required();itemClick=Y();MATX_MENU_CLASS="matx-menu";itemsByShortcut=new Map;ngOnInit(){let e=this.menuBar().flatMap(n=>this.getMenuItemsRecursive(n.children)),t=[];e.filter(n=>n.shortcuts).forEach(n=>t=t.concat(n.shortcuts.filter(a=>!a.disabled).map(a=>[this.shortcutToId(a),n]))),this.itemsByShortcut=new Map(t)}handleClick(e){this.itemClick.emit(e)}handleKeyDown(e){let t=this.shortcutToId({ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,keyCode:e.code});if(e.target?.closest("input,textarea")&&new Set(["c-KeyX","c-KeyC","c-KeyV","c-KeyZ","c-KeyY","c-s-KeyZ"]).has(t))return;let n=this.itemsByShortcut.get(t);n!==void 0&&(this.itemClick.emit(n),e.stopImmediatePropagation(),e.preventDefault())}getMenuItemsRecursive(e){return e.flatMap(t=>[t].concat(this.getMenuItemsRecursive(t.children??[])))}shortcutToId(e){return(e?.ctrl?"c-":"")+(e?.alt?"a-":"")+(e?.shift?"s-":"")+e?.keyCode}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["matx-menu-bar"]],hostBindings:function(t,n){t&1&&h("keydown",function(r){return n.handleKeyDown(r)},An)},inputs:{menuBar:[1,"menuBar"]},outputs:{itemClick:"itemClick"},decls:3,vars:1,consts:[["matxMenu",""],["matxMenuTriggers","",3,"menuClass"],["mat-button","",1,"button",3,"matMenuTriggerFor"],[3,"itemClick","items"]],template:function(t,n){t&1&&(m(0,"div",1),He(1,_m,4,5,null,null,Pn),c()),t&2&&(g("menuClass",n.MATX_MENU_CLASS),p(),Ge(n.menuBar()))},dependencies:[Be,qt,bm,vm],encapsulation:2,changeDetection:0})}return i})();var hl=(()=>{class i{importers=w([]);exporters=w([]);commandReceived=Y();menuBar=[{text:"File",children:[{text:"New",icon:"note_add",shortcuts:[{ctrl:!0,alt:!0,keyCode:"KeyN"}],data:new ke(oe.FileNew)},{text:"Save",icon:"save",shortcuts:[{ctrl:!0,keyCode:"KeyS"}],data:new ke(oe.FileSave)},{text:"Save as...",icon:"save_as",shortcuts:[{ctrl:!0,alt:!0,keyCode:"KeyS"}],data:new ke(oe.FileSaveAs)},{text:"Save all",icon:"",shortcuts:[{ctrl:!0,shift:!0,keyCode:"KeyS"}],data:new ke(oe.FileSaveAll)},{text:"Rename",icon:"edit",shortcuts:[{ctrl:!0,keyCode:"KeyR"}],data:new ke(oe.FileRename)},{text:"Delete",icon:"delete",shortcuts:[{ctrl:!0,keyCode:"Delete"}],data:new ke(oe.FileDelete)},{text:"Close",icon:"close",shortcuts:[{ctrl:!0,keyCode:"KeyQ"}],data:new ke(oe.FileClose)},{text:"Close all",icon:"",shortcuts:[{ctrl:!0,shift:!0,keyCode:"KeyQ"}],data:new ke(oe.FileCloseAll)}]},{text:"Edit",children:[{text:"Undo",icon:"undo",shortcuts:[{ctrl:!0,keyCode:"KeyZ"}],data:new Ue(be.EditUndo)},{text:"Redo",icon:"redo",shortcuts:[{ctrl:!0,shift:!0,keyCode:"KeyZ"},{ctrl:!0,keyCode:"KeyY",hideMenuText:!0}],data:new Ue(be.EditRedo)},{text:"Cut",icon:"content_cut",shortcuts:[{ctrl:!0,keyCode:"KeyX"}],data:new Ue(be.EditCut)},{text:"Copy",icon:"content_copy",shortcuts:[{ctrl:!0,keyCode:"KeyC"}],data:new Ue(be.EditCopy)},{text:"Paste",icon:"content_paste",shortcuts:[{ctrl:!0,keyCode:"KeyV",disabled:!0}],data:new Ue(be.EditPaste)},{text:"Delete",icon:"delete",shortcuts:[{keyCode:"Delete"}],data:new Ue(be.EditDelete)},{text:"Select all",icon:"select_all",shortcuts:[{ctrl:!0,keyCode:"KeyA"}],data:new Ue(be.EditSelectAll)}]}];snackBar=s(at);ngOnInit(){let e=this.importers();e.length&&this.menuBar[0].children.push({text:"Import",icon:"file_upload",data:new ke(oe.FileImport),children:e.length>1?e.map(n=>({text:n,data:new ke(oe.FileImport,n)})):[]});let t=this.exporters();t.length&&this.menuBar[0].children.push({text:"Export",icon:"file_download",data:new ke(oe.FileExport),children:t.length>1?t.map(n=>({text:n,data:new ke(oe.FileExport,n)})):[]})}handleClick(e){e.data instanceof Ue&&e.data.commandType===be.EditPaste?this.snackBar.open("Use Ctrl + V, browsers don't support clipboard access.","X"):this.commandReceived.emit(e.data)}handlePaste(e){e.target?.closest("input,textarea")||this.commandReceived.emit(new Ue(be.EditPaste,e.clipboardData?.getData("text/plain")))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer-menu-bar"]],hostBindings:function(t,n){t&1&&h("paste",function(r){return n.handlePaste(r)},An)},inputs:{importers:[1,"importers"],exporters:[1,"exporters"]},outputs:{commandReceived:"commandReceived"},decls:1,vars:1,consts:[[3,"itemClick","menuBar"]],template:function(t,n){t&1&&(m(0,"matx-menu-bar",0),h("itemClick",function(r){return n.handleClick(r)}),c()),t&2&&g("menuBar",n.menuBar)},dependencies:[fl],encapsulation:2,changeDetection:0})}return i})();var po=class{formImporter;constructor(o){this.formImporter=o}get name(){return this.formImporter.name}get hasMultipleFileSelection(){return this.formImporter.hasMultipleFileSelection}get extensions(){return this.formImporter.extensions}async import(o,e){let t=await this.formImporter.import(o,e);return{success:t.success,message:t.message,result:t.result.map(n=>({name:n.name,data:n.fields}))}}};var uo=new D("formlyDesignerImporters"),fo=new D("formlyDesignerExporters");var ho=(()=>{class i extends wn{constructor(){super();let e=s(uo,{optional:!0})??[];super.set(e.map(t=>new po(t)))}import(e,t,n){return super.import(e,t,n).pipe(Ie(r=>{let l=r.result;l.forEach(u=>dr(u.data)),l=l.filter(u=>{let v=lr(u.data);return v.valid||console.warn("form name",u.name,"fields",u,"validation errors (Ajv)",v.errors),v.valid});let d={success:r.success,message:r.message,result:l};d.success=r.success&&r.result.length===l.length}))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var go=(()=>{class i extends Qn{constructor(){super(),super.set(s(fo,{optional:!0})??[])}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var ym=(i,o)=>`${o.modificationState}${o.filename}`;function xm(i,o){if(i&1){let e=K();m(0,"formly-editor",3),h("dataChange",function(){let n=A(e).$implicit,a=_();return P(a.handleDataChange(n))}),c()}if(i&2){let e=o.$implicit,t=_();g("fields",e.data)("hidden",e!==t.selectedTab())("onCommand",t.onEditCommand)}}var aC=(()=>{class i{convert;convertBack;importManager=s(ho);exportManager=s(go);importerNames=this.importManager.getNames();exporterNames=this.exportManager.getNames();tabs;selectedTab;onFileCommand;onEditCommand;jsonExporter=s(co);tabsManager=s(Hn);command=new b;constructor(){this.onFileCommand=this.command.pipe(ue(e=>e instanceof ke)),this.onEditCommand=this.command.pipe(ue(e=>e instanceof Ue)),this.tabs=Dt(this.tabsManager.onChange,{initialValue:[]}),this.selectedTab=Dt(this.tabsManager.onSelectionChange,{initialValue:null}),this.convert=e=>Ft(e),this.convertBack=e=>this.jsonExporter.export(e)}hasModifiedTabs(){return this.tabsManager.hasModifiedTab()}handleCommand(e){this.command.next(e)}handleDataChange(e){this.tabsManager.update(e,{modificationState:e.modificationState===ne.New?ne.New:ne.Unknown})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=f({type:i,selectors:[["formly-designer"]],decls:4,vars:7,consts:[[3,"commandReceived","importers","exporters"],["extension","json","defaultContent","[]",3,"convertFn","convertBackFn","importManager","exportManager","onCommand"],[3,"fields","hidden","onCommand"],[3,"dataChange","fields","hidden","onCommand"]],template:function(t,n){t&1&&(m(0,"formly-designer-menu-bar",0),h("commandReceived",function(r){return n.handleCommand(r)}),c(),m(1,"matx-editor-app",1),He(2,xm,1,3,"formly-editor",2,ym),c()),t&2&&(g("importers",n.importerNames)("exporters",n.exporterNames),p(),g("convertFn",n.convert)("convertBackFn",n.convertBack)("importManager",n.importManager)("exportManager",n.exportManager)("onCommand",n.onFileCommand),p(),Ge(n.tabs()))},dependencies:[hl,Hs,cl],styles:["[_nghost-%COMP%]{height:100%;display:flex;flex-direction:column}formly-designer-menu-bar[_ngcontent-%COMP%]{border:1px solid lightgray;background-color:#00000008}formly-editor[_ngcontent-%COMP%]{height:100%}"],changeDetection:0})}return i})();var pC=(()=>{class i{fileService=s(Ut);load(e){return e==""?z([]):this.fileService.load(`${e}.json`).pipe(V(t=>Tt(t).result))}loadNames(){return this.fileService.list().pipe(V(e=>e.map(t=>t.replace(/.json$/g,""))))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac})}return i})();var gl=(()=>{class i{get name(){return"Json"}get hasMultipleFileSelection(){return!0}get extensions(){return["json"]}async import(e,t){let n=Ft(e);return n.success?{success:!0,message:"",result:[{name:t,fields:n.result}]}:cr(n.message)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function CC(i){let o=[ho,go];return(i.importers??[gl]).forEach(e=>{o.push({provide:uo,useExisting:e,multi:!0})}),(i.exporters??[co]).forEach(e=>{o.push({provide:fo,useExisting:e,multi:!0})}),i.storage==="local"?o.push(Ls(`${i.storagePrefix??""}files_`)):i.fileServiceUrl&&o.push(Ns(i.fileServiceUrl)),o.concat(ml(i.editor??{}))}export{ft as a,Un as b,Vt as c,Zr as d,Ni as e,Li as f,Bi as g,zi as h,Ii as i,bn as j,qo as k,Be as l,Cp as m,Rs as n,Is as o,It as p,Cn as q,xn as r,Ms as s,ws as t,qi as u,Dn as v,Gt as w,As as x,$i as y,Ki as z,Wi as A,Nt as B,qt as C,tl as D,ao as E,ro as F,Yv as G,Tn as H,nl as I,il as J,fd as K,at as L,Vi as M,$n as N,vd as O,Qi as P,Fi as Q,_n as R,Pr as S,Ri as T,zn as U,Ys as V,aC as W,pC as X,gl as Y,CC as Z};
