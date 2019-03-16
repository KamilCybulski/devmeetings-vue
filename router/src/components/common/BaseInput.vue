<template>
  <label>
    <input
      type="type"
      @input="customInput"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
  methods: {
    customInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
