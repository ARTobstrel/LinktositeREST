<template>

  <div>
    <AuthLinks v-if="$store.getters.get_is_auth"/>
    <UnAuthLinks v-else/>

    <Usermenu/>
  </div>

</template>

<script>
import Usermenu from '@/components/Usermenu'
import AuthLinks from '@/components/AuthLinks'
import UnAuthLinks from '@/components/UnAuthLinks'

export default {
  components: {
    Usermenu,
    UnAuthLinks,
    AuthLinks
  },
}
</script>