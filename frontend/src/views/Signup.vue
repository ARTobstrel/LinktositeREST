<template>

  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">Новый пользователь</div>
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
          v-if="error_message.username"
      >{{ error_message.username[0] }}
      </small>
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
          v-if="error_message.password"
      >{{ error_message.password[0] }}
      </small>
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

      <label for="password2">Пароль еще раз</label>
      <input
          id="password2"
          type="password"
          v-model.trim="password2"
          v-bind:class="{invalid: this.password !== this.password2}"
      >
      <small
          class="helper-text invalid"
          v-if="this.password !== this.password2"
      >Пароли должны совпадать
      </small>
      <button type="submit" class="form_field__btn">Регистрация</button>
      <div class="form_field__auth_footer">
        <router-link to=/login class='username__log'>Войти</router-link>
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
      password2: ''
    }
  },

  computed: {
    error_message() {
      return this.$store.getters.get_user_message
    }
  },

  validations: {
    username: {required},
    password: {required, minLength: minLength(6)},
  },

  components: {BackItem},

  methods: {
    async submitHandler() {
      if (this.$v.$invalid || this.password !== this.password2) {
        this.$v.$touch()
        return
      }
      const formData = {
        username: this.username,
        password: this.password
      }
      try {
        await this.$store.dispatch('register', formData)
        await this.$store.dispatch('login', formData)
        this.$store.dispatch('auth_user')
        this.$store.commit('set_user_message', []) //удаляем сообщения об ошибках
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
