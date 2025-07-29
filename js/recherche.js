'use strict';
// Exemple de liste de produits utilisée pour la recherche (à adapter si tu charges ce tableau ailleurs)
const produits = [
  { nom: "Culotte NBA BULLS", prix: 10, image: "assets/cullotnba1.png", categorie: "Culotte" },
  { nom: "Culotte NBA Viollet", prix: 10, image: "assets/cullotnba2.png", categorie: "Culotte"},
  { nom: "Pull NBA-NIKE Bleu", prix: 25, image: "assets/jacketnba1.png", categorie: "Pull" },
  { nom: "Pull NBA Gris ", prix: 30, image: "assets/jacketnba2.png", categorie: "Pull" },
  { nom: "Pull NBA Bleu-Rouge", prix: 27, image: "assets/jacketnba3.png", categorie: "Pull" },
  { nom: "Pull NBA-NIKE", prix: 25, image: "assets/jacketnba4.png", categorie: "Pull" },
  { nom: "Jupe Longue Noire", prix: 20, image: "assets/jupelong.png", categorie: "Jupe" },
  { nom: "Jupe Longue Grise-Noire", prix: 25, image: "assets/jupelong2.png", categorie: "Jupe" },
  { nom: "Jupe Longue Rouge bordeau", prix: 12, image: "assets/jupelong3.png", categorie: "Jupe" },
  { nom: "Jupe Courte Bleue-marrine", prix: 10, image: "assets/jupeshort1.png", categorie: "Jupe" },
  { nom: "Jupe Courte Noire", prix: 15, image: "assets/jupeshort2.png", categorie: "Jupe" },
  { nom: "Jupe Courte Orange", prix: 8, image: "assets/jupeshort3.png", categorie: "Jupe" },
  { nom: "Maillot Argentine", prix: 15, image: "assets/kitargentine1.png", categorie: "Maillot" },
  { nom: "Maillot Argentine", prix: 15, image: "assets/kitargentine2.png", categorie: "Maillot" },
  { nom: "Maillot Barça Orange", prix: 18, image: "assets/kitbarca.png", categorie: "Maillot" },
  { nom: "Maillot France Domicil", prix: 15, image: "assets/kitfrance.png", categorie: "Maillot" },
  { nom: "Maillot Paris", prix: 15, image: "assets/kitparis.png", categorie: "Maillot" },
  { nom: "Jordan Lakers Jaune", prix: 20, image: "assets/lakers1.png", categorie: "Maillot" },
  { nom: "Jordan Lakers Bleu", prix: 20, image: "assets/lakers2.png", categorie: "Maillot" },
  { nom: "Pantalon Femme Noir", prix: 17, image: "assets/pantalonfemme2.png", categorie: "Pantalon femme" },
  { nom: "Pantalon Femme Bleu", prix: 20, image: "assets/pantalonfemme3.png", categorie: "Pantalon femme" },
  { nom: "Pantalon Femme 4", prix: 20, image: "assets/pantalonfemme4.png", categorie: "Pantalon femme" },
  { nom: "Pantalon NBA Gris", prix: 25, image: "assets/pantalonnba1.png", categorie: "Pantalon homme" },
  { nom: "Pantalon NBA BULLS", prix: 25, image: "assets/pantalonnba2.png", categorie: "Pantalon homme" },
  { nom: "Retro 1 Vert-Blanc", prix: 27, image: "assets/retro1.0.png", categorie: "Retro" },
  { nom: "Retro 1 Orange-noir", prix: 30, image: "assets/retro1.1.png", categorie: "Retro" },
  { nom: "Retro 4 Blanc-Rouge-Noir", prix: 30, image: "assets/retro4.0.png", categorie: "Retro" },
  { nom: "Retro 4 Blanc-Noir", prix: 28, image: "assets/retro4.1.png", categorie: "Retro" },
  { nom: "Retro 4 Noir", prix: 30, image: "assets/retro4.2.png", categorie: "Retro" },
  { nom: "Retro 5 Blanc Noir", prix: 28, image: "assets/retro5.0.png", categorie: "Retro" },
  { nom: "Retro 5 Blanc", prix: 30, image: "assets/retro5.1.png", categorie: "Retro" },
  { nom: "Retro 5 Rouge", prix: 30, image: "assets/retro5.2.png", categorie: "Retro" },
  { nom: "Retro 6 Noir", prix: 32, image: "assets/retro6.0.png", categorie: "Retro" },
  { nom: "Retro 6 Blanc Rouge", prix: 30, image: "assets/retro6.1.png", categorie: "Retro" },
  { nom: "Retro 9 Bleu-Blanc", prix: 34, image: "assets/retro9.0.png", categorie: "Retro" },
  { nom: "Retro 9 Bleu-Jaune", prix: 32, image: "assets/retro9.1.png", categorie: "Retro" },
  { nom: "Retro 11 Noir-Rouge", prix: 35, image: "assets/retro11.0.png", categorie: "Retro" },
  { nom: "Retro 11 Métallique", prix: 35, image: "assets/retro11.1.png", categorie: "Retro" },
  { nom: "Retro 13 Noir-Blanc", prix: 35, image: "assets/retro13.0.png", categorie: "Retro" },
  { nom: "Retro 13 Orange-Noir", prix: 35, image: "assets/retro13.1.png", categorie: "Retro" },
  { nom: "Retro 14 Gris", prix: 35, image: "assets/retro14.0.png", categorie: "Retro" },
  { nom: "Talon Rouge-Noir", prix: 40, image: "assets/talon1.png", categorie: "Talon" },
  { nom: "Talon Sandale Blanc", prix: 38, image: "assets/talon2.png", categorie: "Talon" },
  { nom: "Talon Sandale Noir", prix: 37, image: "assets/talon3.png", categorie: "Talon" },
  { nom: "Talon Noir", prix: 39, image: "assets/talon4.png", categorie: "Talon" },
  { nom: "Talon Métallique", prix: 42, image: "assets/talon5.png", categorie: "Talon" },
];

