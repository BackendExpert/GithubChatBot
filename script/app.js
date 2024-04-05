const form = document.getElementById('searchForm');

form.addEventListener('submit', function(e){
    e.preventDefault()

    // get value of input
    const searchData = document.forms['FormSearch']['searchQuery'].value;

    if(searchData === ""){
        alert("Enter Value")
    }
    alert(searchData)

    // fetch data from api
    fetch("https://api.github.com/search/repositories?q=" + searchData)
    .then((result) => result.json())
    .then((data) => {
        var DataSearch = document.getElementById("results");
        let title = "<h2>Result: </h2>"

        DataSearch.innerHTML = title;
    })
    


})
