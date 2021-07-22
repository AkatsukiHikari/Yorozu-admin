<template>
    <nav :class="[
        color ? `t--${color}` : `bg-${color}`
    ]">
        <div class="max-w-full mx-auto">

            

        </div>
    </nav>
</template>

<script>
export default {
    name: 't-nav',
    props:{
        // 样式
        // horizontal 水平
        // vertical 垂直
        mode: 'horizontal',

        corlor: {
            default: 'primary',
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>