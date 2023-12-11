<template>
    <button @click="deleteItem"><svg style="color: red;" class="w-[21px] h-[21px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
  </svg> </button>
  </template>
  
  <script>
  export default {
    props: {
      model: String, // Name of the model (e.g., 'user')
      id: Number,    // ID of the model to be deleted
    },
    methods: {
      deleteItem() {
        if (confirm(`Are you sure you want to delete this ${this.model}?`)) {
          // Make an Inertia request to delete the model by ID
          this.$inertia.delete(`/delete/${this.model}/${this.id}`);
        }
      },
    },
  };
  </script>
  