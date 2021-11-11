function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let numerosDeRepeticao = 0
    for ( let numero of arrayDeNumeros){
        if ( numero === numeroEscolhido){
            numerosDeRepeticao ++    }
        }
        if (numerosDeRepeticao >  0) {
        return `O número ${numeroEscolhido} aparece ${numerosDeRepeticao}x`
        }
        else  {
        return "Número não encontrado"
        }
    }


