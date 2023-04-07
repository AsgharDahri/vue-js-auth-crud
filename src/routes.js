import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import Signin from './components/Signin'
import AddRestro from './components/AddRestro.vue'
import UpdateRestro from './components/UpdateRestro.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/Signup'
    },
    {
        name:'login',
        component:Signin,
        path:'/login'
    }
    ,
    {
        name:'add',
        component:AddRestro,
        path:'/add'
    },
    {
        name:'update',
        component:UpdateRestro,
        path:'/update/:id/:name/:address/:contact'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;