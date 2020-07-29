export const state = () => ({
    GitHubProjetcts: []
})

export const mutations = {
    updateGitHubProjetcts: (state, payload) => {
        state.GitHubProjetcts = payload
    }
}

export const actions = {
    async getGitHubProjetcts({ state, commit }) {
        if(state.GitHubProjetcts.length) return

        try{

            let GitHubProjetcts = await fetch(
                'https://api.github.com/users/christiaen-francois/repos?page=1&per_page=100'
            ).then(res => res.json())

            
            
            // filter pour ne pas afficher les projets forkés
            GitHubProjetcts = GitHubProjetcts.filter(el => el.fork === false).map(({
                id, name, description, html_url, updated_at, language
            }) => ({
                id, name, description, html_url, updated_at, language
            }))

            console.log(GitHubProjetcts);
            commit('updateGitHubProjetcts', GitHubProjetcts)

        }catch (err){
            console.log(err)
        }

        
    }
}
