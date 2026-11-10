const stock=0
// const stock=5
const badge=document.getElementById("badge")
if(stock ===0){
   badge.textContent="Rupture"
    badge.classList.add("bg-red-200")
}else if(stock <=3){
      badge.textContent="Presque épuisé"
    badge.classList.add("bg-yellow-200")
}else {
        badge.textContent="Disponible"
    badge.classList.add("bg-green-200") 
}
const result= stock> 0?"desponible":"rupture"
badge.textContent=result

