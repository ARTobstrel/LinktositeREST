<template>
  <div>
    <div class="form_field__title">List users</div>
    <UserItem
        v-for="user in users" :key="user.id"
        v-bind:user="user"
        v-on:delete_user="delete_user"
    />
    <div class="form_field__category_footer"></div>
  </div>
</template>

<script>
import UserItem from "@/components/UserItem";

export default {
  props: ['users'],
  components: {
    UserItem
  },
  methods: {
    delete_user(id) {
      this.$emit('delete_user', id);
    }
  }
}
</script>