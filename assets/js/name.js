var returnEl = document.querySelector("#return")

var cardName = localStorage.getItem("cardName")     
console.log(cardName)

var homePage = function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
}

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
function nameSearch() {
    var requestURL = 'http://api.magicthegathering.io/v1/cards'

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data.cards[i].name.includes(cardName)){
                console.log(data.cards[i].name)
            }
        }
    });
};
testing();
// nameSearch();
returnEl.addEventListener('submit', homePage)