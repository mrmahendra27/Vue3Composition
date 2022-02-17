import { createRouter, createWebHistory } from "vue-router"
import CompanyIndex from '../components/companies/CompanyIndex.vue'
import CompanyCreate from '../components/companies/CompanyCreate.vue'
import CompanyUpdate from '../components/companies/CompanyUpdate.vue'


const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompanyIndex
    },
    {
        path: '/company/create',
        name: 'companies.create',
        component: CompanyCreate
    },
    {
        path: '/company/:id/update',
        name: 'companies.update',
        component: CompanyUpdate,
        props: true
    }
]


export default createRouter({
    history: createWebHistory(),
    routes
})