const actions = {
  setCoords(context, payload) {
    context.commit('setLoadingMap', true);

    setTimeout(() => {
      context.commit('setCoords', payload);

      context.commit('setLoadingMap', false);
    }, 400);
  },
};

export default actions;
