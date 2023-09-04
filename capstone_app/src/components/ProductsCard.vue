<template>
    <div v-if="products" >
        <div v-for="product in products " :key="product.id" :products="product">
        <div>
            <img :src="product.prodUrl" alt="">
        </div>
        </div>
    </div>
    <div v-else>
        	<p>Content still fetching</p>
    </div>
</template>
<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    }, 
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
}
</script>
<style>
    
</style>