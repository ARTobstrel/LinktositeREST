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
      <span class="rename_btn font_size14"><a
          v-on:click="edit_link(link.id)">{{ ec.btn_edit[lan] }}</a></span>
      <span class="delete_btn font_size14"><a
          v-on:click="delete_link({id: category.id, link_id: link.id})">{{ ec.btn_delete_link[lan] }}</a></span>
    </div>
    <div class="form_field__new_link">
      <router-link class="font_size14" :to="{name: 'createcategorylink',
      params: {back_page: '/editcategory'}}">&#10010; {{ ec.btn_add_link[lan] }}
      </router-link>
    </div>
    <div class="form_field__category_footer">
      <a class="rename_btn font_size22" v-on:click="update_category()">{{ ec.btn_rename[lan] }}</a>
      <a class="delete_btn font_size22" v-on:click="delete_category()">{{ ec.btn_delete_category[lan] }}</a>
    </div>
  </div>

</template>

<script>
import BackItem from "@/components/BackItem";

export default {
  name: 'editcategory',

  data() {
    return {
      back_page: '/editcategory'
    }
  },

  computed: {
    category() {
      return this.$store.getters.get_user_category_id
    },
    ec() {
      return this.$store.getters.get_lang_edit_category
    },
    lan() {
      return this.$store.getters.get_lan
    }
  },

  methods: {
    async edit_link(id) {
      try {
        await this.$store.dispatch('fetch_user_link_from_api', id)
        await this.$router.push({name: 'editlink', params: {back_page: this.back_page}})
      } catch (error) {
        console.log(error)
      }
    },
    async delete_link(category) {
      try {
        await this.$store.dispatch('delete_link', category.link_id)
      } catch (error) {
        console.log(error)
      }
      this.$store.dispatch('fetch_category_from_api', category.id)
    },
    async update_category() {
      try {
        await this.$router.push({name: 'updatecategory', params: {back_page: this.back_page}})
      } catch (error) {
        console.log(error)
      }
    },
    async delete_category() {
      try {
        await this.$store.dispatch('delete_category', this.category.id)
        await this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
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