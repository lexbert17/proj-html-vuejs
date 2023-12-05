<script >
import FeaturedArticle from "./FeaturedArticle.vue";
import NewsCard from "./NewsCard.vue";
import ReviewedProduct from "./ReviewedProduct.vue"
import SmallestCard from "./SmallestCard.vue";

    export default{
  data() {
    return{
      newsTop: [
        {
          src:"iphone-lock-big.jpg",
          titolo:"Fusce sollicitudin nunc sed placerat vaius",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
        {
          src:"iphone-pic-big.jpg",
          titolo:"Vivamus pellenteque, felisquis varius",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
        {
          src:"watch-big.jpg",
          titolo:"Donec ornare pretium eget scelisque justo",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
      ],
      newsBot: [
        {
          src:"tablet-big.jpg",
          titolo:"Fusce sollicitudin nunc sed placerat vaius",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
        {
          src:"camera-big.jpg",
          titolo:"Donec facilis sodales leo sit amet laoreet",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
        {
          src:"monitor-big.jpg",
          titolo:"Proin eu purus sed aru  aliquet curabir vens",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
      ],
      tutorialsAndGuides: [
        {
          src:"smallest-watch.jpg",
          titolo:"Donec ornare pretium eget scelisque justo",
          data:"October 11th, 2015 | Comments Off",
        },
        {
          src:"smallest-tablet.jpg",
          titolo:"Fusce sollicitudin nunc sed placerat vaius",
          data:"October 11th, 2015 | Comments Off",
        },
        {
          src:"smallest-monitor.jpg",
          titolo:"Proin eu purus sed aru  aliquet curabir vens",
          data:"October 11th, 2015 | Comments Off",
        },
      ],
    }
  },
  methods: {
    getImageUrl(src) {
        return new URL(`../assets/images/${src}`, import.meta.url).href;
    }
  },
  components: { NewsCard, FeaturedArticle, ReviewedProduct, SmallestCard }

}
</script>

<template>
<section>
  <div class="container ms_container">
    <h4>PHASELLUS EGET METUS</h4>
    <h2>All the latest news</h2>
    <hr>
    <div class="ms_row mt-5">
      <div class="ms_col" v-for="(new1, index) in newsTop" :key="index">
        <NewsCard :image="new1.src" :title="new1.titolo" :date="new1.data" :content="new1.paragrafo"/>
      </div>
    </div>
    <FeaturedArticle/>
    <div class="ms_row mt-5">
      <div class="ms_col" v-for="(new2, index) in newsBot" :key="index">
        <NewsCard :image="new2.src" :title="new2.titolo" :date="new2.data" :content="new2.paragrafo"/>
      </div>
    </div>
    <div class="d-flex aside">
      <ReviewedProduct/>
      <div class="mt-5">
        <h4>Tutorials & Guides</h4>
        <hr>
        <div class="" v-for="(tutorial, index) in tutorialsAndGuides" :key="index">
          <SmallestCard :image="tutorial.src" :title="tutorial.titolo" :date="tutorial.data" :content="tutorial.paragrafo"/>
        </div>
      </div>
    </div>
    
      
   
     
      
      
   
    
    
  </div>
</section>
</template>

<style lang="scss" scoped>
.ms_container{
  width: 75%;
  text-align: center;
  padding: 3rem 0;
    h4{

    }
    h2{

    }
    hr{
      width: 70px;
      margin: auto;
      border: 1.5px solid brown;
    }

    .ms_row{
      display: flex;
      justify-content: space-between;
    }

    .aside{
      align-items: start;

      h4{
        text-align: left;
        margin-top: 3rem;
      }
      hr{
        margin: 2rem 0;
      }
    }
    
}
</style>