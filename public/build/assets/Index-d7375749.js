import{_ as x}from"./AuthenticatedLayout-049b99a7.js";import{_ as f}from"./Pagination-c3a5ee35.js";import{Z as g,j as b,k as e,o,c as n,a as s,w as a,F as i,b as y,d as t,l as w,t as d}from"./app-bdb3b182.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const v={components:{AuthenticatedLayout:x,Head:g,Pagination:f,Link:b},props:{zones:Object}},L={class:"p-4 bg-white rounded-lg shadow-xs mt-6 space-y-6"},N={class:"px-4 py-2 -mx-3"},Z={class:"mx-3"},$=t("button",{class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"New",-1),z={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},A={class:"overflow-x-auto w-full"},B={class:"w-full whitespace-no-wrap"},H=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Sr"),t("th",{class:"px-4 py-3"},"Zones"),t("th")])],-1),V={class:"bg-white divide-y"},j={class:"px-4 py-3 text-sm"},C={class:"px-4 py-3 text-sm"},F={class:"px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9"};function S(l,D,r,E,I,O){const _=e("Head"),p=e("Link"),u=e("pagination"),m=e("AuthenticatedLayout");return o(),n(i,null,[s(_,{title:"Zones"}),s(m,null,{header:a(()=>[y(" Zones ")]),default:a(()=>[t("div",L,[t("div",N,[t("div",Z,[s(p,{class:"ml-6 text-lg font-bold text-gray-800",href:l.route("zones.create")},{default:a(()=>[$]),_:1},8,["href"])])]),t("div",z,[t("div",A,[t("table",B,[H,t("tbody",V,[(o(!0),n(i,null,w(r.zones.data,(c,h)=>(o(),n("tr",{key:c.id,class:"text-gray-700"},[t("td",j,d(h+1),1),t("td",C,d(c.name),1)]))),128))])])]),t("div",F,[s(u,{links:r.zones.links},null,8,["links"])])])])]),_:1})],64)}const J=k(v,[["render",S]]);export{J as default};
