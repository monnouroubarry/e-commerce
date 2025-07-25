'use strict';
// Quand la page est complètement chargée
document.addEventListener("DOMContentLoaded", () => {
  
  // Liste des produits à afficher (nom, prix, image)
const produits = [
  { nom: "Culotte NBA 1", prix: 0, image: "assets/cullotnba1.png" },
  { nom: "Culotte NBA 2", prix: 0, image: "assets/cullotnba2.png" },
  { nom: "Veste NBA 1", prix: 0, image: "assets/jacketnba1.png" },
  { nom: "Veste NBA 2", prix: 0, image: "assets/jacketnba2.png" },
  { nom: "Veste NBA 3", prix: 0, image: "assets/jacketnba3.png" },
  { nom: "Veste NBA 4", prix: 0, image: "assets/jacketnba4.png" },
  { nom: "Jupe Longue Noire", prix: 0, image: "assets/jupelong.png" },
  { nom: "Jupe Longue 2", prix: 0, image: "assets/jupelong2.png" },
  { nom: "Jupe Longue 3", prix: 0, image: "assets/jupelong3.png" },
  { nom: "Jupe Short 1", prix: 0, image: "assets/jupeshort1.png" },
  { nom: "Jupe Short 2", prix: 0, image: "assets/jupeshort2.png" },
  { nom: "Jupe Short 3", prix: 0, image: "assets/jupeshort3.png" },
  { nom: "Kit Argentine 1", prix: 0, image: "assets/kitargentine1.png" },
  { nom: "Kit Argentine 2", prix: 0, image: "assets/kitargentine2.png" },
  { nom: "Kit Barça", prix: 0, image: "assets/kitbarca.png" },
  { nom: "Kit France", prix: 0, image: "assets/kitfrance.png" },
  { nom: "Kit Paris", prix: 0, image: "assets/kitparis.png" },
  { nom: "Kit Real Madrid", prix: 0, image: "assets/kitrealmadrid.png" },
  { nom: "Maillot Lakers 1", prix: 0, image: "assets/lakers1.png" },
  { nom: "Maillot Lakers 2", prix: 0, image: "assets/lakers2.png" },
  { nom: "Pantalon Femme 1", prix: 0, image: "assets/pantalonfemme1.png" },
  { nom: "Pantalon Femme 2", prix: 0, image: "assets/pantalonfemme2.png" },
  { nom: "Pantalon Femme 3", prix: 0, image: "assets/pantalonfemme3.png" },
  { nom: "Pantalon Femme 4", prix: 0, image: "assets/pantalonfemme4.png" },
  { nom: "Pantalon NBA 1", prix: 0, image: "assets/pantalonnba1.png" },
  { nom: "Pantalon NBA 2", prix: 0, image: "assets/pantalonnba2.png" },
  { nom: "Retro 1.0", prix: 0, image: "assets/retro1.0.png" },
  { nom: "Retro 1.1", prix: 0, image: "assets/retro1.1.png" },
  { nom: "Retro 4.0", prix: 0, image: "assets/retro4.0.png" },
  { nom: "Retro 4.1", prix: 0, image: "assets/retro4.1.png" },
  { nom: "Retro 4.2", prix: 0, image: "assets/retro4.2.png" },
  { nom: "Retro 5.0", prix: 0, image: "assets/retro5.0.png" },
  { nom: "Retro 5.1", prix: 0, image: "assets/retro5.1.png" },
  { nom: "Retro 5.2", prix: 0, image: "assets/retro5.2.png" },
  { nom: "Retro 6.0", prix: 0, image: "assets/retro6.0.png" },
  { nom: "Retro 6.1", prix: 0, image: "assets/retro6.1.png" },
  { nom: "Retro 9.0", prix: 0, image: "assets/retro9.0.png" },
  { nom: "Retro 9.1", prix: 0, image: "assets/retro9.1.png" },
  { nom: "Retro 11.0", prix: 0, image: "assets/retro11.0.png" },
  { nom: "Retro 11.1", prix: 0, image: "assets/retro11.1.png" },
  { nom: "Retro 11.2", prix: 0, image: "assets/retro11.2.png" },
  { nom: "Retro 13.0", prix: 0, image: "assets/retro13.0.png" },
  { nom: "Retro 13.1", prix: 0, image: "assets/retro13.1.png" },
  { nom: "Retro 14.0", prix: 0, image: "assets/retro14.0.png" },
  { nom: "Talon 1", prix: 0, image: "assets/talon1.png" },
  { nom: "Talon 2", prix: 0, image: "assets/talon2.png" },
  { nom: "Talon 3", prix: 0, image: "assets/talon3.png" },
  { nom: "Talon 4", prix: 0, image: "assets/talon4.png" },
  { nom: "Talon 5", prix: 0, image: "assets/talon5.png" },
];


  // On sélectionne la balise <main> dans la page pour y ajouter les produits
  const main = document.querySelector("main");

  // Pour chaque produit, on crée un bloc HTML avec son contenu
  produits.forEach((produit, index) => {
    // Création d’un <div> pour contenir les infos du produit
    const div = document.createElement("div");
    div.classList.add("produit"); // ajout d’une classe CSS
    div.classList.add("index"); // ajout d'une classe CSS pour les 

    // Contenu HTML à l’intérieur du bloc
    div.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}" style="width:150px;height:auto;">
      <h3>${produit.nom}</h3>
      <p>Prix : ${produit.prix} GNF</p>
      <button class="btn-ajouter" data-id="${index}">
     <img src="assets/panier.png" alt="Panier" class="icone-panier"> Ajouter au panier
    </button>

    `;
    

    // On ajoute ce bloc au contenu principal de la page
    main.appendChild(div);
  });

  // On sélectionne tous les boutons "Ajouter au panier"
  document.querySelectorAll("button").forEach(btn => {
    // Quand on clique sur un bouton
    btn.addEventListener("click", e => {
      // Récupère l’index du produit dans la liste via l’attribut data-id
      const id = e.target.dataset.id;
      const produit = produits[id];

      // Appelle la fonction pour ajouter le produit au panier
      ajouterAuPanier(produit);
    });
  });

  // Fonction pour ajouter un produit au panier
  function ajouterAuPanier(produit) {
    // Récupère le panier depuis le localStorage (ou tableau vide si pas encore créé)
    const panier = JSON.parse(localStorage.getItem("panier")) || [];

    // Ajoute le produit sélectionné au tableau panier
    panier.push(produit);

    // Enregistre le panier mis à jour dans le localStorage
    localStorage.setItem("panier", JSON.stringify(panier));

    // Affiche un message de confirmation
    alert(`${produit.nom} ajouté au panier`);
  }

});
