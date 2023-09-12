<template>
    <form class="form-body">

        <div class="Category">
            <label for="">FirstName</label>
            <input type="text" class="info-input" v-model="newUser.firstName" />
        </div>
        <div class="Category">
            <label for="">LastName</label>
            <input type="text" class="info-input" v-model="newUser.lastName" />
        </div>
        <div class="Category">
            <label for="">Age</label>
            <input type="number" class="info-input" v-model="newUser.userAge" />
        </div>
        <div class="Category">
            <label for="">Gender</label>
            <input type="text" class="info-input" v-model="newUser.Gender" />
        </div>
        <div class="Category">
            <label for="">Role</label>
            <input type="text" class="info-input" v-model="newUser.userRole" />
        </div>
        <div class="Category">
            <label for="">Email</label>
            <input type="email" class="info-input" v-model="newUser.emailAdd" placeholder="example@gmail.com" />
        </div>
        <div class="Category">
            <label for="">Password</label>
            <div>
                <input type="password" class="info-input" v-model="newUser.userPwd" id="password"/><span style="font-size: x-large;" @click="checkPass()">&#128065;</span>
            </div>
        </div>
        <div class="Category">
            <label for="">Img</label>
            <input type="text" class="info-input" v-model="newUser.userURL" />
        </div>
        <div class="Category">
            <input type="hidden" class="info-input" v-model="newUser.userID"
                placeholder="Will be provided upon successful sign up" />
        </div>

    </form>

    <!-- Register Content End -->
</template>
<script>
export default {
    props: {
        newUser: Object
    },
    methods: {
        checkPass() {
            const input = document.getElementById("password");

            if (input.getAttribute("type") === "password") {
                input.setAttribute("type", "text");
            } else {
                input.setAttribute("type", "password");
            }
        }
    }
}
</script>
<style scoped>
.Category {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 3px solid #ccc;
    border-radius: 20px;
    transition: 0.5s ease-in-out;
    outline: none;
}

input:focus {
    width: 50%;
    border: 3px solid aqua;

}

.form-body {
    border-radius: 20px;
    /* background-color: gray; */
    /* margin: 15% auto; */
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 20px;
}
</style>