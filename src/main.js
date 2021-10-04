import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home';
import WelcomeScreen from './components/WelcomScreen';
import Endpage from './components/Endpage';




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
        },
        {
            path:'/:GoodBye', component:Endpage
        }
    ]
})
const app = createApp(App);



app.use(router);

app.mount('#app');

//keep the good work going
