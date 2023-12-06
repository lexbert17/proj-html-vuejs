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
            <!-- cards forum -->
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
background-color: hsl(0deg 0% 94.9%);
  .ms_container{
    width: 75%;
    padding-top: 5rem;
      h4{
      padding-top: 2rem;
      padding-bottom: 1rem;
      font-size: .8rem;
      letter-spacing: 2px;
      font-weight: 700;
      color: gray;
      }

      h2{
      font-family: 'Noto Sans TC Variable', sans-serif;
      font-weight: 900;
      margin-bottom: 1.5rem;
      }
      hr{
      width: 70px;
      margin: auto;
      border: 1px solid orange;
      
      
      }
      .row{
        width: 100%;
        margin: auto;
        padding-top: 1.5rem;
        .ms_col{
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          

        }
      }
    .ms_card{
      background-color: white;
      aspect-ratio: 1;
      width: 200px;
      border-top: 2px solid hsl(196.32deg 54.84% 48.63%);
      margin-bottom: 5rem;

      &:hover{
        transform: scale(1.1);
      }

      .content{
        display: flex;
        justify-content: center;
       align-items: center;
       height: 100%;

       a{
        text-decoration: none;
        color: black;
        letter-spacing: -1px;
        font-weight: 900;
        font-family: 'Noto Sans TC Variable', sans-serif;
          .orange{
              background-color: hsl(16.98deg 100% 68.82%);
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