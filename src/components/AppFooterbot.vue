<script >
import { store } from '../store';
    export default{
  data() {
    return{
      store
    }
  }
}
</script>

<template>
<section>
  <hr>
  <div class="ms_container">
    <p>&#169; Copyright 2012 - 2020 | Avada Theme by <a href="">Theme Fusion</a> | All Rights Reserved | Powered by <a href="">WordPress</a></p>

    <!-- icone  -->
    <ul class="content">    
      <li v-for="icon in store.arraySocial">
        <a href="">
          <i :class="icon" style="color: #ffffff;"></i>
        </a>
      </li>     
    </ul>

  </div>

  <div class="go-top">
    <a href="#home"><i class="fa-solid fa-chevron-up fa-xl" style="color: #ffffff;"></i></a>
  </div>
</section>
</template>

<style lang="scss" scoped>
section{
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  position: relative;

  .ms_container{
    padding: 2rem 0 1rem 0;
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      color: gray;
      font-family: 'Noto Sans TC Variable', sans-serif;
      font-size: .6rem;
      a{
        text-decoration: none;
        color: black;
      }
    }
    .content{
    display: flex;
    justify-content: space-around;
    height: 100%;
    list-style: none;
    gap: 1rem;

      li{
        display: inline-block;
        height: 2.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        &:nth-child(1){
          background-color: hsl(220.88deg 43.13% 41.37%);
        }

        &:nth-child(2){
        background-color:hsl(205.71deg 81.91% 63.14%) ;
        }

        &:nth-child(3){
        background-color:hsl(206.74deg 42.2% 42.75%) ;
        }
        &:nth-child(4){
        background-color: hsl(0.34deg 73.73% 46.27%) ;
        }


          
       a{
       text-decoration: none;
       color: black; 
          
         i{
         position: relative;
         top: 25%;
         transform: translateY(-50%);
         }
       }
      } 
    }  
       
  }
  .go-top{
    background-color: rgba($color: #000000, $alpha: 0.7);
    right: -100px;
    height: 2rem;
    position: absolute;
    bottom: 0;
    right: 90px;
  }
}
</style>