const mutations = {
  setLoadingMap(state, payload) {
    state.loadingMap = payload;
  },

  setCoords(state, payload) {
    state.coords = payload;
  },
};

export default mutations;
