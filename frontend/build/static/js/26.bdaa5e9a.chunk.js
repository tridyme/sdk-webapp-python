"use strict";(self.webpackChunksdk_structure_app=self.webpackChunksdk_structure_app||[]).push([[26],{1647:(e,t,n)=>{n.r(t);var o=n(3038),r=n.n(o),a=n(8362),i=n.n(a),c=n(8956),l=n.n(c),s=n(2823),d=(n(3508),n(4845)),u=n(8154),m=n(5982),p=n(6309),h=n(5235),g=n(4257),f=n(2428),A=n(46),E=n(4715),w=n(7031),P=n(1607);const v={MenuNavBar:[{text:"",link:"",href:"",icon:""}],MenuSideBarSup:[{text:"Plateforme",link:"",href:"http://socotec.tridyme.com/dashboard",icon:r().createElement(E.Z,null)}],MenuSideBarInf:[{text:"GitHub",link:"",href:"https://github.com/Igor-TriDyme/bolts-app.git",icon:"code"}],MenuSideBarNotion:[{text:"Documentation",link:"",href:"https://www.notion.so/tridyme/CB71-RectangularSection-Calcul-de-pannes-et-poutres-en-bois-3da4109cc8194f47aade5d4cbb554273",icon:"code"}]},{REACT_APP_LOGO:_,REACT_APP_COMPANY:C,REACT_APP_APPLICATION_ID:k,REACT_APP_PLATFORM_URL:R}={REACT_APP_LOGO:"./EC2-Ferraillage.svg",REACT_APP_COMPANY:"Socotec",REACT_APP_PLATFORM_URL:"https://socotec.tridyme.com",REACT_APP_APPLICATION_ID:"5899e0aca600741755433920"},b=()=>{const e=(0,u.Z)("(prefers-color-scheme: dark)"),t=(0,o.useMemo)((()=>(0,m.Z)((0,P.Z)({prefersDarkMode:e}))),[e]);(0,o.useEffect)((()=>{(async()=>{const e=localStorage.getItem("user");console.log("user",e);const t=JSON.parse(e);console.log("newUser",t)})()}),[]);return r().createElement(p.ThemeProvider,{theme:t},r().createElement(l(),null,r().createElement("title",null,"TriDyme | Applications"),r().createElement("link",{rel:"icon",type:"image/png",href:f.Z,sizes:"16x16"})),r().createElement(s.BrowserRouter,{history:d.Z},r().createElement(h.Z,{title:r().createElement(g.ListItem,null,r().createElement(g.ListItemAvatar,null,r().createElement(g.Avatar,{alt:"EC2-Ferraillage",src:w.Z,style:{borderRadius:"0%"}})),r().createElement(g.ListItemText,{primary:"EC2- Ferraillage"})),menu:v},r().createElement(s.Switch,null,r().createElement(s.Route,{exact:!0,path:`/applications/ID${k}`,component:A.Z}),r().createElement(s.Route,{exact:!0,path:`/applications/ID${k}/models/:modelId`,component:A.Z}),r().createElement(s.Redirect,{from:"/",to:`/applications/ID${k}`,component:A.Z})))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}i().render(r().createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t="./service-worker.js";T?(!function(e,t){fetch(e).then((n=>{const o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):y(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}}]);
//# sourceMappingURL=26.bdaa5e9a.chunk.js.map