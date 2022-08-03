import { createWebHashHistory, createRouter } from "vue-router";
import Introduction from '@/components/Introduction.vue'
import Hometown from '@/components/Hometown.vue'
import Gamelife from '@/components/Gamelife.vue'
import Survey from '@/components/Survey.vue'
import Gallary from '@/components/Gallary.vue'
import Resume from '@/components/Resume.vue'
import Showcase from '@/components/Showcase.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Introduction,
  },
  {
    path: "/Introduction",
    name: "introduction",
    component: Introduction,
  },
  {
    path: "/Hometown",
    name: "hometown",
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
  {
    path: "/Gallary",
    name: "gallary",
    component: Gallary,
  },
  {
    path: "/Resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/Showcase",
    name: "showcase",
    component: Showcase,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
