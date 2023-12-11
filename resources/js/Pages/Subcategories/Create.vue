

<template>
    <Head title="Sub Categories" />

    <AuthenticatedLayout>
        <template #header>
            Sub-Categories
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                <InputLabel for="name" value="Sub-Category Name" />

                <TextInput
                    id="name"
                    ref="name"
                   v-model="formData.name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="name"
                />

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
            name: '',
        }

    }
  },

  methods: {
    submitForm() {
      this.$inertia.post(route('subcategories.store'), this.formData, {
        onSuccess: () => {
          // Redirect to the index page using Inertia's visit method
          this.$inertia.visit(route('subcategories.index'));
        }
      });
    }
  },

}
</script>
