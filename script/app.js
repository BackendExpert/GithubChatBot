var form = document.getElementById('myform');

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.forms["myForm"]["search"].value;
    if(search == ""){
        alert("Enter a valid Github username");
        return false;
    }

    var oname = search.split(' ').join()
    alert(oname);

    fetch("https://api.github.com/search/repositories?q="+oname)
    .then((result_folllow) => result_folllow.json())
    .then((data_follow) => {
        var followers = document.getElementById('result');

        let countFollowers = `<hr><h2>'${data_follow.description}'</h2>`;

        for(let i = 0; i < data_follow.length; i++){
            //countFollowers += '<div>' + data_follow[i].login + '</div>';
            countFollowers += "<a href='" + data_follow[i].description + "' target='_blank'><img src='" + data_follow[i].avatar_url + "' class='follower-img'></>";
        }

        followers.innerHTML = countFollowers;
    })
})