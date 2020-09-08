<template>
  <div class="home">
    <img alt="Konstantine Logo" src="@/assets/logo4.png" />
    <h3>We create and design cool new widgets that help run businesses</h3>
  </div>
</template>

<script>
import analytics from '@/functions/generalFunctions';
export default {
  name: 'Home',
  mounted() {
    analytics.incrementLocalStorageParam('visited_home');
  }
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-color: #eaeaea;
  background-image: url(../assets/home.jpg);
}
</style>
