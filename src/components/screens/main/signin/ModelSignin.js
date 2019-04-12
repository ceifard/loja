export let ModelSignin = {
    computed: {
        dialogShowing: {
            get() {
                return this.$store.getters['signin/dialogShowing']
            },
            set(value) {
                this.$store.commit('signin/dialogShowing', value)
            }
        },  
        user: {
            get() {
                return this.$store.getters['signin/user']
            },
            set(value) {
                this.$store.commit('signin/user', value)
            }
        },         
        userName: {
            get() {
                return this.$store.getters['signin/userName']
            },
            set(value) {
                this.$store.commit('signin/userName', value)
            }
        },        
        email: {
            get() {
                return this.$store.getters['signin/email']
            },
            set(value) {
                this.$store.commit('signin/email', value)
            }
        }, 
        phone: {
            get() {
                return this.$store.getters['signin/phone']
            },
            set(value) {
                this.$store.commit('signin/phone', value)
            }
        }, 
        password: {
            get() {
                return this.$store.getters['signin/password']
            },
            set(value) {
                this.$store.commit('signin/password', value)
            }
        },                                
    },
  }