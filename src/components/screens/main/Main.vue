<template>
    <div>
        <section>
            <Description/>
        </section>     
        <section id="products">
            <Products/>
        </section>        
        <section id="contact">
            <Contact/>
        </section>  
        <section v-if="dialogSignup">
            <Signup/>
        </section>         
        <section v-if="dialogLogin">
            <Login/>
        </section>            
    </div>
</template>

<script>
import Description from './description/Description.vue'
import Products from './products/Products.vue'
import Contact from './contact/Contact.vue'
import Signup from './signup/Signup.vue'
import Login from './login/Login.vue'
export default {
    components: {
        Description,
        Products,
        Contact,
        Signup,
        Login        
    },
    computed: {
        dialogLogin() {
            return this.$store.getters['login/dialogShowing']
        },
        dialogSignup() {
            return this.$store.getters['signup/dialogShowing']
        },        
    }
}
</script>
