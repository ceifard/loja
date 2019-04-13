<template>
    <v-layout column>
        <div class="imageUnavailable">
            <div class="textImage">
                <h3 class="display-1 font-weight-light">Online shopping will be avaliable soon</h3>
            </div>
        </div>
    </v-layout>            
</template>

<style scoped lang="scss">
    .imageUnavailable {
        height: calc(100vh - 64px);
        background-image: url('~@/../static/img/unavailable/sleeping-baby-bw-op1.jpg');
        background-repeat: no-repeat;
        background-size: cover;  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .textImage {
        text-align: center;
    }
    @media only screen and (max-width: 959px)
    {
        .imageUnavailable {
            height: calc(100vh - 48px);
        }
    }  
    @media only screen and (max-width: 959px)
    {
        .imageUnavailable {
            height: calc(100vh - 56px);
        }
    }      
</style>

