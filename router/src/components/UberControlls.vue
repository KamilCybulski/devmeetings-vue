<template>
  <div class="hello">
    Żółwiu, zrób ze mnie admina!
    <button @click="makeAdmin">Zrób to!</button>
  </div>
</template>

<script>
export default {
  name: 'UberControlls',
  methods: {
    makeAdmin: () => {
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
