<script >
    export default{ 
        props: {
            title: String,
            date: String,
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
 
<div>  
    <a href="">
        <div id="ms_card">
        <img :src="getImageUrl(image)" class="" alt="...">
        <div class="content">
            <h5 class="">{{ title }}</h5>
            <p>{{ date }}</p>
        </div>
        </div>
    </a>    
</div>    
</template>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: black;
}
#ms_card{
    text-align: left;
    display: flex;
    img{
        width: 150px;
            
    }

    .content{
        margin-left: 1rem;

        h5{
            font-size: .8rem;
            font-weight: 800;
            font-family: 'Noto Sans TC Variable', sans-serif;
           
        }
        p{
          font-size: .6rem; 
          color: gray;
          font-family: 'Noto Sans TC Variable', sans-serif;
          
        }
    }
}
</style>