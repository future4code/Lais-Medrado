import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
 state = {

 pessoas : [

{
  nomeUsuario:'paulinha',
  fotoUsuario :'https://picsum.photos/50/50',
  fotoPost : 'https://picsum.photos/200/155'
},
{
  nomeUsuario:'Laís',
  fotoUsuario:'https://picsum.photos/50/30',
  fotoPost: 'https://picsum.photos/200/156'
},
{
nomeUsuario:'Helena',
fotoUsuario:'https://picsum.photos/50/40',
fotoPost:'https://picsum.photos/200/157'
}
]
}

render( ) {
   const listaDePessoas = this.state.pessoas.map((pessoa) => {

        return (

          <div>
            <div>{listaDePessoas}</div>
          </div>

     
      
               )
        }
        })
          }





export default App;
