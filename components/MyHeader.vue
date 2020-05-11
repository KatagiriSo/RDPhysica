<template>
    <div class="myheader">
        <p> {{ score.score }}　問目</p>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useScoreStore } from './ScoreStore';

export default defineComponent({
  setup() {
      const score = useScoreStore();
    
    return {score};
  }
});
</script>


<style scoped>
    .myheader {
        width: 100%;
        height: 60px;
        background-color: mediumturquoise;
        font-size: 21pt;
    }
</style>