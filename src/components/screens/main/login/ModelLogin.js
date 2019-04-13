export let ModelLogin = {
    computed: {
        dialogShowing: {
            get() {
                return this.$store.getters['login/dialogShowing']
            },
            set(value) {
                this.$store.commit('login/dialogShowing', value)
            }
        },      
        user: {
            get() {
                return this.$store.getters['login/user']
            },
            set(value) {
                this.$store.commit('login/user', value)
            }
        },              
        email: {
            get() {
                return this.$store.getters['login/email']
            },
            set(value) {
                this.$store.commit('login/email', value)
            }
        }, 
        password: {
            get() {
                return this.$store.getters['login/password']
            },
            set(value) {
                this.$store.commit('login/password', value)
            }
        },                                
    },
  }