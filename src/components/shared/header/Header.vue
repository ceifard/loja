<template>
    <v-toolbar dark color="primary">

      <v-toolbar-title class="white--text font-weight-light display-1 condensed">
        Look After&trade;
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn @click="$emit('onSignin')" flat>Login</v-btn>
        <v-btn @click="$emit('onSignup')" flat>Sign Up</v-btn>
        <v-btn @click="$vuetify.goTo('#contact')" flat>Contact Us</v-btn>
      </v-toolbar-items>

    </v-toolbar>
</template>