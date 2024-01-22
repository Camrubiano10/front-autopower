import { useState } from "react";
import { ContainerPayment, ContainerForm, ContainerBill, PaymentConfirmation, Status } from "../../Components";


export default function BuyService() {
  
const [valoresForms, setValoresForms] = useState({
    name: "",
    lastname: "",
    document_type: "0",
    document_number: "",
    country: "0",
    phone: "",
    email: "",
    car_type: "0",
    license_plate:"",
    service: ""
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
