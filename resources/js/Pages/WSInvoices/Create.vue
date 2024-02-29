

<template>
    <Head title="Whole Sale Invoice" />

    <AuthenticatedLayout>
        <template #header>
            Whole Sale Invoice
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-2 space-y-2">
                <b style="font-size: 20px;"> INV-{{ sr + 1 }} </b>
                <br />
                
                <div class="flex space-x-4">
                    <div class="w-1/6">
                        <h1 class="text-rose-500">Remaining <span >{{ formData.remaining_stock }}</span> </h1>
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="w-1/6">
                    <InputLabel for="sale_date" value="Sale Date" />
                        <TextInput
                            id="sale_date"
                            ref="sale_date"
                            v-model="formData.sale_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="sale_date"
                        />
                    </div>
                    <div class="w-1/6">
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
                    <div class="w-1/6">
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
                    <div class="w-1/6">
                        <InputLabel for="customer" value="Customer Code" />
                        <TextInput 
                            @change="getCustomerDetails(formData.customer_code)"
                            id="customer_code"
                            ref="customer_code"
                            v-model="formData.customer_code"
                            type="number" 
                            class="mt-1 block w-full"
                            autocomplete="customer_code" readonly
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="customer" value="Customer Name" />
                        
                        <Select2Input :options="customers" 
                        
                        @change="getCustomerDetails($event)" v-model="formData.customer_id" 
                        style="width: -webkit-fill-available;" />

                    </div>
                    <div class="w-1/6">
                        <InputLabel for="customer_address" value="Customer Address" />
                        <TextInput
                            readonly
                            id="customer_address"
                            ref="customer_address"
                            v-model="formData.customer_address"
                            type="text" 
                            class="mt-1 block w-full"
                            autocomplete="customer_address" 
                        />
                    </div>
                    
                    

                    <div class="w-1/6">
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
                    <div class="w-1/6">
                        <InputLabel for="product" value="Product Name" />
                        <Select2Input :options="products" 
                        @change="getProductDetails($event)" v-model="formData.product_id" 
                        style="width: -webkit-fill-available;"
                        
                        />
                    </div>
                    <div class="w-1/6">
                    <InputLabel for="quantity" value="Quantity" />
                        <TextInput
                            id="quantity"
                            ref="quantity"
                            v-model="formData.quantity"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="quantity"
                            @keyup="quantityWisePrice"

                        />
                    </div>
                    <div class="w-1/6">
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
                    <!-- <div class="w-1/6">
                        <InputLabel for="purchase_date" value="Purchase date" />
                        <TextInput
                            id="purchase_date"
                            ref="purchase_date"
                            v-model="formData.purchase_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="purchase_date"
                        />
                    </div> -->
                    <div class="w-1/6">
                        <InputLabel for="purchase_rate" value="Purchase Rate" />
                        <TextInput
                            id="purchase_rate"
                            ref="purchase_rate"
                            v-model="formData.purchase_rate"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="purchase_rate" readonly
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="sale_rate" value="Sale Rate" />
                        <TextInput
                            id="sale_rate"
                            ref="sale_rate"
                            v-model="formData.sale_rate"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="sale_rate" 
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="discount_percent" value="Discount %" />
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
                    
                </div>
                
                <div class="flex space-x-4">
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
                    <div class="w-1/6">
                        <InputLabel for="expiry_date" value="Expiry Date" />
                        <TextInput
                            id="expiry_date"
                            ref="expiry_date"
                            v-model="formData.expiry_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="expiry_date" readonly
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="expiry_alert_days" value="Expiry Alert Days" />
                        <TextInput
                            id="expiry_alert_days"
                            ref="expiry_alert_days"
                            v-model="formData.expiry_alert_days"
                            type="number" 
                            class="mt-1 block w-full"
                            autocomplete="expiry_alert_days" readonly
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
                    <InputLabel for="total_items" value="Total Items" />
                        <TextInput
                            id="total_items"
                            ref="total_items"
                            v-model="formData.total_items"
                            type="number"
                            class="mt-1 block w-full"
                            autocomplete="total_items" readonly
                        />
                    </div>
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
                        <InputLabel for="net_amount" value="Net Amount" />
                        <TextInput
                            id="net_amount"
                            ref="net_amount"
                            v-model="formData.net_amount"
                            type="number" step="0.01"
                            class="mt-1 block w-full" readonly
                            autocomplete="net_amount"
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
                        <InputLabel for="total_amount" value="Total Amount" />
                        <TextInput
                            id="total_amount"
                            ref="total_amount"
                            v-model="formData.total_amount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="total_amount" readonly
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
// import Textarea from '@/Components/Textarea.vue';
import Select2Input from '@/Components/Select2Input.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';


