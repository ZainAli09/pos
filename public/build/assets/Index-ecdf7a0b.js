import{_ as x}from"./AuthenticatedLayout-049b99a7.js";import{_ as h}from"./Pagination-c3a5ee35.js";import{Z as f,j as g,k as e,o as s,c as o,a,w as n,F as i,b,d as t,l as y,t as c}from"./app-bdb3b182.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const v={components:{AuthenticatedLayout:x,Head:f,Pagination:h,Link:g},props:{permissions:Object}},k={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},L={class:"px-4 py-2 -mx-3"},$={class:"mx-3"},N=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"New",-1),P={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},A={class:"overflow-x-auto w-full"},B={class:"w-full whitespace-no-wrap"},H=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Sr"),t("th",{class:"px-4 py-3"},"Permission")])],-1),V={class:"bg-white divide-y"},j={class:"px-4 py-3 text-sm"},C={class:"px-4 py-3 text-sm"},F=t("div",{class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"},null,-1);function S(d,D,l,E,I,O){const p=e("Head"),_=e("Link"),u=e("AuthenticatedLayout");return s(),o(i,null,[a(p,{title:"Permissions"}),a(u,null,{header:n(()=>[b(" Permissions ")]),default:n(()=>[t("div",k,[t("div",L,[t("div",$,[a(_,{class:"ml-6 text-lg font-bold text-gray-800",href:d.route("permissions.create")},{default:n(()=>[N]),_:1},8,["href"])])]),t("div",P,[t("div",A,[t("table",B,[H,t("tbody",V,[(s(!0),o(i,null,y(l.permissions.data,(r,m)=>(s(),o("tr",{key:r.id,class:"text-gray-700"},[t("td",j,c(m+1),1),t("td",C,c(r.name),1)]))),128))])])]),F])])]),_:1})],64)}const G=w(v,[["render",S]]);export{G as default};
