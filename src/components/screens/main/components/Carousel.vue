<template>
    <div>
        
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
    </div>
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
                src: require('@/../static/img/carousel/diaper3.jpg')
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
                src: require('@/../static/img/carousel/diaper8.jpg')
            }
            ]            
        }
    },    
}
</script>