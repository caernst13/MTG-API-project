var nameFormEl = document.querySelector('#nameSearch')
var cardNameEl = document.querySelector('#cardName')
var otherSearchEl = document.querySelector('#otherSearch')
var cardTypeEl = document.querySelector('#cardType')
var cmcEl = document.querySelector('#cmc')
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

    var cardName = cardNameEl.value.trim().toLowerCase();
    console.log(cardName);
    localStorage.setItem("cardName", cardName);

    window.location.href = 'name.html'
};

var otherSearch = function (event) {
    event.preventDefault();

    
    var checkedEl = $('input:checked');
    var selected = [];
    
    $.each(checkedEl, function () {
        selected.push($(this).val());
    });
    if (selected.length > 0) {console.log(selected)};
    localStorage.setItem('selected', selected);
    
    var cardType = cardTypeEl.value;
    console.log(cardType);
    localStorage.setItem('cardType', cardType);
    
    var cmc = cmcEl.value;
    console.log(cmc);
    localStorage.setItem("cmc", cmc);
    
    window.location.href = 'results.html'
    
}

nameFormEl.addEventListener('submit', nameSearch);
otherSearchEl.addEventListener('submit', otherSearch);
