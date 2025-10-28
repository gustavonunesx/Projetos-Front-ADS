import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfessorDetails() {
  const { cpf } = useParams();
  const [professor, setProfessor] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("professores")) || [];
    const prof = data.find((p) => p.cpf === cpf);
    setProfessor(prof);
  }, [cpf]);

  if (!professor) return <div className="container">Professor não encontrado.</div>;

  return (
    <div className="container">
      <h2>Detalhes do Professor</h2>
      <p><strong>Nome:</strong> {professor.nome}</p>
      <p><strong>CPF:</strong> {professor.cpf}</p>
      <p><strong>Matrícula:</strong> {professor.matricula}</p>
      <p><strong>Formação:</strong> {professor.formacao}</p>
      <p><strong>Email:</strong> {professor.email}</p>
      <p><strong>Telefone:</strong> {professor.telefone}</p>
      <p><strong>Endereço:</strong> {professor.logradouro}, {professor.numero} - {professor.cidade}/{professor.uf}</p>
      <p><strong>CEP:</strong> {professor.cep}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default ProfessorDetails;
