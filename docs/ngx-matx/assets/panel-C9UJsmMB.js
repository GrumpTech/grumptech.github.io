import{Fn as e,Hn as t,In as n,Mr as r,Nr as i,On as a,Qn as o,Rt as s,Sn as c,Un as l,Xr as u,Zn as d,dr as f,jr as p,lr as m,oi as h,ur as g}from"./ng-doc-app-processors-page-processor-Dv6j_cOm.js";import{n as _,t as v}from"./overflow-tooltip-0MNgPur8.js";import{n as y}from"./_icon-button-chunk-D-sKc_cn.js";import{t as b}from"./icon-B2IfZodr.js";var x=new u(`MAT_CARD_CONFIG`),S=(()=>{class t{appearance;constructor(){let e=h(x,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(e){return new(e||t)};static ɵcmp=(function(){return e({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(e,t){e&2&&a(`mat-mdc-card-outlined`,t.appearance===`outlined`)(`mdc-card--outlined`,t.appearance===`outlined`)(`mat-mdc-card-filled`,t.appearance===`filled`)(`mdc-card--filled`,t.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(e,t){e&1&&(g(),m(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
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
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
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
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
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
`],encapsulation:2})})()}return t})(),C=(()=>{class e{static ɵfac=function(t){return new(t||e)};static ɵdir=n({type:e,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return e})(),w=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let r=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];return e({type:n,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`],decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(e,n){e&1&&(g(r),m(0),l(1,`div`,0),m(2,1),t(),m(3,2))},encapsulation:2})})()}return n})(),T=[[[`matx-panel-header-button`]],`*`],E=[`matx-panel-header-button`,`*`],D=class t{constructor(){this.headerTitle=s(``),this.fullHeight=s(!1)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=e({type:t,selectors:[[`matx-panel`]],inputs:{headerTitle:[1,`headerTitle`],fullHeight:[1,`fullHeight`]},ngContentSelectors:E,decls:7,vars:6,consts:[[1,`title`,3,`matxOverflowTooltip`]],template:function(e,t){e&1&&(g(T),o(0,`mat-card`)(1,`mat-card-header`)(2,`div`,0),p(3),d(),m(4),d(),o(5,`mat-card-content`),m(6,1),d()()),e&2&&(a(`full-height`,t.fullHeight()),c(2),f(`matxOverflowTooltip`,t.headerTitle()),c(),i(` `,t.headerTitle(),` `),c(2),a(`full-height`,t.fullHeight()))},dependencies:[S,w,C,v],styles:[`mat-card[_ngcontent-%COMP%] {
  max-height: 100%;
}

mat-card-header[_ngcontent-%COMP%] {
  padding: 8px 16px 8px 16px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.title[_ngcontent-%COMP%] {
  white-space: nowrap;
  justify-self: left;
  flex: 1;
  margin-right: auto;
  min-width: 0;
  max-width: max-content;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

mat-card-content[_ngcontent-%COMP%] {
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-corner {
  display: none;
}
mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #aaa;
}
mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  border-radius: 4px;
  background: #eee;
}

.full-height[_ngcontent-%COMP%] {
  height: 100%;
}`]})}},O=class t{constructor(){this.icon=s.required(),this.tooltip=s.required(),this.selected=s(!1),this.disabled=s(!1)}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=e({type:t,selectors:[[`matx-panel-header-button`]],inputs:{icon:[1,`icon`],tooltip:[1,`tooltip`],selected:[1,`selected`],disabled:[1,`disabled`]},decls:3,vars:5,consts:[[`mat-icon-button`,``,3,`matTooltip`,`disabled`]],template:function(e,t){e&1&&(o(0,`button`,0)(1,`mat-icon`),p(2),d()()),e&2&&(a(`selected`,t.selected()),f(`matTooltip`,t.tooltip())(`disabled`,t.disabled()),c(2),r(t.icon()))},dependencies:[b,y,_],styles:[`[_nghost-%COMP%] {
  flex-shrink: 0;
  margin: -8px -4px;
}

button[_ngcontent-%COMP%]:not(.selected):not(:active:hover) {
  color: lightgray;
}`]})}};export{D as n,O as t};