<template>
    <v-container text-xs-center class="container">
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
    </v-container>    
</template>

<script>
export default {
    data() {
        return {
            items: [
            {
                src: require('@/../static/img/carousel/diaper1.jpg') 
            },                
            {
                src: require('@/../static/img/carousel/diaper2.jpg')
            },
            {
                src: require('@/../static/img/carousel/diaper3.jpeg')
            },
            {
                src: require('@/../static/img/carousel/diaper4.jpg')
            },                
            {
                src: require('@/../static/img/carousel/diaper5.jpg')
            },
            {
                src: require('@/../static/img/carousel/diaper6.jpg')
            },
            {
                src: require('@/../static/img/carousel/diaper7.jpg')
            },
            {
                src: require('@/../static/img/carousel/diaper8.jpeg')
            }
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
