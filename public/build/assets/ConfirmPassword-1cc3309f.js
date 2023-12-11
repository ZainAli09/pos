import{T as d,o as c,e as n,w as r,a,u as e,Z as m,d as s,f,b as u,n as _}from"./app-bdb3b182.js";import{_ as p}from"./GuestLayout-48d3ea24.js";import{_ as w}from"./InputError-aca66a16.js";import{_ as h,a as b}from"./TextInput-0438b74d.js";import{_ as g}from"./PrimaryButton-141e8ab3.js";const x={class:"flex flex-col overflow-y-auto md:flex-row"},v=s("div",{class:"h-32 md:h-auto md:w-1/2"},[s("img",{"aria-hidden":"true",class:"object-cover w-full h-full",src:"{{ asset('images/forgot-password-office.jpeg') }}",alt:"Office"})],-1),y={class:"flex items-center justify-center p-6 sm:p-12 md:w-1/2"},V={class:"w-full"},C=s("h1",{class:"mb-4 font-semibold text-gray-700 dark:text-gray-200"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],j={class:"flex justify-end mt-4"},z={__name:"ConfirmPassword",setup(k){const o=d({password:""}),i=()=>{o.post(route("password.confirm"),{onFinish:()=>o.reset()})};return(P,t)=>(c(),n(p,null,{default:r(()=>[a(e(m),{title:"Confirm Password"}),s("div",x,[v,s("div",y,[s("div",V,[C,s("form",{onSubmit:f(i,["prevent"])},[s("div",null,[a(h,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(o).password,"onUpdate:modelValue":t[0]||(t[0]=l=>e(o).password=l),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:e(o).errors.password},null,8,["message"])]),s("div",j,[a(g,{class:_(["ml-4",{"opacity-25":e(o).processing}]),disabled:e(o).processing},{default:r(()=>[u(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)])])])]),_:1}))}};export{z as default};
