import { useState } from "react";

const defaultContext = JSON.parse(localStorage.getItem('GastosData')) || [];

function useAppGastos() {

    const [GastosData, setGastosData] = useState(defaultContext);

    const AddGastos = (gasto) => {
        const changedData = [gasto, ...GastosData];
        console.log(changedData);
        setGastosData(changedData);
        localStorage.setItem('GastosData', JSON.stringify(changedData));
    }

    const DeleteGastos = (id) => {
        setGastosData(GastosData.filter(item => item.id !== id))
        localStorage.setItem('GastosData', JSON.stringify(GastosData.filter(item => item.id !== id)));
    }

    return (
        {
            GastosData,
            AddGastos,
            DeleteGastos
        }
    );

}


export default useAppGastos;