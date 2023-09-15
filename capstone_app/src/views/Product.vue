<template>
    <div v-if="product">
        <div v-for="product in product" :key="product.prodID"
            style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
            <img :src="product.prodUrl" :alt="product.prodName" style="width: 200px;">
            <p style="margin-left: 20%;">
            <ul>
                <li style="font-size: xx-large; font-weight: bold;">{{ product.prodName }}</li>
                <li>{{ product.quantity }} items available</li>
                <li>R{{ product.amount }}</li>
                <li>{{ product.Category }}</li>
            </ul>
            <button @click="addToCart(product.prodID)">Add to Cart</button><!-- Add this button -->
            </p>
        </div>
    </div>
    <div v-else>
        <h3>Issuing Product</h3>
        <spinner />
    </div>
</template>
<script>
import spinner from '../components/spinner.vue';

export default {
    props: ['id'],
    computed: {
        product() {
            return this.$store.state.item;
        },

    },
    methods: {
        addToCart(prodID) {
            // Ensure the user is logged in
            if (this.userData && this.userData.userID) {
                // Call the addToCart action with userID and prodID
                this.$store.dispatch('addToCart', {
                    userID: this.userData.userID,
                    prodID,
                })
                    .then(() => {
                        this.showSuccessAlert();
                    })
                    .catch((error) => {
                        console.error('Error adding product to cart:', error);
                        // Handle the error and show an error message here if needed
                    });
            } else {
                // Handle the case where the user is not logged in, prompt for login, etc.
            }
        },
    },
    mounted() {
        this.$store.dispatch('fetchItem', this.id);
    },
    components: {
        spinner,
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

ul {
    list-style: none;
    font-size: large;
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

div {
    margin-bottom: 200px;
}
</style>