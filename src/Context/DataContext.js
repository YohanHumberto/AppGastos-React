import { createContext, useState } from 'react'
import useAppGastos from '../Hooks/useAppGastos';



const DataContext = createContext();

function GastoDataContext({ children }) {

    const {GastosData, AddGastos, DeleteGastos} = useAppGastos();
    const [Presupuesto, setPresupuesto] = useState(JSON.parse(localStorage.getItem('Presupuesto')) || null);
    let Total = 0;

    GastosData.forEach(element => {
        Total = Total + element.Cantidad;
        console.log(element.Cantidad)
    });

    const data = {
        GastosData,
        AddGastos,
        DeleteGastos,
        items: GastosData.length,
        Total,
        Presupuesto,
        setPresupuesto
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}


export default GastoDataContext;
export { DataContext };
