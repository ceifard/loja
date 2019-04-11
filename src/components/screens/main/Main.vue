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
            <Signin/>
        </section>            
    </div>
</template>

<script>
import Description from './description/Description.vue'
import Carousel from './carousel/Carousel.vue'
import Contact from './contact/Contact.vue'
import Signup from './signup/Signup.vue'
import Signin from './signin/Signin.vue'
export default {
    components: {
        Description,
        Carousel,
        Contact,
        Signup,
        Signin        
    }
}
</script>
