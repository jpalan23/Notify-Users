<template>
  <div id="app">
    <router-view/>
    <Wave/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Wave from './assets/img/Wave';
export default {
  name: 'App',
  components: {
    Wave
  }
}
</script>

<style lang="scss">
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
}
:root{
  --main-color:#6C63FF;
  --font-color:#999;
  --secondary-color:#FF6584;
  --light-main-color: #D0CDE1;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
  width: 100vw;
  height: 100vh;
  background: #fff;
}
</style>
