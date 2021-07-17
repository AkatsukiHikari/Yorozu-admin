<!--
 * @Author: Hikari
 * @Date: 2021-07-09 16:49:22
 * @LastEditTime: 2021-07-17 17:04:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yorozu-admin/layouts/error.vue
-->
<template>
    <div>
        <page-401 v-if="error.statusCode === 404" />
    </div>
</template>

<script>
import Page401 from '@/lib/t-ui/ErrorPage/401'
import Page404 from '@/lib/t-ui/ErrorPage/404'
export default {
    components:{
        Page401,
        Page404,
    },
    props:['error'],
}
</script>

<style lang="scss" scoped>
    
</style>