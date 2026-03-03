import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Lista de Professores</Link>
      <Link to="/novo">Cadastrar Professor</Link>
    </nav>
  );
}

export default Navbar;
