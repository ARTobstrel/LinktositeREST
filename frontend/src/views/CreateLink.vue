<template>
  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">{{ cl.title[lan] }}</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler" enctype="multipart/form-data">
      <label for="category">{{ cl.category[lan] }}</label>
      <select
          id="category"
          v-model="category"
          v-bind:class="{invalid: $v.category.$dirty && !$v.category.required}"
      >
        <option v-for="category in categories"
                :key="category.id"
        >{{ category.name }}
        </option>
      </select>
      <small
          class="helper-text invalid"
          v-if="$v.category.$dirty && !$v.category.required"
      >{{ cl.helper_text_category[lan] }}
      </small>
      <router-link :to="{name: 'createcategory', params: {back_page: '/createlink'}}" class='form_field__add_category'
                   title='New category'>&#10010;
      </router-link>
      <label for="title">{{ cl.link[lan] }}</label>
      <input
          id="title"
          type="text"
          v-model.trim="title"
          v-bind:class="{invalid: $v.title.$dirty && !$v.title.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
      >{{ cl.helper_text_link[lan] }}
      </small>
      <label for="link">{{ cl.url[lan] }}</label>
      <input
          id="link"
          type="text"
          v-model.trim="link"
          v-bind:class="{invalid: $v.link.$dirty && !$v.link.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.link.$dirty && !$v.link.required"
      >{{ cl.helper_text_url[lan] }}
      </small>
      <label for="image">{{ cl.icon[lan] }}</label>
      <input
          id="image"
          type="file"
          ref="file"
          v-on:change="fileUploadHandler"
      >
      <button type="submit" class="form_field__btn">{{ cl.btn_create[lan] }}</button>
    </form>
  </div>

</template>

<script>
import {required} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";

export default {
  name: 'createlink',

  data() {
    return {
      category: '',
      title: '',
      link: '',
      image: '',
    }
  },

  computed: {
    categories() {
      return this.$store.getters.get_user_categories
    },
    cl() {
      return this.$store.getters.get_lang_create_link
    },
    lan() {
      return this.$store.getters.get_lan
    }

  },

  validations: {
    category: {required},
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

    get_id_from_name(name) {
      for (category of this.categories) {
        if (category.name === name) {
          return category.id
        }
      }
      return 0
    },

    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      let formData = new FormData()

      formData.append('category', this.get_id_from_name(this.category))
      formData.append('title', this.title)
      formData.append('link', this.link)
      if (this.image) {
        formData.append('image', this.image)
      }

      try {
        await this.$store.dispatch('create_link', formData)
      } catch (error) {
        console.log(error)
      }
      this.$router.push('/')
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