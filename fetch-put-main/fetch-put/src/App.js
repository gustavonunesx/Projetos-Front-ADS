export default function App(){

  const updateUser = async () => {
    try {
      const response  = await fetch("http://localhost:3000/Users/a8f7", 
        {
          method: "PUT",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({"name": "Gustavooooo", "email" : "g111u.@gmail.com"})
         });

         const data = await response.json();
         console.log("Usuario atualizado!", data);


    } catch (error) {
      console.error("Erro ao atualizar", error);
    }
  }
  return <button onClick={updateUser}>atualizar</button>
}