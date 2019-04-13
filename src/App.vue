<template>
  <v-app>

    <header>
      <Header 
        @onSignup="showSignupDialog()" 
        @onLogin="showLoginDialog()"
        @onLogoff="logoff()"
        :user="this.$store.getters.userLogged"
      />
    </header>

    <main>
      <v-content>
        <router-view></router-view>
      </v-content>      
    </main>

  </v-app>
</template>

<script>

import Header from './components/shared/header/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    showSignupDialog() {
      this.$store.commit('signup/dialogShowing', true)
    },    
    showLoginDialog() {
      this.$store.commit('login/dialogShowing', true)
    },
    logoff() {
      this.$store.commit('userLogged', null);
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
  html, body {
    background: #ccc;
    overflow: inherit;
  }
</style>

