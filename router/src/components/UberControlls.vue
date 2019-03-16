<template>
  <div class="hello">
    Żółwiu, zrób ze mnie admina!
    <BaseInput v-model="text" />
    <BaseButton @click="makeAdmin" text="Zrób ze mnie admina" />
  </div>
</template>

<script>
import BaseButton from './common/BaseButton.vue';
import BaseInput from './common/BaseInput.vue';

export default {
  name: 'UberControlls',
  components: {
    BaseButton,
    BaseInput,
  },
  data: () => ({
    text: '',
  }),
  methods: {
    makeAdmin() {
      console.log(this.text);
      localStorage.setItem('admin', 'true');
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
