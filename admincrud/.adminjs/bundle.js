(function(f){"use strict";function g(e){return e&&e.__esModule?e:{default:e}}var r=g(f);function d(e){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var s in c)e[s]=c[s]}return e}var x={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function p(e,o){function c(n,l,t){if(!(typeof document>"u")){t=d({},o,t),typeof t.expires=="number"&&(t.expires=new Date(Date.now()+t.expires*864e5)),t.expires&&(t.expires=t.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var i in t)t[i]&&(a+="; "+i,t[i]!==!0&&(a+="="+t[i].split(";")[0]));return document.cookie=n+"="+e.write(l,n)+a}}function s(n){if(!(typeof document>"u"||arguments.length&&!n)){for(var l=document.cookie?document.cookie.split("; "):[],t={},a=0;a<l.length;a++){var i=l[a].split("="),v=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(t[u]=e.read(v,u),n===u)break}catch{}}return n?t[n]:t}}return Object.create({set:c,get:s,remove:function(n,l){c(n,"",d({},l,{expires:-1}))},withAttributes:function(n){return p(this.converter,d({},this.attributes,n))},withConverter:function(n){return p(d({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(e)}})}var h=p(x,{path:"/"});const m=()=>{const e=async()=>{try{h.remove("token")}catch(o){console.log(o)}};return r.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"40px"}},r.default.createElement("div",{style:{marginBottom:"20px"}},r.default.createElement("h1",{style:{textAlign:"center",fontSize:"2em",padding:"10px",textWrap:"wrap",color:"black",fontWeight:"bold"}},"Bienvenido al panel crud de administrador"),r.default.createElement("p",{style:{color:"black",padding:"10px"}},'Aqu\xED podr\xE1s gestionar los registros de la base de datos haciendo click en "prisma" en la barra lateral podras observar todos las tablas de la base de datos, haciendo click en un modelo podras observar los registros actuales')),r.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center"}},r.default.createElement("a",{href:"https://classic-vision.alhanisespinal.tech/admin/home",style:{margin:"10px",textDecoration:"none",color:"black",backgroundColor:"white",padding:"10px",borderRadius:"5px",height:"100px",width:"400px",boxShadow:"0px 0px 10px 0px lightgrey"}},r.default.createElement("div",{style:{padding:"10px"}},r.default.createElement("h5",{style:{color:"black",fontWeight:"bold",textAlign:"center",textJustify:"center"}},"Volver al Home "),r.default.createElement("p",null,"Click aqu\xED para volver al panel anterior para ver todas las funciones del administrador"))),r.default.createElement("a",{onClick:e,href:"https://classic-vision.alhanisespinal.tech/login",style:{margin:"10px",textDecoration:"none",color:"black",backgroundColor:"white",padding:"10px",borderRadius:"5px",height:"100px",width:"400px",boxShadow:"0px 0px 10px 0px lightgrey"}},r.default.createElement("div",{style:{padding:"10px"}},r.default.createElement("h5",{style:{color:"black",fontWeight:"bold",textAlign:"center",textJustify:"center"}},"Salir "),r.default.createElement("p",null,"Click aqu\xED para cerrar tu sesi\xF3n")))))};AdminJS.UserComponents={},AdminJS.UserComponents.dashboard=m})(React);