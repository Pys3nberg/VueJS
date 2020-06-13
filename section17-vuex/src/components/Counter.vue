<template>
    <div>
        <button class="btn btn-primary mr-2" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(10)">Decrement</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Counter",
        methods: {
            // increment() {
            //     this.$store.state.counter ++;
            // },
            // decrement() {
            //     this.$store.state.counter --;
            // }
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>

<style scoped>

</style>