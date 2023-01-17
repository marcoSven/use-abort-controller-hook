import{useState as r}from"react";const t=()=>r(function(){const r={current:new AbortController};function t(t){r.current.abort(t),r.current=new AbortController}return{get abort(){return t},get controller(){return r.current},get signal(){return r.current.signal}}}())[0];export{t as useAbortController};
//# sourceMappingURL=index.modern.js.map
