const ajout = document.querySelector("#ajouter");
const note = document.querySelector("#notes");

let compteur = 0;

ajout.addEventListener("click", function() {
    compteur++;

    const nouvelleNote = document.createElement("li");

    console.log(nouvelleNote);

    nouvelleNote.textContent = `Note n° ${compteur}`;

    nouvelleNote.classList.add("p-2", "bg-yellow-100", "rounded");

    note.appendChild(nouvelleNote);

    console.log(nouvelleNote);
});