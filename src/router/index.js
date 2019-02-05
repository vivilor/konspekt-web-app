import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: []
}

export default new Router(router)
