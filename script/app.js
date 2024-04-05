document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('searchQuery').value;
    // searchRepositories(searchQuery);    
    alert(searchQuery)
});

async function GithubRepo(searchQuery){
    const repo_api = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`

    try {
        const res = await fetch(repo_api)
        if(res.ok){
        //    const data = await res.json()
        //    return data.items; 
           return await res.json(data.items);
           alert(data.items)
        }
    }
    catch (err){
        console.log('Error :', err)
        return null
    }
}

// https://api.github.com/search/repositories?q=