

<template>
    <Head title="Expenses" />

    <AuthenticatedLayout>
        <template #header>
            Expenses
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

                <PrimaryButton >Save</PrimaryButton>

        
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
            name: '', reference_no: ''
        }

    }
  },

  methods: {

    submitForm(){
      this.$inertia.post(route('expenses.store'), this.formData,{
        onSuccess: (resp) =>{
          this.$inertia.visit(route('expenses.index'));
        }
      });
    }
  },
}
</script>
