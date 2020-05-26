(this.webpackJsonpmymedium=this.webpackJsonpmymedium||[]).push([[0],{30:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a(2),o=a(1),s="/",i="/login",m="/register",u={ROOT:"/profile/:username",FAVORITES:"/profile/:username/favorites"},d="/feed",f="/settings",E={ROOT:"/articles/:slug",EDIT:"/articles/:slug/edit"},v={NEW:"/article/new"},b={ROOT:"/tags",TAG:"/tags/:tag"},p=a(8),g={isLoading:!1,isLoggedIn:null,currentUser:null},N="LOADING",h="SET_AUTHORIZED",O="SET_UNAUTHORIZED",j=function(e,t){var a=t.type,n=t.payload;switch(a){case N:return Object(p.a)({},e,{isLoading:!0});case h:return Object(p.a)({},e,{isLoading:!1,isLoggedIn:!0,currentUser:n});case O:return Object(p.a)({},e,{isLoggedIn:!1});default:return e}},y=Object(n.createContext)([{},function(){}]),x=function(e){var t=e.children,a=Object(n.useReducer)(j,g);return r.a.createElement(y.Provider,{value:a},t)},k=function(){return Object(n.useContext)(y)},S=function(){var e=k(),t=Object(o.a)(e,1)[0],a=t.isLoggedIn,n=t.currentUser;return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{to:s,className:"navbar-brand"},"MyMedium"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav d-flex align-items-center ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:s,className:"nav-link",activeClassName:"active",exact:!0},"Home")),!1===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:i,className:"nav-link"},"Sign in")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:m,className:"nav-link"},"Sign up"))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:v.NEW,className:"nav-link"},"New Post")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/settings",className:"nav-link"},"Settings")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/profile/".concat(null===n||void 0===n?void 0:n.username),className:"nav-link d-flex align-items-center"},r.a.createElement("span",{className:"d-inline-block rounded-circle mr-2 overflow-hidden bg-secondary",style:{width:25,height:25}},r.a.createElement("img",{src:null===n||void 0===n?void 0:n.image,alt:"",className:"img-fluid"})),null===n||void 0===n?void 0:n.username)))))))},w=a(3),L=a(7),C=a(29),P=a.n(C),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),r=Object(o.a)(a,2),l=r[0],c=r[1];return Object(n.useEffect)((function(){localStorage.setItem(e,l)}),[e,l]),[l,c]},T=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(null),s=Object(o.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(null),d=Object(o.a)(u,2),f=d[0],E=d[1],v=Object(n.useState)({}),b=Object(o.a)(v,2),g=b[0],N=b[1],h=I("token"),O=Object(o.a)(h,1)[0],j=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N(e),l(!0)}),[]);return Object(n.useEffect)((function(){var t=!1;if(r){var a=Object(p.a)({},g,{},{headers:{authorization:O?"Token ".concat(O):""}});return P()("https://conduit.productionready.io/api"+e,a).then((function(e){t||(m(e.data),l(!1))})).catch((function(e){t||(E(e.response.data),l(!1))})),function(){t=!0}}}),[r,e,g,O]),[{isLoading:r,response:i,error:f},j]},U=function(e){var t=Object(L.parse)(e),a=t.page?Number(t.page):1;return{currentPage:a,offset:10*a-10}},A=function(e){var t=e.tags;return r.a.createElement("ul",{className:"pl-0 mt-3 mb-0"},t.map((function(e){return r.a.createElement("li",{key:e,className:"d-inline-block rounded-pill border border-secondary px-2 mr-1 my-1 text-secondary"},"#",e)})))},R=a(10),F=a.n(R),D=function(e){var t=e.isFavorited,a=e.favoritesCount,n=e.articleSlug,l="/articles/".concat(n,"/favorite"),c=T(l),s=Object(o.a)(c,2),i=s[0].response,m=s[1],u=i?i.article.favorited:t,d=i?i.article.favoritesCount:a;return r.a.createElement("button",{className:F()("btn","btn-sm",{"btn-danger":u,"btn-outline-danger":!u},"ml-3"),onClick:function(e){e.preventDefault(),m({method:u?"delete":"post"})}},r.a.createElement("svg",{className:"bi bi-heart-fill",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})),"\xa0 ",d||0)},M=function(e){var t=e.articles,a=void 0===t?[]:t;return r.a.createElement("div",{className:"mb-5"},!a.length>0?r.a.createElement("span",null,"Nothing found"):a.map((function(e){var t=e.author,a=(t=void 0===t?{}:t).username,n=t.image,l=e.createdAt,o=e.slug,s=e.title,i=e.description,m=e.favorited,u=e.favoritesCount,d=e.tagList;return r.a.createElement("div",{key:o,className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex justify-content-between  mb-4"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(c.b,{to:"/profile/".concat(a),className:"d-inline-block rounded-circle mr-2 overflow-hidden bg-secondary",style:{width:40,height:40}},r.a.createElement("img",{src:n,alt:"",className:"img-fluid",width:50,height:50})),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/profile/".concat(a)},a),r.a.createElement("p",{className:"text-muted mb-0",style:{fontSize:"0.8rem"}},l))),r.a.createElement(D,{isFavorited:m,favoritesCount:u,articleSlug:o})),r.a.createElement("h5",{className:"card-title"},s),r.a.createElement("p",{className:"card-text"},i),r.a.createElement(c.b,{to:"/articles/".concat(o)},"Read more"),d.length>0&&r.a.createElement(A,{tags:d})))})))},G=function(){return r.a.createElement("div",{className:"d-flex justify-content-center my-5"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},V=function(){return r.a.createElement("div",{className:"bg-light text-dark text-center px-2 py-5 mb-4"},r.a.createElement("h1",{className:"text-monospace font-weight-bold"},"Medium Clone"),r.a.createElement("p",{className:"mb-0"},"A place to share knowledge"))},W=function(){return r.a.createElement("li",{className:"page-item"},r.a.createElement("span",{className:"page-link",style:{cursor:"default"}},"..."))},z=function(e){var t=e.page,a=e.currentPage,n=e.url;return r.a.createElement("li",{className:F()("page-item",{active:a===t})},r.a.createElement(c.b,{to:"".concat(n,"?page=").concat(t),className:"page-link"},t))},H=function(e){var t=e.total,a=e.currentPage,n=e.url;return r.a.createElement("ul",{className:"pagination"},function(){var e=[],l=a<4?1:a-2,c=a+2+1>t||a===t-4?t:a+2+1;a>3&&(e.push(r.a.createElement(z,{key:1,page:1,currentPage:a,url:n})),e.push(r.a.createElement(W,{key:Math.random()})));for(var o=l;o<c;o++)e.push(r.a.createElement(z,{key:o,page:o,currentPage:a,url:n}));return a+4<t&&(e.push(r.a.createElement(W,{key:Math.random()})),e.push(r.a.createElement(z,{key:t,page:t,selectedPage:a,url:n}))),e}())},B=function(e){var t=e.type,a=e.text,n="danger"===t?"alert alert-danger":"success"===t?"alert alert-success":"alert alert-primary";return r.a.createElement("div",{className:n,role:"alert"},a)},J=function(){var e=T("/tags"),t=Object(o.a)(e,2),a=t[0],l=a.response,s=a.isLoading,i=a.error,m=t[1];return Object(n.useEffect)((function(){m()}),[m]),s||!l?r.a.createElement(G,null):i?r.a.createElement(B,{type:"error",text:i}):r.a.createElement("aside",{className:"sidebar"},r.a.createElement("h2",{className:"h4 mb-3"},"Popular tags"),r.a.createElement("div",{className:"d-flex flex-wrap"},l.tags.map((function(e){return r.a.createElement(c.b,{to:"/tags/".concat(e),className:"btn btn-secondary btn-sm rounded-pill mb-1 mr-1",key:e},e)}))))},Y=function(e){var t=e.tagName,a=k(),n=Object(o.a)(a,1)[0].isLoggedIn;return r.a.createElement("div",{className:"mb-3"},r.a.createElement("ul",{className:"nav nav-tabs"},n&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:d,className:"nav-link"},"Your feed")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:s,className:"nav-link",activeClassName:"active",exact:!0},"Global feed")),t&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/tags/".concat(t),className:"nav-link",exact:!0},"#",t))))},Z=function(e){var t=e.isLoading,a=e.response,n=e.currentPage,l=e.tag;return r.a.createElement("main",{className:"home-page"},r.a.createElement(V,null),r.a.createElement("div",{className:"container page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement(Y,{tagName:l}),t&&r.a.createElement(G,null),!t&&a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{articles:a.articles}),r.a.createElement(H,{total:500,currentPage:n,url:"/"}))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(J,null)))))},_=function(e){var t=e.location,a=(e.match,U(t.search)),l=a.offset,c=a.currentPage,s=Object(L.stringify)({limit:10,offset:l}),i="/articles?".concat(s),m=T(i),u=Object(o.a)(m,2),d=u[0],f=d.isLoading,E=d.response,v=u[1];return Object(n.useEffect)((function(){v()}),[v,c]),r.a.createElement(Z,{isLoading:f,response:E,currentPage:c})},q=function(e){var t=e.location,a=U(t.search),l=a.offset,c=a.currentPage,s=Object(L.stringify)({limit:10,offset:l}),i="/articles/feed?".concat(s),m=T(i),u=Object(o.a)(m,2),d=u[0],f=d.isLoading,E=d.response,v=u[1];return Object(n.useEffect)((function(){v()}),[v,c]),r.a.createElement(Z,{isLoading:f,response:E,currentPage:c})},K=function(e){var t=e.location,a=e.match.params.tag,l=U(t.search),c=l.offset,s=l.currentPage,i=Object(L.stringify)({limit:10,offset:c,tag:a}),m="/articles?".concat(i),u=T(m),d=Object(o.a)(u,2),f=d[0],E=f.isLoading,v=f.response,b=d[1];return Object(n.useEffect)((function(){b()}),[b,s,a]),r.a.createElement(Z,{isLoading:E,response:v,currentPage:s,tag:a})},Q=function(e){var t,a,l,s,i,m,u,d,f,E,v,b=e.match.params.slug,p="/articles/".concat(b),g=T(p),N=Object(o.a)(g,2),h=N[0],O=h.response,j=h.error,y=h.isLoading,x=N[1],S=T(p),L=Object(o.a)(S,2),C=L[0].response,P=L[1],I=k(),U=Object(o.a)(I,1)[0],R=Object(n.useState)(!1),F=Object(o.a)(R,2),D=F[0],M=F[1];return Object(n.useEffect)((function(){x()}),[x]),Object(n.useEffect)((function(){C&&M(!0)}),[C]),D?r.a.createElement(w.a,{to:"/"}):r.a.createElement("div",{className:"article-page"},r.a.createElement("div",{className:"bg-light text-dark py-5 mb-4"},!y&&O&&r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"h2 mb-3 "},null===O||void 0===O||null===(t=O.article)||void 0===t?void 0:t.title),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement(c.b,{to:"/profiles/".concat(null===O||void 0===O||null===(a=O.article)||void 0===a||null===(l=a.author)||void 0===l?void 0:l.username),className:"d-inline-block rounded-circle mr-2 overflow-hidden bg-secondary",style:{width:40,height:40}},r.a.createElement("img",{src:null===O||void 0===O||null===(s=O.article)||void 0===s||null===(i=s.author)||void 0===i?void 0:i.image,alt:"",className:"img-fluid"})),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/profiles/".concat(null===O||void 0===O||null===(m=O.article)||void 0===m||null===(u=m.author)||void 0===u?void 0:u.username)},null===O||void 0===O||null===(d=O.article)||void 0===d||null===(f=d.author)||void 0===f?void 0:f.username),r.a.createElement("span",{className:"d-block text-muted mb-0",style:{fontSize:"0.8rem"}},null===O||void 0===O||null===(E=O.article)||void 0===E?void 0:E.createdAt))),function(){var e,t,a;return!(null===U.isLoggedIn||!O)&&(null===U||void 0===U||null===(e=U.currentUser)||void 0===e?void 0:e.username)===(null===O||void 0===O||null===(t=O.article)||void 0===t||null===(a=t.author)||void 0===a?void 0:a.username)}()&&r.a.createElement("div",{className:"ml-3"},r.a.createElement(c.b,{to:"/articles/".concat(null===O||void 0===O||null===(v=O.article)||void 0===v?void 0:v.slug,"/edit"),className:"btn btn-outline-secondary btn-sm mr-2"},"Edit Article"),r.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){P({method:"delete"})}},"Delete Article"))))),r.a.createElement("div",{className:"container page"},y&&r.a.createElement(G,null),j&&r.a.createElement(B,{type:"error",text:"Something bad happened..."}),!y&&O&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,O.article.body)),r.a.createElement(A,{tags:O.article.tagList}))))},X=function(e){var t=e.errors,a=Object.keys(t).map((function(e){var a=t[e].join(" ");return"".concat(e," ").concat(a)}));return r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{key:e,className:"text-danger"},e)})))},$=function(e){var t=e.onSubmit,a=e.errors,l=e.initialValues,c=Object(n.useState)(""),s=Object(o.a)(c,2),i=s[0],m=s[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),f=d[0],E=d[1],v=Object(n.useState)(""),b=Object(o.a)(v,2),p=b[0],g=b[1],N=Object(n.useState)(""),h=Object(o.a)(N,2),O=h[0],j=h[1];return Object(n.useEffect)((function(){l&&(m(l.title),E(l.description),g(l.body),j(l.tagList))}),[l]),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 offset-md-1 col-xs-12"},a&&r.a.createElement(X,{errors:a}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={title:i,description:f,body:p,tagList:O.split(" ")};t(a)}},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Article title",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"What is this article about?",value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",rows:"8",placeholder:"Write your article (in markdown)",value:p,onChange:function(e){return g(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter tags",value:O,onChange:function(e){return j(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary"},"Submit"))))))))},ee=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=T("/articles"),s=Object(o.a)(c,2),i=s[0],m=i.response,u=i.error,d=s[1],f=k(),E=Object(o.a)(f,1)[0].isLoggedIn;return Object(n.useEffect)((function(){m&&l(!0)}),[m]),null===E?null:a||!1===E?r.a.createElement(w.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement($,{onSubmit:function(e){d({method:"post",data:{article:e}})},initialValues:{title:"",description:"",body:"",tagList:""},errors:u&&u.errors||{}}))},te=function(e){var t=e.match.params.slug,a="/articles/".concat(t),l=Object(n.useState)(!1),c=Object(o.a)(l,2),s=c[0],i=c[1],m=k(),u=Object(o.a)(m,1)[0].isLoggedIn,d=T(a),f=Object(o.a)(d,2),E=f[0],v=E.response,b=E.error,p=f[1],g=T(a),N=Object(o.a)(g,2),h=N[0].response,O=N[1],j=Object(n.useState)(null),y=Object(o.a)(j,2),x=y[0],S=y[1];return Object(n.useEffect)((function(){O()}),[O]),Object(n.useEffect)((function(){h&&S({title:h.article.title,description:h.article.description,body:h.article.body,tagList:h.article.tagList.join(" ")})}),[h]),Object(n.useEffect)((function(){v&&i(!0)}),[v]),null===u?null:!1===u?r.a.createElement(w.a,{to:"/"}):s?r.a.createElement(w.a,{to:"/articles/".concat(t)}):r.a.createElement("div",null,r.a.createElement($,{onSubmit:function(e){p({method:"put",data:{article:e}})},initialValues:x,errors:b&&b.errors||{}}))},ae=function(e){var t=e.username,a=e.location,l=e.url,c=a.pathname.includes("favorites"),s=U(a.search),i=s.offset,m=s.currentPage,u=function(e){var t=e.username,a=e.offset,n=e.isFavorites?{limit:10,offset:a,favorited:t}:{limit:10,offset:a,author:t};return"/articles?".concat(Object(L.stringify)(n))}({username:t,offset:i,isFavorites:c}),d=T(u),f=Object(o.a)(d,2),E=f[0],v=E.response,b=E.isLoading,p=E.error,g=f[1];return Object(n.useEffect)((function(){g()}),[g,c,m]),r.a.createElement("div",null,b&&r.a.createElement(G,null),p&&r.a.createElement(B,{type:"error",text:"Something bad happened..."}),!b&&v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{articles:null===v||void 0===v?void 0:v.articles}),r.a.createElement(H,{total:null===v||void 0===v?void 0:v.articlesCount,limit:10,url:l,currentPage:m})))},ne=function(e){var t,a,l,s,i,m,u=e.match,d=e.location,f=null===(t=u.params)||void 0===t?void 0:t.username,E="/profiles/".concat(f),v=T(E),b=Object(o.a)(v,2),p=b[0].response,g=b[1];return Object(n.useEffect)((function(){g()}),[g]),p?r.a.createElement("div",{className:"profile-page"},r.a.createElement("div",{className:"bg-light text-dark py-4 mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-secondary mb-3",style:{width:100,height:100}},r.a.createElement("img",{className:"img-fluid",alt:"",src:p.profile.image})),r.a.createElement("h1",{className:"h4"},p.profile.username),(null===p||void 0===p||null===(a=p.profile)||void 0===a?void 0:a.bio)&&r.a.createElement("p",null,null===p||void 0===p||null===(l=p.profile)||void 0===l?void 0:l.bio)))),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav nav-tabs mb-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{exact:!0,to:"/profile/".concat(null===p||void 0===p||null===(s=p.profile)||void 0===s?void 0:s.username),className:"nav-link",activeClassName:"active"},"My Posts")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.c,{to:"/profile/".concat(null===p||void 0===p||null===(i=p.profile)||void 0===i?void 0:i.username,"/favorites"),className:"nav-link"},"Favorites Posts"))),r.a.createElement(ae,{username:null===p||void 0===p||null===(m=p.profile)||void 0===m?void 0:m.username,location:d,url:u.url}))):null},re=function(){var e=T("/user"),t=Object(o.a)(e,2),a=t[0],l=a.response,c=a.error,s=t[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],d=m[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),v=E[0],b=E[1],g=Object(n.useState)(""),N=Object(o.a)(g,2),j=N[0],y=N[1],x=Object(n.useState)(""),S=Object(o.a)(x,2),L=S[0],C=S[1],P=Object(n.useState)(""),U=Object(o.a)(P,2),A=U[0],R=U[1],F=k(),D=Object(o.a)(F,2),M=D[0],G=D[1],V=I("token"),W=Object(o.a)(V,2)[1],z=Object(n.useState)(!1),H=Object(o.a)(z,2),B=H[0],J=H[1];return Object(n.useEffect)((function(){if(M.currentUser){var e=M.currentUser;d(e.username),b(e.image),y(e.bio),C(e.email)}}),[M.currentUser]),Object(n.useEffect)((function(){l&&G({type:h,payload:l.user})}),[l,G]),B?r.a.createElement(w.a,{to:"/"}):r.a.createElement("div",{className:"mt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-xs-center"},"Your settings"),c&&r.a.createElement(X,{errors:c.errors}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s({method:"put",data:{user:Object(p.a)({},M.currentUser,{image:v,bio:j,username:u,email:L,password:A})}})}},r.a.createElement("fieldset",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"URL of profile picture",value:null===v?"":v,onChange:function(e){return b(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Username",value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control form-control-lg",placeholder:"Short bio",value:null===j?"":j,rows:"4",onChange:function(e){return y(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Email",value:L,onChange:function(e){return C(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control form-control-lg",placeholder:"New password",value:A,onChange:function(e){return R(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary pull-xs-right"},"Update settings"))),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),W(""),G({type:O}),J(!0)}},"Or click here to logout.")))))},le=function(e){var t=e.match.path===i,a=t?"Sign In":"Sign Up",l=t?m:i,u=t?"Need an account?":"Have an account?",d=t?"/users/login":"/users",f=Object(n.useState)(""),E=Object(o.a)(f,2),v=E[0],b=E[1],p=Object(n.useState)(""),g=Object(o.a)(p,2),N=g[0],O=g[1],j=Object(n.useState)(""),y=Object(o.a)(j,2),x=y[0],S=y[1],L=Object(n.useState)(!1),C=Object(o.a)(L,2),P=C[0],U=C[1],A=T(d),R=Object(o.a)(A,2),F=R[0],D=F.isLoading,M=F.response,G=F.error,V=R[1],W=I("token"),z=Object(o.a)(W,2)[1],H=k(),B=Object(o.a)(H,2)[1];return Object(n.useEffect)((function(){M&&(z(M.user.token),U(!0),B({type:h,payload:M.user}))}),[M,z,B]),P?r.a.createElement(w.a,{to:s}):r.a.createElement("div",{className:"auth-page mt-3"},r.a.createElement("div",{className:"container page"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-center mb-2"},a),r.a.createElement("p",{className:"text-center"},r.a.createElement(c.b,{to:l},u)),r.a.createElement("form",{className:"form-signin",onSubmit:function(e){e.preventDefault(),V({method:"post",data:{user:t?{email:v,password:N}:{email:v,password:N,username:x}}})}},G&&r.a.createElement(X,{errors:G.errors}),!t&&r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",name:"username",className:"form-control form-control-lg",placeholder:"Username",value:x,onChange:function(e){return S(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",className:"form-control form-control-lg",placeholder:"Email",autoFocus:!0,value:v,onChange:function(e){return b(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",className:"form-control form-control-lg",placeholder:"Password",value:N,onChange:function(e){return O(e.target.value)}})),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block mt-2",type:"submit",disabled:D},"Go"))))))},ce=function(){return r.a.createElement(w.d,null,r.a.createElement(w.b,{path:s,component:_,exact:!0}),r.a.createElement(w.b,{path:d,component:q}),r.a.createElement(w.b,{path:b.TAG,component:K}),r.a.createElement(w.b,{path:E.ROOT,component:Q,exact:!0}),r.a.createElement(w.b,{path:E.EDIT,component:te}),r.a.createElement(w.b,{path:v.NEW,component:ee}),r.a.createElement(w.b,{path:u.ROOT,component:ne}),r.a.createElement(w.b,{path:u.FAVORITES,component:ne}),r.a.createElement(w.b,{path:f,component:re}),r.a.createElement(w.b,{path:i,component:le}),r.a.createElement(w.b,{path:m,component:le}),r.a.createElement(w.a,{to:s}))},oe=function(e){var t=e.children,a=k(),r=Object(o.a)(a,2)[1],l=T("/user"),c=Object(o.a)(l,2),s=c[0].response,i=c[1],m=I("token"),u=Object(o.a)(m,1)[0];return Object(n.useEffect)((function(){u?(i(),r({type:N})):r({type:O})}),[i,r,u]),Object(n.useEffect)((function(){s&&r({type:h,payload:s.user})}),[s,r]),t},se=function(){return r.a.createElement(n.StrictMode,null,r.a.createElement(x,null,r.a.createElement(oe,null,r.a.createElement(c.a,null,r.a.createElement(S,null),r.a.createElement(ce,null)))))};a(69);Object(l.render)(r.a.createElement(se,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4f858f40.chunk.js.map