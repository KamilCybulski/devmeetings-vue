<template>
  <div class="hello">
    Żółwiu, zrób ze mnie admina!
    <BaseInput v-model="text" label="Super input" />
    <BaseButton @click="setAdmin" :isLoading="isLoadingStuff">
      Zrób ze mnie admina
    </BaseButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import { BaseButton, BaseInput } from '@/components/common';

export default {
  name: 'UberControlls',
  components: {
    BaseButton,
    BaseInput,
  },
  data: () => ({
    text: 'buzia',
    isLoadingStuff: false,
  }),
  methods: {
    ...mapActions('user', [ 'setAdmin' ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  width: 200px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
