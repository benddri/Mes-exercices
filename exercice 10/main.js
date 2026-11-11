const message = '<img src=x onerror="alert(1)">';
const buton=document.querySelector("#go")
const zoneText=document.querySelector("#zoneTexte");
const zoneHtml = document.querySelector("#zoneHtml");
buton.addEventListener("click",function(){
zoneText.textContent=message
zoneHtml.innerHTML=message // dans etape 4 :innerHTML peut exécuter du code JavaScript malveillant, ce qui crée un risque de sécurité appelé XSS
//textContent affiche le contenu comme un texte , tandis que innerHTML interprète les balises HTML et les affiche comme des éléments
zoneHtml.innerHTML += "Fin";
console.log(zoneHtml.innerHTML);

})
// textContent : à utiliser pour afficher du texte sans risque d'interprétation HTML.
// innerHTML : à utiliser pour insérer du HTML de confiance et sécurisé.
