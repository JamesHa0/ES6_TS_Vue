import UserManageIndex from '@/views/UserManageIndex.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: UserManageIndex
        },
    ]
})

export default router
