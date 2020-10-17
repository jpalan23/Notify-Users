<template>
  <div class="home">
    <div class="left-img">
      <img src="@/assets/img/Subscriber.png" alt="subscribe-img"/>
    </div>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>
<style lang="scss">
.home{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;

    @media screen and (max-width: 1050px){
        grid-gap: 1rem;
    }

    @media screen and (max-width: 1000px){
      grid-template-columns: 1fr;
      grid-gap: 0rem;
    }

    @media screen and (max-width: 700px){
      padding: 0;
    }

}

.left-img{
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img{
      width: 500px; 
  }

  @media screen and (max-width: 1000px){
        display: none;
    }
}
</style>
