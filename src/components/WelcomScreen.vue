<template>

    <section class="home">
       <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <img src="http://www.umw.edu/covidcourse/wp-content/uploads/sites/51/2020/05/COVID-19_header.jpg">

        <div class="home-content">
        <h1 style="font-size:70px;">
          COVID-19
        </h1>
        <p style="font-size:30px;">This platform helps you to get real-time<br />
        covid cases updates of every country.</p>

        <p style="font-size:20px;">Key Points</p>
        <p>New Confirmed Cases  &#9989</p>
        <p>New Recovered Cases  &#9989</p>
        <p>and many more..</p>
        
        <br />
       
        <router-link to="/stats">Get Started</router-link>
        
      </div>
    </section>    

</template>

<script>
    import Home from './Home';
    
    export default({
      components:{
        'home':Home
      }

    })
</script>   

<style scoped>
    section.home {

      flex-direction: row;
      /* margin-top: 18rem; */
    }


    img {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width:60%

    }

    .home-content {
      position: absolute;
      position: relative;
      z-index: 10;
      /* max-width: 600px; */
      height: 50%;
      width:60%;
      align-content: center;
      margin-top:14rem;

    }

    a {
        background: #ec3312;
        color: #ffffff;
        cursor: pointer;
        padding: .8rem;
        border-radius:5px;
        border: 1px solid #ec3312;
        text-decoration: none;
    }

    a:hover {
      transition-duration: 0.4s;
    }
    
    a:hover {
      background-color: #c82b0f;
      border: 1px solid #c82b0f;
      color: #ffffff;
    }
    
</style>
