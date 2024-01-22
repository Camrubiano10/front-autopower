import plus from "../../assets/icons/sin-desplegar.svg";


export default function SlideQuestions() {
  return (
    <div className="flex flex-col gap-4 items-center   ">
      <h2 className="text-xl md:text-2xl font-bold text-center mt-6 ">
            Preguntas Frecuentes
      </h2>

      <div className="relative w-11/12 md:w-8/12 overflow-hidden mt-2 border border-gray-400 rounded-lg  
      ">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
        />

        <div className="w-full pl-5 flex items-center md:justify-center h-16 md:h-14 
        bg-gradient-to-r from-blue-200 to-blue-50 
        ">

          <h2 className="text-xs md:text-lg font-semibold text-left md:text-center animate-pulse">
          ¿El seguro para autos eléctricos es más caro que para vehículos tradicionales?
          </h2>
        </div>

        <div className="absolute top-4 right-5 transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
          <img src={plus} />
        </div>

        <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
          <div className="p-3">
            <p className="text-xs md:text-base text-center">
            Las tarifas pueden depender de varios
            factores, incluyendo la seguridad del modelo y la disponibilidad de piezas.
            tecnología instalada nos permite apagar el motor en vivo lass 24hr
            Algunas aseguradoras ofrecen descuentos por la tecnología avanzada y 
            características de seguridad.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-11/12 md:w-8/12 overflow-hidden border border-gray-400 rounded-lg  
      ">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
        />

        <div className="w-full pl-5 flex items-center md:justify-center h-16 md:h-14 
        bg-gradient-to-r from-blue-200 to-blue-50 
        ">

          <h2 className="text-xs md:text-lg font-semibold text-left md:text-center animate-pulse">
          ¿La poliza tiene proteccion a intentos de hurto?
          </h2>
        </div>

        <div className="absolute top-4 right-5 transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
          <img src={plus} />
        </div>

        <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
          <div className="p-3">
            <p className="text-xs md:text-base text-center">
            Sí, el sistema de robo puede frustrar un robo en acción ya que la tecnología instalada nos permite apagar el motor en vivo las 24 hr y, además podremos ver la ubicación del vehículo en tiempo real.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-11/12 md:w-8/12 overflow-hidden border border-gray-400 rounded-lg mb-10  
      ">
        <input
          type="checkbox"
          className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
        />

        <div className="w-full pl-5 flex items-center md:justify-center h-16 md:h-14 
        bg-gradient-to-r from-blue-200 to-blue-50 
        ">

          <h2 className="text-xs md:text-lg font-semibold text-left md:text-center animate-pulse">
          ¿Ofrecen descuentos especiales para propietarios de autos eléctricos?
          </h2>
        </div>

        <div className="absolute top-4 right-5 transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
          <img src={plus} />
        </div>

        <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
          <div className="p-3">
            <p className="text-xs md:text-base text-center">
            Reconocemos la elección sostenible y ofrecemos descuentos exclusivos, así como programas de recompensas por prácticas de conducción ecológica.
            Nuestra meta es apoyar a los propietarios de autos eléctricos en su camino hacia un futuro más verde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
