import { useState } from "react";
import {
  ContainerPriceBasic,
  ContainerPriceGold,
  ContainerPricePlatinum,
  Hero,
  SliderIcon,
  SlideQuestions,
  Modal,
  BenefitCard, HeroBenefit
} from "../../Components";
export default function Home() {

  const [pryceForm, setPryceForm]=useState({
    Basic: 10,
    Gold: 20,
    Platinium:30
  })

  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(true);

  return (
    <>

      <div className="mt-14">
        <HeroBenefit />
      </div>
      <section className=" bg-white">
        <BenefitCard />
      </section> 

      <main className="bg-white mt-8  ">
      <h2 className="text-lg lg:text-5xl text-center mb-12 font-bold tracking-widest px-20 
      bg-gradient-to-r from-cyan-800 to-teal-100 bg-clip-text text-transparent ">
            Descubre el significado de LIBERTAD con nuestros planes mensuales:
          </h2>

        <Hero pryceForm={pryceForm}/>

        {/* body home  */}
        <section className="mt-6 w-[60%] m-auto">
  
          <div className="md:flex mt-8 md:mt-16 gap-12 ">
            <ContainerPriceBasic pryceForm={pryceForm}/>
            <ContainerPriceGold pryceForm={pryceForm}/>
            <ContainerPricePlatinum pryceForm={pryceForm}/>
          </div>
        </section>

        <section className="mt-12 w-[90%] m-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Razones para proteger tu vehiculo
          </h2>
          <SliderIcon />
        </section>

        <section className="flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-2xl font-bold">Preguntas frecuentes</h2>
          <SlideQuestions />
        </section>
      </main>

      <Modal onClose={handleOnClose} visible={showModal} />
    </>
  );
}
