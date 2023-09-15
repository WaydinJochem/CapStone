import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueCookies from 'vue-cookies';
import sweetAlert from 'sweetalert'
import store from '@/store';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (!VueCookies.get("userToken")) {
        next('/');
        sweetAlert({
          title: "Not Logged In",
          text: "Please Log In before Continuing",
          icon: "error",
          timer: 1000,
        });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    beforeEnter: (to, from, next) => {
      if (!VueCookies.get("userToken")) {
        next('/');
        sweetAlert({
          title: "Not Logged In",
          text: "Please Log In before Continuing",
          icon: "error",
          timer: 1000,
        });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/products',
    name: 'products',
    // component: () => import ('../views/Products.vue')
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
    beforeEnter: (to, from, next) => {
      if (!VueCookies.get("userToken")) {
        next('/');
        sweetAlert({
          title: "Not Logged In",
          text: "Please Log In before Continuing",
          icon: "error",
          timer: 1000,
        });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminPage.vue'),
    beforeEnter: (to, from, next) => {
      const user = store.state.user
      if (!VueCookies.get("userToken")) {
        next('/');
        sweetAlert({
          title: "Not Logged In",
          text: "Please Log In before Continuing",
          icon: "error",
          timer: 1000,
        });
      } else if (user && user.role !== 'admin') {
        // User is logged in but not an admin, redirect to an unauthorized page or show an error message
        sweetAlert({
          title: "Not Logged In",
          text: "Access Denied. You are not an admin.",
          icon: "error",
          timer: 1000,
        })
      }

      else {
        next();
      }
    }
  },
  {
    path: '/products/:id',
    name: 'Item',
    component: () => import('../views/Product.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (!VueCookies.get("userToken")) {
        next('/');
        sweetAlert({
          title: "Not Logged In",
          text: "Please Log In before Continuing",
          icon: "error",
          timer: 1000,
        });
      }
      else {
        next();
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    beforeEnter: (to, from, next) => {
      if (!VueCookies.get("userToken")) {
        next('/');
        sweetAlert({
          title: "Not Logged In",
          text: "Please Log In before Continuing",
          timer: 1000,
        });
      }
      else {
        next();
      }
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
