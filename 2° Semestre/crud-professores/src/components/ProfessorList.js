import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfessorList() {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("professores")) || [];
    setProfessores(data);
  }, []);

  const remover = (cpf) => {
    const filtrados = professores.filter((p) => p.cpf !== cpf);
    setProfessores(filtrados);
    localStorage.setItem("professores", JSON.stringify(filtrados));
  };

  return (
    <div className="container">
      <h2>Lista de Professores</h2>
      {professores.length === 0 ? (
        <p>Nenhum professor cadastrado.</p>
      ) : (
        <ul>
          {professores.map((p) => (
            <li key={p.cpf}>
              <strong>{p.nome}</strong> - {p.formacao}
              <div>
                <Link to={`/detalhes/${p.cpf}`}>Ver Detalhes</Link> |{" "}
                <Link to={`/editar/${p.cpf}`}>Editar</Link> |{" "}
                <button onClick={() => remover(p.cpf)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProfessorList;
