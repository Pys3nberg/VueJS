import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./modules/counter";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex);


export default new Vuex.Store({

  state: {
    value: 0
  },
  mutations,
  // actions are used to manage mutations synchronously, you can pass payloads all the way through
  actions,
  getters,
  modules: {
    counter //contains all counter related stuff and is merged into here
  }
})
