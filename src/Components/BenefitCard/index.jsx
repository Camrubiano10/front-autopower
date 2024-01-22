import moneyBag from "../../assets/icons/bolsa-dinero.png";
import security from "../../assets/icons/security.png";
import technology from "../../assets/icons/technology.png";

export default function BenefitCard() {
  return (
    <div className="container mx-auto px-4 mb-6 ">

      <div className="flex flex-wrap md:flex-nowrap md:gap-7 ">
        {/* CARD1  */}
        <div className=" w-full md:w-4/12 px-4 text-center mt-8  ">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-8 rounded-lg
          bg-gradient-to-r from-blue-200 to-cyan-200
          
          ">
            <div className=" px-4 py-4 flex-auto shadow-2xl rounded-lg ">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-xl rounded-full bg-white  ">
                <img src={moneyBag} alt="" />
              </div>
              <h6 className="text-xl font-semibold">Ahorro</h6>
              <p className="my-2 ">
                Nuestra póliza de seguro reconoce el ahorro y te recompensa con
                primas más asequibles que la competencia.
              </p>
            </div>
          </div>
        </div>

        {/* CARD2  */}
        <div className="w-full md:w-4/12 px-4 text-center md:mt-8 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded-lg">
            <div className="px-4 py-4 flex-auto rounded-lg shadow-2xl 
            bg-gradient-to-r from-cyan-200 to-green-100 
            
            ">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-xl rounded-full bg-white">
                <img src={technology} alt="" />
              </div>
              <h6 className="text-xl font-semibold">Tecnología Avanzada</h6>
              <p className="my-2 ">
                Te proporcionamos repuestos y tecnología de la más alta calidad
                para disfrutar de tu vehículo eléctrico al máximo.
              </p>
            </div>
          </div>
        </div>
        {/* CARD3 */}
        <div className=" w-full md:w-4/12 px-4 text-center md:mt-8">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg rounded-lg 
          bg-gradient-to-r from-green-100 to-yellow-200 
          ">
            <div className="px-4 py-4 flex-auto rounded-lg shadow-2xl">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white ">
                <img className="" src={security} alt="" />
              </div>
              <h6 className="text-xl font-semibold t">Seguridad</h6>
              <p className="my-2 ">
                Garantizamos que puedas seguir disfrutando de tu experiencia de
                conducción eléctrica con total seguridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
