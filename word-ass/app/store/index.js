import Vue from 'vue'
import Vuex from 'vuex'

// import auth from './modules/auth'
// import user from './modules/user'

import configureModerator  from './modules/store-moderator'

// import * as firebase from 'firebase'
// import db from '@/firebase/init'


Vue.use(Vuex)


export const store = new Vuex.Store({
	plugins: [configureModerator],
	modules: {
		// auth: auth,
		// user: user,
		configureModerator

	},
	state: {
        counter: 0
	},
	getters: {
        getCounter: (state) => {
            return state.counter
        }

	},
	mutations: {
        increment: (state, payload) => {
            state.counter++
        }

	},
	actions: {

	},




})

