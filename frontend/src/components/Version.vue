<template>
  <div>
    <div class="version">
      <p v-bind:title="get_version.description">ver. {{ get_version.version }} beta</p>
    </div>

    <details class="author">
      <summary>
        &copy; &#9773; {{ version.author[lan] }}
      </summary>
      <p v-on:click="change_lang()">
        {{ version.point[lan] }}, {{ get_version.year }}
      </p>
    </details>
  </div>
</template>

<script>

export default {
  computed: {
    get_version() {
      return this.$store.getters.get_version
    },
    version() {
      return this.$store.getters.get_version_component
    },
    lan() {
      return this.$store.getters.get_lan
    }
  },

  methods: {
    change_lang() {
      this.$store.commit('set_lan_to_state', this.lan)
    }
  },

  async mounted() {
    this.$store.dispatch('fetch_version_from_api')
  }
}
</script>