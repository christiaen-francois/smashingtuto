<template>
  <div class="container">
      <h1 class="title">
        Projets
      </h1>
      <h2 class="subtitle">
        Voici mes projets GIT bro
      </h2>

      <div class="project" v-for="project in GitHubProjetcts" :key="project.id">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(["GitHubProjetcts"])
    },
    mounted() {
        this.$store.dispatch("getGitHubProjetcts");
    }
}
</script>

<style scoped>

.container{
  text-align: center;
}
.project{
    padding:1em;
    background: #F9F9F9;
    margin-bottom: 1em;
}
</style>
