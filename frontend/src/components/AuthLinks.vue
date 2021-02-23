<template>
  <div>
    <div v-if="$store.getters.get_user_categories.length" class="main_frame">
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
        <p class="form_field__items">У вас нет ни одной категории. Для создания категории нажмите 'create
          category'</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'authlinks',
  computed: {
    categories() {
      return this.$store.getters.get_user_categories
    },
  },
  methods: {
    async edit_category(id) {
      try {
        await this.$store.dispatch('fetch_category_from_api', id)
        await this.$router.push('editcategory')
      } catch (error) {
        console.log(error)
      }
    }
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

<style scoped>
.cat_title {
  cursor: pointer;
}
</style>