const conteneurAccueil = document.getElementById("produits-accueil");
const champRecherche = document.getElementById("recherche-accueil");

// ✅ Masquer au départ
conteneurAccueil.innerHTML = "";

function afficherProduitsAccueil(produitsAffiches) {
  conteneurAccueil.innerHTML = "";
  if (produitsAffiches.length === 0) {
    conteneurAccueil.innerHTML = "<p>Aucun produit trouvé.</p>";
    return;
  }

  produitsAffiches.forEach((produit) => {
    const carte = document.createElement("div");
    carte.className = "carte-produit";
    carte.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}">
      <h3>${produit.nom}</h3>
      <p id="prix-recherche-accueil"><del> </del>  $ ${produit.prix}</p>
      <button class="ajouter-panier" data-produit='${JSON.stringify(produit)}'>Ajouter au panier</button>
    `;
    conteneurAccueil.appendChild(carte);
  });

  ajouterAuPanier();
}

function ajouterAuPanier() {
  const boutons = document.querySelectorAll(".ajouter-panier");
  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const produit = JSON.parse(btn.dataset.produit);
      let panier = JSON.parse(localStorage.getItem("panier")) || [];
      const index = panier.findIndex((p) => p.nom === produit.nom);
      if (index !== -1) {
        panier[index].quantite += 1;
      } else {
        produit.quantite = 1;
        panier.push(produit);
      }
      localStorage.setItem("panier", JSON.stringify(panier));
      alert('Produit ajouter dans le panier !');
    });
  });
}

// ✅ Recherche uniquement quand y'a du texte
champRecherche.addEventListener("input", function () {
  const recherche = this.value.trim().toLowerCase();

  if (recherche === "") {
    conteneurAccueil.innerHTML = ""; // vider si champ vide
    return;
  }

  const resultats = produits.filter((produit) =>
    produit.nom.toLowerCase().includes(recherche)
  );
  afficherProduitsAccueil(resultats);
});


