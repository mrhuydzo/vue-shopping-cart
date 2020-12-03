export default {
    CHANGE_QUANTIY: (state,{index,quantity})=> {
        state.listCarts[index].quantity += quantity
    },
    BUY_PRODUCT: (state,data) => {
        state.listCarts.push(data)
    },
    CHANGE_LIST_CART: (state,newListCart) => {
        state.listCarts = newListCart;
    }
}