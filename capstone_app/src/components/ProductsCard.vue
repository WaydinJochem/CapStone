<template>
    <router-link :to="{ name: 'Item', params: { id: item.prodID } }">
        <div class="card">
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="https://i.postimg.cc/HLvN1Kdr/icons8-space-80.png" alt="" class="back-img">
                </div>
                <div class="flip-card-back">
                    <img :src="item.prodUrl" alt="postimages offline" style="height:100%; width:300px; border-radius: 20px;">
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>

export default {
    props: ['item'],
}
</script>
<style scoped>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    margin: auto;
    margin-bottom: 10%;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background: radial-gradient(dodgerblue, grey);
    color: black;
}

/* Style the back side */
.flip-card-back {
    transform: rotateY(180deg);
}

.back-img {
    margin-top: 50%;
}
</style>