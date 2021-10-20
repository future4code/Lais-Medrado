function calculaNota(ex, p1, p2) {

let pesoEx = 1
let pesoProva1 = 2 
let pesoProva2 = 39pe
    let  mediaPonderadaTotal= ((ex * pesoEx) + ( p1 * pesoProva1 ) + (p2 * pesoProva2)) / (peso1 + peso2 + peso3)
    
    if  (mediaPonderadaTotal >= 9) {
      nota =  "A"
    } else if (7.5 <= mediaPonderadaTotal   &&  mediaPonderadaTotal < 9){
       nota = "B"
    } else if  (6  <= mediaPonderadaTotal &&  mediaPonderadaTotal<  7.5){
       nota = "C"
    } else if (mediaPonderadaTotal  6) {
       nota =  "D"
    }
    
    return nota
    }


__________________________________________
____________________________________________

    function calculaNota(ex, p1, p2) {
    

    let  mediaPonderadaTotal= ((ex * 1) + ( p1 *2 ) + (p2 *3)) /6
     let nota

    if  (mediaPonderadaTotal >= 9) {
      nota = " a"
    } else if ((7.5 <= mediaPonderadaTotal )  && ( mediaPonderadaTotal < 9)){
       nota =  "b"
    } else if  ((6  <= mediaPonderadaTotal) &&  ((mediaPonderadaTotal< 7.5)){
       nota = "c"
    } else if (mediaPonderadaTotal < 6) {
      nota =  "d"
    }
    return nota
    }
