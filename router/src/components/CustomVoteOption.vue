<template>
  <li>
    {{ option.name }}
  </li>
</template>

<script>
export default {
  name: 'CustomVoteOption',
  props: {
    option: {
      type: Object,
      required: true,
    }
  },
};
</script>

