<template>
    <tbody id="my-cart-body">
    <!-- CART BODY -->
        <cart-body-item/>
    </tbody>
</template>

<script>
    import CartBodyItem from '../components/CartBodyItem';
    export default {
        name: 'cart-body-table',
        components: {
            CartBodyItem,
        },
        data () {
            return {

            }
        }
    }
</script>