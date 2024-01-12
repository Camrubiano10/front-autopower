import logo from "../../assets/logo/logo-blanco.svg";
import isotipo from "../../assets/logo/isotipo.svg";
import { Link, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <nav className="fixed top-0 left-0  w-full shadow z-30   bg-gradient-to-r from-indigo-800 to-cyan-400
      ">
        <div className="container m-auto flex justify-between items-center tracking-wide text-white">
          <Link to="/">
            <img className="md:w-36 w-32 ml-6" src={logo} />
          </Link>
          <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <Link to="/Benefits">
              <li className="hover:bg-darkblue-select py-4 px-6 ">BENEFICIOS</li>
            </Link>
            <Link to="/About">
              <li className="hover:bg-darkblue-select py-4 px-6">
                SOBRE NOSOTROS
              </li>
            </Link>
            <Link to="/Contact">
              <li className="hover:bg-darkblue-select py-4 px-6">CONTACTO</li>
            </Link>
            <Link to="/Profile">
              <li className="hover:bg-darkblue-select py-4 px-6">ACCESO</li>
            </Link>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gary-200 group">
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="absolute top-0 right-full h-screen w-8/12 bg-darkblue border opacity-20 backdrop-blur-md group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-30">
              <ul>
                <Link to="/Benefits" >
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full focus:text-blue-500">
                    BENEFICIOS
                  </li>
                </Link>

                <Link to="/About" >
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full focus:text-blue-500">
                    SOBRE NOSOTROS
                  </li>
                </Link>
                <Link to="/Contact">
                  <li className="hover:bg-darkblue-select py-4 px-6 w-full focus:text-blue-500">
                    CONTACTO
                  </li>
                </Link>
                
              </ul>
            </div>
          </button>
        </div>
      </nav>

      <Outlet />

      <footer className="flex flex-row justify-center items-center py-4 font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400">
        <img className="mr-6 h-8" src={isotipo} />
        <p className="text-white text-xs md:text-lg">
          Todos los derechos reservados 2023.
        </p>
      </footer>
    </>
  );
}
