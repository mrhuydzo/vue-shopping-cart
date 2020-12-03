<template>
    <!-- PRODUCT : START -->
    <div class="media product">
        <div class="media-left">
            <a href="#">
                <img class="media-object" :src="urlImage" alt="target-leap-frog"/>
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{product.name}}</h4>
            <p>{{product.summary}}</p>
            <template  v-if="product.canBuy">
                <input type="text" value="1" min="1" v-model="quantity"/>
                <a @click.prevent="handleBuyProduct" data-product="1" href="#" class="price"> {{formatPrice}} </a>
            </template>
            <span v-else="!product.canBuy" class="price"> {{formatPrice}}</span>
        </div>
    </div>
    <!-- PRODUCT : END -->
</template>

<script>
    import {toCurrency,validateQuantity} from "../helper";
    import {NOTI_GREATER_THAN_ONE,NOTI_ACT_ADD} from "../constants/config";
    import {mapActions} from "vuex";

    export default {
        name: 'product-item',
        data () {
            return {
                quantity: 1
            }
        },
        props: {
            product: {
                type: Object,
                default: {}
            }
        },
        computed: {
            urlImage() {
                return '/dist/images/' + this.product.image;
            },
            formatPrice() {
                return toCurrency(this.product.price,'VND','right')
            }
        },
        methods: {
            ...mapActions({
                'actBuyProduct': 'cart/actBuyProduct'
            }),
            handleBuyProduct(e) {
                const check = validateQuantity(this.quantity);
                if (check) {
                    let numQuantity = parseInt(this.quantity);
                    let data = {
                        product: this.product,
                        quantity: numQuantity
                    }
                    this.quantity = 1
                    this.actBuyProduct(data)
                    this.$notify(NOTI_ACT_ADD);
                }else {
                    this.$notify(NOTI_GREATER_THAN_ONE);
                }
            }
        }
    }
</script>