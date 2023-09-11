<template >
    <div v-if="users">
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
                <td>{{  users.userID }}</td>
                <td>{{ users.firstName }}</td>
                <td>{{ users.lastName }}</td>
                <td>{{ users.userAge }}</td>
                <td>{{ users.Gender }}</td>
                <td>{{ users.userRole }}</td>
                <td>{{ users.emailAdd }}</td>
                <td>{{ users.userPwd }}</td>
                <td>{{ users.userURL }}</td>
                <td>
                    <button @click="openModal()">Add</button>
                    <button @click="removeProd(product.prodID)">Delete</button>
                    <button @click="editModal(product.prodID)">Edit</button>
                </td>
            </tr>
        </table>
    </div>
    <div v-else>Loading users</div>
</template>
<script>
export default {
computed: {
    users() {
        return this.$store.state.users
    }
},
mounted() {
    this.$store.dispatch("fetchUsers");
}
}
</script>
<style scoped>
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
</style>