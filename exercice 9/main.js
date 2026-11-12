const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];
console.log(produits[0].nom)
console.log(produits[1].prix)
// function creerFiche(produit){
//     const article=document.createElement("article")
//     article.classList.add("border","font-bold","p-4","rounded-lg")
//     const nom=document.createElement("h2")
//     const prix=document.createElement("p")
//     nom.textContent=produit.nom
//     article.appendChild(nom)
//     prix.textContent=`${produit.prix}DH`
//     article.appendChild(prix)
//     if (produit.stock === 0) {
//     const rupture = document.createElement("p");
//     rupture.textContent = "Rupture";
//     rupture.classList.add("text-red-500");
//     article.appendChild(rupture);
// }
//     return article
// }
//================par déstructuration===============
function creerFiche({ nom, prix, stock }) {
        const article=document.createElement("article")
    article.classList.add("border","font-bold","p-4","rounded-lg")
const titre = document.createElement("h2");
titre.textContent = nom;
article.appendChild(titre);
const prixElement = document.createElement("p");
prixElement.textContent = `${prix} DH`;
article.appendChild(prixElement);
 if (stock === 0) {
    const rupture = document.createElement("p");
    rupture.textContent = "Rupture";
    rupture.classList.add("text-red-500");
    article.appendChild(rupture);
}
    return article




 }
const catalogue=document.querySelector("#catalogue")
produits.forEach(function(produit){
    catalogue.appendChild(creerFiche(produit))

})
