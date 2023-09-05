import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home';
import WelcomeScreen from './components/WelcomScreen';



//Created Routes to navigate to different web pages
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/', component:WelcomeScreen
        },
        {
            path:'/stats', component:Home
        },
        {
            path:'/:notFound(.*)', redirect:'/'
        }
    ]
})
const app = createApp(App);



app.use(router);

app.mount('#app');

//keep the good work going
