<template>
  <div>
      <h1 class="title">
        Projets GitHub
      </h1>
      <h2 class="subtitle">
        Utilisation de l'API de GitHub pour récupérer mes repository publics.
      </h2>

      <div class="project" v-for="project in GitHubProjetcts" :key="project.id">
          <h3><a :href="project.html_url" target="_blank">{{ project.name }}</a> <small>({{ project.language }})</small></h3>
          <p v-if="project.description">{{ project.description }}</p>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(["GitHubProjetcts"])
    }
}
</script>

<style scoped>
.project{
    padding:1em;
    background: #F9F9F9;
    margin-bottom: 1em;
}
.infos{
  font-size: .9rem;
  margin-bottom: .5rem;
}
.language{
  font-weight: bold;
}
h3{
  margin-bottom: .5rem;
}
small{
  font-weight: normal;
}
</style>
