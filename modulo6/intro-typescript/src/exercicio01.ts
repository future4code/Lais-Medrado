
function checaTriangulo ( a: string, b: string, c: string, nome: string) {
    if (a !== b && b !== c) {
        return  "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
    }
    checaTriangulo()










// function buscarCarrosPorMarca(frota: { marca: string }[], marca: string){
//     if(!marca) return frota;

//     // return frota.filter(carro => carro.marca === marca);
// }
// // const filter: (args: any) => boolean) = () => {}

// const resultado = buscarCarrosPorMarca([], "");