<template>
    <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__prev" @click.prevent="prev">
            <img :src="require('./img/prev.png')" alt="" width="50px">
        </button>
        <button class="carousel__nav carousel__next" @click.prevent="next">
            <img :src="require('./img/next.png')" alt="" width="50px">
        </button>
        <div class="carousel__pagination">
            <button v-for="(n,i) in slidesCount" 
                    :key="i"
                    @click="goto(n-1)"
                    :class="{active: n-1 == index}"> 
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            slides: [],
            direction: null
        }
    },
    mounted() {
        //this.$children returns an array with vue child components. Not available before the component has been mounted.
        this.slides = this.$children;
        this.slides.forEach((slide, i) => {
            slide.index = i //set children component's property index
        })
    },
    computed: {
        slidesCount() {
            return this.slides.length
        }
    },
    methods: {
        next() {
            this.index++
            this.direction = 'right'
            if (this.index >= this.slidesCount) {
                this.index = 0
            }
        },
        prev() {
            this.index--
            this.direction = 'left'
            if (this.index < 0) {
                this.index = this.slidesCount - 1
            }            
        },
        goto(index) {
            this.direction = index > this.index ? 'right' : 'left'
            this.index = index
        }
    }
}
</script>

<style lang="scss">
    .carousel {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex: 1;
        color: white;
        &__nav {
            position: absolute;
            top: 50%;
            left: 10px;
            width: 58px;
            height: 60px;
            border: 1px solid #636363;
            background: #ccc;
            border-radius: 55%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &.carousel__next {
                right: 10px;
                left: auto;
            }                
        }
        &__pagination {
            position: absolute;
            bottom: 10px;
            left: 0;
            right: 0;
            text-align: center;
            button {
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: #000;
                opacity: 0.8;
                border-radius: 10px;
                margin: 0 2px;
                &.active {
                    background-color: #fff;
                }                
            }            
        }
    }

    @media only screen and (max-width: 636px)
    {
        .carousel__nav {
            width: 35px;
            height: 38px;
            img {
            width: 35px;
            height: 38px;                
            }
        }
    }        
</style>
