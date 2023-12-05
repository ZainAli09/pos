

<template>
    <Head title="Cash Payment Voucher" />

    <AuthenticatedLayout>
        <template #header>
            Cash Payment Voucher
        </template>
        
        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                <div class="flex space-x-4">
                    <div class="w-1/3">
                        <InputLabel for="voucher_date" value="Voucher Date" />
                        <TextInput
                            id="voucher_date"
                            ref="voucher_date"
                            v-model="formData.voucher_date"
                            type="date"
                            class="mt-1 block w-full"
                            autocomplete="voucher_date"
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
                            autocomplete="account_no"
                        />
                    </div>
                    
                    <div class="w-1/3">
                        <InputLabel for="stakeholder_id" value="Account Name" />
                        <select v-model="formData.stakeholder_id" 
                       @change="updateStakeholderType"
                        class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600">
                            
                            <!-- <option v-for="stakeholder in stakeholders"  >{{ vendor.name }}</option> -->
                            <option >-- Select an Account --</option>
                            
                            <option
                                v-for="stakeholder in flattenedStakeholders"
                                :value="stakeholder.id"
                                :data-type="stakeholder.type"
                                :key="stakeholder.id"
                                
                            >
                            
                                {{ stakeholder.name +' / '+ stakeholder.type}}
                            </option>

                           
                        </select>
                    </div>
                    <!-- {{ flattenedStakeholders }} -->
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
            
            <div  class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
                    <div class="overflow-x-auto w-full">
                        <table class="w-full whitespace-no-wrap">
                            <thead>
                                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                                    <th class="px-4 py-3">Sr</th>
                                    <th class="px-4 py-3">Voucher Date</th>
                                    <th class="px-4 py-3">Voucher For</th>
                                    <th class="px-4 py-3">Description</th>
                                    <th class="px-4 py-3">Amount</th>
                                    <th class="px-4 py-3">Action</th>                                   
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y">
                        
                                <tr class="text-gray-700" v-for="(paymentVoucher,index) in paymentVouchers " >
                                    <td class="px-4 py-3 text-sm">{{index+1}}</td>
                                    <td class="px-4 py-3 text-sm">{{paymentVoucher.voucher_date}}</td>
                                    <td class="px-4 py-3 text-sm">{{paymentVoucher.stakeholder.stakeholder.name}}</td>
                                    <td class="px-4 py-3 text-sm">{{paymentVoucher.desc}}</td>
                                    <td class="px-4 py-3 text-sm">{{paymentVoucher.total_amount}}</td>
                                    <td v-if="$page.props.user.permissions.includes('delete.records')" class="px-4 py-3 text-sm"><DeleteButton :model="'CashPaymentVoucher'" :id="paymentVoucher.id"></DeleteButton></td>
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

// import Textarea from '@/Components/Textarea.vue';

import PrimaryButton from '@/Components/PrimaryButton.vue';


import { Head, router } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    stakeholders: Object,
    paymentVouchers: Object
    
  },

   components: {
    AuthenticatedLayout,
    InputLabel,
    TextInput, 
    // Textarea,
    Head,
    PrimaryButton,
    DeleteButton
  },

  data(){

    return {
        formData:{
            stakeholder_id :'',
            voucher_date:'',
            account_no:'',
            desc:'',
            total_amount:'',
            stakeholder_type:''
            

        },
        

    }
  },
  computed: {
    flattenedStakeholders() {
      return this.stakeholders.reduce((flattened, stakeholderGroup) => {
        return flattened.concat(stakeholderGroup.data.map(stakeholder => ({
          id: stakeholder.id,
          type: stakeholderGroup.type,
          name: stakeholder.name,
        })));
      }, []);
    },
  },

  methods: {
    updateStakeholderType(event){
        const selectedIndex = event.target.selectedIndex;

        this.formData.stakeholder_type = event.target.options[selectedIndex].getAttribute('data-type');
    },
    submitForm() {
      this.$inertia.post(route('cashpaymentvouchers.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('cashpaymentvouchers.create'));
        }
      });
    }
  },

}
</script>
