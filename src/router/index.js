import GuidePage from './../components/GuidePage.vue'
import DashPage from './../components/DashPage.vue'



import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/guide",
        component : GuidePage
    },
    {
        path : "/dashboard",
        component : DashPage
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;

