var returnEl = document.querySelector("#return")
var start = document.querySelector("#start")
var textSearch = localStorage.getItem("textSearch")    
var typeSearch = localStorage.getItem('typeSearch') 
console.log(textSearch)
console.log(typeSearch)

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
function search() {
    if (!textSearch || !typeSearch) {window.location.href = 'index.html'}
    if (typeSearch === 'name') {
        nameSearch();
    } else if (typeSearch === 'text') {
        abilitySearch();
    } else {
        subTypeSearch();
    }
}

function nameSearch() {
    
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < 101; i++) {
            if (data.cards[i].name.toLowerCase().includes(textSearch) && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
            
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                
        }
});}
};

function abilitySearch() {
    
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < 101; i++) {
            if (data.cards[i].text.toLowerCase().includes(textSearch) && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
            
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                
        }
});}
};

function subTypeSearch() {
    
    for (i=1; i<500; i++) {var requestURL = 'https://api.magicthegathering.io/v1/cards?page='+i

    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < 101; i++) {
            if (data.cards[i].type.toLowerCase().includes(textSearch) && data.cards[i].name != data.cards[i-1].name){
                console.log(data.cards[i].imageUrl);
            
                var img = document.createElement("img")
                img.setAttribute('src', data.cards[i].imageUrl);
                start.appendChild(img);}
                
        }
});}
};

testing();
search();
returnEl.addEventListener('submit', homePage)