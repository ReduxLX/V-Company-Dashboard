<template>
  <div class="home">
    <img alt="Konstantine Logo" src="@/assets/logo4.png" />
    <h3>We create and design cool new widgets that help run businesses</h3>
    <div>
      <b-button href="https://github.com/ReduxLX" variant="success" squared>GitHub</b-button>
      <b-button
        href="https://www.linkedin.com/in/alfons-fernaldy"
        variant="primary"
        squared
      >LinkedIn</b-button>
      <b-button
        href="https://media-exp1.licdn.com/dms/document/C562DAQElfHQigvwcvg/profile-treasury-document-pdf-analyzed/0?e=1599663600&v=beta&t=4UFGIl_22eW1l0adKt2BhjXs_-CTMKDTr19GXRlFC-A"
        variant="dark"
        squared
      >Resume</b-button>
    </div>
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
  padding-top: 15vh;
  padding-bottom: 10vh;
  background-color: #eaeaea;
  background-image: url(../assets/home.jpg);
}
.btn {
  margin: auto 30px;
  width: 15%;
}

.deck {
  width: 50%;
  justify-content: center;
  margin: auto auto;
}
</style>
