

<template>
    <Head title="Account Receivable" />

    <AuthenticatedLayout>
        <template #header>
            Account Receivable
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">

                <div class="flex space-x-4">

                    <div class="w-1/4">
                        <InputLabel for="start_date" value="Start Date" />
                        <TextInput
                            id="start_date"
                            ref="start_date"
                        v-model="this.formData.start_date"
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
                        v-model="this.formData.end_date"
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
    status: String,
    
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
            
        }

    }
  },

  methods: {

    submitForm(){
      this.$inertia.get(route('reports.accountReceiveableGet'), this.formData,{
        onSuccess: (resp) =>{
          // this.$inertia.visit(route('expenses.index'));
        }
      });
    }
  },
}
</script>
