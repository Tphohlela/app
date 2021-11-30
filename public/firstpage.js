// const carBrand = document.querySelector('.cB');
const nameBtnElem = document.querySelector('.nameBtn');



nameBtnElem.addEventListener("click", function () {
    var playerName = document.querySelector('.name').value;

    console.log(playerName)

    // axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${model}/color/${modelColor}`)
    // // /v1/cars/make/:make/color/:car_color	
    //     .then(function (result) {
    //         console.log(result.data);

    //         carBrand.innerHTML = template4({ carBrnd: result.data })

    //     })

});