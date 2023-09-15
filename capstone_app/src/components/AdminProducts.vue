<template>
    <div v-if="items">
        <h2>Admin Table</h2>
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
                    <button @click="removeProd(product.prodID)">Delete</button>
                    <button @click="editModal(product.prodID)">Edit</button>
                </td>
            </tr>
        </table>
        <div id="modal" v-if="modalVisible">
            <div id="modal-content">
                <!-- Modal content goes here -->
                <span id="close" @click="closeModal">&times;</span>
                <!-- Start of modal content -->
                <div v-if="modalContentType === 'add'">
                    <Add :newItem="newItem">
                        <button @click="newProd()">Add Product</button>
                    </Add>
                </div>
                <div v-if="modalContentType === 'edit'">
                    <Edit :update="selectedItem">
                        <button @click="updateProduct()">Edit Product</button>
                    </Edit>
                </div>
                <!-- End of modal content -->
            </div>
        </div>
    </div>
    <div v-else>
        <h3>Loading Products Table</h3>
        <spinner/>
    </div>
</template>
<script>
import Add from './AddProductModal.vue';
import Edit from './EditProductModal.vue';
import spinner from './spinner.vue';

export default {
    components: {
        Add,
        Edit,
        spinner
    },
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
            modalContentType: null,
            // update: {
            //     ...this.newItem
            // },
            selectedItem: null,
            // updateID: null,
            newItem: {
                prodID: 0,
                prodName: "",
                quantity: 0,
                amount: 0,
                Category: "",
                prodUrl: ""
            },
        }
    },
    methods: {
        openModal() {
            this.modalContentType = 'add';
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false
        },
        async editModal(prodID) {
            await this.$store.dispatch("fetchItems")
            this.selectedItem = {
                ...this.$store.state.items.find(
                    (product) => product.prodID === prodID
                ),
            };
            this.modalContentType = 'edit';
            this.modalVisible = true;
        },
        newProd() {
            this.modalContentType = 'add';
            this.modalVisible = true;
            const success = this.$store.dispatch("AddItem", this.newItem);
            if (success) {
                this.closeModal();
            }
            else {
                alert("Item failed to add")
            }
        },
        removeProd(prodID) {
            const success = this.$store.dispatch("RemoveItem", prodID);
            if (success) {
                this.closeModal();
            }
            else {
                alert("Failed to delete")
            }
        },
        updateProduct() {
            const success = this.$store.dispatch("Edit", this.selectedItem)
            if (success) {
                this.closeModal();
            }
            else {
                alert("error")
            }
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

#modal {
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


#modal-content {
    border-radius: 20px;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 10px;
    border: 1px solid #888;
    width: 60%;
    /* height: 40%; */
}


#close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

#close:hover,
#close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}


</style>