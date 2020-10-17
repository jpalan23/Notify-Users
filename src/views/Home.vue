<template>
  <div class="home">
    <div class="notify-left-img">
      <img src="@/assets/img/NotifyMe.png" alt="notify-img"/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

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

    .notify-left-img{
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
}
</style>
