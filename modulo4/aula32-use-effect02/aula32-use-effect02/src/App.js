import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./PokeCard/PokeCard";

  export default function App() {
    const [pokeName, setPokeName] = useState("");
    const [pokeList, setPokeList] = useState([]);
  
  

  const EscolherPokemon= () => {
    axios

      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPokeList (res.data.result));
  

    useEffect(() => {
      EscolherPokemon();
    }, [pokeName]);

    const mudaPokeName = (e) => {
      setPokeName(e.target.value);
    };

   
    
    return (
      <div className="App">
       
        <select onChange={mudaPokeName}>
          <option value={""}>Nenhum</option>
         
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
  
      
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }
}


