import { useFirestore } from 'reactfire'
import { useState } from 'react'

const AddPersonaForm = ({ toggleShowAdd })=> {

    const refFirestore = useFirestore().collection('personas')
    const [datosNew, setDatosNew] = useState({nombre: 'algo', apellidos: ''})

    const onSubmit = async (e)=> {
        e.preventDefault()
        console.log('guardando...')

        await refFirestore.doc().set({
            nombre: datosNew.nombre, 
            apellidos: 'Josef', 
            asesinatos: 8654 
        })

    }

    const handleChange = ({ target }) => {
        const { value } = target
        const { name } = target
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Agregar persona</h2>

                <form onSubmit={ (e) => onSubmit(e)}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" onChange={(e) => setDatosNew({nombre: e.target.value})} value={datosNew.nombre} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input type="text" onChange={(e) => setDatosNew({apellidos: e.target.value})} value={datosNew.nombre} className="form-control" />
                    </div>
                    <button className="btn btn-warning" onClick={toggleShowAdd} type="submit">Cancelar</button>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}

export default AddPersonaForm