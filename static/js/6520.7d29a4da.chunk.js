"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[6520],{95518:(t,e,o)=>{o.d(e,{c:()=>u});var r=o(55171),s=o(3825),a=o(30726),n=o(50346),i=o(38451),p=o(44568),l=o(70652);class u{constructor(t,e,o,r){var s;this._parsedUrl=t,this._portalItem=e,this._apiKey=o,this.signal=r,this._rootDocument=null;const a=null===(s=this._parsedUrl)||void 0===s?void 0:s.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);a&&(this._urlParts={root:a[1],layerId:parseInt(a[2],10)})}async fetch(){var t;if(!this._urlParts)return null;const e=null!==(t=this._portalItem)&&void 0!==t?t:await this._portalItemFromServiceItemId();if((0,a.$I)(e))return this._loadFromUrl();const o=await this._findAndLoadRelatedPortalItem(e);return(0,a.$I)(o)?null:this._loadFeatureLayerFromPortalItem(o)}async fetchPortalItem(){var t;if(!this._urlParts)return null;const e=null!==(t=this._portalItem)&&void 0!==t?t:await this._portalItemFromServiceItemId();return(0,a.$I)(e)?null:this._findAndLoadRelatedPortalItem(e)}async _fetchRootDocument(){if((0,a.Ru)(this._rootDocument))return this._rootDocument;if((0,a.$I)(this._urlParts))return this._rootDocument={},{};const t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},e="".concat(this._urlParts.root,"/SceneServer");try{const o=await(0,s.default)(e,t);this._rootDocument=o.data}catch(o){this._rootDocument={}}return this._rootDocument}async _fetchServiceOwningPortalUrl(){var t;const e=null===(t=this._parsedUrl)||void 0===t?void 0:t.path,o=e?null===r.id||void 0===r.id?void 0:r.id.findServerInfo(e):null;if(null!==o&&void 0!==o&&o.owningSystemUrl)return o.owningSystemUrl;const a=e?e.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const t=(await(0,s.default)(a,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(i){(0,n.QP)(i)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(e){return(0,n.QP)(e),null}}async _loadFeatureLayerFromPortalItem(t){var e;await t.load({signal:this.signal});const o=await this._findMatchingAssociatedSublayerUrl(null!==(e=t.url)&&void 0!==e?e:"");return new i.default({url:o,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){var t;const e=await this._findMatchingAssociatedSublayerUrl("".concat(null===(t=this._urlParts)||void 0===t?void 0:t.root,"/FeatureServer"));return new i.default({url:e}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){var e;const o=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},a=null===(e=this._urlParts)||void 0===e?void 0:e.layerId,n=this._fetchRootDocument(),i=(0,s.default)(o,r),[p,l]=await Promise.all([i,n]),u=l&&l.layers,c=p.data&&p.data.layers;if(!Array.isArray(c))throw new Error("expected layers array");if(Array.isArray(u)){for(let s=0;s<Math.min(u.length,c.length);s++)if(u[s].id===a)return"".concat(o,"/").concat(c[s].id)}else if(null!=a&&a<c.length)return"".concat(o,"/").concat(c[a].id);throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const e=new l.default({id:t,apiKey:this._apiKey}),o=await this._fetchServiceOwningPortalUrl();(0,a.Ru)(o)&&(e.portal=new p.A({url:o}));try{return e.load({signal:this.signal})}catch(r){return(0,n.QP)(r),null}}}},2395:(t,e,o)=>{o.d(e,{L0:()=>v,Ot:()=>y,W4:()=>p,uV:()=>c});var r=o(35143),s=o(42553),a=o(46053),n=(o(18690),o(40565),o(6409)),i=o(85842);let p=class extends s.oY{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,a.MZ)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,r._)([(0,a.MZ)({type:Number})],p.prototype,"rootIndex",void 0),(0,r._)([(0,a.MZ)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,r._)([(0,i.$)("esri.layer.support.I3SNodePageDefinition")],p);let l=class extends s.oY{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,a.MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,a.MZ)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,i.$)("esri.layer.support.I3SMaterialTexture")],l);let u=class extends s.oY{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,a.MZ)({type:[Number]})],u.prototype,"baseColorFactor",void 0),(0,r._)([(0,a.MZ)({type:l})],u.prototype,"baseColorTexture",void 0),(0,r._)([(0,a.MZ)({type:l})],u.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,a.MZ)({type:Number})],u.prototype,"metallicFactor",void 0),(0,r._)([(0,a.MZ)({type:Number})],u.prototype,"roughnessFactor",void 0),u=(0,r._)([(0,i.$)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],u);let c=class extends s.oY{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,n.e)({opaque:"opaque",mask:"mask",blend:"blend"})],c.prototype,"alphaMode",void 0),(0,r._)([(0,a.MZ)({type:Number})],c.prototype,"alphaCutoff",void 0),(0,r._)([(0,a.MZ)({type:Boolean})],c.prototype,"doubleSided",void 0),(0,r._)([(0,n.e)({none:"none",back:"back",front:"front"})],c.prototype,"cullFace",void 0),(0,r._)([(0,a.MZ)({type:l})],c.prototype,"normalTexture",void 0),(0,r._)([(0,a.MZ)({type:l})],c.prototype,"occlusionTexture",void 0),(0,r._)([(0,a.MZ)({type:l})],c.prototype,"emissiveTexture",void 0),(0,r._)([(0,a.MZ)({type:[Number]})],c.prototype,"emissiveFactor",void 0),(0,r._)([(0,a.MZ)({type:u})],c.prototype,"pbrMetallicRoughness",void 0),c=(0,r._)([(0,i.$)("esri.layer.support.I3SMaterialDefinition")],c);let d=class extends s.oY{};(0,r._)([(0,a.MZ)({type:String,json:{read:{source:["name","index"],reader:(t,e)=>null!=t?t:"".concat(e.index)}}})],d.prototype,"name",void 0),(0,r._)([(0,n.e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],d.prototype,"format",void 0),d=(0,r._)([(0,i.$)("esri.layer.support.I3STextureFormat")],d);let y=class extends s.oY{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,a.MZ)({type:[d]})],y.prototype,"formats",void 0),(0,r._)([(0,a.MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,r._)([(0,i.$)("esri.layer.support.I3STextureSetDefinition")],y);let h=class extends s.oY{};(0,r._)([(0,n.e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],h.prototype,"type",void 0),(0,r._)([(0,a.MZ)({type:Number})],h.prototype,"component",void 0),h=(0,r._)([(0,i.$)("esri.layer.support.I3SGeometryAttribute")],h);let f=class extends s.oY{};(0,r._)([(0,n.e)({draco:"draco"})],f.prototype,"encoding",void 0),(0,r._)([(0,a.MZ)({type:[String]})],f.prototype,"attributes",void 0),f=(0,r._)([(0,i.$)("esri.layer.support.I3SGeometryCompressedAttributes")],f);let m=class extends s.oY{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,a.MZ)({type:Number})],m.prototype,"offset",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"position",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"normal",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"uv0",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"color",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"uvRegion",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"featureId",void 0),(0,r._)([(0,a.MZ)({type:h})],m.prototype,"faceRange",void 0),(0,r._)([(0,a.MZ)({type:f})],m.prototype,"compressedAttributes",void 0),m=(0,r._)([(0,i.$)("esri.layer.support.I3SGeometryBuffer")],m);let v=class extends s.oY{};(0,r._)([(0,n.e)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,r._)([(0,a.MZ)()],v.prototype,"geometryBuffers",void 0),v=(0,r._)([(0,i.$)("esri.layer.support.I3SGeometryDefinition")],v)},16981:(t,e,o)=>{o.d(e,{P:()=>r});const r={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},98929:(t,e,o)=>{o.d(e,{s1:()=>S});var r=o(3825),s=(o(18690),o(50076),o(81806),o(50346)),a=o(78393),n=(o(30672),o(64982)),i=(o(95941),o(23209)),p=(o(37084),o(1081)),l=o(52482),u=(o(45136),o(83670)),c=(o(305),o(77639),o(13312),o(2413)),d=(o(80963),o(97015),o(64465),o(62562));var y,h=o(8),f=(o(69539),o(83529));function m(t){return(0,h.A)((0,h.A)((0,h.A)({},v),t),{},{type:"solid"})}!function(t){t[t.INVISIBLE=0]="INVISIBLE",t[t.TRANSPARENT=1]="TRANSPARENT",t[t.OPAQUE=2]="OPAQUE"}(y||(y={}));const v={color:(0,f.f)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:y.OPAQUE,hasSlicePlane:!1};(0,f.f)(0,0,0,.2),y.OPAQUE;o(51990);var _=o(9517);o(11461),o(42294),o(89802);(0,l.a)(),(0,u.c)(),(0,u.c)(),(0,f.c)(),(0,n.c)();function I(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[-1,-1,-1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0,0,1];return{center:(0,u.a)(t),halfSize:(0,_.b)(e),quaternion:(0,p.b)(o)}}(()=>{const t=new Int8Array(162);let e=0;const o=o=>{for(let r=0;r<o.length;r++)t[e+r]=o[r];e+=6};o([6,2,3,1,5,4]),o([0,2,3,1,5,4]),o([0,2,3,7,5,4]),o([0,1,3,2,6,4]),o([0,1,3,2,0,0]),o([0,1,5,7,3,2]),o([0,1,3,7,6,4]),o([0,1,3,7,6,2]),o([0,1,5,7,6,2]),o([0,1,5,4,6,2]),o([0,1,5,4,0,0]),o([0,1,3,7,5,4]),o([0,2,6,4,0,0]),o([0,0,0,0,0,0]),o([1,3,7,5,0,0]),o([2,3,7,6,4,0]),o([2,3,7,6,0,0]),o([2,3,1,5,7,6]),o([0,1,5,7,6,2]),o([0,1,5,7,6,4]),o([0,1,3,7,6,4]),o([4,5,7,6,2,0]),o([4,5,7,6,0,0]),o([4,5,1,3,7,6]),o([0,2,3,7,5,4]),o([6,2,3,7,5,4]),o([6,2,3,1,5,4])})();(0,c.vt)();var g;function S(t,e,o,a,n){const i=[];for(const r of e)if(r&&n.includes(r.name)){const e="".concat(t,"/nodes/").concat(o,"/attributes/").concat(r.key,"/0");i.push({url:e,storageInfo:r})}return(0,s.Lx)(i.map((t=>(0,r.default)(t.url,{responseType:"array-buffer"}).then((e=>(0,d.m0)(t.storageInfo,e.data)))))).then((t=>{const e=[];for(const o of a){const r={};for(let e=0;e<t.length;e++)null!=t[e].value&&(r[i[e].storageInfo.name]=x(t[e].value,o));e.push(r)}return e}))}!function(t){t[t.OUTSIDE=0]="OUTSIDE",t[t.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",t[t.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",t[t.INSIDE=3]="INSIDE"}(g||(g={}));const T=-32768,M=-(2**31);function x(t,e){if(!t)return null;const o=t[e];return(0,a.IY)(t)?o===T?null:o:(0,a._G)(t)?o===M?null:o:o!=o?null:o}m({color:[0,0,0,0],opacity:0});(0,u.c)(),(0,u.c)(),(0,u.c)(),(0,l.a)();new Float64Array(24),(0,u.c)(),(0,u.c)(),(0,n.c)();(0,i.c)(),(0,p.c)(),(0,c.vt)(),(0,c.vt)(),I(),new Array(72),(0,i.c)()},51990:(t,e,o)=>{o.d(e,{k5:()=>r});var r;o(15941);!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(r||(r={}))},2257:(t,e,o)=>{o.d(e,{D:()=>n,T:()=>a});var r=o(30726),s=o(32808);async function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.popupTemplate;if((0,r.$I)(e))return[];const o=await e.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:a}=e,{objectIdField:n,typeIdField:i,globalIdField:p,relationships:l}=t;if(o.includes("*"))return["*"];const u=a?await(0,s.eX)(t):[],c=(0,s.DB)(t.fieldsIndex,[...o,...u]);return i&&c.push(i),c&&n&&t.fieldsIndex.has(n)&&!c.includes(n)&&c.push(n),c&&p&&t.fieldsIndex.has(p)&&!c.includes(p)&&c.push(p),l&&l.forEach((e=>{const{keyField:o}=e;c&&o&&t.fieldsIndex.has(o)&&!c.includes(o)&&c.push(o)})),c}function n(t,e){return t.popupTemplate?t.popupTemplate:(0,r.Ru)(e)&&e.defaultPopupTemplateEnabled&&(0,r.Ru)(t.defaultPopupTemplate)?t.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=6520.7d29a4da.chunk.js.map