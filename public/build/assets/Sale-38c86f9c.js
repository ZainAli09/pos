import{_ as u}from"./AuthenticatedLayout-797a5e11.js";import{_ as h}from"./Pagination-6fd096c6.js";import{h as f}from"./html2pdf-0b79e5cf.js";import{h as y}from"./moment-fbc5633a.js";import{Z as x,j as v,K as w,k as g,o as n,c as l,a as D,d as t,t as s,F as d,l as m}from"./app-23b24f86.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const P={components:{AuthenticatedLayout:u,Head:x,Pagination:h,Link:v},props:{start_date:Date,end_date:Date,sales:Object},data(){return{user:w().props.auth.user}},methods:{formatDate(a){return a?y(a).format("DD-MM-YYYY"):""},downloadPDF(){const a=document.getElementById("pdf-content");try{const e={margin:5,filename:"WS-product-list.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}};f().from(a).set(e).save()}catch(e){console.error("Error in downloadPDF:",e)}}}},F=t("meta",{charset:"utf-8"},null,-1),k=t("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},null,-1),S=t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),j=t("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"},null,-1),A={id:"pdf-content"},B={class:"row"},C={class:"col heading"},N={class:"row"},Y={class:"col heading"},q={class:"row"},E={class:"col heading"},R=t("div",{class:"row"},[t("div",{class:"col heading"},[t("h2",null,"Sale Report")])],-1),T={class:"flex space-x-4"},W=t("div",{class:"w-1/8"},[t("p",null,"From Date:")],-1),X={class:"w-1/6"},G=t("div",{class:"w-1/8"},[t("p",null,"To Date:")],-1),H={class:"w-1/6"},L=t("br",null,null,-1),I={class:"w-full whitespace-no-wrap"},J=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-black-500 uppercase bg-gray-300 border-b"},[t("th",{class:"px-1 py-3"},"Customer Name"),t("th",{class:"px-1 py-3"},"Product Code"),t("th",{class:"px-6 py-3"},"Product Name"),t("th",{class:"px-1 py-3"},"QTY"),t("th",{class:"px-1 py-3"},"Sale Price"),t("th",{class:"px-1 py-3"},"Total Amount")])],-1),M={class:"bg-white divide-y"},O=t("td",{class:"px-1 py-2 text-sm"},"Cash",-1),Q={class:"px-1 py-2 text-sm"},V={class:"px-4 py-2 text-sm"},K={class:"px-1 py-2 text-sm"},Z={class:"px-1 py-2 text-sm"},z={class:"px-1 py-2 text-sm"},U=t("br",null,null,-1),$=t("div",{class:"flex space-x-4 absolute bottom-0 w-full",id:"ledger-footer"},[t("div",{class:"w-1/2"},[t("p",null,"Developed By Reylma Solutions +92-333-600512")]),t("div",{class:"w-1/4"},[t("p",null,"Date: ")]),t("div",{class:"w-1/4"},[t("p",null,"Gen By: ")])],-1);function tt(a,e,i,st,r,c){const p=g("Head");return n(),l(d,null,[D(p,{title:"Sale Report"}),F,k,S,j,t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(..._)=>c.downloadPDF&&c.downloadPDF(..._))},"Download PDF"),t("div",A,[t("div",B,[t("div",C,[t("h2",null,s(r.user.company_name),1)])]),t("div",N,[t("div",Y,[t("h4",null,s(r.user.address),1)])]),t("div",q,[t("div",E,[t("h4",null,s(r.user.mobile_no),1)])]),R,t("div",T,[W,t("div",X,[t("p",null,s(c.formatDate(i.start_date)),1)]),G,t("div",H,[t("p",null,s(c.formatDate(i.end_date)),1)])]),L,t("table",I,[J,t("tbody",M,[(n(!0),l(d,null,m(i.sales,_=>(n(),l("tr",null,[O,(n(!0),l(d,null,m(_.sale_invoice_detail,o=>(n(),l(d,null,[t("td",Q,s(o.product.id),1),t("td",V,s(o.product.name),1),t("td",K,s(o.quantity),1),t("td",Z,s(o.amount),1),t("td",z,s(o.quantity*o.amount),1)],64))),256))]))),256))])]),U,$])],64)}const dt=b(P,[["render",tt]]);export{dt as default};