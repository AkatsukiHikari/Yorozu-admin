<!--
 * @Author: Hikari
 * @Date: 2020-03-26 08:45:23
 * @LastEditTime: 2021-07-09 19:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /core/nuxt-framework/lib/components/ErrorPage/404.vue
-->

<template>
    <div class="errPage-container">

        <div class="content">
            <div>
                <img
                :src="errGif"
                width="313"
                height="428"
                />
            </div>

            <div>
                <h1 class="text-jumbo text-ginormous">抱歉!</h1>
                <div style="font-size:20px;">您没有权限操作此页面!</div>
            </div>
        </div>


        <div class="back-redirect">
            <Button  type="dashed" style="width:500px;" icon="ios-arrow-dropleft"  size="large"  @click="back">
                返回主页
            </Button>
        </div>
        
    </div>
</template>

<script>
import errGif from '~/lib/assets/401_images/401.gif'
export default {
    data() {
        return {
            dialogVisible: false,
            errGif,
        }
    },

    methods: {
        /**
         * 返回
         */
        back(){
            if (this.$route.query.noGoBack) {
                this.$router.push({ path: '/' })
            } else {
                this.$router.go(-1)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.errPage-container {
    position: relative;
    width: 100%;
    margin-top: 150px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .back-redirect{
        margin-top: 50px;
    }


    .content{
        display: flex;
    }
    .pan-gif {
        margin: 0 auto;
        display: block;
    }
    .pan-img {
        display: block;
        margin: 0 auto;
        width: 100%;
    }
    .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
    }
    .list-unstyled {
        font-size: 14px;
        li {
        padding-bottom: 5px;
        }
        a {
        color: #008489;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
        }
    }
}
</style>