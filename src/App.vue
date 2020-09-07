<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Products" left>
              <b-dropdown-item to="/employees">Employee Database</b-dropdown-item>
              <b-dropdown-item to="/calculator">Calculator</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/about">About Us</b-nav-item>
            <b-nav-item to="/member" @click="makeToast('danger')">Members Only</b-nav-item>
          </ul>
        </div>
        <div class="navbar-collapse">
          <ul class="navbar-nav ml-auto"></ul>
          <div>
            <b-button v-show="!authenticated" v-b-modal.loginModal variant="success">Login</b-button>
            <b-button v-show="authenticated" v-b-modal.logoutModal variant="danger">Logout</b-button>
            <b-modal
              id="loginModal"
              title="Login as Administrator"
              headerBgVariant="dark"
              header-text-variant="white"
              v-model="showLoginModal"
              hide-footer
            >
              <LoginForm :hideModal="toggleLoginModal" />
            </b-modal>
            <b-modal
              id="logoutModal"
              title="Logout"
              headerBgVariant="dark"
              header-text-variant="white"
              v-model="showLogoutModal"
              hide-footer
            >
              <LogoutConfirm :hideModal="toggleLogoutModal" />
            </b-modal>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoginForm from '@/components/LoginForm';
import LogoutConfirm from '@/components/LogoutConfirm';
export default {
  data() {
    return {
      showLoginModal: false,
      showLogoutModal: false
    };
  },
  components: {
    LoginForm,
    LogoutConfirm
  },
  computed: {
    ...mapState(['authenticated'])
  },
  methods: {
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    toggleLogoutModal() {
      this.showLogoutModal = !this.showLogoutModal;
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Login required to access Members Only area', {
        title: 'Access Denied',
        variant: variant,
        solid: true
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: purple;
    }
  }
}
</style>
