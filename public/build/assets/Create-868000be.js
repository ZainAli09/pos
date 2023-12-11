import{_ as k}from"./AuthenticatedLayout-049b99a7.js";import{_ as q,a as C}from"./TextInput-0438b74d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,c as m,Z as P,k as p,a as s,w as h,F as f,b as v,d as o,f as U,i as y,m as b,l as D,t as i}from"./app-bdb3b182.js";import{_ as A}from"./PrimaryButton-141e8ab3.js";const F={props:["options","value"],mounted(){const r=$(this.$refs.select2);r.select2({data:this.options}),r.on("change",()=>{this.$emit("input",r.val())}),r.val(this.value).trigger("change")},watch:{options(r){const t=$(this.$refs.select2);t.empty().select2({data:r}),t.val(this.value).trigger("change")}}},N={class:"mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600",ref:"select2"};function B(r,t,n,x,a,u){return c(),m("select",N,null,512)}const S=g(F,[["render",B]]),T={props:{mustVerifyEmail:Boolean,status:String,vendors:Object,products:Object},components:{AuthenticatedLayout:k,InputLabel:q,TextInput:C,Select2Input:S,Head:P,PrimaryButton:A},data(){return{formData:{manual_no:"",desc:"",vendor_id:"",product_id:"",batch_no:"",total_quantity:"",service_charges:"",gross_amount:"",total_discount:"",net_amount:"",addedItems:[]},addedItems:[]}},methods:{submitForm(){this.formData.addedItems=this.addedItems,this.$inertia.post(route("purchaseinvoices.store"),this.formData,{onSuccess:()=>{this.$inertia.visit(route("purchaseinvoices.index"))}})},getVendorDetails(r){const t=this.vendors.find(n=>n.id===parseInt(r));t?(this.formData.vendor_address=t.address,this.formData.vendor_code=t.id,this.formData.vendor_id=t.id):(this.formData.vendor_address="",this.formData.vendor_code="",this.formData.vendor_id="")},getProductDetails(r){const t=this.products.find(n=>n.id===parseInt(r));t?(this.formData.product_id=t.id,this.formData.product_code=t.id,this.formData.purchase_rate=t.purchase_rate,this.formData.batch_no=t.batch_no):(this.formData.product_id="",this.formData.product_code="",this.formData.purchase_rate="",this.formData.batch_no="")},calculateDiscountAmount(){const r=this.formData.total_rate;if(isNaN(this.formData.discount_percent)){const t=(this.formData.discount/r*100).toFixed(2);this.formData.discount_percent=t,this.formData.total_rate=(r-this.formData.discount).toFixed(2)}else{const t=this.formData.discount_percent,n=r*t/100;this.formData.discount=n,this.formData.total_rate=(r-n).toFixed(2)}},quantityWisePrice(){const r=this.formData.quantity;this.formData.total_rate=(r*this.formData.purchase_rate).toFixed(2)},calculateNetAmount(){this.formData.net_amount=parseFloat(this.formData.gross_amount)+parseFloat(this.formData.service_charges)},addItem(){this.addedItems.push({product_code:this.formData.product_code,product_name:this.getProductById(this.formData.product_id),quantity:this.formData.quantity,purchase_rate:this.formData.purchase_rate,batch_no:this.formData.batch_no,discount:this.formData.discount,discount_percent:this.formData.discount_percent,total_rate:this.formData.total_rate,desc:this.formData.desc,manual_no:this.formData.manual_no,vendor_id:this.formData.vendor_id,product_id:this.formData.product_id,total_rate:this.formData.total_rate}),this.formData.total_quantity=this.addedItems.reduce((r,t)=>r+parseInt(t.quantity),0),this.formData.gross_amount=this.addedItems.reduce((r,t)=>r+parseFloat(t.total_rate),0),this.formData.net_amount=this.addedItems.reduce((r,t)=>r+parseFloat(t.total_rate),0),this.formData.total_discount=this.addedItems.reduce((r,t)=>r+parseInt(t.discount),0),this.formData.product_code="",this.formData.product_id="",this.formData.quantity="",this.formData.purchase_rate="",this.formData.batch_no="",this.formData.discount=void 0,this.formData.discount_percent=void 0,this.formData.total_rate=""},removeItem(r){this.addedItems.splice(r,1),this.formData.total_quantity=this.addedItems.reduce((t,n)=>t+parseInt(n.quantity),0),this.formData.gross_amount=this.addedItems.reduce((t,n)=>t+parseFloat(n.total_rate),0),this.formData.net_amount=this.addedItems.reduce((t,n)=>t+parseFloat(n.total_rate),0),this.formData.total_discount=this.addedItems.reduce((t,n)=>t+parseInt(n.discount),0)},getProductById(r){const t=this.products.find(n=>n.id===r);return t?t.name:""}}},L={class:"flex space-x-4"},R={class:"w-1/6"},H={class:"w-1/6"},M={class:"w-1/6"},Q={class:"w-1/6"},j=o("option",{value:""},"Select option",-1),E=["value"],K={class:"w-1/6"},O={class:"w-1/6"},W={class:"flex space-x-4"},G={class:"w-1/6"},Z=o("option",{value:""},"Select option",-1),z=["value"],J={class:"w-1/6"},X={class:"w-1/6"},Y={class:"w-1/6"},tt={class:"w-1/6"},et={class:"w-1/6"},ot={class:"w-1/6"},at={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},st={class:"overflow-x-auto w-full"},rt={class:"w-full whitespace-no-wrap"},nt=o("thead",null,[o("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[o("th",{class:"px-4 py-3"},"Sr"),o("th",{class:"px-4 py-3"},"Product Code"),o("th",{class:"px-4 py-3"},"Product Name"),o("th",{class:"px-4 py-3"},"Qty"),o("th",{class:"px-4 py-3"},"Purchase Rate"),o("th",{class:"px-4 py-3"},"Batch No"),o("th",{class:"px-4 py-3"},"Discount Amount"),o("th",{class:"px-4 py-3"},"Total Amount"),o("th",{class:"px-4 py-3"},"Action")])],-1),dt={class:"bg-white divide-y"},lt={class:"px-4 py-3 text-sm"},ut={class:"px-4 py-3 text-sm"},it={class:"px-4 py-3 text-sm"},ct={class:"px-4 py-3 text-sm"},mt={class:"px-4 py-3 text-sm"},_t={class:"px-4 py-3 text-sm"},pt={class:"px-4 py-3 text-sm"},ft={class:"px-4 py-3 text-sm"},ht={class:"px-4 py-3 text-sm"},Dt=["onClick"],vt=o("br",null,null,-1),yt={class:"flex space-x-4"},bt={class:"w-1/6"},gt={class:"w-1/6"},xt={class:"w-1/6"},Vt={class:"w-1/6"},wt={class:"w-1/6"},It=o("br",null,null,-1);function kt(r,t,n,x,a,u){const V=p("Head"),d=p("InputLabel"),l=p("TextInput"),w=p("PrimaryButton"),I=p("AuthenticatedLayout");return c(),m(f,null,[s(V,{title:"Purchase Invoice"}),s(I,null,{header:h(()=>[v(" Purchase Invoice ")]),default:h(()=>[o("div",null,[o("form",{onSubmit:t[23]||(t[23]=U((...e)=>u.submitForm&&u.submitForm(...e),["prevent"])),class:"mt-2 space-y-2"},[o("div",L,[o("div",R,[s(d,{for:"manual_no",value:"Manual No"}),s(l,{id:"manual_no",ref:"manual_no",modelValue:a.formData.manual_no,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.manual_no=e),type:"number",class:"mt-1 block w-full",autocomplete:"manual_no"},null,8,["modelValue"])]),o("div",H,[s(d,{for:"desc",value:"Description"}),s(l,{id:"desc",ref:"desc",modelValue:a.formData.desc,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.desc=e),type:"text",class:"mt-1 block w-full",autocomplete:"desc"},null,8,["modelValue"])]),o("div",M,[s(d,{for:"vendor",value:"Vendor Code"}),s(l,{onChange:t[2]||(t[2]=e=>u.getVendorDetails(a.formData.vendor_code)),id:"vendor_code",ref:"vendor_code",modelValue:a.formData.vendor_code,"onUpdate:modelValue":t[3]||(t[3]=e=>a.formData.vendor_code=e),type:"number",class:"mt-1 block w-full",autocomplete:"vendor_code",readonly:""},null,8,["modelValue"])]),o("div",Q,[s(d,{for:"vendor",value:"Vendor Name"}),y(o("select",{onChange:t[4]||(t[4]=e=>u.getVendorDetails(a.formData.vendor_id)),"onUpdate:modelValue":t[5]||(t[5]=e=>a.formData.vendor_id=e),id:"",class:"mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[j,(c(!0),m(f,null,D(n.vendors,(e,_)=>(c(),m("option",{value:e.id},i(e.name),9,E))),256))],544),[[b,a.formData.vendor_id]])]),o("div",K,[s(d,{for:"vendor_address",value:"Vendor Address"}),s(l,{readonly:"",id:"vendor_address",ref:"vendor_address",modelValue:a.formData.vendor_address,"onUpdate:modelValue":t[6]||(t[6]=e=>a.formData.vendor_address=e),type:"text",class:"mt-1 block w-full",autocomplete:"vendor_address"},null,8,["modelValue"])]),o("div",O,[s(d,{for:"product_code",value:"Product Code"}),s(l,{onChange:t[7]||(t[7]=e=>u.getProductDetails(a.formData.product_code)),id:"product_code",ref:"product_code",modelValue:a.formData.product_code,"onUpdate:modelValue":t[8]||(t[8]=e=>a.formData.product_code=e),type:"text",class:"mt-1 block w-full",autocomplete:"product_code",readonly:""},null,8,["modelValue"])])]),o("div",W,[o("div",G,[s(d,{for:"product",value:"Product Name"}),y(o("select",{onChange:t[9]||(t[9]=e=>u.getProductDetails(a.formData.product_id)),"onUpdate:modelValue":t[10]||(t[10]=e=>a.formData.product_id=e),id:"",class:"mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[Z,(c(!0),m(f,null,D(n.products,(e,_)=>(c(),m("option",{value:e.id},i(e.name),9,z))),256))],544),[[b,a.formData.product_id]])]),o("div",J,[s(d,{for:"quantity",value:"Quantity"}),s(l,{id:"quantity",ref:"quantity",onKeyup:u.quantityWisePrice,modelValue:a.formData.quantity,"onUpdate:modelValue":t[11]||(t[11]=e=>a.formData.quantity=e),type:"text",class:"mt-1 block w-full",autocomplete:"quantity"},null,8,["onKeyup","modelValue"])]),o("div",X,[s(d,{for:"batch_no",value:"Batch No"}),s(l,{id:"batch_no",ref:"batch_no",modelValue:a.formData.batch_no,"onUpdate:modelValue":t[12]||(t[12]=e=>a.formData.batch_no=e),type:"text",class:"mt-1 block w-full",autocomplete:"batch_no",readonly:""},null,8,["modelValue"])]),o("div",Y,[s(d,{for:"purchase_rate",value:"Purchase Rate"}),s(l,{id:"purchase_rate",ref:"purchase_rate",modelValue:a.formData.purchase_rate,"onUpdate:modelValue":t[13]||(t[13]=e=>a.formData.purchase_rate=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"purchase_rate",readonly:""},null,8,["modelValue"])]),o("div",tt,[s(d,{for:"discount_percent",value:"Discount %"}),s(l,{id:"discount_percent",ref:"discount_percent",modelValue:a.formData.discount_percent,"onUpdate:modelValue":t[14]||(t[14]=e=>a.formData.discount_percent=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"discount_percent",onChange:u.calculateDiscountAmount},null,8,["modelValue","onChange"])]),o("div",et,[s(d,{for:"discount",value:"Discount Amount"}),s(l,{id:"discount",ref:"discount",modelValue:a.formData.discount,"onUpdate:modelValue":t[15]||(t[15]=e=>a.formData.discount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"discount",onChange:u.calculateDiscountAmount},null,8,["modelValue","onChange"])]),o("div",ot,[s(d,{for:"total_rate",value:"Total Rate"}),s(l,{id:"total_rate",ref:"total_rate",modelValue:a.formData.total_rate,"onUpdate:modelValue":t[16]||(t[16]=e=>a.formData.total_rate=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_rate",readonly:""},null,8,["modelValue"])])]),o("button",{type:"button",onClick:t[17]||(t[17]=(...e)=>u.addItem&&u.addItem(...e)),class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Add"),o("div",at,[o("div",st,[o("table",rt,[nt,o("tbody",dt,[(c(!0),m(f,null,D(a.addedItems,(e,_)=>(c(),m("tr",{class:"text-gray-700",key:_},[o("td",lt,i(_+1),1),o("td",ut,i(e.product_code),1),o("td",it,i(e.product_name),1),o("td",ct,i(e.quantity),1),o("td",mt,i(e.purchase_rate),1),o("td",_t,i(e.batch_no),1),o("td",pt,i(e.discount),1),o("td",ft,i(e.total_rate),1),o("td",ht,[o("button",{type:"button",onClick:qt=>u.removeItem(_)},"Remove",8,Dt)])]))),128))])])])]),vt,o("div",yt,[o("div",bt,[s(d,{for:"total_quantity",value:"Total Quantity"}),s(l,{id:"total_quantity",ref:"total_quantity",modelValue:a.formData.total_quantity,"onUpdate:modelValue":t[18]||(t[18]=e=>a.formData.total_quantity=e),type:"number",class:"mt-1 block w-full",autocomplete:"total_quantity",readonly:""},null,8,["modelValue"])]),o("div",gt,[s(d,{for:"gross_amount",value:"Gross Amount"}),s(l,{id:"gross_amount",ref:"gross_amount",modelValue:a.formData.gross_amount,"onUpdate:modelValue":t[19]||(t[19]=e=>a.formData.gross_amount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"gross_amount",readonly:""},null,8,["modelValue"])]),o("div",xt,[s(d,{for:"service_charges",value:"Service Charges"}),s(l,{id:"service_charges",ref:"service_charges",modelValue:a.formData.service_charges,"onUpdate:modelValue":t[20]||(t[20]=e=>a.formData.service_charges=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"service_charges",onChange:u.calculateNetAmount},null,8,["modelValue","onChange"])]),o("div",Vt,[s(d,{for:"total_discount",value:"Total Discount"}),s(l,{id:"total_discount",ref:"total_discount",modelValue:a.formData.total_discount,"onUpdate:modelValue":t[21]||(t[21]=e=>a.formData.total_discount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_discount",readonly:""},null,8,["modelValue"])]),o("div",wt,[s(d,{for:"net_amount",value:"Net Amount"}),s(l,{id:"net_amount",ref:"net_amount",modelValue:a.formData.net_amount,"onUpdate:modelValue":t[22]||(t[22]=e=>a.formData.net_amount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"net_amount",readonly:""},null,8,["modelValue"])])]),It,s(w,null,{default:h(()=>[v("Save")]),_:1})],32)])]),_:1})],64)}const Nt=g(T,[["render",kt]]);export{Nt as default};
