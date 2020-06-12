<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <p>{{ text | toUpperCase | toLowerCase }}</p>
    <hr>
    <button @click="fruits.push('Berries')">Add New Item</button>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>

import List from "./components/List";
export default {
  components: {
    appList:List
  },
  data() {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText:''
    }
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element)=>{
        return element.match(this.filterText)
      });
    }
  }
}

</script>

<style>

</style>
