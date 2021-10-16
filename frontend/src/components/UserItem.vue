<template>
  <div class="form_field__link">
    <div class="col_width33">
                    <span class="font_size22">
                      {{ user.id }}: {{ user.username }}
                    </span>
    </div>
    <span class="font_size14 col_width33">{{ user.date_joined }}</span>
    <i v-if='user.is_superuser' class="font_size14">{{ user_item.superuser[lan] }}</i>
    <a v-else v-on:click="delete_user(user.id)" class="delete_btn font_size14">{{ user_item.delete[lan] }}</a>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  computed: {
    user_item() {
      return this.$store.getters.get_lang_user_item
    },
    lan() {
      return this.$store.getters.get_lan
    }
  },

  methods: {
    async delete_user(id) {
      await this.$store.dispatch('delete_user', id)
      this.$store.dispatch("fetch_users")
    }
  }
}
</script>