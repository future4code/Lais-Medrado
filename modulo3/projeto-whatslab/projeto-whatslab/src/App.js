import React from 'react';
import styled from 'styled-components';



const Tela2 = styled.div `
display: flex;

flex-direction: column-reverse;
height: 100vh;
width:30em;
/* align-items: center; */
background-color: lightpink;
flex-wrap: nowrap;

`


const InputNome = styled.input `

width: 16em;
height: 3em;

`


const InputConteudo = styled.input `

width: 12.5em;
height: 3em;
`


const Button = styled.button`

width: 6.2em;
height: 3.45em;

`
const Negrito = styled.div`

font-weight: 900;

`

const Tela = styled.div `

display: flex; 


/* flex-direction:column;
align-items: center; */
justify-content: center;

height: 100vh;
width: 100%;
background-color: lightyellow;


`


const BalaoDeMensagem = styled.input`

background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else if (props.tipo === "outro") {
            return "#ffffff" // Branco
        }
    }};
`


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
    const novaMensagem = {
    nome: this.state.valorInputNome,
    conteudo: this.state.valorInputConteudo
    };
   
   
    // Copia array de pessoas e adiciona uma pessoa no final
    const maisNovasMensagens= [...this.state.mensagens, novaMensagem];
    this.setState({valorInputConteudo: ""});
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

    // Mesma lógica do Exemplo 5



render() {


    const listaDeComponentes = this.state.mensagens.map((mensagem) => {
      return (
        <p> 
          <Negrito>{mensagem.nome}</Negrito>  {mensagem.conteudo} 
        </p>
      );
    });

   
    return (

      
      <Tela>
        <Tela2>
        
        <div>
          <InputConteudo
       
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"nome"}
            
          />
       
          <InputNome
            value={this.state.valorInputConteudo}
            
            onChange={this.onChangeInputConteudo}
            placeholder={"conteudo"}
            />
            

          <Button
           onClick={this.adicionaMensagem}>Enviar</Button> 
        </div> 
        <div>{listaDeComponentes}</div>
        </Tela2>
      </Tela>
      
    )
}}
export default App;
