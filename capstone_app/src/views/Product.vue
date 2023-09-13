<template>
    <div v-if="product">
        <div v-for="product in product" :key="product.prodID">
            <img :src="product.prodUrl" :alt="product.prodName">
        </div>
    </div>
    <div v-else>
        <div class="loading">
            <svg width="64px" height="48px">
                <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
            </svg>
        </div>
    </div>
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
</style>