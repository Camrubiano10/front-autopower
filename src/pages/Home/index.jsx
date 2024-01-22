import { useState } from "react";
import {
  Hero,
  Modal,
  BenefitCard,
  HeroBenefit,
  PlanTable,
  ButtonHome
} from "../../Components";

export default function Home() {
  const [pryceForm, setPryceForm] = useState({
    Basic: 10,
    Gold: 20,
    Platinium: 30,
  });

  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(true);

  return (
    <>
      <div className="mt-14">
        <HeroBenefit />
      </div>

      <div className=" bg-white">
        <BenefitCard  />
      </div>

      <main className="bg-white mt-8  ">
        <h2
          className="text-lg lg:text-5xl text-center mb-12 font-bold tracking-widest px-20 animate-pulse
      bg-gradient-to-r from-cyan-800 to-teal-100 bg-clip-text text-transparent "
        >
          Descubre el significado de LIBERTAD con nuestros planes mensuales:
        </h2>

        <Hero pryceForm={pryceForm} />

        <h2
          className="text-lg md:text-4xl text-center mt-12 mb-8 font-bold tracking-wider px-20 
      bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent "
        >
          Conoce nuestros planes:
        </h2>
        <PlanTable />
        <ButtonHome />

        </main>

      <Modal onClose={handleOnClose} visible={showModal} />
    </>
  );
}
