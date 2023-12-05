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
  <section>
      <div class="ms_container container">
        <h4>PHASELLUS EGET METUS</h4>
        <h2>Forum Sections</h2>
        <hr class="mt-4 mb-4">
        <div class="row d-flex ">
          <div class="col-4 d-flex gap-5 ms_col">

            <div class="ms_card" v-for="forum in store.arrayForum" >
                <div class="content">
                  <a href="">
                    <div class="orange">
                      <i :class="forum.icon" style="color: #ffffff;"></i>
                    </div>
                    <h6 class="card-title mt-3">{{ forum.title }}</h6>   
                  </a>
                </div>
             </div>

            

            

       
  

         





          </div>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
section{
text-align: center;
  .ms_container{
    width: 75%;
    background: palegreen;

      h4{}

      h2{

      }
      hr{
      width: 70px;
      margin: auto;
      border: 1.5px solid brown;
      
      }
      .row{
        width: 100%;
        margin: auto;
        .ms_col{
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          

        }
      }
    .ms_card{
      background-color: green;
      aspect-ratio: 1;
      width: 200px;

      .content{
        display: flex;
        justify-content: center;
       align-items: center;
       height: 100%;

       a{
        text-decoration: none;
        color: black;
          .orange{
              background-color: orange;
              display: inline-block;
              height: 4rem;
              aspect-ratio: 1;
              border-radius: 50%;
              

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
}
</style>