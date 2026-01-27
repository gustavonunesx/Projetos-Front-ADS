export default function App(){

  const deleteUser = async () => {
    try {
      const response  = await fetch("http://localhost:3000/Users/a8f7", 
        {
          method: "DELETE"
         });

       if(response.status !== 404){
        console.log("Usuario deletado!")
       }else{
        console.log("usuario nao enco0ntrado");
       }


    } catch (error) {
      console.error("Erro ao deletar", error);
    }
  }
  return <button onClick={deleteUser}>deletar</button>
}