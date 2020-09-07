<template>
  <div class="about">
    <h1>About Konstantine Technologies</h1>
  </div>
</template>

<script>
import analytics from '@/functions/generalFunctions';
export default {
  mounted() {
    analytics.incrementLocalStorageParam('visited_about');
  }
};
</script>
