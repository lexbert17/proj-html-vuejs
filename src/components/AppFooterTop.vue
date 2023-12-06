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
<section class="container ms_container">
  <div class="row d-flex ms_row">
    <div class="col-4 d-flex ms_col">

      <div class="ms_card">
        <h5 class="mb-4">AVADA TECH FORUM</h5>
        <p>Sed semper, nisl id feugiat eleifend, erat est digssim felis, quis auctor elit enim nec ante. Cras et nibh risus. Pellentesque non mi sit amet mi intermentum.</p>
      </div>  

      <div class="ms_card">
        <h5 class="mb-4">POPULAR TOPICS</h5>
        <ul class="list-group list-group-flush">
          <li v-for="list in store.popularTopics" ><a class="d-flex" href=""><span>></span>{{ list }}</a></li>   
        </ul>
      </div>

      <div class="ms_card">
        <h5 class="mb-4">RECENT TOPICS</h5>
        <ul class="list-group list-group-flush">
          <li v-for="list in store.recentTopics" ><a class="d-flex" href=""><span>></span>{{ list }}</a></li>   
        </ul>
      </div>

      <div class="ms_card">
        <h5 class="mb-4">LATEST REPLIES</h5>
        <ul class="list-group list-group-flush">
          <li v-for="list in store.latestReplies" ><a class="d-flex" href=""><span>></span>{{ list }}</a></li>   
        </ul>
      </div>



      


    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
section{
width: 75%;
margin: auto;
  .ms_row{
    width: 100%;
    display: flex;
    margin-top: 4rem;
  
    
    

    .ms_col{
      width: 100%;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      

      .ms_card{
        width: 22%;

        h5{
          font-size: .9rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        p{
          color: gray;
          font-family: 'Noto Sans TC Variable', sans-serif;
          font-size: .8rem;
          line-height: 1.5rem;
        }
        ul{
          list-style: none;
          
          gap: .5rem;
          li{
            border-bottom: 1px solid lightgray;
            padding-bottom: .5rem;

            a{
              text-decoration: none;
              color: black;
              font-family: 'Noto Sans TC Variable', sans-serif;
              font-size: .8rem;
              line-height: 1.5rem;
              span{
              padding-right: .5rem;
              font-size: .7rem;
              margin-top: .2rem;

            }
            }

          }
        }
      }
    }
  }
}
</style>