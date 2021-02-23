<template>
  <div class="main-frame">
    <div class="cat_frame">
      <div class="cat_title">Links</div>
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
import axios from "axios";

export default {
  name: 'unauthlinks',
  computed: {
    links() {
      return this.$store.getters.get_un_auth_links
    }
  },
  async mounted() {
    // if (this.$store.getters.get_user_token) {
    //   this.$store.dispatch('auth_user')
    // }
    try {
      await this.$store.dispatch('fetch_un_auth_links_from_api')
    } catch (error) {
      console.log(error)
    }
  }
}
</script>