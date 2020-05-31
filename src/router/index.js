import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Misite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/login.vue'
import Shop from '../pages/shop/shop.vue'
import ShopFoods from '../pages/shop/shopFoods/shopFoods.vue'
import shopInfo from '../pages/shop/shopInfo/shopInfo.vue'
import ShopRatings from '../pages/shop/shopRatings/shopRatings.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path : '/',
      redirect : '/msite'
    },
    {
      path : '/msite',
      component : Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path : '/shop',
      component : Shop,
      children : [
        {
          path : '/shop/foods',
          component : ShopFoods
        },
        {
          path : '/shop/ratings',
          component : ShopRatings
        },
        {
          path : '/shop/info',
          component : shopInfo
        },
        {
          path : '/shop',
          redirect : '/shop/foods'
        }
      ]
    }
  ]
})
