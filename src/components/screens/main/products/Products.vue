<template>
    <v-container text-xs-center class="container">
        <v-layout justify-center fill-height>
            <v-layout column fill-height v-resize="reRender">
                <v-flex xs12 md12>
                    <h2 class="display-1 font-weight-light my-3"><v-icon x-large class="mb-1" color="black">shopping_cart</v-icon> Our Products</h2>
                </v-flex>                
                <Carousel class="diapers-carousel" v-if="!!imagesBySize">
                    <CarouselSlide v-for="(imgs, i) in imagesBySize" :key="i" class="diapers-carousel__img-container">
                        <!-- <v-img :src="img.src" height="400"></v-img> -->    
                        <v-layout row>
                            <v-flex v-for="(img, i) in imgs" :key="i" class="ma-4">
                                <v-card class="pt-3">
                                    <v-img
                                    :src="img.src"
                                    aspect-ratio="1.75"
                                    class="mx-2"
                                    contain
                                    ></v-img>

                                    <v-card-title primary-title>
                                        <v-flex justify-center="">
                                            <h3 class="heading mb-0">{{img.name}}</h3>
                                            <div> Available sizes: {{ img.size }} </div>
                                        </v-flex>
                                    </v-card-title>

                                </v-card>
                            </v-flex>                      
                        </v-layout>                        
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
    created() {
        this.reRender();        
    }, 
    data() {
        return {    
            timeout: '',    
            windowWidth: '',
            imagesBySize: null,
            perSlide: 2,
            images: [
                        {
                            name: 'Pampers Diaper',
                            size: 'p, m, g',
                            src: require('@/../static/img/carousel/diaper1.jpg')
                        },                
                        {
                            name: 'Johnsons Diaper',
                            size: 'm, g',                        
                            src: require('@/../static/img/carousel/diaper2.jpg')
                        },
                        {
                            name: 'Pampers Diaper',
                            size: 'p, m, g',
                            src: require('@/../static/img/carousel/diaper3.jpeg')
                        },                
                        {
                            name: 'Johnsons Diaper',
                            size: 'm, g',                        
                            src: require('@/../static/img/carousel/diaper4.jpg')
                        },
                        {
                            name: 'Pampers Diaper',
                            size: 'p, m, g',
                            src: require('@/../static/img/carousel/diaper5.jpg')
                        },                
                        {
                            name: 'Johnsons Diaper',
                            size: 'm, g',                        
                            src: require('@/../static/img/carousel/diaper6.jpg')
                        },
                        {
                            name: 'Pampers Diaper',
                            size: 'p, m, g',
                            src: require('@/../static/img/carousel/diaper7.jpg')
                        },                
                        {
                            name: 'Johnsons Diaper',
                            size: 'm, g',                        
                            src: require('@/../static/img/carousel/diaper8.jpeg')
                        },                                  
                ]           
        }
    },  
    methods: {
        //Adaptation to deal with the amount of images being displayed by the carousel, according to the screen size
        reRender() {
            this.imagesBySize = null;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.windowWidth = window.innerWidth;
                if(this.windowWidth < 669) {
                    this.perSlide = 1;
                } else if (this.windowWidth < 880) {
                    this.perSlide = 2;
                } else {
                    this.perSlide = 4;
                }
                this.imagesBySize = this.images.map( (e,i) => { 
                    return i%this.perSlide===0 ? this.images.slice(i,i+this.perSlide) : null; 
                }).filter(e => e);   
            }, 20);
        },      
    } 
}
</script>

<style lang="scss" scoped>
.container {
    min-height: 100vh;
}
.registerRedirect, .loginRedirect {
    cursor: pointer;
}
.diapers-carousel {
    background: rgba(204, 204, 204, 0.521);
    &__img-container {
        padding: 50px 70px;
        max-height: 100%;
    }
}
</style>
