//Para fazermos login como administrador
import React from 'react'
import { useHistory } from "react-router-dom";



function LoginPage() {
const history = useHistory();

const goBack =() => {
  history.goBack()
}



  return (
    <div>

<form>
  <label>
   EMAIL:
    <input type="text" name="name" />
    SENHA:
    <input type="text" name="name" />
  </label>
    </form>
            <button onClick= {goBack}>VOLTAR</button>
            <button>ENTRAR </button>
          
        </div>
      );
    }

export default LoginPage;
