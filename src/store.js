import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Lendo os produtos selecionados de string para JSON de localStorage
    selectedProducts: JSON.parse(localStorage.getItem('selectedProducts')) || []
  },
  mutations: {
    UPDATE_PRODUCTS(state, products) {
      /**
       * Atualiza lista de produtos selecionados e salva a lista como string em localStorage
       */
      state.selectedProducts = products;
      localStorage.setItem('selectedProducts', JSON.stringify(products));
    },
    CLEAR_PRODUCTS(state) {
      /**
       * Limpa a lista de produtos selecionados
       */
      state.selectedProducts = [];
      localStorage.removeItem('selectedProducts');
    },
    REMOVE_PRODUCT(state, product) {
      /**
       * Remove produto da lista de produtos selecionados
       */
      let index = state.selectedProducts.indexOf(product);
      state.selectedProducts.splice(index, 1);
      localStorage.setItem('selectedProducts', JSON.stringify(state.selectedProducts));
    }
  },
  actions: {
    updateProducts({commit}, products) {
      commit('UPDATE_PRODUCTS', products);
    },
    clearProducts({commit}) {
      commit('CLEAR_PRODUCTS');
    },
    removeProduct({commit}, product) {
      commit('REMOVE_PRODUCT', product);
    }
  }
})
