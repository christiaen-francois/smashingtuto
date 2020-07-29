<template>
  <div class="container">
      <div>
        <nuxt-link to="/">
        <Logo /></nuxt-link>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
svg{
    width:200px;
    height: auto;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>