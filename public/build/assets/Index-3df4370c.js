import{_ as y}from"./AuthenticatedLayout-049b99a7.js";import{_ as g}from"./Pagination-c3a5ee35.js";import{Z as b,j as k,k as o,o as c,c as d,a as r,w as l,F as _,b as w,d as t,l as v,t as s}from"./app-bdb3b182.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const N={components:{AuthenticatedLayout:y,Head:b,Pagination:g,Link:k},props:{vendors:Object},methods:{updateStatus(n,i){axios.post(route("updateStatus",{id:n,model:"Vendor"})).then(a=>{this.vendors.data[i].status=a.data.status})}}},L={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},S={class:"px-4 py-2 -mx-3"},V={class:"mx-3"},A=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"New",-1),$={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},B={class:"overflow-x-auto w-full"},H={class:"w-full whitespace-no-wrap"},j=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Sr"),t("th",{class:"px-4 py-3"},"Name"),t("th",{class:"px-4 py-3"},"CNIC"),t("th",{class:"px-4 py-3"},"Reference No"),t("th",{class:"px-4 py-3"},"Contact No"),t("th",{class:"px-4 py-3"},"City"),t("th",{class:"px-4 py-3"},"Address"),t("th",{class:"px-4 py-3"},"Status"),t("th")])],-1),F={class:"bg-white divide-y"},I={class:"px-4 py-3 text-sm"},D={class:"px-4 py-3 text-sm"},E={class:"px-4 py-3 text-sm"},O={class:"px-4 py-3 text-sm"},P={class:"px-4 py-3 text-sm"},R={class:"px-4 py-3 text-sm"},T={class:"px-4 py-3 text-sm"},Z={class:"px-4 py-3 text-sm"},q={class:"relative inline-flex items-center mr-5 cursor-pointer"},z=["checked","onChange"],G=t("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"},null,-1),J={class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"};function K(n,i,a,M,Q,u){const h=o("Head"),x=o("Link"),f=o("pagination"),m=o("AuthenticatedLayout");return c(),d(_,null,[r(h,{title:"Vendors"}),r(m,null,{header:l(()=>[w(" Vendors ")]),default:l(()=>[t("div",L,[t("div",S,[t("div",V,[r(x,{class:"ml-6 text-lg font-bold text-gray-800",href:n.route("vendors.create")},{default:l(()=>[A]),_:1},8,["href"])])]),t("div",$,[t("div",B,[t("table",H,[j,t("tbody",F,[(c(!0),d(_,null,v(a.vendors.data,(e,p)=>(c(),d("tr",{key:e.id,class:"text-gray-700"},[t("td",I,s(p+1),1),t("td",D,s(e.name),1),t("td",E,s(e.cnic),1),t("td",O,s(e.reference_no),1),t("td",P,s(e.contact_no),1),t("td",R,s(e.name),1),t("td",T,s(e.city.name),1),t("td",Z,[t("label",q,[t("input",{type:"checkbox",class:"sr-only peer",checked:e.status===1,onChange:U=>u.updateStatus(e.id,p)},null,40,z),G])])]))),128))])])]),t("div",J,[r(f,{links:a.vendors.links},null,8,["links"])])])])]),_:1})],64)}const et=C(N,[["render",K]]);export{et as default};
