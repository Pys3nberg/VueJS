<template>
  <div class="col-xs-12 col-sm-6">
    <span v-if="server != null">
      <p>Server Id: {{ server.id }}</p>
      <p>Server Status: {{ server.status }}</p>
      <button @click="resetStatus">Reset Status</button>
    </span>
    <span v-else>Please select a Server</span>

  </div>
</template>

<script>
  import {eventBus} from "../../main";

  export default {
    data(){
      return {
        server:null
      };
    },
    methods:{
        resetStatus(){
          this.server.status = "Normal";
          //eventBus.$emit("statusWasReset", server)
        }
    },
      created() {
        eventBus.$on("serverWasChanged", (server) =>
        {
          this.server=server;
        });
      }
    }
</script>

<style scoped>
</style>
