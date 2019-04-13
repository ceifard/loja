<template>
    <v-toolbar dark color="primary">

      <v-toolbar-title class="white--text font-weight-light display-1 condensed">
        Look After&trade;
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="user">
        <v-btn @click="$emit('onLogoff')" flat>Logoff</v-btn>
        <v-btn @click="$vuetify.goTo('#contact')" flat>Contact Us</v-btn>
      </v-toolbar-items>

      <v-toolbar-items v-else>
        <v-btn @click="$emit('onLogin')" flat>Login</v-btn>
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