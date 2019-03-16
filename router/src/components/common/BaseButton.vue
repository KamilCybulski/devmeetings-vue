<template>
  <button
    :disabled="isDisabled"
    @click="customClick"
  >
    <span v-if="isLoading">Loading...</span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'PRZYCISKATOR',
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isDisabled() { return this.isLoading || this.$attrs.disabled },
  },
  methods: {
    customClick(event) {
      this.$emit('click', event.target.value);
    },
  },
}
</script>
