import{s as h}from"./service-CvN87575.js";import{_ as l,G as p,r as f,o as s,c as g,w as d,a as m,b as r,t as o,e as a}from"./index-DwBrLgem.js";const y="/api/v3",k="/api",v={name:"Radarr",components:{Generic:p},mixins:[h],props:{item:Object},data:()=>({activity:null,missing:null,warnings:null,errors:null,serverError:!1}),computed:{apiPath(){return this.item.legacyApi?k:y}},created:function(){this.fetchConfig()},methods:{fetchConfig:function(){const e=i=>{console.error(i),this.serverError=!0};this.fetch(`${this.apiPath}/health?apikey=${this.item.apikey}`).then(i=>{this.warnings=0,this.errors=0;for(var t=0;t<i.length;t++)i[t].type=="warning"?this.warnings++:i[t].type=="error"&&this.errors++}).catch(e),this.item.legacyApi||this.fetch(`${this.apiPath}/queue/details?apikey=${this.item.apikey}`).then(i=>{for(var t=0;t<i.length;t++)i[t].trackedDownloadStatus=="warning"?this.warnings++:i[t].trackedDownloadStaus=="error"&&this.errors++}).catch(e),this.fetch(`${this.apiPath}/queue?apikey=${this.item.apikey}`).then(i=>{if(this.activity=0,this.item.legacyApi)for(var t=0;t<i.length;t++)i[t].movie&&this.activity++;else this.activity=i.totalRecords}).catch(e),this.item.legacyApi||this.fetch(`${this.apiPath}/wanted/missing?pageSize=1&apikey=${this.item.apikey}`).then(i=>{this.fetch(`${this.apiPath}/wanted/missing?pageSize=${i.totalRecords}&apikey=${this.item.apikey}`).then(t=>{this.missing=t.records.filter(n=>n.monitored&&n.isAvailable&&!n.hasFile).length})}).catch(e)}}},_={class:"notifs"},u={key:0,class:"notif activity",title:"Activity"},w={key:1,class:"notif missing",title:"Missing"},$={key:2,class:"notif warnings",title:"Warning"},A={key:3,class:"notif errors",title:"Error"},P={key:4,class:"notif errors",title:"Connection error to Radarr API, check url and apikey in config.yml"};function C(e,i,t,n,E,G){const c=f("Generic");return s(),g(c,{item:t.item},{indicator:d(()=>[m("div",_,[e.activity>0?(s(),r("strong",u,o(e.activity),1)):a("",!0),e.missing>0?(s(),r("strong",w,o(e.missing),1)):a("",!0),e.warnings>0?(s(),r("strong",$,o(e.warnings),1)):a("",!0),e.errors>0?(s(),r("strong",A,o(e.errors),1)):a("",!0),e.serverError?(s(),r("strong",P,"?")):a("",!0)])]),_:1},8,["item"])}const b=l(v,[["render",C],["__scopeId","data-v-10b16033"]]);export{b as default};
