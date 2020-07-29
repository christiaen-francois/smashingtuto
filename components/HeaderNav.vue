<template>
  <div>
    <nuxt-link to="/">
      <Logo />
    </nuxt-link>
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
    width:100px;
    height: auto;
    margin: 0 0 1.5rem 0;
}
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>