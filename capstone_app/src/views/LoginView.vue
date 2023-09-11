<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">Email</label>
      <input type="text" id="username"/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
export default {
}
</script>
<style></style>