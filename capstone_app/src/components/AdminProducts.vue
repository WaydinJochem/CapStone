<template>
    <div v-if="items">
        <table>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image URL</th>
                <th>Action</th>
            </tr>
            <tr v-for="product in items" :key="product">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>R{{ product.amount }}</td>
                <td>{{ product.Category }}</td>
                <td>{{ product.prodUrl }}</td>
                <td>
                    <button @click="openModal()">Add</button>
                    <button>Delete</button>
                </td>
            </tr>
        </table>
        <div class="modal" v-if="modalVisible" @click="closeModal()">
            <div class="modal-content">
                <!-- Modal content goes here -->
                <span class="close" @click="closeModal">&times;</span>
                <p>This is the modal content.</p>
            </div>
        </div>
    </div>
    <div v-else>printing products</div>
</template>
<script>
export default {
    computed: {
        items() {
            return this.$store.state.items;
        },
        
    },
    mounted() {
        this.$store.dispatch("fetchItems");
    },
    data() {
        return {
            modalVisible: false,
        };
    },
    methods: {
        openModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
        },
    },
}
</script>
<style scoped>
div {
    min-height: 100vh;
    margin-top: 60px;
}

table,
th,
td {
    border: 1px solid black;
}

table {
    width: 99%;
    margin: 10px auto 10px auto;
    background-color: black;
}

th {
    background-color: orangered;
}

td {
    background-color: white;
    width: 15%;
    text-align: center;
}

button {
    height: 40px;
    width: 90%;
    margin: 5px 5px 5px 5px;
    border: none
}

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}


.modal-content {
    border-radius: 20px;
    background-color: #fefefe;
    margin: 3% auto;
    padding: 10px;
    border: 1px solid #888;
    width: 60%;
    height: 40%;
}


.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>