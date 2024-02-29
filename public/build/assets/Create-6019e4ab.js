import{_ as D}from"./AuthenticatedLayout-8214144f.js";import{_ as V,a as g}from"./TextInput-b3b4edbd.js";import{D as S}from"./DeleteButton-4c69e435.js";import{_ as B}from"./PrimaryButton-c6f683ae.js";import{Z as C,k as l,o as u,c as i,a as s,w as p,F as h,b as f,d as t,f as I,l as A,t as r,g as L}from"./app-dae928ff.js";import{S as F}from"./Select2Input-03e63d7d.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const P={props:{mustVerifyEmail:Boolean,status:String,stakeholders:Object,paymentVouchers:Object},components:{AuthenticatedLayout:D,InputLabel:V,TextInput:g,Select2Input:F,Head:C,PrimaryButton:B,DeleteButton:S},data(){return{formData:{stakeholder_id:"",voucher_date:"",account_no:"",desc:"",total_amount:"",stakeholder_type:""}}},methods:{updateStakeholderType(m){const e=this.stakeholders.flat().find(d=>d.id==m);e&&(this.formData.stakeholder_type=e.type,this.formData.stakeholder_id=e.id,this.formData.account_no=e.id)},submitForm(){this.$inertia.post(route("cashpaymentvouchers.store"),this.formData,{onSuccess:()=>{this.$inertia.visit(route("cashpaymentvouchers.create"))}})}}},T={class:"flex space-x-4"},U={class:"w-1/3"},H={class:"w-1/3"},j={class:"w-1/3"},E={class:"w-1/3"},O={class:"w-1/3"},M=t("br",null,null,-1),Z={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},q={class:"overflow-x-auto w-full"},z={class:"w-full whitespace-no-wrap"},G=t("thead",null,[t("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[t("th",{class:"px-4 py-3"},"Sr"),t("th",{class:"px-4 py-3"},"Voucher Date"),t("th",{class:"px-4 py-3"},"Voucher For"),t("th",{class:"px-4 py-3"},"Description"),t("th",{class:"px-4 py-3"},"Amount"),t("th",{class:"px-4 py-3"},"Action")])],-1),J={class:"bg-white divide-y"},K={class:"text-gray-700"},Q={class:"px-4 py-3 text-sm"},R={class:"px-4 py-3 text-sm"},W={class:"px-4 py-3 text-sm"},X={class:"px-4 py-3 text-sm"},Y={class:"px-4 py-3 text-sm"},$={key:0,class:"px-4 py-3 text-sm"};function tt(m,e,d,et,a,_){const y=l("Head"),n=l("InputLabel"),c=l("TextInput"),x=l("Select2Input"),v=l("PrimaryButton"),b=l("DeleteButton"),k=l("AuthenticatedLayout");return u(),i(h,null,[s(y,{title:"Cash Payment Voucher"}),s(k,null,{header:p(()=>[f(" Cash Payment Voucher ")]),default:p(()=>[t("div",null,[t("form",{onSubmit:e[6]||(e[6]=I((...o)=>_.submitForm&&_.submitForm(...o),["prevent"])),class:"mt-6 space-y-6"},[t("div",T,[t("div",U,[s(n,{for:"voucher_date",value:"Voucher Date"}),s(c,{id:"voucher_date",ref:"voucher_date",modelValue:a.formData.voucher_date,"onUpdate:modelValue":e[0]||(e[0]=o=>a.formData.voucher_date=o),type:"date",class:"mt-1 block w-full",autocomplete:"voucher_date"},null,8,["modelValue"])]),t("div",H,[s(n,{for:"account_no",value:"A/C No"}),s(c,{id:"account_no",ref:"account_no",modelValue:a.formData.account_no,"onUpdate:modelValue":e[1]||(e[1]=o=>a.formData.account_no=o),type:"text",class:"mt-1 block w-full",autocomplete:"account_no",readonly:""},null,8,["modelValue"])]),t("div",j,[s(n,{for:"stakeholder_id",value:"Account Name"}),s(x,{options:d.stakeholders,onChange:e[2]||(e[2]=o=>_.updateStakeholderType(o)),modelValue:a.formData.stakeholder_id,"onUpdate:modelValue":e[3]||(e[3]=o=>a.formData.stakeholder_id=o),style:{width:"-webkit-fill-available"}},null,8,["options","modelValue"])]),t("div",E,[s(n,{for:"desc",value:"Description"}),s(c,{id:"desc",ref:"desc",modelValue:a.formData.desc,"onUpdate:modelValue":e[4]||(e[4]=o=>a.formData.desc=o),type:"text",class:"mt-1 block w-full",autocomplete:"desc"},null,8,["modelValue"])]),t("div",O,[s(n,{for:"total_amount",value:"Amount"}),s(c,{id:"total_amount",ref:"total_amount",modelValue:a.formData.total_amount,"onUpdate:modelValue":e[5]||(e[5]=o=>a.formData.total_amount=o),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_amount"},null,8,["modelValue"])])]),s(v,null,{default:p(()=>[f("Save")]),_:1})],32),M,t("div",Z,[t("div",q,[t("table",z,[G,t("tbody",J,[(u(!0),i(h,null,A(d.paymentVouchers,(o,w)=>(u(),i("tr",K,[t("td",Q,r(w+1),1),t("td",R,r(o.voucher_date),1),t("td",W,r(o.stakeholder.stakeholder.name),1),t("td",X,r(o.desc),1),t("td",Y,r(o.total_amount),1),m.$page.props.user.permissions.includes("delete.records")?(u(),i("td",$,[s(b,{model:"CashPaymentVoucher",id:o.id},null,8,["id"])])):L("",!0)]))),256))])])])])])]),_:1})],64)}const ct=N(P,[["render",tt]]);export{ct as default};