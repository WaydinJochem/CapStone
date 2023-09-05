<template>
    <main>
        <h1>This is the Products Page</h1>
        <div v-if="items">
            <Card v-for="item in items" :key="item.prodID" :item="item" />
        </div>
        <div v-else>
            <p>Content still fetching</p>
        </div>
    </main>
</template>
<script>
import Card from '@/components/ProductsCard.vue';
export default {
    computed: {
        items() {
            return this.$store.state.items;
        }
    },
    mounted() {
        this.$store.dispatch("fetchItems");
    },
    // name: 'ProductsView',
    components: {
        Card
    }
}
</script>
<style></style>