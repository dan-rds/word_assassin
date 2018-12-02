import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

import Vuex from 'vuex'
import { store } from './store/index.js'

var firebase = require("nativescript-plugin-firebase");

Vue.use(Vuex)
<<<<<<< HEAD
import firebase from 'nativescript-plugin-firebase'
=======

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

>>>>>>> ce9c9528aa7242a45b8baaca6c349722ef28a2b1

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
