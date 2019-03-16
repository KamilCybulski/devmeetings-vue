import uniqueId from 'lodash/uniqueId';

const initialState = () => ({
  id: uniqueId(),
  isAdmin: false,
});

const state = initialState;

const getters = {
  userId: store => store.id,
  isAdmin: store => store.isAdmin,
};

const mutations = {
  SET_ADMIN(store) {
    // eslint-disable-next-line
    store.isAdmin = true;
  },
};

const actions = {
  setAdmin(context) {
    context.commit('SET_ADMIN');
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
