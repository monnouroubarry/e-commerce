// === Produits en promotion ===
const produitsPromo = [
    { nom: "Jupe Longue 3",prixOriginal: 23, prix: 20, image: "assets/jupelong3.png"},
    { nom: "Retro 1.1", prixOriginal: 25, prix: 20, image: "assets/retro1.1.png"},
    { nom: "Jupe Short 2", prixOriginal: 20, prix: 15, image: "assets/jupeshort2.png"},
    { nom: "Kit Barça",prixOriginal: 15, prix: 13, image: "assets/kitbarca.png"},
    { nom: "Talon 3",prixOriginal: 25, prix: 20, image: "assets/talon3.png"},
    { nom: "Retro 5.1",prixOriginal: 30, prix: 25, image: "assets/retro5.1.png"}
];

// === Fonction pour créer les cartes produits ===
const container = document.querySelector(".produits-promo-container");

produitsPromo.forEach((produit) => {
  const card = document.createElement("div");
  card.className = "produit-promo";

  card.innerHTML = `
    <img src="${produit.image}" alt="${produit.nom}">
    <h3>${produit.nom}</h3>
    <div class="prixOriginal">${produit.prixOriginal}€</div>
    <div class="promo">$ ${produit.prix}</div>
    <button>Ajouter au panier</button>
  `;

  // Gérer le clic sur "Ajouter au panier"
  const bouton = card.querySelector("button");
  bouton.addEventListener("click", () => {
    ajouterAuPanier(produit);
    window.location.href = "panier.html"; // Redirection immédiate
  });

  container.appendChild(card);
});

// Fonction pour filtrer les produits en fonction de la recherche
document.getElementById("recherche-produit").addEventListener("input", function () {
  const recherche = this.value.toLowerCase();
  const cartes = document.querySelectorAll(".carte-produit"); // classe que tu donnes à chaque carte

  cartes.forEach((carte) => {
    const nom = carte.querySelector("h3").textContent.toLowerCase();
    if (nom.includes(recherche)) {
      carte.style.display = "block";
    } else {
      carte.style.display = "none";
    }
  });
});

// === Ajouter un produit au panier ===
function ajouterAuPanier(produit) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];

  // Chercher si le produit existe déjà dans le panier
  const index = panier.findIndex(p => p.nom === produit.nom);
  if (index !== -1) {
    panier[index].quantite += 1;
  } else {
    panier.push({ ...produit, quantite: 1 });
  }

  localStorage.setItem("panier", JSON.stringify(panier));
}

