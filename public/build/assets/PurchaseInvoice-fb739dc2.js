import{_ as u}from"./AuthenticatedLayout-8214144f.js";import{_ as p}from"./Pagination-4d338f42.js";import{h as v}from"./html2pdf-26a53721.js";import{Z as m,j as y,K as w,k as g,o as i,c as d,a as f,d as s,t,F as _,l as x}from"./app-dae928ff.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const D={components:{AuthenticatedLayout:u,Head:m,Pagination:p,Link:y},props:{purchaseInvoice:Object,purchaseInvoiceDetails:Array,authUser:String},data(){return{currentDate:new Date().toLocaleDateString(),currentTime:new Date().toLocaleTimeString(),quantity:this.purchaseInvoiceDetails.reduce((n,e)=>n+parseFloat(e.quantity),0),net_payable:this.purchaseInvoiceDetails.reduce((n,e)=>n+parseFloat(e.total_rate),0),created_at:"",user:w().props.auth.user}},created(){this.created_at=new Date(this.purchaseInvoice.created_at).toLocaleDateString()},computed:{truncatedAddress(){return this.purchaseInvoice.vendor.address.length>50?this.purchaseInvoice.vendor.address.substring(0,50)+"...":this.purchaseInvoice.vendor.address}},methods:{downloadPDF(){const n=document.getElementById("pdf-content");try{const e={margin:5,filename:"purchaseinvoice.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}};v().from(n).set(e).save()}catch(e){console.error("Error in downloadPDF:",e)}}}},P=s("meta",{charset:"utf-8"},null,-1),I=s("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},null,-1),F=s("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),k=s("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossorigin:"anonymous"},null,-1),A={id:"pdf-content"},S={class:"row"},j={class:"col heading"},B={class:"row"},N={class:"col heading"},T={class:"row"},q={class:"col heading"},L=s("div",{class:"row"},[s("div",{class:"col heading"},[s("h2",null,"Purchase Invoice")])],-1),V={class:"row"},E=s("div",{class:"col-lg-2"},[s("p",null,"Vendor:")],-1),X={class:"col-lg-2"},G=s("div",{class:"col-lg-4"},null,-1),H={class:"col-lg-2"},Q={class:"row"},R=s("div",{class:"col-lg-2"},[s("p",null,"Address:")],-1),W={class:"col-lg-6"},C=s("div",{class:"col-lg-2"},[s("p",null,"Purchase Date:")],-1),J={class:"col-lg-2"},K={class:"w-full whitespace-no-wrap"},O=s("thead",null,[s("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[s("th",{class:"px-4 py-1"},"Sr"),s("th",{class:"px-4 py-1"},"Product Name"),s("th",{class:"px-4 py-1"},"Quantity"),s("th",{class:"px-4 py-1"},"Price"),s("th",{class:"px-4 py-1"},"Net Total")])],-1),U={class:"bg-white divide-y"},Z={class:"px-4 py-1 text-sm"},z={class:"px-4 py-1 text-sm"},M={class:"px-4 py-1 text-sm"},Y={class:"px-4 py-1 text-sm"},$={class:"px-4 py-1 text-sm"},ss=s("br",null,null,-1),ts={class:"flex space-x-4"},es=s("div",{class:"w-1/3"},[s("p",null,"T. Item:")],-1),os={class:"w-1/3"},ls=s("div",{class:"w-1/3"},[s("p",null,"T. Qty:")],-1),ns={class:"w-1/3"},cs=s("div",{class:"w-1/3"},[s("p",null,"Dist %")],-1),as={class:"w-1/3"},is=s("div",{class:"col-lg-2"},[s("p",null,"Net Payable:")],-1),ds={class:"w-1/3"},_s=s("br",null,null,-1),rs=s("br",null,null,-1),hs={class:"flex space-x-4"},us=s("div",{class:"w-1/3"},[s("p",null,"Recieved By:")],-1),ps=s("div",{class:"w-1/3"}," ________________________ ",-1),vs=s("div",{class:"w-1/3"},[s("p",null,"Payable:")],-1),ms={class:"w-1/3"},ys=s("hr",null,null,-1),ws=s("div",{class:"flex space-x-4"},[s("div",{class:"w-1/3"},[s("p",null,"Thanks for ur Kind Visit")])],-1),gs=s("hr",null,null,-1),fs={class:"flex space-x-4"},xs=s("div",{class:"w-1/2"},[s("p",null,"Developed By Relyma Solutions +92-333-6005212")],-1),bs={class:"w-1/4"},Ds={class:"w-1/4"};function Ps(n,e,c,Is,o,a){const r=g("Head");return i(),d(_,null,[f(r,{title:"Purchase Invoices"}),P,I,F,k,s("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=(...l)=>a.downloadPDF&&a.downloadPDF(...l))},"Download PDF"),s("div",A,[s("div",S,[s("div",j,[s("h2",null,t(o.user.company_name),1)])]),s("div",B,[s("div",N,[s("h4",null,t(o.user.address),1)])]),s("div",T,[s("div",q,[s("h4",null,t(o.user.mobile_no),1)])]),L,s("div",V,[E,s("div",X,[s("p",null,t(c.purchaseInvoice.vendor.name),1)]),G,s("div",H,[s("p",null,"INV-"+t(c.purchaseInvoice.id),1)])]),s("div",Q,[R,s("div",W,[s("p",null,t(a.truncatedAddress),1)]),C,s("div",J,[s("p",null,t(o.created_at),1)])]),s("table",K,[O,s("tbody",U,[(i(!0),d(_,null,x(c.purchaseInvoiceDetails,(l,h)=>(i(),d("tr",{key:l.id},[s("td",Z,t(h+1),1),s("td",z,t(l.product.name),1),s("td",M,t(l.quantity),1),s("td",Y,t(l.product.purchase_rate),1),s("td",$,t(l.total_rate),1)]))),128))])]),ss,s("div",ts,[es,s("div",os,[s("p",null,t(c.purchaseInvoiceDetails.length),1)]),ls,s("div",ns,[s("p",null,t(o.quantity),1)]),cs,s("div",as,[s("p",null,t(c.purchaseInvoice.total_discount),1)]),is,s("div",ds,[s("p",null,t(o.net_payable),1)])]),_s,rs,s("div",hs,[us,ps,vs,s("div",ms,[s("p",null,t(o.net_payable),1)])]),ys,ws,gs,s("div",fs,[xs,s("div",bs,[s("p",null,"Date: "+t(o.currentDate),1)]),s("div",Ds,[s("p",null,"Gen By: "+t(c.authUser),1)])])])],64)}const Bs=b(D,[["render",Ps]]);export{Bs as default};
