<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <br>
            <div class="row">
              <div class="col-sm-4">
                <button class="btn btn-danger pr-lg-2"
                        @click="selectedComponent='appRed'">Load Red Component</button>
              </div>
              <div class="col-sm-4">
                <button class="btn btn-success"
                        @click="selectedComponent='appGreen'">Load Green Component</button>
              </div>
              <div class="col-sm-4">
                <button class="btn btn-primary"
                        @click="selectedComponent='appBlue'">Load Blue Component</button>
              </div>
            </div>
          <br>
          <component :is="selectedComponent">
            <p>{{content}}</p>
          </component>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Red from "./components/Red";
  import Green from "./components/Green";
  import Blue from "./components/Blue";

  export default {
    components:{
      appRed: Red,
      appGreen: Green,
      appBlue: Blue
    },
    data(){
      return {
        selectedComponent: 'appRed',
        content: "This is some content"
      }
    }
  }
</script>

<style>

</style>
