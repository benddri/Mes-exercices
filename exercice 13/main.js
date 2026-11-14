const produits = [
    { nom: 'Clavier', prix: 250, stock: 4 },
    { nom: 'Souris', prix: 90, stock: 0 },
    { nom: 'Écran', prix: 1400, stock: 2 },
    { nom: 'Tapis', prix: 60, stock: 12 }
];
const list = document.querySelector("#liste")
const stock = document.querySelector("#stock")
const petitPrix = document.querySelector("#petitPrix")
const combo = document.querySelector("#combo")
const tous = document.querySelector("#tous")

//Écris une fonction afficher(tableau) qui vide #liste puis affiche un li par produit : nom – prix DH.
function afficher(tableau) {
    list.textContent = ""
    tableau.forEach(produit => {
        const li = document.createElement("li")
        li.textContent = `${produit.nom} - ${produit.prix}`
        list.appendChild(li)

    });


}
afficher([produits[0]])
afficher(produits);

//Au clic sur #stock, n'affiche que les produits dont le stock est supérieur à 0.Au clic sur #stock, n'affiche que les produits dont le stock est supérieur à 0.
stock.addEventListener("click", function () {
    const resulta = produits.filter(produit => produit.stock > 0)
    // console.log(resulta)
    afficher(resulta)
})
//Au clic sur #petitPrix, n'affiche que ceux à moins de 200 DH.
petitPrix.addEventListener("click",function(){
    const resultPetit=produits.filter(produit=>produit.prix<200)
    afficher(resultPetit)
})
//#combo combine les deux conditions
combo.addEventListener("click",function(){
    const resultCombo=produits.filter(produit=>produit.stock && produit.prix)
    afficher(resultCombo)
})
//#tous réaffiche tout
tous.addEventListener("click",function(){
    afficher(produits)
})
console.log(produits)
//console.log(produits) affiche length = 4, ce qui signifie que la méthode filter() n’a pas modifié le tableau original