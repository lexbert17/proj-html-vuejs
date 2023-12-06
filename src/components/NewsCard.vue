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
<div id="ms_card" style="width: 22rem;">
  <img :src="getImageUrl(image)" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="date mt-2">{{ date }}</p>
    <p class="card-text content">{{ content }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
#ms_card{
    text-align: left;

    h5{
    margin-top: 1rem;   
    font-size: .9rem;
    font-weight: 900;
    font-family: 'Noto Sans TC Variable', sans-serif;
    }
    .date{
    font-size: .7rem;
    
    }
    .content{
    color: gray;
    font-family: 'Noto Sans TC Variable', sans-serif;
    font-size: .8rem;
    letter-spacing: .3px;
    }
}
</style>