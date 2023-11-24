

<template>
    <Head title="Employees" />

    <AuthenticatedLayout>
        <template #header>
            Employees
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">

                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    ref="name"
                   v-model="formData.name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="name"
                />

                <InputLabel for="reference_no" value="Reference No" />

                <TextInput
                    id="reference_no"
                    ref="reference_no"
                   v-model="formData.reference_no"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="reference_no"
                />

                <InputLabel for="contact_no" value="Contact No" />

                <TextInput
                    id="contact_no"
                    ref="contact_no"
                    v-model="formData.contact_no"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="contact_no"
                />

                <InputLabel for="cnic" value="NIC No" />

                <TextInput
                    id="cnic"
                    ref="cnic"
                    v-model="formData.cnic"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="cnic"
                />

                <InputLabel for="city" value="City" />

                <!-- <TextInput
                    id="city"
                    ref="city"
                    v-model="formData.city"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="city"
                /> -->
                <select v-model="formData.city_id" id=""
                    class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
                 >
                    <option value="">Select option</option>
                    <option v-for="(city, key) in cities" :value="city.id">{{ city.name }}</option>
                </select>

                <InputLabel for="address" value="Address" />


                <!-- <Textarea  :value="formData.address" /> -->

                <textarea v-model="formData.address" 
                
                        class="mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600 w-full" id="" cols="30" rows="10">Enter text here..
                </textarea>
                

                <PrimaryButton >Save</PrimaryButton>

                <!-- <input type="text" id="name"  class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"/> -->
        
                
        
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


import { Head, router } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    cities: Object

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
            name: '',
            reference_no: '',
            contact_no:'',
            city_id:'', 
            address:'', 
            cnic: '',
        }

    }
  },

  methods: {
    submitForm() {
      this.$inertia.post(route('employees.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('employees.index'));
        }
      });
    }
  },

}
</script>
