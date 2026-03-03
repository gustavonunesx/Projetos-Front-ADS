import { useState, useEffect } from "react";

function Relogio() {

  const [hora, setHora] = useState(new Date());


  useEffect(() => {

    const idIntervalo = setInterval(() => {
      console.log("Atualizando o Relógio");
      setHora(new Date());
    }, 1000);


    return () => {
      clearInterval(idIntervalo);
      console.log("Relógio Parado. Interval limpo!");
    };
  }, []);

  return (
    <div>
      <h2>Relógio Digital</h2>

      <p>A hora atual é: {hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default Relogio;
