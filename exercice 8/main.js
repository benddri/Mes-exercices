const notes = document.querySelectorAll(".note")
const notes2 = document.getElementsByClassName("note");
// notes2.forEach(function(note) {
//     console.log(note);
// });
console.log(notes);
const buton = document.querySelector("#surligner")
buton.addEventListener("click", function () {
    notes.forEach(function (note) {
        note.classList.toggle("bg-yellow-200")

    })
})
const themes = document.getElementsByName("theme");
console.log(themes);
for (let i = 0; i < themes.length; i++) {
    if (themes[i].checked)
        console.log(themes[i].value)
}
const nouvelleNote = document.createElement("p");
nouvelleNote.classList.add("note");
nouvelleNote.textContent = "Note D";
document.body.appendChild(nouvelleNote);
console.log(notes.length);
console.log(notes2.length);
//L'apprenant explique pourquoi une seule des deux sélections a grandi.
// querySelectorAll() retourne une NodeList statique, qui ne se met pas à jour

// getElementsByClassName() retourne une HTMLCollection dynamique, qui se met à jour automatiquement
