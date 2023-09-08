<template>
    <main>
    <ProductTable/>
    <UserTable/>
    </main>
</template>
<script>
import ProductTable from '@/components/AdminProducts.vue';
import UserTable from '@/components/AdminUser.vue';
export default {
    
    components: {
        ProductTable,
        UserTable
    }
}
</script>
<style>
    
</style>