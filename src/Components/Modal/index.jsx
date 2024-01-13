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
        <div className="fixed top-40 left-0 right-0  w-5/6 md:w-3/6 h-4/6 mx-auto 
        bg-black bg-opacity-60 rounded-xl backdrop-blur-sm flex flex-col md:flex-row z-50  "> 
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

              <h3 className="text-white text-xl mx-auto md:mt-10 font-bold text-center p-4 
              ">
                ¡Bienvenido a Autopower!
              </h3>
              <div className="hidden md:block p-2 mb-2 md:mb-6 text-xs md:text-sm font-light text-justify mx-8  md:tracking-wider text-white  ">
              <p>
              En Autopower nuestro objetivo es brindarle la libertad de conducir su vehículo eléctrico sin preocupaciones.</p>
              <p className="mt-4"> Sabemos que la <spam className="font-bold text-blue-100 ">libertad</spam> es un valor importante para nuestros clientes, y es por eso que nos inspiramos en ella para ofrecerle los mejores seguros de vehículos eléctricos.</p> 
              <p className="mt-4">Nuestros seguros están diseñados para proteger su vehículo eléctrico y su <spam className="font-bold text-blue-100 ">libertad</spam> de conducirlo.
              <p className="font-bold mt-4 text-yellow-100">¡Gracias por elegirnos! 💡⚡</p> 
              </p>
              </div>
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
