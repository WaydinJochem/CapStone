<template>
    <router-link :to="{ name:'Item', params: { id: item.prodID } }">
        <div>
            <p>
                {{ item.prodName }}
            </p>
            <img :src="item.prodUrl" alt="postimages offline">
        </div>
    </router-link>
</template>
<script>

export default {
  props: ['item'],
}
</script>
<style></style>