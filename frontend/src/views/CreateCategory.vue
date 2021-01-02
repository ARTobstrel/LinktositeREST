<template>
  <div class="form_field">
    <BackItem />
    <div class="form_field__title">Create new category</div>
    <form class="form_field__items" action="/" enctype="multipart/form-data">
      <input type="hidden" name="next" value="#">
      <button name="submit" class="form_field__btn">Add category</button>
    </form>
  </div>
</template>

<script>
import BackItem from "@/components/BackItem";

export default {
  components: {
    BackItem
  }
}
</script>