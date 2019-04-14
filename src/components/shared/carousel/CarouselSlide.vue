<template>
    <transition :name="transition">
        <div v-show="visible" class="slide">
            <slot></slot>
        </div>    
    </transition>
</template>

<script>
export default {
    data() {
        return {
            index: 0
        }
    },
    computed: {
        transition () {
            if(this.$parent.direction) {
                return `slide-${this.$parent.direction}`
            }
        },
        visible() {
            return this.index === this.$parent.index
        }
    }
}
</script>

<style lang="scss">

    .slide {
        * {
            max-width: 100%;
        }
        &-right {
            &-enter-active {
                animation: slideRightIn .5s;
            }
            &-leave-active {
                animation: slideRightOut .5s;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;                
            }            
        }

        &-left {
            &-leave-active {
                animation: slideLeftOut .5s;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
            } 
            &-enter-active {
                animation: slideLeftIn .5s;
            }             
        }         
    }  

    @keyframes slideRightIn {
        from {
            transform: translateX(100%);
        } to {
            transform: translateX(0);
        }
    }

    @keyframes slideRightOut {
        from {
            transform: translateX(0);
        } to {
            transform: translateX(-100%);
        }
    } 

    @keyframes slideLeftIn {
        from {
            transform: translateX(-100%);
        } to {
            transform: translateX(0);
        }
    }

    @keyframes slideLeftOut {
        from {
            transform: translateX(0);
        } to {
            transform: translateX(100%);
        }
    }    
</style>
