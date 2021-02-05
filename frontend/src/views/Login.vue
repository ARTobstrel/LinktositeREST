<template>

  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">Авторизация</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler">
      <label for="username">Имя пользователя</label>
      <input
          id="username"
          type="text"
          v-model.trim="username"
          v-bind:class="{invalid: $v.username.$dirty && !$v.username.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.username.$dirty && !$v.username.required"
      >Необходимо ввести имя
      </small>
      <label for="password">Пароль</label>
      <input
          id="password"
          type="password"
          v-model.trim="password"
          v-bind:class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
      >Введите пароль
      </small>
      <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
      >Короткий пароль
      </small>
      <button type="submit" class="form_field__btn">Войти</button>
      <div class="form_field__auth_footer">
        <router-link to='/signup' class='username__log'>Регистрация</router-link>
        <a href='#' class='username__log'>Войти через Google</a>
      </div>
    </form>
  </div>

</template>

<script>
import {required, minLength} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";

export default {
  name: 'login',
  data: () => ({
    username: '',
    password: '',
  }),
  validations: {
    username: {required},
    password: {required, minLength: minLength(6)}
  },
  components: {BackItem},
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        username: this.username,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        await this.$store.dispatch('auth_user')
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      }

    }
  }
}
</script>
