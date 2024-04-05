const form = document.getElementById('searchForm');

form.addEventListener('submit', async function(e){
    e.preventDefault()

    // get value of input
    const searchData = document.forms['FormSearch']['searchQuery'].value;

    if(searchData === ""){
        alert("Enter Value")
    }
    alert(searchData)

    // fetch data from api
    await fetch("https://api.github.com/search/repositories?q="+searchData)
    .then((result) => result.json())
    .then((data) => {
        var DataSearch = document.getElementById("results");
        let ApiData = "<h2>Result: </h2>"

        // ApiData += data.items[0].name

        for(var i = 0; i < 10 && i < data.items.length; i++){
            ApiData += "<p>" + data.items[i].owner.url + "</p>"
            
            // var owner = 
        }

        DataSearch.innerHTML = ApiData;
    })
    


})
