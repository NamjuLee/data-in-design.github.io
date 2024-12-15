"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[9701],{79701:(e,r,t)=>{t.r(r),t.d(r,{createLabelFunction:()=>g,formatField:()=>h});var n=t(50076),a=t(76460),u=t(30726),l=t(65256),i=t(50265),s=t(32808),o=t(65460),c=t(98976);const f=a.A.getLogger("esri.layers.support.labelFormatUtils"),d={type:"simple",evaluate:()=>null},p={getAttribute:(e,r)=>e.field(r)};async function g(e,r,a){if(!e||!e.symbol)return d;const l=e.where,i=(0,o.XJ)(e),s=l?await t.e(278).then(t.bind(t,278)):null;let g;if("arcade"===i.type){const e=await(0,c.$I)(i.expression,a,r);if((0,u.$I)(e))return d;g={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):t});if(null!=r)return r.toString()}catch(r){f.error(new n.A("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==(0,o.tH)(i.expression)}}else g={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,(t=>{const n=t.slice(1,-1),a=r.get(n);if(!a)return t;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":h(u,a)}))};if(l){let e;try{e=s.WhereClause.create(l,r)}catch(w){return f.error(new n.A("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:w})),d}const t=g.evaluate;g.evaluate=r=>{const a="attributes"in r?void 0:p;try{if(e.testFeature(r,a))return t(r)}catch(w){f.error(new n.A("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:r,error:w}))}return null}}return g}function h(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const r=+e,n="range"in t?t.range[0]:t.minValue,a="range"in t?t.range[1]:t.maxValue;if(n<=r&&r<=a)return t.name}let n=e;return"date"===r.type||"esriFieldTypeDate"===r.type?n=(0,l.Yq)(n,(0,l.J2)("short-date")):(0,s.WA)(r)&&(n=(0,i.ZV)(+n)),n||""}}}]);
//# sourceMappingURL=9701.9590ba67.chunk.js.map