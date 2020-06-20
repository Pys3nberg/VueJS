<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link tag="a" class="navbar-brand" to="/">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link
                        to="/portfolio"
                        active-class="active"
                        class="nav-item"
                        tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link
                        to="/stocks"
                        active-class="active"
                        tag="li">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" @click="endDay">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#"
                       id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">Save & Load</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" @click="saveData">Save</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load</a>
                    </div>
                </li>
                <li class="nav-item">
                    <strong class="navbar-text">Funds: {{ funds | currency }}</strong>
                </li>

            </ul>

        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Header",
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks',
                'loadData'
            ]),
            endDay(){
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            }
        }
    }
</script>

<style scoped>

</style>