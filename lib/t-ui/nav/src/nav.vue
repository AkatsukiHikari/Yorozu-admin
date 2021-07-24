<template>
    <nav :class="[
        bgColor,
    ]">
        <div class="max-w-full px-8 " :class="[fontColor,]">
            <div class="flex justify-between items-center">
                <!-- logo section -->
                <div v-if="logo">
                    <img :src="logo">
                </div>
                <div >
                    <div class="sm:text-lg md:text-xl lg:text-2xl py-3">
                        {{title}}
                    </div>
                </div>

                <!-- right side -->
                <div>
                    <slot name="right">

                    </slot>                 
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import {theme_bg_color} from '../../../theme'
export default {
    name: 't-nav',
    props:{
        // 样式
        color: {
            default: 'dark',
            type: String,
        },

        fontColor:{
            default: 'text-white',
        },
        // 网站图标
        logo:{
            type:String,
        },
        // 用户信息
        userinfo:{
            type:Object,
            default: ()=>{return {}}
        },

        title:{
            type:String,
            default:"admin"
        },
    },

    computed:{
        bgColor(){
            return theme_bg_color(this.color)
        }
    },
}
</script>

<style lang="scss" scoped>

</style>