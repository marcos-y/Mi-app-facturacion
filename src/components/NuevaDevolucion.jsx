import { useState } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";

const DevolucionModalContent = ({ items, devolucionInfo, onConfirm, onCancel }) => {

    const initialForm = {
        nroDevolucion: "",
        fecha: "",
        estado: "",
        cliente: "",
        documento: "",
        nroFactura: "",
        totalFactura: "",
        estadoReintegro: ""
    };

    const [form, setForm] = useState(devolucionInfo || initialForm);

    const [devoluciones, setDevoluciones] = useState(
        items.map(item => ({
            ...item,
            cantidadDevolver: 0,
            motivo: ""
        }))
    );

    const handleFormChange = (field, value) => {
        setForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCantidadChange = (id, value) => {
        setDevoluciones(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, cantidadDevolver: Number(value) }
                    : item
            )
        );
    };

    const handleMotivoChange = (id, value) => {
        setDevoluciones(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, motivo: value }
                    : item
            )
        );
    };

    const calcularTotalDevolucion = () => {
        return devoluciones.reduce((acc, item) => {
            if (item.cantidadDevolver > 0 && item.precio) {
                return acc + item.cantidadDevolver * item.precio;
            }
            return acc;
        }, 0);
    };

    const handleConfirm = () => {
        const itemsADevolver = devoluciones.filter(
            item => item.cantidadDevolver > 0
        );

        onConfirm({
            cabecera: form,
            detalle: itemsADevolver,
            total: calcularTotalDevolucion()
        });
    };

    return (
        <div>
      <h4 className="mb-3">Devolución de mercadería</h4>

      {/* 🧾 FORMULARIO */}
      <Form>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Nro Devolución</Form.Label>
              <Form.Control
                type="text"
                value={form.nroDevolucion || ""}
                onChange={e =>
                  handleFormChange("nroDevolucion", e.target.value)
                }
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={form.fecha || ""}
                onChange={e => handleFormChange("fecha", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Select
                value={form.estado || ""}
                onChange={e => handleFormChange("estado", e.target.value)}
              >
                <option value="">Seleccionar</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Procesado">Procesado</option>
                <option value="Cancelado">Cancelado</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                type="text"
                value={form.cliente || ""}
                onChange={e => handleFormChange("cliente", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type="text"
                value={form.documento || ""}
                onChange={e => handleFormChange("documento", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Nro Factura</Form.Label>
              <Form.Control
                type="text"
                value={form.nroFactura || ""}
                onChange={e => handleFormChange("nroFactura", e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Total Factura</Form.Label>
              <Form.Control
                type="number"
                value={form.totalFactura || ""}
                onChange={e =>
                  handleFormChange("totalFactura", e.target.value)
                }
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group>
              <Form.Label>Estado Reintegro</Form.Label>
              <Form.Select
                value={form.estadoReintegro || ""}
                onChange={e =>
                  handleFormChange("estadoReintegro", e.target.value)
                }
              >
                <option value="">Seleccionar</option>
                <option value="No reintegrado">No reintegrado</option>
                <option value="Parcial">Parcial</option>
                <option value="Completo">Completo</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* 📦 DETALLE */}
      <Table striped bordered hover size="sm" className="mt-3">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cant. vendida</th>
            <th>Cant. devolver</th>
            <th>Precio</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {devoluciones.map(item => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>
                <Form.Control
                  type="number"
                  min="0"
                  max={item.cantidad}
                  value={item.cantidadDevolver}
                  onChange={e =>
                    handleCantidadChange(item.id, e.target.value)
                  }
                />
              </td>
              <td>{item.precio || "-"}</td>
              <td>
                <Form.Control
                  type="text"
                  value={item.motivo}
                  onChange={e =>
                    handleMotivoChange(item.id, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 💰 TOTAL */}
      <h5 className="mt-3">
        Total devolución: {calcularTotalDevolucion()}
      </h5>

      {/* BOTONES */}
      <div className="d-flex justify-content-end gap-2 mt-3">
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirmar devolución
        </Button>
      </div>
    </div>
  );
};

export default DevolucionModalContent;