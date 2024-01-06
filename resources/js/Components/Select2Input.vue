<template>
  <select
  class="mt-1 border-gray-300 rounded-md shadow-sm  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"

    ref="select2"
  ></select>
</template>

<script>
import 'jquery'; // Import jQuery
import 'select2'; // Import Select2
import 'select2/dist/css/select2.min.css'; // Import Select2 styles

export default {
  props: ['options', 'value'],
 mounted() {
  const $select2 = $(this.$refs.select2);

  // Initialize Select2
  $select2.select2({
    data: this.options,
  });

  // Watch for changes in the prop 'value'
  this.$watch('value', (newValue) => {
    $select2.val(newValue).trigger('change');
  });

  // Listen for the 'change' event and emit 'input' event
  $select2.on('change', () => {
  const selectedValue = $select2.val();
  this.$emit('input', selectedValue);
  this.$emit('change', selectedValue);
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
