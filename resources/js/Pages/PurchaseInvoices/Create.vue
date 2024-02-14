

<template>
    <Head title="Purchase Invoice" />

    <AuthenticatedLayout>
        <template #header>
            Purchase Invoice
        </template>
        
        <div>
            <form @submit.prevent="submitForm" class="mt-2 space-y-1">
                <b style="font-size: 20px;"> INV-{{ sr + 1 }} </b>
                <br />
                <div class="flex space-x-4">
                    <div class="w-1/6">
                        <InputLabel for="purchase_date" value="Purchase date" />
                        <TextInput
                            id="purchase_date"
                            ref="purchase_date"
                            v-model="formData.created_at"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="created_at"
                        />
                    </div>
                </div>
                <div class="flex space-x-4">

                    <div class="w-1/12">
                    <InputLabel for="manual_no" value="Manual No" />
                        <TextInput
                            id="manual_no"
                            ref="manual_no"
                            v-model="formData.manual_no"
                            type="number"
                            class="mt-1 block w-full"
                            autocomplete="manual_no"
                        />
                    </div>
                    <div class="w-1/12">
                    <InputLabel for="desc" value="Description" />
                        <TextInput
                            id="desc"
                            ref="desc"
                            v-model="formData.desc"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="desc"
                        />
                    </div>
                    <div class="w-1/12">
                        <InputLabel for="vendor" value="Vendor Code" />
                        <TextInput 
                            @change="getVendorDetails(formData.vendor_code)"
                            id="vendor_code"
                            ref="vendor_code"
                            v-model="formData.vendor_code"
                            type="number" 
                            class="mt-1 block w-full"
                            autocomplete="vendor_code"
                            readonly
                        />
                    </div>
                    <div class="w-4/12">
                        <InputLabel for="vendor" value="Vendor Name" />
                        
                        <Select2Input :options="vendors" 
                        @change="getVendorDetails($event)" v-model="formData.vendor_id" 
                        style="width: -webkit-fill-available;" />
                    </div>
                    <div class="w-4/12">
                        <InputLabel for="vendor_address" value="Vendor Address" />
                        <TextInput
                            readonly
                            id="vendor_address"
                            ref="vendor_address"
                            v-model="formData.vendor_address"
                            type="text" 
                            class="mt-1 block w-full"
                            autocomplete="vendor_address"
                        />
                    </div>
                    <div class="w-1/12">
                        <InputLabel for="product_code" value="Product Code" />
                        <TextInput
                           @change="getProductDetails(formData.product_code)"
                            id="product_code"
                            ref="product_code"
                            v-model="formData.product_code"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="product_code" readonly
                        />
                       
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="w-4/12">
                        <InputLabel for="product" value="Product Name" />
                        
                        <Select2Input :options="products" 
                        @change="getProductDetails($event)" v-model="formData.product_id" 
                        style="width: -webkit-fill-available;"
                        
                        />
                        
                      
                    </div>
                    
                    <div class="w-1/12">
                    <InputLabel for="quantity" value="Quantity" />
                        <TextInput
                            id="quantity"
                            ref="quantity"
                            @keyup="quantityWisePrice"
                            v-model="formData.quantity"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="quantity"
                        />
                    </div>
                    <div class="w-3/12">
                        <InputLabel for="batch_no" value="Batch No" />
                        <TextInput
                            id="batch_no"
                            ref="batch_no"
                            v-model="formData.batch_no"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="batch_no" readonly
                        />
                    </div>
                    <div class="w-3/12">
                        <InputLabel for="purchase_rate" value="Purchase Rate" />
                        <TextInput
                            id="purchase_rate"
                            ref="purchase_rate"
                            v-model="formData.purchase_rate"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="purchase_rate" 
                        />
                    </div>
                    <div class="w-1/12">
                        <InputLabel for="discount_percent" value="Disc %" />
                        <TextInput
                            id="discount_percent"
                            ref="discount_percent"
                            v-model="formData.discount_percent"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="discount_percent"
                            @change="calculateDiscountAmount"
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="discount" value="Discount Amount" />
                        <TextInput
                            id="discount"
                            ref="discount"
                            v-model="formData.discount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="discount"
                            @change="calculateDiscountAmount"
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="total_rate" value="Total Rate" />
                        <TextInput
                            id="total_rate"
                            ref="total_rate"
                            v-model="formData.total_rate"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="total_rate" readonly
                        />
                    </div>
                </div>
                
                <button type="button" @click="addItem" class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-600">Add</button>

                <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                    <div class="overflow-x-auto w-full">
                        <table class="w-full whitespace-no-wrap">
                            <thead>
                                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                                    <th class="px-4 py-3">Sr</th>
                                    <th class="px-4 py-3">Product Code</th>
                                    <th class="px-4 py-3">Product Name</th>
                                    <th class="px-4 py-3">Qty</th>
                                    <th class="px-4 py-3">Purchase Rate</th>
                                    <th class="px-4 py-3">Batch No</th>
                                    <th class="px-4 py-3">Discount Amount</th>
                                    <th class="px-4 py-3">Total Amount</th>
                                    <th class="px-4 py-3">Action</th>


                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y">
                        
                                <tr class="text-gray-700" v-for="(item, index) in addedItems" :key="index">
                                    <td class="px-4 py-3 text-sm">{{ index + 1 }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.product_code }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.product_name }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.quantity }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.purchase_rate }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.batch_no }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.discount }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.total_rate }}</td>
                                    <td class="px-4 py-3 text-sm"><button type="button" @click="removeItem(index)">Remove</button></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <div class="flex space-x-4">
                    <div class="w-1/6">
                    <InputLabel for="total_quantity" value="Total Quantity" />
                        <TextInput
                            id="total_quantity"
                            ref="total_quantity"
                            
                            v-model="formData.total_quantity"
                            type="number"
                            class="mt-1 block w-full"
                            autocomplete="total_quantity" readonly
                        />
                    </div>
                    
                    <div class="w-1/6">
                        <InputLabel for="gross_amount" value="Gross Amount" />
                        <TextInput
                            id="gross_amount"
                            ref="gross_amount"
                            v-model="formData.gross_amount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="gross_amount" readonly
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="service_charges" value="Service Charges" />
                        <TextInput
                            id="service_charges"
                            ref="service_charges"
                            v-model="formData.service_charges"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="service_charges"
                            @change="calculateNetAmount"
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="total_discount" value="Total Discount" />
                        <TextInput
                            id="total_discount"
                            ref="total_discount"
                            v-model="formData.total_discount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="total_discount" readonly
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="net_amount" value="Net Amount" />
                        <TextInput
                            id="net_amount"
                            ref="net_amount"
                            v-model="formData.net_amount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="net_amount"  readonly
                        />
                    </div>
                    
                </div>

                <br />
                <PrimaryButton >Save</PrimaryButton>

            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import Select2Input from '@/Components/Select2Input.vue';

