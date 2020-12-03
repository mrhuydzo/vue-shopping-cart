<template>
    <div class="panel panel-info">
        <div class="panel-heading"><h1 class="panel-title">Your Cart</h1></div>
        <div class="panel-body">
            <table class="table">
                <cart-header/>
                <cart-body-table/>
                <cart-footer/>
            </table>
        </div>
    </div>
</template>
<script>
    import CartHeader from '../components/CartHeader';
    import CartBodyTable from '../components/CartBodyTable';
    import CartFooter from '../components/CartFooter';

    export default {
        name: 'cart-wrapper',
        components: {
            CartHeader,
            CartBodyTable,
            CartFooter,
        },
        data () {
            return {

            }
        }
    }
</script>