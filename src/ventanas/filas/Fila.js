import { Button } from 'reactstrap'

const Fila = (props)=> {

    const pers = props.elemento

    return (
        <tr>
            <td>{props.indice+1}</td>
            <td>{pers.nombre}</td>
            <td>{pers.apellidos}</td>
            <td>{pers.asesinatos}</td>
            <td><Button>Edit</Button></td>
        </tr>
    )
}
export default Fila;