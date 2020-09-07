<template>
  <div class="about">
    <div>
      <h1>About Konstantine Technologies</h1>
      <div class="text">
        <p>
          Konstantine Technologies dates back to one late Friday evening after its creator, Alfons Fernaldy, finished
          eating some delicious fruits.
        </p>
        <p>
          He decided to do something productive over the weekend other
          than watching Youtube videos and so started learning the Vue.js framework over the weeekend
        </p>
        <p>This is the result of those 2 days.</p>
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
      <br />
      <br />
      <p>| Copyright Konstantine Technologies 2020 |</p>
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
  margin: 20px 0px;
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
.text-center {
  text-align: center;
}
</style>

