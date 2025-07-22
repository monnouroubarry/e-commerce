'use strict';
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  // Récupération du panier depuis localStorage
  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  // Fonction pour afficher le contenu du panier
  function actualiserPanier() {
    main.innerHTML = ""; // On vide le contenu actuel

    // Si le panier est vide
    if (panier.length === 0) {
      const message = document.createElement("p");
      message.textContent = "Votre panier est vide.";
      main.appendChild(message);
      return;
    }

    // Création d’un conteneur
    const divPanier = document.createElement("div");
    divPanier.classList.add("liste-produits");

    let total = 0;

    // Pour chaque produit, créer un bloc HTML avec image, nom, prix
    panier.forEach((produit, index) => {
      const produitDiv = document.createElement("div");
      produitDiv.classList.add("produit-panier");

      produitDiv.innerHTML = `
        <img src="${produit.image}" alt="${produit.nom}" style="width:100px;height:auto;">
        <h3>${produit.nom}</h3>
        <p>Prix : ${produit.prix} GNF</p>
        <button class="supprimer" data-index="${index}">Supprimer</button>
      `;

      divPanier.appendChild(produitDiv);
      total += produit.prix;
    });

    main.appendChild(divPanier);

    // Affichage du total
    const totalEl = document.createElement("p");
    totalEl.innerHTML = `<strong>Total : ${total} GNF</strong>`;
    main.appendChild(totalEl);

    // Bouton pour vider le panier
    const btnVider = document.createElement("button");
    btnVider.textContent = "Vider le panier";
    btnVider.className = "vider-panier";
    main.appendChild(btnVider);

    // Événement pour supprimer un seul produit
    document.querySelectorAll(".supprimer").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const indexASupprimer = e.target.dataset.index;
        panier.splice(indexASupprimer, 1);
        localStorage.setItem("panier", JSON.stringify(panier));
        actualiserPanier();
      });
    });

    // Événement pour vider tout le panier
    btnVider.addEventListener("click", () => {
      if (confirm("Voulez-vous vraiment vider le panier ?")) {
        panier = [];
        localStorage.removeItem("panier");
        actualiserPanier();
      }
    });
  }

  // Lancement au chargement
  actualiserPanier();
});
