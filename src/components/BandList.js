import React, { useState } from 'react'

function BandList({data, votar, borrar, cambiarNombre}) {

    const [bands, setbands] = useState(data);
    useEffect(() => {
        setbands(data);
    }, [data])

    const cambioNombre = (event, id) => {
        const nuevoNombre = event.target.value;

        setbands(bands => bands.map(band =>{
            if (band.id === id){
                band.name = nuevoNombre;
            }
            return band;
        }));

    }

    const onPerdiofoco = (id, nombre) => {
        cambiarNombre(id,nombre);
    }

    const crearRws = () => {

        return (
            bands.map(band => (
                <tr key={band.id}>
                <td>
                    <button className="btn btn-primary"
                    onClick={() => votar(band.id)}
                    >+1</button>
                </td>
                <td>
                    <input 
                        className="form-control"
                        value={band.name} 
                        onChange={() => cambioNombre(event, band.id)}
                        onBlur={() => onPerdiofoco(band.id, band.name)}
                    />
                </td>
                <td>
                    <h3>{band.votes}</h3>
                </td>
                <td>
                    <button className="btn btn-danger"
                        onClick={() => borrar(band.id)}
                    >
                        Borrar
                    </button>
                </td>
            </tr>
            ))
            
        );
    }

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borar</th>
                    </tr>
                </thead>
                <tbody>
                    {crearRws()}
                </tbody>
            </table>  
        </>
    )
}

export default BandList
