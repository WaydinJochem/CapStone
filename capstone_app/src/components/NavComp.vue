<template>
    <nav class="navbar navbar-expand-lg bg-success">
        <div class="container-fluid">
            <button @click="logout()" style="margin-left: 10px;">LogOut</button>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                @click="toggleCompass">
                <img id="compass" :src="compassImage" alt="compass">
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
                    <hr />
                    <li class="nav-item ms-5">
                        <router-link to="/home" class="nav-item">
                            <img src="https://i.postimg.cc/KvBqZhtF/icons8-home-80-2.png" alt="home page">
                        </router-link>
                    </li>
                    <hr />
                    <li class="nav-item ms-5">
                        <router-link to="/about" class="nav-item">
                            <img src="https://i.postimg.cc/rscTQNkt/icons8-info-80.png" alt=" about page">
                        </router-link>
                    </li>
                    <hr>
                    <li class="nav-item ms-5">
                        <router-link to="/products" class="nav-item">
                            <img src="https://i.postimg.cc/TPzfWXN0/icons8-shopping-bag-80.png" alt="product page">
                        </router-link>
                    </li>
                    <hr>
                    <li class="nav-item ms-5">
                        <router-link to="/admin" class="nav-item">
                            <img src="https://i.postimg.cc/Y9jjPf8q/icons8-male-user-80.png" alt="admin page">
                        </router-link>
                    </li>
                    <hr>
                    <li class="nav-item ms-5">
                        <router-link to="/contact" class="nav-item">
                            <img src="https://i.postimg.cc/C5X4GwY4/icons8-letter-80.png" alt="contact page">
                        </router-link>
                    </li>
                    <hr>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import sweetAlert from 'sweetalert'
export default {
    data() {
        return {
            compassImage: 'https://i.postimg.cc/4N9RC08R/icons8-compass-north-80.png',
            // Define the two compass image sources
            compassNorthImage: 'https://i.postimg.cc/4N9RC08R/icons8-compass-north-80.png',
            compassEastImage: 'https://i.postimg.cc/DZ1FrYtT/icons8-compass-east-80.png',
            compassState: 'north', // Initial state
        };
    },
    methods: {
        toggleCompass() {
            // Toggle between "compass north" and "compass east" images
            if (this.compassState === 'north') {
                this.compassImage = this.compassEastImage;
                this.compassState = 'east';
            } else {
                this.compassImage = this.compassNorthImage;
                this.compassState = 'north';
            }
        },
        logout() {
            const success = this.$store.dispatch('logout');
            if (success) {
                sweetAlert("Well Done!", "User was successfully logged Out", "success")
            }
            else {
                sweetAlert("Error!", "Unable to Logout", "error")
            }
        }
    },
}
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
}

.bg-success {
    --bs-bg-opacity: 1;
    background: linear-gradient(purple, black);
}

ul img {
    background-color: aliceblue;
    border-radius: 50%;
    transition: 1s ease-in-out;
}

ul img:hover {
    background-color: #333;
    box-shadow: 2px -2px white;
    width: 70px;
}
.router-link-active {
display: none;
}
</style>