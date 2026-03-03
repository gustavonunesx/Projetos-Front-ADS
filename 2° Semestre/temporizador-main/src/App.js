import React, { useState, useEffect } from 'react'; // Importa React e Hooks
import './App.css'; // Importa os estilos

function App() {
  return (
    <div className="container">
      {/* Componente que mostra a mensagem temporizada */}
      <AvisoTemporizado />

      {/* Botão para recarregar a página e reiniciar o aviso */}
      <button 
        className="botao-recarregar"
        onClick={() => window.location.reload()} // Recarrega a página inteira
      >
        Recarregar Página
      </button>
    </div>
  );
}

// Componente que exibe o aviso "Bem-vindo!" temporariamente
function AvisoTemporizado() {
  const [visivel, setVisivel] = useState(true); // Estado para controlar se a mensagem aparece

  useEffect(() => {
    // Cria um temporizador de 3 segundos
    const timer = setTimeout(() => {
      setVisivel(false); // Após 3s, oculta a mensagem
    }, 3000);

    // Função de limpeza: se o componente for desmontado antes dos 3s, cancela o temporizador
    return () => clearTimeout(timer);
  }, []); // Dependência vazia: executa apenas na montagem do componente

  if (!visivel) return null; // Se visivel for false, não renderiza nada

  // Mensagem visível
  return <div className="aviso">Bem-vindo!</div>;
}

export default App;
