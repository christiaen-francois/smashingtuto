<template>
  <div>
    <HeaderNav />
    <nuxt />
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue'

export default {
  components: {
    HeaderNav
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html{
  background: #092938;
  padding: 3vw;
}
body {
  background: #fff;
  min-height:calc(100vh - 3vw) ;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 30px rgba(0,0,0,.2);
  padding: 3vw;
}

</style>
