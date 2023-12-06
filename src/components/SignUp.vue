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

        <!-- bottone  -->
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
        margin: 4rem 0;
            h2{
            font-family: 'Noto Sans TC Variable', sans-serif;
            font-weight: 900;
            }
            p{
            font-family: 'Noto Sans TC Variable', sans-serif;
            font-size: .7rem;
            }
              .signup{
                display: inline-block;
                height: 2.5rem;
                width: 100px;
                background-color: hsl(187.95deg 66.52% 44.51%);
                margin-top: 1.5rem;

                    &:hover{
                    filter: brightness(1.75);
                    }
                    a{
                    height: 2.5rem;
                    line-height: 2.5rem;
                    text-decoration: none;
                    color: white;
                    font-weight: 500;
                    font-size: .9rem;
                    }
                }
    }

}
</style>