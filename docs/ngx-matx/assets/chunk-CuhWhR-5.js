import{$n as e,$t as t,Dn as n,Fn as r,Hn as i,Mr as a,Nr as o,Or as s,Qi as c,Qn as l,Rt as u,Sn as d,Un as f,Ut as p,Vt as m,Zi as h,Zn as g,_i as _,br as v,di as y,dr as b,fi as x,h as S,ir as C,jr as w,lr as T,m as E,nr as D,oi as O,qt as k,ur as A,vi as j,yr as M}from"./chunk-BUW_Agz0.js";import{a as N,i as P,n as F,t as I}from"./chunk-HJufx7bx.js";import{t as L}from"./chunk-0UvyZAbw.js";import{t as R}from"./chunk-BZck4vfj.js";import{Kt as z}from"./chunk-D6RTnzmc.js";var B=[`*`],V=class e{static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=r({type:e,selectors:[[`matx-file-tab-container`]],ngContentSelectors:B,decls:3,vars:0,consts:[[1,`tabs-container`]],template:function(e,t){e&1&&(A(),f(0,`div`)(1,`div`,0),T(2),i()())},styles:[`[_nghost-%COMP%] {
  display: flex;
  overflow: auto;
}
[_nghost-%COMP%]::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
[_nghost-%COMP%]::-webkit-scrollbar-corner {
  display: none;
}
[_nghost-%COMP%]::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #aaa;
}
[_nghost-%COMP%]::-webkit-scrollbar-track {
  border-radius: 4px;
  background: #eee;
}
[_nghost-%COMP%] {
  overflow-y: hidden;
}

.tabs-container[_ngcontent-%COMP%] {
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}`]})}},H;(function(e){e[e.New=0]=`New`,e[e.Unmodified=1]=`Unmodified`,e[e.Modified=2]=`Modified`,e[e.Unknown=3]=`Unknown`})(H||={});var U=class e{constructor(){this.text=u.required(),this.selected=m.required(),this.modificationState=u(H.Unmodified),this.tabSelect=p(),this.tabClose=p(),this.hovering=y(!1),this.buttonTag=k(()=>this.hovering()?`close-button`:this.buttonTags.get(this.modificationState())),this.buttonTags=new Map([[H.New,`add`],[H.Unknown,`circle`],[H.Modified,`circle`],[H.Unmodified,``]]);let e=O(t);E(this.selected).subscribe(t=>t&&e.nativeElement.scrollIntoView&&e.nativeElement.scrollIntoView({block:`nearest`,inline:`nearest`}))}handleClick(e){e.target?.tagName.toLowerCase()!==`mat-icon`&&(this.selected.set(!0),this.tabSelect.emit())}handleClose(){this.tabClose.emit()}handleMouseEnter(){this.hovering.set(!0)}handleMouseLeave(){this.hovering.set(!1)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=r({type:e,selectors:[[`matx-file-tab`]],inputs:{text:[1,`text`],selected:[1,`selected`],modificationState:[1,`modificationState`]},outputs:{selected:`selectedChange`,tabSelect:`tabSelect`,tabClose:`tabClose`},decls:4,vars:8,consts:[[`mat-button`,``,3,`click`,`mouseenter`,`mouseleave`],[`iconPositionEnd`,``,3,`click`]],template:function(e,t){e&1&&(l(0,`button`,0),D(`click`,function(e){return t.handleClick(e)})(`mouseenter`,function(){return t.handleMouseEnter()})(`mouseleave`,function(){return t.handleMouseLeave()}),w(1),l(2,`mat-icon`,1),D(`click`,function(){return t.handleClose()}),w(3),g()()),e&2&&(n(t.selected()?`tab--selected`:`tab`),d(),o(` `,t.text(),` `),d(),n(t.hovering()?`close-button`:t.buttonTag()),s(`margin-left`,`2px`),d(),a(t.buttonTag()))},dependencies:[L,R],styles:[`.tab[_ngcontent-%COMP%], 
.tab--selected[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: row;
  opacity: 0.6;
  border-bottom: 2px solid transparent;
  padding-right: 2px;
}

.tab--selected[_ngcontent-%COMP%] {
  opacity: 0.8;
  border-bottom-color: black;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.tab[_ngcontent-%COMP%]:not(:hover)   .close-button[_ngcontent-%COMP%] {
  visibility: hidden;
}

mat-icon[_ngcontent-%COMP%] {
  color: rgba(0, 0, 0, 0.5);
}

.close-button[_ngcontent-%COMP%] {
  border-radius: 4px;
  transform: scale(0.85);
}
.close-button[_ngcontent-%COMP%]:hover {
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.3);
}
.close-button[_ngcontent-%COMP%]:active {
  color: rgb(0, 0, 0);
}

.circle[_ngcontent-%COMP%] {
  transform: scale(0.5);
}

.add[_ngcontent-%COMP%] {
  transform: scale(0.85);
}`]})}},W=class e{constructor(){this.tabs=[],this.selectedTab=null,this.change=new h([]),this.selectionChange=new h(null),this.modified=new c,this.onChange=this.change.asObservable(),this.onSelectionChange=this.selectionChange.asObservable(),this.modified.pipe(z(500)).subscribe(()=>{let e=this.isModifiedFn;e&&(this.tabs.forEach(t=>{t.modificationState===H.Unknown&&(t.modificationState=e(t)?H.Modified:H.Unmodified)}),this.change.next(this.tabs.slice()))})}ngOnDestroy(){this.change.complete(),this.selectionChange.complete(),this.modified.complete()}setIsModifiedFn(e){this.isModifiedFn=e}hasModifiedTab(){return this.tabs.some(e=>e.modificationState!==H.Unmodified)}selectTab(e){this.selectedTab=e,this.selectionChange.next(this.selectedTab)}getTabs(){return this.tabs}getSelectedTab(){return this.selectedTab}getFileNames(){return this.tabs.map(e=>e.filename)}getTabByFilename(e){return this.tabs.find(t=>t.filename==e)}openNewTab(e,t=[]){let n=e.filename.toLowerCase(),r=new Set(this.tabs.map(e=>e.filename.toLowerCase()).concat(t.map(e=>e.toLowerCase())));if(r.has(n)){let t=1;for(;r.has(`${n}-${++t}`););e={...e,filename:`${e.filename}-${t}`}}this.tabs.push(e),this.selectedTab=e,this.triggerEvents()}openTab(e){let t=e.filename.toLowerCase(),n=this.tabs.find(e=>t===e.filename.toLowerCase());n?this.selectedTab=n:(this.tabs.push(e),this.selectedTab=e),this.triggerEvents()}importTabs(e){if(!e.length)return;let t=new Map(this.tabs.map((e,t)=>[e.filename.toLowerCase(),t]));e.forEach(e=>{let n=t.get(e.filename.toLowerCase());n===void 0?this.tabs.push(e):this.tabs[n]=e}),this.selectedTab=e[0],this.triggerEvents()}updateModified(e,t){e.length&&(e.forEach(e=>e.modificationState=t),this.triggerEvents())}update(e,t){if(t.filename){let n=t.filename.toLowerCase();if(n!==e.filename.toLowerCase()&&this.tabs.some(e=>e.filename.toLowerCase()===n))throw`tabs-manager: filename already exist`}Object.assign(e,t),this.triggerEvents()}closeTab(e){let t=e===this.selectedTab,n=this.tabs.indexOf(e);this.tabs.splice(n,1),this.tabs.length===0?this.selectedTab=null:t&&(this.selectedTab=this.tabs[Math.min(n,this.tabs.length-1)]),this.triggerEvents()}closeAllTabs(){this.selectedTab=null,this.tabs.splice(0),this.triggerEvents()}triggerEvents(){this.selectionChange.next(this.selectedTab),this.change.next(this.tabs.slice()),this.isModifiedFn&&this.modified.next()}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵprov=x({token:e,factory:e.ɵfac,providedIn:`root`})}},G=(e,t)=>`${t.modificationState}${t.filename}`;function K(t,n){if(t&1){let t=e();l(0,`matx-file-tab`,2),D(`tabSelect`,function(){let e=j(t).$implicit,n=C();return _(n.selectTab(e.filename))})(`tabClose`,function(){let e=j(t).$implicit,n=C();return _(n.closeTab(e.filename))}),g()}if(t&2){let e=n.$implicit,t=C();b(`text`,e.filename)(`selected`,e===t.selectedTab())(`modificationState`,e.modificationState)}}var q=class e{constructor(){this.tabSelect=p(),this.tabClose=p();let e=O(W);this.tabs=S(e.onChange,{initialValue:[]}),this.selectedTab=S(e.onSelectionChange,{initialValue:null})}dropTab(e){N(this.tabs(),e.previousIndex,e.currentIndex)}selectTab(e){this.tabSelect.emit(e)}closeTab(e){this.tabClose.emit(e)}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=r({type:e,selectors:[[`matx-file-tab-bar`]],outputs:{tabSelect:`tabSelect`,tabClose:`tabClose`},decls:3,vars:0,consts:[[`cdkDropList`,``,`cdkDropListOrientation`,`horizontal`,3,`cdkDropListDropped`],[`cdkDrag`,``,3,`text`,`selected`,`modificationState`],[`cdkDrag`,``,3,`tabSelect`,`tabClose`,`text`,`selected`,`modificationState`]],template:function(e,t){e&1&&(l(0,`matx-file-tab-container`,0),D(`cdkDropListDropped`,function(e){return t.dropTab(e)}),v(1,K,1,3,`matx-file-tab`,1,G),g()),e&2&&(d(),M(t.tabs()))},dependencies:[V,U,P,F,I],styles:[`.cdk-drag-preview[_ngcontent-%COMP%] {
  background-color: white;
  overflow: hidden;
}

.cdk-drag-placeholder[_ngcontent-%COMP%] {
  opacity: 0;
}

.cdk-drag-animating[_ngcontent-%COMP%] {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}`]})}};export{W as n,H as r,q as t};