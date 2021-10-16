<template>
  <header class="header">
    <div class='logo'>
      <a href="/"><h1 class="logo__name">LinkToSite</h1></a>
      <span>{{ date | date('datetime') }}</span>
      <div class='logo__username'>
        <b v-bind:class="{admin_color: user.is_superuser}">
          <b v-if="user.first_name || user.last_name">{{ user.first_name }} {{ user.last_name }}</b>
          <b v-else>{{ user.username }}</b>
        </b>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      interval: null
    }
  },

  computed: {
    user() {
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