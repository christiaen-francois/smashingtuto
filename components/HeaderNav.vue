<template>
  <div>
    <a class="gitProfile" :href="GitHubUser.html_url" target="_blank">
      <p>{{GitHubUser.name}}
        
      </p>
      <img :src="GitHubUser.avatar_url" alt="">
    </a>

    <nuxt-link to="/">
      <Logo />
    </nuxt-link>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from "vuex"

export default {
  components: {
    Logo
  },
  computed: {
    ...mapState(["GitHubUser"])
  }
}
</script>

<style scoped>
svg{
    width:150px;
    height: auto;
    margin: 0 0 1.5rem 0;
}

.gitProfile{
  position:absolute;
  top: 1vw;
  right: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .8rem;
  color:#526488;
  display: none;
}
.gitProfile img{
  width: 50px;
  height: auto;
  border-radius: 100%;
  margin-left: 1rem;
  box-shadow: 0 0 20px rgba(0,0,0,.3);
  border:solid 1px #fff
}
</style>