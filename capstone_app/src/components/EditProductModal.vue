<template>
     <div class="add-products-div container">
        <div class="add-products-inner">
            <slot />
            <div>
                <div >
                    <label for="">Product Name</label>
                    <input type="text" v-model="update.prodName" />
                </div>
                <div>
                    <label for="">Quantity</label>
                    <input type="number" v-model="update.quantity" />
                </div>
                <div>
                    <label for="">Price</label>
                    <input type="number" v-model="update.amount" />
                </div>
                <div>
                    <label for="">Category</label>
                    <input type="text"  v-model="update.Category" />
                </div>
                <div>
                    <label for="">Image URL</label>
                    <input type="text" v-model="update.prodUrl" />
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