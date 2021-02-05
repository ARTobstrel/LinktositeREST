<template>
  <div class="form_field">
    <BackItem/>
    <Useritems
        v-bind:users="users"
    />
  </div>
</template>


<script>
import BackItem from "@/components/BackItem";
import Useritems from "@/components/Useritems";
import UserItem from "@/components/UserItem";


export default {
  name: 'users',
  computed: {
    users() {
      return this.$store.getters.get_users
    }
  },
  async mounted() {
    await this.$store.dispatch('fetch_users')
  },

  components: {
    BackItem,
    Useritems,
    UserItem
  },

}

</script>