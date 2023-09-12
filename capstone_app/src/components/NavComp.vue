<template>
    <div id="fixed-component">
        <div>
            <img id="open-nav" src="https://i.postimg.cc/4N9RC08R/icons8-compass-north-80.png" alt=""
                @click="openSidebar()">
            <img id="replacement" src="https://i.postimg.cc/DZ1FrYtT/icons8-compass-east-80.png" alt=""
                @click="closeSidebar()">
        </div>

        <div id="nav-items">
            <router-link to="/"><img src="https://i.postimg.cc/KvBqZhtF/icons8-home-80-2.png" alt=""></router-link>
            <router-link to="/about"><img src="https://i.postimg.cc/rscTQNkt/icons8-info-80.png" alt=""></router-link>
            <router-link to="/products"><img src="https://i.postimg.cc/TPzfWXN0/icons8-shopping-bag-80.png"
                    alt=""></router-link>
            <router-link to="/admin"><img src="https://i.postimg.cc/Y9jjPf8q/icons8-male-user-80.png" alt=""></router-link>
            <img src="https://i.postimg.cc/C5X4GwY4/icons8-letter-80.png" alt="">
            <router-link to="/register">Register</router-link>
            <router-link to="/login">Login</router-link>
        </div>

    </div>
</template>
<script>

export default {
    methods: {
        closeSidebar() {
            document.getElementById("replacement").style.display = "none";
            document.getElementById("nav-items").style.display = "none";
            // document.getElementById("open-nav").style.display = "none";
        },
        openSidebar() {
            document.getElementById("nav-items").style.display = "flex";
            document.getElementById("replacement").style.display = "block";
        }
    },
}
</script>
<style scoped>
* {
    text-align: start;
}

#fixed-component {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 20px   ;

}

#replacement {
    display: none;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
}

img {
    size: 80px;
    text-align: start;
}

img:hover {
    cursor: pointer;
}


#nav-items {
    display: none;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: -80px 20%;

}
</style>