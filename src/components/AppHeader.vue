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
 <header>
    <div class="container d-flex ms_cont">
      <div class="img_container">
        <img src="../assets/images/big-logo.png" alt="">
      </div>
      
      <ul class=" d-flex">
        <li v-for="list in this.store.arrayHeader"><a href="">{{ list }}</a></li>
        <li><i class="fa-solid fa-magnifying-glass fa-sm" style="color: #ffffff;"></i></li>
      </ul>

        
    </div>
 </header>
</template>

<style lang="scss" scoped>
header{
  background-color: green;
  
.ms_cont{
  flex-wrap: wrap;
  background-color: blue;
  justify-content: space-around;
  .img_container{
    background-color: red;
    max-width: 250px;

     
      img{
        width: 100%;
      }
    }
    ul{
      list-style: none;
      gap: 1rem; 
      align-items: end;
      background-color: orange;
      
      
      
      li:nth-child(7){
        background-color: black;
        
        display: block;
        
        a{
          padding: 5px 15px;
        }
      }
      li{
        text-decoration: none; 
        
        
        a{
          text-decoration: none;
          color: white;
        }
      }
    
    }  

}
}

</style>