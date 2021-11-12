import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto1 from './imagem/lmedrado.jpg';
import foto2 from './imagem/logomuseu.png' ;
import foto3 from './imagem/eu.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto3}
          nome="Lais" 
          descricao="Oi, eu sou a Lais. Sou estudante do curso noturno web fullstack da Labenu. Adoro me divertir na sexta-feira, mas faço isso somente depois do standup da Labenu ."
        />
        

     

        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {foto2}
          nome="Museu de Ciência e Tecnologia da Bahia" 
          descricao="Propondo novos usos e equipamentos para a revitalização do Museu de Ciência e Tecnologia do Estado da Bahia" 
        />
        
        <CardGrande 
          imagem= {foto1}
          nome="Studio Lmedrado" 
          descricao="Desenvolvendo projetos arquitetônicos em BIM (Building Information Modeling)" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
