<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-8 offset-2">
        <h1>Vuex</h1>
        <app-result></app-result>
        <hr>
        <app-counter></app-counter>
        <br>
        <app-another-counter></app-another-counter>
        <hr>
<!--        <input type="text" :value="value" @input="updateValue">-->
        <input type="text" v-model="value">
        <p>{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import AnotherCounter from "./components/AnotherCounter";
  import Result from './components/Result.vue';

  export default {
    name: 'App',
    data() {
      return {
        counter: 0
      }
    },
    components: {
      appCounter: Counter,
      appResult: Result,
      appAnotherCounter: AnotherCounter
    },
    methods: {
      updateValue(event){
        // calls action
        this.$store.dispatch("updateValue", event.target.value)

      }
    },
    computed: {
      // value() {
      //   return this.$store.getters.value;
      // }
      value:{
        get(){
          return this.$store.getters.value;
        },
        set(value){
          this.$store.dispatch("updateValue", value)
        }
      }
    }

  }
</script>

<style>

</style>
