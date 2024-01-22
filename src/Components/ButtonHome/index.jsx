import Button from "../Button"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ButtonHome(){
    const navigate = useNavigate()

    const handleButtonClick1 = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Basic', precio: 10 }))
        navigate("/BuyService")
    }

    const handleButtonClick2 = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Gold', precio: 20 }))
        navigate("/BuyService")
    }

    const handleButtonClick3 = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Platinum', precio: 30 }))
        navigate("/BuyService")
    }

    return(
        <div>  
        <div className="flex min-w-[650px] gap-24 max-w-[1250px] mx-auto my-4 px-24 mb-8
        
        ">
        <Button type="add" text="Adquiere el plan Basico" variant="add" handleButtonClick={handleButtonClick1}/>
        
        <Button type="submit" text="Adquiere el plan Gold" variant="add" handleButtonClick={handleButtonClick2}/>
        
        <Button type="submit" text="Adquiere el plan Platinum" variant="add" handleButtonClick={handleButtonClick3}/>
        
        </div>
        <Link to="/Benefits">
        <h2
        className="text-lg lg:text-2xl text-center mb-12 font-bold tracking-widest px-20 
        bg-gradient-to-l from-indigo-400 to-cyan-400 bg-clip-text text-transparent mt-12
        cursor-pointer animate-bounce
        "
        >
        >>> Descubre más de nuestros beneficios
        </h2>
        </Link>

        </div>
    );
}