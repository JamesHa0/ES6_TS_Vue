import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import NewsDetail from '../views/NewsDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',   //重定向到已有的路由规则
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news',
      name: 'nnnews',
      component: () => import('../views/NewsView.vue'),
      children: [
        {
          path: '/detail/:id/:title/:content',
          // path: '/detail',
          name: 'newsdetail',
          component: NewsDetail,
          // props: true
          props(route) {
            return route.params;
          }
        }
      ]

    }
  ]
})

export default router
