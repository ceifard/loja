<template>
  <v-app>

    <header>
      <Header 
        @onSignup="showSignupDialog()" 
        @onLogin="showLoginDialog()"
        @onLogoff="logoff()"
        @onScroll="scroll()"
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
    closeDialogs() {
      this.$store.commit('login/dialogShowing', false)
      this.$store.commit('signup/dialogShowing', false)      
    },
    showSignupDialog() {
      this.closeDialogs();
      this.$store.commit('signup/dialogShowing', true)
    },    
    showLoginDialog() {
      this.closeDialogs();
      this.$store.commit('login/dialogShowing', true)
    },
    scroll() {
      this.closeDialogs();
      this.$vuetify.goTo('#contact');
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

