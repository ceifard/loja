<template>
  <v-app>

    <header>
      <Header/>
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
  }
}
</script>

<style lang="scss">

</style>

