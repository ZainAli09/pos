import{_ as x}from"./AuthenticatedLayout-049b99a7.js";import{_ as V,a as S}from"./TextInput-0438b74d.js";import{_ as B}from"./PrimaryButton-141e8ab3.js";import{Z as I,k as i,o as s,c as n,a,w as f,F as u,b as h,d as e,f as L,i as m,m as c,l as _,t as p}from"./app-bdb3b182.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";const U={props:{mustVerifyEmail:Boolean,status:String,companies:Object,products:Object,vendors:Object,categories:Object},components:{AuthenticatedLayout:x,InputLabel:V,TextInput:S,Head:I,PrimaryButton:B},data(){return{formData:{start_date:"",end_date:"",product_id:"",category_id:"",company_id:"",vendor_id:""}}},methods:{submitForm(){this.$inertia.get(route("reports.purchaseGet"),this.formData,{onSuccess:g=>{}})}}},k={class:"flex space-x-4"},F={class:"w-1/4"},N=e("option",{value:""},"--Select Product--",-1),j=["value"],C={class:"w-1/4"},O=e("option",{value:""},"--Select Vendor--",-1),T=["value"],A={class:"w-1/4"},E=e("option",{value:""},"--Select Company--",-1),G=["value"],H={class:"w-1/4"},M=e("option",{value:""},"--Select Group--",-1),R=["value"],Z={class:"flex space-x-4"},q={class:"w-1/4"},z={class:"w-1/4"};function J(g,o,l,K,r,v){const w=i("Head"),d=i("InputLabel"),y=i("TextInput"),b=i("PrimaryButton"),D=i("AuthenticatedLayout");return s(),n(u,null,[a(w,{title:"Purchase Report"}),a(D,null,{header:f(()=>[h(" Purchase Report ")]),default:f(()=>[e("div",null,[e("form",{onSubmit:o[6]||(o[6]=L((...t)=>v.submitForm&&v.submitForm(...t),["prevent"])),class:"mt-6 space-y-6"},[e("div",k,[e("div",F,[a(d,{for:"product",value:"Product Name"}),m(e("select",{"onUpdate:modelValue":o[0]||(o[0]=t=>r.formData.product_id=t),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[N,(s(!0),n(u,null,_(l.products,t=>(s(),n("option",{value:t.id},p(t.name),9,j))),256))],512),[[c,r.formData.product_id]])]),e("div",C,[a(d,{for:"vendor",value:"Vendor Name"}),m(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>r.formData.vendor_id=t),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[O,(s(!0),n(u,null,_(l.vendors,t=>(s(),n("option",{value:t.id},p(t.name),9,T))),256))],512),[[c,r.formData.vendor_id]])]),e("div",A,[a(d,{for:"vendor",value:"Company"}),m(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>r.formData.company_id=t),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[E,(s(!0),n(u,null,_(l.companies,t=>(s(),n("option",{value:t.id},p(t.name),9,G))),256))],512),[[c,r.formData.company_id]])]),e("div",H,[a(d,{for:"vendor",value:"Group"}),m(e("select",{"onUpdate:modelValue":o[3]||(o[3]=t=>r.formData.category_id=t),class:"mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[M,(s(!0),n(u,null,_(l.categories,t=>(s(),n("option",{value:t.id},p(t.name),9,R))),256))],512),[[c,r.formData.category_id]])])]),e("div",Z,[e("div",q,[a(d,{for:"start_date",value:"Start Date"}),a(y,{id:"start_date",ref:"start_date",modelValue:r.formData.start_date,"onUpdate:modelValue":o[4]||(o[4]=t=>r.formData.start_date=t),type:"date",class:"mt-1 block w-full",autocomplete:"start_date"},null,8,["modelValue"])]),e("div",z,[a(d,{for:"end_date",value:"End Date"}),a(y,{id:"end_date",ref:"end_date",modelValue:r.formData.end_date,"onUpdate:modelValue":o[5]||(o[5]=t=>r.formData.end_date=t),type:"date",class:"mt-1 block w-full",autocomplete:"end_date"},null,8,["modelValue"])])]),a(b,null,{default:f(()=>[h("Search")]),_:1})],32)])]),_:1})],64)}const tt=P(U,[["render",J]]);export{tt as default};
