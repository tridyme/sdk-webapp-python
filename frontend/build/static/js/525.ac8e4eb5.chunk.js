(self.webpackChunksdk_structure_app=self.webpackChunksdk_structure_app||[]).push([[525],{7031:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});a(3038);const l=a.p+"static/media/EC2-Ferraillage.a1ada7d5c87aad114a6499047a154d46.svg"},2428:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});a(3038);const l=a.p+"static/media/logo.da38e02be255c96fa6597ccf19b75073.svg"},5235:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var l=a(3038),n=a.n(l),i=a(8596),r=a(3364),s=a(1590),o=a(1557),c=a(745);const d=240,u=(0,i.Z)((e=>({root:{},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"white",color:"black",height:"64px",border:"1px solid #D4D5DE"},appBarShift:{width:"calc(100% - 240px)",marginLeft:d,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),color:"black",backgroundColor:"white",borderRadius:"10%",width:"40px",height:"40px"},hide:{display:"none"},drawer:{width:d,flexShrink:0},drawerPaper:{width:d},drawerHeader:{display:"flex",alignItems:"center",padding:e.spacing(0,1),...e.mixins.toolbar,justifyContent:"flex-end"},content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})));function m(e){let{title:t,menu:a,children:l}=e;const i=u(),d=(0,r.Z)(),[m,h]=n().useState(!1);return n().createElement("div",{className:i.root},n().createElement(s.CssBaseline,null),n().createElement(s.Drawer,{className:i.drawer,variant:"persistent",anchor:"left",open:m,classes:{paper:i.drawerPaper}},n().createElement("div",{className:i.drawerHeader},n().createElement(s.IconButton,{onClick:()=>{h(!1)}},"ltr"===d.direction?n().createElement(o.Z,null):n().createElement(c.Z,null))),n().createElement(s.Divider,null),n().createElement(s.List,null,a.MenuSideBarSup.map(((e,t)=>n().createElement("a",{href:e.href,target:"_blank",style:{textDecoration:"none"}},n().createElement(s.ListItem,{button:!0,key:t},n().createElement(s.ListItemIcon,null,n().createElement(s.Icon,null,e.icon)),n().createElement(s.ListItemText,{primary:e.text})))))),n().createElement(s.Divider,null),n().createElement(s.List,null,a.MenuSideBarInf.map(((e,t)=>n().createElement("a",{href:e.href,target:"_blank",style:{textDecoration:"none"}},n().createElement(s.ListItem,{button:!0,key:t},n().createElement(s.ListItemIcon,null,n().createElement(s.Icon,null,e.icon)),n().createElement(s.ListItemText,{primary:e.text}))))))),l)}},46:(e,t,a)=>{"use strict";a.d(t,{Z:()=>ae});var l=a(3038),n=a.n(l),i=a(1590),r=a(6828),s=a(6513),o=a(8596);const c={data:{projet:{id:"projet",name:"projet",label:"projet",value:"NomDeLAffaire",description:"Nom du projet",unit:{value:"",label:""},standard:"",reference:""},file:{id:"file",name:"file",label:"file",value:"",description:"Nom du fichier",unit:{value:"",label:""},standard:"",reference:""},version:{id:"version",name:"version",label:"version",value:"0",description:"Version du projet",unit:{value:"",label:""},standard:"",reference:""},responsable:{id:"responsable",name:"responsable",label:"responsable",value:"0",description:"Responsable du projet",unit:{value:"",label:""},standard:"",reference:""},classe:{id:"classe",name:"classe",label:"classe",value:"",description:"classe",unit:{value:"",label:""},standard:"",reference:""},h:{id:"h",name:"h",label:"h",description:"Hauteur de la section",value:.7,unit:{value:"m",label:"m"}},b:{id:"b",name:"b",label:"b",description:"Largeur de la section",value:.5,unit:{value:"m",label:"m"}},c:{id:"c",name:"c",label:"c",description:"Enrobage inf\xe9rieur",value:.07,unit:{value:"m",label:"m"}},cPrime:{id:"cPrime",name:"cPrime",label:"c'",description:"Enrobage sup\xe9rieur",value:.07,unit:{value:"m",label:"m"}},d:{id:"d",name:"d",label:"d",description:"Distance du c.g des armatures tendues \xe0 la fibre la plus comprim\xe9e d\u2019une section",value:.63,unit:{value:"m",label:"m"}},dPrime:{id:"d' ",name:"d' ",label:"d' ",description:"Distance du c.g des aciers comprim\xe9s \xe0 la fibre de b\xe9ton la plus comprim\xe9e",value:.07,unit:{value:"m",label:"m"}},fck:{id:"fck",name:"fck",label:"fck",description:"R\xe9sistance caract\xe9ristique \xe0 la compression du b\xe9ton",value:40,unit:{value:"MPa",label:"MPa"}},alphacc:{id:"alphacc",name:"alphacc",label:"\u03b1cc",description:"Coefficient de fissuration du b\xe9ton",value:1,unit:{value:"-",label:""}},gammac:{id:"gammac",name:"gammac",label:"\u03b3c",description:"Coefficient de s\xe9curit\xe9",value:1.5,unit:{value:"-",label:""}},fcm:{id:"fcm",name:"fcm",label:"fcm",description:"R\xe9sistance moyenne \xe0 la compression du b\xe9ton",value:48,unit:{value:"MPa",label:"MPa"}},fcd:{id:"fcd",name:"fcd",label:"fcd",description:"Contrainte de compression du b\xe9ton",value:26.67,unit:{value:"MPa",label:"MPa"}},fctm:{id:"fctm",name:"fctm",label:"fctm",description:"R\xe9sistance \xe0 la traction du b\xe9ton",value:3.51,unit:{value:"MPa",label:"MPa"}},fyk:{id:"fyk",name:"fyk",label:"fyk",description:"Limite d'\xe9lasticit\xe9 caract\xe9ristique de l'acier",value:500,unit:{value:"MPa",label:"MPa"}},gammas:{id:"gammas",name:"gammas",label:"\u03b3s",description:"Coefficient de s\xe9curit\xe9 pour l'acier",value:1.15,unit:{value:"-",label:""}},E:{id:"E",name:"E",label:"E",description:"Module d\u2019\xe9lasticit\xe9 de l\u2019acier",value:2e5,unit:{value:"MPa",label:"MPa"}},fyd:{id:"fyd",name:"fyd",label:"fyd",description:"Limite d'\xe9lasticit\xe9 de l'acier",value:400,unit:{value:"MPa",label:"MPa"}},Med:{id:"Med",name:"Med",label:"Med",description:"Moment fl\xe9chissant",value:700,unit:{value:"kN.m",label:"kN.m"}},Ned:{id:"Ned",name:"Ned",label:"Ned",description:"Effort normal",value:0,unit:{value:"kN",label:"kN"}},Meq:{id:"Meq",name:"Meq",label:"Meq",description:"",value:700,unit:{value:"",label:""}},mud:{id:"mud",name:"mud",label:"\u03bclu",description:"Moment fl\xe9chissant ultime r\xe9duit",value:.1323,unit:{value:"-",label:""}},cas:{id:"cas",name:"cas",label:"cas",description:"",value:"Ned non n\xe9gatif",unit:{value:"",label:""}},alphau:{id:"alphau",name:"alphau",label:"\u03b1u",description:"Hauteur relative de l\u2019axe neutre \xe0 l\u2019ELU",value:.1781,unit:{value:"-",label:""}},zu:{id:"zu",name:"zu",label:"zu",description:"Bras de levier",value:.112,unit:{value:"m",label:"m"}},sigmaS:{id:"sigmaS",name:"sigmaS",label:"\u03c3s",description:"Contrainte de traction de l\u2019acier",value:434.78,unit:{value:"MPa",label:"MPa"}},AsMin:{id:"AsMin",name:"AsMin",label:"AsMin",description:"Section d'acier minimale",value:5.75,unit:{value:"cm\xb2",label:"cm\xb2"}},AsMax:{id:"AsMax",name:"AsMax",label:"AsMax",description:"Section d'acier maximale",value:144,unit:{value:"cm\xb2",label:"cm\xb2"}},AsSup:{id:"AsSup",name:"AsSup",label:"As,sup",description:"Section d'acier sup\xe9rieur",value:0,unit:{value:"cm\xb2",label:"cm\xb2"}},AsInf:{id:"AsInf",name:"AsInf",label:"As,inf",description:"Section d'acier inf\xe9rieur",value:5.75,unit:{value:"cm\xb2",label:"cm\xb2"}},AsSupR:{value:0},AsInfR:{value:5.75},conclusion:{id:"conclusion",name:"conclusion",label:"conclusion",description:"",value:"",unit:{value:"",label:""}}},ui:{projet:["projet","responsable","version"],concrete:["fck","alphacc","gammac"],steel:["fyk","gammas","E"],geometrie:["h","b","c","cPrime"],load:["Med","Ned"]}};var d=a(6072),u=a.n(d),m=a(6288);const h=class{constructor(){}round(e,t){return Math.round(e*10**t)/10**t}integral(e,t,a,l){const n=(a-t)/l;let i=0;for(let r=0;r<l;r++){i+=e(t+(r+.5)*n)}return i*n}regression(e,t,a){let l=[];for(let n=0;n<e.length;n++)l.push([e[n],t[n]]);return u().polynomial(l,{order:a,precision:10}).equation}cubicRegression(e,t){let a=[];for(let o=0;o<e.length;o++)a.push({x:e[o],y:t[o]});const l=a.map((e=>e.x)),n=a.map((e=>e.y)),i=(0,m.p4s)([(0,m.sQ3)(l,3),(0,m.sQ3)(l,2),l,(0,m.iUs)(l.length)]),r=(0,m.p4s)([n]),s=(0,m.JpY)((0,m.JpY)((0,m.JBn)((0,m.JpY)((0,m.p4s)(i),i)),(0,m.p4s)(i)),r);return{a:s.get([3,0]),b:s.get([2,0]),c:s.get([1,0]),d:s.get([0,0])}}};const p=class{constructor(e){this.data=e,this.mathematic=new h}fcm(){return this.data.fck.value+8}fcd(){const e=this.data.fck.value,t=this.data.alphacc.value,a=this.data.gammac.value;return this.mathematic.round(t*e/a,2)}};const g=class{constructor(e){this.data=e,this.mathematic=new h}fctm(){const e=this.data.fck.value;let t=0;return t=e>50?2.12*Math.log(1+(e+8)/10):.3*e**(2/3),this.mathematic.round(t,2)}fyd(){const e=this.data.fyk.value,t=this.data.gammas.value;return this.mathematic.round(e/t,2)}};const b=class{constructor(e){this.data=e,this.mathematic=new h}d(){const e=this.data.h.value,t=this.data.c.value;return this.mathematic.round(e-t,2)}dPrime(){return this.data.cPrime.value}};const f=class{constructor(e){this.data=e,this.mathematic=new h}Meq(){const e=this.data.Med.value,t=this.data.Ned.value,a=this.data.d.value,l=this.data.h.value;let n=0;t>0&&(n=Math.max(.02,l/30));const i=Math.abs(e)+t*(a-l/2+n);return this.mathematic.round(i,2)}};const v=class{constructor(e,t,a,l,n){this.data=e,this.mathematic=new h,this.steel=a,this.concrete=t,this.geometry=l,this.loads=n}AsMin(){const e=this.data.b.value,t=this.data.fyk.value,a=this.steel.fctm(),l=this.geometry.d();let n=1e4*Math.max(.26*e*l*a/t,.0013*e*l);return this.mathematic.round(n,2)}AsMax(){let e=.04*this.data.b.value*this.data.h.value*1e4;return this.mathematic.round(e,2)}Meq(){const e=this.data.Med.value,t=this.data.Ned.value,a=this.data.d.value,l=this.data.h.value;let n=0;t>0&&(n=Math.max(.02,l/30));return Math.abs(e)+t*(a-l/2+n)}mud(){const e=this.data.Ned.value,t=this.data.Med.value,a=this.data.b.value,l=this.data.c.value,n=this.data.cPrime.value,i=this.data.h.value,r=this.concrete.fcd(),s=this.Meq(),o=i-l;let c;if(e<0){let l,d=t/e;l=d<0?i/2-o:i/2-n,c=Math.abs(d)>Math.abs(l)?.001*s/(r*a*o**2):"--"}else c=.001*s/(r*a*o**2);return this.mathematic.round(c,2)}cas(){const e=this.data.Ned.value,t=this.data.Med.value,a=this.data.c.value,l=this.data.cPrime.value,n=this.data.h.value;let i;if(e<0){let r,s=t/e;r=s<0?n/2-(n-a):n/2-l,i=Math.abs(s)>Math.abs(r)?"section partiellement tendue":"section enti\xe8rement tendue"}else i="Ned non n\xe9gatif";return i}alphau(){const e=this.mud();let t;return t="--"===e?"--":1.25*(1-(1-2*e)**.5),this.mathematic.round(t,2)}zu(){const e=this.alphau(),t=this.mud();let a;const l=this.geometry.d();if("--"===t)a="--";else{a=l-.4*(e*l)}return a}sigmaS(){const e=this.data.E.value,t=this.mud(),a=this.geometry.d(),l=this.steel.fyd();let n,i;if("--"===t)i=l;else if(t<=.056)n=45,i=Math.min(n*e/1e3,l);else if(t>.056&&t<=.372){var r=this.alphau()*a;n=3.5*(a-r)/r,i=Math.min(n*e/1e3,l)}else i=l;return i}AsInf(){const e=this.mud(),t=this.data.Ned.value,a=this.data.Med.value,l=this.data.b.value,n=this.data.h.value,i=this.concrete.fcd(),r=this.steel.fyd(),s=this.loads.Meq(),o=this.cas(),c=this.AsMax();var d=this.geometry.d();const u=this.geometry.dPrime(),m=this.zu(),h=this.sigmaS();let p;if("section enti\xe8rement tendue"===o){var g=d-.5*n+a/t;p=a>0?10*t/r*(g/(d-u)-1):-t*g*10/(r*(d-u))}else{let n;if(e<=.372)n=10*s/(m*h)-.001*t*1e4/h,p=a>=0?n>=c?"--":n:n>=c?"--":0;else if(e>=.372&&e<.48){var b=.372*l*d**2*i*1e3,f=(s-b)/(r*(d-u))*10;n=b/(h*(d-.4*(.617*d)))*10+f,p=a>=0?n>=c?"--":n:n>=c?"--":f}else p="--"}return this.mathematic.round(p,2)}AsSup(){const e=this.mud(),t=this.data.Ned.value,a=this.data.Med.value,l=this.data.b.value,n=this.data.h.value,i=this.concrete.fcd(),r=this.steel.fyd(),s=this.loads.Meq(),o=this.cas(),c=this.AsMax();var d=this.geometry.d();const u=this.geometry.dPrime(),m=this.zu(),h=this.sigmaS();let p;if("section enti\xe8rement tendue"===o){var g=d-.5*n+a/t;p=a>0?-t*g*10/(r*(d-u)):10*t/r*(g/(d-u)-1)}else{let n;if(e<=.372)n=10*s/(m*h)-.001*t*1e4/h,p=a>=0?n>=c?"--":0:n>=c?"--":n;else if(e>=.372&&e<.48){var b=.372*l*d**2*i*1e3,f=(s-b)/(r*(d-u))*10;n=b/(h*(d-.4*(.617*d)))*10+f,p=a>=0?n>=c?"--":f:n>=c?"--":n}else p="--"}return p}AsInfR(){const e=this.AsInf(),t=this.AsMin(),a=this.data.Med.value;let l;return l="--"===e?"--":a>=0&&(e<=0||e<t)?t:e,l}AsSupR(){const e=this.AsSup(),t=this.AsMin(),a=this.data.Med.value;let l;return l="--"===e?"--":a<=0&&(e<=0||e<t)?t:e,l}conclusion(){const e=this.mud(),t=this.data.Ned.value,a=(this.data.Med.value,this.data.b.value),l=(this.data.h.value,this.concrete.fcd()),n=this.steel.fyd(),i=this.loads.Meq(),r=this.cas(),s=this.AsMax();var o=this.geometry.d();const c=this.geometry.dPrime(),d=this.zu(),u=this.sigmaS();let m;if("section enti\xe8rement tendue"===r)m="";else{let r;if(e<=.372)r=10*i/(d*u)-.001*t*1e4/u,m=r>=s?"Conclusion: Augmenter la section du b\xe9ton !":"";else if(e>=.372&&e<.48){const e=.372*a*o**2*l*1e3;r=e/(u*(o-.4*(.617*o)))*10+(i-e)/(n*(o-c))*10,m=r>=s?"Conclusion: Augmenter la section du b\xe9ton !":""}else m="Conclusion: Augmenter la section du b\xe9ton !"}return m}};const E=class{constructor(e){this.data=e,this.concrete=new p(this.data),this.steel=new g(this.data),this.geometry=new b(this.data),this.loads=new f(this.data),this.reinforcement=new v(this.data,this.concrete,this.steel,this.geometry,this.loads)}analysis(){return{d:{...this.data.d,value:this.geometry.d()},dPrime:{...this.data.dPrime,value:this.geometry.dPrime()},fcm:{...this.data.fcm,value:this.concrete.fcm()},fcd:{...this.data.fcd,value:this.concrete.fcd()},fctm:{...this.data.fctm,value:this.steel.fctm()},fyd:{...this.data.fyd,value:this.steel.fyd()},Meq:{...this.data.Meq,value:this.loads.Meq()},AsMin:{...this.data.AsMin,value:this.reinforcement.AsMin()},AsMax:{...this.data.AsMax,value:this.reinforcement.AsMax()},mud:{...this.data.mud,value:this.reinforcement.mud()},cas:{...this.data.cas,value:this.reinforcement.cas()},alphau:{...this.data.alphau,value:this.reinforcement.alphau()},zu:{...this.data.zu,value:this.reinforcement.zu()},sigmaS:{...this.data.sigmaS,value:this.reinforcement.sigmaS()},AsSup:{...this.data.AsSup,value:this.reinforcement.AsSup()},AsInf:{...this.data.AsInf,value:this.reinforcement.AsInf()},AsSupR:{...this.data.AsSupR,value:this.reinforcement.AsSupR()},AsInfR:{...this.data.AsInfR,value:this.reinforcement.AsInfR()},conclusion:{...this.data.conclusion,value:this.reinforcement.conclusion()}}}};var y=a(967);const x=e=>{let{state:t,setState:a,handleChange:l}=e;return n().createElement(i.Grid,{container:!0,spacing:1},n().createElement(i.Grid,{item:!0,xs:12},n().createElement(y.aD,{title:"B\xe9ton",subtitle:"Caract\xe9ristiques du b\xe9ton",elevation:0},n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:t.ui.concrete,onChange:l,style:{columnsWidth:["10%","30%","10%","50%"]}}))),n().createElement(i.Grid,{item:!0,xs:12},n().createElement(y.aD,{title:"Acier",subtitle:"Caract\xe9ristiques de l'acier",elevation:0},n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:t.ui.steel,onChange:l,style:{columnsWidth:["10%","30%","10%","50%"]}}))))},A=e=>{let{state:t,setState:a,handleChange:r}=e;const[s,o]=(0,l.useState)(!1),[c,d]=(0,l.useState)(null),[u,m]=(0,l.useState)(null);return n().createElement(i.Grid,{container:!0,spacing:3},n().createElement(i.Grid,{item:!0,md:12},n().createElement(y.aD,{title:"Geom\xe9trie",subtitle:"Caract\xe9ristiques g\xe9om\xe9triques",elevation:0},n().createElement(i.Grid,{item:!0,md:12},n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:t.ui.geometrie,onChange:r,style:{columnsWidth:["10%","30%","10%","50%"]}})))))},C=(0,o.Z)((e=>({card:{textDecoration:"none",margin:e.spacing(1),borderRadius:"0px"},link:{textDecoration:"none"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:23},pos:{marginBottom:12},badge:{"& > *":{margin:e.spacing(1)}}}))),M=e=>{let{title:t,subtitle:a,elevation:l,children:r,card:s}=e;const o=C();return n().createElement(i.Card,{className:s||o.card,elevation:l||0===l?l:3},n().createElement(i.CardHeader,{title:n().createElement("div",{className:o.title},t),subheader:a}),n().createElement(i.CardContent,null,r),n().createElement(i.CardActions,null))};(0,o.Z)((e=>({root:{"& .MuiTableCell-root":{border:"none"}},label:{fontFamily:"sans-serif",fontSize:"14px",width:"100%",lineHeight:"1"},tableCell:{lineHeight:"1.5"},tableContainer:{border:"1px solid #000",marginBottom:"10px",padding:"10px",marginRight:e.spacing(1),flex:"1"},tableTitle:{marginLeft:"0.5rem",fontSize:"16px",fontWeight:"bolder"}})));var S=a(8353);const k=e=>{var t=[];return e.forEach((e=>{var a={label:e.chartTitle,type:"scatter",data:e.value,backgroundColor:e.backColor,borderColor:e.bordColor,borderWidth:3,lineTension:0,showLine:!0,fill:!0};t.push(a)})),{labels:["Scatter"],datasets:t}},w=(e,t,a,l,n,i,r)=>{const s=e[0];return{showLines:!0,animation:!1,legend:{display:!1},tooltips:{callbacks:{label:e=>{if(0===e.datasetIndex){return`X: ${e.xLabel.toFixed(3)} Y: ${e.yLabel.toFixed(3)}`}return""},title:e=>{const t=e[0].datasetIndex;return 1===t?[`AsInf = ${r} cm\xb2`]:2===t?[`Assup = ${i} cm\xb2`]:""},labelColor:e=>{e.datasetIndex;return{borderColor:"red",backgroundColor:"red"}}}},elements:{point:{radius:1}},scales:{xAxes:[{type:"linear",position:"bottom",ticks:{min:t,max:a},scaleLabel:{display:!0,labelString:`${s.axisName.x}(${s.unit.x})`}}],yAxes:[{type:"linear",position:"bottom",ticks:{min:l,max:n},scaleLabel:{display:!0,labelString:`${s.axisName.y}(${s.unit.y})`}}]}}},N=e=>{let{dataForChart:t,Xmin:a,Xmax:l,Ymin:i,Ymax:r,ldisplay:s,AsSupR:o,AsInfR:c}=e;return n().createElement("div",null,n().createElement(S.bp,{className:"chart",width:200,height:200,data:k(t),options:w(t,a,l,i,r,o,c)}))},P=e=>{var t,a,l,r,s,o,c,d,u,m,h,p;let{state:g,setState:b,handleChange:f,hasSteel:v}=e;const E=null===(t=g.data)||void 0===t||null===(a=t.b)||void 0===a?void 0:a.value,y=null===(l=g.data)||void 0===l||null===(r=l.h)||void 0===r?void 0:r.value,x=null===(s=g.data)||void 0===s||null===(o=s.c)||void 0===o?void 0:o.value,A=null===(c=g.data)||void 0===c||null===(d=c.cPrime)||void 0===d?void 0:d.value,C=null===(u=g.data)||void 0===u||null===(m=u.AsSupR)||void 0===m?void 0:m.value,S=null===(h=g.data)||void 0===h||null===(p=h.AsInfR)||void 0===p?void 0:p.value,k=.016,w=[{x:x,y:x},{x:x,y:x+k},{x:E-x,y:x+k},{x:E-x,y:x},{x:x,y:x}],P=[{x:A,y:y-A-k},{x:A,y:y-A},{x:E-A,y:y-A},{x:E-A,y:y-A-k},{x:A,y:y-A-k}],T=[...[[...[{x:0,y:0},{x:E,y:0},{x:E,y:y},{x:0,y:y},{x:0,y:0}],w,P]].map(((e,t)=>({chartTitle:t,value:e,axisName:{x:"l ",y:"h "},unit:{x:"m",y:"m"},bordColor:0===t?["rgba(59, 57, 59, 1)"]:"red"}))),v&&{chartTitle:"lowerSteel",value:w,axisName:{x:"l ",y:"h "},unit:{x:"m",y:"m"},backColor:"red",bordColor:"red",text:"Lower Steel"},v&&{chartTitle:"upperSteel",value:P,axisName:{x:"l ",y:"h "},unit:{x:"m",y:"m"},backColor:"red",bordColor:"red",text:"Upper Steel"}];return n().createElement(i.Grid,{container:!0},n().createElement(i.Grid,{item:!0,md:12},n().createElement(M,{title:"Graphique",subtitle:"Section rectangulaire",elevation:0},n().createElement(N,{dataForChart:T,Xmin:0,Xmax:Math.max(E,y),Ymin:0,Ymax:Math.max(E,y),ldisplay:!0,AsSupR:C,AsInfR:S}))))},T=e=>{let{state:t,setState:a,handleChange:l}=e;return n().createElement(i.Grid,{container:!0,spacing:3},n().createElement(i.Grid,{item:!0,md:12,container:!0,spacing:3},n().createElement(i.Grid,{item:!0,md:6},n().createElement(A,{state:t,setState:a,handleChange:l}),n().createElement(x,{state:t,setState:a,handleChange:l})),n().createElement(i.Grid,{item:!0,lg:4,md:6,sm:8,xs:12},n().createElement(P,{state:t,setState:a,handleChange:l,hasSteel:!1}))))},I=()=>n().createElement(i.Grid,{style:{marginTop:"20px"}},n().createElement("p",{style:{fontSize:"20px",textAlign:"center"}}," Calcul du ferraillage pour une section rectangulaire \xe0 l'Eurocode 2"),n().createElement("p",{style:{lineHeight:1.8}},"Le programme permet de calculer les sections d'acier sup\xe9rieur et inf\xe9rieur n\xe9cessaires pour une section rectangulaire sous l'effet des efforts normaux et moments fl\xe9chissant.",n().createElement("br",null)),n().createElement("p",null,n().createElement("span",{style:{fontWeight:"bold"}},"Conventions :")," N "," > "," 0 Compression, MG "," > "," 0 Comprime la fibre sup\xe9rieure / Tend la fibre inf\xe9rieure"),n().createElement("p",null,n().createElement("span",{style:{fontWeight:"bold"}},"Conventions :")," N "," < "," 0 Traction, MG "," < "," 0 Comprime la fibre inf\xe9rieure / Tend la fibre sup\xe9rieure"),n().createElement("p",null,"Prendre en consid\xe9ration les imperfections g\xe9om\xe9triques dans le cas de l'ELU et en compression uniquement selon la norme EC2-1-1, paragraphe 5.2(5) et (7)."),n().createElement("p",null,"Bibliographie : R\xe8gles Eurocodes"),n().createElement("p",null,n().createElement("span",{style:{fontWeight:"bold"}},"NF EN 1992-1-1 : ")," Eurocode 2 - Calcul des structures en b\xe9ton - Partie 1-1 : r\xe8gles g\xe9n\xe9rales et r\xe8gles pour les b\xe2timents"));var R=a(948);(0,o.Z)((e=>({root:{"& .MuiTableCell-root":{border:"none"}},label:{fontFamily:"sans-serif",fontSize:"14px",width:"100%",lineHeight:"1"},tableCell:{lineHeight:"1.5"},tableContainer:{border:"1px solid #000",marginBottom:"10px",padding:"10px",marginRight:e.spacing(1),flex:"1"},tableTitle:{marginLeft:"0.5rem",fontSize:"16px",fontWeight:"bolder"}})));const D=(0,o.Z)((e=>({root:{"& .MuiTableCell-root":{border:"none"}},label:{fontFamily:"sans-serif",fontSize:"14px",width:"100%",lineHeight:"1"},tableCell:{lineHeight:"1.5"},tableContainer:{border:"1px solid #000",marginBottom:"10px",padding:"10px",marginRight:e.spacing(1),flex:"1"},tableTitle:{marginLeft:"0.5rem",fontSize:"16px",fontWeight:"bolder"}}))),L=e=>{let{state:t,data:a,ui:r,onChange:s,setState:o,handleChange:c,isDisable:d}=e;const[u,m]=(0,l.useState)([]);(0,l.useEffect)((()=>{m(r)}),[]);D();function h(e,t){const a=10**t;return Math.round(e*a)/a}const p=["10%","30%","10%","50%"],g=["10%","20%","20%","10%","40%"];return n().createElement(i.Grid,{container:!0,spacing:3,justifyContent:"space-between"},n().createElement(i.Grid,{item:!0,lg:8,md:8,sm:8,xs:12},n().createElement(i.Grid,{container:!0,spacing:3,direction:"column"},n().createElement(i.Grid,{item:!0,xs:12},n().createElement(y.aD,{title:"Efforts",subtitle:"Charges \xe0 l'ELU",elevation:0},n().createElement(i.Table,{style:{width:"100%"}},n().createElement("thead",null,n().createElement("tr",{key:0},["Nom","Valeur","Unit\xe9","Description"].map(((e,t)=>n().createElement("td",{key:t,style:{textAlign:"center",fontWeight:"bold",width:null===p||void 0===p?void 0:p[t]}},e))))),n().createElement("tbody",null,n().createElement("tr",null,n().createElement("td",{style:{textAlign:"center"}},`${t.data.Med.label}`),n().createElement("td",null,n().createElement(R.NumericFormat,{style:{border:0,backgroundColor:"white",width:"100%",color:"blue",textAlign:"center"},type:"text",onChange:c("Med"),value:h(t.data.Med.value,2),disabled:!1})),n().createElement("td",{style:{textAlign:"center"}},`${t.data.Med.unit.value}`),n().createElement("td",{style:{textAlign:"center"}},`${t.data.Med.description}`)),n().createElement("tr",null,n().createElement("td",{style:{textAlign:"center"}},`${t.data.Ned.label}`),n().createElement("td",{style:{textAlign:"center"}},n().createElement(R.NumericFormat,{style:{border:0,backgroundColor:"white",width:"100%",color:"blue",textAlign:"center"},type:"text",onChange:c("Ned"),value:h(t.data.Ned.value,2),disabled:!1})),n().createElement("td",{style:{textAlign:"center"}},`${t.data.Ned.unit.value}`),n().createElement("td",{style:{textAlign:"center"}},`${t.data.Ned.description}`)))))),n().createElement(i.Grid,{item:!0,xs:12},n().createElement(y.aD,{title:"R\xe9sultats",subtitle:"Sections d'acier calcul\xe9es et th\xe9oriques",elevation:0},n().createElement(i.Table,{style:{width:"100%"}},n().createElement("thead",null,n().createElement("tr",{key:0},["Nom","Valeur calcul\xe9e","Valeur \xe0 appliquer","Unit\xe9","Description"].map(((e,t)=>n().createElement("td",{key:t,style:{textAlign:"center",fontWeight:"bold",width:null===g||void 0===g?void 0:g[t]}},e))))),n().createElement("tbody",null,n().createElement("tr",null,n().createElement("td",{style:{textAlign:"center"}},`${t.data.AsSup.label}`," "),n().createElement("td",{style:{textAlign:"center"}},n().createElement(R.NumericFormat,{style:{border:0,textAlign:"center",backgroundColor:"white",width:"100%",color:"black"},type:"text",onChange:c,value:h(t.data.AsSup.value,2),disabled:!0})),n().createElement("td",null,n().createElement(R.NumericFormat,{style:{border:0,textAlign:"center",backgroundColor:"white",width:"100%",color:"black"},type:"text",onChange:c,value:h(t.data.AsSupR.value,2),disabled:!0})),n().createElement("td",{style:{textAlign:"center"}},`${t.data.AsSup.unit.value}`," "),n().createElement("td",{style:{textAlign:"center"}}," ",`${t.data.AsSup.description}`," ")),n().createElement("tr",null,n().createElement("td",{style:{textAlign:"center"}},`${t.data.AsInf.label}`),n().createElement("td",null,n().createElement(R.NumericFormat,{style:{border:0,textAlign:"center",backgroundColor:"white",width:"100%",color:"black"},type:"text",onChange:c,value:h(t.data.AsInf.value,2),disabled:!0})),n().createElement("td",null,n().createElement(R.NumericFormat,{style:{border:0,textAlign:"center",backgroundColor:"white",width:"100%",color:"black"},type:"text",onChange:c,value:h(t.data.AsInfR.value,2),disabled:!0})),n().createElement("td",{style:{textAlign:"center"}},`${t.data.AsInf.unit.value}`),n().createElement("td",{style:{textAlign:"center"}},`${t.data.AsInf.description}`)))))))),n().createElement(i.Grid,{item:!0,lg:4,md:6,sm:8,xs:12},n().createElement("div",{style:{maxWidth:"400px"}},n().createElement(P,{state:t,setState:o,handleChange:c,hasSteel:!0}))),n().createElement(i.Grid,{item:!0,xs:12},n().createElement(y.aD,{title:"D\xe9tails de calcul",subtitle:"Flexion compos\xe9e",elevation:0},n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:["d","dPrime","fcm","fcd","fctm","fyd","mud","alphau","zu","sigmaS","AsMin","AsMax"],onChange:c,style:{columnsWidth:["10%","30%","10%","50%"]},disabled:!0}))))};var F=a(1146),G=a.n(F);const _=a.p+"static/media/logo.b5984640403c893ef7ae7b8d69e4ba00.svg",z=e=>{let{state:t,setState:a,handleChange:l}=e,r=n().useRef();const s="solid 0.5px #000000",o=new Date(Date.now()),c=t.data.projet.value;t.data.file.value;return n().createElement(i.Grid,{container:!0,spacing:3},n().createElement(i.Grid,{item:!0,md:12,style:{textAlign:"right"}},n().createElement(G(),{trigger:()=>n().createElement(i.Button,{color:"#0082DE",variant:"contained",style:{marginTop:"1rem",backgroundColor:"#0082DE",color:"white"}},"Imprimer"),content:()=>r})),n().createElement("br",null),n().createElement("br",null),n().createElement("div",{ref:e=>r=e,style:{paddingLeft:"30px",paddingRight:"30px",paddingTop:"30px",width:"100%"}},n().createElement(i.Grid,{item:!0,md:12},n().createElement("table",{style:{width:"100%"}},n().createElement("tbody",null,n().createElement("tr",null,n().createElement("td",{width:"10%",style:{borderTop:s,borderBottom:s,borderLeft:s,borderRight:s,textAlign:"center"}},n().createElement("img",{src:_})),n().createElement("td",{width:"80%",style:{borderTop:s,borderBottom:s,borderLeft:s,borderRight:s,textAlign:"center"}},"EC2-Ferraillage - Version v0.0.0"),n().createElement("td",{width:"10%",style:{borderTop:s,borderBottom:s,borderLeft:s,borderRight:s,textAlign:"center"}}," ",o.toLocaleDateString())))),n().createElement("div",{style:{fontSize:24,marginTop:"1rem",marginBottom:"1rem"}},"Donn\xe9es saisies"),n().createElement("p",null,n().createElement("strong",null," Nom de l'affaire :  ",c)),n().createElement(i.Grid,{item:!0,md:10},n().createElement("p",{style:{marginTop:"1rem",fontSize:"1rem"}}," ",n().createElement("strong",null," Hypoth\xe8ses ")),n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:["h","b","c","cPrime","fck","alphacc","gammac","fyk","gammas","E"],onChange:l,style:{columnsWidth:["10%","30%","10%","50%"]},disabled:!0}),n().createElement("p",{style:{marginTop:"1rem",fontSize:"1rem"}}," ",n().createElement("strong",null," Donn\xe9s de Charges ")),n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:["Ned","Med"],onChange:l,style:{columnsWidth:["10%","30%","10%","50%"]},disabled:!0}),n().createElement("p",{style:{marginTop:"1rem",fontSize:"1rem"}}," ",n().createElement("strong",null," V\xe9rifications ")),n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:["d","dPrime","fcm","fcd","fctm","fyd","mud","alphau","zu","sigmaS","AsMin","AsMax"],onChange:l,style:{columnsWidth:["10%","30%","10%","50%"]},disabled:!0}),n().createElement("p",{style:{marginTop:"1rem",fontSize:"1rem"}}," ",n().createElement("strong",null," Ferraillage ")),n().createElement(y.n9,{headers:["Nom","Valeur","Unit\xe9","Description"],keys:["label","value","unit","description"],data:t.data,ui:["AsSup","AsInf"],onChange:l,style:{columnsWidth:["10%","30%","10%","50%"]},disabled:!0}))),n().createElement(i.Grid,{item:!0,md:12,ref:e=>r=e},n().createElement("div",{style:{maxWidth:"400px"}},n().createElement(P,{state:t,setState:a,handleChange:l,hasSteel:!0})))))};var $=a(7031),j=a(8096),O=a(3969),W=a(159),Z=a(272),B=a(1993),U=a(4845),q=a(1243),H=a(5720);const V=(0,o.Z)((e=>({root:{"& .MuiTableCell-root":{border:"none"}},label:{fontFamily:"sans-serif",fontSize:"14px"},tableCell:{lineHeight:"1.5"},tableContainer:{border:"1px solid #000",marginBottom:"10px",padding:"10px",marginRight:e.spacing(1),flex:"1"},tableTitle:{marginLeft:"0.5rem",fontSize:"16px",fontWeight:"bolder"},overlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:999}})));function J(e){const{children:t,value:a,index:l,...r}=e;return n().createElement("div",Object.assign({role:"tabpanel",hidden:a!==l,id:`scrollable-auto-tabpanel-${l}`,"aria-labelledby":`scrollable-auto-tab-${l}`},r),a===l&&n().createElement(i.Box,{p:3},n().createElement(i.Typography,null,t)))}function Y(e){return{id:`scrollable-auto-tab-${e}`,"aria-controls":`scrollable-auto-tabpanel-${e}`}}const{REACT_APP_LOGO:X,REACT_APP_PLATFORM_API_URL:Q,REACT_APP_PLATFORM_URL:K,REACT_APP_PLATFORM_API_TOKEN:ee,REACT_APP_APPLICATION_ID:te}={REACT_APP_LOGO:"./EC2-Ferraillage.svg",REACT_APP_PLATFORM_URL:"https://socotec.tridyme.com",REACT_APP_PLATFORM_API_URL:"https://backend.socotec.tridyme.com/api",REACT_APP_PLATFORM_API_TOKEN:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRyaWR5bWUuY29tIiwiX2lkIjoiNTg5OWUwYWNhNjAwNzQxNzU1NDMzOTAyIiwiaWF0IjoxNjg4NDY3NzA2fQ.FGDbvEVZnDIVNjsi0izrt-63lVndg7EnNpDK9BO1LiE",REACT_APP_APPLICATION_ID:"5899e0aca600741755433920"};const ae=function(e){var t;let{match:a}=e;const o=V(),d=JSON.parse(localStorage.getItem("user"));let u;null!=d&&(u=d._id);const[m,h]=n().useState({tab:"1"}),[p,g]=(0,l.useState)(c),[b,f]=(0,l.useState)(0),[v,x]=(0,l.useState)(!0),[A,C]=(0,l.useState)(null===(t=a.params)||void 0===t?void 0:t.modelId),[M,S]=(0,l.useState)();(0,l.useEffect)((()=>{(async()=>{let e={};if(console.log("initialState.data",c.data),console.log("modelId",A),A){const t=await k(A);console.log("MODEL",t),e=t.data}else e=c;console.log("actualState",e);const t=new E(e.data).analysis(),a={...e,data:{...e.data,...t}};console.log("updatedState",a),g(a),x(!1)})()}),[]);const k=async e=>{try{const{data:t}=await q.Z.get(`${Q}/models/${e}`);return console.log("{ data }",{data:t}),t}catch(t){return console.log("error when get models: ",t),[]}},w=e=>t=>{console.log("event.target.type",t.target.type);const a={...p.data,[e]:{...p.data[e],value:Number(t.target.value)}},l=new E(a).analysis(),n={...p,data:{...a,...l}};console.log("updatedState ",n),g(n)};return n().createElement(i.Grid,{container:!0,spacing:3},n().createElement(i.Grid,{item:!0,xs:12},n().createElement(s.Z,{onClick:async()=>{try{const e="http://localhost:8000/api/data",t=await fetch(e,{method:"GET"});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const a=await t.json();console.log("DATA",a)}catch(e){console.log("ERROR")}}},"API"),n().createElement(s.Z,{onClick:async()=>{try{const e=await fetch("http://localhost:8000/api/analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.json();console.log("RESULTAT",t)}catch(e){console.log("Erreur lors de l'envoi de l'\xe9tat:",e)}}},"CALCUL"),n().createElement(y.aD,{elevation:0,title:n().createElement(j.Z,null,n().createElement(O.Z,null,n().createElement(Z.Z,{alt:"EC2-Ferraillage",src:$.Z,style:{borderRadius:"0%",cursor:"pointer",height:"2.5em",width:"2.5em",backgroundColor:"#E6F3FC",borderRadius:"50px"}})),n().createElement(W.Z,{primary:n().createElement(i.Typography,{variant:"h5",component:"h2"},"EC2-Ferraillage")}))},n().createElement(i.Grid,{container:!0,spacing:3},u&&n().createElement(n().Fragment,null,n().createElement(i.Grid,{item:!0,sm:6,style:{textAlign:"left"}},n().createElement(r.Z,{className:o.margin},n().createElement(y.dD,{data:{description:"Nom de l'affaire",value:p.data.projet.value},onChange:(N="projet",e=>{const t={...p.data,[N]:{...p.data[N],value:e.target.value}},a={...p,data:{...p.data,...t}};g(a)}),props:{disableUnderline:!0,disableInputAdornment:!0},style:{color:"#0082DE"}}))),n().createElement(i.Grid,{item:!0,sm:6,style:{textAlign:"right"}},n().createElement(y.Jc,{label:"Sauvegarder",onClick:async()=>{console.log("STATE",p);try{const e={project:null,name:p.data.projet.value,application:`${te}`,applicationName:"Dalle",data:p,user:String(u)};if(A){const t={_id:A,...e},{data:a}=await q.Z.post(`${Q}/models/updateModel`,t);console.log("Model updated",a)}else{const t=e,{data:a}=await q.Z.post(`${Q}/models/addModel`,t),l=a._id;U.Z.push(`/applications/ID${te}/models/${l}`),C(l),console.log("Model added",a)}B.Am.success("Projet enregistr\xe9",{autoClose:3e3})}catch(e){console.log(e),console.log("Model not saved"),B.Am.error("Erreur : Projet Non enregistr\xe9",{autoClose:3e3})}},style:{borderRadius:"0px",backgroundColor:"#FFFFFF",color:"#0082DE",margin:"1em",textTransform:"none"}}))),n().createElement(i.Grid,{item:!0,xs:12},n().createElement("div",{style:{flexGrow:1,width:"100%"}},n().createElement(i.Tabs,{value:b,onChange:(e,t)=>{f(t),console.log("tab",b)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",indicatorColor:"primary"},n().createElement(i.Tab,Object.assign({label:"Hypoth\xe8ses"},Y(0))),n().createElement(i.Tab,Object.assign({label:"Saisie"},Y(1))),n().createElement(i.Tab,Object.assign({label:"Calcul"},Y(2))),n().createElement(i.Tab,Object.assign({label:"Aper\xe7u"},Y(3)))),v&&u?n().createElement("div",{className:o.overlay},n().createElement(H.Z,null)):n().createElement(n().Fragment,null),n().createElement(J,{value:b,index:0},n().createElement(I,null)),n().createElement(J,{value:b,index:1},n().createElement(T,{state:p,setState:g,handleChange:w})),n().createElement(J,{value:b,index:2},n().createElement(L,{state:p,setState:g,handleChange:w})),n().createElement(J,{value:b,index:3},n().createElement(z,{state:p,setState:g,handleChange:w}))))))));var N}},4845:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});const l=(0,a(2610).lX)()},1607:(e,t,a)=>{"use strict";function l(e){return{palette:{type:"light",background:{default:"#ffffff"},primary:{main:"#0082DE"},secondary:{main:"#ffffff",dark:"#FAFAFA",contrastText:"#0082DE"}},overrides:{MuiCard:{root:{borderRadius:"0px"}},MuiPaper:{root:{borderRadius:"0px"}},MuiInput:{root:{borderRadius:"0px",padding:"5px",underline:{borderBottomColor:"transparent"}}},MuiTextField:{root:{}},MuiTab:{root:{outline:"none",textTransform:"none","&$selected":{fontWeight:"bold"}}},MuiButton:{root:{margin:"0.5em",borderRadius:"0px",textTransform:"none",fontSize:"1em",fontWeight:"bold"}}}}}a.d(t,{Z:()=>l})},3508:()=>{},5042:()=>{}}]);
//# sourceMappingURL=525.ac8e4eb5.chunk.js.map