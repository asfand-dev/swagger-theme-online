(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{148:function(e,t,a){e.exports=a.p+"static/media/apis.dc675f47.svg"},161:function(e,t,a){e.exports=a.p+"static/media/screenshot.1c67d44b.png"},170:function(e,t,a){e.exports=a(271)},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n,l=a(0),o=a.n(l),r=a(10),c=a.n(r),i=a(71),s=a(121),m=a(70),p=a(47),u=a(148),d=a.n(u),h=function(e){var t=e.isMobile;return o.a.createElement("div",{className:"banner-wrapper"},o.a.createElement(p.a,{className:"banner-title-wrapper",type:t?"bottom":"right"},o.a.createElement("h1",{key:"h1"},"API HTML"),o.a.createElement("p",{key:"content"},"Convert any API Specification into an awesome HTML documentation website"),o.a.createElement("img",{src:d.a,alt:"APIs Flow"})))},g=a(62),y=a(149),b=a(150),E=a(164),v=a(168),f=a(151),w=a.n(f),x=a(152),k=a.n(x),C=a(34),N=C.default.TweenOneGroup,O=[{title:"SEO Optimized",content:"Highly optimized for SEO",src:"https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg",color:"#FAAD14",shadowColor:"rgba(24,144,255,.12)"},{title:"Theming",content:"Customizable theme with simple config",src:"https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg",color:"#2F54EB",shadowColor:"rgba(26,196,77,.12)"},{title:"Simple flow",content:"Easy to understand, request and response flow",src:"https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg",color:"#2F54EB",shadowColor:"rgba(19,194,194,.12)"},{title:"Responsive",content:"Designed for varieties of screen sizes",src:"https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg",color:"#1AC44D",shadowColor:"rgba(47,84,235,.12)"},{title:"Animations",content:"Modern design with nice animations",src:"https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg",color:"#F5222D",shadowColor:"rgba(245,34,45,.12)"},{title:"Code Generator",content:"Automatically generate code for all the modern languages",src:"https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg",color:"#FAAD14",shadowColor:"rgba(250,173,20,.12)"}],S=[{x:-30,y:-10},{x:20,y:-20},{x:-65,y:15},{x:-45,y:80},{x:35,y:5},{x:50,y:50,opacity:.2}],j=function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).onMouseOver=function(e){n.setState({hoverNum:e})},n.onMouseOut=function(){n.setState({hoverNum:null})},n.getEnter=function(e){var t=e.index,a=2*Math.random()-1,n=10*Math.random()+5,l=Math.round(Math.random()*(50*t));return[Object(g.a)({delay:l,opacity:.4},S[e.index],{ease:"easeOutBack",duration:300}),{y:a>0?"+=".concat(n):"-=".concat(n),duration:1e3*Math.random()+2e3,yoyo:!0,repeat:-1}]},n.state={hoverNum:null},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.state.hoverNum,a=[[],[],[]];return O.forEach((function(n,l){var r=t===l,c=["point-0 left","point-0 right","point-ring","point-1","point-2","point-3"].map((function(e){return o.a.createElement(C.default,{component:"i",className:e,key:e,style:{background:n.color,borderColor:n.color}})})),i=o.a.createElement("li",{key:l.toString()},o.a.createElement("div",{className:"page1-box",onMouseEnter:function(){e.onMouseOver(l)},onMouseLeave:e.onMouseOut},o.a.createElement(N,{className:"page1-point-wrapper",enter:e.getEnter,leave:{x:0,y:30,opacity:0,duration:300,ease:"easeInBack"}},(e.props.isMobile||r)&&c),o.a.createElement("div",{className:"page1-image",style:{boxShadow:"".concat(r?"0 12px 24px":"0 6px 12px"," ").concat(n.shadowColor)}},o.a.createElement("img",{src:n.src,alt:"img",style:4===l?{marginLeft:-15}:{}})),o.a.createElement("h3",null,n.title),o.a.createElement("p",null,n.content)));a[Math.floor(l/3)].push(i)})),a=a.map((function(e,t){return o.a.createElement(p.a,{className:"page1-box-wrapper",key:t.toString(),type:"bottom",leaveReverse:!0,delay:[100*t,100*(a.length-1-t)],component:"ul"},e)})),o.a.createElement("div",{className:"home-page page1"},o.a.createElement("div",{className:"home-page-wrapper",id:"page1-wrapper"},!this.props.isMobile&&o.a.createElement(k.a,{className:"page1-bg",animation:{translateY:200,ease:"linear",playScale:[0,1.65]},location:"page1-wrapper"},"Feature"),o.a.createElement("h2",null,"Out of the box ",o.a.createElement("span",null,"Features")),o.a.createElement("div",{className:"title-line-wrapper page1-line"},o.a.createElement("div",{className:"title-line"})),o.a.createElement(w.a,null,a)))}}]),a}(o.a.PureComponent),T=a(78),M=a(277),L=function(){return o.a.createElement("div",{className:"home-page page2"},o.a.createElement("div",{className:"home-page-wrapper"},o.a.createElement("div",{className:"title-line-wrapper page2-line"},o.a.createElement("div",{className:"title-line"})),o.a.createElement("h2",null,o.a.createElement("span",null,"Build")," Locally"),o.a.createElement(T.a,null,o.a.createElement(p.a,{key:"queue",type:"bottom",leaveReverse:!0,className:"page2-content"},o.a.createElement("p",{key:"p",className:"page-content"},"Use our ",o.a.createElement(M.a,{className:"site-badge-count-109",count:"CLI",style:{backgroundColor:"#52c41a"}})," tool to build locally or automate your deployment."),o.a.createElement("div",{key:"code1",className:"home-code"},o.a.createElement("div",null,"npm i ",o.a.createElement("span",null,"api-html")," -g"),o.a.createElement("div",null,"api-html --url https://petstore.swagger.io/v2/swagger.json"),o.a.createElement("div",null,o.a.createElement("span",{className:"home-code-comment"},"// The above command will generate the html files")),o.a.createElement("div",null,o.a.createElement("span",{className:"home-code-comment"},"// ",o.a.createElement("a",{href:"https://www.npmjs.com/package/api-html",target:"_blank"},"View complete documentation")))),o.a.createElement("p",{key:"p2",className:"page-content"},o.a.createElement("a",{href:"https://github.com/asfand-dev/api-html/issues",target:"_blank"},"Report an issue ")," |",o.a.createElement("a",{href:"https://github.com/asfand-dev/api-html/issues",target:"_blank"}," Request a feature ")," |",o.a.createElement("a",{href:"mailto:asfand.dev@gmail.com"}," Contact us ")," |",o.a.createElement("a",{href:"http://paypal.me/asfanddev",target:"_blank"}," Donate"))))))},z=a(169),A=a(91),F=a(276),R=a(280),W=a(275),I=a(278),P=a(127),D=a(281),U=a(282),B=a(283),H=a(284),_=a(285),q=function(){var e=Object(l.useState)({type:"swagger",version:2,inputType:"json",isBackToTopButton:!0,isCoding:!0,isSearch:!0,isTryRequest:!0,isCreditLink:!0,theme:"compact"}),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],d=Object(l.useState)(null),h=Object(i.a)(d,2),y=h[0],b=h[1],E=[{name:"url",label:"Source Url",type:"text",icon:o.a.createElement(D.a,null),style:{maxWidth:"100%"}},{name:"type",label:"Type",type:"select",style:{maxWidth:"calc(50% - 5px)"},options:[["swagger","Swagger"],["openapi","OpenAPI"],["api_blueprint","API Blueprint"],["io_docs","IO Docs"],["google","Google API Descory"],["raml","RAML"],["wadl","WADL"]]},{name:"version",label:"Version",type:"select",style:{maxWidth:"calc(50% - 5px)"},options:[[1],[2],[3]],swagger:!0},{name:"inputType",label:"Source Encoding",type:"select",style:{maxWidth:"calc(50% - 5px)"},options:[["json"],["yaml"]],swagger:!0},{name:"theme",label:"Theme",type:"select",style:{maxWidth:"calc(50% - 5px)"},options:[["compact","Compact"],["basic","Basic"]]},{name:"logo",type:"text",label:"Logo Url / Local Logo Name",style:{maxWidth:"100%"},tooltip:o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"Local logo name")," only works with the ",o.a.createElement("b",null,"Download")," action, not with the ",o.a.createElement("b",null,"Preview")," action.",o.a.createElement("br",null)," After downloading the ",o.a.createElement("b",null,"HTML")," file, the logo file should be placed in the same folder, the path of local logo file should be relative to the ",o.a.createElement("b",null,"HTML")," file.")},{name:"baseColor",type:"text",label:"Base Color (RGB, Hexa or Color Name)",style:{maxWidth:"calc(50% - 5px)"}},{name:"textColor",type:"text",label:"Text Color (RGB, Hexa or Color Name)",style:{maxWidth:"calc(50% - 5px)"}},{name:"pageTitle",type:"text",label:"Page Title",style:{maxWidth:"100%"},advance:!0},{name:"pageTags",type:"text",label:"Page Meta Keywords",style:{maxWidth:"100%"},tooltip:"Each keyword should be seperated by a comma. Meta Keywords are helpful for the SEO.",advance:!0},{name:"pageDescription",type:"textarea",label:"Page Meta Description",advance:!0},{name:"isBackToTopButton",type:"checkbox",label:o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"Back to top")," button"),style:{width:"100%"},value:!0,advance:!0},{name:"isCoding",type:"checkbox",label:o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"Coding")," Section"),style:{width:"100%"},advance:!0},{name:"isSearch",type:"checkbox",label:o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"Search")," Feature"),style:{width:"100%"},advance:!0},{name:"isTryRequest",type:"checkbox",label:o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"Try Request")," feature"),style:{width:"100%"},advance:!0},{name:"isCreditLink",type:"checkbox",label:o.a.createElement(o.a.Fragment,null,o.a.createElement("b",null,"Credit")," link",a.isCreditLink?"":o.a.createElement("span",null,". Please ",o.a.createElement("a",{href:"http://paypal.me/asfanddev",target:"_blank"},"donate")," to support the project.")),style:{width:"100%"},advance:!0},{name:"customHeadScript",type:"textarea",label:"Custom Head Script, will be added to the head tag after all other scripts",style:{maxWidth:"100%"},advance:!0},{name:"customFootScript",type:"textarea",label:"Custom Foot Script, will be added before ending tag of body.",style:{maxWidth:"100%"},advance:!0},{name:"apiVersions",type:"textarea",label:"API Versions, enter in the following format:\n(Name)[URL]\n(Name)[URL]\n...\nExp:\n(V1)[https://zamacall.io/docs/v1/]\n(V2)[https://zamacall.io/docs/v2/]",style:{maxWidth:"100%"},rows:8,advance:!0},{name:"headerMenuItems",type:"textarea",label:"Header Menu Items, enter in the following format:\n(Name)[URL]\n(Name)[URL]\n...\nExp:\n(Main Website)[https://zamacall.io]\n(Contact Us)[https://zamacall.io/contact/]",style:{maxWidth:"100%"},rows:8,advance:!0}];Object(l.useEffect)((function(){var e=function(e){var t=e.data,a=t.eventType,n=t.value;if("customFootScript"===a)v("customFootScript",n);else if("download"===a){var l=x({isDownload:!0});y.postMessage({eventType:"download",value:l},"*")}else if("preview"===a){var o=x();y.postMessage({eventType:a,value:o},"*")}};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e)}}),[y,a]);var v=function(e,t){n((function(a){return Object(g.a)({},a,Object(A.a)({},e,t))}))},f=function(e){return Object.keys(e).map((function(t){return e[t]?"".concat(t,"=").concat(encodeURIComponent(e[t])):""})).filter((function(e){return e})).join("&")},w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=a.url,n=a.type,l=a.version,o=a.inputType,r=Object(z.a)(a,["url","type","version","inputType"]),c={url:t,type:n};return"swagger"!==n&&"openapi"!==n||("yaml"===o&&(c.yaml=!0),l&&(c.version=l||2)),e&&(r.editor=!0),r&&(c.options=JSON.stringify(r)),f(c)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isEditor,a=void 0!==t&&t,n=e.isDownload,l=void 0!==n&&n,o=w(a);return"https://api-html.herokuapp.com/generate-html?".concat(o).concat(l?"&download=1":"")};"swagger"!==a.type&&(E=E.filter((function(e){var t=e.swagger;return!(void 0!==t&&t)}))),s||(E=E.filter((function(e){var t=e.advance;return!(void 0!==t&&t)})));var k=a.theme,C=void 0===k?"":k;return o.a.createElement("div",{className:"home-page download-section"},o.a.createElement("div",{className:"home-page-wrapper"},o.a.createElement("div",{className:"title-line-wrapper page2-line"},o.a.createElement("div",{className:"title-line"})),o.a.createElement("h2",null,"Preview or ",o.a.createElement("span",null,"Download")),o.a.createElement(T.a,null,o.a.createElement(p.a,{key:"queue",type:"bottom",leaveReverse:!0,className:"zama-section"},o.a.createElement("div",{key:"button",style:{marginTop:20}},o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:5}},o.a.createElement("span",{style:{color:"#1891ff",cursor:"pointer"},onClick:function(){var e=document.createElement("input");e.type="file",e.onchange=function(){var t=e.files[0];if(t){var a=new FileReader;a.readAsText(t,"UTF-8"),a.onload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,a=void 0===t?{}:t,l=a.result,o=void 0===l?{}:l;try{var r=JSON.parse(o);n(r)}catch(e){}},a.onerror=function(e){alert("Error importing file!")}}},e.click()}},"Import Options"),o.a.createElement("span",{style:{padding:"0 10px"}},"|"),o.a.createElement("span",{style:{color:"#1891ff",cursor:"pointer"},onClick:function(){var e=document.createElement("a");e.download="api-html.json",e.target="_blank",e.href="data:application/json;base64,".concat(btoa(JSON.stringify(a,null,4))),e.click()}},"Export Options")),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",maxWidth:800}},E.map((function(e){var t=e.name,n=e.type,l=e.icon,r=e.label,c=e.tooltip,s=e.style,m=e.options,p=void 0===m?[]:m,u=e.rows,d=void 0===u?5:u;return"text"===n?o.a.createElement(F.a,{key:t,size:"large",value:a[t]||"",onChange:function(e){return v(t,e.target.value)},placeholder:r,prefix:l,style:Object(g.a)({marginTop:10},s),suffix:c?o.a.createElement(R.a,{title:c},o.a.createElement(U.a,{style:{color:"rgba(0,0,0,.45)"}})):null}):"select"===n?o.a.createElement(W.a,{onChange:function(e){return v(t,e)},size:"large",key:t,placeholder:r,style:Object(g.a)({marginTop:10,width:"100%"},s),value:a[t]||""},o.a.createElement(W.a.Option,{key:"default",value:""},"Select ",r),p.map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.createElement(W.a.Option,{key:a,value:a},n||a)}))):"textarea"===n?o.a.createElement(F.a.TextArea,{key:t,size:"large",onChange:function(e){return v(t,e.target.value)},placeholder:r,style:Object(g.a)({marginTop:10},s),rows:d,value:a[t]}):o.a.createElement(I.a,{key:t,size:"large",onChange:function(e){return v(t,e.target.checked)},checked:a[t]||!1,style:Object(g.a)({marginTop:10},s)},r)}))),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:5}},"compact"===C&&o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:{color:"#1891ff",cursor:"pointer"},onClick:function(){if(!a.url)return alert("Please enter a correct Source URL");var e=x({isEditor:!0});b(window.open(e,"_blank","width=1200,menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes,status=no")),m.a.pageview(e)}},o.a.createElement(R.a,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{style:{color:"white"}},"Attention!"),o.a.createElement("b",null,"Single Click")," = ",o.a.createElement("b",null,"Text Edit"),o.a.createElement("br",null),o.a.createElement("b",null,"Double Click")," = ",o.a.createElement("b",null,"UI Customization"),o.a.createElement("br",null),"A new window will be open, where you can customize the UI or edit the text.",o.a.createElement("br",null),"The changes will be converted to ",o.a.createElement("b",null,"CSS & JavaScript")," and will be added to the ",o.a.createElement("b",null,"Custom Foot Script")," field in the ",o.a.createElement("b",null,"Advance Options"),". You can also ",o.a.createElement("b",null,"export")," the change for later use by using our export functionality.",o.a.createElement("br",null),"Once you are done with the changes, Hover over the ",o.a.createElement("b",null,o.a.createElement(B.a,null)," Settings")," in the ",o.a.createElement("b",null,"editor")," window, where you can ",o.a.createElement("b",null,"download")," or ",o.a.createElement("b",null,"preview"),".")},"Preview & Customize")),o.a.createElement("span",{style:{padding:"0 10px"}},"|")),o.a.createElement("span",{style:{color:"#1891ff",cursor:"pointer"},onClick:function(){return u(!s)}},"Advance Options ",s?"-":"+")),o.a.createElement("div",{style:{marginTop:20,display:"flex",justifyContent:"center",flexWrap:"wrap"}},o.a.createElement(P.a,{icon:o.a.createElement(H.a,null),onClick:function(){if(!a.url)return alert("Please enter a correct Source URL");var e=x();window.open(e,"_blank"),m.a.pageview(e)},style:{margin:"0 16px"},type:"primary",ghost:!0},"Preview"),o.a.createElement(P.a,{icon:o.a.createElement(_.a,null),onClick:function(){if(!a.url)return alert("Please enter a correct Source URL");var e=x({isDownload:!0});window.open(e,"_blank"),m.a.pageview(e)},type:"primary"},"Download")))))))},J=a(161),V=a.n(J),G=function(){return o.a.createElement("div",{className:"home-page page3"},o.a.createElement("div",{className:"home-page-wrapper"},o.a.createElement("div",{className:"title-line-wrapper page2-line"},o.a.createElement("div",{className:"title-line"})),o.a.createElement("h2",null,"Demo of ",o.a.createElement("span",null,"Pet Store")),o.a.createElement(T.a,null,o.a.createElement(p.a,{key:"queue",type:"bottom",leaveReverse:!0,className:"zama-section"},o.a.createElement("div",{key:"button",style:{marginTop:20,cursor:"pointer"},onClick:function(){window.open("https://pets-shop-swagger.netlify.app/","_blank")}},o.a.createElement("img",{src:V.a,style:{maxWidth:800,width:"100%"},alt:"swagger theme screenshot"}))))))},Y=a(279),K=function(){return o.a.createElement("footer",{id:"footer",className:"dark"},o.a.createElement(Y.a,{className:"bottom-bar",justify:"center",style:{fontSize:16}},"Made with \u2764 by\xa0",o.a.createElement("a",{href:"https://asfand-dev.github.io/",target:"_blank"},"Asfand")))};a(265),a(266),a(267),a(268),a(269);Object(s.enquireScreen)((function(e){n=e}));var Q=function(){var e=Object(l.useState)(n||!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(l.useEffect)((function(){Object(s.enquireScreen)((function(e){r(e)})),m.a.initialize("UA-179823339-1",{debug:!1,testMode:!1}),m.a.pageview(window.location.href)}),[]),o.a.createElement("div",null,o.a.createElement("div",{className:"home-wrapper"},o.a.createElement(h,{isMobile:a}),o.a.createElement(q,null),o.a.createElement(j,{isMobile:a}),o.a.createElement(G,null),o.a.createElement(L,null)),o.a.createElement(K,null))};a(270);c.a.render(o.a.createElement(Q,null),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.db77d7c1.chunk.js.map