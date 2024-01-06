

<template>
    <Head title="Cash Received Voucher" />

    <AuthenticatedLayout>
        <template #header>
            Cash Received Voucher
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                <div class="flex space-x-4">
                    <div class="w-1/3">
                        <InputLabel for="sale_date" value="Voucher Date" />
                        <TextInput
                            id="sale_date"
                            ref="sale_date"
                            v-model="formData.sale_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="sale_date"
                        />
                    </div>

                    <div class="w-1/3">
                        <InputLabel for="account_no" value="A/C No" />
                        <TextInput
                            id="account_no"
                            ref="account_no"
                            v-model="formData.account_no"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="account_no" readonly
                        />
                    </div>
                    
                    <div class="w-1/3">
                        <InputLabel for="customer_id" value="Customer Name" />
                        <Select2Input :options="customers" 
                        @change="getCustomerDetails($event)" v-model="formData.customer_id" 
                        style="width: -webkit-fill-available;" />
                        
                    </div>
                    <div class="w-1/3">
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
                    <div class="w-1/3">
                        <InputLabel for="total_amount" value="Amount" />
                        <TextInput
                            id="total_amount"
                            ref="total_amount"
                            v-model="formData.total_amount"
                            type="number" step="0.01"
                            class="mt-1 block w-full"
                            autocomplete="total_amount"
                        />
                    </div>
                </div>
                <PrimaryButton >Save</PrimaryButton>
            </form><br />
            
            <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                    <div class="overflow-x-auto w-full">
                        <table class="w-full whitespace-no-wrap">
                            <thead>
                                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                                    <th class="px-4 py-3">Sr</th>
                                    <th class="px-4 py-3">Voucher Date</th>
                                    <th class="px-4 py-3">Customer Name</th>
                                    <th class="px-4 py-3">Description</th>
                                    <th class="px-4 py-3">Amount</th>
                                    <th class="px-4 py-3">Action</th>

                                   
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y">
                        
                                <tr class="text-gray-700" v-for="(receivedVoucher,index) in receivedVouchers " >
                                    <td class="px-4 py-3 text-sm">{{index+1}}</td>
                                    <td class="px-4 py-3 text-sm">{{receivedVoucher.sale_date}}</td>
                                    <td class="px-4 py-3 text-sm">{{receivedVoucher.customer.name}}</td>
                                    <td class="px-4 py-3 text-sm">{{receivedVoucher.desc}}</td>
                                    <td class="px-4 py-3 text-sm">{{receivedVoucher.total_amount}}</td>
                                    <td v-if="$page.props.user.permissions.includes('delete.records')" class="px-4 py-3 text-sm"><DeleteButton :model="'CashReceivedVoucher'" :id="receivedVoucher.id"></DeleteButton></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import DeleteButton from '@/Components/DeleteButton.vue';
import Select2Input from '@/Components/Select2Input.vue';


// import Textarea from '@/Components/Textarea.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';


import { Head } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    customers: Object,
    receivedVouchers: Object
    
  },

   components: {
    AuthenticatedLayout,
    InputLabel,
    TextInput, 
    Select2Input,
    Head,
    PrimaryButton,
    DeleteButton
  },

  data(){

    return {
        formData:{
            customer_id :'',
            sale_date:'',
            account_no:'',
            desc:'',
            total_amount:''
            

        }

    }
  },

  methods: {
    getCustomerDetails(id){
        const customerdetails = this.customers.find((customer) => customer.id === parseInt(id));
      if (customerdetails) {
        this.formData.account_no = customerdetails.id;
        this.formData.customer_id = customerdetails.id;

      } else {
        
        
        this.formData.account_no = '';
        this.formData.customer_id = '';
      }
       
    },
    
    submitForm() {
      this.$inertia.post(route('cashreceivedvouchers.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('cashreceivedvouchers.create'));
        }
      });
    }
  },
  

}
</script>