// import Textarea from '@/Components/Textarea.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';


import { Head, router } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    vendors: Object,
    products: Object,
    sr: Array
    
  },

   components: {
    AuthenticatedLayout,
    InputLabel,
    TextInput, 
    Select2Input,
    Head,
    PrimaryButton,
  },

  data(){

    return {
        formData:{
            manual_no :'',
            desc:'',
            vendor_id:'',
            product_id:'',
            // quantity:'',
            batch_no:'',
            created_at:'',
            // purchase_rate:'',
            // discount:'',
            // discount_percent:'',
            // total_rate:'',
            total_quantity:'',
            service_charges:'',
            gross_amount:'',
            total_discount:'',
            net_amount:'',
            addedItems: [],
            

        },
        addedItems: [],
        

    }
  },


  methods: {
    submitForm() {
        this.formData.addedItems = this.addedItems;
      this.$inertia.post(route('purchaseinvoices.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('purchaseinvoices.index'));
        }
      });
    },

    getVendorDetails(id){
        const vendordetails = this.vendors.find((vendor) => vendor.id === parseInt(id));
        
      if (vendordetails) {
        this.formData.vendor_address = vendordetails.address;
        this.formData.vendor_code = vendordetails.id;
        this.formData.vendor_id = vendordetails.id;

      } else {
        
        this.formData.vendor_address = '';
        this.formData.vendor_code = '';
        this.formData.vendor_id = '';
      }
       
    },
    getProductDetails(id){
       
        const productdetails = this.products.find((product) => product.id === parseInt(id));
        // console.log(productdetails.id);
      if (productdetails) {
        this.formData.product_id = productdetails.id;
        this.formData.product_code = productdetails.id;
        this.formData.purchase_rate = productdetails.purchase_rate;
        this.formData.batch_no = productdetails.batch_no;        
      } else {
        
        this.formData.product_id = '';
        this.formData.product_code = '';
        this.formData.purchase_rate = '';
        this.formData.batch_no = '';

      }
       
    },
    
    calculateDiscountAmount(){
        
        const totalRate = this.formData.total_rate;
        if(!isNaN(this.formData.discount_percent)){
           
            const discountPercent = this.formData.discount_percent;
            const discountAmount = (totalRate * discountPercent) / 100;
            this.formData.discount = discountAmount;
            this.formData.total_rate = (totalRate - discountAmount).toFixed(2);
        }else{
            const percent = ((this.formData.discount/totalRate)*100).toFixed(2);
            this.formData.discount_percent = percent;
            this.formData.total_rate = (totalRate - this.formData.discount).toFixed(2);

        }

       
    
    },
    quantityWisePrice(){

        const quantity = this.formData.quantity;
        this.formData.total_rate = (quantity * this.formData.purchase_rate).toFixed(2);
        // console.log(quantity * this.formData.purchase_rate);
        
    },

    calculateNetAmount(){
        this.formData.net_amount = parseFloat(this.formData.gross_amount) + parseFloat(this.formData.service_charges);
    },
    
    addItem() {
      // Push the form data to the addedItems array
      console.log(this.formData.discount);
      this.addedItems.push({
        product_code: this.formData.product_code,
        product_name: this.getProductById(this.formData.product_id), // Replace with actual product retrieval logic
        quantity: this.formData.quantity,
        purchase_rate: this.formData.purchase_rate,
        batch_no: this.formData.batch_no,
        discount: (this.formData.discount) ? this.formData.discount : 0,
        discount_percent: (this.formData.discount_percent) ? this.formData.discount_percent : 0,
        total_rate: this.formData.total_rate,
        desc: this.formData.desc,
        manual_no: this.formData.manual_no,
        vendor_id: this.formData.vendor_id,
        product_id: this.formData.product_id,
        total_rate: this.formData.total_rate,


      });

      this.formData.total_quantity = this.addedItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.formData.gross_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.net_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);

      this.formData.total_discount = this.addedItems.reduce((total, item) => total + parseInt(item.discount), 0);


      // Clear the form fields after adding the item
      this.formData.product_code = '';
      this.formData.product_id = '';
      this.formData.quantity = '';
      this.formData.purchase_rate = '';
      this.formData.batch_no = '';
      this.formData.discount = undefined;
    //   this.formData.vendor_address = '';
    //   this.formData.vendor_code = '';
      this.formData.discount_percent = undefined;
    //   this.formData.vendor_id = '';
      this.formData.total_rate = '';
    //   this.formData.desc = '';
    //   this.formData.manual_no = '';



    },
    removeItem(index) {
    // Remove an item from the addedItems array by index
        this.addedItems.splice(index, 1);
        
      this.formData.total_quantity = this.addedItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.formData.gross_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.net_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);

      this.formData.total_discount = this.addedItems.reduce((total, item) => total + parseInt(item.discount), 0);
    },
    getProductById(productId) {
    //   console.log(productId)
      const product = this.products.find((p) => p.id === productId);
      return product ? product.text : '';
    },

  },

}
</script>
<style>
.select2-selection{
    height: 40px !important;
    margin-top: 5px;
}
</style>
