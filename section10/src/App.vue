<template>
  <div id="app" class="container">
      <app-header :quote-count="quotes.length" :max-quotes="maxQuotes"></app-header>
      <app-new-quote @quoteAdded="newQuote"></app-new-quote>
      <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
      <div class="row">
          <div class="col-sm-12 text-center">
              <div class="alert alert-info mt-5">
                  Info: Click on a Quote to delete it!
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import Header from "./components/Header";
    import NewQuote from "./components/NewQuote";
    import QuoteGrid from "./components/QuoteGrid";

    export default {
      components: {
        appHeader: Header,
        appNewQuote: NewQuote,
        appQuoteGrid:QuoteGrid
      },
      data(){
        return {
          quotes: ['Just a quote to see something'],
          maxQuotes: 10
        }
      },
        methods: {
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes)
                {
                    return alert("Please delete a quote first");
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.pop(index);
            }

        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Arizonia&display=swap');

</style>
