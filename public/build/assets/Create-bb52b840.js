import{_ as d}from"./AuthenticatedLayout-2f90a5f5.js";import{_ as x,a as b}from"./TextInput-ca318154.js";import{_ as y}from"./PrimaryButton-2c55c2ce.js";import{Z as h,k as t,o as B,c as V,a as e,w as n,F as v,b as r,d as i,f as I}from"./app-352ce6fa.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const P={props:{mustVerifyEmail:Boolean,status:String},components:{AuthenticatedLayout:d,InputLabel:x,TextInput:b,Head:h,PrimaryButton:y},data(){return{formData:{name:""}}},methods:{submitForm(){this.$inertia.post(route("permissions.store"),this.formData,{onSuccess:u=>{this.$inertia.visit("permissions.index")}})}}};function $(u,o,F,k,s,m){const l=t("Head"),p=t("InputLabel"),c=t("TextInput"),_=t("PrimaryButton"),f=t("AuthenticatedLayout");return B(),V(v,null,[e(l,{title:"Permissions"}),e(f,null,{header:n(()=>[r(" Permissions ")]),default:n(()=>[i("div",null,[i("form",{onSubmit:o[1]||(o[1]=I((...a)=>m.submitForm&&m.submitForm(...a),["prevent"])),class:"mt-6 space-y-6"},[e(p,{for:"name",value:"Permission Name"}),e(c,{id:"name",ref:"name",modelValue:s.formData.name,"onUpdate:modelValue":o[0]||(o[0]=a=>s.formData.name=a),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),e(_,null,{default:n(()=>[r("Save")]),_:1})],32)])]),_:1})],64)}const A=L(P,[["render",$]]);export{A as default};