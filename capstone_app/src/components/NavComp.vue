<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/admin">Admin Page</router-link> |
        <router-link to="/register">Register</router-link>
    </div>
</template>
<script>

export default {
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