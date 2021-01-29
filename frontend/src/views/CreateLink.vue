<template>
  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">Создание новой ссылки</div>
    <form class="form_field__items" v-on:submit.prevent="submitHandler" enctype="multipart/form-data">
      <label for="category">Категория</label>
      <select

          id="category"
          v-model="category"
          v-bind:class="{invalid: $v.category.$dirty && !$v.category.required}"
      >
        <option v-for="category in categories" :key="category.id">{{ category.name }}</option>
      </select>
      <small
          class="helper-text invalid"
          v-if="$v.category.$dirty && !$v.category.required"
      >Выберите категорию
      </small>
      <router-link to='/create_category' class='form_field__add_category'
                   title='New category'>&#10010;
      </router-link>
      <label for="link_title">Название ссылки</label>
      <input
          id="link_title"
          type="text"
          v-model.trim="link_title"
          v-bind:class="{invalid: $v.link_title.$dirty && !$v.link_title.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.link_title.$dirty && !$v.link_title.required"
      >Укажите название ссылки
      </small>
      <label for="link_url">URL ссылки</label>
      <input
          id="link_url"
          type="text"
          v-model.trim="link_url"
          v-bind:class="{invalid: $v.link_url.$dirty && !$v.link_url.required}"
      >
      <small
          class="helper-text invalid"
          v-if="$v.link_url.$dirty && !$v.link_url.required"
      >Укажите корректный URL
      </small>
      <label for="link_image">Иконка</label>
      <input
          id="link_image"
          type="file"
          ref="file"
          v-on:change="fileUploadHandler"
      >
      <button type="submit" class="form_field__btn">Создать</button>
    </form>
  </div>

</template>

<script>
import {required} from "vuelidate/lib/validators"
import BackItem from "@/components/BackItem";
import axios from "axios";

export default {
  name: 'create_link',
  data: () => ({
    categories: '',
    category: '',
    link_title: '',
    link_url: '',
    link_image: ''
  }),
  validations: {
    category: {required},
    link_title: {required},
    link_url: {required},
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
        category: this.category,
        link_title: this.link_title,
        link_url: this.link_url,
        link_image: this.link_image
      }
      console.log(formData)
      this.$router.push('/')
    },

    get_categories() {
      axios.get('http://127.0.0.1:8000/api/v1/category/all/')
          .then(response => {
            this.categories = response.data;
            console.log(this.categories)
          })
    },

    fileUploadHandler(){
      this.link_image = this.$refs.file.files[0]
    }
  },

  async mounted() {
    await this.get_categories()
  }
}
</script>