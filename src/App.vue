<template>
    <div id="app">
        <div class="container">
            <comp-title/>
            <div class="row">
                <product-list/>
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <cart-wrapper/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import CompTitle from './components/CompTitle';
    import ProductList from './components/ProductList';
    import CartWrapper from './components/CartWrapper';

    export default {
        name: 'app',
        components: {
            CompTitle,
            ProductList,

            CartWrapper
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>


