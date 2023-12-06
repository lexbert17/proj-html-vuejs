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

      <!-- bottone  -->
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

      h1{
        font-weight: 1000;
        font-family: 'Poppins', sans-serif;
        font-size: 6rem
        
      }
      p{
        font-family: 'Fira Mono', sans-serif;
      }

      // bottone
      .avada{
        background-color: hsl(187.95deg 66.52% 44.51%);
        display: inline-block;
        height: 3rem;

        &:hover{
          &:hover{
          filter: brightness(1.70);
        }
        }
        
        a{
          text-decoration: none;
          color: white;
          padding:  0px 20px  ;
          height: 3rem;
          font-family: 'Fira Mono', sans-serif;
          font-weight: 800;
          line-height: 3rem;   
        }
      }
      

    }
  }
</style>