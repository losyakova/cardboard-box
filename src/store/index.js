import {createStore} from 'vuex'
import factCats from './modules/factCats'
import infoCats from './modules/infoCats'

export default createStore({
  modules: {
    factCats,
    infoCats
  },
  //навигация
  state() {
    return{
      uishow: true
    }
  },
  mutations: {
    setUishow(state, payload){
      state.uishow = payload;
    }
  },
  getters: {
    uishow(state){
      return state.uishow;
    }
  }
});