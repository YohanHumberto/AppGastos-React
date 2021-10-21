import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext';
import GastosItem from './GastosItem';

function ListGastos() {

    const { GastosData, Total, Presupuesto, DeleteGastos } = useContext(DataContext);

    return (
        <div className="text-dark mt-md-0 col-lg-5 offset-lg-2 col-md-6 mt-sm-5">
            <h1 className="text-center">LISTADO</h1>
            <div className="row justify-content-end pe-3 mb-2" id="item">
                <div className="col-3 px-1 text-center" style={{ background: "rgb(255, 87, 115)", borderRadius: "6px" }}>Items: <span
                    className="bg-dark text-white px-1 align-text-top" style={{ borderRadius: "12px" }}>{GastosData.length}</span></div>
            </div>

            <div id="root">
                {GastosData.map(item => <GastosItem item={item} DeleteGastos={DeleteGastos} key={item.id}/>)}
            </div>

            <div className="row alert alert-info border-1 border-dark p-2 mx-1"><span
                className="col-6">Presupuesto:</span><span className="col-6 text-end">${Presupuesto}</span></div>
            <div className="row alert alert-success  border-1 border-dark p-2 mx-1"><span
                className="col-6">Restante:</span><span className="col-6 text-end">${Presupuesto - Total}</span></div>
            <div className="row alert alert-primary border-1 border-dark p-2 mx-1"><span className="col-6">Total
                Gatado:</span><span className="col-6 text-end">${Total}</span></div>

        </div>
    );
}

export default ListGastos
