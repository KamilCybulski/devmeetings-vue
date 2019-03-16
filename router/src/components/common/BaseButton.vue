<template>
  <button
    :disabled="isDisabled"
    @click="customClick"
  >
    <span v-if="isLoading">Loading...</span>
    <slot v-else>Siema</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isDisabled() { return this.isLoading || this.$attrs.disabled; },
  },
  methods: {
    customClick(event) {
      this.$emit('click', event.target.value);
    },
  },
};
</script>
