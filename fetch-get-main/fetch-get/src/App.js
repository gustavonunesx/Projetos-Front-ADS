export default function App(){

  const getUser = async () => {
    try {
      const response  = await fetch("http://localhost:3000/Users");

         const data = await response.json();
         console.log("Busca completa!", data);


    } catch (error) {
      console.error("Erro ao buscar", error);
    }
  }
  return <button onClick={getUser}>buscar</button>
}