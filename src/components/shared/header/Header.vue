<template>
    <v-toolbar dark color="primary" class="header">

      <v-toolbar-title class="white--text font-weight-light display-1 condensed">
        Look After&trade;
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-layout v-if="user" fill-height align-center>
        
        <v-layout column align-end="">
          <span class="caption mx-3"> User: {{user.userName}}</span>
          <span class="caption mx-3"> Registered at: {{user.createdAt}}</span>        
        </v-layout>

        <v-divider vertical dark></v-divider>

        <v-toolbar-items class="mr-0">
          <v-btn @click="$emit('onLogoff')" flat> <v-icon>close</v-icon> Log off</v-btn>
        </v-toolbar-items>
      
      </v-layout>


      <v-toolbar-items v-else>
        <v-btn @click="$emit('onLogin')" flat> Login  </v-btn>
        <v-btn @click="$emit('onSignup')" flat>Create User</v-btn>
        <v-btn @click="$vuetify.goTo('#contact')" flat>Contact Us</v-btn>
      </v-toolbar-items>      

    </v-toolbar>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style scoped>
.header {
  z-index: 999;
}
</style>
