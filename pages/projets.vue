<template>
  <div>
      <h1 class="title">
        Projets GitHub
      </h1>
      <p><a class="gitProfile" :href="GitHubUser.html_url" target="_blank">{{GitHubUser.name}}</a></p>
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
        ...mapState(["GitHubProjetcts", "GitHubUser"])
    }
}
</script>

<style scoped>
.project{
    padding:1em;
    background: #F9F9F9;
    margin: 1em 0;
}
.title{
  margin-bottom: 1rem;
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
