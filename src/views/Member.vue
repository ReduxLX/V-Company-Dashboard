<template>
  <div class="member">
    <h1>Welcome to the Member only Zone</h1>
  </div>
</template>

<script>
import analytics from '@/functions/generalFunctions';
export default {
  mounted() {
    analytics.incrementLocalStorageParam('visited_member');
  }
};
</script>
