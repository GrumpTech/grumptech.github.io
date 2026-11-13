import{C as e,Et as t,Ht as n,L as r,Pt as i,R as a,T as o,Ut as s,_ as c,at as l,b as u,k as d,p as f,s as p,zt as m}from"./chunk-75oUnh3I.js";import{t as h}from"./chunk-CwgEjqHW.js";import{t as g}from"./chunk-Y9EaFUat.js";import{t as _}from"./chunk-eNiuUyfo.js";function v(e,t){return!!e.children(t).length}function y(e){return x(e.v)+`:`+x(e.w)+`:`+x(e.name)}var b=/:/g;function x(e){return e?String(e).replace(b,`\\:`):``}function S(e,t){t&&e.attr(`style`,t)}function C(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function w(e,n){var r=n.graph();if(l(r)){var i=r.transition;if(t(i))return i(e)}return e}function T(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}S(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var E={},D=function(e){let t=Object.keys(e);for(let n of t)E[n]=e[n]},O=async function(e,t,n,r,i,a){let s=r.select(`[id="${n}"]`),l=Object.keys(e);for(let n of l){let r=e[n],l=`default`;r.classes.length>0&&(l=r.classes.join(` `)),l+=` flowchart-label`;let m=u(r.styles),h=r.text===void 0?r.id:r.text,g;if(o.info(`vertex`,r,r.labelType),r.labelType===`markdown`)o.info(`vertex`,r,r.labelType);else if(f(c().flowchart.htmlLabels))g=T(s,{label:h}).node(),g.parentNode.removeChild(g);else{let e=i.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,m.labelStyle.replace(`color:`,`fill:`));let t=h.split(p.lineBreakRegex);for(let n of t){let t=i.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(r.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await d(h,c());t.setNode(r.id,{labelStyle:m.labelStyle,shape:v,labelText:y,labelType:r.labelType,rx:_,ry:_,class:l,style:m.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:a.db.getTooltip(r.id)||``,domId:a.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type===`group`?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:c().flowchart.padding}),o.info(`setNode`,{labelStyle:m.labelStyle,labelType:r.labelType,shape:v,labelText:y,rx:_,ry:_,class:l,style:m.style,id:r.id,domId:a.db.lookUpDomId(r.id),width:r.type===`group`?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:c().flowchart.padding})}},k=async function(t,n,r){o.info(`abc78 edges = `,t);let i=0,a={},s,l;if(t.defaultStyle!==void 0){let e=u(t.defaultStyle);s=e.style,l=e.labelStyle}for(let r of t){i++;let f=`L-`+r.start+`-`+r.end;a[f]===void 0?(a[f]=0,o.info(`abc78 new entry`,f,a[f])):(a[f]++,o.info(`abc78 new entry`,f,a[f]));let h=f+`-`+a[f];o.info(`abc78 new link id to be used is`,f,h,a[f]);let g=`LS-`+r.start,_=`LE-`+r.end,v={style:``,labelStyle:``};switch(v.minlen=r.length||1,v.arrowhead=r.type===`arrow_open`?`none`:`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,r.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`}let y=``,b=``;switch(r.stroke){case`normal`:y=`fill:none;`,s!==void 0&&(y=s),l!==void 0&&(b=l),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`}if(r.style!==void 0){let e=u(r.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,v.curve=r.interpolate===void 0?t.defaultInterpolate===void 0?e(E.curve,m):e(t.defaultInterpolate,m):e(r.interpolate,m),r.text===void 0?r.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=r.labelType,v.label=await d(r.text.replace(p.lineBreakRegex,`
`),c()),r.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=h,v.classes=`flowchart-link `+g+` `+_,n.setEdge(r.start,r.end,v,i)}},A={setConf:D,addVertices:O,addEdges:k,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,i,l){o.info(`Drawing flowchart`);let u=l.db.getDirection();u===void 0&&(u=`TD`);let{securityLevel:d,flowchart:f}=c(),p=f.nodeSpacing||50,m=f.rankSpacing||50,h;d===`sandbox`&&(h=n(`#i`+t));let v=n(d===`sandbox`?h.nodes()[0].contentDocument.body:`body`),y=d===`sandbox`?h.nodes()[0].contentDocument:document,b=new g({multigraph:!0,compound:!0}).setGraph({rankdir:u,nodesep:p,ranksep:m,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=l.db.getSubGraphs();o.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],o.info(`Subgraph - `,x),l.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=l.db.getVertices(),w=l.db.getEdges();o.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],s(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)o.info(`Setting up subgraphs`,x.nodes[e],x.id),b.setParent(x.nodes[e],x.id)}await O(C,b,t,v,y,l),await k(w,b);let E=v.select(`[id="${t}"]`),D=v.select(`#`+t+` g`);if(await _(D,b,[`point`,`circle`,`cross`],`flowchart`,t),a.insertTitle(E,`flowchartTitleText`,f.titleTopMargin,l.db.getDiagramTitle()),r(b,E,f.diagramPadding,f.useMaxWidth),l.db.indexNodes(`subGraph`+T),!f.htmlLabels){let e=y.querySelectorAll(`[id="`+t+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=y.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let r=C[e];if(r.link){let i=n(`#`+t+` [id="`+e+`"]`);if(i){let e=y.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,r.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,r.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),d===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):r.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,r.linkTarget);let t=i.insert(function(){return e},`:first-child`),n=i.select(`.label-container`);n&&t.append(function(){return n.node()});let a=i.select(`.label`);a&&t.append(function(){return a.node()})}}})}},j=(e,t)=>{let n=h,r=n(e,`r`),a=n(e,`g`),o=n(e,`b`);return i(r,a,o,t)},M=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${j(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{S as a,v as c,C as i,M as n,w as o,T as r,y as s,A as t};