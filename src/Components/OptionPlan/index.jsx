import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function OptionPlan() {
return (
    <div className="text-start flex justify-center  ">
    <FormControl className="text-cyan-500 italic ">
    <FormLabel className="" id="radio-buttons">Seleccione su plan:</FormLabel>
    <RadioGroup className="" row aria-labelledby="radio-buttons" name="radio-plan">
        <FormControlLabel value="Basic" control={<Radio />} label="Plan Basic" />
        <FormControlLabel value="Gold" control={<Radio />} label="Plan Gold" />
        <FormControlLabel value="Platinum" control={<Radio />} label="Plan Platinum" />
    </RadioGroup>
    </FormControl>
    </div>
);
}