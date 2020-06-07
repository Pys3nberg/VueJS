<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br>
        <br>
        <transition name="fade">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>
        <transition name="slide" type="transition">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition

                enter-class=""
                enter-active-class="animate__animated animate__bounce"
                leave-class=""
                leave-active-class="animate__animated animate__backOutDown"
        >
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    }
  }

</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /*opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
