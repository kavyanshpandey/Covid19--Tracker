<template>
    <div>

        <router-view></router-view>
        <!-- <welcome-screen></welcome-screen> -->

        <!-- <home></home> -->
        

    </div>    
</template>


<script>
import WelcomeScreen from './components/WelcomScreen.vue';
import Home from './components/Home.vue';

export default({
    components:{
        'home':Home,
        'welcome-screen':WelcomeScreen
    }
    
})
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

template,
body {
  font-family: "Times New Roman", Times, serif;
  color: #111;
  background: url("https://raw.githubusercontent.com/Mr-vabs/mnnessaa/main/card/layered-waves.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
