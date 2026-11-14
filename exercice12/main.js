const produits = [
  { nom: 'Clavier', prixHT: 250 },
  { nom: 'Souris', prixHT: 90 },
  { nom: 'Écran', prixHT: 1400 }
];
//Avec map, crée un tableau noms qui contient seulement les noms. Affiche-le dans la console
const noms =produits.map(produit=>produit.nom)
console.log(noms)
//Avec map, crée un tableau produitsTTC : chaque objet garde ses propriétés et gagne prixTTC (TVA 20 %).
const produitsTTC=produits.map(function(produit){
  return{
    ...produit,
    prixTTC: produit.prixHT * 1.20

  };
})
console.log(produitsTTC);
//Vérifie dans la console que produits n'a pas changé.
console.log(produits);
//Avec map, crée un tableau textes du type Clavier : 300 DH TTC.
const textes=produitsTTC.map(produit=>{
  return `${produit.nom}: ${produit.prixTTC} DH TTC`
})

console.log(textes);
//Affiche chaque texte dans un li de #etiquettes.
const etiquettes=document.querySelector("#etiquettes")
textes.forEach(texte=>{

  const li=document.createElement("li")
  li.textContent=texte
  etiquettes.appendChild(li)
})
//Refais l'étape 1 avec forEach en stockant le résultat dans une variable : note ce qu'elle contient
const nomsForEch=[]
produits.forEach(produit=>{

 nomsForEch.push(produit.nom)
})
console.log(nomsForEch)
//En choisir map plutôt que forEach car map retourne un nouveau tableau, forEach exécute une action
