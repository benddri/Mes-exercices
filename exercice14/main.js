const choixs=document.querySelectorAll(".choix")
const apercu=document.querySelector("#apercu")
const info=document.querySelector("#info")
const dataset=choixs.forEach(choix=>{
    console.log (choix.dataset)
})
//Au clic sur un bouton, lis sa couleur et son nom dans dataset
choixs.forEach(choix=>{
    choix.addEventListener("click",function(){
        choix.textContent=`${choix.dataset.couleur}`
        
    })
})
