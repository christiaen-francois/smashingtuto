<template>
  <div>
      <h1 class="title">
        Projets
      </h1>
      <h2 class="subtitle">
        Voici les projets qui sont sur mon GitHub.
      </h2>

      <div class="project" v-for="project in GitHubProjetcts" :key="project.id">
          <h3><a :href="project.html_url" target="_blank">{{ project.name }}</a></h3>
          <p class="infos"><span v-if="project.language" class="language">{{ project.language }}</p>
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
</style>
