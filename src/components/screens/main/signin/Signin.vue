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
              </v-layout>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" @click="closeModal()"><v-icon>close</v-icon> Close</v-btn>
            <v-btn color="secondary" @click="signIn()"><v-icon class="mr-2 my-1">send</v-icon> Send</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

  import {ModelSignin} from './ModelSignin'

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
    mixins: [ModelSignin],   
    methods: {
      closeModal() {
        //clean the user, using the raw copy stored on created
        this.user = {...this.userRaw}
        this.dialogShowing = false
      },
      signIn() {
        if (!this.$refs.form.validate()) {
          return false
        }        
        console.log('Signing In')
        this.closeModal();
      }
    }
  }
</script>