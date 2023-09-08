<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/admin">Admin Page</router-link> |
        <button @click="openModal()">Register
        </button>
        <div class="modal" v-if="modalVisible">
            <register :modalVisible="modalVisible" />
            <!-- End of modal content -->
        </div>
    </div>
</template>
<script>
import Register from './Register.vue';
export default {
    components: {
        Register
    },
    data() {
        return {
            modalVisible: false,
        }
    },
    methods: {
        openModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false
        },
    }
}
</script>
<style></style>