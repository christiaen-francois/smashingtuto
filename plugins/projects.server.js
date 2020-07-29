export default async ({ store }) => {
    await store.dispatch("getGitHubProjetcts")
}