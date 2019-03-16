<template>
  <div class="hello">
    Żółwiu, zrób ze mnie admina!
    <BaseInput v-model="text" label="Super input" />
    <BaseButton @click="makeAdmin" text="Zrób ze mnie admina" :isLoading="isLoadingStuff" />
  </div>
</template>

<script>
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
    makeAdmin() {
      console.log(this.text);
      this.isLoadingStuff = true;
      setTimeout(() => {
        localStorage.setItem('admin', 'true');
        this.isLoadingStuff = false;
      }, 1000);
    },
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
