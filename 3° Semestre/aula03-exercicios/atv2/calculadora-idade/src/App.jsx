import { useState } from "react";

function App() {

  const [ano, setAno] = useState("");
  const [idade, setIdade] = useState(null);

  function calcularIdade() {

    if (ano === "") {
      alert("Digite um ano válido");
      return;
    }

    const anoNumero = parseInt(ano, 10);

    const anoAtual = new Date().getFullYear();

    const idadeCalculada = anoAtual - anoNumero;

    setIdade(idadeCalculada);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Calculadora de Idade</h1>

      <input
        type="number"
        placeholder="Digite seu ano de nascimento"
        value={ano}
        onChange={(e) => setAno(e.target.value)}
      />

      <br /><br />

      <button onClick={calcularIdade}>
        Calcular Idade
      </button>

      {idade !== null && (
        <h2>Sua idade é: {idade} anos</h2>
      )}

    </div>
  );
}

export default App;