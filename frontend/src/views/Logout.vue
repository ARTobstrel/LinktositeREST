<template>
  <div>
    <div class='form_field'>
      <div class="form_field__items">Вы успешно разлогинились.</div>
      <div class="form_field__items"><router-link to='/' class="link_to_next">Перейти на главную страницу</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logout',

  async created() {
    await this.$store.dispatch('logout')
  }
}
</script>