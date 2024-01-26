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

    // const fetchData = async (placa) => {
    //     const response = await fetch(`http://127.0.0.1:8000/api/v1/client/${placa}/`);
    //     const data = await response.json();
    
    //     const newValues = {
    //         license_plate: data.license_plate,
    //         name: data.name,
    //         lastname: data.lastname,
    //         document_number: data.document_number,
    //         document_type: data.document_type,
    //         country: data.country,
    //         phone: data.phone,
    //         email: data.email,
    //         car_type: data.car_type,
    //         service: data.service,
    //         created_at: data.created_at,
    //     };
    
    //     useStore.getState().setData(newValues);
        
    // };


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