<script >
    export default{
  data() {
    return{
      
    }
  }
}
</script>

<template>
<section class="d-flex">
    <div class="container ms_container" >
      <h1 class="mb-3">Tech forum!</h1>
      <p class="mb-3">Discuss all the lates technology news and trends</p>
      <div class="avada mb-3">
        <a href="">GET AVADA NOW! <i class="fa-solid fa-chevron-right fa-sm" style="color: #ffffff;"></i></a>
      </div>
      
    </div>
  </section>    
</template>

<style lang="scss" scoped>
  section{
    background: url(../assets/images/home_slider_bg.jpg);
    background-position: center;
    background-size: cover;
    min-height: 700px;
    align-items: center;
    color: white;

    .ms_container{
      width: 75%;
    
      
      background-color: red;
      h1{
        
      }
      p{

      }
      .avada{
        background-color: blue;
        display: inline-block;
      
        a{
          text-decoration: none;
          color: white;
          padding:  0px 20px  ;
          height: 2rem;
          
          
        }
      }

    }
  }
</style>