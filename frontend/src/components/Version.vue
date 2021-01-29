<template>
  <div>
    <div class="version">
      <p v-bind:title="get_version.description">ver. {{ get_version.version }} beta</p>
    </div>

    <details class="author">
      <summary>
        &copy; &#9773; Fadeev Artem
      </summary>
      <p>
        Moscow Russia, {{ get_version.year }}
      </p>
    </details>
  </div>
</template>

<script>
export default {
  computed: {
    get_version() {
      return this.$store.getters.get_version
    }
  },
  async mounted() {
    this.$store.dispatch('get_version_from_api')
  }

}
</script>