import { Link } from "react-router-dom";
import { Button, FormWindow } from "../../Components";
import like from "../../assets/icons/like.svg";
import star from "../../assets/icons/star.png";
import { peticionesBack } from "../../Helpers/fetch"

export default function PaymentConfirmation({ valoresForms }) {

  const saveTable=async()=>{
    
    const client = await peticionesBack('client/', 'POST', valoresForms)
    console.log(client)
  };

  return (
    <FormWindow >
      <div className="mt-6 py-8 flex justify-center rounded-2xl 
      group
      bg-gradient-to-r from-indigo-600 to-cyan-400
      ">
        <img className="md:w-50 w-25 p-4 cursor-pointer " src={like} />
      </div>
      {/* 1 */}

      <div className="flex flex-col items-center justify-center text-center  ">
        <img className="w-8 py-5 hover:animate-spin cursor-pointer  
        group-hover:block animate-spin cursor-pointer
        " src={star} />
        <h2 className="text-3xl font-bold 
        bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent
        ">¡Felicidades!</h2>
        <h3
          id="nameCongratulation"
          className="text-lg font-bold py-2 uppercase tracking-widest " >
          {valoresForms.name} {valoresForms.lastname}
        </h3>

        <p className=" italic border-2 border-white">
          Ahora formas parte de la familia <span className="text-blue-800 font-bold not-italic"> Autopower 💡</span>.
        </p>

        <div className="w-full ">
        <Link to={"/"}>
          
          <Button
            type="submit"
            handleButtonClick={saveTable}
            text="Aceptar"
            variant="primary"
            className=" mt-2 " 
          />
        </Link>
      </div>
      </div>
    </FormWindow>
  );
} 
