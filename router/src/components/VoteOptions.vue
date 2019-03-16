<template>
  <div>
    <slot name="question">Jaki jest sens życia</slot>
    <slot
      v-for="option in options"
      name="options"
      :option="option"
    />
  </div>
</template>

<script>
const OPTIONS = [
  { id: 1, name: 'Śliwki' },
  { id: 2, name: 'Łopaty' },
  { id: 3, name: 'Kilofy!' },
  { id: 4, name: 'ALL THE THINGZ' },
];

export default {
  name: 'VoteOptions',
  data: () => ({
    options: OPTIONS,
  }),
};
</script>

