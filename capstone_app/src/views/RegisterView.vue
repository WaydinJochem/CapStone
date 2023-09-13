<template>
    <form class="modal-content"> <!-- Register Content Start -->
        <RegisterForm :newUser="newUser">
        </RegisterForm>
        <button @click="AddUser()">Submit</button>
    </form>
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
            if (!this.newUser.firstName ||
                !this.newUser.lastName ||
                !this.newUser.userAge ||
                !this.newUser.Gender ||
                !this.newUser.emailAdd ||
                !this.newUser.userPwd) {
                swal("Please fill out all required fields.");
                return; // Prevent form submission
            }
            else if (success) {
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
    background-color:rgb(18, 101, 184);
    margin: 15% auto;
    padding: 10px;
    /* border: 1px solid #888; */
    width: 60%;
    /* height: 40%; */
}
</style>