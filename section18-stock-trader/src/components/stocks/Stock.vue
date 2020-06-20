<template>
    <div class="col-sm-6 col-md-4">
        <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header bg-success text-white">
                <h4 class="card-title">
                    {{stock.name}}
                    <span style="font-size: 10pt">(Price: {{stock.price | currency}})</span>
                </h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <input type="number"
                               class="form-control"
                               placeholder="Quantity"
                               v-model="quantity"
                               :class="{danger : insufficientFunds}"
                        >
                    </div>
                    <div class="col-md-4">
                        <button
                                class="btn btn-success"
                                @click="buyStock"
                                :disabled="quantity <= 0 || insufficientFunds"
                        >Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stock",
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed:{
            funds(){
                return this.$store.getters.funds;
            },
            insufficientFunds(){
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>