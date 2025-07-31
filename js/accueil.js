'use strict';
// === Produits en promotion ===
const produitsPromo = [
    { nom: "Jupe Longue Rouge",prixOriginal: 20, prix: 12, image: "assets/jupelong3.png"},
    { nom: "Retro Orange-Noir", prixOriginal: 35, prix: 30, image: "assets/retro1.1.png"},
    { nom: "Jupe Courte Noire", prixOriginal: 20, prix: 15, image: "assets/jupeshort2.png"},
    { nom: "Maillot Barça Orange", prixOriginal: 20, prix: 18, image: "assets/kitbarca.png"},
    { nom: "Talon Sandale Noir", prixOriginal: 40, prix: 37, image: "assets/talon3.png"},
    { nom: "Retro 5 Blanc", prixOriginal: 35, prix: 30, image: "assets/retro5.1.png"}
];

// === Fonction pour créer les cartes produits ===
const container = document.querySelector(".produits-promo-container");

produitsPromo.forEach((produit) => {
  const card = document.createElement("div");
  const nbreEvaluation = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  card.className = "produit-promo";
  card.innerHTML = `
    <img src="${produit.image}" alt="${produit.nom}">
    <h3>${produit.nom}</h3>
    <div class="prixOriginal">$ ${produit.prixOriginal}</div>
    <div class="promo">$ ${produit.prix}</div>
    <div class="eval-wrapper">
        <img class="evaluation" src="icone/evaluation4.png" alt="Évaluation">
        <span class="nbreEvaluation">${nbreEvaluation}</span>
    </div>
    <button class="ajouter-panier" data-produit='${JSON.stringify(produit)}'>Ajouter au panier</button>
  `;

  // Gérer le clic sur "Ajouter au panier"
  const bouton = card.querySelector("button");
  bouton.addEventListener("click", () => {
    ajouterAuPanier(produit);
  });

  container.appendChild(card);
});

// === Ajouter un produit au panier ===
function ajouterAuPanier(produit) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];

  // On extrait uniquement les données souhaitées
  const produitPanier = {
    nom: produit.nom,
    prix: produit.prix,
    image: produit.image,
  };

  // Vérifie si le produit est déjà dans le panier
  const index = panier.findIndex(p => p.nom === produit.nom);
  if (index !== -1) {
    panier[index].quantite += 1;
  } else {
    panier.push({ ...produitPanier, quantite: 1 });
  }

  localStorage.setItem("panier", JSON.stringify(panier));
  alert(`${produit.nom} ajouté au panier !`);
}


