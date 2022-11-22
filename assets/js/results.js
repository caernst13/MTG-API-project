//Initialized variables to interact with the website as well as the ones needed from local storage
var cmc = localStorage.getItem("cmc")
var cardType = localStorage.getItem('cardType')
var selected = localStorage.getItem('selected')
var returnEl = document.querySelector("#return")
var start = document.querySelector('#start')

//Function for returning to home page when anopther search is wanted to be performed
var homePage = function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
}

//Search function 
function search() {

    //checks that at least one field was intereacted with and if not returns to home page
    if (!cmc && !cardType && !selected) {window.location.href = 'index.html'};

    //Loops through all the pages of the api (can only call 100 items at a name)
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    //Inital fetch
    fetch(requestURL)
    .then(function (response){
        return response.json();
    })

    //Loops through data once it has been made usable by the .json
    .then(function (data) {

        //Loop for if all search criteria were used, each loop works the same just with different criteria 
        if (cmc && cardType && selected){
            
            //Loops through each page and checks if each criteria matches the card and checks that the card isnt the same as the last card (multiple virsion of the same card are listed multiple times)
            for (var i = 0; i < 101; i++) {
                if (data.cards[i].cmc == cmc && data.cards[i].types.includes(cardType) && data.cards[i].colors.includes(selected) && data.cards[i].name != data.cards[i-1].name){
                
                //If criteria matches creats an immage element
                var img = document.createElement("img");

                //Sets the immage src to the picture code of the selected card
                img.setAttribute('src', data.cards[i].imageUrl);

                //appends the image to the website
                start.appendChild(img);}
                }
            } else if (cmc && cardType){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].cmc == cmc && data.cards[i].types.includes(cardType) && data.cards[i].name != data.cards[i-1].name){
                    
                    var img = document.createElement("img");
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
            } else if (cmc && selected){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].cmc == cmc && data.cards[i].colors.includes(selected) && data.cards[i].name != data.cards[i-1].name){
                    
                    var img = document.createElement("img");
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
  
            } else if (selected && cardType){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].colors.includes(selected) && data.cards[i].types.includes(cardType) && data.cards[i].name != data.cards[i-1].name){
                    
                    var img = document.createElement("img");
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
            } else if (cmc ){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].cmc == cmc && data.cards[i].name != data.cards[i-1].name){
                    
                    var img = document.createElement("img");
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    } 
            } else if (cardType){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].types.includes(cardType) && data.cards[i].name != data.cards[i-1].name){
                    
                    var img = document.createElement("img");
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
            } else {
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].colors.includes(selected) && data.cards[i].name != data.cards[i-1].name){
                    
                    var img = document.createElement("img");
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }  
            } 
})}}

//Calls search function on page load and the homePage function on submit
search();
returnEl.addEventListener('submit', homePage)