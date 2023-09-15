<template>
  <div>
    <form @submit.prevent="loginUser" class="form-body container border rounded-5 py-3 shadow-lg mb-5">
      <div>
        <h1>Login</h1>
        <p>If you reached this page it means you've successfully registered you account</p>
      </div>
      <div>
        <label for="email">Email:</label>
      </div>
      <div class="Category mb-3">
        <input type="email" id="email" v-model="payload.emailAdd" />
      </div>
      <div>
        <label for="password">Password:</label>
      </div>
      <div class="Category mb-3">
        <input type="password" id="password" v-model="payload.userPwd" />
        <span style="font-size: x-large;" @click="checkPass()" id="eye">&#128065;</span>
      </div>
      <div class="py-auto">
        <router-link to="/register">
          <h5>Don't Have an Account? Why Not make one</h5>
        </router-link>
      </div>
      <div style="margin-left: auto;">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPwd: ""
      }
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch('login', this.payload)
    },
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
  },
}
</script>
<style scoped>
/*  */

button {
  margin-top: 20px;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
  box-shadow: inset -4px -4px grey;
  cursor: pointer;
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
  padding: 0 20px;
  margin: 8px 0;
  background: white;
  border: 3px solid #ccc;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  outline: none;
  text-align: center;
  color: grey;
}




input:focus {
  width: 40%;
  border: 4px solid black;
  color: black;
}

/* .Category {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
} */
</style>