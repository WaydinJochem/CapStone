<template>
    <div v-if="users">
        <table>
            <tr>
                <th>User ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>UserRole</th>
                <th>Email</th>
                <th>Password</th>
                <th>Picture</th>
                <th>Action</th>
            </tr>
            <tr v-for="user in users" :key="user">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.Gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userPwd }}</td>
                <td>{{ user.userURL }}</td>
                <td>
                    <button>Add</button>
                    <button>Delete</button>
                    <button>Edit</button>
                </td>
            </tr>
        </table>
        <div class="modal" v-if="modalVisible">
            <div class="modal-content">
                <!-- Modal content goes here -->
                <span class="close" @click="closeModal">&times;</span>
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
    <div v-else>Loading Users</div>
</template>
<script>
import EditUser from './EditUserModal.vue'
export default {
    components: {
        EditUser
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch("fetchUsers")
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
            // this.modalContentType = 'add';
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false
        },
        updateUser() {
            const success = this.$store.dispatch("updateUser", this.selectedItem)
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
    width: 10%;
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
    margin: 15% auto;
    padding: 10px;
    border: 1px solid #888;
    width: 60%;
    /* height: 40%; */
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