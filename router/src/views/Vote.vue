<template>
  <div class="vote">
    <h1>This is voting page</h1>
    <VoteOptions :options="options">
      <template #question>
        Co jest najlepsze?
      </template>
      <template v-slot:options="{ option }">
        <CustomVoteOption
          :option="option"
        />
      </template>
    </VoteOptions>
  </div>
</template>

<script>
import VoteOptions from '@/components/VoteOptions.vue';
import CustomVoteOption from '@/components/CustomVoteOption.vue';

export default {
  name: 'Vote',
  components: {
    VoteOptions,
    CustomVoteOption,
  },
};
</script>

