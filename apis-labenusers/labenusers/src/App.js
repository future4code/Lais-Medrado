
import './App.css';
import axios from "axios";
import React from "react";

class App extends React.Component {
 
  state = {
    nome: "",
    email: "",
    listaDeUsuarios: []
    
  }


  componentDidMount() {
    this.pegarUsuarios();
  }

// método get 
  pegarUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "lais-medrado-joy"
          }
        }
      )


      .then((res) => {
        this.setState({ listaDeUsuarios: res.data});
        console.log (res.data)
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  mudaNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  mudaEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  criarNovoUsuario = () => {
    const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
 
    const body = {
     name: this.state.nome,
     email: this.state.email
    
 }
 
 const headers = {
   headers: {
     Authorization: "lais-medrado-joy"
   }
  }

   axios
  .post(URL, body, headers)
  .then((res) => {
    console.log("sucesso, usuário criado");
    this.pegarUsuarios();
  })
  .catch((err) => {
    console.log(err.response.data);
   
  });
  


  }

  render() {
    const list = this.state.listaDeUsuarios.map((user) => {
      return <p key={user.id}> {user.name} </p>;
    });

    return (



      
      <div>

<div>
            <h1>Nome: {this.state.nome}</h1>
            <h2>Email: {this.state.email}</h2>
            
          </div>
        
        <div>
          <input
            placeholder={"nome"}
            value={this.state.nome}
            onChange={this.mudaNome}
          />
           <input
            placeholder={"email"}
            value={this.state.email}
            onChange={this.mudaEmail}
          />
          
          <button onClick={this.criarNovoUsuario} >Criar Usuario</button>
        </div>
       
        {list}
      </div>
      
    );
  }
}


export default App;
