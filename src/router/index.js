import { createWebHistory, createRouter } from "vue-router";

  const routes =  [
    {
    path: "/",
    component: () => import('../components/LoginView.vue'),
  },
  {
    path: "/home",
    component: () => import('../components/WelcomeView.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: 'active'
})



export default router;