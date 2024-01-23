import { Button } from "../../Components";
import { Link } from "react-router-dom";

export default function ContainerProfile() {


    return(
        <div className="h-full flex items-center justify-center px-2 px">
            <div className="md:w-[99vh] bg-white my-4 px-4  md:px-6 rounded-3xl shadow-xl border-2 border-cyan-100">
                
            <h2 className="text-2xl font-bold text-center my-4 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent ">
            Cliente asegurado
            </h2>

                <div className="grid grid-cols-3 grid-rows-7 border-2 border-cyan-500 rounded-xl uppercase ">

                    <div className="row-span-5 border-r-2 border-b-2 border-cyan-500  text-2xl font-bold flex items-center justify-center tracking-widest 
                    bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent 
                    ">
                        <p className="py-12 text-center"> Datos </p>
                    </div>

                    <div className=" border-b-2 border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Nombre:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-1 font-semibold">
                        <p>Prueba10</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Apellido:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-1 font-semibold">
                        <p>Pru10</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Documento:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-1 font-semibold">
                        <p>123213213</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Email:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-1 font-semibold">
                        <p>prueba10@hotmail.com</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Placa:</p>
                    </div>
                    <div className="border-b-2 border-cyan-500 py-1 font-semibold">
                        <p>xyz123</p>
                    </div>

                    <div className="row-span-2 border-r-2 border-cyan-500  font-bold flex items-center justify-center tracking-widest 
                    bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">
                        <p className="py-3 text-center">Seguro AutoPower</p>
                    </div>

                    <div className="border-b-2 border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Plan:</p>
                    </div>

                    <div className="border-b-2 border-cyan-500 py-1 font-semibold">
                        <p>Basico</p>
                    </div>

                    <div className="border-cyan-500 pl-4 py-1 font-bold text-cyan-700 tracking-wider">
                        <p>Caducidad:</p>
                    </div>
                    <div className="border-cyan-500 py-1 font-semibold">
                        <p>19/12/2023</p>
                    </div>

                </div>

                <div className="w-full text-center my-2 animate-pulse">
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




