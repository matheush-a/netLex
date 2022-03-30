import VueRouter from "vue-router"
import LoginRoutes from "./login.route"
import HomeRoutes from "./home.route"

const router = new VueRouter({
    mode: 'history',
    routes: [
        LoginRoutes,
        HomeRoutes
    ]
})

export default router