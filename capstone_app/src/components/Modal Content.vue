<template>
    <div class="add-products-div">
        <div class="add-products-inner">
            <slot />
            <div class="input-details-div">
                <div class="input-details-row">
                    <label for="">Product ID</label>
                    <input type="number" class="info-input" v-model="newItem.prodID" />
                </div>
                <div class="input-details-row">
                    <label for="">Product Name</label>
                    <input type="text" class="info-input" v-model="newItem.prodName" />
                </div>
                <div class="input-details-row">
                    <label for="">Quantity</label>
                    <input type="number" class="info-input" v-model="newItem.quantity" />
                </div>
                <div class="input-details-row">
                    <label for="">Price</label>
                    <input type="number" class="info-input" v-model="newItem.amount" />
                </div>
                <div class="input-details-row">
                    <label for="">Category</label>
                    <input type="text" class="info-input" v-model="newItem.Category" />
                </div>
                <div class="input-details-row">
                    <label for="">Image URL</label>
                    <input type="text" class="info-input" v-model="newItem.prodUrl" />
                </div>
              
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        newItem: Object,
    },
    
    // methods: {
       
    // }
}
</script>
<style></style>