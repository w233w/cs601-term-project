import { createWebHistory, createRouter } from "vue-router";
import Intro from '@/components/Introduction.vue'
import Hometown from '@/components/Hometown.vue'
import Gamelife from '@/components/Gamelife.vue'
import Myform from '@/components/Tell-me-about-you.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Intro,
  },
  {
    path: "/Introduction",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/Hometown",
    name: "Hometown",
    component: Hometown,
  },
  {
    path: "/Gamelife",
    name: "gamelife",
    component: Gamelife,
  },
  {
    path: "/Myform",
    name: "form",
    component: Myform,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
