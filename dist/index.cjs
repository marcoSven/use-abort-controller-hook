var r=require("react");exports.useAbortController=function(){return r.useState(function(){var r={current:new AbortController};function t(t){r.current.abort(t),r.current=new AbortController}return{get abort(){return t},get controller(){return r.current},get signal(){return r.current.signal}}}())[0]};
//# sourceMappingURL=index.cjs.map
