import DashboardPage from './../components/dashboard/Dashboard.vue'

import GuidePage from './../components/guide/Guide.vue'
import QuickStart from './../components/guide/QuickStart.vue'
import Richtlinien from './../components/guide/Richtlinien.vue'
import Regeln from './../components/guide/Regeln.vue'
import Faq from './../components/guide/Faq.vue'
import Features from './../components/guide/Features.vue'
import GoldStats from './../components/dashboard/GoldStats.vue'
import MemberStats from './../components/dashboard/MemberStats.vue'
import ContractStats from './../components/dashboard/ContractStats.vue'
import AboutPage from './../components/About.vue'



import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "",
        redirect: '/dashboard/gold'
    },
    {
        path : "/dashboard",
        redirect: "/dashboard/gold",
        component : DashboardPage,
        children: [
            {path: "gold", component: GoldStats},
            {path: "auftraege", component: ContractStats},
            {path: "mitglieder", component: MemberStats},
        ],
    },
    {
        path : "/guide",
        component : GuidePage,
        children: [
            {path: "", component: Features},
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

