<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
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
        this.$router.push('/')
      }
      else {
        alert('unable to login')
      }
    },
  }
}
</script>
<style></style>