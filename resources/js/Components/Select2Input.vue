<template>
  <select 
  class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
  ref="select2"></select>
</template>
<script>

export default {
  props: ['options', 'value'],
  mounted() {
    const $select2 = $(this.$refs.select2);

    $select2.select2({
      data: this.options,
    });

    $select2.on('change', () => {
      this.$emit('input', $select2.val());
    });
   

    // Set the initial value
    $select2.val(this.value).trigger('change');
  },
  watch: {
    options(newOptions) {
      // Update Select2 options when the prop changes
      const $select2 = $(this.$refs.select2);
      $select2.empty().select2({ data: newOptions });
      $select2.val(this.value).trigger('change');
    },
  },
  
};
</script>
