
let grupo = 'Décimo'

let profesores = [34,76,2,12,89]


let Variables = ()=> (
    <div>
        <h2>Probando variables {grupo}</h2>
        {profesores.map(function(elem, indice){
            return <div>Hola {elem} - {indice}</div>
        })}

        {profesores.map( (elem)=> <div>otro {elem}</div>)}

    </div>
)

export default Variables;