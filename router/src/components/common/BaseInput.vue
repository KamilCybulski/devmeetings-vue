<template>
  <label>
    {{ label }}
    <input
      type="type"
      :value="value"
      @input="customInput"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  },
  methods: {
    customInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
