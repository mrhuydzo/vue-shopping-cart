import state from "./state";
import getters from "./getter";
import actions from "./actions";
import mutations from "./mutations";

export default  {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}