import Button from "../Button"
import { useNavigate } from "react-router-dom";

export default function SwiperPlatinium({ pryceForm }) {

const navigate = useNavigate()

const handleButtonClick = () => {
    localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Platinium', precio: 30 }))
    navigate("/BuyService")
}

    return (
        <div className="md:min-w-[60%] md:w-[93%] md:h-[383px] mx-auto flex md:justify-center flex-col md:flex-row"> 
            <div className="flex flex-col w-full md:w-[44%]  my-4  ">
                <h2 className="mb-2 py-2 md:py-1.5 w-[80%] md:w-[70%] text-center text-[20px] md:text-3xl tracking-widest font-bold  rounded-l-lg  italic text-gray-200
                
                bg-gradient-to-r from-black to-slate-50
                ">
                    PLAN PLATINUM
                </h2>
            </div>
            <div className="md:mt-4 mb-4 text-center md:text-right md:mr-15 rounded-r-lg 
            bg-gradient-to-l from-black to-slate-50              
            ">
                <h2 className="font-bold text-sm md:text-base tracking-wider text-right text-gray-200 pr-6  md:mt-2">
                    Seguro vehicular al 100%
                </h2>


                <div className="text-right w-[80%] mx-auto mr-4  flex flex-col mt-4 md:mt-0 ">
                    <p className=" flex justify-center text-xs md:text-xl italic text-gray-200">
                        Desde
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold md:my-2 drop-shadow-xl tracking-widest text-white ">
                    ${pryceForm.Platinium}
                    </h2>
                </div>

                <div className="flex text-gray-200">
                {/* contenedor 1 */}
                <div className="md:w-2/4"> 
                    
                    <h2></h2>
                </div>
                <div className=" text-sm md:text-lg text-right text-wrap pr-6 mt-8 md:mt-0">
                <p>◽ Completa protección para tu vehiculo eléctrico garantizando su total tranquilidad.</p>
                <p className="mt-4">◽ En caso que tengas una falla técnica, una grua recogerá tu vehiculo.</p>
                </div>
                </div>
                <div className=" flex justify-end mt-5 mr-6">
                    <Button type="submit" text="Cotizar" variant="secondary" handleButtonClick={handleButtonClick}/>
                </div>
                            
            </div>
        </div>
        
    )
}