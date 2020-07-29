<template>
  <div class="container">
    <div>
      <HeaderNav />
      <nuxt />
    </div>
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
  min-height:calc(100vh - (3vw * 2)) ;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 30px rgba(0,0,0,.2);
  padding: 3vw;

  position: relative;
}


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 2rem;
}

.container{
  text-align: center;
  min-height:calc(100vh - (3vw * 4));
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.container > div{
  width: 100%;
}

.links {
  margin-top: 2rem;
  display: inline-block;
}

a{
  color:#e72776;
  text-decoration: none;
}

</style>
