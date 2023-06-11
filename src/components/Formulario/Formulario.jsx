import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

// Creacion de la funcion
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        // console.log('Manejar el envio', e);
        // Creacion de objeto para poder enviar los datos
        // Los datos son obtenidos de las lineas 10, 11 y 12
        let datosAEnviar = {
            // nombre: nombre,
            // puesto: puesto,
            // foto: foto
            // Tambien se puede declarar el objeto asi
            nombre, 
            puesto, 
            foto,
            equipo
        }
        // console.log(datosAEnviar);
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                {/* para los atributos como se seles puede declara
                    nombreAtributo={true o false}
                    nombreAtributo ===> estos es igual a true, si solo se declara el nombre del atributo
                    Por ejemplo:
                        required={true}
                        required
                */}
                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingregar puesto" 
                    required 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required 
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones 
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>
                    {/* El contenido de aqui se expresa como "children" */}
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                {/* para los atributos como se seles puede declara
                    nombreAtributo={true o false}
                    nombreAtributo ===> estos es igual a true, si solo se declara el nombre del atributo
                    Por ejemplo:
                        required={true}
                        required
                */}
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar Titulo" 
                    required 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingregar el color en Hex" 
                    required 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton> Registrar Equipo </Boton>
            </form>
        </section>
    )
}

export default Formulario;