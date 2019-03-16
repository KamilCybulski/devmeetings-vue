import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import user from './modules/user';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user },
  actions: {
    initialAction(context) {
      context.commit('initialCommit');
    },
  },
  mutations: {
    initialCommit() {},
  },
  plugins: [vuexLocal.plugin],
});
