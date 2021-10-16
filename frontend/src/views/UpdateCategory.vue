<template>
  <div class="form_field">
    <BackItem :backPage="this.back_page"/>
    <div class="form_field__title">Переименование категории {{ category.name }}</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler(category.id)">
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
      <button type="submit" class="form_field__btn">Изменить</button>
    </form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";

export default {
  name: 'updatecategory',

  props: {
    back_page: {
      type: String,
      default: '/'
    }
  },

  data() {
    return {
      category_title: ''
    }
  },

  computed: {
    category() {
      return this.$store.getters.get_user_category_id
    }
  },

  validations: {
    category_title: {required}
  },

  components: {
    BackItem
  },

  methods: {
    async submitHandler(id) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        category_title: this.category_title,
        category_id: this.category.id
      }
      try {
        await this.$store.dispatch('update_category', formData)
        await this.$store.dispatch('fetch_category_from_api', id)
      } catch (error) {
        console.log(error)
      }
      await this.$router.push(this.back_page)
    }
  },

  created() {
    this.category_title = this.category.name
  }

}
</script>
