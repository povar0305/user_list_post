import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Routers from "@/plugins/router";
import VueRouter from "vue-router";
/*
import store from "@/vuex/array";
*/

Vue.config.productionTip = false
const router = new VueRouter({
    routes: Routers
})
new Vue({
    vuetify, VueRouter, router:router,
    /*
      store,
    */
    render: h => h(App)
}).$mount('#app')


