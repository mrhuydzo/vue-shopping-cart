<template>
    <div id="app">
        <div class="container">
            <comp-title/>
            <div class="row">
                <product-list/>
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <cart-wrapper/>
                    <notify/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import CompTitle from './components/CompTitle';
    import ProductList from './components/ProductList';
    import Notify from './components/Notify';
    import CartWrapper from './components/CartWrapper';

    export default {
        name: 'app',
        components: {
            CompTitle,
            ProductList,
            Notify,
            CartWrapper
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>


