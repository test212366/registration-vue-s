<template>
  <div class="window">
    <h2 class="registration__title">Login</h2>
    <router-link tag="a" to="/" v-text="routerLink"/>
    <form class="form" @submit.prevent="confirmUser">
      <input
          type="email"
          v-model="user.userEmail"
          placeholder="set email"
          required>
      <input
          type="password"
          v-model="user.userPassword"
          placeholder="set password"
          required>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>

import router from "@/router";

export default {
  data() {
    return {
      routerLink: 'Registration',
      user: {
        userEmail: '',
        userName: ''
      }
    }
  },
  methods: {
    confirmUser() {
      this.$store.commit('CREATE_USER', this.user);
      this.user = ''
      localStorage.setItem('user', '12323')
      router.push('home')
    }
  }
}

</script>

<style scoped>
</style>