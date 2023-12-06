<script >
import ReadMore from './ReadMore.vue';

    export default{
  data() {
    return{
      
    }
  },
  components:{ ReadMore, }
}
</script>

<template>
<div class="ms_container">  
    <aside class="ms_wrap mt-5 aside_left">
        <div class="position">
            <h4>REVIEWED PRODUCT</h4>
            <h3>Mauris viverra atisan ipsum eget felis  prims efficitur varius</h3>
            <p class=mb-4>In quis lectus  sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed baldit dui, dolor at bibendum.</p>

            <!-- bottone  -->
            <ReadMore/>
        </div>        
    </aside>

    
</div>   
</template>

<style lang="scss" scoped>
.ms_container{ 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .aside_left{
    background: url(../assets/images/featured_article_2_bg.jpg);
    background-position: center;
    background-size: cover;
    height: 450px;
    color: white;
    text-align: left;
    display: flex;
    align-items: center;
    width: 90%;
    
    

    .position{
        padding: 0 4rem;
        
        h4{
        padding-top: 2rem;
        padding-bottom: 1rem;
        font-size: .8rem;
        letter-spacing: 1px;
        letter-spacing: 5px;
        }
        h3{
        font-family: 'Noto Sans TC Variable', sans-serif;
        font-weight: 800;
        line-height: 2.5rem;
        }
        p{
        font-family: 'Noto Sans TC Variable', sans-serif;
        font-size: .8rem;
        }
    }
    }

}    
</style>