import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataContext'

function Home() {

    const { setPresupuesto } = useContext(DataContext);
    const [Nombre, setNombre] = useState( JSON.parse(localStorage.getItem('Nombre')) ||'');
    const [PresupuestoInput, setPresupuestoInput] = useState(JSON.parse(localStorage.getItem('Presupuesto')) || '');
    const [Alert, setAlert] = useState(null);

    const ValidarForm = () => {
        if (Nombre !== '' && PresupuestoInput !== '') {
            setPresupuesto(PresupuestoInput);
            localStorage.setItem('Presupuesto', JSON.stringify(PresupuestoInput));
            localStorage.setItem('Nombre', JSON.stringify(Nombre));
        } else {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
        }
    }

    return (
        <div className="container-lg">
            <div className="row justify-content-center">
                <div className="row col-lg-10 col-md-10 col-12 justify-content-center pb-5 bg-white shadow border-danger mt-5 p-lg-5">
                    <h1 className="text-center mb-5">MIS GASTOS</h1>
                    <div className="px-md-5 col">
                        <input className="form-control mb-4" placeholder="Ingrese su Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input className="form-control mb-4" placeholder="Ingrese su presupuesto" value={PresupuestoInput} onChange={(e) => setPresupuestoInput(e.target.value)} />
                        <button className="btn btn-primary btn-lg form-control" onClick={ValidarForm}>Continuar</button>
                        <div className={Alert ? "alert alert-danger mt-4" : 'd-none'}>
                            <p className="text-center"><span className="text-center">!!ALERT ERROR!!</span><br />  Debe llenar todos los campos para poder continuar</p>
                        </div>
                        <p className="text-center mt-5">create by <b>@yohanhumberto</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
