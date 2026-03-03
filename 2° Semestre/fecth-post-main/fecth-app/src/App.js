export default function App(){

  const addUser = async () => {
    try {
      const response  = await fetch("http://localhost:3000/Users", 
        {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({"name": "Gustavo", "email" : "gu.@gmail.com"})
         });

         const data = await response.json();
         console.log("Usuario cadastrado!", data);


    } catch (error) {
      console.error("Erro ao cadastrar", error);
    }
  }
  return <button onClick={addUser}>Adicionar</button>
}