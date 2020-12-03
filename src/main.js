import Vue from 'vue';
import Notifications from 'vue-notification';
import App from './App.vue';
import store from "./store";

Vue.use(Notifications);
new Vue({
  el: '#app',
  store,
  render: h => h(App),

})
