var returnEl = document.querySelector("#return")
var start = document.querySelector("#start")
var cardName = localStorage.getItem("cardName")     
console.log(cardName)

var homePage = function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
}

function testing() {
    var requestURL = 'https://api.magicthegathering.io/v1/cards'

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data.cards)
        var img = document.createElement('img');
        img.setAttribute('src', data.cards[0].imagerul)
    });
};
function nameSearch() {
    var requestURL = 'https://api.magicthegathering.io/v1/cards'

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < 101; i++) {
            if (data.cards[i].name.toLowerCase().includes(cardName) && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
            
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                
        }
    });
};
testing();
nameSearch();
returnEl.addEventListener('submit', homePage)