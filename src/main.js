``` To get Started with Vue.js
1. npm install -g @vue/cli
2. vue create <your-router-project>``` 

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home';
import WelcomeScreen from './components/WelcomScreen';




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
