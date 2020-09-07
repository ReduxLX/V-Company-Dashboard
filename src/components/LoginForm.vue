<template>
  <div>
    <b-container fluid>
      <b-row class="mb-0">
        <label for="input-small">Username</label>
        <b-form-input id="input-small" size="sm" v-model="username"></b-form-input>
        <label for="input-small">Password</label>
        <b-form-input type="password" id="input-small" size="sm" v-model="password"></b-form-input>
      </b-row>
    </b-container>
    <p v-if="failedLogin">Invalid Username/Password</p>
    <b-button class="button" variant="dark" @click="login">Login</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: {
    hideModal: Function
  },
  data() {
    return { username: '', password: '', failedLogin: false };
  },
  methods: {
    ...mapActions(['setAuthentication']),
    login() {
      if (this.username == '1' && this.password == '1') {
        this.setAuthentication(true);
        this.hideModal();
        let totalLogins = localStorage.getItem('logins');
        if (totalLogins) {
          localStorage.setItem('logins', parseInt(totalLogins) + 1);
        } else {
          localStorage.setItem('logins', 0);
        }
      } else {
        this.failedLogin = true;
      }
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
</style>
