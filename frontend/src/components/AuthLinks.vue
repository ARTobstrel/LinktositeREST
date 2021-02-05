<template>
  <div>
    <div class="zxc">Пользователь залогинился</div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: 'authlinks',

  data() {
    return {
      categories: [],
    }
  },
  async mounted() {
    if (this.$store.getters.get_user_token) {
      this.$store.dispatch('auth_user')
    }

    await axios.get('http://127.0.0.1:8000/api/v1/links/')
        .then((response) => {
          this.links = response.data;
        })
  }

}
</script>

<style>
.zxc {

  font-size: 50px;
}
</style>
