// Impotacion del hook - useState
import { useState } from 'react';
// Llamado de la libreria de creacion de llaves unicas "uuid"
import { v4 as uuid } from 'uuid';
import './App.css';
// Se importa el componente
import Header from './components/Header/Header.jsx';
import Formulario from './components/Formulario/Formulario.jsx'
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

/*
  Primera forma de poder mandar a llamar el componente - - { Header() }
  Segunda forma de poder mandar a llamar el componenete - - <nombreComponente></nombreComponente>  <Header></Header>
  Tercera forma de poder mandar a llmar el componente - - <nombreComponente/> <Header/> 
*/

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id : uuid(),
      nombre: "Ventura Dorantes",
      puesto: "Estudiante",
      foto: "https://github.com/VenturaDorantes.png",
      equipo: "Front End",
      fav: true
    }
  ]);
  // Lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id : uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id : uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id : uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id : uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id : uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id : uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id : uuid(),
      titulo: "Innovacción y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ]);
  // Ternario --> condicion ? seMuestra : noSeMuestre
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    // console.log("Nuevo colaborador", colaborador);
    // Spread operator  (...nombreArreglo, datosAAgregar) ===> ...nombreArreglo --> quieres decir que se hace hara copia de algo o el arreglo
    // Lo que hara es que cuando se valla llenando el formulario y creando el registro, se guardaran en el arreglo
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id);
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    // console.log('Actualizar: ', color, id);
    // Se crea la funcion para poder hacer cambio en el arreglo
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    // Se manda el nuevo arreglo a la funcion de useState de equipos
    actualizarEquipos(equiposActualizados);
  }

  // Crear nuevo Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  // Actualizar like o favorito
  const like = (id) => {
    // console.log("like", id)
    const colaboradorActualizarFav = colaboradores.map((colaborador) => {
     if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
     }
     return colaborador
    })

    actualizarColaboradores(colaboradorActualizarFav);
  }


  return (
    <div>
      <Header/>
      {/* {mostrarFormulario === true ? <Formulario/> : <></>} */}
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador} 
        crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {/* Declaracion del map(() => return )*/}
      {equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
      />)}
      <Footer/>
    </div>
  );
}

export default App;
