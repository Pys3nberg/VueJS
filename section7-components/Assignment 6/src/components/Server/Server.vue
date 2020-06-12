<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="serverChange">
    Server #{{ server.id }} - Status: {{ server.status }}
  </li>
</template>

<script>
    import {eventBus} from "../../main";

    export default {
      props: ['server'],
      methods: {
        serverChange(){
          eventBus.$emit("serverWasChanged", this.server);
        }
      },
    }
</script>

<style scoped>

</style>
