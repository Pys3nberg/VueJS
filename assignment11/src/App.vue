<template>
  <div id="app">
    <h1>Assignment 11</h1>
    <p>{{ 'Reversed Text' | reverse }}</p>
    <p>{{ 'Length of text filter' | length }}</p>
    <p>{{ reversedText }}</p>
    <p>{{ computedLength }}</p>
    <p></p>
  </div>
</template>

<script>
  import {ass11Mixin} from "./ass11Mixins";

  export default {
    mixins:[ass11Mixin],
  data(){
    return {

    }
  },
  filters : {
    reverse(value){
      return value.split('').reverse().join('');
    }
  }
}
</script>

<style>

</style>
