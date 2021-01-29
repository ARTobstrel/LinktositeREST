<template>
  <div class="form_field">
    <BackItem/>
    <Useritems
        v-bind:users="users"
        v-on:delete_user="delete_user"
    />
  </div>
</template>


<script>
import axios from "axios";
import BackItem from "@/components/BackItem";
import Useritems from "@/components/Useritems";
import UserItem from "@/components/UserItem";


export default {
  data() {
    return {
      users: [],
      urls: {
        list_users: 'http://127.0.0.1:8000/api/v1/user/all/',
        del_user: 'http://127.0.0.1:8000/api/v1/user/delete/'
      }
    }
  },
  components: {
    BackItem,
    Useritems,
    UserItem
  },
  methods: {
    get_users() {
      axios.get(this.urls.list_users)
          .then(response => {
            this.users = response.data;
          })
    },
    delete_user(id) {
      axios.delete(`${this.urls.del_user}${id}`);
      // понять как обновить компонент после удаления пользователя
    }
  },
  async mounted() {
    await this.get_users()
  }
}

</script>