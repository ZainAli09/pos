import{_ as d}from"./AuthenticatedLayout-afaeaae8.js";import{_ as x,a as y}from"./TextInput-7eee3bd8.js";import{_ as b}from"./PrimaryButton-076582cc.js";import{Z as h,k as t,o as B,c as V,a as e,w as n,F as v,b as r,d as i,f as I}from"./app-e656b750.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const $={props:{mustVerifyEmail:Boolean,status:String},components:{AuthenticatedLayout:d,InputLabel:x,TextInput:y,Head:h,PrimaryButton:b},data(){return{formData:{name:""}}},methods:{submitForm(){this.$inertia.post(route("companies.store"),this.formData,{onSuccess:u=>{this.$inertia.visit(route("companies.index"))}})}}};function C(u,a,F,k,m,s){const l=t("Head"),p=t("InputLabel"),c=t("TextInput"),f=t("PrimaryButton"),_=t("AuthenticatedLayout");return B(),V(v,null,[e(l,{title:"Profile"}),e(_,null,{header:n(()=>[r(" Companies ")]),default:n(()=>[i("div",null,[i("form",{onSubmit:a[1]||(a[1]=I((...o)=>s.submitForm&&s.submitForm(...o),["prevent"])),class:"mt-6 space-y-6"},[e(p,{for:"name",value:"Company Name"}),e(c,{id:"name",ref:"name",modelValue:m.formData.name,"onUpdate:modelValue":a[0]||(a[0]=o=>m.formData.name=o),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),e(f,null,{default:n(()=>[r("Save")]),_:1})],32)])]),_:1})],64)}const T=L($,[["render",C]]);export{T as default};