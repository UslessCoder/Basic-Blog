
import Vue from 'vue';
import App from './App';
export const bus = new Vue();
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import Routes from "./components/routes"

Vue.use(VueResource);
Vue.use(VueRouter)

Vue.config.productionTip = false;

const router = new VueRouter({
  routes:Routes,
  mode:"history"
})


Vue.filter('snip', value => {
  return value.slice(0,100) + '...'
})

Vue.filter('upperCase',value => {
  return value.toUpperCase()
})


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
});
