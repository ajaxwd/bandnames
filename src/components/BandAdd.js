import React, { useState } from 'react';

function BandAdd({crearBanda}) {

    const [valor, setvalor] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (valor.trim().lenght > 0) {
            
            crearBanda(valor);

            setvalor('');
        }
    }
    return (
        <>
          <h1>Agregar Banda</h1>

            <form onSubmit={onSubmit}>
                <input 
                className="form-control"
                placeholder="Nuevo nombre de la banda"
                valor={valor}
                onChange={(ev) => setvalor(ev.target.value)}
                />
            </form>  
        </>
    )
}

export default BandAdd
