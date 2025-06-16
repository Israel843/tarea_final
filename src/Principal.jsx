import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Acordeon from "./Acordeon";
import './estilos.css'
function Prince(props) {
    return (
        <div className="prince">
            <h1>Esto es la Principal</h1>
            <div className="actores">
                <div className="tarjeta">
                    <img src="" alt="Actor 1" />
                    <p>Tom Cruise</p>
                </div>
                <div className="tarjeta">
                    <img src="" alt="Actor 2" />
                    <p>Will Smith</p>
                </div>
                <div className="tarjeta">
                    <img src="" alt="Actor 3" />
                    <p>Jim Carrey</p>
                </div>
            </div>
        </div>
    );
}
function Peli(props) {
    return (
        <div className="peli">
            <h1>Esto es la Pelicula</h1>
            <Acordeon></Acordeon>
        </div>

    );
}


function Principal(props) {
    return (
        <div>
            <nav>
                <h1>Cinemateca Boliviana</h1>
                <ul>
                    <li>
                        <Link to='/'>PRINCIPAL</Link>  <Link to='/pag2'>PELICULAS</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Routes className="Contenido">
                    <Route path="/" element={<Prince></Prince>}></Route>
                    <Route path="/pag2" element={<Peli></Peli>}></Route>
                </Routes>
                <footer className="pie">
                    <div className="PiePag1">Israel Quispe Yanique</div>
                    <div className="PiePag2">Programacion Web II Inf-122</div>
                </footer>
            </div>
        </div>
    );
}
export default Principal;
