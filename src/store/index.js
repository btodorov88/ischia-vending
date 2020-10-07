import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '@/firebase'
import router from '@/router/index'

Vue.use(Vuex)

fb.vendingItemsCollection.orderBy('price').onSnapshot(async snapshot => {
  let itemsArray = await Promise.all(snapshot.docs.map(async doc => {
    let item = doc.data()
    item.id = doc.id
    item.imgUrl = await fb.storage.ref(`items/${item.img}`).getDownloadURL()
    return item;
  }))

  store.commit('setVendingItems', itemsArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    vendingItems: [],
    cartItems: [],
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setVendingItems(state, val) {
      state.vendingItems = val
    },
    addCartItem(state, val) {
      let existing = state.cartItems.find(item => item.vendingItem.id == val.id);
      if (existing) {
        existing.quantity += 1
      } else {
        state.cartItems.push({ vendingItem: val, quantity: 1 })
      }
    },
    incrementCartItem(state, id) {
      let existing = state.cartItems.find(item => item.vendingItem.id == id);
      existing.quantity += 1
    },
    decrementCartItem(state, id) {
      let existing = state.cartItems.find(item => item.vendingItem.id == id);
      if (existing.quantity > 1) {
        existing.quantity -= 1
      } else {
        state.cartItems = state.cartItems.filter(item => item.vendingItem.id !== id)
      }
    },
    removeCartItem(state, id) {
      state.cartItems = state.cartItems.filter(item => item.vendingItem.id !== id)
    },
    clearCart(state) {
      state.cartItems = []
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/login')
    },
    async createPost({ state, commit }, post) { // eslint-disable-line no-unused-vars
      // create post in firebase
      await fb.vendingItemsCollection.add({
        createdOn: new Date(),
        content: post.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0
      })
    },
  }
})

export default store