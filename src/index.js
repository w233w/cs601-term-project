import { createWebHistory, createRouter } from "vue-router";
import Intro from '@/components/Introduction.vue'
import Hometown from '@/components/Hometown.vue'
import Gamelife from '@/components/Gamelife.vue'
import Survey from '@/components/Survey.vue'

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
    path: "/Survey",
    name: "survey",
    component: Survey,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
