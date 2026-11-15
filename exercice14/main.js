const choixs = document.querySelectorAll(".choix")
const apercu = document.querySelector("#apercu")
const info = document.querySelector("#info")
const dataset = choixs.forEach(choix => {
    console.log(choix.dataset)
})
//Au clic sur un bouton, lis sa couleur et son nom dans dataset
choixs.forEach(choix => {
    choix.addEventListener("click", function () {
        apercu.classList.remove(
            "bg-red-500",
            "bg-green-500",
            "bg-blue-500",
            "bg-yellow-500"
        );
        apercu.classList.add(choix.dataset.couleur);
        //Applique la couleur à #apercu et écris Couleur choisie : Rouge dans #info.

        info.textContent = `Couleur choisie :${choix.dataset.nom}`
        //Ajoute data-prix-unitaire="5" à un bouton et retrouve sa clé dans dataset.

        console.log(choix.dataset.prixUnitaire);

    })

})
