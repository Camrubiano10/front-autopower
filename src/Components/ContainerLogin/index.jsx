import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import TextField from "../TextField";
import Button from "../Button";
import { getClientByLicense } from "../../hooks/useForm"
import { useClientStore } from "../../store/storeLicense"

export default function ContainerLogin() {
  const navigate = useNavigate();
  const {setData} = useClientStore();

  const { errors, values, handleInputChange, validateIfValuesHasEmpty } = useForm();
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      const data = await getClientByLicense(values.placa);
      setData(data);
      navigate("/profile");

    }catch(error){

    }

  
  };

  return (
    <div className="flex justify-center mt-24 ">
      <div
        className="w-[40vh] md:w-[60vh] px-8 rounded-3xl shadow-xl border-2 border-cyan-100  py-3 md:py-0
        bg-white
        "
      >
        <h2 className="text-2xl font-bold text-center my-2 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">
          Consulta Placa Autopower
        </h2>

        <form onSubmit={handleFormSubmit} className="py-2 flex flex-col items-center">
          <TextField
            maxLength={6}
            className="w-full text-xl tracking-widest uppercase "
            placeholder="Ejem: ABC123"
            type="text"
            name="placa"
            value={values.placa}
            onChange={handleInputChange}
            required={false}
            errors={errors}
          />
          

          <Button
            type="submit"
            text="Buscar"
            variant="primary"
            disabled={false}
            
            className="text-center py-2 mt-6  "
          />
        </form>
      </div>
    </div>
  );
}
