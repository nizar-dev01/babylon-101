import { createRouter, createWebHashHistory } from "vue-router";
import Game from "../components/Game.vue";
import Learning from "../components/Learning.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/learning" },
    {
      path: "/learning",
      component: Learning,
    },
    {
      path: "/game",
      component: Game,
    },
  ],
});

export { router };
