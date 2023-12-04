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
    <div class="container d-flex ms_container">
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
  
.ms_container{
  flex-wrap: wrap;
  background-color: blue;
  justify-content: space-between;
  width: 75%;
  padding: 1rem 0;
  align-items: stretch;
  
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
      margin-top: 1rem;
      
      
      
      
      
      li:nth-child(7){
        background-color: black;
        display: block;
        
        
        a{
          padding: 0 15px;
          
          
        }
      }
      li{
        text-decoration: none; 
        align-self: center;
        height: 100%;
        
        a{
          text-decoration: none;
          color: white;
          
        }
      }
    
    }  

}
}

</style>