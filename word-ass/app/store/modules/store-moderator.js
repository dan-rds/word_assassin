import store from '@/store/index'

// dispatch actions
// commit mutations

export default function configureModerator (store) {
	store.subscribe(({type, payload },  state,) => {
		switch (type) {
			case 'setAuthenticatedUser': 
				//store.dispatch('fetchUserData', store.getters.getAuthenticatedUser.uid)
				return

		}
	})

	store.subscribeAction(({type, payload}, state) => {
		switch(type) {
			case 'signUserOut': 
				store.commit('unsetAuthenticatedUser')
				//store.commit('unsetUser')
				
				return 
			

		}
	})




}