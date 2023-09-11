<template>
    <main>
    <ProductTable/>
    <UsersTable/> 
    </main>
</template>
<script>
import ProductTable from '@/components/AdminProducts.vue';
import UsersTable from '@/components/UsersAdmin.vue';
export default {
    
    components: {
        ProductTable,
        UsersTable
    }
}
</script>
<style>
    
</style>