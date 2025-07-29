function afficherPanier() {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const conteneur = document.getElementById("contenu-panier");
  const total = document.getElementById("total");
  const totalQuantite = document.getElementById("quantite-totale");
  conteneur.innerHTML = "";

  if (panier.length === 0) {
  conteneur.innerHTML = "<p>Votre panier est vide.</p>";
  total.textContent = "";
  totalQuantite.textContent = "";
  return;
}

  let somme = 0;
  let quantiteTotale = 0;

  panier.forEach((produit, index) => {
    const quantite = produit.quantite || 1;
    const sousTotal = produit.prix * quantite;
    somme += sousTotal;
    quantiteTotale += quantite;

    const div = document.createElement("div");
    div.className = "produit-panier";

    div.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}">
      <h3>${produit.nom}</h3>
      <p>Prix unitaire : $ ${produit.prix}</p>
      <div class="controle-quantite">
        <button onclick="changerQuantite(${index}, -1)">–</button>
        <span>${quantite}</span>
        <button onclick="changerQuantite(${index}, 1)">+</button>
      </div>
      <p>Sous-total : $ ${sousTotal}</p>
      <button id="btn-retirer-panier" onclick="supprimerProduit(${index})">Supprimer</button>
    `;

    conteneur.appendChild(div);
  });

  total.textContent = `Total : $ ${somme}`;
  totalQuantite.textContent = `Quantité totale : ${quantiteTotale}`;
}

function changerQuantite(index, variation) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const produit = panier[index];

  produit.quantite = (produit.quantite || 1) + variation;
  if (produit.quantite < 1) produit.quantite = 1;

  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
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
