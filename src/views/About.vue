<template>
  <div class="about">
    <div>
      <br />
      <h1>About Konstantine Technologies</h1>
      <div class="text">
        <p>
          Konstantine Technologies dates back to one late Friday evening after its creator, Alfons Fernaldy, finished
          eating some delicious fruits
        </p>
        <p>
          He decided to do something productive over the weekend other
          than watching Youtube videos and so started learning the Javascript framework Vue.js
        </p>
        <hr class="hr" />
        <p>This webapp is the result of those 2 days</p>
        <b-button variant="success" href="https://github.com/ReduxLX/V-Dashboard">GitHub Source Code</b-button>
        <hr class="hr" />
      </div>
      <p>Our products are created, designed and implemented using the following technologies</p>
      <b-list-group class="list">
        <b-list-group-item href="https://vuejs.org/" variant="success">Vue 2.6.12</b-list-group-item>
        <b-list-group-item href="https://bootstrap-vue.org/" variant="warning">Vue Bootstrap</b-list-group-item>
        <b-list-group-item href="https://vuex.vuejs.org/" variant="info">Vuex State Management</b-list-group-item>
        <b-list-group-item href="https://router.vuejs.org/" variant="secondary">Vue Routing</b-list-group-item>
        <b-list-group-item
          href="https://github.com/vuejs/vue-devtools"
          variant="danger"
        >Vue Devtools</b-list-group-item>
      </b-list-group>
      <br />
    </div>
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

<style scoped>
.about {
  min-height: 100vh;
  padding-bottom: 20px;
  background-color: #343a40;
  color: white;
}
.text {
  width: 50%;
  margin: auto;
}
.list {
  width: 50%;
  margin: auto;
}
.button {
  margin: auto;
  margin-top: 10px;
  display: block;
}
.hr {
  border: 1px solid gold;
}
</style>

