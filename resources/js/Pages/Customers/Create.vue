

<template>
    <Head title="Customers" />

    <AuthenticatedLayout>
        <template #header>
            Customers
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

                
                <InputLabel for="contact_no" value="Contact No" />

                <TextInput
                    id="contact_no"
                    ref="contact_no"
                    v-model="formData.contact_no"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="contact_no"
                />

                <InputLabel for="mobile_no" value="Mobile No" />

                <TextInput
                    id="mobile_no"
                    ref="mobile_no"
                    v-model="formData.mobile_no"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="mobile_no"
                />


                
                <InputLabel for="zone_id" value="Zone Name" />

                
                <select v-model="formData.zone_id" id=""
                    class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
                 >
                    <option value="">Select option</option>
                    <option v-for="(zone, key) in zones" :value="zone.id">{{ zone.name }}</option>
                </select>

                <InputLabel for="city" value="City" />

                
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
    cities: Object,
    zones: Object

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
            contact_no:'',
            mobile_no:'',
            city_id:'', 
            address:'', 
            zone_id:'',
        }

    }
  },

  methods: {
    submitForm() {
      this.$inertia.post(route('customers.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('customers.index'));
        }
      });
    }
  },

}
</script>
