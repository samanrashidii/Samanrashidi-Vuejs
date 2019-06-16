import Vue from 'vue';
import Meta from 'vue-meta';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';

// Global Components

import AppFooter from './components/global/AppFooter.vue';

Vue.component('AppFooter', AppFooter);

// Required External Files

require('@/assets/css/saman.css');
require('@/assets/css/style.css');
require('@/assets/css/media.css');

// Vue Meta

Vue.config.productionTip = false;
Vue.use(Meta);

// Vue VeeValidate

Vue.use(VeeValidate, {
  events: 'keyup',
});

// Vue Store Data

Vue.store = Vue.prototype.store = {
  webAuthorFirstName: 'Saman',
  webAuthorLastName: 'Rashidi',
  webAuthorFullName: 'Saman Rashidi',
};

// Vue Router

router.beforeEach((to, from, next)=> {
  window.scrollTo(0, 0);
  next();
});

// Create Vue

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
