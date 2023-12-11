import{_ as w}from"./AuthenticatedLayout-049b99a7.js";import{_ as I,a as k}from"./TextInput-0438b74d.js";import{_ as q}from"./PrimaryButton-141e8ab3.js";import{Z as C,k as p,o as c,c as m,a as s,w as h,F as f,b as v,d as o,f as P,i as y,m as b,l as D,t as i}from"./app-bdb3b182.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";const A={props:{mustVerifyEmail:Boolean,status:String,vendors:Object,products:Object},components:{AuthenticatedLayout:w,InputLabel:I,TextInput:k,Head:C,PrimaryButton:q},data(){return{formData:{manual_no:"",desc:"",vendor_id:"",product_id:"",batch_no:"",total_quantity:"",service_charges:"",gross_amount:"",total_discount:"",net_amount:"",addedItems:[]},addedItems:[]}},methods:{submitForm(){this.formData.addedItems=this.addedItems,this.$inertia.post(route("purchasereturninvoices.store"),this.formData,{onSuccess:()=>{this.$inertia.visit(route("purchasereturninvoices.index"))}})},getVendorDetails(r){const t=this.vendors.find(n=>n.id===parseInt(r));t?(this.formData.vendor_address=t.address,this.formData.vendor_code=t.id,this.formData.vendor_id=t.id):(this.formData.vendor_address="",this.formData.vendor_code="",this.formData.vendor_id="")},getProductDetails(r){const t=this.products.find(n=>n.id===parseInt(r));t?(this.formData.product_id=t.id,this.formData.product_code=t.id,this.formData.purchase_rate=t.purchase_rate,this.formData.batch_no=t.batch_no):(this.formData.product_id="",this.formData.product_code="",this.formData.purchase_rate="",this.formData.batch_no="")},calculateDiscountAmount(){const r=this.formData.total_rate;if(isNaN(this.formData.discount_percent)){const t=(this.formData.discount/r*100).toFixed(2);this.formData.discount_percent=t,this.formData.total_rate=(r-this.formData.discount).toFixed(2)}else{const t=this.formData.discount_percent,n=r*t/100;this.formData.discount=n,this.formData.total_rate=(r-n).toFixed(2)}},quantityWisePrice(){const r=this.formData.quantity;this.formData.total_rate=(r*this.formData.purchase_rate).toFixed(2)},calculateNetAmount(){this.formData.net_amount=parseFloat(this.formData.gross_amount)+parseFloat(this.formData.service_charges)},addItem(){this.addedItems.push({product_code:this.formData.product_code,product_name:this.getProductById(this.formData.product_id),quantity:this.formData.quantity,purchase_rate:this.formData.purchase_rate,batch_no:this.formData.batch_no,discount:this.formData.discount,discount_percent:this.formData.discount_percent,total_rate:this.formData.total_rate,desc:this.formData.desc,manual_no:this.formData.manual_no,vendor_id:this.formData.vendor_id,product_id:this.formData.product_id,total_rate:this.formData.total_rate}),this.formData.total_quantity=this.addedItems.reduce((r,t)=>r+parseInt(t.quantity),0),this.formData.gross_amount=this.addedItems.reduce((r,t)=>r+parseFloat(t.total_rate),0),this.formData.net_amount=this.addedItems.reduce((r,t)=>r+parseFloat(t.total_rate),0),this.formData.total_discount=this.addedItems.reduce((r,t)=>r+parseInt(t.discount),0),this.formData.product_code="",this.formData.product_id="",this.formData.quantity="",this.formData.purchase_rate="",this.formData.batch_no="",this.formData.discount=void 0,this.formData.discount_percent=void 0,this.formData.total_rate=""},removeItem(r){this.addedItems.splice(r,1),this.formData.total_quantity=this.addedItems.reduce((t,n)=>t+parseInt(n.quantity),0),this.formData.gross_amount=this.addedItems.reduce((t,n)=>t+parseFloat(n.total_rate),0),this.formData.net_amount=this.addedItems.reduce((t,n)=>t+parseFloat(n.total_rate),0),this.formData.total_discount=this.addedItems.reduce((t,n)=>t+parseInt(n.discount),0)},getProductById(r){const t=this.products.find(n=>n.id===r);return t?t.name:""}}},F={class:"flex space-x-4"},N={class:"w-1/6"},B={class:"w-1/6"},S={class:"w-1/6"},T={class:"w-1/6"},L=o("option",{value:""},"Select option",-1),R=["value"],H={class:"w-1/6"},M={class:"w-1/6"},Q={class:"flex space-x-4"},j={class:"w-1/6"},E=o("option",{value:""},"Select option",-1),K=["value"],O={class:"w-1/6"},W={class:"w-1/6"},G={class:"w-1/6"},Z={class:"w-1/6"},z={class:"w-1/6"},J={class:"w-1/6"},X={class:"overflow-hidden mb-8 w-full rounded-lg border shadow-xs"},Y={class:"overflow-x-auto w-full"},$={class:"w-full whitespace-no-wrap"},tt=o("thead",null,[o("tr",{class:"text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b"},[o("th",{class:"px-4 py-3"},"Sr"),o("th",{class:"px-4 py-3"},"Product Code"),o("th",{class:"px-4 py-3"},"Product Name"),o("th",{class:"px-4 py-3"},"Qty"),o("th",{class:"px-4 py-3"},"Purchase Rate"),o("th",{class:"px-4 py-3"},"Batch No"),o("th",{class:"px-4 py-3"},"Discount Amount"),o("th",{class:"px-4 py-3"},"Total Amount"),o("th",{class:"px-4 py-3"},"Action")])],-1),et={class:"bg-white divide-y"},ot={class:"px-4 py-3 text-sm"},at={class:"px-4 py-3 text-sm"},st={class:"px-4 py-3 text-sm"},rt={class:"px-4 py-3 text-sm"},nt={class:"px-4 py-3 text-sm"},dt={class:"px-4 py-3 text-sm"},lt={class:"px-4 py-3 text-sm"},ut={class:"px-4 py-3 text-sm"},it={class:"px-4 py-3 text-sm"},ct=["onClick"],mt=o("br",null,null,-1),_t={class:"flex space-x-4"},pt={class:"w-1/6"},ft={class:"w-1/6"},ht={class:"w-1/6"},Dt={class:"w-1/6"},vt={class:"w-1/6"},yt=o("br",null,null,-1);function bt(r,t,n,xt,a,u){const x=p("Head"),d=p("InputLabel"),l=p("TextInput"),g=p("PrimaryButton"),V=p("AuthenticatedLayout");return c(),m(f,null,[s(x,{title:"Purchase Return Invoice"}),s(V,null,{header:h(()=>[v(" Purchase Return Invoice ")]),default:h(()=>[o("div",null,[o("form",{onSubmit:t[23]||(t[23]=P((...e)=>u.submitForm&&u.submitForm(...e),["prevent"])),class:"mt-2 space-y-2"},[o("div",F,[o("div",N,[s(d,{for:"manual_no",value:"Manual No"}),s(l,{id:"manual_no",ref:"manual_no",modelValue:a.formData.manual_no,"onUpdate:modelValue":t[0]||(t[0]=e=>a.formData.manual_no=e),type:"number",class:"mt-1 block w-full",autocomplete:"manual_no"},null,8,["modelValue"])]),o("div",B,[s(d,{for:"desc",value:"Description"}),s(l,{id:"desc",ref:"desc",modelValue:a.formData.desc,"onUpdate:modelValue":t[1]||(t[1]=e=>a.formData.desc=e),type:"text",class:"mt-1 block w-full",autocomplete:"desc"},null,8,["modelValue"])]),o("div",S,[s(d,{for:"vendor",value:"Vendor Code"}),s(l,{onChange:t[2]||(t[2]=e=>u.getVendorDetails(a.formData.vendor_code)),id:"vendor_code",ref:"vendor_code",modelValue:a.formData.vendor_code,"onUpdate:modelValue":t[3]||(t[3]=e=>a.formData.vendor_code=e),type:"number",class:"mt-1 block w-full",autocomplete:"vendor_code",readonly:""},null,8,["modelValue"])]),o("div",T,[s(d,{for:"vendor",value:"Vendor Name"}),y(o("select",{onChange:t[4]||(t[4]=e=>u.getVendorDetails(a.formData.vendor_id)),"onUpdate:modelValue":t[5]||(t[5]=e=>a.formData.vendor_id=e),id:"",class:"mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[L,(c(!0),m(f,null,D(n.vendors,(e,_)=>(c(),m("option",{value:e.id},i(e.name),9,R))),256))],544),[[b,a.formData.vendor_id]])]),o("div",H,[s(d,{for:"vendor_address",value:"Vendor Address"}),s(l,{readonly:"",id:"vendor_address",ref:"vendor_address",modelValue:a.formData.vendor_address,"onUpdate:modelValue":t[6]||(t[6]=e=>a.formData.vendor_address=e),type:"text",class:"mt-1 block w-full",autocomplete:"vendor_address"},null,8,["modelValue"])]),o("div",M,[s(d,{for:"product_code",value:"Product Code"}),s(l,{onChange:t[7]||(t[7]=e=>u.getProductDetails(a.formData.product_code)),id:"product_code",ref:"product_code",modelValue:a.formData.product_code,"onUpdate:modelValue":t[8]||(t[8]=e=>a.formData.product_code=e),type:"text",class:"mt-1 block w-full",autocomplete:"product_code",readonly:""},null,8,["modelValue"])])]),o("div",Q,[o("div",j,[s(d,{for:"product",value:"Product Name"}),y(o("select",{onChange:t[9]||(t[9]=e=>u.getProductDetails(a.formData.product_id)),"onUpdate:modelValue":t[10]||(t[10]=e=>a.formData.product_id=e),id:"",class:"mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"},[E,(c(!0),m(f,null,D(n.products,(e,_)=>(c(),m("option",{value:e.id},i(e.name),9,K))),256))],544),[[b,a.formData.product_id]])]),o("div",O,[s(d,{for:"quantity",value:"Quantity"}),s(l,{id:"quantity",ref:"quantity",onKeyup:u.quantityWisePrice,modelValue:a.formData.quantity,"onUpdate:modelValue":t[11]||(t[11]=e=>a.formData.quantity=e),type:"text",class:"mt-1 block w-full",autocomplete:"quantity"},null,8,["onKeyup","modelValue"])]),o("div",W,[s(d,{for:"batch_no",value:"Batch No"}),s(l,{id:"batch_no",ref:"batch_no",modelValue:a.formData.batch_no,"onUpdate:modelValue":t[12]||(t[12]=e=>a.formData.batch_no=e),type:"text",class:"mt-1 block w-full",autocomplete:"batch_no",readonly:""},null,8,["modelValue"])]),o("div",G,[s(d,{for:"purchase_rate",value:"Purchase Rate"}),s(l,{id:"purchase_rate",ref:"purchase_rate",modelValue:a.formData.purchase_rate,"onUpdate:modelValue":t[13]||(t[13]=e=>a.formData.purchase_rate=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"purchase_rate",readonly:""},null,8,["modelValue"])]),o("div",Z,[s(d,{for:"discount_percent",value:"Discount %"}),s(l,{id:"discount_percent",ref:"discount_percent",modelValue:a.formData.discount_percent,"onUpdate:modelValue":t[14]||(t[14]=e=>a.formData.discount_percent=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"discount_percent",onChange:u.calculateDiscountAmount},null,8,["modelValue","onChange"])]),o("div",z,[s(d,{for:"discount",value:"Discount Amount"}),s(l,{id:"discount",ref:"discount",modelValue:a.formData.discount,"onUpdate:modelValue":t[15]||(t[15]=e=>a.formData.discount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"discount",onChange:u.calculateDiscountAmount},null,8,["modelValue","onChange"])]),o("div",J,[s(d,{for:"total_rate",value:"Total Rate"}),s(l,{id:"total_rate",ref:"total_rate",modelValue:a.formData.total_rate,"onUpdate:modelValue":t[16]||(t[16]=e=>a.formData.total_rate=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_rate",readonly:""},null,8,["modelValue"])])]),o("button",{type:"button",onClick:t[17]||(t[17]=(...e)=>u.addItem&&u.addItem(...e)),class:"rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600"},"Add"),o("div",X,[o("div",Y,[o("table",$,[tt,o("tbody",et,[(c(!0),m(f,null,D(a.addedItems,(e,_)=>(c(),m("tr",{class:"text-gray-700",key:_},[o("td",ot,i(_+1),1),o("td",at,i(e.product_code),1),o("td",st,i(e.product_name),1),o("td",rt,i(e.quantity),1),o("td",nt,i(e.purchase_rate),1),o("td",dt,i(e.batch_no),1),o("td",lt,i(e.discount),1),o("td",ut,i(e.total_rate),1),o("td",it,[o("button",{type:"button",onClick:gt=>u.removeItem(_)},"Remove",8,ct)])]))),128))])])])]),mt,o("div",_t,[o("div",pt,[s(d,{for:"total_quantity",value:"Total Quantity"}),s(l,{id:"total_quantity",ref:"total_quantity",modelValue:a.formData.total_quantity,"onUpdate:modelValue":t[18]||(t[18]=e=>a.formData.total_quantity=e),type:"number",class:"mt-1 block w-full",autocomplete:"total_quantity",readonly:""},null,8,["modelValue"])]),o("div",ft,[s(d,{for:"gross_amount",value:"Gross Amount"}),s(l,{id:"gross_amount",ref:"gross_amount",modelValue:a.formData.gross_amount,"onUpdate:modelValue":t[19]||(t[19]=e=>a.formData.gross_amount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"gross_amount",readonly:""},null,8,["modelValue"])]),o("div",ht,[s(d,{for:"service_charges",value:"Service Charges"}),s(l,{id:"service_charges",ref:"service_charges",modelValue:a.formData.service_charges,"onUpdate:modelValue":t[20]||(t[20]=e=>a.formData.service_charges=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"service_charges",onChange:u.calculateNetAmount},null,8,["modelValue","onChange"])]),o("div",Dt,[s(d,{for:"total_discount",value:"Total Discount"}),s(l,{id:"total_discount",ref:"total_discount",modelValue:a.formData.total_discount,"onUpdate:modelValue":t[21]||(t[21]=e=>a.formData.total_discount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"total_discount",readonly:""},null,8,["modelValue"])]),o("div",vt,[s(d,{for:"net_amount",value:"Net Amount"}),s(l,{id:"net_amount",ref:"net_amount",modelValue:a.formData.net_amount,"onUpdate:modelValue":t[22]||(t[22]=e=>a.formData.net_amount=e),type:"number",step:"0.01",class:"mt-1 block w-full",autocomplete:"net_amount",readonly:""},null,8,["modelValue"])])]),yt,s(g,null,{default:h(()=>[v("Save")]),_:1})],32)])]),_:1})],64)}const Ct=U(A,[["render",bt]]);export{Ct as default};
