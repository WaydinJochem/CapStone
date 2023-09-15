<template>
     <div class="add-products-div container">
        <div class="add-products-inner">
            <slot />
            <div class="input-details-div">
                <div class="input-details-row">
                    <label for="">Product Name</label>
                    <input type="text" class="info-input" v-model="update.prodName" />
                </div>
                <div class="input-details-row">
                    <label for="">Quantity</label>
                    <input type="number" class="info-input" v-model="update.quantity" />
                </div>
                <div class="input-details-row">
                    <label for="">Price</label>
                    <input type="number" class="info-input" v-model="update.amount" />
                </div>
                <div class="input-details-row">
                    <label for="">Category</label>
                    <input type="text" class="info-input" v-model="update.Category" />
                </div>
                <div class="input-details-row">
                    <label for="">Image URL</label>
                    <input type="text" class="info-input" v-model="update.prodUrl" />
                </div>
              
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        update: Object,
    }
}
</script>
<style>
    
</style>