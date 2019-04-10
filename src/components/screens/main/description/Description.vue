<template>
    <v-parallax
        dark
        :src="require('@/../static/img/description/diaper.jpg')"
        class="description"
    >
        <v-layout
        align-center
        column
        justify-center
        class="black--text"
        >
            <h3 class="display-3">Be welcome to our website,</h3>   
            <span class="subheading pl-1"> here you will find the best products for your need! We have the best quality for the best price.</span>
 
        </v-layout>
    </v-parallax>   
</template>

<style scoped>
    .description {
        color: black;
        opacity: 0.8;
    }    
</style>