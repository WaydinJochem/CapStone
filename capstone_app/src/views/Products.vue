<template>
    <main>
        <h1>This is the Products Page</h1>
        <div class="container" id="filer">
            <order/>
        </div>
        <div v-if="items" class="display">
            <Card v-for="item in items" :key="item.prodID" :item="item" />
        </div>
        <div v-else>
            <h3>Issuing Products</h3>
            <spinner/>
        </div>
    </main>
</template>
<script>
import Card from '@/components/ProductsCard.vue';
import spinner from '@/components/spinner.vue';

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
        Card,
        spinner
    }
}
</script>
<style scoped>
.loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.loading svg polyline#back {
    fill: none;
    stroke: #ff4d5033;
}

.loading svg polyline#front {
    fill: none;
    margin-top: auto;
    stroke: white;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
}

@keyframes dash_682 {
    72.5% {
        opacity: 0;
    }

    to {
        stroke-dashoffset: 0;
    }
}
.display {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
   flex-wrap: wrap;
}
</style>