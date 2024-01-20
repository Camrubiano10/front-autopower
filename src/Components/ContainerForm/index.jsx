/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, FormWindow, Paragraph, OptionPlan } from "../../Components";
import Swal from "sweetalert2";
import TextFaild from "../TextField";
// import { create } from "../../services";



export default function ContainerForms({
  valoresForms,
  setValoresForms,
  setActiveStep,
}) {


  const {
    nombre,
    apellido,
    tipoDocumento,
    numeroDoc,
    pais,
    plan,
    telefono,
    email,
    tipoVehiculo,
    placa
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
      valoresForms.nombre === "" ||
      valoresForms.apellido === "" ||
      valoresForms.tipoDocumento === "0" ||
      valoresForms.numeroDoc === "" ||
      valoresForms.pais === "0" ||
      valoresForms.plan === "" ||
      valoresForms.telefono === "" ||
      valoresForms.tipoVehiculo === "0" ||
      valoresForms.email === "" ||
      valoresForms.placa === "" 
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
      console.log(valoresForms);
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
        <h2 className="text-3xl font-bold text-center text-cyan-800 tracking-wide underline my-6 ">
          REGISTRO
        </h2>
        
        <form onSubmit={handleFormSubmit}>

        {/* <div className="mb-1 gb-white">
            <select
              type="text"
              name="plan"
              placeholder="Plan"
              value={plan}
              onChange={handleActualizarInputs}
              className="w-80 border mt-2 border-cyan-100 shadow-sm text-center uppercase
              focus:outline-none focus:border-blue-500 
              font-semibold text-cyan-600"
            >
              <option value="0">Seleccione su plan</option>
              <option value="per">Plan Basic</option>
              <option value="col">Plan Gold</option>
              <option value="arg">Plan Platinum</option>
            </select>

            {Mensaje && valoresForms.pais == "0" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}
          </div> */}

          <OptionPlan /> 

          <div className="md:flex gap-8 justify-center mt-4">
          <div className="mb-1">
            <select
              type="text"
              name="tipoVehiculo"
              placeholder="Tipo de Vehiculo"
              value={tipoVehiculo}
              onChange={handleActualizarInputs}
              className="w-80 mt-2 shadow-md border-2 border-cyan-200 text-center uppercase 
              focus:outline-none focus:border-blue-500 
              font-semibold text-blue-600 block rounded "
            >
              <option className="text-gray-300" value="0">
                Tipo de Vehículo
              </option>
              <option value="camioneta">Camioneta</option>
              <option value="carro">Carro</option>
              <option value="4x4">4 x 4</option>
              <option value="otros">Otro</option>
            </select>

            {Mensaje && valoresForms.tipoVehiculo == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de vehiculo." />
            )}
          </div>

          <div className="mb-1">
            <TextFaild
              type="text"
              name="placa"
              placeholder="Numero de placa"
              value={placa}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={true}
            />

            {Mensaje && valoresForms.direccion == "" && (
              <Paragraph valueParagraph="Ingrese una dirección." />
            )}
          </div>
        </div>


        <div className="md:flex gap-8 justify-center md:mt-4">
          <div className="">
            <TextFaild
              type="text"
              name="nombre"
              value={nombre}
              placeholder="Nombre"
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />
            {Mensaje && valoresForms.nombre == "" && (
              <Paragraph valueParagraph="Ingrese su nombre." />
            )}
            {!regExpTexto.test(valoresForms.nombre) &&
              valoresForms.nombre.length > 0 && (
                <Paragraph valueParagraph="Ingrese un nombre válido." />
              )}
          </div>
        
          <div className="">
            <TextFaild
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={apellido}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.apellido == "" && (
              <Paragraph valueParagraph="Ingrese un apellido." />
            )}

            {!regExpTexto.test(valoresForms.apellido) &&
              valoresForms.apellido.length > 0 && (
                <Paragraph valueParagraph="Ingrese un apellido válido." />
              )}
          </div>
        </div>  

        <div className="md:flex gap-8 justify-center md:mt-4 ">
          <div className="">
            <select
              type="text"
              name="tipoDocumento"
              placeholder="Tipo de documento"
              value={tipoDocumento}
              onChange={handleActualizarInputs}
              className="w-80 mt-2 shadow-md border-2 border-cyan-200 text-center uppercase 
              focus:outline-none focus:border-blue-500 
              font-semibold text-blue-600 block rounded  
              "
            >
              <option value="0">Tipo de documento</option>
              <option value="ced">Cedula</option>
              <option value="tar">Tarjeta</option>
              <option value="dni">DNI</option>
            </select>

            {Mensaje && valoresForms.tipoDocumento == "0" && (
              <Paragraph valueParagraph="Seleccione un tipo de documento." />
            )}
          </div>

          <div className="">
            <TextFaild
              type="text"
              name="numeroDoc"
              placeholder="Numero de documento"
              value={numeroDoc}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.numeroDoc == "" && (
              <Paragraph valueParagraph="Ingrese un número de documento." />
            )}

            {!regExpNumeros.test(valoresForms.numeroDoc) &&
              valoresForms.numeroDoc.length > 0 && (
                <Paragraph valueParagraph="Ingrese un documento válido." />
              )}
          </div>
        </div>          

        <div className="md:flex gap-8 justify-center md:mt-4 ">
          <div className="mb-1">
            <TextFaild
              type="tel"
              name="telefono"
              placeholder="Numero de telefono"
              value={telefono}
              onChange={handleActualizarInputs}
              className="w-80 border-2 border-cyan-200 shadow-md rounded "
              required={false}
            />

            {Mensaje && valoresForms.telefono == "" && (
              <Paragraph valueParagraph="Ingrese un número de teléfono." />
            )}

            {!regExpNumeros.test(valoresForms.telefono) &&
              valoresForms.telefono.length > 0 && (
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
              name="pais"
              placeholder="Pais"
              value={pais}
              onChange={handleActualizarInputs}
              className="w-80 mt-2 shadow-md border-2 border-cyan-200 text-center uppercase 
              focus:outline-none focus:border-blue-500 
              font-semibold text-blue-600 block rounded  
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

            {Mensaje && valoresForms.pais == "0" && (
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

// onClick={guardarForms}
