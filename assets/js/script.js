var nameFormEl = document.querySelector('#nameSearch')
var cardNameEl = document.querySelector('#cardName')
function testing() {
    var requestURL = 'http://api.magicthegathering.io/v1/cards'

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    });
};

testing();

    
var nameSearch = function (event) {
    event.preventDefault();
    var cardName = cardNameEl.value.trim();
    console.log(cardName)
    console.log('test')
};

nameFormEl.addEventListener('submit', nameSearch);