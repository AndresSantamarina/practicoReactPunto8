import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  const [dato, setDato] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, dni, email } = dato;

    if (nombre && apellido && dni && email) {
      alert("Datos enviados correctamente");
    } else {
      alert("Completar los datos que faltan");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="d-flex">Nombre</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Ingrese su nombre"
          minLength={3}
          maxLength={25}
          required
          name="nombre"
          value={dato.nombre}
          onChange={handleChange}
        />
        <Form.Label className="d-flex">Apellido</Form.Label>
        <Form.Control
          className="mb-2"
          type="text"
          placeholder="Ingrese su apellido"
          minLength={3}
          maxLength={25}
          required
          name="apellido"
          value={dato.apellido}
          onChange={handleChange}
        />
        <Form.Label className="d-flex">DNI</Form.Label>
        <Form.Control
          className="mb-2"
          type="number"
          placeholder="Ingrese su DNI"
          minLength={8}
          maxLength={8}
          required
          name="dni"
          value={dato.dni}
          onChange={handleChange}
        />
        <Form.Label className="d-flex">Email</Form.Label>
        <Form.Control
          className="mb-2"
          type="email"
          placeholder="Ingrese su Email"
          minLength={8}
          maxLength={30}
          required
          name="email"
          value={dato.email}
          onChange={handleChange}
        />
        <Button className="my-2" type="submit">
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
