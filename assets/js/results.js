var cmc = localStorage.getItem("cmc")
console.log(cmc)
var cardType = localStorage.getItem('cardType')
console.log(cardType)
var selected = localStorage.getItem('selected')
console.log(selected)
if (cmc) {
    console.log('there is a cmc')
}
var returnEl = document.querySelector("#return")
var start = document.querySelector('#start')
function testing() {
    var requestURL = 'https://api.magicthegathering.io/v1/cards'

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

function search() {
    var requestURL = 'https://api.magicthegathering.io/v1/cards'

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        if (cmc){
            for (var i = 0; i < 101; i++) {
                if (data.cards[i].cmc == cmc && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                }
            }
  
        })
}
search();
returnEl.addEventListener('submit', homePage)