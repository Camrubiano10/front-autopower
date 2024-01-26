/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, FormWindow, Paragraph, OptionPlan } from "../../Components";
import Swal from "sweetalert2";
import TextFaild from "../TextField";
// import { create } from "../../services";



export default function ContainerForms({ valoresForms, setValoresForms, setActiveStep }) {



  const {
    name,
    lastname,
    document_type,
    document_number,
    country,
    service,
    phone,
    email,
    car_type,
    license_plate,
  } = valoresForms;


  const regExpCorreo = new RegExp(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const regExpTexto = new RegExp(/[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2,50}/i);
  const regExpNumeros = new RegExp(/^[0-9]{5,10}$/i);
  const [Mensaje, setMensaje] = useState(false);

  const handleActualizarInputs = ({ target }) => {
    setMensaje(false);
    setValoresForms({
      ...valoresForms,
      [target.name]: target.value,
    });
  };

  const validate = () => {
    let status = true;
    if (
      valoresForms.name === "" ||
      valoresForms.lastname === "" ||
      valoresForms.document_type === "0" ||
      valoresForms.document_number === "" ||
      valoresForms.country === "0" ||
      valoresForms.service === "" ||
      valoresForms.phone === "" ||
      valoresForms.car_type === "0" ||
      valoresForms.email === "" ||
      valoresForms.license_plate === ""
    ) {
      status = false;
    }

    if (!status) {
      setMensaje(true);
    }

    return status;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      

      setActiveStep(1);
    } else {
      Swal.fire(
        "Información",
        "Por favor ingresa la información faltante",
        "warning"
      );
    }
  };



  return (
    <section>
      <FormWindow className={" "}> 
        <h2 className="text-3xl font-bold text-center text-cyan-800 tracking-wide  my-6 border-b-2 border-cyan-100 ">
          REGISTRO
        </h2>
        
        <form onSubmit={handleFormSubmit} >

          <OptionPlan handleActualizarInputs={handleActualizarInputs} service={valoresForms.service} /> 

          <div className="md:flex gap-8 justify-center mt-4">
          <div className="mb-1">
            <select
              type="text"
              name="car_type"
              placeholder="Tipo de Vehiculo"
              value={car_type}
              onChange={handleActualizarInputs}
              className="w-80 mt-2 shadow-md border-2 border-cyan-200 text-center uppercase text-gray-500
              focus:outline-none focus:border-blue-500 
              font-semibold block rounded "
            >
              <option className="" value="0">
                Tipo de Vehículo
              </option>
              <option value="camioneta">Camioneta</option>
              <option value="carro">Carro</option>
              <option value="4x4">4 x 4</option>
              <option value="otros">Otro</option>
            </select>

            {Mensaje && valoresForms.car_type == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de vehiculo." />
            )}
          </div>

          <div className="mb-1">
            <TextFaild
              type="text"
              name="license_plate"
              placeholder="Numero de placa"
              value={license_plate}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={true}
            />

            {Mensaje && valoresForms.license_plate == "" && (
              <Paragraph valueParagraph="Ingrese una dirección." />
            )}
          </div>
        </div>


        <div className="md:flex gap-8 justify-center md:mt-4">
          <div className="">
            <TextFaild
              type="text"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />
            {Mensaje && valoresForms.name == "" && (
              <Paragraph valueParagraph="Ingrese su nombre." />
            )}
            {!regExpTexto.test(valoresForms.name) &&
              valoresForms.name.length > 0 && (
                <Paragraph valueParagraph="Ingrese un nombre válido." />
              )}
          </div>
        
          <div className="">
            <TextFaild
              type="text"
              name="lastname"
              placeholder="Apellido"
              value={lastname}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.lastname == "" && (
              <Paragraph valueParagraph="Ingrese un apellido." />
            )}

            {!regExpTexto.test(valoresForms.lastname) &&
              valoresForms.lastname.length > 0 && (
                <Paragraph valueParagraph="Ingrese un apellido válido." />
              )}
          </div>
        </div>  

        <div className="md:flex gap-8 justify-center md:mt-4 ">
          <div className="">
            <select
              type="text"
              name="document_type"
              placeholder="Tipo de documento"
              value={document_type}
              onChange={handleActualizarInputs}
              className="w-80 mt-2 shadow-md border-2 border-cyan-200 text-center uppercase text-gray-500
              focus:outline-none focus:border-blue-500 
              font-semibold block rounded  
              "
            >
              <option value="0">Tipo de documento</option>
              <option value="ced">Cedula</option>
              <option value="tar">Tarjeta</option>
              <option value="dni">DNI</option>
            </select>

            {Mensaje && valoresForms.document_type == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de documento." />
            )}
          </div>

          <div className="">
            <TextFaild
              type="number"
              name="document_number"
              placeholder="Numero de documento"
              value={document_number}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.document_number == "" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}

            {!regExpNumeros.test(valoresForms.document_number) &&
              valoresForms.document_number?.length > 0 && (
                <Paragraph valueParagraph="Ingrese un documento válido." />
              )}
          </div>
        </div>          

        <div className="md:flex gap-8 justify-center md:mt-4 ">
          <div className="mb-1">
            <TextFaild
              type="tel"
              name="phone"
              placeholder="Numero de telefono"
              value={phone}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.phone == "" && (
              <Paragraph valueParagraph="Ingrese un número de teléfono." />
            )}

            {!regExpNumeros.test(valoresForms.phone) &&
              valoresForms.phone?.length > 0 && (
                <Paragraph valueParagraph="Ingrese un teléfono válido." />
              )}
          </div>
          <div className="mb-1">
            <TextFaild
              type="email"
              name="email"
              placeholder="Correo electronico"
              value={email}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.email == "" && (
              <Paragraph valueParagraph="Ingrese un email." />
            )}

            {!regExpCorreo.test(valoresForms.email) &&
              valoresForms.email.length > 0 && (
                <Paragraph valueParagraph="Ingrese un email válido." />
              )}
          </div>
        </div>

        <div className="md:flex justify-center md:mt-4">
          <div className="mb-1 gb-white">
            <select
              type="text"
              name="country"
              placeholder="Pais"
              value={country}
              onChange={handleActualizarInputs}
              className="w-80 mt-2 shadow-md border-2 border-cyan-200 text-center uppercase text-gray-500
              focus:outline-none focus:border-blue-500 
              font-semibold block rounded   
              "
            >
              <option value="0">País</option>
              <option value="per">Perú</option>
              <option value="col">Colombia</option>
              <option value="arg">Argentina</option>
              <option value="chi">Chile</option>
              <option value="uru">Uruguay</option>
              <option value="ecu">Ecuador</option>
              <option value="bol">Bolivia</option>
            </select>


            {Mensaje && valoresForms.country == "0" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}
          </div>
        </div>


          <div className="text-center mt-7">
            <Button
              type="submit"
              text="Siguiente"
              variant="primary"
              disabled={false}
            />
            
          </div>
        </form>
      </FormWindow>
    </section>
  );
}

