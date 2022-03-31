import React from "react";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";

function ChooseProfilePage () {
  const profileToChoose = {
      "id": "xUrxMGvODWZa4ZASbfwx",
      "age": 26,
      "name": "Carol Danvers",
      "photo": "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
      "bio": "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
    }
   

     useEffect (() => {
             axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-medrado-joy/person').then(response =>{
             console.log (response) })
     }, []);

    return (
  
      <div>
         <ProfileCard profile = {profileToChoose}/>
         <ChooseButtons/>


      </div>
    )
    
  }
  
  export default ChooseProfilePage;
  