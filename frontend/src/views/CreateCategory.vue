<template>
  <div class="form_field">
    <BackItem :backPage="this.back_page"/>
    <div class="form_field__title">{{ cc.create_category_title[lan] }}</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler">
      <label for="category_title">{{ cc.category_title[lan] }}</label>
      <input
          id="category_title"
          type="text"
          v-model.trim="category_title"
          v-bind:class="{invalid: $v.category_title.$dirty && !$v.category_title.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.category_title.$dirty && !$v.category_title.required"
      >{{ cc.helper_text_category_title[lan] }}
      </small>
      <button type="submit" class="form_field__btn">{{ cc.btn_create[lan] }}</button>
    </form>
  </div>
</template>

<script>
import {required} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";

export default {
  name: 'createcategory',

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

  validations: {
    category_title: {required}
  },

  components: {
    BackItem
  },

  computed: {
    cc() {
      return this.$store.getters.get_lang_create_category
    },
    lan() {
      return this.$store.getters.get_lan
    }
  },

  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        category_title: this.category_title
      }
      try {
        await this.$store.dispatch('create_category', formData)
      } catch (error) {
        console.log(error)
      }
      this.$router.push({path: this.back_page})
    }
  }

}
</script>