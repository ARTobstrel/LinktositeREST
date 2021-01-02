<template>

  <div>
    <div class='main_frame'>
      <div class="cat_frame">
        <div class="cat_title">Links</div>
        <div v-for="link in links" class="link">
          <a v-bind:href="link.link" target="_blank">
            <img v-bind:src="link.image" alt="">
            <p>{{ link.title }}</p>
          </a>
        </div>
      </div>
    </div>

    <Usermenu/>
  </div>


</template>

<script>
import Usermenu from "@/components/Usermenu";
import axios from "axios";

export default {
  data() {
    return {
      links: [],
    }
  },
  components: {
    Usermenu,
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/links/')
        .then((response) => {
          console.log(response.data);
          this.links = response.data;
        })
  }
}
</script>