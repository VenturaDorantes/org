
import './MiOrg.css'

const MiOrg = (props) => {
    // Estado - hooks
    // useState - useState() 
    // const [nombreVariable, funcionQueActualiza] = useState(valorInicial)
    // console.log(props);
    // const [mostrar, actualizarMostrar] = useState(true);
    // const manejarClick = () => {
    //     // !variableBooleana -- Invierte los valores booleanos
    //     // de true a false y de false a true
    //     console.log("Mostrar/Ocular Elemento", !mostrar);
    //     actualizarMostrar(!mostrar);
    // }

    return (
        <section className="orgSection">
            <h3 className="title">Mi organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
        </section>
    );
}

export default MiOrg;