import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NewWorld from '../components/NewWorld'

Vue.use(Router)

const routes = [
    {
        path:'/',
        name:'Hello World',
        component:HelloWorld
    },
    {
        path:'/new',
        name:'New World',
        component:NewWorld
    }
]

let router = new Router({
    routes
})

export default router