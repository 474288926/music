import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from "./getters"

import { playMode } from '../common/js/config.js'

const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1 
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})