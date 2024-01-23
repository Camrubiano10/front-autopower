/* eslint-disable react/prop-types */
import TextField from "../TextField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function ContainerLogin() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Profile");
  };

  return (
    <div className="flex justify-center mt-24 ">
<div className="w-[40vh] md:w-[60vh] px-8 rounded-3xl shadow-xl border-2 border-cyan-100  py-3 md:py-0
bg-white
">
        <h2 className="text-2xl font-bold text-center my-2 bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent">
        Consulta Autopower
      </h2>

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
</div>
</div>
  );
}
