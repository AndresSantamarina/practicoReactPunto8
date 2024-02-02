import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Container className="text-center mainPage">
        <Titulo/>
        <Formulario/>
      </Container>
    </>
  );
}

export default App;
