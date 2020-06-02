<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-sm-8">
        <h1>Built-in Directives</h1>
        <p v-text="'some text'"></p>
        <p v-html="'<strong>Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-8">
        <h1>Custom Directives</h1>
        <p v-highlight>Color this</p>

      </div>
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style>


</style>
