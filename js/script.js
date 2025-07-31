'use strict';
function dombutton(idbutton){
    const btn = document.getElementById(idbutton);
    btn.addEventListener('mouseover', () =>{
        btn.style.color = "#00bfff";
        btn.style.backgroundColor = "transparent";
        btn.style.border = "2px solid #00bfff";
        btn.style.borderRadius = "8px";
        btn.style.padding = "10px 15px";
        btn.style.fontWeight = "bold";
    });
    btn.addEventListener('mouseout', () =>{
        btn.style.backgroundColor = "transparent";
        btn.style.color ="#00bfff";
        btn.style.border = "none";
        btn.style.padding = "10px 15px";
        btn.style.fontWeight = "bold";
    });
};
function ouvrirpage(idbutton, nompage) {
    const btn = document.getElementById(idbutton);
    btn.addEventListener('click', () => {
        window.location.href = nompage;
    })
}
// Effet DOM sur l'icone du panier
const panier = document.getElementById('icone-panier');
panier.addEventListener('mouseover', ()=>{
    panier.style.height = "40px";
    panier.style.width = "45px";
});
panier.addEventListener('mouseout', ()=>{
    panier.style.height = "40px";
    panier.style.width = "40px";
})

//La gestion des effets de survole de la souris sur les boutons
dombutton('Accueil');
dombutton('Produits');
dombutton('Categories');

//La gestion des ouvertures des pages
ouvrirpage('Accueil','index.html');
ouvrirpage('Categories','categories.html');
ouvrirpage('Produits','produits.html');
ouvrirpage('Panier','panier.html');

// Gestion de scropy dans le footer
const annee = new Date().getFullYear();
const texte = `&copy; ${annee} Nour Boutique. Tous droits réservés.`;
document.getElementById("copyright").innerHTML = texte;

