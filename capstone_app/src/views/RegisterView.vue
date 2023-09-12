<template>
    <div class="modal-content"> <!-- Register Content Start -->
        <RegisterForm :newUser="newUser">
        </RegisterForm>
        <button @click="AddUser()">Submit</button>
    </div>
</template>
<script>
import RegisterForm from '@/components/RegisterForm.vue';
export default {
    components: {
        RegisterForm
    },

    data() {
        return {
            newUser: {
                userID: null,
                firstName: "",
                lastName: "",
                userAge: null,
                Gender: "",
                userRole: "",
                emailAdd: "",
                userPwd: "",
                userURL: ""
            }
        }
    },
    methods: {
        AddUser() {
            const success = this.$store.dispatch("Register", this.newUser);
            if (success) {
                alert("Success")
                this.$router.push("/login")
            }
            else {
                alert("Unable to add user")
            }
        }
    }
}
</script>
<style scoped>
/* div {
    min-height: 100vh;
    margin-top: 60px;
} */




.modal-content {
    border-radius: 20px;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 10px;
    border: 1px solid #888;
    width: 60%;
    /* height: 40%; */
}
</style>