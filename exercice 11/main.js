
const message = document.querySelector("#message");
const compteur = document.querySelector("#compteur");
const envoyer = document.querySelector("#envoyer");

message.addEventListener("change", function() {
    const texte = message.value.trim();

    compteur.textContent = texte.length + " / 50";

    if (texte.length > 50) {
        compteur.classList.add("text-red-600");
        
    } else {
        compteur.classList.remove("text-red-600");
        
    }

    envoyer.disabled = texte.length === 0 || texte.length > 50;
});
//  input : Se déclenche à chaque modification du contenu, en temps réel, pendant que l'utilisateur écrit, supprime 

//  change : Se déclenche lorsque la modification est validée, généralement lorsque l'utilisateur quitte le champ (textarea)