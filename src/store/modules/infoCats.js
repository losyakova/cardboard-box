export default {
  namespaced: true,
  state() {
    return {
      info: null
    }
  },
  mutations: {
    setinfo(state, payload){
      state.info = payload;
    }
  },
  actions: {
    //загрузка данных о кошках
    async load(context ) {
      if(context.getters.infoIsntNull) 
        return;
      try {
        const responce = await fetch(
          'https://fbproject-cats-vue-default-rtdb.firebaseio.com/cats.json'
        );
        const data = await responce.json();
        let temp =
          Object.keys(data).map((key) => {
            return {
              id: key,
              ...data[key],
            };
          })
        context.commit('setinfo', temp);
      } catch (e) {
        console.warn(e.message);
      } 
    },
  },
  getters: {
    info(state){
      return state.info;
    },
    infoIsntNull(state){
      if(state.info !== null)
        return true;
      else return false;
    }
  }
}