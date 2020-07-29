<template>
  <div class="container">
      <h1 class="title">
        Projets
      </h1>
      <h2 class="subtitle">
        Voici mes projets GIT bro
      </h2>

      <div class="project" v-for="project in GitHubProjetcts" :key="project.id">
          <h3><a :href="project.html_url"></a>{{ project.name }}</a></h3>
          <p v-if="project.language">{{ project.language }}</p>
          <p v-if="project.updated_at">{{ project.updated_at }}</p>
          <p v-if="project.description">{{ project.description }}</p>
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
