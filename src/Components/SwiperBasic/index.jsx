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
        
        
        
        "> 
        {/* bg-image bg-cover bg-center */}

        {/* container principal  */}

            <div className="flex flex-col w-full md:w-[45%]  my-4  ">

                <h2 className="mb-2 py-2 md:py-1.5 w-[80%] md:w-[70%] text-center text-[20px] md:text-3xl tracking-widest font-bold  rounded-l-lg  italic text-yellow-100
                
                bg-gradient-to-r from-cyan-800 to-slate-50
                ">
                    PLAN BASIC
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
            bg-gradient-to-l from-cyan-800 to-slate-50              
            border border-red-800
            ">

                <h2 className="font-bold text-sm md:text-base md:text-yellow-100 text-right mr-12  md:mt-2">
                    Seguro vehicular al 100%
                </h2>


                <div className="w-[80%] mx-auto md:mr-2 md:mr-12 my-2  flex flex-col ">
                    <p className=" flex justify-end text-xs md:text-xl italic md:text-yellow-100">
                        Desde
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold md:my-2 drop-shadow-xl tracking-widest text-teal-100 ">
                        ${pryceForm.Basic}
                    </h2>
                    {/* <h2 className="flex items-start text-xs pl-14 md:pl-0 md:text-xl italic">
                        Por mes
                    </h2> */}
                </div>

                <div className="border border-green-800  w-2/4  ">
                <div className=" mt-2  text-sm md:text-lg text-right text-wrap text-white ">
                    {/* <img className="w-4 h-4 " src={star} alt="" /> */}
                    <p>
                        Asistencia las 24 h para su vehículo, sin preocupaciones de
                        más.
                    </p>
                </div>

                <div className="flex gap-4 pl-0 pr-5 mt-6  items-center text-sm md:text-lg text-right text-white text-wrap  ">
                    <img className="w-4 h-4 " src={star} alt="" />
                    <p>
                        Revisión técnica mensualmente</p> 
                        <p>para el seguro de tu auto y el
                        tuyo.
                    </p>
                </div>
                </div>

                <div className=" flex justify-center mt-5 ">
                    <Button type="submit" text="Cotizar" variant="secondary" handleButtonClick={handleButtonClick}/>
                </div>

                            
            </div>
        </div>
        
    )
}