import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "../../Components";


function createData(name, basic, gold, platinum, details) {
return { name, basic, gold, platinum, details };
}

// const handleButtonClick1= ()=>{
//     localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Basic', precio: 10 }))
//     navigate("/BuyService")
// }

// const handleButtonClick2= ()=>{
//     localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Gold', precio: 20 }))
//     navigate("/BuyService")
// }

// const handleButtonClick3= ()=>{
//     localStorage.setItem('plan_seleccionado', JSON.stringify({ plan: 'Platinum', precio: 30 }))
//     navigate("/BuyService")
// }


const redIcon = <CloseIcon className="text-red-500" />;
const greenIcon = <CheckIcon className="text-green-500" />;
// const buttonBasic = <div className=" flex justify-center"><Button type="submit" text="Cotizar" variant="primary" handleButtonClick={handleButtonClick}/></div>
// const buttonGold = <div className=" flex justify-center"><Button type="submit" text="Cotizar" variant="primary" handleButtonClick={handleButtonClick}/></div>
// const buttonPlatinum = <div className=" flex justify-center"><Button type="submit" text="Cotizar" variant="primary" handleButtonClick={handleButtonClick}/></div>

const rows = [
createData('Asistencia las 24 horas', greenIcon, greenIcon, greenIcon, 'Tendras asistencia ambulatoria, auxilio mecanico, entre otros.'),

createData('Revision tecnica', greenIcon, greenIcon, greenIcon, 'Podras hacer una revision de tu vehiculo para tu seguridad y la de tu familia.'),

createData('Mantenimiento mensual', greenIcon, greenIcon, greenIcon, '¡Auto seguro, familia segura!. Manten tu vehiculo en optimas condiciones.'),

createData('Seguro contra robos del 35%', redIcon, greenIcon, redIcon, 'Este plan te cubrira ante robos para tu tranquilidad.'),

createData('Chofer de reemplazo', redIcon, greenIcon, greenIcon, 'Chofer de reemplazo cuando te sientas indispuesto de conducir.'),

createData('Gruas', redIcon, greenIcon, greenIcon, 'Asistencia de grua frente a percances inoportunos.'),

createData('Seguro contra robos del 60%', redIcon, redIcon, greenIcon, 'Asistencia de grua frente a percances inoportunos.'),

createData('Gruas', redIcon, redIcon, greenIcon, 'Asistencia de grua frente a percances inoportunos.'),

createData('Cobertura ante razones externas', redIcon, redIcon, greenIcon, 'Tu vehiculo se encuentra cubierto frente a daño colateral por manifestaciones y disturbios.'),

createData('GPS antirrobo', redIcon, redIcon, greenIcon, 'Rastreo las 24 horas en vivo para detener un posible robo en accion.'),

createData('Hackeo de software S.O.S.', redIcon, redIcon, greenIcon, 'Hackea el sistema del auto en situaciones de riesgo.'),

];

export default function PlanTable() {
const [open, setOpen] = useState(null);

const handleClick = (index) => {
    if (open === index) {
    setOpen(null);
    } else {
    setOpen(index);
    }
};

return (
    <TableContainer className="">
    <Table className="mx-auto min-w-[650px] max-w-[900px]  " >
    {/* aria-label="simple table" */}
        <TableHead sx={{ '& th': { color: 'white', fontSize: 18} }}  className="bg-gradient-to-r from-indigo-800 to-cyan-400 rounded-t-xl ">
        <TableRow >
            <TableCell  />
            <TableCell align="left">Beneficios</TableCell>
            <TableCell align="center">Plan Basic</TableCell>
            <TableCell align="center">Plan Gold</TableCell>
            <TableCell align="center">Plan Platinum</TableCell>
        </TableRow>
        </TableHead>
        <TableBody >
        {rows.map((row, index) => (
            <React.Fragment key={row.name}>
            <TableRow
                sx={{ '&:last-child td,&:last-child th': { border: 0 } }}
                >
                <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleClick(index)}
                >
                    <ExpandMoreIcon />
                </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="justify">
                {row.name}
                </TableCell>
                <TableCell align="center">{row.basic}</TableCell>
                <TableCell align="center">{row.gold}</TableCell>
                <TableCell align="center">{row.platinum}</TableCell>
            </TableRow>
            {open === index && (
                <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Box margin={1} className="text-center">
                    <Typography variant="body2" gutterBottom component="div">
                        {row.details}
                    </Typography>
                    </Box>
                </TableCell>
                </TableRow>
            )}
            </React.Fragment>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
);
}