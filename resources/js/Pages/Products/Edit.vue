

<template>
    <Head title="Product" />

    <AuthenticatedLayout>
        <template #header>
            Edit {{ product.name }} 
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                <div class="flex space-x-4">
                    <div class="w-1/3">
                        <InputLabel for="company" value="Company Name" />
                        <select v-model="formData.company_id" id=""
                            class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
                        >
                            <option value="">Select option</option>
                            <option v-for="(company, key) in companies" :value="company.id">{{ company.name }}</option>
                        </select>
                    </div>
                    <div class="w-1/3">
                        <InputLabel for="category" value="Group Name" />
                        <select v-model="formData.category_id" id=""
                            class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
                        >
                            <option value="">Select option</option>
                            <option v-for="(category, key) in categories" :value="category.id">{{ category.name }}</option>
                        </select>
                    </div>
                    <div class="w-1/3">
                        <InputLabel for="category" value="Sub Group" />
                        <select v-model="formData.subcategory_id" id=""
                            class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
                        >
                            <option value="">Select option</option>
                            <option v-for="(subcategory, key) in subcategories" :value="subcategory.id">{{ subcategory.name }}</option>
                        </select>
                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/2">
                        <InputLabel for="name" value="Product Name" />
                        <TextInput
                            id="name"
                            ref="name"
                        v-model="formData.name"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="name"
                        />
                    </div>
                    <div class="w-1/2">
                        <InputLabel for="product_name_two" value="Product Name 2" />
                        <TextInput
                            id="product_name_two"
                            ref="product_name_two"
                            v-model="formData.product_name_two"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="product_name_two"
                        />
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="w-1/3">

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
                    <div class="w-1/3">

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
                    <div class="w-1/3">

                        <InputLabel for="whole_sale_rate" value="W/S Rate" />
                        <TextInput
                            id="whole_sale_rate"
                            ref="whole_sale_rate"
                            v-model="formData.whole_sale_rate"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="whole_sale_rate"
                        />
                    </div>
                </div>
                <div class="flex space-x-4">
                    <div class="w-1/3">
                        <InputLabel for="discount_percent" value="Discount_percent %" />

                        <TextInput
                            id="discount_percent"
                            ref="discount_percent"
                            v-model="formData.discount_percent"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="discount_percent"
                        />
                    </div>
                    <div class="w-1/3">
                        <InputLabel for="discount" value="Discount" />
                        <TextInput
                            id="discount"
                            ref="discount"
                            v-model="formData.discount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="discount"
                        />
                    </div>
                    <div class="w-1/3">
                        <InputLabel for="rack_no" value="Rack No" />
                        <TextInput
                            id="rack_no"
                            ref="rack_no"
                            v-model="formData.rack_no"
                            type="number" 
                            class="mt-1 block w-full"
                            autocomplete="rack_no"
                        />
                    </div>
                </div>

                <div class="flex space-x-4">
                    <div class="w-1/3">
                        <InputLabel for="expiry_date" value="Expiry Date" />

                        <TextInput
                            id="expiry_date"
                            ref="expiry_date"
                            v-model="formData.expiry_date"
                            type="date" 
                            class="mt-1 block w-full"
                            autocomplete="expiry_date"
                        />
                    </div>
                    <div class="w-1/3">
               
                        <InputLabel for="expiry_alert_days" value="Expiry Alert Days" />

                        <TextInput
                            id="expiry_alert_days"
                            ref="expiry_alert_days"
                            v-model="formData.expiry_alert_days"
                            type="number" 
                            class="mt-1 block w-full"
                            autocomplete="expiry_alert_days"
                        />
                    </div>
                    <div class="w-1/3">
               
               <InputLabel for="batch_no" value="Batch No" />

               <TextInput
                   id="batch_no"
                   ref="batch_no"
                   v-model="formData.batch_no"
                   type="number" 
                   class="mt-1 block w-full"
                   autocomplete="batch_no"
               />
           </div>
                </div>
                <div class="flex space-x-4">
                    <div class="w-1/2">
                        <InputLabel for="barcode" value="Barcode / Scanner" />
                        <TextInput
                            id="barcode"
                            ref="barcode"
                            v-model="formData.barcode"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="barcode"
                        />
                    </div>
                    <div class="w-1/2">
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
                </div>

                <PrimaryButton >Update</PrimaryButton>

            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
// import Textarea from '@/Components/Textarea.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';


import { Head } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    companies: Object,
    categories: Object,
    subcategories: Object,
    product: Object



  },

   components: {
    AuthenticatedLayout,
    InputLabel,
    TextInput, 
    // Textarea,
    Head,
    PrimaryButton,
  },

  data(){

    return {
        formData:{
            company_id :this.product.company_id,
            category_id:this.product.category_id,
            subcategory_id:this.product.subcategory_id,
            name:this.product.name,
            product_name_two:this.product.product_name_two,
            desc:this.product.desc,
            purchase_rate:this.product.purchase_rate,
            sale_rate:this.product.sale_rate,
            whole_sale_rate:this.product.whole_sale_rate,
            discount:this.product.discount,
            discount_percent:this.product.discount_percent,
            rack_no:this.product.rack_no,
            expiry_date:this.product.expiry_date,
            expiry_alert_days:this.product.expiry_alert_days,
            batch_no:this.product.batch_no

        }

    }
  },

  methods: {
    submitForm() {
      this.$inertia.put(route('products.update', { id: this.product.id }), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('products.index'));
        }
      });
    }
  },

}
</script>
