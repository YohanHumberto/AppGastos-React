import React from 'react'
import FormGastos from './FormGastos';
import ListGastos from './ListGastos';

function AppGatos() {

    return (
        <div className="container-xl bg-white shadow border-danger mt-3 mt-xl-5 p-lg-5" >
            <div className="row">

                <FormGastos />
                <ListGastos/>
              
            </div>
        </div>
    );
}

export default AppGatos
