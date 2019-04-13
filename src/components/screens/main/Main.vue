<template>
    <div>
        <section>
            <Description/>
        </section>     
        <section>
            <Carousel/>
        </section>        
        <section id="contact">
            <Contact/>
        </section>  
        <section>
            <Signup/>
        </section>         
        <section>
            <Login/>
        </section>            
    </div>
</template>

<script>
import Description from './description/Description.vue'
import Carousel from './carousel/Carousel.vue'
import Contact from './contact/Contact.vue'
import Signup from './signup/Signup.vue'
import Login from './login/Login.vue'
export default {
    components: {
        Description,
        Carousel,
        Contact,
        Signup,
        Login        
    }
}
</script>
