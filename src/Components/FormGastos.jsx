import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataContext';

function FormGastos() {

    const [Nombre, setNombre] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Alert, setAlert] = useState(null);
    const { AddGastos, setPresupuesto } = useContext(DataContext);

    const Add = () => {
        if (Nombre !== '' && Cantidad !== '') {
            const gasto = {
                id: Date.now(),
                Nombre: Nombre,
                Cantidad: parseInt(Cantidad)
            }
            AddGastos(gasto)
            setNombre('');
            setCantidad('');
        } else {
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 2000);

        }
    }

    return (
        <div className="col-lg-5 col-md-6">
            <h1 className=" text-center p-2">LISTA TUS GASTOS</h1>
            <div className="form p-1">
                <input type="text" className="form-control my-2" value={Nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre Gastos" />
                <ul className="text-danger ms-3 form-control-sm">
                    <li>EL maximo permitido es de 10 caracteres</li>
                    <li>No debe iniciar con espacios</li>
                </ul>
                <input type="number" className="form-control my-2" value={Cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Cantidad Gastos" />
                <ul className="text-danger ms-3 form-control-sm">
                    <li>Ingrese un numero maximo es de 10 caracteres</li>
                    <li>Sin espacio y sin signos</li>
                </ul>
                <button className="form-control btn-dark mt-2 mb-4 " onClick={Add}>Agregar</button>

                <div className={Alert ? "alert alert-danger" : 'd-none'}>
                    <p className="text-center"><span className="text-center">!!ALERT ERROR!!</span><br />  Debe llenar todos los campos para poder agregar el gasto</p>
                </div>
            </div>

            <div className="alert alert-warning border-danger border-4 border-bottom-0 border-end-0 border-start-0 p-3 ps-5 mb-2 form-control-sm" style={{ borderRadius: "0" }}>
                <b>Sugerencias</b>
                <ul className="mt-2">
                    <li>
                        Ingrese de esta forma sus gastos Ej: Alquiler 400
                    </li>
                    <li>
                        Elimine un gasto si exede el presupuesto
                    </li>
                    <li>
                        Son validos: Letras numeros y espacios
                    </li>
                </ul>
            </div>

            <div className="row justify-content-end mt-3">
                <button className="col-2 btn me-2" onClick={() => setPresupuesto('')}>Volver</button>
            </div>

        </div>
    )
}

export default FormGastos;
