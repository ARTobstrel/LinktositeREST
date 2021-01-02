<template>

  <div class="form_field">
    <BackItem/>
    <div class="form_field__title">Authorization</div>
    <form class="form_field__items" action="/">
      <button name="submit" class="form_field__btn">Log in</button>
      <div class="form_field__auth_footer">
        <a href='#' class='username__log'>register</a>
        <a href='#' class='username__log'>Google log in</a>
      </div>
      <input type='hidden' name='next' value='#'>
    </form>
  </div>

</template>

<script>
import BackItem from "@/components/BackItem";

export default {
  components: {BackItem}
}
</script>