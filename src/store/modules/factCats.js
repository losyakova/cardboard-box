export default {
  namespaced: true,
  state(){
    return{
      facts: null
    }
  },
  actions:{
    async load(context){
      if(context.getters.factsIsntNull) return;

      try {
        const response = await fetch(
          'https://fbproject-cats-vue-default-rtdb.firebaseio.com/facts.json'
        );
        const data = await response.json();
        const temp = 
        Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });
        context.commit('setfacts', temp);
      } catch (e) {
        console.error(e);
      } 
    }
  },
  getters:{
    facts(state){
      return state.facts;
    },
    factsIsntNull(state){
      if(state.facts !== null)
        return true;
      else return false;
    }
  },
  mutations:{
    setfacts(state, payload){
      state.facts = payload;
    }
  }
}