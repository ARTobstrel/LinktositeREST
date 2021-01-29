<template>
  <header class="header">
    <div class='logo'>
      <a href="/"><h1 class="logo__name">LinkToSite</h1></a>
      <span>{{ date | date('datetime') }}</span>
      <div class='logo__username'>
        <b class="admin_color">{{ get_user.username }}</b>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null
  }),
  computed: {
    get_user(){
      return this.$store.getters.get_user
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    // если компонент уничтожается, то освобождается память
    clearInterval(this.interval)
  }
}
</script>

<style>

</style>