import{_ as x}from"./AuthenticatedLayout-2f90a5f5.js";import{_ as h}from"./Pagination-b8083704.js";import{Z as f,j as b,k as e,o,c as a,a as s,w as n,F as c,b as y,d as t,l as w,t as d}from"./app-352ce6fa.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const v={components:{AuthenticatedLayout:x,Head:f,Pagination:h,Link:b},props:{categories:Object}},L={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},C={class:"px-4 py-2 -mx-3"},N={class:"mx-3"},$=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"New",-1),A={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},B={class:"overflow-x-auto w-full"},H={class:"w-full whitespace-no-wrap"},V=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Sr"),t("th",{class:"px-4 py-3"},"Category Name")])],-1),j={class:"bg-white divide-y"},F={class:"px-4 py-3 text-sm"},S={class:"px-4 py-3 text-sm"},D={class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"};function E(l,I,r,O,P,T){const _=e("Head"),p=e("Link"),u=e("pagination"),m=e("AuthenticatedLayout");return o(),a(c,null,[s(_,{title:"Categories"}),s(m,null,{header:n(()=>[y(" Categories ")]),default:n(()=>[t("div",L,[t("div",C,[t("div",N,[s(p,{class:"ml-6 text-lg font-bold text-gray-800",href:l.route("categories.create")},{default:n(()=>[$]),_:1},8,["href"])])]),t("div",A,[t("div",B,[t("table",H,[V,t("tbody",j,[(o(!0),a(c,null,w(r.categories.data,(i,g)=>(o(),a("tr",{key:i.id,class:"text-gray-700"},[t("td",F,d(g+1),1),t("td",S,d(i.name),1)]))),128))])])]),t("div",D,[s(u,{links:r.categories.links},null,8,["links"])])])])]),_:1})],64)}const J=k(v,[["render",E]]);export{J as default};