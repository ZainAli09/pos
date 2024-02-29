import{_ as m}from"./AuthenticatedLayout-8214144f.js";import{_ as g}from"./Pagination-4d338f42.js";import{Z as b,j as f,k as n,o as d,c,a as i,w as l,F as h,b as y,d as e,i as w,p as v,l as k,t as r}from"./app-dae928ff.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const A={components:{AuthenticatedLayout:m,Head:b,Pagination:g,Link:f},props:{salereturninvoices:Object},data(){return{search:""}},computed:{filteredSaleReturnInvoices(){const s=this.search.toLowerCase();return this.salereturninvoices.filter(o=>o&&o.id&&o.id.toString().toLowerCase().includes(s))}},methods:{changeDateFormat(s){return new Date(s).toISOString().split("T")[0]},generatePDF(s){return`/generate-pdf/return?invoiceid=${s}`}}},I={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},L={class:"px-4 py-2-mx-3"},D={class:"mx-3"},N=e("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Generate New Invoice",-1),F={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},H={class:"p-4"},C=e("label",{for:"search",class:"sr-only"},"Search",-1),R={class:"overflow-x-auto w-full"},V={class:"w-full whitespace-no-wrap"},B=e("thead",null,[e("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[e("th",{class:"px-4 py-3"},"Invoice No"),e("th",{class:"px-4 py-3"},"Dated"),e("th",{class:"px-4 py-3"},"Net Amount"),e("th",{class:"px-4 py-3"},"Received Amount"),e("th",{class:"px-4 py-3"},"Print")])],-1),M={class:"bg-white divide-y"},P={class:"px-4 py-3 text-sm"},j={class:"px-4 py-3 text-sm"},T={class:"px-4 py-3 text-sm"},O={class:"px-4 py-3 text-sm"},Z={class:"px-4 py-3 text-sm"},$=["href"],E=e("button",{type:"button"},[e("svg",{class:"w-[18px] h-[18px] text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.1",d:"M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"})])],-1),G=[E],U=e("div",{class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"},null,-1);function q(s,o,z,J,p,a){const u=n("Head"),_=n("Link"),x=n("AuthenticatedLayout");return d(),c(h,null,[i(u,{title:"Sale Return Invoices"}),i(x,null,{header:l(()=>[y(" Sale Return Invoices ")]),default:l(()=>[e("div",I,[e("div",L,[e("div",D,[i(_,{class:"ml-6 text-lg font-bold text-gray-800",href:s.route("salereturninvoices.create")},{default:l(()=>[N]),_:1},8,["href"])])]),e("div",F,[e("div",H,[C,w(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>p.search=t),type:"text",id:"search",name:"search",class:"bg-gray-50 border border-black-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Invoice No."},null,512),[[v,p.search]])]),e("div",R,[e("table",V,[B,e("tbody",M,[(d(!0),c(h,null,k(a.filteredSaleReturnInvoices,(t,K)=>(d(),c("tr",{key:t.id,class:"text-gray-700"},[e("td",P,r(t.id),1),e("td",j,r(a.changeDateFormat(t.created_at)),1),e("td",T,r(t.net_amount),1),e("td",O,r(t.received_amount),1),e("td",Z,[e("a",{href:a.generatePDF(t.id),target:"_blank"},G,8,$)])]))),128))])])]),U])])]),_:1})],64)}const ee=S(A,[["render",q]]);export{ee as default};