import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/Home";
import WelcomeScreen from "./components/WelcomScreen";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      //path to home
      path: "/",
      component: WelcomeScreen,
    },
    {
      //path to stats
      path: "/stats",
      component: Home,
    },
    {
      //path for 404
      path: "/:notFound(.*)404",
      redirect: "/",
    },
  ],
});
const app = createApp(App);

app.use(router);

app.mount("#app");

//keep the good work going
