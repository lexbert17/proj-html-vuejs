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
    <div class="ms_position">
      <h3 class="mb-4">Subscribe to our Newsletter</h3>
      <form action="/action_page.php">
        <label for="email"></label>
        <!-- text email  -->
        <input type="email" id="email" placeholder="insert your email*" name="email">
        <!-- bottone invio -->
        <input id="send" type="submit" value="SEND">
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section{
justify-content: center;
align-items: center;
background-color: hsl(0deg 0% 94.9%)  ;


.ms_position{
  padding: 4rem 0 ;

  h3{
    text-align: center;
    font-family: 'Noto Sans TC Variable', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
  }
  #email{
    height: 2rem;
    width: 400px;
    font-size: .8rem;
    padding: .5rem;
    border:gray;
    margin-right: 2rem; 
    background-color: white;
  }

  #send{
    height: 2rem;
    width: 150px;
    font-weight: 600;
    color: white;
    background-color: black;
    border: black;
    font-size: .9rem;
    letter-spacing: -1px;
  }
}
}

</style>