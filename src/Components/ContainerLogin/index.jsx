/* eslint-disable react/prop-types */
import TextField from "../TextField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { read } from "../../Helpers/fetch"
import { useState, useEffect } from "react";

export default function ContainerLogin() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Profile");
  };

  // const dataLicense = await peticionesBack('client/', 'POST', valoresForms)
  //   console.log(client)
  // };

  const [clients, setClients] = useState([]);

  const getClients = async () =>{
    const response = await read();
    setClients(response);
  };

  useEffect(()=> {
    getClients();
  }, []);


  // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const response = await peticionesBack(inputValue, 'GET', {});
    //   const data = await response.json();
    //   console.log(data);
    //   }
    

  return (
    <div className="flex justify-center mt-24 ">
<div className="w-[40vh] md:w-[60vh] px-8 rounded-3xl shadow-xl border-2 border-cyan-100  py-3 md:py-0
bg-white
">
        <h2 className="text-2xl font-bold text-center my-2 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">
        Consulta Autopower
      </h2>

      <div className="py-2">
        <TextField
          type="text"
          name="placa"
          placeholder="Placa"
          className="w-full text-xl tracking-widest uppercase "
          required
          maxLength={6}
          // onChange={handleSubmit}
        />
      </div>

        {clients.length > 0 && clients.map((client) => <Client key={client.license_plate} text={client.license_plate} />)}

      <div className="py-2">
        <div className="text-center pt-6">
          <Button
            type="submit"
            text="Buscar"
            variant="primary"
            disabled={false}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
</div>
</div>
  );
}

  // return (
  //     <form onSubmit={handleSubmit}>
  //         <input 
  //             type="text" 
  //             value={inputValue} 
  //             onChange={(e) => setInputValue(e.target.value)} 
  //         />
  //         <button type="submit">Enviar</button>
  //     </form>
  // );
