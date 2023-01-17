import{useState as r}from"react";var t=function(){return r(function(){var r={current:new AbortController};function t(t){r.current.abort(t),r.current=new AbortController}return{get abort(){return t},get controller(){return r.current},get signal(){return r.current.signal}}}())[0]};export{t as useAbortController};
//# sourceMappingURL=index.module.js.map
