import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormVet from "./components/FormVet";

function App() {
  return (
    <Container>
      <h1 className="my-5 display-3 text-center">
        Administrador pacientes de veterinaria
      </h1>
      <FormVet/>
    </Container>
  );
}

export default App;
