import { useEffect, useState } from "react";
import axios from "axios";


// esse userequestdata recebe uma url
const useRequestData = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro, tente novamente");
      });
  }, [url]);

  return [data];
};

//esse hook retorna um array com os dados dentro [data]

export default useRequestData;

