<template>
  <div class='usermenu'>
    <div v-if="$store.getters.get_user.is_superuser" class="usermenu_elem">
      <a :href="admin_url" class="btn admin_btn">{{ user_menu.admin_panel[lan] }}</a>
      <router-link to="/users" class="btn admin_btn">{{ user_menu.users[lan] }}</router-link>
    </div>
    <div v-if="$store.getters.get_is_auth" class="usermenu_elem">
      <router-link to="/createcategory" class="btn user_btn">{{ user_menu.create_category[lan] }}</router-link>
      <router-link to="/createlink" class="btn user_btn">{{ user_menu.create_link[lan] }}</router-link>
    </div>
    <div class="usermenu_elem">
      <router-link v-if="$store.getters.get_is_auth" to='/logout' class='btn auth_btn'>{{
          user_menu.logout[lan]
        }}
      </router-link>
      <router-link v-if="!$store.getters.get_is_auth" to='/login' class="btn auth_btn">{{
          user_menu.login[lan]
        }}
      </router-link>
      <router-link v-if="!$store.getters.get_is_auth" to='/signup' class='btn auth_btn'>{{
          user_menu.signup[lan]
        }}
      </router-link>
    </div>
  </div>
</template>

<script>
import {ADMIN_URL} from "../config";

export default {
  name: 'usermenu',

  computed: {
    user_menu() {
      return this.$store.getters.get_lang_user_menu
    },
    lan() {
      return this.$store.getters.get_lan
    }
  },

  data() {
    return {
      admin_url: ADMIN_URL,
    }
  }
}
</script>