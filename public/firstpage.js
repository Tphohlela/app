const player = document.querySelector('.displayName');
const nameBtnElem = document.querySelector('.nameBtn');



nameBtnElem.addEventListener('click', function () {
    var playerName = document.querySelector('.name').value;

    console.log(playerName)

    axios.post(`https://isandi-api.herokuapp.com/name/${playerName}`)
    // /v1/cars/make/:make/color/:car_color	
        .then(function (result) {
            console.log(result.data);

            player.innerHTML = result.data 

        })

});