<template>
  <div>
    Привет, {{user.userName}}
    можно сохранять кеш user'a и делать fetch запрос на сервер и проверять есть ли совпадения с кешом из local storage
    так же с помощью выше описанного метода можно легко сделать логин только проверять имя и пароль и записывать user'a в vueX
    чтобы был доступ для всех элементов,
    это нужно чтобы после регестрации можно было подписываться на разные группы и это сохранялось на сервере
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.GET_USER
    }
  },
  methods: {

  }

}
</script>

<style scoped>

</style>