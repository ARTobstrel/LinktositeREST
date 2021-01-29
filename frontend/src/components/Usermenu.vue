<template>
  <div class='usermenu'>
    <div class="usermenu_elem">
      <router-link to="/users" class="btn admin_btn">Users</router-link>
    </div>
    <div class="usermenu_elem">
      <router-link to="/create_category" class="btn user_btn">create category</router-link>
      <router-link to="/create_link" class="btn user_btn">create link</router-link>
    </div>
    <div class="usermenu_elem">
      <router-link to='/logout' class='btn auth_btn'>log out</router-link>
      <router-link to='/login' class="btn auth_btn">log in</router-link>
      <router-link to='/signup' class='btn auth_btn'>sign up</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>