import { Head, router } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    customers: Object,
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
            // manual_no :'',
            // desc:'',
            // vendor_id:'',
            product_id:'',
            // quantity:'',
            // batch_no:'',
            // purchase_rate:'',
            // discount:'',
            // discount_percent:'',
            // total_rate:'',
            total_quantity:'',
            total_amount:'',
            gross_amount:'',
            total_discount:'',
            net_amount:'',
            customer_id:'',
            sale_date:'',
            remaining_stock:'',

            addedItems: [],

        },
        addedItems: [],
        

    }
  },

  mounted() {
    // Set the current date for the sale_date field when the component is mounted
    this.formData.sale_date = new Date().toISOString().split('T')[0];
  },

  methods: {
    submitForm() {
        this.formData.addedItems = this.addedItems;
      this.$inertia.post(route('wsinvoices.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('wsinvoices.create'));
        }
      });
    },
    quantityWisePrice(){
        // console.log(this.formData.discount);
    const quantity = this.formData.quantity;
    this.formData.total_rate = (quantity * this.formData.purchase_rate).toFixed(2);
    // console.log(quantity * this.formData.purchase_rate);

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
    
    calculateNetAmount(){
        this.formData.total_amount = parseFloat(this.formData.net_amount) + parseFloat(this.formData.service_charges);
    },

    getCustomerDetails(id){
        const customerdetails = this.customers.find((customer) => customer.id === parseInt(id));
      if (customerdetails) {
        this.formData.customer_address = customerdetails.address;
        this.formData.customer_code = customerdetails.id;
        this.formData.customer_id = customerdetails.id;

      } else {
        
        this.formData.customer_address = '';
        this.formData.customer_code = '';
        this.formData.customer_id = '';
      }
       
    },
    getProductDetails(id){
        const productdetails = this.products.find((product) => product.id === parseInt(id));
      if (productdetails) {
        this.formData.product_id = productdetails.id;
        this.formData.product_code = productdetails.id;
        this.formData.sale_rate = productdetails.whole_sale_rate;
        this.formData.purchase_rate = productdetails.purchase_rate;
        this.formData.batch_no = productdetails.batch_no;
        this.formData.expiry_date = productdetails.expiry_date;
        this.formData.expiry_alert_days = productdetails.expiry_alert_days;
        this.formData.remaining_stock = productdetails.remaining_stock;


        
      } else {
        
        this.formData.product_id = '';
        this.formData.product_code = '';
        this.formData.sale_rate = '' ;
        this.formData.purchase_rate = '' ;
        this.formData.batch_no = '' ;
        this.formData.expiry_date = '';
        this.formData.expiry_alert_days = '' ;
      }
       
    },
    
    addItem() {
      // Push the form data to the addedItems array
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
        customer_id: this.formData.customer_id,
        product_id: this.formData.product_id,
        purchase_date: this.formData.purchase_date,
        sale_date: this.formData.sale_date,





      });

      this.formData.total_quantity = this.addedItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.formData.total_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.total_discount = this.addedItems.reduce((total, item) => total + parseInt(item.discount), 0);
      this.formData.net_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.total_items = this.addedItems.length;


      // Clear the form fields after adding the item
      this.formData.product_code = '';
      this.formData.product_id = '';
      this.formData.quantity = '';
      this.formData.purchase_rate = '';
      this.formData.batch_no = '';
      this.formData.discount = undefined;
    //   this.formData.customer_address = '';
    //   this.formData.customer_code = '';
      this.formData.discount_percent = undefined;
    //   this.formData.customer_id = '';
      this.formData.total_rate = '';
    //   this.formData.desc = '';
    //   this.formData.manual_no = '';
      this.formData.expiry_alert_days = '';
      this.formData.purchase_date = '';
      this.formData.expiry_date = '';
    //   this.formData.sale_date = '';





    },
    removeItem(index) {
    // Remove an item from the addedItems array by index
        this.addedItems.splice(index, 1);
        this.formData.total_quantity = this.addedItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.formData.total_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.total_discount = this.addedItems.reduce((total, item) => total + parseInt(item.discount), 0);
      this.formData.net_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.total_items = this.addedItems.length;
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