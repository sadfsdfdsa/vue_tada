import Vue from 'vue'
import VueRouter from "vue-router";

import routes from "@/routes";
import store from "@/store";
import "@/utils/libs";

import api_requests from "@/utils/api_requests";

// main template page
import App from './App.vue'

// using
Vue.use(VueRouter);

// configuring
Vue.config.productionTip = false;
Vue.prototype.$api = api_requests;


const router = new VueRouter({
    routes: routes,
    mode: "history",
    scrollBehavior: () => ({y: 0})
});

// init app
new Vue({
    el: "#app",
    router,
    store,
    render: f => f(App)
});
