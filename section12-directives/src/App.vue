<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-sm-8">
        <h1>Built-in Directives</h1>
        <p v-text="'some text'"></p>
        <p v-html="'<strong>Strong Text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-8">
        <h1>Custom Directives</h1>
<!--        <p v-highlight:background="'red'">Color this</p>-->
        <p v-highlight.delayed="'red'">Color this</p>
        <p v-local-highlight:background.delayed.blink="{mainColor:'red', secondColor:'green', delay:500}">local color this</p>
        <button v-my-on:click="clicked">Click me</button>
        <hr>
        <div style="width: 100px; height: 100px; background-color: lightgreen"
             v-my-on:mouseenter="mouseEnter"
             v-my-on:mouseleave="mouseLeave"></div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  directives: {
    'localHighlight' : {
      bind(el, binding) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;

        var delay = 0;
        if(binding.modifiers['delayed']){
          delay = binding.value.delay;
        }
        if(binding.modifiers['blink'])
        {
          let mainColor=binding.value.mainColor;
          let secondColor=binding.value.secondColor;
          let currentColor=mainColor;
          setTimeout(()=> {
            setInterval(() => {
              if(currentColor==secondColor){
                currentColor=mainColor;
              } else {
                currentColor=secondColor;
              }
              if(binding.arg == 'background') {
                el.style.backgroundColor=currentColor;
              } else {
                el.style.color=currentColor;
              }
            }, 1000)
          }, delay)


        }else{
          setTimeout(() => {
            if(binding.arg == 'background') {
              el.style.backgroundColor=binding.value.mainColor;
            } else {
              el.style.color=binding.value.mainColor;
            }
          }, delay);
        }
      }
    },
    'myOn' : {
      bind (el, binding) {
        // if(binding.arg=='click'){
        //   el.onclick = function() {
        //     binding.value();
        //   }
        // }
        const type = binding.arg;
        const fn = binding.value; //function reference
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked(){
      alert('I was clicked');
    },
    mouseEnter(){
      console.log("Mouse entered");
    },
    mouseLeave(){
      console.log("Mouse leave");
    }
  }
}
</script>

<style>


</style>
