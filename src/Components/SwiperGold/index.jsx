/* eslint-disable react/prop-types */
import Button from "../Button"
import auto2 from "../../assets/img/auto2.png";
import star from "../../assets/icons/star.png";
import { useNavigate } from "react-router-dom";

export default function SwiperBasic({ pryceForm }) {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Basico', precio: 10 }))
        navigate("/BuyService")
    }

    return (

        <div className="min-w-[60%] w-[90%]   md:w-full md:h-[383px] rounded-xl md:rounded-none mx-auto md:flex 
        
        bg-image-gold bg-cover bg-center
        
        ">

        {/* container principal  */}

            <div className="flex flex-col w-full md:w-[52%]  my-4 md:mb-10 md:mt-4  ">

                <h2 className="mb-2 py-2 md:py-1.5 w-[80%] md:w-[70%] text-center text-[20px] md:text-2xl tracking-widest font-bold  rounded-r-md  italic
                
                bg-gradient-to-r from-yellow-600 to-slate-50
                ">
                    Plan Gold
                </h2>

                {/* <img
                    className="w-[55%] md:pl-6 m-auto
                    
                    drop-shadow-black-2xl 
                    
                    "
                    src={auto2}
                    alt=""
                    /> */}


            </div>

            <div className="mt-4 text-center md:text-left md:my-10 md:mr-10 ">

                <h3 className="font-bold text-sm md:text-base md:pl-6">
                    ¡Precios a tu alcance!
                </h3>
                
                <h2 className="mt-1 md:mt-4 font-semibold tracking-wider md:pl-6 md:text-xl">
                    Seguro vehicular al 100%
                </h2>

                <div className="w-[80%] mx-auto md:ml-2 md:pl-6 my-2 md:my-8 flex flex-col ">
                    <p className=" flex items-start text-xs pl-14 md:pl-0 md:text-xl italic">
                        Desde
                    </p>
                    <h2 className="text-4xl md:text-7xl font-bold md:my-2 drop-shadow-lg tracking-wider">
                        ${pryceForm.Basic}
                    </h2>
                    <h2 className="flex items-start text-xs pl-14 md:pl-0 md:text-xl italic">
                        Por mes
                    </h2>
                </div>

                <div className="flex gap-4 pl-0 pr-5 mt-4  items-center text-sm md:text-lg text-left ">
                    <img className="w-4 h-4" src={star} alt="" />
                    <p>
                        Asistencia las 24 h para su vehículo, sin preocupaciones de
                        más.
                    </p>
                </div>

                <div className="flex gap-4 pl-0 pr-5 mt-6  items-center text-sm md:text-lg text-left ">
                    <img className="w-4 h-4 " src={star} alt="" />
                    <p>
                        Revisión técnica mensualmente para el seguro de tu auto y el
                        tuyo.
                    </p>
                </div>

                <div className=" flex justify-center mt-5 ">
                    <Button type="submit" text="Cotizar" variant="secondary" handleButtonClick={handleButtonClick}/>
                </div>

                            
            </div>
        </div>
        
    )
}