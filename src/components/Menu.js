import './App.css';

function Menu() {
  return (
    <div className="Menu">
        <nav id="menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#collection">Sobre</a></li>
                <li><a href="#produtos">Produtos</a></li>
            </ul>
            <div id="botao-reserva">
                 <a href="#reserva">Reservar</a>
            </div>
        </nav>
    </div>
  );
}

export default Menu;