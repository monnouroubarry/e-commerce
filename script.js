import { dombutton } from "./function.js";
dombutton('accueil');
dombutton('categories');
dombutton('produits');
dombutton('panier');
// ouverture des pages via window.location.hrf
import { ouvrirpage } from "./function.js";
ouvrirpage('accueil','accueil.html');
ouvrirpage('categories', 'categories.html');
ouvrirpage('produits', 'produits.html');
ouvrirpage('panier', 'panier.html');