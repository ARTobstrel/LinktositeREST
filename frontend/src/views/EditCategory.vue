<template>

  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">{{ category.name }}</div>
    <div v-for="link of category.links" :key="link.id" class="form_field__link jcsb">
      <div class="link__size">
        <div class="link">
          <a v-bind:href="link.link" target="_blank"><img v-bind:src="link.image" alt="">
            <p>{{ link.title }}</p></a>
        </div>
      </div>
      <span class="rename_btn font_size14"><a href="#">Edit</a></span>
      <span class="delete_btn font_size14"><a
          v-on:click="delete_link({id: category.id, link_id: link.id})">Delete</a></span>
    </div>
    <div class="form_field__category_footer">
      <a class="rename_btn font_size22" href='#'>Rename</a>
      <a class="delete_btn font_size22" href='#'>Delete Category</a>
    </div>

  </div>

</template>

<script>
import BackItem from "@/components/BackItem";

export default {
  name: 'editcategory',
  computed: {
    category() {
      return this.$store.getters.get_user_category_id
    }
  },
  methods: {
    async delete_link(category) {
      try {
        await this.$store.dispatch('delete_link', category.link_id)
      } catch (error) {
        console.log(error)
      }
      this.$store.dispatch('fetch_category_from_api', category.id)
    }
  },
  components: {BackItem}
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>