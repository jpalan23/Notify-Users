<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="bottom-wave" viewBox="0 0 1440 320">
      <path fill="#6C63FF" fill-opacity="1"
          d="M0,256L120,261.3C240,267,480,277,720,240C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
      </path>
  </svg>

</template>

<script>
export default {
    name:"Wave"
}
</script>
<style lang="scss">
.bottom-wave{
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 0;

    @media screen and (max-width: 1050px){
        display: none;
    }
}


</style>