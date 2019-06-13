import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Ping from '@/components/Ping'
import LoginPage from '@/components/LoginPage.vue'
import MyHome from '@/components/MyHome.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: MyHome,
      meta: {
        // requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping
    },
    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/MyHome',
      query: { redirect: to.fullPath }
    })
  } else if (token && to.name === 'Login') {
    // 用户已登录，但又去访问登录页面时不让他过去
    next({
      path: from.fullPath
    })
  } else {
    next()
  }
})

export default router
