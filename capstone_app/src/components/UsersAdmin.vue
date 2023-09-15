<template >
    <div v-if="users">
        <h2>User Table</h2>
        <table>
            <tr>
                <th>User ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Email</th>
                <th>Password</th>
                <th>Picture</th>
                <th>Action</th>
            </tr>
            <tr v-for="users in users" :key="users">
                <td>{{ users.userID }}</td>
                <td>{{ users.firstName }}</td>
                <td>{{ users.lastName }}</td>
                <td>{{ users.userAge }}</td>
                <td>{{ users.Gender }}</td>
                <td>{{ users.userRole }}</td>
                <td>{{ users.emailAdd }}</td>
                <td>{{ users.userPwd }}</td>
                <td>{{ users.userURL }}</td>
                <td>
                    <button @click="removeUser(users.userID)">Delete</button>
                    <button @click="editModal(users.userID)">Edit</button>
                </td>
            </tr>
        </table>
        <div class="modal" v-if="modalVisible">
            <div class="modal-content">
                <span class="close" @click="closeModal()">&times;</span>
                <div>
                    <!-- Modal Content Start -->
                    <EditUser :edit="selectedUser">
                        <button @click="edit()">Update User</button>
                    </EditUser>
                    <!-- Modal Content End -->
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h4>Loading Users Table</h4>
        <spinner />
    </div>
</template>
<script>
import EditUser from './EditUserModal.vue';
import spinner from './spinner.vue';
import sweetAlert from 'sweetalert'
export default {
    components: {
        EditUser,
        spinner
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch("fetchUsers");
    },
    data() {
        return {
            modalVisible: false,
            selectedUser: null,

        }
    },
    methods: {
        openModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
        },
        removeUser(userID) {
            const success = this.$store.dispatch("RemoveUser", userID);
            if (success) {
                sweetAlert("!!Gone!!", "Deleted", "success")
            }
            else {
                sweetAlert("Oops..", "Delete Failed", "error")
            }
        },
        async editModal(userID) {
            await this.$store.dispatch("fetchUsers")
            this.selectedUser = {
                ...this.$store.state.users.find(
                    (users) => users.userID === userID
                ),
            };
            this.modalVisible = true;
        },
        edit() {
            const success = this.$store.dispatch("updateUser", this.selectedUser)
            if (success) {
                this.closeModal();
            }
            else {
                sweetAlert("Oops..", "Unable to edit", "error")
            }
        },
    }
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