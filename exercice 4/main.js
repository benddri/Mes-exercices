


function CalculerTTC(prixHT){
    const TTC = prixHT* 1.20
    return TTC
}
console.log(CalculerTTC(100));

//function fleche
const  calculerTTC=(prixHT)=>{
    const ttc=prixHT*1.20
    return ttc
}



function afficherPrix(selecteur,prixHT){
    const element=document.querySelector(selecteur)
   const prixTTC=calculerTTC(prixHT)
   element.textContent= `HT :${prixHT}DH .TTC: ${prixTTC}DH`
    

}

 afficherPrix("#p1",100)
  afficherPrix("#p2",45)
   afficherPrix("#p3",320)
