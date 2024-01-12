import aboutImage from "../../../public/aboutImage.jpg";
export default function About() {
  return (
    <>
      <div className="md:min-h-min md:py-[6.34%] flex flex-wrap items-center mt-16 md:mt-6 border-2 border-white">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <h3 className="text-3xl font-semibold leading-normal my-6 md:my-10 text-cyan-900 mt-auto">
            Sobre Nosotros
          </h3>
          <p className="text-justify text-lg font-light leading-relaxed my-4 text-cyan-700 mx-2 md:mx-auto">
            Juntos, estamos construyendo un mundo más limpio y sostenible, un
            viaje que comienza con la elección de tu seguro para vehículos
            eléctricos. AutoPower está aquí para asegurarse de que estés
            protegido en cada paso del camino.
          </p>
          <p className="text-justify text-lg font-light leading-relaxed mt-4 mb-0 text-cyan-700  mx-2 md:mx-auto">
            AutoPower es líder en el mercado de seguros para automóviles
            eléctricos. Nuestro compromiso es proporcionar una cobertura sólida
            y adaptada específicamente a las necesidades de los conductores de
            autos eléctricos
          </p>
        </div>
        <div className="max-w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col break-words bg-green-300 w-full mt-12 mb-8 shadow-2xl rounded-lg ">
            <img
              alt=""
              src={aboutImage}
              className="w-full my-auto align-middle rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
