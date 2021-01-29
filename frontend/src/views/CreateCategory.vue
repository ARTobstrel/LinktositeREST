<template>
  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">Создание новой категории</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler">
      <label for="category_title">Название категории</label>
      <input
          id="category_title"
          type="text"
          v-model.trim="category_title"
          v-bind:class="{invalid: $v.category_title.$dirty && !$v.category_title.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.category_title.$dirty && !$v.category_title.required"
      >Необходимо ввести название
      </small>
      <button type="submit" class="form_field__btn">Создать</button>
    </form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";

export default {
  name: 'create_category',
  data: () => ({
    category_title: ''
  }),
  validations: {
    category_title: {required}
  },
  components: {
    BackItem
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        category_title: this.category_title
      }
      console.log(formData)
      this.$router.push('/')
    }
  }

}
</script>