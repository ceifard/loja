export let ModelSignup = {
    computed: {
        dialogShowing: {
            get() {
                return this.$store.getters['signup/dialogShowing']
            },
            set(value) {
                this.$store.commit('signup/dialogShowing', value)
            }
        },  
        user: {
            get() {
                return this.$store.getters['signup/user']
            },
            set(value) {
                this.$store.commit('signup/user', value)
            }
        },          
        userName: {
            get() {
                return this.$store.getters['signup/userName']
            },
            set(value) {
                this.$store.commit('signup/userName', value)
            }
        },        
        email: {
            get() {
                return this.$store.getters['signup/email']
            },
            set(value) {
                this.$store.commit('signup/email', value)
            }
        }, 
        phone: {
            get() {
                return this.$store.getters['signup/phone']
            },
            set(value) {
                this.$store.commit('signup/phone', value)
            }
        }, 
        password: {
            get() {
                return this.$store.getters['signup/password']
            },
            set(value) {
                this.$store.commit('signup/password', value)
            }
        },                                
    },
  }