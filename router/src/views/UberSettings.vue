<template>
  <div class="uber-settings">
    <h1>To jest tajna strona super admina</h1>
    <UberControlls />
  </div>
</template>

<script>
import UberControlls from '@/components/UberControlls.vue';

export default {
  name: 'uber-settings',
  components: {
    UberControlls,
  },
};
</script>
