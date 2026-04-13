import React, { useState } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

const NuevaFactura = () => {
    
  const [cliente, setCliente] = useState({
    nombre: "",
    documento: "",
    direccion: "",
  });

  const [factura, setFactura] = useState({
    fecha: "",
    tipo: "A",
    numero: "",
  });

  const [items, setItems] = useState([]);
  const [nuevoItem, setNuevoItem] = useState({
    descripcion: "",
    cantidad: 1,
    precio: 0,
  });

  const handleClienteChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleFacturaChange = (e) => {
    setFactura({ ...factura, [e.target.name]: e.target.value });
  };

  const handleItemChange = (e) => {
    setNuevoItem({ ...nuevoItem, [e.target.name]: e.target.value });
  };

  const agregarItem = () => {
    setItems([...items, nuevoItem]);
    setNuevoItem({ descripcion: "", cantidad: 1, precio: 0 });
  };

  const calcularTotal = () => {
    return items.reduce(
      (acc, item) => acc + item.cantidad * item.precio,
      0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const facturaCompleta = {
      cliente,
      factura,
      items,
      total: calcularTotal(),
    };

    console.log("Factura generada:", facturaCompleta);
    alert("Factura creada (ver consola)");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Datos del Cliente</h3>
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              value={cliente.nombre}
              onChange={handleClienteChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Documento</Form.Label>
            <Form.Control
              name="documento"
              value={cliente.documento}
              onChange={handleClienteChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              name="direccion"
              value={cliente.direccion}
              onChange={handleClienteChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <h3 className="mt-4">Datos de la Factura</h3>
      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="fecha"
              value={factura.fecha}
              onChange={handleFacturaChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              name="tipo"
              value={factura.tipo}
              onChange={handleFacturaChange}
            >
              <option value="A">Factura A</option>
              <option value="B">Factura B</option>
              <option value="C">Factura C</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Número</Form.Label>
            <Form.Control
              name="numero"
              value={factura.numero}
              onChange={handleFacturaChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <h3 className="mt-4">Ítems</h3>
      <Row>
        <Col md={5}>
          <Form.Control
            placeholder="Descripción"
            name="descripcion"
            value={nuevoItem.descripcion}
            onChange={handleItemChange}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            type="number"
            name="cantidad"
            value={nuevoItem.cantidad}
            onChange={handleItemChange}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="number"
            name="precio"
            value={nuevoItem.precio}
            onChange={handleItemChange}
          />
        </Col>
        <Col md={2}>
          <Button onClick={agregarItem}>Agregar</Button>
        </Col>
      </Row>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.descripcion}</td>
              <td>{item.cantidad}</td>
              <td>{item.precio}</td>
              <td>{item.cantidad * item.precio}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Total: ${calcularTotal()}</h4>

      <Button type="submit" variant="success" className="mt-3">
        Crear Factura
      </Button>
    </Form>
  );
};

export default NuevaFactura;