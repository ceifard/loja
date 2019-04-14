<template>
    <v-container fluid text-xs-center class="contact">
        <v-layout row wrap>
                <v-flex xs12 class="mb-3">
                    <h3 class="display-1 font-weight-light pt-5"><v-icon x-large color="white">forum</v-icon> Contact Us</h3>                    
                </v-flex>
                <v-flex xs12 md4 class="mt-3">
                    <v-card 
                        class="mx-auto"
                        width="300">
                        <v-card-title>
                        <v-icon
                            large
                            left
                        >
                            phone
                        </v-icon>
                        <span class="title font-weight-bold grey--text text--darken-2">Phone</span>
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-card-text class="headline font-weight-light py-4">
                        1-971-diaper
                        </v-card-text>

                    </v-card >   
                </v-flex>
                <v-flex xs12 md4 class="mt-3">
                    <v-card
                        class="mx-auto"
                        width="300">
                        <v-card-title>
                            <v-icon
                                large
                                left
                            >
                                email
                            </v-icon>
                            <span class="title font-weight-bold grey--text text--darken-2">Email</span>
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-card-text class="headline font-weight-light py-4">
                        confort@lookafter.com
                        </v-card-text>

                    </v-card >                      
                </v-flex>
                <v-flex xs12 md4 class="mt-3">
                    <v-card
                        class="mx-auto"
                        width="300">
                        <v-card-title>
                            <v-icon
                                large
                                left
                            >
                                cast
                            </v-icon>
                            <span class="title font-weight-bold grey--text text--darken-2">Social</span>
                        </v-card-title>

                        <v-divider></v-divider>

                        <v-card-text class="headline font-weight-light my-0">
                            <v-layout justify-space-around>
                                <a href="https://facebook.com/lookaftervuejs" target="_blank">
                                    <v-btn
                                        fab
                                        icon
                                        small
                                        color="grey lighten-2"
                                        class="grey--text text--darken-4"
                                        space
                                    >
                                        <v-icon>fab fa-facebook</v-icon>
                                    </v-btn>
                                </a>
                                <a href="https://twitter.com/lookaftervuejs" target="_blank">
                                    <v-btn
                                        fab
                                        icon
                                        small
                                        color="grey lighten-2"
                                        class="grey--text text--darken-4"
                                    >
                                        <v-icon>fab fa-twitter</v-icon>
                                    </v-btn>
                                </a>
                                <a href="https://instagram.com/lookaftervuejs" target="_blank" color="grey lighten-2">
                                    <v-btn
                                        fab
                                        icon
                                        small
                                        color="grey lighten-2"
                                        class="grey--text text--darken-4"
                                    >
                                        <v-icon>fab fa-instagram</v-icon>
                                    </v-btn>           
                                </a>                   
                            </v-layout>                                                      
                        </v-card-text>

                    </v-card>                      
                </v-flex>                 
        </v-layout>
    </v-container>
</template>

<style scoped>
    .contact {
        background: #636363;
        color: white;
        min-height: 100vh;
        display: flex;
    }
    a {
        text-decoration: none;
    }
</style>
