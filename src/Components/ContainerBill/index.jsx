/* eslint-disable react/prop-types */
import { Button, FormWindow } from "../../Components";
import Contract from "../Contract";

export default function ContainerBill({ setActiveStep }) {
  const today = new Date();

  const datePeriodo = new Date();
  datePeriodo.setMonth(datePeriodo.getMonth() + 1);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setActiveStep(2);
  };

  const planSeleccionado = JSON.parse(
    localStorage.getItem("plan_seleccionado")
  );

  let igv = planSeleccionado.precio * 0.18;

  let priceTotal = igv + planSeleccionado.precio;

  return (
    <FormWindow className={""}>
      <form onSubmit={handleFormSubmit}>
      <h2 className="text-3xl font-bold text-center text-cyan-800 tracking-wide  my-6 border-b-2 border-cyan-100 uppercase ">
      RESUMEN PLAN {planSeleccionado.plan}
      </h2>

    <div className="flex flex-col md:flex-row justify-between border border-white ">
    {/* contenedor 1  */}
    <div className=" md:w-1/2 ">


      <div className="flex mb-4 justify-between ">
        <div className="ml-8 mt-4 md:mt-3 font-bold text-cyan-700 uppercase tracking-wider ">
            <p className=" ">Vigencia:</p>
        </div>
        <div className="mt-4 md:mt-3  mr-8 font-semibold  uppercase ">
            <p className=" ">Mensual</p>
        </div>        
      </div>

        <div className="flex mb-4 justify-between">
          <div className="ml-8 mt-4 md:mt-3 font-bold text-cyan-700 uppercase tracking-wider">
            <p className=" ">Fecha de Inicio:</p>
          </div>
          <div className="mt-4 md:mt-3  mr-8 font-semibold  uppercase">
            <p className=" ">{today.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex mb-4 justify-between">
          <div className="ml-8 mt-4 md:mt-3 font-bold text-cyan-700 uppercase tracking-wider ">
            <p className=" ">Fecha fin:</p>
          </div>
          <div className="mt-4 md:mt-3  mr-8 font-semibold  uppercase ">
            <p className="">{datePeriodo.toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex mb-4 mt-5 justify-between">
          <div className="ml-8 mt-4 md:mt-3 font-bold text-cyan-700 uppercase tracking-wider ">
            <p className="">Tarifa Mensual:</p>
          </div>
          <div className="mt-4 md:mt-3  mr-8 font-semibold  uppercase">
            <p className="">${planSeleccionado.precio}</p>
          </div>
        </div>

        <div className="flex mb-4 justify-between">
          <div className="ml-8 mt-4 md:mt-3 font-bold text-cyan-700 uppercase tracking-wider ">
            <p className="">IGV:</p>
          </div>
          <div className="mt-4 md:mt-3  mr-8 font-semibold  uppercase">
            <p className="">18%</p>
          </div>
        </div>


        <div className="flex mb-4 justify-between">
          <div className="ml-8 mt-4 md:mt-3 font-bold text-cyan-700 uppercase tracking-wider ">
            <p className="">Pago total:</p>
          </div>
          <div className="mt-4 md:mt-3  mr-8 font-semibold  uppercase ">
            <p className="">${priceTotal}</p>
          </div>
        </div>

      </div>

      {/* contenedor 2 */}
    <div className="mt-5 md:mt-0 md:w-1/2 ">

      <div className="md:h-[280px] border-4 border-cyan-100 bg-image-login bg-cover mx-8 rounded-lg md:mt-3 invisible md:visible">

      </div>

          <div className=" text-center md:mt-3 border-2 border-white h-1/7">
            <p className="text-blue-700">
              <a href="#" className="text-xs">
                <span>
                  <Contract />
                </span>
              </a>
            </p>
          </div>

    </div>

  </div>

        <div className="flex justify-center mt-10 md:mt-7">
          <Button type="submit" text="Siguiente" variant="primary" />
        </div>
      </form>
    </FormWindow>
  );
}
