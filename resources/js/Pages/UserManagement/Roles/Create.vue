

<template>
    <Head title="Roles" />

    <AuthenticatedLayout>
        <template #header>
            Roles
        </template>

        <div>
            <form @submit.prevent="submitForm" class="mt-6 space-y-6">
                <InputLabel for="name" value="Role Name" />

                <TextInput
                    id="name"
                    ref="name"
                   v-model="formData.name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="name"
                />

                <h2>Permissions</h2>
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="(permission, index) in permissions" class="w-1/2">
                        <InputLabel  :value=permission.name />
                        <TextInput
                            :value="permission.name"
                            id="permissions"
                            ref="permissions"
                            v-model="formData.permissions[index]"
                            type="checkbox"
                            class=""
                            autocomplete="permissions"
                        />
                    </div>
                </div>
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


import { Head } from '@inertiajs/vue3';

export default {
  props: {
    mustVerifyEmail: Boolean,
    status: String,
    permissions: Object
  },

   components: {
    AuthenticatedLayout,
    InputLabel,
    TextInput,
    Head,
    PrimaryButton,
  },

  data(){
    return{ 
      formData: {
        name:'',
        permissions:[]
      }
    };
  },  

  methods: {

    submitForm(){
        this.$inertia.post(route('roles.store'), this.formData,{
          onSuccess: (response)=>{
            this.$inertia.visit('roles.index');
          }
        });
    }
  },
}
</script>
