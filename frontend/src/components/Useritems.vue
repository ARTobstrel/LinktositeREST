<template>
  <div>
    <div class="form_field__title">{{ user_items.list_users[lan] }}</div>
    <UserItem
        v-for="user in users" :key="user.id"
        v-bind:user="user"
    />
    <div class="form_field__category_footer"></div>
  </div>
</template>

<script>
import UserItem from "@/components/UserItem";

export default {
  props: ['users'],

  computed: {
    user_items(){
      return this.$store.getters.get_lang_user_items
    },
    lan(){
      return this.$store.getters.get_lan
    }
  },

  components: {
    UserItem
  },
}
</script>