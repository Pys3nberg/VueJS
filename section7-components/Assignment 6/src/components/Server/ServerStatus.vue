<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="server in servers"
        :key="server.id"
        :server="server"
      ></app-server>
    </ul>
  </div>
</template>

<script>
    import Server from "./Server";
    import {eventBus} from "../../main";
    import App from "../../App";

    export default {
      components: {
        App,
        appServer: Server
      },
      data(){
          return {
            servers: [
              {id:1, status: "Normal"},
              {id:2, status: "Critical"},
              {id:3, status: "Unknown"},
              {id:4, status: "Normal"},
            ]
          };
      }
    }
</script>

<style scoped>
</style>
