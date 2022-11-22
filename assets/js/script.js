var wordFormEl = document.querySelector('#wordSearch')
var textSearchEl = document.querySelector('#textSearch')
var otherSearchEl = document.querySelector('#otherSearch')
var cardTypeEl = document.querySelector('#cardType')
var cmcEl = document.querySelector('#cmc')
var typeSearchEl = document.querySelector('#typeSearch')
function testing() {
    var requestURL = 'https://api.magicthegathering.io/v1/cards'

    fetch(requestURL, {
        headers: {'Count': '31090'}
    })
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    });
};

testing();

var wordSearch = function (event) {
    event.preventDefault();

    var textSearch = textSearchEl.value.trim().toLowerCase();
    console.log(textSearch);
    localStorage.setItem("textSearch", textSearch);
    var typeSearch = typeSearchEl.value
    localStorage.setItem("typeSearch", typeSearch)
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

wordFormEl.addEventListener('submit', wordSearch);
otherSearchEl.addEventListener('submit', otherSearch);
