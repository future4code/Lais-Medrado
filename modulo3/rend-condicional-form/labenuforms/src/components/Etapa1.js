
import React from 'react';

class Etapa1 extends React.Component {


    state = {
        dados1 : [ 
        { 
            nome:  "Luíz",
            idade: "70",
            email: "luizcarlos@gmail.com",
            escolaridade:"ensino técnico "
            
        }
    ],
            valorInputNome:  "",
            valorInputIdade: "",
            valorInputEmail: "",
            valorInputEscolaridade:""


};

    adicionaDados = () => {
        const novosDados = {
      
                 nome: this.state.valorInputNome,
                 idade: this.state.valorInputIdade,
                 email: this.state.valorInputEmail,
                 escolaridade: this.state.valorInputEscolaridade
    }
   


    const novosDadosAdcionados = [ ...this.state.dados1, novosDados];
    this.setState({dados1 : novosDadosAdcionados}),
    
 

    onChangeInputNome = (event) => {
        this.setState({ valorInputNome: event.target.value });
      };
    
    onChangeInputIdade = (event) => {
        this.setState({ valorInputIdade: event.target.value });
      };

    onChangeInputEmail = (event) => {
        this.setState({ valorInputEmail: event.target.value });
      };
    
    onChangeInputEscolaridade = (event) => {
        this.setState({ valorInputEscolaridade: event.target.value });
      };


    
    render() {
        const infoCartao = () => {
            if (this.state.devoMostrar) {
              return (
                <div>
                  <h1>Nome: {this.state.nome}</h1>
                  <h2>Número: {this.state.numeroCartao}</h2>
                  <h2>CVV: {this.state.cvv}</h2>
                </div>
              );
            }
          };
      

            
            return (


                    <div>

                    <p> 1- Qual o seu nome?</p>
                    <input
                    onChange={this.onChangeInputNome}
                    value={this.state.valorInputNome}
                    placeholder="Nome"
                    />

                    <p> 2- Qual sua idade?</p>
                    <input
                    onChange={this.onChangeInputIdade}
                    value={this.state.valorInputIdade}
                    placeholder="Idade"

                    />

                    <p> 3- Qual seu email?</p>
                    <input
                    onChange={this.onChangeInputEmail}
                    value={this.state.valorInputEmail}
                    placeholder="Email"

                    />

                    <p> 4- Qual sua escolaridade?</p>
                    <input
                    onChange={this.onChangeInputEscolaridade}
                    value={this.state.valorInputEscolaridade}
                    placeholder="Escolaridade"

                    />

                    <button onClick={this.adicionaDados}>Adicionar</button>
                    {listaDeDadosDosComponentes}
                </div>
                );
            }
        )}
            }}
    
        
export default Etapa1


