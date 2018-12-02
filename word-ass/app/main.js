import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

import Vuex from 'vuex'
import { store } from './store/index.js'

var firebase = require("nativescript-plugin-firebase");

Vue.use(Vuex)

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
    "using_ios": true,
    "firestore": true,


}).then(
    function (instance) {
      console.log("firebase.init done");
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
)


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store: store,
  render: h => h('frame', [h(App)])
}).$start()
