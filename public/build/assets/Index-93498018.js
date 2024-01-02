import{_ as x}from"./AuthenticatedLayout-afaeaae8.js";import{_ as g}from"./Pagination-b75b290f.js";import{Z as b,j as f,k as r,o as n,c as d,a as c,w as l,F as h,b as y,d as e,i as w,p as v,l as k,t as a}from"./app-e656b750.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";const L={components:{AuthenticatedLayout:x,Head:b,Pagination:g,Link:f},props:{wsreturninvoices:Object},data(){return{search:""}},computed:{filteredWSReturnInvoices(){const o=this.search.toLowerCase();return this.wsreturninvoices.filter(s=>s&&s.id&&s.customer.name&&s.id.toString().toLowerCase().includes(o)||s.customer.name.toString().toLowerCase().includes(o))}},methods:{generatePDF(o){return`/generate-pdf/return/ws?invoiceid=${o}`}}},S={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},C={class:"px-4 py-2-mx-3"},I={class:"mx-3"},N=e("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Generate New Invoice",-1),H={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},D={class:"p-4"},V=e("label",{for:"search",class:"sr-only"},"Search",-1),B={class:"overflow-x-auto w-full"},F={class:"w-full whitespace-no-wrap"},M=e("thead",null,[e("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[e("th",{class:"px-4 py-3"},"Invoice No"),e("th",{class:"px-4 py-3"},"Dated"),e("th",{class:"px-4 py-3"},"Customer Name"),e("th",{class:"px-4 py-3"},"Total Amount"),e("th",{class:"px-4 py-3"},"Net Amount"),e("th",{class:"px-4 py-3"},"Print")])],-1),P={class:"bg-white divide-y"},R={class:"px-4 py-3 text-sm"},W={class:"px-4 py-3 text-sm"},j={class:"px-4 py-3 text-sm"},T={class:"px-4 py-3 text-sm"},$={class:"px-4 py-3 text-sm"},Z={class:"px-4 py-3 text-sm"},E=["href"],G=e("button",{type:"button"},[e("svg",{class:"w-[18px] h-[18px] text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.1",d:"M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"})])],-1),O=[G],U=e("div",{class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"},null,-1);function q(o,s,z,J,i,p){const u=r("Head"),_=r("Link"),m=r("AuthenticatedLayout");return n(),d(h,null,[c(u,{title:"Whole Sale Return Invoices"}),c(m,null,{header:l(()=>[y(" Whole Sale Return Invoices ")]),default:l(()=>[e("div",S,[e("div",C,[e("div",I,[c(_,{class:"ml-6 text-lg font-bold text-gray-800",href:o.route("wsreturninvoices.create")},{default:l(()=>[N]),_:1},8,["href"])])]),e("div",H,[e("div",D,[V,w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>i.search=t),type:"text",id:"search",name:"search",class:"bg-gray-50 border border-black-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Invoice No / Customer"},null,512),[[v,i.search]])]),e("div",B,[e("table",F,[M,e("tbody",P,[(n(!0),d(h,null,k(p.filteredWSReturnInvoices,(t,K)=>(n(),d("tr",{key:t.id,class:"text-gray-700"},[e("td",R,a(t.id),1),e("td",W,a(t.sale_date),1),e("td",j,a(t.customer.name),1),e("td",T,a(t.total_amount),1),e("td",$,a(t.net_amount),1),e("td",Z,[e("a",{href:p.generatePDF(t.id),target:"_blank"},O,8,E)])]))),128))])])]),U])])]),_:1})],64)}const te=A(L,[["render",q]]);export{te as default};
