import Vue from "vue";
import VueRouter from "vue-router";
import cookie from '@/util/util.cookie.js'
import store from '@/store'

Vue.use(VueRouter);

const routes = [
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const whiteRouteList = []
router.beforeEach(async (to, from, next) => {
  const token = cookie.get('token')
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRoles = store.getters.role && store.getters.role.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { role } = await store.dispatch('user/getUserInfo')
          const asyncRoutes = await store.dispatch('permission/generateRoutes', role)
          router.addRoutes(asyncRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteRouteList.includes(to.path)) {
      next()
    } else {
      // next(`/login?redirect=${to.path}`)
      console.log(111)
    }
  }
})

export default router;
