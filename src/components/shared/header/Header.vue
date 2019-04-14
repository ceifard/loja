<template>
  <div>
    <v-toolbar dark color="primary" class="header" clipped-left>

      <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text font-weight-light display-1 condensed">
        Look After&trade;
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-layout column align-end class="hidden-sm-and-down" fill-height>
        <v-layout v-if="user">
          
          <v-layout column justify-center>
            <span class="caption mx-3"> User: {{user.userName}}</span>
            <span class="caption mx-3"> Registered at: {{user.createdAt}}</span>        
          </v-layout>

          <v-divider vertical dark></v-divider>

          <v-layout column justify-center fill-height>
          <v-toolbar-items class="mr-0">
            <v-btn @click="$emit('onLogoff')" flat> <v-icon>close</v-icon> Log off</v-btn>
          </v-toolbar-items>
          </v-layout>

        
        </v-layout>

        <v-toolbar-items v-else>
          <v-btn @click="$emit('onLogin')" flat> Login  </v-btn>
          <v-btn @click="$emit('onSignup')" flat>Create User</v-btn>
          <v-btn @click="$emit('onScroll')" flat>Contact Us</v-btn>
        </v-toolbar-items>        

      </v-layout>    

    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "200"
      class = "drawer"
    >

     <v-layout column justify-center align-center class="py-3" v-if="user">
       <v-icon large>person_pin</v-icon>
       <h3>{{user.userName}}</h3>
     </v-layout>
    

    <v-divider></v-divider>

    <v-list dense class="pt-0" v-if="user">
      <v-list-tile
      @click="$emit('onLogoff'); drawer=false"
      >
        <v-list-tile-action>
          <v-icon>close</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Log off</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>      
    </v-list>

    <v-list dense class="pt-0" v-else>
      <v-list-tile
      @click="$emit('onLogin'); drawer=false"
      >
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile
      @click="$emit('onSignup'); drawer=false"
      >
        <v-list-tile-action>
          <v-icon>add</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Create user</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile
      @click="$emit('onScroll'); drawer=false"
      >
        <v-list-tile-action>
          <v-icon>phone</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Contact us</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>            
    </v-list>

    </v-navigation-drawer>       
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      drawer: null,
    }
  },
}
</script>

<style scoped>

</style>
