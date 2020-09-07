<template>
  <div class="text-center">
    <p>Are you sure you want to log out?</p>
    <b-button class="button" variant="danger" @click="logout">Logout</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: {
    hideModal: Function
  },
  methods: {
    ...mapActions(['setAuthentication']),
    logout() {
      this.setAuthentication(false);
      this.hideModal();
    }
  },
  computed: {
    ...mapState(['authenticated'])
  }
};
</script>

<style scoped>
.button {
  margin: auto;
  margin-top: 10px;
  display: block;
}
.text-center {
  text-align: center;
}
</style>
