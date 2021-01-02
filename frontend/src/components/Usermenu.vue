<template>
  <div class='usermenu'>
    <div class="usermenu_elem">
      <a href="/admin" class="btn admin_btn">Admin panel</a>
      <router-link to="/users" class="btn admin_btn">Users</router-link>
    </div>
    <div class="usermenu_elem">
      <router-link to="/create_category" class="btn user_btn">create category</router-link>
      <a href="#" class="btn user_btn">create link</a>
    </div>
    <div class="usermenu_elem">
      <a href='#' class='btn auth_btn'>log out</a>
      <router-link to='/login' class="btn auth_btn">log in</router-link>
      <a href='#' class='btn auth_btn'>rigister</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>