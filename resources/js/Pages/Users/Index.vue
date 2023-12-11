<template>
  <Head title="Users"/>

  <AuthenticatedLayout>
  <template #header>
    Users
  </template>

  <div class="p-4 bg-white rounded-lg shadow-xs">
    <div class="inline-flex overflow-hidden mb-4 w-full bg-white rounded-lg shadow-md">
      <div class="flex justify-center items-center w-12 bg-blue-500">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
        </svg>
      </div>

      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <span class="font-semibold text-blue-500">Info</span>
          <p class="text-sm text-gray-600">Sample table page</p>
        </div>
      </div>
    </div>

    <div class="overflow-hidden mb-8 w-full rounded-lg border shadow-xs">
      <div class="overflow-x-auto w-full">
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Role</th>
            <th class="px-4 py-3">Permissions</th>

            <th class="px-4 py-3">Action</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y">
            <tr v-for="user in users.data" :key="user.id" class="text-gray-700">
              <td class="px-4 py-3 text-sm">
                {{ user.name }}
              </td>
              <td class="px-4 py-3 text-sm">
                {{ user.email }}
              </td>
              <td  class="px-4 py-3 text-sm">
                <template v-for="role in user.roles">
                  {{ role.name }} <br>
                </template>
                
              </td>
              
              <td  class="px-4 py-3 text-sm">
                <template v-for="role in user.roles">
                 
                  <template v-for="permission in role.permissions">
                    {{ permission.name }} ,
                  </template>
                
                </template>
                
              </td>
              <td class="px-4 py-3 text-sm">
                <PrimaryButton @click="handleAssignRoleClick(user)" >Assign/Change Role</PrimaryButton>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
          class="px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9">
        <pagination :links="users.links" />
      </div>
    </div>
  </div>
  <Modal :show="confirmingUserDeletion" @close="confirmingUserDeletion = false">
      <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900">
              Edit Role of {{ usernameForModal }}
          </h2>         
          <div class="mt-6 w-full flex justify-start w-1/1">
                <select name=""  v-model="FormData.role_id"
                  class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
                  id="">
                  <option value="">-Select Role-</option>
                  <option v-for="role in roles" :value="role.id">{{ role.name }}</option>
                </select>
          </div>
      </div>
      <div class="p-5">
        <DangerButton  @click="changeRole" >Change Role</DangerButton>

      </div>
  </Modal>
  </AuthenticatedLayout>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import { Head } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DangerButton from '@/Components/DangerButton.vue';

import Modal from '@/Components/Modal.vue';
import { ref } from 'vue'





export default{
  props:{
    users: Object, roles: Object

  },
  components:{
    AuthenticatedLayout, Pagination, Head, PrimaryButton, Modal, DangerButton
  },
  data(){
      return{
        FormData:{
          userName:'',
          role_id:'',
         
        }
      }
  },
 
  methods:{
    changeRole(){
      const data = {
        user_id: this.userIdForModal, 
        role_id:this.FormData.role_id,
        
      };

      axios.patch('/update/role', data)
        .then(response => {
          // Handle the response data here
          this.confirmingUserDeletion = false;
          console.log(response.data);
        })
        .catch(error => {
          // Handle errors here
          console.error(error);
        });
    }
  },
  setup() {
    let confirmingUserDeletion = ref(false);
    let usernameForModal = ref('');
    let userIdForModal = ref('');

    const handleAssignRoleClick = (user) => {
      const userName = user.name;
      const userId= user.id;
      usernameForModal.value = userName;
      userIdForModal.value = userId;
      confirmingUserDeletion.value = true;
    };

    return {
      confirmingUserDeletion,
      handleAssignRoleClick,
      usernameForModal, userIdForModal
    };
  },
}

</script>
