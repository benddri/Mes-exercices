const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 },
  { id: 4, nom: 'Casque', prix: 600, stock: 0 }
];
const butons = document.querySelectorAll(".q")
const reponse = document.querySelector("#reponse")

//Chaque bouton affiche sa réponse dans #reponse
butons.forEach(buton => {
  buton.addEventListener("click", function () {
    const question = buton.dataset.question
    let result
    if (question === "1") {
      result = produits.find(produit =>
        produit.id === 3)

      reponse.textContent += result.nom + ","
    }
    if (question === "2") {
      result = produits.filter(produit => {
        return produit.stock === 0
      })
      reponse.textContent += result.map(produit => produit.nom).join(", ") + ","
    }
    if (question === "3") {
      result = produits.some(produit => {
        return produit.stock === 0
      })
      reponse.textContent += result ? "oui" + "," : "non" + ","

    }
    if (question === "4") {
      result = produits.every(produit => {
        return produit.prix <= 2000
      })
      reponse.textContent += result ? "oui," : "non"

    }
    if (question === "5") {
      result = produits.find(produit => produit.id === 10);

      if (result) {
        reponse.textContent = result.nom;
      } else {
        reponse.textContent = "Aucun produit trouvé.";
      }
    }


  })



})
// find() : retourne le premier élément trouvé (Object) ou undefined.

// filter() : retourne un nouveau tableau (Array) contenant tous les éléments qui vérifient la condition.

// some() : retourne un booléen (true ou false).

// every() : retourne un booléen (true ou false)