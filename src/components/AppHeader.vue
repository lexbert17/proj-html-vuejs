<script >
import { store } from '../store';
export default{
  data() {
    return{
      store,
    }
  }
}
</script>

<template>
 <header id="home">
    <div class="container d-flex ms_container">
      <!-- contenitore logo  -->
      <div class="img_container">
        <img src="../assets/images/big-logo.png" alt="">
      </div>
      
      <!-- contenitore menu -->
      <ul class=" d-flex">
        <li v-for="list in this.store.arrayHeader"><a href="">{{ list }}</a></li>
        <li><i class="fa-solid fa-magnifying-glass fa-sm" style="color: #ffffff;"></i></li>
      </ul>
     
    </div>
 </header>
</template>

<style lang="scss" scoped>
header{
  background-color: hsl(187.95deg 65.94% 44.9%);
  
.ms_container{
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;
  padding: 1rem 0;
  align-items: stretch;
  
  // logo 
  .img_container{
    max-width: 250px;

      img{
        width: 100%;
      }
    }
    // /logo
    
    // menu 
    ul{
      list-style: none;
      gap: 1rem; 
      align-items: end;
      margin-top: 1rem;
       
      li:nth-child(7){
        background-color: black;
        display: block;
        font-family: 'Open Sans Variable', sans-serif;
        font-weight: 600;
        width: 100px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        &:hover{
          filter: brightness(1.75);
        }
  
        a{
          padding: 0 20px;
        }
      }

      li{
        text-decoration: none; 
        align-self: center;
        height: 100%;
        font-family: 'Fira Mono', sans-serif;
        
        a{
          text-decoration: none;
          color: white;  
        }
      }
      // menu 
    }  

}
}

</style>