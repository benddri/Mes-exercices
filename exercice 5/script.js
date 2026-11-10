let compteur =0 
const valeur=document.querySelector("#valeur")
const Moins =document.querySelector("#moins")
const Plus =document.querySelector("#plus")
const Reset =document.querySelector("#reset")
console.log(valeur);
console.log(Moins);
console.log(Plus);
console.log(Reset);
function Afficher(){
    valeur.textContent=compteur
    
}
Plus.addEventListener("click",function(){
    compteur ++
    Afficher()
})
Moins.addEventListener("click",function(){
   if (compteur >0){
    compteur --
   }
    Afficher()
})
Reset.addEventListener("click",function(){
   compteur =0
    Afficher()
})
// la différence entre afficher et afficher() est :La première attend un clic pour exécuter la fonction, tandis que la deuxième appelle la fonction directement
