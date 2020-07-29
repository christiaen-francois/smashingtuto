export const state = () => ({
    GitHubProjetcts: [],
    GitHubUser: [],
})

export const mutations = {
    updateGitHubProjetcts: (state, payload) => {
        state.GitHubProjetcts = payload
    },
    updateGitHubUser: (state, payload) => {
        state.GitHubUser = payload
    }
}

export const actions = {
    async getGitHubProjetcts({ state, commit }) {
        if(state.GitHubProjetcts.length) return

        try{

            let GitHubProjetcts = await fetch(
                'https://api.github.com/users/christiaen-francois/repos?page=1&per_page=100&sort=updated'
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

        
    },
    async getGitHubUser({ state, commit }) {
        if(state.GitHubUser.length) return

        try{

            let GitHubUser = await fetch(
                'https://api.github.com/users/christiaen-francois'
            ).then(res => res.json())

            console.log(GitHubUser);
            commit('updateGitHubUser', GitHubUser)

        }catch (err){
            console.log(err)
        }
    }
}
