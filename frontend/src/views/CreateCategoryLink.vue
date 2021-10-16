<template>
  <div class="form_field">
    <BackItem :backPage="this.back_page"/>
    <div class="form_field__title">{{ ccl.title[lan] }} {{ category.name }}</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler(category.id)" enctype="multipart/form-data">
      <label for="title">{{ ccl.link_name[lan] }}</label>
      <input
          id="title"
          type="text"
          v-model.trim="title"
          v-bind:class="{invalid: $v.title.$dirty && !$v.title.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
      >{{ ccl.helper_text_link_name[lan] }}
      </small>
      <label for="link">{{ ccl.url_name[lan] }}</label>
      <input
          id="link"
          type="text"
          v-model.trim="link"
          v-bind:class="{invalid: $v.link.$dirty && !$v.link.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.link.$dirty && !$v.link.required"
      >{{ ccl.helper_text_url_name[lan] }}
      </small>
      <label for="image">{{ ccl.icon[lan] }}</label>
      <input
          id="image"
          type="file"
          ref="file"
          v-on:change="fileUploadHandler"
      >
      <button type="submit" class="form_field__btn">{{ ccl.btn_create[lan] }}</button>
    </form>
  </div>

</template>

<script>
import {required} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";

export default {
  name: 'createcategorylink',

  props: {
    back_page: {
      type: String,
      default: '/'
    }
  },

  data() {
    return {
      title: '',
      link: '',
      image: '',
    }
  },

  computed: {
    category() {
      return this.$store.getters.get_user_category_id
    },
    ccl() {
      return this.$store.getters.get_lang_create_category_link
    },
    lan() {
      return this.$store.getters.get_lan
    }
  },

  validations: {
    title: {required},
    link: {required},
  },

  components: {
    BackItem
  },

  methods: {
    fileUploadHandler() {
      this.image = this.$refs.file.files[0]
    },

    async submitHandler(id) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      let formData = new FormData()

      formData.append('category', this.category.id)
      formData.append('title', this.title)
      formData.append('link', this.link)
      if (this.image) {
        formData.append('image', this.image)
      }

      try {
        await this.$store.dispatch('create_link', formData)
        await this.$store.dispatch('fetch_category_from_api', id)
      } catch (error) {
        console.log(error)
      }
      this.$router.push({name: 'editcategory'})
    },

  },

  async mounted() {
    try {
      await this.$store.dispatch('fetch_user_links_from_api')
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
