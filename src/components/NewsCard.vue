<script >
    export default{ 
        props: {
            title: String,
            date: String,
            content: String,
            image: String,
        },
    data() {
        return{
        }
    },
    methods: {
    getImageUrl(image) {
        return new URL(`../assets/images/${image}`, import.meta.url).href;
    }
    },
  
  
}
</script>

<template>
<div  style="width: 18rem;">
  <img :src="getImageUrl(image)" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p>{{ date }}</p>
    <p class="card-text">{{ content }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>