import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewMemoView from '../views/NewView.vue'
import MemoList from '../views/MemoList.vue'
import EditView from '../views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Memo',
    name: 'memo',
    component: NewMemoView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  },
  {
    path: '/list',
    name: 'list',
    component: MemoList
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) f../views/MemoList.vue
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MemoList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
