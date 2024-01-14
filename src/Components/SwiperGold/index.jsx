import Button from "../Button"
import { useNavigate } from "react-router-dom";

export default function SwiperGold({ pryceForm }) {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Gold', precio: 20 }))
        navigate("/BuyService")
    }

    return (

        <div className="min-w-[60%] w-[90%] md:w-[100%] md:h-[383px] rounded-xl md:rounded-none  md:flex md:justify-center">
            
            <div className="flex flex-col w-full md:w-[43%]  my-4  ">

                <h2 className="mb-2 py-2 md:py-1.5 w-[80%] md:w-[70%] text-center text-[20px] md:text-3xl tracking-widest font-bold  rounded-l-lg  italic 
                text-yellow-100 
                bg-gradient-to-r from-cyan-800 to-slate-50
                ">
                    PLAN GOLD
                </h2>

            </div>

            <div className="mt-4 text-center md:text-right md:my-4 md:mr-15 rounded-r-lg 
            bg-gradient-to-l from-cyan-800 to-slate-50  w-2/4   
            ">

                <h2 className="font-bold text-sm md:text-base tracking-wider text-right pr-6 md:mt-2
                text-teal-100
                ">
                    Seguro vehicular al 100%
                </h2>


                <div className="w-[80%] mx-auto mr-8  flex flex-col ">
                    <p className=" flex justify-center text-xs md:text-xl italic text-white">
                        Desde
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold md:my-2 drop-shadow-xl tracking-widest text-white ">
                        ${pryceForm.Gold}
                    </h2>
                </div>

                <div className="flex text-white ">
                {/* contenedor 1 */}
                <div className="w-2/4"> 
                    
                    <h2></h2>
                </div>
                {/* contenedor 2 */}

                <div className=" text-sm md:text-lg text-right text-wrap pr-6">

                <p>◽ Protege tu vehiculo electrico con los mejores.</p>

                <p className="mt-4">◽ Contamos con todos los complementos para tu auto.</p>
                </div>

                </div>

                <div className=" flex justify-end mt-5 mr-6">
                    <Button type="submit" text="Cotizar" variant="secondary" handleButtonClick={handleButtonClick}/>
                </div>

                            
            </div>
        </div>
        
    )
}