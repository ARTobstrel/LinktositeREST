<template>

  <div>
    <div class='main_frame'>
      <AuthLinks v-if="$store.getters.get_is_auth"/>
      <UnAuthLinks v-else />
    </div>

    <Usermenu/>
  </div>


</template>

<script>
import Usermenu from '@/components/Usermenu'
import AuthLinks from '@/components/AuthLinks'
import UnAuthLinks from '@/components/UnAuthLinks'

export default {
  name: 'content',
  components: {
    Usermenu,
    UnAuthLinks,
    AuthLinks
  },
}
</script>