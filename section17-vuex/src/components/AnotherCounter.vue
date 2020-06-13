<template>
    <div>
        <button class="btn btn-primary mr-2" @click="increment(10)">Increment</button>
        <button class="btn btn-primary mr-2" @click="decrement(20)">Decrement</button>
        <button class="btn btn-primary mr-2" @click="asyncIncrement({by:10, duration: 500})">Async Increment</button>
        <button class="btn btn-primary mr-2" @click="asyncDecrement({by:10, duration: 2000})">Async Decrement</button>
    </div>
</template>

<script>
    // import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex'
    export default {
        methods: {
            // ...mapMutations(['increment','decrement']), // you can map mutations (setters) and add other functions too

            // increment() {
                    // calls mutation
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }

            ...mapActions(['increment','decrement', "asyncIncrement", 'asyncDecrement']), //vuex mapps these as functions, which also allows us to pass in args too ^ must be an obj

        }
    }
</script>

<style scoped>

</style>