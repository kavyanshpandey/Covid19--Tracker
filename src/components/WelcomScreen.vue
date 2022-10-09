<template>

    <section class="home">
       <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DT8VAU74FShwj6wnDdAgQ1ukpY1TGgAzZA&usqp=CAU">

        <div class="home-content">
        <h1 style="font-size:70px;">
          COVID-19
        </h1>
        <p style="font-size:30px;">This site will help you to get real-time<br />
        covid cases updates of every country.</p>

        <p style="font-size:20px;">Key Features</p>
        <p> Confirmed Cases  &#9989</p>
        <p> Recovered Cases  &#9989</p>
        <p>Many more...</p>
        
        <br />
       
        <router-link to="/stats"> Lets Get Started</router-link>
        
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
      background-color: #440c02;
      border: 1px solid #f0f0f0;
      color: #030000;
    }
    
</style>
