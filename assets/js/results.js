var cmc = localStorage.getItem("cmc")
console.log(cmc)
var cardType = localStorage.getItem('cardType')
console.log(cardType)
var selected = localStorage.getItem('selected')
console.log(selected)
if (!selected) {
    console.log('empty')
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
        if (cmc && cardType && selected){
            for (var i = 0; i < 101; i++) {
                if (data.cards[i].cmc == cmc && data.cards[i].types.includes(cardType) && data.cards[i].colors.includes(selected) && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                }
            } else if (cmc && cardType){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].cmc == cmc && data.cards[i].types.includes(cardType) && data.cards[i].name != data.cards[i-1].name){
                    console.log(data.cards[i].imageUrl);
                    var img = document.createElement("img")
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
            } else if (cmc && selected){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].cmc == cmc && data.cards[i].colors.includes(selected) && data.cards[i].name != data.cards[i-1].name){
                    console.log(data.cards[i].imageUrl);
                    var img = document.createElement("img")
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
  
            } else if (selected && cardType){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].colors.includes(selected) && data.cards[i].types.includes(cardType) && data.cards[i].name != data.cards[i-1].name){
                    console.log(data.cards[i].imageUrl);
                    var img = document.createElement("img")
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
            } else if (cmc ){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].cmc == cmc && data.cards[i].name != data.cards[i-1].name){
                    console.log(data.cards[i].imageUrl);
                    var img = document.createElement("img")
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    } 
            } else if (cardType){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].types.includes(cardType) && data.cards[i].name != data.cards[i-1].name){
                    console.log(data.cards[i].imageUrl);
                    var img = document.createElement("img")
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }
            } else if (selected){
                for (var i = 0; i < 101; i++) {
                    if (data.cards[i].colors.includes(selected) && data.cards[i].name != data.cards[i-1].name){
                    console.log(data.cards[i].imageUrl);
                    var img = document.createElement("img")
                    img.setAttribute('src', data.cards[i].imageUrl);
                    start.appendChild(img);}
                    }  
            } else {
                window.location.href = 'index.html'
            } 
})}
search();
returnEl.addEventListener('submit', homePage)