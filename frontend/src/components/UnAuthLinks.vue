<template>
  <div class="main-frame">
    <div class="cat_frame">
      <div class="cat_title">{{ un_auth_links_component.links[lan] }}</div>
      <div v-for="link in links" class="link">
        <a v-bind:href="link.link" target="_blank">
          <img v-bind:src="link.image" alt="">
          <p>{{ link.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'unauthlinks',

  computed: {
    links() {
      return this.$store.getters.get_un_auth_links
    },
    un_auth_links_component(){
      return this.$store.getters.get_lang_un_auth_links
    },
    lan(){
      return this.$store.getters.get_lan
    }

  },

  async created() {
    try {
      await this.$store.dispatch('fetch_un_auth_links_from_api')
    } catch (error) {
      console.log(error)
    }
  }
}
</script>