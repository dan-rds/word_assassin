import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

import Vuex from 'vuex'
import { store } from './store/index.js'

Vue.use(Vuex)
import firebase from 'nativescript-plugin-firebase'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


  //console.log("_________________________ Called ______________________")
  
firebase.init({
}).then(
    function (instance) {
    console.log("firebase.init done");
    },
    function (error) {
    console.log("firebase.init error: " + error);
    }
);

new Vue({
  store: store,
  render: h => h('frame', [h(App)])
}).$start()
