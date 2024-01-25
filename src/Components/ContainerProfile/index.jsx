import { Button } from "../../Components";
import { Link } from "react-router-dom";

export default function ContainerProfile() {

    







    return(
        <div className=" md:h-full flex items-center justify-center px-2 ">
            <div className="w-[40vh] md:w-[99vh] bg-white mt-8 md:mt-0 md:my4 px-4 md:px-6 rounded-3xl shadow-xl border-2 border-cyan-100  ">
                
            <h2 className="text-2xl font-bold text-center my-6 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent ">
            Cliente asegurado
            </h2>

                <div className="md:grid md:grid-cols-3 md:grid-rows-7 border-2 border-cyan-500 rounded-xl uppercase ">

                    <div className="hidden invisible md:visible md:row-span-5 md:border-r-2 border-b-2 border-cyan-500  text-2xl font-bold md:flex md:items-center md:justify-center md:tracking-widest 
                    md:bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent 
                    ">
                        <p className="py-4 md:py-12 text-center "> Datos </p>
                    </div>

                    <div className=" border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
                        <p>Nombre:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>Prueba10</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
                        <p>Apellido:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>Pru10</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
                        <p>Documento:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>123213213</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
                        <p>Email:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>prueba10@hotmail.com</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider ">
                        <p>Placa:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>xyz123</p>
                    </div>

                    <div className="hidden invisible md:visible md:row-span-2 border-r-2 border-cyan-500  font-bold md:flex md:items-center justify-center tracking-widest 
                    bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent ">
                        <p className="py-3 text-center">Seguro AutoPower</p>
                    </div>

                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
                        <p>Plan:</p>
                    </div>

                    <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>Basico</p>
                    </div>

                    <div className="border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider border-b-2 md:border-b-0 border-cyan-500 ">
                        <p>Caducidad:</p>
                    </div>
                    <div className="border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
                        <p>19/12/2023</p>
                    </div>

                </div>

                <div className="w-full text-center my-4 md:my-2 animate-pulse">
                    <Link to={"/"}>
                    
                    <Button
                        type="submit"
                        text="Volver"
                        variant="primary"
                        className=" mt-2 " 
                    />
                    </Link>
                </div>
            </div>
        </div>
    );
}




