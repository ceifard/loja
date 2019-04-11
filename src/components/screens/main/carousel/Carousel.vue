<template>
    <v-container text-xs-center>
        <v-layout row wrap>
            <v-flex xs12 md12>
                <h2 class="display-1 my-3"><v-icon x-large color="black">shopping_cart</v-icon> Our Products</h2>
            </v-flex>
            <v-flex>
                <v-carousel interval="2000" max="300">
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