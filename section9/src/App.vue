<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <button @click="selectedComponent='appQuote'">Quote</button>
          <button @click="selectedComponent='appAuthor'">Author</button>
          <button @click="selectedComponent='appNew'">New</button>
          <hr>
          <p>{{selectedComponent}}</p>
          <keep-alive>
            <component :is="selectedComponent">
              <p>Default Content</p>
            </component>
          </keep-alive>
<!--          <app-quote>-->
<!--            <h2 slot="title">{{quoteTitle}}</h2>-->
<!--            <p slot="quote">A wonderful Quote!</p>-->
<!--          </app-quote>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Author from "./components/Author";
import New from "./components/New";

export default {
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  },
  data() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  }
}
</script>

<style>

</style>
