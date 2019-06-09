const api_url = "https://api.github.com/repos/";

export const validateRepos = value => {
    return /^[0-9a-zA-Z]{2,15}\/[0-9a-zA-Z]{2,15}$/.test(value);
  }


export default function (
    value,
    repositories,
    setRepositories,
){
    return (
        fetch(`${api_url}${value}`)
        .then(response => {
            return response.json();
        })
        .then(repos => {
            const { id, full_name, stargazers_count } = repos;

            if(!id) throw new Error();
        
            const repoIndex = repositories.findIndex( r => r.id === id);
            const newRepositories = [
                ...repositories
            ];

            const repo = {
                id,
                full_name,
                stargazers_count,
            }
            if(repoIndex >= 0){
                newRepositories[repoIndex] = repo
            } else {
                newRepositories.push(repo);
            }

            newRepositories.sort((a, b) => {
                return b.stargazers_count - a.stargazers_count;
            });
            setRepositories(newRepositories)
        })
    );   
}