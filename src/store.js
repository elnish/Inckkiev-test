import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstDrug: 0,
    secondDrug: 0,
    thirdDrug: 0,
    max: 15
  },
  getters: {
    firstDrug(state) {
      return state.firstDrug;
    },
    secondDrug(state) {
      return state.secondDrug;
    },
    thirdDrug(state) {
      return state.thirdDrug;
    },
    max(state) {
      return state.max;
    },
    sum(state) {
      return state.firstDrug + state.secondDrug + state.thirdDrug;
    }
  },
  mutations: {
    firstDrugIncrease(state) {
      state.firstDrug++;
      state.max--;
    },
    secondDrugIncrease(state) {
      state.secondDrug++;
      state.max--;
    },
    thirdDrugIncrease(state) {
      state.thirdDrug++;
      state.max--;
    },
    reload(state) {
      state.firstDrug = 0;
      state.secondDrug = 0;
      state.thirdDrug = 0;
      state.max = 15;
    }
  },
  actions: {
    firstDrugIncrease(store) {
      store.commit("firstDrugIncrease");
    },
    secondDrugIncrease(store) {
      store.commit("secondDrugIncrease");
    },
    thirdDrugIncrease(store) {
      store.commit("thirdDrugIncrease");
    },
    reload(store) {
      store.commit("reload");
    }
  }
})
