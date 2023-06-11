import "./Equipo.css";
import Colaborador from "../Colaborador";
// importando npm de convecion de rgba a hexadecimal, es decir un color con opaciodad en hexadecimal
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    // Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    /* Lo anterior es como asignar valores a variables, solo que seria de una forma mas rapida
        const colorPrimario = props.datos.colorPrimario;
        const colorSecundario = props.datos.colorSecundario;
        const titulo = props.datos.titulo;
    la linea 5 representa lo anterios pero resumido
    */


    // Los estilos se especifican en objecots en React

    const obj = {
        backgroundColor: hexToRgba (colorPrimario, .6)
    }

    const estiloTitulo = {
        borderColor:colorPrimario
    }
    // Lo siguientes return <> { condicion && contenido } </> 
    // Sirve para especificar si una condicion se cumple el contenido se mostrara de lo contrario estara en vacio
    return <> { 
        colaboradores.length > 0 &&
        <section className="equipo" style={ obj }>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(event) => {
                    actualizarColor(event.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
               {
                colaboradores.map((colaborador, index) => 
                    <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />
                )
               }
            </div>
        </section>
    }</>;
};

export default Equipo;