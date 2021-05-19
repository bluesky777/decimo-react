import { Button, Col, Row, Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { useState } from 'react'

let Menu = ()=> {

    const [abierto, setAbierto] = useState(false)

    let toggle = ()=> setAbierto(!abierto);

    return (
        <Container>
            <Row>
                <Col>
                    <Button>Presioname</Button>
                </Col>
                <Col>
                    <Button>Presioname</Button>
                </Col>
                <Col>
                    <Button>Presioname</Button>
                </Col>
            </Row>
        
            <Row>
                <Col>
                    <ButtonDropdown isOpen={abierto} toggle={toggle}>
                        <DropdownToggle caret color="success">Menú</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Mi mamá</DropdownItem>
                            <DropdownItem>La madre del que vea esto</DropdownItem>
                            <DropdownItem>La de los pollitos</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </Col>
                <Col>
                    <Button color="primary">Presioname</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Menu;