<template>
  <div class="form-body">
    <div>
      <h1>Login</h1>
      <p>If you reached this page it means you've successfully registered you account</p>
    </div>

    <form @submit.prevent="loginUser">
      <div class="Category">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="Category">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <span style="font-size: x-large;" @click="checkPass()" id="eye">&#128065;</span>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    // loginUser() {
    //   // Get the user data from the userData cookie
    //   const userData = JSON.parse(VueCookies.get('userData'));

    //   if (userData && userData.email === this.email && userData.password === this.password) {
    //     alert('Login successful');
    //     // You can also redirect the user to another page here
    //   } else {
    //     alert('Login failed. Please check your credentials.');
    //   }  
    // },
    async loginUser() {
      const success = await this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });

      if (success) {
        alert('Login successfully');
        // this.$router.push('/')
      }
      else if (!success)
        alert('unable to login')
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
.form-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-items: center; */
  padding: 50px;
  margin: auto;
  width: 20%;
  color: white;
  background: aqua;
  box-shadow: inset -12px 12px black;
  border-radius: 10px;
  border-bottom: 2px black solid;
  border-left: 1px black solid;
}

button {
  margin-top: 20px;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
  box-shadow: inset -4px -4px grey;
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

.Category {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>