console.log('test')

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