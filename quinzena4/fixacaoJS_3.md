function calculaNota(ex, p1, p2) {
    

    let  mediaPonderadaTotal= ((ex * 1) + ( p1 *2 ) + (p2 *3)) /6
     let nota

    if  (mediaPonderadaTotal >= 9) {
      nota = " a"
    } else if ((7.5 <= mediaPonderadaTotal )  && ( mediaPonderadaTotal < 9)){
    nota =  "b"
    } else if  ((6  <= mediaPonderadaTotal) &&  (mediaPonderadaTotal< 7.5)){
       nota = "c"
    } else if (mediaPonderadaTotal < 6) {
      nota =  "d"
    }
    return nota
    }
