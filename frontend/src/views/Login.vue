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
      >Input username.
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
          v-if="error_message.non_field_errors"
      >Username or password is incorrect.
      </small>
      <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
      >Input password.
      </small>
      <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
      >This password is too short.
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

  data() {
    return {
      username: '',
      password: '',
    }
  },

  computed: {
    error_message() {
      return this.$store.getters.get_user_message
    }
  },

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
        this.$store.commit('set_user_message', []) //удаляем сообщения об ошибках
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      }

    }
  }
}
</script>
