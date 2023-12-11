import{_ as x}from"./AuthenticatedLayout-049b99a7.js";import{_ as V,a as S}from"./TextInput-0438b74d.js";import{_ as U}from"./PrimaryButton-141e8ab3.js";import{Z as B,k as l,o as a,c as n,a as s,w as p,F as d,b as g,d as t,f as I,i as m,m as c,l as _,t as f}from"./app-bdb3b182.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const j={props:{mustVerifyEmail:Boolean,status:String,companies:Object,vendors:Object,users:Object,products:Object,categories:Object},components:{AuthenticatedLayout:x,InputLabel:V,TextInput:S,Head:B,PrimaryButton:U},data(){return{formData:{start_date:"",end_date:"",product_id:"",company_id:"",category_id:"",vendor_id:"",user_id:""}}},methods:{submitForm(){this.$inertia.get(route("reports.saleGet"),this.formData,{onSuccess:w=>{}})}}},k={class:"flex space-x-4"},F={class:"w-1/2"},O=t("option",{value:""},"--Select User--",-1),P=["value"],C={class:"w-1/2"},T=t("option",{value:""},"--Select Company--",-1),A=["value"],E={class:"w-1/2"},G=t("option",{value:""},"--Select Product--",-1),H=["value"],N={class:"w-1/2"},M=t("option",{value:""},"--Select Group--",-1),R=["value"],Z={class:"w-1/2"},q=t("option",{value:""},"--Select Vendor--",-1),z=["value"],J={class:"flex space-x-4"},K={class:"w-1/4"},Q={class:"w-1/4"};function W(w,o,u,X,r,y){const b=l("Head"),i=l("InputLabel"),v=l("TextInput"),h=l("PrimaryButton"),D=l("AuthenticatedLayout");return a(),n(d,null,[s(b,{title:"Sale Report"}),s(D,null,{header:p(()=>[g(" Sale Report ")]),default:p(()=>[t("div",null,[t("form",{onSubmit:o[7]||(o[7]=I((...e)=>y.submitForm&&y.submitForm(...e),["prevent"])),class:"mt-6 space-y-6"},[t("div",k,[t("div",F,[s(i,{for:"user",value:"User"}),m(t("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>r.formData.user_id=e),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[O,(a(!0),n(d,null,_(u.users,e=>(a(),n("option",{value:e.id},f(e.name),9,P))),256))],512),[[c,r.formData.user_id]])]),t("div",C,[s(i,{for:"company",value:"Company"}),m(t("select",{"onUpdate:modelValue":o[1]||(o[1]=e=>r.formData.company_id=e),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[T,(a(!0),n(d,null,_(u.companies,e=>(a(),n("option",{value:e.id},f(e.name),9,A))),256))],512),[[c,r.formData.company_id]])]),t("div",E,[s(i,{for:"product",value:"Product"}),m(t("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>r.formData.product_id=e),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[G,(a(!0),n(d,null,_(u.products,e=>(a(),n("option",{value:e.id},f(e.name),9,H))),256))],512),[[c,r.formData.product_id]])]),t("div",N,[s(i,{for:"category",value:"Gorup"}),m(t("select",{"onUpdate:modelValue":o[3]||(o[3]=e=>r.formData.category_id=e),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[M,(a(!0),n(d,null,_(u.categories,e=>(a(),n("option",{value:e.id},f(e.name),9,R))),256))],512),[[c,r.formData.category_id]])]),t("div",Z,[s(i,{for:"vendor",value:"Vendor"}),m(t("select",{"onUpdate:modelValue":o[4]||(o[4]=e=>r.formData.vendor_id=e),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[q,(a(!0),n(d,null,_(u.vendors,e=>(a(),n("option",{value:e.id},f(e.name),9,z))),256))],512),[[c,r.formData.vendor_id]])])]),t("div",J,[t("div",K,[s(i,{for:"start_date",value:"Start Date"}),s(v,{id:"start_date",ref:"start_date",modelValue:r.formData.start_date,"onUpdate:modelValue":o[5]||(o[5]=e=>r.formData.start_date=e),type:"date",class:"mt-1 block w-full",autocomplete:"start_date"},null,8,["modelValue"])]),t("div",Q,[s(i,{for:"end_date",value:"End Date"}),s(v,{id:"end_date",ref:"end_date",modelValue:r.formData.end_date,"onUpdate:modelValue":o[6]||(o[6]=e=>r.formData.end_date=e),type:"date",class:"mt-1 block w-full",autocomplete:"end_date"},null,8,["modelValue"])])]),s(h,null,{default:p(()=>[g("Search")]),_:1})],32)])]),_:1})],64)}const re=L(j,[["render",W]]);export{re as default};
