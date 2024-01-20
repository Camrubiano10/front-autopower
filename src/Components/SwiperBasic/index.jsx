import Button from "../Button"
import { useNavigate } from "react-router-dom";

export default function SwiperBasic({ pryceForm }) {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Basico', precio: 10 }))
        navigate("/BuyService")
    }
    return (

        <div className="min-w-[60%] w-[90%] md:w-[99%]  md:h-[383px] rounded-xl md:rounded-none mx-auto md:flex md:justify-center"> 

            <div className="flex flex-col w-full md:w-[46%]  my-4  ">

                <h2 className="mb-2 py-2 md:py-1.5 w-[80%] md:w-[70%] text-center text-[20px] md:text-3xl tracking-widest font-bold  rounded-l-lg  italic 
                
                bg-gradient-to-r from-blue-400 to-slate-50
                ">
                    PLAN BASIC
                </h2>
            </div>

            <div className="mt-4 text-center md:text-right md:my-4 md:mr-15 rounded-r-lg 
            bg-gradient-to-l from-blue-400 to-slate-50              
            
            ">

                <h2 className="font-bold text-sm md:text-base tracking-wider text-right  pr-6  md:mt-2">
                    Seguro vehicular al 100%
                </h2>


                <div className="w-[80%] mx-auto mr-8  flex flex-col ">
                    <p className=" flex justify-center text-xs md:text-xl italic ">
                        Desde
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold md:my-2 drop-shadow-xl tracking-widest  ">
                        ${pryceForm.Basic}
                    </h2>
                    {/* <h2 className="flex items-start text-xs pl-14 md:pl-0 md:text-xl italic">
                        Por mes
                    </h2> */}
                </div>

                <div className="flex ">
                {/* contenedor 1 */}
                <div className="w-2/4"> 
                    
                    <h2></h2>
                </div>
                {/* contenedor 2 */}

                <div className=" text-sm md:text-lg text-right text-wrap pr-6">
                {/* <img className="w-4 h-4 " src={star} alt="" /> */}
                <p>◽ Evite las preocupaciones con nuestra asistencia 24 h.</p>


                <p className="mt-4">◽ Revisión técnica mensualmente para la seguridad de su auto y el suyo.</p>
                </div>

                </div>

                <div className=" flex justify-end mt-5 mr-6">
                    <Button type="submit" text="Cotizar" variant="secondary" handleButtonClick={handleButtonClick}/>
                </div>

                            
            </div>
        </div>
        
    )
}