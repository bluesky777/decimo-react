import { Popover, PopoverBody, PopoverHeader } from "reactstrap"
import {useState} from 'react'

const MiPopo = ()=>{

    const [mostrando, setMostrando] = useState(false)

    return(
        <div>
            <Popover placement="top-start" target="presion" isOpen={mostrando} toggle={()=>setMostrando(!mostrando)}>
                <PopoverHeader>Título</PopoverHeader>
                <PopoverBody>Este botón es para probar el popover</PopoverBody>
            </Popover>
        </div>
    )
}

export default MiPopo;