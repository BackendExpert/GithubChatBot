const form = document.getElementById('searchForm');

form.addEventListener('submit', function(e){
    e.preventDefault()

    // get value of input
    const searchData = document.forms['FormSearch']['searchQuery'].value;

    if(searchData === ""){
        alert("Enter Value")
    }


    
    alert(searchData)

    document.getElementById("results").innerHTML = `
        
    `
})
