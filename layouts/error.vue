<!--
 * @Author: Hikari
 * @Date: 2021-07-09 16:49:22
 * @LastEditTime: 2021-07-19 15:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yorozu-admin/layouts/error.vue
-->
<template>
    <div>
        <page-404 v-if="error.statusCode === 404" />
    </div>
</template>

<script>
export default {
    props:['error'],
}
</script>

<style lang="scss" scoped>
    
</style>