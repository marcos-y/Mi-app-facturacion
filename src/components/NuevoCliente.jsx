import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const NuevoCliente = ({ onSave }) => {
  const [cliente, setCliente] = useState({
    nombre: "",
    tipoDocumento: "DNI",
    documento: "",
    email: "",
    telefono: "",
    direccion: "",
    condicionIVA: "Consumidor Final",
  });

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Cliente creado:", cliente);

    if (onSave) {
      onSave(cliente);
    }

    alert("Cliente creado (ver consola)");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Datos del Cliente</h4>

      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Nombre / Razón Social</Form.Label>
            <Form.Control
              name="nombre"
              value={cliente.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Tipo Doc</Form.Label>
            <Form.Select
              name="tipoDocumento"
              value={cliente.tipoDocumento}
              onChange={handleChange}
            >
              <option value="DNI">DNI</option>
              <option value="CUIT">CUIT</option>
              <option value="CUIL">CUIL</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Número</Form.Label>
            <Form.Control
              name="documento"
              value={cliente.documento}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={cliente.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              name="telefono"
              value={cliente.telefono}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={8}>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="direccion"
              value={cliente.direccion}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>Condición IVA</Form.Label>
            <Form.Select
              name="condicionIVA"
              value={cliente.condicionIVA}
              onChange={handleChange}
            >
              <option>Consumidor Final</option>
              <option>Responsable Inscripto</option>
              <option>Monotributista</option>
              <option>Exento</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" variant="primary" className="mt-4">
        Guardar Cliente
      </Button>
    </Form>
  );
};

export default NuevoCliente;