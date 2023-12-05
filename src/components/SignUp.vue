<script >
    export default{
  data() {
    return{
      
    }
  }
}
</script>

<template>
<section class="d-flex">
    <div class="smallest-container">
        <h2>Hey! Join to our Community </h2>
        <p>Nulla molestie nec lectus venenatis,sed blandit dui finibus. Curabitur feugiat vulputate purus ipsums dolores ficilis uns  etra</p>
        <div class="signup ">
            <a href="">SIGN UP <i class="fa-solid fa-chevron-right fa-sm" style="color: #ffffff;"></i></a>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
section{
    background: url(../assets/images/join_now_cta_bg.jpg);
    background-position: center;
    background-size: cover;
    min-height: 300px;
    align-items: center;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;

    .smallest-container{
        width: 26%;
        background-color: red;
        margin: 4rem 0;
        
        .signup{
            background-color: black;
            display: inline-block;
            height: 2.5rem;
            width: 100px;
            

            a{
                height: 2.5rem;
                line-height: 2.5rem;
                text-decoration: none;
                color: white;
            }
        }
    }

}
</style>