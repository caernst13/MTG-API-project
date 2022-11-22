var cmc = localStorage.getItem("cmc")
console.log(cmc)
var cardType = localStorage.getItem('cardType')
console.log(cardType)
var selected = localStorage.getItem('selected')
console.log(selected)

var returnEl = document.querySelector("#return")
function testing() {
    var requestURL = 'http://api.magicthegathering.io/v1/cards'

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data.cards)
    });
};

testing();

var homePage = function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
}

returnEl.addEventListener('submit', homePage)