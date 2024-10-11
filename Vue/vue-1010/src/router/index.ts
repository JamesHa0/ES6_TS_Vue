import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/a1",
      component: () => import("@/views/A1.vue")
    },
    {
      path: "/a2",
      component: () => import("@/views/A2.vue")
    },
    {
      path: "/pagination",
      component: () => import("@/views/Pagination.vue")
    }
  ],
})

export default router
