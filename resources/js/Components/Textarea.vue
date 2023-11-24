<template>
    <div>
      <textarea
        class="mt-1 border-gray-300 rounded-md shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600 w-full"
        :style="{ height: textareaHeight + 'px' }"
        :value="value"
        @input="handleInput"
        ref="textarea"
        placeholder="Enter text here .."
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
    },
    data() {
      return {
        textareaHeight: 'auto',
      };
    },
    methods: {
      updateValue(newValue) {
        this.$emit('update:value', newValue);
      },
      autoResize() {
        const textarea = this.$refs.textarea;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      },
      handleInput(event) {
        this.updateValue(event.target.value);
        // console.log(event.target.value);
        this.autoResize();
      },
    },
    mounted() {
      this.autoResize(); // Call autoResize on mount to set initial height
    },
  };
  </script>
  