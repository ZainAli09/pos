

<template>
    <Head title="Sale Invoice" />

    <AuthenticatedLayout>
        <template #header>
            Edit Sale Invoice-{{ saleInvoice.id }}
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
                    <div class="w-1/6">
                        <InputLabel for="product" value="Product Name" />
                        <Select2Input :options="products" 
                        @change="getProductDetails($event)" v-model="formData.product_id" 
                        style="width: -webkit-fill-available;height: 40px !important; margin-top: 5px ;"
                        
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
                        <InputLabel for="total_rate" value="Amount" />
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
                            type="date" readonly 
                            class="mt-1 block w-full"
                            autocomplete="expiry_date"
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="expiry_alert_days" value="Expiry Alert Days" />
                        <TextInput
                            id="expiry_alert_days"
                            ref="expiry_alert_days"
                            v-model="formData.expiry_alert_days"
                            type="number" readonly
                            class="mt-1 block w-full"
                            autocomplete="expiry_alert_days"
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
                                    <th class="px-4 py-3">Rate</th>
                                    <th class="px-4 py-3">Action</th>


                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y">
                        
                                <tr class="text-gray-700" v-for="(item, index) in saleInvoice.sale_invoice_detail" :key="index">
                                    
                                    <td class="px-4 py-3 text-sm">{{ index + 1 }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.product.id }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.product.name }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.quantity }}</td>
                                    <td class="px-4 py-3 text-sm">{{ item.amount }}</td>
                                    <td class="px-4 py-3 text-sm"> <button type="button" @click="editItem(index)">Edit</button></td>

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
                        <InputLabel for="service_charges" value="Service Chares" />
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
                            autocomplete="total_discount" 
                            @change="calculateTotalDiscount"

                            
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="total" value="Total Amount" />
                        <TextInput
                            id="total"
                            ref="total"
                            v-model="formData.total"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="total" readonly
                            
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="received_amount" value="Received Amount" />
                        <TextInput
                            id="received_amount"
                            ref="received_amount"
                            v-model="formData.received_amount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="received_amount"
                            :class="{ 'border-red-500': isAmountLess }"

                            @keyup="receivedAndBalance"
                            required
                        />
                    </div>
                    <div class="w-1/6">
                        <InputLabel for="remaining_balance" value="Remaining Balance" />
                        <TextInput
                            id="remaining_balance"
                            ref="remaining_balance"
                            v-model="formData.remaining_balance"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="remaining_balance" readonly
                        />
                    </div>
                </div>

                <br />
                <div class="w-1/6">

                    <PrimaryButton @click="handleButtonClick('save')" >Save</PrimaryButton>
                   
                    <PrimaryButton class="ml-1" @click="handleButtonClick('saveandprint')" >Save & Print</PrimaryButton>
                </div>


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
    products: Object,
    sr: Array,
    saleInvoice: Object

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
            vendor_id:'',
            product_id:'',
            // quantity:'',
            // batch_no:'',
            // purchase_rate:'',
            // discount:'',
            // discount_percent:'',
            // total_rate:'',
            service_charges:'',
            total_quantity:'',
            net_amount:'',
            gross_amount:'',
            total_discount:'',
            net_amount:'',
            total_items: '',
            total: '',
            remaining_stock:'',
            submit_button:'',
            received_amount:'',
            total:'',
            

            addedItems: [],

        },
        addedItems: [],
        isAmountLess: false 
        

    }
  },

  created() {
    // Assuming addedItems is a data property in your Vue component
        this.addedItems = []; // Initialize the addedItems array if necessary

        // Loop through sale_invoice_detail and push values into addedItems
        this.saleInvoice.sale_invoice_detail.forEach(item => {
            this.addedItems.push({
                index: this.addedItems.length,
                productId: item.product.id,
                productName: item.product.name,
                quantity: item.quantity,
                amount: item.amount
            });
        });

        // console.log(this.addedItems);
    },

  methods: {
    handleButtonClick(buttonType) {
      this.formData.submit_button = buttonType;
    },
    submitForm() {
        if(this.formData.received_amount >= this.formData.total){

            this.formData.addedItems = this.addedItems;
            this.$inertia.post(route('saleinvoices.store'), this.formData, {
                onSuccess: () => {
                // Redirect to the index page using Inertia's visit method
                this.$inertia.visit(route('saleinvoices.create'));
                }
            });
        }else{
            this.isAmountLess = true ;
        }
    },

    
    getProductDetails(id){
        const productdetails = this.products.find((product) => product.id === parseInt(id));
        
      if (productdetails) {
        this.formData.product_id = productdetails.id;
        this.formData.product_code = productdetails.id;
        this.formData.sale_rate = productdetails.sale_rate;
        this.formData.expiry_date = productdetails.expiry_date;
        this.formData.expiry_alert_days = productdetails.expiry_alert_days;
        this.formData.remaining_stock = productdetails.remaining_stock;
      } else {
        
        this.formData.product_id = '';
        this.formData.product_code = '';
        this.formData.sale_rate = '';
        this.formData.expiry_alert_days = '';
        this.formData.expiry_date ='';
      }
       
    },

    
    calculateNetAmount(){
        this.formData.total = parseFloat(this.formData.net_amount) + parseFloat(this.formData.service_charges);
    },
    calculateTotalDiscount(){
        this.formData.total = parseFloat(this.formData.total) - parseFloat(this.formData.total_discount);

    },
    receivedAndBalance(){
        this.formData.remaining_balance = (parseFloat(this.formData.total) - parseFloat(this.formData.received_amount)).toFixed(2);
    },

    quantityWisePrice(){

        const quantity = this.formData.quantity;
        this.formData.total_rate = (quantity * this.formData.sale_rate).toFixed(2);
        // console.log(quantity * this.formData.purchase_rate);

    },
    editItem(index) {
        // console.log(index);

        const selectedItem = this.addedItems[index];
        console.log(selectedItem);
        this.formData.product_code = selectedItem.id;
        this.formData.product_id = selectedItem.id;
        this.formData.quantity = selectedItem.quantity;
        this.formData.sale_rate = selectedItem.sale_rate;
        this.formData.total_rate = selectedItem.total_rate;
        this.formData.expiry_date = selectedItem.expiry_date;
        this.formData.expiry_alert_days = selectedItem.expiry_alert_days;

        // Optionally, you can remove the selected item from the list when editing
        // this.addedItems.splice(index, 1);
    },

    
    addItem() {
      // Push the form data to the addedItems array
        this.addedItems.push({
        product_code: this.formData.product_code,
        product_name: this.getProductById(this.formData.product_id), // Replace with actual product retrieval logic
        quantity: this.formData.quantity,
        sale_rate: this.formData.sale_rate,
        batch_no: this.formData.batch_no,
        discount: (this.formData.discount) ? this.formData.discount : 0,
        discount_percent: (this.formData.discount_percent) ? this.formData.discount_percent : 0,
        total_rate: this.formData.total_rate,
        desc: this.formData.desc,
        manual_no: this.formData.manual_no,
        vendor_id: this.formData.vendor_id,
        product_id: this.formData.product_id,
        
      });

      this.formData.total_quantity = this.addedItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.formData.net_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.total = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      
      this.formData.total_discount = this.addedItems.reduce((total, item) => total + parseInt(item.discount), 0);
      this.formData.total_items = this.addedItems.length;

      // Clear the form fields after adding the item
      this.formData.product_code = '';
      this.formData.product_id = '';
      this.formData.quantity = '';
      this.formData.purchase_rate = '';
      this.formData.batch_no = '';
      this.formData.discount = undefined;
      this.formData.vendor_address = '';
      this.formData.vendor_code = '';
      this.formData.discount_percent = undefined;
      this.formData.vendor_id = '';
      this.formData.total_rate = '';
      this.formData.desc = '';
      this.formData.manual_no = '';



    },
    removeItem(index) {
    // Remove an item from the addedItems array by index
        this.addedItems.splice(index, 1);
        
      this.formData.total_quantity = this.addedItems.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.formData.net_amount = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      this.formData.total = this.addedItems.reduce((total, item) => total + parseFloat(item.total_rate), 0);
      
      this.formData.total_discount = this.addedItems.reduce((total, item) => total + parseInt(item.discount), 0);
      this.formData.total_items = this.addedItems.length;
        
    },
    getProductById(productId) {
      
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
