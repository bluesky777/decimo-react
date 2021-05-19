import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Tooltip } from "reactstrap"
import { useState } from 'react'
import MiPopo from "./MiPopo"
import Productos from "./Tablita"


const MiModal = ()=>{
    const [open, setOpen] = useState(false)
    const [tipOpen, setTipOpen] = useState(false)

    const cambiar = ()=>
        setOpen(!open)

    return (
        <div>
            <Container>

                
                <MiPopo></MiPopo>

                <Button onClick={cambiar}>Abrir ventana</Button>
                
                <Button id="presion">Presioname</Button>
                <Modal isOpen={open} toggle={cambiar}>
                    <ModalHeader toggle={cambiar}>Hola mundo</ModalHeader>
                    <ModalBody>Me parece que esto es muy fácil</ModalBody>
                    <ModalFooter>
                        <Button onClick={cambiar}>Cerrar</Button>
                    </ModalFooter>
                </Modal>

                <br></br>
                <a href="/" id="mirando">Mirame</a>
                <Tooltip isOpen={tipOpen} placement="right" target="mirando" toggle={()=>setTipOpen(!tipOpen)}>Soy tu conciencia</Tooltip>

                <Productos />

            </Container>
        </div>
    )
}




export default MiModal;