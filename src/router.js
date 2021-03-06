import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

const Index = (resolve) => {
  require.ensure(['./views/Index.vue'], () => {
    resolve(require('./views/Index.vue'));
  });
};

const NotFound = (resolve) => {
  require.ensure(['./views/NotFound.vue'], () => {
    resolve(require('./views/NotFound.vue'));
  });
};

const Project = (resolve) => {
  require.ensure(['./views/Project.vue'], () => {
    resolve(require('./views/Project.vue'));
  });
};

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/portfolio/:id',
      name: 'portfolio',
      component: Project,
      props: true,
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '*',
      redirect: { name: 'not-found' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return { x: 0, y: 0 };
  },
});
