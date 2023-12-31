import{_ as m}from"./AuthenticatedLayout-2efcd8ba.js";import{_ as g}from"./Pagination-ed039172.js";import{Z as y,j as f,k as o,o as c,c as r,a as n,w as i,F as l,b as v,d as t,l as b,t as s}from"./app-b9d601da.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const k={components:{AuthenticatedLayout:m,Head:y,Pagination:g,Link:f},props:{salereturninvoices:Object},methods:{generatePDF(a){return`/generate-pdf/return?invoiceid=${a}`}}},A={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},L={class:"px-4 py-2-mx-3"},H={class:"mx-3"},N=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Generate New Invoice",-1),B={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},I={class:"overflow-x-auto w-full"},C={class:"w-full whitespace-no-wrap"},D=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Invoice No"),t("th",{class:"px-4 py-3"},"Total Discount"),t("th",{class:"px-4 py-3"},"Net Amount"),t("th",{class:"px-4 py-3"},"Service Charges"),t("th",{class:"px-4 py-3"},"Received Amount"),t("th",{class:"px-4 py-3"},"Balance Amount"),t("th",{class:"px-4 py-3"},"Print")])],-1),F={class:"bg-white divide-y"},P={class:"px-4 py-3 text-sm"},S={class:"px-4 py-3 text-sm"},V={class:"px-4 py-3 text-sm"},$={class:"px-4 py-3 text-sm"},j={class:"px-4 py-3 text-sm"},M={class:"px-4 py-3 text-sm"},R={class:"px-4 py-3 text-sm"},T=["href"],Z=t("button",{type:"button"},[t("svg",{class:"w-[18px] h-[18px] text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 20"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.1",d:"M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"})])],-1),E=[Z],G={class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"};function O(a,q,d,z,J,p){const _=o("Head"),h=o("Link"),x=o("pagination"),u=o("AuthenticatedLayout");return c(),r(l,null,[n(_,{title:"Sale Return Invoices"}),n(u,null,{header:i(()=>[v(" Sale Return Invoices ")]),default:i(()=>[t("div",A,[t("div",L,[t("div",H,[n(h,{class:"ml-6 text-lg font-bold text-gray-800",href:a.route("salereturninvoices.create")},{default:i(()=>[N]),_:1},8,["href"])])]),t("div",B,[t("div",I,[t("table",C,[D,t("tbody",F,[(c(!0),r(l,null,b(d.salereturninvoices.data,(e,K)=>(c(),r("tr",{key:e.id,class:"text-gray-700"},[t("td",P,s(e.id),1),t("td",S,s(e.total_discount),1),t("td",V,s(e.net_amount),1),t("td",$,s(e.service_charges),1),t("td",j,s(e.received_amount),1),t("td",M,s(e.remaining_balance),1),t("td",R,[t("a",{href:p.generatePDF(e.id),target:"_blank"},E,8,T)])]))),128))])])]),t("div",G,[n(x,{links:d.salereturninvoices.links},null,8,["links"])])])])]),_:1})],64)}const Y=w(k,[["render",O]]);export{Y as default};
