// import React, { useEffect, useState } from 'react';
// import { urlApi } from "./config";

// const URL = urlApi()
// const license = "lincense_Plate"

// const TuComponente = () => {
//     const [datos, setDatos] = useState([]);
//     const nombre = license;  // Reemplaza con el nombre que deseas buscar

//     useEffect(() => {
//         const obtenerDatosPorNombre = async () => {
//             try {
//                 const response = await fetch(URL);
//                 if (!response.ok) {
//                     throw new Error('Error al obtener datos por nombre');
//                 }

//                 const data = await response.json();
//                 setDatos(data.datos);
//             } catch (error) {
//                 console.error('Error de red:', error);
//             }
//         };

//         obtenerDatosPorNombre();
//     }, [nombre]);

//     return (
//         <div>
//             <h1>Datos por Nombre</h1>
//             <ul>
//                 {datos.map((item) => (
//                     <li key={item.id}>{item.nombre} - {item.otro_campo}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TuComponente;