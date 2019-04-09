<template>
    <v-toolbar dark color="primary">

      <v-toolbar-title class="white--text font-weight-thin display-1 condensed">
      <v-avatar :size="30" class="avatar-lookafter">
        <img src="@/../static/img/avatar/diapers.png" alt="avatar">
      </v-avatar>        
        Look After&trade;
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat>Login</v-btn>
        <v-btn flat>Sign Up</v-btn>
        <v-btn flat>About Us</v-btn>
      </v-toolbar-items>

    </v-toolbar>
</template>

<style lang="scss" scoped>
.avatar-lookafter {
  margin-top: -8px;
}
</style>
