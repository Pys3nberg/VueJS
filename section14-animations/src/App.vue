<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <button class="btn btn-primary" @click="show=!show">Show Alert</button>
        <br>
        <br>
        <transition :name="alertAnimation">
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
        <transition name="slide" type="transition" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
          <div class="alert alert-warning" v-else key="warning">This is some Info</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load=!load">Load / Remove Element</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"

          :css="false"
        >
          <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary"
                @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Components</button>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br>
        <br>
        <ul class="list-group">
          <transition-group name="slide">

              <li class="list-group-item"
                  v-for="(number,index) in numbers"
                  @click="removeItem(index)"
                  style="cursor: pointer"
                  :key="number"
              >{{ number }}</li>

          </transition-group>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import DangerAlert from './Components/DangerAlert';
  import SuccessAlert from './Components/SuccessAlert';
  export default {
    components: {
      appDangerAlert: DangerAlert,
      appSuccessAlert: SuccessAlert
    },
    data() {
      return {
        show: true,
        alertAnimation: 'fade',
        load: true,
        elementWidth: 100,
        selectedComponent: 'app-danger-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods:{
      beforeEnter(el) {
        console.log("beforeEnter" + el);
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px'
      },
      enter(el, done) {
        console.log('enter' + el);
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round ++
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterEnter(el) {
        console.log('afterEnter' + el);
      },
      enterCancelled(el) {
        console.log('enterCencelled' + el);
      },
      beforeLeave(el) {
        console.log('beforeLeave' + el);
        this.elementWidth = 300;
        el.style.width = this.elementWidth + "px";
      },
      leave(el, done) {
        console.log('leave' + el);
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round ++
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave' + el);
      },
      leaveCancelled(el) {
        console.log("leaveCancelled" + el);
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
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
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
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
