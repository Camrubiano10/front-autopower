/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button, FormWindow } from "../../Components";
import like from "../../assets/icons/like.svg";
import star from "../../assets/icons/star.png";
import { peticionesBack } from "../../Helpers/fetch"

export default function PaymentConfirmation({ valoresForms }) {

  const saveTable=async()=>{
    
    let dataClient = {
      name: valoresForms.nombre,
      lastname: valoresForms.apellido,
      document_type: valoresForms.tipoDocumento,
      document_number: parseInt(valoresForms.numeroDoc),
      country: valoresForms.pais,
      phone: parseInt(valoresForms.telefono),
      email: valoresForms.email,
      movil_type: valoresForms.tipoVehiculo,
      license_plate: valoresForms.placa,
      service: valoresForms.service
    }
    
    const client = await peticionesBack('client/', 'POST', valoresForms)
    console.log(client)
  }

  return (
    <FormWindow >
      <div className="bg-darkblue-select py-6 flex justify-center rounded-t-2xl">
        <img className="md:w-50 w-25 p-4" src={like} />
      </div>
      {/* 1 */}

      <div className="p-6 flex flex-col items-center justify-center text-center">
        <img className="w-8 py-5" src={star} />
        <h2 className="text-3xl font-bold">Gracias!</h2>
        <h3
          id="nameCongratulation"
          className="text-lg font-bold py-2 uppercase"
        >
          {valoresForms.name}
        </h3>

        <p className="pb-4">
          En breve te llamaremos para completar el registro de tu auto, los
          detalles del contrato se enviaron a tu correo electrónico.
        </p>

        <Link to={"/"}>
          <Button
            type="submit"
            handleButtonClick={saveTable}
            text="Terminar"
            variant="primary"
            className="md:w-max"
          />
        </Link>
      </div>
    </FormWindow>
  );
}
