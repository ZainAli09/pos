import{_ as f}from"./AuthenticatedLayout-049b99a7.js";import{_ as d,a as b}from"./TextInput-0438b74d.js";import{_ as x}from"./PrimaryButton-141e8ab3.js";import{Z as y,k as t,o as g,c as h,a as e,w as n,F as B,b as m,d as u,f as S}from"./app-bdb3b182.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const v={props:{mustVerifyEmail:Boolean,status:String},components:{AuthenticatedLayout:f,InputLabel:d,TextInput:b,Head:y,PrimaryButton:x},data(){return{formData:{name:""}}},methods:{submitForm(){this.$inertia.post(route("subcategories.store"),this.formData,{onSuccess:()=>{this.$inertia.visit(route("subcategories.index"))}})}}};function C(I,a,L,$,s,r){const i=t("Head"),l=t("InputLabel"),c=t("TextInput"),p=t("PrimaryButton"),_=t("AuthenticatedLayout");return g(),h(B,null,[e(i,{title:"Sub Categories"}),e(_,null,{header:n(()=>[m(" Sub-Categories ")]),default:n(()=>[u("div",null,[u("form",{onSubmit:a[1]||(a[1]=S((...o)=>r.submitForm&&r.submitForm(...o),["prevent"])),class:"mt-6 space-y-6"},[e(l,{for:"name",value:"Sub-Category Name"}),e(c,{id:"name",ref:"name",modelValue:s.formData.name,"onUpdate:modelValue":a[0]||(a[0]=o=>s.formData.name=o),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),e(p,null,{default:n(()=>[m("Save")]),_:1})],32)])]),_:1})],64)}const T=V(v,[["render",C]]);export{T as default};
