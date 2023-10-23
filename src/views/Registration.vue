<template>
  <div class="window">
    <h2 class="registration__title">Registration</h2>
    <router-link tag="a" to="login" v-text="routerLink"/>
    <form class="form" @submit.prevent="createUser">
      <input
          type="email"
          v-model="user.userEmail"
          placeholder="set email"
          required>
      <input
          type="text"
          v-model="user.userName"
          placeholder="set name"
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
      routerLink: 'Have account',
      user: {
        userName: '',
        userEmail: '',
        userPassword: ''
      }
    }
  },
  methods: {
    async createUser() {
      this.$store.commit('CREATE_USER', this.user);
      if(this.user.userName && this.user.userPassword) {
        const resp = await fetch('https://project-ninnini-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
          method: 'POST',
          body: JSON.stringify(this.user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const responce = await resp.json()
        console.log(responce)
        localStorage.setItem('user', responce.name)
      }
      this.$store.commit('CREATE_USER', this.user)
      this.user = ''
      console.log(this.$store.getters.GET_USER)

      router.push('home')
      // console.log(this.$store.state.newUser)
    }
  }
}

</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }
  form > input {
    padding: 3px 3px 3px 6px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.71);
    margin: 3px;
    outline: none;
  }
  .registration__title {
    text-align: center;
    font-size: 20px;
  }
  .window {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    max-width: 500px;
    margin: 0 auto;
    min-height: 200px;
  }

</style>