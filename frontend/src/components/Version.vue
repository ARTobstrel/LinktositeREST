<template>
  <div>
    <div class="version">
      <p v-bind:title="version.description">ver. {{ version.version }} beta</p>
    </div>

    <details class="author">
      <summary>
        &copy; &#9773; Fadeev Artem
      </summary>
      <p>
        Moscow Russia, {{ version.year }}
      </p>
    </details>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      version: [],
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/v1/version/last/')
        .then((response) => {
          this.version = response.data[0];
        })
  }
}
</script>