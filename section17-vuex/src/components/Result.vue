<template>
    <div>
<!--        <p>Counter is: {{$store.getters.doubleCounter}}</p>-->
        <p>Counter is: {{doubleCounter}}</p>
        <p>Number of Clicks: {{stringCounter}}</p>
    </div>


</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Result",
        computed: {
            // counter() {
            //     return this.$store.state.counter;
            // },
            // clicks() {
            //     return this.$store.getters.stringCounter;
            // }
            // mapGetters([
            //     'doubleCounter',
            //     'stringCounter'
            // ])
            ...mapGetters([
                    'doubleCounter',
                    'stringCounter'
            ]), // you can map Getters and add other functions too
            counter() {
                return this.$store.state.counter;
            }
        }
    }
</script>

<style scoped>

</style>