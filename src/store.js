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
    firstPercent(state) {
      return (Math.round(100 * (state.firstDrug / 6)));
    },
    secondPercent(state) {
      return (Math.round(100 * (state.secondDrug / 6)));
    },
    thirdPercent(state) {
      return (Math.round(100 * (state.thirdDrug / 6)));
    }
  },
  mutations: {
    firstInc(state) {
      state.firstDrug++;
      state.max--;
    },
    secondInc(state) {
      state.secondDrug++;
      state.max--;
    },
    thirdInc(state) {
      state.thirdDrug++;
      state.max--;
    },

    reload(state) {
      state.firstDrug = 0;
      state.secondDrug = 0;
      state.thirdDrug = 0;
      state.max = 6;
    }
  },
  actions: {
    firstInc(store) {
      store.commit("firstInc");
    },
    secondInc(store) {
      store.commit("secondInc");
    },
    thirdInc(store) {
      store.commit("thirdInc");
    },
 
    reload(store) {
      store.commit("reload");
    },
  }
});
