import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function OptionPlan({handleActualizarInputs, service}) {

    const handleButtonClick1 = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Basico', precio: 10 }))
    }

    const handleButtonClick2 = () => {
        localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Gold', precio: 20 }))
    }

    const handleButtonClick3 = () => {
    localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Platinum', precio: 30 }))
    }


return (
    <div className="text-start flex justify-center  ">
    <FormControl className="text-cyan-500 italic ">
    <FormLabel  id="radio-buttons">Seleccione su plan:</FormLabel>
    <RadioGroup row aria-labelledby="radio-buttons"
    onChange={handleActualizarInputs} value={service} name="service">
        <FormControlLabel onClick={handleButtonClick1} value="Basic" control={<Radio />} label="Plan Basic" />
        <FormControlLabel onClick={handleButtonClick2} value="Gold" control={<Radio />} label="Plan Gold" />
        <FormControlLabel onClick={handleButtonClick3} value="Platinum" control={<Radio />} label="Plan Platinum" />
        
    </RadioGroup>
    </FormControl>
    </div>
);
}