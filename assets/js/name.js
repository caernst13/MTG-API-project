//Initialized variables to interact with the website as well as the ones needed from local storage
var returnEl = document.querySelector("#return")
var start = document.querySelector("#start")
var textSearch = localStorage.getItem("textSearch")    
var typeSearch = localStorage.getItem('typeSearch') 

//Function for when the user wants to return to the home page for another search
var homePage = function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
}

//Function for determining which type of search the user requested
function search() {

    //If user did not select anything return to the home page
    if (!textSearch || !typeSearch) {window.location.href = 'index.html'}

    //Basic if statements to check the kind of search user requested and calls appropriate function
    if (typeSearch === 'name') {
        nameSearch();
    } else if (typeSearch === 'text') {
        abilitySearch();
    } else {
        subTypeSearch();
    }
}

//Function for searching by card name
function nameSearch() {
    
    //Loops through all the pages of the api (can only call 100 items at a name)
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    //initial fetch request
    fetch(requestURL)
    .then(function (response){
        return response.json();
    })

    //secondary fetch request once data is readable from the .jason
    .then(function (data) {

        //loops over the data
        for (var i = 0; i < 101; i++) {

            //checks if the name element of the card matches what the user typed and makes sure card isnt the same as previous card (multiple virsions of the same card listed multiple time)
            if (data.cards[i].name.toLowerCase().includes(textSearch) && data.cards[i].name != data.cards[i-1].name){
                
                //creates the img element
                var img = document.createElement("img")

                //assigns the elements src to be the selected cards image
                img.setAttribute('src', data.cards[i].imageUrl);

                //appends the image
                start.appendChild(img);}
                
        }
});}
};

//Function for searching by part of a cards ability, works the same as nameSearch except checks if the text of the card matches instead of name
function abilitySearch() {
    
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < 101; i++) {
            if (data.cards[i].text.toLowerCase().includes(textSearch) && data.cards[i].name != data.cards[i-1].name){
            
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                
        }
});}
};

//Function for searching by a cards sub type, works teh same as nameSearch except checks if the type of the card matches instead of name
function subTypeSearch() {
    
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < 101; i++) {
            if (data.cards[i].type.toLowerCase().includes(textSearch) && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
            
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                
        }
});}
};

//Event listener and calls the inital function on page load
search();
returnEl.addEventListener('submit', homePage)