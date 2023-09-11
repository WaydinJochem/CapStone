<template>
    <div class="modal">
        <div class="modal-content">
            <!-- Register Content Start -->
            <div class="input-details-div">

                <div class="input-details-row">
                    <label for="">UserID</label>
                    <input type="number" class="info-input" v-model="newUser.userID" readonly />
                </div>
                <div class="input-details-row">
                    <label for="">FirstName</label>
                    <input type="text" class="info-input" v-model="newUser.firstName" />
                </div>
                <div class="input-details-row">
                    <label for="">lastName</label>
                    <input type="text" class="info-input" v-model="newUser.lastName"/>
                </div>
                <div class="input-details-row">
                    <label for="">Age</label>
                    <input type="number" class="info-input" v-model="newUser.userAge"/>
                </div>
                <div class="input-details-row">
                    <label for="">Gender</label>
                    <input type="text" class="info-input" v-model="newUser.Gender"/>
                </div>
                <div class="input-details-row">
                    <label for="">Role</label>
                    <input type="text" class="info-input" v-model="newUser.userRole"/>
                </div>
                <div class="input-details-row">
                    <label for="">Email</label>
                    <input type="email" class="info-input" v-model="newUser.emailAdd"/>
                </div>
                <div class="input-details-row">
                    <label for="">Password</label>
                    <input type="password" class="info-input" v-model="newUser.userPwd"/>
                </div>
                <div class="input-details-row">
                    <label for="">Img</label>
                    <input type="text" class="info-input" v-model="newUser.userURL"/>
                </div>
            </div>

            <!-- Register Content End -->
            <button @click="AddUser()">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newUser: {
                userID: 0,
                firstName: "",
                lastName: "",
                userAge: 0,
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

.modal {
    /* position: fixed; */
    /* z-index: 1; */
    /* left: 0;
    top: 0; */
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