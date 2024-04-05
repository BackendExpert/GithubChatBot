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
            // ApiData += "<p>" + data.items[i].owner.login + "</p>"
            ApiData += `
                <div class='api_data'>
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <img src="`+ data.items[i].owner.avatar_url +`" />
                            <p>Owner : <span style="color: green;">`+ data.items[i].owner.login +`</span></p>
                        </div>
                        <div style="padding-left:40px;">
                            <p>`+  data.items[i].full_name +`</p>
                        </div>
                        <div style="padding-left:40px;">
                            <a href="`+ data.items[i].html_url +`" target="_blank">
                                <button>Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
            `
        }
        ApiData += data.total_count;
        DataSearch.innerHTML = ApiData;
    })
    


})
