import { useState } from "react";
import { ContainerPayment, ContainerForm, ContainerBill, PaymentConfirmation, Status } from "../../Components";


export default function BuyService() {
  
const [valoresForms, setValoresForms] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "0",
    numeroDoc: "",
    pais: "0",
    // direccion: "",
    telefono: "",
    email: "",
    tipoVehiculo: "0",

  });

  return (
      <main className="h-full pt-16 pb-8 bg-image-bene ">
        <Status 
          valoresForms={valoresForms}
          setValoresForms={setValoresForms}
          Step1={ContainerForm}
          Step2={ContainerBill} 
          Step3={ContainerPayment} 
          Step4={PaymentConfirmation}  
        /> 
      </main>
  );
}
