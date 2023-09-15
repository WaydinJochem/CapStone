<template>
    <div>
        <h1>Your Cart</h1>
        <ul>
            <li v-for="product in getCart" :key="product.prodID">
                <td>{{ product.prodID }}</td>
                <button>Remove</button>
            </li>
        </ul>
        <button @click="clearCart">Clear Cart</button>
    </div>
</template>
<script>
import Swal from 'sweetalert';

export default {
    name: 'setCart',
    computed: {
        getCart() {
            return this.$store.state.cart;
        },
        user() {
            return this.$store.state.userData;
        },
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice;
        },
    },
    // methods: {
//         removeFromCart(cartID) {
//             const userID = this.user.userID;

//             this.$store.dispatch('removeFromCart', { userID, cartID })
//                 .then(() => {
//                     this.showSuccessAlert();
//                     // Optional: Perform any additional actions after successful removal
//                 })
//                 .catch((error) => {
//                     console.error('Error removing item from cart:', error);
//                     this.showErrorAlert();
//                 });
//         },
//         showSuccessAlert() {
//             Swal({
//                 icon: 'success',
//                 title: 'Item removed from cart successfully!',
//                 showConfirmButton: false,
//                 timer: 1500, // Close the alert after 1.5 seconds
//             });
//         },
//         showErrorAlert() {
//             Swal({
//                 icon: 'error',
//                 title: 'Failed to remove item from cart. Please try again.',
//                 text: 'An error occurred while removing the item from the cart.',
//                 background: "#995C23",
//                 color: "black",
//             });
//         },
//     }
};
</script>
<style></style>