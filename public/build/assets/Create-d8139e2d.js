import{_ as g}from"./AuthenticatedLayout-8214144f.js";import{_ as V,a as w}from"./TextInput-b3b4edbd.js";import{S as I}from"./Select2Input-03e63d7d.js";import{_ as k}from"./PrimaryButton-c6f683ae.js";import{Z as q,k as m,o as f,c as h,a as s,w as c,F as D,b as _,d as e,f as C,t as u,l as A,n as F}from"./app-dae928ff.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const B={props:{mustVerifyEmail:Boolean,status:String,products:Object,sr:Array},components:{AuthenticatedLayout:g,InputLabel:V,TextInput:w,Select2Input:I,Head:q,PrimaryButton:k},data(){return{formData:{vendor_id:"",product_id:"",service_charges:"",total_quantity:"",net_amount:"",gross_amount:"",total_discount:"",net_amount:"",total_items:"",total:"",remaining_stock:"",submit_button:"",received_amount:"",total:"",addedItems:[]},addedItems:[],isAmountLess:!1}},methods:{handleButtonClick(l){this.formData.submit_button=l},submitForm(){this.formData.received_amount>=this.formData.total?(this.formData.addedItems=this.addedItems,this.$inertia.post(route("saleinvoices.store"),this.formData,{onSuccess:()=>{this.$inertia.visit(route("saleinvoices.create"))}})):this.isAmountLess=!0},getProductDetails(l){const t=this.products.find(r=>r.id===parseInt(l));t?(this.formData.product_id=t.id,this.formData.product_code=t.id,this.formData.sale_rate=t.sale_rate,this.formData.expiry_date=t.expiry_date,this.formData.expiry_alert_days=t.expiry_alert_days,this.formData.remaining_stock=t.remaining_stock):(this.formData.product_id="",this.formData.product_code="",this.formData.sale_rate="",this.formData.expiry_alert_days="",this.formData.expiry_date="")},calculateNetAmount(){this.formData.total=parseFloat(this.formData.net_amount)+parseFloat(this.formData.service_charges)},calculateTotalDiscount(){this.formData.total=parseFloat(this.formData.total)-parseFloat(this.formData.total_discount)},receivedAndBalance(){this.formData.remaining_balance=(parseFloat(this.formData.total)-parseFloat(this.formData.received_amount)).toFixed(2)},quantityWisePrice(){const l=this.formData.quantity;this.formData.total_rate=(l*this.formData.sale_rate).toFixed(2)},editItem(l){const t=this.addedItems[l];console.log(t),this.formData.product_code=t.product_code,this.formData.product_id=t.product_id,this.formData.quantity=t.quantity,this.formData.sale_rate=t.sale_rate,this.formData.total_rate=t.total_rate,this.formData.expiry_date=t.expiry_date,this.formData.expiry_alert_days=t.expiry_alert_days,this.addedItems.splice(l,1);const r=document.querySelector(".w-1/6 .select2-selection");r&&r.dispatchEvent(new Event("change",{bubbles:!0}))},addItem(){this.addedItems.push({product_code:this.formData.product_code,product_name:this.getProductById(this.formData.product_id),quantity:this.formData.quantity,sale_rate:this.formData.sale_rate,batch_no:this.formData.batch_no,discount:this.formData.discount?this.formData.discount:0,discount_percent:this.formData.discount_percent?this.formData.discount_percent:0,total_rate:this.formData.total_rate,desc:this.formData.desc,manual_no:this.formData.manual_no,vendor_id:this.formData.vendor_id,product_id:this.formData.product_id}),this.formData.total_quantity=this.addedItems.reduce((l,t)=>l+parseInt(t.quantity),0),this.formData.net_amount=this.addedItems.reduce((l,t)=>l+parseFloat(t.total_rate),0),this.formData.total=this.addedItems.reduce((l,t)=>l+parseFloat(t.total_rate),0),this.formData.total_discount=this.addedItems.reduce((l,t)=>l+parseInt(t.discount),0),this.formData.total_items=this.addedItems.length,this.formData.product_code="",this.formData.product_id="",this.formData.quantity="",this.formData.purchase_rate="",this.formData.batch_no="",this.formData.discount=void 0,this.formData.vendor_address="",this.formData.vendor_code="",this.formData.discount_percent=void 0,this.formData.vendor_id="",this.formData.total_rate="",this.formData.desc="",this.formData.manual_no=""},removeItem(l){this.addedItems.splice(l,1),this.formData.total_quantity=this.addedItems.reduce((t,r)=>t+parseInt(r.quantity),0),this.formData.net_amount=this.addedItems.reduce((t,r)=>t+parseFloat(r.total_rate),0),this.formData.total=this.addedItems.reduce((t,r)=>t+parseFloat(r.total_rate),0),this.formData.total_discount=this.addedItems.reduce((t,r)=>t+parseInt(r.discount),0),this.formData.total_items=this.addedItems.length},getProductById(l){const t=this.products.find(r=>r.id===l);return t?t.text:""}}},P={style:{"font-size":"20px"}},U=e("br",null,null,-1),L={class:"flex space-x-4"},T={class:"w-1/6"},N={class:"text-rose-500"},E={class:"flex space-x-4"},R={class:"w-1/6"},K={class:"w-1/6"},H={class:"w-1/6"},Q={class:"w-1/6"},z={class:"w-1/6"},W={class:"w-1/6"},j={class:"w-1/6"},M={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},O={class:"overflow-x-auto w-full"},Z={class:"w-full whitespace-no-wrap"},G=e("thead",null,[e("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[e("th",{class:"px-4 py-3"},"Sr"),e("th",{class:"px-4 py-3"},"Product Code"),e("th",{class:"px-4 py-3"},"Product Name"),e("th",{class:"px-4 py-3"},"Qty"),e("th",{class:"px-4 py-3"},"Rate"),e("th",{class:"px-4 py-3"},"Action")])],-1),J={class:"bg-white divide-y"},X={class:"px-4 py-3 text-sm"},Y={class:"px-4 py-3 text-sm"},$={class:"px-4 py-3 text-sm"},tt={class:"px-4 py-3 text-sm"},et={class:"px-4 py-3 text-sm"},at={class:"px-4 py-3 text-sm"},ot=["onClick"],st=e("br",null,null,-1),lt={class:"flex space-x-4"},rt={class:"w-1/6"},it={class:"w-1/6"},dt={class:"w-1/6"},nt={class:"w-1/6"},ut={class:"w-1/6"},mt={class:"w-1/6"},ct={class:"w-1/6"},_t={class:"w-1/6"},pt=e("br",null,null,-1),ft={class:"w-1/6"};function ht(l,t,r,yt,o,n){const v=m("Head"),i=m("InputLabel"),d=m("TextInput"),b=m("Select2Input"),y=m("PrimaryButton"),x=m("AuthenticatedLayout");return f(),h(D,null,[s(v,{title:"Sale Invoice"}),s(x,null,{header:c(()=>[_(" Sale Invoice ")]),default:c(()=>[e("div",null,[e("form",{onSubmit:t[20]||(t[20]=C((...a)=>n.submitForm&&n.submitForm(...a),["prevent"])),class:"mt-2 space-y-2"},[e("b",P," INV-"+u(r.sr+1),1),U,e("div",L,[e("div",T,[e("h1",N,[_("Remaining "),e("span",null,u(o.formData.remaining_stock),1)])])]),e("div",E,[e("div",R,[s(i,{for:"product_code",value:"Product Code"}),s(d,{onChange:t[0]||(t[0]=a=>n.getProductDetails(o.formData.product_code)),id:"product_code",ref:"product_code",modelValue:o.formData.product_code,"onUpdate:modelValue":t[1]||(t[1]=a=>o.formData.product_code=a),type:"text",class:"mt-1 block w-full",autocomplete:"product_code",readonly:""},null,8,["modelValue"])]),e("div",K,[s(i,{for:"product",value:"Product Name"}),s(b,{options:r.products,onChange:t[2]||(t[2]=a=>n.getProductDetails(a)),modelValue:o.formData.product_id,"onUpdate:modelValue":t[3]||(t[3]=a=>o.formData.product_id=a),style:{width:"-webkit-fill-available",height:"40px !important","margin-top":"5px"}},null,8,["options","modelValue"])]),e("div",H,[s(i,{for:"quantity",value:"Quantity"}),s(d,{id:"quantity",ref:"quantity",modelValue:o.formData.quantity,"onUpdate:modelValue":t[4]||(t[4]=a=>o.formData.quantity=a),type:"text",class:"mt-1 block w-full",autocomplete:"quantity",onKeyup:n.quantityWisePrice},null,8,["modelValue","onKeyup"])]),e("div",Q,[s(i,{for:"sale_rate",value:"Sale Rate"}),s(d,{id:"sale_rate",ref:"sale_rate",modelValue:o.formData.sale_rate,"onUpdate:modelValue":t[5]||(t[5]=a=>o.formData.sale_rate=a),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"sale_rate"},null,8,["modelValue"])]),e("div",z,[s(i,{for:"total_rate",value:"Amount"}),s(d,{id:"total_rate",ref:"total_rate",modelValue:o.formData.total_rate,"onUpdate:modelValue":t[6]||(t[6]=a=>o.formData.total_rate=a),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_rate",readonly:""},null,8,["modelValue"])]),e("div",W,[s(i,{for:"expiry_date",value:"Expiry Date"}),s(d,{id:"expiry_date",ref:"expiry_date",modelValue:o.formData.expiry_date,"onUpdate:modelValue":t[7]||(t[7]=a=>o.formData.expiry_date=a),type:"date",readonly:"",class:"mt-1 block w-full",autocomplete:"expiry_date"},null,8,["modelValue"])]),e("div",j,[s(i,{for:"expiry_alert_days",value:"Expiry Alert Days"}),s(d,{id:"expiry_alert_days",ref:"expiry_alert_days",modelValue:o.formData.expiry_alert_days,"onUpdate:modelValue":t[8]||(t[8]=a=>o.formData.expiry_alert_days=a),type:"number",readonly:"",class:"mt-1 block w-full",autocomplete:"expiry_alert_days"},null,8,["modelValue"])])]),e("button",{type:"button",onClick:t[9]||(t[9]=(...a)=>n.addItem&&n.addItem(...a)),class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Add"),e("div",M,[e("div",O,[e("table",Z,[G,e("tbody",J,[(f(!0),h(D,null,A(o.addedItems,(a,p)=>(f(),h("tr",{class:"text-gray-700",key:p},[e("td",X,u(p+1),1),e("td",Y,u(a.product_code),1),e("td",$,u(a.product_name),1),e("td",tt,u(a.quantity),1),e("td",et,u(a.total_rate),1),e("td",at,[e("button",{type:"button",onClick:Dt=>n.removeItem(p)},"Remove",8,ot)])]))),128))])])])]),st,e("div",lt,[e("div",rt,[s(i,{for:"total_items",value:"Total Items"}),s(d,{id:"total_items",ref:"total_items",modelValue:o.formData.total_items,"onUpdate:modelValue":t[10]||(t[10]=a=>o.formData.total_items=a),type:"number",class:"mt-1 block w-full",autocomplete:"total_items",readonly:""},null,8,["modelValue"])]),e("div",it,[s(i,{for:"total_quantity",value:"Total Quantity"}),s(d,{id:"total_quantity",ref:"total_quantity",modelValue:o.formData.total_quantity,"onUpdate:modelValue":t[11]||(t[11]=a=>o.formData.total_quantity=a),type:"number",class:"mt-1 block w-full",autocomplete:"total_quantity",readonly:""},null,8,["modelValue"])]),e("div",dt,[s(i,{for:"net_amount",value:"Net Amount"}),s(d,{id:"net_amount",ref:"net_amount",modelValue:o.formData.net_amount,"onUpdate:modelValue":t[12]||(t[12]=a=>o.formData.net_amount=a),type:"number",step:"0.01",class:"mt-1 block w-full",readonly:"",autocomplete:"net_amount"},null,8,["modelValue"])]),e("div",nt,[s(i,{for:"service_charges",value:"Service Chares"}),s(d,{id:"service_charges",ref:"service_charges",modelValue:o.formData.service_charges,"onUpdate:modelValue":t[13]||(t[13]=a=>o.formData.service_charges=a),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"service_charges",onChange:n.calculateNetAmount},null,8,["modelValue","onChange"])]),e("div",ut,[s(i,{for:"total_discount",value:"Total Discount"}),s(d,{id:"total_discount",ref:"total_discount",modelValue:o.formData.total_discount,"onUpdate:modelValue":t[14]||(t[14]=a=>o.formData.total_discount=a),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_discount",onChange:n.calculateTotalDiscount},null,8,["modelValue","onChange"])]),e("div",mt,[s(i,{for:"total",value:"Total Amount"}),s(d,{id:"total",ref:"total",modelValue:o.formData.total,"onUpdate:modelValue":t[15]||(t[15]=a=>o.formData.total=a),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total",readonly:""},null,8,["modelValue"])]),e("div",ct,[s(i,{for:"received_amount",value:"Received Amount"}),s(d,{id:"received_amount",ref:"received_amount",modelValue:o.formData.received_amount,"onUpdate:modelValue":t[16]||(t[16]=a=>o.formData.received_amount=a),type:"number",step:"0.01",class:F(["mt-1 block w-full",{"border-red-500":o.isAmountLess}]),autocomplete:"received_amount",onKeyup:n.receivedAndBalance,required:""},null,8,["modelValue","class","onKeyup"])]),e("div",_t,[s(i,{for:"remaining_balance",value:"Remaining Balance"}),s(d,{id:"remaining_balance",ref:"remaining_balance",modelValue:o.formData.remaining_balance,"onUpdate:modelValue":t[17]||(t[17]=a=>o.formData.remaining_balance=a),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"remaining_balance",readonly:""},null,8,["modelValue"])])]),pt,e("div",ft,[s(y,{onClick:t[18]||(t[18]=a=>n.handleButtonClick("save"))},{default:c(()=>[_("Save")]),_:1}),s(y,{class:"ml-1",onClick:t[19]||(t[19]=a=>n.handleButtonClick("saveandprint"))},{default:c(()=>[_("Save & Print")]),_:1})])],32)])]),_:1})],64)}const It=S(B,[["render",ht]]);export{It as default};
