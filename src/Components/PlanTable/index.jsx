import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";


function createData(name, basic, gold, platinum, details) {
return { name, basic, gold, platinum, details };
}

const redIcon = <CloseIcon className="text-red-500" />;
const greenIcon = <CheckIcon className="text-green-500" />;

const rows = [
createData(
    "Asistencia las 24 horas",
    greenIcon,
    greenIcon,
    greenIcon,
    "Tendras asistencia ambulatoria, auxilio mecanico, entre otros."
),

createData(
    "Revision tecnica",
    greenIcon,
    greenIcon,
    greenIcon,
    "Podras hacer una revision de tu vehiculo para tu seguridad y la de tu familia."
),

createData(
    "Mantenimiento mensual",
    greenIcon,
    greenIcon,
    greenIcon,
    "¡Auto seguro, familia segura!. Manten tu vehiculo en optimas condiciones."
),

createData(
    "Chofer de reemplazo",
    redIcon,
    greenIcon,
    greenIcon,
    "Chofer de reemplazo cuando te sientas indispuesto de conducir."
),

createData(
    "Gruas",
    redIcon,
    greenIcon,
    greenIcon,
    "Asistencia de grua frente a percances inoportunos."
),

createData(
    "Seguro contra robos del 60%",
    redIcon,
    redIcon,
    greenIcon,
    "Este plan te cubrira ante robos para tu tranquilidad."
),

createData(
    "GPS antirrobo",
    redIcon,
    redIcon,
    greenIcon,
    "Rastreo las 24 horas en vivo para detener un posible robo en accion."
),

createData(
    "Hackeo de software S.O.S.",
    redIcon,
    redIcon,
    greenIcon,
    "Hackea el sistema del auto en situaciones de riesgo."
),

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
    <TableContainer>
    <Table className="mx-auto min-w-[650px] max-w-[1250px] shadow-xl ">
        <TableHead
        sx={{ "& th": { fontWeight: "bold", color: "white", fontSize: 18, paddingBottom: 1.5, paddingTop: 1.5 } }}
        className="bg-gradient-to-r from-blue-800 to-cyan-200  "
        >
        <TableRow >
            <TableCell className="" />
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
                sx={{ "&:last-child td,&:last-child th": { border: 0} }}
            >
                <TableCell >
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => {handleClick(index)

                        }}
                >
                    <ExpandMoreIcon />
                </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="justify ">
                {row.name}
                </TableCell>
                <TableCell  align="center">{row.basic}</TableCell>

                <TableCell  align="center">{row.gold}</TableCell>

                <TableCell  align="center">{row.platinum}</TableCell>

            </TableRow>
            {open === index && (
                <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={5}
                >
                    <Box margin={1} className="text-center text-cyan-700 italic ">
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
