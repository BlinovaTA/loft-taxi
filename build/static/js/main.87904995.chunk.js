(this["webpackJsonploft-taxi"]=this["webpackJsonploft-taxi"]||[]).push([[0],{127:function(e,t,r){},189:function(e,t,r){},208:function(e,t,r){},209:function(e,t,r){},210:function(e,t,r){},211:function(e,t,r){},226:function(e,t,r){},227:function(e,t,r){},228:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(28),s=r.n(c),o=(r(127),r(15)),i=r(17),u="SET_CARD_SUCCESS",d="SET_CARD_FAILURE",l="SET_CARD_DATA",p="GET_CARD_DATA",j=function(e,t,r,a){return{type:u,payload:{cardNumber:e,expiryDate:t,cardName:r,cvc:a}}},b=function(e){return{type:d,payload:{error:e}}},m="GET_ADDRESS_LIST",f="SET_ADDRESS_LIST_SUCCESS",h="SET_ADDRESS_LIST_FAILURE",O=function(e){return{type:h,payload:{error:e}}},x=r(25),v="LOG_IN_SUCCESS",g="LOG_IN_FAILURE",y="LOG_OUT",N="AUTHENTICATE",_="REGISTRATION",k=function(e){return{type:v,payload:{token:e}}},w=function(e){return{type:g,payload:{error:e}}},S=r(50),D=r(45),C=r.n(D),L=r(39),A=r(1),I=function(e){var t=e.title,r=e.name,a=e.type,n=e.register,c=e.required,s=e.maxLength,o=e.value;return Object(A.jsxs)("div",{className:"form__block",children:[Object(A.jsx)("label",{htmlFor:r,className:"form__item-title",children:t}),Object(A.jsx)("input",Object(L.a)({defaultValue:o,type:a,className:"form__input",name:r,id:r},n(r,{required:c,maxLength:s})))]})},E=(r(69),r(81),function(e){var t=e.useDispatchHook,r=void 0===t?i.c:t,a=e.formChange,n=e.error,c=r(),s=Object(S.a)(),o=s.register,u=s.handleSubmit;return Object(A.jsxs)("div",{className:"wrapper login-wrapper",children:[Object(A.jsx)("div",{className:"title-container",children:Object(A.jsx)("h1",{className:"title",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(A.jsxs)("form",{className:"form login-form",onSubmit:u((function(e){var t=e.email,r=e.password;c(function(e,t){return{type:N,payload:{email:e,password:t}}}(t,r))})),children:[n&&Object(A.jsx)(C.a,{className:"form__block",banner:!0,message:n,type:"error",showIcon:!0}),Object(A.jsx)(I,{title:"Email",name:"email",type:"email",register:o}),Object(A.jsx)(I,{title:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password",register:o}),Object(A.jsx)("div",{className:"form__block",children:Object(A.jsx)("p",{className:"form__forgot-password",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})}),Object(A.jsx)("button",{"data-testid":"login",type:"submit",className:"form__button button",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(A.jsxs)("div",{className:"form__switch",children:[Object(A.jsx)("span",{className:"form__to-title",children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c? "}),Object(A.jsx)("button",{className:"form__to-button",onClick:a,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})]})}),T=function(e){var t=e.useDispatchHook,r=void 0===t?i.c:t,a=e.formChange,n=e.error,c=r(),s=Object(S.a)(),o=s.register,u=s.handleSubmit;return Object(A.jsxs)("div",{className:"wrapper registration-wrapper",children:[Object(A.jsx)("div",{className:"title-container",children:Object(A.jsx)("h1",{className:"title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(A.jsxs)("form",{className:"form registration-form",onSubmit:u((function(e){var t=e.email,r=e.password,a=e.name;c(function(e,t,r){return{type:_,payload:{email:e,password:t,name:r}}}(t,r,a))})),children:[n&&Object(A.jsx)(C.a,{className:"form__block",banner:!0,message:n,type:"error",showIcon:!0}),Object(A.jsx)(I,{title:"Email*",name:"email",type:"email",register:o}),Object(A.jsx)(I,{title:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?*",name:"name",type:"text",register:o}),Object(A.jsx)(I,{title:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c*",name:"password",type:"password",register:o}),Object(A.jsx)("button",{"data-testid":"registration",className:"form__button button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(A.jsxs)("div",{className:"form__switch",children:[Object(A.jsx)("span",{className:"form__to-title",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b?"}),Object(A.jsx)("button",{className:"form__to-button",onClick:a,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})},R=r.p+"static/media/big-logo.14346112.svg",z={map:{key:"map",name:"\u041a\u0430\u0440\u0442\u0430",link:"/map"},profile:{key:"profile",name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",link:"/profile"},login:{key:"login",name:"\u0412\u044b\u0439\u0442\u0438",link:"/"}},U=Object.keys(z),P=(r(189),Object(i.b)((function(e){return{authorization:e.authorization}}))((function(e){var t=e.authorization,r=Object(a.useState)(!0),n=Object(x.a)(r,2),c=n[0],s=n[1],i=function(){s(!c)};return Object(A.jsxs)("div",{className:"login-page",children:[Object(A.jsx)("div",{className:"login-page__icon",children:Object(A.jsx)("img",{className:"login-page__img",alt:"big-logo",src:R})}),Object(A.jsx)("div",{className:"login-page__map",children:c?Object(A.jsx)(E,{formChange:i,error:t.error.authorization}):Object(A.jsx)(T,{formChange:i,error:t.error.registration})}),t.isLoggedIn&&Object(A.jsx)(o.a,{to:z.map.link})]})}))),F=r(30),J=r(31),G=r(43),M=r(42),B=r(78),H=r.n(B),V=function(e){Object(G.a)(r,e);var t=Object(M.a)(r);function r(){var e;Object(F.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).map=null,e.mapContainer=n.a.createRef(),e.id=null,e.count=0,e.getLayerData=function(e,t){return{id:e,type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:t}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#ffc617","line-width":8}}},e.getFlyToData=function(e){return{center:e,speed:.5}},e.renderMap=function(){var t=e.props.route;e.mapContainer.current&&(e.id&&e.map.removeLayer(e.id),e.id="".concat(e.count++),e.map.addLayer(e.getLayerData(e.id,t)),e.map.flyTo(e.getFlyToData(t[0])))},e}return Object(J.a)(r,[{key:"componentDidMount",value:function(){H.a.accessToken="pk.eyJ1IjoidGFua2E5MSIsImEiOiJja21ubGZxZjgweTEyMnFyemdsdzBmN3BpIn0.GcPUVO9XJl5iWk1gMbEOXA",this.map=new H.a.Map({container:this.mapContainer.current,style:"mapbox://styles/mapbox/streets-v9",center:[30.3056504,59.9429126],zoom:10})}},{key:"componentWillUnmount",value:function(){this.map.remove()}},{key:"componentDidUpdate",value:function(){this.renderMap()}},{key:"render",value:function(){return Object(A.jsx)("div",{className:"map-wrapper",children:Object(A.jsx)("div",{"data-testid":"map",className:"map",ref:this.mapContainer})})}}]),r}(a.Component),W=Object(i.b)((function(e){return{route:e.mapRoute.route}}))(V),q=r.p+"static/media/logo.b62304ff.svg",X=(r(208),r(209),r(37)),Y=function(e){Object(G.a)(r,e);var t=Object(M.a)(r);function r(){var e;Object(F.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={active:e.props.page},e.linkClick=function(t){t.target.id===z.login.key&&e.props.logOut()},e}return Object(J.a)(r,[{key:"render",value:function(){var e=this;return Object(A.jsxs)("header",{className:"header",children:[Object(A.jsx)("div",{className:"header__logo",children:Object(A.jsx)("img",{alt:"logo",className:"logo__img",src:q})}),Object(A.jsx)("ul",{className:"header__menu menu",children:U.map((function(t){return Object(A.jsx)("li",{children:Object(A.jsx)(X.b,{to:z[t].link,onClick:e.linkClick,id:t,className:"menu__item ".concat(e.state.active===t?" menu__item--active":""),children:z[t].name})},t)}))})]})}}]),r}(a.Component),Z=Object(i.b)(null,{logOut:function(){return{type:y}}})(Y),K=r(24),Q=r.n(K),$=r(79),ee=r(119),te=r.n(ee),re="SET_ROUTE_SUCCESS",ae="SET_ROUTE_FAILURE",ne="GET_ROUTE",ce=function(e){return{type:ae,payload:{error:e}}},se=(r(210),r(211),function(e){Object(G.a)(r,e);var t=Object(M.a)(r);function r(){var e;Object(F.a)(this,r);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={startAddress:"",endAddress:""},e.startAddressChange=function(t){var r=t?t.value:"";e.setState({startAddress:r})},e.endAddressChange=function(t){var r=t?t.value:"";e.setState({endAddress:r})},e.sendOrder=function(t){t.preventDefault();var r=e.state,a=r.startAddress,n=r.endAddress;e.props.getRoute(a,n)},e}return Object(J.a)(r,[{key:"render",value:function(){var e=this.props,t=e.address,r=e.isPaymentData,a=e.routeError,n=this.state,c=n.startAddress,s=n.endAddress,o={control:function(e){return Object(L.a)(Object(L.a)({},e),{},{border:0,boxShadow:"none"})}},i=""===c||""===s;return Object(A.jsx)("form",{className:"route-form",onSubmit:this.sendOrder,children:t.isLoading?Object(A.jsx)("div",{className:"route-form__no-data","data-testid":"is-loading",children:Object(A.jsx)(te.a,{tip:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",color:"#faad14"})}):t.error?Object(A.jsx)("div",{className:"route-form__no-data","data-testid":"error",children:t.error}):r?Object(A.jsxs)(A.Fragment,{children:[a&&Object(A.jsx)(C.a,{className:"route-form__alert",banner:!0,message:a,type:"error",showIcon:!0}),Object(A.jsxs)("div",{className:"selects-wrapper",children:[Object(A.jsx)("div",{className:"item-wrapper","data-testid":"from",children:Object(A.jsx)($.a,{className:"select",isClearable:!0,options:t.list.filter((function(e){return e.value!==c&&e.value!==s})),placeholder:"\u041e\u0442\u043a\u0443\u0434\u0430",styles:o,onChange:this.startAddressChange})}),Object(A.jsx)("div",{className:"item-wrapper","data-testid":"to",children:Object(A.jsx)($.a,{className:"select",isClearable:!0,options:t.list.filter((function(e){return e.value!==s&&e.value!==c})),placeholder:"\u041a\u0443\u0434\u0430",styles:o,onChange:this.endAddressChange})})]}),Object(A.jsx)("button",{"data-testid":"order",type:"submit",className:Q()("form__button","button",{"button--disabled":i}),disabled:i,children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})]}):Object(A.jsxs)("div",{className:"route-form__no-data","data-testid":"no-payment",children:["\u0414\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",Object(A.jsx)("b",{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})]})})}}]),r}(a.Component)),oe=Object(i.b)((function(e){return{address:e.address,isPaymentData:e.card.isPaymentData,routeError:e.mapRoute.error}}),{getRoute:function(e,t){return{type:ne,payload:{startAddress:e,endAddress:t}}}})(se),ie=function(e){Object(G.a)(r,e);var t=Object(M.a)(r);function r(){return Object(F.a)(this,r),t.apply(this,arguments)}return Object(J.a)(r,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"page-container",children:[Object(A.jsx)(Z,{page:z.map.key}),Object(A.jsx)(W,{}),Object(A.jsx)(oe,{})]})}}]),r}(a.PureComponent),ue=r.p+"static/media/small-logo.860ed155.svg",de=r.p+"static/media/chip.c84e7851.svg",le=r.p+"static/media/circles.11ada678.svg",pe=(r(226),Object(i.b)((function(e){return{token:e.authorization.token,card:e.card}}))((function(e){var t=e.useDispatchHook,r=void 0===t?i.c:t,n=e.token,c=e.card,s=r(),o=Object(S.a)(),u=o.register,d=o.handleSubmit,p=Object(a.useState)(!0),j=Object(x.a)(p,2),b=j[0],m=j[1],f=Object(a.useState)(c.cardNumber),h=Object(x.a)(f,2),O=h[0],v=h[1],g=Object(a.useState)(c.expiryDate),y=Object(x.a)(g,2),N=y[0],_=y[1],k=Object(a.useState)(c.cardName),w=Object(x.a)(k,2),D=w[0],C=w[1],L=Object(a.useState)(c.cvc),E=Object(x.a)(L,2),T=E[0],R=E[1];Object(a.useEffect)((function(){v(c.cardNumber),_(c.expiryDate),C(c.cardName),R(c.cvc)}),[c.cardNumber,c.expiryDate,c.cardName,c.cvc]);return Object(A.jsxs)("div",{className:"page-container",children:[Object(A.jsx)(Z,{page:z.profile.key}),Object(A.jsx)("div",{className:"page-content",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"wrapper ".concat(b?"edit-profile-wrapper":"gotomap-profile-wrapper"),children:[Object(A.jsx)("h1",{className:"title",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(A.jsx)("p",{className:"subtitle",children:b?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435":c.error?c.error:"\u041f\u043b\u0430\u0442\u0451\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b. \u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438."}),b?Object(A.jsxs)("form",{className:"form profile-form",onSubmit:d((function(e){var t=e.cardNumber,r=e.expiryDate,a=e.cardName,o=e.cvc;s(function(e,t,r,a,n){return{type:l,payload:{cardNumber:e,expiryDate:t,cardName:r,cvc:a,token:n}}}(""===t?c.cardNumber:t,""===r?c.expiryDate:r,""===a?c.cardName:a,""===o?c.cvc:o,n)),m(!1)})),children:[Object(A.jsxs)("div",{className:"form__row",children:[Object(A.jsxs)("div",{className:"form__col",children:[Object(A.jsx)(I,{title:"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430",name:"cardName",type:"text",register:u,value:D}),Object(A.jsx)(I,{title:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b",name:"cardNumber",type:"text",register:u,value:O}),Object(A.jsxs)("div",{className:"form__row",children:[Object(A.jsx)("div",{className:"form__col",children:Object(A.jsx)(I,{title:"MM/YY",name:"expiryDate",type:"text",register:u,value:N})}),Object(A.jsx)("div",{className:"form__col",children:Object(A.jsx)(I,{title:"CVC",name:"cvc",type:"text",register:u,value:T,maxLength:3})})]})]}),Object(A.jsx)("div",{className:"form__col",children:Object(A.jsxs)("div",{className:"card-layout",children:[Object(A.jsxs)("div",{className:"card-layout__header",children:[Object(A.jsx)("img",{className:"card-layout__small-logo",alt:"smallLogo",src:ue}),Object(A.jsx)("div",{className:"card-layout__card-expiry-date",children:N})]}),Object(A.jsx)("div",{className:"card-layout__content",children:Object(A.jsx)("p",{children:O})}),Object(A.jsxs)("div",{className:"card-layout__footer",children:[Object(A.jsx)("img",{className:"card-layout__chip",alt:"chip",src:de}),Object(A.jsx)("img",{className:"card-layout__circles",alt:"circles",src:le})]})]})})]}),Object(A.jsx)("button",{"data-testid":"save",className:"button",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}):Object(A.jsx)(X.b,{className:"button",to:z.map.link,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443"})]})})})]})}))),je=r(122),be=["component","isLoggedIn"],me=Object(i.b)((function(e){return{isLoggedIn:e.authorization.isLoggedIn}}))((function(e){var t=e.component,r=e.isLoggedIn,a=Object(je.a)(e,be);return Object(A.jsx)(o.b,Object(L.a)(Object(L.a)({},a),{},{render:function(e){return r?Object(A.jsx)(t,Object(L.a)({},e)):Object(A.jsx)(o.a,{to:z.login.link})}}))})),fe=(r(227),Object(i.b)((function(e){return{token:e.authorization.token,isLoggedIn:e.authorization.isLoggedIn,addressList:e.address.list}}),{getCardData:function(e){return{type:p,payload:{token:e}}},getAddressList:function(){return{type:m}}})((function(e){var t=e.isLoggedIn,r=e.getCardData,n=e.token,c=e.getAddressList,s=e.addressList;return Object(a.useEffect)((function(){s.length||c(),t&&r(n)}),[t]),Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)(o.b,{exact:!0,path:z.login.link,component:P}),Object(A.jsx)(me,{path:z.map.link,component:ie}),Object(A.jsx)(me,{path:z.profile.link,component:pe}),Object(A.jsx)(o.b,{children:Object(A.jsx)(o.a,{to:z.login.link})})]})})}))),he=r(38),Oe=r(121),xe=r(120),ve=function(e,t){localStorage.setItem("loginData",JSON.stringify({isLoggedIn:e,token:t}))},ge=(localStorage.getItem("loginData")||localStorage.setItem("loginData",JSON.stringify({isLoggedIn:!1,token:""})),JSON.parse(localStorage.getItem("loginData"))),ye={isLoggedIn:ge.isLoggedIn,token:ge.token,error:{authorization:"",registration:""}};var Ne={cardNumber:"",expiryDate:"",cardName:"",cvc:"",isPaymentData:"",error:""};var _e={list:[],error:"",isLoading:!1};var ke={route:[],error:""};var we=Object(he.combineReducers)({authorization:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return ve(!0,t.payload.token),{isLoggedIn:!0,token:t.payload.token,error:""};case g:return{isLoggedIn:!1,token:"",error:t.payload.error};case y:return ve(!1,""),{isLoggedIn:!1,token:"",error:""};default:return e}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var r=t.payload,a=r.cardNumber,n=r.expiryDate,c=r.cardName,s=r.cvc;return{cardNumber:a,expiryDate:n,cardName:c,cvc:s,isPaymentData:Boolean(a&&n&&c&&s),error:""};case d:return{cardNumber:e.cardNumber,expiryDate:e.expiryDate,cardName:e.cardName,cvc:e.cvc,isPaymentData:e.isPaymentData,error:t.payload.error};default:return e}},address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{list:[],error:"",isLoading:!0};case f:return{list:t.payload.list,error:"",isLoading:!1};case h:return{list:[],error:t.payload.error,isLoading:!1};default:return e}},mapRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return{route:t.payload.route,error:""};case ae:return{route:[],error:t.payload.error};default:return e}}}),Se=r(5),De=r.n(Se),Ce=r(8),Le=r(22),Ae=function(){var e=Object(Le.a)(De.a.mark((function e(t,r){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://loft-taxi.glitch.me/auth",{method:"POST",body:JSON.stringify({email:t,password:r}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(Le.a)(De.a.mark((function e(t,r,a){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://loft-taxi.glitch.me/register",{method:"POST",body:JSON.stringify({email:t,password:r,name:a,surname:a}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(Le.a)(De.a.mark((function e(t,r,a,n,c){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://loft-taxi.glitch.me/card",{method:"POST",body:JSON.stringify({cardNumber:t,expiryDate:r,cardName:a,cvc:n,token:c}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.success})));case 1:case"end":return e.stop()}}),e)})));return function(t,r,a,n,c){return e.apply(this,arguments)}}(),Te=function(){var e=Object(Le.a)(De.a.mark((function e(t){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://loft-taxi.glitch.me/card?token=".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(Le.a)(De.a.mark((function e(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://loft-taxi.glitch.me/addressList").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=function(){var e=Object(Le.a)(De.a.mark((function e(t,r){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://loft-taxi.glitch.me/route?address1=".concat(t,"&address2=").concat(r)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Ue=De.a.mark(Ge),Pe=De.a.mark(Me),Fe=De.a.mark(Be),Je=De.a.mark(He);function Ge(e){var t,r,a,n;return De.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,r=t.email,a=t.password,c.next=4,Object(Ce.b)(Ae,r,a);case 4:if(!(n=c.sent).success){c.next=10;break}return c.next=8,Object(Ce.d)(k(n.token));case 8:c.next=12;break;case 10:return c.next=12,Object(Ce.d)(w({authorization:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",registration:""}));case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(0),c.next=18,Object(Ce.d)(w({authorization:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442",registration:""}));case 18:case"end":return c.stop()}}),Ue,null,[[0,14]])}function Me(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.e)(N,Ge);case 2:case"end":return e.stop()}}),Pe)}function Be(e){var t,r,a,n,c;return De.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.payload,r=t.email,a=t.password,n=t.name,s.next=4,Object(Ce.b)(Ie,r,a,n);case 4:if(!(c=s.sent).success){s.next=10;break}return s.next=8,Object(Ce.d)(k(c.token));case 8:s.next=12;break;case 10:return s.next=12,Object(Ce.d)(w({authorization:"",registration:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}));case 12:s.next=18;break;case 14:return s.prev=14,s.t0=s.catch(0),s.next=18,Object(Ce.d)(w({authorization:"",registration:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442"}));case 18:case"end":return s.stop()}}),Fe,null,[[0,14]])}function He(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.e)(_,Be);case 2:case"end":return e.stop()}}),Je)}var Ve=De.a.mark(Ye),We=De.a.mark(Ze),qe=De.a.mark(Ke),Xe=De.a.mark(Qe);function Ye(e){var t,r,a,n,c,s;return De.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,r=t.cardNumber,a=t.expiryDate,n=t.cardName,c=t.cvc,s=t.token,o.next=4,Object(Ce.b)(Ee,r,a,n,c,s);case 4:if(!o.sent){o.next=10;break}return o.next=8,Object(Ce.d)(j(r,a,n,c));case 8:o.next=12;break;case 10:return o.next=12,Object(Ce.d)(b("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440"));case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(0),o.next=18,Object(Ce.d)(b("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442"));case 18:case"end":return o.stop()}}),Ve,null,[[0,14]])}function Ze(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.e)(l,Ye);case 2:case"end":return e.stop()}}),We)}function Ke(e){var t,r;return De.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.payload.token,a.next=4,Object(Ce.b)(Te,t);case 4:if(!(r=a.sent).hasOwnProperty("id")){a.next=10;break}return a.next=8,Object(Ce.d)(j(r.cardNumber,r.expiryDate,r.cardName,r.cvc));case 8:a.next=12;break;case 10:return a.next=12,Object(Ce.d)(b("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"));case 12:a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(0),a.next=18,Object(Ce.d)(b("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442"));case 18:case"end":return a.stop()}}),qe,null,[[0,14]])}function Qe(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.e)(p,Ke);case 2:case"end":return e.stop()}}),Xe)}var $e=De.a.mark(tt),et=De.a.mark(rt);function tt(){var e,t;return De.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(Ce.b)(Re);case 3:if(!(e=r.sent).hasOwnProperty("addresses")){r.next=10;break}return t=e.addresses.map((function(e){return{value:e,label:e}})),r.next=8,Object(Ce.d)({type:f,payload:{list:t}});case 8:r.next=12;break;case 10:return r.next=12,Object(Ce.d)(O("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u043f\u0438\u0441\u043a\u0430 \u0430\u0434\u0440\u0435\u0441\u043e\u0432"));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(0),r.next=18,Object(Ce.d)(O("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442"));case 18:case"end":return r.stop()}}),$e,null,[[0,14]])}function rt(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.e)(m,tt);case 2:case"end":return e.stop()}}),et)}var at=De.a.mark(ct),nt=De.a.mark(st);function ct(e){var t,r,a,n;return De.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.payload,r=t.startAddress,a=t.endAddress,c.next=4,Object(Ce.b)(ze,r,a);case 4:if(!(n=c.sent)||!n.length){c.next=10;break}return c.next=8,Object(Ce.d)({type:re,payload:{route:n}});case 8:c.next=12;break;case 10:return c.next=12,Object(Ce.d)(ce("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430"));case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(0),c.next=18,Object(Ce.d)(ce("\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442"));case 18:case"end":return c.stop()}}),at,null,[[0,14]])}function st(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.e)(ne,ct);case 2:case"end":return e.stop()}}),nt)}var ot=De.a.mark(it);function it(){return De.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.a)([Object(Ce.c)(Me),Object(Ce.c)(He),Object(Ce.c)(Ze),Object(Ce.c)(Qe),Object(Ce.c)(rt),Object(Ce.c)(st)]);case 2:case"end":return e.stop()}}),ot)}var ut=Object(Oe.a)(),dt=Object(he.createStore)(we,Object(xe.composeWithDevTools)(Object(he.applyMiddleware)(ut)));ut.run(it),s.a.render(Object(A.jsx)(X.a,{children:Object(A.jsx)(i.a,{store:dt,children:Object(A.jsx)(fe,{})})}),document.getElementById("root"))},69:function(e,t,r){},81:function(e,t,r){}},[[228,1,2]]]);
//# sourceMappingURL=main.87904995.chunk.js.map