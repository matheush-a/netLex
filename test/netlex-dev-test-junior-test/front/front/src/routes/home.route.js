import Home from '../views/Home'
import Menu from '../constants/menu'

export default {
    path: '/home',
    component: Home,
    children: Menu
}