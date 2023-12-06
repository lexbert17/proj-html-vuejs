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

    <ul class="content">    
      <li v-for="icon in store.arraySocial">
        <a href="">
          <i :class="icon" style="color: #ffffff;"></i>
        </a>
      </li>     
    </ul>

  </div>
</section>
</template>

<style lang="scss" scoped>
section{
  margin-top: 4rem;
  display: flex;
  justify-content: center;

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
        background-color: black;
        display: inline-block;
        height: 2.5rem;
        aspect-ratio: 1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;
          
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
}
</style>