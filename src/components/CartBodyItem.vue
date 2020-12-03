<template>
    <tr>
        <th scope="row">{{index + 1}}</th>
        <td>{{product.name}}</td>
        <td>{{formatPrice}}</td>
        <td><input :value="cart.quantity" @blur="handleUpdate" type="number" min="1"/></td>
        <td><strong>{{formatTotal}}</strong></td>
        <td>
            <a @click.prevent="handleDelete" class="label label-danger delete-cart-item" href="#" data-product="">Delete</a>
        </td>
    </tr>
</template>
<script>
    import {toCurrency, validateQuantity} from "../helper";
    import {NOTI_ACT_DELETE, NOTI_GREATER_THAN_ONE,NOTI_ACT_UPDATE} from "./../constants/config";
    import {mapActions} from 'vuex'
    export default {
        name: 'cart-body-item',
        data () {
            return {

            }
        },
        props: {
            cart: {type: Object},
            index: {type: Number}
        },
        computed: {
            product() {
                return this.cart.product
            },
            formatPrice() {
                return toCurrency(this.product.price,'USD','right')
            },
            formatTotal(){
                return toCurrency(this.product.price * this.cart.quantity,'USD','right')
            }
        },
        methods: {
            ...mapActions({
                'actDeleteCart' : 'cart/actDeleteCart',
                'setLoading' : 'setLoading',
                'actUpdateQuantity' : 'cart/actUpdateQuantity',
            }),
            handleDelete() {
                if(confirm('Muon xoa a?')){
                    this.actDeleteCart(this.cart);
                    this.$notify(NOTI_ACT_DELETE);
                }
            },
            handleUpdate(e){
                console.log(e.target.value)
                let quantity = e.target.value
                const check = validateQuantity(quantity);
                if (check) {
                    let data = {
                        cartUpdate : this.cart,
                        quantity: parseInt(quantity)
                    }
                    this.actUpdateQuantity(data);
                    this.$notify(NOTI_ACT_UPDATE);
                }else {
                    e.target.value = this.cart.quantity;
                    this.$notify(NOTI_GREATER_THAN_ONE);
                }
            },
        }
    }
</script>