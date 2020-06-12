<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-8 offset-2">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-8 offset-2">
        <transition name="flip" mode="out-in">
          <component :is="mode" @answered="answered($event)" @confirmed="mode='app-question'"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import Answer from "./components/Answer";
  import Question from "./components/Question";

  export default {
    components : {
      appQuestion: Question,
      appAnswer: Answer
    },
    data() {
      return {
        mode: 'app-question'
      }
    },
    methods: {
      answered(isCorrect){
        if (isCorrect) {
          this.mode = 'app-answer';
        }else{
          this.mode = 'app-question';
          alert('Wrong, try again!');
        }
      },
      confirmed(){

      }
    }
  }
</script>

<style>
  .flip-enter {
    /*transform: rotateY(0deg);*/
  }
  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }
  .flip-leave {
    /*transform: rotateY(0deg);*/
  }
  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }
  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }
  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
</style>
