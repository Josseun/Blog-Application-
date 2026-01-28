import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/Views/PostHome.vue") },
  {
    path: "/post/:id",
    name: "post.view",
    component: () => import("@/Views/PostView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../Views/NotFound.vue"),
    meta: { title: "404 - Page Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
