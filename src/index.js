import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cart: {
      cartCount: 0,
    },
    product: {
      price: (125.0).toFixed(2),
    },
  },
  getters: {},
  mutations: {
    incrementCartCount(state, payload) {
      state.cart.cartCount = payload;
    },
  },
  actions: {
    incrementCartCount({ commit }, payload) {
      commit("incrementCartCount", payload);
    },
  },
});
