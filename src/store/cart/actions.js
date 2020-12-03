export default {
    actBuyProduct({commit,state},data) {
        const index = state.listCarts.findIndex(function (cart) {
            return cart.product.id === data.product.id
        });

        if(index === -1){
            commit('BUY_PRODUCT',data);
        }else {
            let quantity = data.quantity
            commit('CHANGE_QUANTIY',{index,quantity});
        }
    },
    actDeleteCart({commit,state},cartDelete) {
        var newListCart = state.listCarts.filter(item => {
            return item.product.id !== cartDelete.product.id
        });
        commit('CHANGE_LIST_CART',newListCart)
    }
}