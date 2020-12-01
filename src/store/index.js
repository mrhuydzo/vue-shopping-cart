import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from './state'
import getters from './getter'
import actions from './actions'
import mutations from './mutations'

import moduleCart from './cart'
import moduleProduct from './product'

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        cart: moduleCart,
        product: moduleProduct
    }
});

export default  store