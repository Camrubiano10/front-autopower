/* eslint-disable react/prop-types */
import TextField from '../TextField';
import FormWindow from '../FormWindow'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';


export default function ContainerLogin() {

const navigate= useNavigate()
    const handleButtonClick= ()=>{
    navigate("/Profile")
      }

    return (

        <FormWindow className={"md:h-[99vh] bg-image-bene "}>
            <h2 className="text-2xl font-bold text-center mt-2 mb-4 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">Consulta Autopower</h2>
            

            <div className="py-2">
                <TextField
                type="text"
                name="placa"
                placeholder="Placa"
                className="w-full text-xl tracking-widest uppercase "
                required
                maxLength={6}
                />
            </div>


            <div className="py-2">

            <div className="text-center pt-6">
                <Button
                type="submit"
                text="Buscar"
                variant="primary"
                disabled={false}
                handleButtonClick={handleButtonClick}
                />
            </div>

          </div>
            

        </FormWindow>

    );
}
