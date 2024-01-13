export default function TableBenefit() {
  return (
    <div className="relative md:w-8/12 overflow-x-auto mx-4 border-2 border-white">

      <table className="w-full text-sm text-left text-cyan-500 dark:text-gray-400 mb-16
      ">
        <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-800 to-cyan-400 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Servicio
            </th>
            <th scope="col" className="px-6 py-3">
              Plan
            </th>
            <th scope="col" className="px-6 py-3">
              Tiempo
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Seguro contra robos
            </th>
            <td className="px-6 py-4">Gold/Platinum</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Asistencia las 24 horas
            </th>
            <td className="px-6 py-4">Todos</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Chofer de reemplazo
            </th>
            <td className="px-6 py-4">Gold/Platinum</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Revision técnica
            </th>
            <td className="px-6 py-4">Todos</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Mantenimiento mensual
            </th>
            <td className="px-6 py-4">Todos</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Razones externas
            </th>
            <td className="px-6 py-4">Platinum</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Gruas
            </th>
            <td className="px-6 py-4">Gold/Platinum</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              GPS antirrobo
            </th>
            <td className="px-6 py-4">Platinum</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>


          <tr className="bg-white border-b border-cyan-300 dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-cyan-900 whitespace-nowrap dark:text-white"
            >
              Hackeo de software S.O.S
            </th>
            <td className="px-6 py-4">Platinum</td>
            <td className="px-6 py-4">Mensual</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
