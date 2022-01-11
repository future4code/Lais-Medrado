import axios from "axios";
import React from "react";


class App extends React.Component {

  state = {

    playlists : [],
    valorInput : ""
  }


  
  inputNomeDaPlaylist = (event) => {
    this.setState({ playlists: event.target.value });
  };
 
  criarPlaylist = () => {
   
      const URL =
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
      const body = {
        name: this.state.playlists
      };
      const headers = {
        headers: {
          Authorization: "lais-medrado-joy"
        }
      };
    
      axios
        .post(URL, body, headers)
        .then((res) => {
          console.log("Playlist criada com sucesso");
          this.setState({playlists: ""})
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    };
    
   render(){

      const list = this.state.playlists.map((playlist) => {
      return <p key={playlist.id}> {playlist.name}</p>;
    });

    return (
   
  <div>
    <input
        placeholder = "Digite o nome da sua nova playlist"
        type = "text"
        value = {this.state.nome}
        onChange = {this.inputNomeDaPlaylist}

        
    />
    <button  onClick= {this.criarPlaylist}> Criar playlist </button>
    <div>{list}</div>
    
  </div>

    
    )}
}
  
export default App;
