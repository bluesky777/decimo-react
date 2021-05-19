import './main.css';

function Main() {
    return (
        <div>
            <h1>Hola mundo</h1>
            <Encabezado />
            <Menu></Menu>
        </div>
    )
}


function Encabezado() {
    return(
        <div className="encabezado">
            soy el encabezado
        </div>
    )
}


function Menu() {


    let presionar = (e) => {
        console.log('Holaaaa', e);
    }


    function sumar (e){
        console.log('Sumarrr', e)
    }

    return (
        <ol>
            <li>
                <a onClick={presionar} href="#">Inicio</a>
            </li>
            <li>
                <a onClick={sumar} href="#">Alumnos</a>
            </li>
            <li>Profesores</li>
            <li>Configuración</li>
        </ol>
    )
}


export default Main;