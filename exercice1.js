let car = {
    name : "Eggo",
    img : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    wheels : 4,
    color : "marron",
    constructor : "citroen",
    fuel : "solaire",
    numberOfDoors : 3,
    autonomy : "450km",
    maxSpeed : "120km/h"
}

let url = document.getElementById("url");
let image = document.createElement("img");
let description = document.getElementById("description");

image.src = car.img;
url.prepend(image);

carDescription("Nom de la voiture :",car.name);
carDescription("Nombres de roues :",car.wheels);
carDescription("Couleur :",car.color);
carDescription("Constructeur :",car.constructor);
carDescription("Carburant :",car.fuel);
carDescription("Nombres de portes :",car.numberOfDoors);
carDescription("Autonomie :",car.autonomy);
carDescription("Vitesse maximale :",car.maxSpeed);

function carDescription(detail, element) {
    let para = document.createElement('p');
    description.append(para);
    para.innerHTML += detail + " " + element;
}



