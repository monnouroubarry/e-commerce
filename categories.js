'use strict';

// Produits (exemple)
const produits = [
  { nom: "Culotte NBA 1", prix: 0, image: "assets/cullotnba1.png", categorie: "Culotte" },
  { nom: "Culotte NBA 2", prix: 0, image: "assets/cullotnba2.png", categorie: "Culotte"},
  { nom: "Veste NBA 1", prix: 0, image: "assets/jacketnba1.png", categorie: "Veste NBA" },
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
  { nom: "Kit Real Madrid", prix: 0, image: "assets/kitrealmadrid.jpeg", categorie: "Maillot football" },
  { nom: "Maillot Lakers 1", prix: 0, image: "assets/lakers1.png", categorie: "Kit Basketball" },
  { nom: "Maillot Lakers 2", prix: 0, image: "assets/lakers2.png", categorie: "Kit Basketball" },
  { nom: "Pantalon Femme 1", prix: 0, image: "assets/pantalonfemme1.png", categorie: "Pantalon femme" },
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

// Remplir le <select> avec les catégories
function remplirSelect() {
  const select = document.getElementById('select-categorie');
  const categories = [...new Set(produits.map(p => p.categorie))];

  categories.forEach(categorie => {
    const option = document.createElement('option');
    option.value = categorie;
    option.textContent = categorie;
    select.appendChild(option);
  });
}

// Afficher les produits d'une catégorie
function afficherProduits(categorie) {
  const conteneur = document.getElementById('liste-produits');
  conteneur.innerHTML = '';

  const produitsFiltres = produits.filter(p => p.categorie === categorie);

  if (produitsFiltres.length === 0) {
    conteneur.innerHTML = `<p>Aucun produit trouvé.</p>`;
    return;
  }

  produitsFiltres.forEach(produit => {
    const div = document.createElement('div');
    div.className = 'produit';

    div.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}" />
      <h3>${produit.nom}</h3>
      <p>${produit.prix.toLocaleString()} GNF</p>
      <button class="btn-ajouter">
        <img src="assets/panier.png" class="icone-panier" alt="panier" />
        Ajouter au panier
      </button>
    `;

    div.querySelector('.btn-ajouter').addEventListener('click', () => {
      ajouterAuPanier(produit);
    });

    conteneur.appendChild(div);
  });
}

// Ajouter au panier via localStorage
function ajouterAuPanier(produit) {
  const panier = JSON.parse(localStorage.getItem('panier')) || [];
  panier.push(produit);
  localStorage.setItem('panier', JSON.stringify(panier));
  alert(`${produit.nom} ajouté au panier`);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  remplirSelect();

  document.getElementById('select-categorie').addEventListener('change', (e) => {
    const categorieChoisie = e.target.value;
    if (categorieChoisie) {
      afficherProduits(categorieChoisie);
    } else {
      document.getElementById('liste-produits').innerHTML = '';
    }
  });
});
