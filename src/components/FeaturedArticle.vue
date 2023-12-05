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
        <h3>Cras malesuada et orci eget pharetra</h3>
        <p>In quis lectus  sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed baldit dui, dolor at bibendum sadips ets ipsums dolores ficilis uns  leo lectus.</p>
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
    
   }
}
</style>