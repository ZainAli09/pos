import{_ as m}from"./AuthenticatedLayout-afaeaae8.js";import{_ as g}from"./Pagination-b75b290f.js";import{Z as f,j as y,k as a,o as n,c as d,a as c,w as l,F as h,b,d as t,i as w,p as v,l as k,t as r}from"./app-e656b750.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const L={components:{AuthenticatedLayout:m,Head:f,Pagination:g,Link:y},props:{purchaseinvoices:Array},data(){return{search:""}},computed:{filteredPurchaseInvoices(){const o=this.search.toLowerCase();return this.purchaseinvoices.filter(s=>s&&s.id&&s.vendor.name&&s.id.toString().toLowerCase().includes(o)||s.vendor.name.toString().toLowerCase().includes(o))}},methods:{generatePdfUrl(o){return`/generate-pdf/purchase?invoiceid=${o}`}}},I={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},P={class:"px-4 py-2-mx-3"},N={class:"mx-3"},V=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Generate New Invoice",-1),C={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},H={class:"p-4"},S=t("label",{for:"search",class:"sr-only"},"Search",-1),B={class:"overflow-x-auto w-full"},M={class:"w-full whitespace-no-wrap"},D=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Invoice No"),t("th",{class:"px-4 py-3"},"Dated"),t("th",{class:"px-4 py-3"},"Vendor"),t("th",{class:"px-4 py-3"},"Total Quantity"),t("th",{class:"px-4 py-3"},"Net Amount"),t("th",{class:"px-4 py-3"},"Print")])],-1),T={class:"bg-white divide-y"},U={class:"px-4 py-3 text-sm"},$={class:"px-4 py-3 text-sm"},j={class:"px-4 py-3 text-sm"},F={class:"px-4 py-3 text-sm"},Z={class:"px-4 py-3 text-sm"},q={class:"px-4 py-3 text-sm"},E=["href"],G=t("button",{type:"button"},[t("svg",{class:"w-[18px] h-[18px] text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 20"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.1",d:"M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"})])],-1),Q=[G],z=t("div",{class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"},null,-1);function J(o,s,K,O,i,p){const _=a("Head"),u=a("Link"),x=a("AuthenticatedLayout");return n(),d(h,null,[c(_,{title:"Purchase Invoices"}),c(x,null,{header:l(()=>[b(" Purchase Invoices ")]),default:l(()=>[t("div",I,[t("div",P,[t("div",N,[c(u,{class:"ml-6 text-lg font-bold text-gray-800",href:o.route("purchaseinvoices.create")},{default:l(()=>[V]),_:1},8,["href"])])]),t("div",C,[t("div",H,[S,w(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.search=e),type:"text",id:"search",name:"search",class:"bg-gray-50 border border-black-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Invoice No / Vendor"},null,512),[[v,i.search]])]),t("div",B,[t("table",M,[D,t("tbody",T,[(n(!0),d(h,null,k(p.filteredPurchaseInvoices,(e,R)=>(n(),d("tr",{key:e.id,class:"text-gray-700"},[t("td",U,r(e.id),1),t("td",$,r(e.created_at),1),t("td",j,r(e.vendor.name),1),t("td",F,r(e.total_quantity),1),t("td",Z,r(e.net_amount),1),t("td",q,[t("a",{href:p.generatePdfUrl(e.id),target:"_blank"},Q,8,E)])]))),128))])])]),z])])]),_:1})],64)}const et=A(L,[["render",J]]);export{et as default};
