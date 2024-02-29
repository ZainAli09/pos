import{_ as m}from"./AuthenticatedLayout-8214144f.js";import{_ as g}from"./Pagination-4d338f42.js";import{Z as b,j as f,k as n,o as d,c,a as l,w as i,F as p,b as y,d as t,i as w,p as v,l as k,t as a}from"./app-dae928ff.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const A={components:{AuthenticatedLayout:m,Head:b,Pagination:g,Link:f},props:{purchasereturninvoices:Object},data(){return{search:""}},computed:{filteredPurchaseReturnInvoices(){const o=this.search.toLowerCase();return this.purchasereturninvoices.filter(e=>e&&e.id&&e.vendor.name&&e.id.toString().toLowerCase().includes(o)||e.vendor.name.toString().toLowerCase().includes(o))}},methods:{changeDateFormat(o){return new Date(o).toISOString().split("T")[0]},generatePDF(o){return`/generate-pdf/return/purchase?invoiceid=${o}`}}},I={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},D={class:"px-4 py-2-mx-3"},P={class:"mx-3"},S=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Generate New Invoice",-1),N={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},V={class:"p-4"},C=t("label",{for:"search",class:"sr-only"},"Search",-1),F={class:"overflow-x-auto w-full"},H={class:"w-full whitespace-no-wrap"},B=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Invoice No"),t("th",{class:"px-4 py-3"},"Dated"),t("th",{class:"px-4 py-3"},"Vendor"),t("th",{class:"px-4 py-3"},"Total Quantity"),t("th",{class:"px-4 py-3"},"Net Amount"),t("th",{class:"px-4 py-3"},"Print")])],-1),M={class:"bg-white divide-y"},R={class:"px-4 py-3 text-sm"},T={class:"px-4 py-3 text-sm"},j={class:"px-4 py-3 text-sm"},O={class:"px-4 py-3 text-sm"},Z={class:"px-4 py-3 text-sm"},$={class:"px-4 py-3 text-sm"},q=["href"],E=t("button",{type:"button"},[t("svg",{class:"w-[18px] h-[18px] text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 20"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.1",d:"M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"})])],-1),G=[E],Q=t("div",{class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"},null,-1);function U(o,e,z,J,h,r){const _=n("Head"),u=n("Link"),x=n("AuthenticatedLayout");return d(),c(p,null,[l(_,{title:"Purchase Return Invoices"}),l(x,null,{header:i(()=>[y(" Purchase Return Invoices ")]),default:i(()=>[t("div",I,[t("div",D,[t("div",P,[l(u,{class:"ml-6 text-lg font-bold text-gray-800",href:o.route("purchasereturninvoices.create")},{default:i(()=>[S]),_:1},8,["href"])])]),t("div",N,[t("div",V,[C,w(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>h.search=s),type:"text",id:"search",name:"search",class:"bg-gray-50 border border-black-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search Invoice No / Vendor"},null,512),[[v,h.search]])]),t("div",F,[t("table",H,[B,t("tbody",M,[(d(!0),c(p,null,k(r.filteredPurchaseReturnInvoices,(s,K)=>(d(),c("tr",{key:s.id,class:"text-gray-700"},[t("td",R,a(s.id),1),t("td",T,a(r.changeDateFormat(s.created_at)),1),t("td",j,a(s.vendor.name),1),t("td",O,a(s.total_quantity),1),t("td",Z,a(s.net_amount),1),t("td",$,[t("a",{href:r.generatePDF(s.id),target:"_blank"},G,8,q)])]))),128))])])]),Q])])]),_:1})],64)}const et=L(A,[["render",U]]);export{et as default};