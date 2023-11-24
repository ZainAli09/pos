

<template>
    <Head title="Purchase Report" />

    <AuthenticatedLayout>
        <template #header>
            Purchase Report
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                <div class="flex space-x-4">
                 
                  <div class="w-1/4"> 
                      <InputLabel for="product" value="Product Name" />
                      
                      <select v-model="formData.product_id"  class="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600">
                          <option value="">--Select Product--</option>
                          <option v-for="product in products" :value="product.id">{{ product.name }}</option>
                          
                      </select>
                  </div>
                  <div class="w-1/4"> 
                      <InputLabel for="vendor" value="Vendor Name" />
                      
                      <select v-model="formData.vendor_id"  class="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600">
                          <option value="">--Select Vendor--</option>
                          <option v-for="vendor in vendors" :value="vendor.id">{{ vendor.name }}</option>
                          
                      </select>
                  </div>
                  <div class="w-1/4"> 
                      <InputLabel for="vendor" value="Company" />
                      
                      <select v-model="formData.company_id"  class="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600">
                          <option value="">--Select Company--</option>
                          <option v-for="company in companies" :value="company.id">{{ company.name }}</option>
                          
                      </select>
                  </div>
                  <div class="w-1/4"> 
                      <InputLabel for="vendor" value="Group" />
                      
                      <select v-model="formData.category_id"  class="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600">
                          <option value="">--Select Group--</option>
                          <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
                          
                      </select>
                  </div>
              </div>

                <div class="flex space-x-4">

                    <div class="w-1/4">
                        <InputLabel for="start_date" value="Start Date" />
                        <TextInput
                            id="start_date"
                            ref="start_date"
                        v-model="formData.start_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="start_date"
                        />
                    </div>
                    <div class="w-1/4">
                        <InputLabel for="end_date" value="End Date" />

                        <TextInput
                            id="end_date"
                            ref="end_date"
                            v-model="formData.end_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="end_date"
                        />
                    </div>
                </div>
                
                <PrimaryButton >Search</PrimaryButton>

        
            </form>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';


import { Head, router } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String, companies: Object, products: Object, vendors: Object, categories: Object
    
  },

   components: {
    AuthenticatedLayout,
    InputLabel,
    TextInput,
    Head,
    PrimaryButton,
  },

  data(){

    return {
        formData:{
            start_date:'', 
            end_date:'',
            product_id:'',
            category_id:'', 
            company_id:'', 
            vendor_id:'', 
        }

    }
  },

  methods: {

    submitForm(){
      this.$inertia.get(route('reports.purchaseGet'), this.formData,{
        onSuccess: (resp) =>{
          // this.$inertia.visit(route('expenses.index'));
        }
      });
    }
  },
}
</script>
