/* eslint-disable react/prop-types */
import Button from "../Button"
import star from "../../assets/icons/star.png";
import { useNavigate } from "react-router-dom";

export default function SwiperBasic({ pryceForm }) {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Basico', precio: 10 }))
        navigate("/BuyService")
    }

    return (

        <div className="min-w-[60%] w-[90%]   md:w-full md:h-[383px] rounded-xl md:rounded-none mx-auto md:flex md:justify-center 
        
        
        border border-blue-500
        "> 
            {/* bg-image-gold bg-cover bg-center */}

            <div className="flex flex-col w-full md:w-[45%]  my-4 border border-red-900  ">

                <h2 className="mb-2 py-2 md:py-1.5 w-[80%] md:w-[70%] text-center text-[20px] md:text-2xl tracking-widest font-bold  rounded-r-md  italic text-white
                
                bg-gradient-to-r from-cyan-800 to-slate-50
                ">
                    PLAN GOLD
                </h2>

                {/* <img
                    className="w-[55%] md:pl-6 m-auto
                    
                    drop-shadow-black-2xl 
                    
                    "
                    src={auto2}
                    alt=""
                    /> */}


            </div>

            <div className="mt-4 text-center md:text-right md:my-4 md:mr-15 rounded-r-lg 
            bg-gradient-to-l from-black to-slate-50  border border-yellow-600            
            ">

                <h2 className="font-bold text-sm md:text-base md:text-white md:pr-6 md:mt-2">
                    Seguro vehicular al 100%
                </h2>


                <div className="w-[80%] mx-auto md:mr-2 md:pr-6 my-2  flex flex-col ">
                    <p className=" flex items-start text-xs pr-14 md:text-xl   italic md:text-white">
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