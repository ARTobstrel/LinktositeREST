<template>
  <div>
    <div class="form_field__title">Список пользователей</div>
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
  components: {
    UserItem
  },
}
</script>