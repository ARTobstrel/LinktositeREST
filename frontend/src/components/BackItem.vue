<template>
  <router-link :to="backPage" class="form_field__close">
    <div class="close"></div>
  </router-link>
</template>

<script>
export default {
  name: 'backitem',

  props: {
    backPage: {
      type: String,
      default: '/'
    }
  }
}
</script>