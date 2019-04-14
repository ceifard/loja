<template>
    <!-- <v-container text-xs-center class="container">
        <v-layout justify-center fill-height>
            <v-layout row wrap>
                <v-flex xs12 md12>
                    <h2 class="display-1 font-weight-light my-3"><v-icon x-large class="mb-1" color="black">shopping_cart</v-icon> Our Products</h2>
                </v-flex>
                <v-flex xs12 md12>
                    <v-carousel interval="2000" height="400">
                        <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        >
                            <v-layout align-center justify-center row fill-height>
                                <img :src="item.src" style="width:400px;height:auto;" :alt="item.src"/>
                            </v-layout>            
                        </v-carousel-item>
                    </v-carousel>                  
                </v-flex>
                <v-flex xs12 md12 my-5>
                    <span class="headline font-weight-light">
                        Did you like any product? 
                        <span class="font-weight-bold loginRedirect" @click="$store.commit('login/dialogShowing', true)">log in</span> 
                        or 
                        <span class="font-weight-bold registerRedirect" @click="$store.commit('signup/dialogShowing', true)">register</span> 
                        to make your first purchase!
                    </span>
                </v-flex>                
            </v-layout>
        </v-layout>
    </v-container> -->

    <v-container text-xs-center class="container">
        <v-layout justify-center fill-height>
            <v-layout column fill-height>
                <v-flex xs12 md12>
                    <h2 class="display-1 font-weight-light my-3"><v-icon x-large class="mb-1" color="black">shopping_cart</v-icon> Our Products</h2>
                </v-flex>                
                <Carousel>
                    <CarouselSlide v-for="(img, i) in images" :key="i">
                        <v-img :src="img.src" height="400"></v-img>
                    </CarouselSlide>               
                </Carousel>
                <v-flex xs12 md12 my-5>
                    <span class="headline font-weight-light">
                        Did you like any product? 
                        <span class="font-weight-bold loginRedirect" @click="$store.commit('login/dialogShowing', true)">log in</span> 
                        or 
                        <span class="font-weight-bold registerRedirect" @click="$store.commit('signup/dialogShowing', true)">register</span> 
                        to make your first purchase!
                    </span>
                </v-flex>                   
            </v-layout>
        </v-layout>
    </v-container>         
</template>

<script>
import Carousel from '../../../shared/carousel/Carousel'
import CarouselSlide from '../../../shared/carousel/CarouselSlide'

export default {
    components: {Carousel, CarouselSlide},
    data() {
        return {
            images: [
            {
                src: 'https://source.unsplash.com/TMOeGZw9NY4/1600x900'
            },                
            {
                src: 'https://source.unsplash.com/BeOW_PJjA0w/1600x900'
            },
            {
                src: require('@/../static/img/carousel/diaper3.jpeg')
            },
            ]            
        }
    },   
}
</script>

<style scoped>
.container {
    min-height: 100vh;
}
.registerRedirect, .loginRedirect {
    cursor: pointer;
}
</style>
