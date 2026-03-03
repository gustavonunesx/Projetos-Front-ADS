import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfessorList from "./components/ProfessorList";
import ProfessorForm from "./components/ProfessorForm";
import ProfessorDetails from "./components/ProfessorDetails";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfessorList />} />
        <Route path="/novo" element={<ProfessorForm />} />
        <Route path="/editar/:cpf" element={<ProfessorForm />} />
        <Route path="/detalhes/:cpf" element={<ProfessorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
