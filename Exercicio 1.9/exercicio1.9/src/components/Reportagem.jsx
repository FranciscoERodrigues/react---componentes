// 1° Parte - Import
// 2° Parte - function
// 3° Parte - export

import './Reportagem.css'

function Reportagem(props) {

    return (

    <div className='Reportagem'>

        <h1> {props.titulo} </h1>
        <p>{props.paragrafo01}</p>
        <p>{props.paragrafo02}</p>
        
    </div>
    ) 
}


export default Reportagem

