import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const NuevoProducto = ({ onSave }) => {
  const [producto, setProducto] = useState({
    nombre: "",
    codigo: "",
    descripcion: "",
    precio: 0,
    costo: 0,
    stock: 0,
    iva: 21,
    categoria: "",
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productoFinal = {
      ...producto,
      precio: Number(producto.precio),
      costo: Number(producto.costo),
      stock: Number(producto.stock),
      iva: Number(producto.iva),
    };

    console.log("Producto creado:", productoFinal);

    if (onSave) {
      onSave(productoFinal);
    }

    alert("Producto creado (ver consola)");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Datos del Producto</h4>

      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Código</Form.Label>
            <Form.Control
              name="codigo"
              value={producto.codigo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              name="categoria"
              value={producto.categoria}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={12}>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Precio de Venta</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>Costo</Form.Label>
            <Form.Control
              type="number"
              name="costo"
              value={producto.costo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={producto.stock}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group>
            <Form.Label>IVA (%)</Form.Label>
            <Form.Select
              name="iva"
              value={producto.iva}
              onChange={handleChange}
            >
              <option value={21}>21%</option>
              <option value={10.5}>10.5%</option>
              <option value={27}>27%</option>
              <option value={0}>0%</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" variant="success" className="mt-4">
        Guardar Producto
      </Button>
    </Form>
  );
};

export default NuevoProducto;