"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[6948],{64982:(e,t,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(e,t){return new Float64Array(e,t,9)}n.d(t,{a:()=>o,c:()=>r});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,n,r,o,i,c,a,u){return[e,t,n,r,o,i,c,a,u]},createView:o},Symbol.toStringTag,{value:"Module"}))},37084:(e,t,n)=>{n.d(t,{c:()=>A,g:()=>l,j:()=>L,k:()=>g,m:()=>f,s:()=>s});var r=n(64982),o=n(52482),i=n(83670),c=n(86226),a=n(45136),u=n(11461);function s(e,t,n){n*=.5;const r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function l(e,t){const n=2*Math.acos(t[3]),r=Math.sin(n/2);return r>(0,c.g)()?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function f(e,t,n){const r=t[0],o=t[1],i=t[2],c=t[3],a=n[0],u=n[1],s=n[2],l=n[3];return e[0]=r*l+c*a+o*s-i*u,e[1]=o*l+c*u+i*a-r*s,e[2]=i*l+c*s+r*u-o*a,e[3]=c*l-r*a-o*u-i*s,e}function d(e,t,n,r){const o=t[0],i=t[1],a=t[2],u=t[3];let s,l,f,d,A,y=n[0],g=n[1],h=n[2],b=n[3];return l=o*y+i*g+a*h+u*b,l<0&&(l=-l,y=-y,g=-g,h=-h,b=-b),1-l>(0,c.g)()?(s=Math.acos(l),f=Math.sin(s),d=Math.sin((1-r)*s)/f,A=Math.sin(r*s)/f):(d=1-r,A=r),e[0]=d*o+A*y,e[1]=d*i+A*g,e[2]=d*a+A*h,e[3]=d*u+A*b,e}function A(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function y(e,t){const n=t[0]+t[4]+t[8];let r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;r=Math.sqrt(t[3*n+n]-t[3*o+o]-t[3*i+i]+1),e[n]=.5*r,r=.5/r,e[3]=(t[3*o+i]-t[3*i+o])*r,e[o]=(t[3*o+n]+t[3*n+o])*r,e[i]=(t[3*i+n]+t[3*n+i])*r}return e}function g(e,t,n,r){const o=.5*Math.PI/180;t*=o,n*=o,r*=o;const i=Math.sin(t),c=Math.cos(t),a=Math.sin(n),u=Math.cos(n),s=Math.sin(r),l=Math.cos(r);return e[0]=i*u*l-c*a*s,e[1]=c*a*l+i*u*s,e[2]=c*u*s-i*a*l,e[3]=c*u*l+i*a*s,e}const h=u.c,b=u.s,w=u.a,p=f,O=u.b,M=u.d,T=u.l,m=u.e,I=m,U=u.f,C=U,E=u.n,L=u.g,S=u.h;const v=(0,i.c)(),F=(0,i.f)(1,0,0),R=(0,i.f)(0,1,0);const N=(0,o.a)(),P=(0,o.a)();const D=(0,r.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:s,getAxisAngle:l,multiply:f,rotateX:function(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],c=t[3],a=Math.sin(n),u=Math.cos(n);return e[0]=r*u+c*a,e[1]=o*u+i*a,e[2]=i*u-o*a,e[3]=c*u-r*a,e},rotateY:function(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],c=t[3],a=Math.sin(n),u=Math.cos(n);return e[0]=r*u-i*a,e[1]=o*u+c*a,e[2]=i*u+r*a,e[3]=c*u-o*a,e},rotateZ:function(e,t,n){n*=.5;const r=t[0],o=t[1],i=t[2],c=t[3],a=Math.sin(n),u=Math.cos(n);return e[0]=r*u+o*a,e[1]=o*u-r*a,e[2]=i*u+c*a,e[3]=c*u-i*a,e},calculateW:function(e,t){const n=t[0],r=t[1],o=t[2];return e[0]=n,e[1]=r,e[2]=o,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),e},slerp:d,random:function(e){const t=c.R,n=t(),r=t(),o=t(),i=Math.sqrt(1-n),a=Math.sqrt(n);return e[0]=i*Math.sin(2*Math.PI*r),e[1]=i*Math.cos(2*Math.PI*r),e[2]=a*Math.sin(2*Math.PI*o),e[3]=a*Math.cos(2*Math.PI*o),e},invert:function(e,t){const n=t[0],r=t[1],o=t[2],i=t[3],c=n*n+r*r+o*o+i*i,a=c?1/c:0;return e[0]=-n*a,e[1]=-r*a,e[2]=-o*a,e[3]=i*a,e},conjugate:A,fromMat3:y,fromEuler:g,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:h,set:b,add:w,mul:p,scale:O,dot:M,lerp:T,length:m,len:I,squaredLength:U,sqrLen:C,normalize:E,exactEquals:L,equals:S,rotationTo:function(e,t,n){const r=(0,a.e)(t,n);return r<-.999999?((0,a.f)(v,F,t),(0,a.u)(v)<1e-6&&(0,a.f)(v,R,t),(0,a.n)(v,v),s(e,v,Math.PI),e):r>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,a.f)(v,t,n),e[0]=v[0],e[1]=v[1],e[2]=v[2],e[3]=1+r,E(e,e))},sqlerp:function(e,t,n,r,o,i){return d(N,t,o,i),d(P,n,r,i),d(e,N,P,2*i*(1-i)),e},setAxes:function(e,t,n,r){const o=D;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-t[0],o[5]=-t[1],o[8]=-t[2],E(e,y(e,o))}},Symbol.toStringTag,{value:"Module"}))},1081:(e,t,n)=>{function r(){const e=new Float32Array(4);return e[3]=1,e}function o(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}n.d(t,{b:()=>o,c:()=>r});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:function(e,t,n,r){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=r,o},createView:function(e,t){return new Float32Array(e,t,4)}},Symbol.toStringTag,{value:"Module"}))},52482:(e,t,n)=>{function r(){return[0,0,0,1]}function o(e){return[e[0],e[1],e[2],e[3]]}function i(e,t){return new Float64Array(e,t,4)}n.d(t,{I:()=>c,a:()=>r,b:()=>o,c:()=>i});const c=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:function(e,t,n,r){return[e,t,n,r]},createView:i,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},9517:(e,t,n)=>{function r(){return new Float32Array(3)}function o(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,n){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=n,r}function c(){return r()}function a(){return i(1,1,1)}function u(){return i(1,0,0)}function s(){return i(0,1,0)}function l(){return i(0,0,1)}n.d(t,{b:()=>o,c:()=>r,f:()=>i});const f=c(),d=a(),A=u(),y=s(),g=l();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:i,createView:function(e,t){return new Float32Array(e,t,3)},zeros:c,ones:a,unitX:u,unitY:s,unitZ:l,ZEROS:f,ONES:d,UNIT_X:A,UNIT_Y:y,UNIT_Z:g},Symbol.toStringTag,{value:"Module"}))},62562:(e,t,n)=>{n.d(t,{MA:()=>A,m0:()=>w,wH:()=>h});var r=n(8),o=n(50076),i=n(53084),c=n(76460),a=n(87041),u=n(66470);const s=c.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,n){let r="",i=0;for(;i<n;){const c=e[t+i];if(c<128)r+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&c)<<6|63&e[t+i+1];r+=String.fromCharCode(a),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&c)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];r+=String.fromCharCode(a),i+=3}else{if(!(c>=240&&c<248))throw new o.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new o.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&c)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(a);i+=4}}}return r}function f(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],c=i.valueType||i.type,a=O[c];n.fields[i.property]=a(e,r),r+=p[c].BYTES_PER_ELEMENT}return n.byteCount=r,n}function d(e,t,n){const r=[];let i,c,a=0;for(c=0;c<e;c+=1){if(i=t[c],i>0){if(r.push(l(n,a,i-1)),0!==n[a+i-1])throw new o.A("string-array-error","Invalid string array: missing null termination.")}else r.push(null);a+=i}return r}function A(e,t){return new(0,p[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function y(e,t,n){const r=null!=t.header?f(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let a=r.byteCount;for(let u=0;u<t.ordering.length;u++){const e=t.ordering[u],n=(0,i.o8)(t[e]);if(n.count=r.fields.count,"String"===n.valueType){if(n.byteOffset=a,n.byteCount=r.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new o.A("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!M(n.valueType))throw new o.A("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=T(n.valueType);a+=a%e!=0?e-a%e:0,n.byteOffset=a,n.byteCount=e*n.valuesPerElement*n.count}}a+=n.byteCount,c.entries[e]=n}return c.byteCount=a-c.byteOffset,c}function g(e,t,n){if(t!==e&&s.error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new o.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function h(e,t){const n=f(e,t&&t.header);let o=n.byteCount;const i={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},c=n.fields,a=null!=c.vertexCount?c.vertexCount:c.count;for(const l of t.ordering){if(!t.vertexAttributes[l])continue;const e=(0,r.A)((0,r.A)({},t.vertexAttributes[l]),{},{byteOffset:o,count:a}),n=b[l]?b[l]:"_"+l;i.vertexAttributes[n]=e,o+=T(e.valueType)*e.valuesPerElement*a}const u=c.faceCount;if(t.faces&&u){i.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n=(0,r.A)((0,r.A)({},t.faces[e]),{},{byteOffset:o,count:u});i.faces[e]=n,o+=T(n.valueType)*n.valuesPerElement*u}}const s=c.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){i.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n=(0,r.A)((0,r.A)({},t.featureAttributes[e]),{},{byteOffset:o,count:s});i.featureAttributes[e]=n,o+=("UInt64"===n.valueType?8:T(n.valueType))*n.valuesPerElement*s}}return g(o,e.byteLength,"geometry"),i.byteCount=o-i.byteOffset,i}const b={position:u.r.POSITION,normal:u.r.NORMAL,color:u.r.COLOR,uv0:u.r.UV0,region:u.r.UVREGION};function w(e,t,n){if("lepcc-rgb"===e.encoding)return(0,a.mb)(t);if("lepcc-intensity"===e.encoding)return(0,a.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new o.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=y(t,e,n);g(r.byteOffset+r.byteCount,t.byteLength,"attribute");const i=r.entries.attributeValues||r.entries.objectIds;if(i){if("String"===i.valueType){const e=r.entries.attributeByteCounts,n=A(t,e),o=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return d(e.count,n,o)}return A(t,i)}throw new o.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const p={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},O={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function M(e){return p.hasOwnProperty(e)}function T(e){return M(e)?p[e].BYTES_PER_ELEMENT:0}},87041:(e,t,n)=>{n.d(t,{Ax:()=>b,Me:()=>s,mb:()=>y});var r=n(50076);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,o),checksum:t.getUint32(n+i.checksumOffset,o)}}const a={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function u(e,t){return{sizeLo:e.getUint32(t+a.sizeLo,o),sizeHi:e.getUint32(t+a.sizeHi,o),minX:e.getFloat64(t+a.minX,o),minY:e.getFloat64(t+a.minY,o),minZ:e.getFloat64(t+a.minZ,o),maxX:e.getFloat64(t+a.maxX,o),maxY:e.getFloat64(t+a.maxY,o),maxZ:e.getFloat64(t+a.maxZ,o),errorX:e.getFloat64(t+a.errorX,o),errorY:e.getFloat64(t+a.errorY,o),errorZ:e.getFloat64(t+a.errorZ,o),count:e.getUint32(t+a.count,o),reserved:e.getUint32(t+a.reserved,o)}}function s(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:s}=c(e,t,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const f=u(t,n);if(n+=a.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),A=[],y=[],g=[],h=[];if(n=l(e,n,A),n=l(e,n,y),n=l(e,n,g),n=l(e,n,h),n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad length");let b=0,w=0;for(let r=0;r<A.length;r++){w+=A[r];let e=0;for(let t=0;t<y[r];t++){e+=g[b];const t=h[b];d[3*b]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*b+1]=Math.min(f.maxY,f.minY+2*f.errorY*w),d[3*b+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),b++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function l(e,t,n){const r=[];t=f(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=f(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function f(e,t,n){const i=new DataView(e,t),c=i.getUint8(0),a=31&c,u=!!(32&c),s=(192&c)>>6;let l=0;if(0===s)l=i.getUint32(1,o),t+=5;else if(1===s)l=i.getUint16(1,o),t+=3;else{if(2!==s)throw new r.A("lepcc-decode-error","Bad count type");l=i.getUint8(1),t+=2}if(u)throw new r.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(l*a/8),d=new Uint8Array(e,t,f);let A=0,y=0,g=0;const h=-1>>>32-a;for(let r=0;r<l;r++){for(;y<a;)A|=d[g]<<y,y+=8,g+=1;n[r]=A&h,A>>>=a,y-=a,y+a>32&&(A|=d[g-1]>>8-y)}return t+g}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function A(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function y(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:a}=c(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(a>1)throw new r.A("lepcc-decode-error","Unknown version");const u=A(t,n);if(n+=d.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+n!==e.byteLength||u.colorMapCount>256)throw new r.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*u.colorMapCount),o=new Uint8Array(e,n+3*u.colorMapCount,u.count),i=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++){const n=o[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+n!==e.byteLength||0!==u.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(n+3!==e.byteLength||1!==u.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");const o=t.getUint8(n),i=t.getUint8(n+1),c=t.getUint8(n+2),a=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++)a[3*e]=o,a[3*e+1]=i,a[3*e+2]=c;return a}throw new r.A("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)}const g={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,t){return{sizeLo:e.getUint32(t+g.sizeLo,o),sizeHi:e.getUint32(t+g.sizeHi,o),count:e.getUint32(t+g.count,o),scaleFactor:e.getUint16(t+g.scaleFactor,o),bitsPerPoint:e.getUint8(t+g.bitsPerPoint),reserved:e.getUint8(t+g.reserved)}}function b(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:a}=c(e,t,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(a>1)throw new r.A("lepcc-decode-error","Unknown version");const u=h(t,n);if(n+=g.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const s=new Uint16Array(u.count);if(8===u.bitsPerPoint){if(u.count+n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,u.count);for(let e=0;e<u.count;e++)s[e]=t[e]*u.scaleFactor}else if(16===u.bitsPerPoint){if(2*u.count+n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,u.count);for(let e=0;e<u.count;e++)s[e]=t[e]*u.scaleFactor}else{const t=[];if(f(e,n,t)!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");for(let e=0;e<u.count;e++)s[e]=t[e]*u.scaleFactor}return s}},66470:(e,t,n)=>{var r;n.d(t,{r:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(r||(r={}))}}]);
//# sourceMappingURL=6948.0c51af52.chunk.js.map