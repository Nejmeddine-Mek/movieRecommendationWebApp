const searchInput = document.getElementById('SearchBar'); // here we get the input prompt
const srchBtn = document.getElementById("searchIcon"); // this is the search button so that we can keep track of when the user clicks on search


// we cal the following function when the user clicks on the seach button/icon
srchBtn.addEventListener('click', async (event) => {
    //we try this block
    try{
        if(searchInput.value != ""){  // we execute this portion if the input is not empty
            // we search for data basically
            const res = await fetch(`http://localhost:3000/search?query=${searchInput.value}`, {
             method : "GET"
            })
            //we should first check if the response is okay!
            const data = await res.json();  //we parse the response
            console.log(data)
            const pic = document.createElement("img"); //we add an image #just a test
            pic.src= data.Poster;
            document.body.append(pic);
             }  
             else{
                window.alert("enter a search query");
             } 
    }
    catch(err){
        console.log(err); // if we catch any error we display it in the console
    }

});
