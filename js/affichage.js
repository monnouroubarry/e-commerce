// Fichier de démonstration
const produits = [
  { nom: "Culotte NBA 1", prix: 80000, image: "assets/cullotnba1.png", categorie: "Culotte" },
  { nom: "Culotte NBA 2", prix: 80000, image: "assets/cullotnba2.png", categorie: "Culotte"},
  { nom: "Veste NBA 1", prix: 200000, image: "assets/jacketnba1.png", categorie: "Veste NBA" },
  { nom: "Veste NBA 2", prix: 0, image: "assets/jacketnba2.png", categorie: "Veste NBA" },
  { nom: "Veste NBA 3", prix: 0, image: "assets/jacketnba3.png", categorie: "Veste NBA" },
  { nom: "Veste NBA 4", prix: 0, image: "assets/jacketnba4.png", categorie: "Veste NBA" },
  { nom: "Jupe Longue Noire", prix: 0, image: "assets/jupelong.png", categorie: "Jupe" },
  { nom: "Jupe Longue 2", prix: 0, image: "assets/jupelong2.png", categorie: "Jupe" },
  { nom: "Jupe Longue 3", prix: 0, image: "assets/jupelong3.png", categorie: "Jupe" },
  { nom: "Jupe Short 1", prix: 0, image: "assets/jupeshort1.png", categorie: "Jupe" },
  { nom: "Jupe Short 2", prix: 0, image: "assets/jupeshort2.png", categorie: "Jupe" },
  { nom: "Jupe Short 3", prix: 0, image: "assets/jupeshort3.png", categorie: "Jupe" },
  { nom: "Kit Argentine 1", prix: 0, image: "assets/kitargentine1.png", categorie: "Maillot football" },
  { nom: "Kit Argentine 2", prix: 0, image: "assets/kitargentine2.png", categorie: "Maillot football" },
  { nom: "Kit Barça", prix: 0, image: "assets/kitbarca.png", categorie: "Maillot football" },
  { nom: "Kit France", prix: 0, image: "assets/kitfrance.png", categorie: "Maillot football" },
  { nom: "Kit Paris", prix: 0, image: "assets/kitparis.png", categorie: "Maillot football" },
  { nom: "Maillot Lakers 1", prix: 0, image: "assets/lakers1.png", categorie: "Kit Basketball" },
  { nom: "Maillot Lakers 2", prix: 0, image: "assets/lakers2.png", categorie: "Kit Basketball" },
  { nom: "Pantalon Femme 2", prix: 0, image: "assets/pantalonfemme2.png", categorie: "Pantalon femme" },
  { nom: "Pantalon Femme 3", prix: 0, image: "assets/pantalonfemme3.png", categorie: "Pantalon femme" },
  { nom: "Pantalon Femme 4", prix: 0, image: "assets/pantalonfemme4.png", categorie: "Pantalon femme" },
  { nom: "Pantalon NBA 1", prix: 0, image: "assets/pantalonnba1.png", categorie: "Pantalon NBA" },
  { nom: "Pantalon NBA 2", prix: 0, image: "assets/pantalonnba2.png", categorie: "Pantalon NBA" },
  { nom: "Retro 1.0", prix: 0, image: "assets/retro1.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 1.1", prix: 0, image: "assets/retro1.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 4.0", prix: 0, image: "assets/retro4.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 4.1", prix: 0, image: "assets/retro4.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 4.2", prix: 0, image: "assets/retro4.2.png", categorie: "Chaussire Retro" },
  { nom: "Retro 5.0", prix: 0, image: "assets/retro5.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 5.1", prix: 0, image: "assets/retro5.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 5.2", prix: 0, image: "assets/retro5.2.png", categorie: "Chaussire Retro" },
  { nom: "Retro 6.0", prix: 0, image: "assets/retro6.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 6.1", prix: 0, image: "assets/retro6.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 9.0", prix: 0, image: "assets/retro9.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 9.1", prix: 0, image: "assets/retro9.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 11.0", prix: 0, image: "assets/retro11.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 11.1", prix: 0, image: "assets/retro11.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 11.2", prix: 0, image: "assets/retro11.2.png", categorie: "Chaussire Retro" },
  { nom: "Retro 13.0", prix: 0, image: "assets/retro13.0.png", categorie: "Chaussire Retro" },
  { nom: "Retro 13.1", prix: 0, image: "assets/retro13.1.png", categorie: "Chaussire Retro" },
  { nom: "Retro 14.0", prix: 0, image: "assets/retro14.0.png", categorie: "Chaussire Retro" },
  { nom: "Talon 1", prix: 0, image: "assets/talon1.png", categorie: "Chaussire Talon" },
  { nom: "Talon 2", prix: 0, image: "assets/talon2.png", categorie: "Chaussire Talon" },
  { nom: "Talon 3", prix: 0, image: "assets/talon3.png", categorie: "Chaussire Talon" },
  { nom: "Talon 4", prix: 0, image: "assets/talon4.png", categorie: "Chaussire Talon" },
  { nom: "Talon 5", prix: 0, image: "assets/talon5.png", categorie: "Chaussire Talon" },
];

const conteneur = document.getElementById("liste-produits");

produits.forEach(produit => {
  const div = document.createElement("div");
  div.className = "carte-produit";
  div.innerHTML = `
    <img src="${produit.image}" alt="${produit.nom}">
    <h3>${produit.nom}</h3>
    <p>Prix : ${produit.prix}€</p>
    <button class="ajouter-panier" onclick='ajouterAuPanier(${JSON.stringify(produit)})'>Ajouter au panier</button>
  `;
  conteneur.appendChild(div);
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


function ajouterAuPanier(produit) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push(produit);
  localStorage.setItem("panier", JSON.stringify(panier));
  alert("Produit ajouté au panier !");
}

