import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from "./routes.js";
import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.prototype.$axios = require('axios');

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior: () => ({y: 0})
});

new Vue({
    el: "#app",
    router,
    render: f => f(App)
});
