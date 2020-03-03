export const strict = false
export const state = () => ({
  authInfo: false,
  showNavber: true,
  searchData: [],
  pagination: {},
  similar: {},
  pageOptino: 'coach',
  div: '',
  str: '',
  place: '',
  isMobileSideBar: false,
  
})

export const getters = {
  getIsLoggedIn (state) {
    return !!state.authInfo
  },
  getAuthInfo (state) {
    return state.authInfo
  },
  getIsMobileSideBar (state) {
    return state.isMobileSideBar
  },
  getShowNavber (state) {
    return state.showNavber
  },
  getSearchData (state) {
    return state.searchData
  },
  getStr (state) {
    return state.str
  },
  getPlace (state) {
    return state.place
  },
  getSimilar (state) {
    return state.similar
  },
  getPagination (state) {
    return state.pagination
  },
  getDiv (state) {
    return state.div
  },
  getPageOptino (state) {
    return state.pageOptino
  }
}

export const mutations = {
  setAuthInfo (state, data) {
    state.authInfo = data
  },
  setShowNavber (state, data) {
    state.showNavber = data
  },
  setIsMobileSideBar (state, data) {
    state.isMobileSideBar = data
  },
  setSearchData (state, data) {
    state.searchData = data
  },
  setSimilar (state, data) {
    state.similar = data
  },
  setStr (state, data) {
    state.str = data
  },
  setPlace (state, data) {
    state.place = data
  },
  setPagination (state, data) {
    state.pagination = data
  },
  setDiv(state, data) {
    state.div= data
  },
  setPageOption (state, data) {
    state.pageOptino = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    try {
      // get the initial 
      let { data } = await $axios.get('app/initdata')
      // update the state of the aiuth
      commit('setAuthInfo', data.user)
    } catch (e) {
      console.log(e.response)
    }
  },
  setAuthInfo ({ commit }, data) {
    commit('setAuthInfo', data)
  },
  setShowNavber ({ commit }, data) {
    commit('setShowNavber', data)
  }
}
