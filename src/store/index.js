import {createStore} from 'vuex'
import factCats from './modules/factCats'
import infoCats from './modules/infoCats'

export default createStore({
  modules: {
    factCats,
    infoCats
  }
});