<template>
    <div>
        <section class="briefing">
            <v-layout align-center justify-center row fill-height>
                <div class="briefing-text">
                    <h3 class="display-3">Welcome to the site</h3>   
                    <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

                    <v-divider class="my-3"></v-divider>

                    <div class="title mb-3">Check out our newest features!</div>                             
                </div>
            </v-layout>
        </section>        
        <section class="carousel">
            <Carousel/>
        </section>
    </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
export default {
    components: {
        Carousel
    }
}
</script>

<style scoped>
.briefing-text {
    width: 90vw;
    height: 40vh;
}
</style>
