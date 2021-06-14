(window["webpackJsonpconference-details-widget"]=window["webpackJsonpconference-details-widget"]||[]).push([[0],{62:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","notAuthenticated":"User is not authenticated."},"entities":{"conference":{"id":"ID","room":"entities.conference.room"}}}')},63:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"widgetName":"Dettagli a proposito di \'{{widgetNamePlaceholder}}\'","name":"Nome","value":"Valore","loading":"Caricamento in corso...","notAuthenticated":"L\'utente non \xe8 autenticato."},"entities":{"conference":{"id":"ID","room":"entit\xe0.conference.room"}}}')},72:function(e,t,n){e.exports=n(92)},73:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);n(73);var a=n(27),r=n(28),o=n(35),c=n(20),i=n(29),s=n(65),l=n(24),u=n(0),f=n.n(u),d=n(12),p=n.n(d),m=f.a.createContext(null),b=n(16),h=n.n(b),O=n(31),v=n(37),y=n(23),k=n(124),w=n(64),g=n(3),j=n.n(g),E=(j.a.shape({initialized:j.a.bool,authenticated:j.a.bool}),n(66));j.a.oneOfType([j.a.func,j.a.shape({current:j.a.elementType}),j.a.shape(null)]);var P=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},D=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},C=n(126),N=(j.a.shape({id:j.a.number,room:j.a.string}),n(118)),S=n(122),x=n(121),z=n(119),R=n(120),A=function(e){var t=e.t,n=e.conference;return f.a.createElement(N.a,null,f.a.createElement(z.a,null,f.a.createElement(R.a,null,f.a.createElement(x.a,null,t("common.name")),f.a.createElement(x.a,null,t("common.value")))),f.a.createElement(S.a,null,f.a.createElement(R.a,null,f.a.createElement(x.a,null,f.a.createElement("span",null,t("entities.conference.id"))),f.a.createElement(x.a,{"data-testid":"conferenceIdValue"},f.a.createElement("span",null,n.id))),f.a.createElement(R.a,null,f.a.createElement(x.a,null,f.a.createElement("span",null,t("entities.conference.room"))),f.a.createElement(x.a,null,f.a.createElement("span",null,n.room)))))};A.defaultProps={conference:[]};var L=Object(y.b)()(A),T=function(e){var t=e.t,n=e.conference;return f.a.createElement(C.a,null,f.a.createElement("h3",{"data-testid":"details_title"},t("common.widgetName",{widgetNamePlaceholder:"Conference"})),f.a.createElement(L,{conference:n}))};T.defaultProps={conference:{}};var F=Object(y.b)()(T),I=n(4),M=n(127),U=n(129),J=n(123),K=n(5),V=n(128),H=n(59),W=n.n(H),B=n(60),G=n.n(B),_=n(58),q=n.n(_),Q=n(61),X=n.n(Q),Y={success:q.a,error:W.a,info:G.a},Z={success:3e3,error:null,info:5e3},$=function e(t){var n=t.className,a=t.classes,r=t.status,o=t.message,c=t.onClose,i=!!o,s=r||e.INFO,l=Y[s],u=Z[s],d=f.a.createElement("span",{className:a.message},f.a.createElement(l,{className:Object(I.a)(a.icon,a.iconStatus)}),o);return f.a.createElement(M.a,{open:i,onClose:c,autoHideDuration:u},f.a.createElement(U.a,{className:Object(I.a)(a[s],n),message:d,action:[f.a.createElement(V.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},f.a.createElement(X.a,{className:a.icon}))]}))};$.SUCCESS="success",$.ERROR="error",$.defaultProps={message:null,className:"",status:$.INFO="info",onClose:function(){}};var ee=Object(K.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:J.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})($),te=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(){var e=Object(O.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/conferences","/").concat(n),r=ae({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",te(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,conference:{},notificationStatus:null,notificationMessage:null},n.theme=Object(w.a)(),n.closeNotification=n.closeNotification.bind(Object(v.a)(n)),n.fetchData=n.fetchData.bind(Object(v.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(O.a)(h.a.mark((function e(){var t,n,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,re(r,a);case 6:o=e.sent,this.setState((function(){return{conference:o,loading:!1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:ee.ERROR,loading:!1}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.conference,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,o=this.props,c=o.t,i=o.keycloak;return f.a.createElement(k.a,{theme:this.theme},f.a.createElement(D,{keycloak:i},c("common.notAuthenticated")),f.a.createElement(P,{keycloak:i},r&&c("common.loading"),!r&&f.a.createElement(F,{conference:t})),f.a.createElement(ee,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(f.a.Component);oe.defaultProps={onError:function(){},serviceUrl:""};var ce=function(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(r=Object(o.a)(this,(t=Object(c.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,o=Object(E.a)(n,["forwardedRef"]);return f.a.createElement(e,Object.assign({},o,{ref:a,keycloak:t}))},r}return Object(i.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return f.a.createElement(m.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return f.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(y.b)()(oe)),ie=n(49),se={en:n(62),it:n(63)};function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ue=Object.keys(se).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",se[t])))}),{}),fe=(ie.a.t,function(e){!function(e,t){ie.a.use(y.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:ue,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en")});function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(){return window&&window.entando&&window.entando.keycloak&&pe({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},be="service-url",he="locale",Oe=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=me(),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"connectedCallback",value:function(){var e,t,n=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.keycloak=pe({},me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(e="keycloak",t=function(){n.keycloak=pe({},me(),{initialized:!0}),n.render()},window.addEventListener(e,t),function(){window.removeEventListener(e,t)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(be)||"",n=this.getAttribute(he);fe(n);var a=this.getAttribute("id"),r=f.a.createElement(ce,{id:a,onError:function(t){var n=new CustomEvent("".concat("conference.details.","error"),{details:{error:t}});e.dispatchEvent(n)},serviceUrl:t});p.a.render(f.a.createElement(m.Provider,{value:this.keycloak},r),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(s.a)(HTMLElement));customElements.define("conference-details",Oe)}},[[72,1,2]]]);
//# sourceMappingURL=main.1fffea80.chunk.js.map