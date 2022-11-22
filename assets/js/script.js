//Initialized variables to interact with the website
var wordFormEl = document.querySelector('#wordSearch')
var textSearchEl = document.querySelector('#textSearch')
var otherSearchEl = document.querySelector('#otherSearch')
var cardTypeEl = document.querySelector('#cardType')
var cmcEl = document.querySelector('#cmc')
var typeSearchEl = document.querySelector('#typeSearch')

//Function for searching using the main text bar
var wordSearch = function (event) {
    event.preventDefault();
    
    //Getting the value from the text field, making sure its made universal, and assigning to a variable that is then placed in local storage
    var textSearch = textSearchEl.value.trim().toLowerCase();
    localStorage.setItem("textSearch", textSearch);

    //Getting value from first drop down menu and assinging to a variable that is then placed in local storage
    var typeSearch = typeSearchEl.value
    localStorage.setItem("typeSearch", typeSearch)

    //Changing the location of the website to the page designed to handle the text searches
    window.location.href = 'name.html'
};

//function for other more generic search criteria
var otherSearch = function (event) {
    event.preventDefault();

    //Creates an empty array for the checkbox to have its values put into
    var checkedEl = $('input:checked');
    var selected = [];
     
    //Loops through and adds any checked boxes values to the array then stores into local storage
    $.each(checkedEl, function () {
        selected.push($(this).val());
    });
    localStorage.setItem('selected', selected);
    
    //Gets value of card type, puts into a variable that is then placed into local storage
    var cardType = cardTypeEl.value;
    localStorage.setItem('cardType', cardType);
    
    //Gets value for converted mana cost, puts into a variable that is then placed into local storage
    var cmc = cmcEl.value;
    localStorage.setItem("cmc", cmc);
    
    //changes the location of the website to the page designed to handle these search criteria 
    window.location.href = 'results.html'
    
}

//Event listeners for the two different search buttons
wordFormEl.addEventListener('submit', wordSearch);
otherSearchEl.addEventListener('submit', otherSearch);
