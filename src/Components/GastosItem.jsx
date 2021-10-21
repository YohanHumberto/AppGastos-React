import React from 'react'

function GastosItem({ item, DeleteGastos}) {
    return (
        <div className="row alert alert-light shadow border-1 border-dark p-2 mx-1">
            <span className="col-6">
                <span className="bg-primary text-white border-secondary px-2 pb-1" style={{ borderRadius: "6px" }}>{item.Nombre}</span>
            </span>
            <span className="col-6 text-end">
                <span className="bg-danger me-2 text-white px-1" style={{ borderRadius: "6px" }}>${item.Cantidad}</span>
                <button className="bg-dark text-white" style={{ borderRadius: "15px" }} onClick={() => DeleteGastos(item.id)}>🗑</button>
            </span>
        </div>
    )
}

export default GastosItem
