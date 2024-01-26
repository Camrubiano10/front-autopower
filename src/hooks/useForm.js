import { useState } from "react";

export function useForm(){
    const [values, setValues] = useState({
        placa: "",
    });

    const [errors, setErrors] = useState({
        placa: "",
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validateIfValuesHasEmpty = () => {
        const empties = Object.keys(values)
        .filter((value) => !values[value])
        .map((value) => [value, "Este campo es requerido"]);
        
        if (empties.length === 0){
            setErrors({});
            return;
        }
        setErrors(Object.fromEntries(empties));
    };

    return{
        values,
        errors,
        handleInputChange,
        validateIfValuesHasEmpty,
    };

}

export const getClientByLicense = async (placa) => {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/client/${placa}/`);
    const data = await response.json();
    return data;
}