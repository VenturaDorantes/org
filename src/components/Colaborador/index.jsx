import './Colaborador.css'
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Colaborador = (props) => {
    const { id, nombre, puesto, foto, equipo, fav } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;

    // condicion ? verdadero : falso (Ternario) 
    
    return (
        <div className="colaborador">
            {/* Llamando el icono, el cual se usa igual de manera de etiqueta */}
            <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}> </AiFillCloseCircle>
            <div className="encabezado" style={{backgroundColor: colorPrimario}}>
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                { fav ?  <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
            </div>
        </div>
    );
}

export default Colaborador;