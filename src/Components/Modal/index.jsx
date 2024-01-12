import { Link } from "react-router-dom";
import modalImage from "../../../public/modal.jpg";
import modalImageResponsive from "../../../public/modal-responsive.jpg";
import Button from "../Button";

export default function Modal({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };
  if (visible) return null;
  return (
    <>
      <section
        onClick={handleOnClose}
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
      >
        <div className="fixed top-40 left-0 right-0  w-full md:w-3/6 h-4/6 md:h-4/6 mx-auto bg-black bg-opacity-80 rounded-xl backdrop-blur-sm flex flex-col md:flex-row z-50"> 
        {/* contenedor 1  */}
          <img
            className="hidden md:block h-auto rounded-l-xl"
            src={modalImage}
          />
          <img
            className="md:hidden w-auto mx-8 rounded-lg mt-16 mb-4 border-white-500"
            src={modalImageResponsive}
          />

          <div className="flex flex-col md:flex-row-reverse">
            {/* contenedor 2 */}

            <div className="flex flex-col ">

              <h3 className="text-white text-xl mx-auto md:mt-10 font-semibold text-center p-5
              ">
                Bienvenido a Auto Power
              </h3>
              <p className="hidden md:block text-white p-4 mb-2 md:mb-4 text-xs text-justify p-5 mx-6 font-light md:tracking-wider">
                Nos complace que estés aquí, explorando las opciones para
                proteger tu vehículo eléctrico. Sabemos que has tomado una
                decisión consciente y sostenible al elegir un auto eléctrico, y
                queremos asegurarnos de que recibas la mejor cobertura posible.
                Nuestros planes de seguro están diseñados específicamente para
                autos eléctricos, teniendo en cuenta sus características y
                necesidades únicas. Ofrecemos una amplia gama de coberturas,
                desde daños por accidentes hasta problemas con la batería y el
                sistema de carga. Navega por nuestra página, conoce nuestras
                ofertas y no dudes en contactarnos si tienes alguna pregunta.
                Estamos aquí para ayudarte a mantener tu auto eléctrico seguro y
                en pleno funcionamiento. ¡Esperamos poder servirte pronto!
              </p>
              <p className="md:hidden text-white mx-8 mb-10 text-sm text-center tracking-widest">
                Nos complace que estés aquí, explorando las opciones para
                proteger tu vehículo eléctrico. Sabemos que has tomado una
                decisión consciente y sostenible al elegir un auto eléctrico, y
                queremos asegurarnos de que recibas la mejor cobertura posible.
              </p>
              <Link to="/Benefits">
                <div className="flex justify-center mx-4 mb-8 ">
                  <Button type="submit" text="Beneficios" variant="secondary" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
