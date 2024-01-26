import { Button } from "../../Components";
import { Link, Navigate } from "react-router-dom";
import { useClientStore } from "../../store/storeLicense";

export default function ContainerProfile() {

    const {data} = useClientStore();
    
    if(data.name.length === 0 ) {
        return <Navigate to="/consulta-placa" />
    }
    
    return (
    <div className=" md:h-full flex items-center justify-center px-2 ">
    <div className="w-[40vh] md:w-[99vh] bg-white mt-8 md:mt-0 md:my4 px-4 md:px-6 rounded-3xl shadow-xl border-2 border-cyan-100  ">
        <h2 className="text-2xl font-bold text-center my-6 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent ">
        Cliente asegurado
        </h2>

        <div className="md:grid md:grid-cols-3 md:grid-rows-8 border-2 border-cyan-500 rounded-xl uppercase ">
        <div
            className="hidden invisible md:visible md:row-span-5 md:border-r-2 border-b-2 border-cyan-500  text-2xl font-bold md:flex md:items-center md:justify-center md:tracking-widest 
                    md:bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent 
                    "
        >
            <p className="py-4 md:py-12 text-center "> Datos </p>
        </div>

        <div className=" border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
            <p>Nombre:</p>
        </div>
        <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
            <p>{data.name}</p>
        </div>
        <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
            <p>Apellido:</p>
        </div>
        <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
            <p>{data.lastname}</p>
        </div>
        <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
            <p>Documento:</p>
        </div>
        <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
            <p>{data.document_number}</p>
        </div>
        <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
            <p>Email:</p>
        </div>
        <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
            <p>{data.email}</p>
        </div>
        <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider ">
            <p>Placa:</p>
        </div>
        <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
            <p>{data.license_plate}</p>
        </div>

        <div
            className="hidden invisible md:visible md:row-span-3 border-r-2 border-cyan-500  font-bold md:flex md:items-center justify-center tracking-widest 
                    bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent "
        >
            <p className="py-3 text-center">Seguro AutoPower</p>
        </div>

        <div className="border-b-2 border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider">
            <p>Plan:</p>
        </div>

        <div className="border-b-2 border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start">
            <p>{data.service}</p>
        </div>

        <div className="pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider  border-b-2 border-cyan-500  ">
            <p>Inico de cobertura:</p>
        </div>

        <div className="border-cyan-500 py-2 md:py-1 font-normal md:font-semibold text-center md:text-start border-b-2 ">
            <p className="">{data.date_start}</p>
        </div>
        <div className="border-cyan-500 pl-4 py-1 font-semibold md:font-bold text-cyan-700 tracking-wider border-b-2 md:border-b-0 border-cyan-500 ">
            <p>Termino de cobertura:</p>
        </div>
        <div className="border-cyan-500 py-1 md:py-1 font-normal md:font-semibold text-center md:text-start my-auto">
            <p className="">{data.date_end}</p>
        </div>
        </div>

        <div className="w-full text-center my-4 md:my-2 animate-pulse">
        <Link to={"/consulta-placa"}>
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
