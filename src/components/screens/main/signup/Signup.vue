<template>
  <v-layout row justify-center v-if="dialogShowing">
    <v-dialog v-model="dialogShowing" persistent max-width="600px">
      <v-card>

        <v-card-title>
          <span class="title grey--text text--darken-2"> <v-icon>add</v-icon> Create new user</span>
        </v-card-title>

        <v-divider></v-divider>

        <v-form ref="form">
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md12>
                  <v-text-field prepend-icon="person"
                                label="Full name*"
                                :rules="nameRules" 
                                v-model="userName">
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field prepend-icon="mail"
                                label="Email*" 
                                :rules="emailRules" 
                                v-model="email">
                  </v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field prepend-icon="phone"
                                label="Phone*" 
                                :rules="phoneRules" 
                                v-model="phone" 
                                mask="(###) ###-###">
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
              </v-layout>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" :disabled="$store.getters.loading" @click="closeModal()"><v-icon>close</v-icon> Close</v-btn>
            <v-btn color="secondary" :disabled="$store.getters.loading" @click="signUp()"><v-icon class="mr-2 my-1">send</v-icon> Send</v-btn>
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

  import {ModelSignup} from './ModelSignup'

  export default {
    created() {
      //store a raw copy of user
      this.userRaw = {...this.user}
    },
    data() {
      return {
        userRaw: {},
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length >= 3) || 'Name must have 3 characters or more'
        ],        
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must have a @ and a dot'
        ],
        phoneRules: [
          v => !!v || 'Phone is required',
          v => (v && v.length == 9) || 'Phone must have 9 numbers'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
        ],                            
      }
    },
    mixins: [ModelSignup],   
    methods: {
      closeModal() {
        //clean the user, using the raw copy stored on created
        this.user = {...this.userRaw}
        this.dialogShowing = false
      },
      signUp() {
        if (!this.$refs.form.validate()) {
          return false
        }   
        this.$store.commit('loading', true)
        this.$store.dispatch('signup/signUp').then( user => {
          this.$store.commit('userLogged', user);
          this.$store.commit('loading', false);
          this.$router.push('/onlineshopping');
          this.closeModal();
        })             
      }
    }
  }
</script>