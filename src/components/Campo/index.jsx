import './Campo.css'

const Campo = (props) => {
    // console.log(props);
    const placeholderModificado = `${props.placeholder}...`;
    // Destructuracion
    const { type = "text" } = props
    console.log(type)

    const manejarCambio = (e) => {
        // console.log("cambio", e.target.value)
        // actualizara el contenido del input
        props.actualizarValor(e.target.value);
    }

    
    
    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            {/* Los inputs se que quita su funcionalidad de ir cambiarndo al ingresar texto
                Por lo que se tuve que hacer con React por medio de Hooks para poder ir detectando los cambios al componente
            */}
            <input 
                placeholder={placeholderModificado}
                type={type} 
                required={props.required} 
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    );
}

export default Campo;