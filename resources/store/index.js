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
  urlcheck:'/',
  stateData: [{
      "name": "ALABAMA",
      "name2": "Alabama",
      "state": "AL"
    },

    {
      "name": "ALASKA",
      "name2": "Alaska",
      "state": "AK"
    },
    {
      "name": "ARIZONA",
      "name2": "Arizona",
      "state": "AZ"
    },
    {
      "name": "ARKANSAS",
      "name2": "Arkansas",
      "state": "AR"
    },
    {
      "name": "CALIFORNIA",
      "name2": "California",
      "state": "CA"
    },
    {
      "name": "COLORADO",
      "name2": "Colorado",
      "state": "CO"
    },
    {
      "name": "CONNECTICUT",
      "name2": "Connecticut",
      "state": "CT"
    },
    {
      "name": "DELAWARE",
      "name2": "Delaware",
      "state": "DE"
    },
    {
      "name": "FLORIDA",
      "name2": "Florida",
      "state": "FL"
    },
    {
      "name": "GEORGIA",
      "name2": "Georgia",
      "state": "GA"
    },
    {
      "name": "HAWAII",
      "name2": "Hawaii",
      "state": "HI"
    },
    {
      "name": "IDAHO",
      "name2": "Idaho",
      "state": "ID"
    },
    {
      "name": "ILLINOIS",
      "name2": "Illinois",
      "state": "IL"
    },
    {
      "name": "INDIANA",
      "name2": "Indiana",
      "state": "IN"
    },
    {
      "name": "IOWA",
      "name2": "Iowa",
      "state": "IA"
    },
    {
      "name": "KANSAS",
      "name2": "Kansas",
      "state": "KS"
    },
    {
      "name": "KENTUCKY",
      "name2": "Kentucky",
      "state": "KY"
    },
    {
      "name": "LOUISIANA",
      "name2": "Louisiana",
      "state": "LA"
    },
    {
      "name": "MAINE",
      "name2": "Maine",
      "state": "ME"
    },
    {
      "name": "MARYLAND",
      "name2": "Maryland",
      "state": "MD"
    },
    {
      "name": "MASSACHUSETTS",
      "name2": "Massachusetts",
      "state": "MA"
    },
    {
      "name": "MICHIGAN",
      "name2": "Michigan",
      "state": "MI"
    },
    {
      "name": "MINNESOTA",
      "name2": "Minnesota",
      "state": "MN"
    },
    {
      "name": "MISSISSIPPI",
      "name2": "Mississippi",
      "state": "MS"
    },
    {
      "name": "MISSOURI",
      "name2": "Missouri",
      "state": "MO"
    },
    {
      "name": "MONTANA",
      "name2": "Montana",
      "state": "MT"
    },
    {
      "name": "NEBRASKA",
      "name2": "Nebraska",
      "state": "NE"
    },
    {
      "name": "NEVADA",
      "name2": "Nevada",
      "state": "NV"
    },
    {
      "name": "NEW HAMPSHIRE",
      "name2": "New Hampshire",
      "state": "NH"
    },
    {
      "name": "NEW JERSEY",
      "name2": "New Jersey",
      "state": "NJ"
    },
    {
      "name": "NEW MEXICO",
      "name2": "New Mexico",
      "state": "NM"
    },
    {
      "name": "NEW YORK",
      "name2": "New York",
      "state": "NY"
    },
    {
      "name": "NORTH CAROLINA",
      "name2": "North Carolina",
      "state": "NC"
    },
    {
      "name": "NORTH DAKOTA",
      "name2": "North Dakota",
      "state": "ND"
    },
    {
      "name": "OHIO",
      "name2": "Ohio",
      "state": "OH"
    },
    {
      "name": "OKLAHOMA",
      "name2": "Oklahoma",
      "state": "OK"
    },
    {
      "name": "OREGON",
      "name2": "Oregon",
      "state": "OR"
    },
    {
      "name": "PENNSYLVANIA",
      "name2": "Pennsylvania",
      "state": "PA"
    },
    {
      "name": "RHODE ISLAND",
      "name2": "Rhode Island",
      "state": "RI"
    },
    {
      "name": "SOUTH CAROLINA",
      "name2": "South Carolina",
      "state": "SC"
    },
    {
      "name": "SOUTH DAKOTA",
      "name2": "South Dakota",
      "state": "SD"
    },
    {
      "name": "TENNESSEE",
      "name2": "Tennessee",
      "state": "TN"
    },
    {
      "name": "TEXAS",
      "name2": "Texas",
      "state": "TX"
    },
    {
      "name": "UTAH",
      "name2": "Utah",
      "state": "UT"
    },
    {
      "name": "VERMONT",
      "name2": "Vermont",
      "state": "VT"
    },
    {
      "name": "VIRGINIA",
      "name2": "Virginia",
      "state": "VA"
    },
    {
      "name": "WASHINGTON",
      "name2": "Washington",
      "state": "WA"
    },
    {
      "name": "WEST VIRGINIA",
      "name2": "West Virginia",
      "state": "WV"
    },
    {
      "name": "WISCONSIN",
      "name2": "Wisconsin",
      "state": "WI"
    },
    {
      "name": "WYOMING",
      "name2": "Wyoming",
      "state": "WY"
    }
  ]
  
})

export const getters = {
  getState (state) {
    return state.stateData
  },
  getUrl (state) {
    return state.urlcheck
  },
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
  setUrl (state, data) {
    state.urlcheck = data
  },
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
