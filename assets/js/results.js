var cmc = localStorage.getItem("cmc")
console.log(cmc)
var cardType = localStorage.getItem('cardType')
console.log(cardType)
var selected = localStorage.getItem('selected')
console.log(selected)

var returnEl = document.querySelector("#return")

var homePage = function (event) {
    event.preventDefault();
    window.location.href = 'index.html'
}

returnEl.addEventListener('submit', homePage)