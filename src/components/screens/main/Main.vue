<template>
    <div>
        <section>
            <Description/>
        </section>     
        <section>
            <Carousel/>
        </section>        
        <section>
            <Contact/>
        </section>           
    </div>
</template>

<script>
import Description from './description/Description.vue'
import Carousel from './carousel/Carousel.vue'
import Contact from './contact/Contact.vue'
export default {
    components: {
        Description,
        Carousel,
        Contact,
    }
}
</script>
