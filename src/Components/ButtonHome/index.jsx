import Button from "../Button"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ButtonHome(){
    const navigate = useNavigate()

    const handleButtonClick1 = () => {
        navigate("/BuyService")
    }

    return(
        <div>  
        <div className="flex justify-center md:min-w-[650px] gap-24 max-w-[1250px] mx-auto mt-8 px-24 md:mb-8 mb-4 animate-bounce
        
        ">
        <Button type="add" text="Cotiza tu plan aqui" variant="add" handleButtonClick={handleButtonClick1}
        />
        
        </div>
        <Link to="/Benefits">
        <h2
        className="text-lg lg:text-2xl text-center mb-4 md:mb-12 font-bold tracking-widest px-20 
        bg-gradient-to-l from-indigo-400 to-cyan-400 bg-clip-text text-transparent md:mt-12
        cursor-pointer animate-pulse
        "
        >
        👉🏻 Descubre más de nuestros beneficios 👈🏻
        </h2>
        </Link>

        </div>
    );
}