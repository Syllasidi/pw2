
import type { Planet } from './Planets';
import { Starship, StarshipStatus } from './Starship'; 
import { calculateFlightDurationFromEarth } from './utils/flightCalculator';
import { Citron, OliveOil, Sucre, TomateCerise } from './classes/Produits';
import Cart from './classes/Cart';


 //une instance de Starship
const myStarship = new Starship('Prometheus', 100000);
console.log("la réf ",myStarship.id ,"le statut",myStarship.statut)

// methode takeoff
myStarship.takeoff()
console.log("la réf ",myStarship.id ,"le statut",myStarship.statut)

//methode fly
myStarship.fly()
console.log("la réf ",myStarship.id ,"le statut",myStarship.statut)

// methode land
myStarship.land()
console.log("la réf ",myStarship.id ,"le statut",myStarship.statut)

//methode park
myStarship.park()
console.log("la réf ",myStarship.id ,"le statut",myStarship.statut)


//Création du tableau de planètes
const planets: Planet[] = [
    { name: "Mercure", distanceFromEarth: 92 },
    { name: "Vénus", distanceFromEarth: 41 },
    { name: "Mars", distanceFromEarth: 78 },
    { name: "Jupiter", distanceFromEarth: 628 },
    { name: "Saturne", distanceFromEarth: 1275 },
    { name: "Uranus", distanceFromEarth: 2724 },
    { name: "Neptune", distanceFromEarth: 4351 },
    
    
];

// Tri par distance croissante
const sortedByDistance = planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log("Tri par distance croissante \n",sortedByDistance);

// Tri par ordre alphabétique croissant
const sortedAlphabetically = planets.sort((a, b) => a.name.localeCompare(b.name));
console.log("Tri par ordre alphabéte croissante",sortedAlphabetically)

// Tri par ordre alphabétique décroissant
const sortedReverseAlphabetically = planets.sort((a, b) => b.name.localeCompare(a.name));
console.log("ordre alphabétique décroissant \n",sortedReverseAlphabetically);


// Calcul de la distance moyenne
const averageDistance = planets.reduce((sum, planet) => sum + planet.distanceFromEarth,0) / planets.length;
console.log(`La distance moyenne de la Terre aux planètes est de ${averageDistance} millions de km.`);



// fonction calculateFlightDurationFromEarth

const res = calculateFlightDurationFromEarth(planets[3],myStarship, "hours")
console.log("Durée du vol vers ",planets[3].name,":",res,"Heures donc ",res/24," jours")


const lemon = new Citron(0.5);
const oliveOil = new OliveOil(5);
const sugar = new Sucre(3.9);
const tomato = new TomateCerise(3.5);

const cart = new Cart();
cart.add(lemon, 2);
cart.add(oliveOil, 1.5);
cart.add(sugar, 0.5);
cart.add(lemon, 5);
cart.add(sugar, 3);
cart.add(tomato, 1.5);

console.log("Nombre de types de produits:", cart.orderLines.length);
console.log("Montant pour les tomates:", cart.calculateAmountByProduct(tomato));
console.log("Montant total:", cart.calculateAmount());
console.log("Détails du panier:", cart.displayDetails());
