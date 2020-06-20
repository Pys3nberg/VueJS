<template>
    <div style="padding: 10px" class="container">

        <div class="row" v-if="stocks.length>0">
            <app-stock v-for="stock in stocks"
                       :key="stock.id" :stock="stock"></app-stock>
        </div>
        <h2 v-else>No Stocks in Portfolio</h2>
    </div>
</template>

<script>
    import Stock from "./Stock";
    import {mapGetters} from 'vuex';

    export default {
        name: "Portfolio",
        components:{
            appStock: Stock
        },
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
    }
</script>

<style scoped>

</style>