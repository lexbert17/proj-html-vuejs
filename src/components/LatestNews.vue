<script >
import NewsCard from "./NewsCard.vue";
    export default{
  data() {
    return{
      newsTop: [
        {
          src:"iphone-pic-big.jpg",
          titolo:"Fusce sollicitudin nunc sed placerat vaius",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
        {
          src:"iphone-pic-big.jpg",
          titolo:"Fusce sollicitudin nunc sed placerat vaius",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
        {
          src:"iphone-pic-big.jpg",
          titolo:"Fusce sollicitudin nunc sed placerat vaius",
          data:"October 11th, 2015 | Comments Off",
          paragrafo:"Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl"
        },
      ]
    }
  },
  methods: {
    getImageUrl(src) {
        return new URL(`../assets/images/${src}`, import.meta.url).href;
    }
  },
  components: {NewsCard}

}
</script>

<template>
<section>
  <div class="container ms_container">
    <h4>PHASELLUS EGET METUS</h4>
    <h2>All the latest news</h2>
    <hr>
    <div class="row">
      <div class="col" v-for="(newe, index) in newsTop" :key="index">
        <NewsCard :image="newe.src" :title="newe.titolo" :date="newe.data" :content="newe.paragrafo"/>
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
}
</style>