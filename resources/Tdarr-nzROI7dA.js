import{s as d}from"./service-CvN87575.js";import{_ as u,G as l,r as h,o as s,c as f,w as m,a as p,b as r,t as c,e as a}from"./index-DwBrLgem.js";const _={name:"Tdarr",components:{Generic:l},mixins:[d],props:{item:Object},data:()=>({stats:null,error:!1}),computed:{queue:function(){return this.stats?this.stats.table1Count:""},errored:function(){return this.stats?this.stats.table6Count:""}},created(){const t=parseInt(this.item.checkInterval,10)||0;t>0&&setInterval(()=>this.fetchStatus(),t),this.fetchStatus()},methods:{fetchStatus:async function(){try{const t={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({headers:{"content-Type":"application/json"},data:{collection:"StatisticsJSONDB",mode:"getById",docID:"statistics",obj:{}},timeout:1e3})},o=await this.fetch("/api/v2/cruddb",t);this.error=!1,this.stats=o}catch(t){this.error=!0,console.error(t)}}}},y={class:"notifs"},b=["title"],k=["title"],v={key:2,class:"notif error fa-solid fa-triangle-exclamation",title:"Unable to fetch current status"};function S(t,o,n,I,g,e){const i=h("Generic");return s(),f(i,{item:n.item},{indicator:m(()=>[p("div",y,[e.queue>0?(s(),r("strong",{key:0,class:"notif queue",title:`${e.queue} items queued`},c(e.queue),9,b)):a("",!0),e.errored>0?(s(),r("strong",{key:1,class:"notif errored",title:`${e.errored} items`},c(e.errored),9,k)):a("",!0),t.error?(s(),r("i",v)):a("",!0)])]),_:1},8,["item"])}const C=u(_,[["render",S],["__scopeId","data-v-043cc7fd"]]);export{C as default};
