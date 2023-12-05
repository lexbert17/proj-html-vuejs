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
<div class="ms_container">  
    <aside class="ms_wrap mt-5 aside_left">
        <div class="position">
            <h4>REVIEED PRODUCT</h4>
            <h3>Mauris viverra atisan ipsum eget felis  prims efficitur varius</h3>
            <p>In quis lectus  sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed baldit dui, dolor at bibendum.</p>
            <ReadMore/>
        </div>        
    </aside>
</div>   
</template>

<style lang="scss" scoped>
.ms_container{ 
    width: 75%;

    .aside_left{
    background: url(../assets/images/featured_article_2_bg.jpg);
    background-position: center;
    background-size: cover;
    min-height: 400px;
    color: white;
    text-align: left;
    display: flex;
    align-items: center;
    width:80%;

    .position{
        padding: 0 4rem;
        
    }
    }
}    
</style>