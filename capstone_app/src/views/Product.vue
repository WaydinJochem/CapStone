<template>
    <div v-if="product">
        <div v-for="product in product" :key="product.prodID" >
            <img :src="product.prodUrl" :alt="product.prodName">
        </div>
    </div>
    <div v-else>Waiting to fetch</div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        product() {
            return this.$store.state.item;
        },
    },
    mounted() {
        this.$store.dispatch('fetchItem', this.id)
        // console.log(this.mounted)
    }
}
</script>
<style></style>