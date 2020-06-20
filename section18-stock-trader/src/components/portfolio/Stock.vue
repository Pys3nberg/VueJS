<template>
    <div class="col-sm-6 col-md-4">
        <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-header bg-info text-white">
                <h4 class="card-title">
                    {{stock.name}}
                    <span style="font-size: 10pt">(Price: {{stock.price | currency}} | Quantity: {{ stock.quantity }})</span>
                </h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <input type="number" class="form-control"
                               placeholder="Quantity" v-model="quantity"
                               :class="{danger: insufficientQuantity}"
                        >
                    </div>
                    <div class="col-md-4">
                        <button
                                class="btn btn-info"
                                @click="sellStock"
                                :disabled="quantity <= 0 || insufficientQuantity"
                        >Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Stock",
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed:{
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(){
                const order ={
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
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