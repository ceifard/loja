<template>
    <v-parallax
        dark
        :src="require('@/../static/img/description/diaper.jpg')"
        class="description"
        :height="viewportHeight"
    >
        <v-layout
        align-center
        column
        justify-center
        class="black--text"
        >
            <h3 class="display-3 font-weight-light text-xs-center">Be welcome to our website,</h3>   
            <span class="headline pl-1 font-weight-light text-xs-center"> here you will find the best products for your need! We have the best quality for the best price.</span>

            <v-btn dark round color="primary" @click="$vuetify.goTo('#products')" class="my-4">
                Take a look<v-icon dark>arrow_downward</v-icon>
            </v-btn>            
 
        </v-layout>
    </v-parallax>   
</template>

<script>
export default {
    computed: {
        viewportHeight() {
            let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 48
            console.log(vh)
            return vh
        }
    }
}
</script>

<style scoped>
    .description {
        color: black;
        opacity: 0.8;
    }    
</style>