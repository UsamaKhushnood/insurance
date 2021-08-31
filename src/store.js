import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  user: '',
  selected_event: '',
  register_data: '',
  reload_event: false,
  model_status: false,
  token: localStorage.getItem('token') || '',
  authentication_token: false,
  showSpinner: false,
  all_event: '',
  receiver_data: '',
  receiver_msg: '',
}

axios.defaults.baseURL = process.env.VUE_APP_API_URL
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  SET_SPINNER(state, spinner) {
    state.showSpinner = spinner;
  },
  SET_AUTH_TOKEN(state, data) {
    state.authentication_token = data;
  },
  SET_USER(state, data) {
    state.user = data;
  },
  SET_MODEL_STATUS(state, data) {
    state.model_status = data;
  },
  SET_SELECTED_EVENT(state, data) {
    state.selected_event = data;
  },
  SET_RELOAD_EVENTS(state, data) {
    state.reload_event = data;
  },
  SET_REGISTER_DATA(state, data) {
    state.register_data = data;
  },
  SET_EVENT_DATA(state, data) {
    state.all_event = data;
  },
  SET_RECEIVER(state, data) {
    state.receiver_data = data;
  },
  SET_RECEIVER_MSG(state, data) {
    state.receiver_msg = data;
  },
}

const getters = {
  getSpinner(state) {
    return state.showSpinner;
  },
  getUser(state) {
    return state.user;
  },
  getReceiver(state) {
    return state.receiver_data;
  },
  getReceiverMsg(state) {
    return state.receiver_msg;
  },
  getToken(state) {
    return state.authentication_token;
  },
  getModelStatus(state) {
    return state.model_status;
  },
  getSelectedEvent(state) {
    return state.selected_event;
  },
  getEventReload(state) {
    return state.reload_event;
  },
  getRegisterData(state) {
    return state.register_data;
  },
  getEvent(state) {
    return state.all_event;
  },
 
}
const actions = {
 
  HTTP_POST_REQUEST({commit,state},data){
    return new Promise((resolve,reject)=>{
      axios.post(data.url, data.payload)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        });
    })
  },

  HTTP_GET_REQUEST({commit,state},url){
    return new Promise((resolve,reject)=>{
      axios.get(url)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        });
    })
  },

}

export default  new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [new VuexPersistence().plugin]
})