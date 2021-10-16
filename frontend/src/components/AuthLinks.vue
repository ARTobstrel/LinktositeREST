<template>
  <div v-if="isLoading">
    <div v-if="categories.length" class="main_frame">
      <div v-for="category of categories" :key="category.id" class="cat_frame">
        <div class="cat_title" v-on:click="edit_category(category.id)">{{ category.name }}</div>
        <div v-for="link in category.links" class="link">
          <a v-bind:href="link.link" target="_blank">
            <img v-bind:src="link.image" alt="">
            <p>{{ link.title }}</p>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="main-frame">
      <div class="form_field">
        <p class="form_field__items">{{ auth_links.message_no_category[lan] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authlinks',

  data() {
    return {
      isLoading: false
    }
  },

  computed: {
    categories() {
      return this.$store.getters.get_user_categories
    },
    auth_links(){
      return this.$store.getters.get_lang_auth_links
    },
    lan(){
      return this.$store.getters.get_lan
    }
  },

  methods: {
    async edit_category(id) {
      try {
        await this.$store.dispatch('fetch_category_from_api', id)
        await this.$router.push('editcategory')
      } catch (error) {
        console.error(error)
      }
    }
  },

  async mounted() {
    try {
      await this.$store.dispatch('fetch_user_links_from_api')
      this.isLoading = true
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
.cat_title {
  cursor: pointer;
}
</style>