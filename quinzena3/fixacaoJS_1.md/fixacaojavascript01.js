//exercicio de fixação javascript 01
// 




function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
   const salario = 2000
   const comissao = 100 
   const porcentagem = 0.05
   let valorDaComissao = (qtdeCarrosVendidos * comissao) + (valorTotalVendas * porcentagem)
   
   const salarioMensal = salario + valorDaComissao
   
   return salarioMensal
   }


