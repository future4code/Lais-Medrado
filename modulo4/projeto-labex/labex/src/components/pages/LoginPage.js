//Para fazermos login como administrador
import React, {useState} from "react";
// import { useHistory } from "react-router-dom";
import axios from 'axios';


 export const LoginPage = () => {
   const [email, setEmail] = useState (undefined)
   const [password, setPassword] = useState (undefined)

  const onChangeEmail = (e) => {
     setEmail(e.target.value)  }

  const onChangePassword = (e) => {
      setPassword(e.target.value)  }

  const onSubmitLogin =() => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-medrado-joy/login',
    {
    email: email,
    password: password
    }) .then((response) => {
         console.log(response.data)
    }) .catch((response) => {
     console.log(response.error)
    })

// const history = useHistory();

// const goBack =() => {
//   history.goBack()
// }



  return (
    <div>


  <h1>Login Page </h1>
   EMAIL:
    <input value={email } onChange={onChangeEmail} />
    SENHA:
    <input value={password} onChange ={onChangePassword} />
     <button onClick = {onSubmitLogin}> </button> 
   
            {/* <button onClick= {goBack}>VOLTAR</button> */}
            <button>ENTRAR </button>
          
        </div>
  )
    
  }
}
