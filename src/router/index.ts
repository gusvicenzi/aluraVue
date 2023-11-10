import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Tarefas from '../views/Tarefas.vue'

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router
