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
import Logo from "@/components/Logo";
import Version from "@/components/Version";

export default {
  name: 'app',
  components: {
    Logo,
    Version
  },

  created() {
    if (localStorage.getItem('auth_token')) {
      this.$store.dispatch('auth_user')
    }
  },
}
</script>

<style>
@import "assets/style.css";
</style>