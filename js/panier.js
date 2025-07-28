// Fichier de démonstration
function afficherPanier() {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const conteneur = document.getElementById("contenu-panier");
  const total = document.getElementById("total");
  conteneur.innerHTML = "";
  let somme = 0;

  panier.forEach((produit, index) => {
    const div = document.createElement("div");
    div.className = "produit-panier";
    div.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}">
      <h3>${produit.nom}</h3>
      <p>Prix : ${produit.prix}€</p>
      <button id="btn-retirer-panier" onclick="supprimerProduit(${index})">Supprimer</button>
    `;
    conteneur.appendChild(div);
    somme += produit.prix;
  });

  total.textContent = `Total : ${somme}€`;
}

function supprimerProduit(index) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.splice(index, 1);
  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
}

function viderPanier() {
  localStorage.removeItem("panier");
  afficherPanier();
}

window.onload = afficherPanier;
