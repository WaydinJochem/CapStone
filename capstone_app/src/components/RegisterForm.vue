<template>
    <div class="form-body">
        <div class="Category">
            <label class="floating-label">FirstName</label>
            <input type="text" class="info-input" v-model="newUser.firstName" placeholder="Enter FirstName Here" />
        </div>
        <div class="Category">
            <label for="">LastName</label>
            <input type="text" class="info-input" v-model="newUser.lastName" placeholder="Enter LastName Here" />
        </div>
        <div class="Category">
            <label for="">Age</label>
            <input type="number" class="info-input" v-model="newUser.userAge" placeholder="Enter Age" />
        </div>
        <div class="Category">
            <label for="">Gender</label>
            <input type="text" class="info-input" v-model="newUser.Gender" placeholder="Male/Female" id="gender"/>
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
                <input type="password" class="info-input" v-model="newUser.userPwd" id="password"
                    placeholder="password" /><span style="font-size: x-large;" @click="checkPass()"
                    id="eye">&#128065;</span>
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
    </div>
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
            const eye = document.getElementById("eye")

            if (input.getAttribute("type") === "password") {
                input.setAttribute("type", "text");
                eye.style.color = "black"
                input.style.color = "black"
            } else {
                input.setAttribute("type", "password");
                eye.style.color = "gray"
                input.style.color = "gray"
            }
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.form-body {
    color: white;
    font-weight: bold;
    box-shadow: inset -12px 12px black;
    border-bottom: 2px black solid;
    border-left: 1px black solid;
}

.Category {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

span {
    margin-left: 5px;
    color: black;
}

span:hover {
    cursor: pointer;
}


input {
    font-family: 'Oswald', sans-serif;
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    background: white;
    border: 3px solid #ccc;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
    outline: none;
    text-align: center;
    color: grey;
}

#gender {
    text-transform: capitalize;
}


input:focus {
    width: 40%;
    border: 4px solid black;
    color: black;
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