<script >
    export default{
  data() {
    return{
      
    }
  }
}
</script>

<template>
  <!-- bottone  -->
<div class="button">
    <a href="">READ MORE  <i class="fa-solid fa-chevron-right fa-xs" style="color: #ffffff;"></i></a>
</div>
</template>

<style lang="scss" scoped>
.button{
    background-color: black;
    display: inline-block;
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0 25px;

    &:hover{
      filter: brightness(2);
    }

    a{
        text-decoration: none;
        color: white;
        letter-spacing: -1px;
        font-weight: 600;

       i{
        margin-left: 5px;
       }
    }
}
</style>