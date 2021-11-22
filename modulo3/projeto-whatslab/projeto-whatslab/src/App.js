import React from 'react';


import logo from './logo.svg';

import styled from 'styled-components'






class App extends React.Component {
  state = {
    // Array inicializado da mesma forma que no Exemplo 5
    mensagens: [
      {
        nome: "",
        conteudo: ""
      }
    ],
    // Agora precisamos de duas variáveis no estado, guardando
    // os valores dos dois inputs que temos na tela
    valorInputNome: "",
    valorInputConteudo: ""
  };

  adicionaMensagem = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novaMensagem = {
      // Puxamos da variavel de estado "valorInputPessoa" o nome dela
      nome: this.state.valorInputNome,
      // Puxamos da variavel de estado "valorInputEmail" o email dela
      conteudo: this.state.valorInputConteudo
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const maisNovasMensagens= [...this.state.mensagens, novaMensagem];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ mensagens: maisNovasMensagens });
  };

  onChangeInputNome = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputConteudo = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de email

    // Define o estado "valorInputEmail" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputConteudo: event.target.value });
  };

  render() {
    // Mesma lógica do Exemplo 5
    const listaDeComponentes = this.state.mensagens.map((mensagem) => {
      return (
        <p onfocus="this.value='';"> 
          {mensagem.nome}  {mensagem.conteudo} 
        </p>
      );
    });

    return (
      <div>
        
        <div>
          <input
          
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
            
          />
          <input
            
            value={this.state.valorInputConteudo}
            
            onChange={this.onChangeInputConteudo}
            placeholder={"Conteúdo"}
            
          />
          <button onClick={this.adicionaMensagem}>Enviar</button>
        </div> 
        <div>{listaDeComponentes}</div>
      </div>
      
  )
  }
}

export default App;
