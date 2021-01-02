<template>
  <div id="app">
    <div class="screen">

      <Logo/>

      <div class="container">
        <router-view/>
      </div>

      <Version/>

    </div>

  </div>
</template>

<script>
import axios from "axios";

import Logo from "@/components/Logo";
import Version from "@/components/Version";

export default {
  name: 'app',
  components: {
    Logo,
    Version
  },
  data() {
    return {
      user: [],
      categories: [],
      urls: {
        'all_categories': 'http://127.0.0.1:8000/api/v1/category/all/'
      }
    }
  },
  methods: {
    get_all_categories() {
      axios.get(this.urls.all_categories).then((response) => {
        this.categories = response.data;
      })
    }
  },
}
</script>

<style>
@import "assets/style.css";
</style>