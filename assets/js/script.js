var nameFormEl = document.querySelector('#nameSearch')
var cardNameEl = document.querySelector('#cardName')
var otherSearchEl = document.querySelector('#otherSearch')
var cardTypeEl = document.querySelector('#cardType')
var cmcEl = document.querySelector('#cmc')
// function testing() {
//     var requestURL = 'http://api.magicthegathering.io/v1/cards'

//     fetch(requestURL)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//     });
// };

// testing();

var nameSearch = function (event) {
    event.preventDefault();
    var cardName = cardNameEl.value.trim();
    console.log(cardName)
    console.log('test')
};

var otherSearch = function (event) {
    event.preventDefault();

    var checkedEl = $('input:checked');
    var selected = [];

    $.each(checkedEl, function () {
        selected.push($(this).val());
    });
    if (selected.length > 0) {console.log(selected)};

    var cardType = cardTypeEl.value;
    console.log(cardType);

    var cmc = cmcEl;
    if (Number.isInteger(cmc)) {console.log(cmc)};
}

nameFormEl.addEventListener('submit', nameSearch);
otherSearchEl.addEventListener('submit', otherSearch);
