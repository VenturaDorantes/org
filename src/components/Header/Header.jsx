// Se manda a llamar su archivo de estios
import "./Header.css"

// Creacion de un componente de React
function Header(){
    // Se utiliza "className" para poder utilizar una clase de CSS
    // Ya que si se usa "class" es una palabra reservada de JS, por lo que provoca errores
    return (
        <header className="header">
            <img src="/img/header.png" alt="Org"/>
        </header>
    )
}

// Sirve para exportar la funcion
export default Header;