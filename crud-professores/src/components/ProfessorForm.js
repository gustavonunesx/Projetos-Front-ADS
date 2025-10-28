import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProfessorForm() {
  const [professor, setProfessor] = useState({
    nome: "",
    cpf: "",
    matricula: "",
    formacao: "",
    email: "",
    telefone: "",
    logradouro: "",
    numero: "",
    complemento: "",
    cidade: "",
    cep: "",
    uf: "",
  });

  const navigate = useNavigate();
  const { cpf } = useParams();

  useEffect(() => {
    if (cpf) {
      const data = JSON.parse(localStorage.getItem("professores")) || [];
      const prof = data.find((p) => p.cpf === cpf);
      if (prof) setProfessor(prof);
    }
  }, [cpf]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessor({ ...professor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("professores")) || [];

    if (cpf) {
      data = data.map((p) => (p.cpf === cpf ? professor : p));
    } else {
      data.push(professor);
    }

    localStorage.setItem("professores", JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="container">
      <h2>{cpf ? "Editar Professor" : "Cadastrar Professor"}</h2>
      <form onSubmit={handleSubmit}>
        <h3>Dados Pessoais/Profissionais</h3>
        <input
          name="nome"
          placeholder="Nome Completo"
          value={professor.nome}
          onChange={handleChange}
          required
        />
        <input
          name="cpf"
          placeholder="CPF"
          value={professor.cpf}
          onChange={handleChange}
          required
          disabled={!!cpf}
        />
        <input
          name="matricula"
          placeholder="Matrícula"
          value={professor.matricula}
          onChange={handleChange}
        />
        <select
          name="formacao"
          value={professor.formacao}
          onChange={handleChange}
        >
          <option value="">Selecione a formação</option>
          <option value="Matemática">Matemática</option>
          <option value="Português">Português</option>
          <option value="Informática">Informática</option>
          <option value="Física">Física</option>
        </select>

        <h3>Contatos</h3>
        <input
          name="email"
          type="email"
          placeholder="Email Institucional"
          value={professor.email}
          onChange={handleChange}
        />
        <input
          name="telefone"
          placeholder="Telefone Celular"
          value={professor.telefone}
          onChange={handleChange}
        />

        <h3>Endereço Residencial</h3>
        <input
          name="logradouro"
          placeholder="Logradouro"
          value={professor.logradouro}
          onChange={handleChange}
        />
        <input
          name="numero"
          placeholder="Número"
          value={professor.numero}
          onChange={handleChange}
        />
        <input
          name="complemento"
          placeholder="Complemento"
          value={professor.complemento}
          onChange={handleChange}
        />
        <input
          name="cidade"
          placeholder="Cidade"
          value={professor.cidade}
          onChange={handleChange}
        />
        <input
          name="cep"
          placeholder="CEP"
          value={professor.cep}
          onChange={handleChange}
        />
        <select name="uf" value={professor.uf} onChange={handleChange}>
          <option value="">UF</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
          <option value="RS">RS</option>
          <option value="BA">BA</option>
        </select>

        <button type="submit">{cpf ? "Atualizar" : "Cadastrar"}</button>
      </form>
    </div>
  );
}

export default ProfessorForm;
