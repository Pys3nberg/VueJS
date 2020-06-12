<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{id}}</p>
        <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        // https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js
        props: {
            id: {
                type: Number,
                default: 0
            }
        },
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     }
        // },
        // watch: {
        //     '$route'(to,from) {
        //         const fromid = from.params.id;
        //         console.log(fromid);
        //         this.id = to.params.id;
        //     }
        // },
        methods: {
            navigateToHome() {
                // this.$router.push("/");
                // this.$router.push({path:"/"});
                this.$router.push({name:'home'})
            }
        }
    }
</script>