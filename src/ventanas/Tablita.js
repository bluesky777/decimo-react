import { Table } from "reactstrap";
import Fila from "./filas/Fila";
import { Button } from 'reactstrap'
import { useState, useEffect } from 'react'
import { useFirestore } from 'reactfire'
import AddPersonaForm from "./AddPersonasForm";


const Productos = () => {

    const refFirestore = useFirestore()

    const [personas, setPersonas] = useState([])
    const [showAdd, setShowAdd] = useState(false)


    useEffect(() => {

        const traerDatos = async ()=> {
            /* const personasDatos = await refFirestore.collection('personas').get()
            personasDatos.docs.forEach((doc) => {
                temporales.push(
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                    )
                })*/

            const personasDatos = await refFirestore.collection('personas').onSnapshot((snapshot) => {
                const temporales = []
                console.log(snapshot.docs)
                snapshot.docs.forEach((doc) => {
                    temporales.push(
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )
                })
                setPersonas(temporales)
            })
        }
        traerDatos()

    }, [refFirestore])


    const toggleShowAdd = ()=>{
        setShowAdd(!showAdd)
    }

    return(
        <div>

            <h1>Tabla de asesinos</h1>
            {
                showAdd
                ? <AddPersonaForm toggleShowAdd={toggleShowAdd} />
                : <Button onClick={toggleShowAdd}>Crear nuevo</Button>
            }


            <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Descripción</th>
                        <th>Menú</th>
                    </tr>
                </thead>
                <tbody>
                     {personas.map( (persona, index) => (
                         <Fila key={persona.id} elemento={persona} indice={index}></Fila>
                     ) )}
                </tbody>
               
            </Table>
        </div>
    )
}

export default Productos;