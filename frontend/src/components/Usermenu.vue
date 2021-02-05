<template>
  <div class='usermenu'>
    <div class="usermenu_elem">
      <router-link v-if="$store.getters.get_user.is_superuser" to="/users" class="btn admin_btn">Users</router-link>
    </div>
    <div class="usermenu_elem">
      <router-link v-if="$store.getters.get_is_auth" to="/create_category" class="btn user_btn">create category</router-link>
      <router-link v-if="$store.getters.get_is_auth" to="/create_link" class="btn user_btn">create link</router-link>
    </div>
    <div class="usermenu_elem">
      <router-link v-if="$store.getters.get_is_auth" to='/logout' class='btn auth_btn'>log out</router-link>
      <router-link v-if="!$store.getters.get_is_auth" to='/login' class="btn auth_btn">log in</router-link>
      <router-link v-if="!$store.getters.get_is_auth" to='/signup' class='btn auth_btn'>sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>