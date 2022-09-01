import DashboardPage from './../components/Dashboard.vue'

import GuidePage from './../components/guide/Guide.vue'
import QuickStart from './../components/guide/QuickStart.vue'
import Richtlinien from './../components/guide/Richtlinien.vue'
import Regeln from './../components/guide/Regeln.vue'
import Faq from './../components/guide/Faq.vue'
import Heroes from './../components/guide/Heroes.vue'

import AboutPage from './../components/About.vue'



import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
        {
        path : "",
        component : DashboardPage
    },
    {
        path : "/guide",
        component : GuidePage,
        children: [
            {path: "", component: Heroes},
            {path: "quickstart", component: QuickStart},
            {path: "richtlinien", component: Richtlinien},
            {path: "regeln", component: Regeln},
            {path: "faq", component: Faq}
        ],
    },
    {
        path : "/about",
        component : AboutPage
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;

