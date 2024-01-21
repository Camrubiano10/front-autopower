import contacts from "../../../public/contacts.jpg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.jpg";
import x from "../../assets/icons/x.svg";
export default function Contact() {
  return (
    <section className="md:py-[4.25%] flex flex-wrap items-center mt-4 md:mt-12 md:border-2 md:border-white bg-image-bene bg-cover ">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-9 ">
        <h2 className="text-3xl font-semibold leading-normal text-cyan-900">Contactanos:</h2>
        <p className="text-justify text-lg font-light leading-relaxed mt-4 text-cyan-700 mx-2 md:mx-0">
          En AutoPower, valoramos la comunicación y las relaciones con nuestros
          clientes. Estamos aquí para atender tus preguntas, escuchar tus
          comentarios y brindarte el soporte que necesitas. Ya sea que estés
          interesado en nuestros servicios o simplemente desees establecer un
          contacto, estamos encantados de poder ayudarte.
        </p>

        <div className="fle text-lg font-light leading-relaxed mt-4 mx-auto text-cyan-700">
          <p className="font-semibold text-cyan-900 ml-2 md:ml-0 ">Direccion principal:</p>
          <p className="mt-2 md:mt-0 mx-2 md:mx-0">Av. República de Panamá 3545, San Isidro 15047, Perú</p>
        </div>

        <div className="flex gap-4 text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          <p className="font-semibold text-cyan-900 ml-2 md:ml-0">Email:</p>
          <p className="text-cyan-700 ">servicioalcliente@autopower.com</p>
        </div>

        <div className="flex gap-4 text-lg font-light leading-relaxed mt-4  md:mb-16 text-cyan-700">
          <p className="font-semibold text-cyan-900 ml-2 md:ml-0">Telefono:</p>
          <p>+51 33 333 333</p>
        </div>
      </div>

      <div className="max-w-full  md:w-4/12 px-4 mr-auto ml-auto mt-4 md:mt-12">
        <div className="relative flex flex-col break-words bg-white w-full mb-10">
          <img
            alt=""
            src={contacts}
            className="w-full align-middle rounded-lg"
          />
        </div>

        <div className="text-lg font-light leading-relaxed   md:mt-8 mb-4 text-cyan-700">
          <p className="flex justify-center text-2xl font-semibold">
            Redes Sociales:
          </p>
          <p className="flex justify-center text-xl text-cyan-900 ">AutoPower</p>
          <div className="flex justify-center w-10 mx-auto gap-3 mt-2">
            <img className="flex" src={facebook} alt="" />
            <img className="flex" src={instagram} alt="" />
            <img src={x} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
