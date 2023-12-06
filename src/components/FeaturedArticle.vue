<script >
import ReadMore from './ReadMore.vue';

export default{
  data() {
    return{
      
    }
  },
  components:{ ReadMore }
}
</script>

<template>
  <section class="ms_wrap mt-5">
    <div class="position">
        <h4>FEATURE ARTICLE</h4>
        <h3 class="mb-3">Cras malesuada et orci eget pharetra</h3>
        <p class="mb-4">In quis lectus  sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed baldit dui, dolor at bibendum sadips ets ipsums dolores ficilis uns  leo lectus.</p>
        <ReadMore/>
    </div>        
  </section>
</template>

<style lang="scss" scoped>
section{
   background: url(../assets/images/featured_article_1_bg.jpg);
   background-position: center;
   background-size: cover;
   min-height: 500px;
   color: white;
   text-align: left;
   display: flex;
   align-items: center;

   .position{
    padding: 0 4rem;
    
    h4{
      padding-top: 2rem;
      padding-bottom: 1rem;
      font-size: .8rem;
      letter-spacing: 1px;
      letter-spacing: 2px;
    }
    h3{
    font-family: 'Noto Sans TC Variable', sans-serif;
    font-weight: 800;

    }
    p{
      font-family: 'Noto Sans TC Variable', sans-serif;
      font-size: .9rem;
    }
   }
}
</style>