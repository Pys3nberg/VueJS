<template>
    <form>
        <div class="row">
            <div class="col-sm-8 offset-sm-2 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 offset-sm-2 form-group">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                quote: ""
            };
        },
        methods:{
            createNew() {
                if(this.quote.trim().length > 0)
                {
                    this.$emit("quoteAdded", this.quote);
                    this.quote = "";
                }

            }
        }
    }
</script>

<style scoped>

</style>