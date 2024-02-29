import{_ as p}from"./AuthenticatedLayout-8214144f.js";import{_ as f,a as b}from"./TextInput-b3b4edbd.js";import{_ as h}from"./PrimaryButton-c6f683ae.js";import{Z as v,k as o,o as x,c as y,a as t,w as n,F as V,b as m,d as s,f as D}from"./app-dae928ff.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const B={props:{mustVerifyEmail:Boolean,status:String},components:{AuthenticatedLayout:p,InputLabel:f,TextInput:b,Head:v,PrimaryButton:h},data(){return{formData:{start_date:"",end_date:""}}},methods:{submitForm(){this.$inertia.get(route("reports.accountReceiveableGet"),this.formData,{onSuccess:u=>{}})}}},I={class:"flex space-x-4"},$={class:"w-1/4"},L={class:"w-1/4"};function k(u,e,A,F,S,r){const c=o("Head"),d=o("InputLabel"),l=o("TextInput"),i=o("PrimaryButton"),_=o("AuthenticatedLayout");return x(),y(V,null,[t(c,{title:"Account Receivable"}),t(_,null,{header:n(()=>[m(" Account Receivable ")]),default:n(()=>[s("div",null,[s("form",{onSubmit:e[2]||(e[2]=D((...a)=>r.submitForm&&r.submitForm(...a),["prevent"])),class:"mt-6 space-y-6"},[s("div",I,[s("div",$,[t(d,{for:"start_date",value:"Start Date"}),t(l,{id:"start_date",ref:"start_date",modelValue:this.formData.start_date,"onUpdate:modelValue":e[0]||(e[0]=a=>this.formData.start_date=a),type:"date",class:"mt-1 block w-full",autocomplete:"start_date"},null,8,["modelValue"])]),s("div",L,[t(d,{for:"end_date",value:"End Date"}),t(l,{id:"end_date",ref:"end_date",modelValue:this.formData.end_date,"onUpdate:modelValue":e[1]||(e[1]=a=>this.formData.end_date=a),type:"date",class:"mt-1 block w-full",autocomplete:"end_date"},null,8,["modelValue"])])]),t(i,null,{default:n(()=>[m("Search")]),_:1})],32)])]),_:1})],64)}const P=w(B,[["render",k]]);export{P as default};