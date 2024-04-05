document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchQuery = document.getElementById('searchQuery').value;
    // searchRepositories(searchQuery);    
    alert(searchQuery)
});

async function GithubRepo(searchQuery){
    
}

// https://api.github.com/search/repositories?q=