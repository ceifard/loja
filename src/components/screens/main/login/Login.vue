<template>
  <v-layout row justify-center v-if="dialogShowing">
    <v-dialog v-model="dialogShowing" persistent max-width="600px">
      <v-card>

        <v-card-title>
          <span class="title grey--text text--darken-2"> <v-icon>send</v-icon> Login</span>
        </v-card-title>

        <v-divider></v-divider>
        
        <v-form ref="form">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field prepend-icon="mail"
                                label="Email*" 
                                :rules="emailRules" 
                                v-model="email">
                  </v-text-field>
                </v-flex>              
                <v-flex xs12>
                  <v-text-field prepend-icon="lock"
                                label="Password*" 
                                :rules="passwordRules" 
                                v-model="password" 
                                type="password" 
                                autocomplete="new-password">
                  </v-text-field>
                </v-flex>
                <v-flex xs12 v-if="!!message.text">
                  <v-alert
                    :value="true"
                    :type="message.type"
                    transition="fade-transition"
                  >
                    {{message.text}}
                  </v-alert>
                </v-flex>                
              </v-layout>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" :disabled="!!$store.getters.loading" @click="closeModal()"><v-icon>close</v-icon> Close</v-btn>
            <v-btn color="secondary" :disabled="!!$store.getters.loading || !!userLogged" @click="login()"><v-icon class="mr-2 my-1">send</v-icon> Send</v-btn>
            <v-progress-circular
              indeterminate
              color="primary"
              class="mx-2"
              v-if="$store.getters.loading"
            ></v-progress-circular>             
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

  import {ModelLogin} from './ModelLogin'

  export default {
    created() {
      //store a raw copy of user
      this.userRaw = {...this.user}
    },
    data() {
      return {
        userRaw: {},     
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must have a @ and a dot'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
        ],                            
      }
    },
    mixins: [ModelLogin],   
    computed: {
      message: {
        get() {
          return this.$store.getters.message
        },
        set(value) {
          this.$store.commit('message', value);
        }
      },
      userLogged() {
        return this.$store.getters.userLogged;
      }
    },
    methods: {
      closeModal() {
        //clean the user, using the raw copy stored on created
        this.user = {...this.userRaw}
        this.dialogShowing = false
      },
      login() {
        if (!this.$refs.form.validate()) {
          return false
        } 
        this.$store.commit('loading', true)       
        this.$store.dispatch('login/login').then( user => {
          if(user) {
            this.$store.commit('userLogged', user);
            this.$store.commit('loading', false);
            this.$store.commit('message', {type: 'success', text: `Welcome, ${user.userName}`});
            setTimeout(() => {
              this.closeModal();    
              this.$store.commit('message', {type: '', text: ''});  
              this.$router.push('/onlineshopping');            
            }, 2000);             
          } else {
            this.$store.commit('loading', false);
            this.$store.commit('message', {type: 'error', text: 'Invalid email/password'});
            setTimeout(() => {
              this.$store.commit('message', {type: '', text: ''});              
            }, 4000);
          }
        })              
      }
    }
  }
</script>